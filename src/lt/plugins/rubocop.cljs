(ns lt.plugins.rubocop
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.editor :as editor]
            [lt.objs.notifos :as notifos]
            [lt.objs.editor.pool :as pool]
            [lt.objs.files :as files]
            [lt.util.load :as load]
            [lt.util.dom :as dom]
            [lt.objs.proc :as proc])
  (:require-macros [lt.macros :refer [defui behavior background]]))

(def shell (load/node-module "shelljs"))

(defui cop-marker [cops]
  [:div.rubocop-gutter-marker
   [:div.cop-gutter-dot
    {:style "width: 8px; height: 10px; background: red;"}]
   [:div.cops
    {:style "display:none;width: 310px; background:var(bg); padding: 5px; left: 10px; top: -1px; position: absolute;"
     :class "cm-variable"}
    [:ul
     (map (fn [c]
            [:li
             {:style "padding-bottom: 3px; display:block"}
             (str "- " c)]) cops)]]]
  :mouseover (fn [e]
               (if-let [target (dom/next (.-target e))]
                 (dom/set-css target {:display :block})))
  :mouseout (fn [e]
               (if-let [target (dom/next (.-target e))]
                 (dom/set-css target {:display :none}))))

(defn violations-for-file [json-str]
  (let [parsed (js->clj (JSON/parse json-str))
        file-info (first (get parsed "files"))
        offence-key (if (contains? file-info "offenses")
                      "offenses"
                      "offences")]
    (get file-info offence-key)))

(defn offence-line-map [violations]
  (map (fn [violation]
         {:line (-> violation (get "location") (get "line")) :message (get violation "message")})
       violations))

(def offences
  (background (fn [this cwd path rubocop-path]
                (.exec (js/require "child_process")
                       (str rubocop-path " --format json '" path "'")
                       (clj->js {"cwd" cwd})
                       (fn [err stdout stderr]
                           (raise this :cop-finished stdout))))))

(defn setup-gutter [this]
  (editor/add-gutter this "cop-gutter" 10)
  (object/add-tags this #{::rubocop-on}))

(behavior ::cop-finished
          :triggers #{:cop-finished}
          :reaction (fn [this cops]
                      (let [ed (editor/->cm-ed this)
                            line-map (offence-line-map (violations-for-file cops))
                            cops-by-line (group-by :line line-map)
                            gutter-markers (map (fn [[line cops]]
                                                  {:line line :mark (cop-marker (map #(:message %) cops))}) cops-by-line)]
                        (object/merge! this {::cops-by-line cops-by-line})
                        (editor/operation ed
                                          (fn []
                                            (.clearGutter ed "cop-gutter")
                                            (doall (map (fn [gutter-marker]
                                                          (.setGutterMarker ed (dec (:line gutter-marker)) "cop-gutter" (:mark gutter-marker)))
                                                            gutter-markers)))))))

(behavior ::show-cops-under-cursor
          :triggers #{:move}
          :reaction (fn [editor]
                      (let [previous-posn (or (::previous-cursor @editor) {:line 0, :ch 0})
                            current-posn (editor/->cursor editor)]

                        (when-not (= (:line previous-posn) (:line current-posn))
                          (if-let [cops ((or (::cops-by-line @editor) {}) (inc (:line current-posn)))]
                            (notifos/msg* (:message (first cops)))))

                        (object/merge! editor {::previous-cursor current-posn}))))

(behavior ::on-save
          :triggers #{:save}
          :desc "RuboCop: Run RuboCop on save"
          :reaction (fn [this]
                      (object/raise this ::run-file)))
(behavior ::on-open
          :triggers #{:object.instant}
          :desc "RuboCop: Run RuboCop on file open"
          :reaction (fn [this]
                      (object/raise this ::run-file)))

(behavior ::run-file
          :triggers #{::run-file}
          :reaction (fn [this]
                      (let [path (-> @this :info :path)
                            rubocop-path (.which shell "rubocop")]
                        (if-not (object/has-tag? this ::rubocop-on)
                          (setup-gutter this))
                        (if rubocop-path
                          (offences this (files/parent path) path rubocop-path)
                          (notifos/msg* "RuboCop not found. Install with `gem install rubocop`.")))))

(cmd/command {:command ::run-cop
              :desc "RuboCop: Run RuboCop against current file"
              :exec (fn []
                      (object/raise (pool/last-active) ::run-file))})
