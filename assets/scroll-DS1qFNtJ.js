import{aj as w,ak as u}from"./index-BOghHSTH.js";const g=[Element,String],a=[null,document,document.body,document.scrollingElement,document.documentElement];function h(o,t){let e=w(t);if(e===void 0){if(o==null)return window;e=o.closest(".scroll,.scroll-y,.overflow-auto")}return a.includes(e)?window:e}function m(o){return o===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:o.scrollTop}function v(o){return o===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:o.scrollLeft}function f(o,t,e=0){const n=arguments[3]===void 0?performance.now():arguments[3],l=m(o);if(e<=0){l!==t&&c(o,t);return}requestAnimationFrame(s=>{const r=s-n,d=l+(t-l)/Math.max(r,e)*r;c(o,d),d!==t&&f(o,t,e-r,s)})}function c(o,t){if(o===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,t);return}o.scrollTop=t}function b(o,t,e){if(e){f(o,t,e);return}c(o,t)}let i;function y(){if(i!==void 0)return i;const o=document.createElement("p"),t=document.createElement("div");u(o,{width:"100%",height:"200px"}),u(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(o),document.body.appendChild(t);const e=o.offsetWidth;t.style.overflow="scroll";let n=o.offsetWidth;return e===n&&(n=t.clientWidth),t.remove(),i=e-n,i}export{m as a,v as b,y as c,b as d,h as g,g as s};
