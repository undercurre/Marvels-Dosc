import{_ as h}from"./chunks/style.4584ed3f.js";import{o as r,c,b as d,F as u,m as _,n as p,q as m,t as v,p as f,l as b,h as o,a as k,u as I,d as x,e as y}from"./app.59ba4b6e.js";const A={name:"Menu",props:{items:{type:Array,required:!0,default:()=>[]},defaultActive:{type:Number,default:0}},setup(t,{emit:i}){return{handleItemClick:e=>{const a=t.items.find(l=>l.active===!0);e.active=!0,a&&(a.active=!1),i("item-click",e)}}}},S=t=>(f("data-v-263c02c1"),t=t(),b(),t),C={class:"menu"},g={class:"menu-list"},N=["onClick"],T=S(()=>d("div",{class:"line"},null,-1));function P(t,i,s,e,a,l){return r(),c("div",C,[d("ul",g,[(r(!0),c(u,null,_(s.items,n=>(r(),c("li",{key:n.id,class:p({"is-active":n.active})},[d("span",{onClick:m(B=>e.handleItemClick(n),["prevent"])},v(n.label),9,N)],2))),128))]),T])}const V=h(A,[["render",P],["__scopeId","data-v-263c02c1"]]),$=d("h1",{id:"menu-导航菜单",tabindex:"-1"},[x("Menu 导航菜单 "),d("a",{class:"header-anchor",href:"#menu-导航菜单","aria-hidden":"true"},"#")],-1),M=y('<h1 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h1><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>items</td><td>绑定值</td><td>Item</td><td>— —</td><td>— —</td></tr><tr><td>defaultActive</td><td>当前激活菜单的 index</td><td>number</td><td>— —</td><td>— —</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>item-click</td><td>菜单激活回调</td><td>选中菜单项的 id</td></tr></tbody></table>',5),w=JSON.parse('{"title":"Menu 导航菜单","description":"","frontmatter":{},"headers":[{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[]}],"relativePath":"component/menu.md"}'),E={name:"component/menu.md"},F=Object.assign(E,{setup(t){const i=o([{id:1,active:!1,label:"选项一"},{id:2,active:!1,label:"选项二"},{id:3,active:!1,label:"选项三"}]),s=o(1);function e(a){s.value=a}return(a,l)=>(r(),c("div",null,[$,k(I(V),{style:{margin:"60px"},items:i.value,defaultActive:s.value,onItemClick:e},null,8,["items","defaultActive"]),M]))}});export{w as __pageData,F as default};