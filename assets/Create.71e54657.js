import{_ as b,r as d,o as a,c,w as v,v as p,a as s,F as w,u as q,b as g,d as x,e as L,f as k,g as _,h,i as D,j as y,k as F,l as M,t as U,m as B}from"./app.3f2b4c4b.js";const N={emits:["loaded","onloadedmetadata"],props:["show","src","refer"],setup(u,t){const o=d(),e=i=>{o.value=i.target.files[0],r()},r=()=>{let i=document.getElementById("video-preview"),n=new FileReader;n.readAsDataURL(o.value),n.addEventListener("load",function(){i.src=n.result,t.emit("loaded",i.src)})};return{file:o,handleFileUpload:e,previewVideo:r}}},R=["src"];function E(u,t,o,e,r,i){return a(),c(w,null,[v(s("video",{src:o.src,id:"video-preview",controls:"",ref:"refer"},null,8,R),[[p,e.file||!!o.src]]),v(s("input",{type:"file",accept:"video/*",onChange:t[0]||(t[0]=n=>e.handleFileUpload(n))},null,544),[[p,o.show]])],64)}const P=b(N,[["render",E]]);const S={emits:["loaded"],components:{Video:P},setup(){const u=q(),t=g(),o=x(),e=d(""),r=d(""),i=d(""),n=L({videos:[]}),l=d(0);d(0);const C=async f=>{if(f.preventDefault(),e.value){const m=new Date,T=m.getFullYear()+"-"+(m.getMonth()+1)+"-"+m.getDate();u.commit("addPost",{id:o.query.id?o.query.id:0,date:T,title:e.value,content:i.value,video:n}),o.query.id?t.push("/feed"):t.push("/edit-video")}else r.value="Title field required"},V=f=>{n.videos&&n.videos.push(f)};return k(()=>{o.query.title&&(e.value=o.query.title),o.query.content&&(i.value=o.query.content),o.query.video&&(n.videos=o.query.video)}),{publish:C,Title:e,validTitle:r,Content:i,video:n,more:l,setVideo:V}}},j={class:"post"},A=s("h3",null,"Post",-1),I=s("label",{class:"label",for:"Title"},"Title",-1),Y=s("label",{class:"label",for:"Content"},"Content",-1),z=s("label",{class:"label",for:""},"Video",-1),G={class:"more"};function H(u,t,o,e,r,i){const n=B("Video");return a(),c("form",null,[s("div",j,[A,I,v(s("input",{id:"Title","onUpdate:modelValue":t[0]||(t[0]=l=>e.Title=l),type:"text",placeholder:"Title (required)",required:""},null,512),[[_,e.Title]]),Y,v(s("textarea",{id:"Content","onUpdate:modelValue":t[1]||(t[1]=l=>e.Content=l),placeholder:"Text"},null,512),[[_,e.Content]]),z,s("span",null,[h(n,{src:e.video.videos[0],show:!0,onLoaded:e.setVideo},null,8,["src","onLoaded"])]),(a(!0),c(w,null,D(e.more,l=>(a(),c("span",G,[h(n,{src:e.video.videos[l],show:!0,onLoaded:e.setVideo},null,8,["src","onLoaded"])]))),256)),e.more?(a(),c("button",{key:0,onClick:t[2]||(t[2]=y(l=>e.more--,["prevent"]))},"Less")):F("",!0),s("button",{onClick:t[3]||(t[3]=y(l=>e.more++,["prevent"]))},"More"),M(" "+U(e.validTitle)+" ",1),s("button",{onClick:t[4]||(t[4]=(...l)=>e.publish&&e.publish(...l))},"Publish")])])}const K=b(S,[["render",H]]);export{K as default};