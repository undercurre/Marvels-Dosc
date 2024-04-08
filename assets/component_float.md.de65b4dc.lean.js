import{d as l,C as p,o,c as t,k as s,H as e,a as c,Q as r}from"./chunks/framework.85062508.js";const E=s("h1",{id:"float-浮动按钮",tabindex:"-1"},[c("Float 浮动按钮 "),s("a",{class:"header-anchor",href:"#float-浮动按钮","aria-label":'Permalink to "Float 浮动按钮"'},"​")],-1),y={style:{margin:"60px"}},i=r(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;</span><span style="color:#FDAEB7;font-style:italic;">MFloat</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:menu</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;menu&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">MFloat</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { MFloat } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;marvels-plus/src/&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">menu</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Array</span><span style="color:#E1E4E8;">&lt;{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#FFAB70;">iconName</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#FFAB70;">text</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}&gt; </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">	{</span></span>
<span class="line"><span style="color:#E1E4E8;">		iconName: </span><span style="color:#9ECBFF;">&#39;uil:setting&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		text: </span><span style="color:#9ECBFF;">&#39;Setting&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">	{</span></span>
<span class="line"><span style="color:#E1E4E8;">		iconName: </span><span style="color:#9ECBFF;">&#39;ph:copy-bold&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		text: </span><span style="color:#9ECBFF;">&#39;Copy&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">	{</span></span>
<span class="line"><span style="color:#E1E4E8;">		iconName: </span><span style="color:#9ECBFF;">&#39;material-symbols:delete-outline&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		text: </span><span style="color:#9ECBFF;">&#39;Delete&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#B31D28;font-style:italic;">MFloat</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:menu</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;menu&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#B31D28;font-style:italic;">MFloat</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { MFloat } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;marvels-plus/src/&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">menu</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Array</span><span style="color:#24292E;">&lt;{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#E36209;">iconName</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#E36209;">text</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}&gt; </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">	{</span></span>
<span class="line"><span style="color:#24292E;">		iconName: </span><span style="color:#032F62;">&#39;uil:setting&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		text: </span><span style="color:#032F62;">&#39;Setting&#39;</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">	{</span></span>
<span class="line"><span style="color:#24292E;">		iconName: </span><span style="color:#032F62;">&#39;ph:copy-bold&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		text: </span><span style="color:#032F62;">&#39;Copy&#39;</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">	{</span></span>
<span class="line"><span style="color:#24292E;">		iconName: </span><span style="color:#032F62;">&#39;material-symbols:delete-outline&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		text: </span><span style="color:#032F62;">&#39;Delete&#39;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h1 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h1><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>menu</td><td>菜单</td><td>Array</td><td>——</td></tr></tbody></table>`,4),g=JSON.parse('{"title":"Float 浮动按钮","description":"","frontmatter":{},"headers":[],"relativePath":"component/float.md","filePath":"component/float.md"}'),F={name:"component/float.md"},C=l({...F,setup(d){const n=[{iconName:"uil:setting",text:"Setting"},{iconName:"ph:copy-bold",text:"Copy"},{iconName:"material-symbols:delete-outline",text:"Delete"}];return(m,u)=>{const a=p("MFloat");return o(),t("div",null,[E,s("div",y,[e(a,{menu:n})]),i])}}});export{g as __pageData,C as default};
