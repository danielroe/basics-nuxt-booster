(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{155:function(t,e,n){var r=n(8);t.exports=function(t){return r(Set.prototype.values,t)}},202:function(t,e,n){"use strict";var r=n(8),o=n(21),c=n(5);t.exports=function(){for(var t=c(this),e=o(t.add),n=0,d=arguments.length;n<d;n++)r(e,t,arguments[n]);return t}},232:function(t,e,n){"use strict";n(214)("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),n(215))},233:function(t,e,n){"use strict";n(20)({target:"Set",proto:!0,real:!0,forced:!0},{addAll:n(202)})},234:function(t,e,n){"use strict";n(20)({target:"Set",proto:!0,real:!0,forced:!0},{deleteAll:n(216)})},235:function(t,e,n){"use strict";var r=n(20),o=n(12),c=n(8),d=n(21),f=n(5),l=n(100),m=n(96);r({target:"Set",proto:!0,real:!0,forced:!0},{difference:function(t){var e=f(this),n=new(l(e,o("Set")))(e),r=d(n.delete);return m(t,(function(t){c(r,n,t)})),n}})},236:function(t,e,n){"use strict";var r=n(20),o=n(5),c=n(28),d=n(155),f=n(96);r({target:"Set",proto:!0,real:!0,forced:!0},{every:function(t){var e=o(this),n=d(e),r=c(t,arguments.length>1?arguments[1]:void 0);return!f(n,(function(t,n){if(!r(t,t,e))return n()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},237:function(t,e,n){"use strict";var r=n(20),o=n(12),c=n(8),d=n(21),f=n(5),l=n(28),m=n(100),h=n(155),v=n(96);r({target:"Set",proto:!0,real:!0,forced:!0},{filter:function(t){var e=f(this),n=h(e),r=l(t,arguments.length>1?arguments[1]:void 0),S=new(m(e,o("Set"))),x=d(S.add);return v(n,(function(t){r(t,t,e)&&c(x,S,t)}),{IS_ITERATOR:!0}),S}})},238:function(t,e,n){"use strict";var r=n(20),o=n(5),c=n(28),d=n(155),f=n(96);r({target:"Set",proto:!0,real:!0,forced:!0},{find:function(t){var e=o(this),n=d(e),r=c(t,arguments.length>1?arguments[1]:void 0);return f(n,(function(t,n){if(r(t,t,e))return n(t)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},239:function(t,e,n){"use strict";var r=n(20),o=n(12),c=n(8),d=n(21),f=n(5),l=n(100),m=n(96);r({target:"Set",proto:!0,real:!0,forced:!0},{intersection:function(t){var e=f(this),n=new(l(e,o("Set"))),r=d(e.has),h=d(n.add);return m(t,(function(t){c(r,e,t)&&c(h,n,t)})),n}})},240:function(t,e,n){"use strict";var r=n(20),o=n(8),c=n(21),d=n(5),f=n(96);r({target:"Set",proto:!0,real:!0,forced:!0},{isDisjointFrom:function(t){var e=d(this),n=c(e.has);return!f(t,(function(t,r){if(!0===o(n,e,t))return r()}),{INTERRUPTED:!0}).stopped}})},241:function(t,e,n){"use strict";var r=n(20),o=n(12),c=n(8),d=n(21),f=n(3),l=n(5),m=n(104),h=n(96);r({target:"Set",proto:!0,real:!0,forced:!0},{isSubsetOf:function(t){var e=m(this),n=l(t),r=n.has;return f(r)||(n=new(o("Set"))(t),r=d(n.has)),!h(e,(function(t,e){if(!1===c(r,n,t))return e()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},242:function(t,e,n){"use strict";var r=n(20),o=n(8),c=n(21),d=n(5),f=n(96);r({target:"Set",proto:!0,real:!0,forced:!0},{isSupersetOf:function(t){var e=d(this),n=c(e.has);return!f(t,(function(t,r){if(!1===o(n,e,t))return r()}),{INTERRUPTED:!0}).stopped}})},243:function(t,e,n){"use strict";var r=n(20),o=n(1),c=n(5),d=n(16),f=n(155),l=n(96),m=o([].join),h=[].push;r({target:"Set",proto:!0,real:!0,forced:!0},{join:function(t){var e=c(this),n=f(e),r=void 0===t?",":d(t),o=[];return l(n,h,{that:o,IS_ITERATOR:!0}),m(o,r)}})},244:function(t,e,n){"use strict";var r=n(20),o=n(12),c=n(28),d=n(8),f=n(21),l=n(5),m=n(100),h=n(155),v=n(96);r({target:"Set",proto:!0,real:!0,forced:!0},{map:function(t){var e=l(this),n=h(e),r=c(t,arguments.length>1?arguments[1]:void 0),S=new(m(e,o("Set"))),x=f(S.add);return v(n,(function(t){d(x,S,r(t,t,e))}),{IS_ITERATOR:!0}),S}})},245:function(t,e,n){"use strict";var r=n(20),o=n(0),c=n(21),d=n(5),f=n(155),l=n(96),m=o.TypeError;r({target:"Set",proto:!0,real:!0,forced:!0},{reduce:function(t){var e=d(this),n=f(e),r=arguments.length<2,o=r?void 0:arguments[1];if(c(t),l(n,(function(n){r?(r=!1,o=n):o=t(o,n,n,e)}),{IS_ITERATOR:!0}),r)throw m("Reduce of empty set with no initial value");return o}})},246:function(t,e,n){"use strict";var r=n(20),o=n(5),c=n(28),d=n(155),f=n(96);r({target:"Set",proto:!0,real:!0,forced:!0},{some:function(t){var e=o(this),n=d(e),r=c(t,arguments.length>1?arguments[1]:void 0);return f(n,(function(t,n){if(r(t,t,e))return n()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},247:function(t,e,n){"use strict";var r=n(20),o=n(12),c=n(8),d=n(21),f=n(5),l=n(100),m=n(96);r({target:"Set",proto:!0,real:!0,forced:!0},{symmetricDifference:function(t){var e=f(this),n=new(l(e,o("Set")))(e),r=d(n.delete),h=d(n.add);return m(t,(function(t){c(r,n,t)||c(h,n,t)})),n}})},248:function(t,e,n){"use strict";var r=n(20),o=n(12),c=n(21),d=n(5),f=n(100),l=n(96);r({target:"Set",proto:!0,real:!0,forced:!0},{union:function(t){var e=d(this),n=new(f(e,o("Set")))(e);return l(t,c(n.add),{that:n}),n}})},335:function(t,e,n){var content=n(466);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(154).default)("00a31204",content,!0,{sourceMap:!1})},465:function(t,e,n){"use strict";n(335)},466:function(t,e,n){var r=n(153)((function(i){return i[1]}));r.push([t.i,"@media (orientation:portrait){.component-image-text[data-v-29cec770]{padding-left:10%;padding-bottom:0;padding-right:10%;padding-top:0}}.component-image-text[data-v-29cec770] img{width:100%;height:100%}.component-image-text[data-v-29cec770] p{line-height:1.6}@media (orientation:landscape) and (min-width:768px){.component-image-text>div[data-v-29cec770]{display:flex;align-items:center}.component-image-text>div>*[data-v-29cec770]{width:50%}}.component-image-text .text[data-v-29cec770]{padding:2%}.component-image-text .image>*[data-v-29cec770]{width:80%;margin:0 auto;box-shadow:0 0 calc(25 / 16 * 1em) rgba(0,0,0,.4)}@media (color-index: 48){.component-image-text .image>*[data-v-29cec770]{box-shadow:0 0 calc(25 / 16 * 1em) hsla(0,0%,100%,.4)}}@media (color: 48842621){.component-image-text .image>*[data-v-29cec770]{box-shadow:0 0 calc(25 / 16 * 1em) hsla(0,0%,100%,.4)}}@media (color-index: 48){.component-image-text .image>*[data-v-29cec770]{box-shadow:0 0 calc(25 / 16 * 1em) hsla(0,0%,100%,.4)}}@media (color: 48842621){.component-image-text .image>*[data-v-29cec770]{box-shadow:0 0 calc(25 / 16 * 1em) hsla(0,0%,100%,.4)}}@media (prefers-color-scheme:dark){.component-image-text .image>*[data-v-29cec770]{box-shadow:0 0 calc(25 / 16 * 1em) hsla(0,0%,100%,.4)}}.component-image-text.component-image-text-right>*[data-v-29cec770]:first-child{order:2}.component-image-text.component-image-text-right>*[data-v-29cec770]:nth-child(2){order:1}",""]),r.locals={},t.exports=r},519:function(t,e,n){"use strict";n.r(e);var r={components:{SpeedkitPicture:n(192).a},props:{alignRight:{type:Boolean,default:!1},picture:{type:Object,required:!0},headline:{type:String,default:"Headline"},content:{type:String,default:"Text"}}},o=(n(465),n(152)),component=Object(o.a)(r,(function(){var t,e=this,n=e.$createElement,r=e._self._c||n;return r("document-section",{staticClass:"component-image-text",class:(t={},t["component-image-text-right"]=e.alignRight,t)},[r("div",{directives:[{name:"font",rawName:"v-font",value:[e.$getFont("Merriweather",300,"normal"),e.$getFont("Montserrat Alternates",700,"normal",{selector:"h2"})],expression:"[\n      $getFont('Merriweather', 300, 'normal'),\n      $getFont('Montserrat Alternates', 700, 'normal', {selector: 'h2'})]"}]},[r("div",{staticClass:"image"},[r("speedkit-picture",{attrs:{title:e.picture.title,alt:e.picture.alt,sources:e.picture.sources}})],1),e._v(" "),r("div",{staticClass:"text"},[r("document-heading",[e._v(e._s(e.headline))]),e._v(" "),r("div",{domProps:{innerHTML:e._s(e.content)}})],1)])])}),[],!1,null,"29cec770",null);e.default=component.exports}}]);