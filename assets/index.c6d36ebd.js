import{r as _,o as v,c as g,a as y,b as V,d as $,F as E,e as T,E as L,f as n,g as u,m as O,h as P,i as w,j as q,k as A,l as I,n as S,p as c,q as b,s as k,u as R,V as D}from"./vendor.d705d69a.js";const F=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}};F();var C=(o,t)=>{const r=o.__vccOpts||o;for(const[a,e]of t)r[a]=e;return r};const M={setup(){return{}},methods:{navigateTocurrentPath(){let o=localStorage.getItem("path");o&&(localStorage.removeItem("path"),this.$router.replace(o))}},created(){this.navigateTocurrentPath()}};function N(o,t,r,a,e,s){const i=_("router-view");return v(),g("div",null,[y(i)])}var x=C(M,[["render",N]]);const B="modulepreload",m={},H="/85days/",d=function(t,r){return!r||r.length===0?t():Promise.all(r.map(a=>{if(a=`${H}${a}`,a in m)return;m[a]=!0;const e=a.endsWith(".css"),s=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${s}`))return;const i=document.createElement("link");if(i.rel=e?"stylesheet":B,e||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),e)return new Promise((h,p)=>{i.addEventListener("load",h),i.addEventListener("error",p)})})).then(()=>t())},W=[{path:"/",name:"Home",component:()=>d(()=>import("./Home.96f2eea8.js"),["assets/Home.96f2eea8.js","assets/Home.a5f33ec4.css","assets/Timer.76d1b1e1.js","assets/vendor.d705d69a.js"]),meta:{requiresAuth:!0}},{path:"/details/:id",name:"Details",component:()=>d(()=>import("./DetailsPage.099b8fc2.js"),["assets/DetailsPage.099b8fc2.js","assets/Timer.76d1b1e1.js","assets/vendor.d705d69a.js"]),meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:()=>d(()=>import("./Auth.a57f36ed.js"),["assets/Auth.a57f36ed.js","assets/vendor.d705d69a.js"])},{path:"/restricted",name:"restricted",component:()=>d(()=>import("./accessrestricted.ead3ddfa.js"),["assets/accessrestricted.ead3ddfa.js","assets/vendor.d705d69a.js"])}],f=V({history:$("/85days"),routes:W});f.beforeEach((o,t,r)=>{if(!o.matched.some(a=>a.meta.requiresAuth)){r();return}if(localStorage.getItem("acr21")){r();return}r({name:"Login"})});var Y={install(o){o.component("VeeForm",E),o.component("VeeField",T),o.component("ErrorMessage",L),n("required",u),n("tos",u),n("min",O),n("max",P),n("alpha_spaces",w),n("email",q),n("min_value",A),n("max_value",I),n("password_mismatch",S),n("excluded",c),n("country_excluded",c),b({generateMessage:t=>{const r={required:`The field ${t.field} is required.`,min:`The field ${t.field} is too short.`,max:`The field ${t.field} is too long.`,alpha_spaces:`The field ${t.field} may only contain alphabetic characters and spaces.`,email:`The field ${t.field} must contain a valid email address.`,min_value:`The field ${t.field} is too low.`,max_value:`The field ${t.field} is too high.`,excluded:`You are not allowed to use this value for this field ${t.field}`,password_mismatch:"The password don't match.",country_excluded:"Due to restrictions, we do not accept from this country",tos:"You must accept the Terms of Service"};return r[t.rule.name]?r[t.rule.name]:`The field ${t.field} is invalid`},validateOnBlur:!0,vlidateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0})}};let l=k(x);l.use(f);l.use(Y);l.use(R,{plyr:{}});l.use(D);l.mount("#app");export{C as _};
