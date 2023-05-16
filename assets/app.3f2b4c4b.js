const iw=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};iw();function nl(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ow="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",aw=nl(ow);function Mp(t){return!!t||t===""}function rl(t){if(te(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=qe(r)?lw(r):rl(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(qe(t))return t;if($e(t))return t}}const cw=/;(?![^(]*\))/g,uw=/:(.+)/;function lw(t){const e={};return t.split(cw).forEach(n=>{if(n){const r=n.split(uw);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function sl(t){let e="";if(qe(t))e=t;else if(te(t))for(let n=0;n<t.length;n++){const r=sl(t[n]);r&&(e+=r+" ")}else if($e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const mc=t=>qe(t)?t:t==null?"":te(t)||$e(t)&&(t.toString===Bp||!Z(t.toString))?JSON.stringify(t,Up,2):String(t),Up=(t,e)=>e&&e.__v_isRef?Up(t,e.value):Vr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Fp(e)?{[`Set(${e.size})`]:[...e.values()]}:$e(e)&&!te(e)&&!js(e)?String(e):e,Ee={},jr=[],Lt=()=>{},hw=()=>!1,fw=/^on[^a-z]/,Ci=t=>fw.test(t),il=t=>t.startsWith("onUpdate:"),lt=Object.assign,ol=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},dw=Object.prototype.hasOwnProperty,ue=(t,e)=>dw.call(t,e),te=Array.isArray,Vr=t=>va(t)==="[object Map]",Fp=t=>va(t)==="[object Set]",Z=t=>typeof t=="function",qe=t=>typeof t=="string",al=t=>typeof t=="symbol",$e=t=>t!==null&&typeof t=="object",$p=t=>$e(t)&&Z(t.then)&&Z(t.catch),Bp=Object.prototype.toString,va=t=>Bp.call(t),pw=t=>va(t).slice(8,-1),js=t=>va(t)==="[object Object]",cl=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Vs=nl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_a=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gw=/-(\w)/g,Xt=_a(t=>t.replace(gw,(e,n)=>n?n.toUpperCase():"")),mw=/\B([A-Z])/g,cs=_a(t=>t.replace(mw,"-$1").toLowerCase()),wa=_a(t=>t.charAt(0).toUpperCase()+t.slice(1)),yc=_a(t=>t?`on${wa(t)}`:""),ti=(t,e)=>!Object.is(t,e),_o=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Mo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Xc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Xh;const yw=()=>Xh||(Xh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let qt;class jp{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&qt&&(this.parent=qt,this.index=(qt.scopes||(qt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=qt;try{return qt=this,e()}finally{qt=n}}}on(){qt=this}off(){qt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function vw(t){return new jp(t)}function _w(t,e=qt){e&&e.active&&e.effects.push(t)}const ul=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Vp=t=>(t.w&$n)>0,Hp=t=>(t.n&$n)>0,ww=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=$n},bw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Vp(s)&&!Hp(s)?s.delete(t):e[n++]=s,s.w&=~$n,s.n&=~$n}e.length=n}},Yc=new WeakMap;let Ds=0,$n=1;const Zc=30;let Nt;const sr=Symbol(""),eu=Symbol("");class ll{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,_w(this,r)}run(){if(!this.active)return this.fn();let e=Nt,n=Nn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Nt,Nt=this,Nn=!0,$n=1<<++Ds,Ds<=Zc?ww(this):Yh(this),this.fn()}finally{Ds<=Zc&&bw(this),$n=1<<--Ds,Nt=this.parent,Nn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Nt===this?this.deferStop=!0:this.active&&(Yh(this),this.onStop&&this.onStop(),this.active=!1)}}function Yh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Nn=!0;const qp=[];function us(){qp.push(Nn),Nn=!1}function ls(){const t=qp.pop();Nn=t===void 0?!0:t}function bt(t,e,n){if(Nn&&Nt){let r=Yc.get(t);r||Yc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=ul()),Kp(s)}}function Kp(t,e){let n=!1;Ds<=Zc?Hp(t)||(t.n|=$n,n=!Vp(t)):n=!t.has(Nt),n&&(t.add(Nt),Nt.deps.push(t))}function un(t,e,n,r,s,i){const o=Yc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&te(t))o.forEach((c,u)=>{(u==="length"||u>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":te(t)?cl(n)&&a.push(o.get("length")):(a.push(o.get(sr)),Vr(t)&&a.push(o.get(eu)));break;case"delete":te(t)||(a.push(o.get(sr)),Vr(t)&&a.push(o.get(eu)));break;case"set":Vr(t)&&a.push(o.get(sr));break}if(a.length===1)a[0]&&tu(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);tu(ul(c))}}function tu(t,e){const n=te(t)?t:[...t];for(const r of n)r.computed&&Zh(r);for(const r of n)r.computed||Zh(r)}function Zh(t,e){(t!==Nt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Ew=nl("__proto__,__v_isRef,__isVue"),Wp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(al)),Tw=hl(),Iw=hl(!1,!0),Sw=hl(!0),ef=Cw();function Cw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=pe(this);for(let i=0,o=this.length;i<o;i++)bt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(pe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){us();const r=pe(this)[e].apply(this,n);return ls(),r}}),t}function hl(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Vw:Xp:e?Jp:Qp).get(r))return r;const o=te(r);if(!t&&o&&ue(ef,s))return Reflect.get(ef,s,i);const a=Reflect.get(r,s,i);return(al(s)?Wp.has(s):Ew(s))||(t||bt(r,"get",s),e)?a:Ze(a)?o&&cl(s)?a:a.value:$e(a)?t?Yp(a):hs(a):a}}const Aw=zp(),Rw=zp(!0);function zp(t=!1){return function(n,r,s,i){let o=n[r];if(ni(o)&&Ze(o)&&!Ze(s))return!1;if(!t&&!ni(s)&&(nu(s)||(s=pe(s),o=pe(o)),!te(n)&&Ze(o)&&!Ze(s)))return o.value=s,!0;const a=te(n)&&cl(r)?Number(r)<n.length:ue(n,r),c=Reflect.set(n,r,s,i);return n===pe(i)&&(a?ti(s,o)&&un(n,"set",r,s):un(n,"add",r,s)),c}}function kw(t,e){const n=ue(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&un(t,"delete",e,void 0),r}function Ow(t,e){const n=Reflect.has(t,e);return(!al(e)||!Wp.has(e))&&bt(t,"has",e),n}function Pw(t){return bt(t,"iterate",te(t)?"length":sr),Reflect.ownKeys(t)}const Gp={get:Tw,set:Aw,deleteProperty:kw,has:Ow,ownKeys:Pw},Nw={get:Sw,set(t,e){return!0},deleteProperty(t,e){return!0}},Dw=lt({},Gp,{get:Iw,set:Rw}),fl=t=>t,ba=t=>Reflect.getPrototypeOf(t);function Zi(t,e,n=!1,r=!1){t=t.__v_raw;const s=pe(t),i=pe(e);n||(e!==i&&bt(s,"get",e),bt(s,"get",i));const{has:o}=ba(s),a=r?fl:n?gl:ri;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function eo(t,e=!1){const n=this.__v_raw,r=pe(n),s=pe(t);return e||(t!==s&&bt(r,"has",t),bt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function to(t,e=!1){return t=t.__v_raw,!e&&bt(pe(t),"iterate",sr),Reflect.get(t,"size",t)}function tf(t){t=pe(t);const e=pe(this);return ba(e).has.call(e,t)||(e.add(t),un(e,"add",t,t)),this}function nf(t,e){e=pe(e);const n=pe(this),{has:r,get:s}=ba(n);let i=r.call(n,t);i||(t=pe(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?ti(e,o)&&un(n,"set",t,e):un(n,"add",t,e),this}function rf(t){const e=pe(this),{has:n,get:r}=ba(e);let s=n.call(e,t);s||(t=pe(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&un(e,"delete",t,void 0),i}function sf(){const t=pe(this),e=t.size!==0,n=t.clear();return e&&un(t,"clear",void 0,void 0),n}function no(t,e){return function(r,s){const i=this,o=i.__v_raw,a=pe(o),c=e?fl:t?gl:ri;return!t&&bt(a,"iterate",sr),o.forEach((u,l)=>r.call(s,c(u),c(l),i))}}function ro(t,e,n){return function(...r){const s=this.__v_raw,i=pe(s),o=Vr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),l=n?fl:e?gl:ri;return!e&&bt(i,"iterate",c?eu:sr),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:a?[l(h[0]),l(h[1])]:l(h),done:f}},[Symbol.iterator](){return this}}}}function _n(t){return function(...e){return t==="delete"?!1:this}}function xw(){const t={get(i){return Zi(this,i)},get size(){return to(this)},has:eo,add:tf,set:nf,delete:rf,clear:sf,forEach:no(!1,!1)},e={get(i){return Zi(this,i,!1,!0)},get size(){return to(this)},has:eo,add:tf,set:nf,delete:rf,clear:sf,forEach:no(!1,!0)},n={get(i){return Zi(this,i,!0)},get size(){return to(this,!0)},has(i){return eo.call(this,i,!0)},add:_n("add"),set:_n("set"),delete:_n("delete"),clear:_n("clear"),forEach:no(!0,!1)},r={get(i){return Zi(this,i,!0,!0)},get size(){return to(this,!0)},has(i){return eo.call(this,i,!0)},add:_n("add"),set:_n("set"),delete:_n("delete"),clear:_n("clear"),forEach:no(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ro(i,!1,!1),n[i]=ro(i,!0,!1),e[i]=ro(i,!1,!0),r[i]=ro(i,!0,!0)}),[t,n,e,r]}const[Lw,Mw,Uw,Fw]=xw();function dl(t,e){const n=e?t?Fw:Uw:t?Mw:Lw;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ue(n,s)&&s in r?n:r,s,i)}const $w={get:dl(!1,!1)},Bw={get:dl(!1,!0)},jw={get:dl(!0,!1)},Qp=new WeakMap,Jp=new WeakMap,Xp=new WeakMap,Vw=new WeakMap;function Hw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qw(t){return t.__v_skip||!Object.isExtensible(t)?0:Hw(pw(t))}function hs(t){return ni(t)?t:pl(t,!1,Gp,$w,Qp)}function Kw(t){return pl(t,!1,Dw,Bw,Jp)}function Yp(t){return pl(t,!0,Nw,jw,Xp)}function pl(t,e,n,r,s){if(!$e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=qw(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Hr(t){return ni(t)?Hr(t.__v_raw):!!(t&&t.__v_isReactive)}function ni(t){return!!(t&&t.__v_isReadonly)}function nu(t){return!!(t&&t.__v_isShallow)}function Zp(t){return Hr(t)||ni(t)}function pe(t){const e=t&&t.__v_raw;return e?pe(e):t}function eg(t){return Mo(t,"__v_skip",!0),t}const ri=t=>$e(t)?hs(t):t,gl=t=>$e(t)?Yp(t):t;function tg(t){Nn&&Nt&&(t=pe(t),Kp(t.dep||(t.dep=ul())))}function ng(t,e){t=pe(t),t.dep&&tu(t.dep)}function Ze(t){return!!(t&&t.__v_isRef===!0)}function fr(t){return rg(t,!1)}function Ww(t){return rg(t,!0)}function rg(t,e){return Ze(t)?t:new zw(t,e)}class zw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:pe(e),this._value=n?e:ri(e)}get value(){return tg(this),this._value}set value(e){e=this.__v_isShallow?e:pe(e),ti(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:ri(e),ng(this))}}function Dn(t){return Ze(t)?t.value:t}const Gw={get:(t,e,n)=>Dn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ze(s)&&!Ze(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function sg(t){return Hr(t)?t:new Proxy(t,Gw)}class Qw{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ll(e,()=>{this._dirty||(this._dirty=!0,ng(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=pe(this);return tg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Jw(t,e,n=!1){let r,s;const i=Z(t);return i?(r=t,s=Lt):(r=t.get,s=t.set),new Qw(r,s,i||!s,n)}function xn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ea(i,e,n)}return s}function Mt(t,e,n,r){if(Z(t)){const i=xn(t,e,n,r);return i&&$p(i)&&i.catch(o=>{Ea(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Mt(t[i],e,n,r));return s}function Ea(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){xn(c,null,10,[t,o,a]);return}}Xw(t,n,s,r)}function Xw(t,e,n,r=!0){console.error(t)}let Uo=!1,ru=!1;const vt=[];let nn=0;const Hs=[];let xs=null,xr=0;const qs=[];let In=null,Lr=0;const ig=Promise.resolve();let ml=null,su=null;function si(t){const e=ml||ig;return t?e.then(this?t.bind(this):t):e}function Yw(t){let e=nn+1,n=vt.length;for(;e<n;){const r=e+n>>>1;ii(vt[r])<t?e=r+1:n=r}return e}function og(t){(!vt.length||!vt.includes(t,Uo&&t.allowRecurse?nn+1:nn))&&t!==su&&(t.id==null?vt.push(t):vt.splice(Yw(t.id),0,t),ag())}function ag(){!Uo&&!ru&&(ru=!0,ml=ig.then(ug))}function Zw(t){const e=vt.indexOf(t);e>nn&&vt.splice(e,1)}function cg(t,e,n,r){te(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),ag()}function eb(t){cg(t,xs,Hs,xr)}function tb(t){cg(t,In,qs,Lr)}function Ta(t,e=null){if(Hs.length){for(su=e,xs=[...new Set(Hs)],Hs.length=0,xr=0;xr<xs.length;xr++)xs[xr]();xs=null,xr=0,su=null,Ta(t,e)}}function Fo(t){if(Ta(),qs.length){const e=[...new Set(qs)];if(qs.length=0,In){In.push(...e);return}for(In=e,In.sort((n,r)=>ii(n)-ii(r)),Lr=0;Lr<In.length;Lr++)In[Lr]();In=null,Lr=0}}const ii=t=>t.id==null?1/0:t.id;function ug(t){ru=!1,Uo=!0,Ta(t),vt.sort((n,r)=>ii(n)-ii(r));const e=Lt;try{for(nn=0;nn<vt.length;nn++){const n=vt[nn];n&&n.active!==!1&&xn(n,null,14)}}finally{nn=0,vt.length=0,Fo(),Uo=!1,ml=null,(vt.length||Hs.length||qs.length)&&ug(t)}}function nb(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ee;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[l]||Ee;f&&(s=n.map(g=>g.trim())),h&&(s=n.map(Xc))}let a,c=r[a=yc(e)]||r[a=yc(Xt(e))];!c&&i&&(c=r[a=yc(cs(e))]),c&&Mt(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Mt(u,t,6,s)}}function lg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Z(t)){const c=u=>{const l=lg(u,e,!0);l&&(a=!0,lt(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(te(i)?i.forEach(c=>o[c]=null):lt(o,i),r.set(t,o),o)}function Ia(t,e){return!t||!Ci(e)?!1:(e=e.slice(2).replace(/Once$/,""),ue(t,e[0].toLowerCase()+e.slice(1))||ue(t,cs(e))||ue(t,e))}let et=null,Sa=null;function $o(t){const e=et;return et=t,Sa=t&&t.type.__scopeId||null,e}function rb(t){Sa=t}function sb(){Sa=null}function Yn(t,e=et,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&gf(-1);const i=$o(e),o=t(...s);return $o(i),r._d&&gf(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function vc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:f,setupState:g,ctx:p,inheritAttrs:v}=t;let b,y;const _=$o(t);try{if(n.shapeFlag&4){const N=s||r;b=Pt(l.call(N,N,h,i,g,f,p)),y=c}else{const N=e;b=Pt(N.length>1?N(i,{attrs:c,slots:a,emit:u}):N(i,null)),y=e.props?c:ib(c)}}catch(N){Ks.length=0,Ea(N,t,1),b=Ne(ln)}let A=b;if(y&&v!==!1){const N=Object.keys(y),{shapeFlag:V}=A;N.length&&V&7&&(o&&N.some(il)&&(y=ob(y,o)),A=Qr(A,y))}return n.dirs&&(A=Qr(A),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&(A.transition=n.transition),b=A,$o(_),b}const ib=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ci(n))&&((e||(e={}))[n]=t[n]);return e},ob=(t,e)=>{const n={};for(const r in t)(!il(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ab(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?of(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const f=l[h];if(o[f]!==r[f]&&!Ia(u,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?of(r,o,u):!0:!!o;return!1}function of(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ia(n,i))return!0}return!1}function cb({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ub=t=>t.__isSuspense;function hg(t,e){e&&e.pendingBranch?te(t)?e.effects.push(...t):e.effects.push(t):tb(t)}function wo(t,e){if(He){let n=He.provides;const r=He.parent&&He.parent.provides;r===n&&(n=He.provides=Object.create(r)),n[t]=e}}function Ct(t,e,n=!1){const r=He||et;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Z(e)?e.call(r.proxy):e}}function lb(t,e){return yl(t,null,e)}const af={};function ir(t,e,n){return yl(t,e,n)}function yl(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ee){const a=He;let c,u=!1,l=!1;if(Ze(t)?(c=()=>t.value,u=nu(t)):Hr(t)?(c=()=>t,r=!0):te(t)?(l=!0,u=t.some(y=>Hr(y)||nu(y)),c=()=>t.map(y=>{if(Ze(y))return y.value;if(Hr(y))return Zn(y);if(Z(y))return xn(y,a,2)})):Z(t)?e?c=()=>xn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Mt(t,a,3,[f])}:c=Lt,e&&r){const y=c;c=()=>Zn(y())}let h,f=y=>{h=b.onStop=()=>{xn(y,a,4)}};if(ci)return f=Lt,e?n&&Mt(e,a,3,[c(),l?[]:void 0,f]):c(),Lt;let g=l?[]:af;const p=()=>{if(!!b.active)if(e){const y=b.run();(r||u||(l?y.some((_,A)=>ti(_,g[A])):ti(y,g)))&&(h&&h(),Mt(e,a,3,[y,g===af?void 0:g,f]),g=y)}else b.run()};p.allowRecurse=!!e;let v;s==="sync"?v=p:s==="post"?v=()=>ft(p,a&&a.suspense):v=()=>eb(p);const b=new ll(c,v);return e?n?p():g=b.run():s==="post"?ft(b.run.bind(b),a&&a.suspense):b.run(),()=>{b.stop(),a&&a.scope&&ol(a.scope.effects,b)}}function hb(t,e,n){const r=this.proxy,s=qe(t)?t.includes(".")?fg(r,t):()=>r[t]:t.bind(r,r);let i;Z(e)?i=e:(i=e.handler,n=e);const o=He;Jr(this);const a=yl(s,i.bind(r),n);return o?Jr(o):or(),a}function fg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Zn(t,e){if(!$e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ze(t))Zn(t.value,e);else if(te(t))for(let n=0;n<t.length;n++)Zn(t[n],e);else if(Fp(t)||Vr(t))t.forEach(n=>{Zn(n,e)});else if(js(t))for(const n in t)Zn(t[n],e);return t}function vl(t){return Z(t)?{setup:t,name:t.name}:t}const qr=t=>!!t.type.__asyncLoader,dg=t=>t.type.__isKeepAlive;function pg(t,e){mg(t,"a",e)}function gg(t,e){mg(t,"da",e)}function mg(t,e,n=He){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ca(e,r,n),n){let s=n.parent;for(;s&&s.parent;)dg(s.parent.vnode)&&fb(r,e,n,s),s=s.parent}}function fb(t,e,n,r){const s=Ca(e,t,r,!0);_g(()=>{ol(r[e],s)},n)}function Ca(t,e,n=He,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;us(),Jr(n);const a=Mt(e,n,t,o);return or(),ls(),a});return r?s.unshift(i):s.push(i),i}}const mn=t=>(e,n=He)=>(!ci||t==="sp")&&Ca(t,e,n),db=mn("bm"),yg=mn("m"),pb=mn("bu"),gb=mn("u"),vg=mn("bum"),_g=mn("um"),mb=mn("sp"),yb=mn("rtg"),vb=mn("rtc");function _b(t,e=He){Ca("ec",t,e)}function dx(t,e){const n=et;if(n===null)return t;const r=Ra(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=Ee]=e[i];Z(o)&&(o={mounted:o,updated:o}),o.deep&&Zn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u})}return t}function Kt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(us(),Mt(c,n,8,[t.el,a,t,e]),ls())}}const wg="components";function Bo(t,e){return bb(wg,t,!0,e)||t}const wb=Symbol();function bb(t,e,n=!0,r=!1){const s=et||He;if(s){const i=s.type;if(t===wg){const a=Yb(i,!1);if(a&&(a===e||a===Xt(e)||a===wa(Xt(e))))return i}const o=cf(s[t]||i[t],e)||cf(s.appContext[t],e);return!o&&r?i:o}}function cf(t,e){return t&&(t[e]||t[Xt(e)]||t[wa(Xt(e))])}function Eb(t,e,n,r){let s;const i=n&&n[r];if(te(t)||qe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if($e(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];s[a]=e(t[u],u,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function px(t,e,n={},r,s){if(et.isCE||et.parent&&qr(et.parent)&&et.parent.isCE)return Ne("slot",e==="default"?null:{name:e},r&&r());let i=t[e];i&&i._c&&(i._d=!1),Ot();const o=i&&bg(i(n)),a=qo(ct,{key:n.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function bg(t){return t.some(e=>Ko(e)?!(e.type===ln||e.type===ct&&!bg(e.children)):!0)?t:null}const iu=t=>t?Lg(t)?Ra(t)||t.proxy:iu(t.parent):null,jo=lt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>iu(t.parent),$root:t=>iu(t.root),$emit:t=>t.emit,$options:t=>Tg(t),$forceUpdate:t=>t.f||(t.f=()=>og(t.update)),$nextTick:t=>t.n||(t.n=si.bind(t.proxy)),$watch:t=>hb.bind(t)}),Tb={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==Ee&&ue(r,e))return o[e]=1,r[e];if(s!==Ee&&ue(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&ue(u,e))return o[e]=3,i[e];if(n!==Ee&&ue(n,e))return o[e]=4,n[e];ou&&(o[e]=0)}}const l=jo[e];let h,f;if(l)return e==="$attrs"&&bt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ee&&ue(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ue(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==Ee&&ue(s,e)?(s[e]=n,!0):r!==Ee&&ue(r,e)?(r[e]=n,!0):ue(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ee&&ue(t,o)||e!==Ee&&ue(e,o)||(a=i[0])&&ue(a,o)||ue(r,o)||ue(jo,o)||ue(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ue(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let ou=!0;function Ib(t){const e=Tg(t),n=t.proxy,r=t.ctx;ou=!1,e.beforeCreate&&uf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:f,beforeUpdate:g,updated:p,activated:v,deactivated:b,beforeDestroy:y,beforeUnmount:_,destroyed:A,unmounted:N,render:V,renderTracked:J,renderTriggered:Q,errorCaptured:M,serverPrefetch:se,expose:ve,inheritAttrs:Ce,components:We,directives:Me,filters:G}=e;if(u&&Sb(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Te in o){const _e=o[Te];Z(_e)&&(r[Te]=_e.bind(n))}if(s){const Te=s.call(n,n);$e(Te)&&(t.data=hs(Te))}if(ou=!0,i)for(const Te in i){const _e=i[Te],mt=Z(_e)?_e.bind(n,n):Z(_e.get)?_e.get.bind(n,n):Lt,Rr=!Z(_e)&&Z(_e.set)?_e.set.bind(n):Lt,en=_t({get:mt,set:Rr});Object.defineProperty(r,Te,{enumerable:!0,configurable:!0,get:()=>en.value,set:jt=>en.value=jt})}if(a)for(const Te in a)Eg(a[Te],r,n,Te);if(c){const Te=Z(c)?c.call(n):c;Reflect.ownKeys(Te).forEach(_e=>{wo(_e,Te[_e])})}l&&uf(l,t,"c");function ge(Te,_e){te(_e)?_e.forEach(mt=>Te(mt.bind(n))):_e&&Te(_e.bind(n))}if(ge(db,h),ge(yg,f),ge(pb,g),ge(gb,p),ge(pg,v),ge(gg,b),ge(_b,M),ge(vb,J),ge(yb,Q),ge(vg,_),ge(_g,N),ge(mb,se),te(ve))if(ve.length){const Te=t.exposed||(t.exposed={});ve.forEach(_e=>{Object.defineProperty(Te,_e,{get:()=>n[_e],set:mt=>n[_e]=mt})})}else t.exposed||(t.exposed={});V&&t.render===Lt&&(t.render=V),Ce!=null&&(t.inheritAttrs=Ce),We&&(t.components=We),Me&&(t.directives=Me)}function Sb(t,e,n=Lt,r=!1){te(t)&&(t=au(t));for(const s in t){const i=t[s];let o;$e(i)?"default"in i?o=Ct(i.from||s,i.default,!0):o=Ct(i.from||s):o=Ct(i),Ze(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function uf(t,e,n){Mt(te(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Eg(t,e,n,r){const s=r.includes(".")?fg(n,r):()=>n[r];if(qe(t)){const i=e[t];Z(i)&&ir(s,i)}else if(Z(t))ir(s,t.bind(n));else if($e(t))if(te(t))t.forEach(i=>Eg(i,e,n,r));else{const i=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(i)&&ir(s,i,t)}}function Tg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Vo(c,u,o,!0)),Vo(c,e,o)),i.set(e,c),c}function Vo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Vo(t,i,n,!0),s&&s.forEach(o=>Vo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Cb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Cb={data:lf,props:Qn,emits:Qn,methods:Qn,computed:Qn,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:Qn,directives:Qn,watch:Rb,provide:lf,inject:Ab};function lf(t,e){return e?t?function(){return lt(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function Ab(t,e){return Qn(au(t),au(e))}function au(t){if(te(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ot(t,e){return t?[...new Set([].concat(t,e))]:e}function Qn(t,e){return t?lt(lt(Object.create(null),t),e):e}function Rb(t,e){if(!t)return e;if(!e)return t;const n=lt(Object.create(null),t);for(const r in e)n[r]=ot(t[r],e[r]);return n}function kb(t,e,n,r=!1){const s={},i={};Mo(i,Aa,1),t.propsDefaults=Object.create(null),Ig(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Kw(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ob(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=pe(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let f=l[h];if(Ia(t.emitsOptions,f))continue;const g=e[f];if(c)if(ue(i,f))g!==i[f]&&(i[f]=g,u=!0);else{const p=Xt(f);s[p]=cu(c,a,p,g,t,!1)}else g!==i[f]&&(i[f]=g,u=!0)}}}else{Ig(t,e,s,i)&&(u=!0);let l;for(const h in a)(!e||!ue(e,h)&&((l=cs(h))===h||!ue(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(s[h]=cu(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ue(e,h)&&!0)&&(delete i[h],u=!0)}u&&un(t,"set","$attrs")}function Ig(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Vs(c))continue;const u=e[c];let l;s&&ue(s,l=Xt(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:Ia(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=pe(n),u=a||Ee;for(let l=0;l<i.length;l++){const h=i[l];n[h]=cu(s,c,h,u[h],t,!ue(u,h))}}return o}function cu(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ue(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&Z(c)){const{propsDefaults:u}=s;n in u?r=u[n]:(Jr(s),r=u[n]=c.call(null,e),or())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===cs(n))&&(r=!0))}return r}function Sg(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!Z(t)){const l=h=>{c=!0;const[f,g]=Sg(h,e,!0);lt(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return r.set(t,jr),jr;if(te(i))for(let l=0;l<i.length;l++){const h=Xt(i[l]);hf(h)&&(o[h]=Ee)}else if(i)for(const l in i){const h=Xt(l);if(hf(h)){const f=i[l],g=o[h]=te(f)||Z(f)?{type:f}:f;if(g){const p=pf(Boolean,g.type),v=pf(String,g.type);g[0]=p>-1,g[1]=v<0||p<v,(p>-1||ue(g,"default"))&&a.push(h)}}}const u=[o,a];return r.set(t,u),u}function hf(t){return t[0]!=="$"}function ff(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function df(t,e){return ff(t)===ff(e)}function pf(t,e){return te(e)?e.findIndex(n=>df(n,t)):Z(e)&&df(e,t)?0:-1}const Cg=t=>t[0]==="_"||t==="$stable",_l=t=>te(t)?t.map(Pt):[Pt(t)],Pb=(t,e,n)=>{if(e._n)return e;const r=Yn((...s)=>_l(e(...s)),n);return r._c=!1,r},Ag=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Cg(s))continue;const i=t[s];if(Z(i))e[s]=Pb(s,i,r);else if(i!=null){const o=_l(i);e[s]=()=>o}}},Rg=(t,e)=>{const n=_l(e);t.slots.default=()=>n},Nb=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=pe(e),Mo(e,"_",n)):Ag(e,t.slots={})}else t.slots={},e&&Rg(t,e);Mo(t.slots,Aa,1)},Db=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ee;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(lt(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Ag(e,s)),o=e}else e&&(Rg(t,e),o={default:1});if(i)for(const a in s)!Cg(a)&&!(a in o)&&delete s[a]};function kg(){return{app:null,config:{isNativeTag:hw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xb=0;function Lb(t,e){return function(r,s=null){Z(r)||(r=Object.assign({},r)),s!=null&&!$e(s)&&(s=null);const i=kg(),o=new Set;let a=!1;const c=i.app={_uid:xb++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:bl,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&Z(u.install)?(o.add(u),u.install(c,...l)):Z(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const f=Ne(r,s);return f.appContext=i,l&&e?e(f,u):t(f,u,h),a=!0,c._container=u,u.__vue_app__=c,Ra(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function Ho(t,e,n,r,s=!1){if(te(t)){t.forEach((f,g)=>Ho(f,e&&(te(e)?e[g]:e),n,r,s));return}if(qr(r)&&!s)return;const i=r.shapeFlag&4?Ra(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===Ee?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(qe(u)?(l[u]=null,ue(h,u)&&(h[u]=null)):Ze(u)&&(u.value=null)),Z(c))xn(c,a,12,[o,l]);else{const f=qe(c),g=Ze(c);if(f||g){const p=()=>{if(t.f){const v=f?l[c]:c.value;s?te(v)&&ol(v,i):te(v)?v.includes(i)||v.push(i):f?(l[c]=[i],ue(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else f?(l[c]=o,ue(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(l[t.k]=o))};o?(p.id=-1,ft(p,n)):p()}}}let wn=!1;const so=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",io=t=>t.nodeType===8;function Mb(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:u}}=t,l=(y,_)=>{if(!_.hasChildNodes()){n(null,y,_),Fo(),_._vnode=y;return}wn=!1,h(_.firstChild,y,null,null,null),Fo(),_._vnode=y,wn&&console.error("Hydration completed but contains mismatches.")},h=(y,_,A,N,V,J=!1)=>{const Q=io(y)&&y.data==="[",M=()=>v(y,_,A,N,V,Q),{type:se,ref:ve,shapeFlag:Ce,patchFlag:We}=_,Me=y.nodeType;_.el=y,We===-2&&(J=!1,_.dynamicChildren=null);let G=null;switch(se){case oi:Me!==3?_.children===""?(c(_.el=s(""),o(y),y),G=y):G=M():(y.data!==_.children&&(wn=!0,y.data=_.children),G=i(y));break;case ln:Me!==8||Q?G=M():G=i(y);break;case bo:if(Me!==1&&Me!==3)G=M();else{G=y;const ht=!_.children.length;for(let ge=0;ge<_.staticCount;ge++)ht&&(_.children+=G.nodeType===1?G.outerHTML:G.data),ge===_.staticCount-1&&(_.anchor=G),G=i(G);return G}break;case ct:Q?G=p(y,_,A,N,V,J):G=M();break;default:if(Ce&1)Me!==1||_.type.toLowerCase()!==y.tagName.toLowerCase()?G=M():G=f(y,_,A,N,V,J);else if(Ce&6){_.slotScopeIds=V;const ht=o(y);if(e(_,ht,null,A,N,so(ht),J),G=Q?b(y):i(y),G&&io(G)&&G.data==="teleport end"&&(G=i(G)),qr(_)){let ge;Q?(ge=Ne(ct),ge.anchor=G?G.previousSibling:ht.lastChild):ge=y.nodeType===3?yn(""):Ne("div"),ge.el=y,_.component.subTree=ge}}else Ce&64?Me!==8?G=M():G=_.type.hydrate(y,_,A,N,V,J,t,g):Ce&128&&(G=_.type.hydrate(y,_,A,N,so(o(y)),V,J,t,h))}return ve!=null&&Ho(ve,null,N,_),G},f=(y,_,A,N,V,J)=>{J=J||!!_.dynamicChildren;const{type:Q,props:M,patchFlag:se,shapeFlag:ve,dirs:Ce}=_,We=Q==="input"&&Ce||Q==="option";if(We||se!==-1){if(Ce&&Kt(_,null,A,"created"),M)if(We||!J||se&48)for(const G in M)(We&&G.endsWith("value")||Ci(G)&&!Vs(G))&&r(y,G,null,M[G],!1,void 0,A);else M.onClick&&r(y,"onClick",null,M.onClick,!1,void 0,A);let Me;if((Me=M&&M.onVnodeBeforeMount)&&St(Me,A,_),Ce&&Kt(_,null,A,"beforeMount"),((Me=M&&M.onVnodeMounted)||Ce)&&hg(()=>{Me&&St(Me,A,_),Ce&&Kt(_,null,A,"mounted")},N),ve&16&&!(M&&(M.innerHTML||M.textContent))){let G=g(y.firstChild,_,y,A,N,V,J);for(;G;){wn=!0;const ht=G;G=G.nextSibling,a(ht)}}else ve&8&&y.textContent!==_.children&&(wn=!0,y.textContent=_.children)}return y.nextSibling},g=(y,_,A,N,V,J,Q)=>{Q=Q||!!_.dynamicChildren;const M=_.children,se=M.length;for(let ve=0;ve<se;ve++){const Ce=Q?M[ve]:M[ve]=Pt(M[ve]);if(y)y=h(y,Ce,N,V,J,Q);else{if(Ce.type===oi&&!Ce.children)continue;wn=!0,n(null,Ce,A,null,N,V,so(A),J)}}return y},p=(y,_,A,N,V,J)=>{const{slotScopeIds:Q}=_;Q&&(V=V?V.concat(Q):Q);const M=o(y),se=g(i(y),_,M,A,N,V,J);return se&&io(se)&&se.data==="]"?i(_.anchor=se):(wn=!0,c(_.anchor=u("]"),M,se),se)},v=(y,_,A,N,V,J)=>{if(wn=!0,_.el=null,J){const se=b(y);for(;;){const ve=i(y);if(ve&&ve!==se)a(ve);else break}}const Q=i(y),M=o(y);return a(y),n(null,_,M,Q,A,N,so(M),V),Q},b=y=>{let _=0;for(;y;)if(y=i(y),y&&io(y)&&(y.data==="["&&_++,y.data==="]")){if(_===0)return i(y);_--}return y};return[l,h]}const ft=hg;function Ub(t){return Og(t)}function Fb(t){return Og(t,Mb)}function Og(t,e){const n=yw();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:f,setScopeId:g=Lt,cloneNode:p,insertStaticContent:v}=t,b=(d,m,w,S=null,I=null,P=null,L=!1,O=null,D=!!m.dynamicChildren)=>{if(d===m)return;d&&!Ss(d,m)&&(S=B(d),It(d,I,P,!0),d=null),m.patchFlag===-2&&(D=!1,m.dynamicChildren=null);const{type:C,ref:H,shapeFlag:U}=m;switch(C){case oi:y(d,m,w,S);break;case ln:_(d,m,w,S);break;case bo:d==null&&A(m,w,S,L);break;case ct:Me(d,m,w,S,I,P,L,O,D);break;default:U&1?J(d,m,w,S,I,P,L,O,D):U&6?G(d,m,w,S,I,P,L,O,D):(U&64||U&128)&&C.process(d,m,w,S,I,P,L,O,D,Ie)}H!=null&&I&&Ho(H,d&&d.ref,P,m||d,!m)},y=(d,m,w,S)=>{if(d==null)r(m.el=a(m.children),w,S);else{const I=m.el=d.el;m.children!==d.children&&u(I,m.children)}},_=(d,m,w,S)=>{d==null?r(m.el=c(m.children||""),w,S):m.el=d.el},A=(d,m,w,S)=>{[d.el,d.anchor]=v(d.children,m,w,S,d.el,d.anchor)},N=({el:d,anchor:m},w,S)=>{let I;for(;d&&d!==m;)I=f(d),r(d,w,S),d=I;r(m,w,S)},V=({el:d,anchor:m})=>{let w;for(;d&&d!==m;)w=f(d),s(d),d=w;s(m)},J=(d,m,w,S,I,P,L,O,D)=>{L=L||m.type==="svg",d==null?Q(m,w,S,I,P,L,O,D):ve(d,m,I,P,L,O,D)},Q=(d,m,w,S,I,P,L,O)=>{let D,C;const{type:H,props:U,shapeFlag:q,transition:Y,patchFlag:le,dirs:we}=d;if(d.el&&p!==void 0&&le===-1)D=d.el=p(d.el);else{if(D=d.el=o(d.type,P,U&&U.is,U),q&8?l(D,d.children):q&16&&se(d.children,D,null,S,I,P&&H!=="foreignObject",L,O),we&&Kt(d,null,S,"created"),U){for(const Ae in U)Ae!=="value"&&!Vs(Ae)&&i(D,Ae,null,U[Ae],P,d.children,S,I,x);"value"in U&&i(D,"value",null,U.value),(C=U.onVnodeBeforeMount)&&St(C,S,d)}M(D,d,d.scopeId,L,S)}we&&Kt(d,null,S,"beforeMount");const be=(!I||I&&!I.pendingBranch)&&Y&&!Y.persisted;be&&Y.beforeEnter(D),r(D,m,w),((C=U&&U.onVnodeMounted)||be||we)&&ft(()=>{C&&St(C,S,d),be&&Y.enter(D),we&&Kt(d,null,S,"mounted")},I)},M=(d,m,w,S,I)=>{if(w&&g(d,w),S)for(let P=0;P<S.length;P++)g(d,S[P]);if(I){let P=I.subTree;if(m===P){const L=I.vnode;M(d,L,L.scopeId,L.slotScopeIds,I.parent)}}},se=(d,m,w,S,I,P,L,O,D=0)=>{for(let C=D;C<d.length;C++){const H=d[C]=O?Sn(d[C]):Pt(d[C]);b(null,H,m,w,S,I,P,L,O)}},ve=(d,m,w,S,I,P,L)=>{const O=m.el=d.el;let{patchFlag:D,dynamicChildren:C,dirs:H}=m;D|=d.patchFlag&16;const U=d.props||Ee,q=m.props||Ee;let Y;w&&Gn(w,!1),(Y=q.onVnodeBeforeUpdate)&&St(Y,w,m,d),H&&Kt(m,d,w,"beforeUpdate"),w&&Gn(w,!0);const le=I&&m.type!=="foreignObject";if(C?Ce(d.dynamicChildren,C,O,w,S,le,P):L||mt(d,m,O,null,w,S,le,P,!1),D>0){if(D&16)We(O,m,U,q,w,S,I);else if(D&2&&U.class!==q.class&&i(O,"class",null,q.class,I),D&4&&i(O,"style",U.style,q.style,I),D&8){const we=m.dynamicProps;for(let be=0;be<we.length;be++){const Ae=we[be],kt=U[Ae],kr=q[Ae];(kr!==kt||Ae==="value")&&i(O,Ae,kt,kr,I,d.children,w,S,x)}}D&1&&d.children!==m.children&&l(O,m.children)}else!L&&C==null&&We(O,m,U,q,w,S,I);((Y=q.onVnodeUpdated)||H)&&ft(()=>{Y&&St(Y,w,m,d),H&&Kt(m,d,w,"updated")},S)},Ce=(d,m,w,S,I,P,L)=>{for(let O=0;O<m.length;O++){const D=d[O],C=m[O],H=D.el&&(D.type===ct||!Ss(D,C)||D.shapeFlag&70)?h(D.el):w;b(D,C,H,null,S,I,P,L,!0)}},We=(d,m,w,S,I,P,L)=>{if(w!==S){for(const O in S){if(Vs(O))continue;const D=S[O],C=w[O];D!==C&&O!=="value"&&i(d,O,C,D,L,m.children,I,P,x)}if(w!==Ee)for(const O in w)!Vs(O)&&!(O in S)&&i(d,O,w[O],null,L,m.children,I,P,x);"value"in S&&i(d,"value",w.value,S.value)}},Me=(d,m,w,S,I,P,L,O,D)=>{const C=m.el=d?d.el:a(""),H=m.anchor=d?d.anchor:a("");let{patchFlag:U,dynamicChildren:q,slotScopeIds:Y}=m;Y&&(O=O?O.concat(Y):Y),d==null?(r(C,w,S),r(H,w,S),se(m.children,w,H,I,P,L,O,D)):U>0&&U&64&&q&&d.dynamicChildren?(Ce(d.dynamicChildren,q,w,I,P,L,O),(m.key!=null||I&&m===I.subTree)&&Pg(d,m,!0)):mt(d,m,w,H,I,P,L,O,D)},G=(d,m,w,S,I,P,L,O,D)=>{m.slotScopeIds=O,d==null?m.shapeFlag&512?I.ctx.activate(m,w,S,L,D):ht(m,w,S,I,P,L,D):ge(d,m,D)},ht=(d,m,w,S,I,P,L)=>{const O=d.component=zb(d,S,I);if(dg(d)&&(O.ctx.renderer=Ie),Gb(O),O.asyncDep){if(I&&I.registerDep(O,Te),!d.el){const D=O.subTree=Ne(ln);_(null,D,m,w)}return}Te(O,d,m,w,I,P,L)},ge=(d,m,w)=>{const S=m.component=d.component;if(ab(d,m,w))if(S.asyncDep&&!S.asyncResolved){_e(S,m,w);return}else S.next=m,Zw(S.update),S.update();else m.el=d.el,S.vnode=m},Te=(d,m,w,S,I,P,L)=>{const O=()=>{if(d.isMounted){let{next:H,bu:U,u:q,parent:Y,vnode:le}=d,we=H,be;Gn(d,!1),H?(H.el=le.el,_e(d,H,L)):H=le,U&&_o(U),(be=H.props&&H.props.onVnodeBeforeUpdate)&&St(be,Y,H,le),Gn(d,!0);const Ae=vc(d),kt=d.subTree;d.subTree=Ae,b(kt,Ae,h(kt.el),B(kt),d,I,P),H.el=Ae.el,we===null&&cb(d,Ae.el),q&&ft(q,I),(be=H.props&&H.props.onVnodeUpdated)&&ft(()=>St(be,Y,H,le),I)}else{let H;const{el:U,props:q}=m,{bm:Y,m:le,parent:we}=d,be=qr(m);if(Gn(d,!1),Y&&_o(Y),!be&&(H=q&&q.onVnodeBeforeMount)&&St(H,we,m),Gn(d,!0),U&&ne){const Ae=()=>{d.subTree=vc(d),ne(U,d.subTree,d,I,null)};be?m.type.__asyncLoader().then(()=>!d.isUnmounted&&Ae()):Ae()}else{const Ae=d.subTree=vc(d);b(null,Ae,w,S,d,I,P),m.el=Ae.el}if(le&&ft(le,I),!be&&(H=q&&q.onVnodeMounted)){const Ae=m;ft(()=>St(H,we,Ae),I)}(m.shapeFlag&256||we&&qr(we.vnode)&&we.vnode.shapeFlag&256)&&d.a&&ft(d.a,I),d.isMounted=!0,m=w=S=null}},D=d.effect=new ll(O,()=>og(C),d.scope),C=d.update=()=>D.run();C.id=d.uid,Gn(d,!0),C()},_e=(d,m,w)=>{m.component=d;const S=d.vnode.props;d.vnode=m,d.next=null,Ob(d,m.props,S,w),Db(d,m.children,w),us(),Ta(void 0,d.update),ls()},mt=(d,m,w,S,I,P,L,O,D=!1)=>{const C=d&&d.children,H=d?d.shapeFlag:0,U=m.children,{patchFlag:q,shapeFlag:Y}=m;if(q>0){if(q&128){en(C,U,w,S,I,P,L,O,D);return}else if(q&256){Rr(C,U,w,S,I,P,L,O,D);return}}Y&8?(H&16&&x(C,I,P),U!==C&&l(w,U)):H&16?Y&16?en(C,U,w,S,I,P,L,O,D):x(C,I,P,!0):(H&8&&l(w,""),Y&16&&se(U,w,S,I,P,L,O,D))},Rr=(d,m,w,S,I,P,L,O,D)=>{d=d||jr,m=m||jr;const C=d.length,H=m.length,U=Math.min(C,H);let q;for(q=0;q<U;q++){const Y=m[q]=D?Sn(m[q]):Pt(m[q]);b(d[q],Y,w,null,I,P,L,O,D)}C>H?x(d,I,P,!0,!1,U):se(m,w,S,I,P,L,O,D,U)},en=(d,m,w,S,I,P,L,O,D)=>{let C=0;const H=m.length;let U=d.length-1,q=H-1;for(;C<=U&&C<=q;){const Y=d[C],le=m[C]=D?Sn(m[C]):Pt(m[C]);if(Ss(Y,le))b(Y,le,w,null,I,P,L,O,D);else break;C++}for(;C<=U&&C<=q;){const Y=d[U],le=m[q]=D?Sn(m[q]):Pt(m[q]);if(Ss(Y,le))b(Y,le,w,null,I,P,L,O,D);else break;U--,q--}if(C>U){if(C<=q){const Y=q+1,le=Y<H?m[Y].el:S;for(;C<=q;)b(null,m[C]=D?Sn(m[C]):Pt(m[C]),w,le,I,P,L,O,D),C++}}else if(C>q)for(;C<=U;)It(d[C],I,P,!0),C++;else{const Y=C,le=C,we=new Map;for(C=le;C<=q;C++){const yt=m[C]=D?Sn(m[C]):Pt(m[C]);yt.key!=null&&we.set(yt.key,C)}let be,Ae=0;const kt=q-le+1;let kr=!1,Gh=0;const Is=new Array(kt);for(C=0;C<kt;C++)Is[C]=0;for(C=Y;C<=U;C++){const yt=d[C];if(Ae>=kt){It(yt,I,P,!0);continue}let Vt;if(yt.key!=null)Vt=we.get(yt.key);else for(be=le;be<=q;be++)if(Is[be-le]===0&&Ss(yt,m[be])){Vt=be;break}Vt===void 0?It(yt,I,P,!0):(Is[Vt-le]=C+1,Vt>=Gh?Gh=Vt:kr=!0,b(yt,m[Vt],w,null,I,P,L,O,D),Ae++)}const Qh=kr?$b(Is):jr;for(be=Qh.length-1,C=kt-1;C>=0;C--){const yt=le+C,Vt=m[yt],Jh=yt+1<H?m[yt+1].el:S;Is[C]===0?b(null,Vt,w,Jh,I,P,L,O,D):kr&&(be<0||C!==Qh[be]?jt(Vt,w,Jh,2):be--)}}},jt=(d,m,w,S,I=null)=>{const{el:P,type:L,transition:O,children:D,shapeFlag:C}=d;if(C&6){jt(d.component.subTree,m,w,S);return}if(C&128){d.suspense.move(m,w,S);return}if(C&64){L.move(d,m,w,Ie);return}if(L===ct){r(P,m,w);for(let U=0;U<D.length;U++)jt(D[U],m,w,S);r(d.anchor,m,w);return}if(L===bo){N(d,m,w);return}if(S!==2&&C&1&&O)if(S===0)O.beforeEnter(P),r(P,m,w),ft(()=>O.enter(P),I);else{const{leave:U,delayLeave:q,afterLeave:Y}=O,le=()=>r(P,m,w),we=()=>{U(P,()=>{le(),Y&&Y()})};q?q(P,le,we):we()}else r(P,m,w)},It=(d,m,w,S=!1,I=!1)=>{const{type:P,props:L,ref:O,children:D,dynamicChildren:C,shapeFlag:H,patchFlag:U,dirs:q}=d;if(O!=null&&Ho(O,null,w,d,!0),H&256){m.ctx.deactivate(d);return}const Y=H&1&&q,le=!qr(d);let we;if(le&&(we=L&&L.onVnodeBeforeUnmount)&&St(we,m,d),H&6)$(d.component,w,S);else{if(H&128){d.suspense.unmount(w,S);return}Y&&Kt(d,null,m,"beforeUnmount"),H&64?d.type.remove(d,m,w,I,Ie,S):C&&(P!==ct||U>0&&U&64)?x(C,m,w,!1,!0):(P===ct&&U&384||!I&&H&16)&&x(D,m,w),S&&Ts(d)}(le&&(we=L&&L.onVnodeUnmounted)||Y)&&ft(()=>{we&&St(we,m,d),Y&&Kt(d,null,m,"unmounted")},w)},Ts=d=>{const{type:m,el:w,anchor:S,transition:I}=d;if(m===ct){T(w,S);return}if(m===bo){V(d);return}const P=()=>{s(w),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(d.shapeFlag&1&&I&&!I.persisted){const{leave:L,delayLeave:O}=I,D=()=>L(w,P);O?O(d.el,P,D):D()}else P()},T=(d,m)=>{let w;for(;d!==m;)w=f(d),s(d),d=w;s(m)},$=(d,m,w)=>{const{bum:S,scope:I,update:P,subTree:L,um:O}=d;S&&_o(S),I.stop(),P&&(P.active=!1,It(L,d,m,w)),O&&ft(O,m),ft(()=>{d.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},x=(d,m,w,S=!1,I=!1,P=0)=>{for(let L=P;L<d.length;L++)It(d[L],m,w,S,I)},B=d=>d.shapeFlag&6?B(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),me=(d,m,w)=>{d==null?m._vnode&&It(m._vnode,null,null,!0):b(m._vnode||null,d,m,null,null,null,w),Fo(),m._vnode=d},Ie={p:b,um:It,m:jt,r:Ts,mt:ht,mc:se,pc:mt,pbc:Ce,n:B,o:t};let ie,ne;return e&&([ie,ne]=e(Ie)),{render:me,hydrate:ie,createApp:Lb(me,ie)}}function Gn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Pg(t,e,n=!1){const r=t.children,s=e.children;if(te(r)&&te(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Sn(s[i]),a.el=o.el),n||Pg(o,a))}}function $b(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Bb=t=>t.__isTeleport,ct=Symbol(void 0),oi=Symbol(void 0),ln=Symbol(void 0),bo=Symbol(void 0),Ks=[];let Dt=null;function Ot(t=!1){Ks.push(Dt=t?null:[])}function jb(){Ks.pop(),Dt=Ks[Ks.length-1]||null}let ai=1;function gf(t){ai+=t}function Ng(t){return t.dynamicChildren=ai>0?Dt||jr:null,jb(),ai>0&&Dt&&Dt.push(t),t}function er(t,e,n,r,s,i){return Ng(at(t,e,n,r,s,i,!0))}function qo(t,e,n,r,s){return Ng(Ne(t,e,n,r,s,!0))}function Ko(t){return t?t.__v_isVNode===!0:!1}function Ss(t,e){return t.type===e.type&&t.key===e.key}const Aa="__vInternal",Dg=({key:t})=>t!=null?t:null,Eo=({ref:t,ref_key:e,ref_for:n})=>t!=null?qe(t)||Ze(t)||Z(t)?{i:et,r:t,k:e,f:!!n}:t:null;function at(t,e=null,n=null,r=0,s=null,i=t===ct?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Dg(e),ref:e&&Eo(e),scopeId:Sa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(wl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=qe(n)?8:16),ai>0&&!o&&Dt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Dt.push(c),c}const Ne=Vb;function Vb(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===wb)&&(t=ln),Ko(t)){const a=Qr(t,e,!0);return n&&wl(a,n),ai>0&&!i&&Dt&&(a.shapeFlag&6?Dt[Dt.indexOf(t)]=a:Dt.push(a)),a.patchFlag|=-2,a}if(Zb(t)&&(t=t.__vccOpts),e){e=Hb(e);let{class:a,style:c}=e;a&&!qe(a)&&(e.class=sl(a)),$e(c)&&(Zp(c)&&!te(c)&&(c=lt({},c)),e.style=rl(c))}const o=qe(t)?1:ub(t)?128:Bb(t)?64:$e(t)?4:Z(t)?2:0;return at(t,e,n,r,s,o,i,!0)}function Hb(t){return t?Zp(t)||Aa in t?lt({},t):t:null}function Qr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?qb(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Dg(a),ref:e&&e.ref?n&&s?te(s)?s.concat(Eo(e)):[s,Eo(e)]:Eo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ct?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Qr(t.ssContent),ssFallback:t.ssFallback&&Qr(t.ssFallback),el:t.el,anchor:t.anchor}}function yn(t=" ",e=0){return Ne(oi,null,t,e)}function _c(t="",e=!1){return e?(Ot(),qo(ln,null,t)):Ne(ln,null,t)}function Pt(t){return t==null||typeof t=="boolean"?Ne(ln):te(t)?Ne(ct,null,t.slice()):typeof t=="object"?Sn(t):Ne(oi,null,String(t))}function Sn(t){return t.el===null||t.memo?t:Qr(t)}function wl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(te(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),wl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Aa in e)?e._ctx=et:s===3&&et&&(et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:et},n=32):(e=String(e),r&64?(n=16,e=[yn(e)]):n=8);t.children=e,t.shapeFlag|=n}function qb(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=sl([e.class,r.class]));else if(s==="style")e.style=rl([e.style,r.style]);else if(Ci(s)){const i=e[s],o=r[s];o&&i!==o&&!(te(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function St(t,e,n,r=null){Mt(t,e,7,[n,r])}const Kb=kg();let Wb=0;function zb(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Kb,i={uid:Wb++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new jp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sg(r,s),emitsOptions:lg(r,s),emit:null,emitted:null,propsDefaults:Ee,inheritAttrs:r.inheritAttrs,ctx:Ee,data:Ee,props:Ee,attrs:Ee,slots:Ee,refs:Ee,setupState:Ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=nb.bind(null,i),t.ce&&t.ce(i),i}let He=null;const xg=()=>He||et,Jr=t=>{He=t,t.scope.on()},or=()=>{He&&He.scope.off(),He=null};function Lg(t){return t.vnode.shapeFlag&4}let ci=!1;function Gb(t,e=!1){ci=e;const{props:n,children:r}=t.vnode,s=Lg(t);kb(t,n,s,e),Nb(t,r);const i=s?Qb(t,e):void 0;return ci=!1,i}function Qb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=eg(new Proxy(t.ctx,Tb));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Xb(t):null;Jr(t),us();const i=xn(r,t,0,[t.props,s]);if(ls(),or(),$p(i)){if(i.then(or,or),e)return i.then(o=>{mf(t,o,e)}).catch(o=>{Ea(o,t,0)});t.asyncDep=i}else mf(t,i,e)}else Mg(t,e)}function mf(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:$e(e)&&(t.setupState=sg(e)),Mg(t,n)}let yf;function Mg(t,e,n){const r=t.type;if(!t.render){if(!e&&yf&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=lt(lt({isCustomElement:i,delimiters:a},o),c);r.render=yf(s,u)}}t.render=r.render||Lt}Jr(t),us(),Ib(t),ls(),or()}function Jb(t){return new Proxy(t.attrs,{get(e,n){return bt(t,"get","$attrs"),e[n]}})}function Xb(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Jb(t))},slots:t.slots,emit:t.emit,expose:e}}function Ra(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(sg(eg(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in jo)return jo[n](t)}}))}function Yb(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function Zb(t){return Z(t)&&"__vccOpts"in t}const _t=(t,e)=>Jw(t,e,ci);function Ug(t,e,n){const r=arguments.length;return r===2?$e(e)&&!te(e)?Ko(e)?Ne(t,null,[e]):Ne(t,e):Ne(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ko(n)&&(n=[n]),Ne(t,e,n))}const bl="3.2.37",eE="http://www.w3.org/2000/svg",Xn=typeof document<"u"?document:null,vf=Xn&&Xn.createElement("template"),tE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Xn.createElementNS(eE,t):Xn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Xn.createTextNode(t),createComment:t=>Xn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{vf.innerHTML=r?`<svg>${t}</svg>`:t;const a=vf.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function nE(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function rE(t,e,n){const r=t.style,s=qe(n);if(n&&!s){for(const i in n)uu(r,i,n[i]);if(e&&!qe(e))for(const i in e)n[i]==null&&uu(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const _f=/\s*!important$/;function uu(t,e,n){if(te(n))n.forEach(r=>uu(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=sE(t,e);_f.test(n)?t.setProperty(cs(r),n.replace(_f,""),"important"):t[r]=n}}const wf=["Webkit","Moz","ms"],wc={};function sE(t,e){const n=wc[e];if(n)return n;let r=Xt(e);if(r!=="filter"&&r in t)return wc[e]=r;r=wa(r);for(let s=0;s<wf.length;s++){const i=wf[s]+r;if(i in t)return wc[e]=i}return e}const bf="http://www.w3.org/1999/xlink";function iE(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(bf,e.slice(6,e.length)):t.setAttributeNS(bf,e,n);else{const i=aw(e);n==null||i&&!Mp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function oE(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Mp(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Fg,aE]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let lu=0;const cE=Promise.resolve(),uE=()=>{lu=0},lE=()=>lu||(cE.then(uE),lu=Fg());function Mr(t,e,n,r){t.addEventListener(e,n,r)}function hE(t,e,n,r){t.removeEventListener(e,n,r)}function fE(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=dE(e);if(r){const u=i[e]=pE(r,s);Mr(t,a,u,c)}else o&&(hE(t,a,o,c),i[e]=void 0)}}const Ef=/(?:Once|Passive|Capture)$/;function dE(t){let e;if(Ef.test(t)){e={};let n;for(;n=t.match(Ef);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[cs(t.slice(2)),e]}function pE(t,e){const n=r=>{const s=r.timeStamp||Fg();(aE||s>=n.attached-1)&&Mt(gE(r,n.value),e,5,[r])};return n.value=t,n.attached=lE(),n}function gE(t,e){if(te(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Tf=/^on[a-z]/,mE=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?nE(t,r,s):e==="style"?rE(t,n,r):Ci(e)?il(e)||fE(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yE(t,e,r,s))?oE(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),iE(t,e,r,s))};function yE(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Tf.test(e)&&Z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Tf.test(e)&&qe(n)?!1:e in t}const If=t=>{const e=t.props["onUpdate:modelValue"]||!1;return te(e)?n=>_o(e,n):e};function vE(t){t.target.composing=!0}function Sf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const gx={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=If(s);const i=r||s.props&&s.props.type==="number";Mr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Xc(a)),t._assign(a)}),n&&Mr(t,"change",()=>{t.value=t.value.trim()}),e||(Mr(t,"compositionstart",vE),Mr(t,"compositionend",Sf),Mr(t,"change",Sf))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=If(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Xc(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},_E=["ctrl","shift","alt","meta"],wE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>_E.some(n=>t[`${n}Key`]&&!e.includes(n))},mx=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=wE[e[s]];if(i&&i(n,e))return}return t(n,...r)},yx={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Cs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Cs(t,!0),r.enter(t)):r.leave(t,()=>{Cs(t,!1)}):Cs(t,e))},beforeUnmount(t,{value:e}){Cs(t,e)}};function Cs(t,e){t.style.display=e?t._vod:"none"}const $g=lt({patchProp:mE},tE);let Ws,Cf=!1;function bE(){return Ws||(Ws=Ub($g))}function EE(){return Ws=Cf?Ws:Fb($g),Cf=!0,Ws}const TE=(...t)=>{const e=bE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Bg(r);if(!s)return;const i=e._component;!Z(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},IE=(...t)=>{const e=EE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Bg(r);if(s)return n(s,!0,s instanceof SVGElement)},e};function Bg(t){return qe(t)?document.querySelector(t):t}/**
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
 */const jg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},SE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Vg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(f=64)),r.push(n[l],n[h],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):SE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw Error();const f=i<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const p=u<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},CE=function(t){const e=jg(t);return Vg.encodeByteArray(e,!0)},Wo=function(t){return CE(t).replace(/\./g,"")},Hg=function(t){try{return Vg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function AE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function RE(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function OE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PE(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function NE(){return typeof indexedDB=="object"}function DE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function xE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const LE=()=>xE().__FIREBASE_DEFAULTS__,ME=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},UE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hg(t[1]);return e&&JSON.parse(e)},El=()=>{try{return LE()||ME()||UE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qg=t=>{var e,n;return(n=(e=El())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Kg=t=>{const e=qg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},FE=()=>{var t;return(t=El())===null||t===void 0?void 0:t.config},Wg=t=>{var e;return(e=El())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class $E{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function zg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Wo(JSON.stringify(n)),Wo(JSON.stringify(o)),a].join(".")}/**
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
 */const BE="FirebaseError";class Zt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=BE,Object.setPrototypeOf(this,Zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ai.prototype.create)}}class Ai{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?jE(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Zt(s,a,r)}}function jE(t,e){return t.replace(VE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const VE=/\{\$([^}]+)}/g;function HE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Af(i)&&Af(o)){if(!zo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Af(t){return t!==null&&typeof t=="object"}/**
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
 */function Ri(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ls(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ms(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function qE(t,e){const n=new KE(t,e);return n.subscribe.bind(n)}class KE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");WE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=bc),s.error===void 0&&(s.error=bc),s.complete===void 0&&(s.complete=bc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function WE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bc(){}/**
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
 */function Oe(t){return t&&t._delegate?t._delegate:t}class Bn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Jn="[DEFAULT]";/**
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
 */class zE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new $E;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(QE(e))try{this.getOrInitializeService({instanceIdentifier:Jn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jn){return this.instances.has(e)}getOptions(e=Jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:GE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jn){return this.component?this.component.multipleInstances?e:Jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GE(t){return t===Jn?void 0:t}function QE(t){return t.instantiationMode==="EAGER"}/**
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
 */class JE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const XE={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},YE=fe.INFO,ZE={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},eT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=ZE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tl{constructor(e){this.name=e,this._logLevel=YE,this._logHandler=eT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?XE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const tT=(t,e)=>e.some(n=>t instanceof n);let Rf,kf;function nT(){return Rf||(Rf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rT(){return kf||(kf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gg=new WeakMap,hu=new WeakMap,Qg=new WeakMap,Ec=new WeakMap,Il=new WeakMap;function sT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ln(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Gg.set(n,t)}).catch(()=>{}),Il.set(e,t),e}function iT(t){if(hu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});hu.set(t,e)}let fu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ln(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function oT(t){fu=t(fu)}function aT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Tc(this),e,...n);return Qg.set(r,e.sort?e.sort():[e]),Ln(r)}:rT().includes(t)?function(...e){return t.apply(Tc(this),e),Ln(Gg.get(this))}:function(...e){return Ln(t.apply(Tc(this),e))}}function cT(t){return typeof t=="function"?aT(t):(t instanceof IDBTransaction&&iT(t),tT(t,nT())?new Proxy(t,fu):t)}function Ln(t){if(t instanceof IDBRequest)return sT(t);if(Ec.has(t))return Ec.get(t);const e=cT(t);return e!==t&&(Ec.set(t,e),Il.set(e,t)),e}const Tc=t=>Il.get(t);function uT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Ln(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ln(o.result),c.oldVersion,c.newVersion,Ln(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const lT=["get","getKey","getAll","getAllKeys","count"],hT=["put","add","delete","clear"],Ic=new Map;function Of(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ic.get(e))return Ic.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=hT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||lT.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return Ic.set(e,i),i}oT(t=>({...t,get:(e,n,r)=>Of(e,n)||t.get(e,n,r),has:(e,n)=>!!Of(e,n)||t.has(e,n)}));/**
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
 */class fT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const du="@firebase/app",Pf="0.8.3";/**
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
 */const dr=new Tl("@firebase/app"),pT="@firebase/app-compat",gT="@firebase/analytics-compat",mT="@firebase/analytics",yT="@firebase/app-check-compat",vT="@firebase/app-check",_T="@firebase/auth",wT="@firebase/auth-compat",bT="@firebase/database",ET="@firebase/database-compat",TT="@firebase/functions",IT="@firebase/functions-compat",ST="@firebase/installations",CT="@firebase/installations-compat",AT="@firebase/messaging",RT="@firebase/messaging-compat",kT="@firebase/performance",OT="@firebase/performance-compat",PT="@firebase/remote-config",NT="@firebase/remote-config-compat",DT="@firebase/storage",xT="@firebase/storage-compat",LT="@firebase/firestore",MT="@firebase/firestore-compat",UT="firebase",FT="9.13.0";/**
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
 */const pu="[DEFAULT]",$T={[du]:"fire-core",[pT]:"fire-core-compat",[mT]:"fire-analytics",[gT]:"fire-analytics-compat",[vT]:"fire-app-check",[yT]:"fire-app-check-compat",[_T]:"fire-auth",[wT]:"fire-auth-compat",[bT]:"fire-rtdb",[ET]:"fire-rtdb-compat",[TT]:"fire-fn",[IT]:"fire-fn-compat",[ST]:"fire-iid",[CT]:"fire-iid-compat",[AT]:"fire-fcm",[RT]:"fire-fcm-compat",[kT]:"fire-perf",[OT]:"fire-perf-compat",[PT]:"fire-rc",[NT]:"fire-rc-compat",[DT]:"fire-gcs",[xT]:"fire-gcs-compat",[LT]:"fire-fst",[MT]:"fire-fst-compat","fire-js":"fire-js",[UT]:"fire-js-all"};/**
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
 */const Go=new Map,gu=new Map;function BT(t,e){try{t.container.addComponent(e)}catch(n){dr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pr(t){const e=t.name;if(gu.has(e))return dr.debug(`There were multiple attempts to register component ${e}.`),!1;gu.set(e,t);for(const n of Go.values())BT(n,t);return!0}function ka(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const jT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Mn=new Ai("app","Firebase",jT);/**
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
 */class VT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}/**
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
 */const fs=FT;function Jg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Mn.create("bad-app-name",{appName:String(s)});if(n||(n=FE()),!n)throw Mn.create("no-options");const i=Go.get(s);if(i){if(zo(n,i.options)&&zo(r,i.config))return i;throw Mn.create("duplicate-app",{appName:s})}const o=new JE(s);for(const c of gu.values())o.addComponent(c);const a=new VT(n,r,o);return Go.set(s,a),a}function Sl(t=pu){const e=Go.get(t);if(!e&&t===pu)return Jg();if(!e)throw Mn.create("no-app",{appName:t});return e}function Gt(t,e,n){var r;let s=(r=$T[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dr.warn(a.join(" "));return}pr(new Bn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const HT="firebase-heartbeat-database",qT=1,ui="firebase-heartbeat-store";let Sc=null;function Xg(){return Sc||(Sc=uT(HT,qT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ui)}}}).catch(t=>{throw Mn.create("idb-open",{originalErrorMessage:t.message})})),Sc}async function KT(t){var e;try{return(await Xg()).transaction(ui).objectStore(ui).get(Yg(t))}catch(n){if(n instanceof Zt)dr.warn(n.message);else{const r=Mn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});dr.warn(r.message)}}}async function Nf(t,e){var n;try{const s=(await Xg()).transaction(ui,"readwrite");return await s.objectStore(ui).put(e,Yg(t)),s.done}catch(r){if(r instanceof Zt)dr.warn(r.message);else{const s=Mn.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});dr.warn(s.message)}}}function Yg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const WT=1024,zT=30*24*60*60*1e3;class GT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new JT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Df();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=zT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Df(),{heartbeatsToSend:n,unsentEntries:r}=QT(this._heartbeatsCache.heartbeats),s=Wo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Df(){return new Date().toISOString().substring(0,10)}function QT(t,e=WT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),xf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),xf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class JT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return NE()?DE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await KT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Nf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Nf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function xf(t){return Wo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function XT(t){pr(new Bn("platform-logger",e=>new fT(e),"PRIVATE")),pr(new Bn("heartbeat",e=>new GT(e),"PRIVATE")),Gt(du,Pf,t),Gt(du,Pf,"esm2017"),Gt("fire-js","")}XT("");function Cl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Zg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YT=Zg,em=new Ai("auth","Firebase",Zg());/**
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
 */const Lf=new Tl("@firebase/auth");function To(t,...e){Lf.logLevel<=fe.ERROR&&Lf.error(`Auth (${fs}): ${t}`,...e)}/**
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
 */function Ft(t,...e){throw Al(t,...e)}function Qt(t,...e){return Al(t,...e)}function ZT(t,e,n){const r=Object.assign(Object.assign({},YT()),{[e]:n});return new Ai("auth","Firebase",r).create(e,{appName:t.name})}function Al(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return em.create(t,...e)}function W(t,e,...n){if(!t)throw Al(e,...n)}function rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw To(e),new Error(e)}function hn(t,e){t||rn(e)}/**
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
 */const Mf=new Map;function sn(t){hn(t instanceof Function,"Expected a class definition");let e=Mf.get(t);return e?(hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mf.set(t,e),e)}/**
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
 */function e0(t,e){const n=ka(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(zo(i,e!=null?e:{}))return s;Ft(s,"already-initialized")}return n.initialize({options:e})}function t0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function mu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function n0(){return Uf()==="http:"||Uf()==="https:"}function Uf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function r0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(n0()||kE()||"connection"in navigator)?navigator.onLine:!0}function s0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ki{constructor(e,n){this.shortDelay=e,this.longDelay=n,hn(n>e,"Short delay should be less than long delay!"),this.isMobile=AE()||OE()}get(){return r0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Rl(t,e){hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class tm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const i0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const o0=new ki(3e4,6e4);function ds(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ps(t,e,n,r,s={}){return nm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ri(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),tm.fetch()(rm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function nm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},i0),e);try{const s=new a0(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw oo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw oo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw oo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw oo(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ZT(t,l,u);Ft(t,l)}}catch(s){if(s instanceof Zt)throw s;Ft(t,"network-request-failed")}}async function Oi(t,e,n,r,s={}){const i=await ps(t,e,n,r,s);return"mfaPendingCredential"in i&&Ft(t,"multi-factor-auth-required",{_serverResponse:i}),i}function rm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Rl(t.config,s):`${t.config.apiScheme}://${s}`}class a0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qt(this.auth,"network-request-failed")),o0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function oo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Qt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function c0(t,e){return ps(t,"POST","/v1/accounts:delete",e)}async function u0(t,e){return ps(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function zs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function l0(t,e=!1){const n=Oe(t),r=await n.getIdToken(e),s=kl(r);W(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:zs(Cc(s.auth_time)),issuedAtTime:zs(Cc(s.iat)),expirationTime:zs(Cc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Cc(t){return Number(t)*1e3}function kl(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return To("JWT malformed, contained fewer than 3 sections"),null;try{const i=Hg(r);return i?JSON.parse(i):(To("Failed to decode base64 JWT payload"),null)}catch(i){return To("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function h0(t){const e=kl(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function li(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Zt&&f0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function f0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class d0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class sm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zs(this.lastLoginAt),this.creationTime=zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await li(t,u0(n,{idToken:r}));W(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?m0(i.providerUserInfo):[],a=g0(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new sm(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function p0(t){const e=Oe(t);await Qo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function g0(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function m0(t){return t.map(e=>{var{providerId:n}=e,r=Cl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function y0(t,e){const n=await nm(t,{},async()=>{const r=Ri({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=rm(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",tm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):h0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await y0(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new hi;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hi,this.toJSON())}_performRefresh(){return rn("not implemented")}}/**
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
 */function bn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ar{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Cl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new d0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new sm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await li(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return l0(this,e)}reload(){return p0(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ar(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Qo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await li(this,c0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,y=(u=n.createdAt)!==null&&u!==void 0?u:void 0,_=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:A,emailVerified:N,isAnonymous:V,providerData:J,stsTokenManager:Q}=n;W(A&&Q,e,"internal-error");const M=hi.fromJSON(this.name,Q);W(typeof A=="string",e,"internal-error"),bn(h,e.name),bn(f,e.name),W(typeof N=="boolean",e,"internal-error"),W(typeof V=="boolean",e,"internal-error"),bn(g,e.name),bn(p,e.name),bn(v,e.name),bn(b,e.name),bn(y,e.name),bn(_,e.name);const se=new ar({uid:A,auth:e,email:f,emailVerified:N,displayName:h,isAnonymous:V,photoURL:p,phoneNumber:g,tenantId:v,stsTokenManager:M,createdAt:y,lastLoginAt:_});return J&&Array.isArray(J)&&(se.providerData=J.map(ve=>Object.assign({},ve))),b&&(se._redirectEventId=b),se}static async _fromIdTokenResponse(e,n,r=!1){const s=new hi;s.updateFromServerResponse(n);const i=new ar({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Qo(i),i}}/**
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
 */class im{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}im.type="NONE";const Ff=im;/**
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
 */function Io(t,e,n){return`firebase:${t}:${e}:${n}`}class Kr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Io(this.userKey,s.apiKey,i),this.fullPersistenceKey=Io("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ar._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Kr(sn(Ff),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||sn(Ff);const o=Io(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=ar._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Kr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Kr(i,e,r))}}/**
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
 */function $f(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(om(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lm(e))return"Blackberry";if(hm(e))return"Webos";if(Ol(e))return"Safari";if((e.includes("chrome/")||am(e))&&!e.includes("edge/"))return"Chrome";if(um(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function om(t=rt()){return/firefox\//i.test(t)}function Ol(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function am(t=rt()){return/crios\//i.test(t)}function cm(t=rt()){return/iemobile/i.test(t)}function um(t=rt()){return/android/i.test(t)}function lm(t=rt()){return/blackberry/i.test(t)}function hm(t=rt()){return/webos/i.test(t)}function Oa(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function v0(t=rt()){var e;return Oa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _0(){return PE()&&document.documentMode===10}function fm(t=rt()){return Oa(t)||um(t)||hm(t)||lm(t)||/windows phone/i.test(t)||cm(t)}function w0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function dm(t,e=[]){let n;switch(t){case"Browser":n=$f(rt());break;case"Worker":n=`${$f(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fs}/${r}`}/**
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
 */class b0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
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
 */class E0{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bf(this),this.idTokenSubscription=new Bf(this),this.beforeStateQueue=new b0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=em,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=sn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Kr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Qo(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=s0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Oe(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(sn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ai("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&sn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Kr.create(this,[sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return W(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Pi(t){return Oe(t)}class Bf{constructor(e){this.auth=e,this.observer=null,this.addObserver=qE(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function T0(t,e,n){const r=Pi(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=pm(e),{host:o,port:a}=I0(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||S0()}function pm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function I0(t){const e=pm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:jf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:jf(o)}}}function jf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function S0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Pl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rn("not implemented")}_getIdTokenResponse(e){return rn("not implemented")}_linkToIdToken(e,n){return rn("not implemented")}_getReauthenticationResolver(e){return rn("not implemented")}}async function C0(t,e){return ps(t,"POST","/v1/accounts:update",e)}/**
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
 */async function A0(t,e){return Oi(t,"POST","/v1/accounts:signInWithPassword",ds(t,e))}async function R0(t,e){return ps(t,"POST","/v1/accounts:sendOobCode",ds(t,e))}async function k0(t,e){return R0(t,e)}/**
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
 */async function O0(t,e){return Oi(t,"POST","/v1/accounts:signInWithEmailLink",ds(t,e))}async function P0(t,e){return Oi(t,"POST","/v1/accounts:signInWithEmailLink",ds(t,e))}/**
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
 */class fi extends Pl{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new fi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new fi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return A0(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return O0(e,{email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return C0(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return P0(e,{idToken:n,email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Wr(t,e){return Oi(t,"POST","/v1/accounts:signInWithIdp",ds(t,e))}/**
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
 */const N0="http://localhost";class gr extends Pl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Cl(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new gr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wr(e,n)}buildRequest(){const e={requestUri:N0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ri(n)}return e}}/**
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
 */function D0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function x0(t){const e=Ls(Ms(t)).link,n=e?Ls(Ms(e)).deep_link_id:null,r=Ls(Ms(t)).deep_link_id;return(r?Ls(Ms(r)).link:null)||r||n||e||t}class Nl{constructor(e){var n,r,s,i,o,a;const c=Ls(Ms(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=D0((s=c.mode)!==null&&s!==void 0?s:null);W(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=x0(e);try{return new Nl(n)}catch{return null}}}/**
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
 */class gs{constructor(){this.providerId=gs.PROVIDER_ID}static credential(e,n){return fi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Nl.parseLink(n);return W(r,"argument-error"),fi._fromEmailAndCode(e,r.code,r.tenantId)}}gs.PROVIDER_ID="password";gs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";gs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class gm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ni extends gm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class An extends Ni{constructor(){super("facebook.com")}static credential(e){return gr._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.FACEBOOK_SIGN_IN_METHOD="facebook.com";An.PROVIDER_ID="facebook.com";/**
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
 */class Rn extends Ni{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Rn.credential(n,r)}catch{return null}}}Rn.GOOGLE_SIGN_IN_METHOD="google.com";Rn.PROVIDER_ID="google.com";/**
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
 */class kn extends Ni{constructor(){super("github.com")}static credential(e){return gr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.GITHUB_SIGN_IN_METHOD="github.com";kn.PROVIDER_ID="github.com";/**
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
 */class On extends Ni{constructor(){super("twitter.com")}static credential(e,n){return gr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return On.credential(n,r)}catch{return null}}}On.TWITTER_SIGN_IN_METHOD="twitter.com";On.PROVIDER_ID="twitter.com";/**
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
 */async function L0(t,e){return Oi(t,"POST","/v1/accounts:signUp",ds(t,e))}/**
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
 */class mr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ar._fromIdTokenResponse(e,r,s),o=Vf(r);return new mr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Vf(r);return new mr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Vf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Jo extends Zt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Jo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Jo(e,n,r,s)}}function mm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Jo._fromErrorAndOperation(t,i,e,r):i})}async function M0(t,e,n=!1){const r=await li(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return mr._forOperation(t,"link",r)}/**
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
 */async function U0(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await li(t,mm(s,i,e,t),n);W(o.idToken,s,"internal-error");const a=kl(o.idToken);W(a,s,"internal-error");const{sub:c}=a;return W(t.uid===c,s,"user-mismatch"),mr._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Ft(s,"user-mismatch"),o}}/**
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
 */async function ym(t,e,n=!1){const r="signIn",s=await mm(t,r,e),i=await mr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function F0(t,e){return ym(Pi(t),e)}/**
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
 */function $0(t,e,n){var r;W(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),W(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(W(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(W(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}async function vx(t,e,n){const r=Pi(t),s=await L0(r,{returnSecureToken:!0,email:e,password:n}),i=await mr._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function _x(t,e,n){return F0(Oe(t),gs.credential(e,n))}async function B0(t,e){const n=Oe(t),r=await t.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:r};e&&$0(n.auth,s,e);const{email:i}=await k0(n.auth,s);i!==t.email&&await t.reload()}function j0(t,e,n,r){return Oe(t).onIdTokenChanged(e,n,r)}function V0(t,e,n){return Oe(t).beforeAuthStateChanged(e,n)}function H0(t,e,n,r){return Oe(t).onAuthStateChanged(e,n,r)}function q0(t){return Oe(t).signOut()}const Xo="__sak";/**
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
 */class vm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xo,"1"),this.storage.removeItem(Xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function K0(){const t=rt();return Ol(t)||Oa(t)}const W0=1e3,z0=10;class _m extends vm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=K0()&&w0(),this.fallbackToPolling=fm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);_0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,z0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},W0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_m.type="LOCAL";const G0=_m;/**
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
 */class wm extends vm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}wm.type="SESSION";const bm=wm;/**
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
 */function Q0(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Pa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Pa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await Q0(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pa.receivers=[];/**
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
 */function Dl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class J0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Dl("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Jt(){return window}function X0(t){Jt().location.href=t}/**
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
 */function Em(){return typeof Jt().WorkerGlobalScope<"u"&&typeof Jt().importScripts=="function"}async function Y0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Z0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function eI(){return Em()?self:null}/**
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
 */const Tm="firebaseLocalStorageDb",tI=1,Yo="firebaseLocalStorage",Im="fbase_key";class Di{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Na(t,e){return t.transaction([Yo],e?"readwrite":"readonly").objectStore(Yo)}function nI(){const t=indexedDB.deleteDatabase(Tm);return new Di(t).toPromise()}function yu(){const t=indexedDB.open(Tm,tI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yo,{keyPath:Im})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yo)?e(r):(r.close(),await nI(),e(await yu()))})})}async function Hf(t,e,n){const r=Na(t,!0).put({[Im]:e,value:n});return new Di(r).toPromise()}async function rI(t,e){const n=Na(t,!1).get(e),r=await new Di(n).toPromise();return r===void 0?null:r.value}function qf(t,e){const n=Na(t,!0).delete(e);return new Di(n).toPromise()}const sI=800,iI=3;class Sm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>iI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Em()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pa._getInstance(eI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Y0(),!this.activeServiceWorker)return;this.sender=new J0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Z0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yu();return await Hf(e,Xo,"1"),await qf(e,Xo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>rI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Na(s,!1).getAll();return new Di(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sm.type="LOCAL";const oI=Sm;/**
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
 */function aI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function cI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Qt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",aI().appendChild(r)})}function uI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ki(3e4,6e4);/**
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
 */function lI(t,e){return e?sn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class xl extends Pl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hI(t){return ym(t.auth,new xl(t),t.bypassAuthState)}function fI(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),U0(n,new xl(t),t.bypassAuthState)}async function dI(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),M0(n,new xl(t),t.bypassAuthState)}/**
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
 */class Cm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hI;case"linkViaPopup":case"linkViaRedirect":return dI;case"reauthViaPopup":case"reauthViaRedirect":return fI;default:Ft(this.auth,"internal-error")}}resolve(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pI=new ki(2e3,1e4);class Fr extends Cm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Fr.currentPopupAction&&Fr.currentPopupAction.cancel(),Fr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){hn(this.filter.length===1,"Popup operations only handle one event");const e=Dl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,pI.get())};e()}}Fr.currentPopupAction=null;/**
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
 */const gI="pendingRedirect",So=new Map;class mI extends Cm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=So.get(this.auth._key());if(!e){try{const r=await yI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}So.set(this.auth._key(),e)}return this.bypassAuthState||So.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yI(t,e){const n=wI(e),r=_I(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function vI(t,e){So.set(t._key(),e)}function _I(t){return sn(t._redirectPersistence)}function wI(t){return Io(gI,t.config.apiKey,t.name)}async function bI(t,e,n=!1){const r=Pi(t),s=lI(r,e),o=await new mI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const EI=10*60*1e3;class TI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!II(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Am(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=EI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kf(e))}saveEventToCache(e){this.cachedEventUids.add(Kf(e)),this.lastProcessedEventTime=Date.now()}}function Kf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Am({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function II(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Am(t);default:return!1}}/**
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
 */async function SI(t,e={}){return ps(t,"GET","/v1/projects",e)}/**
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
 */const CI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AI=/^https?/;async function RI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await SI(t);for(const n of e)try{if(kI(n))return}catch{}Ft(t,"unauthorized-domain")}function kI(t){const e=mu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!AI.test(n))return!1;if(CI.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const OI=new ki(3e4,6e4);function Wf(){const t=Jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function PI(t){return new Promise((e,n)=>{var r,s,i;function o(){Wf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wf(),n(Qt(t,"network-request-failed"))},timeout:OI.get()})}if(!((s=(r=Jt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Jt().gapi)===null||i===void 0)&&i.load)o();else{const a=uI("iframefcb");return Jt()[a]=()=>{gapi.load?o():n(Qt(t,"network-request-failed"))},cI(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Co=null,e})}let Co=null;function NI(t){return Co=Co||PI(t),Co}/**
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
 */const DI=new ki(5e3,15e3),xI="__/auth/iframe",LI="emulator/auth/iframe",MI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FI(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rl(e,LI):`https://${t.config.authDomain}/${xI}`,r={apiKey:e.apiKey,appName:t.name,v:fs},s=UI.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ri(r).slice(1)}`}async function $I(t){const e=await NI(t),n=Jt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:FI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Qt(t,"network-request-failed"),a=Jt().setTimeout(()=>{i(o)},DI.get());function c(){Jt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const BI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jI=500,VI=600,HI="_blank",qI="http://localhost";class zf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KI(t,e,n,r=jI,s=VI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},BI),{width:r.toString(),height:s.toString(),top:i,left:o}),u=rt().toLowerCase();n&&(a=am(u)?HI:n),om(u)&&(e=e||qI,c.scrollbars="yes");const l=Object.entries(c).reduce((f,[g,p])=>`${f}${g}=${p},`,"");if(v0(u)&&a!=="_self")return WI(e||"",a),new zf(null);const h=window.open(e||"",a,l);W(h,t,"popup-blocked");try{h.focus()}catch{}return new zf(h)}function WI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const zI="__/auth/handler",GI="emulator/auth/handler";function Gf(t,e,n,r,s,i){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fs,eventId:s};if(e instanceof gm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",HE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Ni){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${QI(t)}?${Ri(a).slice(1)}`}function QI({config:t}){return t.emulator?Rl(t,GI):`https://${t.authDomain}/${zI}`}/**
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
 */const Ac="webStorageSupport";class JI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bm,this._completeRedirectFn=bI,this._overrideRedirectResult=vI}async _openPopup(e,n,r,s){var i;hn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Gf(e,n,r,mu(),s);return KI(e,o,Dl())}async _openRedirect(e,n,r,s){return await this._originValidation(e),X0(Gf(e,n,r,mu(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(hn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $I(e),r=new TI(e);return n.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ac,{type:Ac},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ac];o!==void 0&&n(!!o),Ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=RI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fm()||Ol()||Oa()}}const XI=JI;var Qf="@firebase/auth",Jf="0.20.11";/**
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
 */class YI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ZI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function eS(t){pr(new Bn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{W(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),W(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dm(t)},l=new E0(a,c,u);return t0(l,n),l})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),pr(new Bn("auth-internal",e=>{const n=Pi(e.getProvider("auth").getImmediate());return(r=>new YI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(Qf,Jf,ZI(t)),Gt(Qf,Jf,"esm2017")}/**
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
 */const tS=5*60,nS=Wg("authIdTokenMaxAge")||tS;let Xf=null;const rS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>nS)return;const s=n==null?void 0:n.token;Xf!==s&&(Xf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function vu(t=Sl()){const e=ka(t,"auth");if(e.isInitialized())return e.getImmediate();const n=e0(t,{popupRedirectResolver:XI,persistence:[oI,G0,bm]}),r=Wg("authTokenSyncURL");if(r){const i=rS(r);V0(n,i,()=>i(n.currentUser)),j0(n,o=>i(o))}const s=qg("auth");return s&&T0(n,`http://${s}`),n}eS("Browser");function sS(){return Rm().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Rm(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const iS=typeof Proxy=="function",oS="devtools-plugin:setup",aS="plugin:settings:set";let Or,_u;function cS(){var t;return Or!==void 0||(typeof window<"u"&&window.performance?(Or=!0,_u=window.performance):typeof global<"u"&&((t=global.perf_hooks)===null||t===void 0?void 0:t.performance)?(Or=!0,_u=global.perf_hooks.performance):Or=!1),Or}function uS(){return cS()?_u.now():Date.now()}class lS{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return uS()}},n&&n.on(aS,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:a,args:c,resolve:u})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function hS(t,e){const n=t,r=Rm(),s=sS(),i=iS&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(oS,t,e);else{const o=i?new lS(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ur=typeof window<"u";function fS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ye=Object.assign;function Rc(t,e){const n={};for(const r in e){const s=e[r];n[r]=$t(s)?s.map(t):t(s)}return n}const Gs=()=>{},$t=Array.isArray,dS=/\/$/,pS=t=>t.replace(dS,"");function kc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=vS(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function gS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Yf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function mS(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Xr(e.matched[r],n.matched[s])&&km(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Xr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function km(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!yS(t[n],e[n]))return!1;return!0}function yS(t,e){return $t(t)?Zf(t,e):$t(e)?Zf(e,t):t===e}function Zf(t,e){return $t(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function vS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Yr;(function(t){t.pop="pop",t.push="push"})(Yr||(Yr={}));var cr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(cr||(cr={}));const Oc="";function Om(t){if(!t)if(Ur){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),pS(t)}const _S=/^[^#]+#/;function Pm(t,e){return t.replace(_S,"#")+e}function wS(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Da=()=>({left:window.pageXOffset,top:window.pageYOffset});function bS(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=wS(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ed(t,e){return(history.state?history.state.position-e:-1)+t}const wu=new Map;function ES(t,e){wu.set(t,e)}function TS(t){const e=wu.get(t);return wu.delete(t),e}let IS=()=>location.protocol+"//"+location.host;function Nm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Yf(c,"")}return Yf(n,t)+r+s}function SS(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const g=Nm(t,location),p=n.value,v=e.value;let b=0;if(f){if(n.value=g,e.value=f,o&&o===p){o=null;return}b=v?f.position-v.position:0}else r(g);s.forEach(y=>{y(n.value,p,{delta:b,type:Yr.pop,direction:b?b>0?cr.forward:cr.back:cr.unknown})})};function c(){o=n.value}function u(f){s.push(f);const g=()=>{const p=s.indexOf(f);p>-1&&s.splice(p,1)};return i.push(g),g}function l(){const{history:f}=window;!f.state||f.replaceState(ye({},f.state,{scroll:Da()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function td(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Da():null}}function CS(t){const{history:e,location:n}=window,r={value:Nm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:IS()+t+c;try{e[l?"replaceState":"pushState"](u,"",f),s.value=u}catch(g){console.error(g),n[l?"replace":"assign"](f)}}function o(c,u){const l=ye({},e.state,td(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=ye({},s.value,e.state,{forward:c,scroll:Da()});i(l.current,l,!0);const h=ye({},td(r.value,c,null),{position:l.position+1},u);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function AS(t){t=Om(t);const e=CS(t),n=SS(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ye({location:"",base:t,go:r,createHref:Pm.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function RS(t=""){let e=[],n=[Oc],r=0;t=Om(t);function s(a){r++,r===n.length||n.splice(r),n.push(a)}function i(a,c,{direction:u,delta:l}){const h={direction:u,delta:l,type:Yr.pop};for(const f of e)f(a,c,h)}const o={location:Oc,state:{},base:t,createHref:Pm.bind(null,t),replace(a){n.splice(r--,1),s(a)},push(a,c){s(a)},listen(a){return e.push(a),()=>{const c=e.indexOf(a);c>-1&&e.splice(c,1)}},destroy(){e=[],n=[Oc],r=0},go(a,c=!0){const u=this.location,l=a<0?cr.back:cr.forward;r=Math.max(0,Math.min(r+a,n.length-1)),c&&i(this.location,u,{direction:l,delta:a})}};return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n[r]}),o}function kS(t){return typeof t=="string"||t&&typeof t=="object"}function Dm(t){return typeof t=="string"||typeof t=="symbol"}const En={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xm=Symbol("");var nd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(nd||(nd={}));function Zr(t,e){return ye(new Error,{type:t,[xm]:!0},e)}function tn(t,e){return t instanceof Error&&xm in t&&(e==null||!!(t.type&e))}const rd="[^/]+?",OS={sensitive:!1,strict:!1,start:!0,end:!0},PS=/[.+*?^${}()[\]/\\]/g;function NS(t,e){const n=ye({},OS,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const f=u[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(PS,"\\$&"),g+=40;else if(f.type===1){const{value:p,repeatable:v,optional:b,regexp:y}=f;i.push({name:p,repeatable:v,optional:b});const _=y||rd;if(_!==rd){g+=10;try{new RegExp(`(${_})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${p}" (${_}): `+N.message)}}let A=v?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;h||(A=b&&u.length<2?`(?:/${A})`:"/"+A),b&&(A+="?"),s+=A,g+=20,b&&(g+=-8),v&&(g+=-20),_===".*"&&(g+=-50)}l.push(g)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let f=1;f<l.length;f++){const g=l[f]||"",p=i[f-1];h[p.name]=g&&p.repeatable?g.split("/"):g}return h}function c(u){let l="",h=!1;for(const f of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const g of f)if(g.type===0)l+=g.value;else if(g.type===1){const{value:p,repeatable:v,optional:b}=g,y=p in u?u[p]:"";if($t(y)&&!v)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const _=$t(y)?y.join("/"):y;if(!_)if(b)f.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);l+=_}}return l||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function DS(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function xS(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=DS(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(sd(r))return 1;if(sd(s))return-1}return s.length-r.length}function sd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const LS={type:0,value:""},MS=/[a-zA-Z0-9_]/;function US(t){if(!t)return[[]];if(t==="/")return[[LS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function h(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:MS.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function FS(t,e,n){const r=NS(US(t.path),n),s=ye(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function $S(t,e){const n=[],r=new Map;e=ad({strict:!1,end:!0,sensitive:!1},e);function s(l){return r.get(l)}function i(l,h,f){const g=!f,p=BS(l);p.aliasOf=f&&f.record;const v=ad(e,l),b=[p];if("alias"in l){const A=typeof l.alias=="string"?[l.alias]:l.alias;for(const N of A)b.push(ye({},p,{components:f?f.record.components:p.components,path:N,aliasOf:f?f.record:p}))}let y,_;for(const A of b){const{path:N}=A;if(h&&N[0]!=="/"){const V=h.record.path,J=V[V.length-1]==="/"?"":"/";A.path=h.record.path+(N&&J+N)}if(y=FS(A,h,v),f?f.alias.push(y):(_=_||y,_!==y&&_.alias.push(y),g&&l.name&&!od(y)&&o(l.name)),p.children){const V=p.children;for(let J=0;J<V.length;J++)i(V[J],y,f&&f.children[J])}f=f||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&c(y)}return _?()=>{o(_)}:Gs}function o(l){if(Dm(l)){const h=r.get(l);h&&(r.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&xS(l,n[h])>=0&&(l.record.path!==n[h].record.path||!Lm(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!od(l)&&r.set(l.record.name,l)}function u(l,h){let f,g={},p,v;if("name"in l&&l.name){if(f=r.get(l.name),!f)throw Zr(1,{location:l});v=f.record.name,g=ye(id(h.params,f.keys.filter(_=>!_.optional).map(_=>_.name)),l.params&&id(l.params,f.keys.map(_=>_.name))),p=f.stringify(g)}else if("path"in l)p=l.path,f=n.find(_=>_.re.test(p)),f&&(g=f.parse(p),v=f.record.name);else{if(f=h.name?r.get(h.name):n.find(_=>_.re.test(h.path)),!f)throw Zr(1,{location:l,currentLocation:h});v=f.record.name,g=ye({},h.params,l.params),p=f.stringify(g)}const b=[];let y=f;for(;y;)b.unshift(y.record),y=y.parent;return{name:v,path:p,params:g,matched:b,meta:VS(b)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function id(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function BS(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:jS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function jS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function od(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function VS(t){return t.reduce((e,n)=>ye(e,n.meta),{})}function ad(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Lm(t,e){return e.children.some(n=>n===t||Lm(t,n))}const Mm=/#/g,HS=/&/g,qS=/\//g,KS=/=/g,WS=/\?/g,Um=/\+/g,zS=/%5B/g,GS=/%5D/g,Fm=/%5E/g,QS=/%60/g,$m=/%7B/g,JS=/%7C/g,Bm=/%7D/g,XS=/%20/g;function Ll(t){return encodeURI(""+t).replace(JS,"|").replace(zS,"[").replace(GS,"]")}function YS(t){return Ll(t).replace($m,"{").replace(Bm,"}").replace(Fm,"^")}function bu(t){return Ll(t).replace(Um,"%2B").replace(XS,"+").replace(Mm,"%23").replace(HS,"%26").replace(QS,"`").replace($m,"{").replace(Bm,"}").replace(Fm,"^")}function ZS(t){return bu(t).replace(KS,"%3D")}function eC(t){return Ll(t).replace(Mm,"%23").replace(WS,"%3F")}function tC(t){return t==null?"":eC(t).replace(qS,"%2F")}function Zo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function nC(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Um," "),o=i.indexOf("="),a=Zo(o<0?i:i.slice(0,o)),c=o<0?null:Zo(i.slice(o+1));if(a in e){let u=e[a];$t(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function cd(t){let e="";for(let n in t){const r=t[n];if(n=ZS(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}($t(r)?r.map(i=>i&&bu(i)):[r&&bu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function rC(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=$t(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const sC=Symbol(""),ud=Symbol(""),xa=Symbol(""),Ml=Symbol(""),Eu=Symbol("");function As(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Cn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Zr(4,{from:n,to:e})):h instanceof Error?a(h):kS(h)?a(Zr(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(r&&r.instances[s],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Pc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(iC(a)){const u=(a.__vccOpts||a)[e];u&&s.push(Cn(u,n,r,i,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=fS(u)?u.default:u;i.components[o]=l;const f=(l.__vccOpts||l)[e];return f&&Cn(f,n,r,i,o)()}))}}return s}function iC(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ld(t){const e=Ct(xa),n=Ct(Ml),r=_t(()=>e.resolve(Dn(t.to))),s=_t(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const f=h.findIndex(Xr.bind(null,l));if(f>-1)return f;const g=hd(c[u-2]);return u>1&&hd(l)===g&&h[h.length-1].path!==g?h.findIndex(Xr.bind(null,c[u-2])):f}),i=_t(()=>s.value>-1&&uC(n.params,r.value.params)),o=_t(()=>s.value>-1&&s.value===n.matched.length-1&&km(n.params,r.value.params));function a(c={}){return cC(c)?e[Dn(t.replace)?"replace":"push"](Dn(t.to)).catch(Gs):Promise.resolve()}return{route:r,href:_t(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const oC=vl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ld,setup(t,{slots:e}){const n=hs(ld(t)),{options:r}=Ct(xa),s=_t(()=>({[fd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[fd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ug("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),aC=oC;function cC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function uC(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!$t(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function hd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const fd=(t,e,n)=>t!=null?t:e!=null?e:n,lC=vl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ct(Eu),s=_t(()=>t.route||r.value),i=Ct(ud,0),o=_t(()=>{let u=Dn(i);const{matched:l}=s.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=_t(()=>s.value.matched[o.value]);wo(ud,_t(()=>o.value+1)),wo(sC,a),wo(Eu,s);const c=fr();return ir(()=>[c.value,a.value,t.name],([u,l,h],[f,g,p])=>{l&&(l.instances[h]=u,g&&g!==l&&u&&u===f&&(l.leaveGuards.size||(l.leaveGuards=g.leaveGuards),l.updateGuards.size||(l.updateGuards=g.updateGuards))),u&&l&&(!g||!Xr(l,g)||!f)&&(l.enterCallbacks[h]||[]).forEach(v=>v(u))},{flush:"post"}),()=>{const u=s.value,l=t.name,h=a.value,f=h&&h.components[l];if(!f)return dd(n.default,{Component:f,route:u});const g=h.props[l],p=g?g===!0?u.params:typeof g=="function"?g(u):g:null,b=Ug(f,ye({},p,e,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return dd(n.default,{Component:b,route:u})||b}}});function dd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const hC=lC;function fC(t){const e=$S(t.routes,t),n=t.parseQuery||nC,r=t.stringifyQuery||cd,s=t.history,i=As(),o=As(),a=As(),c=Ww(En);let u=En;Ur&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Rc.bind(null,T=>""+T),h=Rc.bind(null,tC),f=Rc.bind(null,Zo);function g(T,$){let x,B;return Dm(T)?(x=e.getRecordMatcher(T),B=$):B=T,e.addRoute(B,x)}function p(T){const $=e.getRecordMatcher(T);$&&e.removeRoute($)}function v(){return e.getRoutes().map(T=>T.record)}function b(T){return!!e.getRecordMatcher(T)}function y(T,$){if($=ye({},$||c.value),typeof T=="string"){const ne=kc(n,T,$.path),d=e.resolve({path:ne.path},$),m=s.createHref(ne.fullPath);return ye(ne,d,{params:f(d.params),hash:Zo(ne.hash),redirectedFrom:void 0,href:m})}let x;if("path"in T)x=ye({},T,{path:kc(n,T.path,$.path).path});else{const ne=ye({},T.params);for(const d in ne)ne[d]==null&&delete ne[d];x=ye({},T,{params:h(T.params)}),$.params=h($.params)}const B=e.resolve(x,$),me=T.hash||"";B.params=l(f(B.params));const Ie=gS(r,ye({},T,{hash:YS(me),path:B.path})),ie=s.createHref(Ie);return ye({fullPath:Ie,hash:me,query:r===cd?rC(T.query):T.query||{}},B,{redirectedFrom:void 0,href:ie})}function _(T){return typeof T=="string"?kc(n,T,c.value.path):ye({},T)}function A(T,$){if(u!==T)return Zr(8,{from:$,to:T})}function N(T){return Q(T)}function V(T){return N(ye(_(T),{replace:!0}))}function J(T){const $=T.matched[T.matched.length-1];if($&&$.redirect){const{redirect:x}=$;let B=typeof x=="function"?x(T):x;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=_(B):{path:B},B.params={}),ye({query:T.query,hash:T.hash,params:"path"in B?{}:T.params},B)}}function Q(T,$){const x=u=y(T),B=c.value,me=T.state,Ie=T.force,ie=T.replace===!0,ne=J(x);if(ne)return Q(ye(_(ne),{state:typeof ne=="object"?ye({},me,ne.state):me,force:Ie,replace:ie}),$||x);const d=x;d.redirectedFrom=$;let m;return!Ie&&mS(r,B,x)&&(m=Zr(16,{to:d,from:B}),Rr(B,B,!0,!1)),(m?Promise.resolve(m):se(d,B)).catch(w=>tn(w)?tn(w,2)?w:mt(w):Te(w,d,B)).then(w=>{if(w){if(tn(w,2))return Q(ye({replace:ie},_(w.to),{state:typeof w.to=="object"?ye({},me,w.to.state):me,force:Ie}),$||d)}else w=Ce(d,B,!0,ie,me);return ve(d,B,w),w})}function M(T,$){const x=A(T,$);return x?Promise.reject(x):Promise.resolve()}function se(T,$){let x;const[B,me,Ie]=dC(T,$);x=Pc(B.reverse(),"beforeRouteLeave",T,$);for(const ne of B)ne.leaveGuards.forEach(d=>{x.push(Cn(d,T,$))});const ie=M.bind(null,T,$);return x.push(ie),Pr(x).then(()=>{x=[];for(const ne of i.list())x.push(Cn(ne,T,$));return x.push(ie),Pr(x)}).then(()=>{x=Pc(me,"beforeRouteUpdate",T,$);for(const ne of me)ne.updateGuards.forEach(d=>{x.push(Cn(d,T,$))});return x.push(ie),Pr(x)}).then(()=>{x=[];for(const ne of T.matched)if(ne.beforeEnter&&!$.matched.includes(ne))if($t(ne.beforeEnter))for(const d of ne.beforeEnter)x.push(Cn(d,T,$));else x.push(Cn(ne.beforeEnter,T,$));return x.push(ie),Pr(x)}).then(()=>(T.matched.forEach(ne=>ne.enterCallbacks={}),x=Pc(Ie,"beforeRouteEnter",T,$),x.push(ie),Pr(x))).then(()=>{x=[];for(const ne of o.list())x.push(Cn(ne,T,$));return x.push(ie),Pr(x)}).catch(ne=>tn(ne,8)?ne:Promise.reject(ne))}function ve(T,$,x){for(const B of a.list())B(T,$,x)}function Ce(T,$,x,B,me){const Ie=A(T,$);if(Ie)return Ie;const ie=$===En,ne=Ur?history.state:{};x&&(B||ie?s.replace(T.fullPath,ye({scroll:ie&&ne&&ne.scroll},me)):s.push(T.fullPath,me)),c.value=T,Rr(T,$,x,ie),mt()}let We;function Me(){We||(We=s.listen((T,$,x)=>{if(!Ts.listening)return;const B=y(T),me=J(B);if(me){Q(ye(me,{replace:!0}),B).catch(Gs);return}u=B;const Ie=c.value;Ur&&ES(ed(Ie.fullPath,x.delta),Da()),se(B,Ie).catch(ie=>tn(ie,12)?ie:tn(ie,2)?(Q(ie.to,B).then(ne=>{tn(ne,20)&&!x.delta&&x.type===Yr.pop&&s.go(-1,!1)}).catch(Gs),Promise.reject()):(x.delta&&s.go(-x.delta,!1),Te(ie,B,Ie))).then(ie=>{ie=ie||Ce(B,Ie,!1),ie&&(x.delta&&!tn(ie,8)?s.go(-x.delta,!1):x.type===Yr.pop&&tn(ie,20)&&s.go(-1,!1)),ve(B,Ie,ie)}).catch(Gs)}))}let G=As(),ht=As(),ge;function Te(T,$,x){mt(T);const B=ht.list();return B.length?B.forEach(me=>me(T,$,x)):console.error(T),Promise.reject(T)}function _e(){return ge&&c.value!==En?Promise.resolve():new Promise((T,$)=>{G.add([T,$])})}function mt(T){return ge||(ge=!T,Me(),G.list().forEach(([$,x])=>T?x(T):$()),G.reset()),T}function Rr(T,$,x,B){const{scrollBehavior:me}=t;if(!Ur||!me)return Promise.resolve();const Ie=!x&&TS(ed(T.fullPath,0))||(B||!x)&&history.state&&history.state.scroll||null;return si().then(()=>me(T,$,Ie)).then(ie=>ie&&bS(ie)).catch(ie=>Te(ie,T,$))}const en=T=>s.go(T);let jt;const It=new Set,Ts={currentRoute:c,listening:!0,addRoute:g,removeRoute:p,hasRoute:b,getRoutes:v,resolve:y,options:t,push:N,replace:V,go:en,back:()=>en(-1),forward:()=>en(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ht.add,isReady:_e,install(T){const $=this;T.component("RouterLink",aC),T.component("RouterView",hC),T.config.globalProperties.$router=$,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Dn(c)}),Ur&&!jt&&c.value===En&&(jt=!0,N(s.location).catch(me=>{}));const x={};for(const me in En)x[me]=_t(()=>c.value[me]);T.provide(xa,$),T.provide(Ml,hs(x)),T.provide(Eu,c);const B=T.unmount;It.add(T),T.unmount=function(){It.delete(T),It.size<1&&(u=En,We&&We(),We=null,c.value=En,jt=!1,ge=!1),B()}}};return Ts}function Pr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function dC(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Xr(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Xr(u,c))||s.push(c))}return[n,r,s]}function pC(){return Ct(xa)}function wx(){return Ct(Ml)}const gC=yn(" Home "),mC=yn(" Feed "),yC={key:0},vC={key:1,class:"pop"},_C=yn(" Register "),wC=yn(" Login "),bC={__name:"App",setup(t){const e=pC(),n=fr(!0),r=fr(!1),s=vu();H0(s,a=>{a?(n.value=!0,a.emailVerified?r.value=!0:r.value=!1):n.value=!1});const i=()=>{B0(s.currentUser)},o=()=>{q0(s),e.push("/")};return(a,c)=>{const u=Bo("router-link"),l=Bo("router-view");return Ot(),er(ct,null,[at("nav",null,[Ne(u,{to:"/"},{default:Yn(()=>[gC]),_:1}),Ne(u,{to:"/feed"},{default:Yn(()=>[mC]),_:1}),n.value?(Ot(),er("span",yC,[at("button",{class:"logout",onClick:o},"Logout"),r.value?(Ot(),er("p",vC,"Verified!")):(Ot(),er("button",{key:0,class:"logout pop",onClick:i},"Verify"))])):_c("",!0),n.value?_c("",!0):(Ot(),qo(u,{key:1,to:"/register"},{default:Yn(()=>[_C]),_:1})),n.value?_c("",!0):(Ot(),qo(u,{key:2,to:"/login"},{default:Yn(()=>[wC]),_:1}))]),Ne(l)],64)}}},EC="modulepreload",TC=function(t){return"/Blog-AB/"+t},pd={},Er=function(e,n,r){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=TC(s),s in pd)return;pd[s]=!0;const i=s.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":EC,i||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),i)return new Promise((c,u)=>{a.addEventListener("load",c),a.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var jm="store";function bx(t){return t===void 0&&(t=null),Ct(t!==null?t:jm)}function ms(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function Vm(t){return t!==null&&typeof t=="object"}function IC(t){return t&&typeof t.then=="function"}function SC(t,e){return function(){return t(e)}}function Hm(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function qm(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;La(t,n,[],t._modules.root,!0),Ul(t,n,e)}function Ul(t,e,n){var r=t._state,s=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={},a={},c=vw(!0);c.run(function(){ms(i,function(u,l){o[l]=SC(u,t),a[l]=_t(function(){return o[l]()}),Object.defineProperty(t.getters,l,{get:function(){return a[l].value},enumerable:!0})})}),t._state=hs({data:e}),t._scope=c,t.strict&&OC(t),r&&n&&t._withCommit(function(){r.data=null}),s&&s.stop()}function La(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var a=Fl(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=r.state})}var u=r.context=CC(t,o,n);r.forEachMutation(function(l,h){var f=o+h;AC(t,f,l,u)}),r.forEachAction(function(l,h){var f=l.root?h:o+h,g=l.handler||l;RC(t,f,g,u)}),r.forEachGetter(function(l,h){var f=o+h;kC(t,f,l,u)}),r.forEachChild(function(l,h){La(t,e,n.concat(h),l,s)})}function CC(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,a){var c=ea(i,o,a),u=c.payload,l=c.options,h=c.type;return(!l||!l.root)&&(h=e+h),t.dispatch(h,u)},commit:r?t.commit:function(i,o,a){var c=ea(i,o,a),u=c.payload,l=c.options,h=c.type;(!l||!l.root)&&(h=e+h),t.commit(h,u,l)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return Km(t,e)}},state:{get:function(){return Fl(t.state,n)}}}),s}function Km(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function AC(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function RC(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return IC(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function kC(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function OC(t){ir(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Fl(t,e){return e.reduce(function(n,r){return n[r]},t)}function ea(t,e,n){return Vm(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var PC="vuex bindings",gd="vuex:mutations",Nc="vuex:actions",Nr="vuex",NC=0;function DC(t,e){hS({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[PC]},function(n){n.addTimelineLayer({id:gd,label:"Vuex Mutations",color:md}),n.addTimelineLayer({id:Nc,label:"Vuex Actions",color:md}),n.addInspector({id:Nr,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===Nr)if(r.filter){var s=[];Qm(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[Gm(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===Nr){var s=r.nodeId;Km(e,s),r.state=MC(FC(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===Nr){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(Nr),n.sendInspectorState(Nr),n.addTimelineEvent({layerId:gd,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=NC++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:Nc,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:Nc,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var md=8702998,xC=6710886,LC=16777215,Wm={label:"namespaced",textColor:LC,backgroundColor:xC};function zm(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Gm(t,e){return{id:e||"root",label:zm(e),tags:t.namespaced?[Wm]:[],children:Object.keys(t._children).map(function(n){return Gm(t._children[n],e+n+"/")})}}function Qm(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[Wm]:[]}),Object.keys(e._children).forEach(function(s){Qm(t,e._children[s],n,r+s+"/")})}function MC(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=UC(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?zm(o):o,editable:!1,value:Tu(function(){return i[o]})}})}return s}function UC(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=Tu(function(){return t[n]})}else e[n]=Tu(function(){return t[n]})}),e}function FC(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Tu(t){try{return t()}catch(e){return e}}var Bt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},Jm={namespaced:{configurable:!0}};Jm.namespaced.get=function(){return!!this._rawModule.namespaced};Bt.prototype.addChild=function(e,n){this._children[e]=n};Bt.prototype.removeChild=function(e){delete this._children[e]};Bt.prototype.getChild=function(e){return this._children[e]};Bt.prototype.hasChild=function(e){return e in this._children};Bt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Bt.prototype.forEachChild=function(e){ms(this._children,e)};Bt.prototype.forEachGetter=function(e){this._rawModule.getters&&ms(this._rawModule.getters,e)};Bt.prototype.forEachAction=function(e){this._rawModule.actions&&ms(this._rawModule.actions,e)};Bt.prototype.forEachMutation=function(e){this._rawModule.mutations&&ms(this._rawModule.mutations,e)};Object.defineProperties(Bt.prototype,Jm);var Tr=function(e){this.register([],e,!1)};Tr.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};Tr.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};Tr.prototype.update=function(e){Xm([],this.root,e)};Tr.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new Bt(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&ms(n.modules,function(a,c){s.register(e.concat(c),a,r)})};Tr.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);!s||!s.runtime||n.removeChild(r)};Tr.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function Xm(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;Xm(t.concat(r),e.getChild(r),n.modules[r])}}function $C(t){return new gt(t)}var gt=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Tr(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var o=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(f,g){return c.call(o,f,g)},this.commit=function(f,g,p){return u.call(o,f,g,p)},this.strict=s;var l=this._modules.root.state;La(this,l,[],this._modules.root),Ul(this,l),r.forEach(function(h){return h(n)})},$l={state:{configurable:!0}};gt.prototype.install=function(e,n){e.provide(n||jm,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&DC(e,this)};$l.state.get=function(){return this._state.data};$l.state.set=function(t){};gt.prototype.commit=function(e,n,r){var s=this,i=ea(e,n,r),o=i.type,a=i.payload,c={type:o,payload:a},u=this._mutations[o];!u||(this._withCommit(function(){u.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(l){return l(c,s.state)}))};gt.prototype.dispatch=function(e,n){var r=this,s=ea(e,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._actions[i];if(!!c){try{this._actionSubscribers.slice().filter(function(l){return l.before}).forEach(function(l){return l.before(a,r.state)})}catch{}var u=c.length>1?Promise.all(c.map(function(l){return l(o)})):c[0](o);return new Promise(function(l,h){u.then(function(f){try{r._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,r.state)})}catch{}l(f)},function(f){try{r._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,r.state,f)})}catch{}h(f)})})}};gt.prototype.subscribe=function(e,n){return Hm(e,this._subscribers,n)};gt.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return Hm(r,this._actionSubscribers,n)};gt.prototype.watch=function(e,n,r){var s=this;return ir(function(){return e(s.state,s.getters)},n,Object.assign({},r))};gt.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};gt.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),La(this,this.state,e,this._modules.get(e),r.preserveState),Ul(this,this.state)};gt.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=Fl(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),qm(this)};gt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};gt.prototype.hotUpdate=function(e){this._modules.update(e),qm(this,!0)};gt.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(gt.prototype,$l);var BC=HC(function(t,e){var n={};return jC(e).forEach(function(r){var s=r.key,i=r.val;i=t+i,n[s]=function(){if(!(t&&!qC(this.$store,"mapGetters",t)))return this.$store.getters[i]},n[s].vuex=!0}),n});function jC(t){return VC(t)?Array.isArray(t)?t.map(function(e){return{key:e,val:e}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}}):[]}function VC(t){return Array.isArray(t)||Vm(t)}function HC(t){return function(e,n){return typeof e!="string"?(n=e,e=""):e.charAt(e.length-1)!=="/"&&(e+="/"),t(e,n)}}function qC(t,e,n){var r=t._modulesNamespaceMap[n];return r}function Iu(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Iu(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const KC={run:t=>t()},WC=()=>KC,Ym=typeof console.createTask<"u"?console.createTask:WC;function zC(t,e){const n=e.shift(),r=Ym(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function GC(t,e){const n=e.shift(),r=Ym(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function Dc(t,e){for(const n of[...t])n(e)}class QC{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Iu(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=Iu(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(zC,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(GC,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&Dc(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&Dc(this._after,s)}):(this._after&&s&&Dc(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function JC(){return new QC}function XC(t){return Array.isArray(t)?t:[t]}const Zm=["title","script","style","noscript"],YC=["base","meta","link","style","script","noscript"],ZC=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],eA=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],tA=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function ey(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Su(t){return ey(`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,n])=>`${e}:${String(n)}`).join(",")}`)}function nA(t){let e=9;for(const n of t)for(let r=0;r<n.length;)e=Math.imul(e^n.charCodeAt(r++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function ty(t,e){const{props:n,tag:r}=t;if(eA.includes(r))return r;if(r==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const s=["id"];r==="meta"&&s.push("name","property","http-equiv");for(const i of s)if(typeof n[i]<"u"){const o=String(n[i]);return e&&!e(o)?!1:`${r}:${i}:${o}`}return!1}const yd=(t,e)=>t==null?e||null:typeof t=="function"?t(e):t,ao=(t,e=!1,n)=>{const{tag:r,$el:s}=t;!s||(Object.entries(r.props).forEach(([i,o])=>{o=String(o);const a=`attr:${i}`;if(i==="class"){if(!o)return;for(const c of o.split(" ")){const u=`${a}:${c}`;n&&n(t,u,()=>s.classList.remove(c)),s.classList.contains(c)||s.classList.add(c)}return}n&&!i.startsWith("data-h-")&&n(t,a,()=>s.removeAttribute(i)),(e||s.getAttribute(i)!==o)&&s.setAttribute(i,o)}),Zm.includes(r.tag)&&(r.textContent&&r.textContent!==s.textContent?s.textContent=r.textContent:r.innerHTML&&r.innerHTML!==s.innerHTML&&(s.innerHTML=r.innerHTML)))};let Rs=!1;async function ny(t,e={}){var f,g;const n={shouldRender:!0};if(await t.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const r=e.document||t.resolvedOptions.document||window.document,s=(await t.resolveTags()).map(a);if(t.resolvedOptions.experimentalHashHydration&&(Rs=Rs||t._hash||!1,Rs)){const p=nA(s.map(v=>v.tag._h));if(Rs===p)return;Rs=p}const i=t._popSideEffectQueue();t.headEntries().map(p=>p._sde).forEach(p=>{Object.entries(p).forEach(([v,b])=>{i[v]=b})});const o=(p,v,b)=>{v=`${p.renderId}:${v}`,p.entry&&(p.entry._sde[v]=b),delete i[v]};function a(p){const v=t.headEntries().find(y=>y._i===p._e),b={renderId:!p.key&&p._d?p._d:Su(p),$el:null,shouldRender:!0,tag:p,entry:v,markSideEffect:(y,_)=>o(b,y,_)};return b}const c=[],u={body:[],head:[]},l=p=>{t._elMap[p.renderId]=p.$el,c.push(p),o(p,"el",()=>{var v;(v=p.$el)==null||v.remove(),delete t._elMap[p.renderId]})};for(const p of s){if(await t.hooks.callHook("dom:beforeRenderTag",p),!p.shouldRender)continue;const{tag:v}=p;if(v.tag==="title"){r.title=v.textContent||"",c.push(p);continue}if(v.tag==="htmlAttrs"||v.tag==="bodyAttrs"){p.$el=r[v.tag==="htmlAttrs"?"documentElement":"body"],ao(p,!1,o),c.push(p);continue}if(p.$el=t._elMap[p.renderId],!p.$el&&v.key&&(p.$el=r.querySelector(`${(f=v.tagPosition)!=null&&f.startsWith("body")?"body":"head"} > ${v.tag}[data-h-${v._h}]`)),p.$el){p.tag._d&&ao(p),l(p);continue}u[(g=v.tagPosition)!=null&&g.startsWith("body")?"body":"head"].push(p)}const h={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(u).forEach(([p,v])=>{var y;if(!v.length)return;const b=(y=r==null?void 0:r[p])==null?void 0:y.children;if(!!b){for(const _ of[...b].reverse()){const A=_.tagName.toLowerCase();if(!YC.includes(A))continue;const N=_.getAttributeNames().reduce((M,se)=>({...M,[se]:_.getAttribute(se)}),{}),V={tag:A,props:N};_.innerHTML&&(V.innerHTML=_.innerHTML);const J=Su(V);let Q=v.findIndex(M=>(M==null?void 0:M.renderId)===J);if(Q===-1){const M=ty(V);Q=v.findIndex(se=>(se==null?void 0:se.tag._d)&&se.tag._d===M)}if(Q!==-1){const M=v[Q];M.$el=_,ao(M),l(M),delete v[Q]}}v.forEach(_=>{const A=_.tag.tagPosition||"head";h[A]=h[A]||r.createDocumentFragment(),_.$el||(_.$el=r.createElement(_.tag.tag),ao(_,!0)),h[A].appendChild(_.$el),l(_)})}}),h.head&&r.head.appendChild(h.head),h.bodyOpen&&r.body.insertBefore(h.bodyOpen,r.body.firstChild),h.bodyClose&&r.body.appendChild(h.bodyClose);for(const p of c)await t.hooks.callHook("dom:renderTag",p);Object.values(i).forEach(p=>p())}let xc=null;async function ry(t,e={}){function n(){return xc=null,ny(t,e)}const r=e.delayFn||(s=>setTimeout(s,10));return xc=xc||new Promise(s=>r(()=>s(n())))}const rA=t=>({hooks:{"entries:updated":function(e){if(typeof(t==null?void 0:t.document)>"u"&&typeof window>"u")return;let n=t==null?void 0:t.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),ry(e,{document:(t==null?void 0:t.document)||window.document,delayFn:n})}}});function sA(t){var e;return((e=t==null?void 0:t.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:e.getAttribute("content"))||!1}const vd={critical:2,high:9,low:12,base:-1,title:1,meta:10};function _d(t){if(typeof t.tagPriority=="number")return t.tagPriority;if(t.tag==="meta"){if(t.props.charset)return-2;if(t.props["http-equiv"]==="content-security-policy")return 0}const e=t.tagPriority||t.tag;return e in vd?vd[e]:10}const iA=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function oA(){return{hooks:{"tags:resolve":t=>{const e=n=>{var r;return(r=t.tags.find(s=>s._d===n))==null?void 0:r._p};for(const{prefix:n,offset:r}of iA)for(const s of t.tags.filter(i=>typeof i.tagPriority=="string"&&i.tagPriority.startsWith(n))){const i=e(s.tagPriority.replace(n,""));typeof i<"u"&&(s._p=i+r)}t.tags.sort((n,r)=>n._p-r._p).sort((n,r)=>_d(n)-_d(r))}}}}const aA=()=>({hooks:{"tags:resolve":t=>{const{tags:e}=t;let n=e.findIndex(s=>s.tag==="titleTemplate");const r=e.findIndex(s=>s.tag==="title");if(r!==-1&&n!==-1){const s=yd(e[n].textContent,e[r].textContent);s!==null?e[r].textContent=s||e[r].textContent:delete e[r]}else if(n!==-1){const s=yd(e[n].textContent);s!==null&&(e[n].textContent=s,e[n].tag="title",n=-1)}n!==-1&&delete e[n],t.tags=e.filter(Boolean)}}}),cA=()=>({hooks:{"tag:normalise":function({tag:t}){typeof t.props.body<"u"&&(t.tagPosition="bodyClose",delete t.props.body)}}}),uA=["link","style","script","noscript"],lA=()=>({hooks:{"tag:normalise":({tag:t,resolvedOptions:e})=>{e.experimentalHashHydration===!0&&(t._h=Su(t)),t.key&&uA.includes(t.tag)&&(t._h=ey(t.key),t.props[`data-h-${t._h}`]="")}}}),wd=["script","link","bodyAttrs"],hA=()=>{const t=(e,n)=>{const r={},s={};Object.entries(n.props).forEach(([o,a])=>{o.startsWith("on")&&typeof a=="function"?s[o]=a:r[o]=a});let i;return e==="dom"&&n.tag==="script"&&typeof r.src=="string"&&typeof s.onload<"u"&&(i=r.src,delete r.src),{props:r,eventHandlers:s,delayedSrc:i}};return{hooks:{"ssr:render":function(e){e.tags=e.tags.map(n=>(!wd.includes(n.tag)||!Object.entries(n.props).find(([r,s])=>r.startsWith("on")&&typeof s=="function")||(n.props=t("ssr",n).props),n))},"dom:beforeRenderTag":function(e){if(!wd.includes(e.tag.tag)||!Object.entries(e.tag.props).find(([i,o])=>i.startsWith("on")&&typeof o=="function"))return;const{props:n,eventHandlers:r,delayedSrc:s}=t("dom",e.tag);!Object.keys(r).length||(e.tag.props=n,e.tag._eventHandlers=r,e.tag._delayedSrc=s)},"dom:renderTag":function(e){const n=e.$el;if(!e.tag._eventHandlers||!n)return;const r=e.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(e.tag._eventHandlers).forEach(([s,i])=>{const o=`${e.tag._d||e.tag._p}:${s}`,a=s.slice(2).toLowerCase(),c=`data-h-${a}`;if(e.markSideEffect(o,()=>{}),n.hasAttribute(c))return;const u=i;n.setAttribute(c,""),r.addEventListener(a,u),e.entry&&(e.entry._sde[o]=()=>{r.removeEventListener(a,u),n.removeAttribute(c)})}),e.tag._delayedSrc&&n.setAttribute("src",e.tag._delayedSrc)}}}},fA=["templateParams","htmlAttrs","bodyAttrs"],dA=()=>({hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(n=>{t.props[n]&&(t.key=t.props[n],delete t.props[n])});const e=t.key?`${t.tag}:${t.key}`:ty(t);e&&(t._d=e)},"tags:resolve":function(t){const e={};t.tags.forEach(r=>{const s=r._d||r._p,i=e[s];if(i){let o=r==null?void 0:r.tagDuplicateStrategy;if(!o&&fA.includes(r.tag)&&(o="merge"),o==="merge"){const c=i.props;["class","style"].forEach(u=>{r.props[u]&&c[u]&&(u==="style"&&!c[u].endsWith(";")&&(c[u]+=";"),r.props[u]=`${c[u]} ${r.props[u]}`)}),e[s].props={...c,...r.props};return}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);return}const a=Object.keys(r.props).length;if((a===0||a===1&&typeof r.props["data-h-key"]<"u")&&!r.innerHTML&&!r.textContent){delete e[s];return}}e[s]=r});const n=[];Object.values(e).forEach(r=>{const s=r._duped;delete r._duped,n.push(r),s&&n.push(...s)}),t.tags=n}}});function co(t,e){function n(i){if(["s","pageTitle"].includes(i))return e.pageTitle;let o;return i.includes(".")?o=i.split(".").reduce((a,c)=>a&&a[c]||void 0,e):o=e[i],typeof o<"u"?o||"":!1}let r=t;try{r=decodeURI(t)}catch{}return(r.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(i=>{const o=n(i.slice(1));typeof o=="string"&&(t=t.replaceAll(new RegExp(`\\${i}(\\W|$)`,"g"),`${o}$1`).trim())}),e.separator&&(t.endsWith(e.separator)&&(t=t.slice(0,-e.separator.length).trim()),t.startsWith(e.separator)&&(t=t.slice(e.separator.length).trim()),t=t.replace(new RegExp(`\\${e.separator}\\s*\\${e.separator}`,"g"),e.separator)),t}function pA(){return{hooks:{"tags:resolve":t=>{var i;const{tags:e}=t,n=(i=e.find(o=>o.tag==="title"))==null?void 0:i.textContent,r=e.findIndex(o=>o.tag==="templateParams"),s=r!==-1?e[r].props:{};s.pageTitle=s.pageTitle||n||"";for(const o of e)if(["titleTemplate","title"].includes(o.tag)&&typeof o.textContent=="string")o.textContent=co(o.textContent,s);else if(o.tag==="meta"&&typeof o.props.content=="string")o.props.content=co(o.props.content,s);else if(o.tag==="link"&&typeof o.props.href=="string")o.props.href=co(o.props.href,s);else if(o.tag==="script"&&["application/json","application/ld+json"].includes(o.props.type)&&typeof o.innerHTML=="string")try{o.innerHTML=JSON.stringify(JSON.parse(o.innerHTML),(a,c)=>typeof c=="string"?co(c,s):c)}catch{}t.tags=e.filter(o=>o.tag!=="templateParams")}}}}const gA=typeof window<"u";let sy;const mA=t=>sy=t,yA=()=>sy;async function vA(t,e){const n={tag:t,props:{}};return t==="templateParams"?(n.props=e,n):["title","titleTemplate"].includes(t)?(n.textContent=e instanceof Promise?await e:e,n):typeof e=="string"?["script","noscript","style"].includes(t)?(t==="script"&&(/^(https?:)?\/\//.test(e)||e.startsWith("/"))?n.props.src=e:n.innerHTML=e,n):!1:(n.props=await wA(t,{...e}),n.props.children&&(n.props.innerHTML=n.props.children),delete n.props.children,Object.keys(n.props).filter(r=>tA.includes(r)).forEach(r=>{(!["innerHTML","textContent"].includes(r)||Zm.includes(n.tag))&&(n[r]=n.props[r]),delete n.props[r]}),["innerHTML","textContent"].forEach(r=>{if(n.tag==="script"&&typeof n[r]=="string"&&["application/ld+json","application/json"].includes(n.props.type))try{n[r]=JSON.parse(n[r])}catch{n[r]=""}typeof n[r]=="object"&&(n[r]=JSON.stringify(n[r]))}),n.props.class&&(n.props.class=_A(n.props.class)),n.props.content&&Array.isArray(n.props.content)?n.props.content.map(r=>({...n,props:{...n.props,content:r}})):n)}function _A(t){return typeof t=="object"&&!Array.isArray(t)&&(t=Object.keys(t).filter(e=>t[e])),(Array.isArray(t)?t.join(" "):t).split(" ").filter(e=>e.trim()).filter(Boolean).join(" ")}async function wA(t,e){for(const n of Object.keys(e)){const r=n.startsWith("data-");e[n]instanceof Promise&&(e[n]=await e[n]),String(e[n])==="true"?e[n]=r?"true":"":String(e[n])==="false"&&(r?e[n]="false":delete e[n])}return e}const bA=10;async function EA(t){const e=[];return Object.entries(t.resolvedInput).filter(([n,r])=>typeof r<"u"&&ZC.includes(n)).forEach(([n,r])=>{const s=XC(r);e.push(...s.map(i=>vA(n,i)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((n,r)=>(n._e=t._i,n._p=(t._i<<bA)+r,n))}const TA=()=>[dA(),oA(),pA(),aA(),lA(),hA(),cA()],IA=(t={})=>[rA({document:t==null?void 0:t.document,delayFn:t==null?void 0:t.domDelayFn})];function SA(t={}){const e=CA({...t,plugins:[...IA(t),...(t==null?void 0:t.plugins)||[]]});return t.experimentalHashHydration&&e.resolvedOptions.document&&(e._hash=sA(e.resolvedOptions.document)),mA(e),e}function CA(t={}){let e=[],n={},r=0;const s=JC();t!=null&&t.hooks&&s.addHooks(t.hooks),t.plugins=[...TA(),...(t==null?void 0:t.plugins)||[]],t.plugins.forEach(a=>a.hooks&&s.addHooks(a.hooks)),t.document=t.document||(gA?document:void 0);const i=()=>s.callHook("entries:updated",o),o={resolvedOptions:t,headEntries(){return e},get hooks(){return s},use(a){a.hooks&&s.addHooks(a.hooks)},push(a,c){const u={_i:r++,input:a,_sde:{}};return c!=null&&c.mode&&(u._m=c==null?void 0:c.mode),c!=null&&c.transform&&(u._t=c==null?void 0:c.transform),e.push(u),i(),{dispose(){e=e.filter(l=>l._i!==u._i?!0:(n={...n,...l._sde||{}},l._sde={},i(),!1))},patch(l){e=e.map(h=>(h._i===u._i&&(u.input=h.input=l,i()),h))}}},async resolveTags(){const a={tags:[],entries:[...e]};await s.callHook("entries:resolve",a);for(const c of a.entries){const u=c._t||(l=>l);if(c.resolvedInput=u(c.resolvedInput||c.input),c.resolvedInput)for(const l of await EA(c)){const h={tag:l,entry:c,resolvedOptions:o.resolvedOptions};await s.callHook("tag:normalise",h),a.tags.push(h.tag)}}return await s.callHook("tags:resolve",a),a.tags},_popSideEffectQueue(){const a={...n};return n={},a},_elMap:{}};return o.hooks.callHook("init",o),o}const AA=["useHead","useSeoMeta","useHeadSafe","useServerHead","useServerSeoMeta","useServerHeadSafe","useTagTitle","useTagBase","useTagMeta","useTagMetaFlat","useTagLink","useTagScript","useTagStyle","useTagNoscript","useHtmlAttrs","useBodyAttrs","useTitleTemplate","useServerTagTitle","useServerTagBase","useServerTagMeta","useServerTagMetaFlat","useServerTagLink","useServerTagScript","useServerTagStyle","useServerTagNoscript","useServerHtmlAttrs","useServerBodyAttrs","useServerTitleTemplate"];function RA(t){return typeof t=="function"?t():Dn(t)}function ta(t,e=""){if(t instanceof Promise)return t;const n=RA(t);return!t||!n?n:Array.isArray(n)?n.map(r=>ta(r,e)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([r,s])=>r==="titleTemplate"||r.startsWith("on")?[r,Dn(s)]:[r,ta(s,r)])):n}const kA=bl.startsWith("3"),OA=typeof window<"u",iy="usehead";function Bl(){return xg()&&Ct(iy)||yA()}function PA(t){return{install(n){kA&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(iy,t))}}.install}function NA(t={}){const e=SA({...t,domDelayFn:n=>setTimeout(()=>si(()=>n()),10),plugins:[DA(),...(t==null?void 0:t.plugins)||[]]});return e.install=PA(e),e}const DA=()=>({hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=ta(e.input)}}});function xA(t,e={}){const n=Bl(),r=fr(!1),s=fr({});lb(()=>{s.value=r.value?{}:ta(t)});const i=n.push(s.value,e);return ir(s,a=>{i.patch(a)}),xg()&&(vg(()=>{i.dispose()}),gg(()=>{r.value=!0}),pg(()=>{r.value=!1})),i}function LA(t,e={}){return Bl().push(t,e)}function oy(t,e={}){var r;const n=Bl();if(n){const s=OA||!!((r=n.resolvedOptions)!=null&&r.document);return e.mode==="server"&&s||e.mode==="client"&&!s?void 0:s?xA(t,e):LA(t,e)}}const MA=["injectHead"];[...MA,...AA];function UA(t,e){const n=NA(e||{}),r={unhead:n,install(s){bl.startsWith("3")&&(s.config.globalProperties.$head=n,s.provide("usehead",n))},use(s){n.use(s)},resolveTags(){return n.resolveTags()},headEntries(){return n.headEntries()},headTags(){return n.resolveTags()},push(s,i){return n.push(s,i)},addEntry(s,i){return n.push(s,i)},addHeadObjs(s,i){return n.push(s,i)},addReactiveEntry(s,i){const o=oy(s,i);return typeof o<"u"?o.dispose:()=>{}},removeHeadObjs(){},updateDOM(s,i){i?ny(n,{document:s}):ry(n,{delayFn:o=>setTimeout(()=>o(),50),document:s})},internalHooks:n.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return n.addHeadObjs=r.addHeadObjs,n.updateDOM=r.updateDOM,n.hooks.hook("dom:beforeRender",s=>{for(const i of r.hooks["before:dom"])i()===!1&&(s.shouldRender=!1)}),t&&r.addHeadObjs(t),r}const FA=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},$A={data(){return{articles:[]}},setup(){oy({title:"Jaxay Money Blog | Home",meta:[{name:"description",content:"Everything finance and budgeting related for young adults. Get top tips on saving money, investing, and building wealth. Take control of your financial future!"}],link:[{rel:"canonical",href:"https://jaxaym.github.io/Blog-AB/"}]})},computed:{...BC(["blogs"])},async created(){await this.$store.dispatch("initialize")}},Ma=t=>(rb("data-v-8dc7d226"),t=t(),sb(),t),BA={class:"container"},jA={class:"meta"},VA=Ma(()=>at("div",{class:"image"},null,-1)),HA={class:"info"},qA=Ma(()=>at("h1",{class:"center"},"Create your Blogs freely ",-1)),KA=yn(" Start now creating your own blogs. "),WA={class:"article"},zA=Ma(()=>at("h2",null,"Discover",-1)),GA={class:"articles"},QA={class:"first-letter"},JA=yn("View Blog Post"),XA=Ma(()=>at("div",{class:"footer"},null,-1));function YA(t,e,n,r,s,i){const o=Bo("RouterLink"),a=Bo("router-link");return Ot(),er("div",BA,[at("div",jA,[VA,at("div",HA,[qA,at("p",null,[Ne(o,{class:"center",to:"/feed"},{default:Yn(()=>[KA]),_:1})])])]),at("main",WA,[zA,(Ot(!0),er(ct,null,Eb(t.blogs,c=>(Ot(),er("div",GA,[at("h3",null,mc(c.attributes.Title),1),at("p",null,[at("span",QA,mc(c.attributes.Description[0]),1),yn(" "+mc(c.attributes.Description.split(`
`)[0]),1)]),Ne(a,{class:"link",to:`/${c.id}-${c.attributes.Title.replace(/:|!|'|\?|,/g,"").replace(/\s+/g,"-").toLowerCase()}`},{default:Yn(()=>[JA]),_:2},1032,["to"])]))),256))]),XA])}const bd=FA($A,[["render",YA],["__scopeId","data-v-8dc7d226"]]),ZA=()=>Er(()=>import("./Create.71e54657.js"),["assets/Create.71e54657.js","assets/Create.4b099128.css"]),eR=()=>Er(()=>import("./Register.0f95f793.js"),["assets/Register.0f95f793.js","assets/Register.ff9dc034.css"]),tR=()=>Er(()=>import("./Login.c3c9c5d8.js"),[]),nR=()=>Er(()=>import("./Dashboard.650f31c4.js"),["assets/Dashboard.650f31c4.js","assets/Dashboard.3be6eb3b.css"]),rR=()=>Er(()=>import("./Edit.8a71d29d.js"),[]),Ed=()=>Er(()=>import("./Preview.aa18f17c.js"),["assets/Preview.aa18f17c.js","assets/Preview.e92a11f0.css"]),sR=()=>Er(()=>import("./Blogpost.e7fe670f.js"),["assets/Blogpost.e7fe670f.js","assets/Blogpost.562bf0ba.css"]),Ht="",iR=[{path:`${Ht}/`,component:bd},{path:`${Ht}/feed`,component:nR,name:"feed"},{path:`${Ht}/home/`,component:bd},{path:`${Ht}/login/`,component:tR},{path:`${Ht}/register/`,component:eR},{path:`${Ht}/new-blog`,component:ZA},{path:`${Ht}/edit-video`,component:rR,name:"edit"},{path:`${Ht}/view-post/`,component:Ed},{path:`${Ht}/view-post/:id`,component:Ed,name:"viewpost"},{path:`${Ht}/:slug`,name:"blogpost",component:sR,props:t=>({id:parseInt(t.params.slug.split("-")[0])}),beforeEnter:(t,e,n)=>{if(t.meta.title=t.params.slug.charAt(2).toUpperCase()+t.params.slug.slice(3).replace(/-+/g," "),t.params.slug.includes(" ")){const r=t.params.slug.replace(" ","-");n({name:t.name,params:{slug:r}})}else n()}}];var oR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,jl=jl||{},X=oR||self;function na(){}function Ua(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function xi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function aR(t){return Object.prototype.hasOwnProperty.call(t,Lc)&&t[Lc]||(t[Lc]=++cR)}var Lc="closure_uid_"+(1e9*Math.random()>>>0),cR=0;function uR(t,e,n){return t.call.apply(t.bind,arguments)}function lR(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function tt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?tt=uR:tt=lR,tt.apply(null,arguments)}function uo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Je(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Kn(){this.s=this.s,this.o=this.o}var hR=0;Kn.prototype.s=!1;Kn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),hR!=0)&&aR(this)};Kn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ay=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Vl(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Td(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ua(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function nt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}nt.prototype.h=function(){this.defaultPrevented=!0};var fR=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{X.addEventListener("test",na,e),X.removeEventListener("test",na,e)}catch{}return t}();function ra(t){return/^[\s\xa0]*$/.test(t)}var Id=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Mc(t,e){return t<e?-1:t>e?1:0}function Fa(){var t=X.navigator;return t&&(t=t.userAgent)?t:""}function Wt(t){return Fa().indexOf(t)!=-1}function Hl(t){return Hl[" "](t),t}Hl[" "]=na;function dR(t){var e=mR;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var pR=Wt("Opera"),es=Wt("Trident")||Wt("MSIE"),cy=Wt("Edge"),Cu=cy||es,uy=Wt("Gecko")&&!(Fa().toLowerCase().indexOf("webkit")!=-1&&!Wt("Edge"))&&!(Wt("Trident")||Wt("MSIE"))&&!Wt("Edge"),gR=Fa().toLowerCase().indexOf("webkit")!=-1&&!Wt("Edge");function ly(){var t=X.document;return t?t.documentMode:void 0}var sa;e:{var Uc="",Fc=function(){var t=Fa();if(uy)return/rv:([^\);]+)(\)|;)/.exec(t);if(cy)return/Edge\/([\d\.]+)/.exec(t);if(es)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(gR)return/WebKit\/(\S+)/.exec(t);if(pR)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Fc&&(Uc=Fc?Fc[1]:""),es){var $c=ly();if($c!=null&&$c>parseFloat(Uc)){sa=String($c);break e}}sa=Uc}var mR={};function yR(){return dR(function(){let t=0;const e=Id(String(sa)).split("."),n=Id("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=Mc(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Mc(s[2].length==0,i[2].length==0)||Mc(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var Au;if(X.document&&es){var Sd=ly();Au=Sd||parseInt(sa,10)||void 0}else Au=void 0;var vR=Au;function di(t,e){if(nt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(uy){e:{try{Hl(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:_R[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&di.X.h.call(this)}}Je(di,nt);var _R={2:"touch",3:"pen",4:"mouse"};di.prototype.h=function(){di.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Li="closure_listenable_"+(1e6*Math.random()|0),wR=0;function bR(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=s,this.key=++wR,this.ba=this.ea=!1}function $a(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ql(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function hy(t){const e={};for(const n in t)e[n]=t[n];return e}const Cd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fy(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Cd.length;i++)n=Cd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ba(t){this.src=t,this.g={},this.h=0}Ba.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ku(t,e,r,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new bR(e,this.src,i,!!r,s),e.ea=n,t.push(e)),e};function Ru(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=ay(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&($a(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ku(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==r)return s}return-1}var Kl="closure_lm_"+(1e6*Math.random()|0),Bc={};function dy(t,e,n,r,s){if(r&&r.once)return gy(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)dy(t,e[i],n,r,s);return null}return n=Gl(n),t&&t[Li]?t.N(e,n,xi(r)?!!r.capture:!!r,s):py(t,e,n,!1,r,s)}function py(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=xi(s)?!!s.capture:!!s,a=zl(t);if(a||(t[Kl]=a=new Ba(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=ER(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)fR||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(yy(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ER(){function t(n){return e.call(t.src,t.listener,n)}const e=TR;return t}function gy(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)gy(t,e[i],n,r,s);return null}return n=Gl(n),t&&t[Li]?t.O(e,n,xi(r)?!!r.capture:!!r,s):py(t,e,n,!0,r,s)}function my(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)my(t,e[i],n,r,s);else r=xi(r)?!!r.capture:!!r,n=Gl(n),t&&t[Li]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ku(i,n,r,s),-1<n&&($a(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=zl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ku(e,n,r,s)),(n=-1<t?e[t]:null)&&Wl(n))}function Wl(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Li])Ru(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(yy(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=zl(e))?(Ru(n,t),n.h==0&&(n.src=null,e[Kl]=null)):$a(t)}}}function yy(t){return t in Bc?Bc[t]:Bc[t]="on"+t}function TR(t,e){if(t.ba)t=!0;else{e=new di(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Wl(t),t=n.call(r,e)}return t}function zl(t){return t=t[Kl],t instanceof Ba?t:null}var jc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gl(t){return typeof t=="function"?t:(t[jc]||(t[jc]=function(e){return t.handleEvent(e)}),t[jc])}function Ke(){Kn.call(this),this.i=new Ba(this),this.P=this,this.I=null}Je(Ke,Kn);Ke.prototype[Li]=!0;Ke.prototype.removeEventListener=function(t,e,n,r){my(this,t,e,n,r)};function Qe(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new nt(e,t);else if(e instanceof nt)e.target=e.target||t;else{var s=e;e=new nt(r,t),fy(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=lo(o,r,!0,e)&&s}if(o=e.g=t,s=lo(o,r,!0,e)&&s,s=lo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=lo(o,r,!1,e)&&s}Ke.prototype.M=function(){if(Ke.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)$a(n[r]);delete t.g[e],t.h--}}this.I=null};Ke.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ke.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function lo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Ru(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Ql=X.JSON.stringify;function IR(){var t=wy;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class SR{constructor(){this.h=this.g=null}add(e,n){const r=vy.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var vy=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new CR,t=>t.reset());class CR{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function AR(t){X.setTimeout(()=>{throw t},0)}function _y(t,e){Ou||RR(),Pu||(Ou(),Pu=!0),wy.add(t,e)}var Ou;function RR(){var t=X.Promise.resolve(void 0);Ou=function(){t.then(kR)}}var Pu=!1,wy=new SR;function kR(){for(var t;t=IR();){try{t.h.call(t.g)}catch(n){AR(n)}var e=vy;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Pu=!1}function ja(t,e){Ke.call(this),this.h=t||1,this.g=e||X,this.j=tt(this.lb,this),this.l=Date.now()}Je(ja,Ke);F=ja.prototype;F.ca=!1;F.R=null;F.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Qe(this,"tick"),this.ca&&(Jl(this),this.start()))}};F.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Jl(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}F.M=function(){ja.X.M.call(this),Jl(this),delete this.g};function Xl(t,e,n){if(typeof t=="function")n&&(t=tt(t,n));else if(t&&typeof t.handleEvent=="function")t=tt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:X.setTimeout(t,e||0)}function by(t){t.g=Xl(()=>{t.g=null,t.i&&(t.i=!1,by(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class OR extends Kn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:by(this)}M(){super.M(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pi(t){Kn.call(this),this.h=t,this.g={}}Je(pi,Kn);var Ad=[];function Ey(t,e,n,r){Array.isArray(n)||(n&&(Ad[0]=n.toString()),n=Ad);for(var s=0;s<n.length;s++){var i=dy(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Ty(t){ql(t.g,function(e,n){this.g.hasOwnProperty(n)&&Wl(e)},t),t.g={}}pi.prototype.M=function(){pi.X.M.call(this),Ty(this)};pi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Va(){this.g=!0}Va.prototype.Aa=function(){this.g=!1};function PR(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function NR(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function $r(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+xR(t,n)+(r?" "+r:"")})}function DR(t,e){t.info(function(){return"TIMEOUT: "+e})}Va.prototype.info=function(){};function xR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Ql(n)}catch{return e}}var Ir={},Rd=null;function Ha(){return Rd=Rd||new Ke}Ir.Pa="serverreachability";function Iy(t){nt.call(this,Ir.Pa,t)}Je(Iy,nt);function gi(t){const e=Ha();Qe(e,new Iy(e))}Ir.STAT_EVENT="statevent";function Sy(t,e){nt.call(this,Ir.STAT_EVENT,t),this.stat=e}Je(Sy,nt);function ut(t){const e=Ha();Qe(e,new Sy(e,t))}Ir.Qa="timingevent";function Cy(t,e){nt.call(this,Ir.Qa,t),this.size=e}Je(Cy,nt);function Mi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){t()},e)}var qa={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Ay={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Yl(){}Yl.prototype.h=null;function kd(t){return t.h||(t.h=t.i())}function Ry(){}var Ui={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Zl(){nt.call(this,"d")}Je(Zl,nt);function eh(){nt.call(this,"c")}Je(eh,nt);var Nu;function Ka(){}Je(Ka,Yl);Ka.prototype.g=function(){return new XMLHttpRequest};Ka.prototype.i=function(){return{}};Nu=new Ka;function Fi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new pi(this),this.O=LR,t=Cu?125:void 0,this.T=new ja(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ky}function ky(){this.i=null,this.g="",this.h=!1}var LR=45e3,Du={},ia={};F=Fi.prototype;F.setTimeout=function(t){this.O=t};function xu(t,e,n){t.K=1,t.v=za(fn(e)),t.s=n,t.P=!0,Oy(t,null)}function Oy(t,e){t.F=Date.now(),$i(t),t.A=fn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),Fy(n.i,"t",r),t.C=0,n=t.l.H,t.h=new ky,t.g=iv(t.l,n?e:null,!t.s),0<t.N&&(t.L=new OR(tt(t.La,t,t.g),t.N)),Ey(t.S,t.g,"readystatechange",t.ib),e=t.H?hy(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),gi(),PR(t.j,t.u,t.A,t.m,t.U,t.s)}F.ib=function(t){t=t.target;const e=this.L;e&&on(t)==3?e.l():this.La(t)};F.La=function(t){try{if(t==this.g)e:{const l=on(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Cu||this.g&&(this.h.h||this.g.fa()||Dd(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?gi(3):gi(2)),Wa(this);var n=this.g.aa();this.Y=n;t:if(Py(this)){var r=Dd(this.g);t="";var s=r.length,i=on(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){tr(this),Qs(this);var o="";break t}this.h.i=new X.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,NR(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ra(a)){var u=a;break t}}u=null}if(n=u)$r(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Lu(this,n);else{this.i=!1,this.o=3,ut(12),tr(this),Qs(this);break e}}this.P?(Ny(this,l,o),Cu&&this.i&&l==3&&(Ey(this.S,this.T,"tick",this.hb),this.T.start())):($r(this.j,this.m,o,null),Lu(this,o)),l==4&&tr(this),this.i&&!this.I&&(l==4?tv(this.l,this):(this.i=!1,$i(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ut(12)):(this.o=0,ut(13)),tr(this),Qs(this)}}}catch{}finally{}};function Py(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Ny(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=MR(t,n),s==ia){e==4&&(t.o=4,ut(14),r=!1),$r(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Du){t.o=4,ut(15),$r(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else $r(t.j,t.m,s,null),Lu(t,s);Py(t)&&s!=ia&&s!=Du&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ut(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ah(e),e.K=!0,ut(11))):($r(t.j,t.m,n,"[Invalid Chunked Response]"),tr(t),Qs(t))}F.hb=function(){if(this.g){var t=on(this.g),e=this.g.fa();this.C<e.length&&(Wa(this),Ny(this,t,e),this.i&&t!=4&&$i(this))}};function MR(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ia:(n=Number(e.substring(n,r)),isNaN(n)?Du:(r+=1,r+n>e.length?ia:(e=e.substr(r,n),t.C=r+n,e)))}F.cancel=function(){this.I=!0,tr(this)};function $i(t){t.V=Date.now()+t.O,Dy(t,t.O)}function Dy(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Mi(tt(t.gb,t),e)}function Wa(t){t.B&&(X.clearTimeout(t.B),t.B=null)}F.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(DR(this.j,this.A),this.K!=2&&(gi(),ut(17)),tr(this),this.o=2,Qs(this)):Dy(this,this.V-t)};function Qs(t){t.l.G==0||t.I||tv(t.l,t)}function tr(t){Wa(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Jl(t.T),Ty(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Lu(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Mu(n.h,t))){if(!t.J&&Mu(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ca(n),Ja(n);else break e;oh(n),ut(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=Mi(tt(n.cb,n),6e3));if(1>=jy(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else nr(n,11)}else if((t.J||n.g==t)&&ca(n),!ra(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const p=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=r.h;i.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(th(i,i.h),i.h=null))}if(r.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,Re(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=sv(r,r.H?r.ka:null,r.V),o.J){Vy(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Wa(a),$i(a)),r.g=o}else Zy(r);0<n.i.length&&Xa(n)}else u[0]!="stop"&&u[0]!="close"||nr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?nr(n,7):ih(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}gi(4)}catch{}}function UR(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ua(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function FR(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ua(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function xy(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ua(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=FR(t),r=UR(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Ly=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $R(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function ur(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ur){this.h=e!==void 0?e:t.h,oa(this,t.j),this.s=t.s,this.g=t.g,aa(this,t.m),this.l=t.l,e=t.i;var n=new mi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Od(this,n),this.o=t.o}else t&&(n=String(t).match(Ly))?(this.h=!!e,oa(this,n[1]||"",!0),this.s=Us(n[2]||""),this.g=Us(n[3]||"",!0),aa(this,n[4]),this.l=Us(n[5]||"",!0),Od(this,n[6]||"",!0),this.o=Us(n[7]||"")):(this.h=!!e,this.i=new mi(null,this.h))}ur.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Fs(e,Pd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Fs(e,Pd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Fs(n,n.charAt(0)=="/"?VR:jR,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Fs(n,qR)),t.join("")};function fn(t){return new ur(t)}function oa(t,e,n){t.j=n?Us(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function aa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Od(t,e,n){e instanceof mi?(t.i=e,KR(t.i,t.h)):(n||(e=Fs(e,HR)),t.i=new mi(e,t.h))}function Re(t,e,n){t.i.set(e,n)}function za(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Us(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Fs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,BR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function BR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Pd=/[#\/\?@]/g,jR=/[#\?:]/g,VR=/[#\?]/g,HR=/[#\?@]/g,qR=/#/g;function mi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Wn(t){t.g||(t.g=new Map,t.h=0,t.i&&$R(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=mi.prototype;F.add=function(t,e){Wn(this),this.i=null,t=ys(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function My(t,e){Wn(t),e=ys(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Uy(t,e){return Wn(t),e=ys(t,e),t.g.has(e)}F.forEach=function(t,e){Wn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};F.oa=function(){Wn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};F.W=function(t){Wn(this);let e=[];if(typeof t=="string")Uy(this,t)&&(e=e.concat(this.g.get(ys(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return Wn(this),this.i=null,t=ys(this,t),Uy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Fy(t,e,n){My(t,e),0<n.length&&(t.i=null,t.g.set(ys(t,e),Vl(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function ys(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function KR(t,e){e&&!t.j&&(Wn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(My(this,r),Fy(this,s,n))},t)),t.j=e}var WR=class{constructor(t,e){this.h=t,this.g=e}};function $y(t){this.l=t||zR,X.PerformanceNavigationTiming?(t=X.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(X.g&&X.g.Ga&&X.g.Ga()&&X.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var zR=10;function By(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function jy(t){return t.h?1:t.g?t.g.size:0}function Mu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function th(t,e){t.g?t.g.add(e):t.h=e}function Vy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}$y.prototype.cancel=function(){if(this.i=Hy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Hy(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Vl(t.i)}function nh(){}nh.prototype.stringify=function(t){return X.JSON.stringify(t,void 0)};nh.prototype.parse=function(t){return X.JSON.parse(t,void 0)};function GR(){this.g=new nh}function QR(t,e,n){const r=n||"";try{xy(t,function(s,i){let o=s;xi(s)&&(o=Ql(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function JR(t,e){const n=new Va;if(X.Image){const r=new Image;r.onload=uo(ho,n,r,"TestLoadImage: loaded",!0,e),r.onerror=uo(ho,n,r,"TestLoadImage: error",!1,e),r.onabort=uo(ho,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=uo(ho,n,r,"TestLoadImage: timeout",!1,e),X.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ho(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Bi(t){this.l=t.ac||null,this.j=t.jb||!1}Je(Bi,Yl);Bi.prototype.g=function(){return new Ga(this.l,this.j)};Bi.prototype.i=function(t){return function(){return t}}({});function Ga(t,e){Ke.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=rh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Je(Ga,Ke);var rh=0;F=Ga.prototype;F.open=function(t,e){if(this.readyState!=rh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,yi(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||X).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ji(this)),this.readyState=rh};F.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,yi(this)),this.g&&(this.readyState=3,yi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof X.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qy(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function qy(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}F.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ji(this):yi(this),this.readyState==3&&qy(this)}};F.Va=function(t){this.g&&(this.response=this.responseText=t,ji(this))};F.Ua=function(t){this.g&&(this.response=t,ji(this))};F.ga=function(){this.g&&ji(this)};function ji(t){t.readyState=4,t.l=null,t.j=null,t.A=null,yi(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function yi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ga.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var XR=X.JSON.parse;function Pe(t){Ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ky,this.K=this.L=!1}Je(Pe,Ke);var Ky="",YR=/^https?$/i,ZR=["POST","PUT"];F=Pe.prototype;F.Ka=function(t){this.L=t};F.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Nu.g(),this.C=this.u?kd(this.u):kd(Nu),this.g.onreadystatechange=tt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Nd(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=X.FormData&&t instanceof X.FormData,!(0<=ay(ZR,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Gy(this),0<this.B&&((this.K=ek(this.g))?(this.g.timeout=this.B,this.g.ontimeout=tt(this.qa,this)):this.A=Xl(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Nd(this,i)}};function ek(t){return es&&yR()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.qa=function(){typeof jl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Qe(this,"timeout"),this.abort(8))};function Nd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Wy(t),Qa(t)}function Wy(t){t.D||(t.D=!0,Qe(t,"complete"),Qe(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Qe(this,"complete"),Qe(this,"abort"),Qa(this))};F.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Qa(this,!0)),Pe.X.M.call(this)};F.Ha=function(){this.s||(this.F||this.v||this.l?zy(this):this.fb())};F.fb=function(){zy(this)};function zy(t){if(t.h&&typeof jl<"u"&&(!t.C[1]||on(t)!=4||t.aa()!=2)){if(t.v&&on(t)==4)Xl(t.Ha,0,t);else if(Qe(t,"readystatechange"),on(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(Ly)[1]||null;if(!s&&X.self&&X.self.location){var i=X.self.location.protocol;s=i.substr(0,i.length-1)}r=!YR.test(s?s.toLowerCase():"")}n=r}if(n)Qe(t,"complete"),Qe(t,"success");else{t.m=6;try{var o=2<on(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Wy(t)}}finally{Qa(t)}}}}function Qa(t,e){if(t.g){Gy(t);const n=t.g,r=t.C[0]?na:null;t.g=null,t.C=null,e||Qe(t,"ready");try{n.onreadystatechange=r}catch{}}}function Gy(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(X.clearTimeout(t.A),t.A=null)}function on(t){return t.g?t.g.readyState:0}F.aa=function(){try{return 2<on(this)?this.g.status:-1}catch{return-1}};F.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),XR(e)}};function Dd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ky:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}F.Ea=function(){return this.m};F.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Qy(t){let e="";return ql(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function sh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Qy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Re(t,e,n))}function ks(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Jy(t){this.Ca=0,this.i=[],this.j=new Va,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ks("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ks("baseRetryDelayMs",5e3,t),this.bb=ks("retryDelaySeedMs",1e4,t),this.$a=ks("forwardChannelMaxRetries",2,t),this.ta=ks("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new $y(t&&t.concurrentRequestLimit),this.Fa=new GR,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}F=Jy.prototype;F.ma=8;F.G=1;function ih(t){if(Xy(t),t.G==3){var e=t.U++,n=fn(t.F);Re(n,"SID",t.I),Re(n,"RID",e),Re(n,"TYPE","terminate"),Vi(t,n),e=new Fi(t,t.j,e,void 0),e.K=2,e.v=za(fn(n)),n=!1,X.navigator&&X.navigator.sendBeacon&&(n=X.navigator.sendBeacon(e.v.toString(),"")),!n&&X.Image&&(new Image().src=e.v,n=!0),n||(e.g=iv(e.l,null),e.g.da(e.v)),e.F=Date.now(),$i(e)}rv(t)}function Ja(t){t.g&&(ah(t),t.g.cancel(),t.g=null)}function Xy(t){Ja(t),t.u&&(X.clearTimeout(t.u),t.u=null),ca(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&X.clearTimeout(t.m),t.m=null)}function Xa(t){By(t.h)||t.m||(t.m=!0,_y(t.Ja,t),t.C=0)}function tk(t,e){return jy(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Mi(tt(t.Ja,t,e),nv(t,t.C)),t.C++,!0)}F.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new Fi(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=hy(i),fy(i,this.S)):i=this.S),this.o!==null||this.N||(s.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Yy(this,s,e),n=fn(this.F),Re(n,"RID",t),Re(n,"CVER",22),this.D&&Re(n,"X-HTTP-Session-Id",this.D),Vi(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Qy(i)))+"&"+e:this.o&&sh(n,this.o,i)),th(this.h,s),this.Ya&&Re(n,"TYPE","init"),this.O?(Re(n,"$req",e),Re(n,"SID","null"),s.Z=!0,xu(s,n,null)):xu(s,n,e),this.G=2}}else this.G==3&&(t?xd(this,t):this.i.length==0||By(this.h)||xd(this))};function xd(t,e){var n;e?n=e.m:n=t.U++;const r=fn(t.F);Re(r,"SID",t.I),Re(r,"RID",n),Re(r,"AID",t.T),Vi(t,r),t.o&&t.s&&sh(r,t.o,t.s),n=new Fi(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Yy(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),th(t.h,n),xu(n,r,e)}function Vi(t,e){t.ia&&ql(t.ia,function(n,r){Re(e,r,n)}),t.l&&xy({},function(n,r){Re(e,r,n)})}function Yy(t,e,n){n=Math.min(t.i.length,n);var r=t.l?tt(t.l.Ra,t.l,t):null;e:{var s=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=s[c].h;const l=s[c].g;if(u-=i,0>u)i=Math.max(0,s[c].h-100),a=!1;else try{QR(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function Zy(t){t.g||t.u||(t.Z=1,_y(t.Ia,t),t.A=0)}function oh(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Mi(tt(t.Ia,t),nv(t,t.A)),t.A++,!0)}F.Ia=function(){if(this.u=null,ev(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Mi(tt(this.eb,this),t)}};F.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ut(10),Ja(this),ev(this))};function ah(t){t.B!=null&&(X.clearTimeout(t.B),t.B=null)}function ev(t){t.g=new Fi(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=fn(t.sa);Re(e,"RID","rpc"),Re(e,"SID",t.I),Re(e,"CI",t.L?"0":"1"),Re(e,"AID",t.T),Re(e,"TYPE","xmlhttp"),Vi(t,e),t.o&&t.s&&sh(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=za(fn(e)),n.s=null,n.P=!0,Oy(n,t)}F.cb=function(){this.v!=null&&(this.v=null,Ja(this),oh(this),ut(19))};function ca(t){t.v!=null&&(X.clearTimeout(t.v),t.v=null)}function tv(t,e){var n=null;if(t.g==e){ca(t),ah(t),t.g=null;var r=2}else if(Mu(t.h,e))n=e.D,Vy(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=Ha(),Qe(r,new Cy(r,n)),Xa(t)}else Zy(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(r==1&&tk(t,e)||r==2&&oh(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:nr(t,5);break;case 4:nr(t,10);break;case 3:nr(t,6);break;default:nr(t,2)}}}function nv(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function nr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=tt(t.kb,t);n||(n=new ur("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||oa(n,"https"),za(n)),JR(n.toString(),r)}else ut(2);t.G=0,t.l&&t.l.va(e),rv(t),Xy(t)}F.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function rv(t){if(t.G=0,t.la=[],t.l){const e=Hy(t.h);(e.length!=0||t.i.length!=0)&&(Td(t.la,e),Td(t.la,t.i),t.h.i.length=0,Vl(t.i),t.i.length=0),t.l.ua()}}function sv(t,e,n){var r=n instanceof ur?fn(n):new ur(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),aa(r,r.m);else{var s=X.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new ur(null,void 0);r&&oa(i,r),e&&(i.g=e),s&&aa(i,s),n&&(i.l=n),r=i}return n=t.D,e=t.za,n&&e&&Re(r,n,e),Re(r,"VER",t.ma),Vi(t,r),r}function iv(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Pe(new Bi({jb:!0})):new Pe(t.ra),e.Ka(t.H),e}function ov(){}F=ov.prototype;F.xa=function(){};F.wa=function(){};F.va=function(){};F.ua=function(){};F.Ra=function(){};function ua(){if(es&&!(10<=Number(vR)))throw Error("Environmental error: no available transport.")}ua.prototype.g=function(t,e){return new Et(t,e)};function Et(t,e){Ke.call(this),this.g=new Jy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!ra(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ra(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new vs(this)}Je(Et,Ke);Et.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ut(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=sv(t,null,t.V),Xa(t)};Et.prototype.close=function(){ih(this.g)};Et.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ql(t),t=n);e.i.push(new WR(e.ab++,t)),e.G==3&&Xa(e)};Et.prototype.M=function(){this.g.l=null,delete this.j,ih(this.g),delete this.g,Et.X.M.call(this)};function av(t){Zl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Je(av,Zl);function cv(){eh.call(this),this.status=1}Je(cv,eh);function vs(t){this.g=t}Je(vs,ov);vs.prototype.xa=function(){Qe(this.g,"a")};vs.prototype.wa=function(t){Qe(this.g,new av(t))};vs.prototype.va=function(t){Qe(this.g,new cv)};vs.prototype.ua=function(){Qe(this.g,"b")};ua.prototype.createWebChannel=ua.prototype.g;Et.prototype.send=Et.prototype.u;Et.prototype.open=Et.prototype.m;Et.prototype.close=Et.prototype.close;qa.NO_ERROR=0;qa.TIMEOUT=8;qa.HTTP_ERROR=6;Ay.COMPLETE="complete";Ry.EventType=Ui;Ui.OPEN="a";Ui.CLOSE="b";Ui.ERROR="c";Ui.MESSAGE="d";Ke.prototype.listen=Ke.prototype.N;Pe.prototype.listenOnce=Pe.prototype.O;Pe.prototype.getLastError=Pe.prototype.Oa;Pe.prototype.getLastErrorCode=Pe.prototype.Ea;Pe.prototype.getStatus=Pe.prototype.aa;Pe.prototype.getResponseJson=Pe.prototype.Sa;Pe.prototype.getResponseText=Pe.prototype.fa;Pe.prototype.send=Pe.prototype.da;Pe.prototype.setWithCredentials=Pe.prototype.Ka;var nk=function(){return new ua},rk=function(){return Ha()},Vc=qa,sk=Ay,ik=Ir,Ld={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},ok=Bi,fo=Ry,ak=Pe;const Md="@firebase/firestore";/**
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
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
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
 */let _s="9.13.0";/**
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
 */const yr=new Tl("@firebase/firestore");function Ud(){return yr.logLevel}function j(t,...e){if(yr.logLevel<=fe.DEBUG){const n=e.map(ch);yr.debug(`Firestore (${_s}): ${t}`,...n)}}function dn(t,...e){if(yr.logLevel<=fe.ERROR){const n=e.map(ch);yr.error(`Firestore (${_s}): ${t}`,...n)}}function Uu(t,...e){if(yr.logLevel<=fe.WARN){const n=e.map(ch);yr.warn(`Firestore (${_s}): ${t}`,...n)}}function ch(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${_s}) INTERNAL ASSERTION FAILED: `+t;throw dn(e),new Error(e)}function Se(t,e){t||ee()}function re(t,e){return t}/**
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
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Zt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Un{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class uv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ck{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class uk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class lk{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Un;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Un,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Un)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new uv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new Xe(e)}}class hk{constructor(e,n,r,s){this.h=e,this.l=n,this.m=r,this.g=s,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Se(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class fk{constructor(e,n,r,s){this.h=e,this.l=n,this.m=r,this.g=s}getToken(){return Promise.resolve(new hk(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pk{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?s(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.A=n.token,new dk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function gk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class lv{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=gk(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function ts(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ue(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oe(e)}static min(){return new oe(new Ue(0,0))}static max(){return new oe(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class vi{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return vi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ke extends vi{construct(e,n,r){return new ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const mk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends vi{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return mk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ye(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new z(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new z(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new z(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new z(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(ke.fromString(e))}static fromName(e){return new K(ke.fromString(e).popFirst(5))}static empty(){return new K(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new ke(e.slice()))}}function yk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=oe.fromTimestamp(r===1e9?new Ue(n+1,0):new Ue(n,r));return new jn(s,K.empty(),e)}function vk(t){return new jn(t.readTime,t.key,-1)}class jn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new jn(oe.min(),K.empty(),-1)}static max(){return new jn(oe.max(),K.empty(),-1)}}function _k(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
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
 */const wk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Hi(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==wk)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,r)=>{n(e)})}static reject(e){return new k((n,r)=>{r(e)})}static waitFor(e){return new k((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=k.resolve(!1);for(const r of e)n=n.next(s=>s?k.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new k((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(e,n){return new k((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function qi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class uh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function Fd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Sr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */uh.at=-1;class Be{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new po(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new po(this.root,e,this.comparator,!1)}getReverseIterator(){return new po(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new po(this.root,e,this.comparator,!0)}}class po{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:ze.RED,this.left=s!=null?s:ze.EMPTY,this.right=i!=null?i:ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ze(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(t,e,n,r,s){return this}insert(t,e,n){return new ze(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Fe{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new $d(this.data.getIterator())}getIteratorFrom(e){return new $d(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Fe(this.comparator);return n.data=e,n}}class $d{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class At{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new At([])}unionWith(e){let n=new Fe(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new At(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ts(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new st(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const Ek=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vn(t){if(Se(!!t),typeof t=="string"){let e=0;const n=Ek.exec(t);if(Se(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ns(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
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
 */function fv(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function dv(t){const e=t.mapValue.fields.__previous_value__;return fv(e)?dv(e):e}function _i(t){const e=Vn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
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
 */class Tk{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class wi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new wi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof wi&&e.projectId===this.projectId&&e.database===this.database}}function Ya(t){return t==null}function la(t){return t===0&&1/t==-1/0}function Ik(t){return typeof t=="number"&&Number.isInteger(t)&&!la(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const go={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function vr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?fv(t)?4:Sk(t)?9007199254740991:10:ee()}function Yt(t,e){if(t===e)return!0;const n=vr(t);if(n!==vr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _i(t).isEqual(_i(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Vn(r.timestampValue),o=Vn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return ns(r.bytesValue).isEqual(ns(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Le(r.geoPointValue.latitude)===Le(s.geoPointValue.latitude)&&Le(r.geoPointValue.longitude)===Le(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Le(r.integerValue)===Le(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Le(r.doubleValue),o=Le(s.doubleValue);return i===o?la(i)===la(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return ts(t.arrayValue.values||[],e.arrayValue.values||[],Yt);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Fd(i)!==Fd(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Yt(i[a],o[a])))return!1;return!0}(t,e);default:return ee()}}function bi(t,e){return(t.values||[]).find(n=>Yt(n,e))!==void 0}function rs(t,e){if(t===e)return 0;const n=vr(t),r=vr(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Le(s.integerValue||s.doubleValue),a=Le(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Bd(t.timestampValue,e.timestampValue);case 4:return Bd(_i(t),_i(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(s,i){const o=ns(s),a=ns(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=de(o[c],a[c]);if(u!==0)return u}return de(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=de(Le(s.latitude),Le(i.latitude));return o!==0?o:de(Le(s.longitude),Le(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=rs(o[c],a[c]);if(u)return u}return de(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===go.mapValue&&i===go.mapValue)return 0;if(s===go.mapValue)return 1;if(i===go.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=de(a[l],u[l]);if(h!==0)return h;const f=rs(o[a[l]],c[u[l]]);if(f!==0)return f}return de(a.length,u.length)}(t.mapValue,e.mapValue);default:throw ee()}}function Bd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=Vn(t),r=Vn(e),s=de(n.seconds,r.seconds);return s!==0?s:de(n.nanos,r.nanos)}function zr(t){return Fu(t)}function Fu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Vn(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ns(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,K.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Fu(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Fu(r.fields[a])}`;return i+"}"}(t.mapValue):ee();var e,n}function $u(t){return!!t&&"integerValue"in t}function lh(t){return!!t&&"arrayValue"in t}function jd(t){return!!t&&"nullValue"in t}function Vd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ao(t){return!!t&&"mapValue"in t}function Js(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Sr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Js(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Js(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Sk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ao(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Js(n)}setAll(e){let n=Ye.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Js(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ao(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Yt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ao(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Sr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new dt(Js(this.value))}}function pv(t){const e=[];return Sr(t.fields,(n,r)=>{const s=new Ye([n]);if(Ao(r)){const i=pv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new At(e)}/**
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
 */class Ge{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ge(e,0,oe.min(),oe.min(),dt.empty(),0)}static newFoundDocument(e,n,r){return new Ge(e,1,n,oe.min(),r,0)}static newNoDocument(e,n){return new Ge(e,2,n,oe.min(),dt.empty(),0)}static newUnknownDocument(e,n){return new Ge(e,3,n,oe.min(),dt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ge(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ck{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function Hd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Ck(t,e,n,r,s,i,o)}function hh(t){const e=re(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+zr(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ya(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>zr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>zr(r)).join(",")),e.ht=n}return e.ht}function Ak(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${zr(r.value)}`;var r}).join(", ")}]`),Ya(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>zr(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>zr(n)).join(",")),`Target(${e})`}function fh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!Lk(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!Yt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Kd(t.startAt,e.startAt)&&Kd(t.endAt,e.endAt)}function Bu(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class pt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new Rk(e,n,r):n==="array-contains"?new Pk(e,r):n==="in"?new Nk(e,r):n==="not-in"?new Dk(e,r):n==="array-contains-any"?new xk(e,r):new pt(e,n,r)}static lt(e,n,r){return n==="in"?new kk(e,r):new Ok(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(rs(n,this.value)):n!==null&&vr(this.value)===vr(n)&&this.ft(rs(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Rk extends pt{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.ft(n)}}class kk extends pt{constructor(e,n){super(e,"in",n),this.keys=gv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Ok extends pt{constructor(e,n){super(e,"not-in",n),this.keys=gv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class Pk extends pt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return lh(n)&&bi(n.arrayValue,this.value)}}class Nk extends pt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&bi(this.value.arrayValue,n)}}class Dk extends pt{constructor(e,n){super(e,"not-in",n)}matches(e){if(bi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!bi(this.value.arrayValue,n)}}class xk extends pt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!lh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>bi(this.value.arrayValue,r))}}class ha{constructor(e,n){this.position=e,this.inclusive=n}}class Xs{constructor(e,n="asc"){this.field=e,this.dir=n}}function Lk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function qd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=rs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Kd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Yt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Za{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function Mk(t,e,n,r,s,i,o,a){return new Za(t,e,n,r,s,i,o,a)}function mv(t){return new Za(t)}function Wd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Uk(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Fk(t){for(const e of t.filters)if(e.dt())return e.field;return null}function $k(t){return t.collectionGroup!==null}function Ei(t){const e=re(t);if(e._t===null){e._t=[];const n=Fk(e),r=Uk(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new Xs(n)),e._t.push(new Xs(Ye.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Xs(Ye.keyField(),i))}}}return e._t}function pn(t){const e=re(t);if(!e.wt)if(e.limitType==="F")e.wt=Hd(e.path,e.collectionGroup,Ei(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ei(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Xs(i.field,o))}const r=e.endAt?new ha(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new ha(e.startAt.position,e.startAt.inclusive):null;e.wt=Hd(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.wt}function ju(t,e,n){return new Za(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ec(t,e){return fh(pn(t),pn(e))&&t.limitType===e.limitType}function yv(t){return`${hh(pn(t))}|lt:${t.limitType}`}function Vu(t){return`Query(target=${Ak(pn(t))}; limitType=${t.limitType})`}function dh(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):K.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=qd(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,Ei(n),r)||n.endAt&&!function(s,i,o){const a=qd(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,Ei(n),r))}(t,e)}function Bk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vv(t){return(e,n)=>{let r=!1;for(const s of Ei(t)){const i=jk(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function jk(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?rs(a,c):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
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
 */function _v(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:la(e)?"-0":e}}function wv(t){return{integerValue:""+t}}function Vk(t,e){return Ik(e)?wv(e):_v(t,e)}/**
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
 */class tc{constructor(){this._=void 0}}function Hk(t,e,n){return t instanceof fa?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Ti?Ev(t,e):t instanceof Ii?Tv(t,e):function(r,s){const i=bv(r,s),o=zd(i)+zd(r.yt);return $u(i)&&$u(r.yt)?wv(o):_v(r.It,o)}(t,e)}function qk(t,e,n){return t instanceof Ti?Ev(t,e):t instanceof Ii?Tv(t,e):n}function bv(t,e){return t instanceof da?$u(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class fa extends tc{}class Ti extends tc{constructor(e){super(),this.elements=e}}function Ev(t,e){const n=Iv(e);for(const r of t.elements)n.some(s=>Yt(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ii extends tc{constructor(e){super(),this.elements=e}}function Tv(t,e){let n=Iv(e);for(const r of t.elements)n=n.filter(s=>!Yt(s,r));return{arrayValue:{values:n}}}class da extends tc{constructor(e,n){super(),this.It=e,this.yt=n}}function zd(t){return Le(t.integerValue||t.doubleValue)}function Iv(t){return lh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Kk(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ti&&r instanceof Ti||n instanceof Ii&&r instanceof Ii?ts(n.elements,r.elements,Yt):n instanceof da&&r instanceof da?Yt(n.yt,r.yt):n instanceof fa&&r instanceof fa}(t.transform,e.transform)}class Wk{constructor(e,n){this.version=e,this.transformResults=n}}class Ut{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ut}static exists(e){return new Ut(void 0,e)}static updateTime(e){return new Ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ro(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class nc{}function Sv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ph(t.key,Ut.none()):new Ki(t.key,t.data,Ut.none());{const n=t.data,r=dt.empty();let s=new Fe(Ye.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new zn(t.key,r,new At(s.toArray()),Ut.none())}}function zk(t,e,n){t instanceof Ki?function(r,s,i){const o=r.value.clone(),a=Qd(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof zn?function(r,s,i){if(!Ro(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=Qd(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Cv(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Ys(t,e,n,r){return t instanceof Ki?function(s,i,o,a){if(!Ro(s.precondition,i))return o;const c=s.value.clone(),u=Jd(s.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof zn?function(s,i,o,a){if(!Ro(s.precondition,i))return o;const c=Jd(s.fieldTransforms,a,i),u=i.data;return u.setAll(Cv(s)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(l=>l.field))}(t,e,n,r):function(s,i,o){return Ro(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function Gk(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=bv(r.transform,s||null);i!=null&&(n===null&&(n=dt.empty()),n.set(r.field,i))}return n||null}function Gd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ts(n,r,(s,i)=>Kk(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ki extends nc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class zn extends nc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Cv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Qd(t,e,n){const r=new Map;Se(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,qk(o,a,n[s]))}return r}function Jd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Hk(i,o,e))}return r}class ph extends nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Qk extends nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Jk{constructor(e){this.count=e}}/**
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
 */var xe,ce;function Xk(t){switch(t){default:return ee();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function Av(t){if(t===void 0)return dn("GRPC error has no .code"),R.UNKNOWN;switch(t){case xe.OK:return R.OK;case xe.CANCELLED:return R.CANCELLED;case xe.UNKNOWN:return R.UNKNOWN;case xe.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case xe.INTERNAL:return R.INTERNAL;case xe.UNAVAILABLE:return R.UNAVAILABLE;case xe.UNAUTHENTICATED:return R.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case xe.NOT_FOUND:return R.NOT_FOUND;case xe.ALREADY_EXISTS:return R.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return R.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case xe.ABORTED:return R.ABORTED;case xe.OUT_OF_RANGE:return R.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return R.UNIMPLEMENTED;case xe.DATA_LOSS:return R.DATA_LOSS;default:return ee()}}(ce=xe||(xe={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ws{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Sr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return hv(this.inner)}size(){return this.innerSize}}/**
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
 */const Yk=new Be(K.comparator);function gn(){return Yk}const Rv=new Be(K.comparator);function $s(...t){let e=Rv;for(const n of t)e=e.insert(n.key,n);return e}function kv(t){let e=Rv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function rr(){return Zs()}function Ov(){return Zs()}function Zs(){return new ws(t=>t.toString(),(t,e)=>t.isEqual(e))}const Zk=new Be(K.comparator),eO=new Fe(K.comparator);function ae(...t){let e=eO;for(const n of t)e=e.add(n);return e}const tO=new Fe(de);function Pv(){return tO}/**
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
 */class rc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Wi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new rc(oe.min(),s,Pv(),gn(),ae())}}class Wi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Wi(r,n,ae(),ae(),ae())}}/**
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
 */class ko{constructor(e,n,r,s){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=s}}class Nv{constructor(e,n){this.targetId=e,this.At=n}}class Dv{constructor(e,n,r=st.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Xd{constructor(){this.Rt=0,this.bt=Zd(),this.Pt=st.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=ae(),n=ae(),r=ae();return this.bt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ee()}}),new Wi(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=Zd()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class nO{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=gn(),this.qt=Yd(),this.Kt=new Fe(de)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,s)=>{this.Ht(s)&&n(s)})}Yt(e){const n=e.targetId,r=e.At.count,s=this.Xt(n);if(s){const i=s.target;if(Bu(i))if(r===0){const o=new K(i.path);this.jt(n,o,Ge.newNoDocument(o,oe.min()))}else Se(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Bu(a.target)){const c=new K(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,Ge.newNoDocument(c,e))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let r=ae();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const s=new rc(e,n,this.Kt,this.Ut,r);return this.Ut=gn(),this.qt=Yd(),this.Kt=new Fe(de),s}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const s=this.zt(e);this.ee(e,n)?s.kt(n,1):s.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new Xd,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Fe(de),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Xd),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Yd(){return new Be(K.comparator)}function Zd(){return new Be(K.comparator)}/**
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
 */const rO=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),sO=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class iO{constructor(e,n){this.databaseId=e,this.gt=n}}function pa(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xv(t,e){return t.gt?e.toBase64():e.toUint8Array()}function oO(t,e){return pa(t,e.toTimestamp())}function an(t){return Se(!!t),oe.fromTimestamp(function(e){const n=Vn(e);return new Ue(n.seconds,n.nanos)}(t))}function gh(t,e){return function(n){return new ke(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Lv(t){const e=ke.fromString(t);return Se(Fv(e)),e}function Hu(t,e){return gh(t.databaseId,e.path)}function Hc(t,e){const n=Lv(e);if(n.get(1)!==t.databaseId.projectId)throw new z(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(Mv(n))}function qu(t,e){return gh(t.databaseId,e)}function aO(t){const e=Lv(t);return e.length===4?ke.emptyPath():Mv(e)}function Ku(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Mv(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ep(t,e,n){return{name:Hu(t,e),fields:n.value.mapValue.fields}}function cO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.gt?(Se(u===void 0||typeof u=="string"),st.fromBase64String(u||"")):(Se(u===void 0||u instanceof Uint8Array),st.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?R.UNKNOWN:Av(c.code);return new z(u,c.message||"")}(o);n=new Dv(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Hc(t,r.document.name),i=an(r.document.updateTime),o=new dt({mapValue:{fields:r.document.fields}}),a=Ge.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new ko(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Hc(t,r.document),i=r.readTime?an(r.readTime):oe.min(),o=Ge.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ko([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Hc(t,r.document),i=r.removedTargetIds||[];n=new ko([],i,s,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new Jk(s),o=r.targetId;n=new Nv(o,i)}}return n}function uO(t,e){let n;if(e instanceof Ki)n={update:ep(t,e.key,e.value)};else if(e instanceof ph)n={delete:Hu(t,e.key)};else if(e instanceof zn)n={update:ep(t,e.key,e.data),updateMask:_O(e.fieldMask)};else{if(!(e instanceof Qk))return ee();n={verify:Hu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof fa)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ti)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ii)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof da)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:oO(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee()}(t,e.precondition)),n}function lO(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?an(r.updateTime):an(s);return i.isEqual(oe.min())&&(i=an(s)),new Wk(i,r.transformResults||[])}(n,e))):[]}function hO(t,e){return{documents:[qu(t,e.path)]}}function fO(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=qu(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=qu(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if(Vd(h.value))return{unaryFilter:{field:Dr(h.field),op:"IS_NAN"}};if(jd(h.value))return{unaryFilter:{field:Dr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Vd(h.value))return{unaryFilter:{field:Dr(h.field),op:"IS_NOT_NAN"}};if(jd(h.value))return{unaryFilter:{field:Dr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Dr(h.field),op:mO(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Dr(l.field),direction:gO(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.gt||Ya(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function dO(t){let e=aO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Se(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=Uv(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Xs(Br(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Ya(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new ha(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new ha(f,h)}(n.endAt)),Mk(e,s,o,i,a,"F",c,u)}function pO(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ee()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Uv(t){return t?t.unaryFilter!==void 0?[vO(t)]:t.fieldFilter!==void 0?[yO(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Uv(e)).reduce((e,n)=>e.concat(n)):ee():[]}function gO(t){return rO[t]}function mO(t){return sO[t]}function Dr(t){return{fieldPath:t.canonicalString()}}function Br(t){return Ye.fromServerFormat(t.fieldPath)}function yO(t){return pt.create(Br(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(t.fieldFilter.op),t.fieldFilter.value)}function vO(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Br(t.unaryFilter.field);return pt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Br(t.unaryFilter.field);return pt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Br(t.unaryFilter.field);return pt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Br(t.unaryFilter.field);return pt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}function _O(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Fv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class wO{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&zk(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ys(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ys(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ov();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Sv(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&ts(this.mutations,e.mutations,(n,r)=>Gd(n,r))&&ts(this.baseMutations,e.baseMutations,(n,r)=>Gd(n,r))}}class mh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Se(e.mutations.length===r.length);let s=Zk;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new mh(e,n,r,s)}}/**
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
 */class bO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class lr{constructor(e,n,r,s,i=oe.min(),o=oe.min(),a=st.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class EO{constructor(e){this.re=e}}function TO(t){const e=dO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ju(e,e.limit,"L"):e}/**
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
 */class IO{constructor(){this.Ye=new SO}addToCollectionParentIndex(e,n){return this.Ye.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(jn.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(jn.min())}updateCollectionGroup(e,n,r){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class SO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Fe(ke.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Fe(ke.comparator)).toArray()}}/**
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
 */class ss{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new ss(0)}static vn(){return new ss(-1)}}/**
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
 */class CO{constructor(){this.changes=new ws(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ge.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class AO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class RO{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.getBaseDocument(e,n,r))).next(s=>(r!==null&&Ys(r.mutation,s,At.empty(),Ue.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ae()){const s=rr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=$s();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=rr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ae()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=gn();const o=Zs(),a=Zs();return n.forEach((c,u)=>{const l=r.get(u.key);s.has(u.key)&&(l===void 0||l.mutation instanceof zn)?i=i.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),Ys(l.mutation,u,l.mutation.getFieldMask(),Ue.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new AO(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Zs();let s=new Be((o,a)=>o-a),i=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=r.get(c)||At.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(s.get(a.batchId)||ae()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Ov();l.forEach(f=>{if(!i.has(f)){const g=Sv(n.get(f),r.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return k.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return K.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):$k(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):k.resolve(rr());let a=-1,c=i;return o.next(u=>k.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?k.resolve():this.getBaseDocument(e,l,h).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ae())).next(l=>({batchId:a,changes:kv(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let s=$s();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=$s();return this.indexManager.getCollectionParents(e,s).next(o=>k.forEach(o,a=>{const c=function(u,l){return new Za(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,Ge.newInvalidDocument(u)))});let o=$s();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Ys(u.mutation,c,At.empty(),Ue.now()),dh(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):k.resolve(Ge.newInvalidDocument(n))}}/**
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
 */class kO{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return k.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:an(r.createTime)}),k.resolve()}getNamedQuery(e,n){return k.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:TO(r.bundledQuery),readTime:an(r.readTime)}}(n)),k.resolve()}}/**
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
 */class OO{constructor(){this.overlays=new Be(K.comparator),this.es=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const r=rr();return k.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ue(e,n,i)}),k.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.es.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(r)),k.resolve()}getOverlaysForCollection(e,n,r){const s=rr(),i=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return k.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Be((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=rr(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=rr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return k.resolve(a)}ue(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.es.get(s.largestBatchId).delete(r.key);this.es.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new bO(n,r));let i=this.es.get(n);i===void 0&&(i=ae(),this.es.set(n,i)),this.es.set(n,i.add(r.key))}}/**
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
 */class yh{constructor(){this.ns=new Fe(Ve.ss),this.rs=new Fe(Ve.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Ve(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Ve(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new K(new ke([])),r=new Ve(n,e),s=new Ve(n,e+1),i=[];return this.rs.forEachInRange([r,s],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new K(new ke([])),r=new Ve(n,e),s=new Ve(n,e+1);let i=ae();return this.rs.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ve(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return K.comparator(e.key,n.key)||de(e._s,n._s)}static os(e,n){return de(e._s,n._s)||K.comparator(e.key,n.key)}}/**
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
 */class PO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Fe(Ve.ss)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wO(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.gs=this.gs.add(new Ve(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ps(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ve(n,0),s=new Ve(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([r,s],o=>{const a=this.ys(o._s);i.push(a)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Fe(de);return n.forEach(s=>{const i=new Ve(s,0),o=new Ve(s,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{r=r.add(a._s)})}),k.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const o=new Ve(new K(i),0);let a=new Fe(de);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c._s)),!0)},o),k.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const s=this.ys(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Se(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return k.forEach(n.mutations,s=>{const i=new Ve(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Ve(n,0),s=this.gs.firstAfterOrEqual(r);return k.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class NO{constructor(e){this.Es=e,this.docs=new Be(K.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():Ge.newInvalidDocument(n))}getEntries(e,n){let r=gn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ge.newInvalidDocument(s))}),k.resolve(r)}getAllFromCollection(e,n,r){let s=gn();const i=new K(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||_k(vk(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return k.resolve(s)}getAllFromCollectionGroup(e,n,r,s){ee()}As(e,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new DO(this)}getSize(e){return k.resolve(this.size)}}class DO extends CO{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Yn.addEntry(e,s)):this.Yn.removeEntry(r)}),k.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class xO{constructor(e){this.persistence=e,this.Rs=new ws(n=>hh(n),fh),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.bs=0,this.Ps=new yh,this.targetCount=0,this.vs=ss.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,s)=>n(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),k.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new ss(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.Dn(n),k.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return k.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),k.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),k.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return k.resolve(r)}containsKey(e,n){return k.resolve(this.Ps.containsKey(n))}}/**
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
 */class LO{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new uh(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new xO(this),this.indexManager=new IO,this.remoteDocumentCache=function(r){return new NO(r)}(r=>this.referenceDelegate.xs(r)),this.It=new EO(n),this.Ns=new kO(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new OO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new PO(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const s=new MO(this.Ss.next());return this.referenceDelegate.ks(),r(s).next(i=>this.referenceDelegate.Os(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ms(e,n){return k.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class MO extends bk{constructor(e){super(),this.currentSequenceNumber=e}}class vh{constructor(e){this.persistence=e,this.Fs=new yh,this.$s=null}static Bs(e){return new vh(e)}get Ls(){if(this.$s)return this.$s;throw ee()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),k.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),k.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(s=>this.Ls.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Ls.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Ls,r=>{const s=K.fromPath(r);return this.Us(e,s).next(i=>{i||n.removeEntry(s,oe.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return k.or([()=>k.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class _h{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=s}static Ci(e,n){let r=ae(),s=ae();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new _h(e,n.fromCache,r,s)}}/**
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
 */class UO{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.ki(e,n).next(i=>i||this.Oi(e,n,s,r)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Wd(n))return k.resolve(null);let r=pn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ju(n,null,"F"),r=pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ae(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(e,ju(n,null,"F")):this.Bi(e,u,n,c)}))})))}Oi(e,n,r,s){return Wd(n)||s.isEqual(oe.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,r,s)?this.Mi(e,n):(Ud()<=fe.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Vu(n)),this.Bi(e,o,n,yk(s,-1)))})}Fi(e,n){let r=new Fe(vv(e));return n.forEach((s,i)=>{dh(e,i)&&(r=r.add(i))}),r}$i(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Mi(e,n){return Ud()<=fe.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Vu(n)),this.Ni.getDocumentsMatchingQuery(e,n,jn.min())}Bi(e,n,r,s){return this.Ni.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class FO{constructor(e,n,r,s){this.persistence=e,this.Li=n,this.It=s,this.Ui=new Be(de),this.qi=new ws(i=>hh(i),fh),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new RO(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function $O(t,e,n,r){return new FO(t,e,n,r)}async function $v(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ae();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function BO(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=k.resolve();return h.forEach(g=>{f=f.next(()=>u.getEntry(a,g)).next(p=>{const v=c.docVersions.get(g);Se(v!==null),p.version.compareTo(v)<0&&(l.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),u.addEntry(p)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ae();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Bv(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function jO(t,e){const n=re(t),r=e.snapshotVersion;let s=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.Ui;const a=[];e.targetChanges.forEach((l,h)=>{const f=s.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(st.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,r)),s=s.insert(h,g),function(p,v,b){return p.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(f,g,l)&&a.push(n.Cs.updateTargetData(i,g))});let c=gn(),u=ae();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(VO(i,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!r.isEqual(oe.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return k.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ui=s,i))}function VO(t,e,n){let r=ae(),s=ae();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=gn();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(oe.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:s}})}function HO(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function qO(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Cs.getTargetData(r,e).next(i=>i?(s=i,k.resolve(s)):n.Cs.allocateTargetId(r).next(o=>(s=new lr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ui.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Wu(t,e,n){const r=re(t),s=r.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!qi(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(s.target)}function tp(t,e,n){const r=re(t);let s=oe.min(),i=ae();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=re(a),h=l.qi.get(u);return h!==void 0?k.resolve(l.Ui.get(h)):l.Cs.getTargetData(c,u)}(r,o,pn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?s:oe.min(),n?i:ae())).next(a=>(KO(r,Bk(e),a),{documents:a,Hi:i})))}function KO(t,e,n){let r=t.Ki.get(e)||oe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ki.set(e,r)}class np{constructor(){this.activeTargetIds=Pv()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class WO{constructor(){this.Lr=new np,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new np,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class zO{qr(e){}shutdown(){}}/**
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
 */class rp{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const GO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class QO{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class JO extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,s,i){const o=this.ho(e,n);j("RestConnection","Sending: ",o,r);const a={};return this.lo(a,s,i),this.fo(e,o,a,r).then(c=>(j("RestConnection","Received: ",c),c),c=>{throw Uu("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}_o(e,n,r,s,i,o){return this.ao(e,n,r,s,i)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+_s,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}ho(e,n){const r=GO[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,s){return new Promise((i,o)=>{const a=new ak;a.setWithCredentials(!0),a.listenOnce(sk.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Vc.NO_ERROR:const u=a.getResponseJson();j("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Vc.TIMEOUT:j("Connection",'RPC "'+e+'" timed out'),o(new z(R.DEADLINE_EXCEEDED,"Request time out"));break;case Vc.HTTP_ERROR:const l=a.getStatus();if(j("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(g){const p=g.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(p)>=0?p:R.UNKNOWN}(h.status);o(new z(f,h.message))}else o(new z(R.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new z(R.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{j("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}wo(e,n,r){const s=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=nk(),o=rk(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new ok({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const c=s.join("");j("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const f=new QO({Hr:p=>{h?j("Connection","Not sending because WebChannel is closed:",p):(l||(j("Connection","Opening WebChannel transport."),u.open(),l=!0),j("Connection","WebChannel sending:",p),u.send(p))},Jr:()=>u.close()}),g=(p,v,b)=>{p.listen(v,y=>{try{b(y)}catch(_){setTimeout(()=>{throw _},0)}})};return g(u,fo.EventType.OPEN,()=>{h||j("Connection","WebChannel transport opened.")}),g(u,fo.EventType.CLOSE,()=>{h||(h=!0,j("Connection","WebChannel transport closed"),f.io())}),g(u,fo.EventType.ERROR,p=>{h||(h=!0,Uu("Connection","WebChannel transport errored:",p),f.io(new z(R.UNAVAILABLE,"The operation could not be completed")))}),g(u,fo.EventType.MESSAGE,p=>{var v;if(!h){const b=p.data[0];Se(!!b);const y=b,_=y.error||((v=y[0])===null||v===void 0?void 0:v.error);if(_){j("Connection","WebChannel received error:",_);const A=_.status;let N=function(J){const Q=xe[J];if(Q!==void 0)return Av(Q)}(A),V=_.message;N===void 0&&(N=R.INTERNAL,V="Unknown error status: "+A+" with message "+_.message),h=!0,f.io(new z(N,V)),u.close()}else j("Connection","WebChannel received:",b),f.ro(b)}}),g(o,ik.STAT_EVENT,p=>{p.stat===Ld.PROXY?j("Connection","Detected buffering proxy"):p.stat===Ld.NOPROXY&&j("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function qc(){return typeof document<"u"?document:null}/**
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
 */function sc(t){return new iO(t,!0)}class jv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=s,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),s=Math.max(0,n-r);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class Vv{constructor(e,n,r,s,i,o,a,c){this.Hs=e,this.vo=r,this.Vo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new jv(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(dn(n.toString()),dn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.So===n&&this.Go(r,s)},r=>{e(()=>{const s=new z(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(s)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(s=>{r(()=>this.Qo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class XO extends Vv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.It=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=cO(this.It,e),r=function(s){if(!("targetChange"in s))return oe.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?oe.min():i.readTime?an(i.readTime):oe.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Ku(this.It),n.addTarget=function(s,i){let o;const a=i.target;return o=Bu(a)?{documents:hO(s,a)}:{query:fO(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=xv(s,i.resumeToken):i.snapshotVersion.compareTo(oe.min())>0&&(o.readTime=pa(s,i.snapshotVersion.toTimestamp())),o}(this.It,e);const r=pO(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Ku(this.It),n.removeTarget=e,this.Bo(n)}}class YO extends Vv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=lO(e.writeResults,e.commitTime),r=an(e.commitTime);return this.listener.Zo(r,n)}return Se(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Ku(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>uO(this.It,r))};this.Bo(n)}}/**
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
 */class ZO extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.It=s,this.nu=!1}su(){if(this.nu)throw new z(R.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.ao(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(R.UNKNOWN,s.toString())})}_o(e,n,r,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(R.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class e1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(dn(n),this.ou=!1):j("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class t1{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{r.enqueueAndForget(async()=>{Cr(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=re(a);c._u.add(4),await zi(c),c.gu.set("Unknown"),c._u.delete(4),await ic(c)}(this))})}),this.gu=new e1(r,s)}}async function ic(t){if(Cr(t))for(const e of t.wu)await e(!0)}async function zi(t){for(const e of t.wu)await e(!1)}function Hv(t,e){const n=re(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Eh(n)?bh(n):bs(n).ko()&&wh(n,e))}function qv(t,e){const n=re(t),r=bs(n);n.du.delete(e),r.ko()&&Kv(n,e),n.du.size===0&&(r.ko()?r.Fo():Cr(n)&&n.gu.set("Unknown"))}function wh(t,e){t.yu.Mt(e.targetId),bs(t).zo(e)}function Kv(t,e){t.yu.Mt(e),bs(t).Ho(e)}function bh(t){t.yu=new nO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),bs(t).start(),t.gu.uu()}function Eh(t){return Cr(t)&&!bs(t).No()&&t.du.size>0}function Cr(t){return re(t)._u.size===0}function Wv(t){t.yu=void 0}async function n1(t){t.du.forEach((e,n)=>{wh(t,e)})}async function r1(t,e){Wv(t),Eh(t)?(t.gu.hu(e),bh(t)):t.gu.set("Unknown")}async function s1(t,e,n){if(t.gu.set("Online"),e instanceof Dv&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ga(t,r)}else if(e instanceof ko?t.yu.Gt(e):e instanceof Nv?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(oe.min()))try{const r=await Bv(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.yu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=s.du.get(c);u&&s.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.du.get(a);if(!c)return;s.du.set(a,c.withResumeToken(st.EMPTY_BYTE_STRING,c.snapshotVersion)),Kv(s,a);const u=new lr(c.target,a,1,c.sequenceNumber);wh(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await ga(t,r)}}async function ga(t,e,n){if(!qi(e))throw e;t._u.add(1),await zi(t),t.gu.set("Offline"),n||(n=()=>Bv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await ic(t)})}function zv(t,e){return e().catch(n=>ga(t,n,e))}async function oc(t){const e=re(t),n=Hn(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;i1(e);)try{const s=await HO(e.localStore,r);if(s===null){e.fu.length===0&&n.Fo();break}r=s.batchId,o1(e,s)}catch(s){await ga(e,s)}Gv(e)&&Qv(e)}function i1(t){return Cr(t)&&t.fu.length<10}function o1(t,e){t.fu.push(e);const n=Hn(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Gv(t){return Cr(t)&&!Hn(t).No()&&t.fu.length>0}function Qv(t){Hn(t).start()}async function a1(t){Hn(t).eu()}async function c1(t){const e=Hn(t);for(const n of t.fu)e.Xo(n.mutations)}async function u1(t,e,n){const r=t.fu.shift(),s=mh.from(r,e,n);await zv(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await oc(t)}async function l1(t,e){e&&Hn(t).Yo&&await async function(n,r){if(s=r.code,Xk(s)&&s!==R.ABORTED){const i=n.fu.shift();Hn(n).Mo(),await zv(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await oc(n)}var s}(t,e),Gv(t)&&Qv(t)}async function sp(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=Cr(n);n._u.add(3),await zi(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await ic(n)}async function h1(t,e){const n=re(t);e?(n._u.delete(2),await ic(n)):e||(n._u.add(2),await zi(n),n.gu.set("Unknown"))}function bs(t){return t.pu||(t.pu=function(e,n,r){const s=re(e);return s.su(),new XO(n,s.connection,s.authCredentials,s.appCheckCredentials,s.It,r)}(t.datastore,t.asyncQueue,{Yr:n1.bind(null,t),Zr:r1.bind(null,t),Wo:s1.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Eh(t)?bh(t):t.gu.set("Unknown")):(await t.pu.stop(),Wv(t))})),t.pu}function Hn(t){return t.Iu||(t.Iu=function(e,n,r){const s=re(e);return s.su(),new YO(n,s.connection,s.authCredentials,s.appCheckCredentials,s.It,r)}(t.datastore,t.asyncQueue,{Yr:a1.bind(null,t),Zr:l1.bind(null,t),tu:c1.bind(null,t),Zo:u1.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await oc(t)):(await t.Iu.stop(),t.fu.length>0&&(j("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class Th{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Th(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ih(t,e){if(dn("AsyncQueue",`${e}: ${t}`),qi(t))return new z(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Gr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=$s(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new Gr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Gr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class ip{constructor(){this.Tu=new Be(K.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):ee():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class is{constructor(e,n,r,s,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new is(e,n,Gr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ec(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class f1{constructor(){this.Au=void 0,this.listeners=[]}}class d1{constructor(){this.queries=new ws(e=>yv(e),ec),this.onlineState="Unknown",this.Ru=new Set}}async function p1(t,e){const n=re(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new f1),s)try{i.Au=await n.onListen(r)}catch(o){const a=Ih(o,`Initialization of query '${Vu(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Sh(n)}async function g1(t,e){const n=re(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function m1(t,e){const n=re(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(s)&&(r=!0);o.Au=s}}r&&Sh(n)}function y1(t,e,n){const r=re(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Sh(t){t.Ru.forEach(e=>{e.next()})}class v1{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new is(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class Jv{constructor(e){this.key=e}}class Xv{constructor(e){this.key=e}}class _1{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ae(),this.mutatedKeys=ae(),this.Gu=vv(e),this.Qu=new Gr(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new ip,s=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const f=s.get(l),g=dh(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let b=!1;f&&g?f.data.isEqual(g.data)?p!==v&&(r.track({type:3,doc:g}),b=!0):this.Hu(f,g)||(r.track({type:2,doc:g}),b=!0,(c&&this.Gu(g,c)>0||u&&this.Gu(g,u)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),b=!0):f&&!g&&(r.track({type:1,doc:f}),b=!0,(c||u)&&(a=!0)),b&&(g?(o=o.add(g),i=v?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Qu:o,zu:r,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((u,l)=>function(h,f){const g=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return g(h)-g(f)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new is(this.query,e.Qu,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new ip,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ae(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new Xv(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new Jv(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=ae();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return is.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class w1{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class b1{constructor(e){this.key=e,this.nc=!1}}class E1{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new ws(a=>yv(a),ec),this.rc=new Map,this.oc=new Set,this.uc=new Be(K.comparator),this.cc=new Map,this.ac=new yh,this.hc={},this.lc=new Map,this.fc=ss.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function T1(t,e){const n=D1(t);let r,s;const i=n.ic.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ec();else{const o=await qO(n.localStore,pn(e));n.isPrimaryClient&&Hv(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await I1(n,e,r,a==="current",o.resumeToken)}return s}async function I1(t,e,n,r,s){t._c=(h,f,g)=>async function(p,v,b,y){let _=v.view.Wu(b);_.$i&&(_=await tp(p.localStore,v.query,!1).then(({documents:V})=>v.view.Wu(V,_)));const A=y&&y.targetChanges.get(v.targetId),N=v.view.applyChanges(_,p.isPrimaryClient,A);return ap(p,v.targetId,N.Xu),N.snapshot}(t,h,f,g);const i=await tp(t.localStore,e,!0),o=new _1(e,i.Hi),a=o.Wu(i.documents),c=Wi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,c);ap(t,n,u.Xu);const l=new w1(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function S1(t,e){const n=re(t),r=n.ic.get(e),s=n.rc.get(r.targetId);if(s.length>1)return n.rc.set(r.targetId,s.filter(i=>!ec(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Wu(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),qv(n.remoteStore,r.targetId),zu(n,r.targetId)}).catch(Hi)):(zu(n,r.targetId),await Wu(n.localStore,r.targetId,!0))}async function C1(t,e,n){const r=x1(t);try{const s=await function(i,o){const a=re(i),c=Ue.now(),u=o.reduce((f,g)=>f.add(g.key),ae());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=gn(),p=ae();return a.Gi.getEntries(f,u).next(v=>{g=v,g.forEach((b,y)=>{y.isValidDocument()||(p=p.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(v=>{l=v;const b=[];for(const y of o){const _=Gk(y,l.get(y.key).overlayedDocument);_!=null&&b.push(new zn(y.key,_,pv(_.value.mapValue),Ut.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,b,o)}).next(v=>{h=v;const b=v.applyToLocalDocumentSet(l,p);return a.documentOverlayCache.saveOverlays(f,v.batchId,b)})}).then(()=>({batchId:h.batchId,changes:kv(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new Be(de)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(r,s.batchId,n),await Gi(r,s.changes),await oc(r.remoteStore)}catch(s){const i=Ih(s,"Failed to persist write");n.reject(i)}}async function Yv(t,e){const n=re(t);try{const r=await jO(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.cc.get(i);o&&(Se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.nc=!0:s.modifiedDocuments.size>0?Se(o.nc):s.removedDocuments.size>0&&(Se(o.nc),o.nc=!1))}),await Gi(n,r,e)}catch(r){await Hi(r)}}function op(t,e,n){const r=re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=re(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&Sh(a)}(r.eventManager,e),s.length&&r.sc.Wo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function A1(t,e,n){const r=re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.cc.get(e),i=s&&s.key;if(i){let o=new Be(K.comparator);o=o.insert(i,Ge.newNoDocument(i,oe.min()));const a=ae().add(i),c=new rc(oe.min(),new Map,new Fe(de),o,a);await Yv(r,c),r.uc=r.uc.remove(i),r.cc.delete(e),Ch(r)}else await Wu(r.localStore,e,!1).then(()=>zu(r,e,n)).catch(Hi)}async function R1(t,e){const n=re(t),r=e.batch.batchId;try{const s=await BO(n.localStore,e);e_(n,r,null),Zv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Gi(n,s)}catch(s){await Hi(s)}}async function k1(t,e,n){const r=re(t);try{const s=await function(i,o){const a=re(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(Se(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);e_(r,e,n),Zv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Gi(r,s)}catch(s){await Hi(s)}}function Zv(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function e_(t,e,n){const r=re(t);let s=r.hc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.hc[r.currentUser.toKey()]=s}}function zu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||t_(t,r)})}function t_(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(qv(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Ch(t))}function ap(t,e,n){for(const r of n)r instanceof Jv?(t.ac.addReference(r.key,e),O1(t,r)):r instanceof Xv?(j("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||t_(t,r.key)):ee()}function O1(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(j("SyncEngine","New document in limbo: "+n),t.oc.add(r),Ch(t))}function Ch(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new K(ke.fromString(e)),r=t.fc.next();t.cc.set(r,new b1(n)),t.uc=t.uc.insert(n,r),Hv(t.remoteStore,new lr(pn(mv(n.path)),r,2,uh.at))}}async function Gi(t,e,n){const r=re(t),s=[],i=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,c)=>{o.push(r._c(c,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){s.push(u);const l=_h.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.sc.Wo(s),await async function(a,c){const u=re(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>k.forEach(c,h=>k.forEach(h.Si,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>k.forEach(h.Di,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!qi(l))throw l;j("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.Ui.get(h),g=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(g);u.Ui=u.Ui.insert(h,p)}}}(r.localStore,i))}async function P1(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await $v(n.localStore,e);n.currentUser=e,function(s,i){s.lc.forEach(o=>{o.forEach(a=>{a.reject(new z(R.CANCELLED,i))})}),s.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Gi(n,r.ji)}}function N1(t,e){const n=re(t),r=n.cc.get(e);if(r&&r.nc)return ae().add(r.key);{let s=ae();const i=n.rc.get(e);if(!i)return s;for(const o of i){const a=n.ic.get(o);s=s.unionWith(a.view.ju)}return s}}function D1(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Yv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=N1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=A1.bind(null,e),e.sc.Wo=m1.bind(null,e.eventManager),e.sc.wc=y1.bind(null,e.eventManager),e}function x1(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=R1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=k1.bind(null,e),e}class L1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=sc(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return $O(this.persistence,new UO,e.initialUser,this.It)}yc(e){return new LO(vh.Bs,this.It)}gc(e){return new WO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class M1{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>op(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=P1.bind(null,this.syncEngine),await h1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new d1}createDatastore(e){const n=sc(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new JO(s));var s;return function(i,o,a,c){return new ZO(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>op(this.syncEngine,a,0),o=rp.C()?new rp:new zO,new t1(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,u){const l=new E1(r,s,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=re(e);j("RemoteStore","RemoteStore shutting down."),n._u.add(5),await zi(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function n_(t,e,n){if(!n)throw new z(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function U1(t,e,n,r){if(e===!0&&r===!0)throw new z(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function cp(t){if(!K.isDocumentKey(t))throw new z(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function up(t){if(K.isDocumentKey(t))throw new z(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ah(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function _r(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ah(t);throw new z(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const lp=new Map;class hp{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new z(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,U1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class ac{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hp(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ck;switch(n.type){case"gapi":const r=n.client;return new fk(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new z(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=lp.get(e);n&&(j("ComponentProvider","Removing Datastore"),lp.delete(e),n.terminate())}(this),Promise.resolve()}}function F1(t,e,n,r={}){var s;const i=(t=_r(t,ac))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Uu("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Xe.MOCK_USER;else{o=zg(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new z(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Xe(c)}t._authCredentials=new uk(new uv(o,a))}}/**
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
 */class Rt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}}class cc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new cc(this.firestore,e,this._query)}}class Fn extends cc{constructor(e,n,r){super(e,n,mv(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new K(e))}withConverter(e){return new Fn(this.firestore,e,this._path)}}function $1(t,e,...n){if(t=Oe(t),n_("collection","path",e),t instanceof ac){const r=ke.fromString(e,...n);return up(r),new Fn(t,null,r)}{if(!(t instanceof Rt||t instanceof Fn))throw new z(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return up(r),new Fn(t.firestore,null,r)}}function Bs(t,e,...n){if(t=Oe(t),arguments.length===1&&(e=lv.R()),n_("doc","path",e),t instanceof ac){const r=ke.fromString(e,...n);return cp(r),new Rt(t,null,new K(r))}{if(!(t instanceof Rt||t instanceof Fn))throw new z(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return cp(r),new Rt(t.firestore,t instanceof Fn?t.converter:null,new K(r))}}/**
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
 */class B1{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):dn("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class j1{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Xe.UNAUTHENTICATED,this.clientId=lv.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{j("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(j("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ih(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function V1(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await $v(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function H1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await q1(t);j("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>sp(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>sp(e.remoteStore,i)),t.onlineComponents=e}async function q1(t){return t.offlineComponents||(j("FirestoreClient","Using default OfflineComponentProvider"),await V1(t,new L1)),t.offlineComponents}async function r_(t){return t.onlineComponents||(j("FirestoreClient","Using default OnlineComponentProvider"),await H1(t,new M1)),t.onlineComponents}function K1(t){return r_(t).then(e=>e.syncEngine)}async function W1(t){const e=await r_(t),n=e.eventManager;return n.onListen=T1.bind(null,e.syncEngine),n.onUnlisten=S1.bind(null,e.syncEngine),n}function z1(t,e,n={}){const r=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new B1({next:h=>{i.enqueueAndForget(()=>g1(s,l)),h.fromCache&&a.source==="server"?c.reject(new z(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new v1(o,u,{includeMetadataChanges:!0,Nu:!0});return p1(s,l)}(await W1(t),t.asyncQueue,e,n,r)),r.promise}class G1{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new jv(this,"async_queue_retry"),this.Wc=()=>{const n=qc();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=qc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=qc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new Un;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!qi(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw dn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const s=Th.createAndSchedule(this,e,n,r,i=>this.Yc(i));return this.qc.push(s),s}zc(){this.Kc&&ee()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class Qi extends ac{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new G1,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||i_(this),this._firestoreClient.terminate()}}function Q1(t,e){const n=typeof t=="object"?t:Sl(),r=typeof t=="string"?t:e||"(default)",s=ka(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Kg("firestore");i&&F1(s,...i)}return s}function s_(t){return t._firestoreClient||i_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function i_(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new Tk(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new j1(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class os{constructor(e){this._byteString=e}static fromBase64String(e){try{return new os(st.fromBase64String(e))}catch(n){throw new z(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new os(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class uc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Rh{constructor(e){this._methodName=e}}/**
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
 */class kh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
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
 */const J1=/^__.*__$/;class X1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ki(e,this.data,n,this.fieldTransforms)}}class o_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new zn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function a_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class Oh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=s,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Oh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ia({path:r,oa:!1});return s.ua(e),s}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ia({path:r,oa:!1});return s.na(),s}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return ma(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(a_(this.sa)&&J1.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Y1{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||sc(e)}da(e,n,r,s=!1){return new Oh({sa:e,methodName:n,fa:r,path:Ye.emptyPath(),oa:!1,la:s},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function c_(t){const e=t._freezeSettings(),n=sc(t._databaseId);return new Y1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Z1(t,e,n,r,s,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,s);Ph("Data must be an object, but it was:",o,r);const a=u_(r,o);let c,u;if(i.merge)c=new At(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=Gu(e,h,n);if(!o.contains(f))throw new z(R.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);h_(l,f)||l.push(f)}c=new At(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new X1(new dt(a),c,u)}class lc extends Rh{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lc}}function eP(t,e,n,r){const s=t.da(1,e,n);Ph("Data must be an object, but it was:",s,r);const i=[],o=dt.empty();Sr(r,(c,u)=>{const l=Nh(e,c,n);u=Oe(u);const h=s.ca(l);if(u instanceof lc)i.push(l);else{const f=hc(u,h);f!=null&&(i.push(l),o.set(l,f))}});const a=new At(i);return new o_(o,a,s.fieldTransforms)}function tP(t,e,n,r,s,i){const o=t.da(1,e,n),a=[Gu(e,r,n)],c=[s];if(i.length%2!=0)throw new z(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Gu(e,i[f])),c.push(i[f+1]);const u=[],l=dt.empty();for(let f=a.length-1;f>=0;--f)if(!h_(u,a[f])){const g=a[f];let p=c[f];p=Oe(p);const v=o.ca(g);if(p instanceof lc)u.push(g);else{const b=hc(p,v);b!=null&&(u.push(g),l.set(g,b))}}const h=new At(u);return new o_(l,h,o.fieldTransforms)}function hc(t,e){if(l_(t=Oe(t)))return Ph("Unsupported field value:",e,t),u_(t,e);if(t instanceof Rh)return function(n,r){if(!a_(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=hc(o,r.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Oe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Vk(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Ue.fromDate(n);return{timestampValue:pa(r.It,s)}}if(n instanceof Ue){const s=new Ue(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:pa(r.It,s)}}if(n instanceof kh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof os)return{bytesValue:xv(r.It,n._byteString)};if(n instanceof Rt){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:gh(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Ah(n)}`)}(t,e)}function u_(t,e){const n={};return hv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Sr(t,(r,s)=>{const i=hc(s,e.ra(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function l_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof kh||t instanceof os||t instanceof Rt||t instanceof Rh)}function Ph(t,e,n){if(!l_(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Ah(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function Gu(t,e,n){if((e=Oe(e))instanceof uc)return e._internalPath;if(typeof e=="string")return Nh(t,e);throw ma("Field path arguments must be of type string or ",t,!1,void 0,n)}const nP=new RegExp("[~\\*/\\[\\]]");function Nh(t,e,n){if(e.search(nP)>=0)throw ma(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new uc(...e.split("."))._internalPath}catch{throw ma(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ma(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new z(R.INVALID_ARGUMENT,a+t+c)}function h_(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class f_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(d_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rP extends f_{data(){return super.data()}}function d_(t,e){return typeof e=="string"?Nh(t,e):e instanceof uc?e._internalPath:e._delegate._internalPath}/**
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
 */function sP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class iP{convertValue(e,n="none"){switch(vr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ns(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ee()}}convertObject(e,n){const r={};return Sr(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new kh(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=dv(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_i(e));default:return null}}convertTimestamp(e){const n=Vn(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ke.fromString(e);Se(Fv(r));const s=new wi(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(n)||dn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function oP(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class mo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class aP extends f_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Oo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(d_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Oo extends aP{data(e={}){return super.data(e)}}class cP{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new mo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Oo(this._firestore,this._userDataWriter,r.key,r,new mo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new Oo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new mo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Oo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new mo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:uP(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function uP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}class lP extends iP{constructor(e){super(),this.firestore=e}convertBytes(e){return new os(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,n)}}function Ex(t){t=_r(t,cc);const e=_r(t.firestore,Qi),n=s_(e),r=new lP(e);return sP(t._query),z1(n,t._query).then(s=>new cP(e,r,t,s))}function fp(t,e,n,...r){t=_r(t,Rt);const s=_r(t.firestore,Qi),i=c_(s);let o;return o=typeof(e=Oe(e))=="string"||e instanceof uc?tP(i,"updateDoc",t._key,e,n,r):eP(i,"updateDoc",t._key,e),Dh(s,[o.toMutation(t._key,Ut.exists(!0))])}function dp(t){return Dh(_r(t.firestore,Qi),[new ph(t._key,Ut.none())])}function hP(t,e){const n=_r(t.firestore,Qi),r=Bs(t),s=oP(t.converter,e);return Dh(n,[Z1(c_(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ut.exists(!1))]).then(()=>r)}function Dh(t,e){return function(n,r){const s=new Un;return n.asyncQueue.enqueueAndForget(async()=>C1(await K1(n),r,s)),s.promise}(s_(t),e)}(function(t,e=!0){(function(n){_s=n})(fs),pr(new Bn("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new Qi(new lk(n.getProvider("auth-internal")),new pk(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new z(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wi(a.options.projectId,c)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Gt(Md,"3.7.2",t),Gt(Md,"3.7.2","esm2017")})();/**
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
 */const p_="firebasestorage.googleapis.com",g_="storageBucket",fP=2*60*1e3,dP=10*60*1e3;/**
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
 */class De extends Zt{constructor(e,n,r=0){super(Kc(e),`Firebase Storage: ${n} (${Kc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,De.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Kc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Kc(t){return"storage/"+t}function xh(){const t="An unknown error occurred, please check the error payload for server response.";return new De("unknown",t)}function pP(t){return new De("object-not-found","Object '"+t+"' does not exist.")}function gP(t){return new De("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function mP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new De("unauthenticated",t)}function yP(){return new De("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function vP(t){return new De("unauthorized","User does not have permission to access '"+t+"'.")}function _P(){return new De("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function wP(){return new De("canceled","User canceled the upload/download.")}function bP(t){return new De("invalid-url","Invalid URL '"+t+"'.")}function EP(t){return new De("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function TP(){return new De("no-default-bucket","No default bucket found. Did you set the '"+g_+"' property when initializing the app?")}function IP(){return new De("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function SP(){return new De("no-download-url","The given file does not have any download URLs.")}function Qu(t){return new De("invalid-argument",t)}function m_(){return new De("app-deleted","The Firebase app was deleted.")}function CP(t){return new De("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ei(t,e){return new De("invalid-format","String does not match format '"+t+"': "+e)}function Os(t){throw new De("internal-error","Internal error: "+t)}/**
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
 */class wt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=wt.makeFromUrl(e,n)}catch{return new wt(e,"")}if(r.path==="")return r;throw EP(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(N){N.path_=decodeURIComponent(N.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${l}/b/${s}/o${f}`,"i"),p={bucket:1,path:3},v=n===p_?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",y=new RegExp(`^https?://${v}/${s}/${b}`,"i"),A=[{regex:a,indices:c,postModify:i},{regex:g,indices:p,postModify:u},{regex:y,indices:{bucket:1,path:2},postModify:u}];for(let N=0;N<A.length;N++){const V=A[N],J=V.regex.exec(e);if(J){const Q=J[V.indices.bucket];let M=J[V.indices.path];M||(M=""),r=new wt(Q,M),V.postModify(r);break}}if(r==null)throw bP(e);return r}}class AP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function RP(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...b){u||(u=!0,e.apply(null,b))}function h(b){s=setTimeout(()=>{s=null,t(g,c())},b)}function f(){i&&clearTimeout(i)}function g(b,...y){if(u){f();return}if(b){f(),l.call(null,b,...y);return}if(c()||o){f(),l.call(null,b,...y);return}r<64&&(r*=2);let A;a===1?(a=2,A=0):A=(r+Math.random())*1e3,h(A)}let p=!1;function v(b){p||(p=!0,f(),!u&&(s!==null?(b||(a=2),clearTimeout(s),h(0)):b||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function kP(t){t(!1)}/**
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
 */function OP(t){return t!==void 0}function PP(t){return typeof t=="object"&&!Array.isArray(t)}function Lh(t){return typeof t=="string"||t instanceof String}function pp(t){return Mh()&&t instanceof Blob}function Mh(){return typeof Blob<"u"&&!RE()}function gp(t,e,n,r){if(r<e)throw Qu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Qu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Uh(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function y_(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var hr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(hr||(hr={}));/**
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
 */function NP(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class DP{constructor(e,n,r,s,i,o,a,c,u,l,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,p)=>{this.resolve_=g,this.reject_=p,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new yo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===hr.NO_ERROR,c=i.getStatus();if((!a||NP(c,this.additionalRetryCodes_))&&this.retry){const l=i.getErrorCode()===hr.ABORT;r(!1,new yo(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new yo(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());OP(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=xh();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?m_():wP();o(c)}else{const c=_P();o(c)}};this.canceled_?n(!1,new yo(!1,null,!0)):this.backoffId_=RP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&kP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class yo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function xP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function LP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function MP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function UP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function FP(t,e,n,r,s,i,o=!0){const a=y_(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return MP(u,e),xP(u,n),LP(u,i),UP(u,r),new DP(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function $P(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function BP(...t){const e=$P();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Mh())return new Blob(t);throw new De("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function jP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function VP(t){return atob(t)}/**
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
 */const xt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Wc{constructor(e,n){this.data=e,this.contentType=n||null}}function v_(t,e){switch(t){case xt.RAW:return new Wc(__(e));case xt.BASE64:case xt.BASE64URL:return new Wc(w_(t,e));case xt.DATA_URL:return new Wc(qP(e),KP(e))}throw xh()}function __(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function HP(t){let e;try{e=decodeURIComponent(t)}catch{throw ei(xt.DATA_URL,"Malformed data URL.")}return __(e)}function w_(t,e){switch(t){case xt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ei(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case xt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ei(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=VP(e)}catch{throw ei(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class b_{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ei(xt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=WP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function qP(t){const e=new b_(t);return e.base64?w_(xt.BASE64,e.rest):HP(e.rest)}function KP(t){return new b_(t).contentType}function WP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Pn{constructor(e,n){let r=0,s="";pp(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(pp(this.data_)){const r=this.data_,s=jP(r,e,n);return s===null?null:new Pn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Pn(r,!0)}}static getBlob(...e){if(Mh()){const n=e.map(r=>r instanceof Pn?r.data_:r);return new Pn(BP.apply(null,n))}else{const n=e.map(o=>Lh(o)?v_(xt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Pn(s,!0)}}uploadData(){return this.data_}}/**
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
 */function E_(t){let e;try{e=JSON.parse(t)}catch{return null}return PP(e)?e:null}/**
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
 */function zP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function GP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function T_(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function QP(t,e){return e}class it{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||QP}}let vo=null;function JP(t){return!Lh(t)||t.length<2?t:T_(t)}function I_(){if(vo)return vo;const t=[];t.push(new it("bucket")),t.push(new it("generation")),t.push(new it("metageneration")),t.push(new it("name","fullPath",!0));function e(i,o){return JP(o)}const n=new it("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new it("size");return s.xform=r,t.push(s),t.push(new it("timeCreated")),t.push(new it("updated")),t.push(new it("md5Hash",null,!0)),t.push(new it("cacheControl",null,!0)),t.push(new it("contentDisposition",null,!0)),t.push(new it("contentEncoding",null,!0)),t.push(new it("contentLanguage",null,!0)),t.push(new it("contentType",null,!0)),t.push(new it("metadata","customMetadata",!0)),vo=t,vo}function XP(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new wt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function YP(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return XP(r,t),r}function S_(t,e,n){const r=E_(e);return r===null?null:YP(t,r,n)}function ZP(t,e,n,r){const s=E_(e);if(s===null||!Lh(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,h=t.fullPath,f="/b/"+o(l)+"/o/"+o(h),g=Uh(f,n,r),p=y_({alt:"media",token:u});return g+p})[0]}function eN(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class C_{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function A_(t){if(!t)throw xh()}function tN(t,e){function n(r,s){const i=S_(t,s,e);return A_(i!==null),i}return n}function nN(t,e){function n(r,s){const i=S_(t,s,e);return A_(i!==null),ZP(i,s,t.host,t._protocol)}return n}function R_(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=yP():s=mP():n.getStatus()===402?s=gP(t.bucket):n.getStatus()===403?s=vP(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function rN(t){const e=R_(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=pP(t.path)),i.serverResponse=s.serverResponse,i}return n}function sN(t,e,n){const r=e.fullServerUrl(),s=Uh(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new C_(s,i,nN(t,n),o);return a.errorHandler=rN(e),a}function iN(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function oN(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=iN(null,e)),r}function aN(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let A="";for(let N=0;N<2;N++)A=A+Math.random().toString().slice(2);return A}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=oN(e,r,s),l=eN(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+c+"--",g=Pn.getBlob(h,r,f);if(g===null)throw IP();const p={name:u.fullPath},v=Uh(i,t.host,t._protocol),b="POST",y=t.maxUploadRetryTime,_=new C_(v,b,tN(t,n),y);return _.urlParams=p,_.headers=o,_.body=g.uploadData(),_.errorHandler=R_(e),_}class cN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=hr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=hr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=hr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Os("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Os("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Os("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Os("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Os("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class uN extends cN{initXhr(){this.xhr_.responseType="text"}}function k_(){return new uN}/**
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
 */class wr{constructor(e,n){this._service=e,n instanceof wt?this._location=n:this._location=wt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new wr(e,n)}get root(){const e=new wt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return T_(this._location.path)}get storage(){return this._service}get parent(){const e=zP(this._location.path);if(e===null)return null;const n=new wt(this._location.bucket,e);return new wr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw CP(e)}}function lN(t,e,n){t._throwIfRoot("uploadBytes");const r=aN(t.storage,t._location,I_(),new Pn(e,!0),n);return t.storage.makeRequestWithTokens(r,k_).then(s=>({metadata:s,ref:t}))}function hN(t,e,n=xt.RAW,r){t._throwIfRoot("uploadString");const s=v_(n,e),i=Object.assign({},r);return i.contentType==null&&s.contentType!=null&&(i.contentType=s.contentType),lN(t,s.data,i)}function fN(t){t._throwIfRoot("getDownloadURL");const e=sN(t.storage,t._location,I_());return t.storage.makeRequestWithTokens(e,k_).then(n=>{if(n===null)throw SP();return n})}function dN(t,e){const n=GP(t._location.path,e),r=new wt(t._location.bucket,n);return new wr(t.storage,r)}/**
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
 */function pN(t){return/^[A-Za-z]+:\/\//.test(t)}function gN(t,e){return new wr(t,e)}function O_(t,e){if(t instanceof Fh){const n=t;if(n._bucket==null)throw TP();const r=new wr(n,n._bucket);return e!=null?O_(r,e):r}else return e!==void 0?dN(t,e):t}function mN(t,e){if(e&&pN(e)){if(t instanceof Fh)return gN(t,e);throw Qu("To use ref(service, url), the first argument must be a Storage instance.")}else return O_(t,e)}function mp(t,e){const n=e==null?void 0:e[g_];return n==null?null:wt.makeFromBucketSpec(n,t)}function yN(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:zg(s,t.app.options.projectId))}class Fh{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=p_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=fP,this._maxUploadRetryTime=dP,this._requests=new Set,s!=null?this._bucket=wt.makeFromBucketSpec(s,this._host):this._bucket=mp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=wt.makeFromBucketSpec(this._url,e):this._bucket=mp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){gp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){gp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new wr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new AP(m_());{const o=FP(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const yp="@firebase/storage",vp="0.9.13";/**
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
 */const P_="storage";function vN(t,e,n,r){return t=Oe(t),hN(t,e,n,r)}function _N(t){return t=Oe(t),fN(t)}function wN(t,e){return t=Oe(t),mN(t,e)}function bN(t=Sl(),e){t=Oe(t);const r=ka(t,P_).getImmediate({identifier:e}),s=Kg("storage");return s&&EN(r,...s),r}function EN(t,e,n,r={}){yN(t,e,n,r)}function TN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Fh(n,r,s,e,fs)}function IN(){pr(new Bn(P_,TN,"PUBLIC").setMultipleInstances(!0)),Gt(yp,vp,""),Gt(yp,vp,"esm2017")}IN();function N_(t,e){return function(){return t.apply(e,arguments)}}const{toString:D_}=Object.prototype,{getPrototypeOf:$h}=Object,Bh=(t=>e=>{const n=D_.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),vn=t=>(t=t.toLowerCase(),e=>Bh(e)===t),fc=t=>e=>typeof e===t,{isArray:Es}=Array,Si=fc("undefined");function SN(t){return t!==null&&!Si(t)&&t.constructor!==null&&!Si(t.constructor)&&qn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const x_=vn("ArrayBuffer");function CN(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&x_(t.buffer),e}const AN=fc("string"),qn=fc("function"),L_=fc("number"),jh=t=>t!==null&&typeof t=="object",RN=t=>t===!0||t===!1,Po=t=>{if(Bh(t)!=="object")return!1;const e=$h(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},kN=vn("Date"),ON=vn("File"),PN=vn("Blob"),NN=vn("FileList"),DN=t=>jh(t)&&qn(t.pipe),xN=t=>{const e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||D_.call(t)===e||qn(t.toString)&&t.toString()===e)},LN=vn("URLSearchParams"),MN=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ji(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Es(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function M_(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const U_=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),F_=t=>!Si(t)&&t!==U_;function Ju(){const{caseless:t}=F_(this)&&this||{},e={},n=(r,s)=>{const i=t&&M_(e,s)||s;Po(e[i])&&Po(r)?e[i]=Ju(e[i],r):Po(r)?e[i]=Ju({},r):Es(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Ji(arguments[r],n);return e}const UN=(t,e,n,{allOwnKeys:r}={})=>(Ji(e,(s,i)=>{n&&qn(s)?t[i]=N_(s,n):t[i]=s},{allOwnKeys:r}),t),FN=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),$N=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},BN=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&$h(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},jN=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},VN=t=>{if(!t)return null;if(Es(t))return t;let e=t.length;if(!L_(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},HN=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&$h(Uint8Array)),qN=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},KN=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},WN=vn("HTMLFormElement"),zN=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),_p=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),GN=vn("RegExp"),$_=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Ji(n,(s,i)=>{e(s,i,t)!==!1&&(r[i]=s)}),Object.defineProperties(t,r)},QN=t=>{$_(t,(e,n)=>{if(qn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(!!qn(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},JN=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Es(t)?r(t):r(String(t).split(e)),n},XN=()=>{},YN=(t,e)=>(t=+t,Number.isFinite(t)?t:e),zc="abcdefghijklmnopqrstuvwxyz",wp="0123456789",B_={DIGIT:wp,ALPHA:zc,ALPHA_DIGIT:zc+zc.toUpperCase()+wp},ZN=(t=16,e=B_.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function eD(t){return!!(t&&qn(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const tD=t=>{const e=new Array(10),n=(r,s)=>{if(jh(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=Es(r)?[]:{};return Ji(r,(o,a)=>{const c=n(o,s+1);!Si(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},E={isArray:Es,isArrayBuffer:x_,isBuffer:SN,isFormData:xN,isArrayBufferView:CN,isString:AN,isNumber:L_,isBoolean:RN,isObject:jh,isPlainObject:Po,isUndefined:Si,isDate:kN,isFile:ON,isBlob:PN,isRegExp:GN,isFunction:qn,isStream:DN,isURLSearchParams:LN,isTypedArray:HN,isFileList:NN,forEach:Ji,merge:Ju,extend:UN,trim:MN,stripBOM:FN,inherits:$N,toFlatObject:BN,kindOf:Bh,kindOfTest:vn,endsWith:jN,toArray:VN,forEachEntry:qN,matchAll:KN,isHTMLForm:WN,hasOwnProperty:_p,hasOwnProp:_p,reduceDescriptors:$_,freezeMethods:QN,toObjectSet:JN,toCamelCase:zN,noop:XN,toFiniteNumber:YN,findKey:M_,global:U_,isContextDefined:F_,ALPHABET:B_,generateString:ZN,isSpecCompliantForm:eD,toJSONObject:tD};function he(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}E.inherits(he,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:E.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const j_=he.prototype,V_={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{V_[t]={value:t}});Object.defineProperties(he,V_);Object.defineProperty(j_,"isAxiosError",{value:!0});he.from=(t,e,n,r,s,i)=>{const o=Object.create(j_);return E.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),he.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const nD=null;function Xu(t){return E.isPlainObject(t)||E.isArray(t)}function H_(t){return E.endsWith(t,"[]")?t.slice(0,-2):t}function bp(t,e,n){return t?t.concat(e).map(function(s,i){return s=H_(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function rD(t){return E.isArray(t)&&!t.some(Xu)}const sD=E.toFlatObject(E,{},null,function(e){return/^is[A-Z]/.test(e)});function dc(t,e,n){if(!E.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=E.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,b){return!E.isUndefined(b[v])});const r=n.metaTokens,s=n.visitor||l,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&E.isSpecCompliantForm(e);if(!E.isFunction(s))throw new TypeError("visitor must be a function");function u(p){if(p===null)return"";if(E.isDate(p))return p.toISOString();if(!c&&E.isBlob(p))throw new he("Blob is not supported. Use a Buffer instead.");return E.isArrayBuffer(p)||E.isTypedArray(p)?c&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function l(p,v,b){let y=p;if(p&&!b&&typeof p=="object"){if(E.endsWith(v,"{}"))v=r?v:v.slice(0,-2),p=JSON.stringify(p);else if(E.isArray(p)&&rD(p)||(E.isFileList(p)||E.endsWith(v,"[]"))&&(y=E.toArray(p)))return v=H_(v),y.forEach(function(A,N){!(E.isUndefined(A)||A===null)&&e.append(o===!0?bp([v],N,i):o===null?v:v+"[]",u(A))}),!1}return Xu(p)?!0:(e.append(bp(b,v,i),u(p)),!1)}const h=[],f=Object.assign(sD,{defaultVisitor:l,convertValue:u,isVisitable:Xu});function g(p,v){if(!E.isUndefined(p)){if(h.indexOf(p)!==-1)throw Error("Circular reference detected in "+v.join("."));h.push(p),E.forEach(p,function(y,_){(!(E.isUndefined(y)||y===null)&&s.call(e,y,E.isString(_)?_.trim():_,v,f))===!0&&g(y,v?v.concat(_):[_])}),h.pop()}}if(!E.isObject(t))throw new TypeError("data must be an object");return g(t),e}function Ep(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Vh(t,e){this._pairs=[],t&&dc(t,this,e)}const q_=Vh.prototype;q_.append=function(e,n){this._pairs.push([e,n])};q_.toString=function(e){const n=e?function(r){return e.call(this,r,Ep)}:Ep;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function iD(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function K_(t,e,n){if(!e)return t;const r=n&&n.encode||iD,s=n&&n.serialize;let i;if(s?i=s(e,n):i=E.isURLSearchParams(e)?e.toString():new Vh(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class oD{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){E.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Tp=oD,W_={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},aD=typeof URLSearchParams<"u"?URLSearchParams:Vh,cD=typeof FormData<"u"?FormData:null,uD=typeof Blob<"u"?Blob:null,lD=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),hD=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),zt={isBrowser:!0,classes:{URLSearchParams:aD,FormData:cD,Blob:uD},isStandardBrowserEnv:lD,isStandardBrowserWebWorkerEnv:hD,protocols:["http","https","file","blob","url","data"]};function fD(t,e){return dc(t,new zt.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return zt.isNode&&E.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function dD(t){return E.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function pD(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function z_(t){function e(n,r,s,i){let o=n[i++];const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&E.isArray(s)?s.length:o,c?(E.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!E.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&E.isArray(s[o])&&(s[o]=pD(s[o])),!a)}if(E.isFormData(t)&&E.isFunction(t.entries)){const n={};return E.forEachEntry(t,(r,s)=>{e(dD(r),s,n,0)}),n}return null}const gD={"Content-Type":void 0};function mD(t,e,n){if(E.isString(t))try{return(e||JSON.parse)(t),E.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const pc={transitional:W_,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=E.isObject(e);if(i&&E.isHTMLForm(e)&&(e=new FormData(e)),E.isFormData(e))return s&&s?JSON.stringify(z_(e)):e;if(E.isArrayBuffer(e)||E.isBuffer(e)||E.isStream(e)||E.isFile(e)||E.isBlob(e))return e;if(E.isArrayBufferView(e))return e.buffer;if(E.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return fD(e,this.formSerializer).toString();if((a=E.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return dc(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),mD(e)):e}],transformResponse:[function(e){const n=this.transitional||pc.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&E.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?he.from(a,he.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:zt.classes.FormData,Blob:zt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};E.forEach(["delete","get","head"],function(e){pc.headers[e]={}});E.forEach(["post","put","patch"],function(e){pc.headers[e]=E.merge(gD)});const Hh=pc,yD=E.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),vD=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&yD[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Ip=Symbol("internals");function Ps(t){return t&&String(t).trim().toLowerCase()}function No(t){return t===!1||t==null?t:E.isArray(t)?t.map(No):String(t)}function _D(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}function wD(t){return/^[-_a-zA-Z]+$/.test(t.trim())}function Gc(t,e,n,r,s){if(E.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!E.isString(e)){if(E.isString(r))return e.indexOf(r)!==-1;if(E.isRegExp(r))return r.test(e)}}function bD(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function ED(t,e){const n=E.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class gc{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,u){const l=Ps(c);if(!l)throw new Error("header name must be a non-empty string");const h=E.findKey(s,l);(!h||s[h]===void 0||u===!0||u===void 0&&s[h]!==!1)&&(s[h||c]=No(a))}const o=(a,c)=>E.forEach(a,(u,l)=>i(u,l,c));return E.isPlainObject(e)||e instanceof this.constructor?o(e,n):E.isString(e)&&(e=e.trim())&&!wD(e)?o(vD(e),n):e!=null&&i(n,e,r),this}get(e,n){if(e=Ps(e),e){const r=E.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return _D(s);if(E.isFunction(n))return n.call(this,s,r);if(E.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Ps(e),e){const r=E.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Gc(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=Ps(o),o){const a=E.findKey(r,o);a&&(!n||Gc(r,r[a],a,n))&&(delete r[a],s=!0)}}return E.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Gc(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return E.forEach(this,(s,i)=>{const o=E.findKey(r,i);if(o){n[o]=No(s),delete n[i];return}const a=e?bD(i):String(i).trim();a!==i&&delete n[i],n[a]=No(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return E.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&E.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Ip]=this[Ip]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Ps(o);r[a]||(ED(s,o),r[a]=!0)}return E.isArray(e)?e.forEach(i):i(e),this}}gc.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);E.freezeMethods(gc.prototype);E.freezeMethods(gc);const cn=gc;function Qc(t,e){const n=this||Hh,r=e||n,s=cn.from(r.headers);let i=r.data;return E.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function G_(t){return!!(t&&t.__CANCEL__)}function Xi(t,e,n){he.call(this,t==null?"canceled":t,he.ERR_CANCELED,e,n),this.name="CanceledError"}E.inherits(Xi,he,{__CANCEL__:!0});function TD(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new he("Request failed with status code "+n.status,[he.ERR_BAD_REQUEST,he.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const ID=zt.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,a){const c=[];c.push(n+"="+encodeURIComponent(r)),E.isNumber(s)&&c.push("expires="+new Date(s).toGMTString()),E.isString(i)&&c.push("path="+i),E.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function SD(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function CD(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function Q_(t,e){return t&&!SD(e)?CD(t,e):e}const AD=zt.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=E.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function RD(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function kD(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const u=Date.now(),l=r[i];o||(o=u),n[s]=c,r[s]=u;let h=i,f=0;for(;h!==s;)f+=n[h++],h=h%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),u-o<e)return;const g=l&&u-l;return g?Math.round(f*1e3/g):void 0}}function Sp(t,e){let n=0;const r=kD(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),u=i<=o;n=i;const l={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&u?(o-i)/c:void 0,event:s};l[e?"download":"upload"]=!0,t(l)}}const OD=typeof XMLHttpRequest<"u",PD=OD&&function(t){return new Promise(function(n,r){let s=t.data;const i=cn.from(t.headers).normalize(),o=t.responseType;let a;function c(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}E.isFormData(s)&&(zt.isStandardBrowserEnv||zt.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let u=new XMLHttpRequest;if(t.auth){const g=t.auth.username||"",p=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(g+":"+p))}const l=Q_(t.baseURL,t.url);u.open(t.method.toUpperCase(),K_(l,t.params,t.paramsSerializer),!0),u.timeout=t.timeout;function h(){if(!u)return;const g=cn.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),v={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:g,config:t,request:u};TD(function(y){n(y),c()},function(y){r(y),c()},v),u=null}if("onloadend"in u?u.onloadend=h:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(h)},u.onabort=function(){!u||(r(new he("Request aborted",he.ECONNABORTED,t,u)),u=null)},u.onerror=function(){r(new he("Network Error",he.ERR_NETWORK,t,u)),u=null},u.ontimeout=function(){let p=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const v=t.transitional||W_;t.timeoutErrorMessage&&(p=t.timeoutErrorMessage),r(new he(p,v.clarifyTimeoutError?he.ETIMEDOUT:he.ECONNABORTED,t,u)),u=null},zt.isStandardBrowserEnv){const g=(t.withCredentials||AD(l))&&t.xsrfCookieName&&ID.read(t.xsrfCookieName);g&&i.set(t.xsrfHeaderName,g)}s===void 0&&i.setContentType(null),"setRequestHeader"in u&&E.forEach(i.toJSON(),function(p,v){u.setRequestHeader(v,p)}),E.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),o&&o!=="json"&&(u.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&u.addEventListener("progress",Sp(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Sp(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=g=>{!u||(r(!g||g.type?new Xi(null,t,u):g),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const f=RD(l);if(f&&zt.protocols.indexOf(f)===-1){r(new he("Unsupported protocol "+f+":",he.ERR_BAD_REQUEST,t));return}u.send(s||null)})},Do={http:nD,xhr:PD};E.forEach(Do,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const ND={getAdapter:t=>{t=E.isArray(t)?t:[t];const{length:e}=t;let n,r;for(let s=0;s<e&&(n=t[s],!(r=E.isString(n)?Do[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new he(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(E.hasOwnProp(Do,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!E.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Do};function Jc(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Xi(null,t)}function Cp(t){return Jc(t),t.headers=cn.from(t.headers),t.data=Qc.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),ND.getAdapter(t.adapter||Hh.adapter)(t).then(function(r){return Jc(t),r.data=Qc.call(t,t.transformResponse,r),r.headers=cn.from(r.headers),r},function(r){return G_(r)||(Jc(t),r&&r.response&&(r.response.data=Qc.call(t,t.transformResponse,r.response),r.response.headers=cn.from(r.response.headers))),Promise.reject(r)})}const Ap=t=>t instanceof cn?t.toJSON():t;function as(t,e){e=e||{};const n={};function r(u,l,h){return E.isPlainObject(u)&&E.isPlainObject(l)?E.merge.call({caseless:h},u,l):E.isPlainObject(l)?E.merge({},l):E.isArray(l)?l.slice():l}function s(u,l,h){if(E.isUndefined(l)){if(!E.isUndefined(u))return r(void 0,u,h)}else return r(u,l,h)}function i(u,l){if(!E.isUndefined(l))return r(void 0,l)}function o(u,l){if(E.isUndefined(l)){if(!E.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function a(u,l,h){if(h in e)return r(u,l);if(h in t)return r(void 0,u)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,l)=>s(Ap(u),Ap(l),!0)};return E.forEach(Object.keys(t).concat(Object.keys(e)),function(l){const h=c[l]||s,f=h(t[l],e[l],l);E.isUndefined(f)&&h!==a||(n[l]=f)}),n}const J_="1.3.4",qh={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{qh[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Rp={};qh.transitional=function(e,n,r){function s(i,o){return"[Axios v"+J_+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new he(s(o," has been removed"+(n?" in "+n:"")),he.ERR_DEPRECATED);return n&&!Rp[o]&&(Rp[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function DD(t,e,n){if(typeof t!="object")throw new he("options must be an object",he.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new he("option "+i+" must be "+c,he.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new he("Unknown option "+i,he.ERR_BAD_OPTION)}}const Yu={assertOptions:DD,validators:qh},Tn=Yu.validators;class ya{constructor(e){this.defaults=e,this.interceptors={request:new Tp,response:new Tp}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=as(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Yu.assertOptions(r,{silentJSONParsing:Tn.transitional(Tn.boolean),forcedJSONParsing:Tn.transitional(Tn.boolean),clarifyTimeoutError:Tn.transitional(Tn.boolean)},!1),s!==void 0&&Yu.assertOptions(s,{encode:Tn.function,serialize:Tn.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&E.merge(i.common,i[n.method]),o&&E.forEach(["delete","get","head","post","put","patch","common"],p=>{delete i[p]}),n.headers=cn.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(c=c&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let l,h=0,f;if(!c){const p=[Cp.bind(this),void 0];for(p.unshift.apply(p,a),p.push.apply(p,u),f=p.length,l=Promise.resolve(n);h<f;)l=l.then(p[h++],p[h++]);return l}f=a.length;let g=n;for(h=0;h<f;){const p=a[h++],v=a[h++];try{g=p(g)}catch(b){v.call(this,b);break}}try{l=Cp.call(this,g)}catch(p){return Promise.reject(p)}for(h=0,f=u.length;h<f;)l=l.then(u[h++],u[h++]);return l}getUri(e){e=as(this.defaults,e);const n=Q_(e.baseURL,e.url);return K_(n,e.params,e.paramsSerializer)}}E.forEach(["delete","get","head","options"],function(e){ya.prototype[e]=function(n,r){return this.request(as(r||{},{method:e,url:n,data:(r||{}).data}))}});E.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(as(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}ya.prototype[e]=n(),ya.prototype[e+"Form"]=n(!0)});const xo=ya;class Kh{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new Xi(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Kh(function(s){e=s}),cancel:e}}}const xD=Kh;function LD(t){return function(n){return t.apply(null,n)}}function MD(t){return E.isObject(t)&&t.isAxiosError===!0}const Zu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Zu).forEach(([t,e])=>{Zu[e]=t});const UD=Zu;function X_(t){const e=new xo(t),n=N_(xo.prototype.request,e);return E.extend(n,xo.prototype,e,{allOwnKeys:!0}),E.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return X_(as(t,s))},n}const je=X_(Hh);je.Axios=xo;je.CanceledError=Xi;je.CancelToken=xD;je.isCancel=G_;je.VERSION=J_;je.toFormData=dc;je.AxiosError=he;je.Cancel=je.CanceledError;je.all=function(e){return Promise.all(e)};je.spread=LD;je.isAxiosError=MD;je.mergeConfig=as;je.AxiosHeaders=cn;je.formToJSON=t=>z_(E.isHTMLForm(t)?new FormData(t):t);je.HttpStatusCode=UD;je.default=je;const FD=je,kp=$C({state(){return{blogs:[],posts:[],currentEdit:null}},getters:{filtredPosts(t){return t.currentEdit?t.posts.filter(e=>e.id!=t.currentEdit):t.posts},blogs(t){return t.blogs}},actions:{async initialize(t){try{const e="2d6411a1af7c604a9f91e25913b16cda4a0eed3b796f065cfb65cdeedd4a13208c50a6c5a0efab809cadb3b529bde461188e69a6e74bacb52a6f21c3c6a6552136a19132e6c95475a3dcae61f36e818e732c301818b3737fc0dccfc345419d60736f2d02657996b313854ced2f726697d4b2cf137add42878cffa32ae3f1ee15",n=await FD.get("https://strapi-cp-blog.onrender.com/api/articles?populate=*",{headers:{Authorization:`Bearer ${e}`}});t.state.blogs=n.data.data}catch(e){console.error(e)}}},mutations:{async addPost(t,e){if(e.id){const a=t.posts.findIndex(c=>c.id==e.id);a>-1&&(t.posts.splice(a,1),dp(Bs(Ns,"Blogs",e.id)))}const n=fr(""),r=bN(Lo),s=vu(Lo);try{const a=await hP($1(Ns,"Blogs"),{date:e.date,userId:s.currentUser.uid,title:e.title,content:e.content});t.posts.push({id:a.id,date:e.date,title:e.title,content:e.content,video:e.video}),n.value=a.id,e.id||(t.currentEdit=a.id)}catch(a){console.error("Error adding document: ",a)}let i=1;const o={videos:[]};e.video.videos&&e.video.videos.forEach(a=>{const c=wN(r,`videos/${e.title+(i++).toString()}.mp4`);vN(c,a,"data_url").then(u=>{_N(u.ref).then(l=>{o.videos.push(l),fp(Bs(Ns,"Blogs",n.value),{video:{videos:o.videos}})})})})},deletePost(t,e){const n=t.posts.findIndex(r=>r.id==e);n>-1&&(t.posts.splice(n,1),dp(Bs(Ns,"Blogs",e)))},setEdit(t,e){t.currentEdit=e},updateState(t,e){const n=vu(Lo),r=t.posts.findIndex(s=>s.id==e.id);r>-1&&t.posts.splice(r,1),e.userId==n.currentUser.uid&&t.posts.push({id:e.id,date:e.date,title:e.title,content:e.content,video:e.video})},editDone(t,e){const n=t.posts.findIndex(r=>r.id==t.currentEdit);n>-1&&(t.posts[n].time=e,fp(Bs(Ns,"Blogs",t.currentEdit),{time:e})),t.currentEdit=null}}});var $D="firebase",BD="9.13.0";/**
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
 */Gt($D,BD,"app");function el(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Op(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function tl(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Op(Object(n),!0).forEach(function(r){el(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Op(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}var jD=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new Promise(function(r,s){if(!(typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");if(o.async=!0,o.src=e,o.defer=n.defer,n.preconnectOrigin){var a=document.createElement("link");a.href=n.preconnectOrigin,a.rel="preconnect",i.appendChild(a)}i.appendChild(o),o.onload=r,o.onerror=s}})},VD=function t(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];if(!r.length)return e;var i=r.shift();if(!(!js(e)||!js(i))){for(var o in i)js(i[o])?(e[o]||Object.assign(e,el({},o,{})),t(e[o],i[o])):Object.assign(e,el({},o,i[o]));return t.apply(void 0,[e].concat(r))}},Yi=function(){return!(typeof window>"u"||typeof document>"u")},Pp=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;Yi()},HD=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Pp('Missing "appName" property inside the plugin options.',e.app_name==null),Pp('Missing "name" property in the route.',e.screen_name==null),e};function qD(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",n=t.split("/"),r=e.split("/");return n[0]===""&&e[e.length-1]==="/"&&n.shift(),r.join("/")+n.join("/")}var KD=function(){return{bootstrap:!0,onReady:null,onError:null,onBeforeTrack:null,onAfterTrack:null,pageTrackerTemplate:null,customResourceURL:"https://www.googletagmanager.com/gtag/js",customPreconnectOrigin:"https://www.googletagmanager.com",deferScriptLoad:!1,pageTrackerExcludedRoutes:[],pageTrackerEnabled:!0,enabled:!0,disableScriptLoad:!1,pageTrackerScreenviewEnabled:!1,appName:null,pageTrackerUseFullPath:!1,pageTrackerPrependBase:!0,pageTrackerSkipSamePath:!0,globalDataLayerName:"dataLayer",globalObjectName:"gtag",defaultGroupName:"default",includes:null,config:{id:null,params:{send_page_view:!1}}}},Y_={},WD=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=KD();Y_=VD(n,e)},Tt=function(){return Y_},br=function(){var t,e=Tt(),n=e.globalObjectName;!Yi()||typeof window[n]>"u"||(t=window)[n].apply(t,arguments)},Wh=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=Tt(),s=r.config,i=r.includes;br.apply(void 0,["config",s.id].concat(e)),Array.isArray(i)&&i.forEach(function(o){br.apply(void 0,["config",o.id].concat(e))})},Np=function(e,n){!Yi()||(window["ga-disable-".concat(e)]=n)},Z_=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,e=Tt(),n=e.config,r=e.includes;Np(n.id,t),Array.isArray(r)&&r.forEach(function(s){return Np(s.id,t)})},ew=function(){Z_(!0)},zD=function(){Z_(!1)},tw,GD=function(e){tw=e},zh=function(){return tw},Ar=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=Tt(),r=n.includes,s=n.defaultGroupName;e.send_to==null&&Array.isArray(r)&&r.length&&(e.send_to=r.map(function(i){return i.id}).concat(s)),br("event",t,e)},nw=function(t){if(!!Yi()){var e;if(typeof t=="string")e={page_path:t};else if(t.path||t.fullPath){var n=Tt(),r=n.pageTrackerUseFullPath,s=n.pageTrackerPrependBase,i=zh(),o=i&&i.options.base,a=r?t.fullPath:t.path;e=tl(tl({},t.name&&{page_title:t.name}),{},{page_path:s?qD(a,o):a})}else e=t;e.page_location==null&&(e.page_location=window.location.href),e.send_page_view==null&&(e.send_page_view=!0),Ar("page_view",e)}},rw=function(t){var e=Tt(),n=e.appName;if(!!t){var r;typeof t=="string"?r={screen_name:t}:r=t,r.app_name=r.app_name||n,Ar("screen_view",r)}},QD=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];Ar.apply(void 0,["exception"].concat(e))},JD=function(t){Wh("linker",t)},XD=function(t){Ar("timing_complete",t)},YD=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];br.apply(void 0,["set"].concat(e))},ZD=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];Ar.apply(void 0,["refund"].concat(e))},ex=function(t){Ar("purchase",t)},tx=function(t){Wh({custom_map:t})},nx=Object.freeze({__proto__:null,query:br,config:Wh,optOut:ew,optIn:zD,pageview:nw,screenview:rw,exception:QD,linker:JD,time:XD,set:YD,refund:ZD,purchase:ex,customMap:tx,event:Ar}),rx=function(e){e.config.globalProperties.$gtag=nx},sx=function(){if(!!Yi()){var t=Tt(),e=t.enabled,n=t.globalObjectName,r=t.globalDataLayerName;return window[n]==null&&(window[r]=window[r]||[],window[n]=function(){window[r].push(arguments)}),window[n]("js",new Date),e||ew(),window[n]}},Dp=function(e){return tl({send_page_view:!1},e)},sw=function(){var t=Tt(),e=t.config,n=t.includes;br("config",e.id,Dp(e.params)),Array.isArray(n)&&n.forEach(function(r){br("config",r.id,Dp(r.params))})},xp=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=Tt(),r=n.appName,s=n.pageTrackerTemplate,i=n.pageTrackerScreenviewEnabled,o=n.pageTrackerSkipSamePath;if(!(o&&t.path===e.path)){var a=t;if(Z(s)?a=s(t,e):i&&(a=HD({app_name:r,screen_name:t.name})),i){rw(a);return}nw(a)}},Lp=function(e){var n=Tt(),r=n.pageTrackerExcludedRoutes;return r.includes(e.path)||r.includes(e.name)},ix=function(){var t=Tt(),e=t.onBeforeTrack,n=t.onAfterTrack,r=zh();r.isReady().then(function(){si().then(function(){var s=r.currentRoute;sw(),!Lp(s.value)&&xp(s.value)}),r.afterEach(function(s,i){si().then(function(){Lp(s)||(Z(e)&&e(s,i),xp(s,i),Z(n)&&n(s,i))})})})},ox=function(){var t=Tt(),e=t.onReady,n=t.onError,r=t.globalObjectName,s=t.globalDataLayerName,i=t.config,o=t.customResourceURL,a=t.customPreconnectOrigin,c=t.deferScriptLoad,u=t.pageTrackerEnabled,l=t.disableScriptLoad,h=Boolean(u&&zh());if(sx(),h?ix():sw(),!l)return jD("".concat(o,"?id=").concat(i.id,"&l=").concat(s),{preconnectOrigin:a,defer:c}).then(function(){e&&e(window[r])}).catch(function(f){return n&&n(f),f})},ax=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;rx(e),WD(n),GD(r),Tt().bootstrap&&ox()};function cx(t){try{return JSON.parse(t||"{}")}catch(e){return console.error("[SSG] On state deserialization -",e,t),{}}}function ux(t){return document.readyState==="loading"?new Promise(e=>{document.addEventListener("DOMContentLoaded",()=>e(t))}):Promise.resolve(t)}const lx=vl({setup(t,{slots:e}){const n=fr(!1);return yg(()=>n.value=!0),()=>n.value?e.default&&e.default({}):e.placeholder&&e.placeholder({})}});function hx(t,e,n,r={}){const{transformState:s,registerComponents:i=!0,useHead:o=!0,rootContainer:a="#app"}=r,c=typeof window<"u";async function u(l=!1,h){var Q;const f=l?TE(t):IE(t);let g;o&&(g=UA(),f.use(g));const p=fC({history:l?AS(e.base):RS(e.base),...e}),{routes:v}=e;i&&f.component("ClientOnly",lx);const b=[],A={app:f,head:g,isClient:c,router:p,routes:v,onSSRAppRendered:l?()=>{}:M=>b.push(M),triggerOnSSRAppRendered:()=>Promise.all(b.map(M=>M())),initialState:{},transformState:s,routePath:h};l&&(await ux(),A.initialState=(s==null?void 0:s(window.__INITIAL_STATE__||{}))||cx(window.__INITIAL_STATE__)),await(n==null?void 0:n(A)),f.use(p);let N,V=!0;if(p.beforeEach((M,se,ve)=>{(V||N&&N===M.path)&&(V=!1,N=M.path,M.meta.state=A.initialState),ve()}),!l){const M=(Q=A.routePath)!=null?Q:"/";p.push(M),await p.isReady(),A.initialState=p.currentRoute.value.meta.state||{}}const J=A.initialState;return{...A,initialState:J}}return c&&(async()=>{const{app:l,router:h}=await u(!0);await h.isReady(),l.mount(a,!0)})(),u}const fx={apiKey:"AIzaSyCqBTxOJHaPP-AH5PKJHShNyAm1S2RSHUY",authDomain:"blog-ab-e3f50.firebaseapp.com",projectId:"blog-ab-e3f50",storageBucket:"blog-ab-e3f50.appspot.com",messagingSenderId:"206927976177",appId:"1:206927976177:web:d05793bbee8c4e62e9bb50"},Lo=Jg(fx),Ns=Q1(Lo);hx(bC,{routes:iR,base:"Blog-AB"},async({app:t,router:e,routes:n,isClient:r,initialState:s})=>{t.use(ax,{config:{id:"G-VH1V8GQK30"},router:e,enabled:!0}),t.use(kp),kp.replaceState(s.store)});export{B0 as A,_x as B,px as C,Lo as D,H0 as E,ct as F,lb as G,Ex as H,$1 as I,Ns as J,_t as K,qo as L,rl as M,BC as N,FD as O,oy as P,FA as _,at as a,pC as b,er as c,wx as d,hs as e,yg as f,gx as g,Ne as h,Eb as i,mx as j,_c as k,yn as l,Bo as m,Yn as n,Ot as o,vu as p,vx as q,fr as r,bN as s,mc as t,bx as u,yx as v,dx as w,wN as x,vN as y,_N as z};
