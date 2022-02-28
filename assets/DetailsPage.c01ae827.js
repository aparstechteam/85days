import{H as b,T as g}from"./Timer.314768e8.js";import{_ as h}from"./index.d3e0ab4d.js";import{r as a,o as s,c as o,a as d,t,x as y,w as l,v as n,A as v}from"./vendor.07eb03d2.js";const x={data(){return{r:null,pracq:!1,pracl:!1,pracs:!1}},methods:{async getRoutine(){let r=await(await fetch("https://script.google.com/macros/s/AKfycbw5fcGkikQDSikNA-z0zbnvcbTuWQGhF2nN12RNuwfHvCQFqO5_aWrLsiCer82ErivD3Q/exec?type=main&id="+this.$route.params.id)).json();this.r=r.exam},upcomingalert(){this.$swal({icon:"warning",title:"Upcomming",text:"Wait till starting Date."})}},created(){this.getRoutine()},components:{Header:b,Timer:g}},f={key:0,class:"container py-10 px-2 mx-auto"},w={class:"flex flex-wrap h-full justify-center"},k={class:"flex-1"},D=["data-plyr-embed-id"],C={class:"max-w-md p-5 font-semibold bangla space-y-3"},T={key:0,class:"text-2xl font-semibold text-red-500"},q={key:1,class:"text-2xl font-semibold text-red-500 ongoing"},N={key:2,class:"max-w-md mx-auto"},S={key:3,class:"text-xl"},H={class:"text-xl space-y-3 mt-2 font-semibold"},Q={key:0,class:"text-center my-4 flex gap-3 justify-center items-center flex-wrap"},A={class:"my-5"},E={key:0,class:"bg-gray-200 border border-dotted border-gray-300 p-2"},L={key:0,class:"relative"},P=t("div",{class:"disable absolute top-0 right-0 w-32 h-32 bg-gray-400 opacity-0"},null,-1),R=["src"],j={key:1,class:"bg-gray-200 border border-dotted border-gray-300 p-2"},B={key:0,class:"relative"},F=t("div",{class:"disable absolute top-0 right-0 w-32 h-32 bg-gray-400 opacity-0"},null,-1),V=["src"],W={key:2,class:"bg-gray-200 border border-dotted border-gray-300 p-2"},z={key:0,class:"relative"},G=t("div",{class:"disable absolute top-0 right-0 w-32 h-32 bg-gray-400 opacity-0"},null,-1),U=["src"],K={key:1,class:"bg-green-400 p-3 rounded text-center text-2xl border"},O={key:1,class:"py-20 text-center"},I=t("button",{class:"btn btn-circle loading"},null,-1),J=[I];function M(u,r,X,Y,e,i){const p=a("Header"),_=a("vue-plyr"),m=a("Timer");return s(),o(v,null,[d(p),e.r?(s(),o("div",f,[t("div",w,[t("div",k,[d(_,null,{default:y(()=>[t("div",{"data-plyr-provider":"youtube","data-plyr-embed-id":e.r.video},null,8,D)]),_:1})]),t("div",C,[new Date(e.r.date).getTime()>Date.now()?(s(),o("h3",T," Upcoming Challenge... ")):new Date(e.r.date).getTime()+864e3>Date.now()?(s(),o("h3",q," Remaining time... ")):l("",!0),new Date(e.r.date).getTime()+864e3>Date.now()?(s(),o("div",N,[d(m,{end:new Date(e.r.date).getTime()+864e3},null,8,["end"])])):(s(),o("h2",S,"Ends")),t("div",H,[t("p",null,"Physics "+n(e.r.paper)+" | "+n(e.r.chapter),1),t("h1",null,n(e.r.video_description),1),t("h3",null,n(e.r.day)+"- "+n(new Date(e.r.date).toDateString()),1)])])]),e.r.examtitle?(s(),o("div",Q,[t("button",{class:"btn btn-success",onClick:r[0]||(r[0]=(...c)=>i.upcomingalert&&i.upcomingalert(...c))},"Exam"),t("button",{class:"btn btn-success",onClick:r[1]||(r[1]=(...c)=>i.upcomingalert&&i.upcomingalert(...c))},"Solution"),t("button",{class:"btn btn-success",onClick:r[2]||(r[2]=(...c)=>i.upcomingalert&&i.upcomingalert(...c))}," Leaderboard ")])):l("",!0),t("div",A,[e.r.practice_ques?(s(),o("div",E,[t("button",{class:"btn btn-block btn-success my-3",onClick:r[3]||(r[3]=c=>e.pracq=!e.pracq)}," Practice Question "),e.pracq?(s(),o("div",L,[P,t("iframe",{src:`https://drive.google.com/file/d/${e.r.practice_ques}/preview`,height:"480",allow:"autoplay",class:"w-full mx-auto"},null,8,R)])):l("",!0)])):l("",!0),e.r.practice_solve?(s(),o("div",j,[t("button",{class:"btn btn-block btn-success my-3",onClick:r[4]||(r[4]=c=>e.pracs=!e.pracs)}," Practice Solve "),e.pracs?(s(),o("div",B,[F,t("iframe",{src:`https://drive.google.com/file/d/${e.r.practice_solve}/preview`,height:"480",allow:"autoplay",class:"w-full mx-auto"},null,8,V)])):l("",!0)])):l("",!0),e.r.lecture_sheet?(s(),o("div",W,[t("button",{class:"btn btn-block btn-success my-3",onClick:r[5]||(r[5]=c=>e.pracl=!e.pracl)}," Lecture Sheet "),e.pracl?(s(),o("div",z,[G,t("iframe",{src:`https://drive.google.com/file/d/${e.r.lecture_sheet}/preview`,height:"480",allow:"autoplay",class:"w-full mx-auto"},null,8,U)])):l("",!0)])):l("",!0)]),!e.r.lecture_sheet&&!e.r.practice_solve&&!e.r.practice_ques?(s(),o("div",K," No Lecture Sheet Available ")):l("",!0)])):(s(),o("div",O,J))],64)}var te=h(x,[["render",M]]);export{te as default};
