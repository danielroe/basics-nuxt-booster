import{_ as r,c as a,m as e,a as o,t as i,V as n,o as s,a3 as l}from"./chunks/framework.hOvwrJKH.js";const _=JSON.parse('{"title":"Introduction","description":"","frontmatter":{"outline":"deep","title":"Introduction"},"headers":[],"relativePath":"v2/index.md","filePath":"v2/index.md"}'),d={name:"v2/index.md"},p={id:"frontmatter-title",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1),h=n('<img src="'+l+'" width="1280" height="640" alt=""><p><a href="https://www.npmjs.com/package/nuxt-speedkit" target="_blank" rel="noreferrer">Module</a> for <a href="https://nuxtjs.org" target="_blank" rel="noreferrer">NuxtJS</a>.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>You are reading Nuxt Speedkit v2 docs. <a href="/">For Nuxt 3 go to the v3 docs</a></p></div><div class="tip custom-block"><p class="custom-block-title">You are reading the documentation for Nuxt Speedkit (v2)!</p><ul><li><strong>Nuxt Speedkit (v1)</strong> documentation has been moved to <a href="https://nuxt-speedkit.grabarzundpartner.dev/v1/" target="_blank" rel="noreferrer">nuxt-speedkit.grabarzundpartner.dev/v1/</a>.</li><li>Upgrading from <strong>Nuxt Speedkit (v1)</strong> ? Check out the <a href="/migration/v2.html">Migration Guide</a>.</li></ul></div><p><strong>Nuxt Speedkit</strong> takes over the lighthouse performance optimization of your generated website.</p><p>In order to achieve a performance score of 100/100, only the necessary resources located in the current viewport may be initialized when the page is loaded. This includes images, fonts and the js-modules. Until now, there has been no practical and usable concept to help developers maintain an overview and enable accurate targeting in NuxtJS projects.</p><p>This module addresses this problem and provides a holistic approach to intelligently load the necessary viewport related resources to reduce FCP, DCL, TTI, TBT and CLS.</p><p>We didn&#39;t reinvent the whole wheel. We adapt the lazy hydration concept of <a href="https://github.com/maoberlehner/vue-lazy-hydration" target="_blank" rel="noreferrer">Markus Oberlehner</a> to load js components in an efficient way, use the <a href="https://github.com/nuxt/image" target="_blank" rel="noreferrer">nuxt/image</a> module as a base to retrieve optimized image resolutions for our picture and image components and add some new stuff to obtain a holistic solution.</p><h2 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements&quot;">​</a></h2><ul><li>NodeJS &gt;= 12.x.x</li><li>NuxtJS &gt;= 2.15.0</li></ul><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2><p>We provide the following CMS-friendly features:</p><ul><li>dynamic loading of viewport based page resources like fonts, components, pictures, images and iframes</li><li>optional blocking of javascript execution by initial performance measuring</li><li>optimized initial load of javascript files by eliminating of unnecessary javascript files</li><li>prevents the loading of unnecessary resources (including components) that are outside the current viewport.</li><li>optional info layer concept to inform users about a reduced UX when bandwidth or hardware is compromised.</li><li>completely new approach of font declaration</li><li>optimized picture component (supports viewport based sources e.g. landscape/portrait)</li><li>optimized image component</li><li>supports SEO-friendly lazy hydration mode (picture + image)</li><li>optimized youtube/vimeo component (auto generated poster image in different resolutions)</li></ul><h2 id="results" tabindex="-1">Results <a class="header-anchor" href="#results" aria-label="Permalink to &quot;Results&quot;">​</a></h2><ul><li>delivery of the minimum required resources based on the current viewport</li><li>if you use the tools as specified you will get a lighthouse performance score of 100/100</li></ul><h2 id="demos" tabindex="-1">Demos <a class="header-anchor" href="#demos" aria-label="Permalink to &quot;Demos&quot;">​</a></h2><ul><li><a href="https://grabarzundpartner.de/" target="_blank" rel="noreferrer">Grabarz &amp; Partner</a> (<a href="https://pagespeed.web.dev/report?url=https%3A%2F%2Fgrabarzundpartner.de%2F" target="_blank" rel="noreferrer">Lighthouse</a>, <a href="https://nuxt-speedkit.grabarzundpartner.dev/reports/sitespeed/grabarzundpartner/" target="_blank" rel="noreferrer">Sitespeed</a>)</li><li><a href="https://grabarz-group.de/" target="_blank" rel="noreferrer">Grabarz Group</a> (<a href="https://pagespeed.web.dev/report?url=https%3A%2F%2Fgrabarz-group.de%2F" target="_blank" rel="noreferrer">Lighthouse</a>, <a href="https://nuxt-speedkit.grabarzundpartner.dev/reports/sitespeed/grabarz-group/" target="_blank" rel="noreferrer">Sitespeed</a>)</li><li><a href="https://nuxt-speedkit.grabarzundpartner.dev/playground/" target="_blank" rel="noreferrer">Nuxt Speedkit Example</a> (<a href="https://pagespeed.web.dev/report?url=https%3A%2F%2Fnuxt-speedkit.grabarzundpartner.dev%2Fplayground%2F" target="_blank" rel="noreferrer">Lighthouse</a>, <a href="https://nuxt-speedkit.grabarzundpartner.dev/reports/sitespeed/nuxt-speedkit/" target="_blank" rel="noreferrer">Sitespeed</a>)</li></ul>',17);function c(t,m,g,f,b,v){return s(),a("div",null,[e("h1",p,[o(i(t.$frontmatter.title)+" ",1),u]),h])}const x=r(d,[["render",c]]);export{_ as __pageData,x as default};
