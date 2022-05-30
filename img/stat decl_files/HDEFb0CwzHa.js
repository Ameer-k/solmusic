if (self.CavalryLogger) { CavalryLogger.start_js(["RwNNmnC"]); }

__d("GroupsCometRelatedGroupsChainingSection_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometRelatedGroupsChainingSection_group",selections:[{alias:null,args:null,concreteType:"CometGroupRelatedGroupsChainingCardRenderer",kind:"LinkedField",name:"comet_related_groups_chaining_card",plural:!1,selections:[{args:null,documentName:"GroupsCometRelatedGroupsChainingSection_group",fragmentName:"GroupsCometRelatedGroupsChainingCardRenderer_cardRenderer",fragmentPropName:"cardRenderer",kind:"ModuleImport"}],storageKey:null}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("CometGroupRootQuery.graphql",["relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"currentSection"},{defaultValue:null,kind:"LocalArgument",name:"groupID"},{defaultValue:null,kind:"LocalArgument",name:"imageMediaType"},{defaultValue:null,kind:"LocalArgument",name:"inviteShortLinkKey"},{defaultValue:!1,kind:"LocalArgument",name:"isChainingRecommendationUnit"},{defaultValue:!1,kind:"LocalArgument",name:"prefetchGroupsHeaderFacepile"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],b=[{kind:"Variable",name:"id",variableName:"groupID"}],c=[{kind:"Literal",name:"supported",value:["GroupsCometCampusLayoutRenderer","GroupAdminHomeLayoutRenderer","GroupNextGenIAHomeLayoutRenderer"]}],d={kind:"InlineFragment",selections:[{args:null,documentName:"CometGroupRootQuery",fragmentName:"GroupsCometCampusLayoutRenderer_viewer_layout_renderer",fragmentPropName:"viewer_layout_renderer",kind:"ModuleImport"}],type:"GroupsCometCampusLayoutRenderer",abstractKey:null},e={kind:"InlineFragment",selections:[{args:null,documentName:"CometGroupRootQuery",fragmentName:"GroupsCometAdminHomeLayoutRenderer_viewer_layout_renderer",fragmentPropName:"viewer_layout_renderer",kind:"ModuleImport"}],type:"GroupAdminHomeLayoutRenderer",abstractKey:null},f={kind:"InlineFragment",selections:[{args:null,documentName:"CometGroupRootQuery",fragmentName:"GroupsCometNextGenIAHomeLayoutRenderer_viewer_layout_renderer",fragmentPropName:"viewer_layout_renderer",kind:"ModuleImport"}],type:"GroupNextGenIAHomeLayoutRenderer",abstractKey:null},g={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometGroupRootQuery",selections:[{kind:"RequiredField",field:{alias:null,args:b,concreteType:"Group",kind:"LinkedField",name:"group",plural:!1,selections:[{alias:null,args:c,concreteType:null,kind:"LinkedField",name:"viewer_layout_renderer",plural:!1,selections:[d,e,f],storageKey:'viewer_layout_renderer(supported:["GroupsCometCampusLayoutRenderer","GroupAdminHomeLayoutRenderer","GroupNextGenIAHomeLayoutRenderer"])'},{args:null,kind:"FragmentSpread",name:"GroupsCometMallContent_group"},{args:null,kind:"FragmentSpread",name:"GroupsCometPresenceGroupShownInGroupsTabLogger_group"}],storageKey:null},action:"THROW",path:"group"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometGroupRootQuery",selections:[{alias:null,args:b,concreteType:"Group",kind:"LinkedField",name:"group",plural:!1,selections:[{alias:null,args:c,concreteType:null,kind:"LinkedField",name:"viewer_layout_renderer",plural:!1,selections:[g,d,e,f],storageKey:'viewer_layout_renderer(supported:["GroupsCometCampusLayoutRenderer","GroupAdminHomeLayoutRenderer","GroupNextGenIAHomeLayoutRenderer"])'},h,{alias:null,args:[{kind:"Literal",name:"supported",value:["XFBGroupsCometTabsNavigationHeaderRenderer","XFBGroupsCometNextGenIACoverlessHeaderRenderer","XFBGroupsCometNextGenIAHeaderRenderer"]}],concreteType:null,kind:"LinkedField",name:"profile_header_renderer",plural:!1,selections:[g,{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometMallHeader_group",fragmentName:"GroupsCometHeaderRenderer_profile_header_renderer",fragmentPropName:"profile_header_renderer",kind:"ModuleImport"}],type:"XFBGroupsCometTabsNavigationHeaderRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometMallHeader_group",fragmentName:"GroupsCometNextGenIAHeaderCoverless_profile_header_renderer",fragmentPropName:"profile_header_renderer",kind:"ModuleImport"}],type:"XFBGroupsCometNextGenIACoverlessHeaderRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometMallHeader_group",fragmentName:"GroupsCometNextGenIAHeader_profile_header_renderer",fragmentPropName:"profile_header_renderer",kind:"ModuleImport"}],type:"XFBGroupsCometNextGenIAHeaderRenderer",abstractKey:null}],storageKey:'profile_header_renderer(supported:["XFBGroupsCometTabsNavigationHeaderRenderer","XFBGroupsCometNextGenIACoverlessHeaderRenderer","XFBGroupsCometNextGenIAHeaderRenderer"])'},{alias:null,args:null,concreteType:"GroupNavigationInfo",kind:"LinkedField",name:"navigation_info",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"destination",plural:!1,selections:[g,h],storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:"5165976460085202",metadata:{},name:"CometGroupRootQuery",operationKind:"query",text:null}}}();a.params.id!=null&&b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("GroupsCometMallContent_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometMallContent_group",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},action:"THROW",path:"id"},{args:null,kind:"FragmentSpread",name:"GroupsCometMallHeader_group"}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("GroupsCometMallHeader_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometMallHeader_group",selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:["XFBGroupsCometTabsNavigationHeaderRenderer","XFBGroupsCometNextGenIACoverlessHeaderRenderer","XFBGroupsCometNextGenIAHeaderRenderer"]}],concreteType:null,kind:"LinkedField",name:"profile_header_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometMallHeader_group",fragmentName:"GroupsCometHeaderRenderer_profile_header_renderer",fragmentPropName:"profile_header_renderer",kind:"ModuleImport"}],type:"XFBGroupsCometTabsNavigationHeaderRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometMallHeader_group",fragmentName:"GroupsCometNextGenIAHeaderCoverless_profile_header_renderer",fragmentPropName:"profile_header_renderer",kind:"ModuleImport"}],type:"XFBGroupsCometNextGenIACoverlessHeaderRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometMallHeader_group",fragmentName:"GroupsCometNextGenIAHeader_profile_header_renderer",fragmentPropName:"profile_header_renderer",kind:"ModuleImport"}],type:"XFBGroupsCometNextGenIAHeaderRenderer",abstractKey:null}],storageKey:'profile_header_renderer(supported:["XFBGroupsCometTabsNavigationHeaderRenderer","XFBGroupsCometNextGenIACoverlessHeaderRenderer","XFBGroupsCometNextGenIAHeaderRenderer"])'}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("GroupsCometRelatedGroupsChainingSection.react",["CometErrorBoundary.react","CometRelay","GroupsCometRelatedGroupsChainingSection_group.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.group$key;a=a.xstyle;e=d("CometRelay").useFragment(h!==void 0?h:h=b("GroupsCometRelatedGroupsChainingSection_group.graphql"),e);e=e.comet_related_groups_chaining_card;return i.jsx(c("CometErrorBoundary.react"),{children:i.jsx(d("CometRelay").MatchContainer,{match:e,props:{xstyle:a}})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometHeaderGlimmer.react",["BaseGlimmer.react","CometCard.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a=a.isBasic;a=a===void 0?!1:a;return h.jsx("div",{className:"sjgh65i0",children:h.jsx(c("CometCard.react"),{background:"white",dropShadow:1,children:h.jsxs("div",{className:"ihqw7lf3 cbu4d94t j83agx80 bp9cbjyn",children:[h.jsx(c("BaseGlimmer.react"),{className:"qddtkmgn c9zspvje ro3rudnx",index:0}),h.jsxs("div",{className:c("stylex").dedupe(a?{"align-items-1":"bp9cbjyn","display-1":"j83agx80","flex-direction-1":"btwxx1t3","justify-content-1":"i1fnvgqd","margin-bottom-1":"sjgh65i0","width-1":"eq70wtua"}:{"display-1":"j83agx80","flex-direction-1":"cbu4d94t","margin-bottom-1":"sjgh65i0","width-1":"mv5q55ly"}),children:[h.jsx(c("BaseGlimmer.react"),{className:"foejyqcu sjgh65i0 orb7ywq3 qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj",index:1}),h.jsx(c("BaseGlimmer.react"),{className:c("stylex").dedupe({"border-top-start-radius-1":"jk6sbkaj","border-top-end-radius-1":"kdgqqoy6","border-bottom-end-radius-1":"ihh4hy1g","border-bottom-start-radius-1":"qttc61fc","height-1":"ed3p1gfi","margin-bottom-1":"q0rvokjs","width-1":"m38g9o4q"},a?{"width-1":"mwd26vqw"}:null),index:2})]}),!a&&h.jsxs("div",{className:"eq70wtua sjgh65i0 i1fnvgqd btwxx1t3 j83agx80 bp9cbjyn",children:[h.jsx(c("BaseGlimmer.react"),{className:"cg1f0npj bsodd3zb qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj",index:3}),h.jsx(c("BaseGlimmer.react"),{className:"cg1f0npj bsodd3zb qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj",index:3}),h.jsx(c("BaseGlimmer.react"),{className:"cg1f0npj bsodd3zb qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj",index:3}),h.jsx(c("BaseGlimmer.react"),{className:"cg1f0npj bsodd3zb qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj",index:3}),h.jsx(c("BaseGlimmer.react"),{className:"cg1f0npj bsodd3zb qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj",index:3}),h.jsx(c("BaseGlimmer.react"),{className:"cg1f0npj bsodd3zb qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj",index:3}),h.jsx(c("BaseGlimmer.react"),{className:"cg1f0npj bsodd3zb qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj",index:3}),h.jsx(c("BaseGlimmer.react"),{className:"cg1f0npj bsodd3zb qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj",index:3})]})]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useGroupsCometCleanupLocalFeedInlineMessages",["CometRelay","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=d("CometRelay").useRelayEnvironment();return function(b){return d("CometRelay").commitLocalUpdate(a,function(a){a=a.get(b);if(!a){c("recoverableViolation")("Group Feed Inline Message: Could not find group edge in store","groups_comet");return}a.setLinkedRecords([],"local_feed_inline_messages")})}}g["default"]=a}),98);
__d("GroupsCometMallContent.react",["CometErrorBoundary.react","CometErrorRoot.react","CometPlaceholder.react","CometRelay","CometStickyHeaderContentArea.react","GroupsCometHeaderGlimmer.react","GroupsCometMallContent_group.graphql","deferredLoadComponent","react","requireDeferredForDisplay"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=c("deferredLoadComponent")(c("requireDeferredForDisplay")("GroupsCometMallHeader.react").__setRef("GroupsCometMallContent.react"));function a(a){var e=a.children,f=a.group$key,g=a.groupShareTrackingParams;a=a.inviteShortLinkKey;f=d("CometRelay").useFragment(h!==void 0?h:h=b("GroupsCometMallContent_group.graphql"),f);var k=f.id;return i.jsx(c("CometStickyHeaderContentArea.react"),{header:i.jsx(c("CometPlaceholder.react"),{fallback:i.jsx(c("GroupsCometHeaderGlimmer.react"),{}),children:i.jsx(j,{group$key:f,groupShareTrackingParams:g,inviteShortLinkKey:a})}),scrollKey:k,children:i.jsx(c("CometErrorBoundary.react"),{fallback:function(){return i.jsx(c("CometErrorRoot.react"),{})},children:i.jsx(c("CometPlaceholder.react"),{fallback:i.jsx("div",{}),children:e})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometGroupMallPageVisitFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743380");c=b("FalcoLoggerInternal").create("comet_group_mall_page_visit",a);e.exports=c}),null);
__d("GroupVisitActionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743662");c=b("FalcoLoggerInternal").create("group_visit_action",a);e.exports=c}),null);
__d("logGroupsCometMallVisitEvent",["Actor","CometGroupMallPageVisitFalcoEvent","CometRouteParams","GroupVisitActionFalcoEvent","react","usePreviousSurfaceForGroupLogging","useRouteReferrer"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useEffect,i=b.useRef;function a(a){var b=d("CometRouteParams").useRouteParams(),e=b.post_id;b=b.story_id;var f=c("useRouteReferrer")(),g=c("usePreviousSurfaceForGroupLogging")(),j=d("Actor").useActor(),k=j[0],l;b!=null?l=String(b):e!=null?l=String(e):l=null;var m=i(l),n=i(g),o=i(f==null?void 0:f.navigationType);h(function(){if(o.current==="popstate")return;c("GroupVisitActionFalcoEvent").log(function(){return{attribution_id:"[]",attribution_id_v2:"[]",current_surface:"group_mall",extra_metadata:m.current==null?{actor_id:k}:{actor_id:k,post_id:m.current},group_id:a,previous_surface:n.current}});c("CometGroupMallPageVisitFalcoEvent").log(function(){return{actor_id:k,group_id:a,post_id:l}})},[k,a,l,m,n,o])}g.useLogGroupsCometMallVisitEvent=a}),98);
__d("GroupsCometMallVisitEventLogger.react",["logGroupsCometMallVisitEvent"],(function(a,b,c,d,e,f,g){"use strict";function a(a){a=a.groupID;d("logGroupsCometMallVisitEvent").useLogGroupsCometMallVisitEvent(a);return null}g["default"]=a}),98);
__d("useGroupsCometCleanUpLocallyComposedPost",["CometRelay","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=d("CometRelay").useRelayEnvironment();return function(b){return d("CometRelay").commitLocalUpdate(a,function(a){a=a.get(b);if(!a){c("recoverableViolation")("GroupsCometHoistAndRegularFeedSection: Could not find group edge in store","groups_comet");return}a.setLinkedRecords([],"locally_composed_feed_edges")})}}g["default"]=a}),98);
__d("CometGroupRoot.react",["CometCoverPhotoEditReducer","CometErrorBoundary.react","CometErrorProjectContext","CometGroupRootQuery$Parameters","CometGroupRootQuery.graphql","CometOnRefresh.react","CometPlaceholder.react","CometRelay","FacebookAppIDs","GroupsCometMallContent.react","GroupsCometMallVisitEventLogger.react","ProfileCometCoverPhotoEditContext","ProfileCometLinkContext","deferredLoadComponent","react","requireDeferred","useGroupsCometCleanUpLocallyComposedPost","useGroupsCometCleanupLocalFeedInlineMessages","useRefetchablePreloadedQuery"],(function(a,b,c,d,e,f,g){"use strict";var h,i=c("deferredLoadComponent")(c("requireDeferred")("GroupsCometPresenceGroupShownInGroupsTabLogger.react").__setRef("CometGroupRoot.react")),j=d("react");e=d("react");var k=e.useMemo,l=e.useReducer;function m(a){var e=a.entryPoints,f=a.props,g=a.queries;a=c("useRefetchablePreloadedQuery")(c("CometGroupRootQuery$Parameters"),g.rootQueryReference,g.rootQueryReference.fetchPolicy);var m=a[0];a=a[1];var n=k(function(){return{groupID:f.routeProps.groupID}},[f.routeProps.groupID]),o=l(d("CometCoverPhotoEditReducer").reducer,d("CometCoverPhotoEditReducer").getInitialState()),p=o[0],q=o[1];o=k(function(){return{dispatch:q,state:p}},[q,p]);var r=c("useGroupsCometCleanUpLocallyComposedPost")(),s=c("useGroupsCometCleanupLocalFeedInlineMessages")();d("CometOnRefresh.react").useOnRefresh(function(){r(f.routeProps.groupID),s(f.routeProps.groupID)});d("CometRelay").useSubscribeToInvalidationState([f.routeProps.groupID],function(){m(g.rootQueryReference.variables)});var t=d("CometRelay").usePreloadedQuery(h!==void 0?h:h=b("CometGroupRootQuery.graphql"),a);t=t.group;var u={app_id:String(c("FacebookAppIDs").WWW_COMET),exp_id:f.routeProps.exp,is_from_share:f.routeProps.ref==="share"};a=j.jsx(c("GroupsCometMallContent.react"),{group$key:t,groupShareTrackingParams:u,inviteShortLinkKey:a.variables.inviteShortLinkKey,children:j.jsx(d("CometRelay").EntryPointContainer,{entryPointReference:e.contentEntryPoint,props:{groupID:f.routeProps.groupID}})});e=t.viewer_layout_renderer;return j.jsxs(j.Fragment,{children:[j.jsx(c("GroupsCometMallVisitEventLogger.react"),{groupID:f.routeProps.groupID}),j.jsx(c("CometErrorBoundary.react"),{children:j.jsx(c("CometPlaceholder.react"),{fallback:null,children:j.jsx(i,{group$key:t})})}),j.jsx(c("ProfileCometLinkContext").Provider,{value:n,children:j.jsx(c("ProfileCometCoverPhotoEditContext").Provider,{value:o,children:e==null?a:j.jsx(c("CometPlaceholder.react"),{fallback:null,children:j.jsx(d("CometRelay").MatchContainer,{match:e,props:{children:a,groupShareTrackingParams:u}})})})})]})}m.displayName=m.name+" [from "+f.id+"]";function a(a){return j.jsx(c("CometErrorProjectContext").Provider,{value:"groups_comet",children:j.jsx(m,babelHelpers["extends"]({},a),a.props.routeProps.groupID)})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometMallHeader.react",["CometRelay","GroupsCometMallHeader_group.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var c=a.group$key,e=a.groupShareTrackingParams;e=e===void 0?null:e;a=a.inviteShortLinkKey;c=d("CometRelay").useFragment(h!==void 0?h:h=b("GroupsCometMallHeader_group.graphql"),c);c=c.profile_header_renderer;return i.jsx(d("CometRelay").MatchContainer,{match:c,props:{groupShareTrackingParams:e,inviteShortLinkKey:a}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometDiscussionLayout.react",["CometResponsiveColumns.react","gkx","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=c("gkx")("1296384"),j={container:{width:"ecyo15nh"},mainColumn:{flexBasis:"gile2uim",maxWidth:"qmfd67dx"},paddingTop:{paddingTop:"discj3wi"},root:{alignItems:"bp9cbjyn",display:"j83agx80",flexDirection:"cbu4d94t",width:"k4urcfbm"},secondaryColumn:{flexBasis:"o387gat7",maxWidth:"qmfd67dx",overflowAnchor:"rek2kq2y"}};function a(a){var b=a.beforeContent,e=a.feed;a=a.secondaryColumn;return h.jsx("div",{className:c("stylex")(j.root),"data-testid":void 0,children:h.jsxs(d("CometResponsiveColumns.react").Container,{containerWidth:"DEFAULT",reverseColumns:!0,xstyle:[j.paddingTop,!i&&j.container],children:[h.jsx(d("CometResponsiveColumns.react").Column,{columnType:i?"FEED":void 0,xstyle:i?void 0:j.mainColumn,children:e}),h.jsx(d("CometResponsiveColumns.react").Column,{columnType:i?"SECONDARY":void 0,xstyle:i?void 0:j.secondaryColumn,children:a}),b&&h.jsx(d("CometResponsiveColumns.react").Column,{columnType:i?"FULL":void 0,children:b})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometDiscussionSecondaryColumnGlimmer.react",["BaseGlimmer.react","CometCard.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(){return h.jsx("div",{className:"sjgh65i0",children:h.jsx(c("CometCard.react"),{background:"white",dropShadow:1,children:h.jsxs("div",{className:"dati1w0a ihqw7lf3 hv4rvrfc discj3wi mosphszs",children:[h.jsx(c("BaseGlimmer.react"),{className:"i8j84fko sjgh65i0 i4qgphn6 hc21y3pz c6w6u7b1 mjfe6jtr h1ci2mql",index:0}),h.jsx(c("BaseGlimmer.react"),{className:"df5l467t sjgh65i0 bsodd3zb mwvzfrdb kxcb68kb kgjeooe1 dwerhba3",index:1}),h.jsx(c("BaseGlimmer.react"),{className:"sjgh65i0 bsodd3zb mwvzfrdb kxcb68kb kgjeooe1 dwerhba3 jfxy0k1q",index:2})]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometDiscussionRoot.Loading.react",["CometFeedStoryGlimmer.react","FeedInlineComposerGlimmer.react","GroupsCometDiscussionLayout.react","GroupsCometDiscussionSecondaryColumnGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a=a.hideFeedStory;a=a===void 0?!1:a;a=a?null:h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"gl3lb2sf"}),h.jsx(c("CometFeedStoryGlimmer.react"),{})]});return h.jsx("div",{className:"k4urcfbm ihqw7lf3",children:h.jsx(c("GroupsCometDiscussionLayout.react"),{feed:h.jsxs(h.Fragment,{children:[h.jsx(c("FeedInlineComposerGlimmer.react"),{}),a]}),secondaryColumn:h.jsx(c("GroupsCometDiscussionSecondaryColumnGlimmer.react"),{})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometGroupDiscussionRoot.react",["CometInteractionSourceContext","CometPagelet.react","GroupsCometDiscussionRoot.Loading.react","deferredLoadComponent","react","requireDeferredForDisplay"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=c("deferredLoadComponent")(c("requireDeferredForDisplay")("CometGroupDiscussionRoot.Success.react").__setRef("CometGroupDiscussionRoot.react"));function a(a){a=a.queries;return h.jsx(c("CometInteractionSourceContext").Provider,{value:4,children:h.jsx(d("CometPagelet.react").Placeholder,{fallback:h.jsx(c("GroupsCometDiscussionRoot.Loading.react"),{}),name:"DiscussionRootSuccess",children:h.jsx(i,{queryReference:a.queryReference})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);