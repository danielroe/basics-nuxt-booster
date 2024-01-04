import{_ as s,o as i,c as a,m as e,a as n,t as d,U as p}from"./chunks/framework.InlhTTjb.js";const b=JSON.parse('{"title":"Migrate from v1 to v2","description":"","frontmatter":{"title":"Migrate from v1 to v2"},"headers":[],"relativePath":"migration/v2.md","filePath":"migration/v2.md"}'),o={name:"migration/v2.md"},r={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1),l=p(`<p>With <code>v2</code> the documentation was changed. You can find the previous version <a href="https://nuxt-speedkit.grabarzundpartner.dev/v1/" target="_blank" rel="noreferrer">here</a>.</p><h2 id="component-import" tabindex="-1">Component Import <a class="header-anchor" href="#component-import" aria-label="Permalink to &quot;Component Import&quot;">​</a></h2><p>The <code>speedkitComponents</code> property is removed from skeleton.</p><p>Instead, the <a href="/v2/guide/usage.html#import-components"><code>SpeedkitHydrate</code></a> is now used as a function wrapper.</p><p><strong><span style="color:red;">old (v1)</span></strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  speedkitComponents: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    Stage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@/components/organisms/Stage&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p><strong><span style="color:green;">now (v2)</span></strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> speedkitHydrate </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;#speedkit/hydrate&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  components: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Stage: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">speedkitHydrate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@/components/organisms/Stage&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h2 id="components" tabindex="-1">Components <a class="header-anchor" href="#components" aria-label="Permalink to &quot;Components&quot;">​</a></h2><h3 id="speedkitlayer" tabindex="-1">SpeedkitLayer <a class="header-anchor" href="#speedkitlayer" aria-label="Permalink to &quot;SpeedkitLayer&quot;">​</a></h3><p>In the <code>SpeedkitLayer</code> the ids and style classes were updated, these are now <code>kebab-case</code>.</p><table><thead><tr><th>Type</th><th>old</th><th>new</th></tr></thead><tbody><tr><td><code>id</code></td><td><code>#nuxt-speedkit__speedkit-layer</code></td><td><code>nuxt-speedkit-layer</code></td></tr><tr><td><code>id</code></td><td><code>#nuxt-speedkit__speedkit-layer__content</code></td><td><code>#nuxt-speedkit-layer-content</code></td></tr><tr><td><code>id</code></td><td><code>#nuxt-speedkit__speedkit-layer__close</code></td><td><code>#nuxt-speedkit-layer-close</code></td></tr><tr><td><code>class</code></td><td><code>.nuxt-speedkit__speedkit-layer--visible</code></td><td><code>.nuxt-speedkit-layer-visible</code></td></tr><tr><td><code>id</code></td><td><code>#nuxt-speedkit__message__nojs</code></td><td><code>#nuxt-speedkit-message-nojs</code></td></tr><tr><td><code>id</code></td><td><code>#nuxt-speedkit__message__unsupported-browser</code></td><td><code>#nuxt-speedkit-message-unsupported-browser</code></td></tr><tr><td><code>id</code></td><td><code>#nuxt-speedkit__message__outdated-device</code></td><td><code>#nuxt-speedkit-message-outdated-device</code></td></tr><tr><td><code>id</code></td><td><code>#nuxt-speedkit__message__slow-connection</code></td><td><code>#nuxt-speedkit-message-slow-connection</code></td></tr><tr><td><code>id</code></td><td><code>#nuxt-speedkit__button__init-nojs</code></td><td><code>#nuxt-speedkit-button-init-nojs</code></td></tr><tr><td><code>id</code></td><td><code>#nuxt-speedkit__button__init-font</code></td><td><code>#nuxt-speedkit-button-init-font</code></td></tr><tr><td><code>id</code></td><td><code>#nuxt-speedkit__button__init-app</code></td><td><code>#nuxt-speedkit-button-init-app</code></td></tr></tbody></table><h3 id="speedkitpicture-speedkitpictureexperimental" tabindex="-1">SpeedkitPicture / SpeedkitPictureExperimental <a class="header-anchor" href="#speedkitpicture-speedkitpictureexperimental" aria-label="Permalink to &quot;SpeedkitPicture / SpeedkitPictureExperimental&quot;">​</a></h3><p>The <code>SpeedkitPicture</code> was replaced by a new version of the <code>SpeedkitPictureExperimental</code>, therefore the <code>SpeedkitPictureExperimental</code> was removed from the project.</p><p>When reusing a <code>SpeedkitPictureExperimental</code> as a <code>SpeedkitPicture</code>, the structure of the <a href="/v2/components/speedkit-picture.html#sources">property <code>sources</code></a> must be adapted, this has been updated.</p><p><strong><span style="color:red;">old (v1)</span></strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[ </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;landscape.jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, sizes: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;992:1024&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;portrait.jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, sizes: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;414,768:768&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p><strong><span style="color:green;">now (v2)</span></strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/img/landscape.png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, sizes: { md: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, media: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;(orientation: landscape)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/img/portrait.png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, sizes: { default: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, sm: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, media: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;(orientation: portrait)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p>More information about the integration of <code>SpeedkitPicture</code> can be found <a href="/v2/components/speedkit-picture.html">here</a>.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>Important:</strong> In the new version of <code>SpeedkitPicture</code> the <code>placeholder</code> property is no longer included.</p></div><h3 id="speedkityoutube-speedkityoutubeexperimental" tabindex="-1">SpeedkitYoutube / SpeedkitYoutubeExperimental <a class="header-anchor" href="#speedkityoutube-speedkityoutubeexperimental" aria-label="Permalink to &quot;SpeedkitYoutube / SpeedkitYoutubeExperimental&quot;">​</a></h3><p>With the change of the SpeedkitPicture also <code>SpeedkitYoutube</code> and <code>SpeedkitYoutubeExperimental</code> were reduced to <code>SpeedkitYoutube</code>.</p><p>The events <code>loading</code> and <code>enter</code> have been removed.</p><p>More information about the integration of <code>SpeedkitYoutube</code> can be found <a href="/v2/components/speedkit-youtube.html">here</a>.</p><h3 id="speedkitiframe" tabindex="-1">SpeedkitIframe <a class="header-anchor" href="#speedkitiframe" aria-label="Permalink to &quot;SpeedkitIframe&quot;">​</a></h3><p>Property <code>intersectionObserver</code> was renamed to <code>componentObserver</code>.</p><p>More information about the integration of <code>SpeedkitIframe</code> can be found <a href="/v2/components/speedkit-iframe.html">here</a>.</p>`,28);function k(t,c,E,u,g,m){return i(),a("div",null,[e("h1",r,[n(d(t.$frontmatter.title)+" ",1),h]),l])}const _=s(o,[["render",k]]);export{b as __pageData,_ as default};
