(()=>{"use strict";var e={91:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},675:(e,t,n)=>{e.exports=n.p+"50885260f2d53d8b36ab.js"},558:(e,t,n)=>{e.exports=n.p+"b88d04fba731603756b1.css"},596:(e,t,n)=>{e.exports=n.p+"assets/Golfeados-venezolanos.jpg"},497:(e,t,n)=>{e.exports=n.p+"assets/RFB-0804-3-pandecoco.jpg"},347:(e,t,n)=>{e.exports=n.p+"assets/baguette.jpg"},233:(e,t,n)=>{e.exports=n.p+"assets/croissant-de-mantequilla-especialidad.jpg"},544:(e,t,n)=>{e.exports=n.p+"assets/interior1.jpg"},623:(e,t,n)=>{e.exports=n.p+"assets/interior2.jpg"},819:(e,t,n)=>{e.exports=n.p+"assets/logo.png"},220:(e,t,n)=>{e.exports=n.p+"assets/macarons.jpg"},861:(e,t,n)=>{e.exports=n.p+"assets/milhoja.jpg"},695:(e,t,n)=>{e.exports=n.p+"assets/pan_de_oregano.jpg"},658:(e,t,n)=>{e.exports=n.p+"assets/rolls de canela.jpg"},75:(e,t,n)=>{e.exports=n.p+"6f304406131b990e5721.webp"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(91),t=n.n(e),r=new URL(n(558),n.b),o=new URL(n(675),n.b),s=new URL(n(819),n.b),a=new URL(n(233),n.b),c=new URL(n(658),n.b),p=new URL(n(220),n.b);t()(r),t()(o),t()(s),t()(a),t()(c),t()(p);var l=new URL(n(558),n.b),i=new URL(n(675),n.b),u=new URL(n(819),n.b),b=new URL(n(596),n.b),d=new URL(n(75),n.b),m=new URL(n(861),n.b),g=new URL(n(347),n.b),f=new URL(n(497),n.b),w=new URL(n(695),n.b),v=new URL(n(233),n.b);t()(l),t()(i),t()(u),t()(b),t()(d),t()(m),t()(g),t()(f),t()(w),t()(v);var L=new URL(n(558),n.b),R=new URL(n(675),n.b),h=new URL(n(819),n.b),U=new URL(n(544),n.b),j=new URL(n(623),n.b);t()(L),t()(R),t()(h),t()(U),t()(j);var y=new URL(n(558),n.b),x=new URL(n(675),n.b),E=new URL(n(819),n.b);t()(y),t()(x),t()(E);var S=document.querySelector(".nav-toggle"),B=document.querySelector(".nav-menu");S.addEventListener("click",(function(){B.classList.toggle("show")}));var I=document.querySelector(".tarjetas"),_=document.querySelectorAll(".punto");_.forEach((function(e,t){_[t].addEventListener("click",(function(){var e=t,n=-33.3*e;I.style.transform="translateX(".concat(n,"%)"),_.forEach((function(e,t){_[t].classList.remove("activo")})),_[e].classList.add("activo")}))}));var q=document.getElementById("formGuardar");q.addEventListener("submit",(function(e){e.preventDefault();var t={nombre:document.getElementById("nombre").value,email:document.getElementById("email").value,numero:document.getElementById("numero").value,mensaje:document.getElementById("mensaje").value},n=JSON.stringify(t);console.log(n),fetch("http://localhost:3000",{method:"post",body:n}).then((function(e){return console.log(e)})),alert("Gracias por tu mensaje!"),q.reset()}))})()})();