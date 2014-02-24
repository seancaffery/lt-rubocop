(ns lt.plugins.rubocop
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.files :as files]
            [lt.objs.proc :as proc])
  (:require-macros [lt.macros :refer [defui behavior background]]))

(def exec (.-exec (js/require "child_process")))

(defn violations-for-file [json-str]
  (let [parsed (js->clj (JSON/parse json-str))]
    (-> parsed (get "files") first (get "offences") )))

(defn offence-line-map [violations]
  (map (fn [violation]
         {:line (-> violation (get "location") (get "line")) :message (get violation "message")})
       violations))

(def offences
  (background (fn [this cwd path]
                (.exec (js/require "child_process")
                       (str "/Users/seancaffery/.rbenv/shims/rubocop --format json '" path "'")
                       (clj->js {"cwd" cwd})
                       (fn [err stdout stderr]
                          (raise this :cop-finished stdout)
                        )))))

(behavior ::cop-finished
          :triggers #{:cop-finished}
          :reaction (fn [this hints]
                      (.log js/console #js ["zomg doing" (first (offence-line-map (violations-for-file hints)))])
                      ))

(behavior ::run-file
          :triggers #{::run-file}
          :reaction (fn [this]
                      (let [active-ed (pool/last-active)
                            path (-> @active-ed :info :path)]
                      (offences this (files/parent path) path))))

(cmd/command {:command ::run-cop
              :desc "Rubocop: start"
              :exec (fn []
                      (object/raise (pool/last-active) ::run-file))})
