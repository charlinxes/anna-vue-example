import{_ as C,l as p,r,o,i as h,w as s,e as n,t as y,a as g,c as l,b as t,u as x,d as w,T as $,F as k,f as L}from"./index-8fec5849.js";const b={style:{"font-size":"12px"}},B={__name:"TodoCard",props:["cardData"],setup(u){const e=u,c=p("");return c.value=`${new Date(e.cardData.time).getFullYear()}/${new Date(e.cardData.time).getMonth()+1}/${new Date(e.cardData.time).getDate()} ${new Date(e.cardData.time).getHours()}:${new Date(e.cardData.time).getMinutes()}:${String(new Date(e.cardData.time).getSeconds()).padStart(2,"0")}`,(a,m)=>{const i=r("el-card");return o(),h(i,{class:"box-card"},{default:s(()=>[n(y(e.cardData.display)+" ",1),g("div",null,[n("生成時間： "),g("span",b,y(c.value),1)])]),_:1})}}},F=C(B,[["__scopeId","data-v-569a0e15"]]);const N={style:{padding:"30px"}},V={key:0,style:{"margin-left":"5px"}},I={key:1,style:{"margin-left":"5px"}},M={__name:"TodoList",setup(u){const e=p([]);let c=0,a=p("descend");function m(){e.value.push({display:`我是第${c}個`,time:Date.now()}),c+=1,console.log(e.value)}function i(){a.value!=="descend"?(e.value.sort((d,_)=>d.time-_.time),a.value="descend"):(e.value.sort((d,_)=>_.time-d.time),a.value="ascend")}return(d,_)=>{const D=r("el-button"),S=r("SortUp"),v=r("el-icon"),T=r("SortDown");return o(),l("div",N,[t(D,{type:"success",onClick:m},{default:s(()=>[n("添加卡片")]),_:1}),t(D,{type:"danger",onClick:i},{default:s(()=>[n("更改排序")]),_:1}),x(a)==="descend"?(o(),l("span",V,[n("升序"),t(v,{style:{position:"relative",top:"2px"}},{default:s(()=>[t(S)]),_:1})])):w("",!0),x(a)==="ascend"?(o(),l("span",I,[n("降序"),t(v,{style:{position:"relative",top:"2px"}},{default:s(()=>[t(T)]),_:1})])):w("",!0),t($,{name:"list"},{default:s(()=>[(o(!0),l(k,null,L(e.value,f=>(o(),h(F,{key:f.time,cardData:f},null,8,["cardData"]))),128))]),_:1})])}}},z=C(M,[["__scopeId","data-v-633e48a7"]]);export{z as default};
