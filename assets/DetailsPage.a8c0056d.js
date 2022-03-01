import{H as v,T as y}from"./Timer.787b6929.js";import{_ as x}from"./index.0628bbb6.js";import{r as p,o as s,c as o,a as u,t,x as f,w as i,v as n,A as w,I as h}from"./vendor.d705d69a.js";const k={data(){return{r:null,pracq:!1,pracl:!1,pracs:!1,next:null,prev:null}},methods:{async getRoutine(){let r=await(await fetch("https://script.google.com/macros/s/AKfycbw5fcGkikQDSikNA-z0zbnvcbTuWQGhF2nN12RNuwfHvCQFqO5_aWrLsiCer82ErivD3Q/exec?type=main&id="+this.$route.params.id)).json();this.r=r.exam,this.getNextPrev()},async getNextPrev(){let a=(await(await fetch("https://script.google.com/macros/s/AKfycbw5fcGkikQDSikNA-z0zbnvcbTuWQGhF2nN12RNuwfHvCQFqO5_aWrLsiCer82ErivD3Q/exec?type=nxt-prev")).json()).routines,d=a.findIndex(e=>e.id==this.$route.params.id);this.next=a[d+1],this.prev=a[d-1]},upcomingalert(){this.$swal({icon:"warning",title:"Upcomming",text:"Wait till starting Date."})}},created(){this.getRoutine()},components:{Header:v,Timer:y}},D={key:0,class:"container py-10 px-2 mx-auto"},C={class:"flex flex-wrap h-full justify-center"},N={class:"flex-1"},T=["data-plyr-embed-id"],q={class:"max-w-md p-5 font-semibold bangla space-y-3"},Q={key:0,class:"text-2xl font-semibold text-red-500"},S={key:1,class:"text-2xl font-semibold text-red-500 ongoing"},P={key:2,class:"max-w-md mx-auto"},A={class:"text-xl space-y-3 mt-2 font-semibold"},H={class:"flex items-center flex-wrap w-full gap-2"},F=["href","title"],L=t("span",{class:"material-icons"}," arrow_back_ios ",-1),R=h(" Prev"),W=[L,R],j=["href","title"],z=h("Next "),E=t("span",{class:"material-icons"}," arrow_forward_ios ",-1),G=[z,E],V={key:0,class:"text-center my-4 flex gap-3 justify-center items-center flex-wrap"},B={class:"my-5"},I={key:0,class:"bg-gray-200 border border-dotted border-gray-300 p-2"},K={class:"flex items-center gap-2"},O=["href"],U={key:0,class:"relative"},J=t("div",{class:"disable absolute top-0 right-0 w-32 h-32 bg-gray-400 opacity-0"},null,-1),M=["src"],X={key:1,class:"bg-gray-200 border border-dotted border-gray-300 p-2"},Y={key:0,class:"relative"},Z=t("div",{class:"disable absolute top-0 right-0 w-32 h-32 bg-gray-400 opacity-0"},null,-1),$=["src"],ee={key:2,class:"bg-gray-200 border border-dotted border-gray-300 p-2"},te={key:0,class:"relative"},se=t("div",{class:"disable absolute top-0 right-0 w-32 h-32 bg-gray-400 opacity-0"},null,-1),oe=["src"],re={key:1,class:"bg-green-400 p-3 rounded text-center text-2xl border"},ie={key:1,class:"py-20 text-center"},ce=t("button",{class:"btn btn-circle loading"},null,-1),le=[ce];function ne(_,r,a,d,e,l){const m=p("Header"),b=p("vue-plyr"),g=p("Timer");return s(),o(w,null,[u(m),e.r?(s(),o("div",D,[t("div",C,[t("div",N,[u(b,null,{default:f(()=>[t("div",{"data-plyr-provider":"youtube","data-plyr-embed-id":e.r.video},null,8,T)]),_:1})]),t("div",q,[new Date(e.r.date).getTime()>Date.now()?(s(),o("h3",Q," Upcoming Challenge... ")):new Date(e.r.date).getTime()+864e3>Date.now()?(s(),o("h3",S," Remaining time... ")):i("",!0),new Date(e.r.date).getTime()+864e3>Date.now()?(s(),o("div",P,[u(g,{end:new Date(e.r.date).getTime()+864e3},null,8,["end"])])):i("",!0),t("div",A,[t("p",null,"Physics "+n(e.r.paper)+" | "+n(e.r.chapter),1),t("h1",null,n(e.r.video_description),1),t("h3",null,n(e.r.day)+"- "+n(new Date(e.r.date).toDateString()),1)]),t("div",H,[e.prev?(s(),o("a",{key:0,class:"btn btn-sucess",href:`https://apars.tech/85days/details/${e.prev.id}`,title:e.prev.video_description},W,8,F)):i("",!0),e.next?(s(),o("a",{key:1,class:"btn btn-sucess",href:`https://apars.tech/85days/details/${e.next.id}`,title:e.next.video_description},G,8,j)):i("",!0)])])]),e.r.examtitle?(s(),o("div",V,[t("button",{class:"btn btn-success",onClick:r[0]||(r[0]=(...c)=>l.upcomingalert&&l.upcomingalert(...c))},"Exam"),t("button",{class:"btn btn-success",onClick:r[1]||(r[1]=(...c)=>l.upcomingalert&&l.upcomingalert(...c))},"Solution"),t("button",{class:"btn btn-success",onClick:r[2]||(r[2]=(...c)=>l.upcomingalert&&l.upcomingalert(...c))}," Leaderboard ")])):i("",!0),t("div",B,[e.r.practice_ques?(s(),o("div",I,[t("div",K,[t("button",{class:"btn btn-block btn-success my-3 flex-1",onClick:r[3]||(r[3]=c=>e.pracq=!e.pracq)}," Practice Question "),t("a",{class:"btn btn-block btn-success my-3 max-w-xs",href:`https://drive.google.com/uc?id=${e.r.practice_ques}&export=download`,target:"_blank"}," Download ",8,O)]),e.pracq?(s(),o("div",U,[J,t("iframe",{src:`https://drive.google.com/file/d/${e.r.practice_ques}/preview`,height:"480",allow:"autoplay",class:"w-full mx-auto"},null,8,M)])):i("",!0)])):i("",!0),e.r.practice_solve?(s(),o("div",X,[t("button",{class:"btn btn-block btn-success my-3",onClick:r[4]||(r[4]=c=>e.pracs=!e.pracs)}," Practice Solve "),e.pracs?(s(),o("div",Y,[Z,t("iframe",{src:`https://drive.google.com/file/d/${e.r.practice_solve}/preview`,height:"480",allow:"autoplay",class:"w-full mx-auto"},null,8,$)])):i("",!0)])):i("",!0),e.r.lecture_sheet?(s(),o("div",ee,[t("button",{class:"btn btn-block btn-success my-3",onClick:r[5]||(r[5]=c=>e.pracl=!e.pracl)}," Lecture Sheet "),e.pracl?(s(),o("div",te,[se,t("iframe",{src:`https://drive.google.com/file/d/${e.r.lecture_sheet}/preview`,height:"480",allow:"autoplay",class:"w-full mx-auto"},null,8,oe)])):i("",!0)])):i("",!0)]),!e.r.lecture_sheet&&!e.r.practice_solve&&!e.r.practice_ques?(s(),o("div",re," No Lecture Sheet Available ")):i("",!0)])):(s(),o("div",ie,le))],64)}var ue=x(k,[["render",ne]]);export{ue as default};
