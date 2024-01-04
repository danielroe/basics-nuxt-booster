import{_ as i,o as a,c as t,m as s,a as n,t as l,U as d}from"./chunks/framework.InlhTTjb.js";const b=JSON.parse('{"title":"Options","description":"","frontmatter":{"title":"Options"},"headers":[],"relativePath":"guide/options.md","filePath":"guide/options.md"}'),o={name:"guide/options.md"},h={id:"frontmatter-title",tabindex:"-1"},p=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1),r=d(`<h2 id="crossorigin" tabindex="-1"><code>crossorigin</code> <a class="header-anchor" href="#crossorigin" aria-label="Permalink to &quot;\`crossorigin\`&quot;">​</a></h2><ul><li>Type: <code>String</code>, <code>Boolean</code><ul><li>Default: <code>&#39;anonymous&#39;</code></li><li>Valid values: <code>anonymous</code>, <code>use-credentials</code>, <code>&#39;&#39;</code>, <code>true</code>, <code>false</code></li></ul></li></ul><p>Sets the global <code>crossorigin</code> value of the <strong>Nuxt Speedkit</strong> preloads.<br> The default value is the <code>crossorigin</code> value from the <a href="https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-render#crossorigin" target="_blank" rel="noreferrer">Render Configuration</a>.</p><blockquote><p>Set <code>false</code> to disable the <code>crossorigin</code>.</p></blockquote><p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin" target="_blank" rel="noreferrer">MDN - HTML.Attributes.crossorigin</a></p><h2 id="optimizepreloads" tabindex="-1"><code>optimizePreloads</code> <a class="header-anchor" href="#optimizepreloads" aria-label="Permalink to &quot;\`optimizePreloads\`&quot;">​</a></h2><ul><li>Type: <code>Boolean</code><ul><li>Default: <code>true</code></li></ul></li></ul><p>Activating this option optimizes the initial script preloads and removes unnecessary loads.</p><p>The following NuxtJS settings are made or overwritten in the <code>nuxt.config</code>:</p><table><thead><tr><th>Property</th><th>Value</th></tr></thead><tbody><tr><td><code>nuxt.options.vite.build.manifest</code></td><td><code>false</code></td></tr><tr><td><code>nuxt.options.noScripts</code></td><td><code>true</code></td></tr></tbody></table><h2 id="detection" tabindex="-1"><code>detection</code> <a class="header-anchor" href="#detection" aria-label="Permalink to &quot;\`detection\`&quot;">​</a></h2><ul><li>Type: <code>Object</code></li></ul><p>These options can be used to define the initial checks to display the <a href="/components/speedkit-layer.html"><code>SpeedkitLayer</code></a>. The prerequisite are that the <a href="/components/speedkit-layer.html"><code>SpeedkitLayer</code></a> has been embedded into the layout.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  performance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  browserSupport</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><table><thead><tr><th>Key</th><th>Type</th><th>Required</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>performance</code></td><td><code>Boolean</code></td><td>yes</td><td>Checking whether the <a href="/guide/options.html#performancemetrics">minimum characteristic values</a> have been reached. If the test is negative, the <a href="/components/speedkit-layer.html"><code>SpeedkitLayer</code></a> will be displayed.</td><td><code>true</code></td></tr><tr><td><code>browserSupport</code></td><td><code>Boolean</code></td><td>yes</td><td>Check if the current browser on client side is supported. If the test is negative, the <a href="/components/speedkit-layer.html"><code>SpeedkitLayer</code></a> will be displayed.</td><td><code>true</code></td></tr></tbody></table><div class="info custom-block"><p class="custom-block-title">INFO</p><p>For the browser support detection, the default <a href="https://github.com/browserslist/browserslist" target="_blank" rel="noreferrer">Browserslist</a> of the NuxtJS configuration is used.</p></div><h2 id="performancemetrics" tabindex="-1"><code>performanceMetrics</code> <a class="header-anchor" href="#performancemetrics" aria-label="Permalink to &quot;\`performanceMetrics\`&quot;">​</a></h2><ul><li>Type: <code>Object</code></li></ul><p>With the help of the metrics, the actual performance check on client side can be configured.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  device</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    hardwareConcurrency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">max</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">48</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    deviceMemory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  timing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    fcp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">800</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    dcl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1200</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // fallback if fcp is not available (safari)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="device" tabindex="-1"><code>device</code> <a class="header-anchor" href="#device" aria-label="Permalink to &quot;\`device\`&quot;">​</a></h3><ul><li>Type: <code>Object</code></li></ul><p>Definition of the minimum hardware requirements for visiting the website.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  hardwareConcurrency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">max</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">48</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  deviceMemory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><table><thead><tr><th>Key</th><th>Type</th><th>Required</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>hardwareConcurrency</code></td><td><code>Object</code></td><td>yes</td><td>min/max number of CPUs</td><td><code>{ min: 2, max: 48 }</code></td></tr><tr><td><code>deviceMemory</code></td><td><code>Object</code></td><td>yes</td><td>min size of memory</td><td><code>{ min: 2 }</code></td></tr></tbody></table><h3 id="timing" tabindex="-1"><code>timing</code> <a class="header-anchor" href="#timing" aria-label="Permalink to &quot;\`timing\`&quot;">​</a></h3><ul><li>Type: <code>Object</code></li></ul><p>Definition of the max. FCP duration (ms). If the specified value is exceeded, the <a href="/components/speedkit-layer.html"><code>SpeedkitLayer</code></a> will be displayed. If the browser does not grant access to the FCP, as fallback the DCL will be evaluated.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fcp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">800</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  dcl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1200</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // fallback if fcp is not available (safari)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><table><thead><tr><th>Key</th><th>Type</th><th>Required</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>fcp</code></td><td><code>Number</code></td><td>yes</td><td>Max. FCP duration in ms <a href="https://developer.mozilla.org/en-US/docs/Glossary/First_contentful_paint" target="_blank" rel="noreferrer">learn More</a></td><td><code>800</code></td></tr><tr><td><code>dcl</code></td><td><code>Number</code></td><td>yes</td><td>Max. DCL duration in ms</td><td><code>1200</code></td></tr></tbody></table><h2 id="fonts" tabindex="-1"><code>fonts</code> <a class="header-anchor" href="#fonts" aria-label="Permalink to &quot;\`fonts\`&quot;">​</a></h2><ul><li>Type: <code>Array</code></li></ul><p>List of all font families used in the project. Only the fonts that are listed in the configuration can be retrieved and integrated via <a href="/directives/v-font.html"><code>$fonts.getFont(...)</code></a>.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    family: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Font A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    locals: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Font A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fallback: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Arial&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;sans-serif&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    variances: […]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    family: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Font B&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    locals: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Font B&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fallback: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Arial&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;sans-serif&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    variances: […]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h3 id="font-family" tabindex="-1">Font-Family <a class="header-anchor" href="#font-family" aria-label="Permalink to &quot;Font-Family&quot;">​</a></h3><ul><li>Type: <code>Object</code></li></ul><p>Describes a font family with all its variants.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  family</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Font A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  locals</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Font A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fallback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Arial&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;sans-serif&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  variances</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: […]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><table><thead><tr><th>Key</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>family</code></td><td><code>String</code></td><td>yes</td><td>name of the font family</td></tr><tr><td><code>locals</code></td><td><code>Array</code></td><td>yes</td><td>system font name of the specified font family</td></tr><tr><td><code>fallback</code></td><td><code>Array</code></td><td>yes</td><td>fallback fonts e.g. <code>[&#39;Arial&#39;, &#39;sans-serif&#39;]</code></td></tr><tr><td><code>variances</code></td><td><code>Array</code></td><td>yes</td><td>list of font family variants (e.g. Bold, Italic)</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Prevent sizing discrepancy between your custom and fallback font for perfect swap and reduction of layout shifts. <a href="https://meowni.ca/font-style-matcher/" target="_blank" rel="noreferrer">Learn more</a></p></div><h3 id="font-variance" tabindex="-1">Font-Variance <a class="header-anchor" href="#font-variance" aria-label="Permalink to &quot;Font-Variance&quot;">​</a></h3><ul><li>Type: <code>Object</code></li></ul><p>A font variant describes an instance of a font family and is used to generate the <code>FontFace</code> declaration. Font variants differ in <a href="https://developer.mozilla.org/de/docs/Web/CSS/font-style" target="_blank" rel="noreferrer"><code>style</code></a> and <a href="https://developer.mozilla.org/de/docs/Web/CSS/font-weight" target="_blank" rel="noreferrer"><code>weight</code></a>.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;normal&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  weight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">400</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  sources</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@/assets/fonts/font-a-regular.woff&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, type:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;woff&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@/assets/fonts/font-a-regular.woff2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, type:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;woff2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><table><thead><tr><th>Key</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>style</code></td><td><code>String</code></td><td>yes</td><td><code>font-style</code> of FontFace, e.g. <code>normal</code>, <code>italic</code></td></tr><tr><td><code>weight</code></td><td><code>String</code> or <code>Number</code></td><td>yes</td><td><code>font-weight</code> of FontFace, e.g. <code>400</code>, <code>normal</code></td></tr><tr><td><code>sources</code></td><td><code>Array</code></td><td>yes</td><td>list of all font files assigned to the variant (<a href="#sources"><code>sources</code></a>)</td></tr></tbody></table><h3 id="sources" tabindex="-1"><code>sources</code> <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;\`sources\`&quot;">​</a></h3><ul><li>Type: <code>Array</code></li></ul><p>List of all available font files of a font family variation.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@/assets/fonts/font-a-regular.woff&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, type:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;woff&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@/assets/fonts/font-a-regular.woff2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, type:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;woff2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><table><thead><tr><th>Key</th><th>Type</th><th>Required</th><th>Value</th></tr></thead><tbody><tr><td><code>src</code></td><td><code>String</code></td><td>yes</td><td>path to a font file, the use of aliases is possible</td></tr><tr><td><code>type</code></td><td><code>String</code></td><td>yes</td><td>file format of the specified file, e.g. <code>woff</code>, <code>woff2</code>, …</td></tr></tbody></table><h2 id="targetformats" tabindex="-1"><code>targetFormats</code> <a class="header-anchor" href="#targetformats" aria-label="Permalink to &quot;\`targetFormats\`&quot;">​</a></h2><ul><li>Type: <code>Array</code><ul><li>Default: <code>[&#39;webp&#39;, &#39;avif&#39;, &#39;jpg|jpeg|png|gif&#39;]</code></li></ul></li></ul><p>Sets the default formats for the <code>SpeedkitPicture</code>.</p><p>Can be overridden in the <code>SpeedkitPicture</code> via the <a href="/components/speedkit-picture.html#formats"><code>formats</code></a> property.</p><p>For <code>png</code>, <code>jpeg</code> and <code>gif</code> formats we have added the <code>|</code> operator in the declaration.<br> This adjusts the destination format to the source format.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p><strong><span style="color:red;">Bad</span></strong></p><p>The declaration below generates a <code>png</code>, <code>jpeg</code> and <code>gif</code> (destination format) for each <code>jpeg</code> (source format). The same applies to a <code>png</code> and a <code>gif</code> as source format. However, this is not practical for the source specifications in the Picture.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  targetFormats</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;jpeg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;gif&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong><span style="color:green;">Good</span></strong></p><p>Based on the source format, the appropriate target format is created using the declaration described below.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  targetFormats</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;jpg|jpeg|png|gif&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>For the <code>avif</code> and <code>webp</code> formats the <code>|</code> operator is not needed, because these two image formats do not depend on the source format, as it is the case for <code>png</code>, <code>jpeg</code> and <code>gif</code>.</p></div><h2 id="lazyoffset" tabindex="-1"><code>lazyOffset</code> <a class="header-anchor" href="#lazyoffset" aria-label="Permalink to &quot;\`lazyOffset\`&quot;">​</a></h2><ul><li>Type: <code>Object</code></li></ul><p>Global option for the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API" target="_blank" rel="noreferrer"><code>IntersectionObserver</code></a> built into the <strong>Nuxt Speedkit</strong>.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;0%&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  asset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;0%&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><table><thead><tr><th>Key</th><th>Type</th><th>Required</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>component</code></td><td><code>String</code></td><td>yes</td><td><a href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin" target="_blank" rel="noreferrer"><code>rootMargin</code></a> value for <a href="/guide/usage.html#import-components"><code>SpeedkitHydrate</code></a>.</td><td><code>0%</code></td></tr><tr><td><code>asset</code></td><td><code>String</code></td><td>yes</td><td><a href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin" target="_blank" rel="noreferrer"><code>rootMargin</code></a> value for all static ressources (<code>v-font</code>, <code>SpeedkitPicture</code> &amp; <code>SpeedkitImage</code>).</td><td><code>0%</code></td></tr></tbody></table><h2 id="disablenuxtfontaine" tabindex="-1"><code>disableNuxtFontaine</code> <a class="header-anchor" href="#disablenuxtfontaine" aria-label="Permalink to &quot;\`disableNuxtFontaine\`&quot;">​</a></h2><ul><li>Type: <code>Boolean</code><ul><li>Default: <code>false</code></li></ul></li></ul><p>If set, <code>@nuxtjs/fontaine</code> will not be integrated.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>For more information: <a href="https://github.com/nuxt-modules/fontaine" target="_blank" rel="noreferrer">https://github.com/nuxt-modules/fontaine</a></p></div><h2 id="disablenuxtimage" tabindex="-1"><code>disableNuxtImage</code> <a class="header-anchor" href="#disablenuxtimage" aria-label="Permalink to &quot;\`disableNuxtImage\`&quot;">​</a></h2><ul><li>Type: <code>Boolean</code><ul><li>Default: <code>false</code></li></ul></li></ul><p>If set, <code>@nuxt/image</code> will not be integrated.</p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>Note that the use of <code>SpeedkitImage</code>, <code>SpeedkitPicture</code>, <code>SpeedkitVimeo</code> and <code>SpeedkitYoutube</code> is not supported if <code>@nuxt/image</code> is not integrated.</p></div>`,76);function c(e,k,E,g,y,f){return a(),t("div",null,[s("h1",h,[n(l(e.$frontmatter.title)+" ",1),p]),r])}const m=i(o,[["render",c]]);export{b as __pageData,m as default};
