(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{104:function(t,e,n){var content=n(214);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("31eee2fa",content,!0,{sourceMap:!1})},212:function(t,e){t.exports={functional:!0,render(t,e){const{_c:n,_v:o,data:data,children:r=[]}=e,{class:c,staticClass:l,style:style,staticStyle:f,attrs:m={},...d}=data;return n("svg",{class:["h-6 w-6",c,l],style:[style,f],attrs:Object.assign({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},m),...d},r.concat([n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 9l-7 7-7-7"}})]))}}},213:function(t,e,n){"use strict";n(104)},214:function(t,e,n){var o=n(8)((function(i){return i[1]}));o.push([t.i,".component-stage[data-v-f039f300]{position:relative;min-height:100vh;margin:0;overflow:hidden}@supports (-webkit-touch-callout:none){.component-stage[data-v-f039f300]{height:-webkit-fill-available;height:-moz-available;height:stretch}}.component-stage .logo[data-v-f039f300]{position:absolute;top:0;left:50%;width:calc(96 / 16 * 1em);margin:calc(20 / 16 * 1em) calc(20 / 16 * 1em) calc(20 / 16 * 1em) calc(calc(-96 / 16 * 1em)/2)}@media (orientation:landscape){.component-stage .logo[data-v-f039f300]{top:auto;right:0;bottom:0;left:auto}}.component-stage .claim[data-v-f039f300]{font-size:calc(16 / 16 * 1em);text-transform:none}.component-stage .claim[data-v-f039f300],.component-stage .content[data-v-f039f300]{display:block;line-height:2}.component-stage .content[data-v-f039f300]{font-size:calc(30 / 16 * 1em)}@media (orientation:landscape) and (min-width:992px){.component-stage .content[data-v-f039f300]{font-size:calc(40 / 16 * 1em)}}.component-stage .arrow[data-v-f039f300]{position:absolute;bottom:calc(140 / 16 * 1em)}@media (orientation:landscape){.component-stage .arrow[data-v-f039f300]{bottom:calc(20 / 16 * 1em)}}.component-stage .arrow[data-v-f039f300]{left:50%;transform:translateX(-50%)}.component-stage svg[data-v-f039f300]{width:64px;-webkit-animation-name:bounce-6-data-v-f039f300;animation-name:bounce-6-data-v-f039f300;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.component-stage .background[data-v-f039f300]{aspect-ratio:auto}.component-stage .background[data-v-f039f300] img{position:absolute;top:0;left:0;-o-object-fit:cover;object-fit:cover;width:100%;height:100%}.component-stage .headline[data-v-f039f300]{position:absolute;bottom:0;left:0;width:100%;padding:calc(20 / 16 * 1em) 0;margin:0;font-size:1em;color:#fff;text-align:center;background:rgba(0,0,0,.4)}@media (orientation:landscape){.component-stage .headline[data-v-f039f300]{position:absolute;top:50px;right:0;bottom:auto;left:auto;width:auto;padding-left:calc(40 / 16 * 1em);padding-bottom:calc(20 / 16 * 1em);padding-right:calc(40 / 16 * 1em);padding-top:calc(20 / 16 * 1em)}}@-webkit-keyframes bounce-6-data-v-f039f300{0%{transform:scale(1) translateY(0)}10%{transform:scale(1.1,.9) translateY(0)}30%{transform:scale(.9,1.1) translateY(-50%)}50%{transform:scale(1.05,.95) translateY(0)}57%{transform:scale(1) translateY(-5%)}64%{transform:scale(1) translateY(0)}to{transform:scale(1) translateY(0)}}@keyframes bounce-6-data-v-f039f300{0%{transform:scale(1) translateY(0)}10%{transform:scale(1.1,.9) translateY(0)}30%{transform:scale(.9,1.1) translateY(-50%)}50%{transform:scale(1.05,.95) translateY(0)}57%{transform:scale(1) translateY(-5%)}64%{transform:scale(1) translateY(0)}to{transform:scale(1) translateY(0)}}",""]),o.locals={},t.exports=o},268:function(t,e,n){"use strict";n.r(e);var o=n(19),r=n(40),c=n(212),l=n.n(c),f={components:{SpeedkitPicture:o.a,SpeedkitImage:r.a,SvgChevronDown:l.a},props:{picture:{type:Object,required:!0},image:{type:Object,default:()=>({source:{src:"/icon.png",sizes:{default:"100vw",xxs:"100vw",xs:"100vw",sm:"100vw",md:"100vw",lg:"100vw",xl:"100vw",xxl:"100vw"}},title:"Image Title",alt:"Image Alt"})},content:{type:String,default:()=>"Headline"},claim:{type:String,default:()=>"Claim"}}},m=(n(213),n(7)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("document-section",{staticClass:"component-stage",attrs:{level:-1}},[n("speedkit-picture",{staticClass:"background",attrs:{title:t.picture.title,alt:t.picture.alt,sources:t.picture.sources}}),t._v(" "),n("document-heading",{staticClass:"headline"},[n("span",{directives:[{name:"font",rawName:"v-font",value:[t.$getFont("Montserrat Alternates",700,"normal",{selector:".content"}),t.$getFont("Merriweather",300,"italic",{selector:".claim"})],expression:"[\n        $getFont('Montserrat Alternates', 700, 'normal', {selector: '.content'}),\n        $getFont('Merriweather', 300, 'italic', {selector: '.claim'})\n      ]"}]},[n("span",{staticClass:"content"},[t._v(t._s(t.content))]),t._v(" "),n("span",{staticClass:"claim"},[t._v(t._s(t.claim))])])]),t._v(" "),n("span",{staticClass:"arrow"},[n("svg-chevron-down")],1),t._v(" "),n("speedkit-image",t._b({staticClass:"logo",attrs:{"loading-spinner":null}},"speedkit-image",t.image,!1))],1)}),[],!1,null,"f039f300",null);e.default=component.exports},40:function(t,e,n){"use strict";var o=n(37),r=n(39),c={inheritAttrs:!1,props:{hydrate:{type:Boolean,default:!0}},render(t){return this.hydrate?t(r.a,{props:Object.assign({},this.$attrs,{critical:this.isCritical}),on:this.$listeners}):t(o.a,{props:{never:!0}},[t("noscript",{},[t(r.a,{props:Object.assign({},this.$attrs,{critical:this.hydrate}),on:this.$listeners})])])}},l=n(7),component=Object(l.a)(c,undefined,undefined,!1,null,null,null);e.a=component.exports}}]);