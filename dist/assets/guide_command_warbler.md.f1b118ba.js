import{_ as s,c as a,o as n,N as l}from"./chunks/framework.0799945b.js";const d=JSON.parse('{"title":"查看如何使用","description":"","frontmatter":{},"headers":[],"relativePath":"guide/command/warbler.md","lastUpdated":1680249754000}'),p={name:"guide/command/warbler.md"},o=l(`<h1 id="查看如何使用" tabindex="-1">查看如何使用 <a class="header-anchor" href="#查看如何使用" aria-label="Permalink to &quot;查看如何使用&quot;">​</a></h1><h2 id="warbler" tabindex="-1">warbler <a class="header-anchor" href="#warbler" aria-label="Permalink to &quot;warbler&quot;">​</a></h2><p>你可以直接运行 <code>warbler</code> 来查看如何使用 <code>warbler-cli</code>，也可以携带 <code>-h</code> 或者 <code>--help</code> 参数：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">warbler</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># or</span></span>
<span class="line"><span style="color:#FFCB6B;">warbler</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-h</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># or</span></span>
<span class="line"><span style="color:#FFCB6B;">warbler</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--help</span></span>
<span class="line"></span></code></pre></div><p>你会得到以下的结果：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Usage:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">warbler</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">comman</span><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">CLI</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">WarblerFE,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Welcome</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">homepage</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">warbler!</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">👉http://warbler.duwanyu.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Options:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-V,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--version</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">查看脚手架版本</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-D,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--debug</span><span style="color:#A6ACCD;">       </span><span style="color:#C3E88D;">是否开启调试模式,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">可查看调试信息</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">default:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">--ignore-warning</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">是否忽略提示信息,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">开启后同样会忽略调试信息</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">default:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-h,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--help</span><span style="color:#A6ACCD;">        </span><span style="color:#C3E88D;">查看帮助文档</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Commands:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">初始化项目</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">脚手架配置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">运行</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">warbler</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">comman</span><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--help</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">来查看某个具体命令的帮助文档</span></span>
<span class="line"></span></code></pre></div><p>如果你 <code>warbler-cli</code> 的版本低于当前的最新版本，那么你还会收到以下的提示， 此时你可以选择根据提示的命令进行版本的更新</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">warbler</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">💛友情提示</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">请更新版本:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">当前版本:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">m.m.m,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">最新版本:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">n.n.n</span></span>
<span class="line"><span style="color:#FFCB6B;">warbler</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">💛友情提示</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">更新命令:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@warbler-fe/cli</span></span>
<span class="line"></span></code></pre></div><h2 id="options" tabindex="-1">options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;options&quot;">​</a></h2><h3 id="version" tabindex="-1">--version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;--version&quot;">​</a></h3><p>携带该参数，你会得到当前脚手架的版本</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 你可以这样使用该参数</span></span>
<span class="line"><span style="color:#FFCB6B;">warbler</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--version</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 也可以使用它的简写模式</span></span>
<span class="line"><span style="color:#FFCB6B;">warbler</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-V</span></span>
<span class="line"></span></code></pre></div><h3 id="debug" tabindex="-1">--debug <a class="header-anchor" href="#debug" aria-label="Permalink to &quot;--debug&quot;">​</a></h3><p>是否开启调试模式， 携带该参数，你可以查看脚手架运行过程中输出的调试信息，默认关闭状态</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 你可以这样使用该参数</span></span>
<span class="line"><span style="color:#FFCB6B;">warbler</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--debug</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 也可以使用它的简写模式</span></span>
<span class="line"><span style="color:#FFCB6B;">warbler</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span></span>
<span class="line"></span></code></pre></div><h3 id="ignore-warning" tabindex="-1">--ignore-warning <a class="header-anchor" href="#ignore-warning" aria-label="Permalink to &quot;--ignore-warning&quot;">​</a></h3><p>携带该参数，会忽略脚手架运行时输出的提示信息（如版本更新提示）， 开启后同样会忽略调试信息，默认关闭状态</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 你可以这样使用该参数</span></span>
<span class="line"><span style="color:#FFCB6B;">warbler</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--ignore-warning</span></span>
<span class="line"></span></code></pre></div><h2 id="commands" tabindex="-1">commands <a class="header-anchor" href="#commands" aria-label="Permalink to &quot;commands&quot;">​</a></h2><p>运行以下命令来查看如何使用某一个具体的命令</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">warbler</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">comman</span><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--help</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 比如你要查看 init 命令如何使用</span></span>
<span class="line"><span style="color:#FFCB6B;">warbler</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--help</span></span>
<span class="line"></span></code></pre></div>`,21),e=[o];function t(c,r,C,y,i,D){return n(),a("div",null,e)}const h=s(p,[["render",t]]);export{d as __pageData,h as default};
