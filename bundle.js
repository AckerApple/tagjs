var t,e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},n={};e.d(n,{W9:()=>C,t3:()=>we,Y2:()=>r,ei:()=>S,B7:()=>g,XF:()=>T,vw:()=>bt,PC:()=>w,uX:()=>Ce,O9:()=>yt,Ot:()=>f,tD:()=>t,E2:()=>st,OH:()=>rt,Y_:()=>dt,zV:()=>u,WJ:()=>d,AZ:()=>xt,cF:()=>Re,qy:()=>Ae,u2:()=>he,zl:()=>be,O5:()=>H,Ze:()=>o,_4:()=>l,iO:()=>c,dk:()=>i,mn:()=>a,NM:()=>s,z:()=>_,bc:()=>N,sA:()=>pt,MG:()=>ct,t2:()=>te,r5:()=>J,pG:()=>q,yN:()=>et,QB:()=>Q,vJ:()=>X,AI:()=>v,wk:()=>k,uz:()=>P,Tc:()=>Te,Hf:()=>je,_A:()=>vt,NU:()=>ft,wB:()=>B,id:()=>h,MC:()=>m,zC:()=>b});class r{get(t){return"todo"}}function o(e){return[t.tag,t.templater].includes(e?.tagJsType)}function s(e){return e?.tagJsType===t.templater}function a(e){return e?.tagJsType===t.tagComponent}function i(e){return e?.tagJsType===t.tag}function l(t){return!(!0!==t?.isSubject&&!t?.subscribe)}function c(e){return e instanceof Array&&e.every((e=>[t.tag,t.templater,t.tag,t.tagComponent].includes(e?.tagJsType)))}function u(t){const e=new g;return e.subscribeWith=e=>{const n=[],r=[],o=(o,s)=>{n[s]=!0,r[s]=o;if(n.length===t.length){for(let t=n.length-1;t>=0;--t)if(!n[t])return;e(r,a)}},s=[...t],a=s.shift().subscribe((t=>o(t,0))),i=s.map(((t,e)=>t.subscribe((t=>o(t,e+1)))));return a.subscriptions=i,a},e}function p(t,e,n){const r=[...e],o=r.shift(),s=t=>{if(r.length)return p(t,r,n);n(t)};let a=s;const i=o(t,{setHandler:t=>a=t,next:s});a(i)}!function(t){t.unknown="unknown",t.tag="tag",t.templater="templater",t.tagComponent="tag-component",t.tagArray="tag-array",t.subject="subject",t.date="date",t.string="string",t.boolean="boolean",t.function="function",t[void 0]="undefined"}(t||(t={}));class g{value;onSubscription;methods=[];isSubject=!0;subscribers=[];subscribeWith;_value;set;constructor(t,e){this.value=t,this.onSubscription=e,this._value=t,d(this)}subscribe(t){const e=function(t,e,n){const r=g.globalSubCount$;g.globalSubCount$.next(r._value+1);const o=()=>{o.unsubscribe()};return o.callback=e,o.subscriptions=[],o.unsubscribe=()=>{!function(t,e){const n=t.findIndex((t=>t.callback===e));-1!==n&&t.splice(n,1)}(n,e),g.globalSubCount$.next(r._value-1),o.unsubscribe=()=>o;const t=o.subscriptions;for(let e=t.length-1;e>=0;--e)t[e].unsubscribe();return o},o.add=t=>(o.subscriptions.push(t),o),o.next=t=>{e(t,o)},o}(0,t,this.subscribers),n=this.subscribeWith;if(n){if(this.methods.length){const n=t;t=t=>{p(t,this.methods,(t=>n(t,e)))}}return n(t)}this.subscribers.push(e);const r=g.globalSubCount$.value;return g.globalSubCount$.next(r+1),this.onSubscription&&this.onSubscription(e),e}next(t){this._value=t,this.emit()}emit(){const t=this._value,e=[...this.subscribers],n=e.length;for(let r=0;r<n;++r){const n=e[r];n.callback(t,n)}}toPromise(){return new Promise((t=>{this.subscribe(((e,n)=>{n.unsubscribe(),t(e)}))}))}toCallback(t){return this.subscribe(((e,n)=>{n.unsubscribe(),t(e)})),this}pipe(...t){const e=new g(this._value);return e.setMethods(t),e.subscribeWith=t=>this.subscribe(t),e.next=t=>this.next(t),e}setMethods(t){this.methods=t}static all(t){return u(t.map((t=>{if(l(t))return t;return new g(t,(e=>(e.next(t),e)))})))}static globalSubCount$=new g(0)}function d(t){Object.defineProperty(t,"value",{set(e){t._value=e,t.emit()},get:()=>t._value}),Object.defineProperty(t,"set",{set:e=>t.next(e),get:()=>e=>t.next(e)})}class f extends g{value;constructor(t){super(t),this.value=t,d(this)}subscribe(t){const e=super.subscribe(t);return t(this._value,e),e}}function h(t){return(e,n)=>{n.setHandler((()=>{})),t(e,n.next)}}function m(t){return(e,n)=>{n.setHandler((()=>{}));t(e).then((t=>n.next(t)))}}const b=t=>(e,n)=>{n.setHandler((()=>{}));const r=t(e).subscribe((t=>{r.unsubscribe(),n.next(t)}))};function y(){return v.memory.stateConfig.tagSupport}function v(t){const e={beforeRender:t.beforeRender||(()=>{}),beforeRedraw:t.beforeRedraw||(()=>{}),afterRender:t.afterRender||(()=>{}),beforeDestroy:t.beforeDestroy||(()=>{})};v.tagUse.push(e)}v.tagUse=[],v.memory={};class w extends Error{details;constructor(t,e,n={}){super(t),this.name=w.name,this.details={...n,errorCode:e}}}class C extends w{constructor(t,e){super(t,"array-no-key-error",e),this.name=C.name}}class S extends w{constructor(t,e){super(t,"state-mismatch-error",e),this.name=S.name}}class T extends w{constructor(t,e){super(t,"sync-callback-error",e),this.name=T.name}}v.memory.stateConfig={array:[]};const A=t=>function(t){const e=t.memory,n=e.state,r=v.memory.stateConfig;r.rearray=[];const o=n?.length;if(o){for(let t=0;t<o;++t)x(n[t]);r.rearray.push(...n)}r.tagSupport=t}(t);function x(t){const e=t.callback;if(!e)return t.defaultValue;const[n,r]=function(t){const e=t(j),[n]=e,[r]=t(n);return[n,r]}(e);if(r!==j){const o='State property not used correctly. Second item in array is not setting value as expected.\n\nFor "let" state use `let name = state(default)(x => [name, name = x])`\n\nFor "const" state use `const name = state(default)()`\n\nProblem state:\n'+(e?e.toString():JSON.stringify(t))+"\n";throw console.error(o,{state:t,callback:e,value:n,checkValue:r}),new Error(o)}return n}v({beforeRender:A,beforeRedraw:A,afterRender:t=>{const e=t.memory,n=v.memory.stateConfig,r=n.rearray;if(r.length&&r.length!==n.array.length){const e=`States lengths have changed ${r.length} !== ${n.array.length}. State tracking requires the same amount of function calls every render. Typically this errors is thrown when a state like function call occurs only for certain conditions or when a function is intended to be wrapped with a tag() call`,o=t.templater?.wrapper,s={oldStates:n.array,newStates:n.rearray,tagFunction:o.parentWrap.original},a=new S(e,s);throw console.warn(e,s),a}delete n.rearray,delete n.tagSupport,e.state.length=0,e.state.push(...n.array);const o=e.state;for(let t=o.length-1;t>=0;--t){const e=o[t];e.lastValue=x(e)}n.array=[]}});class j{}function R(t,e){for(let n=t.length-1;n>=0;--n){const r=t[n].get(),o=e[n].callback;o&&o(r),e[n].lastValue=r}}function k(t){const e=v.memory.stateConfig;let n;const r=e.rearray[e.array.length];if(r){let t=x(r);n=e=>[t,t=e];const o={get:()=>x(o),callback:n,lastValue:t,defaultValue:r.defaultValue};return e.array.push(o),t}let o=(t instanceof Function?t:()=>t)();if(o instanceof Function){const t=e.array,n=e.tagSupport,r=o;o=(...e)=>{const o=n.global.newest.memory.state;R(o,t);const s=r(...e);return R(t,o),s},o.original=r}n=t=>[o,o=t];const s={get:()=>x(s),callback:n,lastValue:o,defaultValue:o};return e.array.push(s),o}const B=(t,e)=>V(t,e),E=t=>t;const V=(t,e,{init:n,before:r=(()=>!0),final:o=E}={})=>{let s=k({pastResult:void 0,values:void 0});const a=s.values;if(void 0===a){if(!r(t))return s.values=t,s.pastResult;const i=(n||e)(t,a);return s.pastResult=o(i),s.values=t,s.pastResult}if(t.every(((t,e)=>t===a[e])))return s.pastResult;if(!r(t))return s.values=t,s.pastResult;const i=e(t,a);return s.pastResult=o(i),a.length=0,a.push(...t),s.pastResult};function F(t,e){return Object.defineProperty(e,"noInit",{get(){const e=t();return e.setup.init=()=>{},e}}),Object.defineProperty(e,"asSubject",{get(){const e=t(),n=(t,n)=>{const r=k((()=>y().memory.state)),o=k((()=>new f(void 0)));return V(t,((t,e)=>{const s=n(t,e);if(r.length){R(v.memory.stateConfig.array,r)}o.next(s)}),e.setup),o};return n.setup=e.setup,F((()=>n),n),n}}),Object.defineProperty(e,"truthy",{get(){const e=t();return e.setup.before=t=>t.every((t=>t)),e}}),e}function P(t,e){const n=k((()=>v.memory.stateConfig.array)),r=y();return k((()=>new g(t,e).pipe((t=>(R(r.memory.state,n),t)))))}function N(t){const e=v.memory.stateConfig;let n;const r=e.rearray[e.array.length];if(r){let t=x(r);n=e=>[t,t=e];const o={get:()=>x(o),callback:n,lastValue:t,defaultValue:r.defaultValue};return e.array.push(o),O(t,o)}let o=(t instanceof Function?t:()=>t)();n=t=>[o,o=t];const s={get:()=>x(s),callback:n,lastValue:o,defaultValue:o};return e.array.push(s),O(o,s)}function O(t,e){return n=>(e.callback=n||(e=>[t,t=e]),t)}function _(t){return e=>{let n=N(t)(e);return B([t],(()=>e(n=t))),e(n),n}}function M(t){return W(t,new WeakMap)}function W(t,e){if(null===t||"object"!=typeof t)return t;if(e.has(t))return e.get(t);if(t instanceof Date)return new Date(t);if(t instanceof RegExp)return new RegExp(t);const n=Array.isArray(t)?[]:Object.create(Object.getPrototypeOf(t));if(e.set(t,n),Array.isArray(t))for(let r=0;r<t.length;r++)n[r]=W(t[r],e);else for(const r in t)t.hasOwnProperty(r)&&(n[r]=W(t[r],e));return n}function D(t,e){return $(t,e,new WeakMap)}function $(t,e,n){return!!(t===e||(r=t,o=e,r instanceof Function&&o instanceof Function&&r.toString()===o.toString()))||(!!n.has(t)||"object"==typeof t&&"object"==typeof e&&(t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():(n.set(t,0),Array.isArray(t)&&Array.isArray(e)?function(t,e,n){if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(!$(t[r],e[r],n))return!1;return!0}(t,e,n):!Array.isArray(t)&&!Array.isArray(e)&&function(t,e,n){const r=Object.keys(t),o=Object.keys(e);if(0===r.length&&0===o.length)return!0;if(r.length!==o.length)return!1;for(const s of r){if(!o.includes(s)||!$(t[s],e[s],n))return!1}return!0}(t,e,n))));var r,o}F((()=>function(t){const e=(e,n)=>V(e,n,t);return e.setup=t,F((()=>e),e),e}({})),B),P._value=t=>{const e=k((()=>v.memory.stateConfig.array)),n=y();return k((()=>new f(t).pipe((t=>(R(n.memory.state,e),t)))))},P.all=function(t){const e=k((()=>v.memory.stateConfig.array)),n=y();return g.all(t).pipe((t=>(R(n.memory.state,e),t)))},v.memory.providerConfig={providers:[],ownerSupport:void 0};const J={create:t=>{const e=k((()=>({stateDiff:0,provider:void 0})));if(e.stateDiff){for(let t=e.stateDiff;t>0;--t)k(void 0);return k(void 0)}const n=k((()=>{const n=v.memory,r=n.stateConfig,o=r.array.length,s="prototype"in t?new t:t(),a=r.array.length-o,i=n.providerConfig,l={constructMethod:t,instance:s,clone:M(s),stateDiff:a};return e.provider=l,i.providers.push(l),e.stateDiff=a,s})),r=t,o=r.compareTo=r.toString();return e.provider.constructMethod.compareTo=o,n},inject:t=>k((()=>{const e=v.memory.providerConfig,n=t,r=n.compareTo=n.compareTo||t.toString();let o={ownerTagSupport:e.ownerSupport};for(;o.ownerTagSupport;){const t=o.ownerTagSupport.global.providers.find((t=>{if(t.constructMethod.compareTo===r)return!0}));if(t)return t.clone=M(t.instance),e.providers.push(t),t.instance;o=o.ownerTagSupport}const s=`Could not inject provider: ${t.name} ${t}`;throw console.warn(`${s}. Available providers`,e.providers),new Error(s)}))};function I(t,e){const n=v.memory.providerConfig;n.ownerSupport=e,t.global.providers.length&&(n.providers.length=0,n.providers.push(...t.global.providers))}function U(t,e){const n=L(t,e);for(let t=n.length-1;t>=0;--t){const{tagSupport:e,renderCount:r,provider:o}=n[t];if(e.global.deleted)continue;r===e.global.renderCount&&(o.clone=M(o.instance),et(e,!1))}}function L(t,e,n=[]){const r=t.global,o=r.providers.find((t=>t.constructMethod.compareTo===e.constructMethod.compareTo));o&&n.push({tagSupport:t,renderCount:r.renderCount,provider:o});const s=t.childTags;for(let t=s.length-1;t>=0;--t)L(s[t],e,n);return n}function z(t,e){const n=t.templater,r=e.templater,o=n?.tag||t,s=r.tag,a=o.strings,i=e.strings||s.strings;if(a.length!==i.length)return!1;if(!a.every(((t,e)=>i[e]===t)))return!1;return H(t.values||o.values,e.values||s.values)}function H(t,e){if(!(t.length===e.length))return!1;return!!e.every(((e,n)=>{const r=t[n];if(e instanceof Function&&r instanceof Function){return!!(e.toString()===r.toString())}return!0}))}function K(t){t.global.oldest.destroy(),G(t),t.global.context={}}function G(t){delete t.global.oldest,delete t.global.newest}function X(t,e){const n=v.tagUse,r=n.length;for(let o=0;o<r;++o)n[o].beforeRender(t,e)}function Y(t,e){const n=v.tagUse,r=n.length;for(let o=0;o<r;++o)n[o].afterRender(t,e);v.memory.tagClosed$.next(e)}function Z(t,e){const n=v.tagUse,r=n.length;for(let o=0;o<r;++o)n[o].beforeDestroy(t,e)}function q(t,e,n,r){const o=t.global.renderCount;!function(t,e,n){const r=n?.ownerTagSupport,o=r||e;if(n){const e=n.memory.state;t.memory.state=[...e],t.global=n.global,function(t,e){const n=v.tagUse,r=n.length;for(let o=0;o<r;++o)n[o].beforeRedraw(t,e)}(t,n)}else{X(t,o);v.memory.providerConfig.ownerSupport=o}}(t,r,e);let s=(0,t.templater.wrapper)(t,n);return Y(t,r),s.global.renderCount>o+1?t.global.newest:(t.global.newest=s,s)}function Q(t,e,n,r){const o=q(t,e,n,r);!e||z(e,o)||function(t,e,n){const r=t.global,o=r.insertBefore;K(t),e.global={...r};const s=e.global;s.insertBefore=o,s.deleted=!1,delete s.oldest,delete s.newest,delete n.tagSupport}(e,o,n);const s=e?.ownerTagSupport;return o.ownerTagSupport=r||s,o}function tt(t,e,n,r){const o=r.tagSupport,s=o.global;e.global=s;const a=s.renderCount;!function(t){const e=t.global.providers.filter((t=>!D(t.instance,t.clone)));for(let n=e.length-1;n>=0;--n){const r=e[n];U(t.getAppTagSupport(),r),r.clone=M(r.instance)}}(t);const i=s.newest;if(a!==s.renderCount)return t.updateBy(i),i;const l=Q(e,i||o||s.oldest,r,n),c=s.oldest||t;return l.global.oldest=c,z(i,l)&&(r.tagSupport=l,c.updateBy(l)),l}function et(t,e){const n=t.global,r=t.templater;if(!r.wrapper){const e=t.ownerTagSupport;return++n.renderCount,et(e,!0)}const o=t.subject;let s,a=!1;if(e&&t&&(s=t.ownerTagSupport,s)){const e=r.props,n=t.propsConfig.latestCloned;a=!e.every(((t,e)=>D(t,n[e])))}const i=tt(t.global.oldest,t,s,o);if(s&&a){return et(s,!0),i}return i}v({beforeRender:(t,e)=>{I(t,e)},beforeRedraw:(t,e)=>{I(t,e.ownerTagSupport)},afterRender:t=>{const e=v.memory.providerConfig;t.global.providers=[...e.providers],e.providers.length=0}}),v.memory.tagClosed$=new g(void 0,(t=>{y()||t.next()}));let nt=t=>(t,e,n,r,o,s)=>{throw new T("Callback function was called immediately in sync and must instead be call async")};const rt=()=>nt,ot=nt;function st(t){const e=y();if(!e){throw new T("callback() was called outside of synchronous rendering. Use `callback = callbackMaker()` to create a callback that could be called out of sync with rendering")}const n=v.memory.stateConfig.array;return(...r)=>e.global.callbackMaker?it(e,t,n,...r):t(...r)}function at(t){const e=v.memory.stateConfig.array;nt=n=>(...r)=>t.global.callbackMaker?it(t,n,e,...r):n(...r)}function it(t,e,n,...r){const o=t.memory.state;R(o,n);const s=e(...r);return R(n,o),et(t,!1),s instanceof Promise&&s.finally((()=>{R(n,o),et(t,!1)})),s}function lt(t){v.memory.currentSupport=t}function ct(t){const e=v.memory.currentSupport;e.global.init||(e.global.init=t,t())}function ut(t){v.memory.destroyCurrentSupport=t}function pt(t){v.memory.destroyCurrentSupport.global.destroyCallback=t}function gt(t){v.memory.childrenCurrentSupport=t}function dt(){return v.memory.childrenCurrentSupport.templater.children}v({beforeRender:t=>at(t),beforeRedraw:t=>at(t),afterRender:t=>{t.global.callbackMaker=!0,nt=ot}}),v({beforeRender:t=>lt(t),beforeRedraw:t=>lt(t)}),v({beforeRender:t=>ut(t),beforeRedraw:t=>ut(t),beforeDestroy:t=>{const e=t.global.destroyCallback;e&&e()}}),v({beforeRender:t=>gt(t),beforeRedraw:t=>gt(t)});const ft="__tagvar",ht="--"+ft+"--",mt=new RegExp(ht,"g");class bt{strings;values;tagJsType=t.tag;memory={};templater;constructor(t,e){this.strings=t,this.values=e}key(t){return this.memory.arrayValue=t,this}children;html(t,...e){return this.children={strings:t,values:e},this}}class yt{props;tagJsType="templater";tagged;wrapper;madeChildIntoSubject;tag;children=new f([]);constructor(t){this.props=t}html(t,...e){const n=function(t,e){if(l(t))return t;if(c(t))return e.madeChildIntoSubject=!0,new f(t);const n=t;return n?(e.madeChildIntoSubject=!0,n.memory.arrayValue=0,new f([n])):(e.madeChildIntoSubject=!0,new f([]))}(new bt(t,e),this);return this.children=n,this}}const vt=[];function wt(t,e,n,r){const o=e.global,s=o.renderCount,a=t.bind(n)(...r);if(!(s===o.renderCount)||o.deleted)return a instanceof Promise?a.then((()=>"promise-no-data-ever")):"no-data-ever";const i=et(o.newest,!0);return o.newest=i,a instanceof Promise?a.then((()=>{if(o.deleted)return"promise-no-data-ever";const t=et(o.newest,!0);return o.newest=t,"promise-no-data-ever"})):"no-data-ever"}function Ct(t,e){e.parentNode.insertBefore(t,e.nextSibling)}function St(t){return["string","number","boolean"].includes(t)}function Tt(t,e){G(t),t.destroy({stagger:e.removed++});const n=t.global.insertBefore;n.parentNode.removeChild(n)}function At(t){const e=t.global.insertBefore,n=t.global,r=n.placeholder;r&&(Ct(e,r),delete n.placeholder)}function xt(e){if(null==e)return t.undefined;const n=typeof e;if(e instanceof Function)return t.function;if("object"===n){if(e instanceof Date)return t.date;if(St(n))return n;const r=e.tagJsType;if(r){if([t.tagComponent,t.templater,t.tag].includes(r))return r}if(c(e))return t.tagArray;if(l(e))return t.subject}return t.unknown}function jt(e){return e.map((e=>{const n=e;switch(xt(e)){case t.tagComponent:return M(e.props);case t.tag:case t.templater:return jt(n.values);case t.tagArray:return jt(n)}return M(e)}))}function Rt(t,e=[]){for(let n=t.length-1;n>=0;--n){const r=t[n];e.push(r),t.splice(n,1),Rt(r.childTags,e)}return e}function kt(t,e){const n=t;let r=n.templater;r||(r=new yt([]),r.tag=n,n.templater=r);const o=new f(r);return o.tagSupport=new Ce(r,e,o),o}function Bt(t){const e=document.createTextNode(""),n=t.parentNode;return n.insertBefore(e,t),n.removeChild(t),e}function Et(t,e,n){const r=t.split(".");if("style"===r[0]&&(n.style[r[1]]=e),"class"===r[0])if(r.shift(),e)for(let t=0;t<r.length;++t)n.classList.add(r[t]);else for(let t=0;t<r.length;++t)n.classList.remove(r[t])}const Vt=/^\s*{__tagvar/,Ft=/}\s*$/;function Pt(t){return t&&t.search(Vt)>=0&&t.search(Ft)>=0}function Nt(t,e,n,r,o,s){if(Pt(e))return function(t,e,n,r,o,s){const a=Ot(r,e);return _t(t,a,n,o,s)}(t,e,n,r,o,s);if(Pt(t)){let e;const a=Ot(r,t).subscribe((t=>{!function(t,e,n,r,o){if(e&&e!=t)if("string"==typeof e)n.removeAttribute(e);else if(e instanceof Object)for(const t in e)n.removeAttribute(t);if("string"==typeof t){if(!t.length)return;return void _t(t,"",n,r,o)}if(t instanceof Object)for(const e in t)_t(e,t[e],n,r,o)}(t,e,n,o,s),e=t}));return o.global.subscriptions.push(a),void n.removeAttribute(t)}return Mt(t)?Et(t,e,n):void 0}function Ot(t,e){return t[e.replace("{","").split("").reverse().join("").replace("}","").split("").reverse().join("")]}function _t(t,e,n,r,o){const s=Mt(t);if(e instanceof Function){const r=function(...t){return e(n,t)};n[t].action=r}if(l(e)){n.removeAttribute(t);const a=e=>{if(e instanceof Function){const t=r.templater.wrapper,n=t?.parentWrap,o=n?.oneRender;o||(e=function(t,e){if(t.isChildOverride)return t;const n=(n,r)=>wt(t,e,n,r);return n.tagFunction=t,n}(e,r))}return function(t,e,n,r,o){if(t instanceof Function){const r=function(...n){return t(e,n)};return r.tagFunction=t,void(e[n]=r)}if(r)return void Et(n,t,e);if(t)return void o(e,n,t);const s=[void 0,!1,null].includes(t);if(s)return void e.removeAttribute(n);o(e,n,t)}(e,n,t,s,o)},i=e.subscribe(a);r.global.subscriptions.push(i)}else o(n,t,e)}function Mt(t){return t.search(/^(class|style)(\.)/)>=0}function Wt(t,e,n){t.setAttribute(e,n)}function Dt(t,e,n){t[e]=n}function $t(t,e,n){const r=t.getAttributeNames();let o=Wt;for(let s=0;s<r.length;++s){const a=r[s];"INPUT"===t.nodeName&&"value"===a&&(o=Dt);Nt(a,t.getAttribute(a),t,e,n,o),o=Wt}}const Jt=/(?:<[^>]*?(?:(?:\s+\w+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+)))*\s*)\/?>)|({__tagvar[^}]+})/g;function It(t,e,n,{counts:r}){const o=e,s=o.tagSupport,a=s?.global.oldest||void 0;if(a&&a)return function(t,e,n){if(e instanceof Function){const t=e(n);return n.updateBy(t),void(e.tagSupport=t)}return n.updateBy(t),void(e.tagSupport=t)}(t,o,a);t.buildBeforeElement(n,{counts:r})}function Ut(t,e,n,r,o){if(!0!==t.tagged){const e=t.wrapper.parentWrap.original;let n=e.name||e.constructor?.name;"Function"===n&&(n=void 0);const r=n||e.toString().substring(0,120);throw new Error(`Not a tag component. Wrap your function with tag(). Example tag(props => html\`\`) on component:\n\n${r}\n\n`)}const s=new Ce(t,r,e);let a=e.tagSupport;(s.global=a?.global||s.global).insertBefore=n;v.memory.providerConfig.ownerSupport=r;if(!a){a=function(t,e,n){const r=n.clones.map((t=>t));if((e=Q(e,t.tagSupport,t,n)).global.newest=e,n.clones.length>r.length){const t=n.clones.filter((t=>!r.find((e=>e===t))));e.clones.push(...t)}return n.childTags.push(e),e}(e,a||s,r)}return It(a,e,n,o),a}function Lt(t,e,n,r){let o=r.tagSupport;o||(o=Kt(t,n,r)),r.tagSupport=o,o.ownerTagSupport=n,o.buildBeforeElement(e,{counts:{added:0,removed:0}})}function zt(t){const e=Ht();return e.tag=t,t.templater=e,e}function Ht(){const t={children:new f([]),props:[],isTag:!0,tagJsType:"templater",tagged:!1,madeChildIntoSubject:!1,html:()=>t};return t}function Kt(t,e,n){const r=new Ce(t,e,n);return Gt(r,e,n),e.childTags.push(r),r}function Gt(t,e,n){t.global.oldest=t,t.global.newest=t,t.ownerTagSupport=e,n.tagSupport=t}function Xt(t,e,n,r,o){const s=r.clones;let a=t.lastArray=t.lastArray||[];t.placeholder||function(t,e){if("TEMPLATE"!==t.nodeName)return void(e.placeholder=t);const n=e.placeholder=document.createTextNode(""),r=t.parentNode;r.insertBefore(n,t),r.removeChild(t)}(n,t);const l=t.placeholder;let c=0;a=t.lastArray=t.lastArray.filter(((t,n)=>{const r=e.length-1<n-c,s=e[n-c],i=t.tagSupport.templater.tag,l=s?.memory.arrayValue,u=i.memory.arrayValue,p=r||!function(t,e){if(t===e)return!0;if(t instanceof Array&&e instanceof Array&&t.length==e.length)return t.every(((t,n)=>t==e[n]));return!1}(l,u);if(p){const t=a[n];return Tt(t.tagSupport,o.counts),t.deleted=!0,++c,++o.counts.removed,!1}return!0}));const u=e.length;for(let t=0;t<u;++t){const n=e[t],s=a[t],c=s?.tagSupport,u=n;i(u)&&!u.templater&&zt(u);const p=new Ce(u.templater,r,new f(void 0));if(c){Gt(p,r,c.subject);const t=c.global;p.global=t,t.newest=p}if(!("arrayValue"in u.memory)){const t={template:p.getTemplate().string,array:e},n="Use html`...`.key(item) instead of html`...` to template an Array";console.error(n,t);throw new C(n,t)}if(a.length>t){s.tagSupport.global.oldest.updateBy(p)}else Yt(l,p,t,o,a),r.childTags.push(p)}return s}function Yt(t,e,n,r,o){const s={tagSupport:e,index:n};o.push(s);const a={added:r.counts.added+n,removed:r.counts.removed},i=document.createDocumentFragment(),l=document.createElement("template");i.appendChild(l),e.buildBeforeElement(l,{counts:a});t.parentNode.insertBefore(i,t)}function Zt(t,e){const n=e.parentNode,r=document.createTextNode(t);return n.insertBefore(r,e),n.removeChild(e),r}function qt(t){return[void 0,!1,null].includes(t)?"":t}function Qt(t,e,n){e.insertBefore=n;const r=e.clone||n;if(e.lastValue===t&&"lastValue"in e)return;e.lastValue=t;const o=qt(t),s=e.clone;if(s)return void(s.textContent=o);const a=Zt(o,r);e.clone=a}function te(t,e,n){const r=new yt([]);r.tagJsType="oneRender";const o=Kt(r,n,e);const s=()=>(r.tag=t(),o);return r.wrapper=s,s.parentWrap=s,s.oneRender=!0,s.parentWrap.original=t,o}function ee(e,n,r,o,s){switch(xt(e)){case t.templater:return void Lt(e,r,o,n);case t.tag:const a=e;let i=a.templater;return i||(i=zt(a)),void Lt(i,r,o,n);case t.tagArray:return Xt(n,e,r,o,s);case t.tagComponent:return void Ut(e,n,r,o,s);case t.function:const l=e;if(l.oneRender){const t=te(l,n,o);return q(t,t,n,o),void Lt(t.templater,r,o,n)}}!function(t,e,n){e.lastValue=t;const r=Zt(qt(t),n);e.clone=r}(e,n,r)}const ne=new RegExp('\\s*<template interpolate end id="__tagvar(\\d{1,4})"([^>]*)></template>(\\s*)');function re(t,e,n){if(!(t instanceof Function))return!!D(t,e)&&4;if(!(e instanceof Function))return!1;const r=e?.original;r&&(e=r);t.original&&(t=t.original);return t.toString()===e.toString()?(n(),3):(n(),5)}function oe(t,e,n){const r=function(t,e){let n=t,r=e;if("object"==typeof t){if(!e)return 3;if(n=[...t],r=[...e||[]],!n.every(((t,e)=>{let o=r[e];if(t&&"object"==typeof t){const e={...t},n={...o||{}},r=Object.entries(e).every((([t,r])=>re(r,n[t],(()=>{delete e[t],delete n[t]}))));return r}return re(t,o,(()=>{n.splice(e,1),r.splice(e,1)}))})))return 6}return!1}(n.props,t.propsConfig.latestCloned);if(r)return r;const o=function(t,e){const n=t.propsConfig.lastClonedKidValues,r=e.propsConfig.lastClonedKidValues;return!n.every(((t,e)=>{const n=r[e];return t.every(((t,e)=>t===n[e]))}))&&9}(t,e);return o}function se(t,e){const n=function(t,e){if("object"!=typeof t||!e)return t;for(const n in t){const r=t[n];if(!(r instanceof Function))continue;t[n].toCall||(t[n]=(...e)=>t[n].toCall(...e),t[n].toCall=(...t)=>ae(r,t,e),t[n].original=r)}return t}(o(t)?0:t,e);return n}function ae(t,e,n){const r=y(),o=t(...e),s=()=>{const t=n.global.newest;if(r){const e=t.memory.state.every((t=>{const e=t.lastValue,n=t.get();return D(M(e),n)}));if(e)return o}const e=et(t,!0);return t.global.newest=e,o};return r?(v.memory.tagClosed$.toCallback(s),o):s()}function ie(t,e,n,r){let o=n.tagSupport?.global.newest,s=o.global.oldest;const a=o.templater.wrapper,i=e.templater.wrapper;let l=!1;if(a&&i){l=a.parentWrap.original===i.parentWrap.original}const c=e.templater;if(!l){return K(o.global.oldest),Ut(c,n,r,t,{counts:{added:0,removed:0}})}if(!oe(o,e,c)){return function(t,e,n){t=t.global.newest||t;const r=t.propsConfig,o=r.latestCloned,s=e.global.newest;for(let t=n.length-1;t>=0;--t){const e=n[t];if("object"!=typeof e)return;const r=o[t];if("object"!=typeof r)return;for(const t in e){if(!(e[t]instanceof Function))continue;const n=e[t];n instanceof Function&&n.toCall||(r[t].toCall=(...t)=>ae(n,t,s))}}}(o,t,c.props),o}const u=o.global.newest,p=et(e,!1);o=n.tagSupport;const g=p.global.oldest;if(!!!g)return le(p,r,o,n);if(g&&c.children._value.length){g.templater.children.next(c.children._value)}return l&&z(u,p)?(n.tagSupport=p,s.updateBy(p),p):(l&&o&&(K(o),p.global.context={}),s=void 0,s||(o=p,le(p,o.global.insertBefore,o,n)),o.global.newest=p,p)}function le(t,e,n,r){return t.buildBeforeElement(e,{counts:{added:0,removed:0}}),t.global.oldest=t,t.global.newest=t,n.global.oldest=t,n.global.newest=t,r.tagSupport=t,t}function ce(e,n,r,a){const l=e,c=xt(n);if(function(e,n,r,s){const a=e,i="lastValue"in a,l=a.lastValue;if(i&&l!==n){const t=typeof n;return(!St(t)||typeof l!==t)&&!(n instanceof Function&&l instanceof Function)&&(function(t,e){const n=e.clone,r=n.parentNode;r.insertBefore(t,n),r.removeChild(n),delete e.clone,delete e.lastValue}(r,a),"changed-simple-value")}const c=e,u=c.lastArray;if(u&&s!==t.tagArray){const t=c.placeholder;delete c.lastArray,delete c.placeholder,Ct(r,t);for(let t=u.length-1;t>=0;--t){const{tagSupport:e}=u[t];Tt(e,{added:0,removed:0})}return"array"}const p=e.tagSupport;if(p){const r=o(n);return o(e._value)&&r?!z(n,p)&&(At(p),K(p),2):s!==t.tagComponent&&(!n||!n.oneRender)&&(At(p),K(p),"different-tag")}}(e,n,a,c),c===t.tagComponent)return function(t,e,n,r){if(!e.tagSupport)return Ut(t,e,n,r,{counts:{added:0,removed:0}}),e;const o=new Ce(t,r,e),s=e.tagSupport,a=s.global.newest;if(!a)return At(s),Ut(t,e,n,r,{counts:{added:0,removed:0}}),e;{const t=a.memory.state;o.memory.state.length=0,o.memory.state.push(...t)}return o.global=s.global,e.tagSupport=o,ie(r,o,e,n),e}(n,l,a,r);if(l.tagSupport)return c===t.function||function(t,e,n){const r=t.tagSupport;let o=e;const a=i(e);if(a){const t=e;o=t.templater,o||(o=new yt([]),o.tag=t,t.templater=o)}const l=new Ce(o,n,t);a&&(l.global=r.global);const c=e&&z(r,l);s(e)&&Gt(l,n,t);if(c)return void r.updateBy(l);if(c){return Lt(o,r.global.insertBefore,n,t)}Qt(e,t,t.insertBefore)}(e,n,r),l;switch(c){case t.tagArray:return Xt(e,n,a,r,{counts:{added:0,removed:0}}),e;case t.templater:return Lt(n,a,r,l),l;case t.tag:const o=n;let s=o.templater;return s||(s=Ht(),o.templater=s,s.tag=o),Lt(s,a,r,l),l;case t.subject:return n;case t.function:return e.clone||(e.clone=Bt(a)),e}return Qt(n,e,a),l}function ue(t,e,n,r,o){const s=[];if(!t.hasAttribute("end"))return{clones:s};const i=t.getAttribute("id");if(i?.substring(0,ft.length)!==ft)return{clones:s};const l=e[i];return a(l._value)||c(l.value)?{clones:s,tagComponent:{variableName:i,ownerSupport:n,subject:l,insertBefore:t}}:(pe(t,l,n,r),{clones:s})}function pe(t,e,n,r){let o=!1;const s=s=>{if(o)return void ce(e,s,n,t);ee(s,e,t,n,{counts:{...r}}),o=!0};let a=s;const i=e.subscribe((t=>a(t)));if(t.parentNode){const n=e.clone=Bt(t);a=r=>{const o=n.parentNode;o.insertBefore(t,n),o.removeChild(n),delete e.clone,a=s,s(r)}}n.global.subscriptions.push(i)}function ge(t,e,n,r){if(!t.getAttribute)return;"TEXTAREA"===t.nodeName&&function(t,e,n){const r=t.value;if(r.search(ne)>=0){const o=r.match(/__tagvar(\d{1,4})/),s="{"+(o?o[0]:"")+"}";t.value="",t.setAttribute("text-var-value",s);const a=(e,n,r)=>t.value=r;Nt("text-var-value",s,t,e,n,a)}}(t,n,r);let o=e.counts.added;if(o=function(t,e){const n=t.oninit;if(!n)return e.added;const r=n.tagFunction;if(!r)return e.added;const o=r.tagFunction;return o?(o({target:t,stagger:e.added}),++e.added):e.added}(t,e.counts)-o,t.children){const o=t.children;for(let t=o.length-1;t>=0;--t){return ge(o[t],{...e,counts:e.counts},n,r)}}}function de(t,e,n,r){const o=n.counts,s=[],a=[];for(let i=r.length-1;i>=0;--i){const l=r[i],{clones:c,tagComponent:u}=ue(l,t,e,o);if(s.push(...c),u)a.push(u);else if(l.children)for(let r=l.children.length-1;r>=0;--r){const i=l.children[r];if(fe(i)){const{tagComponent:n}=ue(i,t,e,o);n&&a.push(n)}const{clones:c,tagComponents:u}=de(t,e,n,i.children);s.push(...c),a.push(...u)}}return{clones:s,tagComponents:a}}function fe(t){return"TEMPLATE"===t.tagName&&void 0!==t.getAttribute("interpolate")&&void 0!==t.getAttribute("end")}function he(t,e,n,r,o){const s=[],a=[],i=n.interpolation,l=t.children[0],c=l.content.children;if(i.keys.length){const{clones:t,tagComponents:n}=de(e,r,o,c);s.push(...t),a.push(...n)}return $t(l,e,r),me(c,e,r),{clones:s,tagComponents:a}}function me(t,e,n){for(let r=t.length-1;r>=0;--r){const o=t[r];$t(o,e,n),o.children&&me(o.children,e,n)}}function be(t){const e=function(t){const e=[];return{string:t.replace(Jt,((t,n)=>{if(t.startsWith("<"))return t;const r=n.substring(1,n.length-1);return e.push(r),`<template interpolate end id="${r}"></template>`})),keys:e}}(t);return e.string=e.string.replace(mt,ft),e}function ye(t,e,n,r,o){const s=function(t,e){const n=[];let r=t.children[0].content.firstChild;const o=document.createDocumentFragment();for(;r;){const t=r.nextSibling;n.push(r),o.appendChild(r),r=t}e.parentNode&&e.parentNode.insertBefore(o,e);return n}(t,e);if(!s.length)return s;for(let t=s.length-1;t>=0;--t){const e=s[t];ge(e,o,r,n),n.clones.push(e)}return s}const ve=new RegExp(ft,"g");class we{templater;subject;isApp=!0;appElement;strings;values;propsConfig;memory={state:[]};clones=[];global={context:{},providers:[],renderCount:0,deleted:!1,subscriptions:[]};hasLiveElements=!1;childTags=[];constructor(t,e){this.templater=t,this.subject=e;const n=t.children.value,r=t.props,o=r.map((t=>M(t)));this.propsConfig={latest:r,latestCloned:o,lastClonedKidValues:n.map((t=>jt(t.values)))}}buildBeforeElement(t,e={counts:{added:0,removed:0}}){const n=this.subject,r=this.global;r.insertBefore=t,r.placeholder||function(t){const e=t.insertBefore;t.placeholder=Bt(e)}(r);const o=r.placeholder;r.oldest=this,r.newest=this,n.tagSupport=this,this.hasLiveElements=!0;const s=this.update(),a=this.getTemplate(),i=document.createDocumentFragment(),l=document.createElement("template");l.innerHTML=a.string,i.appendChild(l);const{tagComponents:c}=he(i,s,a,this,{counts:e.counts});ye(i,o,this,s,e);const u=c.length;for(let t=0;t<u;++t){const n=c[t];pe(n.insertBefore,n.subject,n.ownerSupport,e.counts),ye(i,n.insertBefore,n.ownerSupport,s,e)}}getTemplate(){const t=this.templater.tag,e=this.strings||t.strings,n=this.values||t.values,r=be(e.map(((t,e)=>(t.replace(ve,ht)+(n.length>e?`{${ft}${e}}`:"")).replace(/>\s*/g,">").replace(/\s*</g,"<"))).join(""));return{interpolation:r,string:r.string,strings:e,values:n,context:this.global.context||{}}}update(){return this.updateContext(this.global.context)}updateContext(e){const n=this.templater.tag,r=this.strings||n.strings,o=this.values||n.values;return r.map(((n,r)=>{if(!(o.length>r))return;const s=ft+r,i=o[r];if(s in e)return function(t,e,n){const r=t[e],o=r.tagSupport;if(o&&n&&a(n)){let t=new Ce(n,o.ownerTagSupport,r);a(o)&&(console.warn("👉 deprecated code is being used #shareTemplaterGlobal 👈"),function(t,e){const n=t.templater.wrapper.parentWrap.original,r=e.templater.wrapper,o=r?.parentWrap.original;if(n===o){e.global=t.global;const n=t.global.newest;if(n){const t=n.memory.state;e.memory.state.length=0,e.memory.state.push(...t)}}}(o,t))}l(n)||r.next(n)}(e,s,i);e[s]=function(e,n){switch(xt(e)){case t.tagComponent:return new f(e);case t.templater:return kt(e.tag,n);case t.tag:return kt(e,n);case t.subject:return e}return new f(e)}(i,this)})),e}updateBy(t){const e=t.templater.tag;this.updateConfig(e.strings,e.values)}updateConfig(t,e){this.strings=t,this.updateValues(e)}updateValues(t){return this.values=t,this.updateContext(this.global.context)}}class Ce extends we{templater;ownerTagSupport;subject;version;isApp=!1;constructor(t,e,n,r=0){super(t,n),this.templater=t,this.ownerTagSupport=e,this.subject=n,this.version=r}destroy(t={stagger:0,byParent:!1}){const e=!t.byParent,n=this.global,r=this.subject,o=t.byParent?[]:Rt(this.childTags);e&&a(this.templater)&&Z(this,this),this.destroySubscriptions();for(let t=o.length-1;t>=0;--t){const e=o[t],n=e.global;delete n.newest,n.deleted=!0,a(e.templater)&&Z(e,e)}if("TEMPLATE"===n.insertBefore.nodeName){n.placeholder&&!("arrayValue"in this.memory)&&(t.byParent||At(this))}let s;if(this.ownerTagSupport&&(this.ownerTagSupport.childTags=this.ownerTagSupport.childTags.filter((t=>t!==this))),e){const{stagger:e,promise:n}=this.destroyClones(t);t.stagger=e,n&&(s=n)}else this.destroyClones();return delete n.placeholder,n.context={},delete n.oldest,delete n.newest,n.deleted=!0,this.childTags.length=0,this.hasLiveElements=!1,delete r.tagSupport,s=s?s.then((async()=>{const t=o.map((t=>t.destroy({stagger:0,byParent:!0})));return Promise.all(t)})):Promise.all(o.map((t=>t.destroy({stagger:0,byParent:!0})))),s.then((()=>t.stagger))}destroySubscriptions(){const t=this.global.subscriptions;for(let e=t.length-1;e>=0;--e)t[e].unsubscribe();t.length=0}destroyClones({stagger:t}={stagger:0}){const e=[...this.clones];this.clones.length=0;const n=e.map((e=>this.checkCloneRemoval(e,t))).filter((t=>t)),r=this.global.context;for(const t in r){const e=r[t].clone;e?.parentNode&&e.parentNode.removeChild(e)}return n.length?{promise:Promise.all(n),stagger:t}:{stagger:t}}checkCloneRemoval(t,e){let n;const r=t;r.ondestroy&&(n=function(t,e){const n=t.ondestroy;if(!n)return;const r=n.tagFunction;if(!r)return;const o=r.tagFunction;if(!o)return;return o({target:t,stagger:e})}(r,e));const o=()=>{const e=t.parentNode;e&&e.removeChild(t);const n=this.ownerTagSupport;n&&(n.clones=n.clones.filter((e=>e!==t)))};return n instanceof Promise?n.then(o):(o(),n)}getAppTagSupport(){let t=this;for(;t.ownerTagSupport;)t=t.ownerTagSupport;return t}}let Se=0;function Te(e){const n=function(...e){const r=new yt(e);r.tagJsType=t.tagComponent;const o=function(t,e){return function(n,r){const o=n.global;++o.renderCount;const s=t.children,a=o.oldest?.templater.children.lastArray;a&&(s.lastArray=a);const i=e.original;let l=t.props,c=l.map((t=>se(t,n.ownerTagSupport)));const u=l.map((t=>M(t)));let p=i(...c);p instanceof Function&&(p=p()),p.templater=t,t.tag=p;const g=new Ce(t,n.ownerTagSupport,r,o.renderCount);if(g.global=o,g.propsConfig={latest:l,latestCloned:u,lastClonedKidValues:g.propsConfig.lastClonedKidValues},g.memory=n.memory,t.madeChildIntoSubject){const t=s.value;for(let e=t.length-1;e>=0;--e){const n=t[e],r=n.values;for(let t=r.length-1;t>=0;--t){const e=r[t];if(!(e instanceof Function))continue;const o=n.values[t];o.isChildOverride||(n.values[t]=function(...t){const n=g.ownerTagSupport;return wt(e,n,this,t)},o.isChildOverride=!0)}}}return g}}(r,n);return o.parentWrap||(o.parentWrap=n),r.tagged=!0,r.wrapper=o,r};n.original=e,n.compareTo=e.toString();const r=e;return n.isTag=!0,n.original=r,r.tags=vt,r.setUse=v,r.tagIndex=Se++,vt.push(n),n}function Ae(t,...e){return new bt(t,e)}Te.oneRender=(...t)=>{throw new Error("Do not call function tag.oneRender but instead set it as: `(props) => tag.oneRender = (state) => html`` `")},Te.route=t=>{throw new Error("Do not call function tag.route but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")},Te.app=t=>{throw new Error("Do not call function tag.route but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")},Object.defineProperty(Te,"oneRender",{set(t){t.oneRender=!0}});const xe=[];function je(t,e,n){const r=xe.findIndex((t=>t.element===e));r>=0&&(xe[r].tagSupport.destroy(),xe.splice(r,1),console.warn("Found and destroyed app element already rendered to element",{element:e}));const o=function(t){let e={};const n=new f(e);e=new we(t,n),n.next(t),n.tagSupport=e,X(e,void 0);const r=t.wrapper,o=r(e,n);return Y(e,o),o}(t(n));o.appElement=e,o.isApp=!0,o.global.isApp=!0;const s=document.createElement("template");s.setAttribute("id","app-tag-"+xe.length),s.setAttribute("app-tag-detail",xe.length.toString());const a=document.createDocumentFragment();return a.appendChild(s),e.destroy=async()=>{await o.destroy();const t=o.global.insertBefore;t.parentNode.removeChild(t)},o.buildBeforeElement(s),o.global.oldest=o,o.global.newest=o,e.setUse=t.original.setUse,xe.push({element:e,tagSupport:o}),e.appendChild(a),{tagSupport:o,tags:t.original.tags}}const Re={tagElement:je,renderWithSupport:Q,renderTagSupport:et,renderTagOnly:q};var ke=n.W9,Be=n.t3,Ee=n.Y2,Ve=n.ei,Fe=n.B7,Pe=n.XF,Ne=n.vw,Oe=n.PC,_e=n.uX,Me=n.O9,We=n.Ot,De=n.tD,$e=n.E2,Je=n.OH,Ie=n.Y_,Ue=n.zV,Le=n.WJ,ze=n.AZ,He=n.cF,Ke=n.qy,Ge=n.u2,Xe=n.zl,Ye=n.O5,Ze=n.Ze,qe=n._4,Qe=n.iO,tn=n.dk,en=n.mn,nn=n.NM,rn=n.z,on=n.bc,sn=n.sA,an=n.MG,ln=n.t2,cn=n.r5,un=n.pG,pn=n.yN,gn=n.QB,dn=n.vJ,fn=n.AI,hn=n.wk,mn=n.uz,bn=n.Tc,yn=n.Hf,vn=n._A,wn=n.NU,Cn=n.wB,Sn=n.id,Tn=n.MC,An=n.zC;export{ke as ArrayNoKeyError,Be as BaseTagSupport,Ee as RouteQuery,Ve as StateMismatchError,Fe as Subject,Pe as SyncCallbackError,Ne as Tag,Oe as TagError,_e as TagSupport,Me as TemplaterResult,We as ValueSubject,De as ValueTypes,$e as callback,Je as callbackMaker,Ie as children,Ue as combineLatest,Le as defineValueOn,ze as getValueType,He as hmr,Ke as html,Ge as interpolateElement,Xe as interpolateString,Ye as isLikeValueSets,Ze as isStaticTag,qe as isSubjectInstance,Qe as isTagArray,tn as isTagClass,en as isTagComponent,nn as isTagTemplater,rn as letProp,on as letState,sn as onDestroy,an as onInit,ln as oneRenderToTagSupport,cn as providers,un as renderTagOnly,pn as renderTagSupport,gn as renderWithSupport,dn as runBeforeRender,fn as setUse,hn as state,mn as subject,bn as tag,yn as tagElement,vn as tags,wn as variablePrefix,Cn as watch,Sn as willCallback,Tn as willPromise,An as willSubscribe};
//# sourceMappingURL=bundle.js.map