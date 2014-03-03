if(!lt.util.load.provided_QMARK_('lt.plugins.rubocop')) {
goog.provide('lt.plugins.rubocop');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.objs.proc');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.util.load');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.util.load');
goog.require('lt.objs.proc');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.rubocop.shell = lt.util.load.node_module.call(null,"shelljs");
lt.plugins.rubocop.rubocop_path = lt.plugins.rubocop.shell.which("rubocop");
lt.plugins.rubocop.cop_marker = (function cop_marker(cops){var e__8120__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rubocop-gutter-marker","div.rubocop-gutter-marker",2137638568),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str(" color: blue; background: #ffffff; overflow: hidden")].join(''),new cljs.core.Keyword(null,"title","title",1124275658),clojure.string.join.call(null,"\n",cops)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cop-gutter-dot","div.cop-gutter-dot",1361418223),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"width: 8px; height: 10px; background: red;"], null)], null)], null));var seq__10299_10319 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__10300_10320 = null;var count__10301_10321 = 0;var i__10302_10322 = 0;while(true){
if((i__10302_10322 < count__10301_10321))
{var vec__10303_10323 = cljs.core._nth.call(null,chunk__10300_10320,i__10302_10322);var ev__8121__auto___10324 = cljs.core.nth.call(null,vec__10303_10323,0,null);var func__8122__auto___10325 = cljs.core.nth.call(null,vec__10303_10323,1,null);lt.util.dom.on.call(null,e__8120__auto__,ev__8121__auto___10324,func__8122__auto___10325);
{
var G__10326 = seq__10299_10319;
var G__10327 = chunk__10300_10320;
var G__10328 = count__10301_10321;
var G__10329 = (i__10302_10322 + 1);
seq__10299_10319 = G__10326;
chunk__10300_10320 = G__10327;
count__10301_10321 = G__10328;
i__10302_10322 = G__10329;
continue;
}
} else
{var temp__4092__auto___10330 = cljs.core.seq.call(null,seq__10299_10319);if(temp__4092__auto___10330)
{var seq__10299_10331__$1 = temp__4092__auto___10330;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10299_10331__$1))
{var c__7506__auto___10332 = cljs.core.chunk_first.call(null,seq__10299_10331__$1);{
var G__10333 = cljs.core.chunk_rest.call(null,seq__10299_10331__$1);
var G__10334 = c__7506__auto___10332;
var G__10335 = cljs.core.count.call(null,c__7506__auto___10332);
var G__10336 = 0;
seq__10299_10319 = G__10333;
chunk__10300_10320 = G__10334;
count__10301_10321 = G__10335;
i__10302_10322 = G__10336;
continue;
}
} else
{var vec__10304_10337 = cljs.core.first.call(null,seq__10299_10331__$1);var ev__8121__auto___10338 = cljs.core.nth.call(null,vec__10304_10337,0,null);var func__8122__auto___10339 = cljs.core.nth.call(null,vec__10304_10337,1,null);lt.util.dom.on.call(null,e__8120__auto__,ev__8121__auto___10338,func__8122__auto___10339);
{
var G__10340 = cljs.core.next.call(null,seq__10299_10331__$1);
var G__10341 = null;
var G__10342 = 0;
var G__10343 = 0;
seq__10299_10319 = G__10340;
chunk__10300_10320 = G__10341;
count__10301_10321 = G__10342;
i__10302_10322 = G__10343;
continue;
}
}
} else
{}
}
break;
}
return e__8120__auto__;
});
lt.plugins.rubocop.violations_for_file = (function violations_for_file(json_str){var parsed = cljs.core.js__GT_clj.call(null,JSON.parse.call(null,json_str));return cljs.core.get.call(null,cljs.core.first.call(null,cljs.core.get.call(null,parsed,"files")),"offences");
});
lt.plugins.rubocop.offence_line_map = (function offence_line_map(violations){return cljs.core.map.call(null,(function (violation){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),cljs.core.get.call(null,cljs.core.get.call(null,violation,"location"),"line"),new cljs.core.Keyword(null,"message","message",1968829305),cljs.core.get.call(null,violation,"message")], null);
}),violations);
});
lt.plugins.rubocop.offences = lt.objs.thread.thread_STAR_.call(null,(function tfun10305(){var orig__8193__auto__ = argsArray(arguments);var msg__8194__auto__ = orig__8193__auto__.shift();var args__8195__auto__ = orig__8193__auto__.map(cljs.reader.read_string);var raise = ((function (orig__8193__auto__,msg__8194__auto__,args__8195__auto__){
return (function (obj__8196__auto__,k__8197__auto__,v__8198__auto__){return _send(obj__8196__auto__,k__8197__auto__,cljs.core.pr_str.call(null,v__8198__auto__),"clj");
});})(orig__8193__auto__,msg__8194__auto__,args__8195__auto__))
;args__8195__auto__.unshift(msg__8194__auto__.obj);
return (function (this$,cwd,path,rubocop_path){return require("child_process").exec([cljs.core.str(rubocop_path),cljs.core.str(" --format json '"),cljs.core.str(path),cljs.core.str("'")].join(''),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["cwd",cwd], null)),(function (err,stdout,stderr){return raise.call(null,this$,new cljs.core.Keyword(null,"cop-finished","cop-finished",2370644493),stdout);
}));
}).apply(null,args__8195__auto__);
}));
lt.plugins.rubocop.clear_gutters = (function clear_gutters(ed){var line_nos = cljs.core.range.call(null,lt.objs.editor.line_count.call(null,ed));return lt.objs.editor.operation.call(null,ed,(function (){var seq__10310 = cljs.core.seq.call(null,line_nos);var chunk__10311 = null;var count__10312 = 0;var i__10313 = 0;while(true){
if((i__10313 < count__10312))
{var idx = cljs.core._nth.call(null,chunk__10311,i__10313);ed.setGutterMarker(idx,"cop-gutter");
{
var G__10344 = seq__10310;
var G__10345 = chunk__10311;
var G__10346 = count__10312;
var G__10347 = (i__10313 + 1);
seq__10310 = G__10344;
chunk__10311 = G__10345;
count__10312 = G__10346;
i__10313 = G__10347;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10310);if(temp__4092__auto__)
{var seq__10310__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10310__$1))
{var c__7506__auto__ = cljs.core.chunk_first.call(null,seq__10310__$1);{
var G__10348 = cljs.core.chunk_rest.call(null,seq__10310__$1);
var G__10349 = c__7506__auto__;
var G__10350 = cljs.core.count.call(null,c__7506__auto__);
var G__10351 = 0;
seq__10310 = G__10348;
chunk__10311 = G__10349;
count__10312 = G__10350;
i__10313 = G__10351;
continue;
}
} else
{var idx = cljs.core.first.call(null,seq__10310__$1);ed.setGutterMarker(idx,"cop-gutter");
{
var G__10352 = cljs.core.next.call(null,seq__10310__$1);
var G__10353 = null;
var G__10354 = 0;
var G__10355 = 0;
seq__10310 = G__10352;
chunk__10311 = G__10353;
count__10312 = G__10354;
i__10313 = G__10355;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
});
lt.plugins.rubocop.__BEH__cop_finished = (function __BEH__cop_finished(this$,cops){var ed = lt.objs.editor.__GT_cm_ed.call(null,this$);var current_gutters = cljs.core.set.call(null,cljs.core.js__GT_clj.call(null,lt.objs.editor.option.call(null,this$,"gutters")));var gutter_div = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.CodeMirror-gutters","div.CodeMirror-gutters",1932435974),lt.object.__GT_content.call(null,this$));var line_map = lt.plugins.rubocop.offence_line_map.call(null,lt.plugins.rubocop.violations_for_file.call(null,cops));var cops_by_line = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"line","line",1017226086),line_map);var gutter_markers = cljs.core.map.call(null,((function (ed,current_gutters,gutter_div,line_map,cops_by_line){
return (function (p__10317){var vec__10318 = p__10317;var line = cljs.core.nth.call(null,vec__10318,0,null);var cops__$1 = cljs.core.nth.call(null,vec__10318,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"mark","mark",1017248319),lt.plugins.rubocop.cop_marker.call(null,cljs.core.map.call(null,((function (vec__10318,line,cops__$1,ed,current_gutters,gutter_div,line_map,cops_by_line){
return (function (p1__10314_SHARP_){return new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(p1__10314_SHARP_);
});})(vec__10318,line,cops__$1,ed,current_gutters,gutter_div,line_map,cops_by_line))
,cops__$1))], null);
});})(ed,current_gutters,gutter_div,line_map,cops_by_line))
,cops_by_line);return lt.objs.editor.operation.call(null,ed,(function (){lt.plugins.rubocop.clear_gutters.call(null,ed);
lt.objs.editor.set_options.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutters","gutters",1397798442),cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,current_gutters,"cop-gutter"))], null));
lt.util.dom.set_css.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.cop-gutter","div.cop-gutter",3477276275),gutter_div),new cljs.core.PersistentArrayMap(null, 1, ["width","8px"], null));
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (gutter_marker){return ed.setGutterMarker((new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(gutter_marker) - 1),"cop-gutter",new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(gutter_marker));
}),gutter_markers));
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.rubocop","cop-finished","lt.plugins.rubocop/cop-finished",3306693709),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.rubocop.__BEH__cop_finished,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cop-finished","cop-finished",2370644493),null], null), null));
lt.plugins.rubocop.__BEH__on_save = (function __BEH__on_save(this$){return lt.object.raise.call(null,this$,new cljs.core.Keyword("lt.plugins.rubocop","run-file","lt.plugins.rubocop/run-file",3793230640));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.rubocop","on-save","lt.plugins.rubocop/on-save",1640279645),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.rubocop.__BEH__on_save,new cljs.core.Keyword(null,"desc","desc",1016984067),"RuboCop: Run RuboCop on save",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"save","save",1017427183),null], null), null));
lt.plugins.rubocop.__BEH__on_open = (function __BEH__on_open(this$){return lt.object.raise.call(null,this$,new cljs.core.Keyword("lt.plugins.rubocop","run-file","lt.plugins.rubocop/run-file",3793230640));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.rubocop","on-open","lt.plugins.rubocop/on-open",1640434986),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.rubocop.__BEH__on_open,new cljs.core.Keyword(null,"desc","desc",1016984067),"RuboCop: Run RuboCop on file open",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null));
lt.plugins.rubocop.__BEH__run_file = (function __BEH__run_file(this$){var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));return lt.plugins.rubocop.offences.call(null,this$,lt.objs.files.parent.call(null,path),path,lt.plugins.rubocop.rubocop_path);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.rubocop","run-file","lt.plugins.rubocop/run-file",3793230640),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.rubocop.__BEH__run_file,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.rubocop","run-file","lt.plugins.rubocop/run-file",3793230640),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.rubocop","run-cop","lt.plugins.rubocop/run-cop",3484246772),new cljs.core.Keyword(null,"desc","desc",1016984067),"RuboCop: Run RuboCop against current file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.objs.editor.pool.last_active.call(null),new cljs.core.Keyword("lt.plugins.rubocop","run-file","lt.plugins.rubocop/run-file",3793230640));
})], null));
}

//# sourceMappingURL=rubocop_compiled.js.map