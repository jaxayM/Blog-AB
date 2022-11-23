const ov=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};ov();function hu(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const av="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cv=hu(av);function mf(t){return!!t||t===""}function jo(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=qe(s)?hv(s):jo(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(qe(t))return t;if($e(t))return t}}const uv=/;(?![^(]*\))/g,lv=/:(.+)/;function hv(t){const e={};return t.split(uv).forEach(n=>{if(n){const s=n.split(lv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function du(t){let e="";if(qe(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const s=du(t[n]);s&&(e+=s+" ")}else if($e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const nn=t=>qe(t)?t:t==null?"":G(t)||$e(t)&&(t.toString===wf||!Z(t.toString))?JSON.stringify(t,yf,2):String(t),yf=(t,e)=>e&&e.__v_isRef?yf(t,e.value):Ms(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:vf(e)?{[`Set(${e.size})`]:[...e.values()]}:$e(e)&&!G(e)&&!Ef(e)?String(e):e,ve={},Ls=[],Lt=()=>{},dv=()=>!1,fv=/^on[^a-z]/,Ho=t=>fv.test(t),fu=t=>t.startsWith("onUpdate:"),rt=Object.assign,pu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},pv=Object.prototype.hasOwnProperty,ie=(t,e)=>pv.call(t,e),G=Array.isArray,Ms=t=>qo(t)==="[object Map]",vf=t=>qo(t)==="[object Set]",Z=t=>typeof t=="function",qe=t=>typeof t=="string",gu=t=>typeof t=="symbol",$e=t=>t!==null&&typeof t=="object",_f=t=>$e(t)&&Z(t.then)&&Z(t.catch),wf=Object.prototype.toString,qo=t=>wf.call(t),gv=t=>qo(t).slice(8,-1),Ef=t=>qo(t)==="[object Object]",mu=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Zi=hu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ko=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},mv=/-(\w)/g,Xt=Ko(t=>t.replace(mv,(e,n)=>n?n.toUpperCase():"")),yv=/\B([A-Z])/g,tr=Ko(t=>t.replace(yv,"-$1").toLowerCase()),zo=Ko(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ua=Ko(t=>t?`on${zo(t)}`:""),qr=(t,e)=>!Object.is(t,e),eo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ho=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},hc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Yl;const vv=()=>Yl||(Yl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let qt;class bf{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&qt&&(this.parent=qt,this.index=(qt.scopes||(qt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=qt;try{return qt=this,e()}finally{qt=n}}}on(){qt=this}off(){qt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function _v(t){return new bf(t)}function wv(t,e=qt){e&&e.active&&e.effects.push(t)}const yu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},If=t=>(t.w&xn)>0,Tf=t=>(t.n&xn)>0,Ev=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=xn},bv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];If(r)&&!Tf(r)?r.delete(t):e[n++]=r,r.w&=~xn,r.n&=~xn}e.length=n}},dc=new WeakMap;let Er=0,xn=1;const fc=30;let Nt;const ts=Symbol(""),pc=Symbol("");class vu{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,wv(this,s)}run(){if(!this.active)return this.fn();let e=Nt,n=An;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Nt,Nt=this,An=!0,xn=1<<++Er,Er<=fc?Ev(this):Jl(this),this.fn()}finally{Er<=fc&&bv(this),xn=1<<--Er,Nt=this.parent,An=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Nt===this?this.deferStop=!0:this.active&&(Jl(this),this.onStop&&this.onStop(),this.active=!1)}}function Jl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let An=!0;const Sf=[];function nr(){Sf.push(An),An=!1}function sr(){const t=Sf.pop();An=t===void 0?!0:t}function wt(t,e,n){if(An&&Nt){let s=dc.get(t);s||dc.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=yu()),Cf(r)}}function Cf(t,e){let n=!1;Er<=fc?Tf(t)||(t.n|=xn,n=!If(t)):n=!t.has(Nt),n&&(t.add(Nt),Nt.deps.push(t))}function cn(t,e,n,s,r,i){const o=dc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t))o.forEach((c,u)=>{(u==="length"||u>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?mu(n)&&a.push(o.get("length")):(a.push(o.get(ts)),Ms(t)&&a.push(o.get(pc)));break;case"delete":G(t)||(a.push(o.get(ts)),Ms(t)&&a.push(o.get(pc)));break;case"set":Ms(t)&&a.push(o.get(ts));break}if(a.length===1)a[0]&&gc(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);gc(yu(c))}}function gc(t,e){const n=G(t)?t:[...t];for(const s of n)s.computed&&Zl(s);for(const s of n)s.computed||Zl(s)}function Zl(t,e){(t!==Nt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Iv=hu("__proto__,__v_isRef,__isVue"),kf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(gu)),Tv=_u(),Sv=_u(!1,!0),Cv=_u(!0),eh=kv();function kv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ce(this);for(let i=0,o=this.length;i<o;i++)wt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ce)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){nr();const s=ce(this)[e].apply(this,n);return sr(),s}}),t}function _u(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Hv:Nf:e?Of:Df).get(s))return s;const o=G(s);if(!t&&o&&ie(eh,r))return Reflect.get(eh,r,i);const a=Reflect.get(s,r,i);return(gu(r)?kf.has(r):Iv(r))||(t||wt(s,"get",r),e)?a:et(a)?o&&mu(r)?a:a.value:$e(a)?t?Pf(a):Bn(a):a}}const Av=Af(),Rv=Af(!0);function Af(t=!1){return function(n,s,r,i){let o=n[s];if(Kr(o)&&et(o)&&!et(r))return!1;if(!t&&!Kr(r)&&(mc(r)||(r=ce(r),o=ce(o)),!G(n)&&et(o)&&!et(r)))return o.value=r,!0;const a=G(n)&&mu(s)?Number(s)<n.length:ie(n,s),c=Reflect.set(n,s,r,i);return n===ce(i)&&(a?qr(r,o)&&cn(n,"set",s,r):cn(n,"add",s,r)),c}}function Dv(t,e){const n=ie(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&cn(t,"delete",e,void 0),s}function Ov(t,e){const n=Reflect.has(t,e);return(!gu(e)||!kf.has(e))&&wt(t,"has",e),n}function Nv(t){return wt(t,"iterate",G(t)?"length":ts),Reflect.ownKeys(t)}const Rf={get:Tv,set:Av,deleteProperty:Dv,has:Ov,ownKeys:Nv},Pv={get:Cv,set(t,e){return!0},deleteProperty(t,e){return!0}},xv=rt({},Rf,{get:Sv,set:Rv}),wu=t=>t,Wo=t=>Reflect.getPrototypeOf(t);function Fi(t,e,n=!1,s=!1){t=t.__v_raw;const r=ce(t),i=ce(e);n||(e!==i&&wt(r,"get",e),wt(r,"get",i));const{has:o}=Wo(r),a=s?wu:n?Iu:zr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Vi(t,e=!1){const n=this.__v_raw,s=ce(n),r=ce(t);return e||(t!==r&&wt(s,"has",t),wt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function $i(t,e=!1){return t=t.__v_raw,!e&&wt(ce(t),"iterate",ts),Reflect.get(t,"size",t)}function th(t){t=ce(t);const e=ce(this);return Wo(e).has.call(e,t)||(e.add(t),cn(e,"add",t,t)),this}function nh(t,e){e=ce(e);const n=ce(this),{has:s,get:r}=Wo(n);let i=s.call(n,t);i||(t=ce(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?qr(e,o)&&cn(n,"set",t,e):cn(n,"add",t,e),this}function sh(t){const e=ce(this),{has:n,get:s}=Wo(e);let r=n.call(e,t);r||(t=ce(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&cn(e,"delete",t,void 0),i}function rh(){const t=ce(this),e=t.size!==0,n=t.clear();return e&&cn(t,"clear",void 0,void 0),n}function Bi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ce(o),c=e?wu:t?Iu:zr;return!t&&wt(a,"iterate",ts),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function ji(t,e,n){return function(...s){const r=this.__v_raw,i=ce(r),o=Ms(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),l=n?wu:e?Iu:zr;return!e&&wt(i,"iterate",c?pc:ts),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function mn(t){return function(...e){return t==="delete"?!1:this}}function Lv(){const t={get(i){return Fi(this,i)},get size(){return $i(this)},has:Vi,add:th,set:nh,delete:sh,clear:rh,forEach:Bi(!1,!1)},e={get(i){return Fi(this,i,!1,!0)},get size(){return $i(this)},has:Vi,add:th,set:nh,delete:sh,clear:rh,forEach:Bi(!1,!0)},n={get(i){return Fi(this,i,!0)},get size(){return $i(this,!0)},has(i){return Vi.call(this,i,!0)},add:mn("add"),set:mn("set"),delete:mn("delete"),clear:mn("clear"),forEach:Bi(!0,!1)},s={get(i){return Fi(this,i,!0,!0)},get size(){return $i(this,!0)},has(i){return Vi.call(this,i,!0)},add:mn("add"),set:mn("set"),delete:mn("delete"),clear:mn("clear"),forEach:Bi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ji(i,!1,!1),n[i]=ji(i,!0,!1),e[i]=ji(i,!1,!0),s[i]=ji(i,!0,!0)}),[t,n,e,s]}const[Mv,Uv,Fv,Vv]=Lv();function Eu(t,e){const n=e?t?Vv:Fv:t?Uv:Mv;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ie(n,r)&&r in s?n:s,r,i)}const $v={get:Eu(!1,!1)},Bv={get:Eu(!1,!0)},jv={get:Eu(!0,!1)},Df=new WeakMap,Of=new WeakMap,Nf=new WeakMap,Hv=new WeakMap;function qv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kv(t){return t.__v_skip||!Object.isExtensible(t)?0:qv(gv(t))}function Bn(t){return Kr(t)?t:bu(t,!1,Rf,$v,Df)}function zv(t){return bu(t,!1,xv,Bv,Of)}function Pf(t){return bu(t,!0,Pv,jv,Nf)}function bu(t,e,n,s,r){if(!$e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Kv(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Us(t){return Kr(t)?Us(t.__v_raw):!!(t&&t.__v_isReactive)}function Kr(t){return!!(t&&t.__v_isReadonly)}function mc(t){return!!(t&&t.__v_isShallow)}function xf(t){return Us(t)||Kr(t)}function ce(t){const e=t&&t.__v_raw;return e?ce(e):t}function Lf(t){return ho(t,"__v_skip",!0),t}const zr=t=>$e(t)?Bn(t):t,Iu=t=>$e(t)?Pf(t):t;function Mf(t){An&&Nt&&(t=ce(t),Cf(t.dep||(t.dep=yu())))}function Uf(t,e){t=ce(t),t.dep&&gc(t.dep)}function et(t){return!!(t&&t.__v_isRef===!0)}function fe(t){return Ff(t,!1)}function Wv(t){return Ff(t,!0)}function Ff(t,e){return et(t)?t:new Gv(t,e)}class Gv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ce(e),this._value=n?e:zr(e)}get value(){return Mf(this),this._value}set value(e){e=this.__v_isShallow?e:ce(e),qr(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:zr(e),Uf(this))}}function Fs(t){return et(t)?t.value:t}const Qv={get:(t,e,n)=>Fs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return et(r)&&!et(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Vf(t){return Us(t)?t:new Proxy(t,Qv)}class Xv{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new vu(e,()=>{this._dirty||(this._dirty=!0,Uf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ce(this);return Mf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Yv(t,e,n=!1){let s,r;const i=Z(t);return i?(s=t,r=Lt):(s=t.get,r=t.set),new Xv(s,r,i||!r,n)}function Rn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Go(i,e,n)}return r}function Ct(t,e,n,s){if(Z(t)){const i=Rn(t,e,n,s);return i&&_f(i)&&i.catch(o=>{Go(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Ct(t[i],e,n,s));return r}function Go(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Rn(c,null,10,[t,o,a]);return}}Jv(t,n,r,s)}function Jv(t,e,n,s=!0){console.error(t)}let fo=!1,yc=!1;const vt=[];let tn=0;const Rr=[];let br=null,ks=0;const Dr=[];let _n=null,As=0;const $f=Promise.resolve();let Tu=null,vc=null;function Bf(t){const e=Tu||$f;return t?e.then(this?t.bind(this):t):e}function Zv(t){let e=tn+1,n=vt.length;for(;e<n;){const s=e+n>>>1;Wr(vt[s])<t?e=s+1:n=s}return e}function jf(t){(!vt.length||!vt.includes(t,fo&&t.allowRecurse?tn+1:tn))&&t!==vc&&(t.id==null?vt.push(t):vt.splice(Zv(t.id),0,t),Hf())}function Hf(){!fo&&!yc&&(yc=!0,Tu=$f.then(zf))}function e_(t){const e=vt.indexOf(t);e>tn&&vt.splice(e,1)}function qf(t,e,n,s){G(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),Hf()}function t_(t){qf(t,br,Rr,ks)}function n_(t){qf(t,_n,Dr,As)}function Qo(t,e=null){if(Rr.length){for(vc=e,br=[...new Set(Rr)],Rr.length=0,ks=0;ks<br.length;ks++)br[ks]();br=null,ks=0,vc=null,Qo(t,e)}}function Kf(t){if(Qo(),Dr.length){const e=[...new Set(Dr)];if(Dr.length=0,_n){_n.push(...e);return}for(_n=e,_n.sort((n,s)=>Wr(n)-Wr(s)),As=0;As<_n.length;As++)_n[As]();_n=null,As=0}}const Wr=t=>t.id==null?1/0:t.id;function zf(t){yc=!1,fo=!0,Qo(t),vt.sort((n,s)=>Wr(n)-Wr(s));const e=Lt;try{for(tn=0;tn<vt.length;tn++){const n=vt[tn];n&&n.active!==!1&&Rn(n,null,14)}}finally{tn=0,vt.length=0,Kf(),fo=!1,Tu=null,(vt.length||Rr.length||Dr.length)&&zf(t)}}function s_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ve;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[l]||ve;d&&(r=n.map(p=>p.trim())),h&&(r=n.map(hc))}let a,c=s[a=Ua(e)]||s[a=Ua(Xt(e))];!c&&i&&(c=s[a=Ua(tr(e))]),c&&Ct(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ct(u,t,6,r)}}function Wf(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Z(t)){const c=u=>{const l=Wf(u,e,!0);l&&(a=!0,rt(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(s.set(t,null),null):(G(i)?i.forEach(c=>o[c]=null):rt(o,i),s.set(t,o),o)}function Xo(t,e){return!t||!Ho(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,tr(e))||ie(t,e))}let tt=null,Gf=null;function po(t){const e=tt;return tt=t,Gf=t&&t.type.__scopeId||null,e}function Tt(t,e=tt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&mh(-1);const i=po(e),o=t(...r);return po(i),s._d&&mh(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Fa(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:p,ctx:m,inheritAttrs:_}=t;let v,T;const O=po(t);try{if(n.shapeFlag&4){const U=r||s;v=Kt(l.call(U,U,h,i,p,d,m)),T=c}else{const U=e;v=Kt(U.length>1?U(i,{attrs:c,slots:a,emit:u}):U(i,null)),T=e.props?c:r_(c)}}catch(U){Nr.length=0,Go(U,t,1),v=Se(kt)}let $=v;if(T&&_!==!1){const U=Object.keys(T),{shapeFlag:se}=$;U.length&&se&7&&(o&&U.some(fu)&&(T=i_(T,o)),$=Mn($,T))}return n.dirs&&($=Mn($),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&($.transition=n.transition),v=$,po(O),v}const r_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ho(n))&&((e||(e={}))[n]=t[n]);return e},i_=(t,e)=>{const n={};for(const s in t)(!fu(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function o_(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?ih(s,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==s[d]&&!Xo(u,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ih(s,o,u):!0:!!o;return!1}function ih(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Xo(n,i))return!0}return!1}function a_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const c_=t=>t.__isSuspense;function u_(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):n_(t)}function to(t,e){if(He){let n=He.provides;const s=He.parent&&He.parent.provides;s===n&&(n=He.provides=Object.create(s)),n[t]=e}}function Mt(t,e,n=!1){const s=He||tt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Z(e)?e.call(s.proxy):e}}function l_(t,e){return Su(t,null,e)}const oh={};function Vs(t,e,n){return Su(t,e,n)}function Su(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ve){const a=He;let c,u=!1,l=!1;if(et(t)?(c=()=>t.value,u=mc(t)):Us(t)?(c=()=>t,s=!0):G(t)?(l=!0,u=t.some(T=>Us(T)||mc(T)),c=()=>t.map(T=>{if(et(T))return T.value;if(Us(T))return Yn(T);if(Z(T))return Rn(T,a,2)})):Z(t)?e?c=()=>Rn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ct(t,a,3,[d])}:c=Lt,e&&s){const T=c;c=()=>Yn(T())}let h,d=T=>{h=v.onStop=()=>{Rn(T,a,4)}};if(Xr)return d=Lt,e?n&&Ct(e,a,3,[c(),l?[]:void 0,d]):c(),Lt;let p=l?[]:oh;const m=()=>{if(!!v.active)if(e){const T=v.run();(s||u||(l?T.some((O,$)=>qr(O,p[$])):qr(T,p)))&&(h&&h(),Ct(e,a,3,[T,p===oh?void 0:p,d]),p=T)}else v.run()};m.allowRecurse=!!e;let _;r==="sync"?_=m:r==="post"?_=()=>ht(m,a&&a.suspense):_=()=>t_(m);const v=new vu(c,_);return e?n?m():p=v.run():r==="post"?ht(v.run.bind(v),a&&a.suspense):v.run(),()=>{v.stop(),a&&a.scope&&pu(a.scope.effects,v)}}function h_(t,e,n){const s=this.proxy,r=qe(t)?t.includes(".")?Qf(s,t):()=>s[t]:t.bind(s,s);let i;Z(e)?i=e:(i=e.handler,n=e);const o=He;qs(this);const a=Su(r,i.bind(s),n);return o?qs(o):ns(),a}function Qf(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Yn(t,e){if(!$e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),et(t))Yn(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)Yn(t[n],e);else if(vf(t)||Ms(t))t.forEach(n=>{Yn(n,e)});else if(Ef(t))for(const n in t)Yn(t[n],e);return t}function d_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return pi(()=>{t.isMounted=!0}),ep(()=>{t.isUnmounting=!0}),t}const It=[Function,Array],f_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:It,onEnter:It,onAfterEnter:It,onEnterCancelled:It,onBeforeLeave:It,onLeave:It,onAfterLeave:It,onLeaveCancelled:It,onBeforeAppear:It,onAppear:It,onAfterAppear:It,onAppearCancelled:It},setup(t,{slots:e}){const n=Y_(),s=d_();let r;return()=>{const i=e.default&&Yf(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const _ of i)if(_.type!==kt){o=_;break}}const a=ce(t),{mode:c}=a;if(s.isLeaving)return Va(o);const u=ah(o);if(!u)return Va(o);const l=_c(u,a,s,n);wc(u,l);const h=n.subTree,d=h&&ah(h);let p=!1;const{getTransitionKey:m}=u.type;if(m){const _=m();r===void 0?r=_:_!==r&&(r=_,p=!0)}if(d&&d.type!==kt&&(!Qn(u,d)||p)){const _=_c(d,a,s,n);if(wc(d,_),c==="out-in")return s.isLeaving=!0,_.afterLeave=()=>{s.isLeaving=!1,n.update()},Va(o);c==="in-out"&&u.type!==kt&&(_.delayLeave=(v,T,O)=>{const $=Xf(s,d);$[String(d.key)]=d,v._leaveCb=()=>{T(),v._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=O})}return o}}},p_=f_;function Xf(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function _c(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:_,onAppear:v,onAfterAppear:T,onAppearCancelled:O}=e,$=String(t.key),U=Xf(n,t),se=(J,le)=>{J&&Ct(J,s,9,le)},_e=(J,le)=>{const Ie=le[1];se(J,le),G(J)?J.every(ze=>ze.length<=1)&&Ie():J.length<=1&&Ie()},Ne={mode:i,persisted:o,beforeEnter(J){let le=a;if(!n.isMounted)if(r)le=_||a;else return;J._leaveCb&&J._leaveCb(!0);const Ie=U[$];Ie&&Qn(t,Ie)&&Ie.el._leaveCb&&Ie.el._leaveCb(),se(le,[J])},enter(J){let le=c,Ie=u,ze=l;if(!n.isMounted)if(r)le=v||c,Ie=T||u,ze=O||l;else return;let We=!1;const Dt=J._enterCb=gn=>{We||(We=!0,gn?se(ze,[J]):se(Ie,[J]),Ne.delayedLeave&&Ne.delayedLeave(),J._enterCb=void 0)};le?_e(le,[J,Dt]):Dt()},leave(J,le){const Ie=String(t.key);if(J._enterCb&&J._enterCb(!0),n.isUnmounting)return le();se(h,[J]);let ze=!1;const We=J._leaveCb=Dt=>{ze||(ze=!0,le(),Dt?se(m,[J]):se(p,[J]),J._leaveCb=void 0,U[Ie]===t&&delete U[Ie])};U[Ie]=t,d?_e(d,[J,We]):We()},clone(J){return _c(J,e,n,s)}};return Ne}function Va(t){if(Yo(t))return t=Mn(t),t.children=null,t}function ah(t){return Yo(t)?t.children?t.children[0]:void 0:t}function wc(t,e){t.shapeFlag&6&&t.component?wc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Yf(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Re?(o.patchFlag&128&&r++,s=s.concat(Yf(o.children,e,a))):(e||o.type!==kt)&&s.push(a!=null?Mn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Jf(t){return Z(t)?{setup:t,name:t.name}:t}const Or=t=>!!t.type.__asyncLoader,Yo=t=>t.type.__isKeepAlive;function g_(t,e){Zf(t,"a",e)}function m_(t,e){Zf(t,"da",e)}function Zf(t,e,n=He){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Jo(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Yo(r.parent.vnode)&&y_(s,e,n,r),r=r.parent}}function y_(t,e,n,s){const r=Jo(e,t,s,!0);tp(()=>{pu(s[e],r)},n)}function Jo(t,e,n=He,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;nr(),qs(n);const a=Ct(e,n,t,o);return ns(),sr(),a});return s?r.unshift(i):r.push(i),i}}const pn=t=>(e,n=He)=>(!Xr||t==="sp")&&Jo(t,e,n),v_=pn("bm"),pi=pn("m"),__=pn("bu"),w_=pn("u"),ep=pn("bum"),tp=pn("um"),E_=pn("sp"),b_=pn("rtg"),I_=pn("rtc");function T_(t,e=He){Jo("ec",t,e)}function Me(t,e){const n=tt;if(n===null)return t;const s=ea(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=ve]=e[i];Z(o)&&(o={mounted:o,updated:o}),o.deep&&Yn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u})}return t}function Kn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(nr(),Ct(c,n,8,[t.el,a,t,e]),sr())}}const np="components";function Ln(t,e){return C_(np,t,!0,e)||t}const S_=Symbol();function C_(t,e,n=!0,s=!1){const r=tt||He;if(r){const i=r.type;if(t===np){const a=nw(i,!1);if(a&&(a===e||a===Xt(e)||a===zo(Xt(e))))return i}const o=ch(r[t]||i[t],e)||ch(r.appContext[t],e);return!o&&s?i:o}}function ch(t,e){return t&&(t[e]||t[Xt(e)]||t[zo(Xt(e))])}function Cu(t,e,n,s){let r;const i=n&&n[s];if(G(t)||qe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if($e(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];r[a]=e(t[u],u,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function uh(t,e,n={},s,r){if(tt.isCE||tt.parent&&Or(tt.parent)&&tt.parent.isCE)return Se("slot",e==="default"?null:{name:e},s&&s());let i=t[e];i&&i._c&&(i._d=!1),pe();const o=i&&sp(i(n)),a=Qr(Re,{key:n.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function sp(t){return t.some(e=>yo(e)?!(e.type===kt||e.type===Re&&!sp(e.children)):!0)?t:null}const Ec=t=>t?gp(t)?ea(t)||t.proxy:Ec(t.parent):null,go=rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ec(t.parent),$root:t=>Ec(t.root),$emit:t=>t.emit,$options:t=>ip(t),$forceUpdate:t=>t.f||(t.f=()=>jf(t.update)),$nextTick:t=>t.n||(t.n=Bf.bind(t.proxy)),$watch:t=>h_.bind(t)}),k_={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==ve&&ie(s,e))return o[e]=1,s[e];if(r!==ve&&ie(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&ie(u,e))return o[e]=3,i[e];if(n!==ve&&ie(n,e))return o[e]=4,n[e];bc&&(o[e]=0)}}const l=go[e];let h,d;if(l)return e==="$attrs"&&wt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ve&&ie(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ie(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==ve&&ie(r,e)?(r[e]=n,!0):s!==ve&&ie(s,e)?(s[e]=n,!0):ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ve&&ie(t,o)||e!==ve&&ie(e,o)||(a=i[0])&&ie(a,o)||ie(s,o)||ie(go,o)||ie(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let bc=!0;function A_(t){const e=ip(t),n=t.proxy,s=t.ctx;bc=!1,e.beforeCreate&&lh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:p,updated:m,activated:_,deactivated:v,beforeDestroy:T,beforeUnmount:O,destroyed:$,unmounted:U,render:se,renderTracked:_e,renderTriggered:Ne,errorCaptured:J,serverPrefetch:le,expose:Ie,inheritAttrs:ze,components:We,directives:Dt,filters:gn}=e;if(u&&R_(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const we in o){const ge=o[we];Z(ge)&&(s[we]=ge.bind(n))}if(r){const we=r.call(n,n);$e(we)&&(t.data=Bn(we))}if(bc=!0,i)for(const we in i){const ge=i[we],mt=Z(ge)?ge.bind(n,n):Z(ge.get)?ge.get.bind(n,n):Lt,Es=!Z(ge)&&Z(ge.set)?ge.set.bind(n):Lt,Zt=dt({get:mt,set:Es});Object.defineProperty(s,we,{enumerable:!0,configurable:!0,get:()=>Zt.value,set:Bt=>Zt.value=Bt})}if(a)for(const we in a)rp(a[we],s,n,we);if(c){const we=Z(c)?c.call(n):c;Reflect.ownKeys(we).forEach(ge=>{to(ge,we[ge])})}l&&lh(l,t,"c");function Ue(we,ge){G(ge)?ge.forEach(mt=>we(mt.bind(n))):ge&&we(ge.bind(n))}if(Ue(v_,h),Ue(pi,d),Ue(__,p),Ue(w_,m),Ue(g_,_),Ue(m_,v),Ue(T_,J),Ue(I_,_e),Ue(b_,Ne),Ue(ep,O),Ue(tp,U),Ue(E_,le),G(Ie))if(Ie.length){const we=t.exposed||(t.exposed={});Ie.forEach(ge=>{Object.defineProperty(we,ge,{get:()=>n[ge],set:mt=>n[ge]=mt})})}else t.exposed||(t.exposed={});se&&t.render===Lt&&(t.render=se),ze!=null&&(t.inheritAttrs=ze),We&&(t.components=We),Dt&&(t.directives=Dt)}function R_(t,e,n=Lt,s=!1){G(t)&&(t=Ic(t));for(const r in t){const i=t[r];let o;$e(i)?"default"in i?o=Mt(i.from||r,i.default,!0):o=Mt(i.from||r):o=Mt(i),et(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function lh(t,e,n){Ct(G(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function rp(t,e,n,s){const r=s.includes(".")?Qf(n,s):()=>n[s];if(qe(t)){const i=e[t];Z(i)&&Vs(r,i)}else if(Z(t))Vs(r,t.bind(n));else if($e(t))if(G(t))t.forEach(i=>rp(i,e,n,s));else{const i=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(i)&&Vs(r,i,t)}}function ip(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>mo(c,u,o,!0)),mo(c,e,o)),i.set(e,c),c}function mo(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&mo(t,i,n,!0),r&&r.forEach(o=>mo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=D_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const D_={data:hh,props:Wn,emits:Wn,methods:Wn,computed:Wn,beforeCreate:ut,created:ut,beforeMount:ut,mounted:ut,beforeUpdate:ut,updated:ut,beforeDestroy:ut,beforeUnmount:ut,destroyed:ut,unmounted:ut,activated:ut,deactivated:ut,errorCaptured:ut,serverPrefetch:ut,components:Wn,directives:Wn,watch:N_,provide:hh,inject:O_};function hh(t,e){return e?t?function(){return rt(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function O_(t,e){return Wn(Ic(t),Ic(e))}function Ic(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ut(t,e){return t?[...new Set([].concat(t,e))]:e}function Wn(t,e){return t?rt(rt(Object.create(null),t),e):e}function N_(t,e){if(!t)return e;if(!e)return t;const n=rt(Object.create(null),t);for(const s in e)n[s]=ut(t[s],e[s]);return n}function P_(t,e,n,s=!1){const r={},i={};ho(i,Zo,1),t.propsDefaults=Object.create(null),op(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:zv(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function x_(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ce(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(Xo(t.emitsOptions,d))continue;const p=e[d];if(c)if(ie(i,d))p!==i[d]&&(i[d]=p,u=!0);else{const m=Xt(d);r[m]=Tc(c,a,m,p,t,!1)}else p!==i[d]&&(i[d]=p,u=!0)}}}else{op(t,e,r,i)&&(u=!0);let l;for(const h in a)(!e||!ie(e,h)&&((l=tr(h))===h||!ie(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(r[h]=Tc(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ie(e,h)&&!0)&&(delete i[h],u=!0)}u&&cn(t,"set","$attrs")}function op(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Zi(c))continue;const u=e[c];let l;r&&ie(r,l=Xt(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:Xo(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=ce(n),u=a||ve;for(let l=0;l<i.length;l++){const h=i[l];n[h]=Tc(r,c,h,u[h],t,!ie(u,h))}}return o}function Tc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ie(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&Z(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(qs(r),s=u[n]=c.call(null,e),ns())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===tr(n))&&(s=!0))}return s}function ap(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Z(t)){const l=h=>{c=!0;const[d,p]=ap(h,e,!0);rt(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return s.set(t,Ls),Ls;if(G(i))for(let l=0;l<i.length;l++){const h=Xt(i[l]);dh(h)&&(o[h]=ve)}else if(i)for(const l in i){const h=Xt(l);if(dh(h)){const d=i[l],p=o[h]=G(d)||Z(d)?{type:d}:d;if(p){const m=gh(Boolean,p.type),_=gh(String,p.type);p[0]=m>-1,p[1]=_<0||m<_,(m>-1||ie(p,"default"))&&a.push(h)}}}const u=[o,a];return s.set(t,u),u}function dh(t){return t[0]!=="$"}function fh(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function ph(t,e){return fh(t)===fh(e)}function gh(t,e){return G(e)?e.findIndex(n=>ph(n,t)):Z(e)&&ph(e,t)?0:-1}const cp=t=>t[0]==="_"||t==="$stable",ku=t=>G(t)?t.map(Kt):[Kt(t)],L_=(t,e,n)=>{if(e._n)return e;const s=Tt((...r)=>ku(e(...r)),n);return s._c=!1,s},up=(t,e,n)=>{const s=t._ctx;for(const r in t){if(cp(r))continue;const i=t[r];if(Z(i))e[r]=L_(r,i,s);else if(i!=null){const o=ku(i);e[r]=()=>o}}},lp=(t,e)=>{const n=ku(e);t.slots.default=()=>n},M_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ce(e),ho(e,"_",n)):up(e,t.slots={})}else t.slots={},e&&lp(t,e);ho(t.slots,Zo,1)},U_=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ve;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(rt(r,e),!n&&a===1&&delete r._):(i=!e.$stable,up(e,r)),o=e}else e&&(lp(t,e),o={default:1});if(i)for(const a in r)!cp(a)&&!(a in o)&&delete r[a]};function hp(){return{app:null,config:{isNativeTag:dv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let F_=0;function V_(t,e){return function(s,r=null){Z(s)||(s=Object.assign({},s)),r!=null&&!$e(r)&&(r=null);const i=hp(),o=new Set;let a=!1;const c=i.app={_uid:F_++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:rw,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&Z(u.install)?(o.add(u),u.install(c,...l)):Z(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const d=Se(s,r);return d.appContext=i,l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,ea(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function Sc(t,e,n,s,r=!1){if(G(t)){t.forEach((d,p)=>Sc(d,e&&(G(e)?e[p]:e),n,s,r));return}if(Or(s)&&!r)return;const i=s.shapeFlag&4?ea(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===ve?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(qe(u)?(l[u]=null,ie(h,u)&&(h[u]=null)):et(u)&&(u.value=null)),Z(c))Rn(c,a,12,[o,l]);else{const d=qe(c),p=et(c);if(d||p){const m=()=>{if(t.f){const _=d?l[c]:c.value;r?G(_)&&pu(_,i):G(_)?_.includes(i)||_.push(i):d?(l[c]=[i],ie(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,ie(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(l[t.k]=o))};o?(m.id=-1,ht(m,n)):m()}}}const ht=u_;function $_(t){return B_(t)}function B_(t,e){const n=vv();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:p=Lt,cloneNode:m,insertStaticContent:_}=t,v=(f,g,y,b=null,E=null,A=null,N=!1,k=null,R=!!g.dynamicChildren)=>{if(f===g)return;f&&!Qn(f,g)&&(b=F(f),bt(f,E,A,!0),f=null),g.patchFlag===-2&&(R=!1,g.dynamicChildren=null);const{type:I,ref:B,shapeFlag:x}=g;switch(I){case Au:T(f,g,y,b);break;case kt:O(f,g,y,b);break;case $a:f==null&&$(g,y,b,N);break;case Re:Dt(f,g,y,b,E,A,N,k,R);break;default:x&1?_e(f,g,y,b,E,A,N,k,R):x&6?gn(f,g,y,b,E,A,N,k,R):(x&64||x&128)&&I.process(f,g,y,b,E,A,N,k,R,Ee)}B!=null&&E&&Sc(B,f&&f.ref,A,g||f,!g)},T=(f,g,y,b)=>{if(f==null)s(g.el=a(g.children),y,b);else{const E=g.el=f.el;g.children!==f.children&&u(E,g.children)}},O=(f,g,y,b)=>{f==null?s(g.el=c(g.children||""),y,b):g.el=f.el},$=(f,g,y,b)=>{[f.el,f.anchor]=_(f.children,g,y,b,f.el,f.anchor)},U=({el:f,anchor:g},y,b)=>{let E;for(;f&&f!==g;)E=d(f),s(f,y,b),f=E;s(g,y,b)},se=({el:f,anchor:g})=>{let y;for(;f&&f!==g;)y=d(f),r(f),f=y;r(g)},_e=(f,g,y,b,E,A,N,k,R)=>{N=N||g.type==="svg",f==null?Ne(g,y,b,E,A,N,k,R):Ie(f,g,E,A,N,k,R)},Ne=(f,g,y,b,E,A,N,k)=>{let R,I;const{type:B,props:x,shapeFlag:j,transition:W,patchFlag:oe,dirs:me}=f;if(f.el&&m!==void 0&&oe===-1)R=f.el=m(f.el);else{if(R=f.el=o(f.type,A,x&&x.is,x),j&8?l(R,f.children):j&16&&le(f.children,R,null,b,E,A&&B!=="foreignObject",N,k),me&&Kn(f,null,b,"created"),x){for(const Te in x)Te!=="value"&&!Zi(Te)&&i(R,Te,null,x[Te],A,f.children,b,E,D);"value"in x&&i(R,"value",null,x.value),(I=x.onVnodeBeforeMount)&&Ht(I,b,f)}J(R,f,f.scopeId,N,b)}me&&Kn(f,null,b,"beforeMount");const ye=(!E||E&&!E.pendingBranch)&&W&&!W.persisted;ye&&W.beforeEnter(R),s(R,g,y),((I=x&&x.onVnodeMounted)||ye||me)&&ht(()=>{I&&Ht(I,b,f),ye&&W.enter(R),me&&Kn(f,null,b,"mounted")},E)},J=(f,g,y,b,E)=>{if(y&&p(f,y),b)for(let A=0;A<b.length;A++)p(f,b[A]);if(E){let A=E.subTree;if(g===A){const N=E.vnode;J(f,N,N.scopeId,N.slotScopeIds,E.parent)}}},le=(f,g,y,b,E,A,N,k,R=0)=>{for(let I=R;I<f.length;I++){const B=f[I]=k?wn(f[I]):Kt(f[I]);v(null,B,g,y,b,E,A,N,k)}},Ie=(f,g,y,b,E,A,N)=>{const k=g.el=f.el;let{patchFlag:R,dynamicChildren:I,dirs:B}=g;R|=f.patchFlag&16;const x=f.props||ve,j=g.props||ve;let W;y&&zn(y,!1),(W=j.onVnodeBeforeUpdate)&&Ht(W,y,g,f),B&&Kn(g,f,y,"beforeUpdate"),y&&zn(y,!0);const oe=E&&g.type!=="foreignObject";if(I?ze(f.dynamicChildren,I,k,y,b,oe,A):N||mt(f,g,k,null,y,b,oe,A,!1),R>0){if(R&16)We(k,g,x,j,y,b,E);else if(R&2&&x.class!==j.class&&i(k,"class",null,j.class,E),R&4&&i(k,"style",x.style,j.style,E),R&8){const me=g.dynamicProps;for(let ye=0;ye<me.length;ye++){const Te=me[ye],Ot=x[Te],bs=j[Te];(bs!==Ot||Te==="value")&&i(k,Te,Ot,bs,E,f.children,y,b,D)}}R&1&&f.children!==g.children&&l(k,g.children)}else!N&&I==null&&We(k,g,x,j,y,b,E);((W=j.onVnodeUpdated)||B)&&ht(()=>{W&&Ht(W,y,g,f),B&&Kn(g,f,y,"updated")},b)},ze=(f,g,y,b,E,A,N)=>{for(let k=0;k<g.length;k++){const R=f[k],I=g[k],B=R.el&&(R.type===Re||!Qn(R,I)||R.shapeFlag&70)?h(R.el):y;v(R,I,B,null,b,E,A,N,!0)}},We=(f,g,y,b,E,A,N)=>{if(y!==b){for(const k in b){if(Zi(k))continue;const R=b[k],I=y[k];R!==I&&k!=="value"&&i(f,k,I,R,N,g.children,E,A,D)}if(y!==ve)for(const k in y)!Zi(k)&&!(k in b)&&i(f,k,y[k],null,N,g.children,E,A,D);"value"in b&&i(f,"value",y.value,b.value)}},Dt=(f,g,y,b,E,A,N,k,R)=>{const I=g.el=f?f.el:a(""),B=g.anchor=f?f.anchor:a("");let{patchFlag:x,dynamicChildren:j,slotScopeIds:W}=g;W&&(k=k?k.concat(W):W),f==null?(s(I,y,b),s(B,y,b),le(g.children,y,B,E,A,N,k,R)):x>0&&x&64&&j&&f.dynamicChildren?(ze(f.dynamicChildren,j,y,E,A,N,k),(g.key!=null||E&&g===E.subTree)&&dp(f,g,!0)):mt(f,g,y,B,E,A,N,k,R)},gn=(f,g,y,b,E,A,N,k,R)=>{g.slotScopeIds=k,f==null?g.shapeFlag&512?E.ctx.activate(g,y,b,N,R):ws(g,y,b,E,A,N,R):Ue(f,g,R)},ws=(f,g,y,b,E,A,N)=>{const k=f.component=X_(f,b,E);if(Yo(f)&&(k.ctx.renderer=Ee),J_(k),k.asyncDep){if(E&&E.registerDep(k,we),!f.el){const R=k.subTree=Se(kt);O(null,R,g,y)}return}we(k,f,g,y,E,A,N)},Ue=(f,g,y)=>{const b=g.component=f.component;if(o_(f,g,y))if(b.asyncDep&&!b.asyncResolved){ge(b,g,y);return}else b.next=g,e_(b.update),b.update();else g.el=f.el,b.vnode=g},we=(f,g,y,b,E,A,N)=>{const k=()=>{if(f.isMounted){let{next:B,bu:x,u:j,parent:W,vnode:oe}=f,me=B,ye;zn(f,!1),B?(B.el=oe.el,ge(f,B,N)):B=oe,x&&eo(x),(ye=B.props&&B.props.onVnodeBeforeUpdate)&&Ht(ye,W,B,oe),zn(f,!0);const Te=Fa(f),Ot=f.subTree;f.subTree=Te,v(Ot,Te,h(Ot.el),F(Ot),f,E,A),B.el=Te.el,me===null&&a_(f,Te.el),j&&ht(j,E),(ye=B.props&&B.props.onVnodeUpdated)&&ht(()=>Ht(ye,W,B,oe),E)}else{let B;const{el:x,props:j}=g,{bm:W,m:oe,parent:me}=f,ye=Or(g);if(zn(f,!1),W&&eo(W),!ye&&(B=j&&j.onVnodeBeforeMount)&&Ht(B,me,g),zn(f,!0),x&&X){const Te=()=>{f.subTree=Fa(f),X(x,f.subTree,f,E,null)};ye?g.type.__asyncLoader().then(()=>!f.isUnmounted&&Te()):Te()}else{const Te=f.subTree=Fa(f);v(null,Te,y,b,f,E,A),g.el=Te.el}if(oe&&ht(oe,E),!ye&&(B=j&&j.onVnodeMounted)){const Te=g;ht(()=>Ht(B,me,Te),E)}(g.shapeFlag&256||me&&Or(me.vnode)&&me.vnode.shapeFlag&256)&&f.a&&ht(f.a,E),f.isMounted=!0,g=y=b=null}},R=f.effect=new vu(k,()=>jf(I),f.scope),I=f.update=()=>R.run();I.id=f.uid,zn(f,!0),I()},ge=(f,g,y)=>{g.component=f;const b=f.vnode.props;f.vnode=g,f.next=null,x_(f,g.props,b,y),U_(f,g.children,y),nr(),Qo(void 0,f.update),sr()},mt=(f,g,y,b,E,A,N,k,R=!1)=>{const I=f&&f.children,B=f?f.shapeFlag:0,x=g.children,{patchFlag:j,shapeFlag:W}=g;if(j>0){if(j&128){Zt(I,x,y,b,E,A,N,k,R);return}else if(j&256){Es(I,x,y,b,E,A,N,k,R);return}}W&8?(B&16&&D(I,E,A),x!==I&&l(y,x)):B&16?W&16?Zt(I,x,y,b,E,A,N,k,R):D(I,E,A,!0):(B&8&&l(y,""),W&16&&le(x,y,b,E,A,N,k,R))},Es=(f,g,y,b,E,A,N,k,R)=>{f=f||Ls,g=g||Ls;const I=f.length,B=g.length,x=Math.min(I,B);let j;for(j=0;j<x;j++){const W=g[j]=R?wn(g[j]):Kt(g[j]);v(f[j],W,y,null,E,A,N,k,R)}I>B?D(f,E,A,!0,!1,x):le(g,y,b,E,A,N,k,R,x)},Zt=(f,g,y,b,E,A,N,k,R)=>{let I=0;const B=g.length;let x=f.length-1,j=B-1;for(;I<=x&&I<=j;){const W=f[I],oe=g[I]=R?wn(g[I]):Kt(g[I]);if(Qn(W,oe))v(W,oe,y,null,E,A,N,k,R);else break;I++}for(;I<=x&&I<=j;){const W=f[x],oe=g[j]=R?wn(g[j]):Kt(g[j]);if(Qn(W,oe))v(W,oe,y,null,E,A,N,k,R);else break;x--,j--}if(I>x){if(I<=j){const W=j+1,oe=W<B?g[W].el:b;for(;I<=j;)v(null,g[I]=R?wn(g[I]):Kt(g[I]),y,oe,E,A,N,k,R),I++}}else if(I>j)for(;I<=x;)bt(f[I],E,A,!0),I++;else{const W=I,oe=I,me=new Map;for(I=oe;I<=j;I++){const yt=g[I]=R?wn(g[I]):Kt(g[I]);yt.key!=null&&me.set(yt.key,I)}let ye,Te=0;const Ot=j-oe+1;let bs=!1,Gl=0;const mr=new Array(Ot);for(I=0;I<Ot;I++)mr[I]=0;for(I=W;I<=x;I++){const yt=f[I];if(Te>=Ot){bt(yt,E,A,!0);continue}let jt;if(yt.key!=null)jt=me.get(yt.key);else for(ye=oe;ye<=j;ye++)if(mr[ye-oe]===0&&Qn(yt,g[ye])){jt=ye;break}jt===void 0?bt(yt,E,A,!0):(mr[jt-oe]=I+1,jt>=Gl?Gl=jt:bs=!0,v(yt,g[jt],y,null,E,A,N,k,R),Te++)}const Ql=bs?j_(mr):Ls;for(ye=Ql.length-1,I=Ot-1;I>=0;I--){const yt=oe+I,jt=g[yt],Xl=yt+1<B?g[yt+1].el:b;mr[I]===0?v(null,jt,y,Xl,E,A,N,k,R):bs&&(ye<0||I!==Ql[ye]?Bt(jt,y,Xl,2):ye--)}}},Bt=(f,g,y,b,E=null)=>{const{el:A,type:N,transition:k,children:R,shapeFlag:I}=f;if(I&6){Bt(f.component.subTree,g,y,b);return}if(I&128){f.suspense.move(g,y,b);return}if(I&64){N.move(f,g,y,Ee);return}if(N===Re){s(A,g,y);for(let x=0;x<R.length;x++)Bt(R[x],g,y,b);s(f.anchor,g,y);return}if(N===$a){U(f,g,y);return}if(b!==2&&I&1&&k)if(b===0)k.beforeEnter(A),s(A,g,y),ht(()=>k.enter(A),E);else{const{leave:x,delayLeave:j,afterLeave:W}=k,oe=()=>s(A,g,y),me=()=>{x(A,()=>{oe(),W&&W()})};j?j(A,oe,me):me()}else s(A,g,y)},bt=(f,g,y,b=!1,E=!1)=>{const{type:A,props:N,ref:k,children:R,dynamicChildren:I,shapeFlag:B,patchFlag:x,dirs:j}=f;if(k!=null&&Sc(k,null,y,f,!0),B&256){g.ctx.deactivate(f);return}const W=B&1&&j,oe=!Or(f);let me;if(oe&&(me=N&&N.onVnodeBeforeUnmount)&&Ht(me,g,f),B&6)M(f.component,y,b);else{if(B&128){f.suspense.unmount(y,b);return}W&&Kn(f,null,g,"beforeUnmount"),B&64?f.type.remove(f,g,y,E,Ee,b):I&&(A!==Re||x>0&&x&64)?D(I,g,y,!1,!0):(A===Re&&x&384||!E&&B&16)&&D(R,g,y),b&&gr(f)}(oe&&(me=N&&N.onVnodeUnmounted)||W)&&ht(()=>{me&&Ht(me,g,f),W&&Kn(f,null,g,"unmounted")},y)},gr=f=>{const{type:g,el:y,anchor:b,transition:E}=f;if(g===Re){w(y,b);return}if(g===$a){se(f);return}const A=()=>{r(y),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(f.shapeFlag&1&&E&&!E.persisted){const{leave:N,delayLeave:k}=E,R=()=>N(y,A);k?k(f.el,A,R):R()}else A()},w=(f,g)=>{let y;for(;f!==g;)y=d(f),r(f),f=y;r(g)},M=(f,g,y)=>{const{bum:b,scope:E,update:A,subTree:N,um:k}=f;b&&eo(b),E.stop(),A&&(A.active=!1,bt(N,f,g,y)),k&&ht(k,g),ht(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},D=(f,g,y,b=!1,E=!1,A=0)=>{for(let N=A;N<f.length;N++)bt(f[N],g,y,b,E)},F=f=>f.shapeFlag&6?F(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),he=(f,g,y)=>{f==null?g._vnode&&bt(g._vnode,null,null,!0):v(g._vnode||null,f,g,null,null,null,y),Kf(),g._vnode=f},Ee={p:v,um:bt,m:Bt,r:gr,mt:ws,mc:le,pc:mt,pbc:ze,n:F,o:t};let ee,X;return e&&([ee,X]=e(Ee)),{render:he,hydrate:ee,createApp:V_(he,ee)}}function zn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function dp(t,e,n=!1){const s=t.children,r=e.children;if(G(s)&&G(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=wn(r[i]),a.el=o.el),n||dp(o,a))}}function j_(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const H_=t=>t.__isTeleport,Re=Symbol(void 0),Au=Symbol(void 0),kt=Symbol(void 0),$a=Symbol(void 0),Nr=[];let Pt=null;function pe(t=!1){Nr.push(Pt=t?null:[])}function q_(){Nr.pop(),Pt=Nr[Nr.length-1]||null}let Gr=1;function mh(t){Gr+=t}function fp(t){return t.dynamicChildren=Gr>0?Pt||Ls:null,q_(),Gr>0&&Pt&&Pt.push(t),t}function Ae(t,e,n,s,r,i){return fp(P(t,e,n,s,r,i,!0))}function Qr(t,e,n,s,r){return fp(Se(t,e,n,s,r,!0))}function yo(t){return t?t.__v_isVNode===!0:!1}function Qn(t,e){return t.type===e.type&&t.key===e.key}const Zo="__vInternal",pp=({key:t})=>t!=null?t:null,no=({ref:t,ref_key:e,ref_for:n})=>t!=null?qe(t)||et(t)||Z(t)?{i:tt,r:t,k:e,f:!!n}:t:null;function P(t,e=null,n=null,s=0,r=null,i=t===Re?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&pp(e),ref:e&&no(e),scopeId:Gf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Ru(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=qe(n)?8:16),Gr>0&&!o&&Pt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Pt.push(c),c}const Se=K_;function K_(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===S_)&&(t=kt),yo(t)){const a=Mn(t,e,!0);return n&&Ru(a,n),Gr>0&&!i&&Pt&&(a.shapeFlag&6?Pt[Pt.indexOf(t)]=a:Pt.push(a)),a.patchFlag|=-2,a}if(sw(t)&&(t=t.__vccOpts),e){e=z_(e);let{class:a,style:c}=e;a&&!qe(a)&&(e.class=du(a)),$e(c)&&(xf(c)&&!G(c)&&(c=rt({},c)),e.style=jo(c))}const o=qe(t)?1:c_(t)?128:H_(t)?64:$e(t)?4:Z(t)?2:0;return P(t,e,n,s,r,o,i,!0)}function z_(t){return t?xf(t)||Zo in t?rt({},t):t:null}function Mn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?W_(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&pp(a),ref:e&&e.ref?n&&r?G(r)?r.concat(no(e)):[r,no(e)]:no(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Re?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Mn(t.ssContent),ssFallback:t.ssFallback&&Mn(t.ssFallback),el:t.el,anchor:t.anchor}}function at(t=" ",e=0){return Se(Au,null,t,e)}function Pr(t="",e=!1){return e?(pe(),Qr(kt,null,t)):Se(kt,null,t)}function Kt(t){return t==null||typeof t=="boolean"?Se(kt):G(t)?Se(Re,null,t.slice()):typeof t=="object"?wn(t):Se(Au,null,String(t))}function wn(t){return t.el===null||t.memo?t:Mn(t)}function Ru(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Ru(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Zo in e)?e._ctx=tt:r===3&&tt&&(tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:tt},n=32):(e=String(e),s&64?(n=16,e=[at(e)]):n=8);t.children=e,t.shapeFlag|=n}function W_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=du([e.class,s.class]));else if(r==="style")e.style=jo([e.style,s.style]);else if(Ho(r)){const i=e[r],o=s[r];o&&i!==o&&!(G(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ht(t,e,n,s=null){Ct(t,e,7,[n,s])}const G_=hp();let Q_=0;function X_(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||G_,i={uid:Q_++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new bf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ap(s,r),emitsOptions:Wf(s,r),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:s.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=s_.bind(null,i),t.ce&&t.ce(i),i}let He=null;const Y_=()=>He||tt,qs=t=>{He=t,t.scope.on()},ns=()=>{He&&He.scope.off(),He=null};function gp(t){return t.vnode.shapeFlag&4}let Xr=!1;function J_(t,e=!1){Xr=e;const{props:n,children:s}=t.vnode,r=gp(t);P_(t,n,r,e),M_(t,s);const i=r?Z_(t,e):void 0;return Xr=!1,i}function Z_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Lf(new Proxy(t.ctx,k_));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?tw(t):null;qs(t),nr();const i=Rn(s,t,0,[t.props,r]);if(sr(),ns(),_f(i)){if(i.then(ns,ns),e)return i.then(o=>{yh(t,o,e)}).catch(o=>{Go(o,t,0)});t.asyncDep=i}else yh(t,i,e)}else mp(t,e)}function yh(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:$e(e)&&(t.setupState=Vf(e)),mp(t,n)}let vh;function mp(t,e,n){const s=t.type;if(!t.render){if(!e&&vh&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=rt(rt({isCustomElement:i,delimiters:a},o),c);s.render=vh(r,u)}}t.render=s.render||Lt}qs(t),nr(),A_(t),sr(),ns()}function ew(t){return new Proxy(t.attrs,{get(e,n){return wt(t,"get","$attrs"),e[n]}})}function tw(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=ew(t))},slots:t.slots,emit:t.emit,expose:e}}function ea(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Vf(Lf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in go)return go[n](t)}}))}function nw(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function sw(t){return Z(t)&&"__vccOpts"in t}const dt=(t,e)=>Yv(t,e,Xr);function yp(t,e,n){const s=arguments.length;return s===2?$e(e)&&!G(e)?yo(e)?Se(t,null,[e]):Se(t,e):Se(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&yo(n)&&(n=[n]),Se(t,e,n))}const rw="3.2.37",iw="http://www.w3.org/2000/svg",Xn=typeof document<"u"?document:null,_h=Xn&&Xn.createElement("template"),ow={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Xn.createElementNS(iw,t):Xn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Xn.createTextNode(t),createComment:t=>Xn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{_h.innerHTML=s?`<svg>${t}</svg>`:t;const a=_h.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function aw(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function cw(t,e,n){const s=t.style,r=qe(n);if(n&&!r){for(const i in n)Cc(s,i,n[i]);if(e&&!qe(e))for(const i in e)n[i]==null&&Cc(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const wh=/\s*!important$/;function Cc(t,e,n){if(G(n))n.forEach(s=>Cc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=uw(t,e);wh.test(n)?t.setProperty(tr(s),n.replace(wh,""),"important"):t[s]=n}}const Eh=["Webkit","Moz","ms"],Ba={};function uw(t,e){const n=Ba[e];if(n)return n;let s=Xt(e);if(s!=="filter"&&s in t)return Ba[e]=s;s=zo(s);for(let r=0;r<Eh.length;r++){const i=Eh[r]+s;if(i in t)return Ba[e]=i}return e}const bh="http://www.w3.org/1999/xlink";function lw(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(bh,e.slice(6,e.length)):t.setAttributeNS(bh,e,n);else{const i=cv(e);n==null||i&&!mf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function hw(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=mf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[vp,dw]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let kc=0;const fw=Promise.resolve(),pw=()=>{kc=0},gw=()=>kc||(fw.then(pw),kc=vp());function Rs(t,e,n,s){t.addEventListener(e,n,s)}function mw(t,e,n,s){t.removeEventListener(e,n,s)}function yw(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=vw(e);if(s){const u=i[e]=_w(s,r);Rs(t,a,u,c)}else o&&(mw(t,a,o,c),i[e]=void 0)}}const Ih=/(?:Once|Passive|Capture)$/;function vw(t){let e;if(Ih.test(t)){e={};let n;for(;n=t.match(Ih);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[tr(t.slice(2)),e]}function _w(t,e){const n=s=>{const r=s.timeStamp||vp();(dw||r>=n.attached-1)&&Ct(ww(s,n.value),e,5,[s])};return n.value=t,n.attached=gw(),n}function ww(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Th=/^on[a-z]/,Ew=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?aw(t,s,r):e==="style"?cw(t,n,s):Ho(e)?fu(e)||yw(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bw(t,e,s,r))?hw(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),lw(t,e,s,r))};function bw(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Th.test(e)&&Z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Th.test(e)&&qe(n)?!1:e in t}const Iw={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};p_.props;const Sh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>eo(e,n):e};function Tw(t){t.target.composing=!0}function Ch(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const St={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Sh(r);const i=s||r.props&&r.props.type==="number";Rs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=hc(a)),t._assign(a)}),n&&Rs(t,"change",()=>{t.value=t.value.trim()}),e||(Rs(t,"compositionstart",Tw),Rs(t,"compositionend",Ch),Rs(t,"change",Ch))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Sh(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&hc(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Sw=["ctrl","shift","alt","meta"],Cw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Sw.some(n=>t[`${n}Key`]&&!e.includes(n))},Ac=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=Cw[e[r]];if(i&&i(n,e))return}return t(n,...s)},kn={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):yr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),yr(t,!0),s.enter(t)):s.leave(t,()=>{yr(t,!1)}):yr(t,e))},beforeUnmount(t,{value:e}){yr(t,e)}};function yr(t,e){t.style.display=e?t._vod:"none"}const kw=rt({patchProp:Ew},ow);let kh;function Aw(){return kh||(kh=$_(kw))}const Rw=(...t)=>{const e=Aw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Dw(s);if(!r)return;const i=e._component;!Z(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Dw(t){return qe(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Ow=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},wp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),s.push(n[l],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_p(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ow(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),u!==64){const p=a<<4&240|u>>2;if(s.push(p),h!==64){const m=u<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Nw=function(t){const e=_p(t);return wp.encodeByteArray(e,!0)},vo=function(t){return Nw(t).replace(/\./g,"")},Ep=function(t){try{return wp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function xw(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Lw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Mw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Uw(){const t=it();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Fw(){return typeof indexedDB=="object"}function Vw(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function $w(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=()=>$w().__FIREBASE_DEFAULTS__,jw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Hw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ep(t[1]);return e&&JSON.parse(e)},Du=()=>{try{return Bw()||jw()||Hw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bp=t=>{var e,n;return(n=(e=Du())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ip=t=>{const e=bp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},qw=()=>{var t;return(t=Du())===null||t===void 0?void 0:t.config},Tp=t=>{var e;return(e=Du())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[vo(JSON.stringify(n)),vo(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="FirebaseError";class Jt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=zw,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gi.prototype.create)}}class gi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Ww(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Jt(r,a,s)}}function Ww(t,e){return t.replace(Gw,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Gw=/\{\$([^}]+)}/g;function Qw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _o(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Ah(i)&&Ah(o)){if(!_o(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Ah(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ir(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Tr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Xw(t,e){const n=new Yw(t,e);return n.subscribe.bind(n)}class Yw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Jw(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=ja),r.error===void 0&&(r.error=ja),r.complete===void 0&&(r.complete=ja);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ja(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(t){return t&&t._delegate?t._delegate:t}class Un{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Kw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tE(e))try{this.getOrInitializeService({instanceIdentifier:Gn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Gn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gn){return this.instances.has(e)}getOptions(e=Gn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:eE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Gn){return this.component?this.component.multipleInstances?e:Gn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eE(t){return t===Gn?void 0:t}function tE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Zw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const sE={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},rE=ae.INFO,iE={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},oE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=iE[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ou{constructor(e){this.name=e,this._logLevel=rE,this._logHandler=oE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const aE=(t,e)=>e.some(n=>t instanceof n);let Rh,Dh;function cE(){return Rh||(Rh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uE(){return Dh||(Dh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cp=new WeakMap,Rc=new WeakMap,kp=new WeakMap,Ha=new WeakMap,Nu=new WeakMap;function lE(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Dn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Cp.set(n,t)}).catch(()=>{}),Nu.set(e,t),e}function hE(t){if(Rc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Rc.set(t,e)}let Dc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dE(t){Dc=t(Dc)}function fE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(qa(this),e,...n);return kp.set(s,e.sort?e.sort():[e]),Dn(s)}:uE().includes(t)?function(...e){return t.apply(qa(this),e),Dn(Cp.get(this))}:function(...e){return Dn(t.apply(qa(this),e))}}function pE(t){return typeof t=="function"?fE(t):(t instanceof IDBTransaction&&hE(t),aE(t,cE())?new Proxy(t,Dc):t)}function Dn(t){if(t instanceof IDBRequest)return lE(t);if(Ha.has(t))return Ha.get(t);const e=pE(t);return e!==t&&(Ha.set(t,e),Nu.set(e,t)),e}const qa=t=>Nu.get(t);function gE(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Dn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Dn(o.result),c.oldVersion,c.newVersion,Dn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const mE=["get","getKey","getAll","getAllKeys","count"],yE=["put","add","delete","clear"],Ka=new Map;function Oh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ka.get(e))return Ka.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=yE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||mE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Ka.set(e,i),i}dE(t=>({...t,get:(e,n,s)=>Oh(e,n)||t.get(e,n,s),has:(e,n)=>!!Oh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_E(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function _E(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Oc="@firebase/app",Nh="0.8.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=new Ou("@firebase/app"),wE="@firebase/app-compat",EE="@firebase/analytics-compat",bE="@firebase/analytics",IE="@firebase/app-check-compat",TE="@firebase/app-check",SE="@firebase/auth",CE="@firebase/auth-compat",kE="@firebase/database",AE="@firebase/database-compat",RE="@firebase/functions",DE="@firebase/functions-compat",OE="@firebase/installations",NE="@firebase/installations-compat",PE="@firebase/messaging",xE="@firebase/messaging-compat",LE="@firebase/performance",ME="@firebase/performance-compat",UE="@firebase/remote-config",FE="@firebase/remote-config-compat",VE="@firebase/storage",$E="@firebase/storage-compat",BE="@firebase/firestore",jE="@firebase/firestore-compat",HE="firebase",qE="9.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="[DEFAULT]",KE={[Oc]:"fire-core",[wE]:"fire-core-compat",[bE]:"fire-analytics",[EE]:"fire-analytics-compat",[TE]:"fire-app-check",[IE]:"fire-app-check-compat",[SE]:"fire-auth",[CE]:"fire-auth-compat",[kE]:"fire-rtdb",[AE]:"fire-rtdb-compat",[RE]:"fire-fn",[DE]:"fire-fn-compat",[OE]:"fire-iid",[NE]:"fire-iid-compat",[PE]:"fire-fcm",[xE]:"fire-fcm-compat",[LE]:"fire-perf",[ME]:"fire-perf-compat",[UE]:"fire-rc",[FE]:"fire-rc-compat",[VE]:"fire-gcs",[$E]:"fire-gcs-compat",[BE]:"fire-fst",[jE]:"fire-fst-compat","fire-js":"fire-js",[HE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=new Map,Pc=new Map;function zE(t,e){try{t.container.addComponent(e)}catch(n){as.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cs(t){const e=t.name;if(Pc.has(e))return as.debug(`There were multiple attempts to register component ${e}.`),!1;Pc.set(e,t);for(const n of wo.values())zE(n,t);return!0}function ta(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},On=new gi("app","Firebase",WE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw On.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=qE;function Ap(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Nc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw On.create("bad-app-name",{appName:String(r)});if(n||(n=qw()),!n)throw On.create("no-options");const i=wo.get(r);if(i){if(_o(n,i.options)&&_o(s,i.config))return i;throw On.create("duplicate-app",{appName:r})}const o=new nE(r);for(const c of Pc.values())o.addComponent(c);const a=new GE(n,s,o);return wo.set(r,a),a}function Pu(t=Nc){const e=wo.get(t);if(!e&&t===Nc)return Ap();if(!e)throw On.create("no-app",{appName:t});return e}function Wt(t,e,n){var s;let r=(s=KE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),as.warn(a.join(" "));return}cs(new Un(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE="firebase-heartbeat-database",XE=1,Yr="firebase-heartbeat-store";let za=null;function Rp(){return za||(za=gE(QE,XE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Yr)}}}).catch(t=>{throw On.create("idb-open",{originalErrorMessage:t.message})})),za}async function YE(t){var e;try{return(await Rp()).transaction(Yr).objectStore(Yr).get(Dp(t))}catch(n){if(n instanceof Jt)as.warn(n.message);else{const s=On.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});as.warn(s.message)}}}async function Ph(t,e){var n;try{const r=(await Rp()).transaction(Yr,"readwrite");return await r.objectStore(Yr).put(e,Dp(t)),r.done}catch(s){if(s instanceof Jt)as.warn(s.message);else{const r=On.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});as.warn(r.message)}}}function Dp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE=1024,ZE=30*24*60*60*1e3;class eb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nb(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=xh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=ZE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=xh(),{heartbeatsToSend:n,unsentEntries:s}=tb(this._heartbeatsCache.heartbeats),r=vo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function xh(){return new Date().toISOString().substring(0,10)}function tb(t,e=JE){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Lh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Lh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class nb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fw()?Vw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await YE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ph(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ph(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Lh(t){return vo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(t){cs(new Un("platform-logger",e=>new vE(e),"PRIVATE")),cs(new Un("heartbeat",e=>new eb(e),"PRIVATE")),Wt(Oc,Nh,t),Wt(Oc,Nh,"esm2017"),Wt("fire-js","")}sb("");function xu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Op(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rb=Op,Np=new gi("auth","Firebase",Op());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh=new Ou("@firebase/auth");function so(t,...e){Mh.logLevel<=ae.ERROR&&Mh.error(`Auth (${rr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t,...e){throw Lu(t,...e)}function Gt(t,...e){return Lu(t,...e)}function ib(t,e,n){const s=Object.assign(Object.assign({},rb()),{[e]:n});return new gi("auth","Firebase",s).create(e,{appName:t.name})}function Lu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Np.create(t,...e)}function q(t,e,...n){if(!t)throw Lu(e,...n)}function sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw so(e),new Error(e)}function un(t,e){t||sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=new Map;function rn(t){un(t instanceof Function,"Expected a class definition");let e=Uh.get(t);return e?(un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Uh.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(t,e){const n=ta(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(_o(i,e!=null?e:{}))return r;Ft(r,"already-initialized")}return n.initialize({options:e})}function ab(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function cb(){return Fh()==="http:"||Fh()==="https:"}function Fh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cb()||Lw()||"connection"in navigator)?navigator.onLine:!0}function lb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n){this.shortDelay=e,this.longDelay=n,un(n>e,"Short delay should be less than long delay!"),this.isMobile=Pw()||Mw()}get(){return ub()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(t,e){un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db=new yi(3e4,6e4);function ir(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function or(t,e,n,s,r={}){return xp(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=mi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Pp.fetch()(Lp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function xp(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},hb),e);try{const r=new fb(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Hi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Hi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Hi(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ib(t,l,u);Ft(t,l)}}catch(r){if(r instanceof Jt)throw r;Ft(t,"network-request-failed")}}async function vi(t,e,n,s,r={}){const i=await or(t,e,n,s,r);return"mfaPendingCredential"in i&&Ft(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Lp(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Mu(t.config,r):`${t.config.apiScheme}://${r}`}class fb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Gt(this.auth,"network-request-failed")),db.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Hi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Gt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pb(t,e){return or(t,"POST","/v1/accounts:delete",e)}async function gb(t,e){return or(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mb(t,e=!1){const n=De(t),s=await n.getIdToken(e),r=Uu(s);q(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:xr(Wa(r.auth_time)),issuedAtTime:xr(Wa(r.iat)),expirationTime:xr(Wa(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Wa(t){return Number(t)*1e3}function Uu(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return so("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ep(s);return i?JSON.parse(i):(so("Failed to decode base64 JWT payload"),null)}catch(i){return so("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function yb(t){const e=Uu(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Jt&&vb(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function vb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xr(this.lastLoginAt),this.creationTime=xr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Jr(t,gb(n,{idToken:s}));q(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?bb(i.providerUserInfo):[],a=Eb(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Mp(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function wb(t){const e=De(t);await Eo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Eb(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function bb(t){return t.map(e=>{var{providerId:n}=e,s=xu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ib(t,e){const n=await xp(t,{},async()=>{const s=mi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Lp(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Pp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Ib(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Zr;return s&&(q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(q(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zr,this.toJSON())}_performRefresh(){return sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ss{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=xu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _b(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Mp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Jr(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mb(this,e)}reload(){return wb(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ss(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Eo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Jr(this,pb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,T=(u=n.createdAt)!==null&&u!==void 0?u:void 0,O=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:$,emailVerified:U,isAnonymous:se,providerData:_e,stsTokenManager:Ne}=n;q($&&Ne,e,"internal-error");const J=Zr.fromJSON(this.name,Ne);q(typeof $=="string",e,"internal-error"),yn(h,e.name),yn(d,e.name),q(typeof U=="boolean",e,"internal-error"),q(typeof se=="boolean",e,"internal-error"),yn(p,e.name),yn(m,e.name),yn(_,e.name),yn(v,e.name),yn(T,e.name),yn(O,e.name);const le=new ss({uid:$,auth:e,email:d,emailVerified:U,displayName:h,isAnonymous:se,photoURL:m,phoneNumber:p,tenantId:_,stsTokenManager:J,createdAt:T,lastLoginAt:O});return _e&&Array.isArray(_e)&&(le.providerData=_e.map(Ie=>Object.assign({},Ie))),v&&(le._redirectEventId=v),le}static async _fromIdTokenResponse(e,n,s=!1){const r=new Zr;r.updateFromServerResponse(n);const i=new ss({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Eo(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Up.type="NONE";const Vh=Up;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t,e,n){return`firebase:${t}:${e}:${n}`}class $s{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ro(this.userKey,r.apiKey,i),this.fullPersistenceKey=ro("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ss._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new $s(rn(Vh),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||rn(Vh);const o=ro(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=ss._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new $s(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new $s(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($p(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jp(e))return"Blackberry";if(Hp(e))return"Webos";if(Fu(e))return"Safari";if((e.includes("chrome/")||Vp(e))&&!e.includes("edge/"))return"Chrome";if(Bp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Fp(t=it()){return/firefox\//i.test(t)}function Fu(t=it()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vp(t=it()){return/crios\//i.test(t)}function $p(t=it()){return/iemobile/i.test(t)}function Bp(t=it()){return/android/i.test(t)}function jp(t=it()){return/blackberry/i.test(t)}function Hp(t=it()){return/webos/i.test(t)}function na(t=it()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Tb(t=it()){var e;return na(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Sb(){return Uw()&&document.documentMode===10}function qp(t=it()){return na(t)||Bp(t)||Hp(t)||jp(t)||/windows phone/i.test(t)||$p(t)}function Cb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(t,e=[]){let n;switch(t){case"Browser":n=$h(it());break;case"Worker":n=`${$h(it())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bh(this),this.idTokenSubscription=new Bh(this),this.beforeStateQueue=new kb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Np,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await $s.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Eo(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?De(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(rn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await $s.create(this,[rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function _i(t){return De(t)}class Bh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xw(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Rb(t,e,n){const s=_i(t);q(s._canInitEmulator,s,"emulator-config-failed"),q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=zp(e),{host:o,port:a}=Db(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Ob()}function zp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Db(t){const e=zp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:jh(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:jh(o)}}}function jh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ob(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return sn("not implemented")}_getIdTokenResponse(e){return sn("not implemented")}_linkToIdToken(e,n){return sn("not implemented")}_getReauthenticationResolver(e){return sn("not implemented")}}async function Nb(t,e){return or(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pb(t,e){return vi(t,"POST","/v1/accounts:signInWithPassword",ir(t,e))}async function xb(t,e){return or(t,"POST","/v1/accounts:sendOobCode",ir(t,e))}async function Lb(t,e){return xb(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mb(t,e){return vi(t,"POST","/v1/accounts:signInWithEmailLink",ir(t,e))}async function Ub(t,e){return vi(t,"POST","/v1/accounts:signInWithEmailLink",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Vu{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new ei(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ei(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Pb(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Mb(e,{email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Nb(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ub(e,{idToken:n,email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(t,e){return vi(t,"POST","/v1/accounts:signInWithIdp",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb="http://localhost";class us extends Vu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=xu(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new us(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Bs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Bs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Bs(e,n)}buildRequest(){const e={requestUri:Fb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $b(t){const e=Ir(Tr(t)).link,n=e?Ir(Tr(e)).deep_link_id:null,s=Ir(Tr(t)).deep_link_id;return(s?Ir(Tr(s)).link:null)||s||n||e||t}class $u{constructor(e){var n,s,r,i,o,a;const c=Ir(Tr(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(s=c.oobCode)!==null&&s!==void 0?s:null,h=Vb((r=c.mode)!==null&&r!==void 0?r:null);q(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=$b(e);try{return new $u(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.providerId=ar.PROVIDER_ID}static credential(e,n){return ei._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=$u.parseLink(n);return q(s,"argument-error"),ei._fromEmailAndCode(e,s.code,s.tenantId)}}ar.PROVIDER_ID="password";ar.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ar.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends Wp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends wi{constructor(){super("facebook.com")}static credential(e){return us._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";bn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends wi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return us._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return In.credential(n,s)}catch{return null}}}In.GOOGLE_SIGN_IN_METHOD="google.com";In.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends wi{constructor(){super("github.com")}static credential(e){return us._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.GITHUB_SIGN_IN_METHOD="github.com";Tn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends wi{constructor(){super("twitter.com")}static credential(e,n){return us._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Sn.credential(n,s)}catch{return null}}}Sn.TWITTER_SIGN_IN_METHOD="twitter.com";Sn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bb(t,e){return vi(t,"POST","/v1/accounts:signUp",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await ss._fromIdTokenResponse(e,s,r),o=Hh(s);return new ls({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Hh(s);return new ls({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Hh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends Jt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,bo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new bo(e,n,s,r)}}function Gp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?bo._fromErrorAndOperation(t,i,e,s):i})}async function jb(t,e,n=!1){const s=await Jr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ls._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hb(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await Jr(t,Gp(r,i,e,t),n);q(o.idToken,r,"internal-error");const a=Uu(o.idToken);q(a,r,"internal-error");const{sub:c}=a;return q(t.uid===c,r,"user-mismatch"),ls._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&Ft(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qp(t,e,n=!1){const s="signIn",r=await Gp(t,s,e),i=await ls._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function qb(t,e){return Qp(_i(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kb(t,e,n){var s;q(((s=n.url)===null||s===void 0?void 0:s.length)>0,t,"invalid-continue-uri"),q(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(q(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(q(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}async function zb(t,e,n){const s=_i(t),r=await Bb(s,{returnSecureToken:!0,email:e,password:n}),i=await ls._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function Wb(t,e,n){return qb(De(t),ar.credential(e,n))}async function Xp(t,e){const n=De(t),s=await t.getIdToken(),r={requestType:"VERIFY_EMAIL",idToken:s};e&&Kb(n.auth,r,e);const{email:i}=await Lb(n.auth,r);i!==t.email&&await t.reload()}function Gb(t,e,n,s){return De(t).onIdTokenChanged(e,n,s)}function Qb(t,e,n){return De(t).beforeAuthStateChanged(e,n)}function Yp(t,e,n,s){return De(t).onAuthStateChanged(e,n,s)}function Xb(t){return De(t).signOut()}const Io="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Io,"1"),this.storage.removeItem(Io),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(){const t=it();return Fu(t)||na(t)}const Jb=1e3,Zb=10;class Zp extends Jp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Yb()&&Cb(),this.fallbackToPolling=qp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Sb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Zb):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Jb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zp.type="LOCAL";const e0=Zp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg extends Jp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}eg.type="SESSION";const tg=eg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new sa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await t0(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Bu("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return window}function s0(t){Qt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function r0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function i0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function o0(){return ng()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg="firebaseLocalStorageDb",a0=1,To="firebaseLocalStorage",rg="fbase_key";class Ei{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ra(t,e){return t.transaction([To],e?"readwrite":"readonly").objectStore(To)}function c0(){const t=indexedDB.deleteDatabase(sg);return new Ei(t).toPromise()}function Lc(){const t=indexedDB.open(sg,a0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(To,{keyPath:rg})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(To)?e(s):(s.close(),await c0(),e(await Lc()))})})}async function qh(t,e,n){const s=ra(t,!0).put({[rg]:e,value:n});return new Ei(s).toPromise()}async function u0(t,e){const n=ra(t,!1).get(e),s=await new Ei(n).toPromise();return s===void 0?null:s.value}function Kh(t,e){const n=ra(t,!0).delete(e);return new Ei(n).toPromise()}const l0=800,h0=3;class ig{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>h0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ng()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sa._getInstance(o0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await r0(),!this.activeServiceWorker)return;this.sender=new n0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||i0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lc();return await qh(e,Io,"1"),await Kh(e,Io),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>qh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>u0(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ra(r,!1).getAll();return new Ei(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),l0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ig.type="LOCAL";const d0=ig;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function p0(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Gt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",f0().appendChild(s)})}function g0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new yi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(t,e){return e?rn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju extends Vu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Bs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Bs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function y0(t){return Qp(t.auth,new ju(t),t.bypassAuthState)}function v0(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),Hb(n,new ju(t),t.bypassAuthState)}async function _0(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),jb(n,new ju(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return y0;case"linkViaPopup":case"linkViaRedirect":return _0;case"reauthViaPopup":case"reauthViaRedirect":return v0;default:Ft(this.auth,"internal-error")}}resolve(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0=new yi(2e3,1e4);class Ns extends og{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Ns.currentPopupAction&&Ns.currentPopupAction.cancel(),Ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){un(this.filter.length===1,"Popup operations only handle one event");const e=Bu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,w0.get())};e()}}Ns.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0="pendingRedirect",io=new Map;class b0 extends og{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=io.get(this.auth._key());if(!e){try{const s=await I0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}io.set(this.auth._key(),e)}return this.bypassAuthState||io.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function I0(t,e){const n=C0(e),s=S0(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function T0(t,e){io.set(t._key(),e)}function S0(t){return rn(t._redirectPersistence)}function C0(t){return ro(E0,t.config.apiKey,t.name)}async function k0(t,e,n=!1){const s=_i(t),r=m0(s,e),o=await new b0(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=10*60*1e3;class R0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!D0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!ag(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=A0&&this.cachedEventUids.clear(),this.cachedEventUids.has(zh(e))}saveEventToCache(e){this.cachedEventUids.add(zh(e)),this.lastProcessedEventTime=Date.now()}}function zh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ag({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function D0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ag(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O0(t,e={}){return or(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,P0=/^https?/;async function x0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await O0(t);for(const n of e)try{if(L0(n))return}catch{}Ft(t,"unauthorized-domain")}function L0(t){const e=xc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!P0.test(n))return!1;if(N0.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=new yi(3e4,6e4);function Wh(){const t=Qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function U0(t){return new Promise((e,n)=>{var s,r,i;function o(){Wh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wh(),n(Gt(t,"network-request-failed"))},timeout:M0.get()})}if(!((r=(s=Qt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Qt().gapi)===null||i===void 0)&&i.load)o();else{const a=g0("iframefcb");return Qt()[a]=()=>{gapi.load?o():n(Gt(t,"network-request-failed"))},p0(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw oo=null,e})}let oo=null;function F0(t){return oo=oo||U0(t),oo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0=new yi(5e3,15e3),$0="__/auth/iframe",B0="emulator/auth/iframe",j0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},H0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function q0(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mu(e,B0):`https://${t.config.authDomain}/${$0}`,s={apiKey:e.apiKey,appName:t.name,v:rr},r=H0.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${mi(s).slice(1)}`}async function K0(t){const e=await F0(t),n=Qt().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:q0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:j0,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Gt(t,"network-request-failed"),a=Qt().setTimeout(()=>{i(o)},V0.get());function c(){Qt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},W0=500,G0=600,Q0="_blank",X0="http://localhost";class Gh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Y0(t,e,n,s=W0,r=G0){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},z0),{width:s.toString(),height:r.toString(),top:i,left:o}),u=it().toLowerCase();n&&(a=Vp(u)?Q0:n),Fp(u)&&(e=e||X0,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(Tb(u)&&a!=="_self")return J0(e||"",a),new Gh(null);const h=window.open(e||"",a,l);q(h,t,"popup-blocked");try{h.focus()}catch{}return new Gh(h)}function J0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="__/auth/handler",eI="emulator/auth/handler";function Qh(t,e,n,s,r,i){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:rr,eventId:r};if(e instanceof Wp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Qw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof wi){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${tI(t)}?${mi(a).slice(1)}`}function tI({config:t}){return t.emulator?Mu(t,eI):`https://${t.authDomain}/${Z0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="webStorageSupport";class nI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tg,this._completeRedirectFn=k0,this._overrideRedirectResult=T0}async _openPopup(e,n,s,r){var i;un((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Qh(e,n,s,xc(),r);return Y0(e,o,Bu())}async _openRedirect(e,n,s,r){return await this._originValidation(e),s0(Qh(e,n,s,xc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(un(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await K0(e),s=new R0(e);return n.register("authEvent",r=>(q(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ga,{type:Ga},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ga];o!==void 0&&n(!!o),Ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=x0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qp()||Fu()||na()}}const sI=nI;var Xh="@firebase/auth",Yh="0.20.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function oI(t){cs(new Un("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{q(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),q(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kp(t)},l=new Ab(a,c,u);return ab(l,n),l})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),cs(new Un("auth-internal",e=>{const n=_i(e.getProvider("auth").getImmediate());return(s=>new rI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(Xh,Yh,iI(t)),Wt(Xh,Yh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=5*60,cI=Tp("authIdTokenMaxAge")||aI;let Jh=null;const uI=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>cI)return;const r=n==null?void 0:n.token;Jh!==r&&(Jh=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Ks(t=Pu()){const e=ta(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ob(t,{popupRedirectResolver:sI,persistence:[d0,e0,tg]}),s=Tp("authTokenSyncURL");if(s){const i=uI(s);Qb(n,i,()=>i(n.currentUser)),Gb(n,o=>i(o))}const r=bp("auth");return r&&Rb(n,`http://${r}`),n}oI("Browser");function lI(){return cg().__VUE_DEVTOOLS_GLOBAL_HOOK__}function cg(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const hI=typeof Proxy=="function",dI="devtools-plugin:setup",fI="plugin:settings:set";let Is,Mc;function pI(){var t;return Is!==void 0||(typeof window<"u"&&window.performance?(Is=!0,Mc=window.performance):typeof global<"u"&&((t=global.perf_hooks)===null||t===void 0?void 0:t.performance)?(Is=!0,Mc=global.perf_hooks.performance):Is=!1),Is}function gI(){return pI()?Mc.now():Date.now()}class mI{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},s);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}i=o},now(){return gI()}},n&&n.on(fI,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:a,args:c,resolve:u})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function yI(t,e){const n=t,s=cg(),r=lI(),i=hI&&n.enableEarlyProxy;if(r&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(dI,t,e);else{const o=i?new mI(n,r):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ds=typeof window<"u";function vI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const de=Object.assign;function Qa(t,e){const n={};for(const s in e){const r=e[s];n[s]=Vt(r)?r.map(t):t(r)}return n}const Lr=()=>{},Vt=Array.isArray,_I=/\/$/,wI=t=>t.replace(_I,"");function Xa(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=TI(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function EI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Zh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function bI(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&zs(e.matched[s],n.matched[r])&&ug(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function zs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ug(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!II(t[n],e[n]))return!1;return!0}function II(t,e){return Vt(t)?ed(t,e):Vt(e)?ed(e,t):t===e}function ed(t,e){return Vt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function TI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var ti;(function(t){t.pop="pop",t.push="push"})(ti||(ti={}));var Mr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Mr||(Mr={}));function SI(t){if(!t)if(Ds){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),wI(t)}const CI=/^[^#]+#/;function kI(t,e){return t.replace(CI,"#")+e}function AI(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ia=()=>({left:window.pageXOffset,top:window.pageYOffset});function RI(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=AI(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function td(t,e){return(history.state?history.state.position-e:-1)+t}const Uc=new Map;function DI(t,e){Uc.set(t,e)}function OI(t){const e=Uc.get(t);return Uc.delete(t),e}let NI=()=>location.protocol+"//"+location.host;function lg(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Zh(c,"")}return Zh(n,t)+s+r}function PI(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const p=lg(t,location),m=n.value,_=e.value;let v=0;if(d){if(n.value=p,e.value=d,o&&o===m){o=null;return}v=_?d.position-_.position:0}else s(p);r.forEach(T=>{T(n.value,m,{delta:v,type:ti.pop,direction:v?v>0?Mr.forward:Mr.back:Mr.unknown})})};function c(){o=n.value}function u(d){r.push(d);const p=()=>{const m=r.indexOf(d);m>-1&&r.splice(m,1)};return i.push(p),p}function l(){const{history:d}=window;!d.state||d.replaceState(de({},d.state,{scroll:ia()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function nd(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?ia():null}}function xI(t){const{history:e,location:n}=window,s={value:lg(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:NI()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),r.value=u}catch(p){console.error(p),n[l?"replace":"assign"](d)}}function o(c,u){const l=de({},e.state,nd(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,l,!0),s.value=c}function a(c,u){const l=de({},r.value,e.state,{forward:c,scroll:ia()});i(l.current,l,!0);const h=de({},nd(s.value,c,null),{position:l.position+1},u);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function LI(t){t=SI(t);const e=xI(t),n=PI(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=de({location:"",base:t,go:s,createHref:kI.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function MI(t){return typeof t=="string"||t&&typeof t=="object"}function hg(t){return typeof t=="string"||typeof t=="symbol"}const vn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},dg=Symbol("");var sd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(sd||(sd={}));function Ws(t,e){return de(new Error,{type:t,[dg]:!0},e)}function en(t,e){return t instanceof Error&&dg in t&&(e==null||!!(t.type&e))}const rd="[^/]+?",UI={sensitive:!1,strict:!1,start:!0,end:!0},FI=/[.+*?^${}()[\]/\\]/g;function VI(t,e){const n=de({},UI,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let h=0;h<u.length;h++){const d=u[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(FI,"\\$&"),p+=40;else if(d.type===1){const{value:m,repeatable:_,optional:v,regexp:T}=d;i.push({name:m,repeatable:_,optional:v});const O=T||rd;if(O!==rd){p+=10;try{new RegExp(`(${O})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${m}" (${O}): `+U.message)}}let $=_?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||($=v&&u.length<2?`(?:/${$})`:"/"+$),v&&($+="?"),r+=$,p+=20,v&&(p+=-8),_&&(p+=-20),O===".*"&&(p+=-50)}l.push(p)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const p=l[d]||"",m=i[d-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const p of d)if(p.type===0)l+=p.value;else if(p.type===1){const{value:m,repeatable:_,optional:v}=p,T=m in u?u[m]:"";if(Vt(T)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const O=Vt(T)?T.join("/"):T;if(!O)if(v)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);l+=O}}return l||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function $I(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function BI(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=$I(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(id(s))return 1;if(id(r))return-1}return r.length-s.length}function id(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const jI={type:0,value:""},HI=/[a-zA-Z0-9_]/;function qI(t){if(!t)return[[]];if(t==="/")return[[jI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${u}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",l="";function h(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:HI.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),r}function KI(t,e,n){const s=VI(qI(t.path),n),r=de(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function zI(t,e){const n=[],s=new Map;e=cd({strict:!1,end:!0,sensitive:!1},e);function r(l){return s.get(l)}function i(l,h,d){const p=!d,m=WI(l);m.aliasOf=d&&d.record;const _=cd(e,l),v=[m];if("alias"in l){const $=typeof l.alias=="string"?[l.alias]:l.alias;for(const U of $)v.push(de({},m,{components:d?d.record.components:m.components,path:U,aliasOf:d?d.record:m}))}let T,O;for(const $ of v){const{path:U}=$;if(h&&U[0]!=="/"){const se=h.record.path,_e=se[se.length-1]==="/"?"":"/";$.path=h.record.path+(U&&_e+U)}if(T=KI($,h,_),d?d.alias.push(T):(O=O||T,O!==T&&O.alias.push(T),p&&l.name&&!ad(T)&&o(l.name)),m.children){const se=m.children;for(let _e=0;_e<se.length;_e++)i(se[_e],T,d&&d.children[_e])}d=d||T,(T.record.components&&Object.keys(T.record.components).length||T.record.name||T.record.redirect)&&c(T)}return O?()=>{o(O)}:Lr}function o(l){if(hg(l)){const h=s.get(l);h&&(s.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&s.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&BI(l,n[h])>=0&&(l.record.path!==n[h].record.path||!fg(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!ad(l)&&s.set(l.record.name,l)}function u(l,h){let d,p={},m,_;if("name"in l&&l.name){if(d=s.get(l.name),!d)throw Ws(1,{location:l});_=d.record.name,p=de(od(h.params,d.keys.filter(O=>!O.optional).map(O=>O.name)),l.params&&od(l.params,d.keys.map(O=>O.name))),m=d.stringify(p)}else if("path"in l)m=l.path,d=n.find(O=>O.re.test(m)),d&&(p=d.parse(m),_=d.record.name);else{if(d=h.name?s.get(h.name):n.find(O=>O.re.test(h.path)),!d)throw Ws(1,{location:l,currentLocation:h});_=d.record.name,p=de({},h.params,l.params),m=d.stringify(p)}const v=[];let T=d;for(;T;)v.unshift(T.record),T=T.parent;return{name:_,path:m,params:p,matched:v,meta:QI(v)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function od(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function WI(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:GI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function GI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function ad(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function QI(t){return t.reduce((e,n)=>de(e,n.meta),{})}function cd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function fg(t,e){return e.children.some(n=>n===t||fg(t,n))}const pg=/#/g,XI=/&/g,YI=/\//g,JI=/=/g,ZI=/\?/g,gg=/\+/g,eT=/%5B/g,tT=/%5D/g,mg=/%5E/g,nT=/%60/g,yg=/%7B/g,sT=/%7C/g,vg=/%7D/g,rT=/%20/g;function Hu(t){return encodeURI(""+t).replace(sT,"|").replace(eT,"[").replace(tT,"]")}function iT(t){return Hu(t).replace(yg,"{").replace(vg,"}").replace(mg,"^")}function Fc(t){return Hu(t).replace(gg,"%2B").replace(rT,"+").replace(pg,"%23").replace(XI,"%26").replace(nT,"`").replace(yg,"{").replace(vg,"}").replace(mg,"^")}function oT(t){return Fc(t).replace(JI,"%3D")}function aT(t){return Hu(t).replace(pg,"%23").replace(ZI,"%3F")}function cT(t){return t==null?"":aT(t).replace(YI,"%2F")}function So(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function uT(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(gg," "),o=i.indexOf("="),a=So(o<0?i:i.slice(0,o)),c=o<0?null:So(i.slice(o+1));if(a in e){let u=e[a];Vt(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function ud(t){let e="";for(let n in t){const s=t[n];if(n=oT(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Vt(s)?s.map(i=>i&&Fc(i)):[s&&Fc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function lT(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Vt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const hT=Symbol(""),ld=Symbol(""),oa=Symbol(""),qu=Symbol(""),Vc=Symbol("");function vr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function En(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ws(4,{from:n,to:e})):h instanceof Error?a(h):MI(h)?a(Ws(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(s&&s.instances[r],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Ya(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(dT(a)){const u=(a.__vccOpts||a)[e];u&&r.push(En(u,n,s,i,o))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=vI(u)?u.default:u;i.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&En(d,n,s,i,o)()}))}}return r}function dT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function hd(t){const e=Mt(oa),n=Mt(qu),s=dt(()=>e.resolve(Fs(t.to))),r=dt(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(zs.bind(null,l));if(d>-1)return d;const p=dd(c[u-2]);return u>1&&dd(l)===p&&h[h.length-1].path!==p?h.findIndex(zs.bind(null,c[u-2])):d}),i=dt(()=>r.value>-1&&mT(n.params,s.value.params)),o=dt(()=>r.value>-1&&r.value===n.matched.length-1&&ug(n.params,s.value.params));function a(c={}){return gT(c)?e[Fs(t.replace)?"replace":"push"](Fs(t.to)).catch(Lr):Promise.resolve()}return{route:s,href:dt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const fT=Jf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:hd,setup(t,{slots:e}){const n=Bn(hd(t)),{options:s}=Mt(oa),r=dt(()=>({[fd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[fd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:yp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),pT=fT;function gT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function mT(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Vt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function dd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const fd=(t,e,n)=>t!=null?t:e!=null?e:n,yT=Jf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Mt(Vc),r=dt(()=>t.route||s.value),i=Mt(ld,0),o=dt(()=>{let u=Fs(i);const{matched:l}=r.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=dt(()=>r.value.matched[o.value]);to(ld,dt(()=>o.value+1)),to(hT,a),to(Vc,r);const c=fe();return Vs(()=>[c.value,a.value,t.name],([u,l,h],[d,p,m])=>{l&&(l.instances[h]=u,p&&p!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),u&&l&&(!p||!zs(l,p)||!d)&&(l.enterCallbacks[h]||[]).forEach(_=>_(u))},{flush:"post"}),()=>{const u=r.value,l=t.name,h=a.value,d=h&&h.components[l];if(!d)return pd(n.default,{Component:d,route:u});const p=h.props[l],m=p?p===!0?u.params:typeof p=="function"?p(u):p:null,v=yp(d,de({},m,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return pd(n.default,{Component:v,route:u})||v}}});function pd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const vT=yT;function _T(t){const e=zI(t.routes,t),n=t.parseQuery||uT,s=t.stringifyQuery||ud,r=t.history,i=vr(),o=vr(),a=vr(),c=Wv(vn);let u=vn;Ds&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Qa.bind(null,w=>""+w),h=Qa.bind(null,cT),d=Qa.bind(null,So);function p(w,M){let D,F;return hg(w)?(D=e.getRecordMatcher(w),F=M):F=w,e.addRoute(F,D)}function m(w){const M=e.getRecordMatcher(w);M&&e.removeRoute(M)}function _(){return e.getRoutes().map(w=>w.record)}function v(w){return!!e.getRecordMatcher(w)}function T(w,M){if(M=de({},M||c.value),typeof w=="string"){const X=Xa(n,w,M.path),f=e.resolve({path:X.path},M),g=r.createHref(X.fullPath);return de(X,f,{params:d(f.params),hash:So(X.hash),redirectedFrom:void 0,href:g})}let D;if("path"in w)D=de({},w,{path:Xa(n,w.path,M.path).path});else{const X=de({},w.params);for(const f in X)X[f]==null&&delete X[f];D=de({},w,{params:h(w.params)}),M.params=h(M.params)}const F=e.resolve(D,M),he=w.hash||"";F.params=l(d(F.params));const Ee=EI(s,de({},w,{hash:iT(he),path:F.path})),ee=r.createHref(Ee);return de({fullPath:Ee,hash:he,query:s===ud?lT(w.query):w.query||{}},F,{redirectedFrom:void 0,href:ee})}function O(w){return typeof w=="string"?Xa(n,w,c.value.path):de({},w)}function $(w,M){if(u!==w)return Ws(8,{from:M,to:w})}function U(w){return Ne(w)}function se(w){return U(de(O(w),{replace:!0}))}function _e(w){const M=w.matched[w.matched.length-1];if(M&&M.redirect){const{redirect:D}=M;let F=typeof D=="function"?D(w):D;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=O(F):{path:F},F.params={}),de({query:w.query,hash:w.hash,params:"path"in F?{}:w.params},F)}}function Ne(w,M){const D=u=T(w),F=c.value,he=w.state,Ee=w.force,ee=w.replace===!0,X=_e(D);if(X)return Ne(de(O(X),{state:typeof X=="object"?de({},he,X.state):he,force:Ee,replace:ee}),M||D);const f=D;f.redirectedFrom=M;let g;return!Ee&&bI(s,F,D)&&(g=Ws(16,{to:f,from:F}),Es(F,F,!0,!1)),(g?Promise.resolve(g):le(f,F)).catch(y=>en(y)?en(y,2)?y:mt(y):we(y,f,F)).then(y=>{if(y){if(en(y,2))return Ne(de({replace:ee},O(y.to),{state:typeof y.to=="object"?de({},he,y.to.state):he,force:Ee}),M||f)}else y=ze(f,F,!0,ee,he);return Ie(f,F,y),y})}function J(w,M){const D=$(w,M);return D?Promise.reject(D):Promise.resolve()}function le(w,M){let D;const[F,he,Ee]=wT(w,M);D=Ya(F.reverse(),"beforeRouteLeave",w,M);for(const X of F)X.leaveGuards.forEach(f=>{D.push(En(f,w,M))});const ee=J.bind(null,w,M);return D.push(ee),Ts(D).then(()=>{D=[];for(const X of i.list())D.push(En(X,w,M));return D.push(ee),Ts(D)}).then(()=>{D=Ya(he,"beforeRouteUpdate",w,M);for(const X of he)X.updateGuards.forEach(f=>{D.push(En(f,w,M))});return D.push(ee),Ts(D)}).then(()=>{D=[];for(const X of w.matched)if(X.beforeEnter&&!M.matched.includes(X))if(Vt(X.beforeEnter))for(const f of X.beforeEnter)D.push(En(f,w,M));else D.push(En(X.beforeEnter,w,M));return D.push(ee),Ts(D)}).then(()=>(w.matched.forEach(X=>X.enterCallbacks={}),D=Ya(Ee,"beforeRouteEnter",w,M),D.push(ee),Ts(D))).then(()=>{D=[];for(const X of o.list())D.push(En(X,w,M));return D.push(ee),Ts(D)}).catch(X=>en(X,8)?X:Promise.reject(X))}function Ie(w,M,D){for(const F of a.list())F(w,M,D)}function ze(w,M,D,F,he){const Ee=$(w,M);if(Ee)return Ee;const ee=M===vn,X=Ds?history.state:{};D&&(F||ee?r.replace(w.fullPath,de({scroll:ee&&X&&X.scroll},he)):r.push(w.fullPath,he)),c.value=w,Es(w,M,D,ee),mt()}let We;function Dt(){We||(We=r.listen((w,M,D)=>{if(!gr.listening)return;const F=T(w),he=_e(F);if(he){Ne(de(he,{replace:!0}),F).catch(Lr);return}u=F;const Ee=c.value;Ds&&DI(td(Ee.fullPath,D.delta),ia()),le(F,Ee).catch(ee=>en(ee,12)?ee:en(ee,2)?(Ne(ee.to,F).then(X=>{en(X,20)&&!D.delta&&D.type===ti.pop&&r.go(-1,!1)}).catch(Lr),Promise.reject()):(D.delta&&r.go(-D.delta,!1),we(ee,F,Ee))).then(ee=>{ee=ee||ze(F,Ee,!1),ee&&(D.delta&&!en(ee,8)?r.go(-D.delta,!1):D.type===ti.pop&&en(ee,20)&&r.go(-1,!1)),Ie(F,Ee,ee)}).catch(Lr)}))}let gn=vr(),ws=vr(),Ue;function we(w,M,D){mt(w);const F=ws.list();return F.length?F.forEach(he=>he(w,M,D)):console.error(w),Promise.reject(w)}function ge(){return Ue&&c.value!==vn?Promise.resolve():new Promise((w,M)=>{gn.add([w,M])})}function mt(w){return Ue||(Ue=!w,Dt(),gn.list().forEach(([M,D])=>w?D(w):M()),gn.reset()),w}function Es(w,M,D,F){const{scrollBehavior:he}=t;if(!Ds||!he)return Promise.resolve();const Ee=!D&&OI(td(w.fullPath,0))||(F||!D)&&history.state&&history.state.scroll||null;return Bf().then(()=>he(w,M,Ee)).then(ee=>ee&&RI(ee)).catch(ee=>we(ee,w,M))}const Zt=w=>r.go(w);let Bt;const bt=new Set,gr={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,hasRoute:v,getRoutes:_,resolve:T,options:t,push:U,replace:se,go:Zt,back:()=>Zt(-1),forward:()=>Zt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ws.add,isReady:ge,install(w){const M=this;w.component("RouterLink",pT),w.component("RouterView",vT),w.config.globalProperties.$router=M,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>Fs(c)}),Ds&&!Bt&&c.value===vn&&(Bt=!0,U(r.location).catch(he=>{}));const D={};for(const he in vn)D[he]=dt(()=>c.value[he]);w.provide(oa,M),w.provide(qu,Bn(D)),w.provide(Vc,c);const F=w.unmount;bt.add(w),w.unmount=function(){bt.delete(w),bt.size<1&&(u=vn,We&&We(),We=null,c.value=vn,Bt=!1,Ue=!1),F()}}};return gr}function Ts(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function wT(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>zs(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>zs(u,c))||r.push(c))}return[n,s,r]}function cr(){return Mt(oa)}function _g(){return Mt(qu)}const ET=at(" Home "),bT=at(" Feed "),IT={key:0},TT={key:1,class:"pop"},ST=at(" Register "),CT=at(" Login "),kT={__name:"App",setup(t){const e=cr(),n=fe(!0),s=fe(!1),r=Ks();Yp(r,a=>{a?(n.value=!0,a.emailVerified?s.value=!0:s.value=!1):n.value=!1});const i=()=>{Xp(r.currentUser)},o=()=>{Xb(r),e.push("/")};return(a,c)=>{const u=Ln("router-link"),l=Ln("router-view");return pe(),Ae(Re,null,[P("nav",null,[Se(u,{to:"/home"},{default:Tt(()=>[ET]),_:1}),Se(u,{to:"/feed"},{default:Tt(()=>[bT]),_:1}),n.value?(pe(),Ae("span",IT,[P("button",{class:"logout",onClick:o},"Logout"),s.value?(pe(),Ae("p",TT,"Verified!")):(pe(),Ae("button",{key:0,class:"logout pop",onClick:i},"Verify"))])):Pr("",!0),n.value?Pr("",!0):(pe(),Qr(u,{key:1,to:"/register"},{default:Tt(()=>[ST]),_:1})),n.value?Pr("",!0):(pe(),Qr(u,{key:2,to:"/login"},{default:Tt(()=>[CT]),_:1}))]),Se(l)],64)}}};/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var wg="store";function Ku(t){return t===void 0&&(t=null),Mt(t!==null?t:wg)}function ur(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function AT(t){return t!==null&&typeof t=="object"}function RT(t){return t&&typeof t.then=="function"}function DT(t,e){return function(){return t(e)}}function Eg(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function bg(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;aa(t,n,[],t._modules.root,!0),zu(t,n,e)}function zu(t,e,n){var s=t._state,r=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={},a={},c=_v(!0);c.run(function(){ur(i,function(u,l){o[l]=DT(u,t),a[l]=dt(function(){return o[l]()}),Object.defineProperty(t.getters,l,{get:function(){return a[l].value},enumerable:!0})})}),t._state=Bn({data:e}),t._scope=c,t.strict&&LT(t),s&&n&&t._withCommit(function(){s.data=null}),r&&r.stop()}function aa(t,e,n,s,r){var i=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!i&&!r){var a=Wu(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=s.state})}var u=s.context=OT(t,o,n);s.forEachMutation(function(l,h){var d=o+h;NT(t,d,l,u)}),s.forEachAction(function(l,h){var d=l.root?h:o+h,p=l.handler||l;PT(t,d,p,u)}),s.forEachGetter(function(l,h){var d=o+h;xT(t,d,l,u)}),s.forEachChild(function(l,h){aa(t,e,n.concat(h),l,r)})}function OT(t,e,n){var s=e==="",r={dispatch:s?t.dispatch:function(i,o,a){var c=Co(i,o,a),u=c.payload,l=c.options,h=c.type;return(!l||!l.root)&&(h=e+h),t.dispatch(h,u)},commit:s?t.commit:function(i,o,a){var c=Co(i,o,a),u=c.payload,l=c.options,h=c.type;(!l||!l.root)&&(h=e+h),t.commit(h,u,l)}};return Object.defineProperties(r,{getters:{get:s?function(){return t.getters}:function(){return Ig(t,e)}},state:{get:function(){return Wu(t.state,n)}}}),r}function Ig(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(r){if(r.slice(0,s)===e){var i=r.slice(s);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function NT(t,e,n,s){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(o){n.call(t,s.state,o)})}function PT(t,e,n,s){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(o){var a=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return RT(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function xT(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(s.state,s.getters,i.state,i.getters)})}function LT(t){Vs(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Wu(t,e){return e.reduce(function(n,s){return n[s]},t)}function Co(t,e,n){return AT(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var MT="vuex bindings",gd="vuex:mutations",Ja="vuex:actions",Ss="vuex",UT=0;function FT(t,e){yI({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[MT]},function(n){n.addTimelineLayer({id:gd,label:"Vuex Mutations",color:md}),n.addTimelineLayer({id:Ja,label:"Vuex Actions",color:md}),n.addInspector({id:Ss,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===Ss)if(s.filter){var r=[];kg(r,e._modules.root,s.filter,""),s.rootNodes=r}else s.rootNodes=[Cg(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===Ss){var r=s.nodeId;Ig(e,r),s.state=BT(HT(e._modules,r),r==="root"?e.getters:e._makeLocalGettersCache,r)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===Ss){var r=s.nodeId,i=s.path;r!=="root"&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit(function(){s.set(e._state.data,i,s.state.value)})}}),e.subscribe(function(s,r){var i={};s.payload&&(i.payload=s.payload),i.state=r,n.notifyComponentUpdate(),n.sendInspectorTree(Ss),n.sendInspectorState(Ss),n.addTimelineEvent({layerId:gd,event:{time:Date.now(),title:s.type,data:i}})}),e.subscribeAction({before:function(s,r){var i={};s.payload&&(i.payload=s.payload),s._id=UT++,s._time=Date.now(),i.state=r,n.addTimelineEvent({layerId:Ja,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:i}})},after:function(s,r){var i={},o=Date.now()-s._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(i.payload=s.payload),i.state=r,n.addTimelineEvent({layerId:Ja,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:i}})}})})}var md=8702998,VT=6710886,$T=16777215,Tg={label:"namespaced",textColor:$T,backgroundColor:VT};function Sg(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Cg(t,e){return{id:e||"root",label:Sg(e),tags:t.namespaced?[Tg]:[],children:Object.keys(t._children).map(function(n){return Cg(t._children[n],e+n+"/")})}}function kg(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[Tg]:[]}),Object.keys(e._children).forEach(function(r){kg(t,e._children[r],n,s+r+"/")})}function BT(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),r={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var i=jT(e);r.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Sg(o):o,editable:!1,value:$c(function(){return i[o]})}})}return r}function jT(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var r=e,i=s.pop();s.forEach(function(o){r[o]||(r[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),r=r[o]._custom.value}),r[i]=$c(function(){return t[n]})}else e[n]=$c(function(){return t[n]})}),e}function HT(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,r,i){var o=s[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function $c(t){try{return t()}catch(e){return e}}var $t=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},Ag={namespaced:{configurable:!0}};Ag.namespaced.get=function(){return!!this._rawModule.namespaced};$t.prototype.addChild=function(e,n){this._children[e]=n};$t.prototype.removeChild=function(e){delete this._children[e]};$t.prototype.getChild=function(e){return this._children[e]};$t.prototype.hasChild=function(e){return e in this._children};$t.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};$t.prototype.forEachChild=function(e){ur(this._children,e)};$t.prototype.forEachGetter=function(e){this._rawModule.getters&&ur(this._rawModule.getters,e)};$t.prototype.forEachAction=function(e){this._rawModule.actions&&ur(this._rawModule.actions,e)};$t.prototype.forEachMutation=function(e){this._rawModule.mutations&&ur(this._rawModule.mutations,e)};Object.defineProperties($t.prototype,Ag);var gs=function(e){this.register([],e,!1)};gs.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};gs.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,r){return n=n.getChild(r),s+(n.namespaced?r+"/":"")},"")};gs.prototype.update=function(e){Rg([],this.root,e)};gs.prototype.register=function(e,n,s){var r=this;s===void 0&&(s=!0);var i=new $t(n,s);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&ur(n.modules,function(a,c){r.register(e.concat(c),a,s)})};gs.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],r=n.getChild(s);!r||!r.runtime||n.removeChild(s)};gs.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function Rg(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;Rg(t.concat(s),e.getChild(s),n.modules[s])}}function qT(t){return new gt(t)}var gt=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var r=e.strict;r===void 0&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new gs(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var o=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(d,p){return c.call(o,d,p)},this.commit=function(d,p,m){return u.call(o,d,p,m)},this.strict=r;var l=this._modules.root.state;aa(this,l,[],this._modules.root),zu(this,l),s.forEach(function(h){return h(n)})},Gu={state:{configurable:!0}};gt.prototype.install=function(e,n){e.provide(n||wg,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&FT(e,this)};Gu.state.get=function(){return this._state.data};Gu.state.set=function(t){};gt.prototype.commit=function(e,n,s){var r=this,i=Co(e,n,s),o=i.type,a=i.payload,c={type:o,payload:a},u=this._mutations[o];!u||(this._withCommit(function(){u.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(l){return l(c,r.state)}))};gt.prototype.dispatch=function(e,n){var s=this,r=Co(e,n),i=r.type,o=r.payload,a={type:i,payload:o},c=this._actions[i];if(!!c){try{this._actionSubscribers.slice().filter(function(l){return l.before}).forEach(function(l){return l.before(a,s.state)})}catch{}var u=c.length>1?Promise.all(c.map(function(l){return l(o)})):c[0](o);return new Promise(function(l,h){u.then(function(d){try{s._actionSubscribers.filter(function(p){return p.after}).forEach(function(p){return p.after(a,s.state)})}catch{}l(d)},function(d){try{s._actionSubscribers.filter(function(p){return p.error}).forEach(function(p){return p.error(a,s.state,d)})}catch{}h(d)})})}};gt.prototype.subscribe=function(e,n){return Eg(e,this._subscribers,n)};gt.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return Eg(s,this._actionSubscribers,n)};gt.prototype.watch=function(e,n,s){var r=this;return Vs(function(){return e(r.state,r.getters)},n,Object.assign({},s))};gt.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};gt.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),aa(this,this.state,e,this._modules.get(e),s.preserveState),zu(this,this.state)};gt.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=Wu(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),bg(this)};gt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};gt.prototype.hotUpdate=function(e){this._modules.update(e),bg(this,!0)};gt.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(gt.prototype,Gu);const ms=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},KT={emits:["loaded","onloadedmetadata"],props:["show","src","refer"],setup(t,e){const n=fe(),s=i=>{n.value=i.target.files[0],r()},r=()=>{let i=document.getElementById("video-preview"),o=new FileReader;o.readAsDataURL(n.value),o.addEventListener("load",function(){i.src=o.result,e.emit("loaded",i.src)})};return{file:n,handleFileUpload:s,previewVideo:r}}},zT=["src"];function WT(t,e,n,s,r,i){return pe(),Ae(Re,null,[Me(P("video",{src:n.src,id:"video-preview",controls:"",ref:"refer"},null,8,zT),[[kn,s.file||!!n.src]]),Me(P("input",{type:"file",accept:"video/*",onChange:e[0]||(e[0]=o=>s.handleFileUpload(o))},null,544),[[kn,n.show]])],64)}const GT=ms(KT,[["render",WT]]);const QT={emits:["loaded"],components:{Video:GT},setup(){const t=Ku(),e=cr(),n=_g(),s=fe(""),r=fe(""),i=fe(""),o=Bn({videos:[]}),a=fe(0);fe(0);const c=async l=>{if(l.preventDefault(),s.value){const h=new Date,d=h.getFullYear()+"-"+(h.getMonth()+1)+"-"+h.getDate();t.commit("addPost",{id:n.query.id?n.query.id:0,date:d,title:s.value,content:i.value,video:o}),n.query.id?e.push("/feed"):e.push("/edit-video")}else r.value="Title field required"},u=l=>{o.videos&&o.videos.push(l)};return pi(()=>{n.query.title&&(s.value=n.query.title),n.query.content&&(i.value=n.query.content),n.query.video&&(o.videos=n.query.video)}),{publish:c,Title:s,validTitle:r,Content:i,video:o,more:a,setVideo:u}}},XT={class:"post"},YT=P("h3",null,"Post",-1),JT=P("label",{class:"label",for:"Title"},"Title",-1),ZT=P("label",{class:"label",for:"Content"},"Content",-1),eS=P("label",{class:"label",for:""},"Video",-1),tS={class:"more"};function nS(t,e,n,s,r,i){const o=Ln("Video");return pe(),Ae("form",null,[P("div",XT,[YT,JT,Me(P("input",{id:"Title","onUpdate:modelValue":e[0]||(e[0]=a=>s.Title=a),type:"text",placeholder:"Title (required)",required:""},null,512),[[St,s.Title]]),ZT,Me(P("textarea",{id:"Content","onUpdate:modelValue":e[1]||(e[1]=a=>s.Content=a),placeholder:"Text"},null,512),[[St,s.Content]]),eS,P("span",null,[Se(o,{src:s.video.videos[0],show:!0,onLoaded:s.setVideo},null,8,["src","onLoaded"])]),(pe(!0),Ae(Re,null,Cu(s.more,a=>(pe(),Ae("span",tS,[Se(o,{src:s.video.videos[a],show:!0,onLoaded:s.setVideo},null,8,["src","onLoaded"])]))),256)),s.more?(pe(),Ae("button",{key:0,onClick:e[2]||(e[2]=Ac(a=>s.more--,["prevent"]))},"Less")):Pr("",!0),P("button",{onClick:e[3]||(e[3]=Ac(a=>s.more++,["prevent"]))},"More"),at(" "+nn(s.validTitle)+" ",1),P("button",{onClick:e[4]||(e[4]=(...a)=>s.publish&&s.publish(...a))},"Publish")])])}const sS=ms(QT,[["render",nS]]),rS={},iS=P("h1",null,"Create your Blogs freely ",-1),oS=at(" Start now creating your own blogs. ");function aS(t,e){const n=Ln("RouterLink");return pe(),Ae(Re,null,[iS,P("p",null,[Se(n,{style:{"text-align":"center",width:"100%"},to:"/feed"},{default:Tt(()=>[oS]),_:1})])],64)}const yd=ms(rS,[["render",aS]]);const cS={class:"container"},uS=P("p",null,"Profile photo",-1),lS=["src"],hS=P("label",{for:"user",class:"username"},"Username",-1),dS=P("label",{for:"first",class:"firstname"},"Firstname",-1),fS=P("label",{for:"last",class:"lastname"},"Lastname",-1),pS=P("label",{for:"number"},"Phone Number",-1),gS={__name:"Profile",emits:["sendRegistration"],setup(t,{emit:e}){const n=fe(),s=fe(),r=fe(""),i=fe(""),o=fe(""),a=fe(),c=l=>{l.preventDefault(),s.value={image:n.value,username:r.value,firstname:i.value,lastname:o.value,number:a.value},e("sendRegistration",s.value)},u=l=>{let h=l.target.files[0],d=new FileReader;d.readAsDataURL(h),d.addEventListener("load",function(){n.value=d.result})};return(l,h)=>(pe(),Ae("div",null,[P("form",cS,[uS,Me(P("img",{src:n.value,alt:"",width:"250",height:"250",class:"photo"},null,8,lS),[[kn,n.value]]),P("input",{class:"photo",type:"file",accept:"image/*",onChange:h[0]||(h[0]=d=>u(d))},null,32),hS,Me(P("input",{type:"text","onUpdate:modelValue":h[1]||(h[1]=d=>r.value=d),class:"username"},null,512),[[St,r.value]]),dS,Me(P("input",{type:"text","onUpdate:modelValue":h[2]||(h[2]=d=>i.value=d),class:"firstname"},null,512),[[St,i.value]]),fS,Me(P("input",{type:"text","onUpdate:modelValue":h[3]||(h[3]=d=>o.value=d),class:"lastname"},null,512),[[St,o.value]]),pS,Me(P("input",{type:"number","onUpdate:modelValue":h[4]||(h[4]=d=>a.value=d),class:"phone"},null,512),[[St,a.value]]),P("p",null,[P("button",{onClick:c},"Submit")])])]))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg="firebasestorage.googleapis.com",Og="storageBucket",mS=2*60*1e3,yS=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends Jt{constructor(e,n,s=0){super(Za(e),`Firebase Storage: ${n} (${Za(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Pe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Za(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Za(t){return"storage/"+t}function Qu(){const t="An unknown error occurred, please check the error payload for server response.";return new Pe("unknown",t)}function vS(t){return new Pe("object-not-found","Object '"+t+"' does not exist.")}function _S(t){return new Pe("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function wS(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Pe("unauthenticated",t)}function ES(){return new Pe("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function bS(t){return new Pe("unauthorized","User does not have permission to access '"+t+"'.")}function IS(){return new Pe("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function TS(){return new Pe("canceled","User canceled the upload/download.")}function SS(t){return new Pe("invalid-url","Invalid URL '"+t+"'.")}function CS(t){return new Pe("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function kS(){return new Pe("no-default-bucket","No default bucket found. Did you set the '"+Og+"' property when initializing the app?")}function AS(){return new Pe("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function RS(){return new Pe("no-download-url","The given file does not have any download URLs.")}function Bc(t){return new Pe("invalid-argument",t)}function Ng(){return new Pe("app-deleted","The Firebase app was deleted.")}function DS(t){return new Pe("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ur(t,e){return new Pe("invalid-format","String does not match format '"+t+"': "+e)}function _r(t){throw new Pe("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=_t.makeFromUrl(e,n)}catch{return new _t(e,"")}if(s.path==="")return s;throw CS(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(U){U.path_=decodeURIComponent(U.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),m={bucket:1,path:3},_=n===Dg?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",T=new RegExp(`^https?://${_}/${r}/${v}`,"i"),$=[{regex:a,indices:c,postModify:i},{regex:p,indices:m,postModify:u},{regex:T,indices:{bucket:1,path:2},postModify:u}];for(let U=0;U<$.length;U++){const se=$[U],_e=se.regex.exec(e);if(_e){const Ne=_e[se.indices.bucket];let J=_e[se.indices.path];J||(J=""),s=new _t(Ne,J),se.postModify(s);break}}if(s==null)throw SS(e);return s}}class OS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...v){u||(u=!0,e.apply(null,v))}function h(v){r=setTimeout(()=>{r=null,t(p,c())},v)}function d(){i&&clearTimeout(i)}function p(v,...T){if(u){d();return}if(v){d(),l.call(null,v,...T);return}if(c()||o){d(),l.call(null,v,...T);return}s<64&&(s*=2);let $;a===1?(a=2,$=0):$=(s+Math.random())*1e3,h($)}let m=!1;function _(v){m||(m=!0,d(),!u&&(r!==null?(v||(a=2),clearTimeout(r),h(0)):v||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,_(!0)},n),_}function PS(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(t){return t!==void 0}function LS(t){return typeof t=="object"&&!Array.isArray(t)}function Xu(t){return typeof t=="string"||t instanceof String}function vd(t){return Yu()&&t instanceof Blob}function Yu(){return typeof Blob<"u"&&!xw()}function _d(t,e,n,s){if(s<e)throw Bc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Bc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Pg(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(rs||(rs={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e,n,s,r,i,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new qi(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===rs.NO_ERROR,c=i.getStatus();if((!a||MS(c,this.additionalRetryCodes_))&&this.retry){const l=i.getErrorCode()===rs.ABORT;s(!1,new qi(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new qi(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());xS(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Qu();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?Ng():TS();o(c)}else{const c=IS();o(c)}};this.canceled_?n(!1,new qi(!1,null,!0)):this.backoffId_=NS(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&PS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class qi{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function FS(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function VS(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function $S(t,e){e&&(t["X-Firebase-GMPID"]=e)}function BS(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function jS(t,e,n,s,r,i,o=!0){const a=Pg(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return $S(u,e),FS(u,n),VS(u,i),BS(u,s),new US(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function qS(...t){const e=HS();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Yu())return new Blob(t);throw new Pe("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function KS(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zS(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ec{constructor(e,n){this.data=e,this.contentType=n||null}}function xg(t,e){switch(t){case xt.RAW:return new ec(Lg(e));case xt.BASE64:case xt.BASE64URL:return new ec(Mg(t,e));case xt.DATA_URL:return new ec(GS(e),QS(e))}throw Qu()}function Lg(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function WS(t){let e;try{e=decodeURIComponent(t)}catch{throw Ur(xt.DATA_URL,"Malformed data URL.")}return Lg(e)}function Mg(t,e){switch(t){case xt.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Ur(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case xt.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Ur(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=zS(e)}catch{throw Ur(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Ug{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ur(xt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=XS(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function GS(t){const e=new Ug(t);return e.base64?Mg(xt.BASE64,e.rest):WS(e.rest)}function QS(t){return new Ug(t).contentType}function XS(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n){let s=0,r="";vd(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(vd(this.data_)){const s=this.data_,r=KS(s,e,n);return r===null?null:new Cn(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Cn(s,!0)}}static getBlob(...e){if(Yu()){const n=e.map(s=>s instanceof Cn?s.data_:s);return new Cn(qS.apply(null,n))}else{const n=e.map(o=>Xu(o)?xg(xt.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new Cn(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(t){let e;try{e=JSON.parse(t)}catch{return null}return LS(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function JS(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Vg(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(t,e){return e}class ct{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||ZS}}let Ki=null;function eC(t){return!Xu(t)||t.length<2?t:Vg(t)}function $g(){if(Ki)return Ki;const t=[];t.push(new ct("bucket")),t.push(new ct("generation")),t.push(new ct("metageneration")),t.push(new ct("name","fullPath",!0));function e(i,o){return eC(o)}const n=new ct("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new ct("size");return r.xform=s,t.push(r),t.push(new ct("timeCreated")),t.push(new ct("updated")),t.push(new ct("md5Hash",null,!0)),t.push(new ct("cacheControl",null,!0)),t.push(new ct("contentDisposition",null,!0)),t.push(new ct("contentEncoding",null,!0)),t.push(new ct("contentLanguage",null,!0)),t.push(new ct("contentType",null,!0)),t.push(new ct("metadata","customMetadata",!0)),Ki=t,Ki}function tC(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new _t(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function nC(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return tC(s,t),s}function Bg(t,e,n){const s=Fg(e);return s===null?null:nC(t,s,n)}function sC(t,e,n,s){const r=Fg(e);if(r===null||!Xu(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,h=t.fullPath,d="/b/"+o(l)+"/o/"+o(h),p=Ju(d,n,s),m=Pg({alt:"media",token:u});return p+m})[0]}function rC(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class jg{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t){if(!t)throw Qu()}function iC(t,e){function n(s,r){const i=Bg(t,r,e);return Hg(i!==null),i}return n}function oC(t,e){function n(s,r){const i=Bg(t,r,e);return Hg(i!==null),sC(i,r,t.host,t._protocol)}return n}function qg(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=ES():r=wS():n.getStatus()===402?r=_S(t.bucket):n.getStatus()===403?r=bS(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function aC(t){const e=qg(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=vS(t.path)),i.serverResponse=r.serverResponse,i}return n}function cC(t,e,n){const s=e.fullServerUrl(),r=Ju(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new jg(r,i,oC(t,n),o);return a.errorHandler=aC(e),a}function uC(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function lC(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=uC(null,e)),s}function hC(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let $="";for(let U=0;U<2;U++)$=$+Math.random().toString().slice(2);return $}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=lC(e,s,r),l=rC(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",p=Cn.getBlob(h,s,d);if(p===null)throw AS();const m={name:u.fullPath},_=Ju(i,t.host,t._protocol),v="POST",T=t.maxUploadRetryTime,O=new jg(_,v,iC(t,n),T);return O.urlParams=m,O.headers=o,O.body=p.uploadData(),O.errorHandler=qg(e),O}class dC{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=rs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=rs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=rs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw _r("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw _r("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw _r("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw _r("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw _r("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class fC extends dC{initXhr(){this.xhr_.responseType="text"}}function Kg(){return new fC}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n){this._service=e,n instanceof _t?this._location=n:this._location=_t.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new hs(e,n)}get root(){const e=new _t(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Vg(this._location.path)}get storage(){return this._service}get parent(){const e=YS(this._location.path);if(e===null)return null;const n=new _t(this._location.bucket,e);return new hs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw DS(e)}}function pC(t,e,n){t._throwIfRoot("uploadBytes");const s=hC(t.storage,t._location,$g(),new Cn(e,!0),n);return t.storage.makeRequestWithTokens(s,Kg).then(r=>({metadata:r,ref:t}))}function gC(t,e,n=xt.RAW,s){t._throwIfRoot("uploadString");const r=xg(n,e),i=Object.assign({},s);return i.contentType==null&&r.contentType!=null&&(i.contentType=r.contentType),pC(t,r.data,i)}function mC(t){t._throwIfRoot("getDownloadURL");const e=cC(t.storage,t._location,$g());return t.storage.makeRequestWithTokens(e,Kg).then(n=>{if(n===null)throw RS();return n})}function yC(t,e){const n=JS(t._location.path,e),s=new _t(t._location.bucket,n);return new hs(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(t){return/^[A-Za-z]+:\/\//.test(t)}function _C(t,e){return new hs(t,e)}function zg(t,e){if(t instanceof Zu){const n=t;if(n._bucket==null)throw kS();const s=new hs(n,n._bucket);return e!=null?zg(s,e):s}else return e!==void 0?yC(t,e):t}function wC(t,e){if(e&&vC(e)){if(t instanceof Zu)return _C(t,e);throw Bc("To use ref(service, url), the first argument must be a Storage instance.")}else return zg(t,e)}function wd(t,e){const n=e==null?void 0:e[Og];return n==null?null:_t.makeFromBucketSpec(n,t)}function EC(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Sp(r,t.app.options.projectId))}class Zu{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Dg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=mS,this._maxUploadRetryTime=yS,this._requests=new Set,r!=null?this._bucket=_t.makeFromBucketSpec(r,this._host):this._bucket=wd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=_t.makeFromBucketSpec(this._url,e):this._bucket=wd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){_d("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){_d("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new hs(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new OS(Ng());{const o=jS(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Ed="@firebase/storage",bd="0.9.13";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="storage";function Gg(t,e,n,s){return t=De(t),gC(t,e,n,s)}function Qg(t){return t=De(t),mC(t)}function Xg(t,e){return t=De(t),wC(t,e)}function Yg(t=Pu(),e){t=De(t);const s=ta(t,Wg).getImmediate({identifier:e}),r=Ip("storage");return r&&bC(s,...r),s}function bC(t,e,n,s={}){EC(t,e,n,s)}function IC(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Zu(n,s,r,e,rr)}function TC(){cs(new Un(Wg,IC,"PUBLIC").setMultipleInstances(!0)),Wt(Ed,bd,""),Wt(Ed,bd,"esm2017")}TC();const SC=P("h1",null,"Create an Account",-1),CC={key:0},kC={style:{"text-decoration":"none"}},AC=at("Already have an account? "),RC=at("Login!"),DC={__name:"Register",setup(t){const e=fe(!1),n=fe(""),s=fe(""),r=cr(),i=o=>{const a=Ks();zb(a,n.value,s.value).then(c=>{if(o.image){const u=Yg(),l=Xg(u,`images/${c.user.uid}.jpg`);Gg(l,o.image,"data_url").then(h=>{Qg(h.ref).then(d=>{c.photoURL=d})})}c.displayName=o.username,c.phoneNumber=o.number,r.push("/feed"),Xp(a.currentUser)}).catch(c=>{console.log(c.code),alert(c.message)})};return(o,a)=>{const c=Ln("router-link");return pe(),Ae(Re,null,[SC,e.value?Pr("",!0):(pe(),Ae("form",CC,[P("p",null,[Me(P("input",{type:"text",autocomplete:"email",placeholder:"Email","onUpdate:modelValue":a[0]||(a[0]=u=>n.value=u)},null,512),[[St,n.value]])]),P("p",null,[Me(P("input",{type:"password",autocomplete:"current-password",placeholder:"Password","onUpdate:modelValue":a[1]||(a[1]=u=>s.value=u)},null,512),[[St,s.value]])])])),Me(Se(gS,{onSendRegistration:i},null,512),[[kn,e.value]]),P("p",null,[e.value?(pe(),Ae("button",{key:0,onClick:a[2]||(a[2]=u=>e.value=!1)},"Back")):(pe(),Ae("button",{key:1,onClick:a[3]||(a[3]=u=>e.value=!0)},"Register"))]),P("p",kC,[AC,Se(c,{to:"/login"},{default:Tt(()=>[RC]),_:1})])],64)}}},OC=P("h1",null,"Login to your Account",-1),NC={style:{"text-decoration":"none"}},PC=at("Don't have an account? "),xC=at("Sign up!"),LC={__name:"Login",setup(t){const e=fe(""),n=fe(""),s=cr(),r=fe(),i=()=>{const o=Ks();Wb(o,e.value,n.value).then(a=>{s.push("/feed")}).catch(a=>{switch(a.code){case"auth/invalid-email":r.value="Invalid email";break;case"auth/user-not-found":r.value="No account with that email was found";break;case"auth/wrong-password":r.value="Incorrect password";break;default:r.value="Email or password was incorrect";break}})};return(o,a)=>{const c=Ln("router-link");return pe(),Ae(Re,null,[OC,P("p",null,[Me(P("input",{type:"text",placeholder:"Email","onUpdate:modelValue":a[0]||(a[0]=u=>e.value=u)},null,512),[[St,e.value]])]),P("p",null,[Me(P("input",{type:"password",placeholder:"Password","onUpdate:modelValue":a[1]||(a[1]=u=>n.value=u)},null,512),[[St,n.value]])]),P("p",null,[P("button",{onClick:i},"Submit")]),P("p",NC,[PC,Se(c,{to:"/register"},{default:Tt(()=>[xC]),_:1})]),at(" "+nn(r.value),1)],64)}}};var MC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,el=el||{},z=MC||self;function ko(){}function ca(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function bi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function UC(t){return Object.prototype.hasOwnProperty.call(t,tc)&&t[tc]||(t[tc]=++FC)}var tc="closure_uid_"+(1e9*Math.random()>>>0),FC=0;function VC(t,e,n){return t.call.apply(t.bind,arguments)}function $C(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function nt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?nt=VC:nt=$C,nt.apply(null,arguments)}function zi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ye(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function jn(){this.s=this.s,this.o=this.o}var BC=0;jn.prototype.s=!1;jn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),BC!=0)&&UC(this)};jn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Jg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function tl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Id(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ca(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function st(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var jC=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",ko,e),z.removeEventListener("test",ko,e)}catch{}return t}();function Ao(t){return/^[\s\xa0]*$/.test(t)}var Td=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function nc(t,e){return t<e?-1:t>e?1:0}function ua(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function zt(t){return ua().indexOf(t)!=-1}function nl(t){return nl[" "](t),t}nl[" "]=ko;function HC(t){var e=zC;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var qC=zt("Opera"),Gs=zt("Trident")||zt("MSIE"),Zg=zt("Edge"),jc=Zg||Gs,em=zt("Gecko")&&!(ua().toLowerCase().indexOf("webkit")!=-1&&!zt("Edge"))&&!(zt("Trident")||zt("MSIE"))&&!zt("Edge"),KC=ua().toLowerCase().indexOf("webkit")!=-1&&!zt("Edge");function tm(){var t=z.document;return t?t.documentMode:void 0}var Ro;e:{var sc="",rc=function(){var t=ua();if(em)return/rv:([^\);]+)(\)|;)/.exec(t);if(Zg)return/Edge\/([\d\.]+)/.exec(t);if(Gs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(KC)return/WebKit\/(\S+)/.exec(t);if(qC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(rc&&(sc=rc?rc[1]:""),Gs){var ic=tm();if(ic!=null&&ic>parseFloat(sc)){Ro=String(ic);break e}}Ro=sc}var zC={};function WC(){return HC(function(){let t=0;const e=Td(String(Ro)).split("."),n=Td("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=nc(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||nc(r[2].length==0,i[2].length==0)||nc(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Hc;if(z.document&&Gs){var Sd=tm();Hc=Sd||parseInt(Ro,10)||void 0}else Hc=void 0;var GC=Hc;function ni(t,e){if(st.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(em){e:{try{nl(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:QC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ni.X.h.call(this)}}Ye(ni,st);var QC={2:"touch",3:"pen",4:"mouse"};ni.prototype.h=function(){ni.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ii="closure_listenable_"+(1e6*Math.random()|0),XC=0;function YC(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++XC,this.ba=this.ea=!1}function la(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function sl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function nm(t){const e={};for(const n in t)e[n]=t[n];return e}const Cd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sm(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Cd.length;i++)n=Cd[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ha(t){this.src=t,this.g={},this.h=0}ha.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Kc(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new YC(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function qc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Jg(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(la(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Kc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var rl="closure_lm_"+(1e6*Math.random()|0),oc={};function rm(t,e,n,s,r){if(s&&s.once)return om(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)rm(t,e[i],n,s,r);return null}return n=al(n),t&&t[Ii]?t.N(e,n,bi(s)?!!s.capture:!!s,r):im(t,e,n,!1,s,r)}function im(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=bi(r)?!!r.capture:!!r,a=ol(t);if(a||(t[rl]=a=new ha(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=JC(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)jC||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(cm(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function JC(){function t(n){return e.call(t.src,t.listener,n)}const e=ZC;return t}function om(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)om(t,e[i],n,s,r);return null}return n=al(n),t&&t[Ii]?t.O(e,n,bi(s)?!!s.capture:!!s,r):im(t,e,n,!0,s,r)}function am(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)am(t,e[i],n,s,r);else s=bi(s)?!!s.capture:!!s,n=al(n),t&&t[Ii]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Kc(i,n,s,r),-1<n&&(la(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=ol(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Kc(e,n,s,r)),(n=-1<t?e[t]:null)&&il(n))}function il(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ii])qc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(cm(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=ol(e))?(qc(n,t),n.h==0&&(n.src=null,e[rl]=null)):la(t)}}}function cm(t){return t in oc?oc[t]:oc[t]="on"+t}function ZC(t,e){if(t.ba)t=!0;else{e=new ni(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&il(t),t=n.call(s,e)}return t}function ol(t){return t=t[rl],t instanceof ha?t:null}var ac="__closure_events_fn_"+(1e9*Math.random()>>>0);function al(t){return typeof t=="function"?t:(t[ac]||(t[ac]=function(e){return t.handleEvent(e)}),t[ac])}function Ke(){jn.call(this),this.i=new ha(this),this.P=this,this.I=null}Ye(Ke,jn);Ke.prototype[Ii]=!0;Ke.prototype.removeEventListener=function(t,e,n,s){am(this,t,e,n,s)};function Xe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new st(e,t);else if(e instanceof st)e.target=e.target||t;else{var r=e;e=new st(s,t),sm(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Wi(o,s,!0,e)&&r}if(o=e.g=t,r=Wi(o,s,!0,e)&&r,r=Wi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Wi(o,s,!1,e)&&r}Ke.prototype.M=function(){if(Ke.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)la(n[s]);delete t.g[e],t.h--}}this.I=null};Ke.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ke.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Wi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&qc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var cl=z.JSON.stringify;function ek(){var t=hm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class tk{constructor(){this.h=this.g=null}add(e,n){const s=um.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var um=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new nk,t=>t.reset());class nk{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function sk(t){z.setTimeout(()=>{throw t},0)}function lm(t,e){zc||rk(),Wc||(zc(),Wc=!0),hm.add(t,e)}var zc;function rk(){var t=z.Promise.resolve(void 0);zc=function(){t.then(ik)}}var Wc=!1,hm=new tk;function ik(){for(var t;t=ek();){try{t.h.call(t.g)}catch(n){sk(n)}var e=um;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Wc=!1}function da(t,e){Ke.call(this),this.h=t||1,this.g=e||z,this.j=nt(this.lb,this),this.l=Date.now()}Ye(da,Ke);L=da.prototype;L.ca=!1;L.R=null;L.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Xe(this,"tick"),this.ca&&(ul(this),this.start()))}};L.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ul(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}L.M=function(){da.X.M.call(this),ul(this),delete this.g};function ll(t,e,n){if(typeof t=="function")n&&(t=nt(t,n));else if(t&&typeof t.handleEvent=="function")t=nt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function dm(t){t.g=ll(()=>{t.g=null,t.i&&(t.i=!1,dm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ok extends jn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:dm(this)}M(){super.M(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function si(t){jn.call(this),this.h=t,this.g={}}Ye(si,jn);var kd=[];function fm(t,e,n,s){Array.isArray(n)||(n&&(kd[0]=n.toString()),n=kd);for(var r=0;r<n.length;r++){var i=rm(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function pm(t){sl(t.g,function(e,n){this.g.hasOwnProperty(n)&&il(e)},t),t.g={}}si.prototype.M=function(){si.X.M.call(this),pm(this)};si.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function fa(){this.g=!0}fa.prototype.Aa=function(){this.g=!1};function ak(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function ck(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Ps(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+lk(t,n)+(s?" "+s:"")})}function uk(t,e){t.info(function(){return"TIMEOUT: "+e})}fa.prototype.info=function(){};function lk(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return cl(n)}catch{return e}}var ys={},Ad=null;function pa(){return Ad=Ad||new Ke}ys.Pa="serverreachability";function gm(t){st.call(this,ys.Pa,t)}Ye(gm,st);function ri(t){const e=pa();Xe(e,new gm(e))}ys.STAT_EVENT="statevent";function mm(t,e){st.call(this,ys.STAT_EVENT,t),this.stat=e}Ye(mm,st);function lt(t){const e=pa();Xe(e,new mm(e,t))}ys.Qa="timingevent";function ym(t,e){st.call(this,ys.Qa,t),this.size=e}Ye(ym,st);function Ti(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var ga={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},vm={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function hl(){}hl.prototype.h=null;function Rd(t){return t.h||(t.h=t.i())}function _m(){}var Si={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function dl(){st.call(this,"d")}Ye(dl,st);function fl(){st.call(this,"c")}Ye(fl,st);var Gc;function ma(){}Ye(ma,hl);ma.prototype.g=function(){return new XMLHttpRequest};ma.prototype.i=function(){return{}};Gc=new ma;function Ci(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new si(this),this.O=hk,t=jc?125:void 0,this.T=new da(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new wm}function wm(){this.i=null,this.g="",this.h=!1}var hk=45e3,Qc={},Do={};L=Ci.prototype;L.setTimeout=function(t){this.O=t};function Xc(t,e,n){t.K=1,t.v=va(ln(e)),t.s=n,t.P=!0,Em(t,null)}function Em(t,e){t.F=Date.now(),ki(t),t.A=ln(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Rm(n.i,"t",s),t.C=0,n=t.l.H,t.h=new wm,t.g=Xm(t.l,n?e:null,!t.s),0<t.N&&(t.L=new ok(nt(t.La,t,t.g),t.N)),fm(t.S,t.g,"readystatechange",t.ib),e=t.H?nm(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ri(),ak(t.j,t.u,t.A,t.m,t.U,t.s)}L.ib=function(t){t=t.target;const e=this.L;e&&on(t)==3?e.l():this.La(t)};L.La=function(t){try{if(t==this.g)e:{const l=on(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||jc||this.g&&(this.h.h||this.g.fa()||Pd(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?ri(3):ri(2)),ya(this);var n=this.g.aa();this.Y=n;t:if(bm(this)){var s=Pd(this.g);t="";var r=s.length,i=on(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jn(this),Fr(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,ck(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ao(a)){var u=a;break t}}u=null}if(n=u)Ps(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Yc(this,n);else{this.i=!1,this.o=3,lt(12),Jn(this),Fr(this);break e}}this.P?(Im(this,l,o),jc&&this.i&&l==3&&(fm(this.S,this.T,"tick",this.hb),this.T.start())):(Ps(this.j,this.m,o,null),Yc(this,o)),l==4&&Jn(this),this.i&&!this.I&&(l==4?zm(this.l,this):(this.i=!1,ki(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,lt(12)):(this.o=0,lt(13)),Jn(this),Fr(this)}}}catch{}finally{}};function bm(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Im(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=dk(t,n),r==Do){e==4&&(t.o=4,lt(14),s=!1),Ps(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Qc){t.o=4,lt(15),Ps(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Ps(t.j,t.m,r,null),Yc(t,r);bm(t)&&r!=Do&&r!=Qc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,lt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),wl(e),e.K=!0,lt(11))):(Ps(t.j,t.m,n,"[Invalid Chunked Response]"),Jn(t),Fr(t))}L.hb=function(){if(this.g){var t=on(this.g),e=this.g.fa();this.C<e.length&&(ya(this),Im(this,t,e),this.i&&t!=4&&ki(this))}};function dk(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Do:(n=Number(e.substring(n,s)),isNaN(n)?Qc:(s+=1,s+n>e.length?Do:(e=e.substr(s,n),t.C=s+n,e)))}L.cancel=function(){this.I=!0,Jn(this)};function ki(t){t.V=Date.now()+t.O,Tm(t,t.O)}function Tm(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ti(nt(t.gb,t),e)}function ya(t){t.B&&(z.clearTimeout(t.B),t.B=null)}L.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(uk(this.j,this.A),this.K!=2&&(ri(),lt(17)),Jn(this),this.o=2,Fr(this)):Tm(this,this.V-t)};function Fr(t){t.l.G==0||t.I||zm(t.l,t)}function Jn(t){ya(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ul(t.T),pm(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Yc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Jc(n.h,t))){if(!t.J&&Jc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Po(n),Ea(n);else break e;_l(n),lt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ti(nt(n.cb,n),6e3));if(1>=Nm(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Zn(n,11)}else if((t.J||n.g==t)&&Po(n),!Ao(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.h;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(pl(i,i.h),i.h=null))}if(s.D){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.za=_,Ce(s.F,s.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Qm(s,s.H?s.ka:null,s.V),o.J){Pm(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(ya(a),ki(a)),s.g=o}else qm(s);0<n.i.length&&ba(n)}else u[0]!="stop"&&u[0]!="close"||Zn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Zn(n,7):vl(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}ri(4)}catch{}}function fk(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ca(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function pk(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ca(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Sm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ca(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=pk(t),s=fk(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Cm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gk(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function is(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof is){this.h=e!==void 0?e:t.h,Oo(this,t.j),this.s=t.s,this.g=t.g,No(this,t.m),this.l=t.l,e=t.i;var n=new ii;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Dd(this,n),this.o=t.o}else t&&(n=String(t).match(Cm))?(this.h=!!e,Oo(this,n[1]||"",!0),this.s=Sr(n[2]||""),this.g=Sr(n[3]||"",!0),No(this,n[4]),this.l=Sr(n[5]||"",!0),Dd(this,n[6]||"",!0),this.o=Sr(n[7]||"")):(this.h=!!e,this.i=new ii(null,this.h))}is.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Cr(e,Od,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Cr(e,Od,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Cr(n,n.charAt(0)=="/"?vk:yk,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Cr(n,wk)),t.join("")};function ln(t){return new is(t)}function Oo(t,e,n){t.j=n?Sr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function No(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Dd(t,e,n){e instanceof ii?(t.i=e,Ek(t.i,t.h)):(n||(e=Cr(e,_k)),t.i=new ii(e,t.h))}function Ce(t,e,n){t.i.set(e,n)}function va(t){return Ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Sr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Cr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,mk),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function mk(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Od=/[#\/\?@]/g,yk=/[#\?:]/g,vk=/[#\?]/g,_k=/[#\?@]/g,wk=/#/g;function ii(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Hn(t){t.g||(t.g=new Map,t.h=0,t.i&&gk(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=ii.prototype;L.add=function(t,e){Hn(this),this.i=null,t=lr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function km(t,e){Hn(t),e=lr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Am(t,e){return Hn(t),e=lr(t,e),t.g.has(e)}L.forEach=function(t,e){Hn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};L.oa=function(){Hn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};L.W=function(t){Hn(this);let e=[];if(typeof t=="string")Am(this,t)&&(e=e.concat(this.g.get(lr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return Hn(this),this.i=null,t=lr(this,t),Am(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Rm(t,e,n){km(t,e),0<n.length&&(t.i=null,t.g.set(lr(t,e),tl(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function lr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Ek(t,e){e&&!t.j&&(Hn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(km(this,s),Rm(this,r,n))},t)),t.j=e}var bk=class{constructor(t,e){this.h=t,this.g=e}};function Dm(t){this.l=t||Ik,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ga&&z.g.Ga()&&z.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ik=10;function Om(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Nm(t){return t.h?1:t.g?t.g.size:0}function Jc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function pl(t,e){t.g?t.g.add(e):t.h=e}function Pm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Dm.prototype.cancel=function(){if(this.i=xm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function xm(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return tl(t.i)}function gl(){}gl.prototype.stringify=function(t){return z.JSON.stringify(t,void 0)};gl.prototype.parse=function(t){return z.JSON.parse(t,void 0)};function Tk(){this.g=new gl}function Sk(t,e,n){const s=n||"";try{Sm(t,function(r,i){let o=r;bi(r)&&(o=cl(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function Ck(t,e){const n=new fa;if(z.Image){const s=new Image;s.onload=zi(Gi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=zi(Gi,n,s,"TestLoadImage: error",!1,e),s.onabort=zi(Gi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=zi(Gi,n,s,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Gi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Ai(t){this.l=t.ac||null,this.j=t.jb||!1}Ye(Ai,hl);Ai.prototype.g=function(){return new _a(this.l,this.j)};Ai.prototype.i=function(t){return function(){return t}}({});function _a(t,e){Ke.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ml,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ye(_a,Ke);var ml=0;L=_a.prototype;L.open=function(t,e){if(this.readyState!=ml)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,oi(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||z).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ri(this)),this.readyState=ml};L.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,oi(this)),this.g&&(this.readyState=3,oi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Lm(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Lm(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}L.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ri(this):oi(this),this.readyState==3&&Lm(this)}};L.Va=function(t){this.g&&(this.response=this.responseText=t,Ri(this))};L.Ua=function(t){this.g&&(this.response=t,Ri(this))};L.ga=function(){this.g&&Ri(this)};function Ri(t){t.readyState=4,t.l=null,t.j=null,t.A=null,oi(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function oi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(_a.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var kk=z.JSON.parse;function Oe(t){Ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Mm,this.K=this.L=!1}Ye(Oe,Ke);var Mm="",Ak=/^https?$/i,Rk=["POST","PUT"];L=Oe.prototype;L.Ka=function(t){this.L=t};L.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Gc.g(),this.C=this.u?Rd(this.u):Rd(Gc),this.g.onreadystatechange=nt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Nd(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=z.FormData&&t instanceof z.FormData,!(0<=Jg(Rk,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Vm(this),0<this.B&&((this.K=Dk(this.g))?(this.g.timeout=this.B,this.g.ontimeout=nt(this.qa,this)):this.A=ll(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Nd(this,i)}};function Dk(t){return Gs&&WC()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.qa=function(){typeof el<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Xe(this,"timeout"),this.abort(8))};function Nd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Um(t),wa(t)}function Um(t){t.D||(t.D=!0,Xe(t,"complete"),Xe(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Xe(this,"complete"),Xe(this,"abort"),wa(this))};L.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),wa(this,!0)),Oe.X.M.call(this)};L.Ha=function(){this.s||(this.F||this.v||this.l?Fm(this):this.fb())};L.fb=function(){Fm(this)};function Fm(t){if(t.h&&typeof el<"u"&&(!t.C[1]||on(t)!=4||t.aa()!=2)){if(t.v&&on(t)==4)ll(t.Ha,0,t);else if(Xe(t,"readystatechange"),on(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Cm)[1]||null;if(!r&&z.self&&z.self.location){var i=z.self.location.protocol;r=i.substr(0,i.length-1)}s=!Ak.test(r?r.toLowerCase():"")}n=s}if(n)Xe(t,"complete"),Xe(t,"success");else{t.m=6;try{var o=2<on(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Um(t)}}finally{wa(t)}}}}function wa(t,e){if(t.g){Vm(t);const n=t.g,s=t.C[0]?ko:null;t.g=null,t.C=null,e||Xe(t,"ready");try{n.onreadystatechange=s}catch{}}}function Vm(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}function on(t){return t.g?t.g.readyState:0}L.aa=function(){try{return 2<on(this)?this.g.status:-1}catch{return-1}};L.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),kk(e)}};function Pd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Mm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}L.Ea=function(){return this.m};L.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function $m(t){let e="";return sl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function yl(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=$m(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ce(t,e,n))}function wr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Bm(t){this.Ca=0,this.i=[],this.j=new fa,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=wr("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=wr("baseRetryDelayMs",5e3,t),this.bb=wr("retryDelaySeedMs",1e4,t),this.$a=wr("forwardChannelMaxRetries",2,t),this.ta=wr("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Dm(t&&t.concurrentRequestLimit),this.Fa=new Tk,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}L=Bm.prototype;L.ma=8;L.G=1;function vl(t){if(jm(t),t.G==3){var e=t.U++,n=ln(t.F);Ce(n,"SID",t.I),Ce(n,"RID",e),Ce(n,"TYPE","terminate"),Di(t,n),e=new Ci(t,t.j,e,void 0),e.K=2,e.v=va(ln(n)),n=!1,z.navigator&&z.navigator.sendBeacon&&(n=z.navigator.sendBeacon(e.v.toString(),"")),!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=Xm(e.l,null),e.g.da(e.v)),e.F=Date.now(),ki(e)}Gm(t)}function Ea(t){t.g&&(wl(t),t.g.cancel(),t.g=null)}function jm(t){Ea(t),t.u&&(z.clearTimeout(t.u),t.u=null),Po(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function ba(t){Om(t.h)||t.m||(t.m=!0,lm(t.Ja,t),t.C=0)}function Ok(t,e){return Nm(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ti(nt(t.Ja,t,e),Wm(t,t.C)),t.C++,!0)}L.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Ci(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=nm(i),sm(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Hm(this,r,e),n=ln(this.F),Ce(n,"RID",t),Ce(n,"CVER",22),this.D&&Ce(n,"X-HTTP-Session-Id",this.D),Di(this,n),i&&(this.N?e="headers="+encodeURIComponent(String($m(i)))+"&"+e:this.o&&yl(n,this.o,i)),pl(this.h,r),this.Ya&&Ce(n,"TYPE","init"),this.O?(Ce(n,"$req",e),Ce(n,"SID","null"),r.Z=!0,Xc(r,n,null)):Xc(r,n,e),this.G=2}}else this.G==3&&(t?xd(this,t):this.i.length==0||Om(this.h)||xd(this))};function xd(t,e){var n;e?n=e.m:n=t.U++;const s=ln(t.F);Ce(s,"SID",t.I),Ce(s,"RID",n),Ce(s,"AID",t.T),Di(t,s),t.o&&t.s&&yl(s,t.o,t.s),n=new Ci(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Hm(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),pl(t.h,n),Xc(n,s,e)}function Di(t,e){t.ia&&sl(t.ia,function(n,s){Ce(e,s,n)}),t.l&&Sm({},function(n,s){Ce(e,s,n)})}function Hm(t,e,n){n=Math.min(t.i.length,n);var s=t.l?nt(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{Sk(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function qm(t){t.g||t.u||(t.Z=1,lm(t.Ia,t),t.A=0)}function _l(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ti(nt(t.Ia,t),Wm(t,t.A)),t.A++,!0)}L.Ia=function(){if(this.u=null,Km(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ti(nt(this.eb,this),t)}};L.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,lt(10),Ea(this),Km(this))};function wl(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function Km(t){t.g=new Ci(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=ln(t.sa);Ce(e,"RID","rpc"),Ce(e,"SID",t.I),Ce(e,"CI",t.L?"0":"1"),Ce(e,"AID",t.T),Ce(e,"TYPE","xmlhttp"),Di(t,e),t.o&&t.s&&yl(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=va(ln(e)),n.s=null,n.P=!0,Em(n,t)}L.cb=function(){this.v!=null&&(this.v=null,Ea(this),_l(this),lt(19))};function Po(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function zm(t,e){var n=null;if(t.g==e){Po(t),wl(t),t.g=null;var s=2}else if(Jc(t.h,e))n=e.D,Pm(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=pa(),Xe(s,new ym(s,n)),ba(t)}else qm(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&Ok(t,e)||s==2&&_l(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Zn(t,5);break;case 4:Zn(t,10);break;case 3:Zn(t,6);break;default:Zn(t,2)}}}function Wm(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Zn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=nt(t.kb,t);n||(n=new is("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||Oo(n,"https"),va(n)),Ck(n.toString(),s)}else lt(2);t.G=0,t.l&&t.l.va(e),Gm(t),jm(t)}L.kb=function(t){t?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function Gm(t){if(t.G=0,t.la=[],t.l){const e=xm(t.h);(e.length!=0||t.i.length!=0)&&(Id(t.la,e),Id(t.la,t.i),t.h.i.length=0,tl(t.i),t.i.length=0),t.l.ua()}}function Qm(t,e,n){var s=n instanceof is?ln(n):new is(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),No(s,s.m);else{var r=z.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new is(null,void 0);s&&Oo(i,s),e&&(i.g=e),r&&No(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Ce(s,n,e),Ce(s,"VER",t.ma),Di(t,s),s}function Xm(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Oe(new Ai({jb:!0})):new Oe(t.ra),e.Ka(t.H),e}function Ym(){}L=Ym.prototype;L.xa=function(){};L.wa=function(){};L.va=function(){};L.ua=function(){};L.Ra=function(){};function xo(){if(Gs&&!(10<=Number(GC)))throw Error("Environmental error: no available transport.")}xo.prototype.g=function(t,e){return new Et(t,e)};function Et(t,e){Ke.call(this),this.g=new Bm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ao(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ao(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new hr(this)}Ye(Et,Ke);Et.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;lt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Qm(t,null,t.V),ba(t)};Et.prototype.close=function(){vl(this.g)};Et.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=cl(t),t=n);e.i.push(new bk(e.ab++,t)),e.G==3&&ba(e)};Et.prototype.M=function(){this.g.l=null,delete this.j,vl(this.g),delete this.g,Et.X.M.call(this)};function Jm(t){dl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ye(Jm,dl);function Zm(){fl.call(this),this.status=1}Ye(Zm,fl);function hr(t){this.g=t}Ye(hr,Ym);hr.prototype.xa=function(){Xe(this.g,"a")};hr.prototype.wa=function(t){Xe(this.g,new Jm(t))};hr.prototype.va=function(t){Xe(this.g,new Zm)};hr.prototype.ua=function(){Xe(this.g,"b")};xo.prototype.createWebChannel=xo.prototype.g;Et.prototype.send=Et.prototype.u;Et.prototype.open=Et.prototype.m;Et.prototype.close=Et.prototype.close;ga.NO_ERROR=0;ga.TIMEOUT=8;ga.HTTP_ERROR=6;vm.COMPLETE="complete";_m.EventType=Si;Si.OPEN="a";Si.CLOSE="b";Si.ERROR="c";Si.MESSAGE="d";Ke.prototype.listen=Ke.prototype.N;Oe.prototype.listenOnce=Oe.prototype.O;Oe.prototype.getLastError=Oe.prototype.Oa;Oe.prototype.getLastErrorCode=Oe.prototype.Ea;Oe.prototype.getStatus=Oe.prototype.aa;Oe.prototype.getResponseJson=Oe.prototype.Sa;Oe.prototype.getResponseText=Oe.prototype.fa;Oe.prototype.send=Oe.prototype.da;Oe.prototype.setWithCredentials=Oe.prototype.Ka;var Nk=function(){return new xo},Pk=function(){return pa()},cc=ga,xk=vm,Lk=ys,Ld={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Mk=Ai,Qi=_m,Uk=Oe;const Md="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dr="9.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=new Ou("@firebase/firestore");function Ud(){return ds.logLevel}function V(t,...e){if(ds.logLevel<=ae.DEBUG){const n=e.map(El);ds.debug(`Firestore (${dr}): ${t}`,...n)}}function hn(t,...e){if(ds.logLevel<=ae.ERROR){const n=e.map(El);ds.error(`Firestore (${dr}): ${t}`,...n)}}function Zc(t,...e){if(ds.logLevel<=ae.WARN){const n=e.map(El);ds.warn(`Firestore (${dr}): ${t}`,...n)}}function El(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${dr}) INTERNAL ASSERTION FAILED: `+t;throw hn(e),new Error(e)}function be(t,e){t||Q()}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Jt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Fk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class Vk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class $k{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Nn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(be(typeof s.accessToken=="string"),new ey(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new Je(e)}}class Bk{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(be(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class jk{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new Bk(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Hk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qk{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.A=n.token,new Hk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Kk(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ue(t,e){return t<e?-1:t>e?1:0}function Qs(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Fe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Fe(0,0))}static max(){return new te(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n,s){n===void 0?n=0:n>e.length&&Q(),s===void 0?s=e.length-n:s>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ai.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ai?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ke extends ai{construct(e,n,s){return new ke(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new K(S.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const zk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends ai{construct(e,n,s){return new Ze(e,n,s)}static isValidIdentifier(e){return zk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ze(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new K(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new K(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new K(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new K(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(ke.fromString(e))}static fromName(e){return new H(ke.fromString(e).popFirst(5))}static empty(){return new H(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new ke(e.slice()))}}function Wk(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=te.fromTimestamp(s===1e9?new Fe(n+1,0):new Fe(n,s));return new Fn(r,H.empty(),e)}function Gk(t){return new Fn(t.readTime,t.key,-1)}class Fn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Fn(te.min(),H.empty(),-1)}static max(){return new Fn(te.max(),H.empty(),-1)}}function Qk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Yk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==Xk)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,s)=>{n(e)})}static reject(e){return new C((n,s)=>{s(e)})}static waitFor(e){return new C((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=C.resolve(!1);for(const s of e)n=n.next(r=>r?C.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new C((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new C((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Ni(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ny(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bl.at=-1;class Be{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xi(this.root,e,this.comparator,!0)}}class Xi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Ge.RED,this.left=r!=null?r:Ge.EMPTY,this.right=i!=null?i:Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ge(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ge.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ge(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Vd(this.data.getIterator())}getIteratorFrom(e){return new Vd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ve(this.comparator);return n.data=e,n}}class Vd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new At([])}unionWith(e){let n=new Ve(Ze.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new At(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ot(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const Jk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vn(t){if(be(!!t),typeof t=="string"){let e=0;const n=Jk.exec(t);if(be(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Xs(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ry(t){const e=t.mapValue.fields.__previous_value__;return sy(e)?ry(e):e}function ci(t){const e=Vn(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ui{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ui("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ui&&e.projectId===this.projectId&&e.database===this.database}}function Ia(t){return t==null}function Lo(t){return t===0&&1/t==-1/0}function eA(t){return typeof t=="number"&&Number.isInteger(t)&&!Lo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?sy(t)?4:tA(t)?9007199254740991:10:Q()}function Yt(t,e){if(t===e)return!0;const n=fs(t);if(n!==fs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ci(t).isEqual(ci(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Vn(s.timestampValue),o=Vn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Xs(s.bytesValue).isEqual(Xs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Le(s.geoPointValue.latitude)===Le(r.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Le(s.integerValue)===Le(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Le(s.doubleValue),o=Le(r.doubleValue);return i===o?Lo(i)===Lo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Qs(t.arrayValue.values||[],e.arrayValue.values||[],Yt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Fd(i)!==Fd(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Yt(i[a],o[a])))return!1;return!0}(t,e);default:return Q()}}function li(t,e){return(t.values||[]).find(n=>Yt(n,e))!==void 0}function Ys(t,e){if(t===e)return 0;const n=fs(t),s=fs(e);if(n!==s)return ue(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Le(r.integerValue||r.doubleValue),a=Le(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return $d(t.timestampValue,e.timestampValue);case 4:return $d(ci(t),ci(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Xs(r),a=Xs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=ue(o[c],a[c]);if(u!==0)return u}return ue(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ue(Le(r.latitude),Le(i.latitude));return o!==0?o:ue(Le(r.longitude),Le(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Ys(o[c],a[c]);if(u)return u}return ue(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Yi.mapValue&&i===Yi.mapValue)return 0;if(r===Yi.mapValue)return 1;if(i===Yi.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=ue(a[l],u[l]);if(h!==0)return h;const d=Ys(o[a[l]],c[u[l]]);if(d!==0)return d}return ue(a.length,u.length)}(t.mapValue,e.mapValue);default:throw Q()}}function $d(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Vn(t),s=Vn(e),r=ue(n.seconds,s.seconds);return r!==0?r:ue(n.nanos,s.nanos)}function js(t){return eu(t)}function eu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Vn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Xs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,H.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=eu(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${eu(s.fields[a])}`;return i+"}"}(t.mapValue):Q();var e,n}function tu(t){return!!t&&"integerValue"in t}function Il(t){return!!t&&"arrayValue"in t}function Bd(t){return!!t&&"nullValue"in t}function jd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ao(t){return!!t&&"mapValue"in t}function Vr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Vr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Vr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function tA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.value=e}static empty(){return new ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ao(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vr(n)}setAll(e){let n=Ze.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Vr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());ao(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Yt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];ao(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){vs(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ft(Vr(this.value))}}function iy(t){const e=[];return vs(t.fields,(n,s)=>{const r=new Ze([n]);if(ao(s)){const i=iy(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new At(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Qe(e,0,te.min(),te.min(),ft.empty(),0)}static newFoundDocument(e,n,s){return new Qe(e,1,n,te.min(),s,0)}static newNoDocument(e,n){return new Qe(e,2,n,te.min(),ft.empty(),0)}static newUnknownDocument(e,n){return new Qe(e,3,n,te.min(),ft.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qe(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function Hd(t,e=null,n=[],s=[],r=null,i=null,o=null){return new nA(t,e,n,s,r,i,o)}function Tl(t){const e=Y(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+js(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ia(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>js(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>js(s)).join(",")),e.ht=n}return e.ht}function sA(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${js(s.value)}`;var s}).join(", ")}]`),Ia(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>js(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>js(n)).join(",")),`Target(${e})`}function Sl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!hA(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Yt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Kd(t.startAt,e.startAt)&&Kd(t.endAt,e.endAt)}function nu(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class pt extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new rA(e,n,s):n==="array-contains"?new aA(e,s):n==="in"?new cA(e,s):n==="not-in"?new uA(e,s):n==="array-contains-any"?new lA(e,s):new pt(e,n,s)}static lt(e,n,s){return n==="in"?new iA(e,s):new oA(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Ys(n,this.value)):n!==null&&fs(this.value)===fs(n)&&this.ft(Ys(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class rA extends pt{constructor(e,n,s){super(e,n,s),this.key=H.fromName(s.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.ft(n)}}class iA extends pt{constructor(e,n){super(e,"in",n),this.keys=oy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class oA extends pt{constructor(e,n){super(e,"not-in",n),this.keys=oy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function oy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>H.fromName(s.referenceValue))}class aA extends pt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Il(n)&&li(n.arrayValue,this.value)}}class cA extends pt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&li(this.value.arrayValue,n)}}class uA extends pt{constructor(e,n){super(e,"not-in",n)}matches(e){if(li(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!li(this.value.arrayValue,n)}}class lA extends pt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Il(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>li(this.value.arrayValue,s))}}class Mo{constructor(e,n){this.position=e,this.inclusive=n}}class $r{constructor(e,n="asc"){this.field=e,this.dir=n}}function hA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function qd(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=H.comparator(H.fromName(o.referenceValue),n.key):s=Ys(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Kd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Yt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function dA(t,e,n,s,r,i,o,a){return new Ta(t,e,n,s,r,i,o,a)}function ay(t){return new Ta(t)}function zd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function fA(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function pA(t){for(const e of t.filters)if(e.dt())return e.field;return null}function gA(t){return t.collectionGroup!==null}function hi(t){const e=Y(t);if(e._t===null){e._t=[];const n=pA(e),s=fA(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new $r(n)),e._t.push(new $r(Ze.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new $r(Ze.keyField(),i))}}}return e._t}function dn(t){const e=Y(t);if(!e.wt)if(e.limitType==="F")e.wt=Hd(e.path,e.collectionGroup,hi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of hi(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new $r(i.field,o))}const s=e.endAt?new Mo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Mo(e.startAt.position,e.startAt.inclusive):null;e.wt=Hd(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function su(t,e,n){return new Ta(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Sa(t,e){return Sl(dn(t),dn(e))&&t.limitType===e.limitType}function cy(t){return`${Tl(dn(t))}|lt:${t.limitType}`}function ru(t){return`Query(target=${sA(dn(t))}; limitType=${t.limitType})`}function Cl(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):H.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=qd(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,hi(n),s)||n.endAt&&!function(r,i,o){const a=qd(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,hi(n),s))}(t,e)}function mA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function uy(t){return(e,n)=>{let s=!1;for(const r of hi(t)){const i=yA(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function yA(t,e,n){const s=t.field.isKeyField()?H.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Ys(a,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Lo(e)?"-0":e}}function hy(t){return{integerValue:""+t}}function vA(t,e){return eA(e)?hy(e):ly(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(){this._=void 0}}function _A(t,e,n){return t instanceof Uo?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof di?fy(t,e):t instanceof fi?py(t,e):function(s,r){const i=dy(s,r),o=Wd(i)+Wd(s.yt);return tu(i)&&tu(s.yt)?hy(o):ly(s.It,o)}(t,e)}function wA(t,e,n){return t instanceof di?fy(t,e):t instanceof fi?py(t,e):n}function dy(t,e){return t instanceof Fo?tu(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Uo extends Ca{}class di extends Ca{constructor(e){super(),this.elements=e}}function fy(t,e){const n=gy(e);for(const s of t.elements)n.some(r=>Yt(r,s))||n.push(s);return{arrayValue:{values:n}}}class fi extends Ca{constructor(e){super(),this.elements=e}}function py(t,e){let n=gy(e);for(const s of t.elements)n=n.filter(r=>!Yt(r,s));return{arrayValue:{values:n}}}class Fo extends Ca{constructor(e,n){super(),this.It=e,this.yt=n}}function Wd(t){return Le(t.integerValue||t.doubleValue)}function gy(t){return Il(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function EA(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof di&&s instanceof di||n instanceof fi&&s instanceof fi?Qs(n.elements,s.elements,Yt):n instanceof Fo&&s instanceof Fo?Yt(n.yt,s.yt):n instanceof Uo&&s instanceof Uo}(t.transform,e.transform)}class bA{constructor(e,n){this.version=e,this.transformResults=n}}class Ut{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ut}static exists(e){return new Ut(void 0,e)}static updateTime(e){return new Ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function co(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ka{}function my(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new kl(t.key,Ut.none()):new Pi(t.key,t.data,Ut.none());{const n=t.data,s=ft.empty();let r=new Ve(Ze.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new qn(t.key,s,new At(r.toArray()),Ut.none())}}function IA(t,e,n){t instanceof Pi?function(s,r,i){const o=s.value.clone(),a=Qd(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof qn?function(s,r,i){if(!co(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Qd(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(yy(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Br(t,e,n,s){return t instanceof Pi?function(r,i,o,a){if(!co(r.precondition,i))return o;const c=r.value.clone(),u=Xd(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof qn?function(r,i,o,a){if(!co(r.precondition,i))return o;const c=Xd(r.fieldTransforms,a,i),u=i.data;return u.setAll(yy(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return co(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function TA(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=dy(s.transform,r||null);i!=null&&(n===null&&(n=ft.empty()),n.set(s.field,i))}return n||null}function Gd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Qs(n,s,(r,i)=>EA(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Pi extends ka{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class qn extends ka{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function yy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Qd(t,e,n){const s=new Map;be(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,wA(o,a,n[r]))}return s}function Xd(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,_A(i,o,e))}return s}class kl extends ka{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class SA extends ka{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe,re;function kA(t){switch(t){default:return Q();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function vy(t){if(t===void 0)return hn("GRPC error has no .code"),S.UNKNOWN;switch(t){case xe.OK:return S.OK;case xe.CANCELLED:return S.CANCELLED;case xe.UNKNOWN:return S.UNKNOWN;case xe.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case xe.INTERNAL:return S.INTERNAL;case xe.UNAVAILABLE:return S.UNAVAILABLE;case xe.UNAUTHENTICATED:return S.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case xe.NOT_FOUND:return S.NOT_FOUND;case xe.ALREADY_EXISTS:return S.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return S.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case xe.ABORTED:return S.ABORTED;case xe.OUT_OF_RANGE:return S.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return S.UNIMPLEMENTED;case xe.DATA_LOSS:return S.DATA_LOSS;default:return Q()}}(re=xe||(xe={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){vs(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return ny(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA=new Be(H.comparator);function fn(){return AA}const _y=new Be(H.comparator);function kr(...t){let e=_y;for(const n of t)e=e.insert(n.key,n);return e}function wy(t){let e=_y;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function es(){return jr()}function Ey(){return jr()}function jr(){return new fr(t=>t.toString(),(t,e)=>t.isEqual(e))}const RA=new Be(H.comparator),DA=new Ve(H.comparator);function ne(...t){let e=DA;for(const n of t)e=e.add(n);return e}const OA=new Ve(ue);function by(){return OA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,xi.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Aa(te.min(),r,by(),fn(),ne())}}class xi{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new xi(s,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n,s,r){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=r}}class Iy{constructor(e,n){this.targetId=e,this.At=n}}class Ty{constructor(e,n,s=ot.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Yd{constructor(){this.Rt=0,this.bt=Zd(),this.Pt=ot.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=ne(),n=ne(),s=ne();return this.bt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:Q()}}),new xi(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=Zd()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class NA{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=fn(),this.qt=Jd(),this.Kt=new Ve(ue)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,r)=>{this.Ht(r)&&n(r)})}Yt(e){const n=e.targetId,s=e.At.count,r=this.Xt(n);if(r){const i=r.target;if(nu(i))if(s===0){const o=new H(i.path);this.jt(n,o,Qe.newNoDocument(o,te.min()))}else be(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&nu(a.target)){const c=new H(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,Qe.newNoDocument(c,e))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let s=ne();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new Aa(e,n,this.Kt,this.Ut,s);return this.Ut=fn(),this.qt=Jd(),this.Kt=new Ve(ue),r}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,n)?r.kt(n,1):r.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new Yd,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Ve(ue),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Yd),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Jd(){return new Be(H.comparator)}function Zd(){return new Be(H.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),xA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class LA{constructor(e,n){this.databaseId=e,this.gt=n}}function Vo(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Sy(t,e){return t.gt?e.toBase64():e.toUint8Array()}function MA(t,e){return Vo(t,e.toTimestamp())}function an(t){return be(!!t),te.fromTimestamp(function(e){const n=Vn(e);return new Fe(n.seconds,n.nanos)}(t))}function Al(t,e){return function(n){return new ke(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Cy(t){const e=ke.fromString(t);return be(Ry(e)),e}function iu(t,e){return Al(t.databaseId,e.path)}function uc(t,e){const n=Cy(e);if(n.get(1)!==t.databaseId.projectId)throw new K(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(ky(n))}function ou(t,e){return Al(t.databaseId,e)}function UA(t){const e=Cy(t);return e.length===4?ke.emptyPath():ky(e)}function au(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ky(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ef(t,e,n){return{name:iu(t,e),fields:n.value.mapValue.fields}}function FA(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.gt?(be(u===void 0||typeof u=="string"),ot.fromBase64String(u||"")):(be(u===void 0||u instanceof Uint8Array),ot.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?S.UNKNOWN:vy(c.code);return new K(u,c.message||"")}(o);n=new Ty(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=uc(t,s.document.name),i=an(s.document.updateTime),o=new ft({mapValue:{fields:s.document.fields}}),a=Qe.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new uo(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=uc(t,s.document),i=s.readTime?an(s.readTime):te.min(),o=Qe.newNoDocument(r,i),a=s.removedTargetIds||[];n=new uo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=uc(t,s.document),i=s.removedTargetIds||[];n=new uo([],i,r,null)}else{if(!("filter"in e))return Q();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new CA(r),o=s.targetId;n=new Iy(o,i)}}return n}function VA(t,e){let n;if(e instanceof Pi)n={update:ef(t,e.key,e.value)};else if(e instanceof kl)n={delete:iu(t,e.key)};else if(e instanceof qn)n={update:ef(t,e.key,e.data),updateMask:QA(e.fieldMask)};else{if(!(e instanceof SA))return Q();n={verify:iu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Uo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof di)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof fi)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Fo)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw Q()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:MA(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Q()}(t,e.precondition)),n}function $A(t,e){return t&&t.length>0?(be(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?an(s.updateTime):an(r);return i.isEqual(te.min())&&(i=an(r)),new bA(i,s.transformResults||[])}(n,e))):[]}function BA(t,e){return{documents:[ou(t,e.path)]}}function jA(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=ou(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ou(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if(jd(h.value))return{unaryFilter:{field:Cs(h.field),op:"IS_NAN"}};if(Bd(h.value))return{unaryFilter:{field:Cs(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(jd(h.value))return{unaryFilter:{field:Cs(h.field),op:"IS_NOT_NAN"}};if(Bd(h.value))return{unaryFilter:{field:Cs(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cs(h.field),op:zA(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Cs(l.field),direction:KA(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.gt||Ia(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function HA(t){let e=UA(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){be(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=Ay(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new $r(xs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Ia(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Mo(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Mo(d,h)}(n.endAt)),dA(e,r,o,i,a,"F",c,u)}function qA(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Q()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ay(t){return t?t.unaryFilter!==void 0?[GA(t)]:t.fieldFilter!==void 0?[WA(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Ay(e)).reduce((e,n)=>e.concat(n)):Q():[]}function KA(t){return PA[t]}function zA(t){return xA[t]}function Cs(t){return{fieldPath:t.canonicalString()}}function xs(t){return Ze.fromServerFormat(t.fieldPath)}function WA(t){return pt.create(xs(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(t.fieldFilter.op),t.fieldFilter.value)}function GA(t){switch(t.unaryFilter.op){case"IS_NAN":const e=xs(t.unaryFilter.field);return pt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=xs(t.unaryFilter.field);return pt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=xs(t.unaryFilter.field);return pt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=xs(t.unaryFilter.field);return pt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}function QA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ry(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&IA(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Br(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Br(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Ey();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=my(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(te.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Qs(this.mutations,e.mutations,(n,s)=>Gd(n,s))&&Qs(this.baseMutations,e.baseMutations,(n,s)=>Gd(n,s))}}class Rl{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){be(e.mutations.length===s.length);let r=RA;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Rl(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n,s,r,i=te.min(),o=te.min(),a=ot.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new os(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new os(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new os(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e){this.re=e}}function ZA(t){const e=HA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?su(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(){this.Ye=new tR}addToCollectionParentIndex(e,n){return this.Ye.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(Fn.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(Fn.min())}updateCollectionGroup(e,n,s){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class tR{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ve(ke.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ve(ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Js(0)}static vn(){return new Js(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(){this.changes=new fr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Qe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?C.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&Br(s.mutation,r,At.empty(),Fe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ne()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ne()){const r=es();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=kr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=es();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ne()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=fn();const o=jr(),a=jr();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof qn)?i=i.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),Br(l.mutation,u,l.mutation.getFieldMask(),Fe.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new sR(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=jr();let r=new Be((o,a)=>o-a),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||At.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||ne()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Ey();l.forEach(d=>{if(!i.has(d)){const p=my(n.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return C.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return H.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):gA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):C.resolve(es());let a=-1,c=i;return o.next(u=>C.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?C.resolve():this.getBaseDocument(e,l,h).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ne())).next(l=>({batchId:a,changes:wy(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(s=>{let r=kr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=kr();return this.indexManager.getCollectionParents(e,r).next(o=>C.forEach(o,a=>{const c=function(u,l){return new Ta(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,Qe.newInvalidDocument(u)))});let o=kr();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Br(u.mutation,c,At.empty(),Fe.now()),Cl(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):C.resolve(Qe.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return C.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:an(s.createTime)}),C.resolve()}getNamedQuery(e,n){return C.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:ZA(s.bundledQuery),readTime:an(s.readTime)}}(n)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(){this.overlays=new Be(H.comparator),this.es=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const s=es();return C.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ue(e,n,i)}),C.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),C.resolve()}getOverlaysForCollection(e,n,s){const r=es(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return C.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Be((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=es(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=es(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return C.resolve(a)}ue(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new YA(n,s));let i=this.es.get(n);i===void 0&&(i=ne(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(){this.ns=new Ve(je.ss),this.rs=new Ve(je.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new je(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new je(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new H(new ke([])),s=new je(n,e),r=new je(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new H(new ke([])),s=new je(n,e),r=new je(n,e+1);let i=ne();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new je(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class je{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return H.comparator(e.key,n.key)||ue(e._s,n._s)}static os(e,n){return ue(e._s,n._s)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ve(je.ss)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new XA(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new je(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new je(n,0),r=new je(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ve(ue);return n.forEach(r=>{const i=new je(r,0),o=new je(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),C.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;H.isDocumentKey(i)||(i=i.child(""));const o=new je(new H(i),0);let a=new Ve(ue);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c._s)),!0)},o),C.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){be(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return C.forEach(n.mutations,r=>{const i=new je(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new je(n,0),r=this.gs.firstAfterOrEqual(s);return C.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e){this.Es=e,this.docs=new Be(H.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return C.resolve(s?s.document.mutableCopy():Qe.newInvalidDocument(n))}getEntries(e,n){let s=fn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Qe.newInvalidDocument(r))}),C.resolve(s)}getAllFromCollection(e,n,s){let r=fn();const i=new H(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Qk(Gk(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return C.resolve(r)}getAllFromCollectionGroup(e,n,s,r){Q()}As(e,n){return C.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new uR(this)}getSize(e){return C.resolve(this.size)}}class uR extends nR{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),C.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e){this.persistence=e,this.Rs=new fr(n=>Tl(n),Sl),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Dl,this.targetCount=0,this.vs=Js.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),C.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Js(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.Dn(n),C.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),C.waitFor(i).next(()=>r)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return C.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),C.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),C.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return C.resolve(s)}containsKey(e,n){return C.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new bl(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new lR(this),this.indexManager=new eR,this.remoteDocumentCache=function(s){return new cR(s)}(s=>this.referenceDelegate.xs(s)),this.It=new JA(n),this.Ns=new iR(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new oR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new aR(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){V("MemoryPersistence","Starting transaction:",e);const r=new dR(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return C.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class dR extends Yk{constructor(e){super(),this.currentSequenceNumber=e}}class Ol{constructor(e){this.persistence=e,this.Fs=new Dl,this.$s=null}static Bs(e){return new Ol(e)}get Ls(){if(this.$s)return this.$s;throw Q()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),C.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),C.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Ls,s=>{const r=H.fromPath(s);return this.Us(e,r).next(i=>{i||n.removeEntry(r,te.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return C.or([()=>C.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=ne(),r=ne();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Nl(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(zd(n))return C.resolve(null);let s=dn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=su(n,null,"F"),s=dn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ne(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(e,su(n,null,"F")):this.Bi(e,u,n,c)}))})))}Oi(e,n,s,r){return zd(n)||r.isEqual(te.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(Ud()<=ae.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ru(n)),this.Bi(e,o,n,Wk(r,-1)))})}Fi(e,n){let s=new Ve(uy(e));return n.forEach((r,i)=>{Cl(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return Ud()<=ae.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",ru(n)),this.Ni.getDocumentsMatchingQuery(e,n,Fn.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.It=r,this.Ui=new Be(ue),this.qi=new fr(i=>Tl(i),Sl),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rR(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function gR(t,e,n,s){return new pR(t,e,n,s)}async function Dy(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ne();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function mR(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=C.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(m=>{const _=c.docVersions.get(p);be(_!==null),m.version.compareTo(_)<0&&(l.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),u.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ne();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Oy(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function yR(t,e){const n=Y(t),s=e.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const a=[];e.targetChanges.forEach((l,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(ot.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,s)),r=r.insert(h,p),function(m,_,v){return m.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(d,p,l)&&a.push(n.Cs.updateTargetData(i,p))});let c=fn(),u=ne();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(vR(i,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!s.isEqual(te.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return C.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ui=r,i))}function vR(t,e,n){let s=ne(),r=ne();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=fn();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(te.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function _R(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function wR(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,C.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new os(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function cu(t,e,n){const s=Y(t),r=s.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ni(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(r.target)}function tf(t,e,n){const s=Y(t);let r=te.min(),i=ne();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=Y(a),h=l.qi.get(u);return h!==void 0?C.resolve(l.Ui.get(h)):l.Cs.getTargetData(c,u)}(s,o,dn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:te.min(),n?i:ne())).next(a=>(ER(s,mA(e),a),{documents:a,Hi:i})))}function ER(t,e,n){let s=t.Ki.get(e)||te.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class nf{constructor(){this.activeTargetIds=by()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class bR{constructor(){this.Lr=new nf,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new nf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);V("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(V("RestConnection","Received: ",c),c),c=>{throw Zc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+dr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=TR[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new Uk;a.setWithCredentials(!0),a.listenOnce(xk.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case cc.NO_ERROR:const u=a.getResponseJson();V("Connection","XHR received:",JSON.stringify(u)),i(u);break;case cc.TIMEOUT:V("Connection",'RPC "'+e+'" timed out'),o(new K(S.DEADLINE_EXCEEDED,"Request time out"));break;case cc.HTTP_ERROR:const l=a.getStatus();if(V("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(p){const m=p.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(m)>=0?m:S.UNKNOWN}(h.status);o(new K(d,h.message))}else o(new K(S.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new K(S.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{V("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Nk(),o=Pk(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Mk({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");V("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const d=new SR({Hr:m=>{h?V("Connection","Not sending because WebChannel is closed:",m):(l||(V("Connection","Opening WebChannel transport."),u.open(),l=!0),V("Connection","WebChannel sending:",m),u.send(m))},Jr:()=>u.close()}),p=(m,_,v)=>{m.listen(_,T=>{try{v(T)}catch(O){setTimeout(()=>{throw O},0)}})};return p(u,Qi.EventType.OPEN,()=>{h||V("Connection","WebChannel transport opened.")}),p(u,Qi.EventType.CLOSE,()=>{h||(h=!0,V("Connection","WebChannel transport closed"),d.io())}),p(u,Qi.EventType.ERROR,m=>{h||(h=!0,Zc("Connection","WebChannel transport errored:",m),d.io(new K(S.UNAVAILABLE,"The operation could not be completed")))}),p(u,Qi.EventType.MESSAGE,m=>{var _;if(!h){const v=m.data[0];be(!!v);const T=v,O=T.error||((_=T[0])===null||_===void 0?void 0:_.error);if(O){V("Connection","WebChannel received error:",O);const $=O.status;let U=function(_e){const Ne=xe[_e];if(Ne!==void 0)return vy(Ne)}($),se=O.message;U===void 0&&(U=S.INTERNAL,se="Unknown error status: "+$+" with message "+O.message),h=!0,d.io(new K(U,se)),u.close()}else V("Connection","WebChannel received:",v),d.ro(v)}}),p(o,Lk.STAT_EVENT,m=>{m.stat===Ld.PROXY?V("Connection","Detected buffering proxy"):m.stat===Ld.NOPROXY&&V("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function lc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(t){return new LA(t,!0)}class Ny{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&V("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Ny(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(hn(n.toString()),hn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new K(S.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kR extends Py{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.It=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=FA(this.It,e),s=function(r){if(!("targetChange"in r))return te.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?te.min():i.readTime?an(i.readTime):te.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=au(this.It),n.addTarget=function(r,i){let o;const a=i.target;return o=nu(a)?{documents:BA(r,a)}:{query:jA(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Sy(r,i.resumeToken):i.snapshotVersion.compareTo(te.min())>0&&(o.readTime=Vo(r,i.snapshotVersion.toTimestamp())),o}(this.It,e);const s=qA(this.It,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=au(this.It),n.removeTarget=e,this.Bo(n)}}class AR extends Py{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=$A(e.writeResults,e.commitTime),s=an(e.commitTime);return this.listener.Zo(s,n)}return be(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=au(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>VA(this.It,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.It=r,this.nu=!1}su(){if(this.nu)throw new K(S.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new K(S.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(S.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class DR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(hn(n),this.ou=!1):V("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{s.enqueueAndForget(async()=>{_s(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Y(a);c._u.add(4),await Li(c),c.gu.set("Unknown"),c._u.delete(4),await Da(c)}(this))})}),this.gu=new DR(s,r)}}async function Da(t){if(_s(t))for(const e of t.wu)await e(!0)}async function Li(t){for(const e of t.wu)await e(!1)}function xy(t,e){const n=Y(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Ll(n)?xl(n):pr(n).ko()&&Pl(n,e))}function Ly(t,e){const n=Y(t),s=pr(n);n.du.delete(e),s.ko()&&My(n,e),n.du.size===0&&(s.ko()?s.Fo():_s(n)&&n.gu.set("Unknown"))}function Pl(t,e){t.yu.Mt(e.targetId),pr(t).zo(e)}function My(t,e){t.yu.Mt(e),pr(t).Ho(e)}function xl(t){t.yu=new NA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),pr(t).start(),t.gu.uu()}function Ll(t){return _s(t)&&!pr(t).No()&&t.du.size>0}function _s(t){return Y(t)._u.size===0}function Uy(t){t.yu=void 0}async function NR(t){t.du.forEach((e,n)=>{Pl(t,e)})}async function PR(t,e){Uy(t),Ll(t)?(t.gu.hu(e),xl(t)):t.gu.set("Unknown")}async function xR(t,e,n){if(t.gu.set("Online"),e instanceof Ty&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await $o(t,s)}else if(e instanceof uo?t.yu.Gt(e):e instanceof Iy?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(te.min()))try{const s=await Oy(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.du.get(c);u&&r.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(ot.EMPTY_BYTE_STRING,c.snapshotVersion)),My(r,a);const u=new os(c.target,a,1,c.sequenceNumber);Pl(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){V("RemoteStore","Failed to raise snapshot:",s),await $o(t,s)}}async function $o(t,e,n){if(!Ni(e))throw e;t._u.add(1),await Li(t),t.gu.set("Offline"),n||(n=()=>Oy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Da(t)})}function Fy(t,e){return e().catch(n=>$o(t,n,e))}async function Oa(t){const e=Y(t),n=$n(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;LR(e);)try{const r=await _R(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,MR(e,r)}catch(r){await $o(e,r)}Vy(e)&&$y(e)}function LR(t){return _s(t)&&t.fu.length<10}function MR(t,e){t.fu.push(e);const n=$n(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Vy(t){return _s(t)&&!$n(t).No()&&t.fu.length>0}function $y(t){$n(t).start()}async function UR(t){$n(t).eu()}async function FR(t){const e=$n(t);for(const n of t.fu)e.Xo(n.mutations)}async function VR(t,e,n){const s=t.fu.shift(),r=Rl.from(s,e,n);await Fy(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Oa(t)}async function $R(t,e){e&&$n(t).Yo&&await async function(n,s){if(r=s.code,kA(r)&&r!==S.ABORTED){const i=n.fu.shift();$n(n).Mo(),await Fy(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Oa(n)}var r}(t,e),Vy(t)&&$y(t)}async function rf(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const s=_s(n);n._u.add(3),await Li(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Da(n)}async function BR(t,e){const n=Y(t);e?(n._u.delete(2),await Da(n)):e||(n._u.add(2),await Li(n),n.gu.set("Unknown"))}function pr(t){return t.pu||(t.pu=function(e,n,s){const r=Y(e);return r.su(),new kR(n,r.connection,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:NR.bind(null,t),Zr:PR.bind(null,t),Wo:xR.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Ll(t)?xl(t):t.gu.set("Unknown")):(await t.pu.stop(),Uy(t))})),t.pu}function $n(t){return t.Iu||(t.Iu=function(e,n,s){const r=Y(e);return r.su(),new AR(n,r.connection,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:UR.bind(null,t),Zr:$R.bind(null,t),tu:FR.bind(null,t),Zo:VR.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Oa(t)):(await t.Iu.stop(),t.fu.length>0&&(V("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Ml(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ul(t,e){if(hn("AsyncQueue",`${e}: ${t}`),Ni(t))return new K(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||H.comparator(n.key,s.key):(n,s)=>H.comparator(n.key,s.key),this.keyedMap=kr(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new Hs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Hs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Hs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(){this.Tu=new Be(H.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):Q():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Zs{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Zs(e,n,Hs.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(){this.Au=void 0,this.listeners=[]}}class HR{constructor(){this.queries=new fr(e=>cy(e),Sa),this.onlineState="Unknown",this.Ru=new Set}}async function qR(t,e){const n=Y(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new jR),r)try{i.Au=await n.onListen(s)}catch(o){const a=Ul(o,`Initialization of query '${ru(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Fl(n)}async function KR(t,e){const n=Y(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function zR(t,e){const n=Y(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Fl(n)}function WR(t,e,n){const s=Y(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Fl(t){t.Ru.forEach(e=>{e.next()})}class GR{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Zs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Zs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e){this.key=e}}class jy{constructor(e){this.key=e}}class QR{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ne(),this.mutatedKeys=ne(),this.Gu=uy(e),this.Qu=new Hs(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new of,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const d=r.get(l),p=Cl(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;d&&p?d.data.isEqual(p.data)?m!==_&&(s.track({type:3,doc:p}),v=!0):this.Hu(d,p)||(s.track({type:2,doc:p}),v=!0,(c&&this.Gu(p,c)>0||u&&this.Gu(p,u)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),v=!0):d&&!p&&(s.track({type:1,doc:d}),v=!0,(c||u)&&(a=!0)),v&&(p?(o=o.add(p),i=_?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((u,l)=>function(h,d){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return p(h)-p(d)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new Zs(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new of,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ne(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new jy(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new By(s))}),n}tc(e){this.Uu=e.Hi,this.Ku=ne();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Zs.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class XR{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class YR{constructor(e){this.key=e,this.nc=!1}}class JR{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new fr(a=>cy(a),Sa),this.rc=new Map,this.oc=new Set,this.uc=new Be(H.comparator),this.cc=new Map,this.ac=new Dl,this.hc={},this.lc=new Map,this.fc=Js.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function ZR(t,e){const n=u1(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await wR(n.localStore,dn(e));n.isPrimaryClient&&xy(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await e1(n,e,s,a==="current",o.resumeToken)}return r}async function e1(t,e,n,s,r){t._c=(h,d,p)=>async function(m,_,v,T){let O=_.view.Wu(v);O.$i&&(O=await tf(m.localStore,_.query,!1).then(({documents:se})=>_.view.Wu(se,O)));const $=T&&T.targetChanges.get(_.targetId),U=_.view.applyChanges(O,m.isPrimaryClient,$);return cf(m,_.targetId,U.Xu),U.snapshot}(t,h,d,p);const i=await tf(t.localStore,e,!0),o=new QR(e,i.Hi),a=o.Wu(i.documents),c=xi.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);cf(t,n,u.Xu);const l=new XR(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function t1(t,e){const n=Y(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Sa(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await cu(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ly(n.remoteStore,s.targetId),uu(n,s.targetId)}).catch(Oi)):(uu(n,s.targetId),await cu(n.localStore,s.targetId,!0))}async function n1(t,e,n){const s=l1(t);try{const r=await function(i,o){const a=Y(i),c=Fe.now(),u=o.reduce((d,p)=>d.add(p.key),ne());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=fn(),m=ne();return a.Gi.getEntries(d,u).next(_=>{p=_,p.forEach((v,T)=>{T.isValidDocument()||(m=m.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(_=>{l=_;const v=[];for(const T of o){const O=TA(T,l.get(T.key).overlayedDocument);O!=null&&v.push(new qn(T.key,O,iy(O.value.mapValue),Ut.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,v,o)}).next(_=>{h=_;const v=_.applyToLocalDocumentSet(l,m);return a.documentOverlayCache.saveOverlays(d,_.batchId,v)})}).then(()=>({batchId:h.batchId,changes:wy(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new Be(ue)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Mi(s,r.changes),await Oa(s.remoteStore)}catch(r){const i=Ul(r,"Failed to persist write");n.reject(i)}}async function Hy(t,e){const n=Y(t);try{const s=await yR(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(be(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?be(o.nc):r.removedDocuments.size>0&&(be(o.nc),o.nc=!1))}),await Mi(n,s,e)}catch(s){await Oi(s)}}function af(t,e,n){const s=Y(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Y(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&Fl(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function s1(t,e,n){const s=Y(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new Be(H.comparator);o=o.insert(i,Qe.newNoDocument(i,te.min()));const a=ne().add(i),c=new Aa(te.min(),new Map,new Ve(ue),o,a);await Hy(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),Vl(s)}else await cu(s.localStore,e,!1).then(()=>uu(s,e,n)).catch(Oi)}async function r1(t,e){const n=Y(t),s=e.batch.batchId;try{const r=await mR(n.localStore,e);Ky(n,s,null),qy(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Mi(n,r)}catch(r){await Oi(r)}}async function i1(t,e,n){const s=Y(t);try{const r=await function(i,o){const a=Y(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(be(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);Ky(s,e,n),qy(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Mi(s,r)}catch(r){await Oi(r)}}function qy(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Ky(t,e,n){const s=Y(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function uu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||zy(t,s)})}function zy(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Ly(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Vl(t))}function cf(t,e,n){for(const s of n)s instanceof By?(t.ac.addReference(s.key,e),o1(t,s)):s instanceof jy?(V("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||zy(t,s.key)):Q()}function o1(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(V("SyncEngine","New document in limbo: "+n),t.oc.add(s),Vl(t))}function Vl(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new H(ke.fromString(e)),s=t.fc.next();t.cc.set(s,new YR(n)),t.uc=t.uc.insert(n,s),xy(t.remoteStore,new os(dn(ay(n.path)),s,2,bl.at))}}async function Mi(t,e,n){const s=Y(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=Nl.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const u=Y(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>C.forEach(c,h=>C.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>C.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Ni(l))throw l;V("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Ui.get(h),p=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(p);u.Ui=u.Ui.insert(h,m)}}}(s.localStore,i))}async function a1(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const s=await Dy(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new K(S.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Mi(n,s.ji)}}function c1(t,e){const n=Y(t),s=n.cc.get(e);if(s&&s.nc)return ne().add(s.key);{let r=ne();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function u1(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Hy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=c1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=s1.bind(null,e),e.sc.Wo=zR.bind(null,e.eventManager),e.sc.wc=WR.bind(null,e.eventManager),e}function l1(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=r1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=i1.bind(null,e),e}class h1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Ra(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return gR(this.persistence,new fR,e.initialUser,this.It)}yc(e){return new hR(Ol.Bs,this.It)}gc(e){return new bR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class d1{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>af(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=a1.bind(null,this.syncEngine),await BR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new HR}createDatastore(e){const n=Ra(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new CR(r));var r;return function(i,o,a,c){return new RR(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>af(this.syncEngine,a,0),o=sf.C()?new sf:new IR,new OR(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new JR(s,r,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Y(e);V("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Li(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(t,e,n){if(!n)throw new K(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function f1(t,e,n,s){if(e===!0&&s===!0)throw new K(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function uf(t){if(!H.isDocumentKey(t))throw new K(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function lf(t){if(H.isDocumentKey(t))throw new K(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $l(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function ps(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$l(t);throw new K(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=new Map;class df{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new K(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,f1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new df({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new K(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new K(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new df(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Fk;switch(n.type){case"gapi":const s=n.client;return new jk(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new K(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=hf.get(e);n&&(V("ComponentProvider","Removing Datastore"),hf.delete(e),n.terminate())}(this),Promise.resolve()}}function p1(t,e,n,s={}){var r;const i=(t=ps(t,Na))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Zc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Je.MOCK_USER;else{o=Sp(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new K(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Je(c)}t._authCredentials=new Vk(new ey(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}}class Pa{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Pa(this.firestore,e,this._query)}}class Pn extends Pa{constructor(e,n,s){super(e,n,ay(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new H(e))}withConverter(e){return new Pn(this.firestore,e,this._path)}}function Gy(t,e,...n){if(t=De(t),Wy("collection","path",e),t instanceof Na){const s=ke.fromString(e,...n);return lf(s),new Pn(t,null,s)}{if(!(t instanceof Rt||t instanceof Pn))throw new K(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ke.fromString(e,...n));return lf(s),new Pn(t.firestore,null,s)}}function Ar(t,e,...n){if(t=De(t),arguments.length===1&&(e=ty.R()),Wy("doc","path",e),t instanceof Na){const s=ke.fromString(e,...n);return uf(s),new Rt(t,null,new H(s))}{if(!(t instanceof Rt||t instanceof Pn))throw new K(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ke.fromString(e,...n));return uf(s),new Rt(t.firestore,t instanceof Pn?t.converter:null,new H(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):hn("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Je.UNAUTHENTICATED,this.clientId=ty.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{V("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(V("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ul(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function y1(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Dy(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function v1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _1(t);V("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>rf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>rf(e.remoteStore,i)),t.onlineComponents=e}async function _1(t){return t.offlineComponents||(V("FirestoreClient","Using default OfflineComponentProvider"),await y1(t,new h1)),t.offlineComponents}async function Qy(t){return t.onlineComponents||(V("FirestoreClient","Using default OnlineComponentProvider"),await v1(t,new d1)),t.onlineComponents}function w1(t){return Qy(t).then(e=>e.syncEngine)}async function E1(t){const e=await Qy(t),n=e.eventManager;return n.onListen=ZR.bind(null,e.syncEngine),n.onUnlisten=t1.bind(null,e.syncEngine),n}function b1(t,e,n={}){const s=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new g1({next:h=>{i.enqueueAndForget(()=>KR(r,l)),h.fromCache&&a.source==="server"?c.reject(new K(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new GR(o,u,{includeMetadataChanges:!0,Nu:!0});return qR(r,l)}(await E1(t),t.asyncQueue,e,n,s)),s.promise}class I1{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Ny(this,"async_queue_retry"),this.Wc=()=>{const n=lc();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=lc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=lc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new Nn;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Ni(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw hn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=Ml.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.qc.push(r),r}zc(){this.Kc&&Q()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class Ui extends Na{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new I1,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Yy(this),this._firestoreClient.terminate()}}function T1(t,e){const n=typeof t=="object"?t:Pu(),s=typeof t=="string"?t:e||"(default)",r=ta(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Ip("firestore");i&&p1(r,...i)}return r}function Xy(t){return t._firestoreClient||Yy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Yy(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new Zk(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new m1(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this._byteString=e}static fromBase64String(e){try{return new er(ot.fromBase64String(e))}catch(n){throw new K(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new er(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1=/^__.*__$/;class C1{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new qn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Pi(e,this.data,n,this.fieldTransforms)}}class Jy{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new qn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Zy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Hl{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Hl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Bo(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Zy(this.sa)&&S1.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class k1{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||Ra(e)}da(e,n,s,r=!1){return new Hl({sa:e,methodName:n,fa:s,path:Ze.emptyPath(),oa:!1,la:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function ev(t){const e=t._freezeSettings(),n=Ra(t._databaseId);return new k1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function A1(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);ql("Data must be an object, but it was:",o,s);const a=tv(s,o);let c,u;if(i.merge)c=new At(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=lu(e,h,n);if(!o.contains(d))throw new K(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);sv(l,d)||l.push(d)}c=new At(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new C1(new ft(a),c,u)}class La extends Bl{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof La}}function R1(t,e,n,s){const r=t.da(1,e,n);ql("Data must be an object, but it was:",r,s);const i=[],o=ft.empty();vs(s,(c,u)=>{const l=Kl(e,c,n);u=De(u);const h=r.ca(l);if(u instanceof La)i.push(l);else{const d=Ma(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new At(i);return new Jy(o,a,r.fieldTransforms)}function D1(t,e,n,s,r,i){const o=t.da(1,e,n),a=[lu(e,s,n)],c=[r];if(i.length%2!=0)throw new K(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(lu(e,i[d])),c.push(i[d+1]);const u=[],l=ft.empty();for(let d=a.length-1;d>=0;--d)if(!sv(u,a[d])){const p=a[d];let m=c[d];m=De(m);const _=o.ca(p);if(m instanceof La)u.push(p);else{const v=Ma(m,_);v!=null&&(u.push(p),l.set(p,v))}}const h=new At(u);return new Jy(l,h,o.fieldTransforms)}function Ma(t,e){if(nv(t=De(t)))return ql("Unsupported field value:",e,t),tv(t,e);if(t instanceof Bl)return function(n,s){if(!Zy(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Ma(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=De(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return vA(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Fe.fromDate(n);return{timestampValue:Vo(s.It,r)}}if(n instanceof Fe){const r=new Fe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Vo(s.It,r)}}if(n instanceof jl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof er)return{bytesValue:Sy(s.It,n._byteString)};if(n instanceof Rt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Al(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${$l(n)}`)}(t,e)}function tv(t,e){const n={};return ny(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vs(t,(s,r)=>{const i=Ma(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function nv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof jl||t instanceof er||t instanceof Rt||t instanceof Bl)}function ql(t,e,n){if(!nv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=$l(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function lu(t,e,n){if((e=De(e))instanceof xa)return e._internalPath;if(typeof e=="string")return Kl(t,e);throw Bo("Field path arguments must be of type string or ",t,!1,void 0,n)}const O1=new RegExp("[~\\*/\\[\\]]");function Kl(t,e,n){if(e.search(O1)>=0)throw Bo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xa(...e.split("."))._internalPath}catch{throw Bo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new K(S.INVALID_ARGUMENT,a+t+c)}function sv(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new N1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(iv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class N1 extends rv{data(){return super.data()}}function iv(t,e){return typeof e=="string"?Kl(t,e):e instanceof xa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{convertValue(e,n="none"){switch(fs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Xs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){const s={};return vs(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new jl(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=ry(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ci(e));default:return null}}convertTimestamp(e){const n=Vn(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ke.fromString(e);be(Ry(s));const r=new ui(s.get(1),s.get(3)),i=new H(s.popFirst(5));return r.isEqual(n)||hn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class M1 extends rv{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new lo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(iv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class lo extends M1{data(e={}){return super.data(e)}}class U1{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Ji(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new lo(this._firestore,this._userDataWriter,s.key,s,new Ji(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new lo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ji(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new lo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ji(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:F1(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function F1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}class V1 extends x1{constructor(e){super(),this.firestore=e}convertBytes(e){return new er(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,n)}}function $1(t){t=ps(t,Pa);const e=ps(t.firestore,Ui),n=Xy(e),s=new V1(e);return P1(t._query),b1(n,t._query).then(r=>new U1(e,s,t,r))}function ff(t,e,n,...s){t=ps(t,Rt);const r=ps(t.firestore,Ui),i=ev(r);let o;return o=typeof(e=De(e))=="string"||e instanceof xa?D1(i,"updateDoc",t._key,e,n,s):R1(i,"updateDoc",t._key,e),zl(r,[o.toMutation(t._key,Ut.exists(!0))])}function pf(t){return zl(ps(t.firestore,Ui),[new kl(t._key,Ut.none())])}function B1(t,e){const n=ps(t.firestore,Ui),s=Ar(t),r=L1(t.converter,e);return zl(n,[A1(ev(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Ut.exists(!1))]).then(()=>s)}function zl(t,e){return function(n,s){const r=new Nn;return n.asyncQueue.enqueueAndForget(async()=>n1(await w1(n),s,r)),r.promise}(Xy(t),e)}(function(t,e=!0){(function(n){dr=n})(rr),cs(new Un("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Ui(new $k(n.getProvider("auth-internal")),new qk(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new K(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ui(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Wt(Md,"3.7.2",t),Wt(Md,"3.7.2","esm2017")})();const j1={},H1={class:"card"},q1={class:"title"},K1={class:"description"};function z1(t,e,n,s,r,i){return pe(),Ae("div",H1,[P("div",q1,[uh(t.$slots,"title",{},void 0,!0)]),P("div",K1,[uh(t.$slots,"description",{},void 0,!0)])])}const W1=ms(j1,[["render",z1],["__scopeId","data-v-300a4a8b"]]);const G1={components:{Post:W1},setup(){const t=fe(!0),e=Ks(Hr);Yp(e,i=>{i?t.value=!0:t.value=!1});const n=cr();l_(()=>{t.value||n.push("/login")});const s=Ku(),r=i=>{s.commit("setHashtag",i.target.value)};return pi(async()=>{(await $1(Gy(Os,"Blogs"))).forEach(o=>{const a=o.data();s.commit("updateState",{id:o.id,date:a.date,title:a.title,content:a.content,video:a.video,userId:a.userId})})}),{filteredPosts:s.getters.filtredPosts,setHashtag:r,loggedIn:t,currentHashtag:dt(()=>s.state.currentHashtag)}}},Q1=P("button",null,"Create",-1),X1=P("h1",null,"Blogs",-1),Y1={class:"bloglist"},J1=P("button",null,"View",-1);function Z1(t,e,n,s,r,i){const o=Ln("router-link"),a=Ln("post");return pe(),Ae(Re,null,[Se(o,{to:t.$store.state.currentEdit?"/edit-video":"/new-blog"},{default:Tt(()=>[Q1]),_:1},8,["to"]),X1,P("div",Y1,[(pe(!0),Ae(Re,null,Cu(s.filteredPosts,c=>(pe(),Qr(a,null,{title:Tt(()=>[at(nn(c.title),1)]),description:Tt(()=>[Se(o,{to:`/view-post/${c.id?c.id:""}`},{default:Tt(()=>[J1]),_:2},1032,["to"])]),_:2},1024))),256))])],64)}const eD=ms(G1,[["render",Z1]]),tD={emits:["onloadedmetadata"],components:{},data(){return{start:0,end:0,duration:0,error:""}},computed:{video(){const t=this.$store.state.currentEdit,e=this.$store.state.posts.filter(n=>n.id&&t&&n.id==t);return e[0]?{videos:e[0].video?e[0].video.videos:[]}:{videos:[]}}},methods:{logDuration(){this.duration=this.$refs.videoPlayer.duration,this.end=this.duration},editPost(){this.start>this.end?this.error="Check time and duration!"+this.duration:this.end>this.duration?this.error="Check time and duration!"+this.duration:(this.$store.commit("editDone",[this.start,this.end]),this.$router.push("/feed"))}}},nD=P("h1",null,"Publish blog confirmation",-1),sD=["src"],rD=at("Start time: "),iD=at("End time: ");function oD(t,e,n,s,r,i){return pe(),Ae("form",null,[nD,Me(P("video",{src:i.video.videos,onLoadedmetadata:e[0]||(e[0]=(...o)=>i.logDuration&&i.logDuration(...o)),controls:"",ref:"videoPlayer"},null,40,sD),[[kn,i.video.videos.length]]),Me(P("h2",null,"No video, please confirm posting!",512),[[kn,!i.video.videos.length]]),Me(P("p",null,"Full lenght: "+nn(r.duration),513),[[kn,i.video.videos.length]]),Me(P("span",null,[P("p",null,[rD,Me(P("input",{type:"text",name:"start","onUpdate:modelValue":e[1]||(e[1]=o=>r.start=o)},null,512),[[St,r.start]])]),P("p",null,[iD,Me(P("input",{type:"text",name:"end","onUpdate:modelValue":e[2]||(e[2]=o=>r.end=o)},null,512),[[St,r.end]])])],512),[[kn,i.video.videos.length]]),at(" "+nn(r.error)+" ",1),P("button",{onClick:e[3]||(e[3]=Ac((...o)=>i.editPost&&i.editPost(...o),["prevent"]))},"Confirm")])}const aD=ms(tD,[["render",oD]]);const cD={components:{},setup(){const t=Ku(),e=cr(),n=_g(),s=fe("Delete"),r=fe("Title"),i=fe(""),o=fe(null),a=fe(0),c=fe("content"),u=Bn({videos:[]}),l=m=>{const _=t.state.posts.filter(v=>v.id&&m&&v.id==m);_[0]&&(r.value=_[0].title,i.value=_[0].date?_[0].date:"",c.value=_[0].content,u.videos=_[0].video?_[0].video.videos:[],a.value=_[0].time?_[0].time[0]:0)},h=()=>{s.value=="Confirm"?(t.commit("deletePost",n.params.id),e.push("/feed")):s.value="Confirm"},d=()=>{e.push({path:"/new-blog",query:{id:n.params.id,title:r.value,content:c.value,video:u.videos}})},p=()=>{o.currentTime=a.value};return pi(()=>{l(n.params.id)}),{title:r,date:i,content:c,video:u,Delete:s,getPost:l,updatePost:d,deletePost:h,logDuration:p}}},uD={class:"content"},lD=["src"];function hD(t,e,n,s,r,i){return pe(),Ae(Re,null,[P("h2",null,nn(s.title),1),P("p",null,nn(s.date),1),P("p",uD,nn(s.content),1),(pe(!0),Ae(Re,null,Cu(s.video.videos,o=>(pe(),Ae("div",null,[P("video",{onLoadedmetadata:e[0]||(e[0]=(...a)=>s.logDuration&&s.logDuration(...a)),controls:"",ref_for:!0,ref:"videoPlayer"},[P("source",{src:o,type:"video/mp4"},null,8,lD)],544)]))),256)),P("button",{onClick:e[1]||(e[1]=(...o)=>s.deletePost&&s.deletePost(...o)),style:jo(`color: ${s.Delete=="Confirm"?"red":"black"}`)},nn(s.Delete),5),P("button",{onClick:e[2]||(e[2]=(...o)=>s.updatePost&&s.updatePost(...o))},"Edit")],64)}const gf=ms(cD,[["render",hD]]),dD=[{path:"/",component:yd},{path:"/feed",component:eD,name:"feed"},{path:"/home/",component:yd},{path:"/login/",component:LC},{path:"/register/",component:DC},{path:"/new-blog",component:sS},{path:"/edit-video",component:aD,name:"edit"},{path:"/view-post/",component:gf},{path:"/view-post/:id",component:gf}],fD=_T({history:LI(),routes:dD}),pD=qT({state(){return{posts:[],currentEdit:null}},getters:{filtredPosts(t){return t.currentEdit?t.posts.filter(e=>e.id!=t.currentEdit):t.posts}},mutations:{async addPost(t,e){if(e.id){const a=t.posts.findIndex(c=>c.id==e.id);a>-1&&(t.posts.splice(a,1),pf(Ar(Os,"Blogs",e.id)))}const n=fe(""),s=Yg(Hr),r=Ks(Hr);try{const a=await B1(Gy(Os,"Blogs"),{date:e.date,userId:r.currentUser.uid,title:e.title,content:e.content});t.posts.push({id:a.id,date:e.date,title:e.title,content:e.content,video:e.video}),n.value=a.id,e.id||(t.currentEdit=a.id)}catch(a){console.error("Error adding document: ",a)}let i=1;const o={videos:[]};e.video.videos&&e.video.videos.forEach(a=>{const c=Xg(s,`videos/${e.title+(i++).toString()}.mp4`);Gg(c,a,"data_url").then(u=>{Qg(u.ref).then(l=>{o.videos.push(l),ff(Ar(Os,"Blogs",n.value),{video:{videos:o.videos}})})})})},deletePost(t,e){const n=t.posts.findIndex(s=>s.id==e);n>-1&&(t.posts.splice(n,1),pf(Ar(Os,"Blogs",e)))},setEdit(t,e){t.currentEdit=e},updateState(t,e){const n=Ks(Hr),s=t.posts.findIndex(r=>r.id==e.id);s>-1&&t.posts.splice(s,1),e.userId==n.currentUser.uid&&t.posts.push({id:e.id,date:e.date,title:e.title,content:e.content,video:e.video})},editDone(t,e){const n=t.posts.findIndex(s=>s.id==t.currentEdit);n>-1&&(t.posts[n].time=e,ff(Ar(Os,"Blogs",t.currentEdit),{time:e})),t.currentEdit=null}}});var gD="firebase",mD="9.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt(gD,mD,"app");const yD={apiKey:"AIzaSyCqBTxOJHaPP-AH5PKJHShNyAm1S2RSHUY",authDomain:"blog-ab-e3f50.firebaseapp.com",projectId:"blog-ab-e3f50",storageBucket:"blog-ab-e3f50.appspot.com",messagingSenderId:"206927976177",appId:"1:206927976177:web:d05793bbee8c4e62e9bb50"},Hr=Ap(yD),Os=T1(Hr),Wl=Rw(kT);Wl.use(pD);Wl.use(fD);Wl.mount("#app");
