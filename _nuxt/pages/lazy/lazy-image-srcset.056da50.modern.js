(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{124:function(e,t,r){"use strict";r.r(t);var n={data:()=>({imageA:{caption:null,alt:"Alt Text",title:"Title Text",srcset:[{url:"https://placeimg.com/768/768?index-a-1",width:768},{url:"https://placeimg.com/1200/1200?index-a-2",width:2400}]}})},o=r(4),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("organism-spacer"),e._v(" "),r("organism-preview-container",{scopedSlots:e._u([{key:"title",fn:function(){return[r("p",[e._v("LazyImage - SRCSET"),r("br"),e._v("Image Switch by >768px")])]},proxy:!0}])},[[r("LazyImage",e._b({},"LazyImage",e.imageA,!1))]],2)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OrganismSpacer:r(67).default,LazyImage:r(60).default,OrganismPreviewContainer:r(55).default})},51:function(e,t,r){var content=r(54);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("7d9112ab",content,!0,{sourceMap:!1})},52:function(e,t,r){"use strict";(function(e){e.IntersectionObserver=e.IntersectionObserver||class{observe(){}unobserve(){}},t.a={abstract:!0,props:{root:{type:e.HTMLElement,default:()=>null},rootMargin:{type:String,default:()=>"0px"},threshold:{type:Array,default:()=>[0]}},created(){if(!this.$attrs.critical||!this.$options.critical){const e=(({root:e,rootMargin:t,threshold:r})=>({root:e,rootMargin:t,threshold:r}))(this);this.observer=new IntersectionObserver(([e])=>this.onIntersect(e),e)}},mounted(){this.observer&&this.observer.observe(this.$el)},destroyed(){this.observer&&this.observer.disconnect()},methods:{onIntersect(e){e.isIntersecting&&(this.observer.unobserve(this.$el),this.triggerEnter())},triggerEnter(e){this.$emit("enter",e)}},render(){try{return this.$slots.default[0]}catch(e){throw new Error("IntersectionObserver.vue can only render one, and exactly one child component.")}}}}).call(this,r(2))},53:function(e,t,r){"use strict";var n=r(51);r.n(n).a},54:function(e,t,r){(t=r(7)(!1)).push([e.i,".preview-container{display:flex;flex-direction:column;height:100%;margin:50px 0}.preview-container:first-child{margin-top:0}.preview-container:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container{flex-direction:row}}@media (min-width:1024px){.preview-container{flex-direction:row}}.preview-container>div{flex:0 0 50%}.preview-container .preview-container__info{display:flex;align-items:center;justify-content:center;font-size:7.72947vw}@media (min-width:768px){.preview-container .preview-container__info{font-size:4.16667vw}}@media (min-width:1024px){.preview-container .preview-container__info{font-size:32px}}.preview-container .preview-container__info p{line-height:1.375;text-align:center}.preview-container .preview-container__preview{background:#eee}.preview-container .preview-container__preview>article{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:4.83092vw}@media (min-width:768px){.preview-container .preview-container__preview>article{font-size:2.60417vw}}@media (min-width:1024px){.preview-container .preview-container__preview>article{font-size:20px}}.preview-container .preview-container__preview>figure,.preview-container .preview-container__preview>iframe{position:relative;width:100%;height:100%}.preview-container .preview-container__preview>figure img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}",""]),e.exports=t},55:function(e,t,r){"use strict";r.r(t);var n={},o=(r(53),r(4)),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preview-container"},[t("div",{staticClass:"preview-container__preview"},[this._t("default")],2),this._v(" "),t("div",{staticClass:"preview-container__info"},[this._t("title",[t("p",[this._v("Preview Info")])])],2)])}),[],!1,null,null,null);t.default=component.exports},56:function(e,t,r){var content=r(63);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("80409e3c",content,!0,{sourceMap:!1})},57:function(e,t,r){"use strict";function n(e){return[].concat(e).sort((a,b)=>a.density-b.density||a.width-b.width)}r.d(t,"a",(function(){return n}))},58:function(e,t,r){var content=r(66);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("7a80f00b",content,!0,{sourceMap:!1})},59:function(e,t,r){"use strict";var n=r(52).a,o=r(4),component=Object(o.a)(n,void 0,void 0,!1,null,null,null);t.a=component.exports},60:function(e,t,r){"use strict";r.r(t);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var c=new Map;function l(e){if("undefined"==typeof IntersectionObserver)return null;var t=JSON.stringify(e);if(c.has(t))return c.get(t);var r=new IntersectionObserver((function(e){e.forEach((function(e){(e.isIntersecting||e.intersectionRatio>0)&&e.target.hydrate&&e.target.hydrate()}))}),e);return c.set(t,r),r}function h(e,t){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){n(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({render:function(t){var r=this.$el?this.$el.tagName:"div";return this.$el||e._resolve(),t(r)}},t)}function f(component){var e,t=new Promise((function(t){e=t}));return t._resolve=function(){e("function"==typeof component?component():component)},t}var d="undefined"==typeof window;Boolean,Boolean,Boolean,Boolean,Boolean;var v=r(61),w=r.n(v),m=r(59),y=r(57);const _=new Map;function x(e,t){return Array.isArray(e)?function(e,t){return O(Object(y.a)(e)[0].url,t)}(e,t):O(e,t)}async function O(e,t){if(!_.has(e)){const{width:r,height:n}=await t(e);_.set(e,{width:r,height:n})}return _.get(e)}var j=r(4),S=Object(j.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("noscript",{inlineTemplate:{render:function(){var e=this.$createElement;this._self._c;return this._t("default")},staticRenderFns:[]}})}),[],!1,null,null,null).exports,I={components:{IntersectionObserver:m.a,CustomNoScript:S,CustomImage:function(component){if(d)return component;var e=f(component),t=h(e);return function(){return{component:e,delay:0,loading:t}}}(()=>r.e(0).then(r.bind(null,108)))},props:{src:{type:String,default:()=>null},srcset:{type:Array,default:()=>null},seo:{type:Boolean,default:()=>!0}},async fetch(){({width:this.width,height:this.height}=await x(this.src||this.srcset,this.$getImageSizeFromUrl))},data:()=>({width:0,height:0,lazy:{src:null,srcset:null}}),computed:{preparedSrcset(){return w.a.stringify(Object(y.a)(this.srcset||[]))||null},hasSlot(){return this.$slots.caption}},created(){},methods:{load(){({src:this.lazy.src,srcset:this.lazy.srcset}=this)},onEnter(){this.load()}}},$=(r(62),Object(j.a)(I,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("intersection-observer",{on:{enter:e.onEnter}},[r("figure",[e._t("default",[r("custom-image",e._b({},"custom-image",Object.assign({},e.$attrs,{width:e.width,height:e.height,src:e.src,srcset:e.preparedSrcset}),!1))]),e._v(" "),r("custom-no-script",[r("custom-image",e._b({},"custom-image",Object.assign({},e.$attrs,{width:e.width,height:e.height,src:e.src,srcset:e.preparedSrcset}),!1))],1),e._v(" "),e.hasSlot?r("figcaption",[e._t("caption")],2):e._e()],2)])}),[],!1,null,"7bea74bb",null));t.default=$.exports},61:function(e,t,r){"use strict";const n=/^\d+$/;t.parse=e=>{return(t=e.split(",").map(e=>{const t={};return e.trim().split(/\s+/).forEach((element,e)=>{if(0===e)return void(t.url=element);const r=element.slice(0,element.length-1),o=element[element.length-1],c=parseInt(r,10),l=parseFloat(r);if("w"===o&&n.test(r))t.width=c;else if("h"===o&&n.test(r))t.height=c;else{if("x"!==o||Number.isNaN(l))throw new Error("Invalid srcset descriptor: "+element);t.density=l}}),t})).sort().filter((element,e)=>JSON.stringify(element)!==JSON.stringify(t[e-1]));var t},t.stringify=e=>[...new Set(e.map(element=>{if(!element.url)throw new Error("URL is required");const e=[element.url];return element.width&&e.push(element.width+"w"),element.height&&e.push(element.height+"h"),element.density&&e.push(element.density+"x"),e.join(" ")}))].join(", ")},62:function(e,t,r){"use strict";var n=r(56);r.n(n).a},63:function(e,t,r){(t=r(7)(!1)).push([e.i,"figure[data-v-7bea74bb]{margin:0}",""]),e.exports=t},65:function(e,t,r){"use strict";var n=r(58);r.n(n).a},66:function(e,t,r){(t=r(7)(!1)).push([e.i,".organism-spacer{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;font-size:7.72947vw}@media (min-width:768px){.organism-spacer{font-size:4.16667vw}}@media (min-width:1024px){.organism-spacer{font-size:32px}}.organism-spacer>span{display:block;font-size:44px;text-align:center}.organism-spacer p{line-height:1.375;text-align:center}",""]),e.exports=t},67:function(e,t,r){"use strict";r.r(t);var n={props:{title:{type:String,default:"Scroll down"}}},o=(r(65),r(4)),component=Object(o.a)(n,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"organism-spacer"},[t("p",[this._v("Scroll down")]),this._v(" "),t("span",[this._v("↓")])])}],!1,null,null,null);t.default=component.exports}}]);