!function(t){function e(data){for(var e,r,l=data[0],f=data[1],d=data[2],i=0,m=[];i<l.length;i++)r=l[i],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(e in f)Object.prototype.hasOwnProperty.call(f,e)&&(t[e]=f[e]);for(h&&h(data);m.length;)m.shift()();return c.push.apply(c,d||[]),n()}function n(){for(var t,i=0;i<c.length;i++){for(var e=c[i],n=!0,r=1;r<e.length;r++){var f=e[r];0!==o[f]&&(n=!1)}n&&(c.splice(i--,1),t=l(l.s=e[0]))}return t}var r={},o={2:0},c=[];function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var c,script=document.createElement("script");script.charset="utf-8",script.timeout=120,l.nc&&script.setAttribute("nonce",l.nc),script.src=function(t){return l.p+""+{0:"2d46f64",1:"832e8fc",4:"bc00377",5:"8de3937",6:"eb85a52",7:"28a7337",8:"5ccf5d4",9:"4a03991",10:"995f303",11:"ea053db",12:"37fe4bd",13:"6095478",14:"9048232",15:"a4b096e",16:"882f3c0",17:"b2ac60a",18:"d71584f",19:"5d75bdb",20:"e47ae5b",21:"3bb1605",22:"de334c9",23:"1614596",24:"be43a71",25:"199eb47",26:"b18bac7",27:"c5a3b1d",28:"222f15e",29:"c47a465",30:"bbe2882",31:"cb90855",32:"4c83ebb",34:"bc6e743",35:"267da67",36:"bd70e64",37:"f1e7d9b",38:"b39cf0b",39:"a4637a8",40:"04a63cc",41:"86e8048",42:"e9929a6",43:"3683900",44:"371c7de",45:"8296624",46:"9242c02",47:"a3e9a37",48:"a65336c",49:"4b76780",50:"9988acf",51:"d499ec9",52:"25e09ae"}[t]+".js"}(t);var f=new Error;c=function(e){script.onerror=script.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+c+")",f.name="ChunkLoadError",f.type=r,f.request=c,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:script})}),12e4);script.onerror=script.onload=c,document.head.appendChild(script)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(e,"a",e),e},l.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},l.p="/example/_nuxt/",l.oe=function(t){throw console.error(t),t};var f=window.webpackJsonp=window.webpackJsonp||[],d=f.push.bind(f);f.push=e,f=f.slice();for(var i=0;i<f.length;i++)e(f[i]);var h=d;c.push([200,3,33]),n()}({118:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return f}));n(65),n(86),n(29),n(22),n(18),n(87),n(24),n(116),n(7),n(17),n(30),n(20);var r=new Map;t.nuxtSpeedkitResolveComponents=c;var o={NONE:"none",VISIBLE:"visible",EVENT:"event",NAME:"name"};function c(t){var e;if(t){if(!r.has(t))return void console.error("Have no resolve with specified name "+t);e=r.get(t).map((function(e){return[t,e]}))}else e=Array.from(r).map((function(t){var e=t[0];return t[1].map((function(t){return[e,t]}))})).flat();e.forEach((function(t){var e=t[0],n=t[1];r.delete(e),n()}))}function l(t,e){r.set(t,(r.get(t)||[]).concat([e]))}function f(component,t,e){void 0===t&&(t=o.NONE),e=Object.assign({name:null},e);var n=function(component){var t;return{resolvableComponent:new Promise((function(e){t=e})),resolve:function(){t("function"==typeof component?component():component)}}}(component),f=n.resolvableComponent,d=n.resolve,h=function(t,e){return Object.assign({render:function(e){var n=this.$el?this.$el.tagName:"div";return this.$el||t(),e(n)}},e)}(d,{mounted:function(){!function(component,t,e,n){switch(l(component._uid,t),e){case o.EVENT:if(!n.name)throw new Error("mode event needs a event name (e.g. click)");n.el.addEventListener(n.name,t,{capture:!0,once:!0,passive:!0});break;case o.NAME:if(!n.name)throw new Error('mode "name" needs a name (e.g. xyz)');l(n.name,t);break;case o.VISIBLE:component.$el instanceof HTMLElement?function(t,e,n){if(n=Object.assign({rootMargin:"0%",threshold:[0]},n),"undefined"==typeof IntersectionObserver)return null;var o=new IntersectionObserver((function(t){t.forEach((function(t){(t.isIntersecting||t.intersectionRatio>0)&&r.has(e)&&(o.disconnect(),c(e))}))}),n);o.observe(t)}(component.$el,component._uid,n):t()}}(this,d,t,Object.assign({},e,{el:this.$el}))}});return function(){return{component:f,delay:0,loading:h}}}}).call(this,n(15))},119:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return d}));n(75);var r={device:{hardwareConcurrency:{min:2,max:48},deviceMemory:{min:2}},timing:{fcp:500,dcl:800},lighthouseDetectionByUserAgent:!1},o=r,c=f(o);function l(t){void 0===t&&(t={}),o={device:Object.assign({},r.device,t.device||{}),timing:Object.assign({},r.timing,t.timing||{}),lighthouseDetectionByUserAgent:o.lighthouseDetectionByUserAgent||r.lighthouseDetectionByUserAgent},o=Object.assign({},r,t),c=f(o)}function f(e){void 0===e&&(e={});var n=t.navigator||{};return{hardwareConcurrency:n.hardwareConcurrency||e.device.hardwareConcurrency.min,deviceMemory:n.deviceMemory||e.device.deviceMemory.min,userAgent:n.userAgent||""}}function d(){return function(){if(t.performance){var e=performance.getEntriesByName("first-contentful-paint"),n=performance.getEntriesByType("resource");if(e.length)return e[0].startTime<o.timing.fcp;if(n.length)return n.reduce((function(t,e){return(!t||t<e.responseEnd)&&(t=e.responseEnd),t}),null)<o.timing.dcl}return!1}()&&c.hardwareConcurrency>=o.device.hardwareConcurrency.min&&c.hardwareConcurrency<=o.device.hardwareConcurrency.max&&c.deviceMemory>=o.device.deviceMemory.min&&!(o.lighthouseDetectionByUserAgent&&/(Speed Insights)|(Chrome-Lighthouse)/.test(c.userAgent))&&!0}}).call(this,n(15))},157:function(t,e,n){var content=n(233);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("73089ea0",content,!0,{sourceMap:!1})},158:function(t,e,n){var content=n(235);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("744fadfc",content,!0,{sourceMap:!1})},159:function(t,e,n){var content=n(237);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("7af26a97",content,!0,{sourceMap:!1})},160:function(t,e,n){var content=n(239);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("b44de92e",content,!0,{sourceMap:!1})},166:function(t,e,n){"use strict";(function(t,r){n.d(e,"a",(function(){return o}));n(7),n(33);function o(e){return"btoa"in t?t.btoa(e):r.from(e).toString("base64")}}).call(this,n(15),n(244).Buffer)},167:function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-300.a1a2f34.woff2"},168:function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-regular.37cb9c1.woff2"},169:function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-500.4738c50.woff2"},170:function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-600.3146a88.woff2"},171:function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-700.8e119b1.woff2"},172:function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-300.4ac811c.woff2"},173:function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-300italic.5399b46.woff2"},174:function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-regular.3c76b16.woff2"},175:function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-italic.7477896.woff2"},176:function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-700.acf5c4d.woff2"},177:function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-700italic.36a3d53.woff2"},178:function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-300.2387319.woff2"},179:function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-300italic.0a03499.woff2"},180:function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-regular.0c99547.woff2"},181:function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-italic.2a4c48d.woff2"},182:function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-700.ea59e2f.woff2"},183:function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-700italic.977866f.woff2"},186:function(t,e,n){"use strict";(function(t){n(65),n(66),n(36),n(29),n(22),n(37),n(18),n(7),n(38),n(17),n(30),n(20),n(25);var r=n(3),o=n(90),c=n(88),l=n(55);function f(t,e,n){Array.from(e.medias).forEach((function(r){return e.getCSSSelectors(r).forEach((function(){var r;return(r=t.classList).add.apply(r,e.getClassNames(n))}))}))}function d(t){return h.apply(this,arguments)}function h(){return(h=Object(r.a)(regeneratorRuntime.mark((function e(n){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.document.fonts.check(n.style+" "+n.weight+" 12px '"+n.family+"'")){e.next=7;break}return(r=[String(n.weight)]).includes("400")&&r.push("normal"),r.includes("700")&&r.push("bold"),o=Array.from(t.document.fonts.keys()).find((function(t){return t.family===n.family&&t.style===n.style&&r.includes(t.weight)})),e.next=7,o.load();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.a={install:function(t,e){t.directive(e,{bind:function(t,e,n){n.fontIdentifier="font-"+Object(c.b)(),[].concat(e.value).map((function(e){e.critical.set(n.context.isCritical||e.critical.get()),Array.from(e.medias).find((function(t){return!e.getCSSSelectors(t).find(l.c)}))&&function(t,e){if(e){var style=document.createElement("style");style.setAttribute("hid",t),style.innerHTML=e,document.head.appendChild(style)}}(n.fontIdentifier,e.getMediaWithClasses()),f(t,e),e.critical.get()&&f(t,e,!0)}))},inserted:function(t,e,n){var c=[].concat(e.value).filter((function(t){return!t.critical.get()}));c.length>0&&Object(o.a)(t,(function(){return Promise.all(c.map(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(n);case 2:f(t,n,!0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}))},unbind:function(t,e,n){Object(o.b)(t),document.querySelector('[hid="'+n.fontIdentifier+'"]')&&document.querySelector('[hid="'+n.fontIdentifier+'"]').remove()}})}}}).call(this,n(15))},187:function(t,e,n){"use strict";var r=!1,o=function(t,e){t.directive(e,{})};e.a={install:function(t,e){r||(r=!0,o(t,"image-preload"))}}},188:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(22),n(53),n(75),n(7),n(117),n(17),n(20);var r=function(){function t(){this.list=new Set}var e=t.prototype;return e.getPreloadString=function(){return Array.from(this.list).reduce((function(t,source){return source&&t.push('<link rel="preload" as="image" crossorigin imagesrcset="'+source.srcset+'">'),t}),[]).join("\n")},e.add=function(source){this.list.add(source)},e.reset=function(){this.list.clear()},t}()},192:function(t,e,n){"use strict";n(24),n(7);var r={abstract:!0,props:{disabled:{type:Boolean,default:!1}},data:function(){return{isServer:!0}},mounted:function(){this.isServer=!1},render:function(){return this.disabled||this.isServer?this.$slots.default[0]:null}},o=n(9),c={name:"SpeedkitInfoLayer",components:{OnlySsr:Object(o.a)(r,void 0,void 0,!1,null,null,null).exports},props:{ignoreNoSsr:{type:Boolean,default:!1}}},l={components:{SpeedkitLayer:Object(o.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("only-ssr",{attrs:{disabled:this.ignoreNoSsr}},[e("div",{staticClass:"nuxt-speedkit__speedkit-layer"},[this._t("default",[e("button",{staticClass:"nuxt-speedkit__speedkit-layer__button"},[this._v("\n        OK\n      ")])])],2)])}),[],!1,null,null,null).exports}},f=(n(232),{speedkitComponents:{GoogleLighthouse:function(){return Promise.resolve().then(n.bind(null,253))},OrganismPageHeader:function(){return Promise.resolve().then(n.bind(null,254))}},components:{InfoLayer:Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("speedkit-layer",{staticClass:"info_layer"},[e("div",[e("p",[this._v("Your connection is too slow…")]),this._v(" "),e("button",{staticClass:"info_layer__button nuxt-speedkit__speedkit-layer__button"},[this._v("\n      Anyway (OK)\n    ")])])])}),[],!1,null,null,null).exports},head:function(){return{title:this.$route.name,meta:[{hid:"description",name:"description",content:this.$route.name+" - description"}]}}}),d=(n(236),Object(o.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("google-lighthouse"),this._v(" "),e("organism-page-header",{attrs:{critical:""}}),this._v(" "),e("Nuxt"),this._v(" "),e("info-layer"),this._v(" "),e("GithubCorner")],1)}),[],!1,null,null,null));e.a=d.exports;installComponents(d,{GithubCorner:n(252).default})},193:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));n(65),n(36),n(86),n(29),n(22),n(53),n(18),n(87),n(7),n(117),n(17),n(30),n(20),n(19),n(31);var r=function(){function t(t){void 0===t&&(t=!1),this.state=t}var e=t.prototype;return e.get=function(){return this.state},e.set=function(t){this.state=this.state||t},t}(),o=(n(110),n(129),n(55)),c=n(88),l=n(166),f=function(){function t(t,e,style,n){void 0===e&&(e=400),void 0===style&&(style="normal");var r=n.critical,o=n.src,c=n.fallbackFamily;this.family=t,this.style=style,this.weight=e,this.src=o,this.fallbackFamily=c,this.critical=r,this.selectors=new Set([""]),this.medias=new Set(["all"])}var e=t.prototype;return e.addSelector=function(t){var e=this;return t=Object(o.d)(Object(o.b)(t)),this.selectors.delete(""),t.forEach((function(t){return e.selectors.add(t)})),this},e.addMedia=function(){var t=this;this.medias.delete("all");for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return n.forEach((function(e){return t.medias.add(e)})),this},e.isCritical=function(){return this.critical.set(!0),this},e.getStyleObject=function(t){return t?{fontFamily:"'"+this.family+"'"}:{fontFamily:this.fallbackFamily.join(", "),fontStyle:this.style,fontWeight:this.weight}},e.getCSSClasses=function(t,e){void 0===e&&(e=!1);var n=this.getCSSSelectors(t,Array.from(this.selectors),e),style=this.getStyleObject(e),r=Object.keys(style);return n.map((function(t){return t+" { "+r.map((function(t){return Object(c.a)(t)+": "+style[t]+";"})).join(" ")+" }"}))},e.getMediaWithClasses=function(){var t=this;return Array.from(this.medias).map((function(e){return"all"===e?[t.getCSSClasses(e),t.getCSSClasses(e,!0)].join("\n"):"@media "+e+" { "+[t.getCSSClasses(e),t.getCSSClasses(e,!0)].join("\n")+"}\n"})).join("")},e.getCSSSelectors=function(t,e,n){var r=this;return void 0===e&&(e=Array.from(this.selectors)),[Array.from(e).map((function(e){return("."+r.getClassName(t,e,n)+" "+e).trim()})).join(o.a)]},e.getClassNames=function(t){var e=this;return Array.from(Array.from(this.medias).map((function(n){return Array.from(e.selectors).map((function(r){return e.getClassName(n,r,t)}))}))).flat()},e.getClassName=function(t,e,n){void 0===e&&(e="");var r=[];return n&&r.push("active"),"all"!==t&&r.push(t),""!==e&&r.push(e),r.length>0&&(r=function(data){if(data)return"-".concat(Object(l.a)(data));return""}(""+r.join("-")).toLowerCase().replace(/[^\w-_]/g,"")),"font-"+this.family.toLowerCase().replace(" ","-")+"-"+this.weight+"-"+this.style+r},e.getFallbackClassName=function(){var t="fallback";return this.getClassName.apply(this,arguments)+"-"+t},e.getFallbackClassNames=function(){var t=this;return Array.from(Array.from(this.medias).map((function(e){return Array.from(t.selectors).map((function(n){return t.getFallbackClassName(e,n)}))}))).flat()},t}();var d=function(){function t(t){this.fallback=t.fallback,this.family=t.family,this.className=this.family.toLowerCase().replace(" ","-"),this.fallback=t.fallback,this.variances=this.prepareVariances(t.variances)}var e=t.prototype;return e.prepareVariances=function(t){return t.map((function(t){return t=Object.assign({style:"normal",weight:400},t,{critical:new r})}))},e.reset=function(){this.variances.forEach((function(t){return t.critical.set(!1)}))},e.getFontVariance=function(t,style){var e=this.variances.find((function(e){return e.weight===t&&e.style===style})),n=e.src,r=e.critical;return new f(this.family,t,style,{critical:r,src:n,fallbackFamily:this.fallback})},e.getCSSFontFaces=function(){var t=this;return this.variances.map((function(e){return"\n      @font-face {\n        font-family: '"+t.family+"';\n        font-style: "+e.style+";\n        font-weight: "+e.weight+";\n        font-display: swap;\n        src: url("+e.src+") format('woff2');\n      }\n    "}))},t}(),h=function(){function t(t){void 0===t&&(t=[]),this.list=t.map((function(t){return new d(t)})),this.definitions=new Set}var e=t.prototype;return e.reset=function(){this.list.forEach((function(t){return t.reset()})),this.definitions.clear()},e.getFont=function(t,e,style){void 0===e&&(e=400),void 0===style&&(style="normal");var n=this.getFontFamilyVariance(t,e,style);return this.addDefinition(n),n},e.getFontStyleTag=function(){return"<style>"+[].concat(this.getFontFamilies().map((function(t){return t.getCSSFontFaces()})).flat(),this.getDefinitions().map((function(t){return t.getMediaWithClasses()}))).join(" ")+"</style>"},e.getFontFamilies=function(){return Array.from(this.list)},e.getDefinitions=function(){return Array.from(this.definitions)},e.addDefinition=function(t){this.definitions.add(t)},e.getFontFamilyVariance=function(t,e,style){var n=this.list.find((function(e){return e.family===t}));if(!n)throw new Error("font family "+t+" not found, please define in module options");return n.getFontVariance(e,style)},t}()},194:function(t,e,n){"use strict";var r=n(186),o=(n(75),n(165),n(118)),c={install:function(t){var e=this;t.mixin({provide:function(){return{criticalParent:this.critical||this.criticalParent}},inject:{criticalParent:{default:function(){return e.critical||!1}}},props:{critical:{type:Boolean,default:function(){return!1}}},computed:{isCritical:function(){return this.criticalParent||this.critical}},beforeCreate:function(){var t=Object.entries(this.$options.speedkitComponents||{}).reduce((function(t,e){var n,r=e[0],c=e[1];return Object.assign(t,((n={})[r]=Object(o.b)((function(){return function(t){return t.then((function(component){return{functional:!0,render:function(t,e){var n=e.data;return n.attrs=Object.assign({},n.attrs,e.props),t(component.default||component,Object.assign({},n))}}})).catch((function(t){throw t}))}(c())}),o.a.VISIBLE,{rootMargin:"0%"}),n))}),{});Object.assign(this.$options.components,t)}})}};var l=!1;e.a={install:function(t,e){l||(l=!0,r.a.install(t,"font"),c.install(t))}}},200:function(t,e,n){n(201),t.exports=n(202)},232:function(t,e,n){"use strict";n(157)},233:function(t,e,n){(e=n(43)(!1)).push([t.i,".info_layer{position:fixed;top:0;left:0;z-index:1000;width:100%;height:100%;background-color:rgba(0,0,0,.25);opacity:0;-webkit-animation-name:fade-in;animation-name:fade-in;-webkit-backdrop-filter:blur(.4375em);backdrop-filter:blur(.4375em);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.info_layer,.info_layer>div{-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-delay:.5s;animation-delay:.5s}.info_layer>div{padding:10px;font-family:sans-serif;font-weight:700;color:#f5f7fa;text-align:center;background-color:#2c3e50;box-shadow:0 0 .625em hsla(0,0%,100%,.6);transform:translateY(-50%);-webkit-animation-name:fall-down;animation-name:fall-down;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (prefers-color-scheme:dark){.info_layer>div{color:#2f495e;background-color:#fff;box-shadow:0 0 .625em rgba(0,0,0,.6)}}@-webkit-keyframes fade-in{to{opacity:1}}@keyframes fade-in{to{opacity:1}}@-webkit-keyframes fall-down{to{transform:translateY(0)}}@keyframes fall-down{to{transform:translateY(0)}}",""]),t.exports=e},234:function(t,e,n){"use strict";n(158)},235:function(t,e,n){(e=n(43)(!1)).push([t.i,".page-header[data-v-3cfb66b8]{position:fixed;top:0;left:0;z-index:1}.page-header .overview-link[data-v-3cfb66b8]{display:inline-block;padding:.55556em;font-size:1.125em;color:#f5f7fa;text-decoration:none;background-color:#2c3e50;border-radius:0 0 .27778em 0;box-shadow:0 0 .27778em hsla(0,0%,100%,.6)}@media (prefers-color-scheme:dark){.page-header .overview-link[data-v-3cfb66b8]{color:#2f495e;background-color:#fff;box-shadow:0 0 .27778em rgba(0,0,0,.6)}}",""]),t.exports=e},236:function(t,e,n){"use strict";n(159)},237:function(t,e,n){(e=n(43)(!1)).push([t.i,'.nuxt-speedkit__noscript{position:absolute;top:0;left:0;width:100%;height:100%}.nuxt-speedkit__custom-image{width:100%;height:100%;vertical-align:middle;-o-object-fit:cover;object-fit:cover}.nuxt-speedkit__lighthouse{--pi:3.14159265358979;--score:0;position:fixed;top:0;right:0;z-index:1;display:block;width:60px;font-family:Arial,Helvetica,sans-serif;text-align:center;pointer-events:none;background-color:#fff}.nuxt-speedkit__lighthouse.ready{pointer-events:all}.nuxt-speedkit__lighthouse>svg{display:block;width:50px;height:50px;margin:5px}.nuxt-speedkit__lighthouse>svg circle{fill:transparent;stroke:var(--color-status);stroke-width:10;transform:rotate(-90deg);transform-origin:50%}.nuxt-speedkit__lighthouse>svg circle.pending{stroke-dasharray:calc(var(--pi)*1.35*45);stroke-dashoffset:calc(var(--pi)*2*45);-webkit-animation:nuxt-speedkit-lighthouse-rotating 1s linear infinite;animation:nuxt-speedkit-lighthouse-rotating 1s linear infinite}.nuxt-speedkit__lighthouse>svg circle.ready{fill:var(--color-status);fill-opacity:.1;stroke-dasharray:calc(var(--pi)*2*45);stroke-dashoffset:calc(var(--pi)*2*45);-webkit-animation:nuxt-speedkit-lighthouse-stroke var(--duration) ease-out forwards;animation:nuxt-speedkit-lighthouse-stroke var(--duration) ease-out forwards}.nuxt-speedkit__lighthouse>svg line{stroke:var(--color-status);stroke-width:10}.nuxt-speedkit__lighthouse>svg text{font-size:32px;fill:var(--color-status)}.nuxt-speedkit__lighthouse span{font-size:12px;text-decoration:underline}.nuxt-speedkit__lighthouse span svg{display:inline;width:12px;height:12px;margin-left:3px}@-webkit-keyframes nuxt-speedkit-lighthouse-stroke{to{stroke-dashoffset:var(--radian)}}@keyframes nuxt-speedkit-lighthouse-stroke{to{transform:rotate(270deg)}}.nuxt-speedkit__image-container{position:relative;width:100%;height:100%;margin:0}.nuxt-speedkit__image-container>span.loading{position:absolute;top:50%;left:50%;display:block;width:10%;transform:translate(-50%,-50%)}.nuxt-speedkit__image-container>span.loading:before{box-sizing:border-box;display:block;padding-top:100%;content:""}.nuxt-speedkit__image-container>span.loading:after{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box;display:block;content:"";border:3px solid #ccc;border-top-color:#07d;border-radius:50%;-webkit-animation-name:spinner;animation-name:spinner;-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-delay:.35s;animation-delay:.35s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;will-change:transform}.nuxt-speedkit__lazy-video{display:block;width:100%;-o-object-fit:contain;object-fit:contain;background-color:#000}.shaka-video-container{height:100vh}html{height:-webkit-fill-available;height:-moz-available;height:stretch}body{min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:0;font-size:5vw;color:#2f495e;background-color:#fff}@media (prefers-color-scheme:dark){body{color:#f5f7fa;background-color:#2c3e50}}@media (min-width:375px){body{font-size:4.26667vw}}@media (min-width:414px){body{font-size:3.86473vw}}@media (min-width:768px){body{font-size:2.08333vw}}@media (min-width:992px){body{font-size:16px}}',""]),t.exports=e},238:function(t,e,n){"use strict";n(160)},239:function(t,e,n){(e=n(43)(!1)).push([t.i,".atom-github-corner:hover .octo-arm{-webkit-animation:octocat-wave .56s ease-in-out;animation:octocat-wave .56s ease-in-out}@media (max-width:500px){.atom-github-corner .octo-arm{-webkit-animation:octocat-wave .56s ease-in-out;animation:octocat-wave .56s ease-in-out}.atom-github-corner:hover .octo-arm{-webkit-animation:none;animation:none}}@-webkit-keyframes octocat-wave{0%,to{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@keyframes octocat-wave{0%,to{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}",""]),t.exports=e},252:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,default:"View source on GitHub"},url:{type:String,default:"https://github.com/GrabarzUndPartner/nuxt-speedkit"}}},o=(n(238),n(9)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"atom-github-corner",attrs:{href:this.url,"aria-label":this.title,title:this.title}},[e("svg",{staticStyle:{position:"absolute",top:"0",right:"0",color:"#fff",border:"0",fill:"#151513"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[e("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),e("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),e("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])}),[],!1,null,null,null);e.default=component.exports},253:function(t,e,n){"use strict";n.r(e);n(7);var r={components:{LighthouseWidget:function(){return n.e(37).then(n.bind(null,392))}},created:function(){this.$router.beforeEach((function(t,e,n){!("lh"in t.query)&&"lh"in e.query&&(t.query.lh=e.query.lh,n({path:t.path,query:t.query})),n()}))}},o=n(9),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return"lh"in this.$route.query?e("lighthouse-widget",this._b({},"lighthouse-widget",this.$attrs,!1)):this._e()}),[],!1,null,null,null);e.default=component.exports},254:function(t,e,n){"use strict";n.r(e);n(234);var r=n(9),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{directives:[{name:"font",rawName:"v-font",value:this.$fonts.getFont("Quicksand",400,"normal"),expression:"$fonts.getFont('Quicksand', 400, 'normal')"}],staticClass:"page-header"},["/"!==this.$route.path?e("nuxt-link",{staticClass:"overview-link",attrs:{to:"/"}},[e("span",[this._v("← Back")])]):this._e()],1)}),[],!1,null,"3cfb66b8",null);e.default=component.exports},55:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"d",(function(){return l}));n(36),n(86),n(22),n(37),n(53),n(18),n(87),n(19),n(38),n(17),n(31),n(54),n(129);var r=", ";function o(t){return function(){for(var t=[],i=0;i<document.styleSheets.length;i++)try{var e=f(document.styleSheets[i].rules||document.styleSheets[i].cssRules);for(var n in e)"string"==typeof e[n].selectorText&&t.push(e[n].selectorText)}catch(t){}return t}().find((function(e){return e===t||l(e).includes(t)}))}function c(t,e){return void 0===e&&(e=r),l(String(t).replace(/ {2}/g,"")).join(e)}function l(t){return t.split(",").map((function(s){return s.trim()}))}function f(t){return Array.from(t).map((function(t){return t instanceof CSSMediaRule?Array.from(t.rules||t.cssRules):[t]})).flat()}},88:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));n(42),n(7),n(19),n(33),n(31);function r(t){return t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}function o(t){return void 0===t&&(t=8),Math.random().toString(36).slice(-t)}},90:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));n(29),n(116),n(7),n(17),n(30),n(20);var r=new Map;var o=function(t,e){if(void 0===t&&(t="0%"),void 0===e&&(e=[0]),"undefined"==typeof IntersectionObserver)return null;var n=new IntersectionObserver((function(t){t.forEach((function(t){if(t.isIntersecting||t.intersectionRatio>0){var e=t.target;!function(t){r.get(t)(),r.delete(t)}(e),n.unobserve(e)}}))}),{rootMargin:t,threshold:e});return n}("0%");function c(t,e){o&&(r.set(t,e),o.observe(t))}function l(t){r.delete(t)}}});