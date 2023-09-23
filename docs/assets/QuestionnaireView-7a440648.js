import{l as $,m as z,o as d,c as m,a as k,t as L,F as E,f as N,e as H,p as P,n as U,i as J,d as K}from"./index-c4f887d7.js";const W={style:{border:"1px solid #ccc",padding:"20px"}},X={style:{"margin-top":"0"}},ee=["name","value","onChange"],te={__name:"QuestionData",props:["questionData","checkOptions"],emits:["emitCheckOption"],setup(a,{emit:e}){const n=a,t=$([]),r=n.checkOptions.find(c=>c.topic===n.questionData.topic);z(()=>{r&&(t.value.find(c=>c.value===r.checkOption.value).checked=!0)});function i(c){e("emitCheckOption",{...n.questionData,checkOption:c})}return(c,o)=>(d(),m("section",W,[k("p",X,L(a.questionData.topic)+"：",1),(d(!0),m(E,null,N(a.questionData.options,h=>(d(),m("div",null,[k("label",null,[k("input",{type:"radio",ref_for:!0,ref_key:"inputRef",ref:t,name:h.name,value:h.value,onChange:s=>i(h)},null,40,ee),H(" "+L(h.display),1)])]))),256))]))}};var y={},G=/^([+-])?0*(\d+)(\.(\d+))?$/,T=/^([+-])?0*(\d+)(\.(\d+))?e(([+-])?(\d+))$/i,ae=y.e2ten=function(a){var e=T.exec(a.toString());if(!e)return a;var n=e[2],t=e[4]||"",r=e[5]?+e[5]:0;if(r>0){var i=t.substr(0,r);i=i.length<r?i+new Array(r-i.length+1).join("0"):i,t=t.substr(r),n+=i}else{r=-r;var c=n.length-r;c=c<0?0:c;var o=n.substr(c,r);o=o.length<r?new Array(r-o.length+1).join("0")+o:o,n=n.substring(0,c),t=o+t}return n=n==""?"0":n,(e[1]=="-"?"-":"")+n+(t?"."+t:"")};y.getNumbResult=function(a){var e=G.exec(a.toString());if(!e&&T.test(a.toString())&&(e=G.exec(ae(a.toString()))),e)return{int:e[2],decimal:e[4],minus:e[1]=="-",num:e.slice(1,3).join("")}};y.centerArray=function a(e,n){if(e.splice.apply(e,[0,n.length].concat(n.splice(0,n.length))),arguments.length>2){var t=[].slice.call(arguments,2);t.unshift(e),a.apply(null,t)}return e};var ne=y.hasAttr=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)};y.extend=function(a){for(var e,n=arguments[0]||{},t=Array.prototype.slice.call(arguments,1),r=0;r<t.length;r++){var i=t[r];for(e in i)ne(i,e)&&(n[e]=i[e])}return n};y.getDigit=function(a){return a>=5?(a-4)*4+4:a};y.unshiftZero=function(a,e){if(e==null&&(e=1),!(e<=0))for(;e--;)a.unshift(0)};y.clearZero=function(a,e,n){if(a==null)return"";var t=~"*.?+$^[](){}|\\/".indexOf(e)?"\\"+e:e,r=new RegExp("^"+t+"+"),i=new RegExp(t+"+$"),c=new RegExp(t+"{2}","g");return a=a.toString(),n=="^"&&(a=a.replace(r,"")),(!n||n=="$")&&(a=a.replace(i,"")),(!n||n=="nto1")&&(a=a.replace(c,e)),a};var v=y;function R(a,e){var n=v.getNumbResult(a);if(!n)return a;e=e||{};var t=this.ch,r=this.ch_u,i=this.ch_f||"",c=this.ch_d||".",o=t.charAt(0),h=n.int,s=n.decimal,l=n.minus,u="",f="",g=l?i:"",p=function O(A,ke,xe){A=v.getNumbResult(A).int;var C="",j=arguments.length>1?arguments[1]:e.tenMin,S=A.length;if(S==1)return t.charAt(+A);if(S<=4)for(var q=0,M=S;M--;){var Z=+A.charAt(q);C+=j&&S==2&&q==0&&Z==1?"":t.charAt(Z),C+=Z&&M?r.charAt(M):"",q++}else{for(var I=A.length/4>>0,B=A.length%4;B==0||!r.charAt(3+I);)B+=4,I--;var Y=A.substr(0,B),F=A.substr(B);C=O(Y,j)+r.charAt(3+I)+(F.charAt(0)=="0"?o:"")+O(F,F.length>4?j:!1)}return C=v.clearZero(C,o),C};if(s){s=v.clearZero(s,"0","$");for(var x=0;x<s.length;x++)f+=t.charAt(+s.charAt(x));f=f?c+f:""}if(u=p(h),e.ww&&r.length>5){var b=r.charAt(4),_=r.charAt(5),w=u.lastIndexOf(_);~w&&(u=u.substring(0,w).replace(new RegExp(_,"g"),b+b)+u.substring(w))}return g+u+f}function re(a){a=a.toString();var e=a.split(this.ch_d),n=e[0].replace(this.ch_f,""),t=e[1],r=!!~e[0].indexOf(this.ch_f),i=this.ch_u.charAt(1),c=this.ch_u.charAt(4),o=this.ch_u.charAt(5);n=n.replace(new RegExp(c+"{2}","g"),o);for(var h=n.split(""),s=0,l=0,u=[],f=[],g=[],p=0;p<h.length;p++){var x=h[p],b=0,_=0;if(~(b=this.ch.indexOf(x)))b>0&&g.unshift(b);else if(~(_=this.ch_u.indexOf(x))){var w=v.getDigit(_);s>_?(v.unshiftZero(g,w),v.centerArray(f,g)):_>=l?(p==0&&(g=[1]),v.centerArray(u,f,g),u.length>0&&v.unshiftZero(u,w),l=_):(g.length==0&&i==x&&(g=[1]),v.centerArray(f,g),v.unshiftZero(f,v.getDigit(_)),s=_)}}v.centerArray(u,f,g).reverse(),u.length==0&&u.push(0);var O=0;if(t){u.push("."),O="0.";for(var p=0;p<t.length;p++)O+=this.ch.indexOf(t.charAt(p)),u.push(this.ch.indexOf(t.charAt(p)));O=+O}return r&&u.unshift("-"),parseFloat(u.join(""))}function ce(a,e){var n={ww:!0,complete:!1,outSymbol:!0,unOmitYuan:!1},t=v.getNumbResult(a),r=this.ch.charAt(0);if(e=typeof e=="object"?e:{},!t)return a;e=v.extend(n,e);var i=t.int,c=t.decimal||"",o=e.outSymbol?this.m_t:"",h=t.minus?this.ch_f:"",s="";if(e.complete){for(var l=1;l<this.m_u.length;l++)s+=R.call(this,c.charAt(l-1)||"0")+this.m_u.charAt(l);h+=R.call(this,i,e)+this.m_u.charAt(0)}else{var u=e.unOmitYuan||i!=="0";if(c=c.substr(0,this.m_u.length-1),c=v.clearZero(c,"0","$"),c)for(var f,l=0;l<this.m_u.length-1;l++)c.charAt(l)&&c.charAt(l)!="0"&&(s+=R.call(this,c.charAt(l))+this.m_u.charAt(l+1),f=!1),c.charAt(l)==="0"&&!f&&((l!=0||i!=="0")&&(s+=r),f=!0);(u||!s)&&(h+=R.call(this,i,e)+this.m_u.charAt(0)+(t.decimal?"":this.m_z))}return o+h+s}var ie={CL:R,unCL:re,toMoney:ce},D=ie,V=y;function le(a,e){return{encodeS:function(n,t){return t=V.extend({ww:!0,tenMin:!0},t),D.CL.call(a,n,t)},encodeB:function(n,t){return t=V.extend({ww:!0},t),D.CL.call(e,n,t)},decodeS:function(){return D.unCL.apply(a,arguments)},decodeB:function(){return D.unCL.apply(e,arguments)},toMoney:function(n,t){return t=V.extend({ww:!0},t),D.toMoney.call(e,n,t)}}}var ue=le,se={ch:"零一二三四五六七八九",ch_u:"個十百千萬億",ch_f:"負",ch_d:"點"},he={ch:"零壹貳參肆伍陸柒捌玖",ch_u:"個拾佰仟萬億",ch_f:"負",ch_d:"點",m_t:"$",m_z:"整",m_u:"圓角分"},oe=ue,Q={s:se,b:he},fe=oe(Q.s,Q.b);const ve=P(fe);const de={style:{padding:"30px"}},me={key:0},ge=["onClick"],pe={style:{margin:"20px 0"}},_e=["disabled"],ye={key:1},Ae={style:{"margin-bottom":"20px"}},be={__name:"QuestionnaireView",setup(a){const e=$(0),n=$([]),t=$([]),r=$(!1),i=$([]);setTimeout(()=>{i.value=[{topic:"您的性別",order:1,options:[{name:"sex",value:"male",display:"男"},{name:"sex",value:"female",display:"女"},{name:"sex",value:"others",display:"其他"}]},{topic:"您最喜歡下面哪隻狗狗",order:2,options:[{name:"dog",value:"dogA",display:"阿寶"},{name:"dog",value:"dogB",display:"秋葵"}]},{topic:"您最喜歡下面哪隻貓貓",order:3,options:[{name:"cat",value:"catA",display:"蛋捲"},{name:"cat",value:"catB",display:"短褲"},{name:"cat",value:"catC",display:"麻糊"},{name:"cat",value:"catD",display:"米香"},{name:"cat",value:"catE",display:"橘皮"},{name:"cat",value:"catF",display:"本丸"},{name:"cat",value:"catG",display:"Yia"},{name:"cat",value:"catH",display:"丁滿"},{name:"cat",value:"catI",display:"澎澎"}]}],i.value.forEach(h=>{n.value.push(`問題${ve.encodeS(h.order)}`)})},3e3);function c(h){const s=t.value.findIndex(l=>l.checkOption.name===h.checkOption.name);s>=0&&t.value.splice(s,1),t.value.push(h)}function o(){t.value.sort((h,s)=>h.order-s.order),r.value=!0}return(h,s)=>(d(),m("main",de,[r.value?(d(),m("section",ye,[(d(!0),m(E,null,N(t.value,l=>(d(),m("div",Ae,L(l.topic+"："+l.checkOption.display),1))),256)),k("div",null,[k("button",{onClick:s[0]||(s[0]=l=>r.value=!1)},"返回")])])):(d(),m("section",me,[(d(!0),m(E,null,N(n.value,(l,u)=>(d(),m("button",{class:U(["tab-button",{active:e.value===u}]),onClick:f=>e.value=u},L(l),11,ge))),256)),(d(!0),m(E,null,N(i.value,(l,u)=>(d(),m(E,null,[e.value===u?(d(),J(te,{key:0,questionData:l,checkOptions:t.value,onEmitCheckOption:c},null,8,["questionData","checkOptions"])):K("",!0)],64))),256)),k("div",pe,"已選擇 "+L(t.value.length+"/"+i.value.length),1),k("div",null,[k("button",{disabled:t.value.length<i.value.length,onClick:o},"確認答案",8,_e)])]))]))}};export{be as default};
