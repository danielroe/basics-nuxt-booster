(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{109:function(t,e,n){"use strict";n.r(e);var l=n(76),o=n(77),r={components:{OrganismTestA:l.default,OrganismTestB:o.default},data:()=>({pictureA:{caption:"test",alt:"Alt Text",title:"Title Text",sources:[{srcset:[{url:"https://placeimg.com/600/400?index-a-1",density:2},{url:"https://placeimg.com/300/200?index-a-1",density:1}],media:"(min-width: 600px)",type:"image/jpeg"},{srcset:[{url:"https://placeimg.com/600/400?index-a-2",density:2},{url:"https://placeimg.com/300/200?index-a-2",density:1}],type:"image/jpeg"}]},pictureB:{alt:"Alt Text",title:"Title Text",sources:[{srcset:[{url:"https://placeimg.com/600/400?index-b-1",density:2},{url:"https://placeimg.com/300/200?index-b-1",density:1}],media:"(min-width: 600px)",type:"image/jpeg"},{srcset:[{url:"https://placeimg.com/600/400?index-b-2",density:2},{url:"https://placeimg.com/300/200?index-b-2",density:1}],type:"image/jpeg"}]}})},c=n(4),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",[e("organism-test-a",{attrs:{picture:this.pictureA,src:"https://placeimg.com/200/300?index-a"}})],1),this._v(" "),e("div",[e("organism-test-b",{attrs:{picture:this.pictureB,src:"https://placeimg.com/400/300?index-b"}})],1),this._v(" "),e("nuxt-link",{attrs:{to:"/detail"}},[this._v("\n    DETAIL\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{OrganismTestA:n(76).default,OrganismTestB:n(77).default})},68:function(t,e,n){var content=n(84);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("992fa67a",content,!0,{sourceMap:!1})},69:function(t,e,n){var content=n(86);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("a887cd6c",content,!0,{sourceMap:!1})},70:function(t,e,n){var content=n(88);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("f0e3adae",content,!0,{sourceMap:!1})},71:function(t,e,n){var content=n(90);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("286468aa",content,!0,{sourceMap:!1})},72:function(t,e,n){var content=n(92);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("13b95c2a",content,!0,{sourceMap:!1})},76:function(t,e,n){"use strict";n.r(e);var l=n(60),o=n(73),r=n(79),c={props:{content:{type:String,default:"Headline"}}},m=(n(85),n(4)),f=Object(m.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("h1",{directives:[{name:"font",rawName:"v-font",value:this.$fonts.getFont("Comic Neue",400,"normal"),expression:"$fonts.getFont('Comic Neue', 400, 'normal')"}],staticClass:"atom-headline"},[this._v("\n  "+this._s(this.content)+"\n")])}),[],!1,null,null,null).exports,d={components:{LayoutTwoColumns:r.a,AtomHeadline:f,LazyImage:l.default,LazyPicture:o.default}},h=(n(87),Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout-two-columns",{staticClass:"organism-test",scopedSlots:t._u([{key:"left",fn:function(){return[n("atom-headline"),t._v(" "),n("lazy-image",{attrs:{src:t.$attrs.src}})]},proxy:!0},{key:"right",fn:function(){return[n("atom-headline"),t._v(" "),n("lazy-picture",t._b({},"lazy-picture",t.$attrs.picture,!1))]},proxy:!0}])})}),[],!1,null,null,null));e.default=h.exports},77:function(t,e,n){"use strict";n.r(e);var l=n(60),o=n(73),r=n(79),c={props:{label:{type:String,default:"Button Label"}}},m=(n(89),n(4)),f=Object(m.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("button",{directives:[{name:"font",rawName:"v-font",value:this.$fonts.getFont("Comic Neue",700,"italic"),expression:"$fonts.getFont('Comic Neue', 700, 'italic')"}],staticClass:"atom-base-button"},[this._v("\n  "+this._s(this.label)+"\n")])}),[],!1,null,null,null).exports,d={components:{LayoutTwoColumns:r.a,AtomBaseButton:f,LazyImage:l.default,LazyPicture:o.default}},h=(n(91),Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout-two-columns",{staticClass:"organism-test",scopedSlots:t._u([{key:"left",fn:function(){return[n("atom-base-button"),t._v(" "),n("lazy-image",{attrs:{src:t.$attrs.src}})]},proxy:!0},{key:"right",fn:function(){return[n("atom-base-button"),t._v(" "),n("lazy-picture",t._b({},"lazy-picture",t.$attrs.picture,!1))]},proxy:!0}])})}),[],!1,null,null,null));e.default=h.exports},79:function(t,e,n){"use strict";var l={components:{}},o=(n(83),n(4)),component=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"font",rawName:"v-font",value:this.$fonts.getFont("Comic Neue",300,"italic"),expression:"$fonts.getFont('Comic Neue', 300, 'italic')"}],staticClass:"layout-two-columns"},[e("div",[this._t("left")],2),this._v(" "),e("div",[this._t("right")],2)])}),[],!1,null,null,null);e.a=component.exports},83:function(t,e,n){"use strict";var l=n(68);n.n(l).a},84:function(t,e,n){(e=n(7)(!1)).push([t.i,".layout-two-columns{display:flex}.layout-two-columns>div{text-align:center;flex-grow:0;flex-shrink:0;flex-basis:calc(49.95% - 7.5px);max-width:calc(49.95% - 7.5px);width:calc(49.95% - 7.5px)}.layout-two-columns>div:nth-child(1n){margin-right:15px;margin-left:0}.layout-two-columns>div:last-child{margin-right:0}.layout-two-columns>div:nth-child(2n){margin-right:0;margin-left:auto}",""]),t.exports=e},85:function(t,e,n){"use strict";var l=n(69);n.n(l).a},86:function(t,e,n){(e=n(7)(!1)).push([t.i,"",""]),t.exports=e},87:function(t,e,n){"use strict";var l=n(70);n.n(l).a},88:function(t,e,n){(e=n(7)(!1)).push([t.i,"",""]),t.exports=e},89:function(t,e,n){"use strict";var l=n(71);n.n(l).a},90:function(t,e,n){(e=n(7)(!1)).push([t.i,"",""]),t.exports=e},91:function(t,e,n){"use strict";var l=n(72);n.n(l).a},92:function(t,e,n){(e=n(7)(!1)).push([t.i,"",""]),t.exports=e}}]);