(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{182:function(e,t,r){"use strict";r.r(t);var n=r(93),l=r(86),o={components:{LazyPicture:n.a,OrganismPreviewContainer:l.a},data(){const e=r(90),t=r(95);return{criticalPicture:{sources:[{srcset:e.srcSet,type:"image/webp"},{srcset:t.srcSet,type:"image/jpeg"}],placeholder:t.placeholder,width:t.width,height:t.height,alt:"Alt Text",title:"Title Text",caption:null}}}},c=r(3),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("organism-preview-container",{attrs:{critical:""},scopedSlots:e._u([{key:"title",fn:function(){return[r("p",[e._v("Critical"),r("br"),e._v("LazyPicture"),r("br"),e._v("Source Switch by >768px")])]},proxy:!0}])},[[r("lazy-picture",e._b({},"lazy-picture",e.criticalPicture,!1))]],2)],1)}),[],!1,null,null,null);t.default=component.exports},83:function(e,t,r){var content=r(85);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("4d17a946",content,!0,{sourceMap:!1})},84:function(e,t,r){"use strict";r(83)},85:function(e,t,r){var n=r(7)(!1);n.push([e.i,".preview-container[data-v-05734d36]{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:50px 0}.preview-container[data-v-05734d36]:first-child{margin-top:0}.preview-container[data-v-05734d36]:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container[data-v-05734d36]{flex-direction:row}}@media (min-width:992px){.preview-container[data-v-05734d36]{flex-direction:row}}.preview-container>div[data-v-05734d36]{display:flex;align-items:center;justify-content:center;width:100vw;height:50vh}@media (orientation:landscape){.preview-container>div[data-v-05734d36]{width:50vw;height:100vh}}@media (min-width:992px){.preview-container>div[data-v-05734d36]{width:50vw;height:100vh}}.preview-container .preview-container__info[data-v-05734d36]{font-size:2em}.preview-container .preview-container__info p[data-v-05734d36]{line-height:1.375;text-align:center}.preview-container .preview-container__info button[data-v-05734d36]{width:90%;margin:0 auto}.preview-container .preview-container__preview[data-v-05734d36]{font-size:1.125em;--bg-opacity:1;background-color:#edf2f7;background-color:rgba(237,242,247,var(--bg-opacity))}@media (prefers-color-scheme:dark){.preview-container .preview-container__preview[data-v-05734d36]{background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity))}}.preview-container .preview-container__preview>article[data-v-05734d36]{text-align:center}.preview-container .preview-container__preview>article[data-v-05734d36],.preview-container .preview-container__preview>div[data-v-05734d36]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>div>ul[data-v-05734d36]{padding:0;margin:0;list-style:none}.preview-container .preview-container__preview>div>ul li[data-v-05734d36]{margin:.625em 0}.preview-container .preview-container__preview>iframe[data-v-05734d36]{position:relative;width:100%;height:100%}",""]),e.exports=n},86:function(e,t,r){"use strict";r(84);var n=r(3),component=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"preview-container"},[r("div",{staticClass:"preview-container__preview"},[e._t("default")],2),e._v(" "),r("div",{directives:[{name:"font",rawName:"v-font",value:e.$fonts.getFont("Quicksand",400,"normal").isCritical(),expression:"$fonts.getFont('Quicksand', 400, 'normal').isCritical()"}],staticClass:"preview-container__info"},[e._t("title",[r("p",[e._v("Preview Info")])])],2)])}),[],!1,null,"05734d36",null);t.a=component.exports},87:function(e,t,r){"use strict";var n=r(16),l={props:{loading:{type:Boolean,default:()=>!1}},data:()=>({init:!1}),computed:{hasSlot(){return this.$slots.caption}},watch:{loading:{handler(e){this.init=e||this.init}}},mounted(){Object(n.a)(this.$el,(()=>this.$emit("visible")))},destroyed(){Object(n.b)(this.$el)}},o=r(3),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("figure",{staticClass:"nuxt-speedkit__image-container"},[e._t("default"),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"loading"}),e._v(" "),e.hasSlot?r("figcaption",[e._t("caption")],2):e._e()],2)}),[],!1,null,null,null);t.a=component.exports},88:function(e,t,r){"use strict";var n={props:{preload:{type:Object,default:()=>null}},methods:{onLoad(e){this.$emit("load",e.target)}}},l=r(3),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("img",{directives:[{name:"image-preload",rawName:"v-image-preload",value:e.preload,expression:"preload"}],staticClass:"nuxt-speedkit__custom-image",attrs:{loading:"lazy",crossorigin:"anonymous"},on:{load:e.onLoad}})}),[],!1,null,null,null);t.a=component.exports},89:function(e,t,r){"use strict";var n=r(3),component=Object(n.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("noscript",{staticClass:"nuxt-speedkit__noscript",inlineTemplate:{render:function(){var e=this,t=e.$createElement;e._self._c;return e._t("default")},staticRenderFns:[]}})}),[],!1,null,null,null);t.a=component.exports},90:function(e,t,r){e.exports={srcSet:r.p+"img/00b4f63-480.webp 480w,"+r.p+"img/93e2d7e-768.webp 768w,"+r.p+"img/a7d60c7-960.webp 960w,"+r.p+"img/3344f2d-1080.webp 1080w,"+r.p+"img/104d21d-1200.webp 1200w,"+r.p+"img/d7e5050-1536.webp 1536w,"+r.p+"img/07db796-2160.webp 2160w,"+r.p+"img/1ab22ac-2400.webp 2400w",images:[{path:r.p+"img/00b4f63-480.webp",width:480,height:480},{path:r.p+"img/93e2d7e-768.webp",width:768,height:768},{path:r.p+"img/a7d60c7-960.webp",width:960,height:960},{path:r.p+"img/3344f2d-1080.webp",width:1080,height:1080},{path:r.p+"img/104d21d-1200.webp",width:1200,height:1200},{path:r.p+"img/d7e5050-1536.webp",width:1536,height:1536},{path:r.p+"img/07db796-2160.webp",width:2160,height:2160},{path:r.p+"img/1ab22ac-2400.webp",width:2400,height:2400}],src:r.p+"img/00b4f63-480.webp",toString:function(){return r.p+"img/00b4f63-480.webp"},placeholder:"data:image/webp;base64,UklGRgwDAABXRUJQVlA4IAADAACwDwCdASooACgAPlEij0UjoiEVXVSsOAUEoAnTKEjDeu8nnc/44OHtz9xnvNMbJ8GfG36sUAu0fCLv1l8/efN/uKchX0F/T/AeIEC4jOs4yzY/wVuLDijeySwvQOUXUm70d/+ARvaPebEqrGWD31p1EUS2Z2vT2mRN2HiC+XWlSbV6YOrkYAD+uEBfLnRUlyLJf2jEbfUWct+DMd17W+Ciotu8TjivYH1boH2G0P4yNk1jNLKWY06n89126h7jqzgQLNgDmykqXQ2f9YNBkvBAUHIwpm/BD/yJyRFWsD776rYHRhTqQ/89lOs0E7p8BWScRl7q87O3Qm7gTDK8vkQKFNPR4XRuk0Xl2LXUzVe47Z+9dH2fwgc+INq4hDOcX52ZVNSSG/lFz0wsSmWnEFO6DVwWryZue0iQC6XBD7dcCKB2mR4xreZj2UhRNG5Dl8UriKh9h5rg3UpdgwjxZXrkMqsua5F/pyOXdSH1hROLBadx2rSy2Pk4uyvEIPv+GcCZ2+/2QYVUW/KfFP8uM/a00i5mkd+hdoDMuzLppTdGyPCiE+MvwUnfrS2oYQC00XFgck9XfX97/m79ySZw0duQerF5qLZwKrOj9ruMWgnY/JcmRewnIe73kPgzRhaCTrqI2aUfs8DhbMAfjbpK5Skz7IA8DljexmTg9D29abIptH+xAN56bM9s8CyTNLpDVG6QyfMySzZLIQIL46OTvhY2e+8reBtUpHf2QKLmITepLjyBLhUV53Qfec/VSx+a/QnLp+6p7ysrYIJIyUGggbJKb8dd1rV5nz+qAlVSEc8IZFWwKzX6vIAeh7aomJIm/OskcO5ztvQFpjDS///x2GZ7oHQE8Wg4kEP8P8xFR6qUeTJurb77uWVgjwURbwqv62JTftISU+lLC1acsMB2QGCq4lgbjgcYU4k+GuVeuVT3Zo+9oHMmZ67TlwjctTLFSeGQXOMYCyRFxFA+A8R/L1jVzUdNaP6bIyedGsgl6WVLpxQKjnrTFf2iHS4nLqyAAAA=",width:480,height:480}},93:function(e,t,r){"use strict";var n=r(87),l=r(89),o={components:{CustomImage:r(88).a},props:{src:{type:String,default:()=>null},srcset:{type:String,default:()=>null},sources:{type:Array,default:()=>null},alt:{type:String,default:()=>""},title:{type:String,default:()=>""},width:{type:Number,default:()=>null},height:{type:Number,default:()=>null}},computed:{preload(){return this.sources.reduce(((e,t)=>("image/webp"===t.type?e=Object.assign({src:this.srcUrl},t):e&&"image/webp"===e.type||(e=Object.assign({src:this.srcUrl},t)),e)),null)},srcUrl(){return null===this.src||this.src.startsWith("data:image")?null:this.src}},methods:{onLoad(e){this.$emit("load",e.target)}}},c=r(3),d=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("picture",[e._l(e.sources,(function(source,t){return r("source",e._b({key:t},"source",source,!1))})),e._v(" "),r("custom-image",e._b({on:{load:e.onLoad}},"custom-image",{src:e.src,srcset:e.srcset,width:e.width,height:e.height,alt:e.alt,title:e.title,preload:e.preload},!1))],2)}),[],!1,null,null,null).exports,h={components:{ImageContainer:n.a,CustomNoScript:l.a,CustomPicture:d},props:{sources:{type:Array,default:()=>[]},placeholder:{type:[Array,String],default:()=>null},placeholderSources:{type:Array,default:()=>[]},alt:{type:String,default:()=>""},title:{type:String,default:()=>""},width:{type:Number,default:()=>null},height:{type:Number,default:()=>null}},data:()=>({init:!1,loading:!1}),computed:{pictureSources(){return this.init?this.sources:this.placeholderSources},hasSlot(){return this.$slots.caption}},methods:{onVisible(){this.loading=!0,this.init=!0},onLoad(){this.loading=!1,this.$emit("load")}}},w=Object(c.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("image-container",{staticClass:"nuxt-speedkit__lazy-picture",attrs:{loading:e.loading},on:{visible:e.onVisible},scopedSlots:e._u([{key:"caption",fn:function(){return[e._t("caption")]},proxy:!0}],null,!0)},[[r("custom-picture",e._b({on:{load:e.onLoad}},"custom-picture",{src:e.placeholder,sources:e.pictureSources,width:e.width,height:e.height,alt:e.alt,title:e.title},!1)),e._v(" "),e.init?e._e():r("custom-no-script",[r("custom-picture",e._b({},"custom-picture",{sources:e.sources,width:e.width,height:e.height,alt:e.alt,title:e.title},!1))],1)]],2)}),[],!1,null,null,null);t.a=w.exports},95:function(e,t,r){e.exports={srcSet:r.p+"img/59e11e9-480.jpg 480w,"+r.p+"img/6a9a41f-768.jpg 768w,"+r.p+"img/79b55d2-960.jpg 960w,"+r.p+"img/0ee1ab8-1080.jpg 1080w,"+r.p+"img/de250d4-1200.jpg 1200w,"+r.p+"img/ff88e34-1536.jpg 1536w,"+r.p+"img/4ed6f1a-2160.jpg 2160w,"+r.p+"img/b17eca7-2400.jpg 2400w",images:[{path:r.p+"img/59e11e9-480.jpg",width:480,height:480},{path:r.p+"img/6a9a41f-768.jpg",width:768,height:768},{path:r.p+"img/79b55d2-960.jpg",width:960,height:960},{path:r.p+"img/0ee1ab8-1080.jpg",width:1080,height:1080},{path:r.p+"img/de250d4-1200.jpg",width:1200,height:1200},{path:r.p+"img/ff88e34-1536.jpg",width:1536,height:1536},{path:r.p+"img/4ed6f1a-2160.jpg",width:2160,height:2160},{path:r.p+"img/b17eca7-2400.jpg",width:2400,height:2400}],src:r.p+"img/59e11e9-480.jpg",toString:function(){return r.p+"img/59e11e9-480.jpg"},placeholder:"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAYHBQP/xAAuEAABAwMDAwMDAwUAAAAAAAABAgMEAAURBhIhBzFBFFFhEyIyUnGRgYKhsdH/xAAYAQADAQEAAAAAAAAAAAAAAAADBAUGAf/EACERAAICAgIBBQAAAAAAAAAAAAECAAMREgQhMSIjMkHB/9oADAMBAAIRAxEAPwDYsWpmWLXGYDyUONuFK8/pJJGeR8/xU/6g3y+wdSsps0VQS/23pIbJ8kntgjnI9qVtH6nusu4NSG4yHIjK8ub0BQ3Ywnj+tPl4jTry/CZ9IpRlqBC9yU7fYgEjjsDjtmsgoIIRxmaggYLKYuPdVX4rX0mMtyB9u9OCnOcEcitrobLvky/PS7up2W/JQHG5DrhV9h5CU5/EDPb3zSbdtF3pLdnkPQkNTnUha46zhxlxW77FJPjKQf7jVS0nYb3pyWhqRFaTFVKLTbi1HKmdqPprHfAJJGT7fNMCiqpfb8wJuZz6upTI0jdMf3pWCnCfv4Oe5z/iila1zJJukyY/KDrb+1AHlKkZHf5GP4oqZeSbDmFAGJHun2krk9o5akShDS8+VrcT+QAA4BPA/fxTXFvMa3SDEMSE0420hpTc99RbUpCiUrS4kKJScnII5wMGnnp1CYXZUxCkYQSOfet3UWiYV/tq2gw2zOQD9J9ttCVcj9v90zRyH3LznIrUjRvEg+l9Xv31FrXcW1rkx3EtOqPBWlJO1eO+NuAM+BVEZ1Pd7xLuLbUJRaVO9O2GYpJdYRtUkB0K/AqTggJ3cEZHeusTpSzHCLnNLgu29MdTbbZ2OMk43EJHCk989uMcd6rGktHxNOyGvQLeMGOxsjMuk7kqJypR9ySSaZpNocsOgYHkGgVj7I/JO9S2hdssjl7di+llOvIMlKEbElRHfb4PgminjqkylWibsFZViOpfzkc0UpfXl8wlL5WTrp5dW/VzY7agENvbQfn3qrWmQjIUBuzyST3PtRRQ6ThuoXkAHMYobiVJBWlOR5xXRSw2kpJ48H/tFFWFJ1kNlG2JP+q1yab03cWQsJCmClSu+M8CiiikvmSTKiDVQBP/2Q==",width:480,height:480}}}]);