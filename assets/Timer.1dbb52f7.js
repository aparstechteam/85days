import{_ as c}from"./index.5c637bc8.js";import{r as h,o as a,H as l,x as m,t,c as u,v as i}from"./vendor.d705d69a.js";var g="/85days/assets/logo.6874757a.png";const f={},x=t("img",{src:g,class:"h-16 mt-2 object-cover mx-auto",alt:""},null,-1);function p(d,e,o,r,s,n){const _=h("router-link");return a(),l(_,{to:"/",tag:"div"},{default:m(()=>[x]),_:1})}var N=c(f,[["render",p]]);const b={name:"timer",props:{end:{requiblue:!0}},data(){return{days:0,hours:0,minute:0,second:0}},methods:{showRemaining(){const d=setInterval(()=>{const e=this.end-Date.now();if(e<0){clearInterval(d);return}const o=Math.floor(e/this._days),r=Math.floor(e%this._days/this._hours),s=Math.floor(e%this._hours/this._minutes),n=Math.floor(e%this._minutes/this._seconds);this.second=n<10?"0"+n:n,this.minute=s<10?"0"+s:s,this.hours=r<10?"0"+r:r,this.days=o<10?"0"+o:o})}},computed:{_seconds:()=>1e3,_minutes(){return this._seconds*60},_hours(){return this._minutes*60},_days(){return this._hours*24}},mounted(){this.showRemaining()}},v={class:"grid grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-cols-4 gap-3"},w={class:"flex flex-col items-center bg-gradient-to-r from-green-400 to-green-600 rounded-lg text-white p-2 shadow border border-gray-200"},y={class:"text-xl font-bold"},$=t("p",{class:"text-sm"},"days",-1),k={class:"flex flex-col items-center bg-gradient-to-r from-green-400 to-green-600 rounded-lg text-white p-2 shadow border border-gray-200"},B={class:"text-xl font-bold"},M=t("p",{class:"text-sm"},"hours",-1),H={class:"flex flex-col items-center bg-gradient-to-r from-green-400 to-green-600 rounded-lg text-white p-2 shadow border border-gray-200"},C={class:"text-xl font-bold"},D=t("p",{class:"text-sm"},"minute",-1),I={class:"flex flex-col items-center bg-gradient-to-r from-green-400 to-green-600 rounded-lg text-white p-2 shadow border border-gray-200"},R={class:"text-xl font-bold"},T=t("p",{class:"text-sm"},"second",-1);function j(d,e,o,r,s,n){return a(),u("div",v,[t("div",w,[t("h2",y,i(s.days),1),$]),t("div",k,[t("h2",B,i(s.hours),1),M]),t("div",H,[t("h2",C,i(s.minute),1),D]),t("div",I,[t("h2",R,i(s.second),1),T])])}var S=c(b,[["render",j]]);export{N as H,S as T};
