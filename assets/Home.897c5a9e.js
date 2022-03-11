var E=Object.defineProperty,T=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var v=(o,a,c)=>a in o?E(o,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[a]=c,w=(o,a)=>{for(var c in a||(a={}))V.call(a,c)&&v(o,c,a[c]);if(b)for(var c of b(a))A.call(a,c)&&v(o,c,a[c]);return o},k=(o,a)=>T(o,N(a));import{H as B,T as I}from"./Timer.6fcdc639.js";import{r as g,o as l,c as i,a as f,t as s,v as n,w as d,x as D,y as S,z as H,A as _,B as x,C as m,D as P,G as U,H as z,I as Q}from"./vendor.d705d69a.js";import{_ as R}from"./index.c8760c1e.js";const q={data(){return{routine:[],allchapters:[],upcoming:null,papers:new Set,chapters:new Set,paper:"all",chapter:"all",exam:!1}},methods:{async getRoutine(){let a=await(await fetch("https://script.google.com/macros/s/AKfycbw5fcGkikQDSikNA-z0zbnvcbTuWQGhF2nN12RNuwfHvCQFqO5_aWrLsiCer82ErivD3Q/exec?type=main")).json();this.routine=a.routines.filter(t=>t.day_count!="Extra"&&t.class_sl),this.allchapters=this.routine,this.routine.forEach(t=>{t.paper&&this.papers.add(t.paper)});let c=a.routines.filter(t=>t.day_count!="Extra"&&t.class_sl);this.upcoming=c.sort((t,p)=>p.id-t.id).filter(t=>new Date(t.date).getTime()<=Date.now()&&t.class_sl!="Holiday")[0];let h=new Date(this.upcoming.date);h.setDate(h.getDate()+1),this.upcoming=k(w({},this.upcoming),{end:h})},paperSelected(){if(this.chapter="",this.exam=!1,this.paper=="all"){this.routine=[],this.routine=this.allchapters;return}this.routine=[],this.allchapters.forEach(o=>{o.paper==this.paper&&this.routine.push(o)}),this.routine.forEach(o=>{o.chapter&&o.video&&this.chapters.add(o.chapter)})},chapterSelected(){if(this.exam=!1,this.paper!="all"){if(this.chapter=="all"){this.routine=[],this.allchapters.forEach(o=>{o.paper==this.paper&&this.routine.push(o)});return}this.routine=[],this.allchapters.forEach(o=>{o.paper==this.paper&&this.paper!="all"&&this.chapter==o.chapter&&this.routine.push(o)})}}},created(){this.getRoutine()},components:{Header:B,Timer:I}},r=o=>(P("data-v-1d06fd7c"),o=o(),U(),o),F={key:0,class:"container py-10 mx-auto px-2"},G={key:0,class:"font-semibold border text-xl max-w-lg mx-auto rounded border-green-200 p-4 bg-gray-100 text-center my-3 bangla space-y-4"},L={key:0,class:"text-2xl font-semibold text-red-500"},O={key:1,class:"text-2xl font-semibold text-red-500 ongoing"},W={class:"max-w-md mx-auto"},K={key:2,class:"text-2xl font-semibold text-center border border-gray-400 border-dashed w-full"},M=Q("View Details"),Y={class:"flex items-center justify-center flex-wrap my-5 gap-3"},J={class:"form-control w-full max-w-sm"},X=r(()=>s("label",{class:"label"},[s("span",{class:"label-text"},"Paper")],-1)),Z=r(()=>s("option",{disabled:"",selected:"",value:""},"Select Paper",-1)),$=r(()=>s("option",{value:"all"},"All",-1)),ee=["value"],te={class:"form-control w-full max-w-sm"},se=r(()=>s("label",{class:"label"},[s("span",{class:"label-text"},"Chapter")],-1)),oe=r(()=>s("option",{disabled:"",selected:"",value:""},"Select Chapter",-1)),le=r(()=>s("option",{value:"all"},"All",-1)),ae=["value"],ie={class:"form-control w-full max-w-sm"},ne=r(()=>s("label",{class:"label"},[s("span",{class:"label-text text-white"},"Exam")],-1)),ce={class:"grid items-center grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"},re={key:0,class:"aspect-video rounded overflow-hidden"},de=["src"],pe={key:1,class:"aspect-video sm:-mt-28 flex flex-col text-center justify-center items-center rounded h-full w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white bangla text-2xl"},ue=r(()=>s("p",null,"Holiday",-1)),he={key:2,class:"aspect-video flex justify-center items-center rounded h-full w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white bangla text-2xl"},_e={key:3,class:"p-5 font-semibold bangla"},me={key:4,class:"absolute top-0 flex justify-between w-full"},ge={class:"btn btn-success"},fe={key:0,class:"btn btn-success"},xe={key:0,class:"aspect-video rounded overflow-hidden"},ye=["src"],be={key:1,class:"aspect-video sm:-mt-28 flex flex-col text-center justify-center items-center rounded h-full w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white bangla text-2xl"},ve=r(()=>s("p",null,"Holiday",-1)),we={key:2,class:"aspect-video flex justify-center items-center rounded h-full w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white bangla text-2xl"},ke={key:3,class:"p-5 font-semibold bangla"},De={key:4,class:"absolute top-0 flex justify-between w-full"},Se={class:"btn btn-success"},He={key:0,class:"btn btn-success"},Ce={key:1,class:"py-20 text-center"},je=r(()=>s("button",{class:"btn btn-circle loading"},null,-1)),Ee=[je];function Te(o,a,c,h,t,p){const C=g("Header"),j=g("Timer"),y=g("router-link");return l(),i(_,null,[f(C),t.routine.length>0?(l(),i("div",F,[t.upcoming?(l(),i("div",G,[new Date(t.upcoming.date).getTime()>Date.now()?(l(),i("h3",L," Upcoming Challenge... ")):(l(),i("h3",O," Remaining time... ")),s("div",W,[f(j,{end:new Date(t.upcoming.end).getTime()+864e3},null,8,["end"])]),s("p",null,"Physics "+n(t.upcoming.paper)+" | "+n(t.upcoming.chapter),1),s("h1",null,n(t.upcoming.video_description),1),s("h3",null,n(t.upcoming.day)+"- "+n(new Date(t.upcoming.date).toDateString()),1),t.upcoming.examtitle?(l(),i("div",K," You have an exam today ")):d("",!0),f(y,{to:`/details/${t.upcoming.id}`,class:"btn btn-success"},{default:D(()=>[M]),_:1},8,["to"])])):d("",!0),s("div",Y,[s("div",J,[X,S(s("select",{"onUpdate:modelValue":a[0]||(a[0]=e=>t.paper=e),onChange:a[1]||(a[1]=(...e)=>p.paperSelected&&p.paperSelected(...e)),class:"select select-bordered"},[Z,$,(l(!0),i(_,null,x(t.papers,(e,u)=>(l(),i("option",{key:u,value:e},n(e),9,ee))),128))],544),[[H,t.paper]])]),s("div",te,[se,S(s("select",{class:"select select-bordered","onUpdate:modelValue":a[2]||(a[2]=e=>t.chapter=e),onChange:a[3]||(a[3]=(...e)=>p.chapterSelected&&p.chapterSelected(...e))},[oe,le,(l(!0),i(_,null,x(t.chapters,(e,u)=>(l(),i("option",{key:u,value:e},n(e),9,ae))),128))],544),[[H,t.chapter]])]),s("div",ie,[ne,s("button",{onClick:a[4]||(a[4]=e=>t.exam=!t.exam),class:m(["btn border border-gray-300",{"btn-ghost":!t.exam,"bg-gray-800":t.exam}])}," Exam Only ",2)])]),s("div",ce,[(l(!0),i(_,null,x(t.routine,(e,u)=>(l(),z(y,{tag:"div",key:u,to:`/details/${u+1}`,class:m({"pointer-events-none":!e.video,hidden:!e.examtitle&&t.exam})},{default:D(()=>[e.examtitle&&t.exam?(l(),i("div",{key:0,class:m(["shadow relative rounded border border-gray-200 border-dotted",{"pointer-events-none":!e.video}])},[e.video?(l(),i("div",re,[s("img",{src:`https://img.youtube.com/vi/${e.video}/hqdefault.jpg`,class:"-my-8 mx-auto w-full"},null,8,de)])):e.class_sl=="Holiday"?(l(),i("div",pe,[ue,s("p",null,n(e.video_description),1),s("p",null,n(new Date(e.date).toDateString()),1)])):(l(),i("div",he," Upcoming... ")),e.class_sl!="Holiday"?(l(),i("div",_e,[s("p",null,"Physics "+n(e.paper)+" | "+n(e.chapter),1),s("h1",null,n(e.video_description),1),s("p",null,n(new Date(e.date).toDateString()),1)])):d("",!0),e.class_sl!="Holiday"?(l(),i("div",me,[s("button",ge,n(e.day),1),e.examtitle?(l(),i("button",fe,n(e.examtitle),1)):d("",!0)])):d("",!0)],2)):t.exam?d("",!0):(l(),i("div",{key:1,class:m(["shadow relative rounded border border-gray-200 border-dotted",{"pointer-events-none":!e.video}])},[e.video?(l(),i("div",xe,[s("img",{src:`https://img.youtube.com/vi/${e.video}/hqdefault.jpg`,class:"-my-8 mx-auto w-full"},null,8,ye)])):e.class_sl=="Holiday"?(l(),i("div",be,[ve,s("p",null,n(e.video_description),1),s("p",null,n(new Date(e.date).toDateString()),1)])):(l(),i("div",we," Upcoming... ")),e.class_sl!="Holiday"?(l(),i("div",ke,[s("p",null,"Physics "+n(e.paper)+" | "+n(e.chapter),1),s("h1",null,n(e.video_description),1),s("p",null,n(new Date(e.date).toDateString()),1)])):d("",!0),e.class_sl!="Holiday"?(l(),i("div",De,[s("button",Se,n(e.day),1),e.examtitle?(l(),i("button",He,n(e.examtitle),1)):d("",!0)])):d("",!0)],2))]),_:2},1032,["to","class"]))),128))])])):(l(),i("div",Ce,Ee))],64)}var Ie=R(q,[["render",Te],["__scopeId","data-v-1d06fd7c"]]);export{Ie as default};
