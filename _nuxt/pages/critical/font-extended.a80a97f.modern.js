(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{123:function(e,t,n){"use strict";n.r(t);var r={data:()=>({contentA:"<p>This is a <strong>RichText</strong> with different <i>font variants</i>.</p>"})},o=n(4),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("organism-preview-container",{scopedSlots:e._u([{key:"title",fn:function(){return[n("p",[e._v("Critical"),n("br"),e._v("Font extended usage")])]},proxy:!0}])},[[n("article",{directives:[{name:"font",rawName:"v-font",value:[e.$fonts.getFont("Comic Neue",400,"normal").isCritical(),e.$fonts.getFont("Comic Neue",700,"normal").bySelector("strong").isCritical(),e.$fonts.getFont("Comic Neue",400,"italic").bySelector("i").isCritical()],expression:"[$fonts.getFont('Comic Neue', 400, 'normal').isCritical(), $fonts.getFont('Comic Neue', 700, 'normal').bySelector('strong').isCritical(), $fonts.getFont('Comic Neue', 400, 'italic').bySelector('i').isCritical()]"}],domProps:{innerHTML:e._s(e.contentA)}})]],2)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OrganismPreviewContainer:n(60).default})},56:function(e,t,n){var content=n(59);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("7d9112ab",content,!0,{sourceMap:!1})},58:function(e,t,n){"use strict";var r=n(56);n.n(r).a},59:function(e,t,n){(t=n(7)(!1)).push([e.i,".preview-container{display:flex;flex-direction:column;height:100%;margin:50px 0}.preview-container:first-child{margin-top:0}.preview-container:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container{flex-direction:row}}@media (min-width:1024px){.preview-container{flex-direction:row}}.preview-container>div{flex:0 0 50%}.preview-container .preview-container__info{display:flex;align-items:center;justify-content:center;font-size:7.72947vw}@media (min-width:768px){.preview-container .preview-container__info{font-size:4.16667vw}}@media (min-width:1024px){.preview-container .preview-container__info{font-size:32px}}.preview-container .preview-container__info p{line-height:1.375;text-align:center}.preview-container .preview-container__preview{background:#eee}.preview-container .preview-container__preview>article{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:4.83092vw}@media (min-width:768px){.preview-container .preview-container__preview>article{font-size:2.60417vw}}@media (min-width:1024px){.preview-container .preview-container__preview>article{font-size:20px}}.preview-container .preview-container__preview>figure,.preview-container .preview-container__preview>iframe{position:relative;width:100%;height:100%}.preview-container .preview-container__preview>figure img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}",""]),e.exports=t},60:function(e,t,n){"use strict";n.r(t);var r={},o=(n(58),n(4)),component=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preview-container"},[t("div",{staticClass:"preview-container__preview"},[this._t("default")],2),this._v(" "),t("div",{staticClass:"preview-container__info"},[this._t("title",[t("p",[this._v("Preview Info")])])],2)])}),[],!1,null,null,null);t.default=component.exports}}]);