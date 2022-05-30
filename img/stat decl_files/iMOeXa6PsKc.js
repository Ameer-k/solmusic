if (self.CavalryLogger) { CavalryLogger.start_js(["7eITs8b"]); }

__d("GroupsCometLogGroupsTabVisitMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"bookmarkID"},b={defaultValue:null,kind:"LocalArgument",name:"hasBookmark"},c={defaultValue:null,kind:"LocalArgument",name:"hasTopTab"},d={defaultValue:null,kind:"LocalArgument",name:"input"},e=[{kind:"Variable",name:"data",variableName:"input"}],f={alias:null,args:null,kind:"ScalarField",name:"client_mutation_id",storageKey:null},g=[{items:[{kind:"Variable",name:"bookmark_ids.0",variableName:"bookmarkID"}],kind:"ListValue",name:"bookmark_ids"},{kind:"Literal",name:"environment",value:"COMET"},{kind:"Literal",name:"folder_id",value:"PRODUCT"},{kind:"Literal",name:"sections",value:["FACEBOOK_APP"]}],h={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},i=[{kind:"Literal",name:"bookmark_render_location",value:"COMET_LEFT_NAV"}],j={condition:"hasBookmark",kind:"Condition",passingValue:!0,selections:[{alias:"bookmark_unread_count",args:i,kind:"ScalarField",name:"unread_count",storageKey:'unread_count(bookmark_render_location:"COMET_LEFT_NAV")'}]};i={alias:"bookmark_unread_count_string",args:i,kind:"ScalarField",name:"unread_count_string",storageKey:'unread_count_string(bookmark_render_location:"COMET_LEFT_NAV")'};var k={condition:"hasTopTab",kind:"Condition",passingValue:!0,selections:[{alias:"tab_unread_count",args:[{kind:"Literal",name:"bookmark_render_location",value:"COMET_TOP_TAB"}],kind:"ScalarField",name:"unread_count",storageKey:'unread_count(bookmark_render_location:"COMET_TOP_TAB")'}]};return{fragment:{argumentDefinitions:[a,b,c,d],kind:"Fragment",metadata:null,name:"GroupsCometLogGroupsTabVisitMutation",selections:[{alias:null,args:e,concreteType:"ViewerGroupsTabLogVisitResponsePayload",kind:"LinkedField",name:"viewer_groups_tab_log_visit",plural:!1,selections:[f,{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:g,concreteType:"BookmarksConnection",kind:"LinkedField",name:"bookmarks",plural:!1,selections:[{alias:null,args:null,concreteType:"BookmarksEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"bookmarked_node",plural:!1,selections:[h],storageKey:null},j,i,k],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[d,a,c,b],kind:"Operation",name:"GroupsCometLogGroupsTabVisitMutation",selections:[{alias:null,args:e,concreteType:"ViewerGroupsTabLogVisitResponsePayload",kind:"LinkedField",name:"viewer_groups_tab_log_visit",plural:!1,selections:[f,{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:g,concreteType:"BookmarksConnection",kind:"LinkedField",name:"bookmarks",plural:!1,selections:[{alias:null,args:null,concreteType:"BookmarksEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"bookmarked_node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},h],storageKey:null},j,i,k,h],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:"3407381249293916",metadata:{},name:"GroupsCometLogGroupsTabVisitMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("GroupsCometNullState.react",["fbt","CometCard.react","GroupsCometTabFalcoEventLog","NullStateMedia","NullStateNoResults","TetraButton.react","TetraNullState.react","XCometGroupsTabDiscoverControllerRouteBuilder","XCometGroupsTabEngageControllerRouteBuilder","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=c("XCometGroupsTabDiscoverControllerRouteBuilder").buildURL({}),k=c("XCometGroupsTabEngageControllerRouteBuilder").buildURL({}),l=h._("Discover More Groups"),m=h._("Go to Groups Feed");function a(a){var b=a.position;a=a.subTab;d("GroupsCometTabFalcoEventLog").useLogGroupsTabImpressionDeferred("GroupsCometCrossGroupFeedEndOfFeed",a,b);b=a==="notifications";return i.jsx("div",{className:"sjgh65i0",role:"article",children:i.jsx(c("CometCard.react"),{background:"white",dropShadow:1,children:i.jsx(c("TetraNullState.react"),{action:i.jsx(c("TetraButton.react"),{label:b?m:l,linkProps:{url:b?k:j}}),body:h._("Check back later for more updates"),headline:h._("You're All Caught Up"),icon:b?c("NullStateNoResults"):c("NullStateMedia")})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometLogGroupsTabVisitMutation",["CometHomepageBadgeCountClearingMutationHelper","CometRelay","GroupsCometLogGroupsTabVisitMutation.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;c="2361831622";var i={bookmarkID:c,hasBookmark:!0,hasTopTab:!0};function j(a){d("CometHomepageBadgeCountClearingMutationHelper").clearBadgeCount(babelHelpers["extends"]({},i,{store:a}))}var k=function(a){d("CometHomepageBadgeCountClearingMutationHelper").onCompleted(i.bookmarkID,a==null?void 0:(a=a.viewer_groups_tab_log_visit)==null?void 0:a.viewer)};function a(a,c,e){d("CometRelay").commitMutation(a,{mutation:h!==void 0?h:h=b("GroupsCometLogGroupsTabVisitMutation.graphql"),onCompleted:k,optimisticUpdater:j,updater:j,variables:babelHelpers["extends"]({},i,{input:{badge_entry_point:c,badge_number:e}})})}g["default"]=a}),98);