(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const f=document.getElementById("burger-button"),y=document.getElementById("close-button"),h=document.querySelectorAll(".site-nav-link");document.querySelector(".site-nav__list");const d=document.querySelector(".backdrop"),l=document.getElementById("side-menu");f.addEventListener("click",()=>{d.classList.remove("is-hidden"),l.classList.remove("is-hidden")});y.addEventListener("click",()=>{d.classList.add("is-hidden"),l.classList.add("is-hidden")});d.addEventListener("click",o=>{o.target===o.currentTarget&&(d.classList.add("is-hidden"),l.classList.add("is-hidden"))});document.querySelectorAll(".smooth-scroll").forEach(o=>{o.addEventListener("click",function(n){n.preventDefault();const e=document.querySelector(this.getAttribute("href"));e&&e.scrollIntoView({behavior:"smooth"})})});function p(){const o=window.innerWidth;o<1280&&(f.classList.remove("is-hidden"),y.classList.remove("is-hidden"),d.classList.add("is-hidden"),l.classList.add("is-hidden")),o>=1280&&(f.classList.add("is-hidden"),y.classList.add("is-hidden"),l.classList.remove("is-hidden"),d.classList.remove("is-hidden")),h.forEach(i=>{i.removeEventListener("click",n),o<1280&&i.addEventListener("click",n),o>=1280&&i.addEventListener("click",e)});function n(){d.classList.add("is-hidden")}function e(){d.classList.remove("is-hidden")}}p();window.addEventListener("resize",p);document.addEventListener("DOMContentLoaded",function(){const o=document.querySelectorAll(".info-open-btn-id"),n=document.querySelector(".info-backdrop-id"),e=document.querySelector(".info-close-btn-id"),i=document.querySelector(".info-modal"),t=document.querySelector(".hero");let s=0;o.forEach(c=>{c.addEventListener("click",()=>{s=window.scrollY,r(),a()})}),e.addEventListener("click",()=>{u(),m()});function r(){window.scrollTo({top:0,behavior:"smooth"})}function a(){n.style.opacity="1",n.classList.remove("is-hidden");const c=t.getBoundingClientRect();i.style.top=`${c.top}px`}function u(){n.style.opacity="0",n.classList.add("is-hidden")}function m(){window.scrollTo({top:s,behavior:"smooth"})}});document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".terms-open-btn-id"),n=document.querySelector(".terms-close-btn-id"),e=document.querySelector(".terms-backdrop-id"),i=document.querySelector(".terms-modal"),t=document.querySelector("hero");let s=0;o.addEventListener("click",()=>{s=window.scrollY,r(),a()}),n.addEventListener("click",()=>{u(),m()});function r(){window.scrollTo({top:0,behavior:"smooth"})}function a(){if(e.style.opacity="1",e.classList.remove("is-hidden"),t){const c=t.getBoundingClientRect();i.style.top=`${c.top}px`}}function u(){e.style.opacity="0",e.classList.add("is-hidden")}function m(){window.scrollTo({top:s,behavior:"smooth"})}});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".mask"),n=document.querySelector(".loader"),e=document.querySelector(".page-error-container");navigator.onLine?(o.style.display="none",e.style.display="none"):(o.style.display="none",e.style.display="block",e.style.position="fixed",e.style.zIndex="9999999",e.style.top="50%",e.style.left="50%",e.style.transform="translate(-50%, -50%)"),window.addEventListener("online",()=>{o.style.display="none",e.style.display="none"}),window.addEventListener("offline",()=>{o.style.display="block",n.style.display="none",e.style.display="block",e.style.position="fixed",e.style.zIndex="999999999999",e.style.top="50%",e.style.left="50%",e.style.transform="translate(-50%, -50%)"})});
