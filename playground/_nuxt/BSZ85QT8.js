import{a2 as v,u as C,h as A,aa as R,k as T,D,ab as U,I as V,ac as q,ad as F,C as j,ae as G,J as z,af as J,P as y,Q,ag as N,ah as X,ai as x,s as Y,U as P,_ as Z,r as K,o as ee,c as te,m as ie}from"./hu_AZDF1.js";import{u as re}from"./Ci8gu179.js";import{u as se}from"./aeZ_NULG.js";import{S as p,b as ne}from"./D4W6m2Dr.js";import{g as oe}from"./1WVoVk7K.js";function ae({willPerformHydration:e,hydrate:t,onCleanup:r},i=2e3){if(!e)return;if(!v())throw new Error("useHydrateWhenIdle must be called from the setup or lifecycle hook methods.");if(!("requestIdleCallback"in window)){t();return}const s=requestIdleCallback(()=>{t()},{timeout:i});r(()=>{cancelIdleCallback(s)})}function ce({willPerformHydration:e,hydrate:t,onCleanup:r},i=["focus"]){if(!e)return;const s=v();if(!s||s.isMounted)throw new Error("useHydrateOnInteraction must be called from the setup method.");const n=C(i);A(()=>{const o=R(s),a=o.length>1?o[0].parentElement||document:o[0],c={capture:!0,once:!1,passive:!0},l=d=>{d.stopPropagation();const f=d.composedPath&&d.composedPath()||d.path;if(!f){let h=d.target;for(;h;){if(o.includes(h)){t();return}if(h===a)return;h=h.parentElement}return}o.forEach(h=>{f.includes(h)&&t()})};n.forEach(d=>{a.addEventListener(d,l,c)}),r(()=>{n.forEach(d=>{a.removeEventListener(d,l,c)})})})}function de({willPerformHydration:e,hydrate:t,onCleanup:r},i){if(!e)return;if(!v())throw new Error("useHydrateWhenTriggered must be called from the setup or lifecycle hook methods.");const s=T(D(i)?i:()=>i,n=>{n&&t()},{immediate:!0});r(s)}const M=e=>e.length===1?e[0]:e,le=V({name:"LazyHydrationWrapper",inheritAttrs:!1,suspensible:!1,props:{whenIdle:{default:!1,type:[Boolean,Number]},whenVisible:{default:!1,type:[Boolean,Object]},onInteraction:{default:!1,type:[Array,Boolean,String]},whenTriggered:{default:void 0,type:[Boolean,Object]}},emits:["hydrated"],setup(e,{slots:t,emit:r}){const i=q();if(!i.willPerformHydration)return()=>M(t.default());if(i.onHydrated(()=>r("hydrated")),e.whenIdle&&ae(i,e.whenIdle!==!0?e.whenIdle:void 0),e.whenVisible&&F(i,e.whenVisible!==!0?e.whenVisible:void 0),e.onInteraction){let s;e.onInteraction!==!0&&(s=j(()=>Array.isArray(e.onInteraction)?e.onInteraction:[e.onInteraction]).value),ce(i,s)}return e.whenTriggered!==void 0&&de(i,G(e,"whenTriggered")),()=>M(t.default())}}),Ae=U(le);async function ue(e,t){return await fe(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function fe(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,r)=>{const i=new Image;i.onload=()=>{const s={width:i.width,height:i.height,ratio:i.width/i.height};t(s)},i.onerror=s=>r(s),i.src=e})}function $(e){return t=>t?e[t]||t:e.missingValue}function he({formatter:e,keyMap:t,joinWith:r="/",valueMap:i}={}){e||(e=(n,o)=>`${n}=${o}`),t&&typeof t!="function"&&(t=$(t));const s=i||{};return Object.keys(s).forEach(n=>{typeof s[n]!="function"&&(s[n]=$(s[n]))}),(n={})=>Object.entries(n).filter(([a,c])=>typeof c<"u").map(([a,c])=>{const l=s[a];return typeof l=="function"&&(c=l(n[a])),a=typeof t=="function"?t(a):a,e(a,c)}).join(r)}function w(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return Number.parseInt(e,10)}function me(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const r of e.split(" ")){const i=Number.parseInt(r.replace("x",""));i&&t.add(i)}return Array.from(t)}function ge(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function pe(e){const t={};if(typeof e=="string")for(const r of e.split(/[\s,]+/).filter(i=>i)){const i=r.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function we(e){const t={options:e},r=(s,n={})=>O(t,s,n),i=(s,n={},o={})=>r(s,{...o,modifiers:N(n,o.modifiers||{})}).url;for(const s in e.presets)i[s]=(n,o,a)=>i(n,o,{...e.presets[s],...a});return i.options=e,i.getImage=r,i.getMeta=(s,n)=>ye(t,s,n),i.getSizes=(s,n)=>Ie(t,s,n),t.$img=i,i}async function ye(e,t,r){const i=O(e,t,{...r});return typeof i.getMeta=="function"?await i.getMeta():await ue(e,i.url)}function O(e,t,r){var l,d;if(t&&typeof t!="string")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(!t||t.startsWith("data:"))return{url:t};const{provider:i,defaults:s}=ve(e,r.provider||e.options.provider),n=be(e,r.preset);if(t=z(t)?t:J(t),!i.supportsAlias)for(const f in e.options.alias)t.startsWith(f)&&(t=y(e.options.alias[f],t.substr(f.length)));if(i.validateDomains&&z(t)){const f=Q(t).host;if(!e.options.domains.find(h=>h===f))return{url:t}}const o=N(r,n,s);o.modifiers={...o.modifiers};const a=o.modifiers.format;(l=o.modifiers)!=null&&l.width&&(o.modifiers.width=w(o.modifiers.width)),(d=o.modifiers)!=null&&d.height&&(o.modifiers.height=w(o.modifiers.height));const c=i.getImage(t,o,e);return c.format=c.format||a||"",c}function ve(e,t){const r=e.options.providers[t];if(!r)throw new Error("Unknown provider: "+t);return r}function be(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function Ie(e,t,r){var b,I,_,S,W;const i=w((b=r.modifiers)==null?void 0:b.width),s=w((I=r.modifiers)==null?void 0:I.height),n=pe(r.sizes),o=(_=r.densities)!=null&&_.trim()?me(r.densities.trim()):e.options.densities;ge(o);const a=i&&s?s/i:0,c=[],l=[];if(Object.keys(n).length>=1){for(const u in n){const m=H(u,String(n[u]),s,a,e);if(m!==void 0){c.push({size:m.size,screenMaxWidth:m.screenMaxWidth,media:`(max-width: ${m.screenMaxWidth}px)`});for(const g of o)l.push({width:m._cWidth*g,src:E(e,t,r,m,g)})}}_e(c)}else for(const u of o){const m=Object.keys(n)[0];let g=H(m,String(n[m]),s,a,e);g===void 0&&(g={size:"",screenMaxWidth:0,_cWidth:(S=r.modifiers)==null?void 0:S.width,_cHeight:(W=r.modifiers)==null?void 0:W.height}),l.push({width:u,src:E(e,t,r,g,u)})}Se(l);const d=l[l.length-1],f=c.length?c.map(u=>`${u.media?u.media+" ":""}${u.size}`).join(", "):void 0,h=f?"w":"x",k=l.map(u=>`${u.src} ${u.width}${h}`).join(", ");return{sizes:f,srcset:k,src:d==null?void 0:d.src}}function H(e,t,r,i,s){const n=s.options.screens&&s.options.screens[e]||Number.parseInt(e),o=t.endsWith("vw");if(!o&&/^\d+$/.test(t)&&(t=t+"px"),!o&&!t.endsWith("px"))return;let a=Number.parseInt(t);if(!n||!a)return;o&&(a=Math.round(a/100*n));const c=i?Math.round(a*i):r;return{size:t,screenMaxWidth:n,_cWidth:a,_cHeight:c}}function E(e,t,r,i,s){return e.$img(t,{...r.modifiers,width:i._cWidth?i._cWidth*s:void 0,height:i._cHeight?i._cHeight*s:void 0},r)}function _e(e){var r;e.sort((i,s)=>i.screenMaxWidth-s.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const s=e[i];s.media===t&&e.splice(i,1),t=s.media}for(let i=0;i<e.length;i++)e[i].media=((r=e[i+1])==null?void 0:r.media)||""}function Se(e){e.sort((r,i)=>r.width-i.width);let t=null;for(let r=e.length-1;r>=0;r--){const i=e[r];i.width===t&&e.splice(r,1),t=i.width}}const We=he({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>x(e)+"_"+x(t)}),ze=(e,{modifiers:t={},baseURL:r}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const s=We(t)||"_";return r||(r=y(i.options.nuxt.baseURL,"/_ipx")),{url:y(r,s,X(e))}},xe=!0,Me=!0,$e=Object.freeze(Object.defineProperty({__proto__:null,getImage:ze,supportsAlias:Me,validateDomains:xe},Symbol.toStringTag,{value:"Module"})),B={screens:{xs:576,sm:768,md:996,lg:1200,xl:1367,xxl:1600,"2xl":1536,default:320,xxs:480,"4k":1921},presets:{},provider:"ipxStatic",domains:["picsum.photos","img.youtube.com","i.vimeocdn.com","i.pickadummy.com"],alias:{"/picsum":"https://picsum.photos","/youtube":"https://img.youtube.com","/vimeo":"https://i.vimeocdn.com","/pickadummy":"https://i.pickadummy.com"},densities:[1,2],format:["webp"]};B.providers={ipxStatic:{provider:$e,defaults:{}}};const He=()=>{const e=Y(),t=P();return t.$img||t._img||(t._img=we({...B,nuxt:{baseURL:e.app.baseURL}}))};function Ee(e){return["anonymous","use-credentials"].includes(e)}var L={};const Le={inheritAttrs:!1,props:{source:{type:[p,Object],default:null},title:{type:String,required:!0},alt:{type:String,default:null},crossorigin:{type:[Boolean,String],default(){return null},validator:Ee}},emits:["load"],async setup(e){const t=He(),r=P().$booster,{isCritical:i}=re(),s=j(()=>oe(e.crossorigin||r.crossorigin));if(e.source){const n=new p(e.source),o=t.getSizes(n.src,{sizes:n.sizes,modifiers:n.getModifiers(),...n.getOptions(r)}),a=K(null);return se(()=>{if(a.value)return{style:[a.value&&ne(a,a.value.className)].filter(Boolean),link:[!(!o||!i.value)&&L.prerender&&new p(n).getPreload(o.srcset,o.sizes,s.value)].filter(Boolean),noscript:[L.prerender&&{key:"img-nojs",children:"<style>img { content-visibility: unset !important; }</style>"}].filter(Boolean)}}),a.value=await n.getMeta(o.src,r),{isCritical:i,config:o,meta:a,className:a.value.className,resolvedCrossorigin:s}}return{isCritical:i,resolvedCrossorigin:s}},data(){return{className:null,loading:!0,config:null,meta:null}},computed:{classNames(){return[{loading:this.loading}].concat(this.className)},srcset(){var e,t;return((e=this.config)==null?void 0:e.srcset)||((t=this.config)==null?void 0:t.src)},sizes(){var e;return(e=this.config)==null?void 0:e.sizes},width(){var e;return this.$attrs.width||((e=this.meta)==null?void 0:e.width)},height(){var e;return this.$attrs.height||((e=this.meta)==null?void 0:e.height)},loadingMode(){return this.isCritical?"eager":"lazy"},decodingMode(){return!this.source||new p(this.source).format!=="svg"?"async":"sync"}},mounted(){this.loading=!this.$el.complete,this.loading||this.onLoad({target:this.$el})},methods:{onLoad(e){this.loading=!1,this.$emit("load",e.target)}}},je=["srcset","sizes","width","height","title","alt","loading","decoding","crossorigin"];function Ne(e,t,r,i,s,n){return ee(),te("img",ie(e.$attrs,{srcset:n.srcset,sizes:n.sizes,width:n.width,height:n.height,class:["nuxt-booster-image",n.classNames],title:r.title,alt:r.alt||r.title,loading:n.loadingMode,decoding:n.decodingMode,crossorigin:i.resolvedCrossorigin,onLoad:t[0]||(t[0]=(...o)=>n.onLoad&&n.onLoad(...o))}),null,16,je)}const Re=Z(Le,[["render",Ne],["__scopeId","data-v-22885f22"]]);export{Re as B,Ae as L,Ee as c,He as u};
