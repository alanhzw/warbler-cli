import{_ as s,c as a,o as e,N as n}from"./chunks/framework.0799945b.js";const F=JSON.parse('{"title":"配置参考","description":"","frontmatter":{},"headers":[],"relativePath":"guide/settings.md","lastUpdated":1680249754000}'),l={name:"guide/settings.md"},o=n(`<h1 id="配置参考" tabindex="-1">配置参考 <a class="header-anchor" href="#配置参考" aria-label="Permalink to &quot;配置参考&quot;">​</a></h1><p>你可以在你的项目根目录下新建 <code>warbler.json</code> 文件，对 <code>warbler-cli</code> 进行配置</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>warbler.json 文件只针对当前项目生效，如果需要全局生效的话，请查看 <a href="/guide/command/config.html">config 命令</a></p></div><p><code>warbler-cli</code> 支持以下配置选项</p><h2 id="registry" tabindex="-1">registry <a class="header-anchor" href="#registry" aria-label="Permalink to &quot;registry&quot;">​</a></h2><p>配置 <code>npm</code> 的镜像地址，参数值为 <code>string</code> 类型</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C3E88D;">registry</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">https://registry.npmmirror.com/</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="cachedir" tabindex="-1">cacheDir <a class="header-anchor" href="#cachedir" aria-label="Permalink to &quot;cacheDir&quot;">​</a></h2><p>配置 <code>warbler-cli</code> 在运行时储存的一些缓存文件，如 <code>warbler.json</code>，以及创建项目所用的模板文件等， 参数值为 <code>string</code> 类型</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C3E88D;">cacheDir</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">C:\\Users\\warbler\\.warbler-cli</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="packagemanager" tabindex="-1">packageManager <a class="header-anchor" href="#packagemanager" aria-label="Permalink to &quot;packageManager&quot;">​</a></h2><p>指定你的包管理工具，用于 <code>warbler-cli</code> 在运行时下载第三方库，启动项目等工作，参数值为 <code>string</code> 类型</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C3E88D;">packageManager</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">npm</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="isshowupdate" tabindex="-1">isShowUpdate <a class="header-anchor" href="#isshowupdate" aria-label="Permalink to &quot;isShowUpdate&quot;">​</a></h2><p>关闭此选项将不会再对版本更新进行提示，默认开启，不建议关闭，参数值为 <code>boolean</code> 类型</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C3E88D;">registry</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="templatelist" tabindex="-1">templateList <a class="header-anchor" href="#templatelist" aria-label="Permalink to &quot;templateList&quot;">​</a></h2><p>自定义模板列表，<code>value</code> 字段表示自定义模板在 <code>npm</code> 仓库中的名称，<code>name</code> 字段表示出现在 <code>warbler-cli</code> 创建工程时待选择模板列表中的名称</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C3E88D;">templateList</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    { value: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hzw-cli-dev-template-vue3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, name: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { value: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hzw-cli-dev-template-vue-admin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, name: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,19),p=[o];function t(c,r,i,D,d,y){return e(),a("div",null,p)}const u=s(l,[["render",t]]);export{F as __pageData,u as default};
