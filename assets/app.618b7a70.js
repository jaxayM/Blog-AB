const Z_=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};Z_();function ru(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ew="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tw=ru(ew);function Rp(t){return!!t||t===""}function ba(t){if(te(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Xe(r)?sw(r):ba(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Xe(t))return t;if(Ke(t))return t}}const nw=/;(?![^(]*\))/g,rw=/:(.+)/;function sw(t){const e={};return t.split(nw).forEach(n=>{if(n){const r=n.split(rw);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function su(t){let e="";if(Xe(t))e=t;else if(te(t))for(let n=0;n<t.length;n++){const r=su(t[n]);r&&(e+=r+" ")}else if(Ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const wt=t=>Xe(t)?t:t==null?"":te(t)||Ke(t)&&(t.toString===Np||!se(t.toString))?JSON.stringify(t,Op,2):String(t),Op=(t,e)=>e&&e.__v_isRef?Op(t,e.value):Wr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Pp(e)?{[`Set(${e.size})`]:[...e.values()]}:Ke(e)&&!te(e)&&!xp(e)?String(e):e,Ce={},Kr=[],Vt=()=>{},iw=()=>!1,ow=/^on[^a-z]/,Pi=t=>ow.test(t),iu=t=>t.startsWith("onUpdate:"),mt=Object.assign,ou=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},aw=Object.prototype.hasOwnProperty,ue=(t,e)=>aw.call(t,e),te=Array.isArray,Wr=t=>Ea(t)==="[object Map]",Pp=t=>Ea(t)==="[object Set]",se=t=>typeof t=="function",Xe=t=>typeof t=="string",au=t=>typeof t=="symbol",Ke=t=>t!==null&&typeof t=="object",Dp=t=>Ke(t)&&se(t.then)&&se(t.catch),Np=Object.prototype.toString,Ea=t=>Np.call(t),cw=t=>Ea(t).slice(8,-1),xp=t=>Ea(t)==="[object Object]",cu=t=>Xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ks=ru(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ta=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},lw=/-(\w)/g,rn=Ta(t=>t.replace(lw,(e,n)=>n?n.toUpperCase():"")),uw=/\B([A-Z])/g,fs=Ta(t=>t.replace(uw,"-$1").toLowerCase()),Ia=Ta(t=>t.charAt(0).toUpperCase()+t.slice(1)),bc=Ta(t=>t?`on${Ia(t)}`:""),oi=(t,e)=>!Object.is(t,e),So=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Vo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},el=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Xh;const hw=()=>Xh||(Xh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Jt;class Lp{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Jt&&(this.parent=Jt,this.index=(Jt.scopes||(Jt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Jt;try{return Jt=this,e()}finally{Jt=n}}}on(){Jt=this}off(){Jt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function dw(t){return new Lp(t)}function fw(t,e=Jt){e&&e.active&&e.effects.push(t)}const lu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Mp=t=>(t.w&Wn)>0,Up=t=>(t.n&Wn)>0,pw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Wn},mw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Mp(s)&&!Up(s)?s.delete(t):e[n++]=s,s.w&=~Wn,s.n&=~Wn}e.length=n}},tl=new WeakMap;let Us=0,Wn=1;const nl=30;let Ft;const hr=Symbol(""),rl=Symbol("");class uu{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,fw(this,r)}run(){if(!this.active)return this.fn();let e=Ft,n=$n;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ft,Ft=this,$n=!0,Wn=1<<++Us,Us<=nl?pw(this):Yh(this),this.fn()}finally{Us<=nl&&mw(this),Wn=1<<--Us,Ft=this.parent,$n=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ft===this?this.deferStop=!0:this.active&&(Yh(this),this.onStop&&this.onStop(),this.active=!1)}}function Yh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let $n=!0;const Fp=[];function ps(){Fp.push($n),$n=!1}function ms(){const t=Fp.pop();$n=t===void 0?!0:t}function kt(t,e,n){if($n&&Ft){let r=tl.get(t);r||tl.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=lu()),$p(s)}}function $p(t,e){let n=!1;Us<=nl?Up(t)||(t.n|=Wn,n=!Mp(t)):n=!t.has(Ft),n&&(t.add(Ft),Ft.deps.push(t))}function mn(t,e,n,r,s,i){const o=tl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&te(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":te(t)?cu(n)&&a.push(o.get("length")):(a.push(o.get(hr)),Wr(t)&&a.push(o.get(rl)));break;case"delete":te(t)||(a.push(o.get(hr)),Wr(t)&&a.push(o.get(rl)));break;case"set":Wr(t)&&a.push(o.get(hr));break}if(a.length===1)a[0]&&sl(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);sl(lu(c))}}function sl(t,e){const n=te(t)?t:[...t];for(const r of n)r.computed&&Zh(r);for(const r of n)r.computed||Zh(r)}function Zh(t,e){(t!==Ft||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const gw=ru("__proto__,__v_isRef,__isVue"),Bp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(au)),yw=hu(),vw=hu(!1,!0),_w=hu(!0),ed=ww();function ww(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ye(this);for(let i=0,o=this.length;i<o;i++)kt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ye)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ps();const r=ye(this)[e].apply(this,n);return ms(),r}}),t}function hu(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Mw:Kp:e?qp:Hp).get(r))return r;const o=te(r);if(!t&&o&&ue(ed,s))return Reflect.get(ed,s,i);const a=Reflect.get(r,s,i);return(au(s)?Bp.has(s):gw(s))||(t||kt(r,"get",s),e)?a:ot(a)?o&&cu(s)?a:a.value:Ke(a)?t?Wp(a):Yn(a):a}}const bw=Vp(),Ew=Vp(!0);function Vp(t=!1){return function(n,r,s,i){let o=n[r];if(ai(o)&&ot(o)&&!ot(s))return!1;if(!t&&!ai(s)&&(il(s)||(s=ye(s),o=ye(o)),!te(n)&&ot(o)&&!ot(s)))return o.value=s,!0;const a=te(n)&&cu(r)?Number(r)<n.length:ue(n,r),c=Reflect.set(n,r,s,i);return n===ye(i)&&(a?oi(s,o)&&mn(n,"set",r,s):mn(n,"add",r,s)),c}}function Tw(t,e){const n=ue(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&mn(t,"delete",e,void 0),r}function Iw(t,e){const n=Reflect.has(t,e);return(!au(e)||!Bp.has(e))&&kt(t,"has",e),n}function Sw(t){return kt(t,"iterate",te(t)?"length":hr),Reflect.ownKeys(t)}const jp={get:yw,set:bw,deleteProperty:Tw,has:Iw,ownKeys:Sw},Cw={get:_w,set(t,e){return!0},deleteProperty(t,e){return!0}},Aw=mt({},jp,{get:vw,set:Ew}),du=t=>t,Sa=t=>Reflect.getPrototypeOf(t);function so(t,e,n=!1,r=!1){t=t.__v_raw;const s=ye(t),i=ye(e);n||(e!==i&&kt(s,"get",e),kt(s,"get",i));const{has:o}=Sa(s),a=r?du:n?mu:ci;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function io(t,e=!1){const n=this.__v_raw,r=ye(n),s=ye(t);return e||(t!==s&&kt(r,"has",t),kt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function oo(t,e=!1){return t=t.__v_raw,!e&&kt(ye(t),"iterate",hr),Reflect.get(t,"size",t)}function td(t){t=ye(t);const e=ye(this);return Sa(e).has.call(e,t)||(e.add(t),mn(e,"add",t,t)),this}function nd(t,e){e=ye(e);const n=ye(this),{has:r,get:s}=Sa(n);let i=r.call(n,t);i||(t=ye(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?oi(e,o)&&mn(n,"set",t,e):mn(n,"add",t,e),this}function rd(t){const e=ye(this),{has:n,get:r}=Sa(e);let s=n.call(e,t);s||(t=ye(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&mn(e,"delete",t,void 0),i}function sd(){const t=ye(this),e=t.size!==0,n=t.clear();return e&&mn(t,"clear",void 0,void 0),n}function ao(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ye(o),c=e?du:t?mu:ci;return!t&&kt(a,"iterate",hr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function co(t,e,n){return function(...r){const s=this.__v_raw,i=ye(s),o=Wr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?du:e?mu:ci;return!e&&kt(i,"iterate",c?rl:hr),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Sn(t){return function(...e){return t==="delete"?!1:this}}function kw(){const t={get(i){return so(this,i)},get size(){return oo(this)},has:io,add:td,set:nd,delete:rd,clear:sd,forEach:ao(!1,!1)},e={get(i){return so(this,i,!1,!0)},get size(){return oo(this)},has:io,add:td,set:nd,delete:rd,clear:sd,forEach:ao(!1,!0)},n={get(i){return so(this,i,!0)},get size(){return oo(this,!0)},has(i){return io.call(this,i,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:ao(!0,!1)},r={get(i){return so(this,i,!0,!0)},get size(){return oo(this,!0)},has(i){return io.call(this,i,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:ao(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=co(i,!1,!1),n[i]=co(i,!0,!1),e[i]=co(i,!1,!0),r[i]=co(i,!0,!0)}),[t,n,e,r]}const[Rw,Ow,Pw,Dw]=kw();function fu(t,e){const n=e?t?Dw:Pw:t?Ow:Rw;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ue(n,s)&&s in r?n:r,s,i)}const Nw={get:fu(!1,!1)},xw={get:fu(!1,!0)},Lw={get:fu(!0,!1)},Hp=new WeakMap,qp=new WeakMap,Kp=new WeakMap,Mw=new WeakMap;function Uw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fw(t){return t.__v_skip||!Object.isExtensible(t)?0:Uw(cw(t))}function Yn(t){return ai(t)?t:pu(t,!1,jp,Nw,Hp)}function $w(t){return pu(t,!1,Aw,xw,qp)}function Wp(t){return pu(t,!0,Cw,Lw,Kp)}function pu(t,e,n,r,s){if(!Ke(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Fw(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function zr(t){return ai(t)?zr(t.__v_raw):!!(t&&t.__v_isReactive)}function ai(t){return!!(t&&t.__v_isReadonly)}function il(t){return!!(t&&t.__v_isShallow)}function zp(t){return zr(t)||ai(t)}function ye(t){const e=t&&t.__v_raw;return e?ye(e):t}function Gp(t){return Vo(t,"__v_skip",!0),t}const ci=t=>Ke(t)?Yn(t):t,mu=t=>Ke(t)?Wp(t):t;function Qp(t){$n&&Ft&&(t=ye(t),$p(t.dep||(t.dep=lu())))}function Jp(t,e){t=ye(t),t.dep&&sl(t.dep)}function ot(t){return!!(t&&t.__v_isRef===!0)}function fe(t){return Xp(t,!1)}function Bw(t){return Xp(t,!0)}function Xp(t,e){return ot(t)?t:new Vw(t,e)}class Vw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ye(e),this._value=n?e:ci(e)}get value(){return Qp(this),this._value}set value(e){e=this.__v_isShallow?e:ye(e),oi(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:ci(e),Jp(this))}}function Bn(t){return ot(t)?t.value:t}const jw={get:(t,e,n)=>Bn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ot(s)&&!ot(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Yp(t){return zr(t)?t:new Proxy(t,jw)}class Hw{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new uu(e,()=>{this._dirty||(this._dirty=!0,Jp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ye(this);return Qp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function qw(t,e,n=!1){let r,s;const i=se(t);return i?(r=t,s=Vt):(r=t.get,s=t.set),new Hw(r,s,i||!s,n)}function Vn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ca(i,e,n)}return s}function jt(t,e,n,r){if(se(t)){const i=Vn(t,e,n,r);return i&&Dp(i)&&i.catch(o=>{Ca(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(jt(t[i],e,n,r));return s}function Ca(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Vn(c,null,10,[t,o,a]);return}}Kw(t,n,s,r)}function Kw(t,e,n,r=!0){console.error(t)}let jo=!1,ol=!1;const St=[];let ln=0;const Ws=[];let Fs=null,Ur=0;const zs=[];let On=null,Fr=0;const Zp=Promise.resolve();let gu=null,al=null;function yu(t){const e=gu||Zp;return t?e.then(this?t.bind(this):t):e}function Ww(t){let e=ln+1,n=St.length;for(;e<n;){const r=e+n>>>1;li(St[r])<t?e=r+1:n=r}return e}function em(t){(!St.length||!St.includes(t,jo&&t.allowRecurse?ln+1:ln))&&t!==al&&(t.id==null?St.push(t):St.splice(Ww(t.id),0,t),tm())}function tm(){!jo&&!ol&&(ol=!0,gu=Zp.then(rm))}function zw(t){const e=St.indexOf(t);e>ln&&St.splice(e,1)}function nm(t,e,n,r){te(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),tm()}function Gw(t){nm(t,Fs,Ws,Ur)}function Qw(t){nm(t,On,zs,Fr)}function Aa(t,e=null){if(Ws.length){for(al=e,Fs=[...new Set(Ws)],Ws.length=0,Ur=0;Ur<Fs.length;Ur++)Fs[Ur]();Fs=null,Ur=0,al=null,Aa(t,e)}}function Ho(t){if(Aa(),zs.length){const e=[...new Set(zs)];if(zs.length=0,On){On.push(...e);return}for(On=e,On.sort((n,r)=>li(n)-li(r)),Fr=0;Fr<On.length;Fr++)On[Fr]();On=null,Fr=0}}const li=t=>t.id==null?1/0:t.id;function rm(t){ol=!1,jo=!0,Aa(t),St.sort((n,r)=>li(n)-li(r));const e=Vt;try{for(ln=0;ln<St.length;ln++){const n=St[ln];n&&n.active!==!1&&Vn(n,null,14)}}finally{ln=0,St.length=0,Ho(),jo=!1,gu=null,(St.length||Ws.length||zs.length)&&rm(t)}}function Jw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Ce;d&&(s=n.map(m=>m.trim())),h&&(s=n.map(el))}let a,c=r[a=bc(e)]||r[a=bc(rn(e))];!c&&i&&(c=r[a=bc(fs(e))]),c&&jt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,jt(l,t,6,s)}}function sm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!se(t)){const c=l=>{const u=sm(l,e,!0);u&&(a=!0,mt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(te(i)?i.forEach(c=>o[c]=null):mt(o,i),r.set(t,o),o)}function ka(t,e){return!t||!Pi(e)?!1:(e=e.slice(2).replace(/Once$/,""),ue(t,e[0].toLowerCase()+e.slice(1))||ue(t,fs(e))||ue(t,e))}let at=null,Ra=null;function qo(t){const e=at;return at=t,Ra=t&&t.type.__scopeId||null,e}function Xw(t){Ra=t}function Yw(){Ra=null}function Ct(t,e=at,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&md(-1);const i=qo(e),o=t(...s);return qo(i),r._d&&md(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Ec(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:m,ctx:f,inheritAttrs:v}=t;let b,y;const _=qo(t);try{if(n.shapeFlag&4){const N=s||r;b=Ut(u.call(N,N,h,i,m,d,f)),y=c}else{const N=e;b=Ut(N.length>1?N(i,{attrs:c,slots:a,emit:l}):N(i,null)),y=e.props?c:Zw(c)}}catch(N){Gs.length=0,Ca(N,t,1),b=Ee(yn)}let A=b;if(y&&v!==!1){const N=Object.keys(y),{shapeFlag:H}=A;N.length&&H&7&&(o&&N.some(iu)&&(y=eb(y,o)),A=Zr(A,y))}return n.dirs&&(A=Zr(A),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&(A.transition=n.transition),b=A,qo(_),b}const Zw=t=>{let e;for(const n in t)(n==="class"||n==="style"||Pi(n))&&((e||(e={}))[n]=t[n]);return e},eb=(t,e)=>{const n={};for(const r in t)(!iu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function tb(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?id(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!ka(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?id(r,o,l):!0:!!o;return!1}function id(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ka(n,i))return!0}return!1}function nb({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const rb=t=>t.__isSuspense;function im(t,e){e&&e.pendingBranch?te(t)?e.effects.push(...t):e.effects.push(t):Qw(t)}function Co(t,e){if(Je){let n=Je.provides;const r=Je.parent&&Je.parent.provides;r===n&&(n=Je.provides=Object.create(r)),n[t]=e}}function Nt(t,e,n=!1){const r=Je||at;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&se(e)?e.call(r.proxy):e}}function om(t,e){return vu(t,null,e)}const od={};function dr(t,e,n){return vu(t,e,n)}function vu(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ce){const a=Je;let c,l=!1,u=!1;if(ot(t)?(c=()=>t.value,l=il(t)):zr(t)?(c=()=>t,r=!0):te(t)?(u=!0,l=t.some(y=>zr(y)||il(y)),c=()=>t.map(y=>{if(ot(y))return y.value;if(zr(y))return ar(y);if(se(y))return Vn(y,a,2)})):se(t)?e?c=()=>Vn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),jt(t,a,3,[d])}:c=Vt,e&&r){const y=c;c=()=>ar(y())}let h,d=y=>{h=b.onStop=()=>{Vn(y,a,4)}};if(fi)return d=Vt,e?n&&jt(e,a,3,[c(),u?[]:void 0,d]):c(),Vt;let m=u?[]:od;const f=()=>{if(!!b.active)if(e){const y=b.run();(r||l||(u?y.some((_,A)=>oi(_,m[A])):oi(y,m)))&&(h&&h(),jt(e,a,3,[y,m===od?void 0:m,d]),m=y)}else b.run()};f.allowRecurse=!!e;let v;s==="sync"?v=f:s==="post"?v=()=>yt(f,a&&a.suspense):v=()=>Gw(f);const b=new uu(c,v);return e?n?f():m=b.run():s==="post"?yt(b.run.bind(b),a&&a.suspense):b.run(),()=>{b.stop(),a&&a.scope&&ou(a.scope.effects,b)}}function sb(t,e,n){const r=this.proxy,s=Xe(t)?t.includes(".")?am(r,t):()=>r[t]:t.bind(r,r);let i;se(e)?i=e:(i=e.handler,n=e);const o=Je;es(this);const a=vu(s,i.bind(r),n);return o?es(o):fr(),a}function am(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function ar(t,e){if(!Ke(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ot(t))ar(t.value,e);else if(te(t))for(let n=0;n<t.length;n++)ar(t[n],e);else if(Pp(t)||Wr(t))t.forEach(n=>{ar(n,e)});else if(xp(t))for(const n in t)ar(t[n],e);return t}function _u(t){return se(t)?{setup:t,name:t.name}:t}const Gr=t=>!!t.type.__asyncLoader,cm=t=>t.type.__isKeepAlive;function lm(t,e){hm(t,"a",e)}function um(t,e){hm(t,"da",e)}function hm(t,e,n=Je){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Oa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)cm(s.parent.vnode)&&ib(r,e,n,s),s=s.parent}}function ib(t,e,n,r){const s=Oa(e,t,r,!0);fm(()=>{ou(r[e],s)},n)}function Oa(t,e,n=Je,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ps(),es(n);const a=jt(e,n,t,o);return fr(),ms(),a});return r?s.unshift(i):s.push(i),i}}const Tn=t=>(e,n=Je)=>(!fi||t==="sp")&&Oa(t,e,n),ob=Tn("bm"),Di=Tn("m"),ab=Tn("bu"),cb=Tn("u"),dm=Tn("bum"),fm=Tn("um"),lb=Tn("sp"),ub=Tn("rtg"),hb=Tn("rtc");function db(t,e=Je){Oa("ec",t,e)}function Ve(t,e){const n=at;if(n===null)return t;const r=Na(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ce]=e[i];se(o)&&(o={mounted:o,updated:o}),o.deep&&ar(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function Xt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(ps(),jt(c,n,8,[t.el,a,t,e]),ms())}}const pm="components";function gn(t,e){return pb(pm,t,!0,e)||t}const fb=Symbol();function pb(t,e,n=!0,r=!1){const s=at||Je;if(s){const i=s.type;if(t===pm){const a=qb(i,!1);if(a&&(a===e||a===rn(e)||a===Ia(rn(e))))return i}const o=ad(s[t]||i[t],e)||ad(s.appContext[t],e);return!o&&r?i:o}}function ad(t,e){return t&&(t[e]||t[rn(e)]||t[Ia(rn(e))])}function Pa(t,e,n,r){let s;const i=n&&n[r];if(te(t)||Xe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ke(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function cd(t,e,n={},r,s){if(at.isCE||at.parent&&Gr(at.parent)&&at.parent.isCE)return Ee("slot",e==="default"?null:{name:e},r&&r());let i=t[e];i&&i._c&&(i._d=!1),me();const o=i&&mm(i(n)),a=di(Le,{key:n.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function mm(t){return t.some(e=>Go(e)?!(e.type===yn||e.type===Le&&!mm(e.children)):!0)?t:null}const cl=t=>t?Rm(t)?Na(t)||t.proxy:cl(t.parent):null,Ko=mt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>cl(t.parent),$root:t=>cl(t.root),$emit:t=>t.emit,$options:t=>ym(t),$forceUpdate:t=>t.f||(t.f=()=>em(t.update)),$nextTick:t=>t.n||(t.n=yu.bind(t.proxy)),$watch:t=>sb.bind(t)}),mb={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==Ce&&ue(r,e))return o[e]=1,r[e];if(s!==Ce&&ue(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ue(l,e))return o[e]=3,i[e];if(n!==Ce&&ue(n,e))return o[e]=4,n[e];ll&&(o[e]=0)}}const u=Ko[e];let h,d;if(u)return e==="$attrs"&&kt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ce&&ue(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ue(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==Ce&&ue(s,e)?(s[e]=n,!0):r!==Ce&&ue(r,e)?(r[e]=n,!0):ue(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ce&&ue(t,o)||e!==Ce&&ue(e,o)||(a=i[0])&&ue(a,o)||ue(r,o)||ue(Ko,o)||ue(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ue(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let ll=!0;function gb(t){const e=ym(t),n=t.proxy,r=t.ctx;ll=!1,e.beforeCreate&&ld(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:m,updated:f,activated:v,deactivated:b,beforeDestroy:y,beforeUnmount:_,destroyed:A,unmounted:N,render:H,renderTracked:X,renderTriggered:J,errorCaptured:U,serverPrefetch:ie,expose:be,inheritAttrs:Pe,components:Ze,directives:je,filters:Q}=e;if(l&&yb(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Ae in o){const Te=o[Ae];se(Te)&&(r[Ae]=Te.bind(n))}if(s){const Ae=s.call(n,n);Ke(Ae)&&(t.data=Yn(Ae))}if(ll=!0,i)for(const Ae in i){const Te=i[Ae],Tt=se(Te)?Te.bind(n,n):se(Te.get)?Te.get.bind(n,n):Vt,Pr=!se(Te)&&se(Te.set)?Te.set.bind(n):Vt,an=vt({get:Tt,set:Pr});Object.defineProperty(r,Ae,{enumerable:!0,configurable:!0,get:()=>an.value,set:zt=>an.value=zt})}if(a)for(const Ae in a)gm(a[Ae],r,n,Ae);if(c){const Ae=se(c)?c.call(n):c;Reflect.ownKeys(Ae).forEach(Te=>{Co(Te,Ae[Te])})}u&&ld(u,t,"c");function ve(Ae,Te){te(Te)?Te.forEach(Tt=>Ae(Tt.bind(n))):Te&&Ae(Te.bind(n))}if(ve(ob,h),ve(Di,d),ve(ab,m),ve(cb,f),ve(lm,v),ve(um,b),ve(db,U),ve(hb,X),ve(ub,J),ve(dm,_),ve(fm,N),ve(lb,ie),te(be))if(be.length){const Ae=t.exposed||(t.exposed={});be.forEach(Te=>{Object.defineProperty(Ae,Te,{get:()=>n[Te],set:Tt=>n[Te]=Tt})})}else t.exposed||(t.exposed={});H&&t.render===Vt&&(t.render=H),Pe!=null&&(t.inheritAttrs=Pe),Ze&&(t.components=Ze),je&&(t.directives=je)}function yb(t,e,n=Vt,r=!1){te(t)&&(t=ul(t));for(const s in t){const i=t[s];let o;Ke(i)?"default"in i?o=Nt(i.from||s,i.default,!0):o=Nt(i.from||s):o=Nt(i),ot(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function ld(t,e,n){jt(te(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function gm(t,e,n,r){const s=r.includes(".")?am(n,r):()=>n[r];if(Xe(t)){const i=e[t];se(i)&&dr(s,i)}else if(se(t))dr(s,t.bind(n));else if(Ke(t))if(te(t))t.forEach(i=>gm(i,e,n,r));else{const i=se(t.handler)?t.handler.bind(n):e[t.handler];se(i)&&dr(s,i,t)}}function ym(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Wo(c,l,o,!0)),Wo(c,e,o)),i.set(e,c),c}function Wo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Wo(t,i,n,!0),s&&s.forEach(o=>Wo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=vb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const vb={data:ud,props:sr,emits:sr,methods:sr,computed:sr,beforeCreate:ft,created:ft,beforeMount:ft,mounted:ft,beforeUpdate:ft,updated:ft,beforeDestroy:ft,beforeUnmount:ft,destroyed:ft,unmounted:ft,activated:ft,deactivated:ft,errorCaptured:ft,serverPrefetch:ft,components:sr,directives:sr,watch:wb,provide:ud,inject:_b};function ud(t,e){return e?t?function(){return mt(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function _b(t,e){return sr(ul(t),ul(e))}function ul(t){if(te(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ft(t,e){return t?[...new Set([].concat(t,e))]:e}function sr(t,e){return t?mt(mt(Object.create(null),t),e):e}function wb(t,e){if(!t)return e;if(!e)return t;const n=mt(Object.create(null),t);for(const r in e)n[r]=ft(t[r],e[r]);return n}function bb(t,e,n,r=!1){const s={},i={};Vo(i,Da,1),t.propsDefaults=Object.create(null),vm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:$w(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Eb(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ye(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ka(t.emitsOptions,d))continue;const m=e[d];if(c)if(ue(i,d))m!==i[d]&&(i[d]=m,l=!0);else{const f=rn(d);s[f]=hl(c,a,f,m,t,!1)}else m!==i[d]&&(i[d]=m,l=!0)}}}else{vm(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ue(e,h)&&((u=fs(h))===h||!ue(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=hl(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ue(e,h)&&!0)&&(delete i[h],l=!0)}l&&mn(t,"set","$attrs")}function vm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ks(c))continue;const l=e[c];let u;s&&ue(s,u=rn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ka(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=ye(n),l=a||Ce;for(let u=0;u<i.length;u++){const h=i[u];n[h]=hl(s,c,h,l[h],t,!ue(l,h))}}return o}function hl(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ue(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&se(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(es(s),r=l[n]=c.call(null,e),fr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===fs(n))&&(r=!0))}return r}function _m(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!se(t)){const u=h=>{c=!0;const[d,m]=_m(h,e,!0);mt(o,d),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return r.set(t,Kr),Kr;if(te(i))for(let u=0;u<i.length;u++){const h=rn(i[u]);hd(h)&&(o[h]=Ce)}else if(i)for(const u in i){const h=rn(u);if(hd(h)){const d=i[u],m=o[h]=te(d)||se(d)?{type:d}:d;if(m){const f=pd(Boolean,m.type),v=pd(String,m.type);m[0]=f>-1,m[1]=v<0||f<v,(f>-1||ue(m,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function hd(t){return t[0]!=="$"}function dd(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function fd(t,e){return dd(t)===dd(e)}function pd(t,e){return te(e)?e.findIndex(n=>fd(n,t)):se(e)&&fd(e,t)?0:-1}const wm=t=>t[0]==="_"||t==="$stable",wu=t=>te(t)?t.map(Ut):[Ut(t)],Tb=(t,e,n)=>{if(e._n)return e;const r=Ct((...s)=>wu(e(...s)),n);return r._c=!1,r},bm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(wm(s))continue;const i=t[s];if(se(i))e[s]=Tb(s,i,r);else if(i!=null){const o=wu(i);e[s]=()=>o}}},Em=(t,e)=>{const n=wu(e);t.slots.default=()=>n},Ib=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ye(e),Vo(e,"_",n)):bm(e,t.slots={})}else t.slots={},e&&Em(t,e);Vo(t.slots,Da,1)},Sb=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ce;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(mt(s,e),!n&&a===1&&delete s._):(i=!e.$stable,bm(e,s)),o=e}else e&&(Em(t,e),o={default:1});if(i)for(const a in s)!wm(a)&&!(a in o)&&delete s[a]};function Tm(){return{app:null,config:{isNativeTag:iw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cb=0;function Ab(t,e){return function(r,s=null){se(r)||(r=Object.assign({},r)),s!=null&&!Ke(s)&&(s=null);const i=Tm(),o=new Set;let a=!1;const c=i.app={_uid:Cb++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Eu,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&se(l.install)?(o.add(l),l.install(c,...u)):se(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=Ee(r,s);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Na(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function zo(t,e,n,r,s=!1){if(te(t)){t.forEach((d,m)=>zo(d,e&&(te(e)?e[m]:e),n,r,s));return}if(Gr(r)&&!s)return;const i=r.shapeFlag&4?Na(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ce?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Xe(l)?(u[l]=null,ue(h,l)&&(h[l]=null)):ot(l)&&(l.value=null)),se(c))Vn(c,a,12,[o,u]);else{const d=Xe(c),m=ot(c);if(d||m){const f=()=>{if(t.f){const v=d?u[c]:c.value;s?te(v)&&ou(v,i):te(v)?v.includes(i)||v.push(i):d?(u[c]=[i],ue(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ue(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(f.id=-1,yt(f,n)):f()}}}let Cn=!1;const lo=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",uo=t=>t.nodeType===8;function kb(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:l}}=t,u=(y,_)=>{if(!_.hasChildNodes()){n(null,y,_),Ho(),_._vnode=y;return}Cn=!1,h(_.firstChild,y,null,null,null),Ho(),_._vnode=y,Cn&&console.error("Hydration completed but contains mismatches.")},h=(y,_,A,N,H,X=!1)=>{const J=uo(y)&&y.data==="[",U=()=>v(y,_,A,N,H,J),{type:ie,ref:be,shapeFlag:Pe,patchFlag:Ze}=_,je=y.nodeType;_.el=y,Ze===-2&&(X=!1,_.dynamicChildren=null);let Q=null;switch(ie){case ui:je!==3?_.children===""?(c(_.el=s(""),o(y),y),Q=y):Q=U():(y.data!==_.children&&(Cn=!0,y.data=_.children),Q=i(y));break;case yn:je!==8||J?Q=U():Q=i(y);break;case Ao:if(je!==1&&je!==3)Q=U();else{Q=y;const gt=!_.children.length;for(let ve=0;ve<_.staticCount;ve++)gt&&(_.children+=Q.nodeType===1?Q.outerHTML:Q.data),ve===_.staticCount-1&&(_.anchor=Q),Q=i(Q);return Q}break;case Le:J?Q=f(y,_,A,N,H,X):Q=U();break;default:if(Pe&1)je!==1||_.type.toLowerCase()!==y.tagName.toLowerCase()?Q=U():Q=d(y,_,A,N,H,X);else if(Pe&6){_.slotScopeIds=H;const gt=o(y);if(e(_,gt,null,A,N,lo(gt),X),Q=J?b(y):i(y),Q&&uo(Q)&&Q.data==="teleport end"&&(Q=i(Q)),Gr(_)){let ve;J?(ve=Ee(Le),ve.anchor=Q?Q.previousSibling:gt.lastChild):ve=y.nodeType===3?Ge(""):Ee("div"),ve.el=y,_.component.subTree=ve}}else Pe&64?je!==8?Q=U():Q=_.type.hydrate(y,_,A,N,H,X,t,m):Pe&128&&(Q=_.type.hydrate(y,_,A,N,lo(o(y)),H,X,t,h))}return be!=null&&zo(be,null,N,_),Q},d=(y,_,A,N,H,X)=>{X=X||!!_.dynamicChildren;const{type:J,props:U,patchFlag:ie,shapeFlag:be,dirs:Pe}=_,Ze=J==="input"&&Pe||J==="option";if(Ze||ie!==-1){if(Pe&&Xt(_,null,A,"created"),U)if(Ze||!X||ie&48)for(const Q in U)(Ze&&Q.endsWith("value")||Pi(Q)&&!Ks(Q))&&r(y,Q,null,U[Q],!1,void 0,A);else U.onClick&&r(y,"onClick",null,U.onClick,!1,void 0,A);let je;if((je=U&&U.onVnodeBeforeMount)&&Pt(je,A,_),Pe&&Xt(_,null,A,"beforeMount"),((je=U&&U.onVnodeMounted)||Pe)&&im(()=>{je&&Pt(je,A,_),Pe&&Xt(_,null,A,"mounted")},N),be&16&&!(U&&(U.innerHTML||U.textContent))){let Q=m(y.firstChild,_,y,A,N,H,X);for(;Q;){Cn=!0;const gt=Q;Q=Q.nextSibling,a(gt)}}else be&8&&y.textContent!==_.children&&(Cn=!0,y.textContent=_.children)}return y.nextSibling},m=(y,_,A,N,H,X,J)=>{J=J||!!_.dynamicChildren;const U=_.children,ie=U.length;for(let be=0;be<ie;be++){const Pe=J?U[be]:U[be]=Ut(U[be]);if(y)y=h(y,Pe,N,H,X,J);else{if(Pe.type===ui&&!Pe.children)continue;Cn=!0,n(null,Pe,A,null,N,H,lo(A),X)}}return y},f=(y,_,A,N,H,X)=>{const{slotScopeIds:J}=_;J&&(H=H?H.concat(J):J);const U=o(y),ie=m(i(y),_,U,A,N,H,X);return ie&&uo(ie)&&ie.data==="]"?i(_.anchor=ie):(Cn=!0,c(_.anchor=l("]"),U,ie),ie)},v=(y,_,A,N,H,X)=>{if(Cn=!0,_.el=null,X){const ie=b(y);for(;;){const be=i(y);if(be&&be!==ie)a(be);else break}}const J=i(y),U=o(y);return a(y),n(null,_,U,J,A,N,lo(U),H),J},b=y=>{let _=0;for(;y;)if(y=i(y),y&&uo(y)&&(y.data==="["&&_++,y.data==="]")){if(_===0)return i(y);_--}return y};return[u,h]}const yt=im;function Rb(t){return Im(t)}function Ob(t){return Im(t,kb)}function Im(t,e){const n=hw();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:m=Vt,cloneNode:f,insertStaticContent:v}=t,b=(p,g,w,S=null,I=null,P=null,M=!1,O=null,x=!!g.dynamicChildren)=>{if(p===g)return;p&&!Os(p,g)&&(S=V(p),Ot(p,I,P,!0),p=null),g.patchFlag===-2&&(x=!1,g.dynamicChildren=null);const{type:C,ref:q,shapeFlag:F}=g;switch(C){case ui:y(p,g,w,S);break;case yn:_(p,g,w,S);break;case Ao:p==null&&A(g,w,S,M);break;case Le:je(p,g,w,S,I,P,M,O,x);break;default:F&1?X(p,g,w,S,I,P,M,O,x):F&6?Q(p,g,w,S,I,P,M,O,x):(F&64||F&128)&&C.process(p,g,w,S,I,P,M,O,x,ke)}q!=null&&I&&zo(q,p&&p.ref,P,g||p,!g)},y=(p,g,w,S)=>{if(p==null)r(g.el=a(g.children),w,S);else{const I=g.el=p.el;g.children!==p.children&&l(I,g.children)}},_=(p,g,w,S)=>{p==null?r(g.el=c(g.children||""),w,S):g.el=p.el},A=(p,g,w,S)=>{[p.el,p.anchor]=v(p.children,g,w,S,p.el,p.anchor)},N=({el:p,anchor:g},w,S)=>{let I;for(;p&&p!==g;)I=d(p),r(p,w,S),p=I;r(g,w,S)},H=({el:p,anchor:g})=>{let w;for(;p&&p!==g;)w=d(p),s(p),p=w;s(g)},X=(p,g,w,S,I,P,M,O,x)=>{M=M||g.type==="svg",p==null?J(g,w,S,I,P,M,O,x):be(p,g,I,P,M,O,x)},J=(p,g,w,S,I,P,M,O)=>{let x,C;const{type:q,props:F,shapeFlag:K,transition:Z,patchFlag:he,dirs:Ie}=p;if(p.el&&f!==void 0&&he===-1)x=p.el=f(p.el);else{if(x=p.el=o(p.type,P,F&&F.is,F),K&8?u(x,p.children):K&16&&ie(p.children,x,null,S,I,P&&q!=="foreignObject",M,O),Ie&&Xt(p,null,S,"created"),F){for(const De in F)De!=="value"&&!Ks(De)&&i(x,De,null,F[De],P,p.children,S,I,L);"value"in F&&i(x,"value",null,F.value),(C=F.onVnodeBeforeMount)&&Pt(C,S,p)}U(x,p,p.scopeId,M,S)}Ie&&Xt(p,null,S,"beforeMount");const Se=(!I||I&&!I.pendingBranch)&&Z&&!Z.persisted;Se&&Z.beforeEnter(x),r(x,g,w),((C=F&&F.onVnodeMounted)||Se||Ie)&&yt(()=>{C&&Pt(C,S,p),Se&&Z.enter(x),Ie&&Xt(p,null,S,"mounted")},I)},U=(p,g,w,S,I)=>{if(w&&m(p,w),S)for(let P=0;P<S.length;P++)m(p,S[P]);if(I){let P=I.subTree;if(g===P){const M=I.vnode;U(p,M,M.scopeId,M.slotScopeIds,I.parent)}}},ie=(p,g,w,S,I,P,M,O,x=0)=>{for(let C=x;C<p.length;C++){const q=p[C]=O?Pn(p[C]):Ut(p[C]);b(null,q,g,w,S,I,P,M,O)}},be=(p,g,w,S,I,P,M)=>{const O=g.el=p.el;let{patchFlag:x,dynamicChildren:C,dirs:q}=g;x|=p.patchFlag&16;const F=p.props||Ce,K=g.props||Ce;let Z;w&&rr(w,!1),(Z=K.onVnodeBeforeUpdate)&&Pt(Z,w,g,p),q&&Xt(g,p,w,"beforeUpdate"),w&&rr(w,!0);const he=I&&g.type!=="foreignObject";if(C?Pe(p.dynamicChildren,C,O,w,S,he,P):M||Tt(p,g,O,null,w,S,he,P,!1),x>0){if(x&16)Ze(O,g,F,K,w,S,I);else if(x&2&&F.class!==K.class&&i(O,"class",null,K.class,I),x&4&&i(O,"style",F.style,K.style,I),x&8){const Ie=g.dynamicProps;for(let Se=0;Se<Ie.length;Se++){const De=Ie[Se],Mt=F[De],Dr=K[De];(Dr!==Mt||De==="value")&&i(O,De,Mt,Dr,I,p.children,w,S,L)}}x&1&&p.children!==g.children&&u(O,g.children)}else!M&&C==null&&Ze(O,g,F,K,w,S,I);((Z=K.onVnodeUpdated)||q)&&yt(()=>{Z&&Pt(Z,w,g,p),q&&Xt(g,p,w,"updated")},S)},Pe=(p,g,w,S,I,P,M)=>{for(let O=0;O<g.length;O++){const x=p[O],C=g[O],q=x.el&&(x.type===Le||!Os(x,C)||x.shapeFlag&70)?h(x.el):w;b(x,C,q,null,S,I,P,M,!0)}},Ze=(p,g,w,S,I,P,M)=>{if(w!==S){for(const O in S){if(Ks(O))continue;const x=S[O],C=w[O];x!==C&&O!=="value"&&i(p,O,C,x,M,g.children,I,P,L)}if(w!==Ce)for(const O in w)!Ks(O)&&!(O in S)&&i(p,O,w[O],null,M,g.children,I,P,L);"value"in S&&i(p,"value",w.value,S.value)}},je=(p,g,w,S,I,P,M,O,x)=>{const C=g.el=p?p.el:a(""),q=g.anchor=p?p.anchor:a("");let{patchFlag:F,dynamicChildren:K,slotScopeIds:Z}=g;Z&&(O=O?O.concat(Z):Z),p==null?(r(C,w,S),r(q,w,S),ie(g.children,w,q,I,P,M,O,x)):F>0&&F&64&&K&&p.dynamicChildren?(Pe(p.dynamicChildren,K,w,I,P,M,O),(g.key!=null||I&&g===I.subTree)&&Sm(p,g,!0)):Tt(p,g,w,q,I,P,M,O,x)},Q=(p,g,w,S,I,P,M,O,x)=>{g.slotScopeIds=O,p==null?g.shapeFlag&512?I.ctx.activate(g,w,S,M,x):gt(g,w,S,I,P,M,x):ve(p,g,x)},gt=(p,g,w,S,I,P,M)=>{const O=p.component=$b(p,S,I);if(cm(p)&&(O.ctx.renderer=ke),Bb(O),O.asyncDep){if(I&&I.registerDep(O,Ae),!p.el){const x=O.subTree=Ee(yn);_(null,x,g,w)}return}Ae(O,p,g,w,I,P,M)},ve=(p,g,w)=>{const S=g.component=p.component;if(tb(p,g,w))if(S.asyncDep&&!S.asyncResolved){Te(S,g,w);return}else S.next=g,zw(S.update),S.update();else g.el=p.el,S.vnode=g},Ae=(p,g,w,S,I,P,M)=>{const O=()=>{if(p.isMounted){let{next:q,bu:F,u:K,parent:Z,vnode:he}=p,Ie=q,Se;rr(p,!1),q?(q.el=he.el,Te(p,q,M)):q=he,F&&So(F),(Se=q.props&&q.props.onVnodeBeforeUpdate)&&Pt(Se,Z,q,he),rr(p,!0);const De=Ec(p),Mt=p.subTree;p.subTree=De,b(Mt,De,h(Mt.el),V(Mt),p,I,P),q.el=De.el,Ie===null&&nb(p,De.el),K&&yt(K,I),(Se=q.props&&q.props.onVnodeUpdated)&&yt(()=>Pt(Se,Z,q,he),I)}else{let q;const{el:F,props:K}=g,{bm:Z,m:he,parent:Ie}=p,Se=Gr(g);if(rr(p,!1),Z&&So(Z),!Se&&(q=K&&K.onVnodeBeforeMount)&&Pt(q,Ie,g),rr(p,!0),F&&ne){const De=()=>{p.subTree=Ec(p),ne(F,p.subTree,p,I,null)};Se?g.type.__asyncLoader().then(()=>!p.isUnmounted&&De()):De()}else{const De=p.subTree=Ec(p);b(null,De,w,S,p,I,P),g.el=De.el}if(he&&yt(he,I),!Se&&(q=K&&K.onVnodeMounted)){const De=g;yt(()=>Pt(q,Ie,De),I)}(g.shapeFlag&256||Ie&&Gr(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&p.a&&yt(p.a,I),p.isMounted=!0,g=w=S=null}},x=p.effect=new uu(O,()=>em(C),p.scope),C=p.update=()=>x.run();C.id=p.uid,rr(p,!0),C()},Te=(p,g,w)=>{g.component=p;const S=p.vnode.props;p.vnode=g,p.next=null,Eb(p,g.props,S,w),Sb(p,g.children,w),ps(),Aa(void 0,p.update),ms()},Tt=(p,g,w,S,I,P,M,O,x=!1)=>{const C=p&&p.children,q=p?p.shapeFlag:0,F=g.children,{patchFlag:K,shapeFlag:Z}=g;if(K>0){if(K&128){an(C,F,w,S,I,P,M,O,x);return}else if(K&256){Pr(C,F,w,S,I,P,M,O,x);return}}Z&8?(q&16&&L(C,I,P),F!==C&&u(w,F)):q&16?Z&16?an(C,F,w,S,I,P,M,O,x):L(C,I,P,!0):(q&8&&u(w,""),Z&16&&ie(F,w,S,I,P,M,O,x))},Pr=(p,g,w,S,I,P,M,O,x)=>{p=p||Kr,g=g||Kr;const C=p.length,q=g.length,F=Math.min(C,q);let K;for(K=0;K<F;K++){const Z=g[K]=x?Pn(g[K]):Ut(g[K]);b(p[K],Z,w,null,I,P,M,O,x)}C>q?L(p,I,P,!0,!1,F):ie(g,w,S,I,P,M,O,x,F)},an=(p,g,w,S,I,P,M,O,x)=>{let C=0;const q=g.length;let F=p.length-1,K=q-1;for(;C<=F&&C<=K;){const Z=p[C],he=g[C]=x?Pn(g[C]):Ut(g[C]);if(Os(Z,he))b(Z,he,w,null,I,P,M,O,x);else break;C++}for(;C<=F&&C<=K;){const Z=p[F],he=g[K]=x?Pn(g[K]):Ut(g[K]);if(Os(Z,he))b(Z,he,w,null,I,P,M,O,x);else break;F--,K--}if(C>F){if(C<=K){const Z=K+1,he=Z<q?g[Z].el:S;for(;C<=K;)b(null,g[C]=x?Pn(g[C]):Ut(g[C]),w,he,I,P,M,O,x),C++}}else if(C>K)for(;C<=F;)Ot(p[C],I,P,!0),C++;else{const Z=C,he=C,Ie=new Map;for(C=he;C<=K;C++){const It=g[C]=x?Pn(g[C]):Ut(g[C]);It.key!=null&&Ie.set(It.key,C)}let Se,De=0;const Mt=K-he+1;let Dr=!1,Gh=0;const Rs=new Array(Mt);for(C=0;C<Mt;C++)Rs[C]=0;for(C=Z;C<=F;C++){const It=p[C];if(De>=Mt){Ot(It,I,P,!0);continue}let Gt;if(It.key!=null)Gt=Ie.get(It.key);else for(Se=he;Se<=K;Se++)if(Rs[Se-he]===0&&Os(It,g[Se])){Gt=Se;break}Gt===void 0?Ot(It,I,P,!0):(Rs[Gt-he]=C+1,Gt>=Gh?Gh=Gt:Dr=!0,b(It,g[Gt],w,null,I,P,M,O,x),De++)}const Qh=Dr?Pb(Rs):Kr;for(Se=Qh.length-1,C=Mt-1;C>=0;C--){const It=he+C,Gt=g[It],Jh=It+1<q?g[It+1].el:S;Rs[C]===0?b(null,Gt,w,Jh,I,P,M,O,x):Dr&&(Se<0||C!==Qh[Se]?zt(Gt,w,Jh,2):Se--)}}},zt=(p,g,w,S,I=null)=>{const{el:P,type:M,transition:O,children:x,shapeFlag:C}=p;if(C&6){zt(p.component.subTree,g,w,S);return}if(C&128){p.suspense.move(g,w,S);return}if(C&64){M.move(p,g,w,ke);return}if(M===Le){r(P,g,w);for(let F=0;F<x.length;F++)zt(x[F],g,w,S);r(p.anchor,g,w);return}if(M===Ao){N(p,g,w);return}if(S!==2&&C&1&&O)if(S===0)O.beforeEnter(P),r(P,g,w),yt(()=>O.enter(P),I);else{const{leave:F,delayLeave:K,afterLeave:Z}=O,he=()=>r(P,g,w),Ie=()=>{F(P,()=>{he(),Z&&Z()})};K?K(P,he,Ie):Ie()}else r(P,g,w)},Ot=(p,g,w,S=!1,I=!1)=>{const{type:P,props:M,ref:O,children:x,dynamicChildren:C,shapeFlag:q,patchFlag:F,dirs:K}=p;if(O!=null&&zo(O,null,w,p,!0),q&256){g.ctx.deactivate(p);return}const Z=q&1&&K,he=!Gr(p);let Ie;if(he&&(Ie=M&&M.onVnodeBeforeUnmount)&&Pt(Ie,g,p),q&6)B(p.component,w,S);else{if(q&128){p.suspense.unmount(w,S);return}Z&&Xt(p,null,g,"beforeUnmount"),q&64?p.type.remove(p,g,w,I,ke,S):C&&(P!==Le||F>0&&F&64)?L(C,g,w,!1,!0):(P===Le&&F&384||!I&&q&16)&&L(x,g,w),S&&ks(p)}(he&&(Ie=M&&M.onVnodeUnmounted)||Z)&&yt(()=>{Ie&&Pt(Ie,g,p),Z&&Xt(p,null,g,"unmounted")},w)},ks=p=>{const{type:g,el:w,anchor:S,transition:I}=p;if(g===Le){T(w,S);return}if(g===Ao){H(p);return}const P=()=>{s(w),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(p.shapeFlag&1&&I&&!I.persisted){const{leave:M,delayLeave:O}=I,x=()=>M(w,P);O?O(p.el,P,x):x()}else P()},T=(p,g)=>{let w;for(;p!==g;)w=d(p),s(p),p=w;s(g)},B=(p,g,w)=>{const{bum:S,scope:I,update:P,subTree:M,um:O}=p;S&&So(S),I.stop(),P&&(P.active=!1,Ot(M,p,g,w)),O&&yt(O,g),yt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},L=(p,g,w,S=!1,I=!1,P=0)=>{for(let M=P;M<p.length;M++)Ot(p[M],g,w,S,I)},V=p=>p.shapeFlag&6?V(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),_e=(p,g,w)=>{p==null?g._vnode&&Ot(g._vnode,null,null,!0):b(g._vnode||null,p,g,null,null,null,w),Ho(),g._vnode=p},ke={p:b,um:Ot,m:zt,r:ks,mt:gt,mc:ie,pc:Tt,pbc:Pe,n:V,o:t};let oe,ne;return e&&([oe,ne]=e(ke)),{render:_e,hydrate:oe,createApp:Ab(_e,oe)}}function rr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Sm(t,e,n=!1){const r=t.children,s=e.children;if(te(r)&&te(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Pn(s[i]),a.el=o.el),n||Sm(o,a))}}function Pb(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Db=t=>t.__isTeleport,Le=Symbol(void 0),ui=Symbol(void 0),yn=Symbol(void 0),Ao=Symbol(void 0),Gs=[];let $t=null;function me(t=!1){Gs.push($t=t?null:[])}function Nb(){Gs.pop(),$t=Gs[Gs.length-1]||null}let hi=1;function md(t){hi+=t}function Cm(t){return t.dynamicChildren=hi>0?$t||Kr:null,Nb(),hi>0&&$t&&$t.push(t),t}function Re(t,e,n,r,s,i){return Cm(D(t,e,n,r,s,i,!0))}function di(t,e,n,r,s){return Cm(Ee(t,e,n,r,s,!0))}function Go(t){return t?t.__v_isVNode===!0:!1}function Os(t,e){return t.type===e.type&&t.key===e.key}const Da="__vInternal",Am=({key:t})=>t!=null?t:null,ko=({ref:t,ref_key:e,ref_for:n})=>t!=null?Xe(t)||ot(t)||se(t)?{i:at,r:t,k:e,f:!!n}:t:null;function D(t,e=null,n=null,r=0,s=null,i=t===Le?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Am(e),ref:e&&ko(e),scopeId:Ra,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(bu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Xe(n)?8:16),hi>0&&!o&&$t&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&$t.push(c),c}const Ee=xb;function xb(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===fb)&&(t=yn),Go(t)){const a=Zr(t,e,!0);return n&&bu(a,n),hi>0&&!i&&$t&&(a.shapeFlag&6?$t[$t.indexOf(t)]=a:$t.push(a)),a.patchFlag|=-2,a}if(Kb(t)&&(t=t.__vccOpts),e){e=Lb(e);let{class:a,style:c}=e;a&&!Xe(a)&&(e.class=su(a)),Ke(c)&&(zp(c)&&!te(c)&&(c=mt({},c)),e.style=ba(c))}const o=Xe(t)?1:rb(t)?128:Db(t)?64:Ke(t)?4:se(t)?2:0;return D(t,e,n,r,s,o,i,!0)}function Lb(t){return t?zp(t)||Da in t?mt({},t):t:null}function Zr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Mb(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Am(a),ref:e&&e.ref?n&&s?te(s)?s.concat(ko(e)):[s,ko(e)]:ko(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Le?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zr(t.ssContent),ssFallback:t.ssFallback&&Zr(t.ssFallback),el:t.el,anchor:t.anchor}}function Ge(t=" ",e=0){return Ee(ui,null,t,e)}function Qs(t="",e=!1){return e?(me(),di(yn,null,t)):Ee(yn,null,t)}function Ut(t){return t==null||typeof t=="boolean"?Ee(yn):te(t)?Ee(Le,null,t.slice()):typeof t=="object"?Pn(t):Ee(ui,null,String(t))}function Pn(t){return t.el===null||t.memo?t:Zr(t)}function bu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(te(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),bu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Da in e)?e._ctx=at:s===3&&at&&(at.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:at},n=32):(e=String(e),r&64?(n=16,e=[Ge(e)]):n=8);t.children=e,t.shapeFlag|=n}function Mb(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=su([e.class,r.class]));else if(s==="style")e.style=ba([e.style,r.style]);else if(Pi(s)){const i=e[s],o=r[s];o&&i!==o&&!(te(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Pt(t,e,n,r=null){jt(t,e,7,[n,r])}const Ub=Tm();let Fb=0;function $b(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Ub,i={uid:Fb++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Lp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_m(r,s),emitsOptions:sm(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Jw.bind(null,i),t.ce&&t.ce(i),i}let Je=null;const km=()=>Je||at,es=t=>{Je=t,t.scope.on()},fr=()=>{Je&&Je.scope.off(),Je=null};function Rm(t){return t.vnode.shapeFlag&4}let fi=!1;function Bb(t,e=!1){fi=e;const{props:n,children:r}=t.vnode,s=Rm(t);bb(t,n,s,e),Ib(t,r);const i=s?Vb(t,e):void 0;return fi=!1,i}function Vb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Gp(new Proxy(t.ctx,mb));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Hb(t):null;es(t),ps();const i=Vn(r,t,0,[t.props,s]);if(ms(),fr(),Dp(i)){if(i.then(fr,fr),e)return i.then(o=>{gd(t,o,e)}).catch(o=>{Ca(o,t,0)});t.asyncDep=i}else gd(t,i,e)}else Om(t,e)}function gd(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ke(e)&&(t.setupState=Yp(e)),Om(t,n)}let yd;function Om(t,e,n){const r=t.type;if(!t.render){if(!e&&yd&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=mt(mt({isCustomElement:i,delimiters:a},o),c);r.render=yd(s,l)}}t.render=r.render||Vt}es(t),ps(),gb(t),ms(),fr()}function jb(t){return new Proxy(t.attrs,{get(e,n){return kt(t,"get","$attrs"),e[n]}})}function Hb(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=jb(t))},slots:t.slots,emit:t.emit,expose:e}}function Na(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Yp(Gp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ko)return Ko[n](t)}}))}function qb(t,e=!0){return se(t)?t.displayName||t.name:t.name||e&&t.__name}function Kb(t){return se(t)&&"__vccOpts"in t}const vt=(t,e)=>qw(t,e,fi);function Pm(t,e,n){const r=arguments.length;return r===2?Ke(e)&&!te(e)?Go(e)?Ee(t,null,[e]):Ee(t,e):Ee(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Go(n)&&(n=[n]),Ee(t,e,n))}const Eu="3.2.37",Wb="http://www.w3.org/2000/svg",or=typeof document<"u"?document:null,vd=or&&or.createElement("template"),zb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?or.createElementNS(Wb,t):or.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>or.createTextNode(t),createComment:t=>or.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>or.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{vd.innerHTML=r?`<svg>${t}</svg>`:t;const a=vd.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Gb(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Qb(t,e,n){const r=t.style,s=Xe(n);if(n&&!s){for(const i in n)dl(r,i,n[i]);if(e&&!Xe(e))for(const i in e)n[i]==null&&dl(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const _d=/\s*!important$/;function dl(t,e,n){if(te(n))n.forEach(r=>dl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Jb(t,e);_d.test(n)?t.setProperty(fs(r),n.replace(_d,""),"important"):t[r]=n}}const wd=["Webkit","Moz","ms"],Tc={};function Jb(t,e){const n=Tc[e];if(n)return n;let r=rn(e);if(r!=="filter"&&r in t)return Tc[e]=r;r=Ia(r);for(let s=0;s<wd.length;s++){const i=wd[s]+r;if(i in t)return Tc[e]=i}return e}const bd="http://www.w3.org/1999/xlink";function Xb(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(bd,e.slice(6,e.length)):t.setAttributeNS(bd,e,n);else{const i=tw(e);n==null||i&&!Rp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Yb(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Rp(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Dm,Zb]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let fl=0;const eE=Promise.resolve(),tE=()=>{fl=0},nE=()=>fl||(eE.then(tE),fl=Dm());function $r(t,e,n,r){t.addEventListener(e,n,r)}function rE(t,e,n,r){t.removeEventListener(e,n,r)}function sE(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=iE(e);if(r){const l=i[e]=oE(r,s);$r(t,a,l,c)}else o&&(rE(t,a,o,c),i[e]=void 0)}}const Ed=/(?:Once|Passive|Capture)$/;function iE(t){let e;if(Ed.test(t)){e={};let n;for(;n=t.match(Ed);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[fs(t.slice(2)),e]}function oE(t,e){const n=r=>{const s=r.timeStamp||Dm();(Zb||s>=n.attached-1)&&jt(aE(r,n.value),e,5,[r])};return n.value=t,n.attached=nE(),n}function aE(t,e){if(te(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Td=/^on[a-z]/,cE=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Gb(t,r,s):e==="style"?Qb(t,n,r):Pi(e)?iu(e)||sE(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):lE(t,e,r,s))?Yb(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Xb(t,e,r,s))};function lE(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Td.test(e)&&se(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Td.test(e)&&Xe(n)?!1:e in t}const Id=t=>{const e=t.props["onUpdate:modelValue"]||!1;return te(e)?n=>So(e,n):e};function uE(t){t.target.composing=!0}function Sd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Dt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Id(s);const i=r||s.props&&s.props.type==="number";$r(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=el(a)),t._assign(a)}),n&&$r(t,"change",()=>{t.value=t.value.trim()}),e||($r(t,"compositionstart",uE),$r(t,"compositionend",Sd),$r(t,"change",Sd))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Id(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&el(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},hE=["ctrl","shift","alt","meta"],dE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>hE.some(n=>t[`${n}Key`]&&!e.includes(n))},pl=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=dE[e[s]];if(i&&i(n,e))return}return t(n,...r)},Fn={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ps(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Ps(t,!0),r.enter(t)):r.leave(t,()=>{Ps(t,!1)}):Ps(t,e))},beforeUnmount(t,{value:e}){Ps(t,e)}};function Ps(t,e){t.style.display=e?t._vod:"none"}const Nm=mt({patchProp:cE},zb);let Js,Cd=!1;function fE(){return Js||(Js=Rb(Nm))}function pE(){return Js=Cd?Js:Ob(Nm),Cd=!0,Js}const mE=(...t)=>{const e=fE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=xm(r);if(!s)return;const i=e._component;!se(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},gE=(...t)=>{const e=pE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=xm(r);if(s)return n(s,!0,s instanceof SVGElement)},e};function xm(t){return Xe(t)?document.querySelector(t):t}/**
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
 */const Lm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},yE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Mm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(d=64)),r.push(n[u],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Lm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(r.push(d),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const f=l<<6&192|h;r.push(f)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},vE=function(t){const e=Lm(t);return Mm.encodeByteArray(e,!0)},Qo=function(t){return vE(t).replace(/\./g,"")},Um=function(t){try{return Mm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _E(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function wE(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function EE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TE(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function IE(){return typeof indexedDB=="object"}function SE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function CE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const AE=()=>CE().__FIREBASE_DEFAULTS__,kE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},RE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Um(t[1]);return e&&JSON.parse(e)},Tu=()=>{try{return AE()||kE()||RE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fm=t=>{var e,n;return(n=(e=Tu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$m=t=>{const e=Fm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},OE=()=>{var t;return(t=Tu())===null||t===void 0?void 0:t.config},Bm=t=>{var e;return(e=Tu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class PE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Vm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Qo(JSON.stringify(n)),Qo(JSON.stringify(o)),a].join(".")}/**
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
 */const DE="FirebaseError";class on extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=DE,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ni.prototype.create)}}class Ni{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?NE(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new on(s,a,r)}}function NE(t,e){return t.replace(xE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const xE=/\{\$([^}]+)}/g;function LE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Jo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ad(i)&&Ad(o)){if(!Jo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ad(t){return t!==null&&typeof t=="object"}/**
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
 */function xi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $s(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Bs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ME(t,e){const n=new UE(t,e);return n.subscribe.bind(n)}class UE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");FE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ic),s.error===void 0&&(s.error=Ic),s.complete===void 0&&(s.complete=Ic);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ic(){}/**
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
 */class $E{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new PE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VE(e))try{this.getOrInitializeService({instanceIdentifier:ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ir){return this.instances.has(e)}getOptions(e=ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:BE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ir){return this.component?this.component.multipleInstances?e:ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BE(t){return t===ir?void 0:t}function VE(t){return t.instantiationMode==="EAGER"}/**
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
 */class jE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $E(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const HE={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},qE=pe.INFO,KE={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},WE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=KE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Iu{constructor(e){this.name=e,this._logLevel=qE,this._logHandler=WE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?HE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const zE=(t,e)=>e.some(n=>t instanceof n);let kd,Rd;function GE(){return kd||(kd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QE(){return Rd||(Rd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jm=new WeakMap,ml=new WeakMap,Hm=new WeakMap,Sc=new WeakMap,Su=new WeakMap;function JE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(jn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&jm.set(n,t)}).catch(()=>{}),Su.set(e,t),e}function XE(t){if(ml.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ml.set(t,e)}let gl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ml.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function YE(t){gl=t(gl)}function ZE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Cc(this),e,...n);return Hm.set(r,e.sort?e.sort():[e]),jn(r)}:QE().includes(t)?function(...e){return t.apply(Cc(this),e),jn(jm.get(this))}:function(...e){return jn(t.apply(Cc(this),e))}}function e0(t){return typeof t=="function"?ZE(t):(t instanceof IDBTransaction&&XE(t),zE(t,GE())?new Proxy(t,gl):t)}function jn(t){if(t instanceof IDBRequest)return JE(t);if(Sc.has(t))return Sc.get(t);const e=e0(t);return e!==t&&(Sc.set(t,e),Su.set(e,t)),e}const Cc=t=>Su.get(t);function t0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=jn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(jn(o.result),c.oldVersion,c.newVersion,jn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const n0=["get","getKey","getAll","getAllKeys","count"],r0=["put","add","delete","clear"],Ac=new Map;function Od(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ac.get(e))return Ac.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=r0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||n0.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Ac.set(e,i),i}YE(t=>({...t,get:(e,n,r)=>Od(e,n)||t.get(e,n,r),has:(e,n)=>!!Od(e,n)||t.has(e,n)}));/**
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
 */class s0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(i0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function i0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yl="@firebase/app",Pd="0.8.3";/**
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
 */const _r=new Iu("@firebase/app"),o0="@firebase/app-compat",a0="@firebase/analytics-compat",c0="@firebase/analytics",l0="@firebase/app-check-compat",u0="@firebase/app-check",h0="@firebase/auth",d0="@firebase/auth-compat",f0="@firebase/database",p0="@firebase/database-compat",m0="@firebase/functions",g0="@firebase/functions-compat",y0="@firebase/installations",v0="@firebase/installations-compat",_0="@firebase/messaging",w0="@firebase/messaging-compat",b0="@firebase/performance",E0="@firebase/performance-compat",T0="@firebase/remote-config",I0="@firebase/remote-config-compat",S0="@firebase/storage",C0="@firebase/storage-compat",A0="@firebase/firestore",k0="@firebase/firestore-compat",R0="firebase",O0="9.13.0";/**
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
 */const vl="[DEFAULT]",P0={[yl]:"fire-core",[o0]:"fire-core-compat",[c0]:"fire-analytics",[a0]:"fire-analytics-compat",[u0]:"fire-app-check",[l0]:"fire-app-check-compat",[h0]:"fire-auth",[d0]:"fire-auth-compat",[f0]:"fire-rtdb",[p0]:"fire-rtdb-compat",[m0]:"fire-fn",[g0]:"fire-fn-compat",[y0]:"fire-iid",[v0]:"fire-iid-compat",[_0]:"fire-fcm",[w0]:"fire-fcm-compat",[b0]:"fire-perf",[E0]:"fire-perf-compat",[T0]:"fire-rc",[I0]:"fire-rc-compat",[S0]:"fire-gcs",[C0]:"fire-gcs-compat",[A0]:"fire-fst",[k0]:"fire-fst-compat","fire-js":"fire-js",[R0]:"fire-js-all"};/**
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
 */const Xo=new Map,_l=new Map;function D0(t,e){try{t.container.addComponent(e)}catch(n){_r.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wr(t){const e=t.name;if(_l.has(e))return _r.debug(`There were multiple attempts to register component ${e}.`),!1;_l.set(e,t);for(const n of Xo.values())D0(n,t);return!0}function xa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const N0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Hn=new Ni("app","Firebase",N0);/**
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
 */class x0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Hn.create("app-deleted",{appName:this._name})}}/**
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
 */const gs=O0;function qm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Hn.create("bad-app-name",{appName:String(s)});if(n||(n=OE()),!n)throw Hn.create("no-options");const i=Xo.get(s);if(i){if(Jo(n,i.options)&&Jo(r,i.config))return i;throw Hn.create("duplicate-app",{appName:s})}const o=new jE(s);for(const c of _l.values())o.addComponent(c);const a=new x0(n,r,o);return Xo.set(s,a),a}function Cu(t=vl){const e=Xo.get(t);if(!e&&t===vl)return qm();if(!e)throw Hn.create("no-app",{appName:t});return e}function en(t,e,n){var r;let s=(r=P0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_r.warn(a.join(" "));return}wr(new zn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const L0="firebase-heartbeat-database",M0=1,pi="firebase-heartbeat-store";let kc=null;function Km(){return kc||(kc=t0(L0,M0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(pi)}}}).catch(t=>{throw Hn.create("idb-open",{originalErrorMessage:t.message})})),kc}async function U0(t){var e;try{return(await Km()).transaction(pi).objectStore(pi).get(Wm(t))}catch(n){if(n instanceof on)_r.warn(n.message);else{const r=Hn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});_r.warn(r.message)}}}async function Dd(t,e){var n;try{const s=(await Km()).transaction(pi,"readwrite");return await s.objectStore(pi).put(e,Wm(t)),s.done}catch(r){if(r instanceof on)_r.warn(r.message);else{const s=Hn.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});_r.warn(s.message)}}}function Wm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const F0=1024,$0=30*24*60*60*1e3;class B0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new j0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Nd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=$0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Nd(),{heartbeatsToSend:n,unsentEntries:r}=V0(this._heartbeatsCache.heartbeats),s=Qo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Nd(){return new Date().toISOString().substring(0,10)}function V0(t,e=F0){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),xd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),xd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class j0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return IE()?SE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await U0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function xd(t){return Qo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function H0(t){wr(new zn("platform-logger",e=>new s0(e),"PRIVATE")),wr(new zn("heartbeat",e=>new B0(e),"PRIVATE")),en(yl,Pd,t),en(yl,Pd,"esm2017"),en("fire-js","")}H0("");function Au(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function zm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const q0=zm,Gm=new Ni("auth","Firebase",zm());/**
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
 */const Ld=new Iu("@firebase/auth");function Ro(t,...e){Ld.logLevel<=pe.ERROR&&Ld.error(`Auth (${gs}): ${t}`,...e)}/**
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
 */function qt(t,...e){throw ku(t,...e)}function tn(t,...e){return ku(t,...e)}function K0(t,e,n){const r=Object.assign(Object.assign({},q0()),{[e]:n});return new Ni("auth","Firebase",r).create(e,{appName:t.name})}function ku(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Gm.create(t,...e)}function z(t,e,...n){if(!t)throw ku(e,...n)}function un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ro(e),new Error(e)}function vn(t,e){t||un(e)}/**
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
 */const Md=new Map;function hn(t){vn(t instanceof Function,"Expected a class definition");let e=Md.get(t);return e?(vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Md.set(t,e),e)}/**
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
 */function W0(t,e){const n=xa(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Jo(i,e!=null?e:{}))return s;qt(s,"already-initialized")}return n.initialize({options:e})}function z0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function wl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function G0(){return Ud()==="http:"||Ud()==="https:"}function Ud(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Q0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(G0()||bE()||"connection"in navigator)?navigator.onLine:!0}function J0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Li{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=_E()||EE()}get(){return Q0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ru(t,e){vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */const X0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Y0=new Li(3e4,6e4);function ys(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vs(t,e,n,r,s={}){return Jm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=xi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Qm.fetch()(Xm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Jm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},X0),e);try{const s=new Z0(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ho(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ho(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ho(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ho(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw K0(t,u,l);qt(t,u)}}catch(s){if(s instanceof on)throw s;qt(t,"network-request-failed")}}async function Mi(t,e,n,r,s={}){const i=await vs(t,e,n,r,s);return"mfaPendingCredential"in i&&qt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Xm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ru(t.config,s):`${t.config.apiScheme}://${s}`}class Z0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tn(this.auth,"network-request-failed")),Y0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ho(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=tn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function eT(t,e){return vs(t,"POST","/v1/accounts:delete",e)}async function tT(t,e){return vs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nT(t,e=!1){const n=Me(t),r=await n.getIdToken(e),s=Ou(r);z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Xs(Rc(s.auth_time)),issuedAtTime:Xs(Rc(s.iat)),expirationTime:Xs(Rc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Rc(t){return Number(t)*1e3}function Ou(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return Ro("JWT malformed, contained fewer than 3 sections"),null;try{const i=Um(r);return i?JSON.parse(i):(Ro("Failed to decode base64 JWT payload"),null)}catch(i){return Ro("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function rT(t){const e=Ou(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function mi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof on&&sT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function sT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class iT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */async function Yo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await mi(t,tT(n,{idToken:r}));z(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?cT(i.providerUserInfo):[],a=aT(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ym(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function oT(t){const e=Me(t);await Yo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function aT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function cT(t){return t.map(e=>{var{providerId:n}=e,r=Au(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function lT(t,e){const n=await Jm(t,{},async()=>{const r=xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Xm(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Qm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class gi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await lT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new gi;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gi,this.toJSON())}_performRefresh(){return un("not implemented")}}/**
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
 */function An(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Au(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ym(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await mi(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nT(this,e)}reload(){return oT(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Yo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await mi(this,eT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,f=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,y=(l=n.createdAt)!==null&&l!==void 0?l:void 0,_=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:A,emailVerified:N,isAnonymous:H,providerData:X,stsTokenManager:J}=n;z(A&&J,e,"internal-error");const U=gi.fromJSON(this.name,J);z(typeof A=="string",e,"internal-error"),An(h,e.name),An(d,e.name),z(typeof N=="boolean",e,"internal-error"),z(typeof H=="boolean",e,"internal-error"),An(m,e.name),An(f,e.name),An(v,e.name),An(b,e.name),An(y,e.name),An(_,e.name);const ie=new pr({uid:A,auth:e,email:d,emailVerified:N,displayName:h,isAnonymous:H,photoURL:f,phoneNumber:m,tenantId:v,stsTokenManager:U,createdAt:y,lastLoginAt:_});return X&&Array.isArray(X)&&(ie.providerData=X.map(be=>Object.assign({},be))),b&&(ie._redirectEventId=b),ie}static async _fromIdTokenResponse(e,n,r=!1){const s=new gi;s.updateFromServerResponse(n);const i=new pr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Yo(i),i}}/**
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
 */class Zm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Zm.type="NONE";const Fd=Zm;/**
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
 */function Oo(t,e,n){return`firebase:${t}:${e}:${n}`}class Qr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Oo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Oo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qr(hn(Fd),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||hn(Fd);const o=Oo(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=pr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Qr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Qr(i,e,r))}}/**
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
 */function $d(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ng(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(eg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sg(e))return"Blackberry";if(ig(e))return"Webos";if(Pu(e))return"Safari";if((e.includes("chrome/")||tg(e))&&!e.includes("edge/"))return"Chrome";if(rg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function eg(t=ut()){return/firefox\//i.test(t)}function Pu(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tg(t=ut()){return/crios\//i.test(t)}function ng(t=ut()){return/iemobile/i.test(t)}function rg(t=ut()){return/android/i.test(t)}function sg(t=ut()){return/blackberry/i.test(t)}function ig(t=ut()){return/webos/i.test(t)}function La(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function uT(t=ut()){var e;return La(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hT(){return TE()&&document.documentMode===10}function og(t=ut()){return La(t)||rg(t)||ig(t)||sg(t)||/windows phone/i.test(t)||ng(t)}function dT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ag(t,e=[]){let n;switch(t){case"Browser":n=$d(ut());break;case"Worker":n=`${$d(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gs}/${r}`}/**
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
 */class fT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
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
 */class pT{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bd(this),this.idTokenSubscription=new Bd(this),this.beforeStateQueue=new fT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Qr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Yo(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=J0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Me(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(hn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ni("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hn(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Qr.create(this,[hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ag(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ui(t){return Me(t)}class Bd{constructor(e){this.auth=e,this.observer=null,this.addObserver=ME(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function mT(t,e,n){const r=Ui(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=cg(e),{host:o,port:a}=gT(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||yT()}function cg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gT(t){const e=cg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Vd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Vd(o)}}}function Vd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Du{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return un("not implemented")}_getIdTokenResponse(e){return un("not implemented")}_linkToIdToken(e,n){return un("not implemented")}_getReauthenticationResolver(e){return un("not implemented")}}async function vT(t,e){return vs(t,"POST","/v1/accounts:update",e)}/**
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
 */async function _T(t,e){return Mi(t,"POST","/v1/accounts:signInWithPassword",ys(t,e))}async function wT(t,e){return vs(t,"POST","/v1/accounts:sendOobCode",ys(t,e))}async function bT(t,e){return wT(t,e)}/**
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
 */async function ET(t,e){return Mi(t,"POST","/v1/accounts:signInWithEmailLink",ys(t,e))}async function TT(t,e){return Mi(t,"POST","/v1/accounts:signInWithEmailLink",ys(t,e))}/**
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
 */class yi extends Du{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new yi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new yi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return _T(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ET(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return vT(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return TT(e,{idToken:n,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */const IT="http://localhost";class br extends Du{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Au(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new br(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Jr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Jr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Jr(e,n)}buildRequest(){const e={requestUri:IT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xi(n)}return e}}/**
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
 */function ST(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function CT(t){const e=$s(Bs(t)).link,n=e?$s(Bs(e)).deep_link_id:null,r=$s(Bs(t)).deep_link_id;return(r?$s(Bs(r)).link:null)||r||n||e||t}class Nu{constructor(e){var n,r,s,i,o,a;const c=$s(Bs(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=ST((s=c.mode)!==null&&s!==void 0?s:null);z(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=CT(e);try{return new Nu(n)}catch{return null}}}/**
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
 */class _s{constructor(){this.providerId=_s.PROVIDER_ID}static credential(e,n){return yi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Nu.parseLink(n);return z(r,"argument-error"),yi._fromEmailAndCode(e,r.code,r.tenantId)}}_s.PROVIDER_ID="password";_s.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_s.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */async function AT(t,e){return Mi(t,"POST","/v1/accounts:signUp",ys(t,e))}/**
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
 */class Er{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await pr._fromIdTokenResponse(e,r,s),o=jd(r);return new Er({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=jd(r);return new Er({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function jd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Zo extends on{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Zo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Zo(e,n,r,s)}}function ug(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Zo._fromErrorAndOperation(t,i,e,r):i})}async function kT(t,e,n=!1){const r=await mi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Er._forOperation(t,"link",r)}/**
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
 */async function RT(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await mi(t,ug(s,i,e,t),n);z(o.idToken,s,"internal-error");const a=Ou(o.idToken);z(a,s,"internal-error");const{sub:c}=a;return z(t.uid===c,s,"user-mismatch"),Er._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&qt(s,"user-mismatch"),o}}/**
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
 */async function hg(t,e,n=!1){const r="signIn",s=await ug(t,r,e),i=await Er._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function OT(t,e){return hg(Ui(t),e)}/**
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
 */function PT(t,e,n){var r;z(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),z(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(z(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(z(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}async function DT(t,e,n){const r=Ui(t),s=await AT(r,{returnSecureToken:!0,email:e,password:n}),i=await Er._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function NT(t,e,n){return OT(Me(t),_s.credential(e,n))}async function dg(t,e){const n=Me(t),r=await t.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:r};e&&PT(n.auth,s,e);const{email:i}=await bT(n.auth,s);i!==t.email&&await t.reload()}function xT(t,e,n,r){return Me(t).onIdTokenChanged(e,n,r)}function LT(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function fg(t,e,n,r){return Me(t).onAuthStateChanged(e,n,r)}function MT(t){return Me(t).signOut()}const ea="__sak";/**
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
 */class pg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ea,"1"),this.storage.removeItem(ea),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function UT(){const t=ut();return Pu(t)||La(t)}const FT=1e3,$T=10;class mg extends pg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=UT()&&dT(),this.fallbackToPolling=og(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);hT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,$T):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},FT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}mg.type="LOCAL";const BT=mg;/**
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
 */function VT(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ma{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ma(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await VT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ma.receivers=[];/**
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
 */function xu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class jT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=xu("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function nn(){return window}function HT(t){nn().location.href=t}/**
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
 */function vg(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function qT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function WT(){return vg()?self:null}/**
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
 */const _g="firebaseLocalStorageDb",zT=1,ta="firebaseLocalStorage",wg="fbase_key";class $i{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ua(t,e){return t.transaction([ta],e?"readwrite":"readonly").objectStore(ta)}function GT(){const t=indexedDB.deleteDatabase(_g);return new $i(t).toPromise()}function bl(){const t=indexedDB.open(_g,zT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ta,{keyPath:wg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ta)?e(r):(r.close(),await GT(),e(await bl()))})})}async function Hd(t,e,n){const r=Ua(t,!0).put({[wg]:e,value:n});return new $i(r).toPromise()}async function QT(t,e){const n=Ua(t,!1).get(e),r=await new $i(n).toPromise();return r===void 0?null:r.value}function qd(t,e){const n=Ua(t,!0).delete(e);return new $i(n).toPromise()}const JT=800,XT=3;class bg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>XT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ma._getInstance(WT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qT(),!this.activeServiceWorker)return;this.sender=new jT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||KT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bl();return await Hd(e,ea,"1"),await qd(e,ea),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>QT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ua(s,!1).getAll();return new $i(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bg.type="LOCAL";const YT=bg;/**
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
 */function ZT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function eI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=tn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",ZT().appendChild(r)})}function tI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Li(3e4,6e4);/**
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
 */function nI(t,e){return e?hn(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Lu extends Du{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Jr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Jr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rI(t){return hg(t.auth,new Lu(t),t.bypassAuthState)}function sI(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),RT(n,new Lu(t),t.bypassAuthState)}async function iI(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),kT(n,new Lu(t),t.bypassAuthState)}/**
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
 */class Eg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rI;case"linkViaPopup":case"linkViaRedirect":return iI;case"reauthViaPopup":case"reauthViaRedirect":return sI;default:qt(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const oI=new Li(2e3,1e4);class jr extends Eg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=xu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,oI.get())};e()}}jr.currentPopupAction=null;/**
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
 */const aI="pendingRedirect",Po=new Map;class cI extends Eg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Po.get(this.auth._key());if(!e){try{const r=await lI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Po.set(this.auth._key(),e)}return this.bypassAuthState||Po.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lI(t,e){const n=dI(e),r=hI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function uI(t,e){Po.set(t._key(),e)}function hI(t){return hn(t._redirectPersistence)}function dI(t){return Oo(aI,t.config.apiKey,t.name)}async function fI(t,e,n=!1){const r=Ui(t),s=nI(r,e),o=await new cI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const pI=10*60*1e3;class mI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Tg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kd(e))}saveEventToCache(e){this.cachedEventUids.add(Kd(e)),this.lastProcessedEventTime=Date.now()}}function Kd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Tg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tg(t);default:return!1}}/**
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
 */async function yI(t,e={}){return vs(t,"GET","/v1/projects",e)}/**
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
 */const vI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_I=/^https?/;async function wI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await yI(t);for(const n of e)try{if(bI(n))return}catch{}qt(t,"unauthorized-domain")}function bI(t){const e=wl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!_I.test(n))return!1;if(vI.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const EI=new Li(3e4,6e4);function Wd(){const t=nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function TI(t){return new Promise((e,n)=>{var r,s,i;function o(){Wd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wd(),n(tn(t,"network-request-failed"))},timeout:EI.get()})}if(!((s=(r=nn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=nn().gapi)===null||i===void 0)&&i.load)o();else{const a=tI("iframefcb");return nn()[a]=()=>{gapi.load?o():n(tn(t,"network-request-failed"))},eI(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Do=null,e})}let Do=null;function II(t){return Do=Do||TI(t),Do}/**
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
 */const SI=new Li(5e3,15e3),CI="__/auth/iframe",AI="emulator/auth/iframe",kI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OI(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ru(e,AI):`https://${t.config.authDomain}/${CI}`,r={apiKey:e.apiKey,appName:t.name,v:gs},s=RI.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${xi(r).slice(1)}`}async function PI(t){const e=await II(t),n=nn().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:OI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=tn(t,"network-request-failed"),a=nn().setTimeout(()=>{i(o)},SI.get());function c(){nn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const DI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NI=500,xI=600,LI="_blank",MI="http://localhost";class zd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UI(t,e,n,r=NI,s=xI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},DI),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ut().toLowerCase();n&&(a=tg(l)?LI:n),eg(l)&&(e=e||MI,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[m,f])=>`${d}${m}=${f},`,"");if(uT(l)&&a!=="_self")return FI(e||"",a),new zd(null);const h=window.open(e||"",a,u);z(h,t,"popup-blocked");try{h.focus()}catch{}return new zd(h)}function FI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const $I="__/auth/handler",BI="emulator/auth/handler";function Gd(t,e,n,r,s,i){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:gs,eventId:s};if(e instanceof lg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",LE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Fi){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${VI(t)}?${xi(a).slice(1)}`}function VI({config:t}){return t.emulator?Ru(t,BI):`https://${t.authDomain}/${$I}`}/**
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
 */const Oc="webStorageSupport";class jI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yg,this._completeRedirectFn=fI,this._overrideRedirectResult=uI}async _openPopup(e,n,r,s){var i;vn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Gd(e,n,r,wl(),s);return UI(e,o,xu())}async _openRedirect(e,n,r,s){return await this._originValidation(e),HT(Gd(e,n,r,wl(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await PI(e),r=new mI(e);return n.register("authEvent",s=>(z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Oc,{type:Oc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Oc];o!==void 0&&n(!!o),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return og()||Pu()||La()}}const HI=jI;var Qd="@firebase/auth",Jd="0.20.11";/**
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
 */class qI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function KI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function WI(t){wr(new zn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{z(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),z(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ag(t)},u=new pT(a,c,l);return z0(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),wr(new zn("auth-internal",e=>{const n=Ui(e.getProvider("auth").getImmediate());return(r=>new qI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(Qd,Jd,KI(t)),en(Qd,Jd,"esm2017")}/**
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
 */const zI=5*60,GI=Bm("authIdTokenMaxAge")||zI;let Xd=null;const QI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>GI)return;const s=n==null?void 0:n.token;Xd!==s&&(Xd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ts(t=Cu()){const e=xa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=W0(t,{popupRedirectResolver:HI,persistence:[YT,BT,yg]}),r=Bm("authTokenSyncURL");if(r){const i=QI(r);LT(n,i,()=>i(n.currentUser)),xT(n,o=>i(o))}const s=Fm("auth");return s&&mT(n,`http://${s}`),n}WI("Browser");function JI(){return Ig().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Ig(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const XI=typeof Proxy=="function",YI="devtools-plugin:setup",ZI="plugin:settings:set";let Nr,El;function eS(){var t;return Nr!==void 0||(typeof window<"u"&&window.performance?(Nr=!0,El=window.performance):typeof global<"u"&&((t=global.perf_hooks)===null||t===void 0?void 0:t.performance)?(Nr=!0,El=global.perf_hooks.performance):Nr=!1),Nr}function tS(){return eS()?El.now():Date.now()}class nS{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return tS()}},n&&n.on(ZI,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function rS(t,e){const n=t,r=Ig(),s=JI(),i=XI&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(YI,t,e);else{const o=i?new nS(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Br=typeof window<"u";function sS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const we=Object.assign;function Pc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Kt(s)?s.map(t):t(s)}return n}const Ys=()=>{},Kt=Array.isArray,iS=/\/$/,oS=t=>t.replace(iS,"");function Dc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=uS(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function aS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Yd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function cS(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ns(e.matched[r],n.matched[s])&&Sg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ns(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Sg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!lS(t[n],e[n]))return!1;return!0}function lS(t,e){return Kt(t)?Zd(t,e):Kt(e)?Zd(e,t):t===e}function Zd(t,e){return Kt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function uS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var rs;(function(t){t.pop="pop",t.push="push"})(rs||(rs={}));var mr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(mr||(mr={}));const Nc="";function Cg(t){if(!t)if(Br){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),oS(t)}const hS=/^[^#]+#/;function Ag(t,e){return t.replace(hS,"#")+e}function dS(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Fa=()=>({left:window.pageXOffset,top:window.pageYOffset});function fS(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=dS(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ef(t,e){return(history.state?history.state.position-e:-1)+t}const Tl=new Map;function pS(t,e){Tl.set(t,e)}function mS(t){const e=Tl.get(t);return Tl.delete(t),e}let gS=()=>location.protocol+"//"+location.host;function kg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Yd(c,"")}return Yd(n,t)+r+s}function yS(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const m=kg(t,location),f=n.value,v=e.value;let b=0;if(d){if(n.value=m,e.value=d,o&&o===f){o=null;return}b=v?d.position-v.position:0}else r(m);s.forEach(y=>{y(n.value,f,{delta:b,type:rs.pop,direction:b?b>0?mr.forward:mr.back:mr.unknown})})};function c(){o=n.value}function l(d){s.push(d);const m=()=>{const f=s.indexOf(d);f>-1&&s.splice(f,1)};return i.push(m),m}function u(){const{history:d}=window;!d.state||d.replaceState(we({},d.state,{scroll:Fa()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function tf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Fa():null}}function vS(t){const{history:e,location:n}=window,r={value:kg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:gS()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(c,l){const u=we({},e.state,tf(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=we({},s.value,e.state,{forward:c,scroll:Fa()});i(u.current,u,!0);const h=we({},tf(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function _S(t){t=Cg(t);const e=vS(t),n=yS(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=we({location:"",base:t,go:r,createHref:Ag.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function wS(t=""){let e=[],n=[Nc],r=0;t=Cg(t);function s(a){r++,r===n.length||n.splice(r),n.push(a)}function i(a,c,{direction:l,delta:u}){const h={direction:l,delta:u,type:rs.pop};for(const d of e)d(a,c,h)}const o={location:Nc,state:{},base:t,createHref:Ag.bind(null,t),replace(a){n.splice(r--,1),s(a)},push(a,c){s(a)},listen(a){return e.push(a),()=>{const c=e.indexOf(a);c>-1&&e.splice(c,1)}},destroy(){e=[],n=[Nc],r=0},go(a,c=!0){const l=this.location,u=a<0?mr.back:mr.forward;r=Math.max(0,Math.min(r+a,n.length-1)),c&&i(this.location,l,{direction:u,delta:a})}};return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n[r]}),o}function bS(t){return typeof t=="string"||t&&typeof t=="object"}function Rg(t){return typeof t=="string"||typeof t=="symbol"}const kn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Og=Symbol("");var nf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(nf||(nf={}));function ss(t,e){return we(new Error,{type:t,[Og]:!0},e)}function cn(t,e){return t instanceof Error&&Og in t&&(e==null||!!(t.type&e))}const rf="[^/]+?",ES={sensitive:!1,strict:!1,start:!0,end:!0},TS=/[.+*?^${}()[\]/\\]/g;function IS(t,e){const n=we({},ES,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let m=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(TS,"\\$&"),m+=40;else if(d.type===1){const{value:f,repeatable:v,optional:b,regexp:y}=d;i.push({name:f,repeatable:v,optional:b});const _=y||rf;if(_!==rf){m+=10;try{new RegExp(`(${_})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${f}" (${_}): `+N.message)}}let A=v?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;h||(A=b&&l.length<2?`(?:/${A})`:"/"+A),b&&(A+="?"),s+=A,m+=20,b&&(m+=-8),v&&(m+=-20),_===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",f=i[d-1];h[f.name]=m&&f.repeatable?m.split("/"):m}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:f,repeatable:v,optional:b}=m,y=f in l?l[f]:"";if(Kt(y)&&!v)throw new Error(`Provided param "${f}" is an array but it is not repeatable (* or + modifiers)`);const _=Kt(y)?y.join("/"):y;if(!_)if(b)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${f}"`);u+=_}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function SS(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function CS(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=SS(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(sf(r))return 1;if(sf(s))return-1}return s.length-r.length}function sf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const AS={type:0,value:""},kS=/[a-zA-Z0-9_]/;function RS(t){if(!t)return[[]];if(t==="/")return[[AS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:kS.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function OS(t,e,n){const r=IS(RS(t.path),n),s=we(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function PS(t,e){const n=[],r=new Map;e=cf({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const m=!d,f=DS(u);f.aliasOf=d&&d.record;const v=cf(e,u),b=[f];if("alias"in u){const A=typeof u.alias=="string"?[u.alias]:u.alias;for(const N of A)b.push(we({},f,{components:d?d.record.components:f.components,path:N,aliasOf:d?d.record:f}))}let y,_;for(const A of b){const{path:N}=A;if(h&&N[0]!=="/"){const H=h.record.path,X=H[H.length-1]==="/"?"":"/";A.path=h.record.path+(N&&X+N)}if(y=OS(A,h,v),d?d.alias.push(y):(_=_||y,_!==y&&_.alias.push(y),m&&u.name&&!af(y)&&o(u.name)),f.children){const H=f.children;for(let X=0;X<H.length;X++)i(H[X],y,d&&d.children[X])}d=d||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&c(y)}return _?()=>{o(_)}:Ys}function o(u){if(Rg(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&CS(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Pg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!af(u)&&r.set(u.record.name,u)}function l(u,h){let d,m={},f,v;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw ss(1,{location:u});v=d.record.name,m=we(of(h.params,d.keys.filter(_=>!_.optional).map(_=>_.name)),u.params&&of(u.params,d.keys.map(_=>_.name))),f=d.stringify(m)}else if("path"in u)f=u.path,d=n.find(_=>_.re.test(f)),d&&(m=d.parse(f),v=d.record.name);else{if(d=h.name?r.get(h.name):n.find(_=>_.re.test(h.path)),!d)throw ss(1,{location:u,currentLocation:h});v=d.record.name,m=we({},h.params,u.params),f=d.stringify(m)}const b=[];let y=d;for(;y;)b.unshift(y.record),y=y.parent;return{name:v,path:f,params:m,matched:b,meta:xS(b)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function of(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function DS(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:NS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function NS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function af(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function xS(t){return t.reduce((e,n)=>we(e,n.meta),{})}function cf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Pg(t,e){return e.children.some(n=>n===t||Pg(t,n))}const Dg=/#/g,LS=/&/g,MS=/\//g,US=/=/g,FS=/\?/g,Ng=/\+/g,$S=/%5B/g,BS=/%5D/g,xg=/%5E/g,VS=/%60/g,Lg=/%7B/g,jS=/%7C/g,Mg=/%7D/g,HS=/%20/g;function Mu(t){return encodeURI(""+t).replace(jS,"|").replace($S,"[").replace(BS,"]")}function qS(t){return Mu(t).replace(Lg,"{").replace(Mg,"}").replace(xg,"^")}function Il(t){return Mu(t).replace(Ng,"%2B").replace(HS,"+").replace(Dg,"%23").replace(LS,"%26").replace(VS,"`").replace(Lg,"{").replace(Mg,"}").replace(xg,"^")}function KS(t){return Il(t).replace(US,"%3D")}function WS(t){return Mu(t).replace(Dg,"%23").replace(FS,"%3F")}function zS(t){return t==null?"":WS(t).replace(MS,"%2F")}function na(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function GS(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Ng," "),o=i.indexOf("="),a=na(o<0?i:i.slice(0,o)),c=o<0?null:na(i.slice(o+1));if(a in e){let l=e[a];Kt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function lf(t){let e="";for(let n in t){const r=t[n];if(n=KS(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Kt(r)?r.map(i=>i&&Il(i)):[r&&Il(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function QS(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Kt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const JS=Symbol(""),uf=Symbol(""),$a=Symbol(""),Uu=Symbol(""),Sl=Symbol("");function Ds(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Dn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ss(4,{from:n,to:e})):h instanceof Error?a(h):bS(h)?a(ss(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function xc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(XS(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Dn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=sS(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Dn(d,n,r,i,o)()}))}}return s}function XS(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function hf(t){const e=Nt($a),n=Nt(Uu),r=vt(()=>e.resolve(Bn(t.to))),s=vt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ns.bind(null,u));if(d>-1)return d;const m=df(c[l-2]);return l>1&&df(u)===m&&h[h.length-1].path!==m?h.findIndex(ns.bind(null,c[l-2])):d}),i=vt(()=>s.value>-1&&tC(n.params,r.value.params)),o=vt(()=>s.value>-1&&s.value===n.matched.length-1&&Sg(n.params,r.value.params));function a(c={}){return eC(c)?e[Bn(t.replace)?"replace":"push"](Bn(t.to)).catch(Ys):Promise.resolve()}return{route:r,href:vt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const YS=_u({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:hf,setup(t,{slots:e}){const n=Yn(hf(t)),{options:r}=Nt($a),s=vt(()=>({[ff(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ff(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Pm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ZS=YS;function eC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function tC(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Kt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function df(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ff=(t,e,n)=>t!=null?t:e!=null?e:n,nC=_u({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Nt(Sl),s=vt(()=>t.route||r.value),i=Nt(uf,0),o=vt(()=>{let l=Bn(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=vt(()=>s.value.matched[o.value]);Co(uf,vt(()=>o.value+1)),Co(JS,a),Co(Sl,s);const c=fe();return dr(()=>[c.value,a.value,t.name],([l,u,h],[d,m,f])=>{u&&(u.instances[h]=l,m&&m!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!ns(u,m)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return pf(n.default,{Component:d,route:l});const m=h.props[u],f=m?m===!0?l.params:typeof m=="function"?m(l):m:null,b=Pm(d,we({},f,e,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return pf(n.default,{Component:b,route:l})||b}}});function pf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const rC=nC;function sC(t){const e=PS(t.routes,t),n=t.parseQuery||GS,r=t.stringifyQuery||lf,s=t.history,i=Ds(),o=Ds(),a=Ds(),c=Bw(kn);let l=kn;Br&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Pc.bind(null,T=>""+T),h=Pc.bind(null,zS),d=Pc.bind(null,na);function m(T,B){let L,V;return Rg(T)?(L=e.getRecordMatcher(T),V=B):V=T,e.addRoute(V,L)}function f(T){const B=e.getRecordMatcher(T);B&&e.removeRoute(B)}function v(){return e.getRoutes().map(T=>T.record)}function b(T){return!!e.getRecordMatcher(T)}function y(T,B){if(B=we({},B||c.value),typeof T=="string"){const ne=Dc(n,T,B.path),p=e.resolve({path:ne.path},B),g=s.createHref(ne.fullPath);return we(ne,p,{params:d(p.params),hash:na(ne.hash),redirectedFrom:void 0,href:g})}let L;if("path"in T)L=we({},T,{path:Dc(n,T.path,B.path).path});else{const ne=we({},T.params);for(const p in ne)ne[p]==null&&delete ne[p];L=we({},T,{params:h(T.params)}),B.params=h(B.params)}const V=e.resolve(L,B),_e=T.hash||"";V.params=u(d(V.params));const ke=aS(r,we({},T,{hash:qS(_e),path:V.path})),oe=s.createHref(ke);return we({fullPath:ke,hash:_e,query:r===lf?QS(T.query):T.query||{}},V,{redirectedFrom:void 0,href:oe})}function _(T){return typeof T=="string"?Dc(n,T,c.value.path):we({},T)}function A(T,B){if(l!==T)return ss(8,{from:B,to:T})}function N(T){return J(T)}function H(T){return N(we(_(T),{replace:!0}))}function X(T){const B=T.matched[T.matched.length-1];if(B&&B.redirect){const{redirect:L}=B;let V=typeof L=="function"?L(T):L;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=_(V):{path:V},V.params={}),we({query:T.query,hash:T.hash,params:"path"in V?{}:T.params},V)}}function J(T,B){const L=l=y(T),V=c.value,_e=T.state,ke=T.force,oe=T.replace===!0,ne=X(L);if(ne)return J(we(_(ne),{state:typeof ne=="object"?we({},_e,ne.state):_e,force:ke,replace:oe}),B||L);const p=L;p.redirectedFrom=B;let g;return!ke&&cS(r,V,L)&&(g=ss(16,{to:p,from:V}),Pr(V,V,!0,!1)),(g?Promise.resolve(g):ie(p,V)).catch(w=>cn(w)?cn(w,2)?w:Tt(w):Ae(w,p,V)).then(w=>{if(w){if(cn(w,2))return J(we({replace:oe},_(w.to),{state:typeof w.to=="object"?we({},_e,w.to.state):_e,force:ke}),B||p)}else w=Pe(p,V,!0,oe,_e);return be(p,V,w),w})}function U(T,B){const L=A(T,B);return L?Promise.reject(L):Promise.resolve()}function ie(T,B){let L;const[V,_e,ke]=iC(T,B);L=xc(V.reverse(),"beforeRouteLeave",T,B);for(const ne of V)ne.leaveGuards.forEach(p=>{L.push(Dn(p,T,B))});const oe=U.bind(null,T,B);return L.push(oe),xr(L).then(()=>{L=[];for(const ne of i.list())L.push(Dn(ne,T,B));return L.push(oe),xr(L)}).then(()=>{L=xc(_e,"beforeRouteUpdate",T,B);for(const ne of _e)ne.updateGuards.forEach(p=>{L.push(Dn(p,T,B))});return L.push(oe),xr(L)}).then(()=>{L=[];for(const ne of T.matched)if(ne.beforeEnter&&!B.matched.includes(ne))if(Kt(ne.beforeEnter))for(const p of ne.beforeEnter)L.push(Dn(p,T,B));else L.push(Dn(ne.beforeEnter,T,B));return L.push(oe),xr(L)}).then(()=>(T.matched.forEach(ne=>ne.enterCallbacks={}),L=xc(ke,"beforeRouteEnter",T,B),L.push(oe),xr(L))).then(()=>{L=[];for(const ne of o.list())L.push(Dn(ne,T,B));return L.push(oe),xr(L)}).catch(ne=>cn(ne,8)?ne:Promise.reject(ne))}function be(T,B,L){for(const V of a.list())V(T,B,L)}function Pe(T,B,L,V,_e){const ke=A(T,B);if(ke)return ke;const oe=B===kn,ne=Br?history.state:{};L&&(V||oe?s.replace(T.fullPath,we({scroll:oe&&ne&&ne.scroll},_e)):s.push(T.fullPath,_e)),c.value=T,Pr(T,B,L,oe),Tt()}let Ze;function je(){Ze||(Ze=s.listen((T,B,L)=>{if(!ks.listening)return;const V=y(T),_e=X(V);if(_e){J(we(_e,{replace:!0}),V).catch(Ys);return}l=V;const ke=c.value;Br&&pS(ef(ke.fullPath,L.delta),Fa()),ie(V,ke).catch(oe=>cn(oe,12)?oe:cn(oe,2)?(J(oe.to,V).then(ne=>{cn(ne,20)&&!L.delta&&L.type===rs.pop&&s.go(-1,!1)}).catch(Ys),Promise.reject()):(L.delta&&s.go(-L.delta,!1),Ae(oe,V,ke))).then(oe=>{oe=oe||Pe(V,ke,!1),oe&&(L.delta&&!cn(oe,8)?s.go(-L.delta,!1):L.type===rs.pop&&cn(oe,20)&&s.go(-1,!1)),be(V,ke,oe)}).catch(Ys)}))}let Q=Ds(),gt=Ds(),ve;function Ae(T,B,L){Tt(T);const V=gt.list();return V.length?V.forEach(_e=>_e(T,B,L)):console.error(T),Promise.reject(T)}function Te(){return ve&&c.value!==kn?Promise.resolve():new Promise((T,B)=>{Q.add([T,B])})}function Tt(T){return ve||(ve=!T,je(),Q.list().forEach(([B,L])=>T?L(T):B()),Q.reset()),T}function Pr(T,B,L,V){const{scrollBehavior:_e}=t;if(!Br||!_e)return Promise.resolve();const ke=!L&&mS(ef(T.fullPath,0))||(V||!L)&&history.state&&history.state.scroll||null;return yu().then(()=>_e(T,B,ke)).then(oe=>oe&&fS(oe)).catch(oe=>Ae(oe,T,B))}const an=T=>s.go(T);let zt;const Ot=new Set,ks={currentRoute:c,listening:!0,addRoute:m,removeRoute:f,hasRoute:b,getRoutes:v,resolve:y,options:t,push:N,replace:H,go:an,back:()=>an(-1),forward:()=>an(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:gt.add,isReady:Te,install(T){const B=this;T.component("RouterLink",ZS),T.component("RouterView",rC),T.config.globalProperties.$router=B,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Bn(c)}),Br&&!zt&&c.value===kn&&(zt=!0,N(s.location).catch(_e=>{}));const L={};for(const _e in kn)L[_e]=vt(()=>c.value[_e]);T.provide($a,B),T.provide(Uu,Yn(L)),T.provide(Sl,c);const V=T.unmount;Ot.add(T),T.unmount=function(){Ot.delete(T),Ot.size<1&&(l=kn,Ze&&Ze(),Ze=null,c.value=kn,zt=!1,ve=!1),V()}}};return ks}function xr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function iC(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>ns(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ns(l,c))||s.push(c))}return[n,r,s]}function ws(){return Nt($a)}function Ug(){return Nt(Uu)}const oC=Ge(" Home "),aC=Ge(" Feed "),cC={key:0},lC={key:1,class:"pop"},uC=Ge(" Register "),hC=Ge(" Login "),dC={__name:"App",setup(t){const e=ws(),n=fe(!0),r=fe(!1),s=ts();fg(s,a=>{a?(n.value=!0,a.emailVerified?r.value=!0:r.value=!1):n.value=!1});const i=()=>{dg(s.currentUser)},o=()=>{MT(s),e.push("/")};return(a,c)=>{const l=gn("router-link"),u=gn("router-view");return me(),Re(Le,null,[D("nav",null,[Ee(l,{to:"/home"},{default:Ct(()=>[oC]),_:1}),Ee(l,{to:"/feed"},{default:Ct(()=>[aC]),_:1}),n.value?(me(),Re("span",cC,[D("button",{class:"logout",onClick:o},"Logout"),r.value?(me(),Re("p",lC,"Verified!")):(me(),Re("button",{key:0,class:"logout pop",onClick:i},"Verify"))])):Qs("",!0),n.value?Qs("",!0):(me(),di(l,{key:1,to:"/register"},{default:Ct(()=>[uC]),_:1})),n.value?Qs("",!0):(me(),di(l,{key:2,to:"/login"},{default:Ct(()=>[hC]),_:1}))]),Ee(u)],64)}}};/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var Fg="store";function Fu(t){return t===void 0&&(t=null),Nt(t!==null?t:Fg)}function bs(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function fC(t){return t!==null&&typeof t=="object"}function pC(t){return t&&typeof t.then=="function"}function mC(t,e){return function(){return t(e)}}function $g(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function Bg(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Ba(t,n,[],t._modules.root,!0),$u(t,n,e)}function $u(t,e,n){var r=t._state,s=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={},a={},c=dw(!0);c.run(function(){bs(i,function(l,u){o[u]=mC(l,t),a[u]=vt(function(){return o[u]()}),Object.defineProperty(t.getters,u,{get:function(){return a[u].value},enumerable:!0})})}),t._state=Yn({data:e}),t._scope=c,t.strict&&wC(t),r&&n&&t._withCommit(function(){r.data=null}),s&&s.stop()}function Ba(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var a=Bu(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=r.state})}var l=r.context=gC(t,o,n);r.forEachMutation(function(u,h){var d=o+h;yC(t,d,u,l)}),r.forEachAction(function(u,h){var d=u.root?h:o+h,m=u.handler||u;vC(t,d,m,l)}),r.forEachGetter(function(u,h){var d=o+h;_C(t,d,u,l)}),r.forEachChild(function(u,h){Ba(t,e,n.concat(h),u,s)})}function gC(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,a){var c=ra(i,o,a),l=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,l)},commit:r?t.commit:function(i,o,a){var c=ra(i,o,a),l=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=e+h),t.commit(h,l,u)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return Vg(t,e)}},state:{get:function(){return Bu(t.state,n)}}}),s}function Vg(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function yC(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function vC(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return pC(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function _C(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function wC(t){dr(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Bu(t,e){return e.reduce(function(n,r){return n[r]},t)}function ra(t,e,n){return fC(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var bC="vuex bindings",mf="vuex:mutations",Lc="vuex:actions",Lr="vuex",EC=0;function TC(t,e){rS({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[bC]},function(n){n.addTimelineLayer({id:mf,label:"Vuex Mutations",color:gf}),n.addTimelineLayer({id:Lc,label:"Vuex Actions",color:gf}),n.addInspector({id:Lr,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===Lr)if(r.filter){var s=[];Kg(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[qg(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===Lr){var s=r.nodeId;Vg(e,s),r.state=CC(kC(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===Lr){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(Lr),n.sendInspectorState(Lr),n.addTimelineEvent({layerId:mf,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=EC++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:Lc,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:Lc,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var gf=8702998,IC=6710886,SC=16777215,jg={label:"namespaced",textColor:SC,backgroundColor:IC};function Hg(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function qg(t,e){return{id:e||"root",label:Hg(e),tags:t.namespaced?[jg]:[],children:Object.keys(t._children).map(function(n){return qg(t._children[n],e+n+"/")})}}function Kg(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[jg]:[]}),Object.keys(e._children).forEach(function(s){Kg(t,e._children[s],n,r+s+"/")})}function CC(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=AC(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Hg(o):o,editable:!1,value:Cl(function(){return i[o]})}})}return s}function AC(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=Cl(function(){return t[n]})}else e[n]=Cl(function(){return t[n]})}),e}function kC(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Cl(t){try{return t()}catch(e){return e}}var Wt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},Wg={namespaced:{configurable:!0}};Wg.namespaced.get=function(){return!!this._rawModule.namespaced};Wt.prototype.addChild=function(e,n){this._children[e]=n};Wt.prototype.removeChild=function(e){delete this._children[e]};Wt.prototype.getChild=function(e){return this._children[e]};Wt.prototype.hasChild=function(e){return e in this._children};Wt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Wt.prototype.forEachChild=function(e){bs(this._children,e)};Wt.prototype.forEachGetter=function(e){this._rawModule.getters&&bs(this._rawModule.getters,e)};Wt.prototype.forEachAction=function(e){this._rawModule.actions&&bs(this._rawModule.actions,e)};Wt.prototype.forEachMutation=function(e){this._rawModule.mutations&&bs(this._rawModule.mutations,e)};Object.defineProperties(Wt.prototype,Wg);var Ar=function(e){this.register([],e,!1)};Ar.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};Ar.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};Ar.prototype.update=function(e){zg([],this.root,e)};Ar.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new Wt(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&bs(n.modules,function(a,c){s.register(e.concat(c),a,r)})};Ar.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);!s||!s.runtime||n.removeChild(r)};Ar.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function zg(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;zg(t.concat(r),e.getChild(r),n.modules[r])}}function RC(t){return new Et(t)}var Et=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Ar(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(d,m){return c.call(o,d,m)},this.commit=function(d,m,f){return l.call(o,d,m,f)},this.strict=s;var u=this._modules.root.state;Ba(this,u,[],this._modules.root),$u(this,u),r.forEach(function(h){return h(n)})},Vu={state:{configurable:!0}};Et.prototype.install=function(e,n){e.provide(n||Fg,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&TC(e,this)};Vu.state.get=function(){return this._state.data};Vu.state.set=function(t){};Et.prototype.commit=function(e,n,r){var s=this,i=ra(e,n,r),o=i.type,a=i.payload,c={type:o,payload:a},l=this._mutations[o];!l||(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(c,s.state)}))};Et.prototype.dispatch=function(e,n){var r=this,s=ra(e,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._actions[i];if(!!c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){l.then(function(d){try{r._actionSubscribers.filter(function(m){return m.after}).forEach(function(m){return m.after(a,r.state)})}catch{}u(d)},function(d){try{r._actionSubscribers.filter(function(m){return m.error}).forEach(function(m){return m.error(a,r.state,d)})}catch{}h(d)})})}};Et.prototype.subscribe=function(e,n){return $g(e,this._subscribers,n)};Et.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return $g(r,this._actionSubscribers,n)};Et.prototype.watch=function(e,n,r){var s=this;return dr(function(){return e(s.state,s.getters)},n,Object.assign({},r))};Et.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Et.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Ba(this,this.state,e,this._modules.get(e),r.preserveState),$u(this,this.state)};Et.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=Bu(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),Bg(this)};Et.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Et.prototype.hotUpdate=function(e){this._modules.update(e),Bg(this,!0)};Et.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Et.prototype,Vu);const Zn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},OC={emits:["loaded","onloadedmetadata"],props:["show","src","refer"],setup(t,e){const n=fe(),r=i=>{n.value=i.target.files[0],s()},s=()=>{let i=document.getElementById("video-preview"),o=new FileReader;o.readAsDataURL(n.value),o.addEventListener("load",function(){i.src=o.result,e.emit("loaded",i.src)})};return{file:n,handleFileUpload:r,previewVideo:s}}},PC=["src"];function DC(t,e,n,r,s,i){return me(),Re(Le,null,[Ve(D("video",{src:n.src,id:"video-preview",controls:"",ref:"refer"},null,8,PC),[[Fn,r.file||!!n.src]]),Ve(D("input",{type:"file",accept:"video/*",onChange:e[0]||(e[0]=o=>r.handleFileUpload(o))},null,544),[[Fn,n.show]])],64)}const NC=Zn(OC,[["render",DC]]);const xC={emits:["loaded"],components:{Video:NC},setup(){const t=Fu(),e=ws(),n=Ug(),r=fe(""),s=fe(""),i=fe(""),o=Yn({videos:[]}),a=fe(0);fe(0);const c=async u=>{if(u.preventDefault(),r.value){const h=new Date,d=h.getFullYear()+"-"+(h.getMonth()+1)+"-"+h.getDate();t.commit("addPost",{id:n.query.id?n.query.id:0,date:d,title:r.value,content:i.value,video:o}),n.query.id?e.push("/feed"):e.push("/edit-video")}else s.value="Title field required"},l=u=>{o.videos&&o.videos.push(u)};return Di(()=>{n.query.title&&(r.value=n.query.title),n.query.content&&(i.value=n.query.content),n.query.video&&(o.videos=n.query.video)}),{publish:c,Title:r,validTitle:s,Content:i,video:o,more:a,setVideo:l}}},LC={class:"post"},MC=D("h3",null,"Post",-1),UC=D("label",{class:"label",for:"Title"},"Title",-1),FC=D("label",{class:"label",for:"Content"},"Content",-1),$C=D("label",{class:"label",for:""},"Video",-1),BC={class:"more"};function VC(t,e,n,r,s,i){const o=gn("Video");return me(),Re("form",null,[D("div",LC,[MC,UC,Ve(D("input",{id:"Title","onUpdate:modelValue":e[0]||(e[0]=a=>r.Title=a),type:"text",placeholder:"Title (required)",required:""},null,512),[[Dt,r.Title]]),FC,Ve(D("textarea",{id:"Content","onUpdate:modelValue":e[1]||(e[1]=a=>r.Content=a),placeholder:"Text"},null,512),[[Dt,r.Content]]),$C,D("span",null,[Ee(o,{src:r.video.videos[0],show:!0,onLoaded:r.setVideo},null,8,["src","onLoaded"])]),(me(!0),Re(Le,null,Pa(r.more,a=>(me(),Re("span",BC,[Ee(o,{src:r.video.videos[a],show:!0,onLoaded:r.setVideo},null,8,["src","onLoaded"])]))),256)),r.more?(me(),Re("button",{key:0,onClick:e[2]||(e[2]=pl(a=>r.more--,["prevent"]))},"Less")):Qs("",!0),D("button",{onClick:e[3]||(e[3]=pl(a=>r.more++,["prevent"]))},"More"),Ge(" "+wt(r.validTitle)+" ",1),D("button",{onClick:e[4]||(e[4]=(...a)=>r.publish&&r.publish(...a))},"Publish")])])}const jC=Zn(xC,[["render",VC]]);function Gg(t,e){return function(){return t.apply(e,arguments)}}const{toString:Qg}=Object.prototype,{getPrototypeOf:ju}=Object,Hu=(t=>e=>{const n=Qg.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),In=t=>(t=t.toLowerCase(),e=>Hu(e)===t),Va=t=>e=>typeof e===t,{isArray:Es}=Array,vi=Va("undefined");function HC(t){return t!==null&&!vi(t)&&t.constructor!==null&&!vi(t.constructor)&&Gn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Jg=In("ArrayBuffer");function qC(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Jg(t.buffer),e}const KC=Va("string"),Gn=Va("function"),Xg=Va("number"),qu=t=>t!==null&&typeof t=="object",WC=t=>t===!0||t===!1,No=t=>{if(Hu(t)!=="object")return!1;const e=ju(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},zC=In("Date"),GC=In("File"),QC=In("Blob"),JC=In("FileList"),XC=t=>qu(t)&&Gn(t.pipe),YC=t=>{const e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||Qg.call(t)===e||Gn(t.toString)&&t.toString()===e)},ZC=In("URLSearchParams"),eA=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Bi(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Es(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function Yg(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const Zg=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),ey=t=>!vi(t)&&t!==Zg;function Al(){const{caseless:t}=ey(this)&&this||{},e={},n=(r,s)=>{const i=t&&Yg(e,s)||s;No(e[i])&&No(r)?e[i]=Al(e[i],r):No(r)?e[i]=Al({},r):Es(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Bi(arguments[r],n);return e}const tA=(t,e,n,{allOwnKeys:r}={})=>(Bi(e,(s,i)=>{n&&Gn(s)?t[i]=Gg(s,n):t[i]=s},{allOwnKeys:r}),t),nA=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),rA=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},sA=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&ju(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},iA=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},oA=t=>{if(!t)return null;if(Es(t))return t;let e=t.length;if(!Xg(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},aA=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&ju(Uint8Array)),cA=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},lA=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},uA=In("HTMLFormElement"),hA=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),yf=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),dA=In("RegExp"),ty=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Bi(n,(s,i)=>{e(s,i,t)!==!1&&(r[i]=s)}),Object.defineProperties(t,r)},fA=t=>{ty(t,(e,n)=>{if(Gn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(!!Gn(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},pA=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Es(t)?r(t):r(String(t).split(e)),n},mA=()=>{},gA=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Mc="abcdefghijklmnopqrstuvwxyz",vf="0123456789",ny={DIGIT:vf,ALPHA:Mc,ALPHA_DIGIT:Mc+Mc.toUpperCase()+vf},yA=(t=16,e=ny.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function vA(t){return!!(t&&Gn(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const _A=t=>{const e=new Array(10),n=(r,s)=>{if(qu(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=Es(r)?[]:{};return Bi(r,(o,a)=>{const c=n(o,s+1);!vi(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},E={isArray:Es,isArrayBuffer:Jg,isBuffer:HC,isFormData:YC,isArrayBufferView:qC,isString:KC,isNumber:Xg,isBoolean:WC,isObject:qu,isPlainObject:No,isUndefined:vi,isDate:zC,isFile:GC,isBlob:QC,isRegExp:dA,isFunction:Gn,isStream:XC,isURLSearchParams:ZC,isTypedArray:aA,isFileList:JC,forEach:Bi,merge:Al,extend:tA,trim:eA,stripBOM:nA,inherits:rA,toFlatObject:sA,kindOf:Hu,kindOfTest:In,endsWith:iA,toArray:oA,forEachEntry:cA,matchAll:lA,isHTMLForm:uA,hasOwnProperty:yf,hasOwnProp:yf,reduceDescriptors:ty,freezeMethods:fA,toObjectSet:pA,toCamelCase:hA,noop:mA,toFiniteNumber:gA,findKey:Yg,global:Zg,isContextDefined:ey,ALPHABET:ny,generateString:yA,isSpecCompliantForm:vA,toJSONObject:_A};function de(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}E.inherits(de,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:E.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ry=de.prototype,sy={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{sy[t]={value:t}});Object.defineProperties(de,sy);Object.defineProperty(ry,"isAxiosError",{value:!0});de.from=(t,e,n,r,s,i)=>{const o=Object.create(ry);return E.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),de.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const wA=null;function kl(t){return E.isPlainObject(t)||E.isArray(t)}function iy(t){return E.endsWith(t,"[]")?t.slice(0,-2):t}function _f(t,e,n){return t?t.concat(e).map(function(s,i){return s=iy(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function bA(t){return E.isArray(t)&&!t.some(kl)}const EA=E.toFlatObject(E,{},null,function(e){return/^is[A-Z]/.test(e)});function ja(t,e,n){if(!E.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=E.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,b){return!E.isUndefined(b[v])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&E.isSpecCompliantForm(e);if(!E.isFunction(s))throw new TypeError("visitor must be a function");function l(f){if(f===null)return"";if(E.isDate(f))return f.toISOString();if(!c&&E.isBlob(f))throw new de("Blob is not supported. Use a Buffer instead.");return E.isArrayBuffer(f)||E.isTypedArray(f)?c&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,v,b){let y=f;if(f&&!b&&typeof f=="object"){if(E.endsWith(v,"{}"))v=r?v:v.slice(0,-2),f=JSON.stringify(f);else if(E.isArray(f)&&bA(f)||(E.isFileList(f)||E.endsWith(v,"[]"))&&(y=E.toArray(f)))return v=iy(v),y.forEach(function(A,N){!(E.isUndefined(A)||A===null)&&e.append(o===!0?_f([v],N,i):o===null?v:v+"[]",l(A))}),!1}return kl(f)?!0:(e.append(_f(b,v,i),l(f)),!1)}const h=[],d=Object.assign(EA,{defaultVisitor:u,convertValue:l,isVisitable:kl});function m(f,v){if(!E.isUndefined(f)){if(h.indexOf(f)!==-1)throw Error("Circular reference detected in "+v.join("."));h.push(f),E.forEach(f,function(y,_){(!(E.isUndefined(y)||y===null)&&s.call(e,y,E.isString(_)?_.trim():_,v,d))===!0&&m(y,v?v.concat(_):[_])}),h.pop()}}if(!E.isObject(t))throw new TypeError("data must be an object");return m(t),e}function wf(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Ku(t,e){this._pairs=[],t&&ja(t,this,e)}const oy=Ku.prototype;oy.append=function(e,n){this._pairs.push([e,n])};oy.toString=function(e){const n=e?function(r){return e.call(this,r,wf)}:wf;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function TA(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ay(t,e,n){if(!e)return t;const r=n&&n.encode||TA,s=n&&n.serialize;let i;if(s?i=s(e,n):i=E.isURLSearchParams(e)?e.toString():new Ku(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class IA{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){E.forEach(this.handlers,function(r){r!==null&&e(r)})}}const bf=IA,cy={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},SA=typeof URLSearchParams<"u"?URLSearchParams:Ku,CA=typeof FormData<"u"?FormData:null,AA=typeof Blob<"u"?Blob:null,kA=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),RA=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Zt={isBrowser:!0,classes:{URLSearchParams:SA,FormData:CA,Blob:AA},isStandardBrowserEnv:kA,isStandardBrowserWebWorkerEnv:RA,protocols:["http","https","file","blob","url","data"]};function OA(t,e){return ja(t,new Zt.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return Zt.isNode&&E.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function PA(t){return E.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function DA(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function ly(t){function e(n,r,s,i){let o=n[i++];const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&E.isArray(s)?s.length:o,c?(E.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!E.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&E.isArray(s[o])&&(s[o]=DA(s[o])),!a)}if(E.isFormData(t)&&E.isFunction(t.entries)){const n={};return E.forEachEntry(t,(r,s)=>{e(PA(r),s,n,0)}),n}return null}const NA={"Content-Type":void 0};function xA(t,e,n){if(E.isString(t))try{return(e||JSON.parse)(t),E.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Ha={transitional:cy,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=E.isObject(e);if(i&&E.isHTMLForm(e)&&(e=new FormData(e)),E.isFormData(e))return s&&s?JSON.stringify(ly(e)):e;if(E.isArrayBuffer(e)||E.isBuffer(e)||E.isStream(e)||E.isFile(e)||E.isBlob(e))return e;if(E.isArrayBufferView(e))return e.buffer;if(E.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return OA(e,this.formSerializer).toString();if((a=E.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return ja(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),xA(e)):e}],transformResponse:[function(e){const n=this.transitional||Ha.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&E.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?de.from(a,de.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Zt.classes.FormData,Blob:Zt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};E.forEach(["delete","get","head"],function(e){Ha.headers[e]={}});E.forEach(["post","put","patch"],function(e){Ha.headers[e]=E.merge(NA)});const Wu=Ha,LA=E.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),MA=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&LA[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Ef=Symbol("internals");function Ns(t){return t&&String(t).trim().toLowerCase()}function xo(t){return t===!1||t==null?t:E.isArray(t)?t.map(xo):String(t)}function UA(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}function FA(t){return/^[-_a-zA-Z]+$/.test(t.trim())}function Uc(t,e,n,r,s){if(E.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!E.isString(e)){if(E.isString(r))return e.indexOf(r)!==-1;if(E.isRegExp(r))return r.test(e)}}function $A(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function BA(t,e){const n=E.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class qa{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const u=Ns(c);if(!u)throw new Error("header name must be a non-empty string");const h=E.findKey(s,u);(!h||s[h]===void 0||l===!0||l===void 0&&s[h]!==!1)&&(s[h||c]=xo(a))}const o=(a,c)=>E.forEach(a,(l,u)=>i(l,u,c));return E.isPlainObject(e)||e instanceof this.constructor?o(e,n):E.isString(e)&&(e=e.trim())&&!FA(e)?o(MA(e),n):e!=null&&i(n,e,r),this}get(e,n){if(e=Ns(e),e){const r=E.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return UA(s);if(E.isFunction(n))return n.call(this,s,r);if(E.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Ns(e),e){const r=E.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Uc(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=Ns(o),o){const a=E.findKey(r,o);a&&(!n||Uc(r,r[a],a,n))&&(delete r[a],s=!0)}}return E.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Uc(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return E.forEach(this,(s,i)=>{const o=E.findKey(r,i);if(o){n[o]=xo(s),delete n[i];return}const a=e?$A(i):String(i).trim();a!==i&&delete n[i],n[a]=xo(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return E.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&E.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Ef]=this[Ef]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Ns(o);r[a]||(BA(s,o),r[a]=!0)}return E.isArray(e)?e.forEach(i):i(e),this}}qa.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);E.freezeMethods(qa.prototype);E.freezeMethods(qa);const fn=qa;function Fc(t,e){const n=this||Wu,r=e||n,s=fn.from(r.headers);let i=r.data;return E.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function uy(t){return!!(t&&t.__CANCEL__)}function Vi(t,e,n){de.call(this,t==null?"canceled":t,de.ERR_CANCELED,e,n),this.name="CanceledError"}E.inherits(Vi,de,{__CANCEL__:!0});function VA(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new de("Request failed with status code "+n.status,[de.ERR_BAD_REQUEST,de.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const jA=Zt.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,a){const c=[];c.push(n+"="+encodeURIComponent(r)),E.isNumber(s)&&c.push("expires="+new Date(s).toGMTString()),E.isString(i)&&c.push("path="+i),E.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function HA(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function qA(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function hy(t,e){return t&&!HA(e)?qA(t,e):e}const KA=Zt.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=E.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function WA(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function zA(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let h=i,d=0;for(;h!==s;)d+=n[h++],h=h%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const m=u&&l-u;return m?Math.round(d*1e3/m):void 0}}function Tf(t,e){let n=0;const r=zA(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),l=i<=o;n=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:s};u[e?"download":"upload"]=!0,t(u)}}const GA=typeof XMLHttpRequest<"u",QA=GA&&function(t){return new Promise(function(n,r){let s=t.data;const i=fn.from(t.headers).normalize(),o=t.responseType;let a;function c(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}E.isFormData(s)&&(Zt.isStandardBrowserEnv||Zt.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let l=new XMLHttpRequest;if(t.auth){const m=t.auth.username||"",f=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(m+":"+f))}const u=hy(t.baseURL,t.url);l.open(t.method.toUpperCase(),ay(u,t.params,t.paramsSerializer),!0),l.timeout=t.timeout;function h(){if(!l)return;const m=fn.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),v={data:!o||o==="text"||o==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:m,config:t,request:l};VA(function(y){n(y),c()},function(y){r(y),c()},v),l=null}if("onloadend"in l?l.onloadend=h:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(h)},l.onabort=function(){!l||(r(new de("Request aborted",de.ECONNABORTED,t,l)),l=null)},l.onerror=function(){r(new de("Network Error",de.ERR_NETWORK,t,l)),l=null},l.ontimeout=function(){let f=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const v=t.transitional||cy;t.timeoutErrorMessage&&(f=t.timeoutErrorMessage),r(new de(f,v.clarifyTimeoutError?de.ETIMEDOUT:de.ECONNABORTED,t,l)),l=null},Zt.isStandardBrowserEnv){const m=(t.withCredentials||KA(u))&&t.xsrfCookieName&&jA.read(t.xsrfCookieName);m&&i.set(t.xsrfHeaderName,m)}s===void 0&&i.setContentType(null),"setRequestHeader"in l&&E.forEach(i.toJSON(),function(f,v){l.setRequestHeader(v,f)}),E.isUndefined(t.withCredentials)||(l.withCredentials=!!t.withCredentials),o&&o!=="json"&&(l.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&l.addEventListener("progress",Tf(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",Tf(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=m=>{!l||(r(!m||m.type?new Vi(null,t,l):m),l.abort(),l=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const d=WA(u);if(d&&Zt.protocols.indexOf(d)===-1){r(new de("Unsupported protocol "+d+":",de.ERR_BAD_REQUEST,t));return}l.send(s||null)})},Lo={http:wA,xhr:QA};E.forEach(Lo,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const JA={getAdapter:t=>{t=E.isArray(t)?t:[t];const{length:e}=t;let n,r;for(let s=0;s<e&&(n=t[s],!(r=E.isString(n)?Lo[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new de(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(E.hasOwnProp(Lo,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!E.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Lo};function $c(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Vi(null,t)}function If(t){return $c(t),t.headers=fn.from(t.headers),t.data=Fc.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),JA.getAdapter(t.adapter||Wu.adapter)(t).then(function(r){return $c(t),r.data=Fc.call(t,t.transformResponse,r),r.headers=fn.from(r.headers),r},function(r){return uy(r)||($c(t),r&&r.response&&(r.response.data=Fc.call(t,t.transformResponse,r.response),r.response.headers=fn.from(r.response.headers))),Promise.reject(r)})}const Sf=t=>t instanceof fn?t.toJSON():t;function is(t,e){e=e||{};const n={};function r(l,u,h){return E.isPlainObject(l)&&E.isPlainObject(u)?E.merge.call({caseless:h},l,u):E.isPlainObject(u)?E.merge({},u):E.isArray(u)?u.slice():u}function s(l,u,h){if(E.isUndefined(u)){if(!E.isUndefined(l))return r(void 0,l,h)}else return r(l,u,h)}function i(l,u){if(!E.isUndefined(u))return r(void 0,u)}function o(l,u){if(E.isUndefined(u)){if(!E.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,h){if(h in e)return r(l,u);if(h in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u)=>s(Sf(l),Sf(u),!0)};return E.forEach(Object.keys(t).concat(Object.keys(e)),function(u){const h=c[u]||s,d=h(t[u],e[u],u);E.isUndefined(d)&&h!==a||(n[u]=d)}),n}const dy="1.3.4",zu={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{zu[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Cf={};zu.transitional=function(e,n,r){function s(i,o){return"[Axios v"+dy+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new de(s(o," has been removed"+(n?" in "+n:"")),de.ERR_DEPRECATED);return n&&!Cf[o]&&(Cf[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function XA(t,e,n){if(typeof t!="object")throw new de("options must be an object",de.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new de("option "+i+" must be "+c,de.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new de("Unknown option "+i,de.ERR_BAD_OPTION)}}const Rl={assertOptions:XA,validators:zu},Rn=Rl.validators;class sa{constructor(e){this.defaults=e,this.interceptors={request:new bf,response:new bf}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=is(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Rl.assertOptions(r,{silentJSONParsing:Rn.transitional(Rn.boolean),forcedJSONParsing:Rn.transitional(Rn.boolean),clarifyTimeoutError:Rn.transitional(Rn.boolean)},!1),s!==void 0&&Rl.assertOptions(s,{encode:Rn.function,serialize:Rn.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&E.merge(i.common,i[n.method]),o&&E.forEach(["delete","get","head","post","put","patch","common"],f=>{delete i[f]}),n.headers=fn.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(c=c&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const l=[];this.interceptors.response.forEach(function(v){l.push(v.fulfilled,v.rejected)});let u,h=0,d;if(!c){const f=[If.bind(this),void 0];for(f.unshift.apply(f,a),f.push.apply(f,l),d=f.length,u=Promise.resolve(n);h<d;)u=u.then(f[h++],f[h++]);return u}d=a.length;let m=n;for(h=0;h<d;){const f=a[h++],v=a[h++];try{m=f(m)}catch(b){v.call(this,b);break}}try{u=If.call(this,m)}catch(f){return Promise.reject(f)}for(h=0,d=l.length;h<d;)u=u.then(l[h++],l[h++]);return u}getUri(e){e=is(this.defaults,e);const n=hy(e.baseURL,e.url);return ay(n,e.params,e.paramsSerializer)}}E.forEach(["delete","get","head","options"],function(e){sa.prototype[e]=function(n,r){return this.request(is(r||{},{method:e,url:n,data:(r||{}).data}))}});E.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(is(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}sa.prototype[e]=n(),sa.prototype[e+"Form"]=n(!0)});const Mo=sa;class Gu{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new Vi(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Gu(function(s){e=s}),cancel:e}}}const YA=Gu;function ZA(t){return function(n){return t.apply(null,n)}}function ek(t){return E.isObject(t)&&t.isAxiosError===!0}const Ol={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ol).forEach(([t,e])=>{Ol[e]=t});const tk=Ol;function fy(t){const e=new Mo(t),n=Gg(Mo.prototype.request,e);return E.extend(n,Mo.prototype,e,{allOwnKeys:!0}),E.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return fy(is(t,s))},n}const We=fy(Wu);We.Axios=Mo;We.CanceledError=Vi;We.CancelToken=YA;We.isCancel=uy;We.VERSION=dy;We.toFormData=ja;We.AxiosError=de;We.Cancel=We.CanceledError;We.all=function(e){return Promise.all(e)};We.spread=ZA;We.isAxiosError=ek;We.mergeConfig=is;We.AxiosHeaders=fn;We.formToJSON=t=>ly(E.isHTMLForm(t)?new FormData(t):t);We.HttpStatusCode=tk;We.default=We;const py=We;const nk={data(){return{articles:[]}},async created(){const t="1569d8f789d47354c5de458a9cf5378762efd38782dc89da6b3b73bcfd7436adef984256b00b7c9d4b0202e0121d9afb1973e3a3cf33f9d292be5b6264b1ba75ce4af18a9da312cd74e9904fbed013e58c7d03b6b85d11ffb44751b0176bdbc640d2edb7d30a0a48b3b5f71b7e670c0491a88a35d72db8be2ecea73e8d704150";try{const e=await py.get("https://strapi-cp-blog.onrender.com/api/articles",{headers:{Authorization:`Bearer ${t}`}});this.articles=e.data.data,console.log(e.data)}catch(e){console.error(e)}}},Ka=t=>(Xw("data-v-a4ea588f"),t=t(),Yw(),t),rk={class:"container"},sk={class:"meta"},ik=Ka(()=>D("div",{class:"image"},null,-1)),ok={class:"info"},ak=Ka(()=>D("h1",{style:{width:"max-content"}},"Create your Blogs freely ",-1)),ck=Ge(" Start now creating your own blogs. "),lk={class:"article"},uk=Ka(()=>D("h2",null,"Discover",-1)),hk={class:"articles"},dk={class:"first-letter"},fk=Ge("View Blog Post"),pk=Ka(()=>D("div",{class:"footer"},null,-1));function mk(t,e,n,r,s,i){const o=gn("RouterLink"),a=gn("router-link");return me(),Re("div",rk,[D("div",sk,[ik,D("div",ok,[ak,D("p",null,[Ee(o,{class:"center",to:"/feed"},{default:Ct(()=>[ck]),_:1})])])]),D("main",lk,[uk,(me(!0),Re(Le,null,Pa(s.articles,c=>(me(),Re("div",hk,[D("h3",null,wt(c.attributes.Title),1),D("p",null,[D("span",dk,wt(c.attributes.Description[0]),1),Ge(" "+wt(c.attributes.Description.split(`
`)[0]),1)]),Ee(a,{class:"link",to:`/${c.id}-${c.attributes.Title.replace(/:|!|'|\?|,/g,"").replace(/\s+/g,"-").toLowerCase()}`},{default:Ct(()=>[fk]),_:2},1032,["to"])]))),256))]),pk])}const Af=Zn(nk,[["render",mk],["__scopeId","data-v-a4ea588f"]]);const gk={class:"container"},yk=D("p",null,"Profile photo",-1),vk=["src"],_k=D("label",{for:"user",class:"username"},"Username",-1),wk=D("label",{for:"first",class:"firstname"},"Firstname",-1),bk=D("label",{for:"last",class:"lastname"},"Lastname",-1),Ek=D("label",{for:"number"},"Phone Number",-1),Tk={__name:"Profile",emits:["sendRegistration"],setup(t,{emit:e}){const n=fe(),r=fe(),s=fe(""),i=fe(""),o=fe(""),a=fe(),c=u=>{u.preventDefault(),r.value={image:n.value,username:s.value,firstname:i.value,lastname:o.value,number:a.value},e("sendRegistration",r.value)},l=u=>{let h=u.target.files[0],d=new FileReader;d.readAsDataURL(h),d.addEventListener("load",function(){n.value=d.result})};return(u,h)=>(me(),Re("div",null,[D("form",gk,[yk,Ve(D("img",{src:n.value,alt:"",width:"250",height:"250",class:"photo"},null,8,vk),[[Fn,n.value]]),D("input",{class:"photo",type:"file",accept:"image/*",onChange:h[0]||(h[0]=d=>l(d))},null,32),_k,Ve(D("input",{type:"text","onUpdate:modelValue":h[1]||(h[1]=d=>s.value=d),class:"username"},null,512),[[Dt,s.value]]),wk,Ve(D("input",{type:"text","onUpdate:modelValue":h[2]||(h[2]=d=>i.value=d),class:"firstname"},null,512),[[Dt,i.value]]),bk,Ve(D("input",{type:"text","onUpdate:modelValue":h[3]||(h[3]=d=>o.value=d),class:"lastname"},null,512),[[Dt,o.value]]),Ek,Ve(D("input",{type:"number","onUpdate:modelValue":h[4]||(h[4]=d=>a.value=d),class:"phone"},null,512),[[Dt,a.value]]),D("p",null,[D("button",{onClick:c},"Submit")])])]))}};/**
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
 */const my="firebasestorage.googleapis.com",gy="storageBucket",Ik=2*60*1e3,Sk=10*60*1e3;/**
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
 */class Fe extends on{constructor(e,n,r=0){super(Bc(e),`Firebase Storage: ${n} (${Bc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Fe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Bc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Bc(t){return"storage/"+t}function Qu(){const t="An unknown error occurred, please check the error payload for server response.";return new Fe("unknown",t)}function Ck(t){return new Fe("object-not-found","Object '"+t+"' does not exist.")}function Ak(t){return new Fe("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function kk(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Fe("unauthenticated",t)}function Rk(){return new Fe("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function Ok(t){return new Fe("unauthorized","User does not have permission to access '"+t+"'.")}function Pk(){return new Fe("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Dk(){return new Fe("canceled","User canceled the upload/download.")}function Nk(t){return new Fe("invalid-url","Invalid URL '"+t+"'.")}function xk(t){return new Fe("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function Lk(){return new Fe("no-default-bucket","No default bucket found. Did you set the '"+gy+"' property when initializing the app?")}function Mk(){return new Fe("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function Uk(){return new Fe("no-download-url","The given file does not have any download URLs.")}function Pl(t){return new Fe("invalid-argument",t)}function yy(){return new Fe("app-deleted","The Firebase app was deleted.")}function Fk(t){return new Fe("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Zs(t,e){return new Fe("invalid-format","String does not match format '"+t+"': "+e)}function xs(t){throw new Fe("internal-error","Internal error: "+t)}/**
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
 */class At{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=At.makeFromUrl(e,n)}catch{return new At(e,"")}if(r.path==="")return r;throw xk(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(N){N.path_=decodeURIComponent(N.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),f={bucket:1,path:3},v=n===my?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",y=new RegExp(`^https?://${v}/${s}/${b}`,"i"),A=[{regex:a,indices:c,postModify:i},{regex:m,indices:f,postModify:l},{regex:y,indices:{bucket:1,path:2},postModify:l}];for(let N=0;N<A.length;N++){const H=A[N],X=H.regex.exec(e);if(X){const J=X[H.indices.bucket];let U=X[H.indices.path];U||(U=""),r=new At(J,U),H.postModify(r);break}}if(r==null)throw Nk(e);return r}}class $k{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Bk(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...b){l||(l=!0,e.apply(null,b))}function h(b){s=setTimeout(()=>{s=null,t(m,c())},b)}function d(){i&&clearTimeout(i)}function m(b,...y){if(l){d();return}if(b){d(),u.call(null,b,...y);return}if(c()||o){d(),u.call(null,b,...y);return}r<64&&(r*=2);let A;a===1?(a=2,A=0):A=(r+Math.random())*1e3,h(A)}let f=!1;function v(b){f||(f=!0,d(),!l&&(s!==null?(b||(a=2),clearTimeout(s),h(0)):b||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function Vk(t){t(!1)}/**
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
 */function jk(t){return t!==void 0}function Hk(t){return typeof t=="object"&&!Array.isArray(t)}function Ju(t){return typeof t=="string"||t instanceof String}function kf(t){return Xu()&&t instanceof Blob}function Xu(){return typeof Blob<"u"&&!wE()}function Rf(t,e,n,r){if(r<e)throw Pl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Pl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Yu(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function vy(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */function qk(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class Kk{constructor(e,n,r,s,i,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,f)=>{this.resolve_=m,this.reject_=f,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new fo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===gr.NO_ERROR,c=i.getStatus();if((!a||qk(c,this.additionalRetryCodes_))&&this.retry){const u=i.getErrorCode()===gr.ABORT;r(!1,new fo(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new fo(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());jk(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Qu();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?yy():Dk();o(c)}else{const c=Pk();o(c)}};this.canceled_?n(!1,new fo(!1,null,!0)):this.backoffId_=Bk(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Vk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class fo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Wk(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function zk(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function Gk(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Qk(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Jk(t,e,n,r,s,i,o=!0){const a=vy(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return Gk(l,e),Wk(l,n),zk(l,i),Qk(l,r),new Kk(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function Xk(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Yk(...t){const e=Xk();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Xu())return new Blob(t);throw new Fe("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function Zk(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function eR(t){return atob(t)}/**
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
 */const Bt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Vc{constructor(e,n){this.data=e,this.contentType=n||null}}function _y(t,e){switch(t){case Bt.RAW:return new Vc(wy(e));case Bt.BASE64:case Bt.BASE64URL:return new Vc(by(t,e));case Bt.DATA_URL:return new Vc(nR(e),rR(e))}throw Qu()}function wy(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function tR(t){let e;try{e=decodeURIComponent(t)}catch{throw Zs(Bt.DATA_URL,"Malformed data URL.")}return wy(e)}function by(t,e){switch(t){case Bt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Zs(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Bt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Zs(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=eR(e)}catch{throw Zs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Ey{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Zs(Bt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=sR(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function nR(t){const e=new Ey(t);return e.base64?by(Bt.BASE64,e.rest):tR(e.rest)}function rR(t){return new Ey(t).contentType}function sR(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Un{constructor(e,n){let r=0,s="";kf(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(kf(this.data_)){const r=this.data_,s=Zk(r,e,n);return s===null?null:new Un(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Un(r,!0)}}static getBlob(...e){if(Xu()){const n=e.map(r=>r instanceof Un?r.data_:r);return new Un(Yk.apply(null,n))}else{const n=e.map(o=>Ju(o)?_y(Bt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Un(s,!0)}}uploadData(){return this.data_}}/**
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
 */function Ty(t){let e;try{e=JSON.parse(t)}catch{return null}return Hk(e)?e:null}/**
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
 */function iR(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function oR(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Iy(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function aR(t,e){return e}class dt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||aR}}let po=null;function cR(t){return!Ju(t)||t.length<2?t:Iy(t)}function Sy(){if(po)return po;const t=[];t.push(new dt("bucket")),t.push(new dt("generation")),t.push(new dt("metageneration")),t.push(new dt("name","fullPath",!0));function e(i,o){return cR(o)}const n=new dt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new dt("size");return s.xform=r,t.push(s),t.push(new dt("timeCreated")),t.push(new dt("updated")),t.push(new dt("md5Hash",null,!0)),t.push(new dt("cacheControl",null,!0)),t.push(new dt("contentDisposition",null,!0)),t.push(new dt("contentEncoding",null,!0)),t.push(new dt("contentLanguage",null,!0)),t.push(new dt("contentType",null,!0)),t.push(new dt("metadata","customMetadata",!0)),po=t,po}function lR(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new At(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function uR(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return lR(r,t),r}function Cy(t,e,n){const r=Ty(e);return r===null?null:uR(t,r,n)}function hR(t,e,n,r){const s=Ty(e);if(s===null||!Ju(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),m=Yu(d,n,r),f=vy({alt:"media",token:l});return m+f})[0]}function dR(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Ay{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ky(t){if(!t)throw Qu()}function fR(t,e){function n(r,s){const i=Cy(t,s,e);return ky(i!==null),i}return n}function pR(t,e){function n(r,s){const i=Cy(t,s,e);return ky(i!==null),hR(i,s,t.host,t._protocol)}return n}function Ry(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Rk():s=kk():n.getStatus()===402?s=Ak(t.bucket):n.getStatus()===403?s=Ok(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function mR(t){const e=Ry(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Ck(t.path)),i.serverResponse=s.serverResponse,i}return n}function gR(t,e,n){const r=e.fullServerUrl(),s=Yu(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Ay(s,i,pR(t,n),o);return a.errorHandler=mR(e),a}function yR(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function vR(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=yR(null,e)),r}function _R(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let A="";for(let N=0;N<2;N++)A=A+Math.random().toString().slice(2);return A}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=vR(e,r,s),u=dR(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",m=Un.getBlob(h,r,d);if(m===null)throw Mk();const f={name:l.fullPath},v=Yu(i,t.host,t._protocol),b="POST",y=t.maxUploadRetryTime,_=new Ay(v,b,fR(t,n),y);return _.urlParams=f,_.headers=o,_.body=m.uploadData(),_.errorHandler=Ry(e),_}class wR{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=gr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=gr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=gr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw xs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw xs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw xs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw xs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw xs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class bR extends wR{initXhr(){this.xhr_.responseType="text"}}function Oy(){return new bR}/**
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
 */class Tr{constructor(e,n){this._service=e,n instanceof At?this._location=n:this._location=At.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Tr(e,n)}get root(){const e=new At(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Iy(this._location.path)}get storage(){return this._service}get parent(){const e=iR(this._location.path);if(e===null)return null;const n=new At(this._location.bucket,e);return new Tr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Fk(e)}}function ER(t,e,n){t._throwIfRoot("uploadBytes");const r=_R(t.storage,t._location,Sy(),new Un(e,!0),n);return t.storage.makeRequestWithTokens(r,Oy).then(s=>({metadata:s,ref:t}))}function TR(t,e,n=Bt.RAW,r){t._throwIfRoot("uploadString");const s=_y(n,e),i=Object.assign({},r);return i.contentType==null&&s.contentType!=null&&(i.contentType=s.contentType),ER(t,s.data,i)}function IR(t){t._throwIfRoot("getDownloadURL");const e=gR(t.storage,t._location,Sy());return t.storage.makeRequestWithTokens(e,Oy).then(n=>{if(n===null)throw Uk();return n})}function SR(t,e){const n=oR(t._location.path,e),r=new At(t._location.bucket,n);return new Tr(t.storage,r)}/**
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
 */function CR(t){return/^[A-Za-z]+:\/\//.test(t)}function AR(t,e){return new Tr(t,e)}function Py(t,e){if(t instanceof Zu){const n=t;if(n._bucket==null)throw Lk();const r=new Tr(n,n._bucket);return e!=null?Py(r,e):r}else return e!==void 0?SR(t,e):t}function kR(t,e){if(e&&CR(e)){if(t instanceof Zu)return AR(t,e);throw Pl("To use ref(service, url), the first argument must be a Storage instance.")}else return Py(t,e)}function Of(t,e){const n=e==null?void 0:e[gy];return n==null?null:At.makeFromBucketSpec(n,t)}function RR(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Vm(s,t.app.options.projectId))}class Zu{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=my,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ik,this._maxUploadRetryTime=Sk,this._requests=new Set,s!=null?this._bucket=At.makeFromBucketSpec(s,this._host):this._bucket=Of(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=At.makeFromBucketSpec(this._url,e):this._bucket=Of(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Rf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Rf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Tr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new $k(yy());{const o=Jk(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Pf="@firebase/storage",Df="0.9.13";/**
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
 */const Dy="storage";function Ny(t,e,n,r){return t=Me(t),TR(t,e,n,r)}function xy(t){return t=Me(t),IR(t)}function Ly(t,e){return t=Me(t),kR(t,e)}function My(t=Cu(),e){t=Me(t);const r=xa(t,Dy).getImmediate({identifier:e}),s=$m("storage");return s&&OR(r,...s),r}function OR(t,e,n,r={}){RR(t,e,n,r)}function PR(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Zu(n,r,s,e,gs)}function DR(){wr(new zn(Dy,PR,"PUBLIC").setMultipleInstances(!0)),en(Pf,Df,""),en(Pf,Df,"esm2017")}DR();const NR=D("h1",null,"Create an Account",-1),xR={key:0},LR={style:{"text-decoration":"none"}},MR=Ge("Already have an account? "),UR=Ge("Login!"),FR={__name:"Register",setup(t){const e=fe(!1),n=fe(""),r=fe(""),s=ws(),i=o=>{const a=ts();DT(a,n.value,r.value).then(c=>{if(o.image){const l=My(),u=Ly(l,`images/${c.user.uid}.jpg`);Ny(u,o.image,"data_url").then(h=>{xy(h.ref).then(d=>{c.photoURL=d})})}c.displayName=o.username,c.phoneNumber=o.number,s.push("/feed"),dg(a.currentUser)}).catch(c=>{console.log(c.code),alert(c.message)})};return(o,a)=>{const c=gn("router-link");return me(),Re(Le,null,[NR,e.value?Qs("",!0):(me(),Re("form",xR,[D("p",null,[Ve(D("input",{type:"text",autocomplete:"email",placeholder:"Email","onUpdate:modelValue":a[0]||(a[0]=l=>n.value=l)},null,512),[[Dt,n.value]])]),D("p",null,[Ve(D("input",{type:"password",autocomplete:"current-password",placeholder:"Password","onUpdate:modelValue":a[1]||(a[1]=l=>r.value=l)},null,512),[[Dt,r.value]])])])),Ve(Ee(Tk,{onSendRegistration:i},null,512),[[Fn,e.value]]),D("p",null,[e.value?(me(),Re("button",{key:0,onClick:a[2]||(a[2]=l=>e.value=!1)},"Back")):(me(),Re("button",{key:1,onClick:a[3]||(a[3]=l=>e.value=!0)},"Register"))]),D("p",LR,[MR,Ee(c,{to:"/login"},{default:Ct(()=>[UR]),_:1})])],64)}}},$R=D("h1",null,"Login to your Account",-1),BR={style:{"text-decoration":"none"}},VR=Ge("Don't have an account? "),jR=Ge("Sign up!"),HR={__name:"Login",setup(t){const e=fe(""),n=fe(""),r=ws(),s=fe(),i=()=>{const o=ts();NT(o,e.value,n.value).then(a=>{r.push("/feed")}).catch(a=>{switch(a.code){case"auth/invalid-email":s.value="Invalid email";break;case"auth/user-not-found":s.value="No account with that email was found";break;case"auth/wrong-password":s.value="Incorrect password";break;default:s.value="Email or password was incorrect";break}})};return(o,a)=>{const c=gn("router-link");return me(),Re(Le,null,[$R,D("p",null,[Ve(D("input",{type:"text",placeholder:"Email","onUpdate:modelValue":a[0]||(a[0]=l=>e.value=l)},null,512),[[Dt,e.value]])]),D("p",null,[Ve(D("input",{type:"password",placeholder:"Password","onUpdate:modelValue":a[1]||(a[1]=l=>n.value=l)},null,512),[[Dt,n.value]])]),D("p",null,[D("button",{onClick:i},"Submit")]),D("p",BR,[VR,Ee(c,{to:"/register"},{default:Ct(()=>[jR]),_:1})]),Ge(" "+wt(s.value),1)],64)}}};var qR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$,eh=eh||{},Y=qR||self;function ia(){}function Wa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ji(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function KR(t){return Object.prototype.hasOwnProperty.call(t,jc)&&t[jc]||(t[jc]=++WR)}var jc="closure_uid_"+(1e9*Math.random()>>>0),WR=0;function zR(t,e,n){return t.call.apply(t.bind,arguments)}function GR(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ct(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ct=zR:ct=GR,ct.apply(null,arguments)}function mo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function rt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function er(){this.s=this.s,this.o=this.o}var QR=0;er.prototype.s=!1;er.prototype.na=function(){!this.s&&(this.s=!0,this.M(),QR!=0)&&KR(this)};er.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Uy=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function th(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Nf(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Wa(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function lt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var JR=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Y.addEventListener("test",ia,e),Y.removeEventListener("test",ia,e)}catch{}return t}();function oa(t){return/^[\s\xa0]*$/.test(t)}var xf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Hc(t,e){return t<e?-1:t>e?1:0}function za(){var t=Y.navigator;return t&&(t=t.userAgent)?t:""}function Yt(t){return za().indexOf(t)!=-1}function nh(t){return nh[" "](t),t}nh[" "]=ia;function XR(t){var e=e1;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var YR=Yt("Opera"),os=Yt("Trident")||Yt("MSIE"),Fy=Yt("Edge"),Dl=Fy||os,$y=Yt("Gecko")&&!(za().toLowerCase().indexOf("webkit")!=-1&&!Yt("Edge"))&&!(Yt("Trident")||Yt("MSIE"))&&!Yt("Edge"),ZR=za().toLowerCase().indexOf("webkit")!=-1&&!Yt("Edge");function By(){var t=Y.document;return t?t.documentMode:void 0}var aa;e:{var qc="",Kc=function(){var t=za();if($y)return/rv:([^\);]+)(\)|;)/.exec(t);if(Fy)return/Edge\/([\d\.]+)/.exec(t);if(os)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ZR)return/WebKit\/(\S+)/.exec(t);if(YR)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Kc&&(qc=Kc?Kc[1]:""),os){var Wc=By();if(Wc!=null&&Wc>parseFloat(qc)){aa=String(Wc);break e}}aa=qc}var e1={};function t1(){return XR(function(){let t=0;const e=xf(String(aa)).split("."),n=xf("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=Hc(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Hc(s[2].length==0,i[2].length==0)||Hc(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var Nl;if(Y.document&&os){var Lf=By();Nl=Lf||parseInt(aa,10)||void 0}else Nl=void 0;var n1=Nl;function _i(t,e){if(lt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($y){e:{try{nh(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:r1[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&_i.X.h.call(this)}}rt(_i,lt);var r1={2:"touch",3:"pen",4:"mouse"};_i.prototype.h=function(){_i.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Hi="closure_listenable_"+(1e6*Math.random()|0),s1=0;function i1(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=s,this.key=++s1,this.ba=this.ea=!1}function Ga(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function rh(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Vy(t){const e={};for(const n in t)e[n]=t[n];return e}const Mf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jy(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Mf.length;i++)n=Mf[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Qa(t){this.src=t,this.g={},this.h=0}Qa.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Ll(t,e,r,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new i1(e,this.src,i,!!r,s),e.ea=n,t.push(e)),e};function xl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Uy(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ga(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ll(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==r)return s}return-1}var sh="closure_lm_"+(1e6*Math.random()|0),zc={};function Hy(t,e,n,r,s){if(r&&r.once)return Ky(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Hy(t,e[i],n,r,s);return null}return n=ah(n),t&&t[Hi]?t.N(e,n,ji(r)?!!r.capture:!!r,s):qy(t,e,n,!1,r,s)}function qy(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=ji(s)?!!s.capture:!!s,a=oh(t);if(a||(t[sh]=a=new Qa(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=o1(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)JR||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(zy(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function o1(){function t(n){return e.call(t.src,t.listener,n)}const e=a1;return t}function Ky(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ky(t,e[i],n,r,s);return null}return n=ah(n),t&&t[Hi]?t.O(e,n,ji(r)?!!r.capture:!!r,s):qy(t,e,n,!0,r,s)}function Wy(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Wy(t,e[i],n,r,s);else r=ji(r)?!!r.capture:!!r,n=ah(n),t&&t[Hi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Ll(i,n,r,s),-1<n&&(Ga(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=oh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ll(e,n,r,s)),(n=-1<t?e[t]:null)&&ih(n))}function ih(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Hi])xl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(zy(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=oh(e))?(xl(n,t),n.h==0&&(n.src=null,e[sh]=null)):Ga(t)}}}function zy(t){return t in zc?zc[t]:zc[t]="on"+t}function a1(t,e){if(t.ba)t=!0;else{e=new _i(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&ih(t),t=n.call(r,e)}return t}function oh(t){return t=t[sh],t instanceof Qa?t:null}var Gc="__closure_events_fn_"+(1e9*Math.random()>>>0);function ah(t){return typeof t=="function"?t:(t[Gc]||(t[Gc]=function(e){return t.handleEvent(e)}),t[Gc])}function Ye(){er.call(this),this.i=new Qa(this),this.P=this,this.I=null}rt(Ye,er);Ye.prototype[Hi]=!0;Ye.prototype.removeEventListener=function(t,e,n,r){Wy(this,t,e,n,r)};function nt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new lt(e,t);else if(e instanceof lt)e.target=e.target||t;else{var s=e;e=new lt(r,t),jy(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=go(o,r,!0,e)&&s}if(o=e.g=t,s=go(o,r,!0,e)&&s,s=go(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=go(o,r,!1,e)&&s}Ye.prototype.M=function(){if(Ye.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ga(n[r]);delete t.g[e],t.h--}}this.I=null};Ye.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ye.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function go(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&xl(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var ch=Y.JSON.stringify;function c1(){var t=Jy;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class l1{constructor(){this.h=this.g=null}add(e,n){const r=Gy.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Gy=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new u1,t=>t.reset());class u1{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function h1(t){Y.setTimeout(()=>{throw t},0)}function Qy(t,e){Ml||d1(),Ul||(Ml(),Ul=!0),Jy.add(t,e)}var Ml;function d1(){var t=Y.Promise.resolve(void 0);Ml=function(){t.then(f1)}}var Ul=!1,Jy=new l1;function f1(){for(var t;t=c1();){try{t.h.call(t.g)}catch(n){h1(n)}var e=Gy;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ul=!1}function Ja(t,e){Ye.call(this),this.h=t||1,this.g=e||Y,this.j=ct(this.lb,this),this.l=Date.now()}rt(Ja,Ye);$=Ja.prototype;$.ca=!1;$.R=null;$.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),nt(this,"tick"),this.ca&&(lh(this),this.start()))}};$.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function lh(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}$.M=function(){Ja.X.M.call(this),lh(this),delete this.g};function uh(t,e,n){if(typeof t=="function")n&&(t=ct(t,n));else if(t&&typeof t.handleEvent=="function")t=ct(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function Xy(t){t.g=uh(()=>{t.g=null,t.i&&(t.i=!1,Xy(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class p1 extends er{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Xy(this)}M(){super.M(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wi(t){er.call(this),this.h=t,this.g={}}rt(wi,er);var Uf=[];function Yy(t,e,n,r){Array.isArray(n)||(n&&(Uf[0]=n.toString()),n=Uf);for(var s=0;s<n.length;s++){var i=Hy(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Zy(t){rh(t.g,function(e,n){this.g.hasOwnProperty(n)&&ih(e)},t),t.g={}}wi.prototype.M=function(){wi.X.M.call(this),Zy(this)};wi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Xa(){this.g=!0}Xa.prototype.Aa=function(){this.g=!1};function m1(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function g1(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Hr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+v1(t,n)+(r?" "+r:"")})}function y1(t,e){t.info(function(){return"TIMEOUT: "+e})}Xa.prototype.info=function(){};function v1(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return ch(n)}catch{return e}}var kr={},Ff=null;function Ya(){return Ff=Ff||new Ye}kr.Pa="serverreachability";function ev(t){lt.call(this,kr.Pa,t)}rt(ev,lt);function bi(t){const e=Ya();nt(e,new ev(e))}kr.STAT_EVENT="statevent";function tv(t,e){lt.call(this,kr.STAT_EVENT,t),this.stat=e}rt(tv,lt);function pt(t){const e=Ya();nt(e,new tv(e,t))}kr.Qa="timingevent";function nv(t,e){lt.call(this,kr.Qa,t),this.size=e}rt(nv,lt);function qi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){t()},e)}var Za={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},rv={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function hh(){}hh.prototype.h=null;function $f(t){return t.h||(t.h=t.i())}function sv(){}var Ki={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function dh(){lt.call(this,"d")}rt(dh,lt);function fh(){lt.call(this,"c")}rt(fh,lt);var Fl;function ec(){}rt(ec,hh);ec.prototype.g=function(){return new XMLHttpRequest};ec.prototype.i=function(){return{}};Fl=new ec;function Wi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new wi(this),this.O=_1,t=Dl?125:void 0,this.T=new Ja(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new iv}function iv(){this.i=null,this.g="",this.h=!1}var _1=45e3,$l={},ca={};$=Wi.prototype;$.setTimeout=function(t){this.O=t};function Bl(t,e,n){t.K=1,t.v=nc(_n(e)),t.s=n,t.P=!0,ov(t,null)}function ov(t,e){t.F=Date.now(),zi(t),t.A=_n(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),pv(n.i,"t",r),t.C=0,n=t.l.H,t.h=new iv,t.g=Lv(t.l,n?e:null,!t.s),0<t.N&&(t.L=new p1(ct(t.La,t,t.g),t.N)),Yy(t.S,t.g,"readystatechange",t.ib),e=t.H?Vy(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),bi(),m1(t.j,t.u,t.A,t.m,t.U,t.s)}$.ib=function(t){t=t.target;const e=this.L;e&&dn(t)==3?e.l():this.La(t)};$.La=function(t){try{if(t==this.g)e:{const u=dn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Dl||this.g&&(this.h.h||this.g.fa()||Hf(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?bi(3):bi(2)),tc(this);var n=this.g.aa();this.Y=n;t:if(av(this)){var r=Hf(this.g);t="";var s=r.length,i=dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cr(this),ei(this);var o="";break t}this.h.i=new Y.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,g1(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!oa(a)){var l=a;break t}}l=null}if(n=l)Hr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Vl(this,n);else{this.i=!1,this.o=3,pt(12),cr(this),ei(this);break e}}this.P?(cv(this,u,o),Dl&&this.i&&u==3&&(Yy(this.S,this.T,"tick",this.hb),this.T.start())):(Hr(this.j,this.m,o,null),Vl(this,o)),u==4&&cr(this),this.i&&!this.I&&(u==4?Pv(this.l,this):(this.i=!1,zi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,pt(12)):(this.o=0,pt(13)),cr(this),ei(this)}}}catch{}finally{}};function av(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function cv(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=w1(t,n),s==ca){e==4&&(t.o=4,pt(14),r=!1),Hr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==$l){t.o=4,pt(15),Hr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Hr(t.j,t.m,s,null),Vl(t,s);av(t)&&s!=ca&&s!=$l&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,pt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),wh(e),e.K=!0,pt(11))):(Hr(t.j,t.m,n,"[Invalid Chunked Response]"),cr(t),ei(t))}$.hb=function(){if(this.g){var t=dn(this.g),e=this.g.fa();this.C<e.length&&(tc(this),cv(this,t,e),this.i&&t!=4&&zi(this))}};function w1(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ca:(n=Number(e.substring(n,r)),isNaN(n)?$l:(r+=1,r+n>e.length?ca:(e=e.substr(r,n),t.C=r+n,e)))}$.cancel=function(){this.I=!0,cr(this)};function zi(t){t.V=Date.now()+t.O,lv(t,t.O)}function lv(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=qi(ct(t.gb,t),e)}function tc(t){t.B&&(Y.clearTimeout(t.B),t.B=null)}$.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(y1(this.j,this.A),this.K!=2&&(bi(),pt(17)),cr(this),this.o=2,ei(this)):lv(this,this.V-t)};function ei(t){t.l.G==0||t.I||Pv(t.l,t)}function cr(t){tc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,lh(t.T),Zy(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Vl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||jl(n.h,t))){if(!t.J&&jl(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ha(n),ic(n);else break e;_h(n),pt(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=qi(ct(n.cb,n),6e3));if(1>=yv(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else lr(n,11)}else if((t.J||n.g==t)&&ha(n),!oa(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const f=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(f){var i=r.h;i.g||f.indexOf("spdy")==-1&&f.indexOf("quic")==-1&&f.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ph(i,i.h),i.h=null))}if(r.D){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,Ne(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=xv(r,r.H?r.ka:null,r.V),o.J){vv(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(tc(a),zi(a)),r.g=o}else Rv(r);0<n.i.length&&oc(n)}else l[0]!="stop"&&l[0]!="close"||lr(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?lr(n,7):vh(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}bi(4)}catch{}}function b1(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Wa(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function E1(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Wa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function uv(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Wa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=E1(t),r=b1(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var hv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function T1(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function yr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof yr){this.h=e!==void 0?e:t.h,la(this,t.j),this.s=t.s,this.g=t.g,ua(this,t.m),this.l=t.l,e=t.i;var n=new Ei;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Bf(this,n),this.o=t.o}else t&&(n=String(t).match(hv))?(this.h=!!e,la(this,n[1]||"",!0),this.s=Vs(n[2]||""),this.g=Vs(n[3]||"",!0),ua(this,n[4]),this.l=Vs(n[5]||"",!0),Bf(this,n[6]||"",!0),this.o=Vs(n[7]||"")):(this.h=!!e,this.i=new Ei(null,this.h))}yr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(js(e,Vf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(js(e,Vf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(js(n,n.charAt(0)=="/"?C1:S1,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",js(n,k1)),t.join("")};function _n(t){return new yr(t)}function la(t,e,n){t.j=n?Vs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ua(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Bf(t,e,n){e instanceof Ei?(t.i=e,R1(t.i,t.h)):(n||(e=js(e,A1)),t.i=new Ei(e,t.h))}function Ne(t,e,n){t.i.set(e,n)}function nc(t){return Ne(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Vs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function js(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,I1),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function I1(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Vf=/[#\/\?@]/g,S1=/[#\?:]/g,C1=/[#\?]/g,A1=/[#\?@]/g,k1=/#/g;function Ei(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function tr(t){t.g||(t.g=new Map,t.h=0,t.i&&T1(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=Ei.prototype;$.add=function(t,e){tr(this),this.i=null,t=Ts(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function dv(t,e){tr(t),e=Ts(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function fv(t,e){return tr(t),e=Ts(t,e),t.g.has(e)}$.forEach=function(t,e){tr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};$.oa=function(){tr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};$.W=function(t){tr(this);let e=[];if(typeof t=="string")fv(this,t)&&(e=e.concat(this.g.get(Ts(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};$.set=function(t,e){return tr(this),this.i=null,t=Ts(this,t),fv(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function pv(t,e,n){dv(t,e),0<n.length&&(t.i=null,t.g.set(Ts(t,e),th(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Ts(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function R1(t,e){e&&!t.j&&(tr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(dv(this,r),pv(this,s,n))},t)),t.j=e}var O1=class{constructor(t,e){this.h=t,this.g=e}};function mv(t){this.l=t||P1,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Y.g&&Y.g.Ga&&Y.g.Ga()&&Y.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var P1=10;function gv(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function yv(t){return t.h?1:t.g?t.g.size:0}function jl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ph(t,e){t.g?t.g.add(e):t.h=e}function vv(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}mv.prototype.cancel=function(){if(this.i=_v(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function _v(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return th(t.i)}function mh(){}mh.prototype.stringify=function(t){return Y.JSON.stringify(t,void 0)};mh.prototype.parse=function(t){return Y.JSON.parse(t,void 0)};function D1(){this.g=new mh}function N1(t,e,n){const r=n||"";try{uv(t,function(s,i){let o=s;ji(s)&&(o=ch(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function x1(t,e){const n=new Xa;if(Y.Image){const r=new Image;r.onload=mo(yo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=mo(yo,n,r,"TestLoadImage: error",!1,e),r.onabort=mo(yo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=mo(yo,n,r,"TestLoadImage: timeout",!1,e),Y.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function yo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Gi(t){this.l=t.ac||null,this.j=t.jb||!1}rt(Gi,hh);Gi.prototype.g=function(){return new rc(this.l,this.j)};Gi.prototype.i=function(t){return function(){return t}}({});function rc(t,e){Ye.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=gh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}rt(rc,Ye);var gh=0;$=rc.prototype;$.open=function(t,e){if(this.readyState!=gh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ti(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Y).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qi(this)),this.readyState=gh};$.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ti(this)),this.g&&(this.readyState=3,Ti(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;wv(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function wv(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}$.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Qi(this):Ti(this),this.readyState==3&&wv(this)}};$.Va=function(t){this.g&&(this.response=this.responseText=t,Qi(this))};$.Ua=function(t){this.g&&(this.response=t,Qi(this))};$.ga=function(){this.g&&Qi(this)};function Qi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ti(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ti(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(rc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var L1=Y.JSON.parse;function Ue(t){Ye.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=bv,this.K=this.L=!1}rt(Ue,Ye);var bv="",M1=/^https?$/i,U1=["POST","PUT"];$=Ue.prototype;$.Ka=function(t){this.L=t};$.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Fl.g(),this.C=this.u?$f(this.u):$f(Fl),this.g.onreadystatechange=ct(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){jf(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=Y.FormData&&t instanceof Y.FormData,!(0<=Uy(U1,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Iv(this),0<this.B&&((this.K=F1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ct(this.qa,this)):this.A=uh(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){jf(this,i)}};function F1(t){return os&&t1()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}$.qa=function(){typeof eh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,nt(this,"timeout"),this.abort(8))};function jf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ev(t),sc(t)}function Ev(t){t.D||(t.D=!0,nt(t,"complete"),nt(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,nt(this,"complete"),nt(this,"abort"),sc(this))};$.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),sc(this,!0)),Ue.X.M.call(this)};$.Ha=function(){this.s||(this.F||this.v||this.l?Tv(this):this.fb())};$.fb=function(){Tv(this)};function Tv(t){if(t.h&&typeof eh<"u"&&(!t.C[1]||dn(t)!=4||t.aa()!=2)){if(t.v&&dn(t)==4)uh(t.Ha,0,t);else if(nt(t,"readystatechange"),dn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(hv)[1]||null;if(!s&&Y.self&&Y.self.location){var i=Y.self.location.protocol;s=i.substr(0,i.length-1)}r=!M1.test(s?s.toLowerCase():"")}n=r}if(n)nt(t,"complete"),nt(t,"success");else{t.m=6;try{var o=2<dn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Ev(t)}}finally{sc(t)}}}}function sc(t,e){if(t.g){Iv(t);const n=t.g,r=t.C[0]?ia:null;t.g=null,t.C=null,e||nt(t,"ready");try{n.onreadystatechange=r}catch{}}}function Iv(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}function dn(t){return t.g?t.g.readyState:0}$.aa=function(){try{return 2<dn(this)?this.g.status:-1}catch{return-1}};$.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),L1(e)}};function Hf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case bv:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}$.Ea=function(){return this.m};$.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Sv(t){let e="";return rh(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function yh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Sv(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ne(t,e,n))}function Ls(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Cv(t){this.Ca=0,this.i=[],this.j=new Xa,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ls("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ls("baseRetryDelayMs",5e3,t),this.bb=Ls("retryDelaySeedMs",1e4,t),this.$a=Ls("forwardChannelMaxRetries",2,t),this.ta=Ls("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new mv(t&&t.concurrentRequestLimit),this.Fa=new D1,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}$=Cv.prototype;$.ma=8;$.G=1;function vh(t){if(Av(t),t.G==3){var e=t.U++,n=_n(t.F);Ne(n,"SID",t.I),Ne(n,"RID",e),Ne(n,"TYPE","terminate"),Ji(t,n),e=new Wi(t,t.j,e,void 0),e.K=2,e.v=nc(_n(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon&&(n=Y.navigator.sendBeacon(e.v.toString(),"")),!n&&Y.Image&&(new Image().src=e.v,n=!0),n||(e.g=Lv(e.l,null),e.g.da(e.v)),e.F=Date.now(),zi(e)}Nv(t)}function ic(t){t.g&&(wh(t),t.g.cancel(),t.g=null)}function Av(t){ic(t),t.u&&(Y.clearTimeout(t.u),t.u=null),ha(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Y.clearTimeout(t.m),t.m=null)}function oc(t){gv(t.h)||t.m||(t.m=!0,Qy(t.Ja,t),t.C=0)}function $1(t,e){return yv(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=qi(ct(t.Ja,t,e),Dv(t,t.C)),t.C++,!0)}$.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new Wi(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Vy(i),jy(i,this.S)):i=this.S),this.o!==null||this.N||(s.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=kv(this,s,e),n=_n(this.F),Ne(n,"RID",t),Ne(n,"CVER",22),this.D&&Ne(n,"X-HTTP-Session-Id",this.D),Ji(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Sv(i)))+"&"+e:this.o&&yh(n,this.o,i)),ph(this.h,s),this.Ya&&Ne(n,"TYPE","init"),this.O?(Ne(n,"$req",e),Ne(n,"SID","null"),s.Z=!0,Bl(s,n,null)):Bl(s,n,e),this.G=2}}else this.G==3&&(t?qf(this,t):this.i.length==0||gv(this.h)||qf(this))};function qf(t,e){var n;e?n=e.m:n=t.U++;const r=_n(t.F);Ne(r,"SID",t.I),Ne(r,"RID",n),Ne(r,"AID",t.T),Ji(t,r),t.o&&t.s&&yh(r,t.o,t.s),n=new Wi(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=kv(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ph(t.h,n),Bl(n,r,e)}function Ji(t,e){t.ia&&rh(t.ia,function(n,r){Ne(e,r,n)}),t.l&&uv({},function(n,r){Ne(e,r,n)})}function kv(t,e,n){n=Math.min(t.i.length,n);var r=t.l?ct(t.l.Ra,t.l,t):null;e:{var s=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const u=s[c].g;if(l-=i,0>l)i=Math.max(0,s[c].h-100),a=!1;else try{N1(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function Rv(t){t.g||t.u||(t.Z=1,Qy(t.Ia,t),t.A=0)}function _h(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=qi(ct(t.Ia,t),Dv(t,t.A)),t.A++,!0)}$.Ia=function(){if(this.u=null,Ov(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=qi(ct(this.eb,this),t)}};$.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,pt(10),ic(this),Ov(this))};function wh(t){t.B!=null&&(Y.clearTimeout(t.B),t.B=null)}function Ov(t){t.g=new Wi(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=_n(t.sa);Ne(e,"RID","rpc"),Ne(e,"SID",t.I),Ne(e,"CI",t.L?"0":"1"),Ne(e,"AID",t.T),Ne(e,"TYPE","xmlhttp"),Ji(t,e),t.o&&t.s&&yh(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=nc(_n(e)),n.s=null,n.P=!0,ov(n,t)}$.cb=function(){this.v!=null&&(this.v=null,ic(this),_h(this),pt(19))};function ha(t){t.v!=null&&(Y.clearTimeout(t.v),t.v=null)}function Pv(t,e){var n=null;if(t.g==e){ha(t),wh(t),t.g=null;var r=2}else if(jl(t.h,e))n=e.D,vv(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=Ya(),nt(r,new nv(r,n)),oc(t)}else Rv(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(r==1&&$1(t,e)||r==2&&_h(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:lr(t,5);break;case 4:lr(t,10);break;case 3:lr(t,6);break;default:lr(t,2)}}}function Dv(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function lr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=ct(t.kb,t);n||(n=new yr("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||la(n,"https"),nc(n)),x1(n.toString(),r)}else pt(2);t.G=0,t.l&&t.l.va(e),Nv(t),Av(t)}$.kb=function(t){t?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function Nv(t){if(t.G=0,t.la=[],t.l){const e=_v(t.h);(e.length!=0||t.i.length!=0)&&(Nf(t.la,e),Nf(t.la,t.i),t.h.i.length=0,th(t.i),t.i.length=0),t.l.ua()}}function xv(t,e,n){var r=n instanceof yr?_n(n):new yr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),ua(r,r.m);else{var s=Y.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new yr(null,void 0);r&&la(i,r),e&&(i.g=e),s&&ua(i,s),n&&(i.l=n),r=i}return n=t.D,e=t.za,n&&e&&Ne(r,n,e),Ne(r,"VER",t.ma),Ji(t,r),r}function Lv(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ue(new Gi({jb:!0})):new Ue(t.ra),e.Ka(t.H),e}function Mv(){}$=Mv.prototype;$.xa=function(){};$.wa=function(){};$.va=function(){};$.ua=function(){};$.Ra=function(){};function da(){if(os&&!(10<=Number(n1)))throw Error("Environmental error: no available transport.")}da.prototype.g=function(t,e){return new Rt(t,e)};function Rt(t,e){Ye.call(this),this.g=new Cv(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!oa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!oa(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Is(this)}rt(Rt,Ye);Rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;pt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=xv(t,null,t.V),oc(t)};Rt.prototype.close=function(){vh(this.g)};Rt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ch(t),t=n);e.i.push(new O1(e.ab++,t)),e.G==3&&oc(e)};Rt.prototype.M=function(){this.g.l=null,delete this.j,vh(this.g),delete this.g,Rt.X.M.call(this)};function Uv(t){dh.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}rt(Uv,dh);function Fv(){fh.call(this),this.status=1}rt(Fv,fh);function Is(t){this.g=t}rt(Is,Mv);Is.prototype.xa=function(){nt(this.g,"a")};Is.prototype.wa=function(t){nt(this.g,new Uv(t))};Is.prototype.va=function(t){nt(this.g,new Fv)};Is.prototype.ua=function(){nt(this.g,"b")};da.prototype.createWebChannel=da.prototype.g;Rt.prototype.send=Rt.prototype.u;Rt.prototype.open=Rt.prototype.m;Rt.prototype.close=Rt.prototype.close;Za.NO_ERROR=0;Za.TIMEOUT=8;Za.HTTP_ERROR=6;rv.COMPLETE="complete";sv.EventType=Ki;Ki.OPEN="a";Ki.CLOSE="b";Ki.ERROR="c";Ki.MESSAGE="d";Ye.prototype.listen=Ye.prototype.N;Ue.prototype.listenOnce=Ue.prototype.O;Ue.prototype.getLastError=Ue.prototype.Oa;Ue.prototype.getLastErrorCode=Ue.prototype.Ea;Ue.prototype.getStatus=Ue.prototype.aa;Ue.prototype.getResponseJson=Ue.prototype.Sa;Ue.prototype.getResponseText=Ue.prototype.fa;Ue.prototype.send=Ue.prototype.da;Ue.prototype.setWithCredentials=Ue.prototype.Ka;var B1=function(){return new da},V1=function(){return Ya()},Qc=Za,j1=rv,H1=kr,Kf={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},q1=Gi,vo=sv,K1=Ue;const Wf="@firebase/firestore";/**
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
 */let Ss="9.13.0";/**
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
 */const Ir=new Iu("@firebase/firestore");function zf(){return Ir.logLevel}function j(t,...e){if(Ir.logLevel<=pe.DEBUG){const n=e.map(bh);Ir.debug(`Firestore (${Ss}): ${t}`,...n)}}function wn(t,...e){if(Ir.logLevel<=pe.ERROR){const n=e.map(bh);Ir.error(`Firestore (${Ss}): ${t}`,...n)}}function Hl(t,...e){if(Ir.logLevel<=pe.WARN){const n=e.map(bh);Ir.warn(`Firestore (${Ss}): ${t}`,...n)}}function bh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${Ss}) INTERNAL ASSERTION FAILED: `+t;throw wn(e),new Error(e)}function Oe(t,e){t||ee()}function re(t,e){return t}/**
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
 */class $v{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class W1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class z1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class G1{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new qn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Oe(typeof r.accessToken=="string"),new $v(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string"),new st(e)}}class Q1{constructor(e,n,r,s){this.h=e,this.l=n,this.m=r,this.g=s,this.type="FirstParty",this.user=st.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Oe(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class J1{constructor(e,n,r,s){this.h=e,this.l=n,this.m=r,this.g=s}getToken(){return Promise.resolve(new Q1(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class X1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Y1{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?s(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Oe(typeof n.token=="string"),this.A=n.token,new X1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Z1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Bv{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Z1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function as(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Ii{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ii.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ii?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class xe extends Ii{construct(e,n,r){return new xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const eO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends Ii{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return eO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new G(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new G(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new G(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new G(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(xe.fromString(e))}static fromName(e){return new W(xe.fromString(e).popFirst(5))}static empty(){return new W(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new xe(e.slice()))}}function tO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ae.fromTimestamp(r===1e9?new He(n+1,0):new He(n,r));return new Qn(s,W.empty(),e)}function nO(t){return new Qn(t.readTime,t.key,-1)}class Qn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Qn(ae.min(),W.empty(),-1)}static max(){return new Qn(ae.max(),W.empty(),-1)}}function rO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */const sO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Xi(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==sO)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(s=>s?R.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new R((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new R((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Yi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Eh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function Gf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Vv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Eh.at=-1;class ze{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _o(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _o(this.root,e,this.comparator,!1)}getReverseIterator(){return new _o(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _o(this.root,e,this.comparator,!0)}}class _o{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:et.RED,this.left=s!=null?s:et.EMPTY,this.right=i!=null?i:et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new et(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(t,e,n,r,s){return this}insert(t,e,n){return new et(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class qe{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qf(this.data.getIterator())}getIteratorFrom(e){return new Qf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class Qf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class xt{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new xt([])}unionWith(e){let n=new qe(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return as(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ht(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const oO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jn(t){if(Oe(!!t),typeof t=="string"){let e=0;const n=oO.exec(t);if(Oe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function cs(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
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
 */function jv(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Hv(t){const e=t.mapValue.fields.__previous_value__;return jv(e)?Hv(e):e}function Si(t){const e=Jn(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */class aO{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ci{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ci("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ci&&e.projectId===this.projectId&&e.database===this.database}}function ac(t){return t==null}function fa(t){return t===0&&1/t==-1/0}function cO(t){return typeof t=="number"&&Number.isInteger(t)&&!fa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const wo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Sr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?jv(t)?4:lO(t)?9007199254740991:10:ee()}function sn(t,e){if(t===e)return!0;const n=Sr(t);if(n!==Sr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Si(t).isEqual(Si(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Jn(r.timestampValue),o=Jn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return cs(r.bytesValue).isEqual(cs(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Be(r.geoPointValue.latitude)===Be(s.geoPointValue.latitude)&&Be(r.geoPointValue.longitude)===Be(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Be(r.integerValue)===Be(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Be(r.doubleValue),o=Be(s.doubleValue);return i===o?fa(i)===fa(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return as(t.arrayValue.values||[],e.arrayValue.values||[],sn);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Gf(i)!==Gf(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!sn(i[a],o[a])))return!1;return!0}(t,e);default:return ee()}}function Ai(t,e){return(t.values||[]).find(n=>sn(n,e))!==void 0}function ls(t,e){if(t===e)return 0;const n=Sr(t),r=Sr(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Be(s.integerValue||s.doubleValue),a=Be(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Jf(t.timestampValue,e.timestampValue);case 4:return Jf(Si(t),Si(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(s,i){const o=cs(s),a=cs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ge(o[c],a[c]);if(l!==0)return l}return ge(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=ge(Be(s.latitude),Be(i.latitude));return o!==0?o:ge(Be(s.longitude),Be(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=ls(o[c],a[c]);if(l)return l}return ge(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===wo.mapValue&&i===wo.mapValue)return 0;if(s===wo.mapValue)return 1;if(i===wo.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ge(a[u],l[u]);if(h!==0)return h;const d=ls(o[a[u]],c[l[u]]);if(d!==0)return d}return ge(a.length,l.length)}(t.mapValue,e.mapValue);default:throw ee()}}function Jf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=Jn(t),r=Jn(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function Xr(t){return ql(t)}function ql(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Jn(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?cs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,W.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=ql(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${ql(r.fields[a])}`;return i+"}"}(t.mapValue):ee();var e,n}function Kl(t){return!!t&&"integerValue"in t}function Th(t){return!!t&&"arrayValue"in t}function Xf(t){return!!t&&"nullValue"in t}function Yf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Uo(t){return!!t&&"mapValue"in t}function ti(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Rr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ti(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ti(t.arrayValue.values[n]);return e}return Object.assign({},t)}function lO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Uo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ti(n)}setAll(e){let n=it.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=ti(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Uo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Uo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Rr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new _t(ti(this.value))}}function qv(t){const e=[];return Rr(t.fields,(n,r)=>{const s=new it([n]);if(Uo(r)){const i=qv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new xt(e)}/**
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
 */class uO{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function Zf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new uO(t,e,n,r,s,i,o)}function Ih(t){const e=re(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+Xr(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ac(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Xr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Xr(r)).join(",")),e.ht=n}return e.ht}function hO(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Xr(r.value)}`;var r}).join(", ")}]`),ac(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Xr(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Xr(n)).join(",")),`Target(${e})`}function Sh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!_O(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!sn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!tp(t.startAt,e.startAt)&&tp(t.endAt,e.endAt)}function Wl(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class bt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new dO(e,n,r):n==="array-contains"?new mO(e,r):n==="in"?new gO(e,r):n==="not-in"?new yO(e,r):n==="array-contains-any"?new vO(e,r):new bt(e,n,r)}static lt(e,n,r){return n==="in"?new fO(e,r):new pO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(ls(n,this.value)):n!==null&&Sr(this.value)===Sr(n)&&this.ft(ls(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class dO extends bt{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.ft(n)}}class fO extends bt{constructor(e,n){super(e,"in",n),this.keys=Kv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class pO extends bt{constructor(e,n){super(e,"not-in",n),this.keys=Kv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Kv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class mO extends bt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Th(n)&&Ai(n.arrayValue,this.value)}}class gO extends bt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ai(this.value.arrayValue,n)}}class yO extends bt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ai(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ai(this.value.arrayValue,n)}}class vO extends bt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Th(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ai(this.value.arrayValue,r))}}class pa{constructor(e,n){this.position=e,this.inclusive=n}}class ni{constructor(e,n="asc"){this.field=e,this.dir=n}}function _O(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function ep(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=ls(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function tp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!sn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class cc{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function wO(t,e,n,r,s,i,o,a){return new cc(t,e,n,r,s,i,o,a)}function Wv(t){return new cc(t)}function np(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function bO(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function EO(t){for(const e of t.filters)if(e.dt())return e.field;return null}function TO(t){return t.collectionGroup!==null}function ki(t){const e=re(t);if(e._t===null){e._t=[];const n=EO(e),r=bO(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new ni(n)),e._t.push(new ni(it.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new ni(it.keyField(),i))}}}return e._t}function bn(t){const e=re(t);if(!e.wt)if(e.limitType==="F")e.wt=Zf(e.path,e.collectionGroup,ki(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of ki(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new ni(i.field,o))}const r=e.endAt?new pa(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new pa(e.startAt.position,e.startAt.inclusive):null;e.wt=Zf(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.wt}function zl(t,e,n){return new cc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function lc(t,e){return Sh(bn(t),bn(e))&&t.limitType===e.limitType}function zv(t){return`${Ih(bn(t))}|lt:${t.limitType}`}function Gl(t){return`Query(target=${hO(bn(t))}; limitType=${t.limitType})`}function Ch(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):W.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=ep(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,ki(n),r)||n.endAt&&!function(s,i,o){const a=ep(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,ki(n),r))}(t,e)}function IO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Gv(t){return(e,n)=>{let r=!1;for(const s of ki(t)){const i=SO(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function SO(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?ls(a,c):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
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
 */function Qv(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fa(e)?"-0":e}}function Jv(t){return{integerValue:""+t}}function CO(t,e){return cO(e)?Jv(e):Qv(t,e)}/**
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
 */class uc{constructor(){this._=void 0}}function AO(t,e,n){return t instanceof ma?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Ri?Yv(t,e):t instanceof Oi?Zv(t,e):function(r,s){const i=Xv(r,s),o=rp(i)+rp(r.yt);return Kl(i)&&Kl(r.yt)?Jv(o):Qv(r.It,o)}(t,e)}function kO(t,e,n){return t instanceof Ri?Yv(t,e):t instanceof Oi?Zv(t,e):n}function Xv(t,e){return t instanceof ga?Kl(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ma extends uc{}class Ri extends uc{constructor(e){super(),this.elements=e}}function Yv(t,e){const n=e_(e);for(const r of t.elements)n.some(s=>sn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Oi extends uc{constructor(e){super(),this.elements=e}}function Zv(t,e){let n=e_(e);for(const r of t.elements)n=n.filter(s=>!sn(s,r));return{arrayValue:{values:n}}}class ga extends uc{constructor(e,n){super(),this.It=e,this.yt=n}}function rp(t){return Be(t.integerValue||t.doubleValue)}function e_(t){return Th(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function RO(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ri&&r instanceof Ri||n instanceof Oi&&r instanceof Oi?as(n.elements,r.elements,sn):n instanceof ga&&r instanceof ga?sn(n.yt,r.yt):n instanceof ma&&r instanceof ma}(t.transform,e.transform)}class OO{constructor(e,n){this.version=e,this.transformResults=n}}class Ht{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ht}static exists(e){return new Ht(void 0,e)}static updateTime(e){return new Ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hc{}function t_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ah(t.key,Ht.none()):new Zi(t.key,t.data,Ht.none());{const n=t.data,r=_t.empty();let s=new qe(it.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new nr(t.key,r,new xt(s.toArray()),Ht.none())}}function PO(t,e,n){t instanceof Zi?function(r,s,i){const o=r.value.clone(),a=ip(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof nr?function(r,s,i){if(!Fo(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=ip(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(n_(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function ri(t,e,n,r){return t instanceof Zi?function(s,i,o,a){if(!Fo(s.precondition,i))return o;const c=s.value.clone(),l=op(s.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof nr?function(s,i,o,a){if(!Fo(s.precondition,i))return o;const c=op(s.fieldTransforms,a,i),l=i.data;return l.setAll(n_(s)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(s,i,o){return Fo(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function DO(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Xv(r.transform,s||null);i!=null&&(n===null&&(n=_t.empty()),n.set(r.field,i))}return n||null}function sp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&as(n,r,(s,i)=>RO(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zi extends hc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class nr extends hc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function n_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ip(t,e,n){const r=new Map;Oe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,kO(o,a,n[s]))}return r}function op(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,AO(i,o,e))}return r}class Ah extends hc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class NO extends hc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class xO{constructor(e){this.count=e}}/**
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
 */var $e,le;function LO(t){switch(t){default:return ee();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function r_(t){if(t===void 0)return wn("GRPC error has no .code"),k.UNKNOWN;switch(t){case $e.OK:return k.OK;case $e.CANCELLED:return k.CANCELLED;case $e.UNKNOWN:return k.UNKNOWN;case $e.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case $e.INTERNAL:return k.INTERNAL;case $e.UNAVAILABLE:return k.UNAVAILABLE;case $e.UNAUTHENTICATED:return k.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case $e.NOT_FOUND:return k.NOT_FOUND;case $e.ALREADY_EXISTS:return k.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return k.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case $e.ABORTED:return k.ABORTED;case $e.OUT_OF_RANGE:return k.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return k.UNIMPLEMENTED;case $e.DATA_LOSS:return k.DATA_LOSS;default:return ee()}}(le=$e||($e={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Cs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Rr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Vv(this.inner)}size(){return this.innerSize}}/**
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
 */const MO=new ze(W.comparator);function En(){return MO}const s_=new ze(W.comparator);function Hs(...t){let e=s_;for(const n of t)e=e.insert(n.key,n);return e}function i_(t){let e=s_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ur(){return si()}function o_(){return si()}function si(){return new Cs(t=>t.toString(),(t,e)=>t.isEqual(e))}const UO=new ze(W.comparator),FO=new qe(W.comparator);function ce(...t){let e=FO;for(const n of t)e=e.add(n);return e}const $O=new qe(ge);function a_(){return $O}/**
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
 */class dc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,eo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new dc(ae.min(),s,a_(),En(),ce())}}class eo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new eo(r,n,ce(),ce(),ce())}}/**
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
 */class $o{constructor(e,n,r,s){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=s}}class c_{constructor(e,n){this.targetId=e,this.At=n}}class l_{constructor(e,n,r=ht.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ap{constructor(){this.Rt=0,this.bt=lp(),this.Pt=ht.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=ce(),n=ce(),r=ce();return this.bt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ee()}}),new eo(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=lp()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class BO{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=En(),this.qt=cp(),this.Kt=new qe(ge)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,s)=>{this.Ht(s)&&n(s)})}Yt(e){const n=e.targetId,r=e.At.count,s=this.Xt(n);if(s){const i=s.target;if(Wl(i))if(r===0){const o=new W(i.path);this.jt(n,o,tt.newNoDocument(o,ae.min()))}else Oe(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Wl(a.target)){const c=new W(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,tt.newNoDocument(c,e))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let r=ce();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const s=new dc(e,n,this.Kt,this.Ut,r);return this.Ut=En(),this.qt=cp(),this.Kt=new qe(ge),s}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const s=this.zt(e);this.ee(e,n)?s.kt(n,1):s.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new ap,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new qe(ge),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new ap),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function cp(){return new ze(W.comparator)}function lp(){return new ze(W.comparator)}/**
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
 */const VO=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),jO=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class HO{constructor(e,n){this.databaseId=e,this.gt=n}}function ya(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function u_(t,e){return t.gt?e.toBase64():e.toUint8Array()}function qO(t,e){return ya(t,e.toTimestamp())}function pn(t){return Oe(!!t),ae.fromTimestamp(function(e){const n=Jn(e);return new He(n.seconds,n.nanos)}(t))}function kh(t,e){return function(n){return new xe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function h_(t){const e=xe.fromString(t);return Oe(p_(e)),e}function Ql(t,e){return kh(t.databaseId,e.path)}function Jc(t,e){const n=h_(e);if(n.get(1)!==t.databaseId.projectId)throw new G(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(d_(n))}function Jl(t,e){return kh(t.databaseId,e)}function KO(t){const e=h_(t);return e.length===4?xe.emptyPath():d_(e)}function Xl(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function d_(t){return Oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function up(t,e,n){return{name:Ql(t,e),fields:n.value.mapValue.fields}}function WO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.gt?(Oe(l===void 0||typeof l=="string"),ht.fromBase64String(l||"")):(Oe(l===void 0||l instanceof Uint8Array),ht.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?k.UNKNOWN:r_(c.code);return new G(l,c.message||"")}(o);n=new l_(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Jc(t,r.document.name),i=pn(r.document.updateTime),o=new _t({mapValue:{fields:r.document.fields}}),a=tt.newFoundDocument(s,i,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new $o(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Jc(t,r.document),i=r.readTime?pn(r.readTime):ae.min(),o=tt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new $o([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Jc(t,r.document),i=r.removedTargetIds||[];n=new $o([],i,s,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new xO(s),o=r.targetId;n=new c_(o,i)}}return n}function zO(t,e){let n;if(e instanceof Zi)n={update:up(t,e.key,e.value)};else if(e instanceof Ah)n={delete:Ql(t,e.key)};else if(e instanceof nr)n={update:up(t,e.key,e.data),updateMask:rP(e.fieldMask)};else{if(!(e instanceof NO))return ee();n={verify:Ql(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof ma)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ri)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Oi)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ga)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:qO(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee()}(t,e.precondition)),n}function GO(t,e){return t&&t.length>0?(Oe(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?pn(r.updateTime):pn(s);return i.isEqual(ae.min())&&(i=pn(s)),new OO(i,r.transformResults||[])}(n,e))):[]}function QO(t,e){return{documents:[Jl(t,e.path)]}}function JO(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Jl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Jl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Yf(h.value))return{unaryFilter:{field:Mr(h.field),op:"IS_NAN"}};if(Xf(h.value))return{unaryFilter:{field:Mr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Yf(h.value))return{unaryFilter:{field:Mr(h.field),op:"IS_NOT_NAN"}};if(Xf(h.value))return{unaryFilter:{field:Mr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mr(h.field),op:eP(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Mr(u.field),direction:ZO(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.gt||ac(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function XO(t){let e=KO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Oe(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=f_(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new ni(qr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,ac(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new pa(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new pa(d,h)}(n.endAt)),wO(e,s,o,i,a,"F",c,l)}function YO(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ee()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function f_(t){return t?t.unaryFilter!==void 0?[nP(t)]:t.fieldFilter!==void 0?[tP(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>f_(e)).reduce((e,n)=>e.concat(n)):ee():[]}function ZO(t){return VO[t]}function eP(t){return jO[t]}function Mr(t){return{fieldPath:t.canonicalString()}}function qr(t){return it.fromServerFormat(t.fieldPath)}function tP(t){return bt.create(qr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(t.fieldFilter.op),t.fieldFilter.value)}function nP(t){switch(t.unaryFilter.op){case"IS_NAN":const e=qr(t.unaryFilter.field);return bt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=qr(t.unaryFilter.field);return bt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=qr(t.unaryFilter.field);return bt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=qr(t.unaryFilter.field);return bt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}function rP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function p_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class sP{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&PO(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ri(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ri(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=o_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=t_(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&as(this.mutations,e.mutations,(n,r)=>sp(n,r))&&as(this.baseMutations,e.baseMutations,(n,r)=>sp(n,r))}}class Rh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Oe(e.mutations.length===r.length);let s=UO;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Rh(e,n,r,s)}}/**
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
 */class iP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class oP{constructor(e){this.re=e}}function aP(t){const e=XO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?zl(e,e.limit,"L"):e}/**
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
 */class cP{constructor(){this.Ye=new lP}addToCollectionParentIndex(e,n){return this.Ye.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(Qn.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(Qn.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class lP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new qe(xe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new qe(xe.comparator)).toArray()}}/**
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
 */class us{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new us(0)}static vn(){return new us(-1)}}/**
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
 */class uP{constructor(){this.changes=new Cs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class hP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class dP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.getBaseDocument(e,n,r))).next(s=>(r!==null&&ri(r.mutation,s,xt.empty(),He.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const s=ur();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Hs();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ur();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=En();const o=si(),a=si();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof nr)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),ri(u.mutation,l,u.mutation.getFieldMask(),He.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new hP(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=si();let s=new ze((o,a)=>o-a),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||xt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||ce()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=o_();u.forEach(d=>{if(!i.has(d)){const m=t_(n.get(d),r.get(d));m!==null&&h.set(d,m),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return W.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):TO(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):R.resolve(ur());let a=-1,c=i;return o.next(l=>R.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?R.resolve():this.getBaseDocument(e,u,h).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ce())).next(u=>({batchId:a,changes:i_(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let s=Hs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=Hs();return this.indexManager.getCollectionParents(e,s).next(o=>R.forEach(o,a=>{const c=function(l,u){return new cc(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,tt.newInvalidDocument(l)))});let o=Hs();return s.forEach((a,c)=>{const l=i.get(a);l!==void 0&&ri(l.mutation,c,xt.empty(),He.now()),Ch(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):R.resolve(tt.newInvalidDocument(n))}}/**
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
 */class fP{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return R.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:pn(r.createTime)}),R.resolve()}getNamedQuery(e,n){return R.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:aP(r.bundledQuery),readTime:pn(r.readTime)}}(n)),R.resolve()}}/**
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
 */class pP{constructor(){this.overlays=new ze(W.comparator),this.es=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ur();return R.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ue(e,n,i)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.es.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const s=ur(),i=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return R.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ze((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=ur(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ur(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return R.resolve(a)}ue(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.es.get(s.largestBatchId).delete(r.key);this.es.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new iP(n,r));let i=this.es.get(n);i===void 0&&(i=ce(),this.es.set(n,i)),this.es.set(n,i.add(r.key))}}/**
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
 */class Oh{constructor(){this.ns=new qe(Qe.ss),this.rs=new qe(Qe.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Qe(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Qe(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new W(new xe([])),r=new Qe(n,e),s=new Qe(n,e+1),i=[];return this.rs.forEachInRange([r,s],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new W(new xe([])),r=new Qe(n,e),s=new Qe(n,e+1);let i=ce();return this.rs.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Qe(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Qe{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return W.comparator(e.key,n.key)||ge(e._s,n._s)}static os(e,n){return ge(e._s,n._s)||W.comparator(e.key,n.key)}}/**
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
 */class mP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new qe(Qe.ss)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sP(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.gs=this.gs.add(new Qe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ps(r),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Qe(n,0),s=new Qe(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([r,s],o=>{const a=this.ys(o._s);i.push(a)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe(ge);return n.forEach(s=>{const i=new Qe(s,0),o=new Qe(s,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{r=r.add(a._s)})}),R.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;W.isDocumentKey(i)||(i=i.child(""));const o=new Qe(new W(i),0);let a=new qe(ge);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c._s)),!0)},o),R.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const s=this.ys(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Oe(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return R.forEach(n.mutations,s=>{const i=new Qe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Qe(n,0),s=this.gs.firstAfterOrEqual(r);return R.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class gP{constructor(e){this.Es=e,this.docs=new ze(W.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let r=En();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():tt.newInvalidDocument(s))}),R.resolve(r)}getAllFromCollection(e,n,r){let s=En();const i=new W(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||rO(nO(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,n,r,s){ee()}As(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new yP(this)}getSize(e){return R.resolve(this.size)}}class yP extends uP{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Yn.addEntry(e,s)):this.Yn.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class vP{constructor(e){this.persistence=e,this.Rs=new Cs(n=>Ih(n),Sh),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Oh,this.targetCount=0,this.vs=us.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,s)=>n(s)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),R.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new us(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Dn(n),R.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),R.waitFor(i).next(()=>s)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.Ps.containsKey(n))}}/**
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
 */class _P{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Eh(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new vP(this),this.indexManager=new cP,this.remoteDocumentCache=function(r){return new gP(r)}(r=>this.referenceDelegate.xs(r)),this.It=new oP(n),this.Ns=new fP(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new pP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new mP(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const s=new wP(this.Ss.next());return this.referenceDelegate.ks(),r(s).next(i=>this.referenceDelegate.Os(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ms(e,n){return R.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class wP extends iO{constructor(e){super(),this.currentSequenceNumber=e}}class Ph{constructor(e){this.persistence=e,this.Fs=new Oh,this.$s=null}static Bs(e){return new Ph(e)}get Ls(){if(this.$s)return this.$s;throw ee()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),R.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(s=>this.Ls.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Ls.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Ls,r=>{const s=W.fromPath(r);return this.Us(e,s).next(i=>{i||n.removeEntry(s,ae.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return R.or([()=>R.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class Dh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=s}static Ci(e,n){let r=ce(),s=ce();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Dh(e,n.fromCache,r,s)}}/**
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
 */class bP{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.ki(e,n).next(i=>i||this.Oi(e,n,s,r)).next(i=>i||this.Mi(e,n))}ki(e,n){if(np(n))return R.resolve(null);let r=bn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=zl(n,null,"F"),r=bn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ce(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,zl(n,null,"F")):this.Bi(e,l,n,c)}))})))}Oi(e,n,r,s){return np(n)||s.isEqual(ae.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,r,s)?this.Mi(e,n):(zf()<=pe.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Gl(n)),this.Bi(e,o,n,tO(s,-1)))})}Fi(e,n){let r=new qe(Gv(e));return n.forEach((s,i)=>{Ch(e,i)&&(r=r.add(i))}),r}$i(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Mi(e,n){return zf()<=pe.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Gl(n)),this.Ni.getDocumentsMatchingQuery(e,n,Qn.min())}Bi(e,n,r,s){return this.Ni.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class EP{constructor(e,n,r,s){this.persistence=e,this.Li=n,this.It=s,this.Ui=new ze(ge),this.qi=new Cs(i=>Ih(i),Sh),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dP(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function TP(t,e,n,r){return new EP(t,e,n,r)}async function m_(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ce();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function IP(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=R.resolve();return h.forEach(m=>{d=d.next(()=>l.getEntry(a,m)).next(f=>{const v=c.docVersions.get(m);Oe(v!==null),f.version.compareTo(v)<0&&(u.applyToRemoteDocument(f,c),f.isValidDocument()&&(f.setReadTime(c.commitVersion),l.addEntry(f)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ce();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function g_(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function SP(t,e){const n=re(t),r=e.snapshotVersion;let s=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.Ui;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,h)));let m=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(ht.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,r)),s=s.insert(h,m),function(f,v,b){return f.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-f.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,m,u)&&a.push(n.Cs.updateTargetData(i,m))});let c=En(),l=ce();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(CP(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!r.isEqual(ae.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return R.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ui=s,i))}function CP(t,e,n){let r=ce(),s=ce();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=En();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(ae.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:s}})}function AP(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function kP(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Cs.getTargetData(r,e).next(i=>i?(s=i,R.resolve(s)):n.Cs.allocateTargetId(r).next(o=>(s=new vr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ui.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Yl(t,e,n){const r=re(t),s=r.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Yi(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(s.target)}function hp(t,e,n){const r=re(t);let s=ae.min(),i=ce();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=re(a),h=u.qi.get(l);return h!==void 0?R.resolve(u.Ui.get(h)):u.Cs.getTargetData(c,l)}(r,o,bn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?s:ae.min(),n?i:ce())).next(a=>(RP(r,IO(e),a),{documents:a,Hi:i})))}function RP(t,e,n){let r=t.Ki.get(e)||ae.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ki.set(e,r)}class dp{constructor(){this.activeTargetIds=a_()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class OP{constructor(){this.Lr=new dp,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new dp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class PP{qr(e){}shutdown(){}}/**
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
 */class fp{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const DP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class NP{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class xP extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,s,i){const o=this.ho(e,n);j("RestConnection","Sending: ",o,r);const a={};return this.lo(a,s,i),this.fo(e,o,a,r).then(c=>(j("RestConnection","Received: ",c),c),c=>{throw Hl("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}_o(e,n,r,s,i,o){return this.ao(e,n,r,s,i)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ss,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}ho(e,n){const r=DP[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,s){return new Promise((i,o)=>{const a=new K1;a.setWithCredentials(!0),a.listenOnce(j1.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Qc.NO_ERROR:const l=a.getResponseJson();j("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Qc.TIMEOUT:j("Connection",'RPC "'+e+'" timed out'),o(new G(k.DEADLINE_EXCEEDED,"Request time out"));break;case Qc.HTTP_ERROR:const u=a.getStatus();if(j("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(m){const f=m.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(f)>=0?f:k.UNKNOWN}(h.status);o(new G(d,h.message))}else o(new G(k.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new G(k.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{j("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}wo(e,n,r){const s=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=B1(),o=V1(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new q1({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const c=s.join("");j("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new NP({Hr:f=>{h?j("Connection","Not sending because WebChannel is closed:",f):(u||(j("Connection","Opening WebChannel transport."),l.open(),u=!0),j("Connection","WebChannel sending:",f),l.send(f))},Jr:()=>l.close()}),m=(f,v,b)=>{f.listen(v,y=>{try{b(y)}catch(_){setTimeout(()=>{throw _},0)}})};return m(l,vo.EventType.OPEN,()=>{h||j("Connection","WebChannel transport opened.")}),m(l,vo.EventType.CLOSE,()=>{h||(h=!0,j("Connection","WebChannel transport closed"),d.io())}),m(l,vo.EventType.ERROR,f=>{h||(h=!0,Hl("Connection","WebChannel transport errored:",f),d.io(new G(k.UNAVAILABLE,"The operation could not be completed")))}),m(l,vo.EventType.MESSAGE,f=>{var v;if(!h){const b=f.data[0];Oe(!!b);const y=b,_=y.error||((v=y[0])===null||v===void 0?void 0:v.error);if(_){j("Connection","WebChannel received error:",_);const A=_.status;let N=function(X){const J=$e[X];if(J!==void 0)return r_(J)}(A),H=_.message;N===void 0&&(N=k.INTERNAL,H="Unknown error status: "+A+" with message "+_.message),h=!0,d.io(new G(N,H)),l.close()}else j("Connection","WebChannel received:",b),d.ro(b)}}),m(o,H1.STAT_EVENT,f=>{f.stat===Kf.PROXY?j("Connection","Detected buffering proxy"):f.stat===Kf.NOPROXY&&j("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Xc(){return typeof document<"u"?document:null}/**
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
 */function fc(t){return new HO(t,!0)}class y_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=s,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),s=Math.max(0,n-r);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class v_{constructor(e,n,r,s,i,o,a,c){this.Hs=e,this.vo=r,this.Vo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new y_(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(wn(n.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.So===n&&this.Go(r,s)},r=>{e(()=>{const s=new G(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(s)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(s=>{r(()=>this.Qo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class LP extends v_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.It=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=WO(this.It,e),r=function(s){if(!("targetChange"in s))return ae.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?ae.min():i.readTime?pn(i.readTime):ae.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Xl(this.It),n.addTarget=function(s,i){let o;const a=i.target;return o=Wl(a)?{documents:QO(s,a)}:{query:JO(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=u_(s,i.resumeToken):i.snapshotVersion.compareTo(ae.min())>0&&(o.readTime=ya(s,i.snapshotVersion.toTimestamp())),o}(this.It,e);const r=YO(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Xl(this.It),n.removeTarget=e,this.Bo(n)}}class MP extends v_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=GO(e.writeResults,e.commitTime),r=pn(e.commitTime);return this.listener.Zo(r,n)}return Oe(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Xl(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>zO(this.It,r))};this.Bo(n)}}/**
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
 */class UP extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.It=s,this.nu=!1}su(){if(this.nu)throw new G(k.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.ao(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(k.UNKNOWN,s.toString())})}_o(e,n,r,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(k.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class FP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class $P{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{r.enqueueAndForget(async()=>{Or(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=re(a);c._u.add(4),await to(c),c.gu.set("Unknown"),c._u.delete(4),await pc(c)}(this))})}),this.gu=new FP(r,s)}}async function pc(t){if(Or(t))for(const e of t.wu)await e(!0)}async function to(t){for(const e of t.wu)await e(!1)}function __(t,e){const n=re(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Lh(n)?xh(n):As(n).ko()&&Nh(n,e))}function w_(t,e){const n=re(t),r=As(n);n.du.delete(e),r.ko()&&b_(n,e),n.du.size===0&&(r.ko()?r.Fo():Or(n)&&n.gu.set("Unknown"))}function Nh(t,e){t.yu.Mt(e.targetId),As(t).zo(e)}function b_(t,e){t.yu.Mt(e),As(t).Ho(e)}function xh(t){t.yu=new BO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),As(t).start(),t.gu.uu()}function Lh(t){return Or(t)&&!As(t).No()&&t.du.size>0}function Or(t){return re(t)._u.size===0}function E_(t){t.yu=void 0}async function BP(t){t.du.forEach((e,n)=>{Nh(t,e)})}async function VP(t,e){E_(t),Lh(t)?(t.gu.hu(e),xh(t)):t.gu.set("Unknown")}async function jP(t,e,n){if(t.gu.set("Online"),e instanceof l_&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await va(t,r)}else if(e instanceof $o?t.yu.Gt(e):e instanceof c_?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(ae.min()))try{const r=await g_(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.yu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.du.get(c);l&&s.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.du.get(a);if(!c)return;s.du.set(a,c.withResumeToken(ht.EMPTY_BYTE_STRING,c.snapshotVersion)),b_(s,a);const l=new vr(c.target,a,1,c.sequenceNumber);Nh(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await va(t,r)}}async function va(t,e,n){if(!Yi(e))throw e;t._u.add(1),await to(t),t.gu.set("Offline"),n||(n=()=>g_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await pc(t)})}function T_(t,e){return e().catch(n=>va(t,n,e))}async function mc(t){const e=re(t),n=Xn(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;HP(e);)try{const s=await AP(e.localStore,r);if(s===null){e.fu.length===0&&n.Fo();break}r=s.batchId,qP(e,s)}catch(s){await va(e,s)}I_(e)&&S_(e)}function HP(t){return Or(t)&&t.fu.length<10}function qP(t,e){t.fu.push(e);const n=Xn(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function I_(t){return Or(t)&&!Xn(t).No()&&t.fu.length>0}function S_(t){Xn(t).start()}async function KP(t){Xn(t).eu()}async function WP(t){const e=Xn(t);for(const n of t.fu)e.Xo(n.mutations)}async function zP(t,e,n){const r=t.fu.shift(),s=Rh.from(r,e,n);await T_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await mc(t)}async function GP(t,e){e&&Xn(t).Yo&&await async function(n,r){if(s=r.code,LO(s)&&s!==k.ABORTED){const i=n.fu.shift();Xn(n).Mo(),await T_(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await mc(n)}var s}(t,e),I_(t)&&S_(t)}async function pp(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=Or(n);n._u.add(3),await to(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await pc(n)}async function QP(t,e){const n=re(t);e?(n._u.delete(2),await pc(n)):e||(n._u.add(2),await to(n),n.gu.set("Unknown"))}function As(t){return t.pu||(t.pu=function(e,n,r){const s=re(e);return s.su(),new LP(n,s.connection,s.authCredentials,s.appCheckCredentials,s.It,r)}(t.datastore,t.asyncQueue,{Yr:BP.bind(null,t),Zr:VP.bind(null,t),Wo:jP.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Lh(t)?xh(t):t.gu.set("Unknown")):(await t.pu.stop(),E_(t))})),t.pu}function Xn(t){return t.Iu||(t.Iu=function(e,n,r){const s=re(e);return s.su(),new MP(n,s.connection,s.authCredentials,s.appCheckCredentials,s.It,r)}(t.datastore,t.asyncQueue,{Yr:KP.bind(null,t),Zr:GP.bind(null,t),tu:WP.bind(null,t),Zo:zP.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await mc(t)):(await t.Iu.stop(),t.fu.length>0&&(j("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class Mh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Mh(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Uh(t,e){if(wn("AsyncQueue",`${e}: ${t}`),Yi(t))return new G(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Yr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Hs(),this.sortedSet=new ze(this.comparator)}static emptySet(e){return new Yr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Yr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class mp{constructor(){this.Tu=new ze(W.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):ee():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class hs{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new hs(e,n,Yr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&lc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class JP{constructor(){this.Au=void 0,this.listeners=[]}}class XP{constructor(){this.queries=new Cs(e=>zv(e),lc),this.onlineState="Unknown",this.Ru=new Set}}async function YP(t,e){const n=re(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new JP),s)try{i.Au=await n.onListen(r)}catch(o){const a=Uh(o,`Initialization of query '${Gl(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Fh(n)}async function ZP(t,e){const n=re(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function eD(t,e){const n=re(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(s)&&(r=!0);o.Au=s}}r&&Fh(n)}function tD(t,e,n){const r=re(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Fh(t){t.Ru.forEach(e=>{e.next()})}class nD{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class C_{constructor(e){this.key=e}}class A_{constructor(e){this.key=e}}class rD{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ce(),this.mutatedKeys=ce(),this.Gu=Gv(e),this.Qu=new Yr(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new mp,s=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),m=Ch(this.query,h)?h:null,f=!!d&&this.mutatedKeys.has(d.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let b=!1;d&&m?d.data.isEqual(m.data)?f!==v&&(r.track({type:3,doc:m}),b=!0):this.Hu(d,m)||(r.track({type:2,doc:m}),b=!0,(c&&this.Gu(m,c)>0||l&&this.Gu(m,l)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),b=!0):d&&!m&&(r.track({type:1,doc:d}),b=!0,(c||l)&&(a=!0)),b&&(m?(o=o.add(m),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Qu:o,zu:r,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((l,u)=>function(h,d){const m=f=>{switch(f){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return m(h)-m(d)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new hs(this.query,e.Qu,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new mp,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ce(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new A_(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new C_(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=ce();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return hs.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class sD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class iD{constructor(e){this.key=e,this.nc=!1}}class oD{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Cs(a=>zv(a),lc),this.rc=new Map,this.oc=new Set,this.uc=new ze(W.comparator),this.cc=new Map,this.ac=new Oh,this.hc={},this.lc=new Map,this.fc=us.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function aD(t,e){const n=yD(t);let r,s;const i=n.ic.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ec();else{const o=await kP(n.localStore,bn(e));n.isPrimaryClient&&__(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await cD(n,e,r,a==="current",o.resumeToken)}return s}async function cD(t,e,n,r,s){t._c=(h,d,m)=>async function(f,v,b,y){let _=v.view.Wu(b);_.$i&&(_=await hp(f.localStore,v.query,!1).then(({documents:H})=>v.view.Wu(H,_)));const A=y&&y.targetChanges.get(v.targetId),N=v.view.applyChanges(_,f.isPrimaryClient,A);return yp(f,v.targetId,N.Xu),N.snapshot}(t,h,d,m);const i=await hp(t.localStore,e,!0),o=new rD(e,i.Hi),a=o.Wu(i.documents),c=eo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);yp(t,n,l.Xu);const u=new sD(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function lD(t,e){const n=re(t),r=n.ic.get(e),s=n.rc.get(r.targetId);if(s.length>1)return n.rc.set(r.targetId,s.filter(i=>!lc(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Yl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),w_(n.remoteStore,r.targetId),Zl(n,r.targetId)}).catch(Xi)):(Zl(n,r.targetId),await Yl(n.localStore,r.targetId,!0))}async function uD(t,e,n){const r=vD(t);try{const s=await function(i,o){const a=re(i),c=He.now(),l=o.reduce((d,m)=>d.add(m.key),ce());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=En(),f=ce();return a.Gi.getEntries(d,l).next(v=>{m=v,m.forEach((b,y)=>{y.isValidDocument()||(f=f.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(v=>{u=v;const b=[];for(const y of o){const _=DO(y,u.get(y.key).overlayedDocument);_!=null&&b.push(new nr(y.key,_,qv(_.value.mapValue),Ht.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,b,o)}).next(v=>{h=v;const b=v.applyToLocalDocumentSet(u,f);return a.documentOverlayCache.saveOverlays(d,v.batchId,b)})}).then(()=>({batchId:h.batchId,changes:i_(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new ze(ge)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(r,s.batchId,n),await no(r,s.changes),await mc(r.remoteStore)}catch(s){const i=Uh(s,"Failed to persist write");n.reject(i)}}async function k_(t,e){const n=re(t);try{const r=await SP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.cc.get(i);o&&(Oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.nc=!0:s.modifiedDocuments.size>0?Oe(o.nc):s.removedDocuments.size>0&&(Oe(o.nc),o.nc=!1))}),await no(n,r,e)}catch(r){await Xi(r)}}function gp(t,e,n){const r=re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=re(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&Fh(a)}(r.eventManager,e),s.length&&r.sc.Wo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hD(t,e,n){const r=re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.cc.get(e),i=s&&s.key;if(i){let o=new ze(W.comparator);o=o.insert(i,tt.newNoDocument(i,ae.min()));const a=ce().add(i),c=new dc(ae.min(),new Map,new qe(ge),o,a);await k_(r,c),r.uc=r.uc.remove(i),r.cc.delete(e),$h(r)}else await Yl(r.localStore,e,!1).then(()=>Zl(r,e,n)).catch(Xi)}async function dD(t,e){const n=re(t),r=e.batch.batchId;try{const s=await IP(n.localStore,e);O_(n,r,null),R_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await no(n,s)}catch(s){await Xi(s)}}async function fD(t,e,n){const r=re(t);try{const s=await function(i,o){const a=re(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Oe(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(r.localStore,e);O_(r,e,n),R_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await no(r,s)}catch(s){await Xi(s)}}function R_(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function O_(t,e,n){const r=re(t);let s=r.hc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.hc[r.currentUser.toKey()]=s}}function Zl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||P_(t,r)})}function P_(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(w_(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),$h(t))}function yp(t,e,n){for(const r of n)r instanceof C_?(t.ac.addReference(r.key,e),pD(t,r)):r instanceof A_?(j("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||P_(t,r.key)):ee()}function pD(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(j("SyncEngine","New document in limbo: "+n),t.oc.add(r),$h(t))}function $h(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new W(xe.fromString(e)),r=t.fc.next();t.cc.set(r,new iD(n)),t.uc=t.uc.insert(n,r),__(t.remoteStore,new vr(bn(Wv(n.path)),r,2,Eh.at))}}async function no(t,e,n){const r=re(t),s=[],i=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,c)=>{o.push(r._c(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Dh.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.sc.Wo(s),await async function(a,c){const l=re(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>R.forEach(c,h=>R.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>R.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Yi(u))throw u;j("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ui.get(h),m=d.snapshotVersion,f=d.withLastLimboFreeSnapshotVersion(m);l.Ui=l.Ui.insert(h,f)}}}(r.localStore,i))}async function mD(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await m_(n.localStore,e);n.currentUser=e,function(s,i){s.lc.forEach(o=>{o.forEach(a=>{a.reject(new G(k.CANCELLED,i))})}),s.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await no(n,r.ji)}}function gD(t,e){const n=re(t),r=n.cc.get(e);if(r&&r.nc)return ce().add(r.key);{let s=ce();const i=n.rc.get(e);if(!i)return s;for(const o of i){const a=n.ic.get(o);s=s.unionWith(a.view.ju)}return s}}function yD(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=k_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hD.bind(null,e),e.sc.Wo=eD.bind(null,e.eventManager),e.sc.wc=tD.bind(null,e.eventManager),e}function vD(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fD.bind(null,e),e}class _D{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=fc(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return TP(this.persistence,new bP,e.initialUser,this.It)}yc(e){return new _P(Ph.Bs,this.It)}gc(e){return new OP}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mD.bind(null,this.syncEngine),await QP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new XP}createDatastore(e){const n=fc(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new xP(s));var s;return function(i,o,a,c){return new UP(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>gp(this.syncEngine,a,0),o=fp.C()?new fp:new PP,new $P(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new oD(r,s,i,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=re(e);j("RemoteStore","RemoteStore shutting down."),n._u.add(5),await to(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function D_(t,e,n){if(!n)throw new G(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bD(t,e,n,r){if(e===!0&&r===!0)throw new G(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vp(t){if(!W.isDocumentKey(t))throw new G(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function _p(t){if(W.isDocumentKey(t))throw new G(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Bh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function Cr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bh(t);throw new G(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const wp=new Map;class bp{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new G(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,bD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class gc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new G(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new G(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bp(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new W1;switch(n.type){case"gapi":const r=n.client;return new J1(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new G(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=wp.get(e);n&&(j("ComponentProvider","Removing Datastore"),wp.delete(e),n.terminate())}(this),Promise.resolve()}}function ED(t,e,n,r={}){var s;const i=(t=Cr(t,gc))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Hl("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=st.MOCK_USER;else{o=Vm(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new G(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new st(c)}t._authCredentials=new z1(new $v(o,a))}}/**
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
 */class Lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lt(this.firestore,e,this._key)}}class yc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new yc(this.firestore,e,this._query)}}class Kn extends yc{constructor(e,n,r){super(e,n,Wv(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lt(this.firestore,null,new W(e))}withConverter(e){return new Kn(this.firestore,e,this._path)}}function N_(t,e,...n){if(t=Me(t),D_("collection","path",e),t instanceof gc){const r=xe.fromString(e,...n);return _p(r),new Kn(t,null,r)}{if(!(t instanceof Lt||t instanceof Kn))throw new G(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return _p(r),new Kn(t.firestore,null,r)}}function qs(t,e,...n){if(t=Me(t),arguments.length===1&&(e=Bv.R()),D_("doc","path",e),t instanceof gc){const r=xe.fromString(e,...n);return vp(r),new Lt(t,null,new W(r))}{if(!(t instanceof Lt||t instanceof Kn))throw new G(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return vp(r),new Lt(t.firestore,t instanceof Kn?t.converter:null,new W(r))}}/**
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
 */class TD{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):wn("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class ID{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=st.UNAUTHENTICATED,this.clientId=Bv.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{j("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(j("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new G(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Uh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function SD(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await m_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function CD(t,e){t.asyncQueue.verifyOperationInProgress();const n=await AD(t);j("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>pp(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>pp(e.remoteStore,i)),t.onlineComponents=e}async function AD(t){return t.offlineComponents||(j("FirestoreClient","Using default OfflineComponentProvider"),await SD(t,new _D)),t.offlineComponents}async function x_(t){return t.onlineComponents||(j("FirestoreClient","Using default OnlineComponentProvider"),await CD(t,new wD)),t.onlineComponents}function kD(t){return x_(t).then(e=>e.syncEngine)}async function RD(t){const e=await x_(t),n=e.eventManager;return n.onListen=aD.bind(null,e.syncEngine),n.onUnlisten=lD.bind(null,e.syncEngine),n}function OD(t,e,n={}){const r=new qn;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new TD({next:h=>{i.enqueueAndForget(()=>ZP(s,u)),h.fromCache&&a.source==="server"?c.reject(new G(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new nD(o,l,{includeMetadataChanges:!0,Nu:!0});return YP(s,u)}(await RD(t),t.asyncQueue,e,n,r)),r.promise}class PD{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new y_(this,"async_queue_retry"),this.Wc=()=>{const n=Xc();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Xc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Xc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new qn;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Yi(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw wn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const s=Mh.createAndSchedule(this,e,n,r,i=>this.Yc(i));return this.qc.push(s),s}zc(){this.Kc&&ee()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class ro extends gc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new PD,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||M_(this),this._firestoreClient.terminate()}}function DD(t,e){const n=typeof t=="object"?t:Cu(),r=typeof t=="string"?t:e||"(default)",s=xa(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=$m("firestore");i&&ED(s,...i)}return s}function L_(t){return t._firestoreClient||M_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function M_(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new aO(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ID(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class ds{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ds(ht.fromBase64String(e))}catch(n){throw new G(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ds(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class vc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Vh{constructor(e){this._methodName=e}}/**
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
 */class jh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
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
 */const ND=/^__.*__$/;class xD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new nr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zi(e,this.data,n,this.fieldTransforms)}}class U_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new nr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function F_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class Hh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=s,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Hh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ia({path:r,oa:!1});return s.ua(e),s}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ia({path:r,oa:!1});return s.na(),s}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return _a(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(F_(this.sa)&&ND.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class LD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||fc(e)}da(e,n,r,s=!1){return new Hh({sa:e,methodName:n,fa:r,path:it.emptyPath(),oa:!1,la:s},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function $_(t){const e=t._freezeSettings(),n=fc(t._databaseId);return new LD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function MD(t,e,n,r,s,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,s);qh("Data must be an object, but it was:",o,r);const a=B_(r,o);let c,l;if(i.merge)c=new xt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=eu(e,h,n);if(!o.contains(d))throw new G(k.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);j_(u,d)||u.push(d)}c=new xt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new xD(new _t(a),c,l)}class _c extends Vh{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _c}}function UD(t,e,n,r){const s=t.da(1,e,n);qh("Data must be an object, but it was:",s,r);const i=[],o=_t.empty();Rr(r,(c,l)=>{const u=Kh(e,c,n);l=Me(l);const h=s.ca(u);if(l instanceof _c)i.push(u);else{const d=wc(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new xt(i);return new U_(o,a,s.fieldTransforms)}function FD(t,e,n,r,s,i){const o=t.da(1,e,n),a=[eu(e,r,n)],c=[s];if(i.length%2!=0)throw new G(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(eu(e,i[d])),c.push(i[d+1]);const l=[],u=_t.empty();for(let d=a.length-1;d>=0;--d)if(!j_(l,a[d])){const m=a[d];let f=c[d];f=Me(f);const v=o.ca(m);if(f instanceof _c)l.push(m);else{const b=wc(f,v);b!=null&&(l.push(m),u.set(m,b))}}const h=new xt(l);return new U_(u,h,o.fieldTransforms)}function wc(t,e){if(V_(t=Me(t)))return qh("Unsupported field value:",e,t),B_(t,e);if(t instanceof Vh)return function(n,r){if(!F_(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=wc(o,r.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Me(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return CO(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=He.fromDate(n);return{timestampValue:ya(r.It,s)}}if(n instanceof He){const s=new He(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ya(r.It,s)}}if(n instanceof jh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ds)return{bytesValue:u_(r.It,n._byteString)};if(n instanceof Lt){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:kh(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Bh(n)}`)}(t,e)}function B_(t,e){const n={};return Vv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rr(t,(r,s)=>{const i=wc(s,e.ra(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function V_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof jh||t instanceof ds||t instanceof Lt||t instanceof Vh)}function qh(t,e,n){if(!V_(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Bh(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function eu(t,e,n){if((e=Me(e))instanceof vc)return e._internalPath;if(typeof e=="string")return Kh(t,e);throw _a("Field path arguments must be of type string or ",t,!1,void 0,n)}const $D=new RegExp("[~\\*/\\[\\]]");function Kh(t,e,n){if(e.search($D)>=0)throw _a(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vc(...e.split("."))._internalPath}catch{throw _a(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function _a(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new G(k.INVALID_ARGUMENT,a+t+c)}function j_(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class H_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(q_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class BD extends H_{data(){return super.data()}}function q_(t,e){return typeof e=="string"?Kh(t,e):e instanceof vc?e._internalPath:e._delegate._internalPath}/**
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
 */function VD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class jD{convertValue(e,n="none"){switch(Sr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(cs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ee()}}convertObject(e,n){const r={};return Rr(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new jh(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Hv(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Si(e));default:return null}}convertTimestamp(e){const n=Jn(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=xe.fromString(e);Oe(p_(r));const s=new Ci(r.get(1),r.get(3)),i=new W(r.popFirst(5));return s.isEqual(n)||wn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function HD(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class bo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qD extends H_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(q_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Bo extends qD{data(e={}){return super.data(e)}}class KD{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new bo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Bo(this._firestore,this._userDataWriter,r.key,r,new bo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new Bo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new bo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Bo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new bo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:WD(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function WD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}class zD extends jD{constructor(e){super(),this.firestore=e}convertBytes(e){return new ds(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Lt(this.firestore,null,n)}}function GD(t){t=Cr(t,yc);const e=Cr(t.firestore,ro),n=L_(e),r=new zD(e);return VD(t._query),OD(n,t._query).then(s=>new KD(e,r,t,s))}function Ep(t,e,n,...r){t=Cr(t,Lt);const s=Cr(t.firestore,ro),i=$_(s);let o;return o=typeof(e=Me(e))=="string"||e instanceof vc?FD(i,"updateDoc",t._key,e,n,r):UD(i,"updateDoc",t._key,e),Wh(s,[o.toMutation(t._key,Ht.exists(!0))])}function Tp(t){return Wh(Cr(t.firestore,ro),[new Ah(t._key,Ht.none())])}function QD(t,e){const n=Cr(t.firestore,ro),r=qs(t),s=HD(t.converter,e);return Wh(n,[MD($_(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ht.exists(!1))]).then(()=>r)}function Wh(t,e){return function(n,r){const s=new qn;return n.asyncQueue.enqueueAndForget(async()=>uD(await kD(n),r,s)),s.promise}(L_(t),e)}(function(t,e=!0){(function(n){Ss=n})(gs),wr(new zn("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new ro(new G1(n.getProvider("auth-internal")),new Y1(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new G(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ci(a.options.projectId,c)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),en(Wf,"3.7.2",t),en(Wf,"3.7.2","esm2017")})();const JD={},XD={class:"card"},YD={class:"title"},ZD={class:"description"};function eN(t,e,n,r,s,i){return me(),Re("div",XD,[D("div",YD,[cd(t.$slots,"title",{},void 0,!0)]),D("div",ZD,[cd(t.$slots,"description",{},void 0,!0)])])}const tN=Zn(JD,[["render",eN],["__scopeId","data-v-300a4a8b"]]);const nN={components:{Post:tN},setup(){const t=fe(!0),e=ts(ii);fg(e,i=>{i?t.value=!0:t.value=!1});const n=ws();om(()=>{t.value||n.push("/login")});const r=Fu(),s=i=>{r.commit("setHashtag",i.target.value)};return Di(async()=>{(await GD(N_(Vr,"Blogs"))).forEach(o=>{const a=o.data();r.commit("updateState",{id:o.id,date:a.date,title:a.title,content:a.content,video:a.video,userId:a.userId})})}),{filteredPosts:r.getters.filtredPosts,setHashtag:s,loggedIn:t,currentHashtag:vt(()=>r.state.currentHashtag)}}},rN=D("button",null,"Create",-1),sN=D("h1",null,"Blogs",-1),iN={class:"bloglist"},oN=D("button",null,"View",-1);function aN(t,e,n,r,s,i){const o=gn("router-link"),a=gn("post");return me(),Re(Le,null,[Ee(o,{to:t.$store.state.currentEdit?"/edit-video":"/new-blog"},{default:Ct(()=>[rN]),_:1},8,["to"]),sN,D("div",iN,[(me(!0),Re(Le,null,Pa(r.filteredPosts,c=>(me(),di(a,null,{title:Ct(()=>[Ge(wt(c.title),1)]),description:Ct(()=>[Ee(o,{to:`/view-post/${c.id?c.id:""}`},{default:Ct(()=>[oN]),_:2},1032,["to"])]),_:2},1024))),256))])],64)}const cN=Zn(nN,[["render",aN]]),lN={emits:["onloadedmetadata"],components:{},data(){return{start:0,end:0,duration:0,error:""}},computed:{video(){const t=this.$store.state.currentEdit,e=this.$store.state.posts.filter(n=>n.id&&t&&n.id==t);return e[0]?{videos:e[0].video?e[0].video.videos:[]}:{videos:[]}}},methods:{logDuration(){this.duration=this.$refs.videoPlayer.duration,this.end=this.duration},editPost(){this.start>this.end?this.error="Check time and duration!"+this.duration:this.end>this.duration?this.error="Check time and duration!"+this.duration:(this.$store.commit("editDone",[this.start,this.end]),this.$router.push("/feed"))}}},uN=D("h1",null,"Publish blog confirmation",-1),hN=["src"],dN=Ge("Start time: "),fN=Ge("End time: ");function pN(t,e,n,r,s,i){return me(),Re("form",null,[uN,Ve(D("video",{src:i.video.videos,onLoadedmetadata:e[0]||(e[0]=(...o)=>i.logDuration&&i.logDuration(...o)),controls:"",ref:"videoPlayer"},null,40,hN),[[Fn,i.video.videos.length]]),Ve(D("h2",null,"No video, please confirm posting!",512),[[Fn,!i.video.videos.length]]),Ve(D("p",null,"Full lenght: "+wt(s.duration),513),[[Fn,i.video.videos.length]]),Ve(D("span",null,[D("p",null,[dN,Ve(D("input",{type:"text",name:"start","onUpdate:modelValue":e[1]||(e[1]=o=>s.start=o)},null,512),[[Dt,s.start]])]),D("p",null,[fN,Ve(D("input",{type:"text",name:"end","onUpdate:modelValue":e[2]||(e[2]=o=>s.end=o)},null,512),[[Dt,s.end]])])],512),[[Fn,i.video.videos.length]]),Ge(" "+wt(s.error)+" ",1),D("button",{onClick:e[3]||(e[3]=pl((...o)=>i.editPost&&i.editPost(...o),["prevent"]))},"Confirm")])}const mN=Zn(lN,[["render",pN]]);const gN={components:{},setup(){const t=Fu(),e=ws(),n=Ug(),r=fe("Delete"),s=fe("Title"),i=fe(""),o=fe(null),a=fe(0),c=fe("content"),l=Yn({videos:[]}),u=f=>{const v=t.state.posts.filter(b=>b.id&&f&&b.id==f);v[0]&&(s.value=v[0].title,i.value=v[0].date?v[0].date:"",c.value=v[0].content,l.videos=v[0].video?v[0].video.videos:[],a.value=v[0].time?v[0].time[0]:0)},h=()=>{r.value=="Confirm"?(t.commit("deletePost",n.params.id),e.push("/feed")):r.value="Confirm"},d=()=>{e.push({path:"/new-blog",query:{id:n.params.id,title:s.value,content:c.value,video:l.videos}})},m=()=>{o.currentTime=a.value};return Di(()=>{u(n.params.id)}),{title:s,date:i,content:c,video:l,Delete:r,getPost:u,updatePost:d,deletePost:h,logDuration:m}}},yN={class:"content"},vN=["src"];function _N(t,e,n,r,s,i){return me(),Re(Le,null,[D("h2",null,wt(r.title),1),D("p",null,wt(r.date),1),D("p",yN,wt(r.content),1),(me(!0),Re(Le,null,Pa(r.video.videos,o=>(me(),Re("div",null,[D("video",{onLoadedmetadata:e[0]||(e[0]=(...a)=>r.logDuration&&r.logDuration(...a)),controls:"",ref_for:!0,ref:"videoPlayer"},[D("source",{src:o,type:"video/mp4"},null,8,vN)],544)]))),256)),D("button",{onClick:e[1]||(e[1]=(...o)=>r.deletePost&&r.deletePost(...o)),style:ba(`color: ${r.Delete=="Confirm"?"red":"black"}`)},wt(r.Delete),5),D("button",{onClick:e[2]||(e[2]=(...o)=>r.updatePost&&r.updatePost(...o))},"Edit")],64)}const Ip=Zn(gN,[["render",_N]]);const wN={props:{id:{type:Number,required:!0}},data(){return{post:{}}},watch:{$route:{handler:(t,e)=>{document.title=t.meta.title||"Blog AB"},immediate:!0}},async created(){try{const t="1569d8f789d47354c5de458a9cf5378762efd38782dc89da6b3b73bcfd7436adef984256b00b7c9d4b0202e0121d9afb1973e3a3cf33f9d292be5b6264b1ba75ce4af18a9da312cd74e9904fbed013e58c7d03b6b85d11ffb44751b0176bdbc640d2edb7d30a0a48b3b5f71b7e670c0491a88a35d72db8be2ecea73e8d704150",e=await py.get(`https://strapi-cp-blog.onrender.com/api/articles/${this.id}`,{headers:{Authorization:`Bearer ${t}`}});this.post=e.data.data.attributes}catch(t){console.error(t)}}};function bN(t,e,n,r,s,i){return me(),Re("div",null,[D("h1",null,wt(s.post.Title),1),D("p",null,wt(s.post.Description),1)])}const EN=Zn(wN,[["render",bN],["__scopeId","data-v-7f95836c"]]),Qt="",TN=[{path:`${Qt}/`,component:Af},{path:`${Qt}/feed`,component:cN,name:"feed"},{path:`${Qt}/home/`,component:Af},{path:`${Qt}/login/`,component:HR},{path:`${Qt}/register/`,component:FR},{path:`${Qt}/new-blog`,component:jC},{path:`${Qt}/edit-video`,component:mN,name:"edit"},{path:`${Qt}/view-post/`,component:Ip},{path:`${Qt}/view-post/:id`,component:Ip,name:"viewpost"},{path:`${Qt}/:slug`,name:"blogpost",component:EN,props:t=>({id:parseInt(t.params.slug.split("-")[0])}),beforeEnter:(t,e,n)=>{if(t.meta.title=t.params.slug.charAt(2).toUpperCase()+t.params.slug.slice(3).replace(/-+/g," "),t.params.slug.includes(" ")){const r=t.params.slug.replace(" ","-");n({name:t.name,params:{slug:r}})}else n()}}],Eo=RC({state(){return{posts:[],currentEdit:null}},getters:{filtredPosts(t){return t.currentEdit?t.posts.filter(e=>e.id!=t.currentEdit):t.posts}},mutations:{async addPost(t,e){if(e.id){const a=t.posts.findIndex(c=>c.id==e.id);a>-1&&(t.posts.splice(a,1),Tp(qs(Vr,"Blogs",e.id)))}const n=fe(""),r=My(ii),s=ts(ii);try{const a=await QD(N_(Vr,"Blogs"),{date:e.date,userId:s.currentUser.uid,title:e.title,content:e.content});t.posts.push({id:a.id,date:e.date,title:e.title,content:e.content,video:e.video}),n.value=a.id,e.id||(t.currentEdit=a.id)}catch(a){console.error("Error adding document: ",a)}let i=1;const o={videos:[]};e.video.videos&&e.video.videos.forEach(a=>{const c=Ly(r,`videos/${e.title+(i++).toString()}.mp4`);Ny(c,a,"data_url").then(l=>{xy(l.ref).then(u=>{o.videos.push(u),Ep(qs(Vr,"Blogs",n.value),{video:{videos:o.videos}})})})})},deletePost(t,e){const n=t.posts.findIndex(r=>r.id==e);n>-1&&(t.posts.splice(n,1),Tp(qs(Vr,"Blogs",e)))},setEdit(t,e){t.currentEdit=e},updateState(t,e){const n=ts(ii),r=t.posts.findIndex(s=>s.id==e.id);r>-1&&t.posts.splice(r,1),e.userId==n.currentUser.uid&&t.posts.push({id:e.id,date:e.date,title:e.title,content:e.content,video:e.video})},editDone(t,e){const n=t.posts.findIndex(r=>r.id==t.currentEdit);n>-1&&(t.posts[n].time=e,Ep(qs(Vr,"Blogs",t.currentEdit),{time:e})),t.currentEdit=null}}});var IN="firebase",SN="9.13.0";/**
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
 */en(IN,SN,"app");function tu(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?tu(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const CN={run:t=>t()},AN=()=>CN,K_=typeof console.createTask<"u"?console.createTask:AN;function kN(t,e){const n=e.shift(),r=K_(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function RN(t,e){const n=e.shift(),r=K_(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function Yc(t,e){for(const n of[...t])n(e)}class ON{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=tu(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=tu(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(kN,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(RN,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&Yc(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&Yc(this._after,s)}):(this._after&&s&&Yc(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function PN(){return new ON}function DN(t){return Array.isArray(t)?t:[t]}const W_=["title","script","style","noscript"],NN=["base","meta","link","style","script","noscript"],xN=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],LN=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],MN=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function z_(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function nu(t){return z_(`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,n])=>`${e}:${String(n)}`).join(",")}`)}function UN(t){let e=9;for(const n of t)for(let r=0;r<n.length;)e=Math.imul(e^n.charCodeAt(r++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function G_(t,e){const{props:n,tag:r}=t;if(LN.includes(r))return r;if(r==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const s=["id"];r==="meta"&&s.push("name","property","http-equiv");for(const i of s)if(typeof n[i]<"u"){const o=String(n[i]);return e&&!e(o)?!1:`${r}:${i}:${o}`}return!1}const Sp=(t,e)=>t==null?e||null:typeof t=="function"?t(e):t,To=(t,e=!1,n)=>{const{tag:r,$el:s}=t;!s||(Object.entries(r.props).forEach(([i,o])=>{o=String(o);const a=`attr:${i}`;if(i==="class"){if(!o)return;for(const c of o.split(" ")){const l=`${a}:${c}`;n&&n(t,l,()=>s.classList.remove(c)),s.classList.contains(c)||s.classList.add(c)}return}n&&!i.startsWith("data-h-")&&n(t,a,()=>s.removeAttribute(i)),(e||s.getAttribute(i)!==o)&&s.setAttribute(i,o)}),W_.includes(r.tag)&&(r.textContent&&r.textContent!==s.textContent?s.textContent=r.textContent:r.innerHTML&&r.innerHTML!==s.innerHTML&&(s.innerHTML=r.innerHTML)))};let Ms=!1;async function Q_(t,e={}){var d,m;const n={shouldRender:!0};if(await t.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const r=e.document||t.resolvedOptions.document||window.document,s=(await t.resolveTags()).map(a);if(t.resolvedOptions.experimentalHashHydration&&(Ms=Ms||t._hash||!1,Ms)){const f=UN(s.map(v=>v.tag._h));if(Ms===f)return;Ms=f}const i=t._popSideEffectQueue();t.headEntries().map(f=>f._sde).forEach(f=>{Object.entries(f).forEach(([v,b])=>{i[v]=b})});const o=(f,v,b)=>{v=`${f.renderId}:${v}`,f.entry&&(f.entry._sde[v]=b),delete i[v]};function a(f){const v=t.headEntries().find(y=>y._i===f._e),b={renderId:!f.key&&f._d?f._d:nu(f),$el:null,shouldRender:!0,tag:f,entry:v,markSideEffect:(y,_)=>o(b,y,_)};return b}const c=[],l={body:[],head:[]},u=f=>{t._elMap[f.renderId]=f.$el,c.push(f),o(f,"el",()=>{var v;(v=f.$el)==null||v.remove(),delete t._elMap[f.renderId]})};for(const f of s){if(await t.hooks.callHook("dom:beforeRenderTag",f),!f.shouldRender)continue;const{tag:v}=f;if(v.tag==="title"){r.title=v.textContent||"",c.push(f);continue}if(v.tag==="htmlAttrs"||v.tag==="bodyAttrs"){f.$el=r[v.tag==="htmlAttrs"?"documentElement":"body"],To(f,!1,o),c.push(f);continue}if(f.$el=t._elMap[f.renderId],!f.$el&&v.key&&(f.$el=r.querySelector(`${(d=v.tagPosition)!=null&&d.startsWith("body")?"body":"head"} > ${v.tag}[data-h-${v._h}]`)),f.$el){f.tag._d&&To(f),u(f);continue}l[(m=v.tagPosition)!=null&&m.startsWith("body")?"body":"head"].push(f)}const h={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(l).forEach(([f,v])=>{var y;if(!v.length)return;const b=(y=r==null?void 0:r[f])==null?void 0:y.children;if(!!b){for(const _ of[...b].reverse()){const A=_.tagName.toLowerCase();if(!NN.includes(A))continue;const N=_.getAttributeNames().reduce((U,ie)=>({...U,[ie]:_.getAttribute(ie)}),{}),H={tag:A,props:N};_.innerHTML&&(H.innerHTML=_.innerHTML);const X=nu(H);let J=v.findIndex(U=>(U==null?void 0:U.renderId)===X);if(J===-1){const U=G_(H);J=v.findIndex(ie=>(ie==null?void 0:ie.tag._d)&&ie.tag._d===U)}if(J!==-1){const U=v[J];U.$el=_,To(U),u(U),delete v[J]}}v.forEach(_=>{const A=_.tag.tagPosition||"head";h[A]=h[A]||r.createDocumentFragment(),_.$el||(_.$el=r.createElement(_.tag.tag),To(_,!0)),h[A].appendChild(_.$el),u(_)})}}),h.head&&r.head.appendChild(h.head),h.bodyOpen&&r.body.insertBefore(h.bodyOpen,r.body.firstChild),h.bodyClose&&r.body.appendChild(h.bodyClose);for(const f of c)await t.hooks.callHook("dom:renderTag",f);Object.values(i).forEach(f=>f())}let Zc=null;async function J_(t,e={}){function n(){return Zc=null,Q_(t,e)}const r=e.delayFn||(s=>setTimeout(s,10));return Zc=Zc||new Promise(s=>r(()=>s(n())))}const FN=t=>({hooks:{"entries:updated":function(e){if(typeof(t==null?void 0:t.document)>"u"&&typeof window>"u")return;let n=t==null?void 0:t.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),J_(e,{document:(t==null?void 0:t.document)||window.document,delayFn:n})}}});function $N(t){var e;return((e=t==null?void 0:t.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:e.getAttribute("content"))||!1}const Cp={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Ap(t){if(typeof t.tagPriority=="number")return t.tagPriority;if(t.tag==="meta"){if(t.props.charset)return-2;if(t.props["http-equiv"]==="content-security-policy")return 0}const e=t.tagPriority||t.tag;return e in Cp?Cp[e]:10}const BN=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function VN(){return{hooks:{"tags:resolve":t=>{const e=n=>{var r;return(r=t.tags.find(s=>s._d===n))==null?void 0:r._p};for(const{prefix:n,offset:r}of BN)for(const s of t.tags.filter(i=>typeof i.tagPriority=="string"&&i.tagPriority.startsWith(n))){const i=e(s.tagPriority.replace(n,""));typeof i<"u"&&(s._p=i+r)}t.tags.sort((n,r)=>n._p-r._p).sort((n,r)=>Ap(n)-Ap(r))}}}}const jN=()=>({hooks:{"tags:resolve":t=>{const{tags:e}=t;let n=e.findIndex(s=>s.tag==="titleTemplate");const r=e.findIndex(s=>s.tag==="title");if(r!==-1&&n!==-1){const s=Sp(e[n].textContent,e[r].textContent);s!==null?e[r].textContent=s||e[r].textContent:delete e[r]}else if(n!==-1){const s=Sp(e[n].textContent);s!==null&&(e[n].textContent=s,e[n].tag="title",n=-1)}n!==-1&&delete e[n],t.tags=e.filter(Boolean)}}}),HN=()=>({hooks:{"tag:normalise":function({tag:t}){typeof t.props.body<"u"&&(t.tagPosition="bodyClose",delete t.props.body)}}}),qN=["link","style","script","noscript"],KN=()=>({hooks:{"tag:normalise":({tag:t,resolvedOptions:e})=>{e.experimentalHashHydration===!0&&(t._h=nu(t)),t.key&&qN.includes(t.tag)&&(t._h=z_(t.key),t.props[`data-h-${t._h}`]="")}}}),kp=["script","link","bodyAttrs"],WN=()=>{const t=(e,n)=>{const r={},s={};Object.entries(n.props).forEach(([o,a])=>{o.startsWith("on")&&typeof a=="function"?s[o]=a:r[o]=a});let i;return e==="dom"&&n.tag==="script"&&typeof r.src=="string"&&typeof s.onload<"u"&&(i=r.src,delete r.src),{props:r,eventHandlers:s,delayedSrc:i}};return{hooks:{"ssr:render":function(e){e.tags=e.tags.map(n=>(!kp.includes(n.tag)||!Object.entries(n.props).find(([r,s])=>r.startsWith("on")&&typeof s=="function")||(n.props=t("ssr",n).props),n))},"dom:beforeRenderTag":function(e){if(!kp.includes(e.tag.tag)||!Object.entries(e.tag.props).find(([i,o])=>i.startsWith("on")&&typeof o=="function"))return;const{props:n,eventHandlers:r,delayedSrc:s}=t("dom",e.tag);!Object.keys(r).length||(e.tag.props=n,e.tag._eventHandlers=r,e.tag._delayedSrc=s)},"dom:renderTag":function(e){const n=e.$el;if(!e.tag._eventHandlers||!n)return;const r=e.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(e.tag._eventHandlers).forEach(([s,i])=>{const o=`${e.tag._d||e.tag._p}:${s}`,a=s.slice(2).toLowerCase(),c=`data-h-${a}`;if(e.markSideEffect(o,()=>{}),n.hasAttribute(c))return;const l=i;n.setAttribute(c,""),r.addEventListener(a,l),e.entry&&(e.entry._sde[o]=()=>{r.removeEventListener(a,l),n.removeAttribute(c)})}),e.tag._delayedSrc&&n.setAttribute("src",e.tag._delayedSrc)}}}},zN=["templateParams","htmlAttrs","bodyAttrs"],GN=()=>({hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(n=>{t.props[n]&&(t.key=t.props[n],delete t.props[n])});const e=t.key?`${t.tag}:${t.key}`:G_(t);e&&(t._d=e)},"tags:resolve":function(t){const e={};t.tags.forEach(r=>{const s=r._d||r._p,i=e[s];if(i){let o=r==null?void 0:r.tagDuplicateStrategy;if(!o&&zN.includes(r.tag)&&(o="merge"),o==="merge"){const c=i.props;["class","style"].forEach(l=>{r.props[l]&&c[l]&&(l==="style"&&!c[l].endsWith(";")&&(c[l]+=";"),r.props[l]=`${c[l]} ${r.props[l]}`)}),e[s].props={...c,...r.props};return}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);return}const a=Object.keys(r.props).length;if((a===0||a===1&&typeof r.props["data-h-key"]<"u")&&!r.innerHTML&&!r.textContent){delete e[s];return}}e[s]=r});const n=[];Object.values(e).forEach(r=>{const s=r._duped;delete r._duped,n.push(r),s&&n.push(...s)}),t.tags=n}}});function Io(t,e){function n(i){if(["s","pageTitle"].includes(i))return e.pageTitle;let o;return i.includes(".")?o=i.split(".").reduce((a,c)=>a&&a[c]||void 0,e):o=e[i],typeof o<"u"?o||"":!1}let r=t;try{r=decodeURI(t)}catch{}return(r.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(i=>{const o=n(i.slice(1));typeof o=="string"&&(t=t.replaceAll(new RegExp(`\\${i}(\\W|$)`,"g"),`${o}$1`).trim())}),e.separator&&(t.endsWith(e.separator)&&(t=t.slice(0,-e.separator.length).trim()),t.startsWith(e.separator)&&(t=t.slice(e.separator.length).trim()),t=t.replace(new RegExp(`\\${e.separator}\\s*\\${e.separator}`,"g"),e.separator)),t}function QN(){return{hooks:{"tags:resolve":t=>{var i;const{tags:e}=t,n=(i=e.find(o=>o.tag==="title"))==null?void 0:i.textContent,r=e.findIndex(o=>o.tag==="templateParams"),s=r!==-1?e[r].props:{};s.pageTitle=s.pageTitle||n||"";for(const o of e)if(["titleTemplate","title"].includes(o.tag)&&typeof o.textContent=="string")o.textContent=Io(o.textContent,s);else if(o.tag==="meta"&&typeof o.props.content=="string")o.props.content=Io(o.props.content,s);else if(o.tag==="link"&&typeof o.props.href=="string")o.props.href=Io(o.props.href,s);else if(o.tag==="script"&&["application/json","application/ld+json"].includes(o.props.type)&&typeof o.innerHTML=="string")try{o.innerHTML=JSON.stringify(JSON.parse(o.innerHTML),(a,c)=>typeof c=="string"?Io(c,s):c)}catch{}t.tags=e.filter(o=>o.tag!=="templateParams")}}}}const JN=typeof window<"u";let X_;const XN=t=>X_=t,YN=()=>X_;async function ZN(t,e){const n={tag:t,props:{}};return t==="templateParams"?(n.props=e,n):["title","titleTemplate"].includes(t)?(n.textContent=e instanceof Promise?await e:e,n):typeof e=="string"?["script","noscript","style"].includes(t)?(t==="script"&&(/^(https?:)?\/\//.test(e)||e.startsWith("/"))?n.props.src=e:n.innerHTML=e,n):!1:(n.props=await tx(t,{...e}),n.props.children&&(n.props.innerHTML=n.props.children),delete n.props.children,Object.keys(n.props).filter(r=>MN.includes(r)).forEach(r=>{(!["innerHTML","textContent"].includes(r)||W_.includes(n.tag))&&(n[r]=n.props[r]),delete n.props[r]}),["innerHTML","textContent"].forEach(r=>{if(n.tag==="script"&&typeof n[r]=="string"&&["application/ld+json","application/json"].includes(n.props.type))try{n[r]=JSON.parse(n[r])}catch{n[r]=""}typeof n[r]=="object"&&(n[r]=JSON.stringify(n[r]))}),n.props.class&&(n.props.class=ex(n.props.class)),n.props.content&&Array.isArray(n.props.content)?n.props.content.map(r=>({...n,props:{...n.props,content:r}})):n)}function ex(t){return typeof t=="object"&&!Array.isArray(t)&&(t=Object.keys(t).filter(e=>t[e])),(Array.isArray(t)?t.join(" "):t).split(" ").filter(e=>e.trim()).filter(Boolean).join(" ")}async function tx(t,e){for(const n of Object.keys(e)){const r=n.startsWith("data-");e[n]instanceof Promise&&(e[n]=await e[n]),String(e[n])==="true"?e[n]=r?"true":"":String(e[n])==="false"&&(r?e[n]="false":delete e[n])}return e}const nx=10;async function rx(t){const e=[];return Object.entries(t.resolvedInput).filter(([n,r])=>typeof r<"u"&&xN.includes(n)).forEach(([n,r])=>{const s=DN(r);e.push(...s.map(i=>ZN(n,i)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((n,r)=>(n._e=t._i,n._p=(t._i<<nx)+r,n))}const sx=()=>[GN(),VN(),QN(),jN(),KN(),WN(),HN()],ix=(t={})=>[FN({document:t==null?void 0:t.document,delayFn:t==null?void 0:t.domDelayFn})];function ox(t={}){const e=ax({...t,plugins:[...ix(t),...(t==null?void 0:t.plugins)||[]]});return t.experimentalHashHydration&&e.resolvedOptions.document&&(e._hash=$N(e.resolvedOptions.document)),XN(e),e}function ax(t={}){let e=[],n={},r=0;const s=PN();t!=null&&t.hooks&&s.addHooks(t.hooks),t.plugins=[...sx(),...(t==null?void 0:t.plugins)||[]],t.plugins.forEach(a=>a.hooks&&s.addHooks(a.hooks)),t.document=t.document||(JN?document:void 0);const i=()=>s.callHook("entries:updated",o),o={resolvedOptions:t,headEntries(){return e},get hooks(){return s},use(a){a.hooks&&s.addHooks(a.hooks)},push(a,c){const l={_i:r++,input:a,_sde:{}};return c!=null&&c.mode&&(l._m=c==null?void 0:c.mode),c!=null&&c.transform&&(l._t=c==null?void 0:c.transform),e.push(l),i(),{dispose(){e=e.filter(u=>u._i!==l._i?!0:(n={...n,...u._sde||{}},u._sde={},i(),!1))},patch(u){e=e.map(h=>(h._i===l._i&&(l.input=h.input=u,i()),h))}}},async resolveTags(){const a={tags:[],entries:[...e]};await s.callHook("entries:resolve",a);for(const c of a.entries){const l=c._t||(u=>u);if(c.resolvedInput=l(c.resolvedInput||c.input),c.resolvedInput)for(const u of await rx(c)){const h={tag:u,entry:c,resolvedOptions:o.resolvedOptions};await s.callHook("tag:normalise",h),a.tags.push(h.tag)}}return await s.callHook("tags:resolve",a),a.tags},_popSideEffectQueue(){const a={...n};return n={},a},_elMap:{}};return o.hooks.callHook("init",o),o}const cx=["useHead","useSeoMeta","useHeadSafe","useServerHead","useServerSeoMeta","useServerHeadSafe","useTagTitle","useTagBase","useTagMeta","useTagMetaFlat","useTagLink","useTagScript","useTagStyle","useTagNoscript","useHtmlAttrs","useBodyAttrs","useTitleTemplate","useServerTagTitle","useServerTagBase","useServerTagMeta","useServerTagMetaFlat","useServerTagLink","useServerTagScript","useServerTagStyle","useServerTagNoscript","useServerHtmlAttrs","useServerBodyAttrs","useServerTitleTemplate"];function lx(t){return typeof t=="function"?t():Bn(t)}function wa(t,e=""){if(t instanceof Promise)return t;const n=lx(t);return!t||!n?n:Array.isArray(n)?n.map(r=>wa(r,e)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([r,s])=>r==="titleTemplate"||r.startsWith("on")?[r,Bn(s)]:[r,wa(s,r)])):n}const ux=Eu.startsWith("3"),hx=typeof window<"u",Y_="usehead";function zh(){return km()&&Nt(Y_)||YN()}function dx(t){return{install(n){ux&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(Y_,t))}}.install}function fx(t={}){const e=ox({...t,domDelayFn:n=>setTimeout(()=>yu(()=>n()),10),plugins:[px(),...(t==null?void 0:t.plugins)||[]]});return e.install=dx(e),e}const px=()=>({hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=wa(e.input)}}});function mx(t,e={}){const n=zh(),r=fe(!1),s=fe({});om(()=>{s.value=r.value?{}:wa(t)});const i=n.push(s.value,e);return dr(s,a=>{i.patch(a)}),km()&&(dm(()=>{i.dispose()}),um(()=>{r.value=!0}),lm(()=>{r.value=!1})),i}function gx(t,e={}){return zh().push(t,e)}function yx(t,e={}){var r;const n=zh();if(n){const s=hx||!!((r=n.resolvedOptions)!=null&&r.document);return e.mode==="server"&&s||e.mode==="client"&&!s?void 0:s?mx(t,e):gx(t,e)}}const vx=["injectHead"];[...vx,...cx];function _x(t,e){const n=fx(e||{}),r={unhead:n,install(s){Eu.startsWith("3")&&(s.config.globalProperties.$head=n,s.provide("usehead",n))},use(s){n.use(s)},resolveTags(){return n.resolveTags()},headEntries(){return n.headEntries()},headTags(){return n.resolveTags()},push(s,i){return n.push(s,i)},addEntry(s,i){return n.push(s,i)},addHeadObjs(s,i){return n.push(s,i)},addReactiveEntry(s,i){const o=yx(s,i);return typeof o<"u"?o.dispose:()=>{}},removeHeadObjs(){},updateDOM(s,i){i?Q_(n,{document:s}):J_(n,{delayFn:o=>setTimeout(()=>o(),50),document:s})},internalHooks:n.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return n.addHeadObjs=r.addHeadObjs,n.updateDOM=r.updateDOM,n.hooks.hook("dom:beforeRender",s=>{for(const i of r.hooks["before:dom"])i()===!1&&(s.shouldRender=!1)}),t&&r.addHeadObjs(t),r}function wx(t){try{return JSON.parse(t||"{}")}catch(e){return console.error("[SSG] On state deserialization -",e,t),{}}}function bx(t){return document.readyState==="loading"?new Promise(e=>{document.addEventListener("DOMContentLoaded",()=>e(t))}):Promise.resolve(t)}const Ex=_u({setup(t,{slots:e}){const n=fe(!1);return Di(()=>n.value=!0),()=>n.value?e.default&&e.default({}):e.placeholder&&e.placeholder({})}});function Tx(t,e,n,r={}){const{transformState:s,registerComponents:i=!0,useHead:o=!0,rootContainer:a="#app"}=r,c=typeof window<"u";async function l(u=!1,h){var J;const d=u?mE(t):gE(t);let m;o&&(m=_x(),d.use(m));const f=sC({history:u?_S(e.base):wS(e.base),...e}),{routes:v}=e;i&&d.component("ClientOnly",Ex);const b=[],A={app:d,head:m,isClient:c,router:f,routes:v,onSSRAppRendered:u?()=>{}:U=>b.push(U),triggerOnSSRAppRendered:()=>Promise.all(b.map(U=>U())),initialState:{},transformState:s,routePath:h};u&&(await bx(),A.initialState=(s==null?void 0:s(window.__INITIAL_STATE__||{}))||wx(window.__INITIAL_STATE__)),await(n==null?void 0:n(A)),d.use(f);let N,H=!0;if(f.beforeEach((U,ie,be)=>{(H||N&&N===U.path)&&(H=!1,N=U.path,U.meta.state=A.initialState),be()}),!u){const U=(J=A.routePath)!=null?J:"/";f.push(U),await f.isReady(),A.initialState=f.currentRoute.value.meta.state||{}}const X=A.initialState;return{...A,initialState:X}}return c&&(async()=>{const{app:u,router:h}=await l(!0);await h.isReady(),u.mount(a,!0)})(),l}const Ix={apiKey:"AIzaSyCqBTxOJHaPP-AH5PKJHShNyAm1S2RSHUY",authDomain:"blog-ab-e3f50.firebaseapp.com",projectId:"blog-ab-e3f50",storageBucket:"blog-ab-e3f50.appspot.com",messagingSenderId:"206927976177",appId:"1:206927976177:web:d05793bbee8c4e62e9bb50"},ii=qm(Ix),Vr=DD(ii);Tx(dC,{routes:TN,base:"Blog-AB"},({app:t,router:e,routes:n,isClient:r,initialState:s})=>{t.use(Eo),Eo.replaceState(s.store),e.beforeEach((i,o,a)=>{Eo.getters.ready||Eo.dispatch("initialize"),a()})});
