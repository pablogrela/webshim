(function(){var k=Object.prototype.hasOwnProperty,s=Object.prototype.toString;if(!Array.isArray)Array.isArray=function(a){return s.call(a)=="[object Array]"};if(!Object.keys){var p=true,q=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],t=q.length;for(var v in{toString:null})p=false;Object.keys=function(a){if(typeof a!=="object"&&typeof a!=="function"||a===null)throw new TypeError("Object.keys called on a non-object");var c=[];for(var b in a)k.call(a,
b)&&c.push(b);if(p)for(b=0;b<t;b++){var e=q[b];k.call(a,e)&&c.push(e)}return c}}var l=true;Object.defineProperty&&Object.prototype.__defineGetter__&&function(){try{var a=document.createElement("foo");Object.defineProperty(a,"bar",{get:function(){return true}});l=!!a.bar}catch(c){l=false}if(!l)jQuery.support.advancedObjectProperties=false}();if((!l||!Object.create||!Object.defineProperties||!Object.getOwnPropertyDescriptor||!Object.defineProperty)&&window.jQuery&&jQuery.webshims){var j=jQuery.webshims;
j.objectCreate=function(a,c,b){var e=function(){};e.prototype=a;a=new e;c&&j.defineProperties(a,c);if(b){a.options=jQuery.extend(true,{},a.options||{},b);b=a.options}a._create&&jQuery.isFunction(a._create)&&a._create(b);return a};j.defineProperties=function(a,c){for(var b in c)k.call(c,b)&&j.defineProperty(a,b,c[b]);return a};var m=["configurable","enumerable","writable"];j.defineProperty=function(a,c,b){if(typeof b!="object")return a;if(Object.defineProperty){for(var e=0;e<3;e++)if(!(m[e]in b)&&
(m[e]!=="writable"||b.value!==undefined))b[m[e]]=true;try{Object.defineProperty(a,c,b);return}catch(f){}}if(k.call(b,"value")){a[c]=b.value;return a}if(a.__defineGetter__){typeof b.get=="function"&&a.__defineGetter__(c,b.get);typeof b.set=="function"&&a.__defineSetter__(c,b.set)}return a};j.getPrototypeOf=function(a){return Object.getPrototypeOf&&Object.getPrototypeOf(a)||a.__proto__||a.constructor&&a.constructor.prototype};j.getOwnPropertyDescriptor=function(a,c){if(typeof a!=="object"&&typeof a!==
"function"||a===null)throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object");var b;if(Object.defineProperty&&Object.getOwnPropertyDescriptor)try{return b=Object.getOwnPropertyDescriptor(a,c)}catch(e){}b={configurable:true,enumerable:true,writable:true,value:undefined};var f=a.__lookupGetter__&&a.__lookupGetter__(c),d=a.__lookupSetter__&&a.__lookupSetter__(c);if(!f&&!d){if(!k.call(a,c))return;b.value=a[c];return b}delete b.writable;delete b.value;b.get=b.set=undefined;if(f)b.get=
f;if(d)b.set=d;return b}}if(isNaN(Date.parse("T00:00")))Date=function(a){var c=function(f,d,h,g,n,r,u){var i=arguments.length;if(this instanceof a){i=i===1&&String(f)===f?new a(c.parse(f)):i>=7?new a(f,d,h,g,n,r,u):i>=6?new a(f,d,h,g,n,r):i>=5?new a(f,d,h,g,n):i>=4?new a(f,d,h,g):i>=3?new a(f,d,h):i>=2?new a(f,d):i>=1?new a(f):new a;i.constructor=c;return i}return a.apply(this,arguments)},b=RegExp("^(?:((?:[+-]\\d\\d)?\\d\\d\\d\\d)(?:-(\\d\\d)(?:-(\\d\\d))?)?)?(?:T(\\d\\d):(\\d\\d)(?::(\\d\\d)(?:\\.(\\d\\d\\d))?)?)?(?:Z|([+-])(\\d\\d):(\\d\\d))?$");
for(var e in a)c[e]=a[e];c.now=a.now;c.UTC=a.UTC;c.prototype=a.prototype;c.prototype.constructor=c;c.parse=function(f){var d=b.exec(f);if(d){d.shift();for(var h=d[0]===undefined,g=0;g<10;g++)if(g!==7){d[g]=+(d[g]||(g<3?1:0));g===1&&d[g]--}if(h)return((d[3]*60+d[4])*60+d[5])*1E3+d[6];h=(d[8]*60+d[9])*60*1E3;if(d[6]==="-")h=-h;return a.UTC.apply(this,d.slice(0,7))+h}return a.parse.apply(this,arguments)};return c}(Date);var o=Array.prototype.slice;if(!Function.prototype.bind)Function.prototype.bind=
function(a){var c=this;if(typeof c.apply!="function"||typeof c.call!="function")return new TypeError;var b=o.call(arguments),e=function(){if(this instanceof e){var f=Object.create(c.prototype);c.apply(f,b.concat(o.call(arguments)));return f}else return c.call.apply(c,b.concat(o.call(arguments)))};e.bound=c;e.boundTo=a;e.boundArgs=b;e.length=typeof c=="function"?Math.max(c.length-b.length,0):0;return e}})();