import{_ as i,o as a,c as t,m as s,a as n,t as r,U as l}from"./chunks/framework.InlhTTjb.js";const u=JSON.parse('{"title":"SpeedkitIframe","description":"","frontmatter":{"title":"SpeedkitIframe"},"headers":[],"relativePath":"v1/components/speedkit-iframe.md","filePath":"v1/components/speedkit-iframe.md"}'),h={name:"v1/components/speedkit-iframe.md"},p={id:"frontmatter-title",tabindex:"-1"},o=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1),k=l(`<p><code>SpeedkitIframe</code>, Iframe &amp; IntersectionObserver in one.</p><h2 id="exkurs" tabindex="-1">Exkurs <a class="header-anchor" href="#exkurs" aria-label="Permalink to &quot;Exkurs&quot;">​</a></h2><p>Iframes have a tendency, in the special case of the initial page load, to disrupt the construction and initialisation of the actual page through the massive loading of resources from another source.</p><p><strong>For the user, this is particularly visible by:</strong></p><ul><li>Freeze (Short freeze of the page)</li><li>Delayed loading of resources (Bilder, Fonts)</li><li>Unnecessarily generated traffic</li></ul><h2 id="solution" tabindex="-1">Solution <a class="header-anchor" href="#solution" aria-label="Permalink to &quot;Solution&quot;">​</a></h2><p>In order to solve these points, care should be taken to ensure that the initialisation of the iframe takes place downstream. This can be realised, for example, via an <a href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver" target="_blank" rel="noreferrer">IntersectionObserver</a>. This sets the source on the iframe only when the visible viewport has been reached.</p><p><strong>The following conditions can thus be fulfilled:</strong></p><ul><li>Iframe load is reactive.</li><li>No resources are blocked during loading.</li><li>Traffic is only generated when the iframe is visible.</li></ul><p>The strategy mentioned above is provided by the <code>SpeedkitIframe</code>, which can be used in the same way as a normal <a href="https://www.w3schools.com/tags/tag_iframe.asp" target="_blank" rel="noreferrer">HTML Iframe</a>. The included <a href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver" target="_blank" rel="noreferrer">IntersectionObserver</a> is configured via the <code>intersectionObserver</code> property.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>The <code>SpeedkitIframe</code> is used like a normal <a href="https://www.w3schools.com/tags/tag_iframe.asp" target="_blank" rel="noreferrer">HTML Iframe</a>.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">speedkit-iframe</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-bind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">iframe</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">onIFrameLoaded</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      iframe: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;…&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       intersectionObserver: { trackVisibility: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, delay: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">350</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    methods: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      onIFrameLoaded</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;iframe loaded!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><blockquote><p>Use native attributes from <a href="https://www.w3schools.com/tags/tag_iframe.asp" target="_blank" rel="noreferrer">HTML Iframe</a>.</p></blockquote><h3 id="intersectionobserver" tabindex="-1"><code>intersectionObserver</code> <a class="header-anchor" href="#intersectionobserver" aria-label="Permalink to &quot;\`intersectionObserver\`&quot;">​</a></h3><ul><li>Type: <code>Object</code> <a href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver#properties" target="_blank" rel="noreferrer">IntersectionObserver Properties</a><ul><li>Default: <code>{ trackVisibility: true, delay: 350 }</code></li></ul></li></ul><p>Sets the options from the integrated <a href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver" target="_blank" rel="noreferrer">IntersectionObserver</a>.</p><p>For advanced usage, <a href="https://web.dev/intersectionobserver-v2/" target="_blank" rel="noreferrer">learn more</a> about option <code>trackVisibility</code> from <a href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver" target="_blank" rel="noreferrer">IntersectionObserver</a>.</p><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">speedkit-iframe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  @load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;console.log(&#39;Loaded!&#39;)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  @enter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;console.log(&#39;Enter Viewport!&#39;)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>load</code></td><td>Triggered when Iframe has finished loading.</td></tr><tr><td><code>enter</code></td><td>Triggered when component has reached the viewport.</td></tr></tbody></table>`,23);function d(e,E,c,g,m,f){return a(),t("div",null,[s("h1",p,[n(r(e.$frontmatter.title)+" ",1),o]),k])}const b=i(h,[["render",d]]);export{u as __pageData,b as default};
