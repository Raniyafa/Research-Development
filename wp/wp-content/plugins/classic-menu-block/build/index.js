!function(){"use strict";var e,n={385:function(e,n,t){var s=window.wp.blocks,o=window.wp.i18n,i=window.wp.element,c=window.wp.primitives,r=(0,i.createElement)(c.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,i.createElement)(c.Path,{d:"M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.5c-3.6 0-6.5-2.9-6.5-6.5S8.4 5.5 12 5.5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zM9 16l4.5-3L15 8.4l-4.5 3L9 16z"})),l=window.wp.blockEditor,u=window.wp.components,a=window.wp.serverSideRender,m=t.n(a),d=window.wp.data,p=window.wp.coreData,b=JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":2,"name":"spacedmonkey/classic-menu-block","version":"0.1.5","title":"Classic Menu Block","category":"theme","description":"A gutenberg block to use classic menus.","supports":{"html":false,"anchor":true},"attributes":{"anchor":{"type":"string"},"menu":{"type":"number","default":0}},"textdomain":"classic-menu-block","editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}');const{name:f}=b,{name:v,category:w,attributes:h,supports:k}=b;(0,s.registerBlockType)(v,{title:(0,o.__)("Classic menu","classic-menu-block"),description:(0,o.__)("Render classic menu data as a block","classic-menu-block"),keywords:[(0,o.__)("classic","classic-menu-block"),(0,o.__)("menu","classic-menu-block"),(0,o.__)("navigation","classic-menu-block")],category:w,attributes:h,supports:k,icon:r,edit:function(e){let{setAttributes:n,attributes:t,isSelected:s}=e;const{menu:c=0}=t||{},{menus:a,hasMenus:b}=function(){const{menus:e,isResolvingMenus:n,hasResolvedMenus:t}=(0,d.useSelect)((e=>{const{getMenus:n,isResolving:t,hasFinishedResolution:s}=e(p.store),o=[{per_page:-1,context:"view"}];return{menus:n(...o),isResolvingMenus:t("getMenus",o),hasResolvedMenus:s("getMenus",o)}}),[]);return{menus:e,isResolvingMenus:n,hasResolvedMenus:t,hasMenus:!(!t||!e?.length)}}(),v=[{value:0,label:(0,o.__)("Not set","classic-menu-block")}];return b&&a.forEach((function(e){v.push({value:parseInt(e.id),label:e.name})})),(0,i.createElement)("div",(0,l.useBlockProps)(),s||!c?(0,i.createElement)(u.Placeholder,{label:(0,o.__)("Classic menu","classic-menu-block"),icon:r},(0,i.createElement)(u.SelectControl,{label:(0,o.__)("Select a menu","classic-menu-block"),options:v,value:c,onChange:e=>{n({menu:parseInt(e)})}})):(0,i.createElement)(u.Disabled,null,(0,i.createElement)(m(),{block:f,attributes:t})))}})}},t={};function s(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return n[e](i,i.exports,s),i.exports}s.m=n,e=[],s.O=function(n,t,o,i){if(!t){var c=1/0;for(a=0;a<e.length;a++){t=e[a][0],o=e[a][1],i=e[a][2];for(var r=!0,l=0;l<t.length;l++)(!1&i||c>=i)&&Object.keys(s.O).every((function(e){return s.O[e](t[l])}))?t.splice(l--,1):(r=!1,i<c&&(c=i));if(r){e.splice(a--,1);var u=o();void 0!==u&&(n=u)}}return n}i=i||0;for(var a=e.length;a>0&&e[a-1][2]>i;a--)e[a]=e[a-1];e[a]=[t,o,i]},s.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(n,{a:n}),n},s.d=function(e,n){for(var t in n)s.o(n,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={826:0,46:0};s.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,i,c=t[0],r=t[1],l=t[2],u=0;if(c.some((function(n){return 0!==e[n]}))){for(o in r)s.o(r,o)&&(s.m[o]=r[o]);if(l)var a=l(s)}for(n&&n(t);u<c.length;u++)i=c[u],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(a)},t=self.webpackChunkclassic_menu_block=self.webpackChunkclassic_menu_block||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var o=s.O(void 0,[46],(function(){return s(385)}));o=s.O(o)}();