var t={519:t=>{function e(t){return Promise.resolve().then((()=>{return import(t);throw e.code="MODULE_NOT_FOUND",e}))}e.keys=()=>[],e.resolve=e,e.id=519,t.exports=e}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,n),s.exports}n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{const t="";var e,o,r;(r=e||(e={})).string="string",r.number="number",r.boolean="boolean",r[void 0]="undefined",function(t){t.function="function",t.date="date",t.unknown="unknown",t.object="object"}(o||(o={}));const s={tag:["html"],dom:["dom"],templater:["templater"],tagComponent:["tag-component"],tagArray:["tag-array"],subject:["subject"],tagJsSubject:["tagJsSubject"],oneRender:["oneRender"],stateRender:["stateRender"]};function c(t){return[s.dom,s.tag,s.templater].includes(t?.tagJsType)}function a(t){const e=t?.tagJsType;return e&&[s.tagComponent,s.stateRender].includes(e)}function i(t){return!!t?.subscribe}function u(t,e,n){const o=[...e],r=o.shift(),s=t=>{if(o.length)return u(t,o,n);n(t)};let c=s;const a=r(t,{setHandler:t=>c=t,next:s});c(a)}class l{value;onSubscription;methods=[];isSubject=!0;subscribers=[];subscribeWith;constructor(t,e){this.value=t,this.onSubscription=e}subscribe(t){const e=function(t,e,n){const o=l.globalSubCount$;l.globalSubCount$.next(o.value+1);const r=function(){r.unsubscribe()};return r.callback=e,r.subscriptions=[],r.unsubscribe=function(){return function(t,e,n){!function(t,e){const n=t.findIndex((t=>t.callback===e));-1!==n&&t.splice(n,1)}(e,n);const o=l.globalSubCount$;l.globalSubCount$.next(o.value-1),t.unsubscribe=()=>t;const r=t.subscriptions;for(const t of r)t.unsubscribe();return t}(r,n,e)},r.add=t=>(r.subscriptions.push(t),r),r.next=t=>{e(t,r)},r}(0,t,this.subscribers),n=this.subscribeWith;if(n){if(this.methods.length){const n=t;t=t=>{u(t,this.methods,(t=>n(t,e)))}}return n(t)}return this.subscribers.push(e),this.onSubscription&&this.onSubscription(e),e}next(t){this.value=t,this.emit()}set=this.next.bind(this);emit(){const t=this.value,e=this.subscribers;for(const n of e)n.callback(t,n)}toPromise(){return new Promise((t=>{this.subscribe(((e,n)=>{n.unsubscribe(),t(e)}))}))}toCallback(t){const e=this.subscribe(((n,o)=>{e.unsubscribe(),t(n)}));return this}pipe(...t){const e=new l(this.value);return e.setMethods(t),e.subscribeWith=t=>this.subscribe(t),e.next=t=>this.next(t),e}setMethods(t){this.methods=t}static all(t){return function(t){const e=new l;return e.subscribeWith=e=>{const n=[],o=[],r=(r,s)=>{if(n[s]=!0,o[s]=r,n.length===t.length){for(const t of n)if(!t)return;e(o,c)}},s=[...t],c=s.shift().subscribe((t=>r(t,0))),a=s.map(((t,e)=>t.subscribe((t=>r(t,e+1)))));return c.subscriptions=a,c},e}(t.map((t=>i(t)?t:new l(t,(e=>(e.next(t),e))))))}static globalSubCount$=new l(0)}class p extends l{value;constructor(t){super(t),this.value=t}subscribe(t){const e=super.subscribe(t);return t(this.value,e),e}}const f={};f.stateConfig={array:[]};class g{}function d(t){const e=t.callback;if(!e)return t.defaultValue;const[n,o]=function(t){const e=t(g),[n]=e,[o]=t(n);return[n,o]}(e);return n}function h(t){const e=f.stateConfig,n=t instanceof Function?t():t,o={get:function(){return d(o)},defaultValue:n};return e.array.push(o),m(n,o)}function b(){const t=f.stateConfig,e=t.rearray[t.array.length];let n=d(e);const o={get:function(){return d(o)},defaultValue:e.defaultValue};return t.array.push(o),m(n,o)}function m(t,e){return function(n){return e.callback=n,t}}const v={handler:w,letHandler:h};function y(){const t=f.stateConfig,e=t.rearray[t.array.length];return t.array.push(e),e.defaultValue}function w(t){const e=f.stateConfig;let n=t;if(t instanceof Function&&(n=t()),n instanceof Function){const t=n;n=function(...e){return t(...e)},n.original=t}const o={get:function(){return d(o)},defaultValue:n};return e.array.push(o),n}function C(t){return v.handler(t)}function j(t,e){for(let n=t.length-1;n>=0;--n){const o=t[n].get();k(e[n],o)}}function k(t,e){const n=t.callback;n&&n(e)}const T=t=>t,S=(t,e,{init:n,before:o,final:r=T}={})=>{const s=C({pastResult:void 0,values:void 0}),c=s.values;if(void 0===c){if(o&&!o(t))return s.values=t,s.pastResult;const a=(n||e)(t,c);return s.pastResult=r(a),s.values=t,s.pastResult}if(t.every(((t,e)=>t===c[e])))return s.pastResult;if(o&&!o(t))return s.values=t,s.pastResult;const a=e(t,c);return s.pastResult=r(a),c.length=0,c.push(...t),s.pastResult};function x(t,e){return Object.defineProperty(e,"noInit",{get(){const e=t();return e.setup.init=()=>{},e}}),Object.defineProperty(e,"asSubject",{get(){const e=t(),n=C((()=>fe())),o=C((()=>new p(void 0))),r=(t,r)=>(S(t,((t,e)=>{const s=fe(),c=r(t,e);s!==n&&j(f.stateConfig.array,n.state),o.next(c)}),e.setup),o);return r.setup=e.setup,x((()=>r),r),r}}),Object.defineProperty(e,"truthy",{get(){const e=t();return e.setup.before=t=>t.every((t=>t)),e}}),e}function E(t,e){const n=C((function(){return f.stateConfig.array})),o=fe();return C((function(){return new l(t,e).pipe((t=>(j(o.state,n),t)))}))}x((()=>function(t){const e=(e,n)=>S(e,n,t);return e.setup=t,x((()=>e),e),e}({})),((t,e)=>S(t,e))),E._value=t=>{const e=C((function(){return f.stateConfig.array})),n=fe();return C((function(){return new p(t).pipe((t=>(j(n.state,e),t)))}))},E.all=function(t){const e=C((()=>f.stateConfig.array)),n=fe();return l.all(t).pipe((t=>(j(n.state,e),t)))};class A extends Error{details;constructor(t,e,n={}){super(t),this.name=A.name,this.details={...n,errorCode:e}}}class P extends A{constructor(t,e){super(t,"sync-callback-error",e),this.name=P.name}}function O(t,e=15){return W(t,e)}function W(t,e){if(null===t||typeof t!==o.object)return t;if(e<0)return t;if(t instanceof Date)return new Date(t);if(t instanceof RegExp)return new RegExp(t);const n=Array.isArray(t)?[]:Object.create(Object.getPrototypeOf(t));if(Array.isArray(t))for(let o=0;o<t.length;o++)n[o]=W(t[o],e-1);else for(const o in t)t.hasOwnProperty(o)&&(n[o]=W(t[o],e-1));return n}function R(t,e,n=15){return J(t,e,n)}function J(t,e,n){return!!(t===e||(r=t,s=e,r instanceof Function&&s instanceof Function&&r.toString()===s.toString()))||n<0||typeof t===o.object&&typeof e===o.object&&(t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():Array.isArray(t)&&Array.isArray(e)?function(t,e,n){if(t.length!==e.length)return!1;for(let o=0;o<t.length;o++)if(!J(t[o],e[o],n-1))return!1;return!0}(t,e,n-1):!Array.isArray(t)&&!Array.isArray(e)&&function(t,e,n){const o=Object.keys(t),r=Object.keys(e);if(0===o.length&&0===r.length)return!0;if(o.length!==r.length)return!1;for(const s of o)if(!r.includes(s)||!J(t[s],e[s],n-1))return!1;return!0}(t,e,n-1));var r,s}function V(t,e){const n=t.templater,o=e.templater,r=n?.tag||t,c=o.tag;if(n?.tagJsType===s.stateRender)return n.dom===o.dom;if(r.tagJsType===s.dom)return function(t,e){return t.dom===e.dom}(r,c);const a=function(t,e,n,o){const r=t.strings,s=e.strings;if(r.length!==s.length)return!1;if(!r.every(((t,e)=>s[e].length===t.length)))return!1;return function(t,e){if(!(t.length===e.length))return!1;return!!e.every(((e,n)=>{const o=t[n];return!(e instanceof Function&&o instanceof Function)||!(e.toString()!==o.toString())}))}(n.templater.values||t.values,o.templater.values||e.values)}(r,c,t,e);return a}function F(t){return t.map(N)}function N(t){const e=t,n=t instanceof Object&&t.tagJsType;if(n)switch(n){case s.stateRender:return;case s.dom:case s.tag:case s.templater:return F(e.values)}return t instanceof Array?F(e):O(t)}function M(t,e,n,o,r){const c=function(t,e,n){const o={templater:t,subject:e,castedProps:n,state:[],appSupport:void 0};o.appSupport=o;const r=e.global;r.blocked=[],r.destroy$=new l;const c=t.props;return c&&(o.propsConfig=function(t,e,n){const o=t.templater;if(o.tagJsType===s.stateRender)return t.propsConfig={latest:[],latestCloned:[]};if(!1===o.deepPropWatch)return t.propsConfig={latest:e,latestCloned:e,castProps:n};const r=e.map((t=>N(t)));return t.propsConfig={latest:e,latestCloned:r,castProps:n}}(o,c,n)),o}(t,o,r);return c.ownerSupport=e,c.appSupport=n,c}function $(t){const e=t.subject.global,n=e.providers;if(n)for(const t of n)for(let n=t.children.length-1;n>=0;--n)t.children[n].subject.global===e&&t.children.splice(n,1)}function D(t,e,n){return t.map((t=>function(t,e,n,o){return c(t)||!t?t:e?I(t,e,n,o):t}(t,e.ownerSupport,e,n)))}function I(t,e,n,o){if(!t)return t;if(t.tagJsType)return t;if(t instanceof Function)return function(t,e){if(t.mem)return t;const n=function(...t){return n.toCall(...t)};return n.toCall=function(...t){return function(t,e,n){const o=n.subject.global,r=o?.newest||n,s=void 0===fe(),c=t(...e),a=function(){const t=r.subject.global;return!1===s&&!0===t.locked||function(t,e){const n=t.subject;if(ue(t.templater))return pe(e,t);const o=n.global;o.locked=!0,ie(o.newest,t,e,n),delete o.locked}(r,n),c};return s?a():(f.tagClosed$.toCallback(a),c)}(n.mem,t,e)},n.original=t,n.mem=t,Object.assign(n,t),n}(t,e);if(15===o)return t;if(_(t))return t;if(t instanceof Array){for(let r=t.length-1;r>=0;--r){const s=t[r];if(t[r]=I(s,e,n,o+1),s instanceof Function){if(s.mem)continue;L(o+1,r,s,t,n)}}return t}const r=Object.keys(t);for(const s of r){const r=t[s],c=I(r,e,n,o+1);if(t[s]===c)continue;const a=Object.getOwnPropertyDescriptor(t,s);if(!a?.get&&!a?.set&&(t[s]=c,c instanceof Function)){if(r.mem)continue;L(o+1,s,r,t,n)}}return t}function L(t,e,n,o,r){if(t>0){const t=r.subject.global;o[e].subscription=t.destroy$.toCallback((function(){o[e]=n}))}}function _(t){return"object"!=typeof t||!t||t.tagJsType}function U(t,e,n){if(!(t instanceof Function))return!!R(t,e)&&4;if(!(e instanceof Function))return!1;const o=e?.original;return o&&(e=o),t.original&&(t=t.original),t.toString()===e.toString()?(n(),3):(n(),5)}f.tagClosed$=new l(void 0,(function(t){fe()||t.next()}));let H=[],q=[],z=[],Z=[],B=[],G=[];const K={locks:0};function Q(){if(!(K.locks>0)){++K.locks;for(const t of H)t.parentNode.removeChild(t);for(const t of q)t();for(const[t,e]of z)e.textContent=t;for(const t of Z)t.relative.appendChild(t.element);for(const{element:t,relative:e}of B)e.parentNode.insertBefore(t,e);for(const t of G)t();H=[],q=[],Z=[],B=[],G=[],z=[],--K.locks}}function X(t,e){const n=document.createTextNode(t);return B.push({element:n,relative:e}),n}const Y=[void 0,!1,null];function tt(e){return Y.includes(e)?t:e}function et(t){for(const e of t){const t=e.lastArray;if(t){et(t);continue}const n=e.global;if(!n)continue;const o=n.newest,r=n.subscriptions;r&&r.forEach((t=>t.unsubscribe())),a(o.templater)&&$(o),et(n.context)}}function nt(t,e=[],n=[]){for(const o of t){const t=o.global;if(!t)continue;const r=t.newest;if(r){e.push(r);const o=t.subscriptions;o&&n.push(...o)}const s=t.context;s&&nt(s,e,n)}return{tags:e,subs:n}}function ot(t,e,n){const o=n,r=t.subject.global,s=r.htmlDomMeta,c=r.context;r.deleted=!0;for(const t of c){if(t.withinOwnerElement)continue;const o=t.lastArray;if(o){ct(t,o);continue}const r=t.simpleValueElm;if(r){delete t.simpleValueElm,H.push(r);continue}const s=t.global;if(void 0===s)continue;if(!0===s.deleted)continue;s.deleted=!0;const c=s.oldest;c&&(n+=ot(c,e,n))}return function(t,e,n){const o=t.map((t=>{const n=t.marker;n&&H.push(n);const o=t.domElement;if(o)return function(t,e){const n=t;if(n.ondestroy){const o=function(t,e){const n=t.ondestroy.tagFunction;if(n)return(0,n.tagFunction)({target:t,stagger:e})}(n,e);if(o instanceof Promise)return o.then((()=>{H.push(t),Q()}))}H.push(t)}(o,e)})).filter((t=>t));if(o.length)n.push(Promise.all(o))}(s,o,e),n}function rt(t,e){const n=t.subject.global;n.deleted=!0,et(n.context),n.destroy$&&(n.destroy$.next(),$(t));const o=[];return e=ot(t,o,e),o.length?Promise.all(o).then((()=>e)):e}function st(t,e){return!(t instanceof Array)&&(ct(e,e.lastArray),9)}function ct(t,e){const n={added:0,removed:0};delete t.lastArray;for(let t=0;t<e.length;++t)Kt(e[t],n)}function at(t,e){const n=t instanceof Array;if([null,void 0].includes(t)||!(n||t instanceof Object))return ut(t,e),-1;const o=e.simpleValueElm;return delete e.simpleValueElm,H.push(o),6}function it(t,e){const n=e.global,o=n?.newest;return c(t)?!V(t,o)&&(rt(o,0),e.global={renderCount:0},7):(!t||!("tagJsType"in t))&&(rt(o,0),delete e.global,8)}function ut(t,e){const n=tt(t),o=e.simpleValueElm;z.push([n,o])}const lt="style",pt="class";function ft(t,e,n){if(Pt(t))switch(t){case"oninit":G.push((()=>function(t,e){const n=t.oninit;if(!n)return e.added;const o=n.tagFunction;if(!o)return e.added;const r=o.tagFunction;return r?(r({target:t,stagger:e.added}),++e.added):e.added}(n,{added:0,removed:0})));break;case"autofocus":G.push((()=>n.focus()));break;case"autoselect":G.push((()=>n.select()))}const o=t.split("."),r=o[0];if(r!==lt){if(r===pt){if(o.shift(),e){for(const t of o)q.push((()=>n.classList.add(t)));return}for(const t of o)q.push((()=>n.classList.remove(t)))}}else q.push((()=>n.style[o[1]]=e))}function gt(t,e){const n=function(t,e,n=[]){const o=t.subject.global;n.push({support:t,renderCount:o.renderCount,provider:e});const r=e.children;for(let t=r.length-1;t>=0;--t){const o=r[t],s=o.subject.global;n.push({support:o,renderCount:s.renderCount,provider:e})}return n}(t,e);return n}function dt(t,e=[]){const n=t.subject.global,o=ue(t.templater),r=t.ownerSupport;if(o)return dt(r,e);if(n.locked)return e.push(t),e;const c=n.newest,a=c.templater.tagJsType===s.tagComponent,i=r&&(!a||function(t,e,n){if(!t)return!1;const o=function(t,e){if(e.templater.tagJsType===s.stateRender)return!0;const n=t.props,o=e.propsConfig.latestCloned;return!(n&&0===n.length&&0===o.length||R(n,o))}(e,n);return!(!t||!o)}(r,c.templater,c)),u=function(t){const e=t.subject.global.providers;if(!e)return[];const n=[];for(const t of e){const e=gt(t.owner,t);n.push(...e.map((t=>t.support)))}return n}(c);return e.push(...u),i?(dt(r,e),a&&e.push(c),e):(e.push(c),e)}function ht(t){++K.locks,t.forEach(bt),--K.locks,Q()}function bt(t){const e=t.subject.global;e&&le(e.newest)}const mt="no-data-ever",vt="promise-no-data-ever";function yt(t,e,n){return t instanceof Promise?(e.subject.global.locked=!0,t.then((()=>(!0===n.deleted||(delete e.subject.global.locked,ht(dt(e))),vt)))):mt}function wt(t,e,n,o,r){if(r)return ft(t,e,n);o(n,t,e)}function Ct(t,e,n,o){const r=t.appElement;"blur"===e&&(e="focusout");const s="_"+e,c=t.subject.global.events;if(!c[e]){const t=function(t){t.originalStopPropagation=t.stopPropagation,jt(t,s,t.target)};c[e]=t,r.addEventListener(e,t)}n[s]=o,n[e]=o}function jt(t,e,n){const o=n[e];if(o){let e=!1;if(t.stopPropagation=function(){e=!0,t.originalStopPropagation.call(t)},o(t),t.defaultPrevented||e)return}const r=n.parentNode;r&&jt(t,e,r)}function kt(t,e,n,o){const r=function(...e){return r.tagFunction(t,e)};r.tagFunction=e,r.support=n,Ct(n.appSupport,o,t,r)}function Tt(t,e,n,o,r,s,c,a){const u=Wt(e);if(u>=0){const e=t[u],c=Nt(e,s,!0);return c.isAttr=!0,c.element=n,c.howToSet=r,c.isNameOnly=!0,void St(t,e,n,o,r,s)}const l=Wt(c);if(l>=0){const c=t[l],u={isAttr:!0,element:n,attrName:e,checkValueChange:at,withinOwnerElement:!0};return s.push(u),i(u.value)?function(t,e,n,o,r,s){s&&q.push((function(){n.removeAttribute(t)}));const c=e.value;if(i(c)){const a=function(c){xt(c,t,e,n,o,r,s)},i=c.subscribe(a),u=e.global;(u.subscriptions=u.subscriptions||[]).push(i)}xt(e.value,t,e,n,o,r,s)}(e,u,n,o,r,a):(function(t,e,n,o,r,s,c){n.attrName=t,n.element=o,n.howToSet=r,e instanceof Function?Ot(n,e,s,t,o):(n.attrName=t,n.element=o,n.howToSet=r,n.isSpecial=c,wt(t,e,o,r,c))}(e,c,u,n,r,o,a),void(u.value=c))}return wt(e,c,n,r,a)}function St(e,n,o,r,s,c){if(![void 0,null,!1].includes(n))if(n instanceof Object)for(const t in n)Tt(e,t,o,r,s,c,n[t],At(t));else 0!==n.length&&s(o,n,t)}function xt(t,e,n,o,r,c,a){return t instanceof Function?function(t,e,n,o,r,c,a){const i=t.templater.wrapper,u=i?.parentWrap;return(i?.tagJsType||u?.tagJsType)!==s.oneRender?Ot(a,e,t,o,n):Et(e,n,o,r,c,t)}(r,t,o,e,a,c,n):Et(t,o,e,a,c,r)}function Et(t,e,n,o,r,s){if(t instanceof Function)return kt(e,t,s,n);o?ft(n,t,e):Y.includes(t)?q.push((function(){e.removeAttribute(n)})):r(e,n,t)}function At(t){return!!Pt(t)||t.startsWith("class.")||t.startsWith("style.")}function Pt(t){return["autoselect","autofocus","oninit"].includes(t)}function Ot(t,e,n,o,r){const s=t.value;return s&&s.tagFunction&&s.support?(s.tagFunction=e,s.support=n,s):kt(r,e=function(t,e){const n=e.subject.global,o=function(t,e){if(!0===n.deleted)return;const r=n.newest;return function(t,e,n,o){const r=e;return r.subject.global.locked=!0,function(t,e){const n=t.subject.global;delete n.locked;const o=n.blocked;if(o&&o.length){const o=function(t){const e=t.subject.global,n=e.blocked;for(const t of n){const n=le(t);e.newest=n}return e.blocked=[],e.newest}(t);return yt(e,o,n)}return function(t,e,n){return ht(dt(t)),yt(e,t,n)}(n.newest,e,n)}(r,t.apply(n,o))}(o.tagFunction,r,t,e)};return o.tagFunction=t,o.support=e,o}(e,n),n,o)}function Wt(t){return t&&t instanceof Object&&"tagJsVar"in t?t.tagJsVar:-1}function Rt(t,e,n){q.push((()=>{void 0!==n&&!1!==n&&null!==n?t.setAttribute(e,n):t.removeAttribute(e)}))}function Jt(t,e,n,o,r,s,c,a,i=[]){const u=document.createElement("div"),l=[];for(const p of t){const t={};l.push(t);const f=p.v;if(!isNaN(f)){Vt(e,r,c,n,i,o,s);continue}if("text"===p.nn){const e=t,n=e.tc=p.tc;u.innerHTML=n;const o=e.domElement=document.createTextNode(u.innerText);c?Z.push({element:o,relative:c}):B.push({element:o,relative:a});continue}const g=t.domElement=document.createElement(p.nn);p.at&&p.at.map((t=>Tt(e,t[0],g,n,Rt,r,t[1],t[2]))),c?Z.push({element:g,relative:c}):B.push({element:g,relative:a}),p.ch&&(t.ch=Jt(p.ch,e,n,o,r,s+1,g,a,i).dom)}return{subs:i,dom:l,context:r}}function Vt(e,n,o,r,s,c,a){const u=e[n.length],l=document.createTextNode(t),p=Nt(u,n,a>0);p.placeholder=l,o?Z.push({relative:o,element:l}):B.push({element:l,relative:r.subject.placeholder}),i(u)?s.push({insertBefore:l,appendTo:o,subject:u,support:r,counts:c,contextItem:p}):(r.subject.global.locked=!0,Qt(u,p,r,c,o),delete r.subject.global.locked,p.value=u)}function Ft(t,e,n,o){const r=t.subject.global;r.oldest=t,r.newest=t,++K.locks;const c=function(t,e={counts:{added:0,removed:0}},n,o){const r=function(t){const e=t.templater.tag;return e.tagJsType===s.dom?e.dom:function(t,e){const n=function(t,e){const n=t.map((t=>t.length));return n.push(t.length),Number(n.join(""))}(t),o=Je[n],r=o&&function(t,e,n){return!(!n||n.strings.length!==t.length||!n.strings.every(((e,n)=>e===t[n]))||n.values.length!==e.length)}(t,e,o);if(r)return o.domMetaMap;const s=function(t,e){Ce(t,e);const n=function(t){const e=[],n=[],o=[];let r=null,s=-1,c=0;const a=new RegExp(we,"g");for(t=function(t){return t.replace(Te,(function(t){return t.replace(/\[l t\]/g,"[l&nbsp;t]").replace(/\[g t\]/g,"[g&nbsp;t]").replace(/</g,"[l t]").replace(/>/g,"[g t]")}))}(t);c<t.length;){const i=a.exec(t);if(!i)break;const[u,l,p]=i,f=u.startsWith("</"),g=u.endsWith("/>");if(c<i.index){const e=t.slice(c,i.index);e.trim()&&je(e).forEach((t=>{t.startsWith(ge)&&(t=ge+ ++s+de),ke(r,n,t)}))}if(c=i.index+u.length,f){r=o.pop()||null;continue}const d=[];let h;for(;null!==(h=ye.exec(p));){const t=h[1]||h[3]||h[5];let n=h[2]||h[4]||h[6];if(void 0===t)continue;const o=""!==h[2],r=void 0===n&&o,c=t.toLowerCase(),a=c.startsWith("on")?Se(c):c;if(r){if(t.slice(0,ge.length)===ge){const t=ge+ ++s+de;e.push(["at",t]),d.push([t]);continue}if(h[0].startsWith(t)&&h[0].slice(t.length,h[0].length).search(/\s+$/)>=0){d.push([a]);continue}n=ge+ ++s+de}o||(n=h[2]);const i=[a,n];At(a)&&i.push(!0),d.push(i)}const b={nn:l};d.length&&(b.at=d),r?(r.ch||(r.ch=[]),r.ch.push(b)):n.push(b),g||(o.push(r),r=b)}if(c<t.length){const e=t.slice(c);e.trim()&&je(e).forEach((t=>(t.startsWith(ge)&&++s,ke(r,n,t))))}return n}(Ce(t,e).join(""));return n}(t,e),c=Ee(s,e.length);c.forEach(Re);const a={interpolation:void 0,string:void 0,strings:t,values:e,domMetaMap:c};return Je[n]=a,c}(e.strings,e.values)}(t),c=t.templater.tag.values,a=[];t.subject.global.context=a;return Jt(r,c,t,e.counts,a,0,n,o)}(t,o,e,n);return r.htmlDomMeta=c.dom,--K.locks,c}function Nt(t,e,n){const o={value:t,checkValueChange:at,withinOwnerElement:n};return e.push(o),o}function Mt(t,e){const n=e.global.newest;n.ownerSupport=t,e.checkValueChange=it;const o=Ft(n,void 0,e.placeholder,{counts:{added:0,removed:0}});for(const t of o.subs)Xt(t);return n}function $t(){return{tagJsType:s.templater}}function Dt(t,e,n){const o=function(t,e,n,o,r){const s={templater:t,subject:o,castedProps:void 0,appSupport:void 0};return s.ownerSupport=e,s.appSupport=n,s}(t,e,e.appSupport,n);return n.global.context=[],o}function It(t,e,n,o){n.checkValueChange=it;const r=Dt(t,e,n);r.ownerSupport=e;const s=Ft(r,o,void 0,{counts:{added:0,removed:0}});for(const t of s.dom)t.marker&&Z.push({element:t.marker,relative:o}),t.domElement&&Z.push({element:t.domElement,relative:o});let c=-1;const a=s.subs.length-1;for(;c++<a;)Xt(s.subs[c]);return r}function Lt(t,e,n,o){const r=t[e],s=n[e];if(r!==s.value&&!(r instanceof Object&&"subscribe"in r)){if(s.isAttr)return function(t,e,n,o){if(n.isNameOnly)return function(t,e,n,o,r,s,c){if(n){if(n instanceof Object)if(e instanceof Object)for(const t in n)t in e||q.push((function(){o.removeAttribute(t)}));else for(const t in n)q.push((function(){o.removeAttribute(t)}));if([void 0,null,!1].includes(e))return void o.removeAttribute(n)}St(t,e,o,r,s,[])}(t,e,n.value,n.element,o,n.howToSet),n.value=e,!1;const r=n.element;return xt(e,n.attrName,n,r,o,n.howToSet,n.isSpecial),n.value=e,!1}(t,r,s,o);Ht(s,r,o),s.value=r}}function _t(t,e){const n=t.subject.global.context;!function(t,e){const n=e.templater.tag||e.templater,o=e.templater.values||n.values;t.templater.tag.values=o}(t,e),++K.locks,function(t,e){const n=t.templater.tag.values;let o=0;const r=n.length;for(;o<r;)Lt(n,o,e,t),++o}(t,n),--K.locks,Q()}const Ut=[s.tagComponent,s.stateRender];function Ht(t,e,n){const r=t.checkValueChange(e,t);if(-1===r)return;const c=e&&e.tagJsType;if(c){if(Ut.includes(c))return t.global=t.global||{renderCount:0},void function(t,e,n){if(!e.global.newest)return void Yt(t,e,n,{added:0,removed:0});!function(t,e,n){const r=n.global,c=r.newest,a=c.templater.wrapper,i=e.templater.wrapper;let u=!1;const l=[s.stateRender,s.oneRender].includes(e.templater.tagJsType);l?u=e.templater.tagJsType===s.oneRender||V(c,e):a&&i&&(u=a.parentWrap.original===i.parentWrap.original);const p=e.templater;if(!u)return void function(t,e,n){rt(t.global.oldest,0),t.global={renderCount:0};Yt(e,t,n,{added:0,removed:0})}(n,p,t);const f=l||function(t,e){return function(t,e,n){if(!1===n)return function(t,e){return t.length!==e.length?1:!t.every(((t,n)=>{const o=e[n];return t instanceof Array&&o instanceof Array?t===o:t instanceof Object?e instanceof Object&&Object.entries(t).every((([t,e])=>o[t]===e)):t===o}))&&2}(t,e);let r=t,s=e;return r=[...t],s=[...e||[]],!r.every(((t,e)=>function(t,e,n,r){const s=r[e];if(t&&typeof t===o.object){const e={...t},n={...s||{}},o=Object.entries(e).every((([t,o])=>U(o,n[t],(()=>{delete e[t],delete n[t]}))));return o}return U(t,s,(()=>{n.splice(e,1),r.splice(e,1)}))}(t,e,r,s)))&&6}(e.props,t.propsConfig.latestCloned,t.templater.deepPropWatch)}(c,p);f?r.locked?r.blocked.push(e):le(e):function(t,e,n,o,r){const s=te(e,n,o,t.props,r),c=e.propsConfig;c.castProps=s;n.propsConfig.latestCloned=c.latestCloned}(p,e,c,t,p.deepPropWatch?15:2)}(n,M(t,n,n.appSupport,e),e)}(e,t,n);if(c===s.oneRender)return}const a=t.global;if(a){const o=a.newest;if(o){if(e instanceof Function)return;!function(t,e,n,o){const r=M(n.templater||n,o,o.appSupport,e);_t(t.subject.global.oldest,r)}(o,t,e,n);const r=t.global;return void(r.locked||++r.renderCount)}}if(c)switch(c){case s.templater:return void Mt(n,t);case s.tag:case s.dom:const o=e;let r=o.templater;return r||(r=$t(),o.templater=r,r.tag=o),(t.global=t.global||{renderCount:0}).newest=Dt(r,n,t),void Mt(n,t)}e instanceof Array?Zt(t,e,n,{added:0,removed:0}):e instanceof Function?t.value=e:r?function(t,e){e.checkValueChange=at;const n=e.placeholder,o=tt(t);e.simpleValueElm=X(o,n)}(e,t):ut(e,t)}function qt(t,e=!0){const n={deepPropWatch:e,props:t,tagJsType:s.templater,key:function(t){return n.arrayValue=t,n}};return n}function zt(t,e,n){n.checkValueChange=it;const o=t;let r=o.templater;r||(r=qt([]),r.tag=o,o.templater=r);const s=n.global={renderCount:0},c=s.newest=M(r,e,e.appSupport,n);return s.oldest=c,n}function Zt(t,e,n,o,r){t.lastArray||(t.lastArray=[]);let s=t.lastArray,c=t.placeholder,a=0;const i=t.lastArray=s.filter((function(t,n){const r=function(t,e,n,o,r,s){const c=e.length-1,a=n-r;return a<0||c<a?(Kt(o[n],s),++r,1):0}(0,e,n,s,a,o);return a+=r,0===r})),u=r,l=e.length;for(let t=0;t<l;++t)c=Bt(e,t,i,n,c,o,u).placeholder}function Bt(t,e,n,o,r,s,c){const a=t[e],i=n[e];return i?function(t,e,n,o,r,s,c,a){if(n.length>r)return Ht(e,t,o),e;return Gt(t,s,o,c,n,a)}(a,i,n,o,e,r,s,c):Gt(a,r,o,s,n,c)}function Gt(t,e,n,o,r,c){const a={value:t,checkValueChange:at,withinOwnerElement:!1};o.added=o.added+1;const i=document.createTextNode("");return a.placeholder=i,c||B.push({element:i,relative:e}),function(t,e,n){const o=t.tagJsType;if(o)switch(o){case s.templater:zt(t.tag,e,n);break;case s.tag:case s.dom:zt(t,e,n)}}(t,n,a),Qt(t,a,n,o,c),a.value=t,r.push(a),c&&Z.push({element:i,relative:c}),a}function Kt(t,e){const n=t.global,o=n.newest;if(n.deleted=!0,o)rt(o,e.removed);else{const e=t.simpleValueElm;delete t.simpleValueElm,H.push(e)}++e.removed}function Qt(t,e,n,o,r){const c=t?.tagJsType;if(c)switch(c){case s.templater:return e.checkValueChange=it,r?It(t,n,e,r):Mt(n,e);case s.dom:case s.tag:e.checkValueChange=it;const c=t;let a=c.templater;a||(a=function(t){const e=$t();return e.tag=t,t.templater=e,e}(c));const i=e.global={renderCount:0};return r?It(a,n,e,r):(i.newest=Dt(a,n,e),e.checkValueChange=it,Mt(n,e));case s.stateRender:case s.tagComponent:if(e.global={renderCount:0},e.checkValueChange=it,r){const c=function(t,e,n,o,r){const c=M(t,n,n.appSupport,e),a=c.propsConfig;if(a){const e=t.tagJsType!==s.tagComponent?[]:ne(t,c);a.castProps=e}const i=e.global,{support:u}=ae(c,i.newest,e,n);return function(t,e,n){let o=Z.length;const r=Ft(t,n,void 0,{counts:e});for(const t of r.dom)t.domElement&&Z.splice(o++,0,{element:t.domElement,relative:n}),t.marker&&Z.splice(o++,0,{element:t.marker,relative:n});const s=r.subs;for(const t of s)Xt(t)}(u,o,r),u}(t,e,n,o,r);return++e.global.renderCount,c}const u=Yt(t,e,n,o);return++e.global.renderCount,u;case s.oneRender:e.global={renderCount:0};const l=function(t,e,n){const o=qt([]);o.tagJsType=t.tagJsType;const r=Dt(o,n,e);function s(){return o.tag=t(),r}return o.wrapper=s,s.parentWrap=s,s.tagJsType=t.tagJsType,s.parentWrap.original=t,r}(t,e,n);re(l,void 0,e,n);const p=It(l.templater,n,e,r);return++e.global.renderCount,e.checkValueChange=it,p}if(t instanceof Array)return Zt(e,t,n,o,r),void(e.checkValueChange=st);t instanceof Object&&"subscribe"in t||function(t,e,n){const o=X(tt(t),n);e.simpleValueElm=o,e.checkValueChange=at}(t,e,e.placeholder)}function Xt({subject:t,support:e,counts:n,contextItem:o,appendTo:r}){let s=function(t){Qt(t,o,e,{...n},c?r:void 0),c||f.stateConfig.support||Q(),s=function(t){if(t===o.value)return!1;Ht(o,t,e),f.stateConfig.support||Q()}},c=!0;const a=t.subscribe((function(t){s(t)}));c=!1;const i=e.subject.global;(i.subscriptions=i.subscriptions||[]).push(a)}function Yt(t,e,n,o){const r=M(t,n,n.appSupport,e),c=r.propsConfig;if(c){const e=t.tagJsType!==s.tagComponent?[]:ne(t,r);c.castProps=e}const a=e.global,{support:i}=ae(r,a.newest,e,n);return function(t,e,n){n.checkValueChange=it;const o=Ft(t,void 0,n.placeholder,{counts:e}).subs;for(const t of o)Xt(t)}(i,o,e),i}function te(t,e,n,o,r,s=-1){const c=e.subject.global.newest;if(!c){const e=D(o,t,s);return o.push(...e),t.propsConfig.castProps=e,o}const a=(e=c||e).propsConfig.castProps,i=[];for(let e=0;e<o.length;++e){const c=o[e],u=ee(a[e],c,t,n,s+1,r);i.push(u)}return t.propsConfig.castProps=i,i}function ee(t,e,n,o,r,s){if(t instanceof Function)return e.mem?(t.mem=e.mem,e):(t.mem=e,t);if(s===r)return e;if(_(e))return e;if(e instanceof Array){for(let r=e.length-1;r>=0;--r){const c=e[r];e[r]=ee(t[r],c,n,o,s+1,r)}return e}if(void 0===t)return e;const c=Object.keys(e);for(const a of c){const c=e[a],i=ee(t[a],c,n,o,r,s+1);if(e[a]===i)continue;const u=Object.getOwnPropertyDescriptor(e,a)?.set;u||(e[a]=i)}return e}function ne(t,e,n){const o=t.deepPropWatch?15:2,r=t.props,s=e.propsConfig;let c=s.castProps;const a=n?.propsConfig,i=a?.castProps;return i&&(s.castProps=i,c=te(e,n,n.ownerSupport,r,o)),c||D(r,e,0)}function oe(t,e,n,o,r){const c=e.original,a=t.tagJsType===s.stateRender,i=a?void 0:ne(t,n,r);let u;a?(u=t,u=t()):(u=c(...i),u instanceof Function&&(u=u())),u.templater=t,t.tag=u;const l=f.stateConfig.array;return o.state.push(...l),o}function re(t,e,n,o){const r=n.global,c=r.renderCount;!function(t,e){if(e){if(e!==t){const n=e.state;t.state=n}!function(t){const e=t.state,n=f.stateConfig;n.rearray=e,n.rearray,v.handler=y,v.letHandler=b,n.support=t}(t)}else!function(t){v.handler=w,v.letHandler=h;const e=f.stateConfig;e.rearray=[],e.support=t}(t)}(t,e);const a=t.templater;let i;return i=a.tagJsType===s.stateRender?oe(a,a,t,M(a,o,t.appSupport,n),e):(0,a.wrapper)(t,n,e),function(t,e){!function(t){const e=f.stateConfig;delete e.support,t.state=e.array,e.array=[]}(t),f.tagClosed$.next(e)}(t,o),r.newest=i,r.renderCount>c+1?r.newest:i}function se(t){const e=t.subject.global,{subs:n,tags:o}=nt(e.context);ce(t);for(const t of o)ce(t);e.subscriptions&&n.forEach((t=>t.unsubscribe())),t.subject.global={renderCount:0}}function ce(t){const e=t.subject.global;!0!==e.deleted&&(e.deleted=!0,ot(t,[],0))}function ae(t,e,n,o){const r=e?.templater,c=r?.tag,a=re(t,e,n,o),i=!e||V(e,a);if(i){if(e){const t=e.templater.tag,o=n.global;t&&o.renderCount>1&&function(t,e,n){if(t.tagJsType!==s.dom){if(n){const o=n.strings;if(o){const n=o?.length;n!==t.strings.length&&se(e)}}}else{const o=n?.dom;o!==t.dom&&se(e)}}(t,e,c)}}else{!function(t,e){const n=t.subject.global;let o=-1;const r=n.providers=n.providers||[],s=r.length-1;for(;o++<s;){const t=r[o];let s=-1;const c=t.children.length-1;for(;s++<c;)if(n===t.children[s].subject.global)return t.children.splice(s,1),void t.children.push(e)}}(e,a),se(e);const t=a.subject.global;t.oldest=a,t.newest=a}const u=e?.ownerSupport;return a.ownerSupport=o||u,{support:a,wasLikeTags:i}}function ie(t,e,n,o){const r=o.global,{support:s,wasLikeTags:c}=ae(e,t,o,n);return c?(_t(r.oldest,s),s):(Mt(n,o),s)}function ue(t){return s.templater===t.tagJsType}function le(t){const e=t.subject.global,n=ue(t.templater),o=t.ownerSupport;if(n)return pe(o,t);if(e.locked)return e.blocked.push(t),t;e.locked=!0;const r=t.subject;return e.blocked.length&&(t=e.blocked.pop(),e.blocked=[]),delete e.locked,ie(e.newest,t,o,r)}function pe(t,e){const n=t.subject.global;return n&&!0!==n.deleted?le(n.newest||t):e}function fe(){return f.stateConfig.support}new P("callback() was called outside of synchronous rendering. Use `callback = callbackMaker()` to create a callback that could be called out of sync with rendering");const ge=":tagvar",de=":",he="ondoubleclick",be=/(:tagvar\d+:)/,me=/(^:tagvar\d+:|:tagvar\d+:$)/g,ve="__safeTagVar",ye=/([:_a-zA-Z0-9\-\.]+)\s*(?:=\s*"([^"]*)"|=\s*(\S+))?/g,we=/<\/?([a-zA-Z0-9\-]+)((?:\s+[a-zA-Z_:][\w:.\-]*(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'=<>`]+))?)+\s*|\s*)\/?>/g;function Ce(t,e){return function(t,e){const n=t.map(((t,n)=>n<e.length?t+ge+n+de:t));return function(t,e,n){const o=n.length-e.length;if(o>0)for(let n=o;n>0;--n)t.push(ge+(e.length+n-1)+de)}(n,t,e),n}(t.map((t=>t.replace(me,((t,e)=>ve+e)))),e)}function je(t){return t.split(be).filter((t=>""!==t))}function ke(t,e,n){var o;!function(t,e,n){t?(t.ch||(t.ch=[]),t.ch.push(n)):e.push(n)}(t,e,{nn:"text",tc:(o=n,o.replace(/(\[l t\]!--[\s\S]*?--\[g t\])/g,(function(t){return t.replace(/\[l t\]/g,"<").replace(/\[g t\]/g,">").replace(/\[l&nbsp;t\]/g,"[l t]").replace(/\[g&nbsp;t\]/g,"[g t]")})))})}const Te=new RegExp("(\x3c!--[\\s\\S]*?--\x3e)","g");function Se(t){return t.startsWith("on")?t.length===he.length&&t===he?"dblclick":t.slice(2,t.length):t}const xe=new RegExp(ge+"(\\d+)"+de,"g");function Ee(t,e,n=[],o=[]){const r=t;for(let t=0;t<r.length;t++){const s=[...o,t],c=r[t];if("at"in c){const t=c.at;c.at=Pe(t,e)}if("ch"in c){const t=c.ch,o=[...s,"ch"];c.ch=Ee(t,e,n,o)}t=Ae(c,e,r,t)}return r}function Ae(t,e,n,o){if("text"!==t.nn)return o;const r=t;let s,c=r.tc;if("string"!=typeof c)return o;for(;null!==(s=xe.exec(c));){const t=s[1],r=parseInt(t,10);if(!isNaN(r)&&r<e){const t=ge+r+de,e=c.slice(s.index+t.length);n.splice(o,1,{nn:"text",v:r}),c=e,xe.lastIndex=0}}return r.tc=c,o}function Pe(t,e){return t.map((t=>{const[n,o,r]=t;if(n.startsWith(ge)){const t=parseInt(n.replace(ge,""),10);if(!isNaN(t)&&t<e)return[{tagJsVar:t}]}if("string"==typeof o&&o.startsWith(ge)){const t=parseInt(o.replace(ge,""),10);if(!isNaN(t)&&t<e)return[n,{tagJsVar:t},r]}return t}))}const Oe="__safeTagVar",We=/__safeTagVar(\d+)/g;function Re(t){if("at"in t&&(t.at=t.at?t.at.map((t=>{if(1===t.length)return t;const[,e]=t;if("string"==typeof e&&e.startsWith(Oe)){const n=parseInt(e.replace(Oe,""),10);t[1]=ge+n+de}return t})):[]),"ch"in t){const e=t.ch;for(let t=0;t<e.length;t++){const n=e[t];if("text"===n.nn){if("string"!=typeof n.tc)return;n.tc=n.tc.replace(We,((t,e)=>ge+e+de))}Re(n)}0===e.length&&delete t.ch}}const Je={},Ve=[];let Fe,Ne=0;function Me(t,e){const n=function(...t){const o=qt(t,e);o.tagJsType=s.tagComponent;const r=function(t,e){return function(n,o,r){const s=ne(t,n,r),c=n.ownerSupport,a=M(t,c,n.appSupport,o,s);return oe(t,e,n,a,r)}}(o,n);return r.parentWrap||(r.parentWrap=n),o.wrapper=r,o};n.original=t;const o=t;return n.original=o,o.tags=Ve,o.setUse=f,o.tagIndex=Ne++,Ve.push(n),n}function $e(t,e){const n=e.constructMethod.compareTo;t.global.providers.forEach((t=>{n===t.constructMethod.compareTo&&(t.constructMethod.compareTo=e.constructMethod.compareTo)})),t.childTags.forEach((t=>$e(t,e)))}async function De(t,e,n,o){const r=t.global,s=r.oldest,c=r.newest,a=e.original.toString();n.original&&(n.compareTo=a),n.original=e.original,c.templater.wrapper.parentWrap.original=e.original,c.templater.wrapper.parentWrap.original=e.original,s.templater.wrapper.parentWrap.original=e.original;const i=r.providers,u=i?i.map((t=>t.constructMethod)):[],l=o.renderTagOnly(c,c,c.subject,c.ownerSupport),p=s.appSupport,f=s.ownerSupport.subject.global,g=r.providers,d=f.oldest;l.ownerSupport=d,g&&g.forEach(((t,e)=>{u[e].compareTo=t.constructMethod.compareTo,t.constructMethod.compareTo=t.constructMethod.toString(),$e(p,t)})),await rt(s,0);const h=l.subject.global;delete s.subject.global.deleted,Ft(l,void 0,s.subject.placeholder,{counts:{added:0,removed:0}}),h.newest=l,h.oldest=l}function Ie(t){[...document.querySelectorAll("app")].forEach(t)}async function Le(){const t=[...document.querySelectorAll("[tag]")].map((async t=>{const e=t.getAttribute("url"),o=t.getAttribute("name"),r=await n(519)(`${e}?${Date.now()}`);try{const t=r[o]();return{newApp:r,newTemplater:t,tagName:o}}catch(t){throw console.error(`Could not load tag by name ${o}`,{newApp:r,url:e}),t}}));return await Promise.all(t)}Me.oneRender=function(){throw new Error("Do not call tag.oneRender as a function but instead set it as: `(props) => tag.oneRender = () => html`` `")},Me.state=function(){throw new Error("Do not call tag.state as a function but instead set it as: `(props) => tag.state = (state) => html`` `")},Me.route=function(t){throw new Error("Do not call tag.route as a function but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")},Me.key=function(t){return{set html(e){e.arrayValue=t}}},Me.app=function(t){throw new Error("Do not call tag.route as a function but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")},Me.deepPropWatch=Me,Object.defineProperty(Me,"oneRender",{set(t){t.tagJsType=s.oneRender}}),Object.defineProperty(Me,"state",{set(t){t.parentWrap={original:{setUse:f,tags:Ve}},t.tagJsType=s.stateRender}}),function t(){const e=new WebSocket("ws://localhost:3000");e.addEventListener("error",(t=>{console.error("WebSocket error:",t)})),e.addEventListener("open",(t=>{console.info("WebSocket connection opened:",t)})),e.addEventListener("message",(async t=>{console.info("💬 from server:",t.data,t.data),"Connected to the WebSocket endpoint"!==t.data?Ie((t=>{!async function(t){const e=_e,n=t.setUse;(await Le()).forEach((async t=>{const{newApp:o,newTemplater:r}=t,s=o.hmr,c=r.wrapper.parentWrap.original,a=c.tags,i=c.setUse;i.memory.providerConfig=n.memory.providerConfig,n.tagUse.length=0,n.tagUse.push(...i.tagUse),Object.assign(n.memory,i.memory),i.memory=n.memory;const u=e.reduce(((t,e)=>{let n=a.map((t=>t.original)).find((t=>t.toString()===e.original.toString()));if(!n){const o=e.tagIndex;void 0!==o&&(n=a[o]),t.push({oldTag:e,newTag:n})}return t}),[]);u.length||console.warn("No old tags changed",{newTags:a,oldTags:e});const l=e.length===a.length;if(a.forEach((t=>{let n=e.map((t=>t.original)).find((e=>t.original.toString()===e.toString())),o=null;if(!n&&u[0].newTag&&(o=t.tagIndex,l&&(n=e[o])),!n){if(u[0].newTag){const n="HMR has two tags";throw console.warn(n,{first:u[0].newTag.original,second:t.original,equal:t.original===u[0].newTag.original,oldTags:e,newTags:a,tagIndex:o}),new Error(n)}u[0].newTag=t}})),u.length){const{oldTag:t,newTag:e}=u[0],n=function(t,e){const n=t.templater.wrapper.parentWrap,o=n.original===e;if(o)return o;return n.original.toString()===e.toString()}(Fe,t.original);if(n)throw Fe.templater.wrapper.parentWrap.original=e.original,Fe.ownerSupport={clones:[],childTags:[]},_e=a,new Error("app changed, need code for that");const o=await Ue(Fe,u[0],s);t.original=e.original,e.compareTo=e.original.toString(),o<=0?console.warn("✋ No components were updated",u[0]):console.debug(`✅ Replaced and update components ${o}`,u[0])}_e=a,console.info("✅ ✅ ✅ rebuilt")}))}(t)})):Ie((t=>{Le().then((e=>{e.forEach((({newApp:e,tagName:n})=>{const{tagElement:o}=e.hmr;t.destroy&&t.destroy();const r=o(e[n],t,{test:1});return _e=r.tags,Fe=r.support,r}))}))}))})),e.addEventListener("close",(e=>{console.info("WebSocket connection closed:",e),t()}))}();let _e=[];async function Ue(t,{oldTag:e,newTag:n},o){let r=0;const c=t.templater.tag.values.map((async(c,a)=>{const i=c.jsTagType=s.templater;if(!c||!i)return;const u=function(t,e){const n=t.parentWrap.original;if(!n)throw"maybe issue";if(!e.original)throw"maybe issue 2";const o=e.original,r=n===o;if(r)return r;const s=n.toString()===o.toString();if(s)return s;return t.parentWrap.compareTo===o.toString()}(c.wrapper,e);return u?(De(t.subject.global.context[a],n,e,o),void++r):void 0}));await Promise.all(c);const a=t.subject.global.context.map((async t=>{const s=t.global.newest;s&&(r+=await Ue(s,{oldTag:e,newTag:n},o))}));return await Promise.all(a),r}})();