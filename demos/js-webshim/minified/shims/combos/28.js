webshims.register("dom-extend",function(e,t,r,a,i){"use strict";if(t.assumeARIA=e.support.getSetAttribute||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==e('<input type="email" />').attr("type")||""===e("<form />").attr("novalidate")||"required"in e("<input />")[0].attributes)&&t.error("IE browser modes are busted in IE10. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),e.parseHTML||t.error("Webshims needs jQuery 1.8+ to work properly. Please update your jQuery version or downgrade webshims."),1===t.cfg.extendNative&&t.warn("extendNative configuration will be set to false by default with next release. In case you rely on it set it to 'true' otherwise to 'false'. See http://bit.ly/16OOTQO"),!t.cfg.no$Switch){var n=function(){if(!r.jQuery||r.$&&r.jQuery!=r.$||r.jQuery.webshims||(t.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly. Or set webshims.cfg.no$Switch to 'true'."),r.$&&(r.$=t.$),r.jQuery=t.$),t.M!=Modernizr){t.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var e in Modernizr)e in t.M||(t.M[e]=Modernizr[e]);Modernizr=t.M}};n(),setTimeout(n,90),t.ready("DOM",n),e(n),t.ready("WINDOWLOAD",n)}var o=t.modules,s=/\s*,\s*/,l={},u={},c={},d={},p={},f=e.fn.val,h=function(t,r,a,i,n){return n?f.call(e(t)):f.call(e(t),a)};e.widget||function(){var t=e.cleanData;e.cleanData=function(r){if(!e.widget)for(var a,i=0;null!=(a=r[i]);i++)try{e(a).triggerHandler("remove")}catch(n){}t(r)}}(),e.fn.val=function(t){var r=this[0];if(arguments.length&&null==t&&(t=""),!arguments.length)return r&&1===r.nodeType?e.prop(r,"value",t,"val",!0):f.call(this);if(e.isArray(t))return f.apply(this,arguments);var a=e.isFunction(t);return this.each(function(n){if(r=this,1===r.nodeType)if(a){var o=t.call(r,n,e.prop(r,"value",i,"val",!0));null==o&&(o=""),e.prop(r,"value",o,"val")}else e.prop(r,"value",t,"val")})},e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)},e.fn.onWSOff=function(t,r,i,n){return n||(n=a),e(n)[i?"onTrigger":"on"](t,r),this.on("remove",function(a){a.originalEvent||e(n).off(t,r)}),this};var m="_webshimsLib"+Math.round(1e3*Math.random()),v=function(t,r,a){if(t=t.jquery?t[0]:t,!t)return a||{};var n=e.data(t,m);return a!==i&&(n||(n=e.data(t,m,{})),r&&(n[r]=a)),r?n&&n[r]:n};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){var r=[];return this.each(function(){var a=v(this,"shadowData"),i=a&&a[t.prop]||this;-1==e.inArray(i,r)&&r.push(i)}),this.pushStack(r)}}),["removeAttr","prop","attr"].forEach(function(r){l[r]=e[r],e[r]=function(t,a,n,o,s){var d="val"==o,f=d?h:l[r];if(!t||!u[a]||1!==t.nodeType||!d&&o&&"attr"==r&&e.attrFn[a])return f(t,a,n,o,s);var m,v,g,y=(t.nodeName||"").toLowerCase(),b=c[y],w="attr"!=r||n!==!1&&null!==n?r:"removeAttr";if(b||(b=c["*"]),b&&(b=b[a]),b&&(m=b[w]),m){if("value"==a&&(v=m.isVal,m.isVal=d),"removeAttr"===w)return m.value.call(t);if(n===i)return m.get?m.get.call(t):m.value;m.set&&("attr"==r&&n===!0&&(n=a),g=m.set.call(t,n)),"value"==a&&(m.isVal=v)}else g=f(t,a,n,o,s);if((n!==i||"removeAttr"===w)&&p[y]&&p[y][a]){var T;T="removeAttr"==w?!1:"prop"==w?!!n:!0,p[y][a].forEach(function(e){(!e.only||(e.only="prop"&&"prop"==r)||"attr"==e.only&&"prop"!=r)&&e.call(t,n,T,d?"val":w,r)})}return g},d[r]=function(e,a,n){c[e]||(c[e]={}),c[e][a]||(c[e][a]={});var o=c[e][a][r],s=function(e,t,i){return t&&t[e]?t[e]:i&&i[e]?i[e]:"prop"==r&&"value"==a?function(e){var t=this;return n.isVal?h(t,a,e,!1,0===arguments.length):l[r](t,a,e)}:"prop"==r&&"value"==e&&n.value.apply?function(){var e=l[r](this,a);return e&&e.apply&&(e=e.apply(this,arguments)),e}:function(e){return l[r](this,a,e)}};c[e][a][r]=n,n.value===i&&(n.set||(n.set=n.writeable?s("set",n,o):t.cfg.useStrict&&"prop"==a?function(){throw a+" is readonly on "+e}:function(){t.info(a+" is readonly on "+e)}),n.get||(n.get=s("get",n,o))),["value","get","set"].forEach(function(e){n[e]&&(n["_sup"+e]=s(e,o))})}});var g=function(){var e=t.getPrototypeOf(a.createElement("foobar")),r=Object.prototype.hasOwnProperty,i=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(n,o,s){var l,u;if(!(i&&(l=a.createElement(n))&&(u=t.getPrototypeOf(l))&&e!==u)||l[o]&&r.call(l,o))s._supvalue=function(){var e=v(this,"propValue");return e&&e[o]&&e[o].apply?e[o].apply(this,arguments):e&&e[o]},y.extendValue(n,o,s.value);else{var c=l[o];s._supvalue=function(){return c&&c.apply?c.apply(this,arguments):c},u[o]=s.value}s.value._supvalue=s._supvalue}}(),y=function(){var r={};t.addReady(function(a,n){var o={},s=function(t){o[t]||(o[t]=e(a.getElementsByTagName(t)),n[0]&&e.nodeName(n[0],t)&&(o[t]=o[t].add(n)))};e.each(r,function(e,r){return s(e),r&&r.forEach?(r.forEach(function(t){o[e].each(t)}),i):(t.warn("Error: with "+e+"-property. methods: "+r),i)}),o=null});var n,o=e([]),s=function(t,i){r[t]?r[t].push(i):r[t]=[i],e.isDOMReady&&(n||e(a.getElementsByTagName(t))).each(i)};return{createTmpCache:function(t){return e.isDOMReady&&(n=n||e(a.getElementsByTagName(t))),n||o},flushTmpCache:function(){n=null},content:function(t,r){s(t,function(){var t=e.attr(this,r);null!=t&&e.attr(this,r,t)})},createElement:function(e,t){s(e,t)},extendValue:function(t,r,a){s(t,function(){e(this).each(function(){var e=v(this,"propValue",{});e[r]=this[r],this[r]=a})})}}}(),b=function(e,t){e.defaultValue===i&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(r){r=e(r);var a=r.prop("id");return a||(t++,a="ID-"+t,r.eq(0).prop("id",a)),a}}(),implement:function(e,r){var a=v(e,"implemented")||v(e,"implemented",{});return a[r]?(t.warn(r+" already implemented for element #"+e.id),!1):(a[r]=!0,!0)},extendUNDEFProp:function(t,r){e.each(r,function(e,r){e in t||(t[e]=r)})},createPropDefault:b,data:v,moveToFirstEvent:function(t,r,a){var i,n=(e._data(t,"events")||{})[r];n&&n.length>1&&(i=n.pop(),a||(a="bind"),"bind"==a&&n.delegateCount?n.splice(n.delegateCount,0,i):n.unshift(i)),t=null},addShadowDom:function(){var i,n,o,s={init:!1,runs:0,test:function(){var e=s.getHeight(),t=s.getWidth();e!=s.height||t!=s.width?(s.height=e,s.width=t,s.handler({type:"docresize"}),s.runs++,9>s.runs&&setTimeout(s.test,90)):s.runs=0},handler:function(t){clearTimeout(i),i=setTimeout(function(){if("resize"==t.type){var i=e(r).width(),l=e(r).width();if(l==n&&i==o)return;n=l,o=i,s.height=s.getHeight(),s.width=s.getWidth()}e(a).triggerHandler("updateshadowdom")},"resize"==t.type?50:9)},_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var r=a.body,i=a.documentElement;s[t]=function(){return Math.max(r["scroll"+e],i["scroll"+e],r["offset"+e],i["offset"+e],i["client"+e])}})},start:function(){!this.init&&a.body&&(this.init=!0,this._create(),this.height=s.getHeight(),this.width=s.getWidth(),setInterval(this.test,600),e(this.test),t.ready("WINDOWLOAD",this.test),e(r).bind("resize",this.handler),function(){var t,r=e.fn.animate;e.fn.animate=function(){return clearTimeout(t),t=setTimeout(function(){s.test()},99),r.apply(this,arguments)}}())}};return t.docObserve=function(){t.ready("DOM",function(){s.start()})},function(r,a,i){if(r&&a){i=i||{},r.jquery&&(r=r[0]),a.jquery&&(a=a[0]);var n=e.data(r,m)||e.data(r,m,{}),o=e.data(a,m)||e.data(a,m,{}),s={};i.shadowFocusElement?i.shadowFocusElement&&(i.shadowFocusElement.jquery&&(i.shadowFocusElement=i.shadowFocusElement[0]),s=e.data(i.shadowFocusElement,m)||e.data(i.shadowFocusElement,m,s)):i.shadowFocusElement=a,e(r).on("remove",function(t){t.originalEvent||e(a).remove()}),n.hasShadow=a,s.nativeElement=o.nativeElement=r,s.shadowData=o.shadowData=n.shadowData={nativeElement:r,shadowElement:a,shadowFocusElement:i.shadowFocusElement},i.shadowChilds&&i.shadowChilds.each(function(){v(this,"shadowData",o.shadowData)}),i.data&&(s.shadowData.data=o.shadowData.data=n.shadowData.data=i.data),i=null}t.docObserve()}}(),propTypes:{standard:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}})},"boolean":function(e){b(e),e.prop||(e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return null!=e.attr.get.call(this)}})},src:function(){var t=a.createElement("a");return t.style.display="none",function(r,a){b(r),r.prop||(r.prop={set:function(e){r.attr.set.call(this,e)},get:function(){var r,i=this.getAttribute(a);if(null==i)return"";if(t.setAttribute("href",i+""),!e.support.hrefNormalized){try{e(t).insertAfter(this),r=t.getAttribute("href",4)}catch(n){r=t.getAttribute("href",4)}e(t).detach()}return r||t.href}})}}(),enumarated:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();return t&&-1!=e.limitedTo.indexOf(t)||(t=e.defaultValue),t}})}},reflectProperties:function(r,a){"string"==typeof a&&(a=a.split(s)),a.forEach(function(a){t.defineNodeNamesProperty(r,a,{prop:{set:function(t){e.attr(this,a,t)},get:function(){return e.attr(this,a)||""}}})})},defineNodeNameProperty:function(r,a,i){return u[a]=!0,i.reflect&&t.propTypes[i.propType||"standard"](i,a),["prop","attr","removeAttr"].forEach(function(n){var o=i[n];o&&(o="prop"===n?e.extend({writeable:!0},o):e.extend({},o,{writeable:!0}),d[n](r,a,o),"*"!=r&&t.cfg.extendNative&&"prop"==n&&o.value&&e.isFunction(o.value)&&g(r,a,o),i[n]=o)}),i.initAttr&&y.content(r,a),i},defineNodeNameProperties:function(e,r,a,i){for(var n in r)!i&&r[n].initAttr&&y.createTmpCache(e),a&&(r[n][a]||(r[n][a]={},["value","set","get"].forEach(function(e){e in r[n]&&(r[n][a][e]=r[n][e],delete r[n][e])}))),r[n]=t.defineNodeNameProperty(e,n,r[n]);return i||y.flushTmpCache(),r},createElement:function(r,a,i){var n;return e.isFunction(a)&&(a={after:a}),y.createTmpCache(r),a.before&&y.createElement(r,a.before),i&&(n=t.defineNodeNameProperties(r,i,!1,!0)),a.after&&y.createElement(r,a.after),y.flushTmpCache(),n},onNodeNamesPropertyModify:function(t,r,a,i){"string"==typeof t&&(t=t.split(s)),e.isFunction(a)&&(a={set:a}),t.forEach(function(e){p[e]||(p[e]={}),"string"==typeof r&&(r=r.split(s)),a.initAttr&&y.createTmpCache(e),r.forEach(function(t){p[e][t]||(p[e][t]=[],u[t]=!0),a.set&&(i&&(a.set.only=i),p[e][t].push(a.set)),a.initAttr&&y.content(e,t)}),y.flushTmpCache()})},defineNodeNamesBooleanProperty:function(r,a,n){n||(n={}),e.isFunction(n)&&(n.set=n),t.defineNodeNamesProperty(r,a,{attr:{set:function(e){this.setAttribute(a,e),n.set&&n.set.call(this,!0)},get:function(){var e=this.getAttribute(a);return null==e?i:a}},removeAttr:{value:function(){this.removeAttribute(a),n.set&&n.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:n.initAttr||!1})},contentAttr:function(e,t,r){if(e.nodeName){var a;return r===i?(a=e.attributes[t]||{},r=a.specified?a.value:null,null==r?i:r):("boolean"==typeof r?r?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,r),i)}},activeLang:function(){var r,a,i=[],n={},s=/:\/\/|^\.*\//,l=function(r,a,i){var n;return a&&i&&-1!==e.inArray(a,i.availabeLangs||[])?(r.loading=!0,n=i.langSrc,s.test(n)||(n=t.cfg.basePath+n),t.loader.loadScript(n+a+".js",function(){r.langObj[a]?(r.loading=!1,c(r,!0)):e(function(){r.langObj[a]&&c(r,!0),r.loading=!1})}),!0):!1},u=function(e){n[e]&&n[e].forEach(function(e){e.callback(r,a,"")})},c=function(e,t){if(e.activeLang!=r&&e.activeLang!==a){var i=o[e.module].options;e.langObj[r]||a&&e.langObj[a]?(e.activeLang=r,e.callback(e.langObj[r]||e.langObj[a],r),u(e.module)):t||l(e,r,i)||l(e,a,i)||!e.langObj[""]||""===e.activeLang||(e.activeLang="",e.callback(e.langObj[""],r),u(e.module))}},d=function(t){return"string"==typeof t&&t!==r?(r=t,a=r.split("-")[0],r==a&&(a=!1),e.each(i,function(e,t){c(t)})):"object"==typeof t&&(t.register?(n[t.register]||(n[t.register]=[]),n[t.register].push(t),t.callback(r,a,"")):(t.activeLang||(t.activeLang=""),i.push(t),c(t))),r};return d}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,r){t[e]=function(e,a,i,n){"string"==typeof e&&(e=e.split(s));var o={};return e.forEach(function(e){o[e]=t[r](e,a,i,n)}),o}}),t.isReady("webshimLocalization",!0)}),function(e,t){if(!(!e.webshims.assumeARIA||"content"in t.createElement("template")||(e(function(){var t=e("main").attr({role:"main"});t.length>1?webshims.error("only one main element allowed in document"):t.is("article *, section *")&&webshims.error("main not allowed inside of article/section elements")}),"hidden"in t.createElement("a")))){var r={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},a=function(e,t){var r=e.getAttribute("role");r||e.setAttribute("role",t)};e.webshims.addReady(function(i,n){if(e.each(r,function(t,r){for(var o=e(t,i).add(n.filter(t)),s=0,l=o.length;l>s;s++)a(o[s],r)}),i===t){var o=t.getElementsByTagName("header")[0],s=t.getElementsByTagName("footer"),l=s.length;if(o&&!e(o).closest("section, article")[0]&&a(o,"banner"),!l)return;var u=s[l-1];e(u).closest("section, article")[0]||a(u,"contentinfo")}})}}(webshims.$,document),webshims.register("mediaelement-jaris",function(e,t,r,a,i,n){"use strict";var o=t.mediaelement,s=r.swfmini,l=Modernizr.audio&&Modernizr.video,u=s.hasFlashPlayerVersion("9.0.115"),c=0,d="ActiveXObject"in r&&l,p={paused:!0,ended:!1,currentSrc:"",duration:r.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(e){return e?(t.error("buffered index size error"),i):0},end:function(e){return e?(t.error("buffered index size error"),i):0},length:0}},f=Object.keys(p),h={currentTime:0,volume:1,muted:!1};Object.keys(h);var m=e.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,currentTime:0,_ppFlag:i,_calledMeta:!1,lastDuration:0},p,h),v=function(e){try{e.nodeName}catch(r){return null}var a=t.data(e,"mediaelement");return a&&"third"==a.isActive?a:null},g=function(t,r){r=e.Event(r),r.preventDefault(),e.event.trigger(r,i,t)},y=n.playerPath||t.cfg.basePath+"swf/"+(n.playerName||"JarisFLVPlayer.swf");t.extendUNDEFProp(n.params,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent",allowNetworking:"all"}),t.extendUNDEFProp(n.vars,{controltype:"1",jsapi:"1"}),t.extendUNDEFProp(n.attrs,{bgcolor:"#000000"});var b=function(e,t){3>e&&clearTimeout(t._canplaythroughTimer),e>=3&&3>t.readyState&&(t.readyState=e,g(t._elem,"canplay"),t.paused||g(t._elem,"playing"),clearTimeout(t._canplaythroughTimer),t._canplaythroughTimer=setTimeout(function(){b(4,t)},4e3)),e>=4&&4>t.readyState&&(t.readyState=e,g(t._elem,"canplaythrough")),t.readyState=e};o.jarisEvent={};var w,T={onPlayPause:function(e,t,r){var a,i;if(null==r)try{a=t.api.api_get("isPlaying")}catch(n){}else a=r;a==t.paused&&(t.paused=!a,i=t.paused?"pause":"play",t._ppFlag=!0,g(t._elem,i),3>t.readyState&&b(3,t),t.paused||g(t._elem,"playing"))},onNotBuffering:function(e,t){b(3,t)},onDataInitialized:function(e,t){var r,a=t.duration;t.duration=e.duration,a==t.duration||isNaN(t.duration)||t._calledMeta&&2>(r=Math.abs(t.lastDuration-t.duration))||(t.videoHeight=e.height,t.videoWidth=e.width,t.networkState||(t.networkState=2),1>t.readyState&&b(1,t),clearTimeout(t._durationChangeTimer),t._calledMeta&&t.duration?t._durationChangeTimer=setTimeout(function(){t.lastDuration=t.duration,g(t._elem,"durationchange")},r>50?0:r>9?9:99):(t.lastDuration=t.duration,t.duration&&g(t._elem,"durationchange"),t._calledMeta||g(t._elem,"loadedmetadata")),t._calledMeta=!0)},onBuffering:function(e,t){t.ended&&(t.ended=!1),b(1,t),g(t._elem,"waiting")},onTimeUpdate:function(e,t){t.ended&&(t.ended=!1),3>t.readyState&&(b(3,t),g(t._elem,"playing")),g(t._elem,"timeupdate")},onProgress:function(t,r){if(r.ended&&(r.ended=!1),r.duration&&!isNaN(r.duration)){var a=t.loaded/t.total;a>.02&&.2>a?b(3,r):a>.2&&(a>.99&&(r.networkState=1),b(4,r)),r._bufferedEnd&&r._bufferedEnd>a&&(r._bufferedStart=r.currentTime||0),r._bufferedEnd=a,r.buffered.length=1,e.event.trigger("progress",i,r._elem,!0)}},onPlaybackFinished:function(e,t){4>t.readyState&&b(4,t),t.ended=!0,g(t._elem,"ended")},onVolumeChange:function(e,t){(t.volume!=e.volume||t.muted!=e.mute)&&(t.volume=e.volume,t.muted=e.mute,g(t._elem,"volumechange"))},ready:function(){var r=function(e){var t=!0;try{e.api.api_get("volume")}catch(r){t=!1}return t};return function(a,n){var o=0,s=function(){return o>9?(n.tryedReframeing=0,i):(o++,n.tryedReframeing++,r(n)?(n.wasSwfReady=!0,n.tryedReframeing=0,x(n),E(n)):6>n.tryedReframeing?3>n.tryedReframeing?(n.reframeTimer=setTimeout(s,9),n.shadowElem.css({overflow:"visible"}),setTimeout(function(){n.shadowElem.css({overflow:"hidden"})},1)):(n.shadowElem.css({overflow:"hidden"}),e(n._elem).mediaLoad()):(clearTimeout(n.reframeTimer),t.error("reframing error")),i)};n&&n.api&&(n.tryedReframeing||(n.tryedReframeing=0),clearTimeout(w),clearTimeout(n.reframeTimer),n.shadowElem.removeClass("flashblocker-assumed"),o?n.reframeTimer=setTimeout(s,9):s())}}()};T.onMute=T.onVolumeChange;var E=function(e){var r,a=e.actionQueue.length,i=0;if(a&&"third"==e.isActive)for(;e.actionQueue.length&&a>i;){i++,r=e.actionQueue.shift();try{e.api[r.fn].apply(e.api,r.args)}catch(n){t.warn(n)}}e.actionQueue.length&&(e.actionQueue=[])},x=function(t){t&&((t._ppFlag===i&&e.prop(t._elem,"autoplay")||!t.paused)&&setTimeout(function(){if("third"==t.isActive&&(t._ppFlag===i||!t.paused))try{e(t._elem).play(),t._ppFlag=!0}catch(r){}},1),t.muted&&e.prop(t._elem,"muted",!0),1!=t.volume&&e.prop(t._elem,"volume",t.volume))},N=e.noop;if(l){var k={play:1,playing:1},A=["play","pause","playing","canplay","progress","waiting","ended","loadedmetadata","durationchange","emptied"],C=A.map(function(e){return e+".webshimspolyfill"}).join(" "),S=function(r){var a=t.data(r.target,"mediaelement");if(a){var i=r.originalEvent&&r.originalEvent.type===r.type;i==("third"==a.activating)&&(r.stopImmediatePropagation(),k[r.type]&&(a.isActive!=a.activating?e(r.target).pause():i&&(e.prop(r.target,"pause")._supvalue||e.noop).apply(r.target)))}};N=function(r){e(r).off(C).on(C,S),A.forEach(function(e){t.moveToFirstEvent(r,e)})},N(a)}o.setActive=function(r,a,i){if(i||(i=t.data(r,"mediaelement")),i&&i.isActive!=a){"html5"!=a&&"third"!=a&&t.warn("wrong type for mediaelement activating: "+a);var n=t.data(r,"shadowData");i.activating=a,e(r).pause(),i.isActive=a,"third"==a?(n.shadowElement=n.shadowFocusElement=i.shadowElem[0],e(r).addClass("swf-api-active nonnative-api-active").hide().getShadowElement().show()):(e(r).removeClass("swf-api-active nonnative-api-active").show().getShadowElement().hide(),n.shadowElement=n.shadowFocusElement=!1),e(r).trigger("mediaelementapichange")}};var _=function(){var e=["_calledMeta","lastDuration","_bufferedEnd","_bufferedStart","_ppFlag","currentSrc","currentTime","duration","ended","networkState","paused","videoHeight","videoWidth"],t=e.length;return function(r){if(r){var a=t,i=r.networkState;for(b(0,r),clearTimeout(r._durationChangeTimer);--a>-1;)delete r[e[a]];r.actionQueue=[],r.buffered.length=0,i&&g(r._elem,"emptied")}}}(),P=function(){var t={},r=function(r){var i,n,o;return t[r.currentSrc]?i=t[r.currentSrc]:r.videoHeight&&r.videoWidth?(t[r.currentSrc]={width:r.videoWidth,height:r.videoHeight},i=t[r.currentSrc]):(n=e.attr(r._elem,"poster"))&&(i=t[n],i||(o=a.createElement("img"),o.onload=function(){t[n]={width:this.width,height:this.height},t[n].height&&t[n].width?O(r,e.prop(r._elem,"controls")):delete t[n]},o.src=n,o.complete&&o.onload())),i||{width:300,height:"video"==r._elemNodeName?150:50}};return function(t){var a,i,n=t.elemDimensions;return("auto"==n.width||"auto"==n.height)&&(n=e.extend({},t.elemDimensions),a=r(t),i=a.width/a.height,"auto"==n.width&&"auto"==n.height?n=a:"auto"==n.width?(t.shadowElem.css({height:n.height}),n.width=t.shadowElem.height()*i):(t.shadowElem.css({width:n.width}),n.height=t.shadowElem.width()/i)),n}}(),O=function(t,r){var a,i=t._elem,n=t.shadowElem;e(i)[r?"addClass":"removeClass"]("webshims-controls"),"third"==t.isActive&&("audio"!=t._elemNodeName||r?(t.elemDimensions={width:i.style.width||e(i).attr("width")||e(i).width(),height:i.style.height||e(i).attr("height")||e(i).height()},a=P(t),n.css(a)):n.css({width:0,height:0}))},D=function(){var t={"":1,auto:1};return function(r){var a=e.attr(r,"preload");return null==a||"none"==a||e.prop(r,"autoplay")?!1:(a=e.prop(r,"preload"),!!(t[a]||"metadata"==a&&e(r).is(".preload-in-doubt, video:not([poster])")))}}(),F={A:/&amp;/g,a:/&/g,e:/\=/g,q:/\?/g},M=function(e){return e.replace?e.replace(F.A,"%26").replace(F.a,"%26").replace(F.e,"%3D").replace(F.q,"%3F"):e};if("matchMedia"in r){var j=!1;try{j=r.matchMedia("only all").matches}catch(I){}j&&(o.sortMedia=function(e,t){return e=!e.media||matchMedia(e.media).matches,t=!t.media||matchMedia(t.media).matches,e==t?0:e?-1:1})}o.createSWF=function(r,a,d){if(!u)return setTimeout(function(){e(r).mediaLoad()},1),i;1>c?c=1:c++,d||(d=t.data(r,"mediaelement")),(e.attr(r,"height")||e.attr(r,"width"))&&t.warn("width or height content attributes used. Webshims prefers the usage of CSS (computed styles or inline styles) to detect size of a video/audio. It's really more powerfull.");var p,f="audio/rtmp"==a.type||"video/rtmp"==a.type,h=e.extend({},n.vars,{poster:M(e.attr(r,"poster")&&e.prop(r,"poster")||""),source:M(a.streamId||a.srcProp),server:M(a.server||"")}),v=e(r).data("vars")||{},g=e.prop(r,"controls"),b="jarisplayer-"+t.getID(r),E=e.extend({},n.params,e(r).data("params")),x=r.nodeName.toLowerCase(),k=e.extend({},n.attrs,{name:b,id:b},e(r).data("attrs")),A=function(){"third"==d.isActive&&O(d,e.prop(r,"controls"))};d&&d.swfCreated?(o.setActive(r,"third",d),d.currentSrc=a.srcProp,d.shadowElem.html('<div id="'+b+'">'),d.api=!1,d.actionQueue=[],p=d.shadowElem,_(d)):(p=e('<div class="polyfill-'+x+' polyfill-mediaelement" id="wrapper-'+b+'"><div id="'+b+'"></div>').css({position:"relative",overflow:"hidden"}),d=t.data(r,"mediaelement",t.objectCreate(m,{actionQueue:{value:[]},shadowElem:{value:p},_elemNodeName:{value:x},_elem:{value:r},currentSrc:{value:a.srcProp},swfCreated:{value:!0},id:{value:b.replace(/-/g,"")},buffered:{value:{start:function(e){return e>=d.buffered.length?(t.error("buffered index size error"),i):0},end:function(e){return e>=d.buffered.length?(t.error("buffered index size error"),i):(d.duration-d._bufferedStart)*d._bufferedEnd+d._bufferedStart},length:0}}})),p.insertBefore(r),l&&e.extend(d,{volume:e.prop(r,"volume"),muted:e.prop(r,"muted"),paused:e.prop(r,"paused")}),t.addShadowDom(r,p),t.data(r,"mediaelement")||t.data(r,"mediaelement",d),N(r),o.setActive(r,"third",d),O(d,g),e(r).on({"updatemediaelementdimensions loadedmetadata emptied":A,remove:function(e){!e.originalEvent&&o.jarisEvent[d.id]&&o.jarisEvent[d.id].elem==r&&(delete o.jarisEvent[d.id],clearTimeout(w),clearTimeout(d.flashBlock)),p.remove()}}).onWSOff("updateshadowdom",A)),o.jarisEvent[d.id]&&o.jarisEvent[d.id].elem==r||(o.jarisEvent[d.id]=function(e){if("ready"==e.type){var t=function(){d.api&&(D(r)&&d.api.api_preload(),T.ready(e,d))};d.api?t():setTimeout(t,9)}else d.currentTime=e.position,d.api&&(!d._calledMeta&&isNaN(e.duration)&&d.duration!=e.duration&&isNaN(d.duration)&&T.onDataInitialized(e,d),d._ppFlag||"onPlayPause"==e.type||T.onPlayPause(e,d),T[e.type]&&T[e.type](e,d)),d.duration=e.duration},o.jarisEvent[d.id].elem=r),e.extend(h,{id:b,evtId:d.id,controls:""+g,autostart:"false",nodename:x},v),f?h.streamtype="rtmp":"audio/mpeg"==a.type||"audio/mp3"==a.type?(h.type="audio",h.streamtype="file"):"video/youtube"==a.type&&(h.streamtype="youtube"),n.changeSWF(h,r,a,d,"embed"),clearTimeout(d.flashBlock),s.embedSWF(y,b,"100%","100%","9.0.115",!1,h,E,k,function(a){if(a.success){var i=function(){(!a.ref.parentNode&&p[0].parentNode||"none"==a.ref.style.display)&&(p.addClass("flashblocker-assumed"),e(r).trigger("flashblocker"),t.warn("flashblocker assumed")),e(a.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})};d.api=a.ref,g||e(a.ref).attr("tabindex","-1").css("outline","none"),d.flashBlock=setTimeout(i,99),w||(clearTimeout(w),w=setTimeout(function(){i();var r=e(a.ref);r[0].offsetWidth>1&&r[0].offsetHeight>1&&0===location.protocol.indexOf("file:")?t.error("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):(2>r[0].offsetWidth||2>r[0].offsetHeight)&&t.warn("JS-SWF connection can't be established on hidden or unconnected flash objects"),r=null},8e3))}})};var L=function(e,t,r,a){return a=a||v(e),a?(a.api&&a.api[t]?a.api[t].apply(a.api,r||[]):(a.actionQueue.push({fn:t,args:r}),a.actionQueue.length>10&&setTimeout(function(){a.actionQueue.length>5&&a.actionQueue.shift()},99)),a):!1};if(["audio","video"].forEach(function(r){var a,i={},n=function(e){("audio"!=r||"videoHeight"!=e&&"videoWidth"!=e)&&(i[e]={get:function(){var t=v(this);return t?t[e]:l&&a[e].prop._supget?a[e].prop._supget.apply(this):m[e]},writeable:!1})},o=function(e,t){n(e),delete i[e].writeable,i[e].set=t};o("volume",function(e){var r=v(this);if(r)e*=1,isNaN(e)||((0>e||e>1)&&t.error("volume greater or less than allowed "+e/100),L(this,"api_volume",[e],r),r.volume!=e&&(r.volume=e,g(r._elem,"volumechange")),r=null);else if(a.volume.prop._supset)return a.volume.prop._supset.apply(this,arguments)}),o("muted",function(e){var t=v(this);if(t)e=!!e,L(this,"api_muted",[e],t),t.muted!=e&&(t.muted=e,g(t._elem,"volumechange")),t=null;else if(a.muted.prop._supset)return a.muted.prop._supset.apply(this,arguments)}),o("currentTime",function(e){var t=v(this);if(t)e*=1,isNaN(e)||L(this,"api_seek",[e],t);else if(a.currentTime.prop._supset)return a.currentTime.prop._supset.apply(this,arguments)}),["play","pause"].forEach(function(e){i[e]={value:function(){var t=v(this);if(t)t.stopPlayPause&&clearTimeout(t.stopPlayPause),L(this,"play"==e?"api_play":"api_pause",[],t),t._ppFlag=!0,t.paused!=("play"!=e)&&(t.paused="play"!=e,g(t._elem,e));else if(a[e].prop._supvalue)return a[e].prop._supvalue.apply(this,arguments)}}}),f.forEach(n),t.onNodeNamesPropertyModify(r,"controls",function(t,a){var i=v(this);e(this)[a?"addClass":"removeClass"]("webshims-controls"),i&&("audio"==r&&O(i,a),L(this,"api_controls",[a],i))}),t.onNodeNamesPropertyModify(r,"preload",function(){var r,a,i;D(this)&&(r=v(this),r?L(this,"api_preload",[],r):!d||!this.paused||this.error||e.data(this,"mediaerror")||this.readyState||this.networkState||this.autoplay||!e(this).is(":not(.nonnative-api-active)")||(i=this,a=t.data(i,"mediaelementBase")||t.data(i,"mediaelementBase",{}),clearTimeout(a.loadTimer),a.loadTimer=setTimeout(function(){e(i).mediaLoad()},9)))}),a=t.defineNodeNameProperties(r,i,"prop")}),u&&e.cleanData){var W=e.cleanData,V={object:1,OBJECT:1};e.cleanData=function(e){var t,r;if(e&&(r=e.length)&&c)for(t=0;r>t;t++)if(V[e[t].nodeName]&&"api_pause"in e[t]){c--;try{e[t].api_pause()}catch(a){}}return W.apply(this,arguments)}}l?"media"in a.createElement("source")||t.reflectProperties("source",["media"]):(["poster","src"].forEach(function(e){t.defineNodeNamesProperty("src"==e?["audio","video","source"]:["video"],e,{reflect:!0,propType:"src"})}),t.defineNodeNamesProperty(["audio","video"],"preload",{reflect:!0,propType:"enumarated",defaultValue:"",limitedTo:["","auto","metadata","none"]}),t.reflectProperties("source",["type","media"]),["autoplay","controls"].forEach(function(e){t.defineNodeNamesBooleanProperty(["audio","video"],e)}),t.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop"))});