import{_ as a,o as e,c as t,m as s,a as n,t as l,U as p}from"./chunks/framework.InlhTTjb.js";const f=JSON.parse('{"title":"SpeedkitImage","description":"","frontmatter":{"title":"SpeedkitImage"},"headers":[],"relativePath":"v2/components/speedkit-image.md","filePath":"v2/components/speedkit-image.md"}'),h={name:"v2/components/speedkit-image.md"},r={id:"frontmatter-title",tabindex:"-1"},o=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1),d=p(`<p>The <code>SpeedkitImage</code> is a <code>img</code> implementation based on the module <a href="https://image.nuxtjs.org/" target="_blank" rel="noreferrer"><code>@nuxt/image</code></a>.<br> It uses the provided API <code>$img</code>.</p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2><p>With the current implementation of <code>SpeedkitImage</code> we can cover the following functionality:</p><ul><li>generation of multiple image resolutions (srcset)</li><li>breakpoint-based differentiation of multiple image resolutions (srcset)</li><li>optimized preloading of critical image resources</li><li>lazy load of non-critical image resources</li><li>base path support</li><li>lazy hydration support</li><li>load and optimize remote images from custom domains</li><li>full SEO support</li></ul><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>The <code>SpeedkitImage</code> is used to automatically generate and display different image sizes for different viewports.</p><p>The specified resources can be given by absolute path (static folder) or complete URL. <a href="https://image.nuxtjs.org/" target="_blank" rel="noreferrer"><code>nuxt/image</code></a> downloads the resources fully automatically and stores the generated and optimized renditions in the destination folder.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Important: For using <code>SpeedkitImage</code> do not disable <code>@nuxt/image</code> via <code>disableNuxtImage</code>.</p></div><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">speedkit-image</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-bind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">image</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">onLoadImage</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SpeedkitImage </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;#speedkit/components/SpeedkitImage&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  components: { SpeedkitImage },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      image: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        source: { format: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/img/image.jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, sizes: { default: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, xxs: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, xs: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, sm: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, md: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, lg: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, xl: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, xxl: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Image Title&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        alt: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Image Alt&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    onLoadImage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Image loaded!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  source</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { … },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Image Title&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  alt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Image Alt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  loadingSpinner</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LoadingSpinner</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( … ),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="hydrate" tabindex="-1"><code>hydrate</code> <a class="header-anchor" href="#hydrate" aria-label="Permalink to &quot;\`hydrate\`&quot;">​</a></h3><ul><li>Type: <code>Boolean</code><ul><li>Default: <code>true</code></li></ul></li></ul><p>The initialization of the <code>SpeedkitImage</code> in the client can be controlled manually.<br> Here for the property <code>hydrate</code> must be set externally. If <code>true</code> the <code>SpeedkitImage</code> is initialized.</p><h3 id="source" tabindex="-1"><code>source</code> <a class="header-anchor" href="#source" aria-label="Permalink to &quot;\`source\`&quot;">​</a></h3><ul><li>Type: <code>Object</code></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;output-format&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;file-path|url&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  sizes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { … }, </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  modifiers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { … }, </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  preset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { … }, </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  provider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;provider&gt;&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="format" tabindex="-1"><code>format</code> <a class="header-anchor" href="#format" aria-label="Permalink to &quot;\`format\`&quot;">​</a></h4><p>Sets the image output format.</p><p>Available formats:</p><ul><li><code>avif</code></li><li><code>webp</code></li><li><code>png</code></li><li><code>jpg</code></li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Important: Note that if you specify <code>src</code> without a file extension, the format must be included.</p></div><h4 id="src" tabindex="-1"><code>src</code> <a class="header-anchor" href="#src" aria-label="Permalink to &quot;\`src\`&quot;">​</a></h4><p>Information on property <code>src</code> can be found at <a href="https://image.nuxtjs.org/components/nuxt-img#src" target="_blank" rel="noreferrer">here</a>.</p><h4 id="sizes" tabindex="-1"><code>sizes</code> <a class="header-anchor" href="#sizes" aria-label="Permalink to &quot;\`sizes\`&quot;">​</a></h4><p>Describes the image sizes in which the resource should be displayed. The image <code>sizes</code> are passed as an <code>object</code> and describe with the key-value pairs the image width and the width of the viewport depending on it, e.g. <code>ImageWidth:MinWidth</code>.</p><p>The image width, is definied by <a href="https://image.nuxtjs.org/api/options#screens" target="_blank" rel="noreferrer"><code>screens</code></a> option from <code>@nuxt/image</code></p><p><strong>Example</strong></p><p>In the following example, one image with two different image sizes by breakpoints and output format is <code>webp</code>.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { format: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;webp&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/img/image.jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, sizes: { default: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, sm: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h4 id="modifiers" tabindex="-1"><code>modifiers</code> <a class="header-anchor" href="#modifiers" aria-label="Permalink to &quot;\`modifiers\`&quot;">​</a></h4><ul><li>Type: <code>Object</code></li></ul><p>You can give separate modifiers to each source. This overwrites the global ones of the preset if available.</p><p>Learn more about <code>modifiers</code>:</p><ul><li><a href="https://image.nuxtjs.org/api/options/#presets" target="_blank" rel="noreferrer">https://image.nuxtjs.org/api/options/#presets</a></li></ul><h4 id="preset" tabindex="-1"><code>preset</code> <a class="header-anchor" href="#preset" aria-label="Permalink to &quot;\`preset\`&quot;">​</a></h4><ul><li>Type: <code>Object</code></li></ul><p>If a preset is set on a source, the globally defined one is ignored.</p><p>This means that a separate preset can be specified for each source.</p><p>Learn more about <code>preset</code>:</p><ul><li><a href="https://image.nuxtjs.org/api/$img#imggetsizes" target="_blank" rel="noreferrer">https://image.nuxtjs.org/api/$img#imggetsizes</a></li><li><a href="https://image.nuxtjs.org/api/options/#presets" target="_blank" rel="noreferrer">https://image.nuxtjs.org/api/options/#presets</a></li></ul><h4 id="provider" tabindex="-1"><code>provider</code> <a class="header-anchor" href="#provider" aria-label="Permalink to &quot;\`provider\`&quot;">​</a></h4><ul><li>Type: <code>String</code></li></ul><p>If a provider is set on a source, the globally defined one is ignored.</p><p>This means that a separate provider can be specified for each source.</p><p>Learn more about <code>provider</code>:</p><ul><li><a href="https://image.nuxtjs.org/api/$img#imggetsizes" target="_blank" rel="noreferrer">https://image.nuxtjs.org/api/$img#imggetsizes</a></li><li><a href="https://image.nuxtjs.org/api/options/#providers" target="_blank" rel="noreferrer">https://image.nuxtjs.org/api/options/#providers</a></li></ul><h3 id="loadingspinner" tabindex="-1"><code>loadingSpinner</code> <a class="header-anchor" href="#loadingspinner" aria-label="Permalink to &quot;\`loadingSpinner\`&quot;">​</a></h3><ul><li>Type: <a href="/v2/classes/loading-spinner.html"><code>LoadingSpinner</code></a><ul><li>Default: <code>this.$speedkit.loader()</code></li></ul></li></ul><p>Sets a loading spinner definition of type <a href="/v2/classes/loading-spinner.html"><code>LoadingSpinner</code></a>, this describes the visual appearance of the loading state.</p><h3 id="alt" tabindex="-1"><code>alt</code> <a class="header-anchor" href="#alt" aria-label="Permalink to &quot;\`alt\`&quot;">​</a></h3><ul><li>Type: <code>String</code></li></ul><p>Image alternative Text.</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt" target="_blank" rel="noreferrer">MDN - HTMLImageElement.alt</a></p><h3 id="title" tabindex="-1"><code>title</code> <a class="header-anchor" href="#title" aria-label="Permalink to &quot;\`title\`&quot;">​</a></h3><ul><li>Type: <code>String</code></li></ul><p>Image Title.</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/title" target="_blank" rel="noreferrer">MDN - HTMLElement.title</a></p><h3 id="crossorigin" tabindex="-1"><code>crossorigin</code> <a class="header-anchor" href="#crossorigin" aria-label="Permalink to &quot;\`crossorigin\`&quot;">​</a></h3><ul><li>Type: <code>String</code>, <code>Boolean</code></li></ul><p>If not set, the global crossorigin is used <code>this.$speedkit.crossorigin</code>.</p><p><a href="/v2/guide/options.html#crossorigin">Learn more about <code>crossorigin</code> option</a></p><p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin" target="_blank" rel="noreferrer">MDN - HTML.Attributes.crossorigin</a></p><h3 id="critical" tabindex="-1"><code>critical</code> <a class="header-anchor" href="#critical" aria-label="Permalink to &quot;\`critical\`&quot;">​</a></h3><ul><li>Type: <code>Boolean</code><ul><li>Default: <code>$parent.isCritical</code></li></ul></li></ul><p>Set component as critical component.</p><p><a href="/v2/guide/usage.html#critical-prop-for-critical-components">Learn more about critical components</a></p><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">speedkit-image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  @load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;console.log(&#39;Image Loaded!&#39;)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>load</code></td><td>Triggered when the image resource has been completely loaded.</td></tr></tbody></table>`,71);function k(i,c,E,g,m,u){return e(),t("div",null,[s("h1",r,[n(l(i.$frontmatter.title)+" ",1),o]),d])}const b=a(h,[["render",k]]);export{f as __pageData,b as default};
