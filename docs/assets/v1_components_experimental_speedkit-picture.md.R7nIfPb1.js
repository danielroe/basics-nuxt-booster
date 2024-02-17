import{_ as e,c as a,m as s,a as t,t as n,V as l,o as p}from"./chunks/framework.-_a9DmVr.js";const f=JSON.parse('{"title":"SpeedkitPicture (Experimental)","description":"","frontmatter":{"title":"SpeedkitPicture (Experimental)"},"headers":[],"relativePath":"v1/components/experimental/speedkit-picture.md","filePath":"v1/components/experimental/speedkit-picture.md"}'),h={name:"v1/components/experimental/speedkit-picture.md"},r={id:"frontmatter-title",tabindex:"-1"},o=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1),d=l(`<p><code>SpeedkitPicture</code> is based on the module <code>@nuxt/image@0.2.0</code>. However, we have created a separate Vue component for it, because at the time of the implementation of the module the component <code>NuxtPicture</code> and the API for generating the images were not yet completely finished, or this module did not yet completely cover our use-case. We hope that with the final completion of <a href="https://image.nuxtjs.org/" target="_blank" rel="noreferrer"><code>@nuxt/image</code></a> we will be able to remove our component <code>SpeedkitPicture</code> and can use <code>@nuxt/image</code> &amp; <code>NuxtPicture</code> with full functionality.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is an experimental component that we will offer until <a href="https://image.nuxtjs.org/" target="_blank" rel="noreferrer"><code>nuxt/image</code></a> is fully feature-complete released. This also means that we will accept bug reports for the <code>SpeedkitPicture</code> component. However, we will not fix bugs that are present in the generator of <code>@nuxt/image</code>.</p></div><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2><p>With the current implementation of <code>SpeedkitPicture</code> we can cover the following functionality:</p><ul><li>generation of multiple image resolutions (srcset)</li><li>breakpoint-based differentiation of multiple image resolutions and ratios (srcset + media-rule)</li><li>generation of breakpoint-based placeholders (different ratios e.g. for mobile portrait and landscape)</li><li>optimized preloading of critical image resources</li><li>lazy load of non-critical image resources</li><li>base path support</li><li>lazy hydration support</li><li>load and optimize remote images from custom domains</li><li>full SEO support</li></ul><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>The <code>SpeedkitPicture</code> (Experimental) is used to automatically generate and display different image sizes and/or image ratios for different viewports.</p><p>The specified resources can be given by absolute path (static folder) or complete URL. <a href="https://image.nuxtjs.org/" target="_blank" rel="noreferrer"><code>nuxt/image</code></a> downloads the resources fully automatically and stores the generated and optimized renditions in the destination folder.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">speedkit-picture</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-bind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">image</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SpeedkitPicture </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;#speedkit/components/experimental/SpeedkitPicture&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  components: { SpeedkitPicture },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      image: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        sources: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          { src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;landscape.jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, sizes: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;576:576,1024:1024,1280:1280,1680:1680,1920:1920&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          { src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;portrait.jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, sizes: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;414,768:768&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Image Title&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        alt: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Image Alt&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  sources</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: […],</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  alt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Image Alt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Image Title&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  crossorigin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;anonymous&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="sources" tabindex="-1"><code>sources</code> <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;\`sources\`&quot;">​</a></h3><ul><li>Type: <code>Array</code></li></ul><p>List of resources used.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p><strong>Note:</strong> If more than one resource is included, the smallest width from the <code>sizes</code> property is taken as the condition for the source e.g. <code>(min-width: 992px)</code>. This allows viewport dependent aspect ratios.</p></div><p>Information on property <code>src</code> can be found at <a href="https://image.nuxtjs.org/components/nuxt-img#src" target="_blank" rel="noreferrer">here</a>.</p><p>Property <code>sizes</code> describes the image sizes in which the resource is to be displayed. Image sizes are comma separated and describe the image width and its dependent viewport width e.g. <code>ImageWidth:MinWidth</code>.</p><p>In the following example, two different image ratios are used.</p><ul><li><code>landscape.jpg</code> is applied at a viewport of <code>992px</code> with an image size of <code>1024px</code>.</li><li><code>portrait.jpg</code> is applied below <code>992px</code> and has two viewport dependent image sizes, at <code>(min-width: 768px)</code> the width <code>768px</code> and everything below that the width <code>414px</code>.</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;landscape.jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, sizes: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;992:1024&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;portrait.jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, sizes: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;414,768:768&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h4><h3 id="critical" tabindex="-1"><code>critical</code> <a class="header-anchor" href="#critical" aria-label="Permalink to &quot;\`critical\`&quot;">​</a></h3><ul><li>Type: <code>Boolean</code><ul><li>Default: <code>$parent.isCritical</code></li></ul></li></ul><p>Set component as critical component.</p><p><a href="/guide/usage.html#critical-prop-for-critical-components">Learn more about critical components</a></p><h3 id="alt" tabindex="-1"><code>alt</code> <a class="header-anchor" href="#alt" aria-label="Permalink to &quot;\`alt\`&quot;">​</a></h3><ul><li>Type: <code>String</code></li></ul><p>Image alternative Text.</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt" target="_blank" rel="noreferrer">MDN - HTMLImageElement.alt</a></p><h3 id="title" tabindex="-1"><code>title</code> <a class="header-anchor" href="#title" aria-label="Permalink to &quot;\`title\`&quot;">​</a></h3><ul><li>Type: <code>String</code></li></ul><p>Image Title.</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/title" target="_blank" rel="noreferrer">MDN - HTMLElement.title</a></p><h3 id="crossorigin" tabindex="-1"><code>crossorigin</code> <a class="header-anchor" href="#crossorigin" aria-label="Permalink to &quot;\`crossorigin\`&quot;">​</a></h3><ul><li>Type: <code>String</code><ul><li>default: <code>anonymus</code></li></ul></li></ul><p>Image CrossOrigin.</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/crossOrigin" target="_blank" rel="noreferrer">MDN - HTMLImageElement.crossOrigin</a></p><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">speedkit-picture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  @load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;console.log(&#39;Loaded!&#39;)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  @enter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;console.log(&#39;Viewport!&#39;)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>load</code></td><td>Triggered when the image resource has been completely loaded.</td></tr><tr><td><code>enter</code></td><td>Triggered when component has reached the viewport.</td></tr></tbody></table>`,41);function k(i,c,E,g,u,m){return p(),a("div",null,[s("h1",r,[t(n(i.$frontmatter.title)+" ",1),o]),d])}const b=e(h,[["render",k]]);export{f as __pageData,b as default};
