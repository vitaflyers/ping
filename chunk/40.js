(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"86":function(t,e,n){"use strict";n.r(e),n.d(e,"taro_rich_text_core",(function(){return i}));var r=n(26),i=function(){function RichText(t){var e=this;Object(r.g)(this,t),this.renderNode=function(t){if("type"in t&&"text"===t.type)return(t.text||"").replace(/&nbsp;/g," ");if("name"in t&&t.name){var n=t.name,i=t.attrs,c=t.children,o={},a=[];if(i&&"object"==typeof i){var _loop_1=function(t){var e=i[t];if("style"===t&&"string"==typeof e){var n=e.split(";").map((function(t){return t.trim()})).filter((function(t){return t})),r={};return n.forEach((function(t){if(t){var e=/(.+): *(.+)/g.exec(t);if(e){var n=e[1],i=e[2],c=n.replace(/-([a-z])/g,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t[1].toUpperCase()}));r[c]=i}}})),Object.keys(r).length&&(o.style=r),"continue"}o[t]=e};for(var u in i)_loop_1(u)}return c&&c.length&&(a=c.map((function(t){return e.renderNode(t)}))),Object(r.f)(n,o,a)}return null}}return RichText.prototype.render=function(){var t=this.nodes,e=this.renderNode;return Array.isArray(t)?Object(r.f)(r.a,null,t.map((function(t){return e(t)}))):Object(r.f)(r.a,{"innerHTML":t})},RichText}()}}]);