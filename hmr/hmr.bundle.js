var t={519:t=>{function e(t){return Promise.resolve().then((()=>{return import(t);throw e.code="MODULE_NOT_FOUND",e}))}e.keys=()=>[],e.resolve=e,e.id=519,t.exports=e}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,n),s.exports}n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{const t="";var e,o,r;(r=e||(e={})).string="string",r.number="number",r.boolean="boolean",r[void 0]="undefined",function(t){t.function="function",t.date="date",t.unknown="unknown",t.object="object"}(o||(o={}));const s={tag:["html"],dom:["dom"],templater:["templater"],tagComponent:["tag-component"],tagArray:["tag-array"],subject:["subject"],tagJsSubject:["tagJsSubject"],renderOnce:["renderOnce"],stateRender:["stateRender"]};function c(t){return[s.dom,s.tag,s.templater].includes(t?.tagJsType)}function a(t){const e=t?.tagJsType;return e&&[s.tagComponent,s.stateRender].includes(e)}function u(t){return p(t)&&typeof t.subscribe===o.function}function i(t){return!!t&&l(t.then)}function l(t){return typeof t===o.function}function p(t){return typeof t===o.object&&null!==t}function f(t){return Array.isArray(t)}function g(t,e,n){const o=[...e],r=o.shift(),s=t=>{if(o.length)return g(t,o,n);n(t)};let c=s;const a=r(t,{setHandler:t=>c=t,next:s});c(a)}class d{value;onSubscription;methods=[];isSubject=!0;subscribers=[];subscribeWith;constructor(t,e){this.value=t,this.onSubscription=e}subscribe(t){const e=function(t,e,n){const o=d.globalSubCount$;d.globalSubCount$.next(o.value+1);const r=function(){r.unsubscribe()};return r.callback=e,r.subscriptions=[],r.unsubscribe=function(){return function(t,e,n){!function(t,e){const n=t.findIndex((t=>t.callback===e));-1!==n&&t.splice(n,1)}(e,n);const o=d.globalSubCount$;d.globalSubCount$.next(o.value-1),t.unsubscribe=()=>t;const r=t.subscriptions;for(const t of r)t.unsubscribe();return t}(r,n,e)},r.add=t=>(r.subscriptions.push(t),r),r.next=t=>{e(t,r)},r}(0,t,this.subscribers),n=this.subscribeWith;if(n){if(this.methods.length){const n=t;t=t=>{g(t,this.methods,(t=>n(t,e)))}}return n(t)}return this.subscribers.push(e),this.onSubscription&&this.onSubscription(e),e}next(t){this.value=t,this.emit()}set=this.next.bind(this);emit(){const t=this.value,e=this.subscribers;for(const n of e)n.callback(t,n)}toPromise(){return new Promise((t=>{this.subscribe(((e,n)=>{n.unsubscribe(),t(e)}))}))}toCallback(t){const e=this.subscribe(((n,o)=>{e.unsubscribe(),t(n)}));return this}pipe(...t){const e=new d(this.value);return e.setMethods(t),e.subscribeWith=t=>this.subscribe(t),e.next=t=>this.next(t),e}setMethods(t){this.methods=t}static all(t){return function(t){const e=new d;return e.subscribeWith=e=>{const n=[],o=[],r=(r,s)=>{if(n[s]=!0,o[s]=r,n.length===t.length){for(const t of n)if(!t)return;e(o,c)}},s=[...t],c=s.shift().subscribe((t=>r(t,0))),a=s.map(((t,e)=>t.subscribe((t=>r(t,e+1)))));return c.subscriptions=a,c},e}(t.map((t=>u(t)?t:new d(t,(e=>(e.next(t),e))))))}static globalSubCount$=new d(0)}class h extends d{value;constructor(t){super(t),this.value=t}subscribe(t){const e=super.subscribe(t);return t(this.value,e),e}}const b={};b.stateConfig={array:[]};class m{}function y(t){const e=t.callback;if(!e)return t.defaultValue;const[n,o]=function(t){const e=t(m),[n]=e,[o]=t(n);return[n,o]}(e);return n}function v(t){const e=b.stateConfig,n=typeof t===o.function?t():t,r={get:function(){return y(r)},defaultValue:n};return e.array.push(r),C(n,r)}function w(){const t=b.stateConfig,e=t.rearray[t.array.length];let n=y(e);const o={get:function(){return y(o)},defaultValue:e.defaultValue};return t.array.push(o),C(n,o)}function C(t,e){return function(n){return e.callback=n,t}}const T={handler:j,letHandler:v};function k(){const t=b.stateConfig,e=t.rearray[t.array.length];return t.array.push(e),e.defaultValue}function j(t){const e=b.stateConfig;let n=t;if(typeof t===o.function&&(n=t()),typeof n===o.function){const t=n;n=function(...e){return t(...e)},n.original=t}const r={get:function(){return y(r)},defaultValue:n};return e.array.push(r),n}function S(t){return T.handler(t)}function E(t,e){for(let n=t.length-1;n>=0;--n){const o=t[n].get();x(e[n],o)}}function x(t,e){const n=t.callback;n&&n(e)}const O=t=>t,W=(t,e,{init:n,before:o,final:r=O}={})=>{const s=S({pastResult:void 0,values:void 0}),c=s.values;if(void 0===c){if(o&&!o(t))return s.values=t,s.pastResult;const a=(n||e)(t,c);return s.pastResult=r(a),s.values=t,s.pastResult}if(t.every(((t,e)=>t===c[e])))return s.pastResult;if(o&&!o(t))return s.values=t,s.pastResult;const a=e(t,c);return s.pastResult=r(a),c.length=0,c.push(...t),s.pastResult};function P(t,e){return Object.defineProperty(e,"noInit",{get(){const e=t();return e.setup.init=()=>{},e}}),Object.defineProperty(e,"asSubject",{get(){const e=t(),n=S((()=>ke())),o=S((()=>new h(void 0))),r=(t,r)=>(W(t,((t,e)=>{const s=ke(),c=r(t,e);s!==n&&E(b.stateConfig.array,n.state),o.next(c)}),e.setup),o);return r.setup=e.setup,P((()=>r),r),r}}),Object.defineProperty(e,"truthy",{get(){const e=t();return e.setup.before=t=>t.every((t=>t)),e}}),e}function A(t,e){const n=S((function(){return b.stateConfig.array})),o=ke();return S((function(){return new d(t,e).pipe((t=>(E(o.state,n),t)))}))}P((()=>function(t){const e=(e,n)=>W(e,n,t);return e.setup=t,P((()=>e),e),e}({})),((t,e)=>W(t,e))),A._value=t=>{const e=S((function(){return b.stateConfig.array})),n=ke();return S((function(){return new h(t).pipe((t=>(E(n.state,e),t)))}))},A.all=function(t){const e=S((()=>b.stateConfig.array)),n=ke();return d.all(t).pipe((t=>(E(n.state,e),t)))};class J extends Error{details;constructor(t,e,n={}){super(t),this.name=J.name,this.details={...n,errorCode:e}}}class V extends J{constructor(t,e){super(t,"sync-callback-error",e),this.name=V.name}}function N(t,e){return M(t,e)}function M(t,e){if(null===t||typeof t!==o.object)return t;if(e<0)return t;if(t instanceof Date)return new Date(t);if(t instanceof RegExp)return new RegExp(t);const n=f(t)?[]:Object.create(Object.getPrototypeOf(t));if(f(t))for(let o=0;o<t.length;o++)n[o]=M(t[o],e-1);else for(const o in t)t.hasOwnProperty(o)&&(n[o]=M(t[o],e-1));return n}function R(t,e,n){return L(t,e,n)}function L(t,e,n){return!(t!==e&&(r=t,s=e,!l(r)||!l(s)||r.toString()!==s.toString()))||n<0||typeof t===o.object&&typeof e===o.object&&(t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():f(t)&&f(e)?function(t,e,n){if(t.length!==e.length)return!1;for(let o=0;o<t.length;o++)if(!L(t[o],e[o],n-1))return!1;return!0}(t,e,n-1):!f(t)&&!f(e)&&function(t,e,n){const o=Object.keys(t),r=Object.keys(e);if(0===o.length&&0===r.length)return!0;if(o.length!==r.length)return!1;for(const s of o)if(!r.includes(s)||!L(t[s],e[s],n-1))return!1;return!0}(t,e,n-1));var r,s}function D(t,e){const n=t.templater,r=e.templater,c=n?.tag||t,a=r.tag;if(n?.tagJsType===s.stateRender)return n.dom===r.dom;if(c.tagJsType===s.dom)return function(t,e){return t.dom===e.dom}(c,a);const u=function(t,e,n,r){const s=t.strings,c=e.strings;if(s.length!==c.length)return!1;if(!s.every(((t,e)=>c[e].length===t.length)))return!1;return function(t,e){if(!(t.length===e.length))return!1;return!!e.every(((e,n)=>{const r=t[n];return typeof e!==o.function||typeof r!==o.function||!(e.toString()!==r.toString())}))}(n.templater.values||t.values,r.templater.values||e.values)}(c,a,t,e);return u}function I(t){return t.map($)}function $(t,e){const n=t,o=t?.tagJsType;if(o)switch(o){case s.stateRender:return;case s.dom:case s.tag:case s.templater:return I(n.values)}return f(t)?I(n):N(t,e)}function U(t,e){const n={propWatch:t,props:e,tagJsType:s.templater,key:function(t){return n.arrayValue=t,n}};return n}const H=[];function _(t,e,n){return t.map((t=>function(t,e,n,o){return c(t)||!t?t:e?F(t,e,n,o):t}(t,e.ownerSupport,e,n)))}function F(t,e,n,r){if(!t)return t;if(t.tagJsType)return t;if(typeof t===o.function)return function(t,e){if(t.mem)return t;const n=function(...t){return n.toCall(...t)};return n.toCall=function(...t){return function(t,e,n){const o=n.subject.global,r=o?.newest||n,s=void 0===ke(),c=t(...e),a=function(){const t=r.subject.global;return!1===s&&!0===t.locked||function(t,e){const n=t.subject;if(we(t.templater))return Te(e,t);const o=n.global;o.locked=!0,ve(o.newest,t,e,n),delete o.locked}(r,n),c};return s?a():(b.tagClosed$.toCallback(a),c)}(n.mem,t,e)},n.original=t,n.mem=t,Object.assign(n,t),n}(t,e);if(r===fe)return t;if(q(t))return t;if(f(t)){for(let s=t.length-1;s>=0;--s){const c=t[s];if(t[s]=F(c,e,n,r+1),typeof c===o.function){if(c.mem)continue;B(r+1,s,c,t,n)}}return t}const s=Object.keys(t);for(const c of s){const s=t[c],a=F(s,e,n,r+1);if(t[c]===a)continue;const u=Object.getOwnPropertyDescriptor(t,c);if(!u?.get&&!u?.set&&(t[c]=a,typeof a===o.function)){if(s.mem)continue;B(r+1,c,s,t,n)}}return t}function B(t,e,n,o,r){if(t>0){const t=r.subject.global;o[e].subscription=t.destroy$.toCallback((function(){o[e]=n}))}}function q(t){return typeof t!==o.object||!t||t.tagJsType}let z=[],Z=[],G=[],K=[],Q=[],X=[];const Y={locks:0};function tt(){if(!(Y.locks>0)){++Y.locks;for(const t of z)t.parentNode.removeChild(t);for(const t of Z)t();for(const[t,e]of G)e.textContent=t;for(const t of K)t.relative.appendChild(t.element);for(const{element:t,relative:e}of Q)e.parentNode.insertBefore(t,e);for(const t of X)t();z=[],Z=[],K=[],Q=[],X=[],G=[],--Y.locks}}function et(t,e){const n=document.createTextNode(t);return Q.push({element:n,relative:e}),n}const nt=[void 0,!1,null];function ot(e){return nt.includes(e)?t:e}function rt(t){const e=t.subject.global,n=e.providers;if(n)for(const t of n)for(let n=t.children.length-1;n>=0;--n)t.children[n].subject.global===e&&t.children.splice(n,1)}function st(t){for(const e of t){const t=e.lastArray;if(t){st(t);continue}const n=e.global;if(!n)continue;const o=n.newest,r=n.subscriptions;r&&r.forEach((t=>t.unsubscribe())),a(o.templater)&&rt(o),st(n.context)}}function ct(t,e=[],n=[]){for(const o of t){const t=o.global;if(!t)continue;const r=t.newest;if(r){e.push(r);const o=t.subscriptions;o&&n.push(...o)}const s=t.context;s&&ct(s,e,n)}return{tags:e,subs:n}}function at(t,e,n){const o=n,r=t.subject.global,s=r.htmlDomMeta,c=r.context;r.deleted=!0;for(const t of c){if(t.withinOwnerElement)continue;const o=t.lastArray;if(o){lt(t,o);continue}const r=t.simpleValueElm;if(r){delete t.simpleValueElm,z.push(r);continue}const s=t.global;if(void 0===s)continue;if(!0===s.deleted)continue;s.deleted=!0;const c=s.oldest;c&&(n+=at(c,e,n))}return function(t,e,n){const o=t.map((t=>{const n=t.marker;n&&z.push(n);const o=t.domElement;if(o)return function(t,e){const n=t;if(n.ondestroy){const o=function(t,e){const n=t.ondestroy.tagFunction;if(n)return(0,n.tagFunction)({target:t,stagger:e})}(n,e);if(i(o))return o.then((()=>{z.push(t),tt()}))}z.push(t)}(o,e)})).filter((t=>t));if(o.length)n.push(Promise.all(o))}(s,o,e),n}function ut(t,e){const n=t.subject.global;n.deleted=!0,st(n.context),n.destroy$&&(n.destroy$.next(),rt(t));const o=[];return e=at(t,o,e),o.length?Promise.all(o).then((()=>e)):e}function it(t,e){return!f(t)&&(lt(e,e.lastArray),9)}function lt(t,e){const n={added:0,removed:0};delete t.lastArray;for(let t=0;t<e.length;++t)Yt(e[t],n)}function pt(t,e){if([null,void 0].includes(t)||!f(t)&&typeof t!==o.object)return gt(t,e),-1;const n=e.simpleValueElm;return delete e.simpleValueElm,z.push(n),6}function ft(t,e){const n=e.global,o=n?.newest;if(c(t))return!D(t,o)&&(ut(o,0),e.global={renderCount:0},7);const r=t?.tagJsType;return!r&&(ut(o,0),delete e.global,8)}function gt(t,e){const n=ot(t),o=e.simpleValueElm;G.push([n,o])}b.tagClosed$=new d(void 0,(function(t){ke()||t.next()}));const dt="style",ht="class";function bt(t,e,n){if(Vt(t))switch(t){case"oninit":X.push((()=>function(t,e){const n=t.oninit;if(!n)return e.added;const o=n.tagFunction;if(!o)return e.added;const r=o.tagFunction;return r?(r({target:t,stagger:e.added}),++e.added):e.added}(n,{added:0,removed:0})));break;case"autofocus":X.push((()=>n.focus()));break;case"autoselect":X.push((()=>n.select()))}const o=t.split("."),r=o[0];if(r!==dt){if(r===ht){if(o.shift(),e){for(const t of o)Z.push((()=>n.classList.add(t)));return}for(const t of o)Z.push((()=>n.classList.remove(t)))}}else Z.push((()=>n.style[o[1]]=e))}function mt(t,e){const n=function(t,e,n=[]){const o=t.subject.global;n.push({support:t,renderCount:o.renderCount,provider:e});const r=e.children;for(let t=r.length-1;t>=0;--t){const o=r[t],s=o.subject.global;n.push({support:o,renderCount:s.renderCount,provider:e})}return n}(t,e);return n}function yt(t,e=[]){const n=t.subject.global,o=we(t.templater),r=t.ownerSupport;if(o)return yt(r,e);if(n.locked)return e.push(t),e;const c=n.newest,a=c.templater.tagJsType===s.tagComponent,u=r&&t.templater.tagJsType!==s.stateRender&&(!a||function(t,e,n){const o=function(t,e){const n=t.props,o=e.propsConfig.latest;return[ue.IMMUTABLE,ue.SHALLOW].includes(t.propWatch)?le(n,o):!(n&&0===n.length&&0===o.length||R(n,o,fe))}(e,n);return!(!t||!o)}(r,c.templater,c)),i=function(t){const e=t.subject.global.providers;if(!e)return[];const n=[];for(const t of e){const e=mt(t.owner,t);n.push(...e.map((t=>t.support)))}return n}(c);return e.push(...i),u?(yt(r,e),a&&e.push(c),e):(e.push(c),e)}function vt(t){++Y.locks,t.forEach(wt),--Y.locks,tt()}function wt(t){const e=t.subject.global;e&&Ce(e.newest)}const Ct="no-data-ever",Tt="promise-no-data-ever";function kt(t,e,n){return i(t)?(e.subject.global.locked=!0,t.then((()=>(!0===n.deleted||(delete e.subject.global.locked,vt(yt(e))),Tt)))):Ct}function jt(t,e,n,o,r){if(r)return bt(t,e,n);o(n,t,e)}function St(t,e,n,o){const r=t.appElement;"blur"===e&&(e="focusout");const s="_"+e,c=t.subject.global.events;if(!c[e]){const t=function(t){t.originalStopPropagation=t.stopPropagation,Et(t,s,t.target)};c[e]=t,r.addEventListener(e,t)}n[s]=o,n[e]=o}function Et(t,e,n){const o=n[e];if(o){let e=!1;if(t.stopPropagation=function(){e=!0,t.originalStopPropagation.call(t)},o(t),t.defaultPrevented||e)return}const r=n.parentNode;r&&Et(t,e,r)}function xt(t,e,n,o){const r=function(...e){return r.tagFunction(t,e)};r.tagFunction=e,r.support=n,St(n.appSupport,o,t,r)}function Ot(t,e,n,r,s,c,a,i){const l=Mt(e);if(l>=0){const e=t[l],o=$t(e,c,!0);return o.isAttr=!0,o.element=n,o.howToSet=s,o.isNameOnly=!0,void Wt(t,e,n,r,s,c)}const p=Mt(a);if(p>=0){const a=t[p],l={isAttr:!0,element:n,attrName:e,checkValueChange:pt,withinOwnerElement:!0};return c.push(l),u(l.value)?function(t,e,n,o,r,s){s&&Z.push((function(){n.removeAttribute(t)}));const c=e.value;if(u(c)){const a=function(c){Pt(c,t,e,n,o,r,s)},u=c.subscribe(a),i=e.global;(i.subscriptions=i.subscriptions||[]).push(u)}Pt(e.value,t,e,n,o,r,s)}(e,l,n,r,s,i):(function(t,e,n,r,s,c,a){n.attrName=t,n.element=r,n.howToSet=s,typeof e===o.function?Nt(n,e,c,t,r):(n.attrName=t,n.element=r,n.howToSet=s,n.isSpecial=a,jt(t,e,r,s,a))}(e,a,l,n,s,r,i),void(l.value=a))}return jt(e,a,n,s,i)}function Wt(e,n,r,s,c,a){if(![void 0,null,!1].includes(n))if(typeof n!==o.object)0!==n.length&&c(r,n,t);else for(const t in n)Ot(e,t,r,s,c,a,n[t],Jt(t))}function Pt(t,e,n,o,r,c,a){return l(t)?function(t,e,n,o,r,c,a){const u=t.templater.wrapper,i=u?.parentWrap;return(u?.tagJsType||i?.tagJsType)!==s.renderOnce?Nt(a,e,t,o,n):At(e,n,o,r,c,t)}(r,t,o,e,a,c,n):At(t,o,e,a,c,r)}function At(t,e,n,o,r,s){if(l(t))return xt(e,t,s,n);o?bt(n,t,e):nt.includes(t)?Z.push((function(){e.removeAttribute(n)})):r(e,n,t)}function Jt(t){return!!Vt(t)||t.startsWith("class.")||t.startsWith("style.")}function Vt(t){return["autoselect","autofocus","oninit"].includes(t)}function Nt(t,e,n,o,r){const s=t.value;return s&&s.tagFunction&&s.support?(s.tagFunction=e,s.support=n,s):xt(r,e=function(t,e){const n=e.subject.global,o=function(t,e){if(!0===n.deleted)return;const r=n.newest;return function(t,e,n,o){const r=e;return r.subject.global.locked=!0,function(t,e){const n=t.subject.global;delete n.locked;const o=n.blocked;if(o&&o.length){const o=function(t){const e=t.subject.global,n=e.blocked;for(const t of n){const n=Ce(t);e.newest=n}return e.blocked=[],e.newest}(t);return kt(e,o,n)}return function(t,e,n){return vt(yt(t)),kt(e,t,n)}(n.newest,e,n)}(r,t.apply(n,o))}(o.tagFunction,r,t,e)};return o.tagFunction=t,o.support=e,o}(e,n),n,o)}function Mt(t){return p(t)&&"tagJsVar"in t?t.tagJsVar:-1}function Rt(t,e,n){Z.push((()=>{void 0!==n&&!1!==n&&null!==n?t.setAttribute(e,n):t.removeAttribute(e)}))}function Lt(t,e,n,o,r,s,c,a,u=[]){const i=document.createElement("div"),l=[];for(const p of t){const t={};l.push(t);const f=p.v;if(!isNaN(f)){Dt(e,r,c,n,u,o,s);continue}if("text"===p.nn){const e=t,n=e.tc=p.tc;i.innerHTML=n;const o=e.domElement=document.createTextNode(i.innerText);c?K.push({element:o,relative:c}):Q.push({element:o,relative:a});continue}const g=t.domElement=document.createElement(p.nn);p.at&&p.at.map((t=>Ot(e,t[0],g,n,Rt,r,t[1],t[2]))),c?K.push({element:g,relative:c}):Q.push({element:g,relative:a}),p.ch&&(t.ch=Lt(p.ch,e,n,o,r,s+1,g,a,u).dom)}return{subs:u,dom:l,context:r}}function Dt(e,n,o,r,s,c,a){const i=e[n.length],l=document.createTextNode(t),p=$t(i,n,a>0);p.placeholder=l,o?K.push({relative:o,element:l}):Q.push({element:l,relative:r.subject.placeholder}),u(i)?s.push({insertBefore:l,appendTo:o,subject:i,support:r,counts:c,contextItem:p}):(r.subject.global.locked=!0,te(i,p,r,c,o),delete r.subject.global.locked,p.value=i)}function It(t,e,n,o){const r=t.subject.global;r.oldest=t,r.newest=t,++Y.locks;const c=function(t,e={counts:{added:0,removed:0}},n,o){const r=function(t){const e=t.templater.tag;return e.tagJsType===s.dom?e.dom:function(t,e){const n=function(t,e){const n=t.map((t=>t.length));return n.push(t.length),Number(n.join(""))}(t),o=Be[n],r=o&&function(t,e,n){return!(!n||n.strings.length!==t.length||!n.strings.every(((e,n)=>e===t[n]))||n.values.length!==e.length)}(t,e,o);if(r)return o.domMetaMap;const s=function(t,e){Je(t,e);const n=function(t){const e=[],n=[],o=[];let r=null,s=-1,c=0;const a=new RegExp(Ae,"g");for(t=function(t){return t.replace(Me,(function(t){return t.replace(/\[l t\]/g,"[l&nbsp;t]").replace(/\[g t\]/g,"[g&nbsp;t]").replace(/</g,"[l t]").replace(/>/g,"[g t]")}))}(t);c<t.length;){const u=a.exec(t);if(!u)break;const[i,l,p]=u,f=i.startsWith("</"),g=i.endsWith("/>");if(c<u.index){const e=t.slice(c,u.index);e.trim()&&Ve(e).forEach((t=>{t.startsWith(je)&&(t=je+ ++s+Se),Ne(r,n,t)}))}if(c=u.index+i.length,f){r=o.pop()||null;continue}const d=[];let h;for(;null!==(h=Pe.exec(p));){const t=h[1]||h[3]||h[5];let n=h[2]||h[4]||h[6];if(void 0===t)continue;const o=""!==h[2],r=void 0===n&&o,c=t.toLowerCase(),a=c.startsWith("on")?Re(c):c;if(r){if(t.slice(0,je.length)===je){const t=je+ ++s+Se;e.push(["at",t]),d.push([t]);continue}if(h[0].startsWith(t)&&h[0].slice(t.length,h[0].length).search(/\s+$/)>=0){d.push([a]);continue}n=je+ ++s+Se}o||(n=h[2]);const u=[a,n];Jt(a)&&u.push(!0),d.push(u)}const b={nn:l};d.length&&(b.at=d),r?(r.ch||(r.ch=[]),r.ch.push(b)):n.push(b),g||(o.push(r),r=b)}if(c<t.length){const e=t.slice(c);e.trim()&&Ve(e).forEach((t=>(t.startsWith(je)&&++s,Ne(r,n,t))))}return n}(Je(t,e).join(""));return n}(t,e),c=Ie(s,e.length);c.forEach(Fe);const a={interpolation:void 0,string:void 0,strings:t,values:e,domMetaMap:c};return Be[n]=a,c}(e.strings,e.values)}(t),c=t.templater.tag.values,a=[];t.subject.global.context=a;return Lt(r,c,t,e.counts,a,0,n,o)}(t,o,e,n);return r.htmlDomMeta=c.dom,--Y.locks,c}function $t(t,e,n){const o={value:t,checkValueChange:pt,withinOwnerElement:n};return e.push(o),o}function Ut(t,e){const n=e.global.newest;n.ownerSupport=t,e.checkValueChange=ft;const o=It(n,void 0,e.placeholder,{counts:{added:0,removed:0}});for(const t of o.subs)ee(t);return n}function Ht(){return{tagJsType:s.templater}}function _t(t,e,n){const o=function(t,e,n,o,r){const s={templater:t,subject:o,castedProps:void 0,appSupport:void 0};return s.ownerSupport=e,s.appSupport=n,s}(t,e,e.appSupport,n);return n.global.context=[],o}function Ft(t,e,n,o){n.checkValueChange=ft;const r=_t(t,e,n);r.ownerSupport=e;const s=It(r,o,void 0,{counts:{added:0,removed:0}});for(const t of s.dom)t.marker&&K.push({element:t.marker,relative:o}),t.domElement&&K.push({element:t.domElement,relative:o});let c=-1;const a=s.subs.length-1;for(;c++<a;)ee(s.subs[c]);return r}function Bt(t,e,n,r){const s=t[e],c=n[e];if(s!==c.value&&!u(s)){if(c.isAttr)return function(t,e,n,r){if(n.isNameOnly)return function(t,e,n,r,s,c,a){if(n){if(typeof n===o.object)if(typeof e===o.object)for(const t in n)t in e||Z.push((function(){r.removeAttribute(t)}));else for(const t in n)Z.push((function(){r.removeAttribute(t)}));if([void 0,null,!1].includes(e))return void r.removeAttribute(n)}Wt(t,e,r,s,c,[])}(t,e,n.value,n.element,r,n.howToSet),n.value=e,!1;const s=n.element;return Pt(e,n.attrName,n,s,r,n.howToSet,n.isSpecial),n.value=e,!1}(t,s,c,r);Zt(c,s,r),c.value=s}}function qt(t,e){const n=t.subject.global.context;!function(t,e){const n=e.templater.tag||e.templater,o=e.templater.values||n.values;t.templater.tag.values=o}(t,e),++Y.locks,function(t,e){const n=t.templater.tag.values;let o=0;const r=n.length;for(;o<r;)Bt(n,o,e,t),++o}(t,n),--Y.locks,tt()}const zt=[s.tagComponent,s.stateRender];function Zt(t,e,n){const r=t.checkValueChange(e,t);if(-1===r)return;const c=e&&e.tagJsType;if(c){if(zt.includes(c))return t.global=t.global||{renderCount:0},void function(t,e,n){if(!e.global.newest)return void ne(t,e,n,{added:0,removed:0});!function(t,e,n){const r=n.global,c=r.newest,a=c.templater.wrapper,u=e.templater.wrapper;let i=!1;const l=[s.stateRender,s.renderOnce].includes(e.templater.tagJsType);l?i=e.templater.tagJsType===s.renderOnce||D(c,e):a&&u&&(i=a.parentWrap.original===u.parentWrap.original);const p=e.templater;if(!i)return void function(t,e,n){ut(t.global.oldest,0),t.global={renderCount:0};ne(e,t,n,{added:0,removed:0})}(n,p,t);const f=l||function(t,e){const n=function(t,e,n){switch(n){case ue.NONE:return 1;case ue.SHALLOW:case ue.IMMUTABLE:return le(t,e)}return function(t,e){let n=t,r=e;n=[...t],r=[...e||[]];const s=n.every(((t,e)=>function(t,e,n,r){const s=r[e];if(typeof t===o.object){const e={...t},n={...s||{}},o=Object.entries(e).every((([t,o])=>ge(o,n[t],(()=>{delete e[t],delete n[t]}))));return o}return ge(t,s,(()=>{n.splice(e,1),r.splice(e,1)}))}(t,e,n,r)));return!s&&7}(t,e)}(e.props,t.propsConfig.latest,t.templater.propWatch);return n}(c,p);f?r.locked?r.blocked.push(e):Ce(e):function(t,e,n,o,r){const s=oe(e,n,o,t.props,r),c=e.propsConfig;c.castProps=s;n.propsConfig.latest=c.latest}(p,e,c,t,p.propWatch===ue.DEEP?fe:pe)}(n,de(t,n,n.appSupport,e),e)}(e,t,n);if(c===s.renderOnce)return}const a=t.global;if(a){const r=a.newest;if(r){if(typeof e===o.function)return;!function(t,e,n,o){const r=de(n.templater||n,o,o.appSupport,e);qt(t.subject.global.oldest,r)}(r,t,e,n);const s=t.global;return void(s.locked||++s.renderCount)}}if(c)switch(c){case s.templater:return void Ut(n,t);case s.tag:case s.dom:const o=e;let r=o.templater;return r||(r=Ht(),o.templater=r,r.tag=o),(t.global=t.global||{renderCount:0}).newest=_t(r,n,t),void Ut(n,t)}f(e)?Kt(t,e,n,{added:0,removed:0}):typeof e!==o.function?r?function(t,e){e.checkValueChange=pt;const n=e.placeholder,o=ot(t);e.simpleValueElm=et(o,n)}(e,t):gt(e,t):t.value=e}function Gt(t,e,n){n.checkValueChange=ft;const o=t;let r=o.templater;r||(r=U(ue.DEEP),r.tag=o,o.templater=r);const s=n.global={renderCount:0},c=s.newest=de(r,e,e.appSupport,n);return s.oldest=c,n}function Kt(t,e,n,o,r){t.lastArray||(t.lastArray=[]);let s=t.lastArray,c=t.placeholder,a=0;const u=t.lastArray=s.filter((function(t,n){const r=function(t,e,n,o,r,s){const c=e.length-1,a=n-r;return a<0||c<a?(Yt(o[n],s),++r,1):0}(0,e,n,s,a,o);return a+=r,0===r})),i=r,l=e.length;for(let t=0;t<l;++t)c=Qt(e,t,u,n,c,o,i).placeholder}function Qt(t,e,n,o,r,s,c){const a=t[e],u=n[e];return u?function(t,e,n,o,r,s,c,a){if(n.length>r)return Zt(e,t,o),e;return Xt(t,s,o,c,n,a)}(a,u,n,o,e,r,s,c):Xt(a,r,o,s,n,c)}function Xt(t,e,n,o,r,c){const a={value:t,checkValueChange:pt,withinOwnerElement:!1};o.added=o.added+1;const u=document.createTextNode("");return a.placeholder=u,c||Q.push({element:u,relative:e}),function(t,e,n){const o=t.tagJsType;if(o)switch(o){case s.templater:Gt(t.tag,e,n);break;case s.tag:case s.dom:Gt(t,e,n)}}(t,n,a),te(t,a,n,o,c),a.value=t,r.push(a),c&&K.push({element:u,relative:c}),a}function Yt(t,e){const n=t.global,o=n.newest;if(n.deleted=!0,o)ut(o,e.removed);else{const e=t.simpleValueElm;delete t.simpleValueElm,z.push(e)}++e.removed}function te(t,e,n,o,r){const c=t?.tagJsType;if(c)switch(c){case s.templater:return e.checkValueChange=ft,r?Ft(t,n,e,r):Ut(n,e);case s.dom:case s.tag:e.checkValueChange=ft;const c=t;let a=c.templater;a||(a=function(t){const e=Ht();return e.tag=t,t.templater=e,e}(c));const u=e.global={renderCount:0};return r?Ft(a,n,e,r):(u.newest=_t(a,n,e),e.checkValueChange=ft,Ut(n,e));case s.stateRender:case s.tagComponent:if(e.global={renderCount:0},e.checkValueChange=ft,r){const c=function(t,e,n,o,r){const c=de(t,n,n.appSupport,e),a=c.propsConfig;if(a){const e=t.tagJsType!==s.tagComponent?[]:ce(t,c);a.castProps=e}const u=e.global,{support:i}=ye(c,u.newest,e,n);return function(t,e,n){let o=K.length;const r=It(t,n,void 0,{counts:e});for(const t of r.dom)t.domElement&&K.splice(o++,0,{element:t.domElement,relative:n}),t.marker&&K.splice(o++,0,{element:t.marker,relative:n});const s=r.subs;for(const t of s)ee(t)}(i,o,r),i}(t,e,n,o,r);return++e.global.renderCount,c}const i=ne(t,e,n,o);return++e.global.renderCount,i;case s.renderOnce:e.global={renderCount:0};const l=function(t,e,n){const o=U(ue.DEEP);o.tagJsType=t.tagJsType;const r=_t(o,n,e);function s(){return o.tag=t(),r}return o.wrapper=s,s.parentWrap=s,s.tagJsType=t.tagJsType,s.parentWrap.original=t,r}(t,e,n);he(l,void 0,e,n);const p=Ft(l.templater,n,e,r);return++e.global.renderCount,e.checkValueChange=ft,p}if(f(t))return Kt(e,t,n,o,r),void(e.checkValueChange=it);u(t)||function(t,e,n){const o=et(ot(t),n);e.simpleValueElm=o,e.checkValueChange=pt}(t,e,e.placeholder)}function ee({subject:t,support:e,counts:n,contextItem:o,appendTo:r}){let s=function(t){te(t,o,e,{...n},c?r:void 0),c||b.stateConfig.support||tt(),s=function(t){if(t===o.value)return!1;Zt(o,t,e),b.stateConfig.support||tt()}},c=!0;const a=t.subscribe((function(t){s(t)}));c=!1;const u=e.subject.global;(u.subscriptions=u.subscriptions||[]).push(a)}function ne(t,e,n,o){const r=de(t,n,n.appSupport,e),c=r.propsConfig;if(c){const e=t.tagJsType!==s.tagComponent?[]:ce(t,r);c.castProps=e}const a=e.global,{support:u}=ye(r,a.newest,e,n);return function(t,e,n){n.checkValueChange=ft;const o=It(t,void 0,n.placeholder,{counts:e}).subs;for(const t of o)ee(t)}(u,o,e),u}function oe(t,e,n,o,r,s=-1){const c=e.subject.global.newest;if(!c){const e=_(o,t,s);return o.push(...e),t.propsConfig.castProps=e,o}const a=(e=c||e).propsConfig.castProps,u=[];for(let e=0;e<o.length;++e){const c=o[e],i=re(a[e],c,t,n,s+1,r);u.push(i)}return t.propsConfig.castProps=u,u}function re(t,e,n,r,s,c){if(typeof t===o.function)return e.mem?(t.mem=e.mem,e):(t.mem=e,t);if(c===s)return e;if(q(e))return e;if(f(e)){for(let o=e.length-1;o>=0;--o){const s=e[o];e[o]=re(t[o],s,n,r,c+1,o)}return e}if(void 0===t)return e;const a=Object.keys(e);for(const o of a){const a=e[o],u=re(t[o],a,n,r,s,c+1);if(e[o]===u)continue;const i=Object.getOwnPropertyDescriptor(e,o)?.set;i||(e[o]=u)}return e}function se(t,e,n,r){const c=e.original;let a;t.tagJsType===s.stateRender?(a=t,a=t()):(a=c(...r),typeof a===o.function&&(a=a())),a.templater=t,t.tag=a;const u=b.stateConfig.array;return n.state=u,n}function ce(t,e,n){const o=t.propWatch===ue.DEEP?fe:pe,r=t.props,s=e.propsConfig;let c=s.castProps;const a=n?.propsConfig,u=a?.castProps;return u&&(s.castProps=u,c=oe(e,n,n.ownerSupport,r,o)),c||_(r,e,0)}let ae=0;var ue;function ie(t,e=ue.SHALLOW){const n=function(...t){const o=U(e,t);o.tagJsType=s.tagComponent;const r=function(t,e){return function(n,o,r){const s=ce(t,n,r),c=n.ownerSupport,a=de(t,c,n.appSupport,o,s);return se(t,e,a,s)}}(o,n);return r.parentWrap||(r.parentWrap=n),o.wrapper=r,o};n.original=t;const o=t;return n.original=o,o.tags=H,o.setUse=b,o.tagIndex=ae++,H.push(n),n}function le(t,e){return t.length!==e.length?1:!t.every(((t,n)=>{const r=e[n];return f(t)&&f(r)?t===r:typeof t===o.function&&typeof r===o.function||t===r||typeof t===o.object&&typeof e===o.object&&Object.entries(t).every((t=>function([t,e],n){const r=n[t];return typeof e===o.function&&typeof r===o.function||r===e}(t,r)))}))&&3}!function(t){t.DEEP="deep",t.SHALLOW="shallow",t.NONE="none",t.IMMUTABLE="immutable"}(ue||(ue={})),ie.renderOnce=function(){throw new Error("Do not call tag.renderOnce as a function but instead set it as: `(props) => tag.renderOnce = () => html`` `")},ie.state=function(){throw new Error("Do not call tag.state as a function but instead set it as: `(props) => tag.state = (state) => html`` `")},ie.route=function(t){throw new Error("Do not call tag.route as a function but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")},ie.key=function(t){return{set html(e){e.arrayValue=t}}},ie.app=function(t){throw new Error("Do not call tag.route as a function but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")},ie.deepPropWatch=ie,ie.immutableProps=function(t){return ie(t,ue.IMMUTABLE)},ie.watchProps=function(t){return ie(t,ue.SHALLOW)},Object.defineProperty(ie,"renderOnce",{set(t){t.tagJsType=s.renderOnce}}),Object.defineProperty(ie,"state",{set(t){t.parentWrap={original:{setUse:b,tags:H}},t.tagJsType=s.stateRender}});const pe=3,fe=10;function ge(t,e,n){if(typeof t!==o.function)return!!R(t,e,fe)&&4;if(typeof e!==o.function)return!1;const r=e?.original;return r&&(e=r),t.original&&(t=t.original),t.toString()===e.toString()?(n(),5):(n(),6)}function de(t,e,n,o,r){const c=function(t,e,n){const o={templater:t,subject:e,castedProps:n,state:[],appSupport:void 0};o.appSupport=o;const r=e.global;r.blocked=[],r.destroy$=new d;const c=t.props;return c&&(o.propsConfig=function(t,e,n){const o=t.templater;if(o.tagJsType!==s.stateRender){switch(o.propWatch){case ue.IMMUTABLE:return t.propsConfig={latest:e,castProps:n};case ue.SHALLOW:return t.propsConfig={latest:e.map((t=>$(t,pe))),castProps:n}}return t.propsConfig={latest:e.map((t=>$(t,fe))),castProps:n}}}(o,c,n)),o}(t,o,r);return c.ownerSupport=e,c.appSupport=n,c}function he(t,e,n,o){const r=n.global,c=r.renderCount;!function(t,e){if(e){if(e!==t){const n=e.state;t.state=n}!function(t){const e=t.state,n=b.stateConfig;n.rearray=e,n.rearray,T.handler=k,T.letHandler=w,n.support=t}(t)}else!function(t){T.handler=j,T.letHandler=v;const e=b.stateConfig;e.rearray=[],e.support=t}(t)}(t,e);const a=t.templater;let u;return u=a.tagJsType===s.stateRender?se(a,a,de(a,o,t.appSupport,n)):(0,a.wrapper)(t,n,e),function(t,e){!function(t){const e=b.stateConfig;delete e.support,t.state=e.array,e.array=[]}(t),b.tagClosed$.next(e)}(t,o),r.newest=u,r.renderCount>c+1?r.newest:u}function be(t){const e=t.subject.global,{subs:n,tags:o}=ct(e.context);me(t);for(const t of o)me(t);e.subscriptions&&n.forEach((t=>t.unsubscribe())),t.subject.global={renderCount:0}}function me(t){const e=t.subject.global;!0!==e.deleted&&(e.deleted=!0,at(t,[],0))}function ye(t,e,n,o){const r=e?.templater,c=r?.tag,a=he(t,e,n,o),u=!e||D(e,a);if(u){if(e){const t=e.templater.tag,o=n.global;t&&o.renderCount>1&&function(t,e,n){if(t.tagJsType!==s.dom){if(n){const o=n.strings;if(o){const n=o?.length;n!==t.strings.length&&be(e)}}}else{const o=n?.dom;o!==t.dom&&be(e)}}(t,e,c)}}else{!function(t,e){const n=t.subject.global;let o=-1;const r=n.providers=n.providers||[],s=r.length-1;for(;o++<s;){const t=r[o];let s=-1;const c=t.children.length-1;for(;s++<c;)if(n===t.children[s].subject.global)return t.children.splice(s,1),void t.children.push(e)}}(e,a),be(e);const t=a.subject.global;t.oldest=a,t.newest=a}const i=e?.ownerSupport;return a.ownerSupport=o||i,{support:a,wasLikeTags:u}}function ve(t,e,n,o){const r=o.global,{support:s,wasLikeTags:c}=ye(e,t,o,n);return c?(qt(r.oldest,s),s):(Ut(n,o),s)}function we(t){return s.templater===t.tagJsType}function Ce(t){const e=t.subject.global,n=we(t.templater),o=t.ownerSupport;if(n)return Te(o,t);if(e.locked)return e.blocked.push(t),t;e.locked=!0;const r=t.subject;return e.blocked.length&&(t=e.blocked.pop(),e.blocked=[]),delete e.locked,ve(e.newest,t,o,r)}function Te(t,e){const n=t.subject.global;return n&&!0!==n.deleted?Ce(n.newest||t):e}function ke(){return b.stateConfig.support}new V("callback() was called outside of synchronous rendering. Use `callback = callbackMaker()` to create a callback that could be called out of sync with rendering");const je=":tagvar",Se=":",Ee="ondoubleclick",xe=/(:tagvar\d+:)/,Oe=/(^:tagvar\d+:|:tagvar\d+:$)/g,We="__safeTagVar",Pe=/([:_a-zA-Z0-9\-\.]+)\s*(?:=\s*"([^"]*)"|=\s*(\S+))?/g,Ae=/<\/?([a-zA-Z0-9\-]+)((?:\s+[a-zA-Z_:][\w:.\-]*(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'=<>`]+))?)+\s*|\s*)\/?>/g;function Je(t,e){return function(t,e){const n=t.map(((t,n)=>n<e.length?t+je+n+Se:t));return function(t,e,n){const o=n.length-e.length;if(o>0)for(let n=o;n>0;--n)t.push(je+(e.length+n-1)+Se)}(n,t,e),n}(t.map((t=>t.replace(Oe,((t,e)=>We+e)))),e)}function Ve(t){return t.split(xe).filter((t=>""!==t))}function Ne(t,e,n){var o;!function(t,e,n){t?(t.ch||(t.ch=[]),t.ch.push(n)):e.push(n)}(t,e,{nn:"text",tc:(o=n,o.replace(/(\[l t\]!--[\s\S]*?--\[g t\])/g,(function(t){return t.replace(/\[l t\]/g,"<").replace(/\[g t\]/g,">").replace(/\[l&nbsp;t\]/g,"[l t]").replace(/\[g&nbsp;t\]/g,"[g t]")})))})}const Me=new RegExp("(\x3c!--[\\s\\S]*?--\x3e)","g");function Re(t){return t.startsWith("on")?t.length===Ee.length&&t===Ee?"dblclick":t.slice(2,t.length):t}const Le=new RegExp(je+"(\\d+)"+Se,"g"),De="ch";function Ie(t,e,n=[],o=[]){const r=t;for(let t=0;t<r.length;t++){const s=[...o,t],c=r[t];if(c.at){const t=c.at;c.at=Ue(t,e)}if(c.ch){const t=c.ch,o=[...s,De];c.ch=Ie(t,e,n,o)}t=$e(c,e,r,t)}return r}function $e(t,n,o,r){if("text"!==t.nn)return r;const s=t;let c,a=s.tc;if(typeof a!==e.string)return r;for(;null!==(c=Le.exec(a));){const t=c[1],e=parseInt(t,10);if(!isNaN(e)&&e<n){const t=je+e+Se,n=a.slice(c.index+t.length);o.splice(r,1,{nn:"text",v:e}),a=n,Le.lastIndex=0}}return s.tc=a,r}function Ue(t,n){return t.map((t=>{const[o,r,s]=t;if(o.startsWith(je)){const t=parseInt(o.replace(je,""),10);if(!isNaN(t)&&t<n)return[{tagJsVar:t}]}if(typeof r===e.string&&r.startsWith(je)){const t=parseInt(r.replace(je,""),10);if(!isNaN(t)&&t<n)return[o,{tagJsVar:t},s]}return t}))}const He="__safeTagVar",_e=/__safeTagVar(\d+)/g;function Fe(t){if(t.at&&(t.at=t.at?t.at.map((t=>{if(1===t.length)return t;const[,n]=t;if(typeof n===e.string&&n.startsWith(He)){const e=parseInt(n.replace(He,""),10);t[1]=je+e+Se}return t})):[]),t.ch){const n=t.ch;for(let t=0;t<n.length;t++){const o=n[t];if("text"===o.nn){if(typeof o.tc!==e.string)return;o.tc=o.tc.replace(_e,((t,e)=>je+e+Se))}Fe(o)}0===n.length&&delete t.ch}}const Be={};function qe(t,e){const n=e.constructMethod.compareTo;t.global.providers.forEach((t=>{n===t.constructMethod.compareTo&&(t.constructMethod.compareTo=e.constructMethod.compareTo)})),t.childTags.forEach((t=>qe(t,e)))}async function ze(t,e,n,o){const r=t.global,s=r.oldest,c=r.newest,a=e.original.toString();n.original&&(n.compareTo=a),n.original=e.original,c.templater.wrapper.parentWrap.original=e.original,c.templater.wrapper.parentWrap.original=e.original,s.templater.wrapper.parentWrap.original=e.original;const u=r.providers,i=u?u.map((t=>t.constructMethod)):[],l=o.renderTagOnly(c,c,c.subject,c.ownerSupport),p=s.appSupport,f=s.ownerSupport.subject.global,g=r.providers,d=f.oldest;l.ownerSupport=d,g&&g.forEach(((t,e)=>{i[e].compareTo=t.constructMethod.compareTo,t.constructMethod.compareTo=t.constructMethod.toString(),qe(p,t)})),await ut(s,0);const h=l.subject.global;delete s.subject.global.deleted,It(l,void 0,s.subject.placeholder,{counts:{added:0,removed:0}}),h.newest=l,h.oldest=l}let Ze;function Ge(t){[...document.querySelectorAll("app")].forEach(t)}async function Ke(){const t=[...document.querySelectorAll("[tag]")].map((async t=>{const e=t.getAttribute("url"),o=t.getAttribute("name"),r=await n(519)(`${e}?${Date.now()}`);try{const t=r[o]();return{newApp:r,newTemplater:t,tagName:o}}catch(t){throw console.error(`Could not load tag by name ${o}`,{newApp:r,url:e}),t}}));return await Promise.all(t)}!function t(){const e=new WebSocket("ws://localhost:3000");e.addEventListener("error",(t=>{console.error("WebSocket error:",t)})),e.addEventListener("open",(t=>{console.info("WebSocket connection opened:",t)})),e.addEventListener("message",(async t=>{console.info("💬 from server:",t.data,t.data),"Connected to the WebSocket endpoint"!==t.data?Ge((t=>{!async function(t){const e=Qe,n=t.setUse;(await Ke()).forEach((async t=>{const{newApp:o,newTemplater:r}=t,s=o.hmr,c=r.wrapper.parentWrap.original,a=c.tags,u=c.setUse;u.memory.providerConfig=n.memory.providerConfig,n.tagUse.length=0,n.tagUse.push(...u.tagUse),Object.assign(n.memory,u.memory),u.memory=n.memory;const i=e.reduce(((t,e)=>{let n=a.map((t=>t.original)).find((t=>t.toString()===e.original.toString()));if(!n){const o=e.tagIndex;void 0!==o&&(n=a[o]),t.push({oldTag:e,newTag:n})}return t}),[]);i.length||console.warn("No old tags changed",{newTags:a,oldTags:e});const l=e.length===a.length;if(a.forEach((t=>{let n=e.map((t=>t.original)).find((e=>t.original.toString()===e.toString())),o=null;if(!n&&i[0].newTag&&(o=t.tagIndex,l&&(n=e[o])),!n){if(i[0].newTag){const n="HMR has two tags";throw console.warn(n,{first:i[0].newTag.original,second:t.original,equal:t.original===i[0].newTag.original,oldTags:e,newTags:a,tagIndex:o}),new Error(n)}i[0].newTag=t}})),i.length){const{oldTag:t,newTag:e}=i[0],n=function(t,e){const n=t.templater.wrapper.parentWrap,o=n.original===e;if(o)return o;return n.original.toString()===e.toString()}(Ze,t.original);if(n)throw Ze.templater.wrapper.parentWrap.original=e.original,Ze.ownerSupport={clones:[],childTags:[]},Qe=a,new Error("app changed, need code for that");const o=await Xe(Ze,i[0],s);t.original=e.original,e.compareTo=e.original.toString(),o<=0?console.warn("✋ No components were updated",i[0]):console.debug(`✅ Replaced and update components ${o}`,i[0])}Qe=a,console.info("✅ ✅ ✅ rebuilt")}))}(t)})):Ge((t=>{Ke().then((e=>{e.forEach((({newApp:e,tagName:n})=>{const{tagElement:o}=e.hmr;t.destroy&&t.destroy();const r=o(e[n],t,{test:1});return Qe=r.tags,Ze=r.support,r}))}))}))})),e.addEventListener("close",(e=>{console.info("WebSocket connection closed:",e),t()}))}();let Qe=[];async function Xe(t,{oldTag:e,newTag:n},o){let r=0;const c=t.templater.tag.values.map((async(c,a)=>{const u=c.jsTagType=s.templater;if(!c||!u)return;const i=function(t,e){const n=t.parentWrap.original;if(!n)throw"maybe issue";if(!e.original)throw"maybe issue 2";const o=e.original,r=n===o;if(r)return r;const s=n.toString()===o.toString();if(s)return s;return t.parentWrap.compareTo===o.toString()}(c.wrapper,e);return i?(ze(t.subject.global.context[a],n,e,o),void++r):void 0}));await Promise.all(c);const a=t.subject.global.context.map((async t=>{const s=t.global.newest;s&&(r+=await Xe(s,{oldTag:e,newTag:n},o))}));return await Promise.all(a),r}})();