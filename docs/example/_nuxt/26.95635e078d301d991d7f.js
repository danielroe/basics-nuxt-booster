(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{103:function(t,e,r){var content=r(202);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("0ccc37b6",content,!0,{sourceMap:!1})},201:function(t,e,r){"use strict";r(103)},202:function(t,e,r){var n=r(9)((function(i){return i[1]}));n.push([t.i,"\n.nuxt-speedkit-lighthouse[data-v-06e58deb]{--pi:3.1416;--score:0;position:fixed;top:0;right:0;z-index:1;display:block;width:60px;font-family:Arial,Helvetica,sans-serif;text-align:center;pointer-events:none;background-color:#fff;}.nuxt-speedkit-lighthouse.ready[data-v-06e58deb]{pointer-events:all}.nuxt-speedkit-lighthouse>svg[data-v-06e58deb]{display:block;width:50px;height:50px;margin:5px;}.nuxt-speedkit-lighthouse>svg circle[data-v-06e58deb]{fill:transparent;stroke:var(--color-status);stroke-width:10;transform:rotate(-90deg);transform-origin:50%;}.nuxt-speedkit-lighthouse>svg circle.pending[data-v-06e58deb]{stroke-dasharray:calc(var(--pi)*1.35*45);-webkit-animation:nuxt-speedkit-lighthouse-rotating 1s linear infinite;animation:nuxt-speedkit-lighthouse-rotating 1s linear infinite}.nuxt-speedkit-lighthouse>svg circle.pending[data-v-06e58deb],.nuxt-speedkit-lighthouse>svg circle.ready[data-v-06e58deb]{stroke-dashoffset:calc(var(--pi)*2*45)}.nuxt-speedkit-lighthouse>svg circle.ready[data-v-06e58deb]{fill:var(--color-status);fill-opacity:.1;stroke-dasharray:calc(var(--pi)*2*45);-webkit-animation:nuxt-speedkit-lighthouse-stroke-06e58deb var(--duration) ease-out forwards;animation:nuxt-speedkit-lighthouse-stroke-06e58deb var(--duration) ease-out forwards}.nuxt-speedkit-lighthouse>svg line[data-v-06e58deb]{stroke:var(--color-status);stroke-width:10}.nuxt-speedkit-lighthouse>svg text[data-v-06e58deb]{font-size:32px;fill:var(--color-status)}.nuxt-speedkit-lighthouse>svg span[data-v-06e58deb]{font-size:12px;text-decoration:underline}.nuxt-speedkit-lighthouse>svg svg[data-v-06e58deb]{display:inline;width:12px;height:12px;margin-left:3px}@-webkit-keyframes nuxt-speedkit-lighthouse-stroke-06e58deb{to{transform:rotate(270deg)}}@keyframes nuxt-speedkit-lighthouse-stroke-06e58deb{to{transform:rotate(270deg)}}",""]),n.locals={},t.exports=n},234:function(t,e,r){"use strict";r.d(e,"a",(function(){return v})),r.d(e,"b",(function(){return x}));const n=Symbol("ready"),o=Symbol("fail"),l=Symbol("pending"),c=new Map([[n,{pass:"#0CCE6B",average:"#FFA400",fail:"#FF4E42"}],[o,"#FF4E42"],[l,"#BDBDBD"]]);class d{constructor(t,data){this.state=t,this.data=data||{lhrSlim:[]}}isPending(){return this.state===l}isFailed(){return this.state===o}isReady(){return this.state===n}getScoreOfMetric(t){return(this.data.lhrSlim.find((e=>e.id===t))||{score:-1}).score}getStateColorByMetric(t){switch(this.state){case n:return(e=this.getScoreOfMetric(t))>=.9?c.get(n).pass:e>=.5?c.get(n).average:c.get(n).fail;case o:return c.get(o);default:return c.get(l)}var e}}class h extends d{}let f=null;function v(t){return fetch("https://lighthouse-dot-webdotdevsite.appspot.com/lh/newaudit",{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({replace:!0,save:!0,url:t}),signal:y()}).then(k).catch((t=>{if(t.state)return t;throw x()}))}function x(){return new h(l)}function y(){return f&&f.abort(),f=new AbortController,f.signal}async function k(t){if(!t.ok)throw new h(o);return new d(n,await t.json())}},259:function(t,e,r){"use strict";r.r(e);var n=r(47).a,o=(r(201),r(8)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("a",{staticClass:"nuxt-speedkit-lighthouse",class:{ready:t.stats.isReady()},style:t.style,attrs:{href:t.reportUrl,target:"_blank",title:t.title}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 100 100"}},[e("circle",{class:t.stateClasses,attrs:{cx:"50",cy:"50",r:"45"}}),t._v(" "),t.stats.isFailed()?e("line",{attrs:{x1:"18",y1:"18",x2:"82",y2:"82"}}):t._e(),t._v(" "),t.stats.isReady()?e("text",{attrs:{x:"50",y:"50","text-anchor":"middle","alignment-baseline":"central"}},[t._v("\n      "+t._s(Math.round(100*t.score))+"\n    ")]):t._e()]),t._v(" "),t.stats.isReady()?e("span",[t._v("\n    Report"),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}})])]):t._e()])}),[],!1,null,"06e58deb",null);e.default=component.exports},47:function(t,e,r){"use strict";(function(t){var n=r(234);e.a={props:{statsMetric:{type:String,default:"performance"}},data:()=>({url:"",stats:Object(n.b)()}),computed:{style(){return{"--color-status":this.color,"--radian":45*this.radian,"--duration":1e3/(2*Math.PI)*this.radian+"ms"}},stateClasses(){return{pending:this.stats.isPending(),fail:this.stats.isFailed(),ready:this.stats.isReady()}},title(){return`\n        Performance: ${100*this.stats.getScoreOfMetric("performance")}\n        SEO: ${100*this.stats.getScoreOfMetric("seo")}\n        Accessibility: ${100*this.stats.getScoreOfMetric("accessibility")}\n        Best Practices: ${100*this.stats.getScoreOfMetric("best-practices")}\n      `.trim().replace(/( )+/g,"$1")},score(){return this.stats.getScoreOfMetric(this.statsMetric)},radian(){return 2*Math.PI*(1-this.score)},color(){return this.stats.getStateColorByMetric(this.statsMetric)},reportUrl(){return`https://lighthouse-dot-webdotdevsite.appspot.com/lh/html?url=${t.encodeURI(this.url)}`}},watch:{$route(t,e){"lh"in this.$route.query&&this.getMetrics()}},mounted(){this.getMetrics()},methods:{async getMetrics(){this.stats=Object(n.b)();try{this.stats=await Object(n.a)(t.location.href),this.url=this.stats.data.lhr.requestedUrl}catch(t){this.stats=t,this.url=""}}}}}).call(this,r(1))}}]);