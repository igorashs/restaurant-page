!function(t){var e={};function n(o){if(e[o])return e[o].exports;var c=e[o]={i:o,l:!1,exports:{}};return t[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)n.d(o,c,function(e){return t[e]}.bind(null,c));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function o(t,e){const n=document.createElement("button");n.setAttribute("id",t);const o=document.createElement("span");return o.textContent=e,n.appendChild(o),n.classList.add("tab"),n}n.r(e);var c=function(){const t=document.getElementById("tab-content");t.classList.add("flex-lay"),t.classList.remove("grid-lay"),t.textContent="";const e=function(){const t=document.createElement("section");t.classList.add("section");const e=document.createElement("h2");e.classList.add("section-title"),e.textContent="About",t.appendChild(e);const n=document.createElement("p");return n.classList.add("section-description"),n.textContent="Star Food has The best food from all Galaxies Lorem ipsum dolor sitamet consectetur adipisicing elit. Animi in, neque, dignissimosperspiciatis illo deserunt tetur adipisicing elit. Animi in, neque,dignissimos perspiciatis illo deserunt adipisicing elit. Animi in,neque, dignissimos perspiciatis illo deserunt",t.appendChild(n),t}();!function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementById(t).classList.add("active")}("home"),t.appendChild(e)};function i(t,e,n,o){const c=document.createElement("div");c.classList.add("food");const i=document.createElement("img");i.setAttribute("src",t),i.setAttribute("alt",o);const s=document.createElement("div");s.classList.add("description");const d=document.createElement("h3");d.textContent=e;const a=document.createElement("h2");return a.textContent=n,s.appendChild(d),s.appendChild(a),c.appendChild(i),c.appendChild(s),c}var s=function(){const t=document.getElementById("tab-content");t.classList.add("grid-lay"),t.classList.remove("flex-lay"),t.textContent="",function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementById(t).classList.add("active")}("menu"),[i("../../dist/imgs/foods/ackbar-ice-cream.jpg","acbar ice Cream","10CR","acbar ice cream"),i("../../dist/imgs/foods/corellian-coffee.jpg","corellian coffee","4CR","corellian coffee"),i("../../dist/imgs/foods/darth-maul-quinoa.jpg","darth maul quinoa","20CR","darth maul quinoa"),i("../../dist/imgs/foods/ewok-cookies.jpg","ewok cookies","4CR","ewok cookies"),i("../../dist/imgs/foods/lemon-tart.jpg","lemon tart","6CR","lemon tart"),i("../../dist/imgs/foods/porg-puffs.jpg","porg puffs","12CR","porg puffs"),i("../../dist/imgs/foods/sith-trooper-root-beer.jpg","sith trooper root beer","9CR","sith trooper root beer"),i("../../dist/imgs/foods/vader-peanut-butter-blossoms.jpg","vader peanut butter blossoms","20CR","vader peanut butter blossoms")].forEach(e=>{t.appendChild(e)})};function d(t,e){const n=document.createElement("section");n.classList.add("section");const o=document.createElement("h2");return o.classList.add("section-title"),o.textContent=t,n.appendChild(o),e.forEach(t=>{const e=document.createElement("p");e.classList.add("section-description"),e.textContent=t,n.appendChild(e)}),n}var a=function(){const t=document.getElementById("tab-content");t.classList.add("flex-lay"),t.classList.remove("grid-lay"),t.textContent="",function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementById(t).classList.add("active")}("contact");const e=d("Phones",["$ Oz92-12j-2jda1","# Oz92-34d-80c13"]),n=d("address",["unknown regions"]);t.appendChild(e),t.appendChild(n)};(function(){const t=document.getElementById("content"),e=function(t,e){const n=document.createElement("header");n.setAttribute("id",t);const o=document.createElement("h1");return o.textContent=e,n.appendChild(o),n}("header","Star Food");t.appendChild(e);const n=function(t){const e=document.createElement("nav");e.setAttribute("id",t);const n=o("home","home"),c=o("menu","menu"),i=o("contact","contact");return e.appendChild(n),e.appendChild(c),e.appendChild(i),e}("nav");t.appendChild(n);const c=function(t){const e=document.createElement("main");return e.setAttribute("id",t),e}("tab-content");t.appendChild(c);const i=function(t,e){const n=document.createElement("footer");n.setAttribute("id",t);const o=document.createElement("h3");return o.textContent=e,n.appendChild(o),n}("footer","Made by the force");t.appendChild(i)})(),c(),function(){const t=document.getElementById("home"),e=document.getElementById("menu"),n=document.getElementById("contact");t.addEventListener("click",c),e.addEventListener("click",s),n.addEventListener("click",a)}()}]);