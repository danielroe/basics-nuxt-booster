(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{224:function(e,t,n){var content=n(227);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(61).default)("7d9112ab",content,!0,{sourceMap:!1})},225:function(e,t,n){"use strict";n.r(t);var o={},r=(n(226),n(16)),component=Object(r.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preview-container"},[t("div",{staticClass:"preview-container__preview"},[this._t("default")],2),this._v(" "),t("div",{staticClass:"preview-container__info"},[this._t("title",[t("p",[this._v("Preview Info")])])],2)])}),[],!1,null,null,null);t.default=component.exports},226:function(e,t,n){"use strict";var o=n(224);n.n(o).a},227:function(e,t,n){(t=n(60)(!1)).push([e.i,".preview-container{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:50px 0}.preview-container:first-child{margin-top:0}.preview-container:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container{flex-direction:row}}@media (min-width:992px){.preview-container{flex-direction:row}}.preview-container>div{display:flex;align-items:center;justify-content:center;width:100vw;height:50vh}@media (orientation:landscape){.preview-container>div{width:50vw;height:100vh}}@media (min-width:992px){.preview-container>div{width:50vw;height:100vh}}.preview-container .preview-container__info{font-size:2em}.preview-container .preview-container__info p{line-height:1.375;text-align:center}.preview-container .preview-container__preview{font-size:1.125em;background:#eee}.preview-container .preview-container__preview>article,.preview-container .preview-container__preview>div{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>iframe{position:relative;width:100%;height:100%}",""]),e.exports=t},313:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{contentA:"<p>This is a <strong>RichText</strong> with different <i>font variants</i>.</p>"}}},r=n(16),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("organism-preview-container",{scopedSlots:e._u([{key:"title",fn:function(){return[n("p",[e._v("Critical"),n("br"),e._v("Font extended usage")])]},proxy:!0}])},[[n("article",{directives:[{name:"font",rawName:"v-font",value:[e.$fonts.getFont("Comic Neue",400,"normal").isCritical(),e.$fonts.getFont("Comic Neue",700,"normal").addSelector("b, strong").isCritical(),e.$fonts.getFont("Comic Neue",400,"italic").addSelector("i, em").isCritical()],expression:"[\n          $fonts.getFont('Comic Neue', 400, 'normal').isCritical(),\n          $fonts.getFont('Comic Neue', 700, 'normal').addSelector('b, strong').isCritical(),\n          $fonts.getFont('Comic Neue', 400, 'italic').addSelector('i, em').isCritical()\n        ]"}],domProps:{innerHTML:e._s(e.contentA)}})]],2),e._v(" "),n("organism-preview-container",{scopedSlots:e._u([{key:"title",fn:function(){return[n("p",[e._v("Font extended usage")])]},proxy:!0}])},[[n("article",{directives:[{name:"font",rawName:"v-font",value:[e.$fonts.getFont("Lobster Two",400,"normal"),e.$fonts.getFont("Lobster Two",700,"normal").addSelector("b, strong"),e.$fonts.getFont("Lobster Two",400,"italic").addSelector("i, em")],expression:"[\n          $fonts.getFont('Lobster Two', 400, 'normal'),\n          $fonts.getFont('Lobster Two', 700, 'normal').addSelector('b, strong'),\n          $fonts.getFont('Lobster Two', 400, 'italic').addSelector('i, em')\n        ]"}],domProps:{innerHTML:e._s(e.contentA)}})]],2)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OrganismPreviewContainer:n(225).default})}}]);