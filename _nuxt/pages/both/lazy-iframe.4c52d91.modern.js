(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{139:function(e,t,r){"use strict";r.r(t);var n={data:()=>({iframeA:{src:"https://grabarzundpartner.de"}})},o=r(2),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("organism-preview-container",{scopedSlots:e._u([{key:"title",fn:function(){return[r("p",[e._v("Critical"),r("br"),e._v("LazyIframe")])]},proxy:!0}])},[[r("LazyIframe",e._b({},"LazyIframe",e.iframeA,!1))]],2)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LazyIframe:r(72).default,OrganismPreviewContainer:r(50).default})},49:function(e,t,r){var content=r(52);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(9).default)("7d9112ab",content,!0,{sourceMap:!1})},50:function(e,t,r){"use strict";r.r(t);var n={},o=(r(51),r(2)),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preview-container"},[t("div",{staticClass:"preview-container__preview"},[this._t("default")],2),this._v(" "),t("div",{staticClass:"preview-container__info"},[this._t("title",[t("p",[this._v("Preview Info")])])],2)])}),[],!1,null,null,null);t.default=component.exports},51:function(e,t,r){"use strict";var n=r(49);r.n(n).a},52:function(e,t,r){(t=r(8)(!1)).push([e.i,".preview-container{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:50px 0}.preview-container:first-child{margin-top:0}.preview-container:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container{flex-direction:row}}@media (min-width:992px){.preview-container{flex-direction:row}}.preview-container>div{display:flex;align-items:center;justify-content:center;width:100vw;height:50vh}@media (orientation:landscape){.preview-container>div{width:50vw;height:100vh}}@media (min-width:992px){.preview-container>div{width:50vw;height:100vh}}.preview-container .preview-container__info{font-size:2em}.preview-container .preview-container__info p{line-height:1.375;text-align:center}.preview-container .preview-container__preview{font-size:1.125em;background:#eee}.preview-container .preview-container__preview>article,.preview-container .preview-container__preview>div{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>iframe{position:relative;width:100%;height:100%}",""]),e.exports=t},53:function(e,t,r){"use strict";(function(e){e.IntersectionObserver=e.IntersectionObserver||class{observe(){}unobserve(){}},t.a={abstract:!0,props:{root:{type:e.HTMLElement,default:()=>null},rootMargin:{type:String,default:()=>"0px"},threshold:{type:Array,default:()=>[0]}},created(){if(!this.$attrs.critical||!this.$options.critical){const e=(({root:e,rootMargin:t,threshold:r})=>({root:e,rootMargin:t,threshold:r}))(this);this.observer=new IntersectionObserver(([e])=>this.onIntersect(e),e)}},mounted(){this.observer&&this.observer.observe(this.$el)},destroyed(){this.observer&&this.observer.disconnect()},methods:{onIntersect(e){e.isIntersecting&&(this.observer.unobserve(this.$el),this.triggerEnter())},triggerEnter(e){this.$emit("enter",e)}},render(){try{return this.$slots.default[0]}catch(e){throw new Error("IntersectionObserver.vue can only render one, and exactly one child component.")}}}}).call(this,r(4))},57:function(e,t,r){var content=r(70);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(9).default)("2c5ad93a",content,!0,{sourceMap:!1})},62:function(e,t,r){"use strict";var n=r(53).a,o=r(2),component=Object(o.a)(n,void 0,void 0,!1,null,null,null);t.a=component.exports},69:function(e,t,r){"use strict";var n=r(57);r.n(n).a},70:function(e,t,r){(t=r(8)(!1)).push([e.i,"",""]),e.exports=t},72:function(e,t,r){"use strict";r.r(t);var n={components:{IntersectionObserver:r(62).a},props:{src:{type:String,default:()=>null}},data:()=>({lazySrc:null}),methods:{onEnter(e){this.lazySrc=this.src}}},o=(r(69),r(2)),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("intersection-observer",{on:{enter:this.onEnter}},[t("iframe",this._b({staticClass:"lazy-iframe",attrs:{src:this.lazySrc,loading:"lazy"}},"iframe",this.$attrs,!1))])}),[],!1,null,"4ec2f79b",null);t.default=component.exports}}]);