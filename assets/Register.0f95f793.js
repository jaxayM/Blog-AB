import{r as u,o as f,c as g,a as e,w as i,v as b,g as c,b as x,k,h,n as U,F as R,l as y,p as V,q as $,s as C,x as P,y as N,z as A,A as L,m as E}from"./app.3f2b4c4b.js";const S={class:"container"},B=e("p",null,"Profile photo",-1),D=["src"],F=e("label",{for:"user",class:"username"},"Username",-1),T=e("label",{for:"first",class:"firstname"},"Firstname",-1),j=e("label",{for:"last",class:"lastname"},"Lastname",-1),q=e("label",{for:"number"},"Phone Number",-1),z={__name:"Profile",emits:["sendRegistration"],setup(w,{emit:d}){const r=u(),m=u(),v=u(""),_=u(""),l=u(""),t=u(),n=p=>{p.preventDefault(),m.value={image:r.value,username:v.value,firstname:_.value,lastname:l.value,number:t.value},d("sendRegistration",m.value)},o=p=>{let s=p.target.files[0],a=new FileReader;a.readAsDataURL(s),a.addEventListener("load",function(){r.value=a.result})};return(p,s)=>(f(),g("div",null,[e("form",S,[B,i(e("img",{src:r.value,alt:"",width:"250",height:"250",class:"photo"},null,8,D),[[b,r.value]]),e("input",{class:"photo",type:"file",accept:"image/*",onChange:s[0]||(s[0]=a=>o(a))},null,32),F,i(e("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=a=>v.value=a),class:"username"},null,512),[[c,v.value]]),T,i(e("input",{type:"text","onUpdate:modelValue":s[2]||(s[2]=a=>_.value=a),class:"firstname"},null,512),[[c,_.value]]),j,i(e("input",{type:"text","onUpdate:modelValue":s[3]||(s[3]=a=>l.value=a),class:"lastname"},null,512),[[c,l.value]]),q,i(e("input",{type:"number","onUpdate:modelValue":s[4]||(s[4]=a=>t.value=a),class:"phone"},null,512),[[c,t.value]]),e("p",null,[e("button",{onClick:n},"Submit")])])]))}},M=e("h1",null,"Create an Account",-1),W={key:0},G={style:{"text-decoration":"none"}},H=y("Already have an account? "),I=y("Login!"),K={__name:"Register",setup(w){const d=u(!1),r=u(""),m=u(""),v=x(),_=l=>{const t=V();$(t,r.value,m.value).then(n=>{if(l.image){const o=C(),p=P(o,`images/${n.user.uid}.jpg`);N(p,l.image,"data_url").then(s=>{A(s.ref).then(a=>{n.photoURL=a})})}n.displayName=l.username,n.phoneNumber=l.number,v.push("/feed"),L(t.currentUser)}).catch(n=>{console.log(n.code),alert(n.message)})};return(l,t)=>{const n=E("router-link");return f(),g(R,null,[M,d.value?k("",!0):(f(),g("form",W,[e("p",null,[i(e("input",{type:"text",autocomplete:"email",placeholder:"Email","onUpdate:modelValue":t[0]||(t[0]=o=>r.value=o)},null,512),[[c,r.value]])]),e("p",null,[i(e("input",{type:"password",autocomplete:"current-password",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=o=>m.value=o)},null,512),[[c,m.value]])])])),i(h(z,{onSendRegistration:_},null,512),[[b,d.value]]),e("p",null,[d.value?(f(),g("button",{key:0,onClick:t[2]||(t[2]=o=>d.value=!1)},"Back")):(f(),g("button",{key:1,onClick:t[3]||(t[3]=o=>d.value=!0)},"Register"))]),e("p",G,[H,h(n,{to:"/login"},{default:U(()=>[I]),_:1})])],64)}}};export{K as default};