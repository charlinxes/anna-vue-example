import{_ as d,r as n,o as r,c,a as u,b as e,w as a,d as i,e as s}from"./index-242b42e0.js";const l={mounted(){const t=document.querySelector("header").offsetHeight;this.$refs.aboutAside.style.height=`calc(100vh - ${t}px)`},data(){return{}}},p={style:{display:"flex"}},h={ref:"aboutAside",class:"aboutAside"},f={key:0,style:{padding:"30px"}};function m(t,b,x,y,v,$){const o=n("router-link"),_=n("router-view");return r(),c("section",p,[u("aside",h,[e(o,{to:{name:"about"}},{default:a(()=>[s("簡介")]),_:1}),e(o,{to:{name:"aboutAuthor"}},{default:a(()=>[s("作者")]),_:1}),e(o,{to:{name:"aboutContext"}},{default:a(()=>[s("背景")]),_:1})],512),t.$route.path==="/about"?(r(),c("div",f,"你現在在關於簡介頁哦！")):i("",!0),e(_)])}const A=d(l,[["render",m]]);export{A as default};
