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
lt.plugins.rubocop.cop_marker = (function cop_marker(cops){var e__8120__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rubocop-gutter-marker","div.rubocop-gutter-marker",2137638568),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cop-gutter-dot","div.cop-gutter-dot",1361418223),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"width: 8px; height: 10px; background: red;"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cops","div.cops",1323665950),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",1123684643),"display:none;width: 310px; background:var(bg); padding: 5px; left: 10px; top: -1px; position: absolute;",new cljs.core.Keyword(null,"class","class",1108647146),"cm-variable"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.map.call(null,(function (c){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"padding-bottom: 3px; display:block"], null),[cljs.core.str("- "),cljs.core.str(c)].join('')], null);
}),cops)], null)], null)], null));var seq__8265_8277 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),(function (e){var temp__4090__auto__ = lt.util.dom.next.call(null,e.target);if(cljs.core.truth_(temp__4090__auto__))
{var target = temp__4090__auto__;return lt.util.dom.set_css.call(null,target,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",2685668404),new cljs.core.Keyword(null,"block","block",1107736575)], null));
} else
{return null;
}
}),new cljs.core.Keyword(null,"mouseout","mouseout",894298107),(function (e){var temp__4090__auto__ = lt.util.dom.next.call(null,e.target);if(cljs.core.truth_(temp__4090__auto__))
{var target = temp__4090__auto__;return lt.util.dom.set_css.call(null,target,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",2685668404),new cljs.core.Keyword(null,"none","none",1017291434)], null));
} else
{return null;
}
})], null)));var chunk__8266_8278 = null;var count__8267_8279 = 0;var i__8268_8280 = 0;while(true){
if((i__8268_8280 < count__8267_8279))
{var vec__8269_8281 = cljs.core._nth.call(null,chunk__8266_8278,i__8268_8280);var ev__8121__auto___8282 = cljs.core.nth.call(null,vec__8269_8281,0,null);var func__8122__auto___8283 = cljs.core.nth.call(null,vec__8269_8281,1,null);lt.util.dom.on.call(null,e__8120__auto__,ev__8121__auto___8282,func__8122__auto___8283);
{
var G__8284 = seq__8265_8277;
var G__8285 = chunk__8266_8278;
var G__8286 = count__8267_8279;
var G__8287 = (i__8268_8280 + 1);
seq__8265_8277 = G__8284;
chunk__8266_8278 = G__8285;
count__8267_8279 = G__8286;
i__8268_8280 = G__8287;
continue;
}
} else
{var temp__4092__auto___8288 = cljs.core.seq.call(null,seq__8265_8277);if(temp__4092__auto___8288)
{var seq__8265_8289__$1 = temp__4092__auto___8288;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8265_8289__$1))
{var c__7506__auto___8290 = cljs.core.chunk_first.call(null,seq__8265_8289__$1);{
var G__8291 = cljs.core.chunk_rest.call(null,seq__8265_8289__$1);
var G__8292 = c__7506__auto___8290;
var G__8293 = cljs.core.count.call(null,c__7506__auto___8290);
var G__8294 = 0;
seq__8265_8277 = G__8291;
chunk__8266_8278 = G__8292;
count__8267_8279 = G__8293;
i__8268_8280 = G__8294;
continue;
}
} else
{var vec__8270_8295 = cljs.core.first.call(null,seq__8265_8289__$1);var ev__8121__auto___8296 = cljs.core.nth.call(null,vec__8270_8295,0,null);var func__8122__auto___8297 = cljs.core.nth.call(null,vec__8270_8295,1,null);lt.util.dom.on.call(null,e__8120__auto__,ev__8121__auto___8296,func__8122__auto___8297);
{
var G__8298 = cljs.core.next.call(null,seq__8265_8289__$1);
var G__8299 = null;
var G__8300 = 0;
var G__8301 = 0;
seq__8265_8277 = G__8298;
chunk__8266_8278 = G__8299;
count__8267_8279 = G__8300;
i__8268_8280 = G__8301;
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
lt.plugins.rubocop.violations_for_file = (function violations_for_file(json_str){var parsed = cljs.core.js__GT_clj.call(null,JSON.parse.call(null,json_str));var file_info = cljs.core.first.call(null,cljs.core.get.call(null,parsed,"files"));var offence_key = ((cljs.core.contains_QMARK_.call(null,file_info,"offenses"))?"offenses":"offences");return cljs.core.get.call(null,file_info,offence_key);
});
lt.plugins.rubocop.offence_line_map = (function offence_line_map(violations){return cljs.core.map.call(null,(function (violation){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),cljs.core.get.call(null,cljs.core.get.call(null,violation,"location"),"line"),new cljs.core.Keyword(null,"message","message",1968829305),cljs.core.get.call(null,violation,"message")], null);
}),violations);
});
lt.plugins.rubocop.offences = lt.objs.thread.thread_STAR_.call(null,(function tfun8271(){var orig__8193__auto__ = argsArray(arguments);var msg__8194__auto__ = orig__8193__auto__.shift();var args__8195__auto__ = orig__8193__auto__.map(cljs.reader.read_string);var raise = ((function (orig__8193__auto__,msg__8194__auto__,args__8195__auto__){
return (function (obj__8196__auto__,k__8197__auto__,v__8198__auto__){return _send(obj__8196__auto__,k__8197__auto__,cljs.core.pr_str.call(null,v__8198__auto__),"clj");
});})(orig__8193__auto__,msg__8194__auto__,args__8195__auto__))
;args__8195__auto__.unshift(msg__8194__auto__.obj);
return (function (this$,cwd,path,rubocop_path){return require("child_process").exec([cljs.core.str(rubocop_path),cljs.core.str(" --format json '"),cljs.core.str(path),cljs.core.str("'")].join(''),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["cwd",cwd], null)),(function (err,stdout,stderr){return raise.call(null,this$,new cljs.core.Keyword(null,"cop-finished","cop-finished",2370644493),stdout);
}));
}).apply(null,args__8195__auto__);
}));
lt.plugins.rubocop.setup_gutter = (function setup_gutter(this$){var ed = lt.objs.editor.__GT_cm_ed.call(null,this$);var current_gutters = cljs.core.set.call(null,cljs.core.js__GT_clj.call(null,lt.objs.editor.option.call(null,this$,"gutters")));lt.objs.editor.set_options.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutters","gutters",1397798442),cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,current_gutters,"cop-gutter"))], null));
return lt.object.add_tags.call(null,this$,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.rubocop","git-blame-on","lt.plugins.rubocop/git-blame-on",1600034954),null], null), null));
});
lt.plugins.rubocop.__BEH__cop_finished = (function __BEH__cop_finished(this$,cops){var ed = lt.objs.editor.__GT_cm_ed.call(null,this$);var line_map = lt.plugins.rubocop.offence_line_map.call(null,lt.plugins.rubocop.violations_for_file.call(null,cops));var cops_by_line = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"line","line",1017226086),line_map);var gutter_markers = cljs.core.map.call(null,((function (ed,line_map,cops_by_line){
return (function (p__8275){var vec__8276 = p__8275;var line = cljs.core.nth.call(null,vec__8276,0,null);var cops__$1 = cljs.core.nth.call(null,vec__8276,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"mark","mark",1017248319),lt.plugins.rubocop.cop_marker.call(null,cljs.core.map.call(null,((function (vec__8276,line,cops__$1,ed,line_map,cops_by_line){
return (function (p1__8272_SHARP_){return new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(p1__8272_SHARP_);
});})(vec__8276,line,cops__$1,ed,line_map,cops_by_line))
,cops__$1))], null);
});})(ed,line_map,cops_by_line))
,cops_by_line);lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.rubocop","cops-by-line","lt.plugins.rubocop/cops-by-line",3394928382),cops_by_line], null));
return lt.objs.editor.operation.call(null,ed,(function (){ed.clearGutter("cop-gutter");
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
{var temp__4090__auto___8302 = (function (){var or__6764__auto__ = new cljs.core.Keyword("lt.plugins.rubocop","cops-by-line","lt.plugins.rubocop/cops-by-line",3394928382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));if(cljs.core.truth_(or__6764__auto__))
{return or__6764__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})().call(null,(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(current_posn) + 1));if(cljs.core.truth_(temp__4090__auto___8302))
{var cops_8303 = temp__4090__auto___8302;lt.objs.notifos.msg_STAR_.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cops_8303)));
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
lt.plugins.rubocop.__BEH__run_file = (function __BEH__run_file(this$){var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var rubocop_path = lt.plugins.rubocop.shell.which("rubocop");if(cljs.core.not.call(null,lt.object.has_tag_QMARK_.call(null,this$,new cljs.core.Keyword("lt.plugins.rubocop","rubocop-on","lt.plugins.rubocop/rubocop-on",582714954))))
{lt.plugins.rubocop.setup_gutter.call(null,this$);
} else
{}
if(cljs.core.truth_(rubocop_path))
{return lt.plugins.rubocop.offences.call(null,this$,lt.objs.files.parent.call(null,path),path,rubocop_path);
} else
{return lt.objs.notifos.msg_STAR_.call(null,"RuboCop not found. Install with `gem install rubocop`.");
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.rubocop","run-file","lt.plugins.rubocop/run-file",3793230640),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.rubocop.__BEH__run_file,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.rubocop","run-file","lt.plugins.rubocop/run-file",3793230640),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.rubocop","run-cop","lt.plugins.rubocop/run-cop",3484246772),new cljs.core.Keyword(null,"desc","desc",1016984067),"RuboCop: Run RuboCop against current file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.objs.editor.pool.last_active.call(null),new cljs.core.Keyword("lt.plugins.rubocop","run-file","lt.plugins.rubocop/run-file",3793230640));
})], null));
}

//# sourceMappingURL=rubocop_compiled.js.map