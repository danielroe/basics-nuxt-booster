import{_ as n,E as l,c as p,m as s,a as i,t as h,J as o,w as k,V as e,o as r}from"./chunks/framework.RzN-zaa4.js";const x=JSON.parse('{"title":"SpeedkitYoutube (Experimental)","description":"","frontmatter":{"title":"SpeedkitYoutube (Experimental)"},"headers":[],"relativePath":"v1/components/experimental/speedkit-youtube.md","filePath":"v1/components/experimental/speedkit-youtube.md"}'),d={name:"v1/components/experimental/speedkit-youtube.md"},E={id:"frontmatter-title",tabindex:"-1"},c=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1),g=e(`<blockquote><p>Please note the privacy policy when using. <a href="https://developers.google.com/youtube/v3" target="_blank" rel="noreferrer">Google Youtube-API</a> is integrated via dependency <a href="https://www.npmjs.com/package/youtube-player" target="_blank" rel="noreferrer"><code>youtube-player</code></a>.</p></blockquote><p>We have integrated <code>SpeedkitYoutube</code> (Experimental) as an example to show how iFrame content must be integrated in a performance-optimized manner. For this purpose, a separate IntersectionObserver has been implemented, which detects a longer dwell time of the component in the viewport. The iFrame is initialized only after a positive detection. This prevents immense data from having to be loaded when simply scrolling through the page. So that no empty space is visible to the user, we use the functionality of the <a href="/v1/components/experimental/speedkit-picture.html"><code>SpeedkitPicture</code> (Experimental)</a> and preload the corresponding Youtube poster in different renditions, so the illusion is perfect for the user and he does not notice anything of the optimized lazy load procedure.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><code>SpeedkitYoutube</code> (Experimental) is based on the component <a href="/v1/components/experimental/speedkit-picture.html"><code>SpeedkitPicture</code> (Experimental)</a>. We hope that with the final completion of <a href="https://image.nuxtjs.org/" target="_blank" rel="noreferrer"><code>@nuxt/image</code></a> we will be able to modify this component and can use <code>@nuxt/image</code> &amp; <code>NuxtPicture</code> with full functionality.</p></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>The <code>SpeedkitYoutube</code> (Experimental) is used to initialise Youtube videos with Youtube-API only when they are in the visible viewport.</p><p>The <code>id</code> of the Youtube video and the appropriate viewport dependent widths must be specified in <a href="/v1/components/experimental/speedkit-picture.html#sources"><code>sizes</code> (What is <code>sizes</code>?)</a>. The <code>SpeedkitPicture</code> (Experimental) is used for the poster, so the generation of the poster is automated.</p><p><a href="/v1/components/experimental/speedkit-picture.html">Learn more about <code>SpeedkitPicture</code> (Experimental)</a></p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">speedkit-youtube</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-bind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">youtube</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">playing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">onPlaying</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SpeedkitPicture </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;#speedkit/components/experimental/SpeedkitYoutube&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  components: { SpeedkitPicture },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      youtube: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;youtube-id&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        host: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://www.youtube-nocookie.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        config: { … },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        poster: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          sources: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            { src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;poster.jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, sizes: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;414,768:768,576:576,1024:1024,1280:1280,1680:1680,1920:1920&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          alt: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Youtube Alt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Youtube Title&#39;</span></span>
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
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;youtube-id&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  autoplay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://www.youtube-nocookie.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { … }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="id" tabindex="-1"><code>id</code> <a class="header-anchor" href="#id" aria-label="Permalink to &quot;\`id\`&quot;">​</a></h3>`,12),u=s("code",null,"String",-1),y=e('<p>Sets the Youtube ID.</p><h3 id="sizes" tabindex="-1"><code>sizes</code> <a class="header-anchor" href="#sizes" aria-label="Permalink to &quot;`sizes`&quot;">​</a></h3><ul><li>Type: <code>String</code><ul><li>Default: <code>undefined</code></li></ul></li></ul><p>Defines the viewport dependent image sizes for the poster.</p><p>If <code>undefined</code> the image size of Youtube thumbnail is used (e.g. <code>https://img.youtube.com/vi/${id}/maxresdefault.jpg</code>).</p><h3 id="autoplay" tabindex="-1"><code>autoplay</code> <a class="header-anchor" href="#autoplay" aria-label="Permalink to &quot;`autoplay`&quot;">​</a></h3><ul><li>Type: <code>Boolean</code><ul><li>Default: <code>false</code></li></ul></li></ul><p>If set, the player is started automatically when the viewport centre is reached.</p><h3 id="host" tabindex="-1"><code>host</code> <a class="header-anchor" href="#host" aria-label="Permalink to &quot;`host`&quot;">​</a></h3><ul><li>Type: <code>String</code><ul><li>Default: <code>https://www.youtube-nocookie.com</code></li></ul></li></ul><p>Sets the host url for the Youtube player.</p><h3 id="config" tabindex="-1"><code>config</code> <a class="header-anchor" href="#config" aria-label="Permalink to &quot;`config`&quot;">​</a></h3><ul><li>Type: <code>Object</code><ul><li>Default: <code>{ playsinline: 1, modestbranding: 1 }</code></li></ul></li></ul><p>Sets the Youtube player configuration.</p><p><a href="https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5" target="_blank" rel="noreferrer">Learn more about Youtube Player Parameters</a></p><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">speedkit-picture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  @ready</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;console.log(&#39;Ready!&#39;)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  @loading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;console.log(&#39;Video Loading!&#39;)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  @playing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;console.log(&#39;Video Playing!&#39;)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  @enter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;console.log(&#39;Viewport!&#39;)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>ready</code></td><td>Triggered when Youtube-Api is completely loaded.</td></tr><tr><td><code>loading</code></td><td>Triggered when video starts loading.</td></tr><tr><td><code>playing</code></td><td>Triggered when video is finished loading and playing.</td></tr><tr><td><code>enter</code></td><td>Triggered when component has reached the viewport.</td></tr></tbody></table>',18);function m(a,b,F,f,v,_){const t=l("badge");return r(),p("div",null,[s("h1",E,[i(h(a.$frontmatter.title)+" ",1),c]),g,s("ul",null,[s("li",null,[i("Type: "),u,s("ul",null,[s("li",null,[o(t,null,{default:k(()=>[i("required")]),_:1})])])])]),y])}const w=n(d,[["render",m]]);export{x as __pageData,w as default};
