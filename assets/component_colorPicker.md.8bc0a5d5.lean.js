import{d as o,h as e,C as t,o as c,c as r,k as s,H as E,a as y,Q as i}from"./chunks/framework.85062508.js";const d=s("h1",{id:"colorpicker-取色器",tabindex:"-1"},[y("ColorPicker 取色器 "),s("a",{class:"header-anchor",href:"#colorpicker-取色器","aria-label":'Permalink to "ColorPicker 取色器"'},"​")],-1),h={style:{margin:"260px"}},u=i(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;</span><span style="color:#85E89D;">div</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width: 100%; height: 100%; display: flex; justify-content: center; align-items: center&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">m-colorPicker</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model:value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;colors&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">m-colorPicker</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, watch } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">colors</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">	h: </span><span style="color:#79B8FF;">300</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	s: </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	l: </span><span style="color:#79B8FF;">90</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">watch</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">	() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> colors.value,</span></span>
<span class="line"><span style="color:#E1E4E8;">	() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">		console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(colors.value);</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#22863A;">div</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width: 100%; height: 100%; display: flex; justify-content: center; align-items: center&quot;</span></span>
<span class="line"><span style="color:#24292E;">	&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">m-colorPicker</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model:value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;colors&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">m-colorPicker</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref, watch } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">colors</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">	h: </span><span style="color:#005CC5;">300</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	s: </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	l: </span><span style="color:#005CC5;">90</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">watch</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">	() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> colors.value,</span></span>
<span class="line"><span style="color:#24292E;">	() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">		console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(colors.value);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h1 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h1><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>当前颜色</td><td>Object</td><td>——</td></tr></tbody></table>`,4),C=JSON.parse('{"title":"ColorPicker 取色器","description":"","frontmatter":{},"headers":[],"relativePath":"component/colorPicker.md","filePath":"component/colorPicker.md"}'),F={name:"component/colorPicker.md"},k=o({...F,setup(g){const n=e({h:300,s:80,l:90});return(m,a)=>{const l=t("MColorPicker");return c(),r("div",null,[d,s("div",h,[E(l,{value:n.value,"onUpdate:value":a[0]||(a[0]=p=>n.value=p)},null,8,["value"])]),u])}}});export{C as __pageData,k as default};
