if (self.CavalryLogger) { CavalryLogger.start_js(["ovMLnXt"]); }

__d("CommunityPresenceGroupType$FbtEnum",[],(function(a,b,c,d,e,f){"use strict";a={COMMUNITY:"community",GROUP:"group"};b=a;f["default"]=b}),66);
__d("CommunityPresenceGroupTypeCapitalized$FbtEnum",[],(function(a,b,c,d,e,f){"use strict";a={COMMUNITY:"Community",GROUP:"Group"};b=a;f["default"]=b}),66);
__d("CommunityPresenceGroupTypeUppercase$FbtEnum",[],(function(a,b,c,d,e,f){"use strict";a={COMMUNITY:"COMMUNITY",GROUP:"GROUP"};b=a;f["default"]=b}),66);
__d("XFBGroupTypeNameForContent.facebook",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum").Mirrored(["COMMUNITY","GROUP"]);c=a;f["default"]=c}),66);
__d("CommunityPresenceGroupTypeEnumUtil",["CommunityPresenceGroupType$FbtEnum","CommunityPresenceGroupTypeCapitalized$FbtEnum","CommunityPresenceGroupTypeUppercase$FbtEnum","keyMirror","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=c("keyMirror")(c("CommunityPresenceGroupType$FbtEnum")),i=c("keyMirror")(c("CommunityPresenceGroupTypeCapitalized$FbtEnum")),j=c("keyMirror")(c("CommunityPresenceGroupTypeUppercase$FbtEnum"));function a(a){switch(a){case"COMMUNITY":return h.COMMUNITY;case"GROUP":return h.GROUP;default:c("recoverableViolation")("Unknown group type to fbt enum mapping","community_fundamentals_and_collaboration");return h.GROUP}}function b(a){switch(a){case"COMMUNITY":return i.COMMUNITY;case"GROUP":return i.GROUP;default:c("recoverableViolation")("Unknown group type to fbt enum mapping","community_fundamentals_and_collaboration");return i.GROUP}}function d(a){switch(a){case"COMMUNITY":return j.COMMUNITY;case"GROUP":return j.GROUP;default:c("recoverableViolation")("Unknown group type to fbt enum mapping","community_fundamentals_and_collaboration");return j.GROUP}}g.getCommunityPresenceGroupTypeFromGroupTypeName=a;g.getCapitalizedCommunityPresenceGroupTypeFromGroupTypeName=b;g.getUppercasedCommunityPresenceGroupTypeFromGroupTypeName=d}),98);
__d("GroupsCometAdminToolsActionHeader.react",["BaseHeading.react","CometCard.react","CometRow.react","CometRowItem.react","TetraText.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.action;a=a.headline;return h.jsx(c("CometCard.react"),{background:"white",dropShadow:1,children:h.jsx("div",{className:"dati1w0a ihqw7lf3 hv4rvrfc discj3wi",children:h.jsxs(c("CometRow.react"),{paddingHorizontal:0,paddingTop:0,verticalAlign:"center",children:[h.jsx(c("CometRowItem.react"),{expanding:!0,children:h.jsx(c("BaseHeading.react"),{children:h.jsx(c("TetraText.react"),{type:"headlineEmphasized3",children:a})})}),h.jsx(c("CometRowItem.react"),{children:b})]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);