const tw=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};tw();function nu(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const nw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rw=nu(nw);function Rp(t){return!!t||t===""}function wa(t){if(te(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Xe(r)?ow(r):wa(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Xe(t))return t;if(Ke(t))return t}}const sw=/;(?![^(]*\))/g,iw=/:(.+)/;function ow(t){const e={};return t.split(sw).forEach(n=>{if(n){const r=n.split(iw);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ru(t){let e="";if(Xe(t))e=t;else if(te(t))for(let n=0;n<t.length;n++){const r=ru(t[n]);r&&(e+=r+" ")}else if(Ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const wt=t=>Xe(t)?t:t==null?"":te(t)||Ke(t)&&(t.toString===Np||!se(t.toString))?JSON.stringify(t,Op,2):String(t),Op=(t,e)=>e&&e.__v_isRef?Op(t,e.value):Wr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Pp(e)?{[`Set(${e.size})`]:[...e.values()]}:Ke(e)&&!te(e)&&!xp(e)?String(e):e,Ce={},Kr=[],Vt=()=>{},aw=()=>!1,cw=/^on[^a-z]/,Pi=t=>cw.test(t),su=t=>t.startsWith("onUpdate:"),mt=Object.assign,iu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},lw=Object.prototype.hasOwnProperty,ue=(t,e)=>lw.call(t,e),te=Array.isArray,Wr=t=>ba(t)==="[object Map]",Pp=t=>ba(t)==="[object Set]",se=t=>typeof t=="function",Xe=t=>typeof t=="string",ou=t=>typeof t=="symbol",Ke=t=>t!==null&&typeof t=="object",Dp=t=>Ke(t)&&se(t.then)&&se(t.catch),Np=Object.prototype.toString,ba=t=>Np.call(t),uw=t=>ba(t).slice(8,-1),xp=t=>ba(t)==="[object Object]",au=t=>Xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ks=nu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ea=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},hw=/-(\w)/g,rn=Ea(t=>t.replace(hw,(e,n)=>n?n.toUpperCase():"")),dw=/\B([A-Z])/g,fs=Ea(t=>t.replace(dw,"-$1").toLowerCase()),Ta=Ea(t=>t.charAt(0).toUpperCase()+t.slice(1)),wc=Ea(t=>t?`on${Ta(t)}`:""),oi=(t,e)=>!Object.is(t,e),Io=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Bo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Zc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Jh;const fw=()=>Jh||(Jh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Jt;class Lp{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Jt&&(this.parent=Jt,this.index=(Jt.scopes||(Jt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Jt;try{return Jt=this,e()}finally{Jt=n}}}on(){Jt=this}off(){Jt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function pw(t){return new Lp(t)}function mw(t,e=Jt){e&&e.active&&e.effects.push(t)}const cu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Mp=t=>(t.w&Wn)>0,Up=t=>(t.n&Wn)>0,gw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Wn},yw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Mp(s)&&!Up(s)?s.delete(t):e[n++]=s,s.w&=~Wn,s.n&=~Wn}e.length=n}},el=new WeakMap;let Us=0,Wn=1;const tl=30;let Ft;const hr=Symbol(""),nl=Symbol("");class lu{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,mw(this,r)}run(){if(!this.active)return this.fn();let e=Ft,n=$n;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ft,Ft=this,$n=!0,Wn=1<<++Us,Us<=tl?gw(this):Xh(this),this.fn()}finally{Us<=tl&&yw(this),Wn=1<<--Us,Ft=this.parent,$n=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ft===this?this.deferStop=!0:this.active&&(Xh(this),this.onStop&&this.onStop(),this.active=!1)}}function Xh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let $n=!0;const Fp=[];function ps(){Fp.push($n),$n=!1}function ms(){const t=Fp.pop();$n=t===void 0?!0:t}function kt(t,e,n){if($n&&Ft){let r=el.get(t);r||el.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=cu()),$p(s)}}function $p(t,e){let n=!1;Us<=tl?Up(t)||(t.n|=Wn,n=!Mp(t)):n=!t.has(Ft),n&&(t.add(Ft),Ft.deps.push(t))}function mn(t,e,n,r,s,i){const o=el.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&te(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":te(t)?au(n)&&a.push(o.get("length")):(a.push(o.get(hr)),Wr(t)&&a.push(o.get(nl)));break;case"delete":te(t)||(a.push(o.get(hr)),Wr(t)&&a.push(o.get(nl)));break;case"set":Wr(t)&&a.push(o.get(hr));break}if(a.length===1)a[0]&&rl(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);rl(cu(c))}}function rl(t,e){const n=te(t)?t:[...t];for(const r of n)r.computed&&Yh(r);for(const r of n)r.computed||Yh(r)}function Yh(t,e){(t!==Ft||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const vw=nu("__proto__,__v_isRef,__isVue"),Bp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ou)),_w=uu(),ww=uu(!1,!0),bw=uu(!0),Zh=Ew();function Ew(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ye(this);for(let i=0,o=this.length;i<o;i++)kt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ye)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ps();const r=ye(this)[e].apply(this,n);return ms(),r}}),t}function uu(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Fw:Kp:e?qp:Hp).get(r))return r;const o=te(r);if(!t&&o&&ue(Zh,s))return Reflect.get(Zh,s,i);const a=Reflect.get(r,s,i);return(ou(s)?Bp.has(s):vw(s))||(t||kt(r,"get",s),e)?a:ot(a)?o&&au(s)?a:a.value:Ke(a)?t?Wp(a):Yn(a):a}}const Tw=Vp(),Iw=Vp(!0);function Vp(t=!1){return function(n,r,s,i){let o=n[r];if(ai(o)&&ot(o)&&!ot(s))return!1;if(!t&&!ai(s)&&(sl(s)||(s=ye(s),o=ye(o)),!te(n)&&ot(o)&&!ot(s)))return o.value=s,!0;const a=te(n)&&au(r)?Number(r)<n.length:ue(n,r),c=Reflect.set(n,r,s,i);return n===ye(i)&&(a?oi(s,o)&&mn(n,"set",r,s):mn(n,"add",r,s)),c}}function Sw(t,e){const n=ue(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&mn(t,"delete",e,void 0),r}function Cw(t,e){const n=Reflect.has(t,e);return(!ou(e)||!Bp.has(e))&&kt(t,"has",e),n}function Aw(t){return kt(t,"iterate",te(t)?"length":hr),Reflect.ownKeys(t)}const jp={get:_w,set:Tw,deleteProperty:Sw,has:Cw,ownKeys:Aw},kw={get:bw,set(t,e){return!0},deleteProperty(t,e){return!0}},Rw=mt({},jp,{get:ww,set:Iw}),hu=t=>t,Ia=t=>Reflect.getPrototypeOf(t);function so(t,e,n=!1,r=!1){t=t.__v_raw;const s=ye(t),i=ye(e);n||(e!==i&&kt(s,"get",e),kt(s,"get",i));const{has:o}=Ia(s),a=r?hu:n?pu:ci;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function io(t,e=!1){const n=this.__v_raw,r=ye(n),s=ye(t);return e||(t!==s&&kt(r,"has",t),kt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function oo(t,e=!1){return t=t.__v_raw,!e&&kt(ye(t),"iterate",hr),Reflect.get(t,"size",t)}function ed(t){t=ye(t);const e=ye(this);return Ia(e).has.call(e,t)||(e.add(t),mn(e,"add",t,t)),this}function td(t,e){e=ye(e);const n=ye(this),{has:r,get:s}=Ia(n);let i=r.call(n,t);i||(t=ye(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?oi(e,o)&&mn(n,"set",t,e):mn(n,"add",t,e),this}function nd(t){const e=ye(this),{has:n,get:r}=Ia(e);let s=n.call(e,t);s||(t=ye(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&mn(e,"delete",t,void 0),i}function rd(){const t=ye(this),e=t.size!==0,n=t.clear();return e&&mn(t,"clear",void 0,void 0),n}function ao(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ye(o),c=e?hu:t?pu:ci;return!t&&kt(a,"iterate",hr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function co(t,e,n){return function(...r){const s=this.__v_raw,i=ye(s),o=Wr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?hu:e?pu:ci;return!e&&kt(i,"iterate",c?nl:hr),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Sn(t){return function(...e){return t==="delete"?!1:this}}function Ow(){const t={get(i){return so(this,i)},get size(){return oo(this)},has:io,add:ed,set:td,delete:nd,clear:rd,forEach:ao(!1,!1)},e={get(i){return so(this,i,!1,!0)},get size(){return oo(this)},has:io,add:ed,set:td,delete:nd,clear:rd,forEach:ao(!1,!0)},n={get(i){return so(this,i,!0)},get size(){return oo(this,!0)},has(i){return io.call(this,i,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:ao(!0,!1)},r={get(i){return so(this,i,!0,!0)},get size(){return oo(this,!0)},has(i){return io.call(this,i,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:ao(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=co(i,!1,!1),n[i]=co(i,!0,!1),e[i]=co(i,!1,!0),r[i]=co(i,!0,!0)}),[t,n,e,r]}const[Pw,Dw,Nw,xw]=Ow();function du(t,e){const n=e?t?xw:Nw:t?Dw:Pw;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ue(n,s)&&s in r?n:r,s,i)}const Lw={get:du(!1,!1)},Mw={get:du(!1,!0)},Uw={get:du(!0,!1)},Hp=new WeakMap,qp=new WeakMap,Kp=new WeakMap,Fw=new WeakMap;function $w(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bw(t){return t.__v_skip||!Object.isExtensible(t)?0:$w(uw(t))}function Yn(t){return ai(t)?t:fu(t,!1,jp,Lw,Hp)}function Vw(t){return fu(t,!1,Rw,Mw,qp)}function Wp(t){return fu(t,!0,kw,Uw,Kp)}function fu(t,e,n,r,s){if(!Ke(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Bw(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function zr(t){return ai(t)?zr(t.__v_raw):!!(t&&t.__v_isReactive)}function ai(t){return!!(t&&t.__v_isReadonly)}function sl(t){return!!(t&&t.__v_isShallow)}function zp(t){return zr(t)||ai(t)}function ye(t){const e=t&&t.__v_raw;return e?ye(e):t}function Gp(t){return Bo(t,"__v_skip",!0),t}const ci=t=>Ke(t)?Yn(t):t,pu=t=>Ke(t)?Wp(t):t;function Qp(t){$n&&Ft&&(t=ye(t),$p(t.dep||(t.dep=cu())))}function Jp(t,e){t=ye(t),t.dep&&rl(t.dep)}function ot(t){return!!(t&&t.__v_isRef===!0)}function fe(t){return Xp(t,!1)}function jw(t){return Xp(t,!0)}function Xp(t,e){return ot(t)?t:new Hw(t,e)}class Hw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ye(e),this._value=n?e:ci(e)}get value(){return Qp(this),this._value}set value(e){e=this.__v_isShallow?e:ye(e),oi(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:ci(e),Jp(this))}}function Bn(t){return ot(t)?t.value:t}const qw={get:(t,e,n)=>Bn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ot(s)&&!ot(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Yp(t){return zr(t)?t:new Proxy(t,qw)}class Kw{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new lu(e,()=>{this._dirty||(this._dirty=!0,Jp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ye(this);return Qp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ww(t,e,n=!1){let r,s;const i=se(t);return i?(r=t,s=Vt):(r=t.get,s=t.set),new Kw(r,s,i||!s,n)}function Vn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Sa(i,e,n)}return s}function jt(t,e,n,r){if(se(t)){const i=Vn(t,e,n,r);return i&&Dp(i)&&i.catch(o=>{Sa(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(jt(t[i],e,n,r));return s}function Sa(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Vn(c,null,10,[t,o,a]);return}}zw(t,n,s,r)}function zw(t,e,n,r=!0){console.error(t)}let Vo=!1,il=!1;const St=[];let ln=0;const Ws=[];let Fs=null,Ur=0;const zs=[];let On=null,Fr=0;const Zp=Promise.resolve();let mu=null,ol=null;function gu(t){const e=mu||Zp;return t?e.then(this?t.bind(this):t):e}function Gw(t){let e=ln+1,n=St.length;for(;e<n;){const r=e+n>>>1;li(St[r])<t?e=r+1:n=r}return e}function em(t){(!St.length||!St.includes(t,Vo&&t.allowRecurse?ln+1:ln))&&t!==ol&&(t.id==null?St.push(t):St.splice(Gw(t.id),0,t),tm())}function tm(){!Vo&&!il&&(il=!0,mu=Zp.then(rm))}function Qw(t){const e=St.indexOf(t);e>ln&&St.splice(e,1)}function nm(t,e,n,r){te(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),tm()}function Jw(t){nm(t,Fs,Ws,Ur)}function Xw(t){nm(t,On,zs,Fr)}function Ca(t,e=null){if(Ws.length){for(ol=e,Fs=[...new Set(Ws)],Ws.length=0,Ur=0;Ur<Fs.length;Ur++)Fs[Ur]();Fs=null,Ur=0,ol=null,Ca(t,e)}}function jo(t){if(Ca(),zs.length){const e=[...new Set(zs)];if(zs.length=0,On){On.push(...e);return}for(On=e,On.sort((n,r)=>li(n)-li(r)),Fr=0;Fr<On.length;Fr++)On[Fr]();On=null,Fr=0}}const li=t=>t.id==null?1/0:t.id;function rm(t){il=!1,Vo=!0,Ca(t),St.sort((n,r)=>li(n)-li(r));const e=Vt;try{for(ln=0;ln<St.length;ln++){const n=St[ln];n&&n.active!==!1&&Vn(n,null,14)}}finally{ln=0,St.length=0,jo(),Vo=!1,mu=null,(St.length||Ws.length||zs.length)&&rm(t)}}function Yw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Ce;d&&(s=n.map(m=>m.trim())),h&&(s=n.map(Zc))}let a,c=r[a=wc(e)]||r[a=wc(rn(e))];!c&&i&&(c=r[a=wc(fs(e))]),c&&jt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,jt(l,t,6,s)}}function sm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!se(t)){const c=l=>{const u=sm(l,e,!0);u&&(a=!0,mt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(te(i)?i.forEach(c=>o[c]=null):mt(o,i),r.set(t,o),o)}function Aa(t,e){return!t||!Pi(e)?!1:(e=e.slice(2).replace(/Once$/,""),ue(t,e[0].toLowerCase()+e.slice(1))||ue(t,fs(e))||ue(t,e))}let at=null,ka=null;function Ho(t){const e=at;return at=t,ka=t&&t.type.__scopeId||null,e}function Zw(t){ka=t}function eb(){ka=null}function Ct(t,e=at,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&pd(-1);const i=Ho(e),o=t(...s);return Ho(i),r._d&&pd(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function bc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:m,ctx:f,inheritAttrs:v}=t;let b,y;const _=Ho(t);try{if(n.shapeFlag&4){const N=s||r;b=Ut(u.call(N,N,h,i,m,d,f)),y=c}else{const N=e;b=Ut(N.length>1?N(i,{attrs:c,slots:a,emit:l}):N(i,null)),y=e.props?c:tb(c)}}catch(N){Gs.length=0,Sa(N,t,1),b=Ee(yn)}let A=b;if(y&&v!==!1){const N=Object.keys(y),{shapeFlag:H}=A;N.length&&H&7&&(o&&N.some(su)&&(y=nb(y,o)),A=Zr(A,y))}return n.dirs&&(A=Zr(A),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&(A.transition=n.transition),b=A,Ho(_),b}const tb=t=>{let e;for(const n in t)(n==="class"||n==="style"||Pi(n))&&((e||(e={}))[n]=t[n]);return e},nb=(t,e)=>{const n={};for(const r in t)(!su(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function rb(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?sd(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!Aa(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?sd(r,o,l):!0:!!o;return!1}function sd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Aa(n,i))return!0}return!1}function sb({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ib=t=>t.__isSuspense;function im(t,e){e&&e.pendingBranch?te(t)?e.effects.push(...t):e.effects.push(t):Xw(t)}function So(t,e){if(Je){let n=Je.provides;const r=Je.parent&&Je.parent.provides;r===n&&(n=Je.provides=Object.create(r)),n[t]=e}}function Nt(t,e,n=!1){const r=Je||at;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&se(e)?e.call(r.proxy):e}}function om(t,e){return yu(t,null,e)}const id={};function dr(t,e,n){return yu(t,e,n)}function yu(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ce){const a=Je;let c,l=!1,u=!1;if(ot(t)?(c=()=>t.value,l=sl(t)):zr(t)?(c=()=>t,r=!0):te(t)?(u=!0,l=t.some(y=>zr(y)||sl(y)),c=()=>t.map(y=>{if(ot(y))return y.value;if(zr(y))return ar(y);if(se(y))return Vn(y,a,2)})):se(t)?e?c=()=>Vn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),jt(t,a,3,[d])}:c=Vt,e&&r){const y=c;c=()=>ar(y())}let h,d=y=>{h=b.onStop=()=>{Vn(y,a,4)}};if(fi)return d=Vt,e?n&&jt(e,a,3,[c(),u?[]:void 0,d]):c(),Vt;let m=u?[]:id;const f=()=>{if(!!b.active)if(e){const y=b.run();(r||l||(u?y.some((_,A)=>oi(_,m[A])):oi(y,m)))&&(h&&h(),jt(e,a,3,[y,m===id?void 0:m,d]),m=y)}else b.run()};f.allowRecurse=!!e;let v;s==="sync"?v=f:s==="post"?v=()=>yt(f,a&&a.suspense):v=()=>Jw(f);const b=new lu(c,v);return e?n?f():m=b.run():s==="post"?yt(b.run.bind(b),a&&a.suspense):b.run(),()=>{b.stop(),a&&a.scope&&iu(a.scope.effects,b)}}function ob(t,e,n){const r=this.proxy,s=Xe(t)?t.includes(".")?am(r,t):()=>r[t]:t.bind(r,r);let i;se(e)?i=e:(i=e.handler,n=e);const o=Je;es(this);const a=yu(s,i.bind(r),n);return o?es(o):fr(),a}function am(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function ar(t,e){if(!Ke(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ot(t))ar(t.value,e);else if(te(t))for(let n=0;n<t.length;n++)ar(t[n],e);else if(Pp(t)||Wr(t))t.forEach(n=>{ar(n,e)});else if(xp(t))for(const n in t)ar(t[n],e);return t}function vu(t){return se(t)?{setup:t,name:t.name}:t}const Gr=t=>!!t.type.__asyncLoader,cm=t=>t.type.__isKeepAlive;function lm(t,e){hm(t,"a",e)}function um(t,e){hm(t,"da",e)}function hm(t,e,n=Je){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ra(e,r,n),n){let s=n.parent;for(;s&&s.parent;)cm(s.parent.vnode)&&ab(r,e,n,s),s=s.parent}}function ab(t,e,n,r){const s=Ra(e,t,r,!0);fm(()=>{iu(r[e],s)},n)}function Ra(t,e,n=Je,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ps(),es(n);const a=jt(e,n,t,o);return fr(),ms(),a});return r?s.unshift(i):s.push(i),i}}const Tn=t=>(e,n=Je)=>(!fi||t==="sp")&&Ra(t,e,n),cb=Tn("bm"),Di=Tn("m"),lb=Tn("bu"),ub=Tn("u"),dm=Tn("bum"),fm=Tn("um"),hb=Tn("sp"),db=Tn("rtg"),fb=Tn("rtc");function pb(t,e=Je){Ra("ec",t,e)}function Ve(t,e){const n=at;if(n===null)return t;const r=Da(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ce]=e[i];se(o)&&(o={mounted:o,updated:o}),o.deep&&ar(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function Xt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(ps(),jt(c,n,8,[t.el,a,t,e]),ms())}}const pm="components";function gn(t,e){return gb(pm,t,!0,e)||t}const mb=Symbol();function gb(t,e,n=!0,r=!1){const s=at||Je;if(s){const i=s.type;if(t===pm){const a=Wb(i,!1);if(a&&(a===e||a===rn(e)||a===Ta(rn(e))))return i}const o=od(s[t]||i[t],e)||od(s.appContext[t],e);return!o&&r?i:o}}function od(t,e){return t&&(t[e]||t[rn(e)]||t[Ta(rn(e))])}function Oa(t,e,n,r){let s;const i=n&&n[r];if(te(t)||Xe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ke(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function ad(t,e,n={},r,s){if(at.isCE||at.parent&&Gr(at.parent)&&at.parent.isCE)return Ee("slot",e==="default"?null:{name:e},r&&r());let i=t[e];i&&i._c&&(i._d=!1),me();const o=i&&mm(i(n)),a=di(Le,{key:n.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function mm(t){return t.some(e=>zo(e)?!(e.type===yn||e.type===Le&&!mm(e.children)):!0)?t:null}const al=t=>t?Rm(t)?Da(t)||t.proxy:al(t.parent):null,qo=mt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>al(t.parent),$root:t=>al(t.root),$emit:t=>t.emit,$options:t=>ym(t),$forceUpdate:t=>t.f||(t.f=()=>em(t.update)),$nextTick:t=>t.n||(t.n=gu.bind(t.proxy)),$watch:t=>ob.bind(t)}),yb={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==Ce&&ue(r,e))return o[e]=1,r[e];if(s!==Ce&&ue(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ue(l,e))return o[e]=3,i[e];if(n!==Ce&&ue(n,e))return o[e]=4,n[e];cl&&(o[e]=0)}}const u=qo[e];let h,d;if(u)return e==="$attrs"&&kt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ce&&ue(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ue(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==Ce&&ue(s,e)?(s[e]=n,!0):r!==Ce&&ue(r,e)?(r[e]=n,!0):ue(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ce&&ue(t,o)||e!==Ce&&ue(e,o)||(a=i[0])&&ue(a,o)||ue(r,o)||ue(qo,o)||ue(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ue(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let cl=!0;function vb(t){const e=ym(t),n=t.proxy,r=t.ctx;cl=!1,e.beforeCreate&&cd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:m,updated:f,activated:v,deactivated:b,beforeDestroy:y,beforeUnmount:_,destroyed:A,unmounted:N,render:H,renderTracked:X,renderTriggered:J,errorCaptured:U,serverPrefetch:ie,expose:be,inheritAttrs:Pe,components:Ze,directives:je,filters:Q}=e;if(l&&_b(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Ae in o){const Te=o[Ae];se(Te)&&(r[Ae]=Te.bind(n))}if(s){const Ae=s.call(n,n);Ke(Ae)&&(t.data=Yn(Ae))}if(cl=!0,i)for(const Ae in i){const Te=i[Ae],Tt=se(Te)?Te.bind(n,n):se(Te.get)?Te.get.bind(n,n):Vt,Pr=!se(Te)&&se(Te.set)?Te.set.bind(n):Vt,an=vt({get:Tt,set:Pr});Object.defineProperty(r,Ae,{enumerable:!0,configurable:!0,get:()=>an.value,set:zt=>an.value=zt})}if(a)for(const Ae in a)gm(a[Ae],r,n,Ae);if(c){const Ae=se(c)?c.call(n):c;Reflect.ownKeys(Ae).forEach(Te=>{So(Te,Ae[Te])})}u&&cd(u,t,"c");function ve(Ae,Te){te(Te)?Te.forEach(Tt=>Ae(Tt.bind(n))):Te&&Ae(Te.bind(n))}if(ve(cb,h),ve(Di,d),ve(lb,m),ve(ub,f),ve(lm,v),ve(um,b),ve(pb,U),ve(fb,X),ve(db,J),ve(dm,_),ve(fm,N),ve(hb,ie),te(be))if(be.length){const Ae=t.exposed||(t.exposed={});be.forEach(Te=>{Object.defineProperty(Ae,Te,{get:()=>n[Te],set:Tt=>n[Te]=Tt})})}else t.exposed||(t.exposed={});H&&t.render===Vt&&(t.render=H),Pe!=null&&(t.inheritAttrs=Pe),Ze&&(t.components=Ze),je&&(t.directives=je)}function _b(t,e,n=Vt,r=!1){te(t)&&(t=ll(t));for(const s in t){const i=t[s];let o;Ke(i)?"default"in i?o=Nt(i.from||s,i.default,!0):o=Nt(i.from||s):o=Nt(i),ot(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function cd(t,e,n){jt(te(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function gm(t,e,n,r){const s=r.includes(".")?am(n,r):()=>n[r];if(Xe(t)){const i=e[t];se(i)&&dr(s,i)}else if(se(t))dr(s,t.bind(n));else if(Ke(t))if(te(t))t.forEach(i=>gm(i,e,n,r));else{const i=se(t.handler)?t.handler.bind(n):e[t.handler];se(i)&&dr(s,i,t)}}function ym(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Ko(c,l,o,!0)),Ko(c,e,o)),i.set(e,c),c}function Ko(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ko(t,i,n,!0),s&&s.forEach(o=>Ko(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=wb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const wb={data:ld,props:sr,emits:sr,methods:sr,computed:sr,beforeCreate:ft,created:ft,beforeMount:ft,mounted:ft,beforeUpdate:ft,updated:ft,beforeDestroy:ft,beforeUnmount:ft,destroyed:ft,unmounted:ft,activated:ft,deactivated:ft,errorCaptured:ft,serverPrefetch:ft,components:sr,directives:sr,watch:Eb,provide:ld,inject:bb};function ld(t,e){return e?t?function(){return mt(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function bb(t,e){return sr(ll(t),ll(e))}function ll(t){if(te(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ft(t,e){return t?[...new Set([].concat(t,e))]:e}function sr(t,e){return t?mt(mt(Object.create(null),t),e):e}function Eb(t,e){if(!t)return e;if(!e)return t;const n=mt(Object.create(null),t);for(const r in e)n[r]=ft(t[r],e[r]);return n}function Tb(t,e,n,r=!1){const s={},i={};Bo(i,Pa,1),t.propsDefaults=Object.create(null),vm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Vw(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ib(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ye(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Aa(t.emitsOptions,d))continue;const m=e[d];if(c)if(ue(i,d))m!==i[d]&&(i[d]=m,l=!0);else{const f=rn(d);s[f]=ul(c,a,f,m,t,!1)}else m!==i[d]&&(i[d]=m,l=!0)}}}else{vm(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ue(e,h)&&((u=fs(h))===h||!ue(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=ul(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ue(e,h)&&!0)&&(delete i[h],l=!0)}l&&mn(t,"set","$attrs")}function vm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ks(c))continue;const l=e[c];let u;s&&ue(s,u=rn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Aa(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=ye(n),l=a||Ce;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ul(s,c,h,l[h],t,!ue(l,h))}}return o}function ul(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ue(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&se(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(es(s),r=l[n]=c.call(null,e),fr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===fs(n))&&(r=!0))}return r}function _m(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!se(t)){const u=h=>{c=!0;const[d,m]=_m(h,e,!0);mt(o,d),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return r.set(t,Kr),Kr;if(te(i))for(let u=0;u<i.length;u++){const h=rn(i[u]);ud(h)&&(o[h]=Ce)}else if(i)for(const u in i){const h=rn(u);if(ud(h)){const d=i[u],m=o[h]=te(d)||se(d)?{type:d}:d;if(m){const f=fd(Boolean,m.type),v=fd(String,m.type);m[0]=f>-1,m[1]=v<0||f<v,(f>-1||ue(m,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function ud(t){return t[0]!=="$"}function hd(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function dd(t,e){return hd(t)===hd(e)}function fd(t,e){return te(e)?e.findIndex(n=>dd(n,t)):se(e)&&dd(e,t)?0:-1}const wm=t=>t[0]==="_"||t==="$stable",_u=t=>te(t)?t.map(Ut):[Ut(t)],Sb=(t,e,n)=>{if(e._n)return e;const r=Ct((...s)=>_u(e(...s)),n);return r._c=!1,r},bm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(wm(s))continue;const i=t[s];if(se(i))e[s]=Sb(s,i,r);else if(i!=null){const o=_u(i);e[s]=()=>o}}},Em=(t,e)=>{const n=_u(e);t.slots.default=()=>n},Cb=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ye(e),Bo(e,"_",n)):bm(e,t.slots={})}else t.slots={},e&&Em(t,e);Bo(t.slots,Pa,1)},Ab=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ce;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(mt(s,e),!n&&a===1&&delete s._):(i=!e.$stable,bm(e,s)),o=e}else e&&(Em(t,e),o={default:1});if(i)for(const a in s)!wm(a)&&!(a in o)&&delete s[a]};function Tm(){return{app:null,config:{isNativeTag:aw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kb=0;function Rb(t,e){return function(r,s=null){se(r)||(r=Object.assign({},r)),s!=null&&!Ke(s)&&(s=null);const i=Tm(),o=new Set;let a=!1;const c=i.app={_uid:kb++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:bu,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&se(l.install)?(o.add(l),l.install(c,...u)):se(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=Ee(r,s);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Da(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Wo(t,e,n,r,s=!1){if(te(t)){t.forEach((d,m)=>Wo(d,e&&(te(e)?e[m]:e),n,r,s));return}if(Gr(r)&&!s)return;const i=r.shapeFlag&4?Da(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ce?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Xe(l)?(u[l]=null,ue(h,l)&&(h[l]=null)):ot(l)&&(l.value=null)),se(c))Vn(c,a,12,[o,u]);else{const d=Xe(c),m=ot(c);if(d||m){const f=()=>{if(t.f){const v=d?u[c]:c.value;s?te(v)&&iu(v,i):te(v)?v.includes(i)||v.push(i):d?(u[c]=[i],ue(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ue(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(f.id=-1,yt(f,n)):f()}}}let Cn=!1;const lo=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",uo=t=>t.nodeType===8;function Ob(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:l}}=t,u=(y,_)=>{if(!_.hasChildNodes()){n(null,y,_),jo(),_._vnode=y;return}Cn=!1,h(_.firstChild,y,null,null,null),jo(),_._vnode=y,Cn&&console.error("Hydration completed but contains mismatches.")},h=(y,_,A,N,H,X=!1)=>{const J=uo(y)&&y.data==="[",U=()=>v(y,_,A,N,H,J),{type:ie,ref:be,shapeFlag:Pe,patchFlag:Ze}=_,je=y.nodeType;_.el=y,Ze===-2&&(X=!1,_.dynamicChildren=null);let Q=null;switch(ie){case ui:je!==3?_.children===""?(c(_.el=s(""),o(y),y),Q=y):Q=U():(y.data!==_.children&&(Cn=!0,y.data=_.children),Q=i(y));break;case yn:je!==8||J?Q=U():Q=i(y);break;case Co:if(je!==1&&je!==3)Q=U();else{Q=y;const gt=!_.children.length;for(let ve=0;ve<_.staticCount;ve++)gt&&(_.children+=Q.nodeType===1?Q.outerHTML:Q.data),ve===_.staticCount-1&&(_.anchor=Q),Q=i(Q);return Q}break;case Le:J?Q=f(y,_,A,N,H,X):Q=U();break;default:if(Pe&1)je!==1||_.type.toLowerCase()!==y.tagName.toLowerCase()?Q=U():Q=d(y,_,A,N,H,X);else if(Pe&6){_.slotScopeIds=H;const gt=o(y);if(e(_,gt,null,A,N,lo(gt),X),Q=J?b(y):i(y),Q&&uo(Q)&&Q.data==="teleport end"&&(Q=i(Q)),Gr(_)){let ve;J?(ve=Ee(Le),ve.anchor=Q?Q.previousSibling:gt.lastChild):ve=y.nodeType===3?Ge(""):Ee("div"),ve.el=y,_.component.subTree=ve}}else Pe&64?je!==8?Q=U():Q=_.type.hydrate(y,_,A,N,H,X,t,m):Pe&128&&(Q=_.type.hydrate(y,_,A,N,lo(o(y)),H,X,t,h))}return be!=null&&Wo(be,null,N,_),Q},d=(y,_,A,N,H,X)=>{X=X||!!_.dynamicChildren;const{type:J,props:U,patchFlag:ie,shapeFlag:be,dirs:Pe}=_,Ze=J==="input"&&Pe||J==="option";if(Ze||ie!==-1){if(Pe&&Xt(_,null,A,"created"),U)if(Ze||!X||ie&48)for(const Q in U)(Ze&&Q.endsWith("value")||Pi(Q)&&!Ks(Q))&&r(y,Q,null,U[Q],!1,void 0,A);else U.onClick&&r(y,"onClick",null,U.onClick,!1,void 0,A);let je;if((je=U&&U.onVnodeBeforeMount)&&Pt(je,A,_),Pe&&Xt(_,null,A,"beforeMount"),((je=U&&U.onVnodeMounted)||Pe)&&im(()=>{je&&Pt(je,A,_),Pe&&Xt(_,null,A,"mounted")},N),be&16&&!(U&&(U.innerHTML||U.textContent))){let Q=m(y.firstChild,_,y,A,N,H,X);for(;Q;){Cn=!0;const gt=Q;Q=Q.nextSibling,a(gt)}}else be&8&&y.textContent!==_.children&&(Cn=!0,y.textContent=_.children)}return y.nextSibling},m=(y,_,A,N,H,X,J)=>{J=J||!!_.dynamicChildren;const U=_.children,ie=U.length;for(let be=0;be<ie;be++){const Pe=J?U[be]:U[be]=Ut(U[be]);if(y)y=h(y,Pe,N,H,X,J);else{if(Pe.type===ui&&!Pe.children)continue;Cn=!0,n(null,Pe,A,null,N,H,lo(A),X)}}return y},f=(y,_,A,N,H,X)=>{const{slotScopeIds:J}=_;J&&(H=H?H.concat(J):J);const U=o(y),ie=m(i(y),_,U,A,N,H,X);return ie&&uo(ie)&&ie.data==="]"?i(_.anchor=ie):(Cn=!0,c(_.anchor=l("]"),U,ie),ie)},v=(y,_,A,N,H,X)=>{if(Cn=!0,_.el=null,X){const ie=b(y);for(;;){const be=i(y);if(be&&be!==ie)a(be);else break}}const J=i(y),U=o(y);return a(y),n(null,_,U,J,A,N,lo(U),H),J},b=y=>{let _=0;for(;y;)if(y=i(y),y&&uo(y)&&(y.data==="["&&_++,y.data==="]")){if(_===0)return i(y);_--}return y};return[u,h]}const yt=im;function Pb(t){return Im(t)}function Db(t){return Im(t,Ob)}function Im(t,e){const n=fw();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:m=Vt,cloneNode:f,insertStaticContent:v}=t,b=(p,g,w,S=null,I=null,P=null,M=!1,O=null,x=!!g.dynamicChildren)=>{if(p===g)return;p&&!Os(p,g)&&(S=V(p),Ot(p,I,P,!0),p=null),g.patchFlag===-2&&(x=!1,g.dynamicChildren=null);const{type:C,ref:q,shapeFlag:F}=g;switch(C){case ui:y(p,g,w,S);break;case yn:_(p,g,w,S);break;case Co:p==null&&A(g,w,S,M);break;case Le:je(p,g,w,S,I,P,M,O,x);break;default:F&1?X(p,g,w,S,I,P,M,O,x):F&6?Q(p,g,w,S,I,P,M,O,x):(F&64||F&128)&&C.process(p,g,w,S,I,P,M,O,x,ke)}q!=null&&I&&Wo(q,p&&p.ref,P,g||p,!g)},y=(p,g,w,S)=>{if(p==null)r(g.el=a(g.children),w,S);else{const I=g.el=p.el;g.children!==p.children&&l(I,g.children)}},_=(p,g,w,S)=>{p==null?r(g.el=c(g.children||""),w,S):g.el=p.el},A=(p,g,w,S)=>{[p.el,p.anchor]=v(p.children,g,w,S,p.el,p.anchor)},N=({el:p,anchor:g},w,S)=>{let I;for(;p&&p!==g;)I=d(p),r(p,w,S),p=I;r(g,w,S)},H=({el:p,anchor:g})=>{let w;for(;p&&p!==g;)w=d(p),s(p),p=w;s(g)},X=(p,g,w,S,I,P,M,O,x)=>{M=M||g.type==="svg",p==null?J(g,w,S,I,P,M,O,x):be(p,g,I,P,M,O,x)},J=(p,g,w,S,I,P,M,O)=>{let x,C;const{type:q,props:F,shapeFlag:K,transition:Z,patchFlag:he,dirs:Ie}=p;if(p.el&&f!==void 0&&he===-1)x=p.el=f(p.el);else{if(x=p.el=o(p.type,P,F&&F.is,F),K&8?u(x,p.children):K&16&&ie(p.children,x,null,S,I,P&&q!=="foreignObject",M,O),Ie&&Xt(p,null,S,"created"),F){for(const De in F)De!=="value"&&!Ks(De)&&i(x,De,null,F[De],P,p.children,S,I,L);"value"in F&&i(x,"value",null,F.value),(C=F.onVnodeBeforeMount)&&Pt(C,S,p)}U(x,p,p.scopeId,M,S)}Ie&&Xt(p,null,S,"beforeMount");const Se=(!I||I&&!I.pendingBranch)&&Z&&!Z.persisted;Se&&Z.beforeEnter(x),r(x,g,w),((C=F&&F.onVnodeMounted)||Se||Ie)&&yt(()=>{C&&Pt(C,S,p),Se&&Z.enter(x),Ie&&Xt(p,null,S,"mounted")},I)},U=(p,g,w,S,I)=>{if(w&&m(p,w),S)for(let P=0;P<S.length;P++)m(p,S[P]);if(I){let P=I.subTree;if(g===P){const M=I.vnode;U(p,M,M.scopeId,M.slotScopeIds,I.parent)}}},ie=(p,g,w,S,I,P,M,O,x=0)=>{for(let C=x;C<p.length;C++){const q=p[C]=O?Pn(p[C]):Ut(p[C]);b(null,q,g,w,S,I,P,M,O)}},be=(p,g,w,S,I,P,M)=>{const O=g.el=p.el;let{patchFlag:x,dynamicChildren:C,dirs:q}=g;x|=p.patchFlag&16;const F=p.props||Ce,K=g.props||Ce;let Z;w&&rr(w,!1),(Z=K.onVnodeBeforeUpdate)&&Pt(Z,w,g,p),q&&Xt(g,p,w,"beforeUpdate"),w&&rr(w,!0);const he=I&&g.type!=="foreignObject";if(C?Pe(p.dynamicChildren,C,O,w,S,he,P):M||Tt(p,g,O,null,w,S,he,P,!1),x>0){if(x&16)Ze(O,g,F,K,w,S,I);else if(x&2&&F.class!==K.class&&i(O,"class",null,K.class,I),x&4&&i(O,"style",F.style,K.style,I),x&8){const Ie=g.dynamicProps;for(let Se=0;Se<Ie.length;Se++){const De=Ie[Se],Mt=F[De],Dr=K[De];(Dr!==Mt||De==="value")&&i(O,De,Mt,Dr,I,p.children,w,S,L)}}x&1&&p.children!==g.children&&u(O,g.children)}else!M&&C==null&&Ze(O,g,F,K,w,S,I);((Z=K.onVnodeUpdated)||q)&&yt(()=>{Z&&Pt(Z,w,g,p),q&&Xt(g,p,w,"updated")},S)},Pe=(p,g,w,S,I,P,M)=>{for(let O=0;O<g.length;O++){const x=p[O],C=g[O],q=x.el&&(x.type===Le||!Os(x,C)||x.shapeFlag&70)?h(x.el):w;b(x,C,q,null,S,I,P,M,!0)}},Ze=(p,g,w,S,I,P,M)=>{if(w!==S){for(const O in S){if(Ks(O))continue;const x=S[O],C=w[O];x!==C&&O!=="value"&&i(p,O,C,x,M,g.children,I,P,L)}if(w!==Ce)for(const O in w)!Ks(O)&&!(O in S)&&i(p,O,w[O],null,M,g.children,I,P,L);"value"in S&&i(p,"value",w.value,S.value)}},je=(p,g,w,S,I,P,M,O,x)=>{const C=g.el=p?p.el:a(""),q=g.anchor=p?p.anchor:a("");let{patchFlag:F,dynamicChildren:K,slotScopeIds:Z}=g;Z&&(O=O?O.concat(Z):Z),p==null?(r(C,w,S),r(q,w,S),ie(g.children,w,q,I,P,M,O,x)):F>0&&F&64&&K&&p.dynamicChildren?(Pe(p.dynamicChildren,K,w,I,P,M,O),(g.key!=null||I&&g===I.subTree)&&Sm(p,g,!0)):Tt(p,g,w,q,I,P,M,O,x)},Q=(p,g,w,S,I,P,M,O,x)=>{g.slotScopeIds=O,p==null?g.shapeFlag&512?I.ctx.activate(g,w,S,M,x):gt(g,w,S,I,P,M,x):ve(p,g,x)},gt=(p,g,w,S,I,P,M)=>{const O=p.component=Vb(p,S,I);if(cm(p)&&(O.ctx.renderer=ke),jb(O),O.asyncDep){if(I&&I.registerDep(O,Ae),!p.el){const x=O.subTree=Ee(yn);_(null,x,g,w)}return}Ae(O,p,g,w,I,P,M)},ve=(p,g,w)=>{const S=g.component=p.component;if(rb(p,g,w))if(S.asyncDep&&!S.asyncResolved){Te(S,g,w);return}else S.next=g,Qw(S.update),S.update();else g.el=p.el,S.vnode=g},Ae=(p,g,w,S,I,P,M)=>{const O=()=>{if(p.isMounted){let{next:q,bu:F,u:K,parent:Z,vnode:he}=p,Ie=q,Se;rr(p,!1),q?(q.el=he.el,Te(p,q,M)):q=he,F&&Io(F),(Se=q.props&&q.props.onVnodeBeforeUpdate)&&Pt(Se,Z,q,he),rr(p,!0);const De=bc(p),Mt=p.subTree;p.subTree=De,b(Mt,De,h(Mt.el),V(Mt),p,I,P),q.el=De.el,Ie===null&&sb(p,De.el),K&&yt(K,I),(Se=q.props&&q.props.onVnodeUpdated)&&yt(()=>Pt(Se,Z,q,he),I)}else{let q;const{el:F,props:K}=g,{bm:Z,m:he,parent:Ie}=p,Se=Gr(g);if(rr(p,!1),Z&&Io(Z),!Se&&(q=K&&K.onVnodeBeforeMount)&&Pt(q,Ie,g),rr(p,!0),F&&ne){const De=()=>{p.subTree=bc(p),ne(F,p.subTree,p,I,null)};Se?g.type.__asyncLoader().then(()=>!p.isUnmounted&&De()):De()}else{const De=p.subTree=bc(p);b(null,De,w,S,p,I,P),g.el=De.el}if(he&&yt(he,I),!Se&&(q=K&&K.onVnodeMounted)){const De=g;yt(()=>Pt(q,Ie,De),I)}(g.shapeFlag&256||Ie&&Gr(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&p.a&&yt(p.a,I),p.isMounted=!0,g=w=S=null}},x=p.effect=new lu(O,()=>em(C),p.scope),C=p.update=()=>x.run();C.id=p.uid,rr(p,!0),C()},Te=(p,g,w)=>{g.component=p;const S=p.vnode.props;p.vnode=g,p.next=null,Ib(p,g.props,S,w),Ab(p,g.children,w),ps(),Ca(void 0,p.update),ms()},Tt=(p,g,w,S,I,P,M,O,x=!1)=>{const C=p&&p.children,q=p?p.shapeFlag:0,F=g.children,{patchFlag:K,shapeFlag:Z}=g;if(K>0){if(K&128){an(C,F,w,S,I,P,M,O,x);return}else if(K&256){Pr(C,F,w,S,I,P,M,O,x);return}}Z&8?(q&16&&L(C,I,P),F!==C&&u(w,F)):q&16?Z&16?an(C,F,w,S,I,P,M,O,x):L(C,I,P,!0):(q&8&&u(w,""),Z&16&&ie(F,w,S,I,P,M,O,x))},Pr=(p,g,w,S,I,P,M,O,x)=>{p=p||Kr,g=g||Kr;const C=p.length,q=g.length,F=Math.min(C,q);let K;for(K=0;K<F;K++){const Z=g[K]=x?Pn(g[K]):Ut(g[K]);b(p[K],Z,w,null,I,P,M,O,x)}C>q?L(p,I,P,!0,!1,F):ie(g,w,S,I,P,M,O,x,F)},an=(p,g,w,S,I,P,M,O,x)=>{let C=0;const q=g.length;let F=p.length-1,K=q-1;for(;C<=F&&C<=K;){const Z=p[C],he=g[C]=x?Pn(g[C]):Ut(g[C]);if(Os(Z,he))b(Z,he,w,null,I,P,M,O,x);else break;C++}for(;C<=F&&C<=K;){const Z=p[F],he=g[K]=x?Pn(g[K]):Ut(g[K]);if(Os(Z,he))b(Z,he,w,null,I,P,M,O,x);else break;F--,K--}if(C>F){if(C<=K){const Z=K+1,he=Z<q?g[Z].el:S;for(;C<=K;)b(null,g[C]=x?Pn(g[C]):Ut(g[C]),w,he,I,P,M,O,x),C++}}else if(C>K)for(;C<=F;)Ot(p[C],I,P,!0),C++;else{const Z=C,he=C,Ie=new Map;for(C=he;C<=K;C++){const It=g[C]=x?Pn(g[C]):Ut(g[C]);It.key!=null&&Ie.set(It.key,C)}let Se,De=0;const Mt=K-he+1;let Dr=!1,zh=0;const Rs=new Array(Mt);for(C=0;C<Mt;C++)Rs[C]=0;for(C=Z;C<=F;C++){const It=p[C];if(De>=Mt){Ot(It,I,P,!0);continue}let Gt;if(It.key!=null)Gt=Ie.get(It.key);else for(Se=he;Se<=K;Se++)if(Rs[Se-he]===0&&Os(It,g[Se])){Gt=Se;break}Gt===void 0?Ot(It,I,P,!0):(Rs[Gt-he]=C+1,Gt>=zh?zh=Gt:Dr=!0,b(It,g[Gt],w,null,I,P,M,O,x),De++)}const Gh=Dr?Nb(Rs):Kr;for(Se=Gh.length-1,C=Mt-1;C>=0;C--){const It=he+C,Gt=g[It],Qh=It+1<q?g[It+1].el:S;Rs[C]===0?b(null,Gt,w,Qh,I,P,M,O,x):Dr&&(Se<0||C!==Gh[Se]?zt(Gt,w,Qh,2):Se--)}}},zt=(p,g,w,S,I=null)=>{const{el:P,type:M,transition:O,children:x,shapeFlag:C}=p;if(C&6){zt(p.component.subTree,g,w,S);return}if(C&128){p.suspense.move(g,w,S);return}if(C&64){M.move(p,g,w,ke);return}if(M===Le){r(P,g,w);for(let F=0;F<x.length;F++)zt(x[F],g,w,S);r(p.anchor,g,w);return}if(M===Co){N(p,g,w);return}if(S!==2&&C&1&&O)if(S===0)O.beforeEnter(P),r(P,g,w),yt(()=>O.enter(P),I);else{const{leave:F,delayLeave:K,afterLeave:Z}=O,he=()=>r(P,g,w),Ie=()=>{F(P,()=>{he(),Z&&Z()})};K?K(P,he,Ie):Ie()}else r(P,g,w)},Ot=(p,g,w,S=!1,I=!1)=>{const{type:P,props:M,ref:O,children:x,dynamicChildren:C,shapeFlag:q,patchFlag:F,dirs:K}=p;if(O!=null&&Wo(O,null,w,p,!0),q&256){g.ctx.deactivate(p);return}const Z=q&1&&K,he=!Gr(p);let Ie;if(he&&(Ie=M&&M.onVnodeBeforeUnmount)&&Pt(Ie,g,p),q&6)B(p.component,w,S);else{if(q&128){p.suspense.unmount(w,S);return}Z&&Xt(p,null,g,"beforeUnmount"),q&64?p.type.remove(p,g,w,I,ke,S):C&&(P!==Le||F>0&&F&64)?L(C,g,w,!1,!0):(P===Le&&F&384||!I&&q&16)&&L(x,g,w),S&&ks(p)}(he&&(Ie=M&&M.onVnodeUnmounted)||Z)&&yt(()=>{Ie&&Pt(Ie,g,p),Z&&Xt(p,null,g,"unmounted")},w)},ks=p=>{const{type:g,el:w,anchor:S,transition:I}=p;if(g===Le){T(w,S);return}if(g===Co){H(p);return}const P=()=>{s(w),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(p.shapeFlag&1&&I&&!I.persisted){const{leave:M,delayLeave:O}=I,x=()=>M(w,P);O?O(p.el,P,x):x()}else P()},T=(p,g)=>{let w;for(;p!==g;)w=d(p),s(p),p=w;s(g)},B=(p,g,w)=>{const{bum:S,scope:I,update:P,subTree:M,um:O}=p;S&&Io(S),I.stop(),P&&(P.active=!1,Ot(M,p,g,w)),O&&yt(O,g),yt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},L=(p,g,w,S=!1,I=!1,P=0)=>{for(let M=P;M<p.length;M++)Ot(p[M],g,w,S,I)},V=p=>p.shapeFlag&6?V(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),_e=(p,g,w)=>{p==null?g._vnode&&Ot(g._vnode,null,null,!0):b(g._vnode||null,p,g,null,null,null,w),jo(),g._vnode=p},ke={p:b,um:Ot,m:zt,r:ks,mt:gt,mc:ie,pc:Tt,pbc:Pe,n:V,o:t};let oe,ne;return e&&([oe,ne]=e(ke)),{render:_e,hydrate:oe,createApp:Rb(_e,oe)}}function rr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Sm(t,e,n=!1){const r=t.children,s=e.children;if(te(r)&&te(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Pn(s[i]),a.el=o.el),n||Sm(o,a))}}function Nb(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const xb=t=>t.__isTeleport,Le=Symbol(void 0),ui=Symbol(void 0),yn=Symbol(void 0),Co=Symbol(void 0),Gs=[];let $t=null;function me(t=!1){Gs.push($t=t?null:[])}function Lb(){Gs.pop(),$t=Gs[Gs.length-1]||null}let hi=1;function pd(t){hi+=t}function Cm(t){return t.dynamicChildren=hi>0?$t||Kr:null,Lb(),hi>0&&$t&&$t.push(t),t}function Re(t,e,n,r,s,i){return Cm(D(t,e,n,r,s,i,!0))}function di(t,e,n,r,s){return Cm(Ee(t,e,n,r,s,!0))}function zo(t){return t?t.__v_isVNode===!0:!1}function Os(t,e){return t.type===e.type&&t.key===e.key}const Pa="__vInternal",Am=({key:t})=>t!=null?t:null,Ao=({ref:t,ref_key:e,ref_for:n})=>t!=null?Xe(t)||ot(t)||se(t)?{i:at,r:t,k:e,f:!!n}:t:null;function D(t,e=null,n=null,r=0,s=null,i=t===Le?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Am(e),ref:e&&Ao(e),scopeId:ka,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(wu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Xe(n)?8:16),hi>0&&!o&&$t&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&$t.push(c),c}const Ee=Mb;function Mb(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===mb)&&(t=yn),zo(t)){const a=Zr(t,e,!0);return n&&wu(a,n),hi>0&&!i&&$t&&(a.shapeFlag&6?$t[$t.indexOf(t)]=a:$t.push(a)),a.patchFlag|=-2,a}if(zb(t)&&(t=t.__vccOpts),e){e=Ub(e);let{class:a,style:c}=e;a&&!Xe(a)&&(e.class=ru(a)),Ke(c)&&(zp(c)&&!te(c)&&(c=mt({},c)),e.style=wa(c))}const o=Xe(t)?1:ib(t)?128:xb(t)?64:Ke(t)?4:se(t)?2:0;return D(t,e,n,r,s,o,i,!0)}function Ub(t){return t?zp(t)||Pa in t?mt({},t):t:null}function Zr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Fb(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Am(a),ref:e&&e.ref?n&&s?te(s)?s.concat(Ao(e)):[s,Ao(e)]:Ao(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Le?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zr(t.ssContent),ssFallback:t.ssFallback&&Zr(t.ssFallback),el:t.el,anchor:t.anchor}}function Ge(t=" ",e=0){return Ee(ui,null,t,e)}function Qs(t="",e=!1){return e?(me(),di(yn,null,t)):Ee(yn,null,t)}function Ut(t){return t==null||typeof t=="boolean"?Ee(yn):te(t)?Ee(Le,null,t.slice()):typeof t=="object"?Pn(t):Ee(ui,null,String(t))}function Pn(t){return t.el===null||t.memo?t:Zr(t)}function wu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(te(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),wu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Pa in e)?e._ctx=at:s===3&&at&&(at.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:at},n=32):(e=String(e),r&64?(n=16,e=[Ge(e)]):n=8);t.children=e,t.shapeFlag|=n}function Fb(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ru([e.class,r.class]));else if(s==="style")e.style=wa([e.style,r.style]);else if(Pi(s)){const i=e[s],o=r[s];o&&i!==o&&!(te(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Pt(t,e,n,r=null){jt(t,e,7,[n,r])}const $b=Tm();let Bb=0;function Vb(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||$b,i={uid:Bb++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Lp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_m(r,s),emitsOptions:sm(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Yw.bind(null,i),t.ce&&t.ce(i),i}let Je=null;const km=()=>Je||at,es=t=>{Je=t,t.scope.on()},fr=()=>{Je&&Je.scope.off(),Je=null};function Rm(t){return t.vnode.shapeFlag&4}let fi=!1;function jb(t,e=!1){fi=e;const{props:n,children:r}=t.vnode,s=Rm(t);Tb(t,n,s,e),Cb(t,r);const i=s?Hb(t,e):void 0;return fi=!1,i}function Hb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Gp(new Proxy(t.ctx,yb));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Kb(t):null;es(t),ps();const i=Vn(r,t,0,[t.props,s]);if(ms(),fr(),Dp(i)){if(i.then(fr,fr),e)return i.then(o=>{md(t,o,e)}).catch(o=>{Sa(o,t,0)});t.asyncDep=i}else md(t,i,e)}else Om(t,e)}function md(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ke(e)&&(t.setupState=Yp(e)),Om(t,n)}let gd;function Om(t,e,n){const r=t.type;if(!t.render){if(!e&&gd&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=mt(mt({isCustomElement:i,delimiters:a},o),c);r.render=gd(s,l)}}t.render=r.render||Vt}es(t),ps(),vb(t),ms(),fr()}function qb(t){return new Proxy(t.attrs,{get(e,n){return kt(t,"get","$attrs"),e[n]}})}function Kb(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=qb(t))},slots:t.slots,emit:t.emit,expose:e}}function Da(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Yp(Gp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qo)return qo[n](t)}}))}function Wb(t,e=!0){return se(t)?t.displayName||t.name:t.name||e&&t.__name}function zb(t){return se(t)&&"__vccOpts"in t}const vt=(t,e)=>Ww(t,e,fi);function Pm(t,e,n){const r=arguments.length;return r===2?Ke(e)&&!te(e)?zo(e)?Ee(t,null,[e]):Ee(t,e):Ee(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&zo(n)&&(n=[n]),Ee(t,e,n))}const bu="3.2.37",Gb="http://www.w3.org/2000/svg",or=typeof document<"u"?document:null,yd=or&&or.createElement("template"),Qb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?or.createElementNS(Gb,t):or.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>or.createTextNode(t),createComment:t=>or.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>or.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{yd.innerHTML=r?`<svg>${t}</svg>`:t;const a=yd.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Jb(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Xb(t,e,n){const r=t.style,s=Xe(n);if(n&&!s){for(const i in n)hl(r,i,n[i]);if(e&&!Xe(e))for(const i in e)n[i]==null&&hl(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const vd=/\s*!important$/;function hl(t,e,n){if(te(n))n.forEach(r=>hl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Yb(t,e);vd.test(n)?t.setProperty(fs(r),n.replace(vd,""),"important"):t[r]=n}}const _d=["Webkit","Moz","ms"],Ec={};function Yb(t,e){const n=Ec[e];if(n)return n;let r=rn(e);if(r!=="filter"&&r in t)return Ec[e]=r;r=Ta(r);for(let s=0;s<_d.length;s++){const i=_d[s]+r;if(i in t)return Ec[e]=i}return e}const wd="http://www.w3.org/1999/xlink";function Zb(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(wd,e.slice(6,e.length)):t.setAttributeNS(wd,e,n);else{const i=rw(e);n==null||i&&!Rp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function eE(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Rp(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Dm,tE]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let dl=0;const nE=Promise.resolve(),rE=()=>{dl=0},sE=()=>dl||(nE.then(rE),dl=Dm());function $r(t,e,n,r){t.addEventListener(e,n,r)}function iE(t,e,n,r){t.removeEventListener(e,n,r)}function oE(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=aE(e);if(r){const l=i[e]=cE(r,s);$r(t,a,l,c)}else o&&(iE(t,a,o,c),i[e]=void 0)}}const bd=/(?:Once|Passive|Capture)$/;function aE(t){let e;if(bd.test(t)){e={};let n;for(;n=t.match(bd);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[fs(t.slice(2)),e]}function cE(t,e){const n=r=>{const s=r.timeStamp||Dm();(tE||s>=n.attached-1)&&jt(lE(r,n.value),e,5,[r])};return n.value=t,n.attached=sE(),n}function lE(t,e){if(te(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ed=/^on[a-z]/,uE=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Jb(t,r,s):e==="style"?Xb(t,n,r):Pi(e)?su(e)||oE(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):hE(t,e,r,s))?eE(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Zb(t,e,r,s))};function hE(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ed.test(e)&&se(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ed.test(e)&&Xe(n)?!1:e in t}const Td=t=>{const e=t.props["onUpdate:modelValue"]||!1;return te(e)?n=>Io(e,n):e};function dE(t){t.target.composing=!0}function Id(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Dt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Td(s);const i=r||s.props&&s.props.type==="number";$r(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Zc(a)),t._assign(a)}),n&&$r(t,"change",()=>{t.value=t.value.trim()}),e||($r(t,"compositionstart",dE),$r(t,"compositionend",Id),$r(t,"change",Id))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Td(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Zc(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},fE=["ctrl","shift","alt","meta"],pE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>fE.some(n=>t[`${n}Key`]&&!e.includes(n))},fl=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=pE[e[s]];if(i&&i(n,e))return}return t(n,...r)},Fn={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ps(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Ps(t,!0),r.enter(t)):r.leave(t,()=>{Ps(t,!1)}):Ps(t,e))},beforeUnmount(t,{value:e}){Ps(t,e)}};function Ps(t,e){t.style.display=e?t._vod:"none"}const Nm=mt({patchProp:uE},Qb);let Js,Sd=!1;function mE(){return Js||(Js=Pb(Nm))}function gE(){return Js=Sd?Js:Db(Nm),Sd=!0,Js}const yE=(...t)=>{const e=mE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=xm(r);if(!s)return;const i=e._component;!se(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},vE=(...t)=>{const e=gE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=xm(r);if(s)return n(s,!0,s instanceof SVGElement)},e};function xm(t){return Xe(t)?document.querySelector(t):t}/**
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
 */const Lm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},_E=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Mm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(d=64)),r.push(n[u],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Lm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_E(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(r.push(d),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const f=l<<6&192|h;r.push(f)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},wE=function(t){const e=Lm(t);return Mm.encodeByteArray(e,!0)},Go=function(t){return wE(t).replace(/\./g,"")},Um=function(t){try{return Mm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function EE(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function TE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function IE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function SE(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function CE(){return typeof indexedDB=="object"}function AE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function kE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const RE=()=>kE().__FIREBASE_DEFAULTS__,OE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},PE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Um(t[1]);return e&&JSON.parse(e)},Eu=()=>{try{return RE()||OE()||PE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fm=t=>{var e,n;return(n=(e=Eu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$m=t=>{const e=Fm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},DE=()=>{var t;return(t=Eu())===null||t===void 0?void 0:t.config},Bm=t=>{var e;return(e=Eu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class NE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Vm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Go(JSON.stringify(n)),Go(JSON.stringify(o)),a].join(".")}/**
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
 */const xE="FirebaseError";class on extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=xE,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ni.prototype.create)}}class Ni{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?LE(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new on(s,a,r)}}function LE(t,e){return t.replace(ME,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ME=/\{\$([^}]+)}/g;function UE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Cd(i)&&Cd(o)){if(!Qo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Cd(t){return t!==null&&typeof t=="object"}/**
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
 */function xi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $s(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Bs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function FE(t,e){const n=new $E(t,e);return n.subscribe.bind(n)}class $E{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");BE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Tc),s.error===void 0&&(s.error=Tc),s.complete===void 0&&(s.complete=Tc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function BE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Tc(){}/**
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
 */function Me(t){return t&&t._delegate?t._delegate:t}class zn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ir="[DEFAULT]";/**
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
 */class VE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new NE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HE(e))try{this.getOrInitializeService({instanceIdentifier:ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ir){return this.instances.has(e)}getOptions(e=ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ir){return this.component?this.component.multipleInstances?e:ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jE(t){return t===ir?void 0:t}function HE(t){return t.instantiationMode==="EAGER"}/**
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
 */class qE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new VE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const KE={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},WE=pe.INFO,zE={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},GE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=zE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tu{constructor(e){this.name=e,this._logLevel=WE,this._logHandler=GE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const QE=(t,e)=>e.some(n=>t instanceof n);let Ad,kd;function JE(){return Ad||(Ad=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XE(){return kd||(kd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jm=new WeakMap,pl=new WeakMap,Hm=new WeakMap,Ic=new WeakMap,Iu=new WeakMap;function YE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(jn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&jm.set(n,t)}).catch(()=>{}),Iu.set(e,t),e}function ZE(t){if(pl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});pl.set(t,e)}let ml={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function e0(t){ml=t(ml)}function t0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Sc(this),e,...n);return Hm.set(r,e.sort?e.sort():[e]),jn(r)}:XE().includes(t)?function(...e){return t.apply(Sc(this),e),jn(jm.get(this))}:function(...e){return jn(t.apply(Sc(this),e))}}function n0(t){return typeof t=="function"?t0(t):(t instanceof IDBTransaction&&ZE(t),QE(t,JE())?new Proxy(t,ml):t)}function jn(t){if(t instanceof IDBRequest)return YE(t);if(Ic.has(t))return Ic.get(t);const e=n0(t);return e!==t&&(Ic.set(t,e),Iu.set(e,t)),e}const Sc=t=>Iu.get(t);function r0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=jn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(jn(o.result),c.oldVersion,c.newVersion,jn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const s0=["get","getKey","getAll","getAllKeys","count"],i0=["put","add","delete","clear"],Cc=new Map;function Rd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cc.get(e))return Cc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=i0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||s0.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Cc.set(e,i),i}e0(t=>({...t,get:(e,n,r)=>Rd(e,n)||t.get(e,n,r),has:(e,n)=>!!Rd(e,n)||t.has(e,n)}));/**
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
 */class o0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(a0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function a0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gl="@firebase/app",Od="0.8.3";/**
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
 */const _r=new Tu("@firebase/app"),c0="@firebase/app-compat",l0="@firebase/analytics-compat",u0="@firebase/analytics",h0="@firebase/app-check-compat",d0="@firebase/app-check",f0="@firebase/auth",p0="@firebase/auth-compat",m0="@firebase/database",g0="@firebase/database-compat",y0="@firebase/functions",v0="@firebase/functions-compat",_0="@firebase/installations",w0="@firebase/installations-compat",b0="@firebase/messaging",E0="@firebase/messaging-compat",T0="@firebase/performance",I0="@firebase/performance-compat",S0="@firebase/remote-config",C0="@firebase/remote-config-compat",A0="@firebase/storage",k0="@firebase/storage-compat",R0="@firebase/firestore",O0="@firebase/firestore-compat",P0="firebase",D0="9.13.0";/**
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
 */const yl="[DEFAULT]",N0={[gl]:"fire-core",[c0]:"fire-core-compat",[u0]:"fire-analytics",[l0]:"fire-analytics-compat",[d0]:"fire-app-check",[h0]:"fire-app-check-compat",[f0]:"fire-auth",[p0]:"fire-auth-compat",[m0]:"fire-rtdb",[g0]:"fire-rtdb-compat",[y0]:"fire-fn",[v0]:"fire-fn-compat",[_0]:"fire-iid",[w0]:"fire-iid-compat",[b0]:"fire-fcm",[E0]:"fire-fcm-compat",[T0]:"fire-perf",[I0]:"fire-perf-compat",[S0]:"fire-rc",[C0]:"fire-rc-compat",[A0]:"fire-gcs",[k0]:"fire-gcs-compat",[R0]:"fire-fst",[O0]:"fire-fst-compat","fire-js":"fire-js",[P0]:"fire-js-all"};/**
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
 */const Jo=new Map,vl=new Map;function x0(t,e){try{t.container.addComponent(e)}catch(n){_r.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wr(t){const e=t.name;if(vl.has(e))return _r.debug(`There were multiple attempts to register component ${e}.`),!1;vl.set(e,t);for(const n of Jo.values())x0(n,t);return!0}function Na(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const L0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Hn=new Ni("app","Firebase",L0);/**
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
 */class M0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Hn.create("app-deleted",{appName:this._name})}}/**
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
 */const gs=D0;function qm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:yl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Hn.create("bad-app-name",{appName:String(s)});if(n||(n=DE()),!n)throw Hn.create("no-options");const i=Jo.get(s);if(i){if(Qo(n,i.options)&&Qo(r,i.config))return i;throw Hn.create("duplicate-app",{appName:s})}const o=new qE(s);for(const c of vl.values())o.addComponent(c);const a=new M0(n,r,o);return Jo.set(s,a),a}function Su(t=yl){const e=Jo.get(t);if(!e&&t===yl)return qm();if(!e)throw Hn.create("no-app",{appName:t});return e}function en(t,e,n){var r;let s=(r=N0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_r.warn(a.join(" "));return}wr(new zn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const U0="firebase-heartbeat-database",F0=1,pi="firebase-heartbeat-store";let Ac=null;function Km(){return Ac||(Ac=r0(U0,F0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(pi)}}}).catch(t=>{throw Hn.create("idb-open",{originalErrorMessage:t.message})})),Ac}async function $0(t){var e;try{return(await Km()).transaction(pi).objectStore(pi).get(Wm(t))}catch(n){if(n instanceof on)_r.warn(n.message);else{const r=Hn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});_r.warn(r.message)}}}async function Pd(t,e){var n;try{const s=(await Km()).transaction(pi,"readwrite");return await s.objectStore(pi).put(e,Wm(t)),s.done}catch(r){if(r instanceof on)_r.warn(r.message);else{const s=Hn.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});_r.warn(s.message)}}}function Wm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const B0=1024,V0=30*24*60*60*1e3;class j0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new q0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Dd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=V0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Dd(),{heartbeatsToSend:n,unsentEntries:r}=H0(this._heartbeatsCache.heartbeats),s=Go(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Dd(){return new Date().toISOString().substring(0,10)}function H0(t,e=B0){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Nd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Nd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class q0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return CE()?AE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await $0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Nd(t){return Go(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function K0(t){wr(new zn("platform-logger",e=>new o0(e),"PRIVATE")),wr(new zn("heartbeat",e=>new j0(e),"PRIVATE")),en(gl,Od,t),en(gl,Od,"esm2017"),en("fire-js","")}K0("");function Cu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function zm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const W0=zm,Gm=new Ni("auth","Firebase",zm());/**
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
 */const xd=new Tu("@firebase/auth");function ko(t,...e){xd.logLevel<=pe.ERROR&&xd.error(`Auth (${gs}): ${t}`,...e)}/**
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
 */function qt(t,...e){throw Au(t,...e)}function tn(t,...e){return Au(t,...e)}function z0(t,e,n){const r=Object.assign(Object.assign({},W0()),{[e]:n});return new Ni("auth","Firebase",r).create(e,{appName:t.name})}function Au(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Gm.create(t,...e)}function z(t,e,...n){if(!t)throw Au(e,...n)}function un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ko(e),new Error(e)}function vn(t,e){t||un(e)}/**
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
 */const Ld=new Map;function hn(t){vn(t instanceof Function,"Expected a class definition");let e=Ld.get(t);return e?(vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ld.set(t,e),e)}/**
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
 */function G0(t,e){const n=Na(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Qo(i,e!=null?e:{}))return s;qt(s,"already-initialized")}return n.initialize({options:e})}function Q0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function _l(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function J0(){return Md()==="http:"||Md()==="https:"}function Md(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function X0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(J0()||TE()||"connection"in navigator)?navigator.onLine:!0}function Y0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Li{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=bE()||IE()}get(){return X0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ku(t,e){vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Qm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Z0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const eT=new Li(3e4,6e4);function ys(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vs(t,e,n,r,s={}){return Jm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=xi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Qm.fetch()(Xm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Jm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Z0),e);try{const s=new tT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ho(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ho(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ho(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ho(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw z0(t,u,l);qt(t,u)}}catch(s){if(s instanceof on)throw s;qt(t,"network-request-failed")}}async function Mi(t,e,n,r,s={}){const i=await vs(t,e,n,r,s);return"mfaPendingCredential"in i&&qt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Xm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ku(t.config,s):`${t.config.apiScheme}://${s}`}class tT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tn(this.auth,"network-request-failed")),eT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ho(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=tn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function nT(t,e){return vs(t,"POST","/v1/accounts:delete",e)}async function rT(t,e){return vs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sT(t,e=!1){const n=Me(t),r=await n.getIdToken(e),s=Ru(r);z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Xs(kc(s.auth_time)),issuedAtTime:Xs(kc(s.iat)),expirationTime:Xs(kc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function kc(t){return Number(t)*1e3}function Ru(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return ko("JWT malformed, contained fewer than 3 sections"),null;try{const i=Um(r);return i?JSON.parse(i):(ko("Failed to decode base64 JWT payload"),null)}catch(i){return ko("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function iT(t){const e=Ru(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function mi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof on&&oT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function oT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class aT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ym{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xs(this.lastLoginAt),this.creationTime=Xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await mi(t,rT(n,{idToken:r}));z(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?uT(i.providerUserInfo):[],a=lT(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ym(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function cT(t){const e=Me(t);await Xo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function uT(t){return t.map(e=>{var{providerId:n}=e,r=Cu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function hT(t,e){const n=await Jm(t,{},async()=>{const r=xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Xm(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Qm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class gi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):iT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await hT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new gi;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gi,this.toJSON())}_performRefresh(){return un("not implemented")}}/**
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
 */function An(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Cu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ym(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await mi(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sT(this,e)}reload(){return cT(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await mi(this,nT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,f=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,y=(l=n.createdAt)!==null&&l!==void 0?l:void 0,_=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:A,emailVerified:N,isAnonymous:H,providerData:X,stsTokenManager:J}=n;z(A&&J,e,"internal-error");const U=gi.fromJSON(this.name,J);z(typeof A=="string",e,"internal-error"),An(h,e.name),An(d,e.name),z(typeof N=="boolean",e,"internal-error"),z(typeof H=="boolean",e,"internal-error"),An(m,e.name),An(f,e.name),An(v,e.name),An(b,e.name),An(y,e.name),An(_,e.name);const ie=new pr({uid:A,auth:e,email:d,emailVerified:N,displayName:h,isAnonymous:H,photoURL:f,phoneNumber:m,tenantId:v,stsTokenManager:U,createdAt:y,lastLoginAt:_});return X&&Array.isArray(X)&&(ie.providerData=X.map(be=>Object.assign({},be))),b&&(ie._redirectEventId=b),ie}static async _fromIdTokenResponse(e,n,r=!1){const s=new gi;s.updateFromServerResponse(n);const i=new pr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Xo(i),i}}/**
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
 */class Zm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Zm.type="NONE";const Ud=Zm;/**
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
 */function Ro(t,e,n){return`firebase:${t}:${e}:${n}`}class Qr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ro(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ro("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qr(hn(Ud),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||hn(Ud);const o=Ro(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=pr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Qr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Qr(i,e,r))}}/**
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
 */function Fd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ng(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(eg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sg(e))return"Blackberry";if(ig(e))return"Webos";if(Ou(e))return"Safari";if((e.includes("chrome/")||tg(e))&&!e.includes("edge/"))return"Chrome";if(rg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function eg(t=ut()){return/firefox\//i.test(t)}function Ou(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tg(t=ut()){return/crios\//i.test(t)}function ng(t=ut()){return/iemobile/i.test(t)}function rg(t=ut()){return/android/i.test(t)}function sg(t=ut()){return/blackberry/i.test(t)}function ig(t=ut()){return/webos/i.test(t)}function xa(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dT(t=ut()){var e;return xa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fT(){return SE()&&document.documentMode===10}function og(t=ut()){return xa(t)||rg(t)||ig(t)||sg(t)||/windows phone/i.test(t)||ng(t)}function pT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ag(t,e=[]){let n;switch(t){case"Browser":n=Fd(ut());break;case"Worker":n=`${Fd(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gs}/${r}`}/**
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
 */class mT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
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
 */class gT{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $d(this),this.idTokenSubscription=new $d(this),this.beforeStateQueue=new mT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Qr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Xo(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Y0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Me(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(hn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ni("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hn(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Qr.create(this,[hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ag(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ui(t){return Me(t)}class $d{constructor(e){this.auth=e,this.observer=null,this.addObserver=FE(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function yT(t,e,n){const r=Ui(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=cg(e),{host:o,port:a}=vT(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||_T()}function cg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vT(t){const e=cg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Bd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Bd(o)}}}function Bd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _T(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Pu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return un("not implemented")}_getIdTokenResponse(e){return un("not implemented")}_linkToIdToken(e,n){return un("not implemented")}_getReauthenticationResolver(e){return un("not implemented")}}async function wT(t,e){return vs(t,"POST","/v1/accounts:update",e)}/**
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
 */async function bT(t,e){return Mi(t,"POST","/v1/accounts:signInWithPassword",ys(t,e))}async function ET(t,e){return vs(t,"POST","/v1/accounts:sendOobCode",ys(t,e))}async function TT(t,e){return ET(t,e)}/**
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
 */async function IT(t,e){return Mi(t,"POST","/v1/accounts:signInWithEmailLink",ys(t,e))}async function ST(t,e){return Mi(t,"POST","/v1/accounts:signInWithEmailLink",ys(t,e))}/**
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
 */class yi extends Pu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new yi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new yi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return bT(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return IT(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return wT(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ST(e,{idToken:n,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Jr(t,e){return Mi(t,"POST","/v1/accounts:signInWithIdp",ys(t,e))}/**
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
 */const CT="http://localhost";class br extends Pu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Cu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new br(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Jr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Jr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Jr(e,n)}buildRequest(){const e={requestUri:CT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xi(n)}return e}}/**
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
 */function AT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kT(t){const e=$s(Bs(t)).link,n=e?$s(Bs(e)).deep_link_id:null,r=$s(Bs(t)).deep_link_id;return(r?$s(Bs(r)).link:null)||r||n||e||t}class Du{constructor(e){var n,r,s,i,o,a;const c=$s(Bs(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=AT((s=c.mode)!==null&&s!==void 0?s:null);z(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=kT(e);try{return new Du(n)}catch{return null}}}/**
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
 */class _s{constructor(){this.providerId=_s.PROVIDER_ID}static credential(e,n){return yi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Du.parseLink(n);return z(r,"argument-error"),yi._fromEmailAndCode(e,r.code,r.tenantId)}}_s.PROVIDER_ID="password";_s.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_s.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class lg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fi extends lg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Nn extends Fi{constructor(){super("facebook.com")}static credential(e){return br._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
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
 */class xn extends Fi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return br._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.GOOGLE_SIGN_IN_METHOD="google.com";xn.PROVIDER_ID="google.com";/**
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
 */class Ln extends Fi{constructor(){super("github.com")}static credential(e){return br._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.GITHUB_SIGN_IN_METHOD="github.com";Ln.PROVIDER_ID="github.com";/**
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
 */class Mn extends Fi{constructor(){super("twitter.com")}static credential(e,n){return br._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com";Mn.PROVIDER_ID="twitter.com";/**
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
 */async function RT(t,e){return Mi(t,"POST","/v1/accounts:signUp",ys(t,e))}/**
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
 */class Er{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await pr._fromIdTokenResponse(e,r,s),o=Vd(r);return new Er({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Vd(r);return new Er({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Vd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Yo extends on{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Yo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Yo(e,n,r,s)}}function ug(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Yo._fromErrorAndOperation(t,i,e,r):i})}async function OT(t,e,n=!1){const r=await mi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Er._forOperation(t,"link",r)}/**
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
 */async function PT(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await mi(t,ug(s,i,e,t),n);z(o.idToken,s,"internal-error");const a=Ru(o.idToken);z(a,s,"internal-error");const{sub:c}=a;return z(t.uid===c,s,"user-mismatch"),Er._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&qt(s,"user-mismatch"),o}}/**
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
 */async function hg(t,e,n=!1){const r="signIn",s=await ug(t,r,e),i=await Er._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function DT(t,e){return hg(Ui(t),e)}/**
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
 */function NT(t,e,n){var r;z(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),z(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(z(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(z(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}async function xT(t,e,n){const r=Ui(t),s=await RT(r,{returnSecureToken:!0,email:e,password:n}),i=await Er._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function LT(t,e,n){return DT(Me(t),_s.credential(e,n))}async function dg(t,e){const n=Me(t),r=await t.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:r};e&&NT(n.auth,s,e);const{email:i}=await TT(n.auth,s);i!==t.email&&await t.reload()}function MT(t,e,n,r){return Me(t).onIdTokenChanged(e,n,r)}function UT(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function fg(t,e,n,r){return Me(t).onAuthStateChanged(e,n,r)}function FT(t){return Me(t).signOut()}const Zo="__sak";/**
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
 */class pg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zo,"1"),this.storage.removeItem(Zo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function $T(){const t=ut();return Ou(t)||xa(t)}const BT=1e3,VT=10;class mg extends pg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$T()&&pT(),this.fallbackToPolling=og(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);fT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,VT):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},BT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}mg.type="LOCAL";const jT=mg;/**
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
 */class gg extends pg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gg.type="SESSION";const yg=gg;/**
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
 */function HT(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class La{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new La(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await HT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}La.receivers=[];/**
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
 */function Nu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class qT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Nu("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function nn(){return window}function KT(t){nn().location.href=t}/**
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
 */function vg(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function WT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GT(){return vg()?self:null}/**
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
 */const _g="firebaseLocalStorageDb",QT=1,ea="firebaseLocalStorage",wg="fbase_key";class $i{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ma(t,e){return t.transaction([ea],e?"readwrite":"readonly").objectStore(ea)}function JT(){const t=indexedDB.deleteDatabase(_g);return new $i(t).toPromise()}function wl(){const t=indexedDB.open(_g,QT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ea,{keyPath:wg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ea)?e(r):(r.close(),await JT(),e(await wl()))})})}async function jd(t,e,n){const r=Ma(t,!0).put({[wg]:e,value:n});return new $i(r).toPromise()}async function XT(t,e){const n=Ma(t,!1).get(e),r=await new $i(n).toPromise();return r===void 0?null:r.value}function Hd(t,e){const n=Ma(t,!0).delete(e);return new $i(n).toPromise()}const YT=800,ZT=3;class bg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ZT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=La._getInstance(GT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await WT(),!this.activeServiceWorker)return;this.sender=new qT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wl();return await jd(e,Zo,"1"),await Hd(e,Zo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>XT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ma(s,!1).getAll();return new $i(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bg.type="LOCAL";const eI=bg;/**
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
 */function tI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function nI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=tn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",tI().appendChild(r)})}function rI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Li(3e4,6e4);/**
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
 */function sI(t,e){return e?hn(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class xu extends Pu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Jr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Jr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function iI(t){return hg(t.auth,new xu(t),t.bypassAuthState)}function oI(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),PT(n,new xu(t),t.bypassAuthState)}async function aI(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),OT(n,new xu(t),t.bypassAuthState)}/**
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
 */class Eg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iI;case"linkViaPopup":case"linkViaRedirect":return aI;case"reauthViaPopup":case"reauthViaRedirect":return oI;default:qt(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const cI=new Li(2e3,1e4);class jr extends Eg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=Nu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,cI.get())};e()}}jr.currentPopupAction=null;/**
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
 */const lI="pendingRedirect",Oo=new Map;class uI extends Eg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Oo.get(this.auth._key());if(!e){try{const r=await hI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Oo.set(this.auth._key(),e)}return this.bypassAuthState||Oo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hI(t,e){const n=pI(e),r=fI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function dI(t,e){Oo.set(t._key(),e)}function fI(t){return hn(t._redirectPersistence)}function pI(t){return Ro(lI,t.config.apiKey,t.name)}async function mI(t,e,n=!1){const r=Ui(t),s=sI(r,e),o=await new uI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const gI=10*60*1e3;class yI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Tg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gI&&this.cachedEventUids.clear(),this.cachedEventUids.has(qd(e))}saveEventToCache(e){this.cachedEventUids.add(qd(e)),this.lastProcessedEventTime=Date.now()}}function qd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Tg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tg(t);default:return!1}}/**
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
 */async function _I(t,e={}){return vs(t,"GET","/v1/projects",e)}/**
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
 */const wI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bI=/^https?/;async function EI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _I(t);for(const n of e)try{if(TI(n))return}catch{}qt(t,"unauthorized-domain")}function TI(t){const e=_l(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bI.test(n))return!1;if(wI.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const II=new Li(3e4,6e4);function Kd(){const t=nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function SI(t){return new Promise((e,n)=>{var r,s,i;function o(){Kd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kd(),n(tn(t,"network-request-failed"))},timeout:II.get()})}if(!((s=(r=nn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=nn().gapi)===null||i===void 0)&&i.load)o();else{const a=rI("iframefcb");return nn()[a]=()=>{gapi.load?o():n(tn(t,"network-request-failed"))},nI(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Po=null,e})}let Po=null;function CI(t){return Po=Po||SI(t),Po}/**
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
 */const AI=new Li(5e3,15e3),kI="__/auth/iframe",RI="emulator/auth/iframe",OI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DI(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ku(e,RI):`https://${t.config.authDomain}/${kI}`,r={apiKey:e.apiKey,appName:t.name,v:gs},s=PI.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${xi(r).slice(1)}`}async function NI(t){const e=await CI(t),n=nn().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:DI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=tn(t,"network-request-failed"),a=nn().setTimeout(()=>{i(o)},AI.get());function c(){nn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const xI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LI=500,MI=600,UI="_blank",FI="http://localhost";class Wd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $I(t,e,n,r=LI,s=MI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},xI),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ut().toLowerCase();n&&(a=tg(l)?UI:n),eg(l)&&(e=e||FI,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[m,f])=>`${d}${m}=${f},`,"");if(dT(l)&&a!=="_self")return BI(e||"",a),new Wd(null);const h=window.open(e||"",a,u);z(h,t,"popup-blocked");try{h.focus()}catch{}return new Wd(h)}function BI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const VI="__/auth/handler",jI="emulator/auth/handler";function zd(t,e,n,r,s,i){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:gs,eventId:s};if(e instanceof lg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",UE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Fi){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${HI(t)}?${xi(a).slice(1)}`}function HI({config:t}){return t.emulator?ku(t,jI):`https://${t.authDomain}/${VI}`}/**
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
 */const Rc="webStorageSupport";class qI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yg,this._completeRedirectFn=mI,this._overrideRedirectResult=dI}async _openPopup(e,n,r,s){var i;vn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=zd(e,n,r,_l(),s);return $I(e,o,Nu())}async _openRedirect(e,n,r,s){return await this._originValidation(e),KT(zd(e,n,r,_l(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await NI(e),r=new yI(e);return n.register("authEvent",s=>(z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rc,{type:Rc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Rc];o!==void 0&&n(!!o),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=EI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return og()||Ou()||xa()}}const KI=qI;var Gd="@firebase/auth",Qd="0.20.11";/**
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
 */class WI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function zI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function GI(t){wr(new zn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{z(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),z(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ag(t)},u=new gT(a,c,l);return Q0(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),wr(new zn("auth-internal",e=>{const n=Ui(e.getProvider("auth").getImmediate());return(r=>new WI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(Gd,Qd,zI(t)),en(Gd,Qd,"esm2017")}/**
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
 */const QI=5*60,JI=Bm("authIdTokenMaxAge")||QI;let Jd=null;const XI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>JI)return;const s=n==null?void 0:n.token;Jd!==s&&(Jd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ts(t=Su()){const e=Na(t,"auth");if(e.isInitialized())return e.getImmediate();const n=G0(t,{popupRedirectResolver:KI,persistence:[eI,jT,yg]}),r=Bm("authTokenSyncURL");if(r){const i=XI(r);UT(n,i,()=>i(n.currentUser)),MT(n,o=>i(o))}const s=Fm("auth");return s&&yT(n,`http://${s}`),n}GI("Browser");function YI(){return Ig().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Ig(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const ZI=typeof Proxy=="function",eS="devtools-plugin:setup",tS="plugin:settings:set";let Nr,bl;function nS(){var t;return Nr!==void 0||(typeof window<"u"&&window.performance?(Nr=!0,bl=window.performance):typeof global<"u"&&((t=global.perf_hooks)===null||t===void 0?void 0:t.performance)?(Nr=!0,bl=global.perf_hooks.performance):Nr=!1),Nr}function rS(){return nS()?bl.now():Date.now()}class sS{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return rS()}},n&&n.on(tS,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function iS(t,e){const n=t,r=Ig(),s=YI(),i=ZI&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(eS,t,e);else{const o=i?new sS(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Br=typeof window<"u";function oS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const we=Object.assign;function Oc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Kt(s)?s.map(t):t(s)}return n}const Ys=()=>{},Kt=Array.isArray,aS=/\/$/,cS=t=>t.replace(aS,"");function Pc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=dS(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function lS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Xd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function uS(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ns(e.matched[r],n.matched[s])&&Sg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ns(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Sg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!hS(t[n],e[n]))return!1;return!0}function hS(t,e){return Kt(t)?Yd(t,e):Kt(e)?Yd(e,t):t===e}function Yd(t,e){return Kt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function dS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var rs;(function(t){t.pop="pop",t.push="push"})(rs||(rs={}));var mr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(mr||(mr={}));const Dc="";function Cg(t){if(!t)if(Br){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),cS(t)}const fS=/^[^#]+#/;function Ag(t,e){return t.replace(fS,"#")+e}function pS(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ua=()=>({left:window.pageXOffset,top:window.pageYOffset});function mS(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=pS(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Zd(t,e){return(history.state?history.state.position-e:-1)+t}const El=new Map;function gS(t,e){El.set(t,e)}function yS(t){const e=El.get(t);return El.delete(t),e}let vS=()=>location.protocol+"//"+location.host;function kg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Xd(c,"")}return Xd(n,t)+r+s}function _S(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const m=kg(t,location),f=n.value,v=e.value;let b=0;if(d){if(n.value=m,e.value=d,o&&o===f){o=null;return}b=v?d.position-v.position:0}else r(m);s.forEach(y=>{y(n.value,f,{delta:b,type:rs.pop,direction:b?b>0?mr.forward:mr.back:mr.unknown})})};function c(){o=n.value}function l(d){s.push(d);const m=()=>{const f=s.indexOf(d);f>-1&&s.splice(f,1)};return i.push(m),m}function u(){const{history:d}=window;!d.state||d.replaceState(we({},d.state,{scroll:Ua()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function ef(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ua():null}}function wS(t){const{history:e,location:n}=window,r={value:kg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:vS()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(c,l){const u=we({},e.state,ef(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=we({},s.value,e.state,{forward:c,scroll:Ua()});i(u.current,u,!0);const h=we({},ef(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function bS(t){t=Cg(t);const e=wS(t),n=_S(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=we({location:"",base:t,go:r,createHref:Ag.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ES(t=""){let e=[],n=[Dc],r=0;t=Cg(t);function s(a){r++,r===n.length||n.splice(r),n.push(a)}function i(a,c,{direction:l,delta:u}){const h={direction:l,delta:u,type:rs.pop};for(const d of e)d(a,c,h)}const o={location:Dc,state:{},base:t,createHref:Ag.bind(null,t),replace(a){n.splice(r--,1),s(a)},push(a,c){s(a)},listen(a){return e.push(a),()=>{const c=e.indexOf(a);c>-1&&e.splice(c,1)}},destroy(){e=[],n=[Dc],r=0},go(a,c=!0){const l=this.location,u=a<0?mr.back:mr.forward;r=Math.max(0,Math.min(r+a,n.length-1)),c&&i(this.location,l,{direction:u,delta:a})}};return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n[r]}),o}function TS(t){return typeof t=="string"||t&&typeof t=="object"}function Rg(t){return typeof t=="string"||typeof t=="symbol"}const kn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Og=Symbol("");var tf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(tf||(tf={}));function ss(t,e){return we(new Error,{type:t,[Og]:!0},e)}function cn(t,e){return t instanceof Error&&Og in t&&(e==null||!!(t.type&e))}const nf="[^/]+?",IS={sensitive:!1,strict:!1,start:!0,end:!0},SS=/[.+*?^${}()[\]/\\]/g;function CS(t,e){const n=we({},IS,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let m=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(SS,"\\$&"),m+=40;else if(d.type===1){const{value:f,repeatable:v,optional:b,regexp:y}=d;i.push({name:f,repeatable:v,optional:b});const _=y||nf;if(_!==nf){m+=10;try{new RegExp(`(${_})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${f}" (${_}): `+N.message)}}let A=v?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;h||(A=b&&l.length<2?`(?:/${A})`:"/"+A),b&&(A+="?"),s+=A,m+=20,b&&(m+=-8),v&&(m+=-20),_===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",f=i[d-1];h[f.name]=m&&f.repeatable?m.split("/"):m}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:f,repeatable:v,optional:b}=m,y=f in l?l[f]:"";if(Kt(y)&&!v)throw new Error(`Provided param "${f}" is an array but it is not repeatable (* or + modifiers)`);const _=Kt(y)?y.join("/"):y;if(!_)if(b)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${f}"`);u+=_}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function AS(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function kS(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=AS(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(rf(r))return 1;if(rf(s))return-1}return s.length-r.length}function rf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const RS={type:0,value:""},OS=/[a-zA-Z0-9_]/;function PS(t){if(!t)return[[]];if(t==="/")return[[RS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:OS.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function DS(t,e,n){const r=CS(PS(t.path),n),s=we(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function NS(t,e){const n=[],r=new Map;e=af({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const m=!d,f=xS(u);f.aliasOf=d&&d.record;const v=af(e,u),b=[f];if("alias"in u){const A=typeof u.alias=="string"?[u.alias]:u.alias;for(const N of A)b.push(we({},f,{components:d?d.record.components:f.components,path:N,aliasOf:d?d.record:f}))}let y,_;for(const A of b){const{path:N}=A;if(h&&N[0]!=="/"){const H=h.record.path,X=H[H.length-1]==="/"?"":"/";A.path=h.record.path+(N&&X+N)}if(y=DS(A,h,v),d?d.alias.push(y):(_=_||y,_!==y&&_.alias.push(y),m&&u.name&&!of(y)&&o(u.name)),f.children){const H=f.children;for(let X=0;X<H.length;X++)i(H[X],y,d&&d.children[X])}d=d||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&c(y)}return _?()=>{o(_)}:Ys}function o(u){if(Rg(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&kS(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Pg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!of(u)&&r.set(u.record.name,u)}function l(u,h){let d,m={},f,v;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw ss(1,{location:u});v=d.record.name,m=we(sf(h.params,d.keys.filter(_=>!_.optional).map(_=>_.name)),u.params&&sf(u.params,d.keys.map(_=>_.name))),f=d.stringify(m)}else if("path"in u)f=u.path,d=n.find(_=>_.re.test(f)),d&&(m=d.parse(f),v=d.record.name);else{if(d=h.name?r.get(h.name):n.find(_=>_.re.test(h.path)),!d)throw ss(1,{location:u,currentLocation:h});v=d.record.name,m=we({},h.params,u.params),f=d.stringify(m)}const b=[];let y=d;for(;y;)b.unshift(y.record),y=y.parent;return{name:v,path:f,params:m,matched:b,meta:MS(b)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function sf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function xS(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:LS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function LS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function of(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function MS(t){return t.reduce((e,n)=>we(e,n.meta),{})}function af(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Pg(t,e){return e.children.some(n=>n===t||Pg(t,n))}const Dg=/#/g,US=/&/g,FS=/\//g,$S=/=/g,BS=/\?/g,Ng=/\+/g,VS=/%5B/g,jS=/%5D/g,xg=/%5E/g,HS=/%60/g,Lg=/%7B/g,qS=/%7C/g,Mg=/%7D/g,KS=/%20/g;function Lu(t){return encodeURI(""+t).replace(qS,"|").replace(VS,"[").replace(jS,"]")}function WS(t){return Lu(t).replace(Lg,"{").replace(Mg,"}").replace(xg,"^")}function Tl(t){return Lu(t).replace(Ng,"%2B").replace(KS,"+").replace(Dg,"%23").replace(US,"%26").replace(HS,"`").replace(Lg,"{").replace(Mg,"}").replace(xg,"^")}function zS(t){return Tl(t).replace($S,"%3D")}function GS(t){return Lu(t).replace(Dg,"%23").replace(BS,"%3F")}function QS(t){return t==null?"":GS(t).replace(FS,"%2F")}function ta(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function JS(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Ng," "),o=i.indexOf("="),a=ta(o<0?i:i.slice(0,o)),c=o<0?null:ta(i.slice(o+1));if(a in e){let l=e[a];Kt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function cf(t){let e="";for(let n in t){const r=t[n];if(n=zS(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Kt(r)?r.map(i=>i&&Tl(i)):[r&&Tl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function XS(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Kt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const YS=Symbol(""),lf=Symbol(""),Fa=Symbol(""),Mu=Symbol(""),Il=Symbol("");function Ds(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Dn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ss(4,{from:n,to:e})):h instanceof Error?a(h):TS(h)?a(ss(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Nc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(ZS(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Dn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=oS(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Dn(d,n,r,i,o)()}))}}return s}function ZS(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function uf(t){const e=Nt(Fa),n=Nt(Mu),r=vt(()=>e.resolve(Bn(t.to))),s=vt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ns.bind(null,u));if(d>-1)return d;const m=hf(c[l-2]);return l>1&&hf(u)===m&&h[h.length-1].path!==m?h.findIndex(ns.bind(null,c[l-2])):d}),i=vt(()=>s.value>-1&&rC(n.params,r.value.params)),o=vt(()=>s.value>-1&&s.value===n.matched.length-1&&Sg(n.params,r.value.params));function a(c={}){return nC(c)?e[Bn(t.replace)?"replace":"push"](Bn(t.to)).catch(Ys):Promise.resolve()}return{route:r,href:vt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const eC=vu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:uf,setup(t,{slots:e}){const n=Yn(uf(t)),{options:r}=Nt(Fa),s=vt(()=>({[df(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[df(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Pm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),tC=eC;function nC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function rC(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Kt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function hf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const df=(t,e,n)=>t!=null?t:e!=null?e:n,sC=vu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Nt(Il),s=vt(()=>t.route||r.value),i=Nt(lf,0),o=vt(()=>{let l=Bn(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=vt(()=>s.value.matched[o.value]);So(lf,vt(()=>o.value+1)),So(YS,a),So(Il,s);const c=fe();return dr(()=>[c.value,a.value,t.name],([l,u,h],[d,m,f])=>{u&&(u.instances[h]=l,m&&m!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!ns(u,m)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return ff(n.default,{Component:d,route:l});const m=h.props[u],f=m?m===!0?l.params:typeof m=="function"?m(l):m:null,b=Pm(d,we({},f,e,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return ff(n.default,{Component:b,route:l})||b}}});function ff(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const iC=sC;function oC(t){const e=NS(t.routes,t),n=t.parseQuery||JS,r=t.stringifyQuery||cf,s=t.history,i=Ds(),o=Ds(),a=Ds(),c=jw(kn);let l=kn;Br&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Oc.bind(null,T=>""+T),h=Oc.bind(null,QS),d=Oc.bind(null,ta);function m(T,B){let L,V;return Rg(T)?(L=e.getRecordMatcher(T),V=B):V=T,e.addRoute(V,L)}function f(T){const B=e.getRecordMatcher(T);B&&e.removeRoute(B)}function v(){return e.getRoutes().map(T=>T.record)}function b(T){return!!e.getRecordMatcher(T)}function y(T,B){if(B=we({},B||c.value),typeof T=="string"){const ne=Pc(n,T,B.path),p=e.resolve({path:ne.path},B),g=s.createHref(ne.fullPath);return we(ne,p,{params:d(p.params),hash:ta(ne.hash),redirectedFrom:void 0,href:g})}let L;if("path"in T)L=we({},T,{path:Pc(n,T.path,B.path).path});else{const ne=we({},T.params);for(const p in ne)ne[p]==null&&delete ne[p];L=we({},T,{params:h(T.params)}),B.params=h(B.params)}const V=e.resolve(L,B),_e=T.hash||"";V.params=u(d(V.params));const ke=lS(r,we({},T,{hash:WS(_e),path:V.path})),oe=s.createHref(ke);return we({fullPath:ke,hash:_e,query:r===cf?XS(T.query):T.query||{}},V,{redirectedFrom:void 0,href:oe})}function _(T){return typeof T=="string"?Pc(n,T,c.value.path):we({},T)}function A(T,B){if(l!==T)return ss(8,{from:B,to:T})}function N(T){return J(T)}function H(T){return N(we(_(T),{replace:!0}))}function X(T){const B=T.matched[T.matched.length-1];if(B&&B.redirect){const{redirect:L}=B;let V=typeof L=="function"?L(T):L;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=_(V):{path:V},V.params={}),we({query:T.query,hash:T.hash,params:"path"in V?{}:T.params},V)}}function J(T,B){const L=l=y(T),V=c.value,_e=T.state,ke=T.force,oe=T.replace===!0,ne=X(L);if(ne)return J(we(_(ne),{state:typeof ne=="object"?we({},_e,ne.state):_e,force:ke,replace:oe}),B||L);const p=L;p.redirectedFrom=B;let g;return!ke&&uS(r,V,L)&&(g=ss(16,{to:p,from:V}),Pr(V,V,!0,!1)),(g?Promise.resolve(g):ie(p,V)).catch(w=>cn(w)?cn(w,2)?w:Tt(w):Ae(w,p,V)).then(w=>{if(w){if(cn(w,2))return J(we({replace:oe},_(w.to),{state:typeof w.to=="object"?we({},_e,w.to.state):_e,force:ke}),B||p)}else w=Pe(p,V,!0,oe,_e);return be(p,V,w),w})}function U(T,B){const L=A(T,B);return L?Promise.reject(L):Promise.resolve()}function ie(T,B){let L;const[V,_e,ke]=aC(T,B);L=Nc(V.reverse(),"beforeRouteLeave",T,B);for(const ne of V)ne.leaveGuards.forEach(p=>{L.push(Dn(p,T,B))});const oe=U.bind(null,T,B);return L.push(oe),xr(L).then(()=>{L=[];for(const ne of i.list())L.push(Dn(ne,T,B));return L.push(oe),xr(L)}).then(()=>{L=Nc(_e,"beforeRouteUpdate",T,B);for(const ne of _e)ne.updateGuards.forEach(p=>{L.push(Dn(p,T,B))});return L.push(oe),xr(L)}).then(()=>{L=[];for(const ne of T.matched)if(ne.beforeEnter&&!B.matched.includes(ne))if(Kt(ne.beforeEnter))for(const p of ne.beforeEnter)L.push(Dn(p,T,B));else L.push(Dn(ne.beforeEnter,T,B));return L.push(oe),xr(L)}).then(()=>(T.matched.forEach(ne=>ne.enterCallbacks={}),L=Nc(ke,"beforeRouteEnter",T,B),L.push(oe),xr(L))).then(()=>{L=[];for(const ne of o.list())L.push(Dn(ne,T,B));return L.push(oe),xr(L)}).catch(ne=>cn(ne,8)?ne:Promise.reject(ne))}function be(T,B,L){for(const V of a.list())V(T,B,L)}function Pe(T,B,L,V,_e){const ke=A(T,B);if(ke)return ke;const oe=B===kn,ne=Br?history.state:{};L&&(V||oe?s.replace(T.fullPath,we({scroll:oe&&ne&&ne.scroll},_e)):s.push(T.fullPath,_e)),c.value=T,Pr(T,B,L,oe),Tt()}let Ze;function je(){Ze||(Ze=s.listen((T,B,L)=>{if(!ks.listening)return;const V=y(T),_e=X(V);if(_e){J(we(_e,{replace:!0}),V).catch(Ys);return}l=V;const ke=c.value;Br&&gS(Zd(ke.fullPath,L.delta),Ua()),ie(V,ke).catch(oe=>cn(oe,12)?oe:cn(oe,2)?(J(oe.to,V).then(ne=>{cn(ne,20)&&!L.delta&&L.type===rs.pop&&s.go(-1,!1)}).catch(Ys),Promise.reject()):(L.delta&&s.go(-L.delta,!1),Ae(oe,V,ke))).then(oe=>{oe=oe||Pe(V,ke,!1),oe&&(L.delta&&!cn(oe,8)?s.go(-L.delta,!1):L.type===rs.pop&&cn(oe,20)&&s.go(-1,!1)),be(V,ke,oe)}).catch(Ys)}))}let Q=Ds(),gt=Ds(),ve;function Ae(T,B,L){Tt(T);const V=gt.list();return V.length?V.forEach(_e=>_e(T,B,L)):console.error(T),Promise.reject(T)}function Te(){return ve&&c.value!==kn?Promise.resolve():new Promise((T,B)=>{Q.add([T,B])})}function Tt(T){return ve||(ve=!T,je(),Q.list().forEach(([B,L])=>T?L(T):B()),Q.reset()),T}function Pr(T,B,L,V){const{scrollBehavior:_e}=t;if(!Br||!_e)return Promise.resolve();const ke=!L&&yS(Zd(T.fullPath,0))||(V||!L)&&history.state&&history.state.scroll||null;return gu().then(()=>_e(T,B,ke)).then(oe=>oe&&mS(oe)).catch(oe=>Ae(oe,T,B))}const an=T=>s.go(T);let zt;const Ot=new Set,ks={currentRoute:c,listening:!0,addRoute:m,removeRoute:f,hasRoute:b,getRoutes:v,resolve:y,options:t,push:N,replace:H,go:an,back:()=>an(-1),forward:()=>an(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:gt.add,isReady:Te,install(T){const B=this;T.component("RouterLink",tC),T.component("RouterView",iC),T.config.globalProperties.$router=B,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Bn(c)}),Br&&!zt&&c.value===kn&&(zt=!0,N(s.location).catch(_e=>{}));const L={};for(const _e in kn)L[_e]=vt(()=>c.value[_e]);T.provide(Fa,B),T.provide(Mu,Yn(L)),T.provide(Il,c);const V=T.unmount;Ot.add(T),T.unmount=function(){Ot.delete(T),Ot.size<1&&(l=kn,Ze&&Ze(),Ze=null,c.value=kn,zt=!1,ve=!1),V()}}};return ks}function xr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function aC(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>ns(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ns(l,c))||s.push(c))}return[n,r,s]}function ws(){return Nt(Fa)}function Ug(){return Nt(Mu)}const cC=Ge(" Home "),lC=Ge(" Feed "),uC={key:0},hC={key:1,class:"pop"},dC=Ge(" Register "),fC=Ge(" Login "),pC={__name:"App",setup(t){const e=ws(),n=fe(!0),r=fe(!1),s=ts();fg(s,a=>{a?(n.value=!0,a.emailVerified?r.value=!0:r.value=!1):n.value=!1});const i=()=>{dg(s.currentUser)},o=()=>{FT(s),e.push("/")};return(a,c)=>{const l=gn("router-link"),u=gn("router-view");return me(),Re(Le,null,[D("nav",null,[Ee(l,{to:"/home"},{default:Ct(()=>[cC]),_:1}),Ee(l,{to:"/feed"},{default:Ct(()=>[lC]),_:1}),n.value?(me(),Re("span",uC,[D("button",{class:"logout",onClick:o},"Logout"),r.value?(me(),Re("p",hC,"Verified!")):(me(),Re("button",{key:0,class:"logout pop",onClick:i},"Verify"))])):Qs("",!0),n.value?Qs("",!0):(me(),di(l,{key:1,to:"/register"},{default:Ct(()=>[dC]),_:1})),n.value?Qs("",!0):(me(),di(l,{key:2,to:"/login"},{default:Ct(()=>[fC]),_:1}))]),Ee(u)],64)}}};/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var Fg="store";function Uu(t){return t===void 0&&(t=null),Nt(t!==null?t:Fg)}function bs(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function $g(t){return t!==null&&typeof t=="object"}function mC(t){return t&&typeof t.then=="function"}function gC(t,e){return function(){return t(e)}}function Bg(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function Vg(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;$a(t,n,[],t._modules.root,!0),Fu(t,n,e)}function Fu(t,e,n){var r=t._state,s=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={},a={},c=pw(!0);c.run(function(){bs(i,function(l,u){o[u]=gC(l,t),a[u]=vt(function(){return o[u]()}),Object.defineProperty(t.getters,u,{get:function(){return a[u].value},enumerable:!0})})}),t._state=Yn({data:e}),t._scope=c,t.strict&&bC(t),r&&n&&t._withCommit(function(){r.data=null}),s&&s.stop()}function $a(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var a=$u(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=r.state})}var l=r.context=yC(t,o,n);r.forEachMutation(function(u,h){var d=o+h;vC(t,d,u,l)}),r.forEachAction(function(u,h){var d=u.root?h:o+h,m=u.handler||u;_C(t,d,m,l)}),r.forEachGetter(function(u,h){var d=o+h;wC(t,d,u,l)}),r.forEachChild(function(u,h){$a(t,e,n.concat(h),u,s)})}function yC(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,a){var c=na(i,o,a),l=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,l)},commit:r?t.commit:function(i,o,a){var c=na(i,o,a),l=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=e+h),t.commit(h,l,u)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return jg(t,e)}},state:{get:function(){return $u(t.state,n)}}}),s}function jg(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function vC(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function _C(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return mC(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function wC(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function bC(t){dr(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function $u(t,e){return e.reduce(function(n,r){return n[r]},t)}function na(t,e,n){return $g(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var EC="vuex bindings",pf="vuex:mutations",xc="vuex:actions",Lr="vuex",TC=0;function IC(t,e){iS({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[EC]},function(n){n.addTimelineLayer({id:pf,label:"Vuex Mutations",color:mf}),n.addTimelineLayer({id:xc,label:"Vuex Actions",color:mf}),n.addInspector({id:Lr,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===Lr)if(r.filter){var s=[];Wg(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[Kg(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===Lr){var s=r.nodeId;jg(e,s),r.state=AC(RC(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===Lr){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(Lr),n.sendInspectorState(Lr),n.addTimelineEvent({layerId:pf,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=TC++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:xc,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:xc,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var mf=8702998,SC=6710886,CC=16777215,Hg={label:"namespaced",textColor:CC,backgroundColor:SC};function qg(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Kg(t,e){return{id:e||"root",label:qg(e),tags:t.namespaced?[Hg]:[],children:Object.keys(t._children).map(function(n){return Kg(t._children[n],e+n+"/")})}}function Wg(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[Hg]:[]}),Object.keys(e._children).forEach(function(s){Wg(t,e._children[s],n,r+s+"/")})}function AC(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=kC(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?qg(o):o,editable:!1,value:Sl(function(){return i[o]})}})}return s}function kC(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=Sl(function(){return t[n]})}else e[n]=Sl(function(){return t[n]})}),e}function RC(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Sl(t){try{return t()}catch(e){return e}}var Wt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},zg={namespaced:{configurable:!0}};zg.namespaced.get=function(){return!!this._rawModule.namespaced};Wt.prototype.addChild=function(e,n){this._children[e]=n};Wt.prototype.removeChild=function(e){delete this._children[e]};Wt.prototype.getChild=function(e){return this._children[e]};Wt.prototype.hasChild=function(e){return e in this._children};Wt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Wt.prototype.forEachChild=function(e){bs(this._children,e)};Wt.prototype.forEachGetter=function(e){this._rawModule.getters&&bs(this._rawModule.getters,e)};Wt.prototype.forEachAction=function(e){this._rawModule.actions&&bs(this._rawModule.actions,e)};Wt.prototype.forEachMutation=function(e){this._rawModule.mutations&&bs(this._rawModule.mutations,e)};Object.defineProperties(Wt.prototype,zg);var Ar=function(e){this.register([],e,!1)};Ar.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};Ar.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};Ar.prototype.update=function(e){Gg([],this.root,e)};Ar.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new Wt(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&bs(n.modules,function(a,c){s.register(e.concat(c),a,r)})};Ar.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);!s||!s.runtime||n.removeChild(r)};Ar.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function Gg(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;Gg(t.concat(r),e.getChild(r),n.modules[r])}}function OC(t){return new Et(t)}var Et=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Ar(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(d,m){return c.call(o,d,m)},this.commit=function(d,m,f){return l.call(o,d,m,f)},this.strict=s;var u=this._modules.root.state;$a(this,u,[],this._modules.root),Fu(this,u),r.forEach(function(h){return h(n)})},Bu={state:{configurable:!0}};Et.prototype.install=function(e,n){e.provide(n||Fg,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&IC(e,this)};Bu.state.get=function(){return this._state.data};Bu.state.set=function(t){};Et.prototype.commit=function(e,n,r){var s=this,i=na(e,n,r),o=i.type,a=i.payload,c={type:o,payload:a},l=this._mutations[o];!l||(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(c,s.state)}))};Et.prototype.dispatch=function(e,n){var r=this,s=na(e,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._actions[i];if(!!c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){l.then(function(d){try{r._actionSubscribers.filter(function(m){return m.after}).forEach(function(m){return m.after(a,r.state)})}catch{}u(d)},function(d){try{r._actionSubscribers.filter(function(m){return m.error}).forEach(function(m){return m.error(a,r.state,d)})}catch{}h(d)})})}};Et.prototype.subscribe=function(e,n){return Bg(e,this._subscribers,n)};Et.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return Bg(r,this._actionSubscribers,n)};Et.prototype.watch=function(e,n,r){var s=this;return dr(function(){return e(s.state,s.getters)},n,Object.assign({},r))};Et.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Et.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),$a(this,this.state,e,this._modules.get(e),r.preserveState),Fu(this,this.state)};Et.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=$u(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),Vg(this)};Et.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Et.prototype.hotUpdate=function(e){this._modules.update(e),Vg(this,!0)};Et.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Et.prototype,Bu);var Qg=NC(function(t,e){var n={};return PC(e).forEach(function(r){var s=r.key,i=r.val;i=t+i,n[s]=function(){if(!(t&&!xC(this.$store,"mapGetters",t)))return this.$store.getters[i]},n[s].vuex=!0}),n});function PC(t){return DC(t)?Array.isArray(t)?t.map(function(e){return{key:e,val:e}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}}):[]}function DC(t){return Array.isArray(t)||$g(t)}function NC(t){return function(e,n){return typeof e!="string"?(n=e,e=""):e.charAt(e.length-1)!=="/"&&(e+="/"),t(e,n)}}function xC(t,e,n){var r=t._modulesNamespaceMap[n];return r}const Zn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},LC={emits:["loaded","onloadedmetadata"],props:["show","src","refer"],setup(t,e){const n=fe(),r=i=>{n.value=i.target.files[0],s()},s=()=>{let i=document.getElementById("video-preview"),o=new FileReader;o.readAsDataURL(n.value),o.addEventListener("load",function(){i.src=o.result,e.emit("loaded",i.src)})};return{file:n,handleFileUpload:r,previewVideo:s}}},MC=["src"];function UC(t,e,n,r,s,i){return me(),Re(Le,null,[Ve(D("video",{src:n.src,id:"video-preview",controls:"",ref:"refer"},null,8,MC),[[Fn,r.file||!!n.src]]),Ve(D("input",{type:"file",accept:"video/*",onChange:e[0]||(e[0]=o=>r.handleFileUpload(o))},null,544),[[Fn,n.show]])],64)}const FC=Zn(LC,[["render",UC]]);const $C={emits:["loaded"],components:{Video:FC},setup(){const t=Uu(),e=ws(),n=Ug(),r=fe(""),s=fe(""),i=fe(""),o=Yn({videos:[]}),a=fe(0);fe(0);const c=async u=>{if(u.preventDefault(),r.value){const h=new Date,d=h.getFullYear()+"-"+(h.getMonth()+1)+"-"+h.getDate();t.commit("addPost",{id:n.query.id?n.query.id:0,date:d,title:r.value,content:i.value,video:o}),n.query.id?e.push("/feed"):e.push("/edit-video")}else s.value="Title field required"},l=u=>{o.videos&&o.videos.push(u)};return Di(()=>{n.query.title&&(r.value=n.query.title),n.query.content&&(i.value=n.query.content),n.query.video&&(o.videos=n.query.video)}),{publish:c,Title:r,validTitle:s,Content:i,video:o,more:a,setVideo:l}}},BC={class:"post"},VC=D("h3",null,"Post",-1),jC=D("label",{class:"label",for:"Title"},"Title",-1),HC=D("label",{class:"label",for:"Content"},"Content",-1),qC=D("label",{class:"label",for:""},"Video",-1),KC={class:"more"};function WC(t,e,n,r,s,i){const o=gn("Video");return me(),Re("form",null,[D("div",BC,[VC,jC,Ve(D("input",{id:"Title","onUpdate:modelValue":e[0]||(e[0]=a=>r.Title=a),type:"text",placeholder:"Title (required)",required:""},null,512),[[Dt,r.Title]]),HC,Ve(D("textarea",{id:"Content","onUpdate:modelValue":e[1]||(e[1]=a=>r.Content=a),placeholder:"Text"},null,512),[[Dt,r.Content]]),qC,D("span",null,[Ee(o,{src:r.video.videos[0],show:!0,onLoaded:r.setVideo},null,8,["src","onLoaded"])]),(me(!0),Re(Le,null,Oa(r.more,a=>(me(),Re("span",KC,[Ee(o,{src:r.video.videos[a],show:!0,onLoaded:r.setVideo},null,8,["src","onLoaded"])]))),256)),r.more?(me(),Re("button",{key:0,onClick:e[2]||(e[2]=fl(a=>r.more--,["prevent"]))},"Less")):Qs("",!0),D("button",{onClick:e[3]||(e[3]=fl(a=>r.more++,["prevent"]))},"More"),Ge(" "+wt(r.validTitle)+" ",1),D("button",{onClick:e[4]||(e[4]=(...a)=>r.publish&&r.publish(...a))},"Publish")])])}const zC=Zn($C,[["render",WC]]);const GC={data(){return{articles:[]}},computed:{...Qg(["blogs"])},async created(){await this.$store.dispatch("initialize")}},Ba=t=>(Zw("data-v-00e8123b"),t=t(),eb(),t),QC={class:"container"},JC={class:"meta"},XC=Ba(()=>D("div",{class:"image"},null,-1)),YC={class:"info"},ZC=Ba(()=>D("h1",{class:"center"},"Create your Blogs freely ",-1)),eA=Ge(" Start now creating your own blogs. "),tA={class:"article"},nA=Ba(()=>D("h2",null,"Discover",-1)),rA={class:"articles"},sA={class:"first-letter"},iA=Ge("View Blog Post"),oA=Ba(()=>D("div",{class:"footer"},null,-1));function aA(t,e,n,r,s,i){const o=gn("RouterLink"),a=gn("router-link");return me(),Re("div",QC,[D("div",JC,[XC,D("div",YC,[ZC,D("p",null,[Ee(o,{class:"center",to:"/feed"},{default:Ct(()=>[eA]),_:1})])])]),D("main",tA,[nA,(me(!0),Re(Le,null,Oa(t.blogs,c=>(me(),Re("div",rA,[D("h3",null,wt(c.attributes.Title),1),D("p",null,[D("span",sA,wt(c.attributes.Description[0]),1),Ge(" "+wt(c.attributes.Description.split(`
`)[0]),1)]),Ee(a,{class:"link",to:`/${c.id}-${c.attributes.Title.replace(/:|!|'|\?|,/g,"").replace(/\s+/g,"-").toLowerCase()}`},{default:Ct(()=>[iA]),_:2},1032,["to"])]))),256))]),oA])}const gf=Zn(GC,[["render",aA],["__scopeId","data-v-00e8123b"]]);const cA={class:"container"},lA=D("p",null,"Profile photo",-1),uA=["src"],hA=D("label",{for:"user",class:"username"},"Username",-1),dA=D("label",{for:"first",class:"firstname"},"Firstname",-1),fA=D("label",{for:"last",class:"lastname"},"Lastname",-1),pA=D("label",{for:"number"},"Phone Number",-1),mA={__name:"Profile",emits:["sendRegistration"],setup(t,{emit:e}){const n=fe(),r=fe(),s=fe(""),i=fe(""),o=fe(""),a=fe(),c=u=>{u.preventDefault(),r.value={image:n.value,username:s.value,firstname:i.value,lastname:o.value,number:a.value},e("sendRegistration",r.value)},l=u=>{let h=u.target.files[0],d=new FileReader;d.readAsDataURL(h),d.addEventListener("load",function(){n.value=d.result})};return(u,h)=>(me(),Re("div",null,[D("form",cA,[lA,Ve(D("img",{src:n.value,alt:"",width:"250",height:"250",class:"photo"},null,8,uA),[[Fn,n.value]]),D("input",{class:"photo",type:"file",accept:"image/*",onChange:h[0]||(h[0]=d=>l(d))},null,32),hA,Ve(D("input",{type:"text","onUpdate:modelValue":h[1]||(h[1]=d=>s.value=d),class:"username"},null,512),[[Dt,s.value]]),dA,Ve(D("input",{type:"text","onUpdate:modelValue":h[2]||(h[2]=d=>i.value=d),class:"firstname"},null,512),[[Dt,i.value]]),fA,Ve(D("input",{type:"text","onUpdate:modelValue":h[3]||(h[3]=d=>o.value=d),class:"lastname"},null,512),[[Dt,o.value]]),pA,Ve(D("input",{type:"number","onUpdate:modelValue":h[4]||(h[4]=d=>a.value=d),class:"phone"},null,512),[[Dt,a.value]]),D("p",null,[D("button",{onClick:c},"Submit")])])]))}};/**
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
 */const Jg="firebasestorage.googleapis.com",Xg="storageBucket",gA=2*60*1e3,yA=10*60*1e3;/**
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
 */class Fe extends on{constructor(e,n,r=0){super(Lc(e),`Firebase Storage: ${n} (${Lc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Fe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Lc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Lc(t){return"storage/"+t}function Vu(){const t="An unknown error occurred, please check the error payload for server response.";return new Fe("unknown",t)}function vA(t){return new Fe("object-not-found","Object '"+t+"' does not exist.")}function _A(t){return new Fe("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function wA(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Fe("unauthenticated",t)}function bA(){return new Fe("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function EA(t){return new Fe("unauthorized","User does not have permission to access '"+t+"'.")}function TA(){return new Fe("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function IA(){return new Fe("canceled","User canceled the upload/download.")}function SA(t){return new Fe("invalid-url","Invalid URL '"+t+"'.")}function CA(t){return new Fe("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function AA(){return new Fe("no-default-bucket","No default bucket found. Did you set the '"+Xg+"' property when initializing the app?")}function kA(){return new Fe("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function RA(){return new Fe("no-download-url","The given file does not have any download URLs.")}function Cl(t){return new Fe("invalid-argument",t)}function Yg(){return new Fe("app-deleted","The Firebase app was deleted.")}function OA(t){return new Fe("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Zs(t,e){return new Fe("invalid-format","String does not match format '"+t+"': "+e)}function Ns(t){throw new Fe("internal-error","Internal error: "+t)}/**
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
 */class At{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=At.makeFromUrl(e,n)}catch{return new At(e,"")}if(r.path==="")return r;throw CA(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(N){N.path_=decodeURIComponent(N.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),f={bucket:1,path:3},v=n===Jg?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",y=new RegExp(`^https?://${v}/${s}/${b}`,"i"),A=[{regex:a,indices:c,postModify:i},{regex:m,indices:f,postModify:l},{regex:y,indices:{bucket:1,path:2},postModify:l}];for(let N=0;N<A.length;N++){const H=A[N],X=H.regex.exec(e);if(X){const J=X[H.indices.bucket];let U=X[H.indices.path];U||(U=""),r=new At(J,U),H.postModify(r);break}}if(r==null)throw SA(e);return r}}class PA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function DA(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...b){l||(l=!0,e.apply(null,b))}function h(b){s=setTimeout(()=>{s=null,t(m,c())},b)}function d(){i&&clearTimeout(i)}function m(b,...y){if(l){d();return}if(b){d(),u.call(null,b,...y);return}if(c()||o){d(),u.call(null,b,...y);return}r<64&&(r*=2);let A;a===1?(a=2,A=0):A=(r+Math.random())*1e3,h(A)}let f=!1;function v(b){f||(f=!0,d(),!l&&(s!==null?(b||(a=2),clearTimeout(s),h(0)):b||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function NA(t){t(!1)}/**
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
 */function xA(t){return t!==void 0}function LA(t){return typeof t=="object"&&!Array.isArray(t)}function ju(t){return typeof t=="string"||t instanceof String}function yf(t){return Hu()&&t instanceof Blob}function Hu(){return typeof Blob<"u"&&!EE()}function vf(t,e,n,r){if(r<e)throw Cl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Cl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function qu(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Zg(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var gr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(gr||(gr={}));/**
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
 */function MA(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class UA{constructor(e,n,r,s,i,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,f)=>{this.resolve_=m,this.reject_=f,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new fo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===gr.NO_ERROR,c=i.getStatus();if((!a||MA(c,this.additionalRetryCodes_))&&this.retry){const u=i.getErrorCode()===gr.ABORT;r(!1,new fo(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new fo(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());xA(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Vu();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Yg():IA();o(c)}else{const c=TA();o(c)}};this.canceled_?n(!1,new fo(!1,null,!0)):this.backoffId_=DA(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&NA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class fo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function FA(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function $A(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function BA(t,e){e&&(t["X-Firebase-GMPID"]=e)}function VA(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function jA(t,e,n,r,s,i,o=!0){const a=Zg(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return BA(l,e),FA(l,n),$A(l,i),VA(l,r),new UA(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function HA(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function qA(...t){const e=HA();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Hu())return new Blob(t);throw new Fe("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function KA(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function WA(t){return atob(t)}/**
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
 */const Bt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Mc{constructor(e,n){this.data=e,this.contentType=n||null}}function ey(t,e){switch(t){case Bt.RAW:return new Mc(ty(e));case Bt.BASE64:case Bt.BASE64URL:return new Mc(ny(t,e));case Bt.DATA_URL:return new Mc(GA(e),QA(e))}throw Vu()}function ty(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function zA(t){let e;try{e=decodeURIComponent(t)}catch{throw Zs(Bt.DATA_URL,"Malformed data URL.")}return ty(e)}function ny(t,e){switch(t){case Bt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Zs(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Bt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Zs(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=WA(e)}catch{throw Zs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class ry{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Zs(Bt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=JA(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function GA(t){const e=new ry(t);return e.base64?ny(Bt.BASE64,e.rest):zA(e.rest)}function QA(t){return new ry(t).contentType}function JA(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Un{constructor(e,n){let r=0,s="";yf(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(yf(this.data_)){const r=this.data_,s=KA(r,e,n);return s===null?null:new Un(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Un(r,!0)}}static getBlob(...e){if(Hu()){const n=e.map(r=>r instanceof Un?r.data_:r);return new Un(qA.apply(null,n))}else{const n=e.map(o=>ju(o)?ey(Bt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Un(s,!0)}}uploadData(){return this.data_}}/**
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
 */function sy(t){let e;try{e=JSON.parse(t)}catch{return null}return LA(e)?e:null}/**
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
 */function XA(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function YA(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function iy(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function ZA(t,e){return e}class dt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||ZA}}let po=null;function ek(t){return!ju(t)||t.length<2?t:iy(t)}function oy(){if(po)return po;const t=[];t.push(new dt("bucket")),t.push(new dt("generation")),t.push(new dt("metageneration")),t.push(new dt("name","fullPath",!0));function e(i,o){return ek(o)}const n=new dt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new dt("size");return s.xform=r,t.push(s),t.push(new dt("timeCreated")),t.push(new dt("updated")),t.push(new dt("md5Hash",null,!0)),t.push(new dt("cacheControl",null,!0)),t.push(new dt("contentDisposition",null,!0)),t.push(new dt("contentEncoding",null,!0)),t.push(new dt("contentLanguage",null,!0)),t.push(new dt("contentType",null,!0)),t.push(new dt("metadata","customMetadata",!0)),po=t,po}function tk(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new At(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function nk(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return tk(r,t),r}function ay(t,e,n){const r=sy(e);return r===null?null:nk(t,r,n)}function rk(t,e,n,r){const s=sy(e);if(s===null||!ju(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),m=qu(d,n,r),f=Zg({alt:"media",token:l});return m+f})[0]}function sk(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class cy{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ly(t){if(!t)throw Vu()}function ik(t,e){function n(r,s){const i=ay(t,s,e);return ly(i!==null),i}return n}function ok(t,e){function n(r,s){const i=ay(t,s,e);return ly(i!==null),rk(i,s,t.host,t._protocol)}return n}function uy(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=bA():s=wA():n.getStatus()===402?s=_A(t.bucket):n.getStatus()===403?s=EA(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function ak(t){const e=uy(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=vA(t.path)),i.serverResponse=s.serverResponse,i}return n}function ck(t,e,n){const r=e.fullServerUrl(),s=qu(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new cy(s,i,ok(t,n),o);return a.errorHandler=ak(e),a}function lk(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function uk(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=lk(null,e)),r}function hk(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let A="";for(let N=0;N<2;N++)A=A+Math.random().toString().slice(2);return A}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=uk(e,r,s),u=sk(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",m=Un.getBlob(h,r,d);if(m===null)throw kA();const f={name:l.fullPath},v=qu(i,t.host,t._protocol),b="POST",y=t.maxUploadRetryTime,_=new cy(v,b,ik(t,n),y);return _.urlParams=f,_.headers=o,_.body=m.uploadData(),_.errorHandler=uy(e),_}class dk{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=gr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=gr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=gr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Ns("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ns("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ns("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ns("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ns("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class fk extends dk{initXhr(){this.xhr_.responseType="text"}}function hy(){return new fk}/**
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
 */class Tr{constructor(e,n){this._service=e,n instanceof At?this._location=n:this._location=At.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Tr(e,n)}get root(){const e=new At(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return iy(this._location.path)}get storage(){return this._service}get parent(){const e=XA(this._location.path);if(e===null)return null;const n=new At(this._location.bucket,e);return new Tr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw OA(e)}}function pk(t,e,n){t._throwIfRoot("uploadBytes");const r=hk(t.storage,t._location,oy(),new Un(e,!0),n);return t.storage.makeRequestWithTokens(r,hy).then(s=>({metadata:s,ref:t}))}function mk(t,e,n=Bt.RAW,r){t._throwIfRoot("uploadString");const s=ey(n,e),i=Object.assign({},r);return i.contentType==null&&s.contentType!=null&&(i.contentType=s.contentType),pk(t,s.data,i)}function gk(t){t._throwIfRoot("getDownloadURL");const e=ck(t.storage,t._location,oy());return t.storage.makeRequestWithTokens(e,hy).then(n=>{if(n===null)throw RA();return n})}function yk(t,e){const n=YA(t._location.path,e),r=new At(t._location.bucket,n);return new Tr(t.storage,r)}/**
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
 */function vk(t){return/^[A-Za-z]+:\/\//.test(t)}function _k(t,e){return new Tr(t,e)}function dy(t,e){if(t instanceof Ku){const n=t;if(n._bucket==null)throw AA();const r=new Tr(n,n._bucket);return e!=null?dy(r,e):r}else return e!==void 0?yk(t,e):t}function wk(t,e){if(e&&vk(e)){if(t instanceof Ku)return _k(t,e);throw Cl("To use ref(service, url), the first argument must be a Storage instance.")}else return dy(t,e)}function _f(t,e){const n=e==null?void 0:e[Xg];return n==null?null:At.makeFromBucketSpec(n,t)}function bk(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Vm(s,t.app.options.projectId))}class Ku{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Jg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gA,this._maxUploadRetryTime=yA,this._requests=new Set,s!=null?this._bucket=At.makeFromBucketSpec(s,this._host):this._bucket=_f(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=At.makeFromBucketSpec(this._url,e):this._bucket=_f(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){vf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){vf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Tr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new PA(Yg());{const o=jA(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const wf="@firebase/storage",bf="0.9.13";/**
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
 */const fy="storage";function py(t,e,n,r){return t=Me(t),mk(t,e,n,r)}function my(t){return t=Me(t),gk(t)}function gy(t,e){return t=Me(t),wk(t,e)}function yy(t=Su(),e){t=Me(t);const r=Na(t,fy).getImmediate({identifier:e}),s=$m("storage");return s&&Ek(r,...s),r}function Ek(t,e,n,r={}){bk(t,e,n,r)}function Tk(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ku(n,r,s,e,gs)}function Ik(){wr(new zn(fy,Tk,"PUBLIC").setMultipleInstances(!0)),en(wf,bf,""),en(wf,bf,"esm2017")}Ik();const Sk=D("h1",null,"Create an Account",-1),Ck={key:0},Ak={style:{"text-decoration":"none"}},kk=Ge("Already have an account? "),Rk=Ge("Login!"),Ok={__name:"Register",setup(t){const e=fe(!1),n=fe(""),r=fe(""),s=ws(),i=o=>{const a=ts();xT(a,n.value,r.value).then(c=>{if(o.image){const l=yy(),u=gy(l,`images/${c.user.uid}.jpg`);py(u,o.image,"data_url").then(h=>{my(h.ref).then(d=>{c.photoURL=d})})}c.displayName=o.username,c.phoneNumber=o.number,s.push("/feed"),dg(a.currentUser)}).catch(c=>{console.log(c.code),alert(c.message)})};return(o,a)=>{const c=gn("router-link");return me(),Re(Le,null,[Sk,e.value?Qs("",!0):(me(),Re("form",Ck,[D("p",null,[Ve(D("input",{type:"text",autocomplete:"email",placeholder:"Email","onUpdate:modelValue":a[0]||(a[0]=l=>n.value=l)},null,512),[[Dt,n.value]])]),D("p",null,[Ve(D("input",{type:"password",autocomplete:"current-password",placeholder:"Password","onUpdate:modelValue":a[1]||(a[1]=l=>r.value=l)},null,512),[[Dt,r.value]])])])),Ve(Ee(mA,{onSendRegistration:i},null,512),[[Fn,e.value]]),D("p",null,[e.value?(me(),Re("button",{key:0,onClick:a[2]||(a[2]=l=>e.value=!1)},"Back")):(me(),Re("button",{key:1,onClick:a[3]||(a[3]=l=>e.value=!0)},"Register"))]),D("p",Ak,[kk,Ee(c,{to:"/login"},{default:Ct(()=>[Rk]),_:1})])],64)}}},Pk=D("h1",null,"Login to your Account",-1),Dk={style:{"text-decoration":"none"}},Nk=Ge("Don't have an account? "),xk=Ge("Sign up!"),Lk={__name:"Login",setup(t){const e=fe(""),n=fe(""),r=ws(),s=fe(),i=()=>{const o=ts();LT(o,e.value,n.value).then(a=>{r.push("/feed")}).catch(a=>{switch(a.code){case"auth/invalid-email":s.value="Invalid email";break;case"auth/user-not-found":s.value="No account with that email was found";break;case"auth/wrong-password":s.value="Incorrect password";break;default:s.value="Email or password was incorrect";break}})};return(o,a)=>{const c=gn("router-link");return me(),Re(Le,null,[Pk,D("p",null,[Ve(D("input",{type:"text",placeholder:"Email","onUpdate:modelValue":a[0]||(a[0]=l=>e.value=l)},null,512),[[Dt,e.value]])]),D("p",null,[Ve(D("input",{type:"password",placeholder:"Password","onUpdate:modelValue":a[1]||(a[1]=l=>n.value=l)},null,512),[[Dt,n.value]])]),D("p",null,[D("button",{onClick:i},"Submit")]),D("p",Dk,[Nk,Ee(c,{to:"/register"},{default:Ct(()=>[xk]),_:1})]),Ge(" "+wt(s.value),1)],64)}}};var Mk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$,Wu=Wu||{},Y=Mk||self;function ra(){}function Va(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Bi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Uk(t){return Object.prototype.hasOwnProperty.call(t,Uc)&&t[Uc]||(t[Uc]=++Fk)}var Uc="closure_uid_"+(1e9*Math.random()>>>0),Fk=0;function $k(t,e,n){return t.call.apply(t.bind,arguments)}function Bk(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ct(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ct=$k:ct=Bk,ct.apply(null,arguments)}function mo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function rt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function er(){this.s=this.s,this.o=this.o}var Vk=0;er.prototype.s=!1;er.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Vk!=0)&&Uk(this)};er.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const vy=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function zu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ef(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Va(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function lt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var jk=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Y.addEventListener("test",ra,e),Y.removeEventListener("test",ra,e)}catch{}return t}();function sa(t){return/^[\s\xa0]*$/.test(t)}var Tf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Fc(t,e){return t<e?-1:t>e?1:0}function ja(){var t=Y.navigator;return t&&(t=t.userAgent)?t:""}function Yt(t){return ja().indexOf(t)!=-1}function Gu(t){return Gu[" "](t),t}Gu[" "]=ra;function Hk(t){var e=Wk;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var qk=Yt("Opera"),is=Yt("Trident")||Yt("MSIE"),_y=Yt("Edge"),Al=_y||is,wy=Yt("Gecko")&&!(ja().toLowerCase().indexOf("webkit")!=-1&&!Yt("Edge"))&&!(Yt("Trident")||Yt("MSIE"))&&!Yt("Edge"),Kk=ja().toLowerCase().indexOf("webkit")!=-1&&!Yt("Edge");function by(){var t=Y.document;return t?t.documentMode:void 0}var ia;e:{var $c="",Bc=function(){var t=ja();if(wy)return/rv:([^\);]+)(\)|;)/.exec(t);if(_y)return/Edge\/([\d\.]+)/.exec(t);if(is)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Kk)return/WebKit\/(\S+)/.exec(t);if(qk)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Bc&&($c=Bc?Bc[1]:""),is){var Vc=by();if(Vc!=null&&Vc>parseFloat($c)){ia=String(Vc);break e}}ia=$c}var Wk={};function zk(){return Hk(function(){let t=0;const e=Tf(String(ia)).split("."),n=Tf("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=Fc(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Fc(s[2].length==0,i[2].length==0)||Fc(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var kl;if(Y.document&&is){var If=by();kl=If||parseInt(ia,10)||void 0}else kl=void 0;var Gk=kl;function vi(t,e){if(lt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(wy){e:{try{Gu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Qk[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&vi.X.h.call(this)}}rt(vi,lt);var Qk={2:"touch",3:"pen",4:"mouse"};vi.prototype.h=function(){vi.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Vi="closure_listenable_"+(1e6*Math.random()|0),Jk=0;function Xk(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=s,this.key=++Jk,this.ba=this.ea=!1}function Ha(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Qu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Ey(t){const e={};for(const n in t)e[n]=t[n];return e}const Sf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ty(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Sf.length;i++)n=Sf[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function qa(t){this.src=t,this.g={},this.h=0}qa.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Ol(t,e,r,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Xk(e,this.src,i,!!r,s),e.ea=n,t.push(e)),e};function Rl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=vy(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ha(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ol(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==r)return s}return-1}var Ju="closure_lm_"+(1e6*Math.random()|0),jc={};function Iy(t,e,n,r,s){if(r&&r.once)return Cy(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Iy(t,e[i],n,r,s);return null}return n=Zu(n),t&&t[Vi]?t.N(e,n,Bi(r)?!!r.capture:!!r,s):Sy(t,e,n,!1,r,s)}function Sy(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Bi(s)?!!s.capture:!!s,a=Yu(t);if(a||(t[Ju]=a=new qa(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=Yk(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)jk||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(ky(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Yk(){function t(n){return e.call(t.src,t.listener,n)}const e=Zk;return t}function Cy(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Cy(t,e[i],n,r,s);return null}return n=Zu(n),t&&t[Vi]?t.O(e,n,Bi(r)?!!r.capture:!!r,s):Sy(t,e,n,!0,r,s)}function Ay(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Ay(t,e[i],n,r,s);else r=Bi(r)?!!r.capture:!!r,n=Zu(n),t&&t[Vi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Ol(i,n,r,s),-1<n&&(Ha(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Yu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ol(e,n,r,s)),(n=-1<t?e[t]:null)&&Xu(n))}function Xu(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Vi])Rl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ky(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Yu(e))?(Rl(n,t),n.h==0&&(n.src=null,e[Ju]=null)):Ha(t)}}}function ky(t){return t in jc?jc[t]:jc[t]="on"+t}function Zk(t,e){if(t.ba)t=!0;else{e=new vi(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Xu(t),t=n.call(r,e)}return t}function Yu(t){return t=t[Ju],t instanceof qa?t:null}var Hc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zu(t){return typeof t=="function"?t:(t[Hc]||(t[Hc]=function(e){return t.handleEvent(e)}),t[Hc])}function Ye(){er.call(this),this.i=new qa(this),this.P=this,this.I=null}rt(Ye,er);Ye.prototype[Vi]=!0;Ye.prototype.removeEventListener=function(t,e,n,r){Ay(this,t,e,n,r)};function nt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new lt(e,t);else if(e instanceof lt)e.target=e.target||t;else{var s=e;e=new lt(r,t),Ty(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=go(o,r,!0,e)&&s}if(o=e.g=t,s=go(o,r,!0,e)&&s,s=go(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=go(o,r,!1,e)&&s}Ye.prototype.M=function(){if(Ye.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ha(n[r]);delete t.g[e],t.h--}}this.I=null};Ye.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ye.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function go(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Rl(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var eh=Y.JSON.stringify;function eR(){var t=Py;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class tR{constructor(){this.h=this.g=null}add(e,n){const r=Ry.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ry=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new nR,t=>t.reset());class nR{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function rR(t){Y.setTimeout(()=>{throw t},0)}function Oy(t,e){Pl||sR(),Dl||(Pl(),Dl=!0),Py.add(t,e)}var Pl;function sR(){var t=Y.Promise.resolve(void 0);Pl=function(){t.then(iR)}}var Dl=!1,Py=new tR;function iR(){for(var t;t=eR();){try{t.h.call(t.g)}catch(n){rR(n)}var e=Ry;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Dl=!1}function Ka(t,e){Ye.call(this),this.h=t||1,this.g=e||Y,this.j=ct(this.lb,this),this.l=Date.now()}rt(Ka,Ye);$=Ka.prototype;$.ca=!1;$.R=null;$.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),nt(this,"tick"),this.ca&&(th(this),this.start()))}};$.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function th(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}$.M=function(){Ka.X.M.call(this),th(this),delete this.g};function nh(t,e,n){if(typeof t=="function")n&&(t=ct(t,n));else if(t&&typeof t.handleEvent=="function")t=ct(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function Dy(t){t.g=nh(()=>{t.g=null,t.i&&(t.i=!1,Dy(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class oR extends er{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Dy(this)}M(){super.M(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _i(t){er.call(this),this.h=t,this.g={}}rt(_i,er);var Cf=[];function Ny(t,e,n,r){Array.isArray(n)||(n&&(Cf[0]=n.toString()),n=Cf);for(var s=0;s<n.length;s++){var i=Iy(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function xy(t){Qu(t.g,function(e,n){this.g.hasOwnProperty(n)&&Xu(e)},t),t.g={}}_i.prototype.M=function(){_i.X.M.call(this),xy(this)};_i.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Wa(){this.g=!0}Wa.prototype.Aa=function(){this.g=!1};function aR(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function cR(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Hr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+uR(t,n)+(r?" "+r:"")})}function lR(t,e){t.info(function(){return"TIMEOUT: "+e})}Wa.prototype.info=function(){};function uR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return eh(n)}catch{return e}}var kr={},Af=null;function za(){return Af=Af||new Ye}kr.Pa="serverreachability";function Ly(t){lt.call(this,kr.Pa,t)}rt(Ly,lt);function wi(t){const e=za();nt(e,new Ly(e))}kr.STAT_EVENT="statevent";function My(t,e){lt.call(this,kr.STAT_EVENT,t),this.stat=e}rt(My,lt);function pt(t){const e=za();nt(e,new My(e,t))}kr.Qa="timingevent";function Uy(t,e){lt.call(this,kr.Qa,t),this.size=e}rt(Uy,lt);function ji(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){t()},e)}var Ga={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Fy={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function rh(){}rh.prototype.h=null;function kf(t){return t.h||(t.h=t.i())}function $y(){}var Hi={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function sh(){lt.call(this,"d")}rt(sh,lt);function ih(){lt.call(this,"c")}rt(ih,lt);var Nl;function Qa(){}rt(Qa,rh);Qa.prototype.g=function(){return new XMLHttpRequest};Qa.prototype.i=function(){return{}};Nl=new Qa;function qi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new _i(this),this.O=hR,t=Al?125:void 0,this.T=new Ka(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new By}function By(){this.i=null,this.g="",this.h=!1}var hR=45e3,xl={},oa={};$=qi.prototype;$.setTimeout=function(t){this.O=t};function Ll(t,e,n){t.K=1,t.v=Xa(_n(e)),t.s=n,t.P=!0,Vy(t,null)}function Vy(t,e){t.F=Date.now(),Ki(t),t.A=_n(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),Qy(n.i,"t",r),t.C=0,n=t.l.H,t.h=new By,t.g=gv(t.l,n?e:null,!t.s),0<t.N&&(t.L=new oR(ct(t.La,t,t.g),t.N)),Ny(t.S,t.g,"readystatechange",t.ib),e=t.H?Ey(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),wi(),aR(t.j,t.u,t.A,t.m,t.U,t.s)}$.ib=function(t){t=t.target;const e=this.L;e&&dn(t)==3?e.l():this.La(t)};$.La=function(t){try{if(t==this.g)e:{const u=dn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Al||this.g&&(this.h.h||this.g.fa()||Df(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?wi(3):wi(2)),Ja(this);var n=this.g.aa();this.Y=n;t:if(jy(this)){var r=Df(this.g);t="";var s=r.length,i=dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cr(this),ei(this);var o="";break t}this.h.i=new Y.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,cR(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!sa(a)){var l=a;break t}}l=null}if(n=l)Hr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ml(this,n);else{this.i=!1,this.o=3,pt(12),cr(this),ei(this);break e}}this.P?(Hy(this,u,o),Al&&this.i&&u==3&&(Ny(this.S,this.T,"tick",this.hb),this.T.start())):(Hr(this.j,this.m,o,null),Ml(this,o)),u==4&&cr(this),this.i&&!this.I&&(u==4?dv(this.l,this):(this.i=!1,Ki(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,pt(12)):(this.o=0,pt(13)),cr(this),ei(this)}}}catch{}finally{}};function jy(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Hy(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=dR(t,n),s==oa){e==4&&(t.o=4,pt(14),r=!1),Hr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==xl){t.o=4,pt(15),Hr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Hr(t.j,t.m,s,null),Ml(t,s);jy(t)&&s!=oa&&s!=xl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,pt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),dh(e),e.K=!0,pt(11))):(Hr(t.j,t.m,n,"[Invalid Chunked Response]"),cr(t),ei(t))}$.hb=function(){if(this.g){var t=dn(this.g),e=this.g.fa();this.C<e.length&&(Ja(this),Hy(this,t,e),this.i&&t!=4&&Ki(this))}};function dR(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?oa:(n=Number(e.substring(n,r)),isNaN(n)?xl:(r+=1,r+n>e.length?oa:(e=e.substr(r,n),t.C=r+n,e)))}$.cancel=function(){this.I=!0,cr(this)};function Ki(t){t.V=Date.now()+t.O,qy(t,t.O)}function qy(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ji(ct(t.gb,t),e)}function Ja(t){t.B&&(Y.clearTimeout(t.B),t.B=null)}$.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(lR(this.j,this.A),this.K!=2&&(wi(),pt(17)),cr(this),this.o=2,ei(this)):qy(this,this.V-t)};function ei(t){t.l.G==0||t.I||dv(t.l,t)}function cr(t){Ja(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,th(t.T),xy(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ml(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ul(n.h,t))){if(!t.J&&Ul(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)la(n),ec(n);else break e;hh(n),pt(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=ji(ct(n.cb,n),6e3));if(1>=Yy(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else lr(n,11)}else if((t.J||n.g==t)&&la(n),!sa(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const f=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(f){var i=r.h;i.g||f.indexOf("spdy")==-1&&f.indexOf("quic")==-1&&f.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(oh(i,i.h),i.h=null))}if(r.D){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,Ne(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=mv(r,r.H?r.ka:null,r.V),o.J){Zy(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Ja(a),Ki(a)),r.g=o}else uv(r);0<n.i.length&&tc(n)}else l[0]!="stop"&&l[0]!="close"||lr(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?lr(n,7):uh(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}wi(4)}catch{}}function fR(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Va(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function pR(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Va(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Ky(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Va(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=pR(t),r=fR(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Wy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function yr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof yr){this.h=e!==void 0?e:t.h,aa(this,t.j),this.s=t.s,this.g=t.g,ca(this,t.m),this.l=t.l,e=t.i;var n=new bi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Rf(this,n),this.o=t.o}else t&&(n=String(t).match(Wy))?(this.h=!!e,aa(this,n[1]||"",!0),this.s=Vs(n[2]||""),this.g=Vs(n[3]||"",!0),ca(this,n[4]),this.l=Vs(n[5]||"",!0),Rf(this,n[6]||"",!0),this.o=Vs(n[7]||"")):(this.h=!!e,this.i=new bi(null,this.h))}yr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(js(e,Of,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(js(e,Of,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(js(n,n.charAt(0)=="/"?vR:yR,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",js(n,wR)),t.join("")};function _n(t){return new yr(t)}function aa(t,e,n){t.j=n?Vs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ca(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Rf(t,e,n){e instanceof bi?(t.i=e,bR(t.i,t.h)):(n||(e=js(e,_R)),t.i=new bi(e,t.h))}function Ne(t,e,n){t.i.set(e,n)}function Xa(t){return Ne(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Vs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function js(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,gR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function gR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Of=/[#\/\?@]/g,yR=/[#\?:]/g,vR=/[#\?]/g,_R=/[#\?@]/g,wR=/#/g;function bi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function tr(t){t.g||(t.g=new Map,t.h=0,t.i&&mR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=bi.prototype;$.add=function(t,e){tr(this),this.i=null,t=Es(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function zy(t,e){tr(t),e=Es(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Gy(t,e){return tr(t),e=Es(t,e),t.g.has(e)}$.forEach=function(t,e){tr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};$.oa=function(){tr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};$.W=function(t){tr(this);let e=[];if(typeof t=="string")Gy(this,t)&&(e=e.concat(this.g.get(Es(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};$.set=function(t,e){return tr(this),this.i=null,t=Es(this,t),Gy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Qy(t,e,n){zy(t,e),0<n.length&&(t.i=null,t.g.set(Es(t,e),zu(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Es(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function bR(t,e){e&&!t.j&&(tr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(zy(this,r),Qy(this,s,n))},t)),t.j=e}var ER=class{constructor(t,e){this.h=t,this.g=e}};function Jy(t){this.l=t||TR,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Y.g&&Y.g.Ga&&Y.g.Ga()&&Y.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var TR=10;function Xy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Yy(t){return t.h?1:t.g?t.g.size:0}function Ul(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function oh(t,e){t.g?t.g.add(e):t.h=e}function Zy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Jy.prototype.cancel=function(){if(this.i=ev(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ev(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return zu(t.i)}function ah(){}ah.prototype.stringify=function(t){return Y.JSON.stringify(t,void 0)};ah.prototype.parse=function(t){return Y.JSON.parse(t,void 0)};function IR(){this.g=new ah}function SR(t,e,n){const r=n||"";try{Ky(t,function(s,i){let o=s;Bi(s)&&(o=eh(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function CR(t,e){const n=new Wa;if(Y.Image){const r=new Image;r.onload=mo(yo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=mo(yo,n,r,"TestLoadImage: error",!1,e),r.onabort=mo(yo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=mo(yo,n,r,"TestLoadImage: timeout",!1,e),Y.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function yo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Wi(t){this.l=t.ac||null,this.j=t.jb||!1}rt(Wi,rh);Wi.prototype.g=function(){return new Ya(this.l,this.j)};Wi.prototype.i=function(t){return function(){return t}}({});function Ya(t,e){Ye.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ch,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}rt(Ya,Ye);var ch=0;$=Ya.prototype;$.open=function(t,e){if(this.readyState!=ch)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ei(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Y).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zi(this)),this.readyState=ch};$.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ei(this)),this.g&&(this.readyState=3,Ei(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tv(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function tv(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}$.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?zi(this):Ei(this),this.readyState==3&&tv(this)}};$.Va=function(t){this.g&&(this.response=this.responseText=t,zi(this))};$.Ua=function(t){this.g&&(this.response=t,zi(this))};$.ga=function(){this.g&&zi(this)};function zi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ei(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ei(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ya.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var AR=Y.JSON.parse;function Ue(t){Ye.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=nv,this.K=this.L=!1}rt(Ue,Ye);var nv="",kR=/^https?$/i,RR=["POST","PUT"];$=Ue.prototype;$.Ka=function(t){this.L=t};$.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Nl.g(),this.C=this.u?kf(this.u):kf(Nl),this.g.onreadystatechange=ct(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Pf(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=Y.FormData&&t instanceof Y.FormData,!(0<=vy(RR,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{iv(this),0<this.B&&((this.K=OR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ct(this.qa,this)):this.A=nh(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Pf(this,i)}};function OR(t){return is&&zk()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}$.qa=function(){typeof Wu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,nt(this,"timeout"),this.abort(8))};function Pf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,rv(t),Za(t)}function rv(t){t.D||(t.D=!0,nt(t,"complete"),nt(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,nt(this,"complete"),nt(this,"abort"),Za(this))};$.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Za(this,!0)),Ue.X.M.call(this)};$.Ha=function(){this.s||(this.F||this.v||this.l?sv(this):this.fb())};$.fb=function(){sv(this)};function sv(t){if(t.h&&typeof Wu<"u"&&(!t.C[1]||dn(t)!=4||t.aa()!=2)){if(t.v&&dn(t)==4)nh(t.Ha,0,t);else if(nt(t,"readystatechange"),dn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(Wy)[1]||null;if(!s&&Y.self&&Y.self.location){var i=Y.self.location.protocol;s=i.substr(0,i.length-1)}r=!kR.test(s?s.toLowerCase():"")}n=r}if(n)nt(t,"complete"),nt(t,"success");else{t.m=6;try{var o=2<dn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",rv(t)}}finally{Za(t)}}}}function Za(t,e){if(t.g){iv(t);const n=t.g,r=t.C[0]?ra:null;t.g=null,t.C=null,e||nt(t,"ready");try{n.onreadystatechange=r}catch{}}}function iv(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}function dn(t){return t.g?t.g.readyState:0}$.aa=function(){try{return 2<dn(this)?this.g.status:-1}catch{return-1}};$.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),AR(e)}};function Df(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case nv:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}$.Ea=function(){return this.m};$.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ov(t){let e="";return Qu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function lh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ov(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ne(t,e,n))}function xs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function av(t){this.Ca=0,this.i=[],this.j=new Wa,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=xs("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=xs("baseRetryDelayMs",5e3,t),this.bb=xs("retryDelaySeedMs",1e4,t),this.$a=xs("forwardChannelMaxRetries",2,t),this.ta=xs("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Jy(t&&t.concurrentRequestLimit),this.Fa=new IR,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}$=av.prototype;$.ma=8;$.G=1;function uh(t){if(cv(t),t.G==3){var e=t.U++,n=_n(t.F);Ne(n,"SID",t.I),Ne(n,"RID",e),Ne(n,"TYPE","terminate"),Gi(t,n),e=new qi(t,t.j,e,void 0),e.K=2,e.v=Xa(_n(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon&&(n=Y.navigator.sendBeacon(e.v.toString(),"")),!n&&Y.Image&&(new Image().src=e.v,n=!0),n||(e.g=gv(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ki(e)}pv(t)}function ec(t){t.g&&(dh(t),t.g.cancel(),t.g=null)}function cv(t){ec(t),t.u&&(Y.clearTimeout(t.u),t.u=null),la(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Y.clearTimeout(t.m),t.m=null)}function tc(t){Xy(t.h)||t.m||(t.m=!0,Oy(t.Ja,t),t.C=0)}function PR(t,e){return Yy(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=ji(ct(t.Ja,t,e),fv(t,t.C)),t.C++,!0)}$.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new qi(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Ey(i),Ty(i,this.S)):i=this.S),this.o!==null||this.N||(s.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=lv(this,s,e),n=_n(this.F),Ne(n,"RID",t),Ne(n,"CVER",22),this.D&&Ne(n,"X-HTTP-Session-Id",this.D),Gi(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(ov(i)))+"&"+e:this.o&&lh(n,this.o,i)),oh(this.h,s),this.Ya&&Ne(n,"TYPE","init"),this.O?(Ne(n,"$req",e),Ne(n,"SID","null"),s.Z=!0,Ll(s,n,null)):Ll(s,n,e),this.G=2}}else this.G==3&&(t?Nf(this,t):this.i.length==0||Xy(this.h)||Nf(this))};function Nf(t,e){var n;e?n=e.m:n=t.U++;const r=_n(t.F);Ne(r,"SID",t.I),Ne(r,"RID",n),Ne(r,"AID",t.T),Gi(t,r),t.o&&t.s&&lh(r,t.o,t.s),n=new qi(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=lv(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),oh(t.h,n),Ll(n,r,e)}function Gi(t,e){t.ia&&Qu(t.ia,function(n,r){Ne(e,r,n)}),t.l&&Ky({},function(n,r){Ne(e,r,n)})}function lv(t,e,n){n=Math.min(t.i.length,n);var r=t.l?ct(t.l.Ra,t.l,t):null;e:{var s=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const u=s[c].g;if(l-=i,0>l)i=Math.max(0,s[c].h-100),a=!1;else try{SR(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function uv(t){t.g||t.u||(t.Z=1,Oy(t.Ia,t),t.A=0)}function hh(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ji(ct(t.Ia,t),fv(t,t.A)),t.A++,!0)}$.Ia=function(){if(this.u=null,hv(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ji(ct(this.eb,this),t)}};$.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,pt(10),ec(this),hv(this))};function dh(t){t.B!=null&&(Y.clearTimeout(t.B),t.B=null)}function hv(t){t.g=new qi(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=_n(t.sa);Ne(e,"RID","rpc"),Ne(e,"SID",t.I),Ne(e,"CI",t.L?"0":"1"),Ne(e,"AID",t.T),Ne(e,"TYPE","xmlhttp"),Gi(t,e),t.o&&t.s&&lh(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Xa(_n(e)),n.s=null,n.P=!0,Vy(n,t)}$.cb=function(){this.v!=null&&(this.v=null,ec(this),hh(this),pt(19))};function la(t){t.v!=null&&(Y.clearTimeout(t.v),t.v=null)}function dv(t,e){var n=null;if(t.g==e){la(t),dh(t),t.g=null;var r=2}else if(Ul(t.h,e))n=e.D,Zy(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=za(),nt(r,new Uy(r,n)),tc(t)}else uv(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(r==1&&PR(t,e)||r==2&&hh(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:lr(t,5);break;case 4:lr(t,10);break;case 3:lr(t,6);break;default:lr(t,2)}}}function fv(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function lr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=ct(t.kb,t);n||(n=new yr("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||aa(n,"https"),Xa(n)),CR(n.toString(),r)}else pt(2);t.G=0,t.l&&t.l.va(e),pv(t),cv(t)}$.kb=function(t){t?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function pv(t){if(t.G=0,t.la=[],t.l){const e=ev(t.h);(e.length!=0||t.i.length!=0)&&(Ef(t.la,e),Ef(t.la,t.i),t.h.i.length=0,zu(t.i),t.i.length=0),t.l.ua()}}function mv(t,e,n){var r=n instanceof yr?_n(n):new yr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),ca(r,r.m);else{var s=Y.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new yr(null,void 0);r&&aa(i,r),e&&(i.g=e),s&&ca(i,s),n&&(i.l=n),r=i}return n=t.D,e=t.za,n&&e&&Ne(r,n,e),Ne(r,"VER",t.ma),Gi(t,r),r}function gv(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ue(new Wi({jb:!0})):new Ue(t.ra),e.Ka(t.H),e}function yv(){}$=yv.prototype;$.xa=function(){};$.wa=function(){};$.va=function(){};$.ua=function(){};$.Ra=function(){};function ua(){if(is&&!(10<=Number(Gk)))throw Error("Environmental error: no available transport.")}ua.prototype.g=function(t,e){return new Rt(t,e)};function Rt(t,e){Ye.call(this),this.g=new av(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!sa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!sa(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ts(this)}rt(Rt,Ye);Rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;pt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=mv(t,null,t.V),tc(t)};Rt.prototype.close=function(){uh(this.g)};Rt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=eh(t),t=n);e.i.push(new ER(e.ab++,t)),e.G==3&&tc(e)};Rt.prototype.M=function(){this.g.l=null,delete this.j,uh(this.g),delete this.g,Rt.X.M.call(this)};function vv(t){sh.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}rt(vv,sh);function _v(){ih.call(this),this.status=1}rt(_v,ih);function Ts(t){this.g=t}rt(Ts,yv);Ts.prototype.xa=function(){nt(this.g,"a")};Ts.prototype.wa=function(t){nt(this.g,new vv(t))};Ts.prototype.va=function(t){nt(this.g,new _v)};Ts.prototype.ua=function(){nt(this.g,"b")};ua.prototype.createWebChannel=ua.prototype.g;Rt.prototype.send=Rt.prototype.u;Rt.prototype.open=Rt.prototype.m;Rt.prototype.close=Rt.prototype.close;Ga.NO_ERROR=0;Ga.TIMEOUT=8;Ga.HTTP_ERROR=6;Fy.COMPLETE="complete";$y.EventType=Hi;Hi.OPEN="a";Hi.CLOSE="b";Hi.ERROR="c";Hi.MESSAGE="d";Ye.prototype.listen=Ye.prototype.N;Ue.prototype.listenOnce=Ue.prototype.O;Ue.prototype.getLastError=Ue.prototype.Oa;Ue.prototype.getLastErrorCode=Ue.prototype.Ea;Ue.prototype.getStatus=Ue.prototype.aa;Ue.prototype.getResponseJson=Ue.prototype.Sa;Ue.prototype.getResponseText=Ue.prototype.fa;Ue.prototype.send=Ue.prototype.da;Ue.prototype.setWithCredentials=Ue.prototype.Ka;var DR=function(){return new ua},NR=function(){return za()},qc=Ga,xR=Fy,LR=kr,xf={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},MR=Wi,vo=$y,UR=Ue;const Lf="@firebase/firestore";/**
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
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
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
 */let Is="9.13.0";/**
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
 */const Ir=new Tu("@firebase/firestore");function Mf(){return Ir.logLevel}function j(t,...e){if(Ir.logLevel<=pe.DEBUG){const n=e.map(fh);Ir.debug(`Firestore (${Is}): ${t}`,...n)}}function wn(t,...e){if(Ir.logLevel<=pe.ERROR){const n=e.map(fh);Ir.error(`Firestore (${Is}): ${t}`,...n)}}function Fl(t,...e){if(Ir.logLevel<=pe.WARN){const n=e.map(fh);Ir.warn(`Firestore (${Is}): ${t}`,...n)}}function fh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${Is}) INTERNAL ASSERTION FAILED: `+t;throw wn(e),new Error(e)}function Oe(t,e){t||ee()}function re(t,e){return t}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends on{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class wv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class FR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class $R{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class BR{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new qn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Oe(typeof r.accessToken=="string"),new wv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string"),new st(e)}}class VR{constructor(e,n,r,s){this.h=e,this.l=n,this.m=r,this.g=s,this.type="FirstParty",this.user=st.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Oe(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class jR{constructor(e,n,r,s){this.h=e,this.l=n,this.m=r,this.g=s}getToken(){return Promise.resolve(new VR(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class HR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qR{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?s(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Oe(typeof n.token=="string"),this.A=n.token,new HR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function KR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class bv{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=KR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function os(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new He(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new He(0,0))}static max(){return new ae(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ti{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ti.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ti?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class xe extends Ti{construct(e,n,r){return new xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const WR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends Ti{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return WR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new G(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new G(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new G(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new G(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(xe.fromString(e))}static fromName(e){return new W(xe.fromString(e).popFirst(5))}static empty(){return new W(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new xe(e.slice()))}}function zR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ae.fromTimestamp(r===1e9?new He(n+1,0):new He(n,r));return new Gn(s,W.empty(),e)}function GR(t){return new Gn(t.readTime,t.key,-1)}class Gn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Gn(ae.min(),W.empty(),-1)}static max(){return new Gn(ae.max(),W.empty(),-1)}}function QR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */const JR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class XR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Qi(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==JR)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(s=>s?R.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new R((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new R((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Ji(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ph{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function Uf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ev(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */ph.at=-1;class We{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new We(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new We(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _o(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _o(this.root,e,this.comparator,!1)}getReverseIterator(){return new _o(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _o(this.root,e,this.comparator,!0)}}class _o{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:et.RED,this.left=s!=null?s:et.EMPTY,this.right=i!=null?i:et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new et(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(t,e,n,r,s){return this}insert(t,e,n){return new et(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class qe{constructor(e){this.comparator=e,this.data=new We(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ff(this.data.getIterator())}getIteratorFrom(e){return new Ff(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class Ff{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class xt{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new xt([])}unionWith(e){let n=new qe(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return os(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ht(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const YR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qn(t){if(Oe(!!t),typeof t=="string"){let e=0;const n=YR.exec(t);if(Oe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function as(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
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
 */function Tv(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Iv(t){const e=t.mapValue.fields.__previous_value__;return Tv(e)?Iv(e):e}function Ii(t){const e=Qn(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */class ZR{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Si{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Si("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Si&&e.projectId===this.projectId&&e.database===this.database}}function nc(t){return t==null}function ha(t){return t===0&&1/t==-1/0}function e1(t){return typeof t=="number"&&Number.isInteger(t)&&!ha(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const wo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Sr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Tv(t)?4:t1(t)?9007199254740991:10:ee()}function sn(t,e){if(t===e)return!0;const n=Sr(t);if(n!==Sr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ii(t).isEqual(Ii(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Qn(r.timestampValue),o=Qn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return as(r.bytesValue).isEqual(as(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Be(r.geoPointValue.latitude)===Be(s.geoPointValue.latitude)&&Be(r.geoPointValue.longitude)===Be(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Be(r.integerValue)===Be(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Be(r.doubleValue),o=Be(s.doubleValue);return i===o?ha(i)===ha(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return os(t.arrayValue.values||[],e.arrayValue.values||[],sn);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Uf(i)!==Uf(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!sn(i[a],o[a])))return!1;return!0}(t,e);default:return ee()}}function Ci(t,e){return(t.values||[]).find(n=>sn(n,e))!==void 0}function cs(t,e){if(t===e)return 0;const n=Sr(t),r=Sr(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Be(s.integerValue||s.doubleValue),a=Be(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return $f(t.timestampValue,e.timestampValue);case 4:return $f(Ii(t),Ii(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(s,i){const o=as(s),a=as(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ge(o[c],a[c]);if(l!==0)return l}return ge(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=ge(Be(s.latitude),Be(i.latitude));return o!==0?o:ge(Be(s.longitude),Be(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=cs(o[c],a[c]);if(l)return l}return ge(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===wo.mapValue&&i===wo.mapValue)return 0;if(s===wo.mapValue)return 1;if(i===wo.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ge(a[u],l[u]);if(h!==0)return h;const d=cs(o[a[u]],c[l[u]]);if(d!==0)return d}return ge(a.length,l.length)}(t.mapValue,e.mapValue);default:throw ee()}}function $f(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=Qn(t),r=Qn(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function Xr(t){return $l(t)}function $l(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Qn(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?as(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,W.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=$l(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${$l(r.fields[a])}`;return i+"}"}(t.mapValue):ee();var e,n}function Bl(t){return!!t&&"integerValue"in t}function mh(t){return!!t&&"arrayValue"in t}function Bf(t){return!!t&&"nullValue"in t}function Vf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Do(t){return!!t&&"mapValue"in t}function ti(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Rr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ti(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ti(t.arrayValue.values[n]);return e}return Object.assign({},t)}function t1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Do(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ti(n)}setAll(e){let n=it.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=ti(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Do(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Do(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Rr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new _t(ti(this.value))}}function Sv(t){const e=[];return Rr(t.fields,(n,r)=>{const s=new it([n]);if(Do(r)){const i=Sv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new xt(e)}/**
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
 */class tt{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new tt(e,0,ae.min(),ae.min(),_t.empty(),0)}static newFoundDocument(e,n,r){return new tt(e,1,n,ae.min(),r,0)}static newNoDocument(e,n){return new tt(e,2,n,ae.min(),_t.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,ae.min(),_t.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class n1{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function jf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new n1(t,e,n,r,s,i,o)}function gh(t){const e=re(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+Xr(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),nc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Xr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Xr(r)).join(",")),e.ht=n}return e.ht}function r1(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Xr(r.value)}`;var r}).join(", ")}]`),nc(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Xr(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Xr(n)).join(",")),`Target(${e})`}function yh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!h1(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!sn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qf(t.startAt,e.startAt)&&qf(t.endAt,e.endAt)}function Vl(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class bt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new s1(e,n,r):n==="array-contains"?new a1(e,r):n==="in"?new c1(e,r):n==="not-in"?new l1(e,r):n==="array-contains-any"?new u1(e,r):new bt(e,n,r)}static lt(e,n,r){return n==="in"?new i1(e,r):new o1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(cs(n,this.value)):n!==null&&Sr(this.value)===Sr(n)&&this.ft(cs(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class s1 extends bt{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.ft(n)}}class i1 extends bt{constructor(e,n){super(e,"in",n),this.keys=Cv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class o1 extends bt{constructor(e,n){super(e,"not-in",n),this.keys=Cv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Cv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class a1 extends bt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return mh(n)&&Ci(n.arrayValue,this.value)}}class c1 extends bt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ci(this.value.arrayValue,n)}}class l1 extends bt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ci(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ci(this.value.arrayValue,n)}}class u1 extends bt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!mh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ci(this.value.arrayValue,r))}}class da{constructor(e,n){this.position=e,this.inclusive=n}}class ni{constructor(e,n="asc"){this.field=e,this.dir=n}}function h1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Hf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=cs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function qf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!sn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class rc{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function d1(t,e,n,r,s,i,o,a){return new rc(t,e,n,r,s,i,o,a)}function Av(t){return new rc(t)}function Kf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function f1(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function p1(t){for(const e of t.filters)if(e.dt())return e.field;return null}function m1(t){return t.collectionGroup!==null}function Ai(t){const e=re(t);if(e._t===null){e._t=[];const n=p1(e),r=f1(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new ni(n)),e._t.push(new ni(it.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new ni(it.keyField(),i))}}}return e._t}function bn(t){const e=re(t);if(!e.wt)if(e.limitType==="F")e.wt=jf(e.path,e.collectionGroup,Ai(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ai(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new ni(i.field,o))}const r=e.endAt?new da(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new da(e.startAt.position,e.startAt.inclusive):null;e.wt=jf(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.wt}function jl(t,e,n){return new rc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sc(t,e){return yh(bn(t),bn(e))&&t.limitType===e.limitType}function kv(t){return`${gh(bn(t))}|lt:${t.limitType}`}function Hl(t){return`Query(target=${r1(bn(t))}; limitType=${t.limitType})`}function vh(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):W.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=Hf(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,Ai(n),r)||n.endAt&&!function(s,i,o){const a=Hf(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,Ai(n),r))}(t,e)}function g1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Rv(t){return(e,n)=>{let r=!1;for(const s of Ai(t)){const i=y1(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function y1(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?cs(a,c):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
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
 */function Ov(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ha(e)?"-0":e}}function Pv(t){return{integerValue:""+t}}function v1(t,e){return e1(e)?Pv(e):Ov(t,e)}/**
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
 */class ic{constructor(){this._=void 0}}function _1(t,e,n){return t instanceof fa?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof ki?Nv(t,e):t instanceof Ri?xv(t,e):function(r,s){const i=Dv(r,s),o=Wf(i)+Wf(r.yt);return Bl(i)&&Bl(r.yt)?Pv(o):Ov(r.It,o)}(t,e)}function w1(t,e,n){return t instanceof ki?Nv(t,e):t instanceof Ri?xv(t,e):n}function Dv(t,e){return t instanceof pa?Bl(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class fa extends ic{}class ki extends ic{constructor(e){super(),this.elements=e}}function Nv(t,e){const n=Lv(e);for(const r of t.elements)n.some(s=>sn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ri extends ic{constructor(e){super(),this.elements=e}}function xv(t,e){let n=Lv(e);for(const r of t.elements)n=n.filter(s=>!sn(s,r));return{arrayValue:{values:n}}}class pa extends ic{constructor(e,n){super(),this.It=e,this.yt=n}}function Wf(t){return Be(t.integerValue||t.doubleValue)}function Lv(t){return mh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function b1(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ki&&r instanceof ki||n instanceof Ri&&r instanceof Ri?os(n.elements,r.elements,sn):n instanceof pa&&r instanceof pa?sn(n.yt,r.yt):n instanceof fa&&r instanceof fa}(t.transform,e.transform)}class E1{constructor(e,n){this.version=e,this.transformResults=n}}class Ht{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ht}static exists(e){return new Ht(void 0,e)}static updateTime(e){return new Ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function No(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class oc{}function Mv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _h(t.key,Ht.none()):new Xi(t.key,t.data,Ht.none());{const n=t.data,r=_t.empty();let s=new qe(it.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new nr(t.key,r,new xt(s.toArray()),Ht.none())}}function T1(t,e,n){t instanceof Xi?function(r,s,i){const o=r.value.clone(),a=Gf(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof nr?function(r,s,i){if(!No(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=Gf(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Uv(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function ri(t,e,n,r){return t instanceof Xi?function(s,i,o,a){if(!No(s.precondition,i))return o;const c=s.value.clone(),l=Qf(s.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof nr?function(s,i,o,a){if(!No(s.precondition,i))return o;const c=Qf(s.fieldTransforms,a,i),l=i.data;return l.setAll(Uv(s)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(s,i,o){return No(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function I1(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Dv(r.transform,s||null);i!=null&&(n===null&&(n=_t.empty()),n.set(r.field,i))}return n||null}function zf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&os(n,r,(s,i)=>b1(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Xi extends oc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class nr extends oc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Uv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Gf(t,e,n){const r=new Map;Oe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,w1(o,a,n[s]))}return r}function Qf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,_1(i,o,e))}return r}class _h extends oc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class S1 extends oc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class C1{constructor(e){this.count=e}}/**
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
 */var $e,le;function A1(t){switch(t){default:return ee();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function Fv(t){if(t===void 0)return wn("GRPC error has no .code"),k.UNKNOWN;switch(t){case $e.OK:return k.OK;case $e.CANCELLED:return k.CANCELLED;case $e.UNKNOWN:return k.UNKNOWN;case $e.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case $e.INTERNAL:return k.INTERNAL;case $e.UNAVAILABLE:return k.UNAVAILABLE;case $e.UNAUTHENTICATED:return k.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case $e.NOT_FOUND:return k.NOT_FOUND;case $e.ALREADY_EXISTS:return k.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return k.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case $e.ABORTED:return k.ABORTED;case $e.OUT_OF_RANGE:return k.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return k.UNIMPLEMENTED;case $e.DATA_LOSS:return k.DATA_LOSS;default:return ee()}}(le=$e||($e={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ss{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Rr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ev(this.inner)}size(){return this.innerSize}}/**
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
 */const k1=new We(W.comparator);function En(){return k1}const $v=new We(W.comparator);function Hs(...t){let e=$v;for(const n of t)e=e.insert(n.key,n);return e}function Bv(t){let e=$v;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ur(){return si()}function Vv(){return si()}function si(){return new Ss(t=>t.toString(),(t,e)=>t.isEqual(e))}const R1=new We(W.comparator),O1=new qe(W.comparator);function ce(...t){let e=O1;for(const n of t)e=e.add(n);return e}const P1=new qe(ge);function jv(){return P1}/**
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
 */class ac{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Yi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ac(ae.min(),s,jv(),En(),ce())}}class Yi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Yi(r,n,ce(),ce(),ce())}}/**
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
 */class xo{constructor(e,n,r,s){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=s}}class Hv{constructor(e,n){this.targetId=e,this.At=n}}class qv{constructor(e,n,r=ht.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Jf{constructor(){this.Rt=0,this.bt=Yf(),this.Pt=ht.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=ce(),n=ce(),r=ce();return this.bt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ee()}}),new Yi(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=Yf()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class D1{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=En(),this.qt=Xf(),this.Kt=new qe(ge)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,s)=>{this.Ht(s)&&n(s)})}Yt(e){const n=e.targetId,r=e.At.count,s=this.Xt(n);if(s){const i=s.target;if(Vl(i))if(r===0){const o=new W(i.path);this.jt(n,o,tt.newNoDocument(o,ae.min()))}else Oe(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Vl(a.target)){const c=new W(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,tt.newNoDocument(c,e))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let r=ce();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const s=new ac(e,n,this.Kt,this.Ut,r);return this.Ut=En(),this.qt=Xf(),this.Kt=new qe(ge),s}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const s=this.zt(e);this.ee(e,n)?s.kt(n,1):s.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new Jf,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new qe(ge),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Jf),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Xf(){return new We(W.comparator)}function Yf(){return new We(W.comparator)}/**
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
 */const N1=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),x1=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class L1{constructor(e,n){this.databaseId=e,this.gt=n}}function ma(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Kv(t,e){return t.gt?e.toBase64():e.toUint8Array()}function M1(t,e){return ma(t,e.toTimestamp())}function fn(t){return Oe(!!t),ae.fromTimestamp(function(e){const n=Qn(e);return new He(n.seconds,n.nanos)}(t))}function wh(t,e){return function(n){return new xe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Wv(t){const e=xe.fromString(t);return Oe(Qv(e)),e}function ql(t,e){return wh(t.databaseId,e.path)}function Kc(t,e){const n=Wv(e);if(n.get(1)!==t.databaseId.projectId)throw new G(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(zv(n))}function Kl(t,e){return wh(t.databaseId,e)}function U1(t){const e=Wv(t);return e.length===4?xe.emptyPath():zv(e)}function Wl(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zv(t){return Oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Zf(t,e,n){return{name:ql(t,e),fields:n.value.mapValue.fields}}function F1(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.gt?(Oe(l===void 0||typeof l=="string"),ht.fromBase64String(l||"")):(Oe(l===void 0||l instanceof Uint8Array),ht.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?k.UNKNOWN:Fv(c.code);return new G(l,c.message||"")}(o);n=new qv(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Kc(t,r.document.name),i=fn(r.document.updateTime),o=new _t({mapValue:{fields:r.document.fields}}),a=tt.newFoundDocument(s,i,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new xo(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Kc(t,r.document),i=r.readTime?fn(r.readTime):ae.min(),o=tt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new xo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Kc(t,r.document),i=r.removedTargetIds||[];n=new xo([],i,s,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new C1(s),o=r.targetId;n=new Hv(o,i)}}return n}function $1(t,e){let n;if(e instanceof Xi)n={update:Zf(t,e.key,e.value)};else if(e instanceof _h)n={delete:ql(t,e.key)};else if(e instanceof nr)n={update:Zf(t,e.key,e.data),updateMask:Q1(e.fieldMask)};else{if(!(e instanceof S1))return ee();n={verify:ql(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof fa)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ki)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ri)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof pa)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:M1(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee()}(t,e.precondition)),n}function B1(t,e){return t&&t.length>0?(Oe(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?fn(r.updateTime):fn(s);return i.isEqual(ae.min())&&(i=fn(s)),new E1(i,r.transformResults||[])}(n,e))):[]}function V1(t,e){return{documents:[Kl(t,e.path)]}}function j1(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Kl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Kl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Vf(h.value))return{unaryFilter:{field:Mr(h.field),op:"IS_NAN"}};if(Bf(h.value))return{unaryFilter:{field:Mr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Vf(h.value))return{unaryFilter:{field:Mr(h.field),op:"IS_NOT_NAN"}};if(Bf(h.value))return{unaryFilter:{field:Mr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mr(h.field),op:W1(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Mr(u.field),direction:K1(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.gt||nc(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function H1(t){let e=U1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Oe(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Gv(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new ni(qr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,nc(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new da(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new da(d,h)}(n.endAt)),d1(e,s,o,i,a,"F",c,l)}function q1(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ee()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Gv(t){return t?t.unaryFilter!==void 0?[G1(t)]:t.fieldFilter!==void 0?[z1(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Gv(e)).reduce((e,n)=>e.concat(n)):ee():[]}function K1(t){return N1[t]}function W1(t){return x1[t]}function Mr(t){return{fieldPath:t.canonicalString()}}function qr(t){return it.fromServerFormat(t.fieldPath)}function z1(t){return bt.create(qr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(t.fieldFilter.op),t.fieldFilter.value)}function G1(t){switch(t.unaryFilter.op){case"IS_NAN":const e=qr(t.unaryFilter.field);return bt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=qr(t.unaryFilter.field);return bt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=qr(t.unaryFilter.field);return bt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=qr(t.unaryFilter.field);return bt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}function Q1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Qv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class J1{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&T1(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ri(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ri(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Vv();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Mv(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&os(this.mutations,e.mutations,(n,r)=>zf(n,r))&&os(this.baseMutations,e.baseMutations,(n,r)=>zf(n,r))}}class bh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Oe(e.mutations.length===r.length);let s=R1;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new bh(e,n,r,s)}}/**
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
 */class X1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class vr{constructor(e,n,r,s,i=ae.min(),o=ae.min(),a=ht.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Y1{constructor(e){this.re=e}}function Z1(t){const e=H1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?jl(e,e.limit,"L"):e}/**
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
 */class eO{constructor(){this.Ye=new tO}addToCollectionParentIndex(e,n){return this.Ye.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(Gn.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(Gn.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class tO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new qe(xe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new qe(xe.comparator)).toArray()}}/**
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
 */class ls{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new ls(0)}static vn(){return new ls(-1)}}/**
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
 */class nO{constructor(){this.changes=new Ss(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class rO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class sO{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.getBaseDocument(e,n,r))).next(s=>(r!==null&&ri(r.mutation,s,xt.empty(),He.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const s=ur();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Hs();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ur();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=En();const o=si(),a=si();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof nr)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),ri(u.mutation,l,u.mutation.getFieldMask(),He.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new rO(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=si();let s=new We((o,a)=>o-a),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||xt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||ce()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Vv();u.forEach(d=>{if(!i.has(d)){const m=Mv(n.get(d),r.get(d));m!==null&&h.set(d,m),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return W.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):m1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):R.resolve(ur());let a=-1,c=i;return o.next(l=>R.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?R.resolve():this.getBaseDocument(e,u,h).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ce())).next(u=>({batchId:a,changes:Bv(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let s=Hs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=Hs();return this.indexManager.getCollectionParents(e,s).next(o=>R.forEach(o,a=>{const c=function(l,u){return new rc(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,tt.newInvalidDocument(l)))});let o=Hs();return s.forEach((a,c)=>{const l=i.get(a);l!==void 0&&ri(l.mutation,c,xt.empty(),He.now()),vh(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):R.resolve(tt.newInvalidDocument(n))}}/**
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
 */class iO{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return R.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:fn(r.createTime)}),R.resolve()}getNamedQuery(e,n){return R.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:Z1(r.bundledQuery),readTime:fn(r.readTime)}}(n)),R.resolve()}}/**
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
 */class oO{constructor(){this.overlays=new We(W.comparator),this.es=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ur();return R.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ue(e,n,i)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.es.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const s=ur(),i=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return R.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new We((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=ur(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ur(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return R.resolve(a)}ue(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.es.get(s.largestBatchId).delete(r.key);this.es.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new X1(n,r));let i=this.es.get(n);i===void 0&&(i=ce(),this.es.set(n,i)),this.es.set(n,i.add(r.key))}}/**
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
 */class Eh{constructor(){this.ns=new qe(Qe.ss),this.rs=new qe(Qe.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Qe(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Qe(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new W(new xe([])),r=new Qe(n,e),s=new Qe(n,e+1),i=[];return this.rs.forEachInRange([r,s],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new W(new xe([])),r=new Qe(n,e),s=new Qe(n,e+1);let i=ce();return this.rs.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Qe(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Qe{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return W.comparator(e.key,n.key)||ge(e._s,n._s)}static os(e,n){return ge(e._s,n._s)||W.comparator(e.key,n.key)}}/**
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
 */class aO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new qe(Qe.ss)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new J1(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.gs=this.gs.add(new Qe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ps(r),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Qe(n,0),s=new Qe(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([r,s],o=>{const a=this.ys(o._s);i.push(a)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe(ge);return n.forEach(s=>{const i=new Qe(s,0),o=new Qe(s,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{r=r.add(a._s)})}),R.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;W.isDocumentKey(i)||(i=i.child(""));const o=new Qe(new W(i),0);let a=new qe(ge);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c._s)),!0)},o),R.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const s=this.ys(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Oe(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return R.forEach(n.mutations,s=>{const i=new Qe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Qe(n,0),s=this.gs.firstAfterOrEqual(r);return R.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class cO{constructor(e){this.Es=e,this.docs=new We(W.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let r=En();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():tt.newInvalidDocument(s))}),R.resolve(r)}getAllFromCollection(e,n,r){let s=En();const i=new W(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||QR(GR(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,n,r,s){ee()}As(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new lO(this)}getSize(e){return R.resolve(this.size)}}class lO extends nO{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Yn.addEntry(e,s)):this.Yn.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class uO{constructor(e){this.persistence=e,this.Rs=new Ss(n=>gh(n),yh),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Eh,this.targetCount=0,this.vs=ls.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,s)=>n(s)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),R.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new ls(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Dn(n),R.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),R.waitFor(i).next(()=>s)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.Ps.containsKey(n))}}/**
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
 */class hO{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new ph(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new uO(this),this.indexManager=new eO,this.remoteDocumentCache=function(r){return new cO(r)}(r=>this.referenceDelegate.xs(r)),this.It=new Y1(n),this.Ns=new iO(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new oO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new aO(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const s=new dO(this.Ss.next());return this.referenceDelegate.ks(),r(s).next(i=>this.referenceDelegate.Os(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ms(e,n){return R.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class dO extends XR{constructor(e){super(),this.currentSequenceNumber=e}}class Th{constructor(e){this.persistence=e,this.Fs=new Eh,this.$s=null}static Bs(e){return new Th(e)}get Ls(){if(this.$s)return this.$s;throw ee()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),R.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(s=>this.Ls.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Ls.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Ls,r=>{const s=W.fromPath(r);return this.Us(e,s).next(i=>{i||n.removeEntry(s,ae.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return R.or([()=>R.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class Ih{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=s}static Ci(e,n){let r=ce(),s=ce();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ih(e,n.fromCache,r,s)}}/**
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
 */class fO{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.ki(e,n).next(i=>i||this.Oi(e,n,s,r)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Kf(n))return R.resolve(null);let r=bn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=jl(n,null,"F"),r=bn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ce(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,jl(n,null,"F")):this.Bi(e,l,n,c)}))})))}Oi(e,n,r,s){return Kf(n)||s.isEqual(ae.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,r,s)?this.Mi(e,n):(Mf()<=pe.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Hl(n)),this.Bi(e,o,n,zR(s,-1)))})}Fi(e,n){let r=new qe(Rv(e));return n.forEach((s,i)=>{vh(e,i)&&(r=r.add(i))}),r}$i(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Mi(e,n){return Mf()<=pe.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Hl(n)),this.Ni.getDocumentsMatchingQuery(e,n,Gn.min())}Bi(e,n,r,s){return this.Ni.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class pO{constructor(e,n,r,s){this.persistence=e,this.Li=n,this.It=s,this.Ui=new We(ge),this.qi=new Ss(i=>gh(i),yh),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sO(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function mO(t,e,n,r){return new pO(t,e,n,r)}async function Jv(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ce();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function gO(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=R.resolve();return h.forEach(m=>{d=d.next(()=>l.getEntry(a,m)).next(f=>{const v=c.docVersions.get(m);Oe(v!==null),f.version.compareTo(v)<0&&(u.applyToRemoteDocument(f,c),f.isValidDocument()&&(f.setReadTime(c.commitVersion),l.addEntry(f)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ce();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Xv(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function yO(t,e){const n=re(t),r=e.snapshotVersion;let s=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.Ui;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,h)));let m=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(ht.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,r)),s=s.insert(h,m),function(f,v,b){return f.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-f.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,m,u)&&a.push(n.Cs.updateTargetData(i,m))});let c=En(),l=ce();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(vO(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!r.isEqual(ae.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return R.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ui=s,i))}function vO(t,e,n){let r=ce(),s=ce();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=En();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(ae.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:s}})}function _O(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function wO(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Cs.getTargetData(r,e).next(i=>i?(s=i,R.resolve(s)):n.Cs.allocateTargetId(r).next(o=>(s=new vr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ui.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function zl(t,e,n){const r=re(t),s=r.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ji(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(s.target)}function ep(t,e,n){const r=re(t);let s=ae.min(),i=ce();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=re(a),h=u.qi.get(l);return h!==void 0?R.resolve(u.Ui.get(h)):u.Cs.getTargetData(c,l)}(r,o,bn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?s:ae.min(),n?i:ce())).next(a=>(bO(r,g1(e),a),{documents:a,Hi:i})))}function bO(t,e,n){let r=t.Ki.get(e)||ae.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ki.set(e,r)}class tp{constructor(){this.activeTargetIds=jv()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class EO{constructor(){this.Lr=new tp,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new tp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class TO{qr(e){}shutdown(){}}/**
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
 */class np{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const IO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class SO{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class CO extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,s,i){const o=this.ho(e,n);j("RestConnection","Sending: ",o,r);const a={};return this.lo(a,s,i),this.fo(e,o,a,r).then(c=>(j("RestConnection","Received: ",c),c),c=>{throw Fl("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}_o(e,n,r,s,i,o){return this.ao(e,n,r,s,i)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Is,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}ho(e,n){const r=IO[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,s){return new Promise((i,o)=>{const a=new UR;a.setWithCredentials(!0),a.listenOnce(xR.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case qc.NO_ERROR:const l=a.getResponseJson();j("Connection","XHR received:",JSON.stringify(l)),i(l);break;case qc.TIMEOUT:j("Connection",'RPC "'+e+'" timed out'),o(new G(k.DEADLINE_EXCEEDED,"Request time out"));break;case qc.HTTP_ERROR:const u=a.getStatus();if(j("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(m){const f=m.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(f)>=0?f:k.UNKNOWN}(h.status);o(new G(d,h.message))}else o(new G(k.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new G(k.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{j("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}wo(e,n,r){const s=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=DR(),o=NR(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new MR({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const c=s.join("");j("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new SO({Hr:f=>{h?j("Connection","Not sending because WebChannel is closed:",f):(u||(j("Connection","Opening WebChannel transport."),l.open(),u=!0),j("Connection","WebChannel sending:",f),l.send(f))},Jr:()=>l.close()}),m=(f,v,b)=>{f.listen(v,y=>{try{b(y)}catch(_){setTimeout(()=>{throw _},0)}})};return m(l,vo.EventType.OPEN,()=>{h||j("Connection","WebChannel transport opened.")}),m(l,vo.EventType.CLOSE,()=>{h||(h=!0,j("Connection","WebChannel transport closed"),d.io())}),m(l,vo.EventType.ERROR,f=>{h||(h=!0,Fl("Connection","WebChannel transport errored:",f),d.io(new G(k.UNAVAILABLE,"The operation could not be completed")))}),m(l,vo.EventType.MESSAGE,f=>{var v;if(!h){const b=f.data[0];Oe(!!b);const y=b,_=y.error||((v=y[0])===null||v===void 0?void 0:v.error);if(_){j("Connection","WebChannel received error:",_);const A=_.status;let N=function(X){const J=$e[X];if(J!==void 0)return Fv(J)}(A),H=_.message;N===void 0&&(N=k.INTERNAL,H="Unknown error status: "+A+" with message "+_.message),h=!0,d.io(new G(N,H)),l.close()}else j("Connection","WebChannel received:",b),d.ro(b)}}),m(o,LR.STAT_EVENT,f=>{f.stat===xf.PROXY?j("Connection","Detected buffering proxy"):f.stat===xf.NOPROXY&&j("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Wc(){return typeof document<"u"?document:null}/**
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
 */function cc(t){return new L1(t,!0)}class Yv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=s,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),s=Math.max(0,n-r);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class Zv{constructor(e,n,r,s,i,o,a,c){this.Hs=e,this.vo=r,this.Vo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Yv(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(wn(n.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.So===n&&this.Go(r,s)},r=>{e(()=>{const s=new G(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(s)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(s=>{r(()=>this.Qo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AO extends Zv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.It=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=F1(this.It,e),r=function(s){if(!("targetChange"in s))return ae.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?ae.min():i.readTime?fn(i.readTime):ae.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Wl(this.It),n.addTarget=function(s,i){let o;const a=i.target;return o=Vl(a)?{documents:V1(s,a)}:{query:j1(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Kv(s,i.resumeToken):i.snapshotVersion.compareTo(ae.min())>0&&(o.readTime=ma(s,i.snapshotVersion.toTimestamp())),o}(this.It,e);const r=q1(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Wl(this.It),n.removeTarget=e,this.Bo(n)}}class kO extends Zv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=B1(e.writeResults,e.commitTime),r=fn(e.commitTime);return this.listener.Zo(r,n)}return Oe(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Wl(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>$1(this.It,r))};this.Bo(n)}}/**
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
 */class RO extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.It=s,this.nu=!1}su(){if(this.nu)throw new G(k.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.ao(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(k.UNKNOWN,s.toString())})}_o(e,n,r,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(k.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class OO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(wn(n),this.ou=!1):j("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class PO{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{r.enqueueAndForget(async()=>{Or(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=re(a);c._u.add(4),await Zi(c),c.gu.set("Unknown"),c._u.delete(4),await lc(c)}(this))})}),this.gu=new OO(r,s)}}async function lc(t){if(Or(t))for(const e of t.wu)await e(!0)}async function Zi(t){for(const e of t.wu)await e(!1)}function e_(t,e){const n=re(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Ah(n)?Ch(n):Cs(n).ko()&&Sh(n,e))}function t_(t,e){const n=re(t),r=Cs(n);n.du.delete(e),r.ko()&&n_(n,e),n.du.size===0&&(r.ko()?r.Fo():Or(n)&&n.gu.set("Unknown"))}function Sh(t,e){t.yu.Mt(e.targetId),Cs(t).zo(e)}function n_(t,e){t.yu.Mt(e),Cs(t).Ho(e)}function Ch(t){t.yu=new D1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),Cs(t).start(),t.gu.uu()}function Ah(t){return Or(t)&&!Cs(t).No()&&t.du.size>0}function Or(t){return re(t)._u.size===0}function r_(t){t.yu=void 0}async function DO(t){t.du.forEach((e,n)=>{Sh(t,e)})}async function NO(t,e){r_(t),Ah(t)?(t.gu.hu(e),Ch(t)):t.gu.set("Unknown")}async function xO(t,e,n){if(t.gu.set("Online"),e instanceof qv&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ga(t,r)}else if(e instanceof xo?t.yu.Gt(e):e instanceof Hv?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(ae.min()))try{const r=await Xv(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.yu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.du.get(c);l&&s.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.du.get(a);if(!c)return;s.du.set(a,c.withResumeToken(ht.EMPTY_BYTE_STRING,c.snapshotVersion)),n_(s,a);const l=new vr(c.target,a,1,c.sequenceNumber);Sh(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await ga(t,r)}}async function ga(t,e,n){if(!Ji(e))throw e;t._u.add(1),await Zi(t),t.gu.set("Offline"),n||(n=()=>Xv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await lc(t)})}function s_(t,e){return e().catch(n=>ga(t,n,e))}async function uc(t){const e=re(t),n=Jn(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;LO(e);)try{const s=await _O(e.localStore,r);if(s===null){e.fu.length===0&&n.Fo();break}r=s.batchId,MO(e,s)}catch(s){await ga(e,s)}i_(e)&&o_(e)}function LO(t){return Or(t)&&t.fu.length<10}function MO(t,e){t.fu.push(e);const n=Jn(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function i_(t){return Or(t)&&!Jn(t).No()&&t.fu.length>0}function o_(t){Jn(t).start()}async function UO(t){Jn(t).eu()}async function FO(t){const e=Jn(t);for(const n of t.fu)e.Xo(n.mutations)}async function $O(t,e,n){const r=t.fu.shift(),s=bh.from(r,e,n);await s_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await uc(t)}async function BO(t,e){e&&Jn(t).Yo&&await async function(n,r){if(s=r.code,A1(s)&&s!==k.ABORTED){const i=n.fu.shift();Jn(n).Mo(),await s_(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await uc(n)}var s}(t,e),i_(t)&&o_(t)}async function rp(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=Or(n);n._u.add(3),await Zi(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await lc(n)}async function VO(t,e){const n=re(t);e?(n._u.delete(2),await lc(n)):e||(n._u.add(2),await Zi(n),n.gu.set("Unknown"))}function Cs(t){return t.pu||(t.pu=function(e,n,r){const s=re(e);return s.su(),new AO(n,s.connection,s.authCredentials,s.appCheckCredentials,s.It,r)}(t.datastore,t.asyncQueue,{Yr:DO.bind(null,t),Zr:NO.bind(null,t),Wo:xO.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Ah(t)?Ch(t):t.gu.set("Unknown")):(await t.pu.stop(),r_(t))})),t.pu}function Jn(t){return t.Iu||(t.Iu=function(e,n,r){const s=re(e);return s.su(),new kO(n,s.connection,s.authCredentials,s.appCheckCredentials,s.It,r)}(t.datastore,t.asyncQueue,{Yr:UO.bind(null,t),Zr:BO.bind(null,t),tu:FO.bind(null,t),Zo:$O.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await uc(t)):(await t.Iu.stop(),t.fu.length>0&&(j("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class kh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new kh(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rh(t,e){if(wn("AsyncQueue",`${e}: ${t}`),Ji(t))return new G(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Yr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Hs(),this.sortedSet=new We(this.comparator)}static emptySet(e){return new Yr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Yr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Yr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class sp{constructor(){this.Tu=new We(W.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):ee():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class us{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new us(e,n,Yr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class jO{constructor(){this.Au=void 0,this.listeners=[]}}class HO{constructor(){this.queries=new Ss(e=>kv(e),sc),this.onlineState="Unknown",this.Ru=new Set}}async function qO(t,e){const n=re(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new jO),s)try{i.Au=await n.onListen(r)}catch(o){const a=Rh(o,`Initialization of query '${Hl(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Oh(n)}async function KO(t,e){const n=re(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function WO(t,e){const n=re(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(s)&&(r=!0);o.Au=s}}r&&Oh(n)}function zO(t,e,n){const r=re(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Oh(t){t.Ru.forEach(e=>{e.next()})}class GO{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new us(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=us.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class a_{constructor(e){this.key=e}}class c_{constructor(e){this.key=e}}class QO{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ce(),this.mutatedKeys=ce(),this.Gu=Rv(e),this.Qu=new Yr(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new sp,s=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),m=vh(this.query,h)?h:null,f=!!d&&this.mutatedKeys.has(d.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let b=!1;d&&m?d.data.isEqual(m.data)?f!==v&&(r.track({type:3,doc:m}),b=!0):this.Hu(d,m)||(r.track({type:2,doc:m}),b=!0,(c&&this.Gu(m,c)>0||l&&this.Gu(m,l)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),b=!0):d&&!m&&(r.track({type:1,doc:d}),b=!0,(c||l)&&(a=!0)),b&&(m?(o=o.add(m),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Qu:o,zu:r,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((l,u)=>function(h,d){const m=f=>{switch(f){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return m(h)-m(d)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new us(this.query,e.Qu,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new sp,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ce(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new c_(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new a_(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=ce();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return us.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class JO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class XO{constructor(e){this.key=e,this.nc=!1}}class YO{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Ss(a=>kv(a),sc),this.rc=new Map,this.oc=new Set,this.uc=new We(W.comparator),this.cc=new Map,this.ac=new Eh,this.hc={},this.lc=new Map,this.fc=ls.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function ZO(t,e){const n=lP(t);let r,s;const i=n.ic.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ec();else{const o=await wO(n.localStore,bn(e));n.isPrimaryClient&&e_(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await eP(n,e,r,a==="current",o.resumeToken)}return s}async function eP(t,e,n,r,s){t._c=(h,d,m)=>async function(f,v,b,y){let _=v.view.Wu(b);_.$i&&(_=await ep(f.localStore,v.query,!1).then(({documents:H})=>v.view.Wu(H,_)));const A=y&&y.targetChanges.get(v.targetId),N=v.view.applyChanges(_,f.isPrimaryClient,A);return op(f,v.targetId,N.Xu),N.snapshot}(t,h,d,m);const i=await ep(t.localStore,e,!0),o=new QO(e,i.Hi),a=o.Wu(i.documents),c=Yi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);op(t,n,l.Xu);const u=new JO(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function tP(t,e){const n=re(t),r=n.ic.get(e),s=n.rc.get(r.targetId);if(s.length>1)return n.rc.set(r.targetId,s.filter(i=>!sc(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await zl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),t_(n.remoteStore,r.targetId),Gl(n,r.targetId)}).catch(Qi)):(Gl(n,r.targetId),await zl(n.localStore,r.targetId,!0))}async function nP(t,e,n){const r=uP(t);try{const s=await function(i,o){const a=re(i),c=He.now(),l=o.reduce((d,m)=>d.add(m.key),ce());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=En(),f=ce();return a.Gi.getEntries(d,l).next(v=>{m=v,m.forEach((b,y)=>{y.isValidDocument()||(f=f.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(v=>{u=v;const b=[];for(const y of o){const _=I1(y,u.get(y.key).overlayedDocument);_!=null&&b.push(new nr(y.key,_,Sv(_.value.mapValue),Ht.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,b,o)}).next(v=>{h=v;const b=v.applyToLocalDocumentSet(u,f);return a.documentOverlayCache.saveOverlays(d,v.batchId,b)})}).then(()=>({batchId:h.batchId,changes:Bv(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new We(ge)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(r,s.batchId,n),await eo(r,s.changes),await uc(r.remoteStore)}catch(s){const i=Rh(s,"Failed to persist write");n.reject(i)}}async function l_(t,e){const n=re(t);try{const r=await yO(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.cc.get(i);o&&(Oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.nc=!0:s.modifiedDocuments.size>0?Oe(o.nc):s.removedDocuments.size>0&&(Oe(o.nc),o.nc=!1))}),await eo(n,r,e)}catch(r){await Qi(r)}}function ip(t,e,n){const r=re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=re(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&Oh(a)}(r.eventManager,e),s.length&&r.sc.Wo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function rP(t,e,n){const r=re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.cc.get(e),i=s&&s.key;if(i){let o=new We(W.comparator);o=o.insert(i,tt.newNoDocument(i,ae.min()));const a=ce().add(i),c=new ac(ae.min(),new Map,new qe(ge),o,a);await l_(r,c),r.uc=r.uc.remove(i),r.cc.delete(e),Ph(r)}else await zl(r.localStore,e,!1).then(()=>Gl(r,e,n)).catch(Qi)}async function sP(t,e){const n=re(t),r=e.batch.batchId;try{const s=await gO(n.localStore,e);h_(n,r,null),u_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await eo(n,s)}catch(s){await Qi(s)}}async function iP(t,e,n){const r=re(t);try{const s=await function(i,o){const a=re(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Oe(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(r.localStore,e);h_(r,e,n),u_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await eo(r,s)}catch(s){await Qi(s)}}function u_(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function h_(t,e,n){const r=re(t);let s=r.hc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.hc[r.currentUser.toKey()]=s}}function Gl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||d_(t,r)})}function d_(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(t_(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Ph(t))}function op(t,e,n){for(const r of n)r instanceof a_?(t.ac.addReference(r.key,e),oP(t,r)):r instanceof c_?(j("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||d_(t,r.key)):ee()}function oP(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(j("SyncEngine","New document in limbo: "+n),t.oc.add(r),Ph(t))}function Ph(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new W(xe.fromString(e)),r=t.fc.next();t.cc.set(r,new XO(n)),t.uc=t.uc.insert(n,r),e_(t.remoteStore,new vr(bn(Av(n.path)),r,2,ph.at))}}async function eo(t,e,n){const r=re(t),s=[],i=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,c)=>{o.push(r._c(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Ih.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.sc.Wo(s),await async function(a,c){const l=re(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>R.forEach(c,h=>R.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>R.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Ji(u))throw u;j("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ui.get(h),m=d.snapshotVersion,f=d.withLastLimboFreeSnapshotVersion(m);l.Ui=l.Ui.insert(h,f)}}}(r.localStore,i))}async function aP(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await Jv(n.localStore,e);n.currentUser=e,function(s,i){s.lc.forEach(o=>{o.forEach(a=>{a.reject(new G(k.CANCELLED,i))})}),s.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await eo(n,r.ji)}}function cP(t,e){const n=re(t),r=n.cc.get(e);if(r&&r.nc)return ce().add(r.key);{let s=ce();const i=n.rc.get(e);if(!i)return s;for(const o of i){const a=n.ic.get(o);s=s.unionWith(a.view.ju)}return s}}function lP(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=l_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rP.bind(null,e),e.sc.Wo=WO.bind(null,e.eventManager),e.sc.wc=zO.bind(null,e.eventManager),e}function uP(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iP.bind(null,e),e}class hP{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=cc(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return mO(this.persistence,new fO,e.initialUser,this.It)}yc(e){return new hO(Th.Bs,this.It)}gc(e){return new EO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class dP{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ip(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=aP.bind(null,this.syncEngine),await VO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new HO}createDatastore(e){const n=cc(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new CO(s));var s;return function(i,o,a,c){return new RO(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>ip(this.syncEngine,a,0),o=np.C()?new np:new TO,new PO(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new YO(r,s,i,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=re(e);j("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Zi(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function f_(t,e,n){if(!n)throw new G(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fP(t,e,n,r){if(e===!0&&r===!0)throw new G(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ap(t){if(!W.isDocumentKey(t))throw new G(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cp(t){if(W.isDocumentKey(t))throw new G(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Dh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function Cr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Dh(t);throw new G(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const lp=new Map;class up{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new G(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,fP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class hc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new up({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new G(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new G(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new up(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new FR;switch(n.type){case"gapi":const r=n.client;return new jR(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new G(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=lp.get(e);n&&(j("ComponentProvider","Removing Datastore"),lp.delete(e),n.terminate())}(this),Promise.resolve()}}function pP(t,e,n,r={}){var s;const i=(t=Cr(t,hc))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Fl("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=st.MOCK_USER;else{o=Vm(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new G(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new st(c)}t._authCredentials=new $R(new wv(o,a))}}/**
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
 */class Lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lt(this.firestore,e,this._key)}}class dc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new dc(this.firestore,e,this._query)}}class Kn extends dc{constructor(e,n,r){super(e,n,Av(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lt(this.firestore,null,new W(e))}withConverter(e){return new Kn(this.firestore,e,this._path)}}function p_(t,e,...n){if(t=Me(t),f_("collection","path",e),t instanceof hc){const r=xe.fromString(e,...n);return cp(r),new Kn(t,null,r)}{if(!(t instanceof Lt||t instanceof Kn))throw new G(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return cp(r),new Kn(t.firestore,null,r)}}function qs(t,e,...n){if(t=Me(t),arguments.length===1&&(e=bv.R()),f_("doc","path",e),t instanceof hc){const r=xe.fromString(e,...n);return ap(r),new Lt(t,null,new W(r))}{if(!(t instanceof Lt||t instanceof Kn))throw new G(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return ap(r),new Lt(t.firestore,t instanceof Kn?t.converter:null,new W(r))}}/**
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
 */class mP{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):wn("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class gP{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=st.UNAUTHENTICATED,this.clientId=bv.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{j("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(j("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new G(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Rh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function yP(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Jv(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function vP(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _P(t);j("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>rp(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>rp(e.remoteStore,i)),t.onlineComponents=e}async function _P(t){return t.offlineComponents||(j("FirestoreClient","Using default OfflineComponentProvider"),await yP(t,new hP)),t.offlineComponents}async function m_(t){return t.onlineComponents||(j("FirestoreClient","Using default OnlineComponentProvider"),await vP(t,new dP)),t.onlineComponents}function wP(t){return m_(t).then(e=>e.syncEngine)}async function bP(t){const e=await m_(t),n=e.eventManager;return n.onListen=ZO.bind(null,e.syncEngine),n.onUnlisten=tP.bind(null,e.syncEngine),n}function EP(t,e,n={}){const r=new qn;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new mP({next:h=>{i.enqueueAndForget(()=>KO(s,u)),h.fromCache&&a.source==="server"?c.reject(new G(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new GO(o,l,{includeMetadataChanges:!0,Nu:!0});return qO(s,u)}(await bP(t),t.asyncQueue,e,n,r)),r.promise}class TP{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Yv(this,"async_queue_retry"),this.Wc=()=>{const n=Wc();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Wc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Wc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new qn;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Ji(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw wn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const s=kh.createAndSchedule(this,e,n,r,i=>this.Yc(i));return this.qc.push(s),s}zc(){this.Kc&&ee()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class to extends hc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new TP,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||y_(this),this._firestoreClient.terminate()}}function IP(t,e){const n=typeof t=="object"?t:Su(),r=typeof t=="string"?t:e||"(default)",s=Na(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=$m("firestore");i&&pP(s,...i)}return s}function g_(t){return t._firestoreClient||y_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function y_(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new ZR(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new gP(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class hs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hs(ht.fromBase64String(e))}catch(n){throw new G(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hs(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class fc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Nh{constructor(e){this._methodName=e}}/**
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
 */class xh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
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
 */const SP=/^__.*__$/;class CP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new nr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Xi(e,this.data,n,this.fieldTransforms)}}class v_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new nr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function __(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class Lh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=s,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Lh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ia({path:r,oa:!1});return s.ua(e),s}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ia({path:r,oa:!1});return s.na(),s}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return ya(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(__(this.sa)&&SP.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class AP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||cc(e)}da(e,n,r,s=!1){return new Lh({sa:e,methodName:n,fa:r,path:it.emptyPath(),oa:!1,la:s},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function w_(t){const e=t._freezeSettings(),n=cc(t._databaseId);return new AP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function kP(t,e,n,r,s,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,s);Mh("Data must be an object, but it was:",o,r);const a=b_(r,o);let c,l;if(i.merge)c=new xt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Ql(e,h,n);if(!o.contains(d))throw new G(k.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);T_(u,d)||u.push(d)}c=new xt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new CP(new _t(a),c,l)}class pc extends Nh{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pc}}function RP(t,e,n,r){const s=t.da(1,e,n);Mh("Data must be an object, but it was:",s,r);const i=[],o=_t.empty();Rr(r,(c,l)=>{const u=Uh(e,c,n);l=Me(l);const h=s.ca(u);if(l instanceof pc)i.push(u);else{const d=mc(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new xt(i);return new v_(o,a,s.fieldTransforms)}function OP(t,e,n,r,s,i){const o=t.da(1,e,n),a=[Ql(e,r,n)],c=[s];if(i.length%2!=0)throw new G(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Ql(e,i[d])),c.push(i[d+1]);const l=[],u=_t.empty();for(let d=a.length-1;d>=0;--d)if(!T_(l,a[d])){const m=a[d];let f=c[d];f=Me(f);const v=o.ca(m);if(f instanceof pc)l.push(m);else{const b=mc(f,v);b!=null&&(l.push(m),u.set(m,b))}}const h=new xt(l);return new v_(u,h,o.fieldTransforms)}function mc(t,e){if(E_(t=Me(t)))return Mh("Unsupported field value:",e,t),b_(t,e);if(t instanceof Nh)return function(n,r){if(!__(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=mc(o,r.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Me(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return v1(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=He.fromDate(n);return{timestampValue:ma(r.It,s)}}if(n instanceof He){const s=new He(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ma(r.It,s)}}if(n instanceof xh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof hs)return{bytesValue:Kv(r.It,n._byteString)};if(n instanceof Lt){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:wh(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Dh(n)}`)}(t,e)}function b_(t,e){const n={};return Ev(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rr(t,(r,s)=>{const i=mc(s,e.ra(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function E_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof xh||t instanceof hs||t instanceof Lt||t instanceof Nh)}function Mh(t,e,n){if(!E_(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Dh(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function Ql(t,e,n){if((e=Me(e))instanceof fc)return e._internalPath;if(typeof e=="string")return Uh(t,e);throw ya("Field path arguments must be of type string or ",t,!1,void 0,n)}const PP=new RegExp("[~\\*/\\[\\]]");function Uh(t,e,n){if(e.search(PP)>=0)throw ya(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fc(...e.split("."))._internalPath}catch{throw ya(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ya(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new G(k.INVALID_ARGUMENT,a+t+c)}function T_(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class I_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new DP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(S_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class DP extends I_{data(){return super.data()}}function S_(t,e){return typeof e=="string"?Uh(t,e):e instanceof fc?e._internalPath:e._delegate._internalPath}/**
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
 */function NP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class xP{convertValue(e,n="none"){switch(Sr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(as(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ee()}}convertObject(e,n){const r={};return Rr(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new xh(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Iv(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ii(e));default:return null}}convertTimestamp(e){const n=Qn(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=xe.fromString(e);Oe(Qv(r));const s=new Si(r.get(1),r.get(3)),i=new W(r.popFirst(5));return s.isEqual(n)||wn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function LP(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class bo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class MP extends I_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Lo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(S_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Lo extends MP{data(e={}){return super.data(e)}}class UP{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new bo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Lo(this._firestore,this._userDataWriter,r.key,r,new bo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new Lo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new bo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Lo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new bo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:FP(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function FP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}class $P extends xP{constructor(e){super(),this.firestore=e}convertBytes(e){return new hs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Lt(this.firestore,null,n)}}function BP(t){t=Cr(t,dc);const e=Cr(t.firestore,to),n=g_(e),r=new $P(e);return NP(t._query),EP(n,t._query).then(s=>new UP(e,r,t,s))}function hp(t,e,n,...r){t=Cr(t,Lt);const s=Cr(t.firestore,to),i=w_(s);let o;return o=typeof(e=Me(e))=="string"||e instanceof fc?OP(i,"updateDoc",t._key,e,n,r):RP(i,"updateDoc",t._key,e),Fh(s,[o.toMutation(t._key,Ht.exists(!0))])}function dp(t){return Fh(Cr(t.firestore,to),[new _h(t._key,Ht.none())])}function VP(t,e){const n=Cr(t.firestore,to),r=qs(t),s=LP(t.converter,e);return Fh(n,[kP(w_(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ht.exists(!1))]).then(()=>r)}function Fh(t,e){return function(n,r){const s=new qn;return n.asyncQueue.enqueueAndForget(async()=>nP(await wP(n),r,s)),s.promise}(g_(t),e)}(function(t,e=!0){(function(n){Is=n})(gs),wr(new zn("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new to(new BR(n.getProvider("auth-internal")),new qR(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new G(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Si(a.options.projectId,c)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),en(Lf,"3.7.2",t),en(Lf,"3.7.2","esm2017")})();const jP={},HP={class:"card"},qP={class:"title"},KP={class:"description"};function WP(t,e,n,r,s,i){return me(),Re("div",HP,[D("div",qP,[ad(t.$slots,"title",{},void 0,!0)]),D("div",KP,[ad(t.$slots,"description",{},void 0,!0)])])}const zP=Zn(jP,[["render",WP],["__scopeId","data-v-300a4a8b"]]);const GP={components:{Post:zP},setup(){const t=fe(!0),e=ts(ii);fg(e,i=>{i?t.value=!0:t.value=!1});const n=ws();om(()=>{t.value||n.push("/login")});const r=Uu(),s=i=>{r.commit("setHashtag",i.target.value)};return Di(async()=>{(await BP(p_(Vr,"Blogs"))).forEach(o=>{const a=o.data();r.commit("updateState",{id:o.id,date:a.date,title:a.title,content:a.content,video:a.video,userId:a.userId})})}),{filteredPosts:r.getters.filtredPosts,setHashtag:s,loggedIn:t,currentHashtag:vt(()=>r.state.currentHashtag)}}},QP=D("button",null,"Create",-1),JP=D("h1",null,"Blogs",-1),XP={class:"bloglist"},YP=D("button",null,"View",-1);function ZP(t,e,n,r,s,i){const o=gn("router-link"),a=gn("post");return me(),Re(Le,null,[Ee(o,{to:t.$store.state.currentEdit?"/edit-video":"/new-blog"},{default:Ct(()=>[QP]),_:1},8,["to"]),JP,D("div",XP,[(me(!0),Re(Le,null,Oa(r.filteredPosts,c=>(me(),di(a,null,{title:Ct(()=>[Ge(wt(c.title),1)]),description:Ct(()=>[Ee(o,{to:`/view-post/${c.id?c.id:""}`},{default:Ct(()=>[YP]),_:2},1032,["to"])]),_:2},1024))),256))])],64)}const eD=Zn(GP,[["render",ZP]]),tD={emits:["onloadedmetadata"],components:{},data(){return{start:0,end:0,duration:0,error:""}},computed:{video(){const t=this.$store.state.currentEdit,e=this.$store.state.posts.filter(n=>n.id&&t&&n.id==t);return e[0]?{videos:e[0].video?e[0].video.videos:[]}:{videos:[]}}},methods:{logDuration(){this.duration=this.$refs.videoPlayer.duration,this.end=this.duration},editPost(){this.start>this.end?this.error="Check time and duration!"+this.duration:this.end>this.duration?this.error="Check time and duration!"+this.duration:(this.$store.commit("editDone",[this.start,this.end]),this.$router.push("/feed"))}}},nD=D("h1",null,"Publish blog confirmation",-1),rD=["src"],sD=Ge("Start time: "),iD=Ge("End time: ");function oD(t,e,n,r,s,i){return me(),Re("form",null,[nD,Ve(D("video",{src:i.video.videos,onLoadedmetadata:e[0]||(e[0]=(...o)=>i.logDuration&&i.logDuration(...o)),controls:"",ref:"videoPlayer"},null,40,rD),[[Fn,i.video.videos.length]]),Ve(D("h2",null,"No video, please confirm posting!",512),[[Fn,!i.video.videos.length]]),Ve(D("p",null,"Full lenght: "+wt(s.duration),513),[[Fn,i.video.videos.length]]),Ve(D("span",null,[D("p",null,[sD,Ve(D("input",{type:"text",name:"start","onUpdate:modelValue":e[1]||(e[1]=o=>s.start=o)},null,512),[[Dt,s.start]])]),D("p",null,[iD,Ve(D("input",{type:"text",name:"end","onUpdate:modelValue":e[2]||(e[2]=o=>s.end=o)},null,512),[[Dt,s.end]])])],512),[[Fn,i.video.videos.length]]),Ge(" "+wt(s.error)+" ",1),D("button",{onClick:e[3]||(e[3]=fl((...o)=>i.editPost&&i.editPost(...o),["prevent"]))},"Confirm")])}const aD=Zn(tD,[["render",oD]]);const cD={components:{},setup(){const t=Uu(),e=ws(),n=Ug(),r=fe("Delete"),s=fe("Title"),i=fe(""),o=fe(null),a=fe(0),c=fe("content"),l=Yn({videos:[]}),u=f=>{const v=t.state.posts.filter(b=>b.id&&f&&b.id==f);v[0]&&(s.value=v[0].title,i.value=v[0].date?v[0].date:"",c.value=v[0].content,l.videos=v[0].video?v[0].video.videos:[],a.value=v[0].time?v[0].time[0]:0)},h=()=>{r.value=="Confirm"?(t.commit("deletePost",n.params.id),e.push("/feed")):r.value="Confirm"},d=()=>{e.push({path:"/new-blog",query:{id:n.params.id,title:s.value,content:c.value,video:l.videos}})},m=()=>{o.currentTime=a.value};return Di(()=>{u(n.params.id)}),{title:s,date:i,content:c,video:l,Delete:r,getPost:u,updatePost:d,deletePost:h,logDuration:m}}},lD={class:"content"},uD=["src"];function hD(t,e,n,r,s,i){return me(),Re(Le,null,[D("h2",null,wt(r.title),1),D("p",null,wt(r.date),1),D("p",lD,wt(r.content),1),(me(!0),Re(Le,null,Oa(r.video.videos,o=>(me(),Re("div",null,[D("video",{onLoadedmetadata:e[0]||(e[0]=(...a)=>r.logDuration&&r.logDuration(...a)),controls:"",ref_for:!0,ref:"videoPlayer"},[D("source",{src:o,type:"video/mp4"},null,8,uD)],544)]))),256)),D("button",{onClick:e[1]||(e[1]=(...o)=>r.deletePost&&r.deletePost(...o)),style:wa(`color: ${r.Delete=="Confirm"?"red":"black"}`)},wt(r.Delete),5),D("button",{onClick:e[2]||(e[2]=(...o)=>r.updatePost&&r.updatePost(...o))},"Edit")],64)}const fp=Zn(cD,[["render",hD]]);function C_(t,e){return function(){return t.apply(e,arguments)}}const{toString:A_}=Object.prototype,{getPrototypeOf:$h}=Object,Bh=(t=>e=>{const n=A_.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),In=t=>(t=t.toLowerCase(),e=>Bh(e)===t),gc=t=>e=>typeof e===t,{isArray:As}=Array,Oi=gc("undefined");function dD(t){return t!==null&&!Oi(t)&&t.constructor!==null&&!Oi(t.constructor)&&Xn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const k_=In("ArrayBuffer");function fD(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&k_(t.buffer),e}const pD=gc("string"),Xn=gc("function"),R_=gc("number"),Vh=t=>t!==null&&typeof t=="object",mD=t=>t===!0||t===!1,Mo=t=>{if(Bh(t)!=="object")return!1;const e=$h(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},gD=In("Date"),yD=In("File"),vD=In("Blob"),_D=In("FileList"),wD=t=>Vh(t)&&Xn(t.pipe),bD=t=>{const e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||A_.call(t)===e||Xn(t.toString)&&t.toString()===e)},ED=In("URLSearchParams"),TD=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function no(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),As(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function O_(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const P_=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),D_=t=>!Oi(t)&&t!==P_;function Jl(){const{caseless:t}=D_(this)&&this||{},e={},n=(r,s)=>{const i=t&&O_(e,s)||s;Mo(e[i])&&Mo(r)?e[i]=Jl(e[i],r):Mo(r)?e[i]=Jl({},r):As(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&no(arguments[r],n);return e}const ID=(t,e,n,{allOwnKeys:r}={})=>(no(e,(s,i)=>{n&&Xn(s)?t[i]=C_(s,n):t[i]=s},{allOwnKeys:r}),t),SD=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),CD=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},AD=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&$h(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},kD=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},RD=t=>{if(!t)return null;if(As(t))return t;let e=t.length;if(!R_(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},OD=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&$h(Uint8Array)),PD=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},DD=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},ND=In("HTMLFormElement"),xD=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),pp=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),LD=In("RegExp"),N_=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};no(n,(s,i)=>{e(s,i,t)!==!1&&(r[i]=s)}),Object.defineProperties(t,r)},MD=t=>{N_(t,(e,n)=>{if(Xn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(!!Xn(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},UD=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return As(t)?r(t):r(String(t).split(e)),n},FD=()=>{},$D=(t,e)=>(t=+t,Number.isFinite(t)?t:e),zc="abcdefghijklmnopqrstuvwxyz",mp="0123456789",x_={DIGIT:mp,ALPHA:zc,ALPHA_DIGIT:zc+zc.toUpperCase()+mp},BD=(t=16,e=x_.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function VD(t){return!!(t&&Xn(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const jD=t=>{const e=new Array(10),n=(r,s)=>{if(Vh(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=As(r)?[]:{};return no(r,(o,a)=>{const c=n(o,s+1);!Oi(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},E={isArray:As,isArrayBuffer:k_,isBuffer:dD,isFormData:bD,isArrayBufferView:fD,isString:pD,isNumber:R_,isBoolean:mD,isObject:Vh,isPlainObject:Mo,isUndefined:Oi,isDate:gD,isFile:yD,isBlob:vD,isRegExp:LD,isFunction:Xn,isStream:wD,isURLSearchParams:ED,isTypedArray:OD,isFileList:_D,forEach:no,merge:Jl,extend:ID,trim:TD,stripBOM:SD,inherits:CD,toFlatObject:AD,kindOf:Bh,kindOfTest:In,endsWith:kD,toArray:RD,forEachEntry:PD,matchAll:DD,isHTMLForm:ND,hasOwnProperty:pp,hasOwnProp:pp,reduceDescriptors:N_,freezeMethods:MD,toObjectSet:UD,toCamelCase:xD,noop:FD,toFiniteNumber:$D,findKey:O_,global:P_,isContextDefined:D_,ALPHABET:x_,generateString:BD,isSpecCompliantForm:VD,toJSONObject:jD};function de(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}E.inherits(de,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:E.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const L_=de.prototype,M_={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{M_[t]={value:t}});Object.defineProperties(de,M_);Object.defineProperty(L_,"isAxiosError",{value:!0});de.from=(t,e,n,r,s,i)=>{const o=Object.create(L_);return E.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),de.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const HD=null;function Xl(t){return E.isPlainObject(t)||E.isArray(t)}function U_(t){return E.endsWith(t,"[]")?t.slice(0,-2):t}function gp(t,e,n){return t?t.concat(e).map(function(s,i){return s=U_(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function qD(t){return E.isArray(t)&&!t.some(Xl)}const KD=E.toFlatObject(E,{},null,function(e){return/^is[A-Z]/.test(e)});function yc(t,e,n){if(!E.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=E.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,b){return!E.isUndefined(b[v])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&E.isSpecCompliantForm(e);if(!E.isFunction(s))throw new TypeError("visitor must be a function");function l(f){if(f===null)return"";if(E.isDate(f))return f.toISOString();if(!c&&E.isBlob(f))throw new de("Blob is not supported. Use a Buffer instead.");return E.isArrayBuffer(f)||E.isTypedArray(f)?c&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,v,b){let y=f;if(f&&!b&&typeof f=="object"){if(E.endsWith(v,"{}"))v=r?v:v.slice(0,-2),f=JSON.stringify(f);else if(E.isArray(f)&&qD(f)||(E.isFileList(f)||E.endsWith(v,"[]"))&&(y=E.toArray(f)))return v=U_(v),y.forEach(function(A,N){!(E.isUndefined(A)||A===null)&&e.append(o===!0?gp([v],N,i):o===null?v:v+"[]",l(A))}),!1}return Xl(f)?!0:(e.append(gp(b,v,i),l(f)),!1)}const h=[],d=Object.assign(KD,{defaultVisitor:u,convertValue:l,isVisitable:Xl});function m(f,v){if(!E.isUndefined(f)){if(h.indexOf(f)!==-1)throw Error("Circular reference detected in "+v.join("."));h.push(f),E.forEach(f,function(y,_){(!(E.isUndefined(y)||y===null)&&s.call(e,y,E.isString(_)?_.trim():_,v,d))===!0&&m(y,v?v.concat(_):[_])}),h.pop()}}if(!E.isObject(t))throw new TypeError("data must be an object");return m(t),e}function yp(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function jh(t,e){this._pairs=[],t&&yc(t,this,e)}const F_=jh.prototype;F_.append=function(e,n){this._pairs.push([e,n])};F_.toString=function(e){const n=e?function(r){return e.call(this,r,yp)}:yp;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function WD(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function $_(t,e,n){if(!e)return t;const r=n&&n.encode||WD,s=n&&n.serialize;let i;if(s?i=s(e,n):i=E.isURLSearchParams(e)?e.toString():new jh(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class zD{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){E.forEach(this.handlers,function(r){r!==null&&e(r)})}}const vp=zD,B_={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},GD=typeof URLSearchParams<"u"?URLSearchParams:jh,QD=typeof FormData<"u"?FormData:null,JD=typeof Blob<"u"?Blob:null,XD=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),YD=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Zt={isBrowser:!0,classes:{URLSearchParams:GD,FormData:QD,Blob:JD},isStandardBrowserEnv:XD,isStandardBrowserWebWorkerEnv:YD,protocols:["http","https","file","blob","url","data"]};function ZD(t,e){return yc(t,new Zt.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return Zt.isNode&&E.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function eN(t){return E.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function tN(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function V_(t){function e(n,r,s,i){let o=n[i++];const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&E.isArray(s)?s.length:o,c?(E.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!E.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&E.isArray(s[o])&&(s[o]=tN(s[o])),!a)}if(E.isFormData(t)&&E.isFunction(t.entries)){const n={};return E.forEachEntry(t,(r,s)=>{e(eN(r),s,n,0)}),n}return null}const nN={"Content-Type":void 0};function rN(t,e,n){if(E.isString(t))try{return(e||JSON.parse)(t),E.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const vc={transitional:B_,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=E.isObject(e);if(i&&E.isHTMLForm(e)&&(e=new FormData(e)),E.isFormData(e))return s&&s?JSON.stringify(V_(e)):e;if(E.isArrayBuffer(e)||E.isBuffer(e)||E.isStream(e)||E.isFile(e)||E.isBlob(e))return e;if(E.isArrayBufferView(e))return e.buffer;if(E.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return ZD(e,this.formSerializer).toString();if((a=E.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return yc(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),rN(e)):e}],transformResponse:[function(e){const n=this.transitional||vc.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&E.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?de.from(a,de.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Zt.classes.FormData,Blob:Zt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};E.forEach(["delete","get","head"],function(e){vc.headers[e]={}});E.forEach(["post","put","patch"],function(e){vc.headers[e]=E.merge(nN)});const Hh=vc,sN=E.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),iN=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&sN[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},_p=Symbol("internals");function Ls(t){return t&&String(t).trim().toLowerCase()}function Uo(t){return t===!1||t==null?t:E.isArray(t)?t.map(Uo):String(t)}function oN(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}function aN(t){return/^[-_a-zA-Z]+$/.test(t.trim())}function Gc(t,e,n,r,s){if(E.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!E.isString(e)){if(E.isString(r))return e.indexOf(r)!==-1;if(E.isRegExp(r))return r.test(e)}}function cN(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function lN(t,e){const n=E.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class _c{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const u=Ls(c);if(!u)throw new Error("header name must be a non-empty string");const h=E.findKey(s,u);(!h||s[h]===void 0||l===!0||l===void 0&&s[h]!==!1)&&(s[h||c]=Uo(a))}const o=(a,c)=>E.forEach(a,(l,u)=>i(l,u,c));return E.isPlainObject(e)||e instanceof this.constructor?o(e,n):E.isString(e)&&(e=e.trim())&&!aN(e)?o(iN(e),n):e!=null&&i(n,e,r),this}get(e,n){if(e=Ls(e),e){const r=E.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return oN(s);if(E.isFunction(n))return n.call(this,s,r);if(E.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Ls(e),e){const r=E.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Gc(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=Ls(o),o){const a=E.findKey(r,o);a&&(!n||Gc(r,r[a],a,n))&&(delete r[a],s=!0)}}return E.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Gc(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return E.forEach(this,(s,i)=>{const o=E.findKey(r,i);if(o){n[o]=Uo(s),delete n[i];return}const a=e?cN(i):String(i).trim();a!==i&&delete n[i],n[a]=Uo(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return E.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&E.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[_p]=this[_p]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Ls(o);r[a]||(lN(s,o),r[a]=!0)}return E.isArray(e)?e.forEach(i):i(e),this}}_c.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);E.freezeMethods(_c.prototype);E.freezeMethods(_c);const pn=_c;function Qc(t,e){const n=this||Hh,r=e||n,s=pn.from(r.headers);let i=r.data;return E.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function j_(t){return!!(t&&t.__CANCEL__)}function ro(t,e,n){de.call(this,t==null?"canceled":t,de.ERR_CANCELED,e,n),this.name="CanceledError"}E.inherits(ro,de,{__CANCEL__:!0});function uN(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new de("Request failed with status code "+n.status,[de.ERR_BAD_REQUEST,de.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const hN=Zt.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,a){const c=[];c.push(n+"="+encodeURIComponent(r)),E.isNumber(s)&&c.push("expires="+new Date(s).toGMTString()),E.isString(i)&&c.push("path="+i),E.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function dN(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function fN(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function H_(t,e){return t&&!dN(e)?fN(t,e):e}const pN=Zt.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=E.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function mN(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function gN(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let h=i,d=0;for(;h!==s;)d+=n[h++],h=h%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const m=u&&l-u;return m?Math.round(d*1e3/m):void 0}}function wp(t,e){let n=0;const r=gN(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),l=i<=o;n=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:s};u[e?"download":"upload"]=!0,t(u)}}const yN=typeof XMLHttpRequest<"u",vN=yN&&function(t){return new Promise(function(n,r){let s=t.data;const i=pn.from(t.headers).normalize(),o=t.responseType;let a;function c(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}E.isFormData(s)&&(Zt.isStandardBrowserEnv||Zt.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let l=new XMLHttpRequest;if(t.auth){const m=t.auth.username||"",f=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(m+":"+f))}const u=H_(t.baseURL,t.url);l.open(t.method.toUpperCase(),$_(u,t.params,t.paramsSerializer),!0),l.timeout=t.timeout;function h(){if(!l)return;const m=pn.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),v={data:!o||o==="text"||o==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:m,config:t,request:l};uN(function(y){n(y),c()},function(y){r(y),c()},v),l=null}if("onloadend"in l?l.onloadend=h:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(h)},l.onabort=function(){!l||(r(new de("Request aborted",de.ECONNABORTED,t,l)),l=null)},l.onerror=function(){r(new de("Network Error",de.ERR_NETWORK,t,l)),l=null},l.ontimeout=function(){let f=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const v=t.transitional||B_;t.timeoutErrorMessage&&(f=t.timeoutErrorMessage),r(new de(f,v.clarifyTimeoutError?de.ETIMEDOUT:de.ECONNABORTED,t,l)),l=null},Zt.isStandardBrowserEnv){const m=(t.withCredentials||pN(u))&&t.xsrfCookieName&&hN.read(t.xsrfCookieName);m&&i.set(t.xsrfHeaderName,m)}s===void 0&&i.setContentType(null),"setRequestHeader"in l&&E.forEach(i.toJSON(),function(f,v){l.setRequestHeader(v,f)}),E.isUndefined(t.withCredentials)||(l.withCredentials=!!t.withCredentials),o&&o!=="json"&&(l.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&l.addEventListener("progress",wp(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",wp(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=m=>{!l||(r(!m||m.type?new ro(null,t,l):m),l.abort(),l=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const d=mN(u);if(d&&Zt.protocols.indexOf(d)===-1){r(new de("Unsupported protocol "+d+":",de.ERR_BAD_REQUEST,t));return}l.send(s||null)})},Fo={http:HD,xhr:vN};E.forEach(Fo,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const _N={getAdapter:t=>{t=E.isArray(t)?t:[t];const{length:e}=t;let n,r;for(let s=0;s<e&&(n=t[s],!(r=E.isString(n)?Fo[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new de(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(E.hasOwnProp(Fo,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!E.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Fo};function Jc(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ro(null,t)}function bp(t){return Jc(t),t.headers=pn.from(t.headers),t.data=Qc.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),_N.getAdapter(t.adapter||Hh.adapter)(t).then(function(r){return Jc(t),r.data=Qc.call(t,t.transformResponse,r),r.headers=pn.from(r.headers),r},function(r){return j_(r)||(Jc(t),r&&r.response&&(r.response.data=Qc.call(t,t.transformResponse,r.response),r.response.headers=pn.from(r.response.headers))),Promise.reject(r)})}const Ep=t=>t instanceof pn?t.toJSON():t;function ds(t,e){e=e||{};const n={};function r(l,u,h){return E.isPlainObject(l)&&E.isPlainObject(u)?E.merge.call({caseless:h},l,u):E.isPlainObject(u)?E.merge({},u):E.isArray(u)?u.slice():u}function s(l,u,h){if(E.isUndefined(u)){if(!E.isUndefined(l))return r(void 0,l,h)}else return r(l,u,h)}function i(l,u){if(!E.isUndefined(u))return r(void 0,u)}function o(l,u){if(E.isUndefined(u)){if(!E.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,h){if(h in e)return r(l,u);if(h in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u)=>s(Ep(l),Ep(u),!0)};return E.forEach(Object.keys(t).concat(Object.keys(e)),function(u){const h=c[u]||s,d=h(t[u],e[u],u);E.isUndefined(d)&&h!==a||(n[u]=d)}),n}const q_="1.3.4",qh={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{qh[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Tp={};qh.transitional=function(e,n,r){function s(i,o){return"[Axios v"+q_+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new de(s(o," has been removed"+(n?" in "+n:"")),de.ERR_DEPRECATED);return n&&!Tp[o]&&(Tp[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function wN(t,e,n){if(typeof t!="object")throw new de("options must be an object",de.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new de("option "+i+" must be "+c,de.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new de("Unknown option "+i,de.ERR_BAD_OPTION)}}const Yl={assertOptions:wN,validators:qh},Rn=Yl.validators;class va{constructor(e){this.defaults=e,this.interceptors={request:new vp,response:new vp}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=ds(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Yl.assertOptions(r,{silentJSONParsing:Rn.transitional(Rn.boolean),forcedJSONParsing:Rn.transitional(Rn.boolean),clarifyTimeoutError:Rn.transitional(Rn.boolean)},!1),s!==void 0&&Yl.assertOptions(s,{encode:Rn.function,serialize:Rn.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&E.merge(i.common,i[n.method]),o&&E.forEach(["delete","get","head","post","put","patch","common"],f=>{delete i[f]}),n.headers=pn.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(c=c&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const l=[];this.interceptors.response.forEach(function(v){l.push(v.fulfilled,v.rejected)});let u,h=0,d;if(!c){const f=[bp.bind(this),void 0];for(f.unshift.apply(f,a),f.push.apply(f,l),d=f.length,u=Promise.resolve(n);h<d;)u=u.then(f[h++],f[h++]);return u}d=a.length;let m=n;for(h=0;h<d;){const f=a[h++],v=a[h++];try{m=f(m)}catch(b){v.call(this,b);break}}try{u=bp.call(this,m)}catch(f){return Promise.reject(f)}for(h=0,d=l.length;h<d;)u=u.then(l[h++],l[h++]);return u}getUri(e){e=ds(this.defaults,e);const n=H_(e.baseURL,e.url);return $_(n,e.params,e.paramsSerializer)}}E.forEach(["delete","get","head","options"],function(e){va.prototype[e]=function(n,r){return this.request(ds(r||{},{method:e,url:n,data:(r||{}).data}))}});E.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(ds(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}va.prototype[e]=n(),va.prototype[e+"Form"]=n(!0)});const $o=va;class Kh{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new ro(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Kh(function(s){e=s}),cancel:e}}}const bN=Kh;function EN(t){return function(n){return t.apply(null,n)}}function TN(t){return E.isObject(t)&&t.isAxiosError===!0}const Zl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Zl).forEach(([t,e])=>{Zl[e]=t});const IN=Zl;function K_(t){const e=new $o(t),n=C_($o.prototype.request,e);return E.extend(n,$o.prototype,e,{allOwnKeys:!0}),E.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return K_(ds(t,s))},n}const ze=K_(Hh);ze.Axios=$o;ze.CanceledError=ro;ze.CancelToken=bN;ze.isCancel=j_;ze.VERSION=q_;ze.toFormData=yc;ze.AxiosError=de;ze.Cancel=ze.CanceledError;ze.all=function(e){return Promise.all(e)};ze.spread=EN;ze.isAxiosError=TN;ze.mergeConfig=ds;ze.AxiosHeaders=pn;ze.formToJSON=t=>V_(E.isHTMLForm(t)?new FormData(t):t);ze.HttpStatusCode=IN;ze.default=ze;const W_=ze;const SN={props:{id:{type:Number,required:!0}},data(){return{post:{}}},computed:{...Qg(["blogs"])},watch:{$route:{handler:(t,e)=>{document.title=t.meta.title||"Blog AB"},immediate:!0}},async created(){try{if(this.blogs.length)this.post=this.blogs.filter(t=>t.id===this.id)[0].attributes;else{const t="2c96b6128b15cfe1fdd2ffaf46c2cc99c2a2840ae32e7b140093a522603937b329c4e0fcab22bad4263f5e1d7687efaf002c84eb50bd0d4b1fabef1403704a94bd827a00533dbf4563c109c916933918489ae741d86a8357b046ba6b4f94af2de659a926d70a0029eacd559e98dcaed21717d94aaae8e1a5fb51daf98d8dd1fc",e=await W_.get(`https://strapi-cp-blog.onrender.com/api/articles/${this.id}`,{headers:{Authorization:`Bearer ${t}`}});this.post=e.data.data.attributes}}catch(t){console.error(t)}}};function CN(t,e,n,r,s,i){return me(),Re("div",null,[D("h1",null,wt(s.post.Title),1),D("p",null,wt(s.post.Description),1)])}const AN=Zn(SN,[["render",CN],["__scopeId","data-v-bafc4b01"]]),Qt="",kN=[{path:`${Qt}/`,component:gf},{path:`${Qt}/feed`,component:eD,name:"feed"},{path:`${Qt}/home/`,component:gf},{path:`${Qt}/login/`,component:Lk},{path:`${Qt}/register/`,component:Ok},{path:`${Qt}/new-blog`,component:zC},{path:`${Qt}/edit-video`,component:aD,name:"edit"},{path:`${Qt}/view-post/`,component:fp},{path:`${Qt}/view-post/:id`,component:fp,name:"viewpost"},{path:`${Qt}/:slug`,name:"blogpost",component:AN,props:t=>({id:parseInt(t.params.slug.split("-")[0])}),beforeEnter:(t,e,n)=>{if(t.meta.title=t.params.slug.charAt(2).toUpperCase()+t.params.slug.slice(3).replace(/-+/g," "),t.params.slug.includes(" ")){const r=t.params.slug.replace(" ","-");n({name:t.name,params:{slug:r}})}else n()}}],Ip=OC({state(){return{blogs:[],posts:[],currentEdit:null}},getters:{filtredPosts(t){return t.currentEdit?t.posts.filter(e=>e.id!=t.currentEdit):t.posts},blogs(t){return t.blogs}},actions:{async initialize(t){try{const e="2c96b6128b15cfe1fdd2ffaf46c2cc99c2a2840ae32e7b140093a522603937b329c4e0fcab22bad4263f5e1d7687efaf002c84eb50bd0d4b1fabef1403704a94bd827a00533dbf4563c109c916933918489ae741d86a8357b046ba6b4f94af2de659a926d70a0029eacd559e98dcaed21717d94aaae8e1a5fb51daf98d8dd1fc",n=await W_.get("https://strapi-cp-blog.onrender.com/api/articles",{headers:{Authorization:`Bearer ${e}`}});t.state.blogs=n.data.data}catch(e){console.error(e)}}},mutations:{async addPost(t,e){if(e.id){const a=t.posts.findIndex(c=>c.id==e.id);a>-1&&(t.posts.splice(a,1),dp(qs(Vr,"Blogs",e.id)))}const n=fe(""),r=yy(ii),s=ts(ii);try{const a=await VP(p_(Vr,"Blogs"),{date:e.date,userId:s.currentUser.uid,title:e.title,content:e.content});t.posts.push({id:a.id,date:e.date,title:e.title,content:e.content,video:e.video}),n.value=a.id,e.id||(t.currentEdit=a.id)}catch(a){console.error("Error adding document: ",a)}let i=1;const o={videos:[]};e.video.videos&&e.video.videos.forEach(a=>{const c=gy(r,`videos/${e.title+(i++).toString()}.mp4`);py(c,a,"data_url").then(l=>{my(l.ref).then(u=>{o.videos.push(u),hp(qs(Vr,"Blogs",n.value),{video:{videos:o.videos}})})})})},deletePost(t,e){const n=t.posts.findIndex(r=>r.id==e);n>-1&&(t.posts.splice(n,1),dp(qs(Vr,"Blogs",e)))},setEdit(t,e){t.currentEdit=e},updateState(t,e){const n=ts(ii),r=t.posts.findIndex(s=>s.id==e.id);r>-1&&t.posts.splice(r,1),e.userId==n.currentUser.uid&&t.posts.push({id:e.id,date:e.date,title:e.title,content:e.content,video:e.video})},editDone(t,e){const n=t.posts.findIndex(r=>r.id==t.currentEdit);n>-1&&(t.posts[n].time=e,hp(qs(Vr,"Blogs",t.currentEdit),{time:e})),t.currentEdit=null}}});var RN="firebase",ON="9.13.0";/**
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
 */en(RN,ON,"app");function eu(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?eu(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const PN={run:t=>t()},DN=()=>PN,z_=typeof console.createTask<"u"?console.createTask:DN;function NN(t,e){const n=e.shift(),r=z_(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function xN(t,e){const n=e.shift(),r=z_(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function Xc(t,e){for(const n of[...t])n(e)}class LN{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=eu(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=eu(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(NN,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(xN,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&Xc(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&Xc(this._after,s)}):(this._after&&s&&Xc(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function MN(){return new LN}function UN(t){return Array.isArray(t)?t:[t]}const G_=["title","script","style","noscript"],FN=["base","meta","link","style","script","noscript"],$N=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],BN=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],VN=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Q_(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function tu(t){return Q_(`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,n])=>`${e}:${String(n)}`).join(",")}`)}function jN(t){let e=9;for(const n of t)for(let r=0;r<n.length;)e=Math.imul(e^n.charCodeAt(r++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function J_(t,e){const{props:n,tag:r}=t;if(BN.includes(r))return r;if(r==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const s=["id"];r==="meta"&&s.push("name","property","http-equiv");for(const i of s)if(typeof n[i]<"u"){const o=String(n[i]);return e&&!e(o)?!1:`${r}:${i}:${o}`}return!1}const Sp=(t,e)=>t==null?e||null:typeof t=="function"?t(e):t,Eo=(t,e=!1,n)=>{const{tag:r,$el:s}=t;!s||(Object.entries(r.props).forEach(([i,o])=>{o=String(o);const a=`attr:${i}`;if(i==="class"){if(!o)return;for(const c of o.split(" ")){const l=`${a}:${c}`;n&&n(t,l,()=>s.classList.remove(c)),s.classList.contains(c)||s.classList.add(c)}return}n&&!i.startsWith("data-h-")&&n(t,a,()=>s.removeAttribute(i)),(e||s.getAttribute(i)!==o)&&s.setAttribute(i,o)}),G_.includes(r.tag)&&(r.textContent&&r.textContent!==s.textContent?s.textContent=r.textContent:r.innerHTML&&r.innerHTML!==s.innerHTML&&(s.innerHTML=r.innerHTML)))};let Ms=!1;async function X_(t,e={}){var d,m;const n={shouldRender:!0};if(await t.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const r=e.document||t.resolvedOptions.document||window.document,s=(await t.resolveTags()).map(a);if(t.resolvedOptions.experimentalHashHydration&&(Ms=Ms||t._hash||!1,Ms)){const f=jN(s.map(v=>v.tag._h));if(Ms===f)return;Ms=f}const i=t._popSideEffectQueue();t.headEntries().map(f=>f._sde).forEach(f=>{Object.entries(f).forEach(([v,b])=>{i[v]=b})});const o=(f,v,b)=>{v=`${f.renderId}:${v}`,f.entry&&(f.entry._sde[v]=b),delete i[v]};function a(f){const v=t.headEntries().find(y=>y._i===f._e),b={renderId:!f.key&&f._d?f._d:tu(f),$el:null,shouldRender:!0,tag:f,entry:v,markSideEffect:(y,_)=>o(b,y,_)};return b}const c=[],l={body:[],head:[]},u=f=>{t._elMap[f.renderId]=f.$el,c.push(f),o(f,"el",()=>{var v;(v=f.$el)==null||v.remove(),delete t._elMap[f.renderId]})};for(const f of s){if(await t.hooks.callHook("dom:beforeRenderTag",f),!f.shouldRender)continue;const{tag:v}=f;if(v.tag==="title"){r.title=v.textContent||"",c.push(f);continue}if(v.tag==="htmlAttrs"||v.tag==="bodyAttrs"){f.$el=r[v.tag==="htmlAttrs"?"documentElement":"body"],Eo(f,!1,o),c.push(f);continue}if(f.$el=t._elMap[f.renderId],!f.$el&&v.key&&(f.$el=r.querySelector(`${(d=v.tagPosition)!=null&&d.startsWith("body")?"body":"head"} > ${v.tag}[data-h-${v._h}]`)),f.$el){f.tag._d&&Eo(f),u(f);continue}l[(m=v.tagPosition)!=null&&m.startsWith("body")?"body":"head"].push(f)}const h={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(l).forEach(([f,v])=>{var y;if(!v.length)return;const b=(y=r==null?void 0:r[f])==null?void 0:y.children;if(!!b){for(const _ of[...b].reverse()){const A=_.tagName.toLowerCase();if(!FN.includes(A))continue;const N=_.getAttributeNames().reduce((U,ie)=>({...U,[ie]:_.getAttribute(ie)}),{}),H={tag:A,props:N};_.innerHTML&&(H.innerHTML=_.innerHTML);const X=tu(H);let J=v.findIndex(U=>(U==null?void 0:U.renderId)===X);if(J===-1){const U=J_(H);J=v.findIndex(ie=>(ie==null?void 0:ie.tag._d)&&ie.tag._d===U)}if(J!==-1){const U=v[J];U.$el=_,Eo(U),u(U),delete v[J]}}v.forEach(_=>{const A=_.tag.tagPosition||"head";h[A]=h[A]||r.createDocumentFragment(),_.$el||(_.$el=r.createElement(_.tag.tag),Eo(_,!0)),h[A].appendChild(_.$el),u(_)})}}),h.head&&r.head.appendChild(h.head),h.bodyOpen&&r.body.insertBefore(h.bodyOpen,r.body.firstChild),h.bodyClose&&r.body.appendChild(h.bodyClose);for(const f of c)await t.hooks.callHook("dom:renderTag",f);Object.values(i).forEach(f=>f())}let Yc=null;async function Y_(t,e={}){function n(){return Yc=null,X_(t,e)}const r=e.delayFn||(s=>setTimeout(s,10));return Yc=Yc||new Promise(s=>r(()=>s(n())))}const HN=t=>({hooks:{"entries:updated":function(e){if(typeof(t==null?void 0:t.document)>"u"&&typeof window>"u")return;let n=t==null?void 0:t.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),Y_(e,{document:(t==null?void 0:t.document)||window.document,delayFn:n})}}});function qN(t){var e;return((e=t==null?void 0:t.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:e.getAttribute("content"))||!1}const Cp={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Ap(t){if(typeof t.tagPriority=="number")return t.tagPriority;if(t.tag==="meta"){if(t.props.charset)return-2;if(t.props["http-equiv"]==="content-security-policy")return 0}const e=t.tagPriority||t.tag;return e in Cp?Cp[e]:10}const KN=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function WN(){return{hooks:{"tags:resolve":t=>{const e=n=>{var r;return(r=t.tags.find(s=>s._d===n))==null?void 0:r._p};for(const{prefix:n,offset:r}of KN)for(const s of t.tags.filter(i=>typeof i.tagPriority=="string"&&i.tagPriority.startsWith(n))){const i=e(s.tagPriority.replace(n,""));typeof i<"u"&&(s._p=i+r)}t.tags.sort((n,r)=>n._p-r._p).sort((n,r)=>Ap(n)-Ap(r))}}}}const zN=()=>({hooks:{"tags:resolve":t=>{const{tags:e}=t;let n=e.findIndex(s=>s.tag==="titleTemplate");const r=e.findIndex(s=>s.tag==="title");if(r!==-1&&n!==-1){const s=Sp(e[n].textContent,e[r].textContent);s!==null?e[r].textContent=s||e[r].textContent:delete e[r]}else if(n!==-1){const s=Sp(e[n].textContent);s!==null&&(e[n].textContent=s,e[n].tag="title",n=-1)}n!==-1&&delete e[n],t.tags=e.filter(Boolean)}}}),GN=()=>({hooks:{"tag:normalise":function({tag:t}){typeof t.props.body<"u"&&(t.tagPosition="bodyClose",delete t.props.body)}}}),QN=["link","style","script","noscript"],JN=()=>({hooks:{"tag:normalise":({tag:t,resolvedOptions:e})=>{e.experimentalHashHydration===!0&&(t._h=tu(t)),t.key&&QN.includes(t.tag)&&(t._h=Q_(t.key),t.props[`data-h-${t._h}`]="")}}}),kp=["script","link","bodyAttrs"],XN=()=>{const t=(e,n)=>{const r={},s={};Object.entries(n.props).forEach(([o,a])=>{o.startsWith("on")&&typeof a=="function"?s[o]=a:r[o]=a});let i;return e==="dom"&&n.tag==="script"&&typeof r.src=="string"&&typeof s.onload<"u"&&(i=r.src,delete r.src),{props:r,eventHandlers:s,delayedSrc:i}};return{hooks:{"ssr:render":function(e){e.tags=e.tags.map(n=>(!kp.includes(n.tag)||!Object.entries(n.props).find(([r,s])=>r.startsWith("on")&&typeof s=="function")||(n.props=t("ssr",n).props),n))},"dom:beforeRenderTag":function(e){if(!kp.includes(e.tag.tag)||!Object.entries(e.tag.props).find(([i,o])=>i.startsWith("on")&&typeof o=="function"))return;const{props:n,eventHandlers:r,delayedSrc:s}=t("dom",e.tag);!Object.keys(r).length||(e.tag.props=n,e.tag._eventHandlers=r,e.tag._delayedSrc=s)},"dom:renderTag":function(e){const n=e.$el;if(!e.tag._eventHandlers||!n)return;const r=e.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(e.tag._eventHandlers).forEach(([s,i])=>{const o=`${e.tag._d||e.tag._p}:${s}`,a=s.slice(2).toLowerCase(),c=`data-h-${a}`;if(e.markSideEffect(o,()=>{}),n.hasAttribute(c))return;const l=i;n.setAttribute(c,""),r.addEventListener(a,l),e.entry&&(e.entry._sde[o]=()=>{r.removeEventListener(a,l),n.removeAttribute(c)})}),e.tag._delayedSrc&&n.setAttribute("src",e.tag._delayedSrc)}}}},YN=["templateParams","htmlAttrs","bodyAttrs"],ZN=()=>({hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(n=>{t.props[n]&&(t.key=t.props[n],delete t.props[n])});const e=t.key?`${t.tag}:${t.key}`:J_(t);e&&(t._d=e)},"tags:resolve":function(t){const e={};t.tags.forEach(r=>{const s=r._d||r._p,i=e[s];if(i){let o=r==null?void 0:r.tagDuplicateStrategy;if(!o&&YN.includes(r.tag)&&(o="merge"),o==="merge"){const c=i.props;["class","style"].forEach(l=>{r.props[l]&&c[l]&&(l==="style"&&!c[l].endsWith(";")&&(c[l]+=";"),r.props[l]=`${c[l]} ${r.props[l]}`)}),e[s].props={...c,...r.props};return}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);return}const a=Object.keys(r.props).length;if((a===0||a===1&&typeof r.props["data-h-key"]<"u")&&!r.innerHTML&&!r.textContent){delete e[s];return}}e[s]=r});const n=[];Object.values(e).forEach(r=>{const s=r._duped;delete r._duped,n.push(r),s&&n.push(...s)}),t.tags=n}}});function To(t,e){function n(i){if(["s","pageTitle"].includes(i))return e.pageTitle;let o;return i.includes(".")?o=i.split(".").reduce((a,c)=>a&&a[c]||void 0,e):o=e[i],typeof o<"u"?o||"":!1}let r=t;try{r=decodeURI(t)}catch{}return(r.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(i=>{const o=n(i.slice(1));typeof o=="string"&&(t=t.replaceAll(new RegExp(`\\${i}(\\W|$)`,"g"),`${o}$1`).trim())}),e.separator&&(t.endsWith(e.separator)&&(t=t.slice(0,-e.separator.length).trim()),t.startsWith(e.separator)&&(t=t.slice(e.separator.length).trim()),t=t.replace(new RegExp(`\\${e.separator}\\s*\\${e.separator}`,"g"),e.separator)),t}function ex(){return{hooks:{"tags:resolve":t=>{var i;const{tags:e}=t,n=(i=e.find(o=>o.tag==="title"))==null?void 0:i.textContent,r=e.findIndex(o=>o.tag==="templateParams"),s=r!==-1?e[r].props:{};s.pageTitle=s.pageTitle||n||"";for(const o of e)if(["titleTemplate","title"].includes(o.tag)&&typeof o.textContent=="string")o.textContent=To(o.textContent,s);else if(o.tag==="meta"&&typeof o.props.content=="string")o.props.content=To(o.props.content,s);else if(o.tag==="link"&&typeof o.props.href=="string")o.props.href=To(o.props.href,s);else if(o.tag==="script"&&["application/json","application/ld+json"].includes(o.props.type)&&typeof o.innerHTML=="string")try{o.innerHTML=JSON.stringify(JSON.parse(o.innerHTML),(a,c)=>typeof c=="string"?To(c,s):c)}catch{}t.tags=e.filter(o=>o.tag!=="templateParams")}}}}const tx=typeof window<"u";let Z_;const nx=t=>Z_=t,rx=()=>Z_;async function sx(t,e){const n={tag:t,props:{}};return t==="templateParams"?(n.props=e,n):["title","titleTemplate"].includes(t)?(n.textContent=e instanceof Promise?await e:e,n):typeof e=="string"?["script","noscript","style"].includes(t)?(t==="script"&&(/^(https?:)?\/\//.test(e)||e.startsWith("/"))?n.props.src=e:n.innerHTML=e,n):!1:(n.props=await ox(t,{...e}),n.props.children&&(n.props.innerHTML=n.props.children),delete n.props.children,Object.keys(n.props).filter(r=>VN.includes(r)).forEach(r=>{(!["innerHTML","textContent"].includes(r)||G_.includes(n.tag))&&(n[r]=n.props[r]),delete n.props[r]}),["innerHTML","textContent"].forEach(r=>{if(n.tag==="script"&&typeof n[r]=="string"&&["application/ld+json","application/json"].includes(n.props.type))try{n[r]=JSON.parse(n[r])}catch{n[r]=""}typeof n[r]=="object"&&(n[r]=JSON.stringify(n[r]))}),n.props.class&&(n.props.class=ix(n.props.class)),n.props.content&&Array.isArray(n.props.content)?n.props.content.map(r=>({...n,props:{...n.props,content:r}})):n)}function ix(t){return typeof t=="object"&&!Array.isArray(t)&&(t=Object.keys(t).filter(e=>t[e])),(Array.isArray(t)?t.join(" "):t).split(" ").filter(e=>e.trim()).filter(Boolean).join(" ")}async function ox(t,e){for(const n of Object.keys(e)){const r=n.startsWith("data-");e[n]instanceof Promise&&(e[n]=await e[n]),String(e[n])==="true"?e[n]=r?"true":"":String(e[n])==="false"&&(r?e[n]="false":delete e[n])}return e}const ax=10;async function cx(t){const e=[];return Object.entries(t.resolvedInput).filter(([n,r])=>typeof r<"u"&&$N.includes(n)).forEach(([n,r])=>{const s=UN(r);e.push(...s.map(i=>sx(n,i)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((n,r)=>(n._e=t._i,n._p=(t._i<<ax)+r,n))}const lx=()=>[ZN(),WN(),ex(),zN(),JN(),XN(),GN()],ux=(t={})=>[HN({document:t==null?void 0:t.document,delayFn:t==null?void 0:t.domDelayFn})];function hx(t={}){const e=dx({...t,plugins:[...ux(t),...(t==null?void 0:t.plugins)||[]]});return t.experimentalHashHydration&&e.resolvedOptions.document&&(e._hash=qN(e.resolvedOptions.document)),nx(e),e}function dx(t={}){let e=[],n={},r=0;const s=MN();t!=null&&t.hooks&&s.addHooks(t.hooks),t.plugins=[...lx(),...(t==null?void 0:t.plugins)||[]],t.plugins.forEach(a=>a.hooks&&s.addHooks(a.hooks)),t.document=t.document||(tx?document:void 0);const i=()=>s.callHook("entries:updated",o),o={resolvedOptions:t,headEntries(){return e},get hooks(){return s},use(a){a.hooks&&s.addHooks(a.hooks)},push(a,c){const l={_i:r++,input:a,_sde:{}};return c!=null&&c.mode&&(l._m=c==null?void 0:c.mode),c!=null&&c.transform&&(l._t=c==null?void 0:c.transform),e.push(l),i(),{dispose(){e=e.filter(u=>u._i!==l._i?!0:(n={...n,...u._sde||{}},u._sde={},i(),!1))},patch(u){e=e.map(h=>(h._i===l._i&&(l.input=h.input=u,i()),h))}}},async resolveTags(){const a={tags:[],entries:[...e]};await s.callHook("entries:resolve",a);for(const c of a.entries){const l=c._t||(u=>u);if(c.resolvedInput=l(c.resolvedInput||c.input),c.resolvedInput)for(const u of await cx(c)){const h={tag:u,entry:c,resolvedOptions:o.resolvedOptions};await s.callHook("tag:normalise",h),a.tags.push(h.tag)}}return await s.callHook("tags:resolve",a),a.tags},_popSideEffectQueue(){const a={...n};return n={},a},_elMap:{}};return o.hooks.callHook("init",o),o}const fx=["useHead","useSeoMeta","useHeadSafe","useServerHead","useServerSeoMeta","useServerHeadSafe","useTagTitle","useTagBase","useTagMeta","useTagMetaFlat","useTagLink","useTagScript","useTagStyle","useTagNoscript","useHtmlAttrs","useBodyAttrs","useTitleTemplate","useServerTagTitle","useServerTagBase","useServerTagMeta","useServerTagMetaFlat","useServerTagLink","useServerTagScript","useServerTagStyle","useServerTagNoscript","useServerHtmlAttrs","useServerBodyAttrs","useServerTitleTemplate"];function px(t){return typeof t=="function"?t():Bn(t)}function _a(t,e=""){if(t instanceof Promise)return t;const n=px(t);return!t||!n?n:Array.isArray(n)?n.map(r=>_a(r,e)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([r,s])=>r==="titleTemplate"||r.startsWith("on")?[r,Bn(s)]:[r,_a(s,r)])):n}const mx=bu.startsWith("3"),gx=typeof window<"u",ew="usehead";function Wh(){return km()&&Nt(ew)||rx()}function yx(t){return{install(n){mx&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(ew,t))}}.install}function vx(t={}){const e=hx({...t,domDelayFn:n=>setTimeout(()=>gu(()=>n()),10),plugins:[_x(),...(t==null?void 0:t.plugins)||[]]});return e.install=yx(e),e}const _x=()=>({hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=_a(e.input)}}});function wx(t,e={}){const n=Wh(),r=fe(!1),s=fe({});om(()=>{s.value=r.value?{}:_a(t)});const i=n.push(s.value,e);return dr(s,a=>{i.patch(a)}),km()&&(dm(()=>{i.dispose()}),um(()=>{r.value=!0}),lm(()=>{r.value=!1})),i}function bx(t,e={}){return Wh().push(t,e)}function Ex(t,e={}){var r;const n=Wh();if(n){const s=gx||!!((r=n.resolvedOptions)!=null&&r.document);return e.mode==="server"&&s||e.mode==="client"&&!s?void 0:s?wx(t,e):bx(t,e)}}const Tx=["injectHead"];[...Tx,...fx];function Ix(t,e){const n=vx(e||{}),r={unhead:n,install(s){bu.startsWith("3")&&(s.config.globalProperties.$head=n,s.provide("usehead",n))},use(s){n.use(s)},resolveTags(){return n.resolveTags()},headEntries(){return n.headEntries()},headTags(){return n.resolveTags()},push(s,i){return n.push(s,i)},addEntry(s,i){return n.push(s,i)},addHeadObjs(s,i){return n.push(s,i)},addReactiveEntry(s,i){const o=Ex(s,i);return typeof o<"u"?o.dispose:()=>{}},removeHeadObjs(){},updateDOM(s,i){i?X_(n,{document:s}):Y_(n,{delayFn:o=>setTimeout(()=>o(),50),document:s})},internalHooks:n.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return n.addHeadObjs=r.addHeadObjs,n.updateDOM=r.updateDOM,n.hooks.hook("dom:beforeRender",s=>{for(const i of r.hooks["before:dom"])i()===!1&&(s.shouldRender=!1)}),t&&r.addHeadObjs(t),r}function Sx(t){try{return JSON.parse(t||"{}")}catch(e){return console.error("[SSG] On state deserialization -",e,t),{}}}function Cx(t){return document.readyState==="loading"?new Promise(e=>{document.addEventListener("DOMContentLoaded",()=>e(t))}):Promise.resolve(t)}const Ax=vu({setup(t,{slots:e}){const n=fe(!1);return Di(()=>n.value=!0),()=>n.value?e.default&&e.default({}):e.placeholder&&e.placeholder({})}});function kx(t,e,n,r={}){const{transformState:s,registerComponents:i=!0,useHead:o=!0,rootContainer:a="#app"}=r,c=typeof window<"u";async function l(u=!1,h){var J;const d=u?yE(t):vE(t);let m;o&&(m=Ix(),d.use(m));const f=oC({history:u?bS(e.base):ES(e.base),...e}),{routes:v}=e;i&&d.component("ClientOnly",Ax);const b=[],A={app:d,head:m,isClient:c,router:f,routes:v,onSSRAppRendered:u?()=>{}:U=>b.push(U),triggerOnSSRAppRendered:()=>Promise.all(b.map(U=>U())),initialState:{},transformState:s,routePath:h};u&&(await Cx(),A.initialState=(s==null?void 0:s(window.__INITIAL_STATE__||{}))||Sx(window.__INITIAL_STATE__)),await(n==null?void 0:n(A)),d.use(f);let N,H=!0;if(f.beforeEach((U,ie,be)=>{(H||N&&N===U.path)&&(H=!1,N=U.path,U.meta.state=A.initialState),be()}),!u){const U=(J=A.routePath)!=null?J:"/";f.push(U),await f.isReady(),A.initialState=f.currentRoute.value.meta.state||{}}const X=A.initialState;return{...A,initialState:X}}return c&&(async()=>{const{app:u,router:h}=await l(!0);await h.isReady(),u.mount(a,!0)})(),l}const Rx={apiKey:"AIzaSyCqBTxOJHaPP-AH5PKJHShNyAm1S2RSHUY",authDomain:"blog-ab-e3f50.firebaseapp.com",projectId:"blog-ab-e3f50",storageBucket:"blog-ab-e3f50.appspot.com",messagingSenderId:"206927976177",appId:"1:206927976177:web:d05793bbee8c4e62e9bb50"},ii=qm(Rx),Vr=IP(ii);kx(pC,{routes:kN,base:"Blog-AB"},async({app:t,router:e,routes:n,isClient:r,initialState:s})=>{t.use(Ip),Ip.replaceState(s.store)});
