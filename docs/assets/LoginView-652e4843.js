import{_ as d,o as i,c as r,a as e,g as a,v as l,d as p}from"./index-8c28cdf5.js";const m={data(){return{userName:"",password:"",showAlert:!1}},methods:{authenticate(){this.userName==="anna"&&this.password==="anna001114"?(this.$store.commit("login"),sessionStorage.setItem("isLogin","true"),this.$router.push({name:"home"})):(this.showAlert=!0,this.password="")}}},u={style:{padding:"30px"}},h={style:{"margin-bottom":"10px",display:"flex"}},c=e("span",{style:{width:"80px","text-align":"end"}},"用戶名：",-1),x={style:{"margin-bottom":"20px",display:"flex"}},_=e("span",{style:{width:"80px","text-align":"end"}},"密碼：",-1),g={key:0,style:{"margin-left":"80px",color:"red"}};function w(f,t,y,v,s,n){return i(),r("section",u,[e("div",h,[c,a(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=o=>s.userName=o)},null,512),[[l,s.userName]])]),e("div",x,[_,a(e("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=o=>s.password=o)},null,512),[[l,s.password]])]),e("button",{style:{"margin-left":"80px","margin-bottom":"10px"},onClick:t[2]||(t[2]=(...o)=>n.authenticate&&n.authenticate(...o))},"登入"),s.showAlert?(i(),r("div",g,"用戶名或密碼錯誤")):p("",!0)])}const V=d(m,[["render",w]]);export{V as default};
