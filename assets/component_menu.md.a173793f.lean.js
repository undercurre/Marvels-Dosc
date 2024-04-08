import{d as o,C as e,o as t,c,k as s,H as E,a as r,Q as y}from"./chunks/framework.f6611c15.js";const i=s("h1",{id:"menu-菜单",tabindex:"-1"},[r("Menu 菜单 "),s("a",{class:"header-anchor",href:"#menu-菜单","aria-label":'Permalink to "Menu 菜单"'},"​")],-1),m=y(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;</span><span style="color:#FDAEB7;font-style:italic;">MMenu</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:items</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;items&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@select</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;menuSelect&quot;</span><span style="color:#E1E4E8;">&gt; &lt;/</span><span style="color:#FDAEB7;font-style:italic;">MMenu</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { MMenu } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;marvels-plus/src/&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> { MMenuItem } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;marvels-plus/src/&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">items</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">	{</span></span>
<span class="line"><span style="color:#E1E4E8;">		label: </span><span style="color:#9ECBFF;">&#39;demo1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		icon: </span><span style="color:#9ECBFF;">&#39;material-symbols:mp&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		active: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">			{</span></span>
<span class="line"><span style="color:#E1E4E8;">				label: </span><span style="color:#9ECBFF;">&#39;demo5&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">				icon: </span><span style="color:#9ECBFF;">&#39;material-symbols:5mp&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">				children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">					{</span></span>
<span class="line"><span style="color:#E1E4E8;">						label: </span><span style="color:#9ECBFF;">&#39;demo10&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">						icon: </span><span style="color:#9ECBFF;">&#39;material-symbols:10mp&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">					},</span></span>
<span class="line"><span style="color:#E1E4E8;">					{</span></span>
<span class="line"><span style="color:#E1E4E8;">						label: </span><span style="color:#9ECBFF;">&#39;demo11&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">						icon: </span><span style="color:#9ECBFF;">&#39;material-symbols:11mp&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">					}</span></span>
<span class="line"><span style="color:#E1E4E8;">				]</span></span>
<span class="line"><span style="color:#E1E4E8;">			},</span></span>
<span class="line"><span style="color:#E1E4E8;">			{</span></span>
<span class="line"><span style="color:#E1E4E8;">				label: </span><span style="color:#9ECBFF;">&#39;demo6&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">				icon: </span><span style="color:#9ECBFF;">&#39;material-symbols:6mp&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">			},</span></span>
<span class="line"><span style="color:#E1E4E8;">			{</span></span>
<span class="line"><span style="color:#E1E4E8;">				label: </span><span style="color:#9ECBFF;">&#39;demo7&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">				icon: </span><span style="color:#9ECBFF;">&#39;material-symbols:7mp&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">			}</span></span>
<span class="line"><span style="color:#E1E4E8;">		]</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">	{</span></span>
<span class="line"><span style="color:#E1E4E8;">		label: </span><span style="color:#9ECBFF;">&#39;demo2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		icon: </span><span style="color:#9ECBFF;">&#39;material-symbols:2mp&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">	{</span></span>
<span class="line"><span style="color:#E1E4E8;">		label: </span><span style="color:#9ECBFF;">&#39;demo3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		icon: </span><span style="color:#9ECBFF;">&#39;material-symbols:3mp&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">			{</span></span>
<span class="line"><span style="color:#E1E4E8;">				label: </span><span style="color:#9ECBFF;">&#39;demo8&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">				icon: </span><span style="color:#9ECBFF;">&#39;material-symbols:8mp&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">			},</span></span>
<span class="line"><span style="color:#E1E4E8;">			{</span></span>
<span class="line"><span style="color:#E1E4E8;">				label: </span><span style="color:#9ECBFF;">&#39;demo9&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">				icon: </span><span style="color:#9ECBFF;">&#39;material-symbols:9mp&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">			}</span></span>
<span class="line"><span style="color:#E1E4E8;">		]</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">	{</span></span>
<span class="line"><span style="color:#E1E4E8;">		label: </span><span style="color:#9ECBFF;">&#39;demo4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		icon: </span><span style="color:#9ECBFF;">&#39;material-symbols:4mp&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">menuSelect</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MMenuItem</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;选择了&#39;</span><span style="color:#E1E4E8;">, item);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#B31D28;font-style:italic;">MMenu</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:items</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;items&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@select</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;menuSelect&quot;</span><span style="color:#24292E;">&gt; &lt;/</span><span style="color:#B31D28;font-style:italic;">MMenu</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { MMenu } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;marvels-plus/src/&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> { MMenuItem } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;marvels-plus/src/&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">items</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">	{</span></span>
<span class="line"><span style="color:#24292E;">		label: </span><span style="color:#032F62;">&#39;demo1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		icon: </span><span style="color:#032F62;">&#39;material-symbols:mp&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		active: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		children: [</span></span>
<span class="line"><span style="color:#24292E;">			{</span></span>
<span class="line"><span style="color:#24292E;">				label: </span><span style="color:#032F62;">&#39;demo5&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				icon: </span><span style="color:#032F62;">&#39;material-symbols:5mp&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				children: [</span></span>
<span class="line"><span style="color:#24292E;">					{</span></span>
<span class="line"><span style="color:#24292E;">						label: </span><span style="color:#032F62;">&#39;demo10&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">						icon: </span><span style="color:#032F62;">&#39;material-symbols:10mp&#39;</span></span>
<span class="line"><span style="color:#24292E;">					},</span></span>
<span class="line"><span style="color:#24292E;">					{</span></span>
<span class="line"><span style="color:#24292E;">						label: </span><span style="color:#032F62;">&#39;demo11&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">						icon: </span><span style="color:#032F62;">&#39;material-symbols:11mp&#39;</span></span>
<span class="line"><span style="color:#24292E;">					}</span></span>
<span class="line"><span style="color:#24292E;">				]</span></span>
<span class="line"><span style="color:#24292E;">			},</span></span>
<span class="line"><span style="color:#24292E;">			{</span></span>
<span class="line"><span style="color:#24292E;">				label: </span><span style="color:#032F62;">&#39;demo6&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				icon: </span><span style="color:#032F62;">&#39;material-symbols:6mp&#39;</span></span>
<span class="line"><span style="color:#24292E;">			},</span></span>
<span class="line"><span style="color:#24292E;">			{</span></span>
<span class="line"><span style="color:#24292E;">				label: </span><span style="color:#032F62;">&#39;demo7&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				icon: </span><span style="color:#032F62;">&#39;material-symbols:7mp&#39;</span></span>
<span class="line"><span style="color:#24292E;">			}</span></span>
<span class="line"><span style="color:#24292E;">		]</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">	{</span></span>
<span class="line"><span style="color:#24292E;">		label: </span><span style="color:#032F62;">&#39;demo2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		icon: </span><span style="color:#032F62;">&#39;material-symbols:2mp&#39;</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">	{</span></span>
<span class="line"><span style="color:#24292E;">		label: </span><span style="color:#032F62;">&#39;demo3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		icon: </span><span style="color:#032F62;">&#39;material-symbols:3mp&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		children: [</span></span>
<span class="line"><span style="color:#24292E;">			{</span></span>
<span class="line"><span style="color:#24292E;">				label: </span><span style="color:#032F62;">&#39;demo8&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				icon: </span><span style="color:#032F62;">&#39;material-symbols:8mp&#39;</span></span>
<span class="line"><span style="color:#24292E;">			},</span></span>
<span class="line"><span style="color:#24292E;">			{</span></span>
<span class="line"><span style="color:#24292E;">				label: </span><span style="color:#032F62;">&#39;demo9&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">				icon: </span><span style="color:#032F62;">&#39;material-symbols:9mp&#39;</span></span>
<span class="line"><span style="color:#24292E;">			}</span></span>
<span class="line"><span style="color:#24292E;">		]</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">	{</span></span>
<span class="line"><span style="color:#24292E;">		label: </span><span style="color:#032F62;">&#39;demo4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		icon: </span><span style="color:#032F62;">&#39;material-symbols:4mp&#39;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">menuSelect</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MMenuItem</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">	console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;选择了&#39;</span><span style="color:#24292E;">, item);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h1 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h1><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>items</td><td>菜单树</td><td>Object</td><td>——</td></tr></tbody></table><h2 id="event" tabindex="-1">Event <a class="header-anchor" href="#event" aria-label="Permalink to &quot;Event&quot;">​</a></h2><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>select</td><td>菜单激活回调</td><td>Object</td></tr></tbody></table>`,6),h=JSON.parse('{"title":"Menu 菜单","description":"","frontmatter":{},"headers":[],"relativePath":"component/menu.md","filePath":"component/menu.md"}'),F={name:"component/menu.md"},B=o({...F,setup(d){const a=[{label:"demo1",icon:"material-symbols:mp",active:!0,children:[{label:"demo5",icon:"material-symbols:5mp",children:[{label:"demo10",icon:"material-symbols:10mp"},{label:"demo11",icon:"material-symbols:11mp"}]},{label:"demo6",icon:"material-symbols:6mp"},{label:"demo7",icon:"material-symbols:7mp"}]},{label:"demo2",icon:"material-symbols:2mp"},{label:"demo3",icon:"material-symbols:3mp",children:[{label:"demo8",icon:"material-symbols:8mp"},{label:"demo9",icon:"material-symbols:9mp"}]},{label:"demo4",icon:"material-symbols:4mp"}];function l(n){console.log("选择了",n)}return(n,b)=>{const p=e("MMenu");return t(),c("div",null,[i,s("div",null,[E(p,{items:a,onSelect:l})]),m])}}});export{h as __pageData,B as default};
