import{H as x,T as y}from"./Timer.1dbb52f7.js";import{_ as f}from"./index.5c637bc8.js";import{r as p,o as s,c as o,a as h,t,x as w,w as n,v as a,A as k,I as m}from"./vendor.d705d69a.js";const D={data(){return{r:null,pracq:!1,pracl:!1,pracs:!1,next:null,prev:null}},methods:{startExam(){new Date(this.r.examstart).getTime()<Date.now()?location.href="https://apars.tech/aparchinmoy21/exam/"+r.exam_id:this.upcomingalert()},showRank(){new Date(this.r.examstart).getTime()<Date.now()?location.href="https://apars.tech/aparchinmoy21/ranking/"+r.exam_id:this.upcomingalert()},solveSheet(){new Date(this.r.examend).getTime()<Date.now()?window.open(this.r.solve_sheet,"_blank"):this.$swal({icon:"warning",title:"Upcomming",text:"Will be available soon."})},async getRoutine(){let i=await(await fetch("https://script.google.com/macros/s/AKfycbw5fcGkikQDSikNA-z0zbnvcbTuWQGhF2nN12RNuwfHvCQFqO5_aWrLsiCer82ErivD3Q/exec?type=main&id="+this.$route.params.id)).json();this.r=i.exam,this.getNextPrev()},async getNextPrev(){let d=(await(await fetch("https://script.google.com/macros/s/AKfycbw5fcGkikQDSikNA-z0zbnvcbTuWQGhF2nN12RNuwfHvCQFqO5_aWrLsiCer82ErivD3Q/exec?type=nxt-prev")).json()).routines,_=d.findIndex(e=>e.id==this.$route.params.id);this.next=d[_+1],this.prev=d[_-1]},upcomingalert(){this.$swal({icon:"warning",title:"Upcomming",text:"Wait till starting Date."})}},created(){this.getRoutine()},components:{Header:x,Timer:y}},C={key:0,class:"container py-10 px-2 mx-auto"},N={class:"flex flex-wrap h-full justify-center"},T={class:"flex-1"},S=["data-plyr-embed-id"],q={class:"max-w-md p-4 font-semibold bangla space-y-3"},Q={key:0,class:"text-2xl font-semibold text-red-500"},R={key:1,class:"text-2xl font-semibold text-red-500 ongoing"},E={key:2,class:"max-w-md mx-auto"},P={class:"text-xl space-y-3 mt-2 font-semibold"},A={class:"flex items-center flex-wrap w-full gap-2"},H=["href","title"],W=t("span",{class:"material-icons"}," arrow_back_ios ",-1),F=m(" Prev"),L=[W,F],j=["href","title"],z=m("Next "),G=t("span",{class:"material-icons"}," arrow_forward_ios ",-1),V=[z,G],B={key:0,class:"text-center my-4 flex gap-3 justify-center items-center flex-wrap"},U={class:"my-5"},I={key:0,class:"bg-gray-200 border border-dotted border-gray-300 p-2"},K={class:"flex items-center gap-2"},O=["href"],J={key:0,class:"relative"},M=t("div",{class:"disable absolute top-0 right-0 w-32 h-32 bg-gray-400 opacity-0"},null,-1),X=["src"],Y={key:1,class:"bg-gray-200 border border-dotted border-gray-300 p-2"},Z={key:0,class:"relative"},$=t("div",{class:"disable absolute top-0 right-0 w-32 h-32 bg-gray-400 opacity-0"},null,-1),ee=["src"],te={key:2,class:"bg-gray-200 border border-dotted border-gray-300 p-2"},se={key:0,class:"relative"},oe=t("div",{class:"disable absolute top-0 right-0 w-32 h-32 bg-gray-400 opacity-0"},null,-1),re=["src"],ie={key:1,class:"bg-green-400 p-3 rounded text-center text-2xl border"},ne={key:1,class:"py-20 text-center"},le=t("button",{class:"btn btn-circle loading"},null,-1),ce=[le];function ae(u,i,d,_,e,c){const b=p("Header"),g=p("vue-plyr"),v=p("Timer");return s(),o(k,null,[h(b),e.r?(s(),o("div",C,[t("div",N,[t("div",T,[h(g,null,{default:w(()=>[t("div",{"data-plyr-provider":"youtube","data-plyr-embed-id":e.r.video},null,8,S)]),_:1})]),t("div",q,[new Date(e.r.date).getTime()>Date.now()?(s(),o("h3",Q," Upcoming Challenge... ")):new Date(e.r.date).getTime()+864e3>Date.now()?(s(),o("h3",R," Remaining time... ")):n("",!0),new Date(e.r.date).getTime()+864e3>Date.now()?(s(),o("div",E,[h(v,{end:new Date(e.r.date).getTime()+864e3},null,8,["end"])])):n("",!0),t("div",P,[t("p",null,"Physics "+a(e.r.paper)+" | "+a(e.r.chapter),1),t("h1",null,a(e.r.video_description),1),t("h3",null,a(e.r.day)+"- "+a(new Date(e.r.date).toDateString()),1)]),t("div",A,[e.prev?(s(),o("a",{key:0,class:"btn btn-sucess",href:`/85days/details/${e.prev.id}`,title:e.prev.video_description},L,8,H)):n("",!0),e.next?(s(),o("a",{key:1,class:"btn btn-sucess",href:`/85days/details/${e.next.id}`,title:e.next.video_description},V,8,j)):n("",!0)])])]),e.r.examtitle?(s(),o("div",B,[t("button",{class:"btn btn-success",onClick:i[0]||(i[0]=(...l)=>c.startExam&&c.startExam(...l))},"Exam"),t("button",{class:"btn btn-success",onClick:i[1]||(i[1]=(...l)=>c.showRank&&c.showRank(...l))},"Leaderboard"),t("button",{class:"btn btn-success",onClick:i[2]||(i[2]=(...l)=>c.solveSheet&&c.solveSheet(...l))},"Solution")])):n("",!0),t("div",U,[e.r.practice_ques?(s(),o("div",I,[t("div",K,[t("button",{class:"btn btn-block btn-success my-3 flex-1",onClick:i[3]||(i[3]=l=>e.pracq=!e.pracq)}," Practice Question "),t("a",{class:"btn btn-block btn-success my-3 max-w-xs",href:`https://drive.google.com/uc?id=${e.r.practice_ques}&export=download`,target:"_blank"}," Download ",8,O)]),e.pracq?(s(),o("div",J,[M,t("iframe",{src:`https://drive.google.com/file/d/${e.r.practice_ques}/preview`,height:"480",allow:"autoplay",class:"w-full mx-auto"},null,8,X)])):n("",!0)])):n("",!0),e.r.practice_solve?(s(),o("div",Y,[t("button",{class:"btn btn-block btn-success my-3",onClick:i[4]||(i[4]=l=>e.pracs=!e.pracs)}," Practice Solve "),e.pracs?(s(),o("div",Z,[$,t("iframe",{src:`https://drive.google.com/file/d/${e.r.practice_solve}/preview`,height:"480",allow:"autoplay",class:"w-full mx-auto"},null,8,ee)])):n("",!0)])):n("",!0),e.r.lecture_sheet?(s(),o("div",te,[t("button",{class:"btn btn-block btn-success my-3",onClick:i[5]||(i[5]=l=>e.pracl=!e.pracl)}," Lecture Sheet "),e.pracl?(s(),o("div",se,[oe,t("iframe",{src:`https://drive.google.com/file/d/${e.r.lecture_sheet}/preview`,height:"480",allow:"autoplay",class:"w-full mx-auto"},null,8,re)])):n("",!0)])):n("",!0)]),!e.r.lecture_sheet&&!e.r.practice_solve&&!e.r.practice_ques?(s(),o("div",ie," No Lecture Sheet Available ")):n("",!0)])):(s(),o("div",ne,ce))],64)}var he=f(D,[["render",ae]]);export{he as default};
