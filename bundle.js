var t,e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},n={};e.d(n,{W9:()=>C,t3:()=>Ce,Y2:()=>r,ei:()=>S,B7:()=>f,XF:()=>T,vw:()=>dt,PC:()=>w,uX:()=>Se,O9:()=>ht,Ot:()=>d,tD:()=>t,E2:()=>st,OH:()=>rt,Y_:()=>ut,zV:()=>u,WJ:()=>g,AZ:()=>Tt,cF:()=>Re,qy:()=>Te,u2:()=>me,zl:()=>ye,O5:()=>H,Ze:()=>o,_4:()=>l,iO:()=>c,dk:()=>i,mn:()=>a,NM:()=>s,z:()=>_,bc:()=>F,sA:()=>lt,MG:()=>it,t2:()=>te,r5:()=>J,pG:()=>Z,yN:()=>tt,QB:()=>q,vJ:()=>X,AI:()=>v,wk:()=>R,uz:()=>O,Tc:()=>xe,Hf:()=>ke,_A:()=>mt,NU:()=>pt,wB:()=>P,id:()=>h,MC:()=>m,zC:()=>b});class r{get(t){return"todo"}}function o(e){return[t.tag,t.templater].includes(e?.tagJsType)}function s(e){return e?.tagJsType===t.templater}function a(e){return e?.tagJsType===t.tagComponent}function i(e){return e?.tagJsType===t.tag}function l(t){return!(!0!==t?.isSubject&&!t?.subscribe)}function c(e){return e instanceof Array&&e.every((e=>[t.tag,t.templater,t.tag,t.tagComponent].includes(e?.tagJsType)))}function u(t){const e=new f;return e.subscribeWith=e=>{const n=[],r=[],o=(o,s)=>{n[s]=!0,r[s]=o;if(n.length===t.length){for(let t=n.length-1;t>=0;--t)if(!n[t])return;e(r,a)}},s=[...t],a=s.shift().subscribe((t=>o(t,0))),i=s.map(((t,e)=>t.subscribe((t=>o(t,e+1)))));return a.subscriptions=i,a},e}function p(t,e,n){const r=[...e],o=r.shift(),s=t=>{if(r.length)return p(t,r,n);n(t)};let a=s;const i=o(t,{setHandler:t=>a=t,next:s});a(i)}!function(t){t.unknown="unknown",t.tag="tag",t.templater="templater",t.tagComponent="tag-component",t.tagArray="tag-array",t.subject="subject",t.date="date",t.string="string",t.boolean="boolean",t.function="function",t[void 0]="undefined"}(t||(t={}));class f{value;onSubscription;methods=[];isSubject=!0;subscribers=[];subscribeWith;_value;set;constructor(t,e){this.value=t,this.onSubscription=e,this._value=t,g(this)}subscribe(t){const e=function(t,e,n){const r=f.globalSubCount$;f.globalSubCount$.next(r._value+1);const o=()=>{o.unsubscribe()};return o.callback=e,o.subscriptions=[],o.unsubscribe=()=>{!function(t,e){const n=t.findIndex((t=>t.callback===e));-1!==n&&t.splice(n,1)}(n,e),f.globalSubCount$.next(r._value-1),o.unsubscribe=()=>o;const t=o.subscriptions;for(let e=t.length-1;e>=0;--e)t[e].unsubscribe();return o},o.add=t=>(o.subscriptions.push(t),o),o.next=t=>{e(t,o)},o}(0,t,this.subscribers),n=this.subscribeWith;if(n){if(this.methods.length){const n=t;t=t=>{p(t,this.methods,(t=>n(t,e)))}}return n(t)}this.subscribers.push(e);const r=f.globalSubCount$.value;return f.globalSubCount$.next(r+1),this.onSubscription&&this.onSubscription(e),e}next(t){this._value=t,this.emit()}emit(){const t=this._value,e=[...this.subscribers],n=e.length;for(let r=0;r<n;++r){const n=e[r];n.callback(t,n)}}toPromise(){return new Promise((t=>{this.subscribe(((e,n)=>{n.unsubscribe(),t(e)}))}))}toCallback(t){return this.subscribe(((e,n)=>{n.unsubscribe(),t(e)})),this}pipe(...t){const e=new f(this._value);return e.setMethods(t),e.subscribeWith=t=>this.subscribe(t),e.next=t=>this.next(t),e}setMethods(t){this.methods=t}static all(t){return u(t.map((t=>{if(l(t))return t;return new f(t,(e=>(e.next(t),e)))})))}static globalSubCount$=new f(0)}function g(t){Object.defineProperty(t,"value",{set(e){t._value=e,t.emit()},get:()=>t._value}),Object.defineProperty(t,"set",{set:e=>t.next(e),get:()=>e=>t.next(e)})}class d extends f{value;constructor(t){super(t),this.value=t,g(this)}subscribe(t){const e=super.subscribe(t);return t(this._value,e),e}}function h(t){return(e,n)=>{n.setHandler((()=>{})),t(e,n.next)}}function m(t){return(e,n)=>{n.setHandler((()=>{}));t(e).then((t=>n.next(t)))}}const b=t=>(e,n)=>{n.setHandler((()=>{}));const r=t(e).subscribe((t=>{r.unsubscribe(),n.next(t)}))};function y(){return v.memory.stateConfig.tagSupport}function v(t){const e={beforeRender:t.beforeRender||(()=>{}),beforeRedraw:t.beforeRedraw||(()=>{}),afterRender:t.afterRender||(()=>{}),beforeDestroy:t.beforeDestroy||(()=>{})};v.tagUse.push(e)}v.tagUse=[],v.memory={};class w extends Error{details;constructor(t,e,n={}){super(t),this.name=w.name,this.details={...n,errorCode:e}}}class C extends w{constructor(t,e){super(t,"array-no-key-error",e),this.name=C.name}}class S extends w{constructor(t,e){super(t,"state-mismatch-error",e),this.name=S.name}}class T extends w{constructor(t,e){super(t,"sync-callback-error",e),this.name=T.name}}v.memory.stateConfig={array:[]};const A=t=>function(t){const e=t.memory,n=e.state,r=v.memory.stateConfig;r.rearray=[];const o=n?.length;if(o){for(let t=0;t<o;++t)x(n[t]);r.rearray.push(...n)}r.tagSupport=t}(t);function x(t){const e=t.callback;if(!e)return t.defaultValue;const[n,r]=function(t){const e=t(j),[n]=e,[r]=t(n);return[n,r]}(e);if(r!==j){const o='letState function incorrectly used. Second item in array is not setting expected value.\n\nFor "let" state use `let name = state(default)(x => [name, name = x])`\n\nFor "const" state use `const name = state(default)()`\n\nProblem state:\n'+(e?e.toString():JSON.stringify(t))+"\n";throw console.error(o,{state:t,callback:e,value:n,checkValue:r}),new Error(o)}return n}v({beforeRender:A,beforeRedraw:A,afterRender:t=>{const e=t.memory,n=v.memory.stateConfig,r=n.rearray;if(r.length&&r.length!==n.array.length){const e=`States lengths have changed ${r.length} !== ${n.array.length}. State tracking requires the same amount of function calls every render. Typically this errors is thrown when a state like function call occurs only for certain conditions or when a function is intended to be wrapped with a tag() call`,o=t.templater?.wrapper,s={oldStates:n.array,newStates:n.rearray,tagFunction:o.parentWrap.original},a=new S(e,s);throw console.warn(e,s),a}delete n.rearray,delete n.tagSupport,e.state.length=0,e.state.push(...n.array);const o=e.state;for(let t=o.length-1;t>=0;--t){const e=o[t];e.lastValue=x(e)}n.array=[]}});class j{}function k(t,e){for(let n=t.length-1;n>=0;--n){const r=t[n].get(),o=e[n].callback;o&&o(r),e[n].lastValue=r}}function R(t){const e=v.memory.stateConfig;let n;const r=e.rearray[e.array.length];if(r){let t=x(r);n=e=>[t,t=e];const o={get:()=>x(o),callback:n,lastValue:t,defaultValue:r.defaultValue};return e.array.push(o),t}let o=(t instanceof Function?t:()=>t)();if(o instanceof Function){const t=e.array,n=e.tagSupport,r=o;o=(...e)=>{const o=n.global.newest.memory.state;k(o,t);const s=r(...e);return k(t,o),s},o.original=r}n=t=>[o,o=t];const s={get:()=>x(s),callback:n,lastValue:o,defaultValue:o};return e.array.push(s),o}const P=(t,e)=>V(t,e),B=t=>t;const V=(t,e,{init:n,before:r=(()=>!0),final:o=B}={})=>{let s=R({pastResult:void 0,values:void 0});const a=s.values;if(void 0===a){if(!r(t))return s.values=t,s.pastResult;const i=(n||e)(t,a);return s.pastResult=o(i),s.values=t,s.pastResult}if(t.every(((t,e)=>t===a[e])))return s.pastResult;if(!r(t))return s.values=t,s.pastResult;const i=e(t,a);return s.pastResult=o(i),a.length=0,a.push(...t),s.pastResult};function E(t,e){return Object.defineProperty(e,"noInit",{get(){const e=t();return e.setup.init=()=>{},e}}),Object.defineProperty(e,"asSubject",{get(){const e=t(),n=R((()=>y())),r=R((()=>new d(void 0))),o=(t,o)=>(V(t,((t,e)=>{const s=y(),a=o(t,e);if(s!==n){k(v.memory.stateConfig.array,n.memory.state)}r.next(a)}),e.setup),r);return o.setup=e.setup,E((()=>o),o),o}}),Object.defineProperty(e,"truthy",{get(){const e=t();return e.setup.before=t=>t.every((t=>t)),e}}),e}function O(t,e){const n=R((()=>v.memory.stateConfig.array)),r=y();return R((()=>new f(t,e).pipe((t=>(k(r.memory.state,n),t)))))}function F(t){const e=v.memory.stateConfig;let n;const r=e.rearray[e.array.length];if(r){let t=x(r);n=e=>[t,t=e];const o={get:()=>x(o),callback:n,lastValue:t,defaultValue:r.defaultValue};return e.array.push(o),N(t,o)}let o=(t instanceof Function?t:()=>t)();n=t=>[o,o=t];const s={get:()=>x(s),callback:n,lastValue:o,defaultValue:o};return e.array.push(s),N(o,s)}function N(t,e){return n=>(e.callback=n||(e=>[t,t=e]),t)}function _(t){return e=>{let n=F(t)(e);return P([t],(()=>e(n=t))),e(n),n}}function D(t){return M(t,new WeakMap)}function M(t,e){if(null===t||"object"!=typeof t)return t;if(e.has(t))return e.get(t);if(t instanceof Date)return new Date(t);if(t instanceof RegExp)return new RegExp(t);const n=Array.isArray(t)?[]:Object.create(Object.getPrototypeOf(t));if(e.set(t,n),Array.isArray(t))for(let r=0;r<t.length;r++)n[r]=M(t[r],e);else for(const r in t)t.hasOwnProperty(r)&&(n[r]=M(t[r],e));return n}function $(t,e){return W(t,e,new WeakMap)}function W(t,e,n){return!!(t===e||(r=t,o=e,r instanceof Function&&o instanceof Function&&r.toString()===o.toString()))||(!!n.has(t)||"object"==typeof t&&"object"==typeof e&&(t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():(n.set(t,0),Array.isArray(t)&&Array.isArray(e)?function(t,e,n){if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(!W(t[r],e[r],n))return!1;return!0}(t,e,n):!Array.isArray(t)&&!Array.isArray(e)&&function(t,e,n){const r=Object.keys(t),o=Object.keys(e);if(0===r.length&&0===o.length)return!0;if(r.length!==o.length)return!1;for(const s of r){if(!o.includes(s)||!W(t[s],e[s],n))return!1}return!0}(t,e,n))));var r,o}E((()=>function(t){const e=(e,n)=>V(e,n,t);return e.setup=t,E((()=>e),e),e}({})),P),O._value=t=>{const e=R((()=>v.memory.stateConfig.array)),n=y();return R((()=>new d(t).pipe((t=>(k(n.memory.state,e),t)))))},O.all=function(t){const e=R((()=>v.memory.stateConfig.array)),n=y();return f.all(t).pipe((t=>(k(n.memory.state,e),t)))},v.memory.providerConfig={providers:[],ownerSupport:void 0};const J={create:t=>{const e=R((()=>({stateDiff:0,provider:void 0})));if(e.stateDiff){for(let t=e.stateDiff;t>0;--t)R(void 0);return R(void 0)}const n=R((()=>{const n=v.memory,r=n.stateConfig,o=r.array.length,s="prototype"in t?new t:t(),a=r.array.length-o,i=n.providerConfig,l={constructMethod:t,instance:s,clone:D(s),stateDiff:a};return e.provider=l,i.providers.push(l),e.stateDiff=a,s})),r=t,o=r.compareTo=r.toString();return e.provider.constructMethod.compareTo=o,n},inject:t=>R((()=>{const e=v.memory.providerConfig,n=t,r=n.compareTo=n.compareTo||t.toString();let o={ownerTagSupport:e.ownerSupport};for(;o.ownerTagSupport;){const t=o.ownerTagSupport.global.providers.find((t=>{if(t.constructMethod.compareTo===r)return!0}));if(t)return t.clone=D(t.instance),e.providers.push(t),t.instance;o=o.ownerTagSupport}const s=`Could not inject provider: ${t.name} ${t}`;throw console.warn(`${s}. Available providers`,e.providers),new Error(s)}))};function U(t,e){const n=v.memory.providerConfig;n.ownerSupport=e,t.global.providers.length&&(n.providers.length=0,n.providers.push(...t.global.providers))}function I(t,e){const n=L(t,e);for(let t=n.length-1;t>=0;--t){const{tagSupport:e,renderCount:r,provider:o}=n[t];if(e.global.deleted)continue;r===e.global.renderCount&&(o.clone=D(o.instance),tt(e.global.newest,!1))}}function L(t,e,n=[]){const r=t.global,o=r.providers.find((t=>t.constructMethod.compareTo===e.constructMethod.compareTo));o&&n.push({tagSupport:t,renderCount:r.renderCount,provider:o});const s=t.childTags;for(let t=s.length-1;t>=0;--t)L(s[t],e,n);return n}function z(t,e){const n=t.templater,r=e.templater,o=n?.tag||t,s=r.tag,a=o.strings,i=e.strings||s.strings;if(a.length!==i.length)return!1;if(!a.every(((t,e)=>i[e]===t)))return!1;return H(t.values||o.values,e.values||s.values)}function H(t,e){if(!(t.length===e.length))return!1;return!!e.every(((e,n)=>{const r=t[n];if(e instanceof Function&&r instanceof Function){return!!(e.toString()===r.toString())}return!0}))}function K(t){t.global.oldest.destroy(),t.global.context={}}function X(t,e){const n=v.tagUse,r=n.length;for(let o=0;o<r;++o)n[o].beforeRender(t,e)}function G(t,e){const n=v.tagUse,r=n.length;for(let o=0;o<r;++o)n[o].afterRender(t,e);v.memory.tagClosed$.next(e)}function Y(t,e){const n=v.tagUse,r=n.length;for(let o=0;o<r;++o)n[o].beforeDestroy(t,e)}function Z(t,e,n,r){const o=t.global.renderCount;!function(t,e,n){const r=n?.ownerTagSupport,o=r||e;if(n){if(n!==t){const e=n.memory.state,r=t.memory;t.global=n.global,r.state.length=0,r.state.push(...e)}!function(t,e){const n=v.tagUse,r=n.length;for(let o=0;o<r;++o)n[o].beforeRedraw(t,e)}(t,n)}else{X(t,o);v.memory.providerConfig.ownerSupport=o}}(t,r,e);let s=(0,t.templater.wrapper)(t,n);return G(t,r),s.global.renderCount>o+1?t.global.newest:(t.global.newest=s,s)}function q(t,e,n,r){const o=Z(t,e,n,r);!e||z(e,o)||(!function(t,e,n){const r=t.global,o=r.insertBefore;K(t),e.global={...r};const s=e.global;s.insertBefore=o,s.deleted=!1,s.oldest=e,s.newest=e,n.tagSupport=e}(e,o,n),o.global.oldest=o);const s=e?.ownerTagSupport;return o.ownerTagSupport=r||s,o}function Q(t,e,n,r){const o=r.tagSupport,s=o.global;e.global=s;const a=s.renderCount;!function(t){const e=t.global.providers.filter((t=>!$(t.instance,t.clone)));for(let n=e.length-1;n>=0;--n){const r=e[n];I(t.getAppTagSupport(),r),r.clone=D(r.instance)}}(t);const i=s.newest;if(a!==s.renderCount)return t.updateBy(i),i;const l=q(e,i||o||s.oldest,r,n),c=s.oldest||t;return z(i,l)&&(r.tagSupport=l,c.updateBy(l)),l}function tt(t,e){const n=t.global,r=t.templater;if(!r.wrapper){const e=t.ownerTagSupport;return++n.renderCount,e.global.deleted?t:tt(e.global.newest,!0)}const o=t.subject,s=t.global.oldest;let a,i=!1;if(e&&t&&(a=t.ownerTagSupport,a)){i=!$(r.props,t.propsConfig.latestCloned)}const l=Q(s,t,a,o);if(a&&i){return tt(a.global.newest,!0),l}return l}function et(t,e,n,...r){const o=t.memory.state;k(o,n);const s=e(...r);return k(n,o),tt(t,!1),s instanceof Promise&&s.finally((()=>{k(n,o),tt(t,!1)})),s}v({beforeRender:(t,e)=>{U(t,e)},beforeRedraw:(t,e)=>{U(t,e.ownerTagSupport)},afterRender:t=>{const e=v.memory.providerConfig;t.global.providers=[...e.providers],e.providers.length=0}}),v.memory.tagClosed$=new f(void 0,(t=>{y()||t.next()}));let nt=t=>(t,e,n,r,o,s)=>{throw new T("Callback function was called immediately in sync and must instead be call async")};const rt=()=>nt,ot=nt;function st(t){const e=y();if(!e){throw new T("callback() was called outside of synchronous rendering. Use `callback = callbackMaker()` to create a callback that could be called out of sync with rendering")}const n=v.memory.stateConfig.array;return(...r)=>e.global.callbackMaker?et(e,t,n,...r):t(...r)}function at(t){const e=v.memory.stateConfig.array;nt=n=>(...r)=>t.global.callbackMaker?et(t,n,e,...r):n(...r)}function it(t){R(t)}function lt(t){R((()=>{const e=y();e?.global.destroy$.toCallback(t)}))}function ct(t){v.memory.childrenCurrentSupport=t}function ut(){return v.memory.childrenCurrentSupport.templater.children}v({beforeRender:t=>at(t),beforeRedraw:t=>at(t),afterRender:t=>{t.global.callbackMaker=!0,nt=ot}}),v({beforeRender:t=>ct(t),beforeRedraw:t=>ct(t)});const pt="__tagvar",ft="--"+pt+"--",gt=new RegExp(ft,"g");class dt{strings;values;tagJsType=t.tag;memory={};templater;constructor(t,e){this.strings=t,this.values=e}key(t){return this.memory.arrayValue=t,this}children;html(t,...e){return this.children={strings:t,values:e},this}}class ht{props;tagJsType="templater";tagged;wrapper;madeChildIntoSubject;tag;children=new d([]);arrayValue;constructor(t){this.props=t}key(t){return this.arrayValue=t,this}html(t,...e){const n=function(t,e){if(l(t))return t;if(c(t))return e.madeChildIntoSubject=!0,new d(t);const n=t;return n?(e.madeChildIntoSubject=!0,n.memory.arrayValue=0,new d([n])):(e.madeChildIntoSubject=!0,new d([]))}(new dt(t,e),this);return this.children=n,this}}const mt=[];function bt(e,n,r,o){const s=n.global,a=s.renderCount,i=e.bind(r)(...o),l=a===s.renderCount,c=s.newest;if(!l)return i instanceof Promise?i.then((()=>"promise-no-data-ever")):"no-data-ever";if(n.templater.tagJsType===t.templater){const t=c.ownerTagSupport;return yt(t.global.newest,i,t.global)}return yt(c,i,c.global)}function yt(t,e,n){if(n.deleted)return"no-data-ever";const r=tt(t,!0);return n.newest=r,e instanceof Promise?e.then((()=>{if(n.deleted)return"promise-no-data-ever";const t=tt(n.newest,!0);return n.newest=t,"promise-no-data-ever"})):"no-data-ever"}function vt(t,e){e.parentNode.insertBefore(t,e.nextSibling)}function wt(t){return["string","number","boolean"].includes(t)}function Ct(t,e){t.destroy({stagger:e.removed++});const n=t.global.insertBefore;n.parentNode.removeChild(n)}function St(t){const e=t.global.insertBefore,n=t.global,r=n.placeholder;r&&(vt(e,r),delete n.placeholder)}function Tt(e){if(null==e)return t.undefined;const n=typeof e;if(e instanceof Function)return t.function;if("object"===n){if(e instanceof Date)return t.date;if(wt(n))return n;const r=e.tagJsType;if(r){if([t.tagComponent,t.templater,t.tag].includes(r))return r}if(c(e))return t.tagArray;if(l(e))return t.subject}return t.unknown}function At(e){return e.map((e=>{const n=e;switch(Tt(e)){case t.tagComponent:return D(e.props);case t.tag:case t.templater:return At(n.values);case t.tagArray:return At(n)}return D(e)}))}function xt(t,e=[]){for(let n=t.length-1;n>=0;--n){const r=t[n];e.push(r),t.splice(n,1),xt(r.childTags,e)}return e}function jt(t,e){const n=t;let r=n.templater;r||(r=new ht([]),r.tag=n,n.templater=r);const o=new d(r);return o.tagSupport=new Se(r,e,o),o}function kt(t){const e=document.createTextNode(""),n=t.parentNode;return n.insertBefore(e,t),n.removeChild(t),e}function Rt(t,e,n){const r=t.split(".");if("style"===r[0]&&(n.style[r[1]]=e),"class"===r[0])if(r.shift(),e)for(let t=0;t<r.length;++t)n.classList.add(r[t]);else for(let t=0;t<r.length;++t)n.classList.remove(r[t])}const Pt=/^\s*{__tagvar/,Bt=/}\s*$/;function Vt(t){return t&&t.search(Pt)>=0&&t.search(Bt)>=0}function Et(t,e,n,r,o,s){if(Vt(e))return function(t,e,n,r,o,s){const a=Ot(r,e);return Ft(t,a,n,o,s)}(t,e,n,r,o,s);if(Vt(t)){let e;const a=Ot(r,t).subscribe((t=>{!function(t,e,n,r,o){if(e&&e!=t)if("string"==typeof e)n.removeAttribute(e);else if(e instanceof Object)for(const t in e)n.removeAttribute(t);if("string"==typeof t){if(!t.length)return;return void Ft(t,"",n,r,o)}if(t instanceof Object)for(const e in t)Ft(e,t[e],n,r,o)}(t,e,n,o,s),e=t}));return o.global.subscriptions.push(a),void n.removeAttribute(t)}return Nt(t)?Rt(t,e,n):void 0}function Ot(t,e){return t[e.replace("{","").split("").reverse().join("").replace("}","").split("").reverse().join("")]}function Ft(t,e,n,r,o){const s=Nt(t);if(e instanceof Function){const r=function(...t){return e(n,t)};n[t].action=r}if(l(e)){n.removeAttribute(t);const a=e=>{if(e instanceof Function){const t=r.templater.wrapper,n=t?.parentWrap,o=n?.oneRender;o||(e=function(t,e){if(t.isChildOverride)return t;const n=(n,r)=>bt(t,e,n,r);return n.tagFunction=t,n}(e,r))}return function(t,e,n,r,o){if(t instanceof Function){const r=function(...n){return t(e,n)};return r.tagFunction=t,void(e[n]=r)}if(r)return void Rt(n,t,e);if(t)return void o(e,n,t);const s=[void 0,!1,null].includes(t);if(s)return void e.removeAttribute(n);o(e,n,t)}(e,n,t,s,o)},i=e.subscribe(a);r.global.subscriptions.push(i)}else o(n,t,e)}function Nt(t){return t.search(/^(class|style)(\.)/)>=0}function _t(t,e,n){t.setAttribute(e,n)}function Dt(t,e,n){t[e]=n}function Mt(t,e,n){const r=t.getAttributeNames();let o=_t;for(let s=0;s<r.length;++s){const a=r[s];"INPUT"===t.nodeName&&"value"===a&&(o=Dt);Et(a,t.getAttribute(a),t,e,n,o),o=_t}}const $t=/(?:<[^>]*?(?:(?:\s+\w+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+)))*\s*)\/?>)|({__tagvar[^}]+})/g;function Wt(t,e,n,{counts:r}){const o=e,s=o.tagSupport,a=s?.global.oldest||void 0;if(a&&a)return function(t,e,n){if(e instanceof Function){const t=e(n);return n.updateBy(t),void(e.tagSupport=t)}return n.updateBy(t),void(e.tagSupport=t)}(t,o,a);t.buildBeforeElement(n,{counts:r})}function Jt(t,e,n,r,o){if(!0!==t.tagged){const e=t.wrapper.parentWrap.original;let n=e.name||e.constructor?.name;"Function"===n&&(n=void 0);const r=n||e.toString().substring(0,120);throw new Error(`Not a tag component. Wrap your function with tag(). Example tag(props => html\`\`) on component:\n\n${r}\n\n`)}const s=new Se(t,r,e);let a=e.tagSupport;(s.global=a?.global||s.global).insertBefore=n;v.memory.providerConfig.ownerSupport=r;if(!a){a=function(t,e,n){const r=n.clones.map((t=>t));if(e=q(e,t.tagSupport,t,n),n.clones.length>r.length){const t=n.clones.filter((t=>!r.find((e=>e===t))));e.clones.push(...t)}return n.childTags.push(e),e}(e,a||s,r)}return Wt(a,e,n,o),a}function Ut(t,e,n,r){let o=r.tagSupport;o||(o=zt(t,n,r)),r.tagSupport=o,o.ownerTagSupport=n,o.buildBeforeElement(e,{counts:{added:0,removed:0}})}function It(t){const e=Lt();return e.tag=t,t.templater=e,e}function Lt(){const t={children:new d([]),props:[],isTag:!0,tagJsType:"templater",tagged:!1,html:()=>t,key:()=>t};return t}function zt(t,e,n){const r=new Se(t,e,n);return Ht(r,e,n),e.childTags.push(r),r}function Ht(t,e,n){t.global.oldest=t,t.global.newest=t,t.ownerTagSupport=e,n.tagSupport=t}function Kt(t,e,n,r,o){const s=r.clones;let a=t.lastArray=t.lastArray||[];t.placeholder||function(t,e){if("TEMPLATE"!==t.nodeName)return void(e.placeholder=t);const n=e.placeholder=document.createTextNode(""),r=t.parentNode;r.insertBefore(n,t),r.removeChild(t)}(n,t);const l=t.placeholder;let c=0;a=t.lastArray=t.lastArray.filter(((t,n)=>{if(e.length-1<n-c)return Yt(a,n,o),++c,!1;const r=e[n-c],s=i(r);let l,u=r,p=r.templater;s?l=u.memory.arrayValue:(p=r,u=p.tag,l=p.arrayValue);const f=!function(t,e){if(t===e)return!0;if(t instanceof Array&&e instanceof Array&&t.length==e.length)return t.every(((t,n)=>t==e[n]));return!1}(l,t.tagSupport.templater.tag.memory.arrayValue);return!f||(Yt(a,n,o),++c,!1)}));const u=e.length;for(let t=0;t<u;++t){const n=e[t],s=a[t],c=s?.tagSupport,u=n,p=i(u),f=new d(void 0);let g,h=u.templater;if(p?(h||(h=It(u)),g=new Se(h,r,f)):(h=u,g=Gt(h,r,f)),c){Ht(g,r,c.subject);const t=c.global;g.global=t,t.newest=g}if(!("arrayValue"in(h.tag||u).memory)){const t={template:g.getTemplate().string,array:e},n="Use html`...`.key(item) instead of html`...` to template an Array";console.error(n,t);throw new C(n,t)}if(a.length>t){s.tagSupport.global.oldest.updateBy(g)}else Xt(l,g,t,o,a),r.childTags.push(g)}return s}function Xt(t,e,n,r,o){const s={tagSupport:e,index:n};o.push(s);const a={added:r.counts.added+n,removed:r.counts.removed},i=document.createDocumentFragment(),l=document.createElement("template");i.appendChild(l),e.buildBeforeElement(l,{counts:a});t.parentNode.insertBefore(i,t)}function Gt(t,e,n){const r=zt(t,e,n);return Z(r,r,n,e),r}function Yt(t,e,n){const r=t[e];Ct(r.tagSupport,n.counts),r.deleted=!0,++n.counts.removed}function Zt(t,e){const n=e.parentNode,r=document.createTextNode(t);return n.insertBefore(r,e),n.removeChild(e),r}function qt(t){return[void 0,!1,null].includes(t)?"":t}function Qt(t,e,n){e.insertBefore=n;const r=e.clone||n;if(e.lastValue===t&&"lastValue"in e)return;e.lastValue=t;const o=qt(t),s=e.clone;if(s)return void(s.textContent=o);const a=Zt(o,r);e.clone=a}function te(t,e,n){const r=new ht([]);r.tagJsType="oneRender";const o=zt(r,n,e);const s=()=>(r.tag=t(),o);return r.wrapper=s,s.parentWrap=s,s.oneRender=!0,s.parentWrap.original=t,o}function ee(e,n,r,o,s){switch(Tt(e)){case t.templater:return void Ut(e,r,o,n);case t.tag:const a=e;let i=a.templater;return i||(i=It(a)),void Ut(i,r,o,n);case t.tagArray:return Kt(n,e,r,o,s);case t.tagComponent:return void Jt(e,n,r,o,s);case t.function:const l=e;if(l.oneRender){const t=te(l,n,o);return Z(t,t,n,o),void Ut(t.templater,r,o,n)}}!function(t,e,n){e.lastValue=t;const r=Zt(qt(t),n);e.clone=r}(e,n,r)}const ne=new RegExp('\\s*<template interpolate end id="__tagvar(\\d{1,4})"([^>]*)></template>(\\s*)');function re(t,e){let n=t,r=e;if("object"==typeof t){if(!e)return 3;n=[...t],r=[...e||[]];if(!n.every(((t,e)=>{let o=r[e];if(t&&"object"==typeof t){const e={...t},n={...o||{}},r=Object.entries(e).every((([t,r])=>oe(r,n[t],(()=>{delete e[t],delete n[t]}))));return r}return oe(t,o,(()=>{n.splice(e,1),r.splice(e,1)}))})))return 6}return!1}function oe(t,e,n){if(!(t instanceof Function))return!!$(t,e)&&4;if(!(e instanceof Function))return!1;const r=e?.original;r&&(e=r);t.original&&(t=t.original);return t.toString()===e.toString()?(n(),3):(n(),5)}function se(t,e,n){return t.map((t=>function(t,e,n,r){if(o(t)||!t)return t;if(!e)return t;return ae(t,e,n,r)}(t,e.ownerTagSupport,n,e)))}function ae(t,e,n,r,o,s,a=[]){if(t instanceof Function)return function(t,e,n,r,o,s){const a=t.toCall;if(a)return t;const i=(...t)=>i.toCall(...t);i.toCall=(...t)=>function(t,e,n,r){const o=n.global.newest,s=void 0===y(),a=t(...e),i=()=>{if(!1===s){const t=o.memory.state.every((t=>{const e=t.lastValue,n=t.get();return $(D(e),n)}));if(t)return a}return tt(o,!0),a};if(s)return i();return v.memory.tagClosed$.toCallback(i),a}(i.prop,t,e,i.stateArray),i.original=t,i.prop=t,i.stateArray=n,Object.assign(i,t),o&&r.global.destroy$.toCallback((()=>s[o]=t));return i}(t,e,n,r,o,s);if(a.includes(t))return t;if(a.push(t),"object"!=typeof t||!t)return t;if(t instanceof Array){for(let o=t.length-1;o>=0;--o){const s=t[o];t[o]=ae(s,e,n,r,o,t,a)}return t}for(const o in t){const s=ae(t[o],e,n,r,o,t,a),i=Object.getOwnPropertyDescriptor(t,o)?.set;i||(t[o]=s)}return t}function ie(t,e,n,r){let o=n.tagSupport?.global.newest,s=o.global.oldest;const a=o.templater.wrapper,i=e.templater.wrapper;let l=!1;if(a&&i){l=a.parentWrap.original===i.parentWrap.original}const c=e.templater;if(!l){return K(o.global.oldest),Jt(c,n,r,t,{counts:{added:0,removed:0}})}{const n=function(t,e,n){const r=re(n.props,t.propsConfig.latestCloned);if(r)return r;const o=re(t.propsConfig.latestCloned,e.propsConfig.latestCloned);if(o)return o;const s=function(t,e){const n=t.propsConfig.lastClonedKidValues,r=e.propsConfig.lastClonedKidValues;return!n.every(((t,e)=>{const n=r[e];return t.every(((t,e)=>t===n[e]))}))&&9}(t,e);return s}(o,e,c);if(!n){const n=function(t,e,n,r){const o=e.global.newest;if(!o){const e=n.memory.state;r.length=0;const o=se(r,t,e);return r.push(...o),t.propsConfig.castProps=o,r}e=o||e;const s=e.propsConfig,a=s.castProps,i=[];for(let e=r.length-1;e>=0;--e){const o=r[e],s=ce(a[e],o,t,n);i.push(s)}return t.propsConfig.castProps=i,i}(e,o,t,c.props);return e.propsConfig.castProps=n,o.propsConfig.latestCloned=e.propsConfig.latestCloned,o.propsConfig.lastClonedKidValues=e.propsConfig.lastClonedKidValues,o}}const u=o.global.newest,p=tt(e,!1);o=n.tagSupport;const f=p.global.oldest;if(!!!f)return le(p,r,o,n);if(f&&c.children._value.length){f.templater.children.next(c.children._value)}return l&&z(u,p)?(n.tagSupport=p,s.updateBy(p),p):(l&&o&&(K(o),p.global.context={}),s=void 0,s||(o=p,le(p,o.global.insertBefore,o,n)),o.global.newest=p,p)}function le(t,e,n,r){return t.buildBeforeElement(e,{counts:{added:0,removed:0}}),t.global.oldest=t,t.global.newest=t,n.global.oldest=t,n.global.newest=t,r.tagSupport=t,t}function ce(t,e,n,r,o=[]){if(t instanceof Function){if(e.toCall)return t.toCall=e.toCall,e;const n=r.global.newest.memory.state;return t.prop=e,t.stateArray=n,t}if(o.includes(e))return e;if(o.push(e),"object"!=typeof e||!e)return e;if(e instanceof Array){for(let s=e.length-1;s>=0;--s){const a=e[s];e[s]=ce(t[s],a,n,r,o)}return e}if(void 0===t)return e;for(const s in e){const a=e[s],i=ce(t[s],a,n,r,o),l=Object.getOwnPropertyDescriptor(e,s)?.set;l||(e[s]=i)}return e}function ue(e,n,r,a){const l=e,c=Tt(n);if(function(e,n,r,s){const a=e,i="lastValue"in a,l=a.lastValue;if(i&&l!==n){const t=typeof n;return(!wt(t)||typeof l!==t)&&!(n instanceof Function&&l instanceof Function)&&(function(t,e){const n=e.clone,r=n.parentNode;r.insertBefore(t,n),r.removeChild(n),delete e.clone,delete e.lastValue}(r,a),"changed-simple-value")}const c=e,u=c.lastArray;if(u&&s!==t.tagArray){const t=c.placeholder;delete c.lastArray,delete c.placeholder,vt(r,t);for(let t=u.length-1;t>=0;--t){const{tagSupport:e}=u[t];Ct(e,{added:0,removed:0})}return"array"}const p=e.tagSupport;if(p){const r=o(n);return o(e._value)&&r?!z(n,p)&&(St(p),K(p),2):s!==t.tagComponent&&(!n||!n.oneRender)&&(St(p),K(p),"different-tag")}}(e,n,a,c),c===t.tagComponent)return function(t,e,n,r){if(!e.tagSupport)return Jt(t,e,n,r,{counts:{added:0,removed:0}}),e;const o=new Se(t,r,e),s=e.tagSupport,a=s.global.newest;if(!a)return St(s),Jt(t,e,n,r,{counts:{added:0,removed:0}}),e;{const t=a.memory.state;o.memory.state.length=0,o.memory.state.push(...t)}return o.global=s.global,e.tagSupport=o,ie(r,o,e,n),e}(n,l,a,r);if(l.tagSupport)return c===t.function||function(t,e,n){const r=t.tagSupport;let o=e;const a=i(e);if(a){const t=e;o=t.templater,o||(o=new ht([]),o.tag=t,t.templater=o)}const l=new Se(o,n,t);a&&(l.global=r.global);const c=e&&z(r,l);s(e)&&Ht(l,n,t);if(c)return void r.updateBy(l);if(c){return Ut(o,r.global.insertBefore,n,t)}Qt(e,t,t.insertBefore)}(e,n,r),l;switch(c){case t.tagArray:return Kt(e,n,a,r,{counts:{added:0,removed:0}}),e;case t.templater:return Ut(n,a,r,l),l;case t.tag:const o=n;let s=o.templater;return s||(s=Lt(),o.templater=s,s.tag=o),Ut(s,a,r,l),l;case t.subject:return n;case t.function:return e.clone||(e.clone=kt(a)),e}return Qt(n,e,a),l}function pe(t,e,n,r){if(!t.hasAttribute("end"))return;const o=t.getAttribute("id");if(o?.substring(0,pt.length)!==pt)return;const s=e[o];if(a(s._value)||c(s.value))return{variableName:o,ownerSupport:n,subject:s,insertBefore:t};fe(t,s,n,r)}function fe(t,e,n,r){let o=!1;const s=s=>{if(o)return void ue(e,s,n,t);ee(s,e,t,n,{counts:{...r}}),o=!0};let a=s;const i=e.subscribe((t=>a(t)));if(t.parentNode){const n=e.clone=kt(t);a=r=>{const o=n.parentNode;o.insertBefore(t,n),o.removeChild(n),delete e.clone,a=s,s(r)}}n.global.subscriptions.push(i)}function ge(t,e,n,r){if(!t.getAttribute)return;"TEXTAREA"===t.nodeName&&function(t,e,n){const r=t.value;if(r.search(ne)>=0){const o=r.match(/__tagvar(\d{1,4})/),s="{"+(o?o[0]:"")+"}";t.value="",t.setAttribute("text-var-value",s);const a=(e,n,r)=>t.value=r;Et("text-var-value",s,t,e,n,a)}}(t,n,r);let o=e.counts.added;o=function(t,e){const n=t.oninit;if(!n)return e.added;const r=n.tagFunction;if(!r)return e.added;const o=r.tagFunction;return o?(o({target:t,stagger:e.added}),++e.added):e.added}(t,e.counts)-o;const s=t.children;if(s)for(let t=s.length-1;t>=0;--t){ge(s[t],{...e,counts:e.counts},n,r)}}function de(t,e,n,r){const o=n.counts,s=[],a=[];for(let i=r.length-1;i>=0;--i){const l=r[i],c=pe(l,t,e,o);if(c)a.push(c);else if(l.children)for(let r=l.children.length-1;r>=0;--r){const i=l.children[r];if(he(i)){const n=pe(i,t,e,o);n&&a.push(n)}const{clones:c,tagComponents:u}=de(t,e,n,i.children);s.push(...c),a.push(...u)}}return{clones:s,tagComponents:a}}function he(t){return"TEMPLATE"===t.tagName&&void 0!==t.getAttribute("interpolate")&&void 0!==t.getAttribute("end")}function me(t,e,n,r,o){const s=[],a=[],i=n.interpolation,l=t.children[0],c=l.content.children;if(i.keys.length){const{clones:t,tagComponents:n}=de(e,r,o,c);s.push(...t),a.push(...n)}return Mt(l,e,r),be(c,e,r),{clones:s,tagComponents:a}}function be(t,e,n){for(let r=t.length-1;r>=0;--r){const o=t[r];Mt(o,e,n),o.children&&be(o.children,e,n)}}function ye(t){const e=function(t){const e=[];return{string:t.replace($t,((t,n)=>{if(t.startsWith("<"))return t;const r=n.substring(1,n.length-1);return e.push(r),`<template interpolate end id="${r}"></template>`})),keys:e}}(t);return e.string=e.string.replace(gt,pt),e}function ve(t,e,n,r,o){const s=function(t,e){const n=[];let r=t.children[0].content.firstChild;const o=document.createDocumentFragment();for(;r;){const t=r.nextSibling;n.push(r),o.appendChild(r),r=t}e.parentNode&&e.parentNode.insertBefore(o,e);return n}(t,e);if(!s.length)return s;for(let t=s.length-1;t>=0;--t){const e=s[t];ge(e,o,r,n),n.clones.push(e)}return s}const we=new RegExp(pt,"g");class Ce{templater;subject;isApp=!0;appElement;strings;values;propsConfig;memory={state:[]};clones=[];global={destroy$:new f,context:{},providers:[],renderCount:0,deleted:!1,subscriptions:[],oldest:this};hasLiveElements=!1;childTags=[];constructor(t,e,n){this.templater=t,this.subject=e;const r=t.props;this.propsConfig=this.clonePropsBy(r,n)}clonePropsBy(t,e){const n=this.templater.children.value,r=t.map((t=>D(t)));return this.propsConfig={latest:t,latestCloned:r,castProps:e,lastClonedKidValues:n.map((t=>At(t.values)))}}buildBeforeElement(t,e={counts:{added:0,removed:0}}){const n=this.subject,r=this.global;r.insertBefore=t,r.placeholder||function(t){const e=t.insertBefore;t.placeholder=kt(e)}(r);const o=r.placeholder;r.oldest=this,r.newest=this,n.tagSupport=this,this.hasLiveElements=!0;const s=this.update(),a=this.getTemplate(),i=document.createDocumentFragment(),l=document.createElement("template");l.innerHTML=a.string,i.appendChild(l);const{tagComponents:c}=me(i,s,a,this,{counts:e.counts});ve(i,o,this,s,e);const u=c.length;for(let t=0;t<u;++t){const n=c[t];fe(n.insertBefore,n.subject,n.ownerSupport,e.counts),ve(i,n.insertBefore,n.ownerSupport,s,e)}}getTemplate(){const t=this.templater.tag,e=this.strings||t.strings,n=this.values||t.values,r=ye(e.map(((t,e)=>(t.replace(we,ft)+(n.length>e?`{${pt}${e}}`:"")).replace(/>\s*/g,">").replace(/\s*</g,"<"))).join(""));return{interpolation:r,string:r.string,strings:e,values:n,context:this.global.context||{}}}update(){return this.updateContext(this.global.context)}updateContext(e){const n=this.templater.tag,r=this.strings||n.strings,o=this.values||n.values;return r.map(((n,r)=>{if(!(o.length>r))return;const s=pt+r,a=o[r];if(s in e)return function(t,e,n){const r=t[e];l(n)||r.next(n)}(e,s,a);e[s]=function(e,n){switch(Tt(e)){case t.tagComponent:return new d(e);case t.templater:return jt(e.tag,n);case t.tag:return jt(e,n);case t.subject:return e}return new d(e)}(a,this)})),e}updateBy(t){const e=t.templater.tag;this.updateConfig(e.strings,e.values)}updateConfig(t,e){this.strings=t,this.updateValues(e)}updateValues(t){return this.values=t,this.updateContext(this.global.context)}destroy(t={stagger:0,byParent:!1}){const e=!t.byParent,n=this.global,r=this.subject,o=t.byParent?[]:xt(this.childTags);e&&a(this.templater)&&(n.destroy$.next(),Y(this,this)),this.destroySubscriptions();for(let t=o.length-1;t>=0;--t){const e=o[t],n=e.global;delete n.newest,n.deleted=!0,a(e.templater)&&Y(e,e)}if("TEMPLATE"===n.insertBefore.nodeName){n.placeholder&&!("arrayValue"in this.memory)&&(t.byParent||St(this))}let s;const i=this.ownerTagSupport;if(i&&(i.childTags=i.childTags.filter((t=>t!==this))),e){const{stagger:e,promise:n}=this.destroyClones(t);t.stagger=e,n&&(s=n)}else this.destroyClones();return delete n.placeholder,n.context={},delete n.oldest,delete n.newest,n.deleted=!0,this.childTags.length=0,this.hasLiveElements=!1,delete r.tagSupport,s=s?s.then((async()=>{const t=o.map((t=>t.destroy({stagger:0,byParent:!0})));return Promise.all(t)})):Promise.all(o.map((t=>t.destroy({stagger:0,byParent:!0})))),s.then((()=>t.stagger))}destroyClones({stagger:t}={stagger:0}){const e=[...this.clones];this.clones.length=0;const n=e.map((e=>this.checkCloneRemoval(e,t))).filter((t=>t)),r=this.global.context;for(const t in r){const e=r[t].clone;e?.parentNode&&e.parentNode.removeChild(e)}return n.length?{promise:Promise.all(n),stagger:t}:{stagger:t}}checkCloneRemoval(t,e){let n;const r=t;r.ondestroy&&(n=function(t,e){const n=t.ondestroy;if(!n)return;const r=n.tagFunction;if(!r)return;const o=r.tagFunction;if(!o)return;return o({target:t,stagger:e})}(r,e));const o=()=>{const e=t.parentNode;e&&e.removeChild(t);const n=this.ownerTagSupport;n&&(n.clones=n.clones.filter((e=>e!==t)))};return n instanceof Promise?n.then(o):(o(),n)}destroySubscriptions(){const t=this.global.subscriptions;for(let e=t.length-1;e>=0;--e)t[e].unsubscribe();t.length=0}}class Se extends Ce{templater;ownerTagSupport;subject;version;isApp=!1;constructor(t,e,n,r,o=0){super(t,n,r),this.templater=t,this.ownerTagSupport=e,this.subject=n,this.version=o}getAppTagSupport(){let t=this;for(;t.ownerTagSupport;)t=t.ownerTagSupport;return t}}function Te(t,...e){return new dt(t,e)}let Ae=0;function xe(e){const n=function(...e){const r=new ht(e);r.tagJsType=t.tagComponent;const o=function(e,n){const r=v.memory.stateConfig.array;return function(o,s){const a=o.global;++a.renderCount;const i=e.children,l=a.oldest?.templater.children.lastArray;l&&(i.lastArray=l);const c=n.original;let u=e.props;const p=o.propsConfig.castProps||se(u,o,r);u.map((t=>D(t)));let f=c(...p);f instanceof Function&&(f=f()),f&&f.tagJsType===t.tag||(f=Te`${f}`),f.templater=e,e.tag=f,f.memory.arrayValue=e.arrayValue;const g=new Se(e,o.ownerTagSupport,s,p,a.renderCount);g.global=a;const d=v.memory.stateConfig.array;if(g.memory.state.push(...d),e.madeChildIntoSubject){const t=i.value;for(let e=t.length-1;e>=0;--e){const n=t[e],r=n.values;for(let t=r.length-1;t>=0;--t){const e=r[t];if(!(e instanceof Function))continue;const o=n.values[t];o.isChildOverride||(n.values[t]=function(...t){const n=g.ownerTagSupport;return bt(e,n,this,t)},o.isChildOverride=!0)}}}return g}}(r,n);return o.parentWrap||(o.parentWrap=n),r.tagged=!0,r.wrapper=o,r};n.original=e,n.compareTo=e.toString();const r=e;return n.isTag=!0,n.original=r,r.tags=mt,r.setUse=v,r.tagIndex=Ae++,mt.push(n),n}xe.oneRender=(...t)=>{throw new Error("Do not call function tag.oneRender but instead set it as: `(props) => tag.oneRender = (state) => html`` `")},xe.route=t=>{throw new Error("Do not call function tag.route but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")},xe.app=t=>{throw new Error("Do not call function tag.route but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")},Object.defineProperty(xe,"oneRender",{set(t){t.oneRender=!0}});const je=[];function ke(t,e,n){const r=je.findIndex((t=>t.element===e));r>=0&&(je[r].tagSupport.destroy(),je.splice(r,1),console.warn("Found and destroyed app element already rendered to element",{element:e}));const o=function(t){let e={};const n=new d(e);e=new Ce(t,n),n.next(t),n.tagSupport=e,X(e,void 0);const r=t.wrapper,o=r(e,n);return G(e,o),o}(t(n));o.appElement=e,o.isApp=!0,o.global.isApp=!0;const s=document.createElement("template");s.setAttribute("id","app-tag-"+je.length),s.setAttribute("app-tag-detail",je.length.toString());const a=document.createDocumentFragment();return a.appendChild(s),e.destroy=async()=>{await o.destroy();const t=o.global.insertBefore;t.parentNode.removeChild(t)},o.buildBeforeElement(s),o.global.oldest=o,o.global.newest=o,e.setUse=t.original.setUse,je.push({element:e,tagSupport:o}),e.appendChild(a),{tagSupport:o,tags:t.original.tags}}const Re={tagElement:ke,renderWithSupport:q,renderTagSupport:tt,renderTagOnly:Z};var Pe=n.W9,Be=n.t3,Ve=n.Y2,Ee=n.ei,Oe=n.B7,Fe=n.XF,Ne=n.vw,_e=n.PC,De=n.uX,Me=n.O9,$e=n.Ot,We=n.tD,Je=n.E2,Ue=n.OH,Ie=n.Y_,Le=n.zV,ze=n.WJ,He=n.AZ,Ke=n.cF,Xe=n.qy,Ge=n.u2,Ye=n.zl,Ze=n.O5,qe=n.Ze,Qe=n._4,tn=n.iO,en=n.dk,nn=n.mn,rn=n.NM,on=n.z,sn=n.bc,an=n.sA,ln=n.MG,cn=n.t2,un=n.r5,pn=n.pG,fn=n.yN,gn=n.QB,dn=n.vJ,hn=n.AI,mn=n.wk,bn=n.uz,yn=n.Tc,vn=n.Hf,wn=n._A,Cn=n.NU,Sn=n.wB,Tn=n.id,An=n.MC,xn=n.zC;export{Pe as ArrayNoKeyError,Be as BaseTagSupport,Ve as RouteQuery,Ee as StateMismatchError,Oe as Subject,Fe as SyncCallbackError,Ne as Tag,_e as TagError,De as TagSupport,Me as TemplaterResult,$e as ValueSubject,We as ValueTypes,Je as callback,Ue as callbackMaker,Ie as children,Le as combineLatest,ze as defineValueOn,He as getValueType,Ke as hmr,Xe as html,Ge as interpolateElement,Ye as interpolateString,Ze as isLikeValueSets,qe as isStaticTag,Qe as isSubjectInstance,tn as isTagArray,en as isTagClass,nn as isTagComponent,rn as isTagTemplater,on as letProp,sn as letState,an as onDestroy,ln as onInit,cn as oneRenderToTagSupport,un as providers,pn as renderTagOnly,fn as renderTagSupport,gn as renderWithSupport,dn as runBeforeRender,hn as setUse,mn as state,bn as subject,yn as tag,vn as tagElement,wn as tags,Cn as variablePrefix,Sn as watch,Tn as willCallback,An as willPromise,xn as willSubscribe};
//# sourceMappingURL=bundle.js.map