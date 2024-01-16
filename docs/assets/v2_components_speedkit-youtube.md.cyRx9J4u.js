import{_ as a,c as e,m as s,a as t,t as n,V as l,o as p}from"./chunks/framework.RzN-zaa4.js";const b=JSON.parse('{"title":"SpeedkitYoutube","description":"","frontmatter":{"title":"SpeedkitYoutube"},"headers":[],"relativePath":"v2/components/speedkit-youtube.md","filePath":"v2/components/speedkit-youtube.md"}'),h={name:"v2/components/speedkit-youtube.md"},o={id:"frontmatter-title",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1),d=l(`<p>We have integrated <code>SpeedkitYoutube</code> as an example to show how iFrame content must be integrated in a performance-optimized manner. For this purpose, a separate IntersectionObserver has been implemented, which detects a longer dwell time of the component in the viewport. The iFrame is initialized only after a positive detection. This prevents immense data from having to be loaded when simply scrolling through the page. So that no empty space is visible to the user, we use the functionality of the <a href="/v2/components/speedkit-picture.html"><code>SpeedkitPicture</code></a> and preload the corresponding Youtube poster in different renditions, so the illusion is perfect for the user and he does not notice anything of the optimized lazy load procedure.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>The <code>SpeedkitYoutube</code>is used to initialise Youtube videos with <a href="https://developers.google.com/youtube/iframe_api_reference?hl=de" target="_blank" rel="noreferrer">Youtube Iframe-API</a>.</p><p>The <code>url</code> of the Youtube video must be specified.</p><p>The <code>SpeedkitPicture</code> is used for the poster, so the generation of the poster is automated, you can define the image sizes with <a href="/v2/components/speedkit-picture.html#sources"><code>sizes</code> (What is <code>sizes</code>?)</a>.</p><p><a href="/v2/components/speedkit-picture.html">Learn more about <code>SpeedkitPicture</code></a></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Important: For using <code>SpeedkitYoutube</code> do not disable <code>@nuxt/image</code> via <code>disableNuxtImage</code>.</p></div><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">speedkit-youtube</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-bind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">youtube</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">playing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">onPlaying</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SpeedkitPicture </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;#speedkit/components/SpeedkitYoutube&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  components: { SpeedkitPicture },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      youtube: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;youtube-url&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Youtube Title&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        loadingSpinner: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        host: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://www.youtube.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        options: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          fs: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // use boolean instead of 0 or 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        posterSizes: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          default: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          md: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;50vw&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    onPlaying</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Youtube Player playing!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;youtube-url&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Player Title&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  autoplay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  mute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  posterSizes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { … },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { … }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="url" tabindex="-1"><code>url</code> <a class="header-anchor" href="#url" aria-label="Permalink to &quot;\`url\`&quot;">​</a></h3><ul><li>Type: <code>String</code></li></ul><p>Sets a video via the youtube url.</p><h3 id="title" tabindex="-1"><code>title</code> <a class="header-anchor" href="#title" aria-label="Permalink to &quot;\`title\`&quot;">​</a></h3><ul><li>Type: <code>String</code></li></ul><p>Sets the title for the player iframe and poster.</p><h3 id="autoplay" tabindex="-1"><code>autoplay</code> <a class="header-anchor" href="#autoplay" aria-label="Permalink to &quot;\`autoplay\`&quot;">​</a></h3><ul><li>Type: <code>Boolean</code><ul><li>Default: <code>false</code></li></ul></li></ul><p>When set starts video in autoplay. It is required that the component is integrated via <a href="/v2/guide/usage.html#import-components"><code>SpeedkitHydrate</code></a> or is only activated when entering the visible area.</p><h3 id="mute" tabindex="-1"><code>mute</code> <a class="header-anchor" href="#mute" aria-label="Permalink to &quot;\`mute\`&quot;">​</a></h3><ul><li>Type: <code>Boolean</code><ul><li>Default: <code>false</code></li></ul></li></ul><p>When set the player is muted.</p><h3 id="posterloadingspinner" tabindex="-1"><code>posterLoadingSpinner</code> <a class="header-anchor" href="#posterloadingspinner" aria-label="Permalink to &quot;\`posterLoadingSpinner\`&quot;">​</a></h3><ul><li>Type: <a href="/v2/classes/loading-spinner.html"><code>LoadingSpinner</code></a><ul><li>Default: <code>undefined</code></li></ul></li></ul><p>Sets a loading spinner definition of type <a href="/v2/classes/loading-spinner.html"><code>LoadingSpinner</code></a>, this describes the visual appearance of the loading state of the <code>SpeedkitImage</code> contained in the <code>SpeedkitPicture</code>.</p><h3 id="postersizes" tabindex="-1"><code>posterSizes</code> <a class="header-anchor" href="#postersizes" aria-label="Permalink to &quot;\`posterSizes\`&quot;">​</a></h3><ul><li>Type: <code>String</code><ul><li>Default: <code>{ default: &#39;100vw&#39;, xxs: &#39;100vw&#39;, xs: &#39;100vw&#39;, sm: &#39;100vw&#39;, md: &#39;100vw&#39;, lg: &#39;100vw&#39;, xl: &#39;100vw&#39;, xxl: &#39;100vw&#39; }</code></li></ul></li></ul><p>Sets the image sizes of the poster.</p><p><a href="/v2/components/speedkit-picture.html#sources">Learn more about <code>sizes</code></a></p><h3 id="options" tabindex="-1"><code>options</code> <a class="header-anchor" href="#options" aria-label="Permalink to &quot;\`options\`&quot;">​</a></h3><ul><li>Type: <code>Object</code></li></ul><p>Overrides the youtube player options. These will be the same as the youtube player parameters.</p><p>Use <code>boolean</code> values instead of integers (e.g. <code>0</code>, <code>1</code>).</p><p><a href="https://developers.google.com/youtube/player_parameters#Parameters" target="_blank" rel="noreferrer">Learn more about Youtube Player Parameters</a></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>For <code>autoplay</code> and <code>mute</code> the component properties are used.</p><p>Option <code>playsinline</code> is always set, <code>mute</code> is set automatically for touch devices.<br> This is important for autoplay on mobile devices.</p></div><h3 id="host" tabindex="-1"><code>host</code> <a class="header-anchor" href="#host" aria-label="Permalink to &quot;\`host\`&quot;">​</a></h3><ul><li>Type: <code>String</code><ul><li>default: <code>&#39;https://www.youtube-nocookie.com&#39;</code></li></ul></li></ul><p>Sets the host for the player.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>It is recommended to use the default (<a href="https://www.youtube-nocookie.com" target="_blank" rel="noreferrer">https://www.youtube-nocookie.com</a>).</p></div><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> #loading-spinner</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Loading…</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> #play</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Click!&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>loading-spinner</code></td><td>Overwrites the loading spinner.</td></tr><tr><td><code>play</code></td><td>Overwrites the play button.</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">speedkit-youtube</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  @ready</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;console.log(&#39;Player Ready!&#39;)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  @playing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;console.log(&#39;Player Playing!&#39;)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>ready</code></td><td>Triggered when <code>Youtube-API</code> is completely loaded.</td></tr><tr><td><code>playing</code></td><td>Triggered when video is finished loading and playing.</td></tr></tbody></table>`,46);function r(i,E,c,g,u,y){return p(),e("div",null,[s("h1",o,[t(n(i.$frontmatter.title)+" ",1),k]),d])}const F=a(h,[["render",r]]);export{b as __pageData,F as default};
