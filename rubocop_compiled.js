if(!lt.util.load.provided_QMARK_('lt.plugins.rubocop')) {
goog.provide('lt.plugins.rubocop');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
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
lt.plugins.rubocop.cop_marker = (function cop_marker(cops){var e__8120__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rubocop-gutter-marker","div.rubocop-gutter-marker",2137638568),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str(" color: blue; background: #ffffff; overflow: hidden")].join(''),new cljs.core.Keyword(null,"title","title",1124275658),clojure.string.join.call(null,"\n",cops)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cop-gutter-dot","div.cop-gutter-dot",1361418223),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"width: 8px; height: 10px; background: red;"], null)], null)], null));var seq__8506_8526 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8507_8527 = null;var count__8508_8528 = 0;var i__8509_8529 = 0;while(true){
if((i__8509_8529 < count__8508_8528))
{var vec__8510_8530 = cljs.core._nth.call(null,chunk__8507_8527,i__8509_8529);var ev__8121__auto___8531 = cljs.core.nth.call(null,vec__8510_8530,0,null);var func__8122__auto___8532 = cljs.core.nth.call(null,vec__8510_8530,1,null);lt.util.dom.on.call(null,e__8120__auto__,ev__8121__auto___8531,func__8122__auto___8532);
{
var G__8533 = seq__8506_8526;
var G__8534 = chunk__8507_8527;
var G__8535 = count__8508_8528;
var G__8536 = (i__8509_8529 + 1);
seq__8506_8526 = G__8533;
chunk__8507_8527 = G__8534;
count__8508_8528 = G__8535;
i__8509_8529 = G__8536;
continue;
}
} else
{var temp__4092__auto___8537 = cljs.core.seq.call(null,seq__8506_8526);if(temp__4092__auto___8537)
{var seq__8506_8538__$1 = temp__4092__auto___8537;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8506_8538__$1))
{var c__7506__auto___8539 = cljs.core.chunk_first.call(null,seq__8506_8538__$1);{
var G__8540 = cljs.core.chunk_rest.call(null,seq__8506_8538__$1);
var G__8541 = c__7506__auto___8539;
var G__8542 = cljs.core.count.call(null,c__7506__auto___8539);
var G__8543 = 0;
seq__8506_8526 = G__8540;
chunk__8507_8527 = G__8541;
count__8508_8528 = G__8542;
i__8509_8529 = G__8543;
continue;
}
} else
{var vec__8511_8544 = cljs.core.first.call(null,seq__8506_8538__$1);var ev__8121__auto___8545 = cljs.core.nth.call(null,vec__8511_8544,0,null);var func__8122__auto___8546 = cljs.core.nth.call(null,vec__8511_8544,1,null);lt.util.dom.on.call(null,e__8120__auto__,ev__8121__auto___8545,func__8122__auto___8546);
{
var G__8547 = cljs.core.next.call(null,seq__8506_8538__$1);
var G__8548 = null;
var G__8549 = 0;
var G__8550 = 0;
seq__8506_8526 = G__8547;
chunk__8507_8527 = G__8548;
count__8508_8528 = G__8549;
i__8509_8529 = G__8550;
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
lt.plugins.rubocop.offences = lt.objs.thread.thread_STAR_.call(null,(function tfun8512(){var orig__8193__auto__ = argsArray(arguments);var msg__8194__auto__ = orig__8193__auto__.shift();var args__8195__auto__ = orig__8193__auto__.map(cljs.reader.read_string);var raise = ((function (orig__8193__auto__,msg__8194__auto__,args__8195__auto__){
return (function (obj__8196__auto__,k__8197__auto__,v__8198__auto__){return _send(obj__8196__auto__,k__8197__auto__,cljs.core.pr_str.call(null,v__8198__auto__),"clj");
});})(orig__8193__auto__,msg__8194__auto__,args__8195__auto__))
;args__8195__auto__.unshift(msg__8194__auto__.obj);
return (function (this$,cwd,path,rubocop_path){return require("child_process").exec([cljs.core.str(rubocop_path),cljs.core.str(" --format json '"),cljs.core.str(path),cljs.core.str("'")].join(''),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["cwd",cwd], null)),(function (err,stdout,stderr){return raise.call(null,this$,new cljs.core.Keyword(null,"cop-finished","cop-finished",2370644493),stdout);
}));
}).apply(null,args__8195__auto__);
}));
lt.plugins.rubocop.clear_gutters = (function clear_gutters(ed){var line_nos = cljs.core.range.call(null,lt.objs.editor.line_count.call(null,ed));return lt.objs.editor.operation.call(null,ed,(function (){var seq__8517 = cljs.core.seq.call(null,line_nos);var chunk__8518 = null;var count__8519 = 0;var i__8520 = 0;while(true){
if((i__8520 < count__8519))
{var idx = cljs.core._nth.call(null,chunk__8518,i__8520);ed.setGutterMarker(idx,"cop-gutter");
{
var G__8551 = seq__8517;
var G__8552 = chunk__8518;
var G__8553 = count__8519;
var G__8554 = (i__8520 + 1);
seq__8517 = G__8551;
chunk__8518 = G__8552;
count__8519 = G__8553;
i__8520 = G__8554;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8517);if(temp__4092__auto__)
{var seq__8517__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8517__$1))
{var c__7506__auto__ = cljs.core.chunk_first.call(null,seq__8517__$1);{
var G__8555 = cljs.core.chunk_rest.call(null,seq__8517__$1);
var G__8556 = c__7506__auto__;
var G__8557 = cljs.core.count.call(null,c__7506__auto__);
var G__8558 = 0;
seq__8517 = G__8555;
chunk__8518 = G__8556;
count__8519 = G__8557;
i__8520 = G__8558;
continue;
}
} else
{var idx = cljs.core.first.call(null,seq__8517__$1);ed.setGutterMarker(idx,"cop-gutter");
{
var G__8559 = cljs.core.next.call(null,seq__8517__$1);
var G__8560 = null;
var G__8561 = 0;
var G__8562 = 0;
seq__8517 = G__8559;
chunk__8518 = G__8560;
count__8519 = G__8561;
i__8520 = G__8562;
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
return (function (p__8524){var vec__8525 = p__8524;var line = cljs.core.nth.call(null,vec__8525,0,null);var cops__$1 = cljs.core.nth.call(null,vec__8525,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"mark","mark",1017248319),lt.plugins.rubocop.cop_marker.call(null,cljs.core.map.call(null,((function (vec__8525,line,cops__$1,ed,current_gutters,gutter_div,line_map,cops_by_line){
return (function (p1__8521_SHARP_){return new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(p1__8521_SHARP_);
});})(vec__8525,line,cops__$1,ed,current_gutters,gutter_div,line_map,cops_by_line))
,cops__$1))], null);
});})(ed,current_gutters,gutter_div,line_map,cops_by_line))
,cops_by_line);lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.rubocop","cops-by-line","lt.plugins.rubocop/cops-by-line",3394928382),cops_by_line], null));
return lt.objs.editor.operation.call(null,ed,(function (){lt.plugins.rubocop.clear_gutters.call(null,ed);
lt.objs.editor.set_options.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutters","gutters",1397798442),cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,current_gutters,"cop-gutter"))], null));
lt.util.dom.set_css.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.cop-gutter","div.cop-gutter",3477276275),gutter_div),new cljs.core.PersistentArrayMap(null, 1, ["width","8px"], null));
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (gutter_marker){return ed.setGutterMarker((new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(gutter_marker) - 1),"cop-gutter",new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(gutter_marker));
}),gutter_markers));
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.rubocop","cop-finished","lt.plugins.rubocop/cop-finished",3306693709),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.rubocop.__BEH__cop_finished,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cop-finished","cop-finished",2370644493),null], null), null));
lt.plugins.rubocop.__BEH__show_cops_under_cursor = (function __BEH__show_cops_under_cursor(editor){var previous_posn = (function (){var or__6764__auto__ = new cljs.core.Keyword("lt.plugins.rubocop","previous-cursor","lt.plugins.rubocop/previous-cursor",612748446).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));if(cljs.core.truth_(or__6764__auto__))
{return or__6764__auto__;
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),0,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null);
}
})();var current_posn = lt.objs.editor.__GT_cursor.call(null,editor);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(previous_posn),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(current_posn)))
{} else
{var temp__4090__auto___8563 = (function (){var or__6764__auto__ = new cljs.core.Keyword("lt.plugins.rubocop","cops-by-line","lt.plugins.rubocop/cops-by-line",3394928382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));if(cljs.core.truth_(or__6764__auto__))
{return or__6764__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})().call(null,(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(current_posn) + 1));if(cljs.core.truth_(temp__4090__auto___8563))
{var cops_8564 = temp__4090__auto___8563;lt.objs.notifos.msg_STAR_.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cops_8564)));
} else
{}
}
return lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.rubocop","previous-cursor","lt.plugins.rubocop/previous-cursor",612748446),current_posn], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.rubocop","show-cops-under-cursor","lt.plugins.rubocop/show-cops-under-cursor",2997406827),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.rubocop.__BEH__show_cops_under_cursor,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move","move",1017261891),null], null), null));
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