import{r as o,h as C,j as V,_ as k,k as d,o as f,c as b,m as B,u as a,l as y,w as i,b as c,a as l,d as u}from"./C-f9qFPg.js";import{u as $}from"./DZGWxAji.js";import{P as h}from"./C9jvz3zq.js";import"./DGImsAw9.js";import"./6WTcc9Hi.js";import"./PJhc0dFK.js";function I(e){const r=o(null),t=o(!1),{isCritical:s}=$();return C(async()=>{e={root:void 0,rootMargin:"0px",threshold:[0],trackVisibility:!1,delay:0,...e},s.value||await V(r.value,e).enterViewOnce(),t.value=!0}),{el:r,inView:t}}const O=["src","title"],S={__name:"BoosterIframe",props:{src:{type:String,default:null},title:{type:String,default:null},componentObserver:{type:Object,default(){return{trackVisibility:!0,delay:350}}}},emits:["load","enter"],setup(e,{emit:r}){const t=e,s=r,_=o(null),m=o(!1);d(m,n=>{n.target.src&&s("load",n)});const{el:x,inView:g}=I();return d(g,()=>{_.value=t.src,s("enter")}),(n,p)=>(f(),b("iframe",B({ref_key:"iframe",ref:x,src:a(_),class:"nuxt-booster-iframe"},n.$attrs,{title:e.title,onLoad:p[0]||(p[0]=w=>m.value=w)}),null,16,O))}},v=k(S,[["__scopeId","data-v-c6cdbf06"]]),z=l("p",null,[u("Critical"),l("br"),u("Iframe")],-1),L="https://basics.github.io/nuxt-booster/playground/",N={__name:"Critical",setup(e){return(r,t)=>(f(),y(a(h),null,{default:i(()=>[c(a(v),{class:"test-iframe",src:L})]),title:i(()=>[z]),_:1}))}},P=l("p",null,[u("Lazy"),l("br"),u("Iframe")],-1),j="https://basics.github.io/nuxt-booster/playground/",E={__name:"Lazy",setup(e){return(r,t)=>(f(),y(a(h),{id:"lazyContainer"},{default:i(()=>[c(a(v),{class:"test-iframe",src:j})]),title:i(()=>[P]),_:1}))}},G={__name:"index",setup(e){return(r,t)=>(f(),b("div",null,[c(a(N),{critical:""}),c(a(E))]))}};export{G as default};
