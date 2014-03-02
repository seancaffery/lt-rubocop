(ns lt.plugins.rubocop
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.files :as files]
            [lt.util.load :as load]
            [lt.util.dom :as dom]
            [lt.objs.proc :as proc])
  (:require-macros [lt.macros :refer [defui behavior background]]))

(def shell (load/node-module "shelljs"))

(def rubocop-path (.which shell "rubocop"))

(defui cop-marker [cops]
  [:div.rubocop-gutter-marker
   {:style (str " color: blue; background: #ffffff; overflow: hidden")
    :title (clojure.string/join "\n" cops)}
   [:div.cop-gutter-dot
    {:style "width: 8px; height: 10px; background: red;"}]])

(defn violations-for-file [json-str]
  (let [parsed (js->clj (JSON/parse json-str))]
    (-> parsed (get "files") first (get "offences") )))

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
                          (raise this :cop-finished stdout)
                        )))))

(defn clear-gutters [ed]
  (let [line-nos (range (editor/line-count ed))]
    (editor/operation ed (fn []
      (doseq [idx line-nos]
        (.setGutterMarker ed idx "cop-gutter" ))))))

(behavior ::cop-finished
          :triggers #{:cop-finished}
          :reaction (fn [this cops]
                      (let [active-ed (pool/last-active)
                            ed (editor/->cm-ed active-ed)
                            current-gutters (set (js->clj (editor/option active-ed "gutters")))
                            gutter-div (dom/$ :div.CodeMirror-gutters (object/->content active-ed))
                            line-map (offence-line-map (violations-for-file cops))
                            cops-by-line (group-by :line line-map)
                            gutter-markers (map (fn [[line cops]]
                                                  {:line line :mark (cop-marker (map #(:message %) cops))}) cops-by-line)]
                        (editor/operation ed
                                          (fn []
                                            (clear-gutters ed)
                                            (editor/set-options ed {:gutters (clj->js (conj current-gutters "cop-gutter"))})
                                            (dom/set-css (dom/$ :div.cop-gutter gutter-div) {"width" "8px"})
                                            (doall (map (fn [gutter-marker]
                                                          (.setGutterMarker ed (dec (:line gutter-marker)) "cop-gutter" (:mark gutter-marker)))
                                                            gutter-markers)))))))

(behavior ::on-save
          :triggers #{:save}
          :desc "RuboCop: Run RuboCop on save"
          :reaction (fn [this]
                      (object/raise this ::run-file)))

(behavior ::run-file
          :triggers #{::run-file}
          :reaction (fn [this]
                      (let [active-ed (pool/last-active)
                            path (-> @active-ed :info :path)]
                      (offences this (files/parent path) path rubocop-path))))

(cmd/command {:command ::run-cop
              :desc "RuboCop: Run RuboCop against current file"
              :exec (fn []
                      (object/raise (pool/last-active) ::run-file))})
