(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{217:function(e,t,n){var content=n(220);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(55).default)("7d9112ab",content,!0,{sourceMap:!1})},219:function(e,t,n){"use strict";var r=n(217);n.n(r).a},220:function(e,t,n){(t=n(54)(!1)).push([e.i,".preview-container{display:flex;flex-direction:column;height:100%;margin:50px 0}.preview-container:first-child{margin-top:0}.preview-container:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container{flex-direction:row}}@media (min-width:1024px){.preview-container{flex-direction:row}}.preview-container>div{flex:0 0 50%}.preview-container .preview-container__info{display:flex;align-items:center;justify-content:center;font-size:7.72947vw}@media (min-width:768px){.preview-container .preview-container__info{font-size:4.16667vw}}@media (min-width:1024px){.preview-container .preview-container__info{font-size:32px}}.preview-container .preview-container__info p{line-height:1.375;text-align:center}.preview-container .preview-container__preview{background:#eee}.preview-container .preview-container__preview>article{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:4.83092vw}@media (min-width:768px){.preview-container .preview-container__preview>article{font-size:2.60417vw}}@media (min-width:1024px){.preview-container .preview-container__preview>article{font-size:20px}}.preview-container .preview-container__preview>figure,.preview-container .preview-container__preview>iframe{position:relative;width:100%;height:100%}.preview-container .preview-container__preview>figure img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}",""]),e.exports=t},221:function(e,t,n){"use strict";n.r(t);var r={},o=(n(219),n(22)),component=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preview-container"},[t("div",{staticClass:"preview-container__preview"},[this._t("default")],2),this._v(" "),t("div",{staticClass:"preview-container__info"},[this._t("title",[t("p",[this._v("Preview Info")])])],2)])}),[],!1,null,null,null);t.default=component.exports},224:function(e,t,n){var content=n(233);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(55).default)("7a80f00b",content,!0,{sourceMap:!1})},232:function(e,t,n){"use strict";var r=n(224);n.n(r).a},233:function(e,t,n){(t=n(54)(!1)).push([e.i,".organism-spacer{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;font-size:7.72947vw}@media (min-width:768px){.organism-spacer{font-size:4.16667vw}}@media (min-width:1024px){.organism-spacer{font-size:32px}}.organism-spacer>span{display:block;font-size:44px;text-align:center}.organism-spacer p{line-height:1.375;text-align:center}",""]),e.exports=t},234:function(e,t,n){"use strict";n.r(t);var r={props:{title:{type:String,default:"Scroll down"}}},o=(n(232),n(22)),component=Object(o.a)(r,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"organism-spacer"},[t("p",[this._v("Scroll down")]),this._v(" "),t("span",[this._v("↓")])])}],!1,null,null,null);t.default=component.exports},292:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{pictureA:{alt:"Alt Text",title:"Title Text",sources:[{srcset:[{url:"img/lazy-1200.webp"},{url:"img/lazy-2400.webp",density:2}],media:"(min-width: 768px)",type:"image/webp"},{srcset:[{url:"img/lazy-1200.jpg"},{url:"img/lazy-2400.jpg",density:2}],media:"(min-width: 768px)",type:"image/jpeg"},{srcset:[{url:"img/lazy-768.webp"},{url:"img/lazy-1536.webp",density:2}],type:"image/webp"},{srcset:[{url:"img/lazy-768.jpg"},{url:"img/lazy-1536.jpg",density:2}],type:"image/jpeg"}]}}}},o=n(22),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("organism-spacer"),e._v(" "),n("organism-preview-container",{scopedSlots:e._u([{key:"title",fn:function(){return[n("p",[e._v("LazyPicture"),n("br"),e._v("Source Switch by >768px")])]},proxy:!0}])},[[n("LazyPicture",e._b({},"LazyPicture",e.pictureA,!1))]],2)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OrganismSpacer:n(234).default,LazyPicture:n(240).default,OrganismPreviewContainer:n(221).default})}}]);