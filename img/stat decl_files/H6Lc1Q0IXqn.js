if (self.CavalryLogger) { CavalryLogger.start_js(["gRks9CG"]); }

__d("ProfileCometImagePreloader",["Promise","promiseDone"],(function(a,b,c,d,e,f,g){"use strict";function h(a){return new(b("Promise"))(function(b){var c=new Image();c.onload=b;c.onerror=b;c.src=a})}function a(a,d){c("promiseDone")(b("Promise").all(a.map(function(a){return h(a)})),d)}g.preloadImages=a}),98);
__d("useProfileCometPhotoUploader",["AsyncUploadRequest","react","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useEffect,i=b.useRef;function a(){var a=i([]);h(function(){return function(){a.current&&a.current.forEach(function(a){return a.abort()})}},[]);return function(b,d,e){b=new(c("AsyncUploadRequest"))(b).setAllowCrossOrigin(!0).setFiles({file:d}).setPreventDefaultErrorHandler(!0);var f=e.onFailed,g=e.onSucceeded;g&&b.subscribe("success",function(a,b){a=b.getResponse();if(a==null)throw c("unrecoverableViolation")("Photo upload result should contain a response.","profile_comet");g(a.getPayload())});f&&b.subscribe("failure",function(a,b){a=b.getResponse()||{};b=a.errorDescription;a=a.errorSummary;f({description:b!=null?b.toString():"",summary:a!=null?a.toString():""})});b.send();a.current.push(b)}}g["default"]=a}),98);