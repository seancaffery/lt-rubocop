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
lt.plugins.rubocop.cop_marker = (function cop_marker(cops){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rubocop-gutter-marker","div.rubocop-gutter-marker",2137638568),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cop-gutter-dot","div.cop-gutter-dot",1361418223),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"width: 8px; height: 10px; background: red;"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cops","div.cops",1323665950),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",1123684643),"display:none;width: 310px; background:var(bg); padding: 5px; left: 10px; top: -1px; position: absolute;",new cljs.core.Keyword(null,"class","class",1108647146),"cm-variable"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.map.call(null,(function (c){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"padding-bottom: 3px; display:block"], null),[cljs.core.str("- "),cljs.core.str(c)].join('')], null);
}),cops)], null)], null)], null));var seq__8041_8053 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),((function (e__7755__auto__){
return (function (e){var temp__4090__auto__ = lt.util.dom.next.call(null,e.target);if(cljs.core.truth_(temp__4090__auto__))
{var target = temp__4090__auto__;return lt.util.dom.set_css.call(null,target,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",2685668404),new cljs.core.Keyword(null,"block","block",1107736575)], null));
} else
{return null;
}
});})(e__7755__auto__))
,new cljs.core.Keyword(null,"mouseout","mouseout",894298107),((function (e__7755__auto__){
return (function (e){var temp__4090__auto__ = lt.util.dom.next.call(null,e.target);if(cljs.core.truth_(temp__4090__auto__))
{var target = temp__4090__auto__;return lt.util.dom.set_css.call(null,target,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",2685668404),new cljs.core.Keyword(null,"none","none",1017291434)], null));
} else
{return null;
}
});})(e__7755__auto__))
], null)));var chunk__8042_8054 = null;var count__8043_8055 = 0;var i__8044_8056 = 0;while(true){
if((i__8044_8056 < count__8043_8055))
{var vec__8045_8057 = cljs.core._nth.call(null,chunk__8042_8054,i__8044_8056);var ev__7756__auto___8058 = cljs.core.nth.call(null,vec__8045_8057,0,null);var func__7757__auto___8059 = cljs.core.nth.call(null,vec__8045_8057,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8058,func__7757__auto___8059);
{
var G__8060 = seq__8041_8053;
var G__8061 = chunk__8042_8054;
var G__8062 = count__8043_8055;
var G__8063 = (i__8044_8056 + 1);
seq__8041_8053 = G__8060;
chunk__8042_8054 = G__8061;
count__8043_8055 = G__8062;
i__8044_8056 = G__8063;
continue;
}
} else
{var temp__4092__auto___8064 = cljs.core.seq.call(null,seq__8041_8053);if(temp__4092__auto___8064)
{var seq__8041_8065__$1 = temp__4092__auto___8064;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8041_8065__$1))
{var c__7112__auto___8066 = cljs.core.chunk_first.call(null,seq__8041_8065__$1);{
var G__8067 = cljs.core.chunk_rest.call(null,seq__8041_8065__$1);
var G__8068 = c__7112__auto___8066;
var G__8069 = cljs.core.count.call(null,c__7112__auto___8066);
var G__8070 = 0;
seq__8041_8053 = G__8067;
chunk__8042_8054 = G__8068;
count__8043_8055 = G__8069;
i__8044_8056 = G__8070;
continue;
}
} else
{var vec__8046_8071 = cljs.core.first.call(null,seq__8041_8065__$1);var ev__7756__auto___8072 = cljs.core.nth.call(null,vec__8046_8071,0,null);var func__7757__auto___8073 = cljs.core.nth.call(null,vec__8046_8071,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8072,func__7757__auto___8073);
{
var G__8074 = cljs.core.next.call(null,seq__8041_8065__$1);
var G__8075 = null;
var G__8076 = 0;
var G__8077 = 0;
seq__8041_8053 = G__8074;
chunk__8042_8054 = G__8075;
count__8043_8055 = G__8076;
i__8044_8056 = G__8077;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.rubocop.violations_for_file = (function violations_for_file(json_str){var parsed = cljs.core.js__GT_clj.call(null,JSON.parse.call(null,json_str));var file_info = cljs.core.first.call(null,cljs.core.get.call(null,parsed,"files"));var offence_key = ((cljs.core.contains_QMARK_.call(null,file_info,"offenses"))?"offenses":"offences");return cljs.core.get.call(null,file_info,offence_key);
});
lt.plugins.rubocop.offence_line_map = (function offence_line_map(violations){return cljs.core.map.call(null,(function (violation){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),cljs.core.get.call(null,cljs.core.get.call(null,violation,"location"),"line"),new cljs.core.Keyword(null,"message","message",1968829305),cljs.core.get.call(null,violation,"message")], null);
}),violations);
});
lt.plugins.rubocop.offences = lt.objs.thread.thread_STAR_.call(null,(function tfun8047(){var orig__7828__auto__ = argsArray(arguments);var msg__7829__auto__ = orig__7828__auto__.shift();var args__7830__auto__ = orig__7828__auto__.map(cljs.reader.read_string);var raise = ((function (orig__7828__auto__,msg__7829__auto__,args__7830__auto__){
return (function (obj__7831__auto__,k__7832__auto__,v__7833__auto__){return _send(obj__7831__auto__,k__7832__auto__,cljs.core.pr_str.call(null,v__7833__auto__),"clj");
});})(orig__7828__auto__,msg__7829__auto__,args__7830__auto__))
;args__7830__auto__.unshift(msg__7829__auto__.obj);
return ((function (orig__7828__auto__,msg__7829__auto__,args__7830__auto__,raise){
return (function (this$,cwd,path,rubocop_path){return require("child_process").exec([cljs.core.str(rubocop_path),cljs.core.str(" --format json '"),cljs.core.str(path),cljs.core.str("'")].join(''),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["cwd",cwd], null)),((function (orig__7828__auto__,msg__7829__auto__,args__7830__auto__,raise){
return (function (err,stdout,stderr){return raise.call(null,this$,new cljs.core.Keyword(null,"cop-finished","cop-finished",2370644493),stdout);
});})(orig__7828__auto__,msg__7829__auto__,args__7830__auto__,raise))
);
});})(orig__7828__auto__,msg__7829__auto__,args__7830__auto__,raise))
.apply(null,args__7830__auto__);
}));
lt.plugins.rubocop.setup_gutter = (function setup_gutter(this$){lt.objs.editor.add_gutter.call(null,this$,"cop-gutter",10);
return lt.object.add_tags.call(null,this$,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.rubocop","rubocop-on","lt.plugins.rubocop/rubocop-on",582714954),null], null), null));
});
lt.plugins.rubocop.__BEH__cop_finished = (function __BEH__cop_finished(this$,cops){var ed = lt.objs.editor.__GT_cm_ed.call(null,this$);var line_map = lt.plugins.rubocop.offence_line_map.call(null,lt.plugins.rubocop.violations_for_file.call(null,cops));var cops_by_line = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"line","line",1017226086),line_map);var gutter_markers = cljs.core.map.call(null,((function (ed,line_map,cops_by_line){
return (function (p__8051){var vec__8052 = p__8051;var line = cljs.core.nth.call(null,vec__8052,0,null);var cops__$1 = cljs.core.nth.call(null,vec__8052,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"mark","mark",1017248319),lt.plugins.rubocop.cop_marker.call(null,cljs.core.map.call(null,((function (vec__8052,line,cops__$1,ed,line_map,cops_by_line){
return (function (p1__8048_SHARP_){return new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(p1__8048_SHARP_);
});})(vec__8052,line,cops__$1,ed,line_map,cops_by_line))
,cops__$1))], null);
});})(ed,line_map,cops_by_line))
,cops_by_line);lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.rubocop","cops-by-line","lt.plugins.rubocop/cops-by-line",3394928382),cops_by_line], null));
return lt.objs.editor.operation.call(null,ed,((function (ed,line_map,cops_by_line,gutter_markers){
return (function (){ed.clearGutter("cop-gutter");
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (ed,line_map,cops_by_line,gutter_markers){
return (function (gutter_marker){return ed.setGutterMarker((new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(gutter_marker) - 1),"cop-gutter",new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(gutter_marker));
});})(ed,line_map,cops_by_line,gutter_markers))
,gutter_markers));
});})(ed,line_map,cops_by_line,gutter_markers))
);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.rubocop","cop-finished","lt.plugins.rubocop/cop-finished",3306693709),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.rubocop.__BEH__cop_finished,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cop-finished","cop-finished",2370644493),null], null), null));
lt.plugins.rubocop.__BEH__show_cops_under_cursor = (function __BEH__show_cops_under_cursor(editor){var previous_posn = (function (){var or__6364__auto__ = new cljs.core.Keyword("lt.plugins.rubocop","previous-cursor","lt.plugins.rubocop/previous-cursor",612748446).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),0,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null);
}
})();var current_posn = lt.objs.editor.__GT_cursor.call(null,editor);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(previous_posn),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(current_posn)))
{} else
{var temp__4090__auto___8078 = (function (){var or__6364__auto__ = new cljs.core.Keyword("lt.plugins.rubocop","cops-by-line","lt.plugins.rubocop/cops-by-line",3394928382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})().call(null,(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(current_posn) + 1));if(cljs.core.truth_(temp__4090__auto___8078))
{var cops_8079 = temp__4090__auto___8078;lt.objs.notifos.msg_STAR_.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cops_8079)));
} else
{lt.objs.notifos.msg_STAR_.call(null,"");
}
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