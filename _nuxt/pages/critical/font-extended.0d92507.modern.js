(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{158:function(e,t,n){"use strict";n.r(t);var r={components:{OrganismPreviewContainer:n(49).default},data:()=>({contentA:"<p>This is a <strong>Rich</strong><b>Text</b> with different <i>font</i> <em>variants</em>.</p>"})},o=n(2),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("organism-preview-container",{scopedSlots:e._u([{key:"title",fn:function(){return[n("p",[e._v("Critical"),n("br"),e._v("Font extended usage")])]},proxy:!0}])},[[n("article",{directives:[{name:"font",rawName:"v-font",value:[e.$fonts.getFont("Comic Neue",400,"normal").isCritical(),e.$fonts.getFont("Comic Neue",700,"normal").addSelector("b, strong").isCritical(),e.$fonts.getFont("Comic Neue",400,"italic").addSelector("i, em").isCritical()],expression:"[\n          $fonts.getFont('Comic Neue', 400, 'normal').isCritical(),\n          $fonts.getFont('Comic Neue', 700, 'normal').addSelector('b, strong').isCritical(),\n          $fonts.getFont('Comic Neue', 400, 'italic').addSelector('i, em').isCritical()\n        ]"}],domProps:{innerHTML:e._s(e.contentA)}})]],2)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OrganismPreviewContainer:n(49).default})},48:function(e,t,n){var content=n(51);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("7d9112ab",content,!0,{sourceMap:!1})},49:function(e,t,n){"use strict";n.r(t);var r={},o=(n(50),n(2)),component=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preview-container"},[t("div",{staticClass:"preview-container__preview"},[this._t("default")],2),this._v(" "),t("div",{staticClass:"preview-container__info"},[this._t("title",[t("p",[this._v("Preview Info")])])],2)])}),[],!1,null,null,null);t.default=component.exports},50:function(e,t,n){"use strict";var r=n(48);n.n(r).a},51:function(e,t,n){(t=n(8)(!1)).push([e.i,".preview-container{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:50px 0}.preview-container:first-child{margin-top:0}.preview-container:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container{flex-direction:row}}@media (min-width:992px){.preview-container{flex-direction:row}}.preview-container>div{display:flex;align-items:center;justify-content:center;width:100vw;height:50vh}@media (orientation:landscape){.preview-container>div{width:50vw;height:100vh}}@media (min-width:992px){.preview-container>div{width:50vw;height:100vh}}.preview-container .preview-container__info{font-size:2em}.preview-container .preview-container__info p{line-height:1.375;text-align:center}.preview-container .preview-container__preview{font-size:1.125em;background:#eee}.preview-container .preview-container__preview>article,.preview-container .preview-container__preview>div{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>iframe{position:relative;width:100%;height:100%}",""]),e.exports=t}}]);