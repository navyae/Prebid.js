pbjsChunk([247],{406:function(e,r,t){e.exports=t(407)},407:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",function(){return m}),t.d(r,"buildOpenRTBRequestParams",function(){return d}),t.d(r,"buildImpressionObject",function(){return y}),t.d(r,"isBannerAd",function(){return l}),t.d(r,"formatSizeAttributes",function(){return b});var o=t(0),n=t(1),a=t(3),i=t(2);function u(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return t}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(r,e){var t,n=Object.keys(r);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(r),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),n.push.apply(n,t)),n}function p(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?f(Object(i),!0).forEach(function(e){var r,t,n;r=o,n=i[t=e],t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))})}return o}function d(e,r,t,n,o){var i={};return!0===a.b.getConfig("coppa")&&(i.coppa=1),r&&(i.ext=i.ext||{},i.ext=p(p({},i.ext),{},{gdpr:1})),t&&(i.ext=i.ext||{},i.ext=p(p({},i.ext),{},{us_privacy:t})),{id:(new Date).getTime(),imp:y(o),site:{page:e||window.location.href,ref:window.document.referrer,publisher:{}},device:{ua:navigator.userAgent,js:1,dnt:"yes"==navigator.doNotTrack||"1"==navigator.doNotTrack||"1"==navigator.msDoNotTrack?1:0,h:screen.height,w:screen.width,language:navigator.language},at:1,user:{ext:{consent:n}},ext:{},regs:i}}function l(e){var r=e.mediaTypes.banner;return"object"===s(r)&&!(!r.sizes||!o.isArray(r.sizes))}function b(e){return o.isArray(e[0])?{format:e.map(function(e){return{w:e[0],h:e[1]}})}:{w:parseInt(e[0],10),h:parseInt(e[1],10)}}function y(e){return e.filter(l).map(function(e){return{id:e.bidId,tagid:e.params.placementId,secure:1,banner:p(p({},b(e.mediaTypes.banner.sizes)),{},{topframe:o.inIframe()?0:1})}})}var m={code:"eetaram",supportedMediaTypes:[i.b],isBidRequestValid:function(e){return!(!e.params||!e.params.placementId)},buildRequests:function(e,r){var t=r.gdprConsent,n=(t=void 0===t?{}:t).gdprApplies,o=t.consentString,i=r.uspConsent,a=r.refererInfo;return{method:"POST",url:"https://demo.arrepiblik.com/dmx2",data:d((a=void 0===a?{}:a).referer,n,i,o,e)}},interpretResponse:function(e){var r=e.body,t=(r=void 0===r?{}:r).seatbid,p=r.cur;if(!t||!o.isArray(t))return[];var n=u(t,1)[0].bid;return!n||!o.isArray(n)&&0<n.length?[]:n.map(function(e){var r=e.adm,t=e.crid,n=e.dealid,o=e.h,i=e.id,a=e.impid,u=e.price,c=e.w,s=e.meta,f=void 0===s?{}:s;return{requestId:a,cpm:(parseFloat(u)||0).toFixed(2),currency:p,width:c,height:o,creativeId:t||i,dealId:n,netRevenue:!0,ttl:300,ad:r,meta:f}})},getUserSyncs:function(){return[]}};Object(n.registerBidder)(m)}},[406]);