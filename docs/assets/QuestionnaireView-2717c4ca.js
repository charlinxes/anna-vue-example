import{o as p,c as w,a as _,t as S,F as R,f as j,e as P,l as U,m as $,p as J,g as G,k as V,n as K,i as W}from"./index-8ca13945.js";const X={style:{border:"1px solid #ccc",padding:"20px"}},ee={style:{"margin-top":"0"}},te=["name","value","onChange"],ae={__name:"QuestionData",props:["questionData"],emits:["emitCheckOption"],setup(a,{emit:e}){const n=a;function t(r){e("emitCheckOption",{...n.questionData,checkOption:r})}return(r,c)=>(p(),w("section",X,[_("p",ee,S(a.questionData.topic)+"：",1),(p(!0),w(R,null,j(a.questionData.options,i=>(p(),w("div",null,[_("label",null,[_("input",{type:"radio",name:i.name,value:i.value,onChange:h=>t(i)},null,40,te),P(" "+S(i.display),1)])]))),256))]))}};var A={},Y=/^([+-])?0*(\d+)(\.(\d+))?$/,z=/^([+-])?0*(\d+)(\.(\d+))?e(([+-])?(\d+))$/i,ne=A.e2ten=function(a){var e=z.exec(a.toString());if(!e)return a;var n=e[2],t=e[4]||"",r=e[5]?+e[5]:0;if(r>0){var c=t.substr(0,r);c=c.length<r?c+new Array(r-c.length+1).join("0"):c,t=t.substr(r),n+=c}else{r=-r;var i=n.length-r;i=i<0?0:i;var h=n.substr(i,r);h=h.length<r?new Array(r-h.length+1).join("0")+h:h,n=n.substring(0,i),t=h+t}return n=n==""?"0":n,(e[1]=="-"?"-":"")+n+(t?"."+t:"")};A.getNumbResult=function(a){var e=Y.exec(a.toString());if(!e&&z.test(a.toString())&&(e=Y.exec(ne(a.toString()))),e)return{int:e[2],decimal:e[4],minus:e[1]=="-",num:e.slice(1,3).join("")}};A.centerArray=function a(e,n){if(e.splice.apply(e,[0,n.length].concat(n.splice(0,n.length))),arguments.length>2){var t=[].slice.call(arguments,2);t.unshift(e),a.apply(null,t)}return e};var re=A.hasAttr=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)};A.extend=function(a){for(var e,n=arguments[0]||{},t=Array.prototype.slice.call(arguments,1),r=0;r<t.length;r++){var c=t[r];for(e in c)re(c,e)&&(n[e]=c[e])}return n};A.getDigit=function(a){return a>=5?(a-4)*4+4:a};A.unshiftZero=function(a,e){if(e==null&&(e=1),!(e<=0))for(;e--;)a.unshift(0)};A.clearZero=function(a,e,n){if(a==null)return"";var t=~"*.?+$^[](){}|\\/".indexOf(e)?"\\"+e:e,r=new RegExp("^"+t+"+"),c=new RegExp(t+"+$"),i=new RegExp(t+"{2}","g");return a=a.toString(),n=="^"&&(a=a.replace(r,"")),(!n||n=="$")&&(a=a.replace(c,"")),(!n||n=="nto1")&&(a=a.replace(i,e)),a};var f=A;function E(a,e){var n=f.getNumbResult(a);if(!n)return a;e=e||{};var t=this.ch,r=this.ch_u,c=this.ch_f||"",i=this.ch_d||".",h=t.charAt(0),o=n.int,s=n.decimal,l=n.minus,u="",v="",d=l?c:"",g=function b(y,ye,we){y=f.getNumbResult(y).int;var k="",N=arguments.length>1?arguments[1]:e.tenMin,B=y.length;if(B==1)return t.charAt(+y);if(B<=4)for(var M=0,Z=B;Z--;){var q=+y.charAt(M);k+=N&&B==2&&M==0&&q==1?"":t.charAt(q),k+=q&&Z?r.charAt(Z):"",M++}else{for(var F=y.length/4>>0,L=y.length%4;L==0||!r.charAt(3+F);)L+=4,F--;var H=y.substr(0,L),I=y.substr(L);k=b(H,N)+r.charAt(3+F)+(I.charAt(0)=="0"?h:"")+b(I,I.length>4?N:!1)}return k=f.clearZero(k,h),k};if(s){s=f.clearZero(s,"0","$");for(var x=0;x<s.length;x++)v+=t.charAt(+s.charAt(x));v=v?i+v:""}if(u=g(o),e.ww&&r.length>5){var C=r.charAt(4),m=r.charAt(5),O=u.lastIndexOf(m);~O&&(u=u.substring(0,O).replace(new RegExp(m,"g"),C+C)+u.substring(O))}return d+u+v}function ie(a){a=a.toString();var e=a.split(this.ch_d),n=e[0].replace(this.ch_f,""),t=e[1],r=!!~e[0].indexOf(this.ch_f),c=this.ch_u.charAt(1),i=this.ch_u.charAt(4),h=this.ch_u.charAt(5);n=n.replace(new RegExp(i+"{2}","g"),h);for(var o=n.split(""),s=0,l=0,u=[],v=[],d=[],g=0;g<o.length;g++){var x=o[g],C=0,m=0;if(~(C=this.ch.indexOf(x)))C>0&&d.unshift(C);else if(~(m=this.ch_u.indexOf(x))){var O=f.getDigit(m);s>m?(f.unshiftZero(d,O),f.centerArray(v,d)):m>=l?(g==0&&(d=[1]),f.centerArray(u,v,d),u.length>0&&f.unshiftZero(u,O),l=m):(d.length==0&&c==x&&(d=[1]),f.centerArray(v,d),f.unshiftZero(v,f.getDigit(m)),s=m)}}f.centerArray(u,v,d).reverse(),u.length==0&&u.push(0);var b=0;if(t){u.push("."),b="0.";for(var g=0;g<t.length;g++)b+=this.ch.indexOf(t.charAt(g)),u.push(this.ch.indexOf(t.charAt(g)));b=+b}return r&&u.unshift("-"),parseFloat(u.join(""))}function le(a,e){var n={ww:!0,complete:!1,outSymbol:!0,unOmitYuan:!1},t=f.getNumbResult(a),r=this.ch.charAt(0);if(e=typeof e=="object"?e:{},!t)return a;e=f.extend(n,e);var c=t.int,i=t.decimal||"",h=e.outSymbol?this.m_t:"",o=t.minus?this.ch_f:"",s="";if(e.complete){for(var l=1;l<this.m_u.length;l++)s+=E.call(this,i.charAt(l-1)||"0")+this.m_u.charAt(l);o+=E.call(this,c,e)+this.m_u.charAt(0)}else{var u=e.unOmitYuan||c!=="0";if(i=i.substr(0,this.m_u.length-1),i=f.clearZero(i,"0","$"),i)for(var v,l=0;l<this.m_u.length-1;l++)i.charAt(l)&&i.charAt(l)!="0"&&(s+=E.call(this,i.charAt(l))+this.m_u.charAt(l+1),v=!1),i.charAt(l)==="0"&&!v&&((l!=0||c!=="0")&&(s+=r),v=!0);(u||!s)&&(o+=E.call(this,c,e)+this.m_u.charAt(0)+(t.decimal?"":this.m_z))}return h+o+s}var ce={CL:E,unCL:ie,toMoney:le},D=ce,Q=A;function ue(a,e){return{encodeS:function(n,t){return t=Q.extend({ww:!0,tenMin:!0},t),D.CL.call(a,n,t)},encodeB:function(n,t){return t=Q.extend({ww:!0},t),D.CL.call(e,n,t)},decodeS:function(){return D.unCL.apply(a,arguments)},decodeB:function(){return D.unCL.apply(e,arguments)},toMoney:function(n,t){return t=Q.extend({ww:!0},t),D.toMoney.call(e,n,t)}}}var se=ue,he={ch:"零一二三四五六七八九",ch_u:"個十百千萬億",ch_f:"負",ch_d:"點"},oe={ch:"零壹貳參肆伍陸柒捌玖",ch_u:"個拾佰仟萬億",ch_f:"負",ch_d:"點",m_t:"$",m_z:"整",m_u:"圓角分"},ve=se,T={s:he,b:oe},fe=ve(T.s,T.b);const de=U(fe);const ge={style:{padding:"30px"}},me=["onClick"],pe={style:{margin:"20px 0"}},_e=["disabled"],Ae={style:{"margin-bottom":"20px"}},be={__name:"QuestionnaireView",setup(a){const e=$(0),n=$([]),t=$([]),r=$(!1),c=$([{topic:"您的性別",order:1,options:[{name:"sex",value:"male",display:"男"},{name:"sex",value:"female",display:"女"},{name:"sex",value:"others",display:"其他"}]},{topic:"您最喜歡下面哪隻狗狗",order:2,options:[{name:"dog",value:"dogA",display:"阿寶"},{name:"dog",value:"dogB",display:"秋葵"}]},{topic:"您最喜歡下面哪隻貓貓",order:3,options:[{name:"cat",value:"catA",display:"蛋捲"},{name:"cat",value:"catB",display:"短褲"},{name:"cat",value:"catC",display:"麻糊"},{name:"cat",value:"catE",display:"米香"},{name:"cat",value:"catD",display:"橘皮"},{name:"cat",value:"catG",display:"本丸"},{name:"cat",value:"catF",display:"Yia"},{name:"cat",value:"catH",display:"丁滿"},{name:"cat",value:"catI",display:"澎澎"}]}]);J(()=>{c.value.forEach(o=>{n.value.push(`問題${de.encodeS(o.order)}`)})});function i(o){const s=t.value.findIndex(l=>l.checkOption.name===o.checkOption.name);s>=0&&t.value.splice(s,1),t.value.push(o)}function h(){t.value.sort((o,s)=>o.order-s.order),r.value=!0}return(o,s)=>(p(),w("main",ge,[G(_("section",null,[(p(!0),w(R,null,j(n.value,(l,u)=>(p(),w("button",{class:K(["tab-button",{active:e.value===u}]),onClick:v=>e.value=u},S(l),11,me))),256)),(p(!0),w(R,null,j(c.value,(l,u)=>G((p(),W(ae,{questionData:l,onEmitCheckOption:i},null,8,["questionData"])),[[V,e.value===u]])),256)),_("div",pe,"已選擇 "+S(t.value.length+"/"+c.value.length),1),_("div",null,[_("button",{disabled:t.value.length<c.value.length,onClick:h},"確認答案",8,_e)])],512),[[V,!r.value]]),G(_("section",null,[(p(!0),w(R,null,j(t.value,l=>(p(),w("div",Ae,S(l.topic+"："+l.checkOption.display),1))),256)),_("div",null,[_("button",{onClick:s[0]||(s[0]=l=>r.value=!1)},"返回")])],512),[[V,r.value]])]))}};export{be as default};
