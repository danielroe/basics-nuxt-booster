(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{218:function(t,e,n){var content=n(228);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("4a8cdcb4",content,!0,{sourceMap:!1})},219:function(t,e,n){var content=n(230);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("4a2c1250",content,!0,{sourceMap:!1})},227:function(t,e,n){"use strict";var o=n(218);n.n(o).a},228:function(t,e,n){(e=n(55)(!1)).push([t.i,"",""]),t.exports=e},229:function(t,e,n){"use strict";var o=n(219);n.n(o).a},230:function(t,e,n){(e=n(55)(!1)).push([t.i,"",""]),t.exports=e},231:function(t,e,n){"use strict";n.r(e);n(221),n(12),n(154),n(30),n(31);var o=n(233),r=n(235),c=n(237),l={components:{CustomImage:n(236).a},props:{src:{type:String,default:function(){return null}},sources:{type:Array,default:function(){return null}},alt:{type:String,default:function(){return""}},title:{type:String,default:function(){return""}},width:{type:Number,default:function(){return null}},height:{type:Number,default:function(){return null}}},methods:{onLoad:function(t){this.$emit("load",t.target)}}},f=(n(227),n(16)),d=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[t._l(t.sources,(function(source,e){return n("source",t._b({key:e},"source",source,!1))})),t._v(" "),n("custom-image",t._b({on:{load:t.onLoad}},"custom-image",{src:t.src,width:t.width,height:t.height,alt:t.alt,title:t.title},!1))],2)}),[],!1,null,"149d885e",null).exports,h=new Set,m={components:{ImageContainer:r.a,CustomNoScript:c.a,CustomPicture:d},props:{sources:{type:Array,default:function(){return[]}},placeholder:{type:String,default:function(){return null}},alt:{type:String,default:function(){return""}},title:{type:String,default:function(){return""}},width:{type:Number,default:function(){return null}},height:{type:Number,default:function(){return null}}},data:function(){return{init:!1,loading:!1}},computed:{pictureSources:function(){return this.init?(h.add(JSON.stringify(this.sources)),this.sources):null},hasSlot:function(){return this.$slots.caption}},methods:{onRequestHiRes:function(){this.loading=!0,this.init=!0},onVisible:function(){this.loading=Object(o.a)()||h.has(JSON.stringify(this.sources)),this.init=Object(o.a)()||h.has(JSON.stringify(this.sources))},onLoad:function(){this.loading=!1,this.$emit("load")}}},y=(n(229),Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("image-container",{attrs:{loading:t.loading},on:{visible:t.onVisible,requestHiRes:t.onRequestHiRes},scopedSlots:t._u([{key:"caption",fn:function(){return[t._t("caption")]},proxy:!0}],null,!0)},[[n("custom-picture",t._b({on:{load:t.onLoad}},"custom-picture",{src:t.placeholder,sources:t.pictureSources,width:t.width,height:t.height,alt:t.alt,title:t.title},!1)),t._v(" "),t.init?t._e():n("custom-no-script",[n("custom-picture",t._b({},"custom-picture",{src:t.placeholder,sources:t.sources,width:t.width,height:t.height,alt:t.alt,title:t.title},!1))],1)]],2)}),[],!1,null,"4835165f",null));e.default=y.exports}}]);