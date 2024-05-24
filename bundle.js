var t,e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},n={};function r(t,e){const n=t.templater,r=e.templater,s=n?.tag||t,a=r.tag,i=s.strings,l=e.strings||a.strings;if(i.length!==l.length)return!1;if(!i.every(((t,e)=>l[e]===t)))return!1;return o(t.values||s.values,e.values||a.values)}function o(t,e){if(!(t.length===e.length))return!1;return!!e.every(((e,n)=>{const r=t[n];if(e instanceof Function&&r instanceof Function){return!!(e.toString()===r.toString())}return!0}))}function s(t){t.global.oldest.destroy(),a(t),t.global.context={}}function a(t){delete t.global.oldest,delete t.global.newest}function i(t,e){e.parentNode.insertBefore(t,e.nextSibling)}function l(t){return["string","number","boolean"].includes(t)}function c(t,e){a(t),t.destroy({stagger:e.removed++});const n=t.global.insertBefore;n.parentNode.removeChild(n)}function u(t){const e=t.global.insertBefore,n=t.global,r=n.placeholder;r&&(i(e,r),delete n.placeholder)}function p(e){if(null==e)return t.undefined;const n=typeof e;if(e instanceof Function)return t.function;if("object"===n){if(e instanceof Date)return t.date;if(l(n))return n;const r=e.tagJsType;if(r){if([t.tagComponent,t.templater,t.tag].includes(r))return r}if(b(e))return t.tagArray;if(m(e))return t.subject}return t.unknown}function g(e){return[t.tag,t.templater].includes(e?.tagJsType)}function d(e){return e?.tagJsType===t.templater}function f(e){return e?.tagJsType===t.tagComponent}function h(e){return e?.tagJsType===t.tag}function m(t){return!(!0!==t?.isSubject&&!t?.subscribe)}function b(e){return e instanceof Array&&e.every((e=>[t.tag,t.templater,t.tag,t.tagComponent].includes(e?.tagJsType)))}function y(t){const e=new w;return e.subscribeWith=e=>{const n=[],r=[],o=(o,s)=>{n[s]=!0,r[s]=o;if(n.length===t.length){for(let t=n.length-1;t>=0;--t)if(!n[t])return;e(r,a)}},s=[...t],a=s.shift().subscribe((t=>o(t,0))),i=s.map(((t,e)=>t.subscribe((t=>o(t,e+1)))));return a.subscriptions=i,a},e}function v(t,e,n){const r=[...e],o=r.shift(),s=t=>{if(r.length)return v(t,r,n);n(t)};let a=s;const i=o(t,{setHandler:t=>a=t,next:s});a(i)}e.d(n,{W9:()=>x,t3:()=>me,ei:()=>B,B7:()=>w,XF:()=>E,vw:()=>wt,PC:()=>R,uX:()=>be,Ot:()=>S,E2:()=>lt,OH:()=>at,Y_:()=>mt,zV:()=>y,cF:()=>je,qy:()=>Ce,u2:()=>pe,zl:()=>de,O5:()=>o,Ze:()=>g,_4:()=>m,iO:()=>b,dk:()=>h,mn:()=>f,NM:()=>d,Gy:()=>Se,z:()=>U,bc:()=>J,sA:()=>ft,MG:()=>gt,r5:()=>G,yN:()=>ot,QB:()=>nt,vJ:()=>Y,AI:()=>k,wk:()=>O,uz:()=>$,Tc:()=>we,Hf:()=>Ae,_A:()=>ye,wB:()=>_,id:()=>C,MC:()=>T,zC:()=>A}),function(t){t.unknown="unknown",t.tag="tag",t.templater="templater",t.tagComponent="tag-component",t.tagArray="tag-array",t.subject="subject",t.date="date",t.string="string",t.boolean="boolean",t.function="function",t[void 0]="undefined"}(t||(t={}));class w{onSubscription;methods=[];isSubject=!0;subscribers=[];subscribeWith;_value;constructor(t,e){this.onSubscription=e,this._value=t}get value(){return this._value}set value(t){this._value=t,this.set(t)}subscribe(t){const e=function(t,e){const n=w.globalSubCount$;w.globalSubCount$.set(n.value+1);const r=()=>{r.unsubscribe()};return r.callback=e,r.subscriptions=[],r.unsubscribe=()=>{!function(t,e){const n=t.findIndex((t=>t.callback===e));-1!==n&&t.splice(n,1)}(t.subscribers,e),w.globalSubCount$.set(n.value-1),r.unsubscribe=()=>r;const o=r.subscriptions;for(let t=o.length-1;t>=0;--t)o[t].unsubscribe();return r},r.add=t=>(r.subscriptions.push(t),r),r.next=t=>{e(t,r)},r}(this,t),n=this.subscribeWith;if(n){if(this.methods.length){const n=t;t=t=>{v(t,this.methods,(t=>n(t,e)))}}return n(t)}this.subscribers.push(e);const r=w.globalSubCount$.value;return w.globalSubCount$.set(r+1),this.onSubscription&&this.onSubscription(e),e}set(t){this._value=t;const e=[...this.subscribers],n=e.length;for(let r=0;r<n;++r){const n=e[r];n.callback(t,n)}}next=this.set;toPromise(){return new Promise((t=>{this.subscribe(((e,n)=>{n.unsubscribe(),t(e)}))}))}toCallback(t){return this.subscribe(((e,n)=>{n.unsubscribe(),t(e)})),this}pipe(...t){const e=new w(this._value);return e.methods=t,e.subscribeWith=t=>this.subscribe(t),e.set=t=>this.set(t),e.next=e.set,e}static all(t){return y(t.map((t=>{if(m(t))return t;return new w(t,(e=>(e.next(t),e)))})))}static globalSubCount$=new w(0)}class S extends w{constructor(t){super(t)}get value(){return this._value}set value(t){this._value=t,this.set(t)}subscribe(t){const e=super.subscribe(t);return t(this._value,e),e}}function C(t){return(e,n)=>{n.setHandler((()=>{})),t(e,n.next)}}function T(t){return(e,n)=>{n.setHandler((()=>{}));t(e).then((t=>n.next(t)))}}const A=t=>(e,n)=>{n.setHandler((()=>{}));const r=t(e).subscribe((t=>{r.unsubscribe(),n.next(t)}))};function j(){return k.memory.stateConfig.tagSupport}function k(t){const e={beforeRender:t.beforeRender||(()=>{}),beforeRedraw:t.beforeRedraw||(()=>{}),afterRender:t.afterRender||(()=>{}),beforeDestroy:t.beforeDestroy||(()=>{})};k.tagUse.push(e)}k.tagUse=[],k.memory={};class R extends Error{details;constructor(t,e,n={}){super(t),this.name=R.name,this.details={...n,errorCode:e}}}class x extends R{constructor(t,e){super(t,"array-no-key-error",e),this.name=x.name}}class B extends R{constructor(t,e){super(t,"state-mismatch-error",e),this.name=B.name}}class E extends R{constructor(t,e){super(t,"sync-callback-error",e),this.name=E.name}}k.memory.stateConfig={array:[]};const F=t=>function(t){const e=t.memory,n=e.state,r=k.memory.stateConfig;r.rearray=[];const o=n?.length;if(o){for(let t=0;t<o;++t)V(n[t]);r.rearray.push(...n)}r.tagSupport=t}(t);function V(t){const e=t.callback;if(!e)return t.defaultValue;const[n,r]=function(t){const e=t(N),[n]=e,[r]=t(n);return[n,r]}(e);if(r!==N){const o='State property not used correctly. Second item in array is not setting value as expected.\n\nFor "let" state use `let name = state(default)(x => [name, name = x])`\n\nFor "const" state use `const name = state(default)()`\n\nProblem state:\n'+(e?e.toString():JSON.stringify(t))+"\n";throw console.error(o,{state:t,callback:e,value:n,checkValue:r}),new Error(o)}return n}k({beforeRender:F,beforeRedraw:F,afterRender:t=>{const e=t.memory,n=k.memory.stateConfig,r=n.rearray;if(r.length&&r.length!==n.array.length){const e=`States lengths have changed ${r.length} !== ${n.array.length}. State tracking requires the same amount of function calls every render. Typically this errors is thrown when a state like function call occurs only for certain conditions or when a function is intended to be wrapped with a tag() call`,o=t.templater?.wrapper,s={oldStates:n.array,newStates:n.rearray,tagFunction:o.parentWrap.original},a=new B(e,s);throw console.warn(e,s),a}delete n.rearray,delete n.tagSupport,e.state.length=0,e.state.push(...n.array);const o=e.state;for(let t=o.length-1;t>=0;--t){const e=o[t];e.lastValue=V(e)}n.array=[]}});class N{}function P(t,e){for(let n=t.length-1;n>=0;--n){const r=t[n].get(),o=e[n].callback;o&&o(r),e[n].lastValue=r}}function O(t){const e=k.memory.stateConfig;let n;const r=e.rearray[e.array.length];if(r){let t=V(r);n=e=>[t,t=e];const o={get:()=>V(o),callback:n,lastValue:t,defaultValue:r.defaultValue};return e.array.push(o),t}let o=(t instanceof Function?t:()=>t)();if(o instanceof Function){const t=e.array,n=e.tagSupport,r=o;o=(...e)=>{const o=n.global.newest.memory.state;P(o,t);const s=r(...e);return P(t,o),s},o.original=r}n=t=>[o,o=t];const s={get:()=>V(s),callback:n,lastValue:o,defaultValue:o};return e.array.push(s),o}const _=(t,e)=>W(t,e),M=t=>t;const W=(t,e,{init:n,before:r=(()=>!0),final:o=M}={})=>{let s=O({pastResult:void 0,values:void 0});const a=s.values;if(void 0===a){if(!r(t))return s.values=t,s.pastResult;const i=(n||e)(t,a);return s.pastResult=o(i),s.values=t,s.pastResult}if(t.every(((t,e)=>t===a[e])))return s.pastResult;if(!r(t))return s.values=t,s.pastResult;const i=e(t,a);return s.pastResult=o(i),a.length=0,a.push(...t),s.pastResult};function D(t,e){return Object.defineProperty(e,"noInit",{get(){const e=t();return e.setup.init=()=>{},e}}),Object.defineProperty(e,"asSubject",{get(){const e=t(),n=(t,n)=>{const r=O((()=>j().memory.state)),o=O((()=>new S(void 0)));return W(t,((t,e)=>{const s=n(t,e);if(r.length){P(k.memory.stateConfig.array,r)}o.set(s)}),e.setup),o};return n.setup=e.setup,D((()=>n),n),n}}),Object.defineProperty(e,"truthy",{get(){const e=t();return e.setup.before=t=>t.every((t=>t)),e}}),e}function $(t,e){const n=O((()=>k.memory.stateConfig.array)),r=j();return O((()=>new w(t,e).pipe((t=>(P(r.memory.state,n),t)))))}function J(t){const e=k.memory.stateConfig;let n;const r=e.rearray[e.array.length];if(r){let t=V(r);n=e=>[t,t=e];const o={get:()=>V(o),callback:n,lastValue:t,defaultValue:r.defaultValue};return e.array.push(o),I(t,o)}let o=(t instanceof Function?t:()=>t)();n=t=>[o,o=t];const s={get:()=>V(s),callback:n,lastValue:o,defaultValue:o};return e.array.push(s),I(o,s)}function I(t,e){return n=>(e.callback=n||(e=>[t,t=e]),t)}function U(t){return e=>{let n=J(t)(e);return _([t],(()=>e(n=t))),e(n),n}}function L(t){return z(t,new WeakMap)}function z(t,e){if(null===t||"object"!=typeof t)return t;if(e.has(t))return e.get(t);if(t instanceof Date)return new Date(t);if(t instanceof RegExp)return new RegExp(t);const n=Array.isArray(t)?[]:Object.create(Object.getPrototypeOf(t));if(e.set(t,n),Array.isArray(t))for(let r=0;r<t.length;r++)n[r]=z(t[r],e);else for(const r in t)t.hasOwnProperty(r)&&(n[r]=z(t[r],e));return n}function H(t,e){return K(t,e,new WeakMap)}function K(t,e,n){return!!(t===e||(r=t,o=e,r instanceof Function&&o instanceof Function&&r.toString()===o.toString()))||(!!n.has(t)||"object"==typeof t&&"object"==typeof e&&(t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():(n.set(t,0),Array.isArray(t)&&Array.isArray(e)?function(t,e,n){if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(!K(t[r],e[r],n))return!1;return!0}(t,e,n):!Array.isArray(t)&&!Array.isArray(e)&&function(t,e,n){const r=Object.keys(t),o=Object.keys(e);if(0===r.length&&0===o.length)return!0;if(r.length!==o.length)return!1;for(const s of r){if(!o.includes(s)||!K(t[s],e[s],n))return!1}return!0}(t,e,n))));var r,o}D((()=>function(t){const e=(e,n)=>W(e,n,t);return e.setup=t,D((()=>e),e),e}({})),_),$.value=t=>{const e=O((()=>k.memory.stateConfig.array)),n=j();return O((()=>new S(t).pipe((t=>(P(n.memory.state,e),t)))))},$.all=function(t){const e=O((()=>k.memory.stateConfig.array)),n=j();return w.all(t).pipe((t=>(P(n.memory.state,e),t)))},k.memory.providerConfig={providers:[],ownerSupport:void 0};const G={create:t=>{const e=O((()=>({stateDiff:0,provider:void 0})));if(e.stateDiff){for(let t=e.stateDiff;t>0;--t)O(void 0);return O(void 0)}const n=O((()=>{const n=k.memory,r=n.stateConfig,o=r.array.length,s="prototype"in t?new t:t(),a=r.array.length-o,i=n.providerConfig,l={constructMethod:t,instance:s,clone:L(s),stateDiff:a};return e.provider=l,i.providers.push(l),e.stateDiff=a,s})),r=t,o=r.compareTo=r.toString();return e.provider.constructMethod.compareTo=o,n},inject:t=>O((()=>{const e=k.memory.providerConfig,n=t,r=n.compareTo=n.compareTo||t.toString();let o={ownerTagSupport:e.ownerSupport};for(;o.ownerTagSupport;){const t=o.ownerTagSupport.global.providers.find((t=>{if(t.constructMethod.compareTo===r)return!0}));if(t)return t.clone=L(t.instance),e.providers.push(t),t.instance;o=o.ownerTagSupport}const s=`Could not inject provider: ${t.name} ${t}`;throw console.warn(`${s}. Available providers`,e.providers),new Error(s)}))};function X(t,e){const n=k.memory.providerConfig;n.ownerSupport=e,t.global.providers.length&&(n.providers.length=0,n.providers.push(...t.global.providers))}function q(t,e){const n=Q(t,e);for(let t=n.length-1;t>=0;--t){const{tagSupport:e,renderCount:r,provider:o}=n[t];if(e.global.deleted)continue;r===e.global.renderCount&&(o.clone=L(o.instance),ot(e,!1))}}function Q(t,e,n=[]){const r=t.global,o=r.providers.find((t=>t.constructMethod.compareTo===e.constructMethod.compareTo));o&&n.push({tagSupport:t,renderCount:r.renderCount,provider:o});const s=t.childTags;for(let t=s.length-1;t>=0;--t)Q(s[t],e,n);return n}function Y(t,e){const n=k.tagUse,r=n.length;for(let o=0;o<r;++o)n[o].beforeRender(t,e)}function Z(t,e){const n=k.tagUse,r=n.length;for(let o=0;o<r;++o)n[o].afterRender(t,e);k.memory.tagClosed$.next(e)}function tt(t,e){const n=k.tagUse,r=n.length;for(let o=0;o<r;++o)n[o].beforeDestroy(t,e)}function et(t,e,n,r){const o=t.global.renderCount;!function(t,e,n){const r=n?.ownerTagSupport,o=r||e;if(n){const e=n.memory.state;t.memory.state=[...e],t.global=n.global,function(t,e){const n=k.tagUse,r=n.length;for(let o=0;o<r;++o)n[o].beforeRedraw(t,e)}(t,n)}else{Y(t,o);k.memory.providerConfig.ownerSupport=o}}(t,r,e);let s=(0,t.templater.wrapper)(t,n);return Z(t,r),s.global.renderCount>o+1?t.global.newest:(t.global.newest=s,s)}function nt(t,e,n,o){const a=et(t,e,n,o);!e||r(e,a)||function(t,e,n){const r=t.global,o=r.insertBefore;s(t),e.global={...r};const a=e.global;a.insertBefore=o,a.deleted=!1,delete a.oldest,delete a.newest,delete n.tagSupport}(e,a,n);const i=e?.ownerTagSupport;return a.ownerTagSupport=o||i,a}function rt(t,e,n,o){const s=o.tagSupport,a=s.global;e.global=a;const i=a.renderCount;!function(t){const e=t.global.providers.filter((t=>!H(t.instance,t.clone)));for(let n=e.length-1;n>=0;--n){const r=e[n];q(t.getAppTagSupport(),r),r.clone=L(r.instance)}}(t);const l=a.newest;if(i!==a.renderCount)return t.updateBy(l),l;const c=nt(e,l||s||a.oldest,o,n),u=a.oldest||t;return c.global.oldest=u,r(l,c)&&(o.tagSupport=c,u.updateBy(c)),c}function ot(t,e){const n=t.global,r=t.templater;if(!r.wrapper){const e=t.ownerTagSupport;return++n.renderCount,ot(e,!0)}const o=t.subject;let s,a=!1;if(e&&t&&(s=t.ownerTagSupport,s)){const e=r.props,n=t.propsConfig.latestCloned;a=!e.every(((t,e)=>H(t,n[e])))}const i=rt(t.global.oldest,t,s,o);if(s&&a){return ot(s,!0),i}return i}k({beforeRender:(t,e)=>{X(t,e)},beforeRedraw:(t,e)=>{X(t,e.ownerTagSupport)},afterRender:t=>{const e=k.memory.providerConfig;t.global.providers=[...e.providers],e.providers.length=0}}),k.memory.tagClosed$=new w(void 0,(t=>{j()||t.next()}));let st=t=>(t,e,n,r,o,s)=>{throw new E("Callback function was called immediately in sync and must instead be call async")};const at=()=>st,it=st;function lt(t){const e=j();if(!e){throw new E("callback() was called outside of synchronous rendering. Use `callback = callbackMaker()` to create a callback that could be called out of sync with rendering")}const n=k.memory.stateConfig.array;return(...r)=>e.global.callbackMaker?ut(e,t,n,...r):t(...r)}function ct(t){const e=k.memory.stateConfig.array;st=n=>(...r)=>t.global.callbackMaker?ut(t,n,e,...r):n(...r)}function ut(t,e,n,...r){const o=t.memory.state;P(o,n);const s=e(...r);return P(n,o),ot(t,!1),s instanceof Promise&&s.finally((()=>{P(n,o),ot(t,!1)})),s}function pt(t){k.memory.currentSupport=t}function gt(t){const e=k.memory.currentSupport;e.global.init||(e.global.init=t,t())}function dt(t){k.memory.destroyCurrentSupport=t}function ft(t){k.memory.destroyCurrentSupport.global.destroyCallback=t}function ht(t){k.memory.childrenCurrentSupport=t}function mt(){return k.memory.childrenCurrentSupport.templater.children}k({beforeRender:t=>ct(t),beforeRedraw:t=>ct(t),afterRender:t=>{t.global.callbackMaker=!0,st=it}}),k({beforeRender:t=>pt(t),beforeRedraw:t=>pt(t)}),k({beforeRender:t=>dt(t),beforeRedraw:t=>dt(t),beforeDestroy:t=>{const e=t.global.destroyCallback;e&&e()}}),k({beforeRender:t=>ht(t),beforeRedraw:t=>ht(t)});const bt="__tagvar",yt="--"+bt+"--",vt=new RegExp(yt,"g");class wt{strings;values;tagJsType=t.tag;memory={};templater;constructor(t,e){this.strings=t,this.values=e}key(t){return this.memory.arrayValue=t,this}children;html(t,...e){return this.children={strings:t,values:e},this}}class St{props;tagJsType="templater";tagged;wrapper;madeChildIntoSubject=!1;tag;children=new S([]);constructor(t){this.props=t}html(t,...e){const n=new wt(t,e),{childSubject:r,madeSubject:o}=Se(n);return this.children=r,this.madeChildIntoSubject=o,this}}function Ct(t,e,n,r){const o=e.global,s=o.renderCount,a=t.bind(n)(...r);if(!(s===o.renderCount)||o.deleted)return a instanceof Promise?a.then((()=>"promise-no-data-ever")):"no-data-ever";const i=ot(o.newest,!0);return o.newest=i,a instanceof Promise?a.then((()=>{if(o.deleted)return"promise-no-data-ever";const t=ot(o.newest,!0);return o.newest=t,"promise-no-data-ever"})):"no-data-ever"}function Tt(e){return e.map((e=>{const n=e;switch(p(e)){case t.tagComponent:return L(e.props);case t.tag:case t.templater:return Tt(n.values);case t.tagArray:return Tt(n)}return L(e)}))}function At(t,e=[]){for(let n=t.length-1;n>=0;--n){const r=t[n];e.push(r),t.splice(n,1),At(r.childTags,e)}return e}function jt(t,e){const n=t;let r=n.templater;r||(r=new St([]),r.tag=n,n.templater=r);const o=new S(r);return o.tagSupport=new be(r,e,o),o}function kt(t){const e=document.createTextNode(""),n=t.parentNode;return n.insertBefore(e,t),n.removeChild(t),e}function Rt(t,e,n){const r=t.split(".");if("style"===r[0]&&(n.style[r[1]]=e),"class"===r[0])if(r.shift(),e)for(let t=0;t<r.length;++t)n.classList.add(r[t]);else for(let t=0;t<r.length;++t)n.classList.remove(r[t])}const xt=/^\s*{__tagvar/,Bt=/}\s*$/;function Et(t){return t&&t.search(xt)>=0&&t.search(Bt)>=0}function Ft(t,e,n,r,o,s){if(Et(e))return function(t,e,n,r,o,s){const a=Vt(r,e);return Nt(t,a,n,o,s)}(t,e,n,r,o,s);if(Et(t)){let e;const a=Vt(r,t).subscribe((t=>{!function(t,e,n,r,o){if(e&&e!=t)if("string"==typeof e)n.removeAttribute(e);else if(e instanceof Object)for(const t in e)n.removeAttribute(t);if("string"==typeof t){if(!t.length)return;return void Nt(t,"",n,r,o)}if(t instanceof Object)for(const e in t)Nt(e,t[e],n,r,o)}(t,e,n,o,s),e=t}));return o.global.subscriptions.push(a),void n.removeAttribute(t)}return Pt(t)?Rt(t,e,n):void 0}function Vt(t,e){return t[e.replace("{","").split("").reverse().join("").replace("}","").split("").reverse().join("")]}function Nt(t,e,n,r,o){const s=Pt(t);if(e instanceof Function){const r=function(...t){return e(n,t)};n[t].action=r}if(m(e)){n.removeAttribute(t);const a=e=>{if(e instanceof Function){const t=r.templater.wrapper,n=t?.parentWrap,o=n?.oneRender;o||(e=function(t,e){if(t.isChildOverride)return t;const n=(n,r)=>Ct(t,e,n,r);return n.tagFunction=t,n}(e,r))}return function(t,e,n,r,o){if(t instanceof Function){const r=function(...n){return t(e,n)};return r.tagFunction=t,void(e[n]=r)}if(r)return void Rt(n,t,e);if(t)return void o(e,n,t);const s=[void 0,!1,null].includes(t);if(s)return void e.removeAttribute(n);o(e,n,t)}(e,n,t,s,o)},i=e.subscribe(a);r.global.subscriptions.push(i)}else o(n,t,e)}function Pt(t){return t.search(/^(class|style)(\.)/)>=0}function Ot(t,e,n){t.setAttribute(e,n)}function _t(t,e,n){t[e]=n}function Mt(t,e,n){const r=t.getAttributeNames();let o=Ot;for(let s=0;s<r.length;++s){const a=r[s];"INPUT"===t.nodeName&&"value"===a&&(o=_t);Ft(a,t.getAttribute(a),t,e,n,o),o=Ot}}const Wt=/(?:<[^>]*?(?:(?:\s+\w+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+)))*\s*)\/?>)|({__tagvar[^}]+})/g;function Dt(t,e,n,{counts:r}){const o=e,s=o.tagSupport,a=s?.global.oldest||void 0;if(a&&a)return function(t,e,n){if(e instanceof Function){const t=e(n);return n.updateBy(t),void(e.tagSupport=t)}return n.updateBy(t),void(e.tagSupport=t)}(t,o,a);t.buildBeforeElement(n,{counts:r})}function $t(t,e,n,r,o){if(!0!==t.tagged){const e=t.wrapper.parentWrap.original;let n=e.name||e.constructor?.name;"Function"===n&&(n=void 0);const r=n||e.toString().substring(0,120);throw new Error(`Not a tag component. Wrap your function with tag(). Example tag(props => html\`\`) on component:\n\n${r}\n\n`)}const s=new be(t,r,e);let a=e.tagSupport;(s.global=a?.global||s.global).insertBefore=n;k.memory.providerConfig.ownerSupport=r;if(!a){a=function(t,e,n){const r=n.clones.map((t=>t));if((e=nt(e,t.tagSupport,t,n)).global.newest=e,n.clones.length>r.length){const t=n.clones.filter((t=>!r.find((e=>e===t))));e.clones.push(...t)}return n.childTags.push(e),e}(e,a||s,r)}return Dt(a,e,n,o),a}function Jt(t,e,n,r){let o=r.tagSupport;o||(o=zt(t,n,r)),r.tagSupport=o,o.ownerTagSupport=n,o.buildBeforeElement(e,{counts:{added:0,removed:0}})}function It(t,e,n){t.global.oldest=t,t.global.newest=t,t.ownerTagSupport=e,n.tagSupport=t}function Ut(t){const e=Lt();return e.tag=t,t.templater=e,e}function Lt(){const t={children:new S([]),props:[],isTag:!0,tagJsType:"templater",tagged:!1,madeChildIntoSubject:!1,html:()=>t};return t}function zt(t,e,n){const r=new be(t,e,n);return It(r,e,n),e.childTags.push(r),r}function Ht(t,e,n,r,o){const s=r.clones;let a=t.lastArray=t.lastArray||[];t.placeholder||function(t,e){if("TEMPLATE"!==t.nodeName)return void(e.placeholder=t);const n=e.placeholder=document.createTextNode(""),r=t.parentNode;r.insertBefore(n,t),r.removeChild(t)}(n,t);const i=t.placeholder;let l=0;a=t.lastArray=t.lastArray.filter(((t,n)=>{const r=e.length-1<n-l,s=e[n-l],i=t.tagSupport.templater.tag,u=s?.memory.arrayValue,p=i.memory.arrayValue,g=r||!function(t,e){if(t===e)return!0;if(t instanceof Array&&e instanceof Array&&t.length==e.length)return t.every(((t,n)=>t==e[n]));return!1}(u,p);if(g){const t=a[n];return c(t.tagSupport,o.counts),t.deleted=!0,++l,++o.counts.removed,!1}return!0}));const u=e.length;for(let t=0;t<u;++t){const n=e[t],s=a[t],l=s?.tagSupport,c=n;h(c)&&!c.templater&&Ut(c);const u=new be(c.templater,r,new S(void 0));if(l){It(u,r,l.subject);const t=l.global;u.global=t,t.newest=u}if(!("arrayValue"in c.memory)){const t={template:u.getTemplate().string,array:e},n="Use html`...`.key(item) instead of html`...` to template an Array";console.error(n,t);throw new x(n,t)}if(a.length>t){s.tagSupport.global.oldest.updateBy(u)}else Kt(i,u,t,o,a),r.childTags.push(u)}return s}function Kt(t,e,n,r,o){const s={tagSupport:e,index:n};o.push(s);const a={added:r.counts.added+n,removed:r.counts.removed},i=document.createDocumentFragment(),l=document.createElement("template");i.appendChild(l),e.buildBeforeElement(l,{counts:a});t.parentNode.insertBefore(i,t)}function Gt(t,e){const n=e.parentNode,r=document.createTextNode(t);return n.insertBefore(r,e),n.removeChild(e),r}function Xt(t){return[void 0,!1,null].includes(t)?"":t}function qt(t,e,n){e.insertBefore=n;const r=e.clone||n;if(e.lastValue===t&&"lastValue"in e)return;e.lastValue=t;const o=Xt(t),s=e.clone;if(s)return void(s.textContent=o);const a=Gt(o,r);e.clone=a}function Qt(e,n,r,o,s){switch(p(e)){case t.templater:return void Jt(e,r,o,n);case t.tag:const a=e;let i=a.templater;return i||(i=Ut(a)),void Jt(i,r,o,n);case t.tagArray:return Ht(n,e,r,o,s);case t.tagComponent:return void $t(e,n,r,o,s);case t.function:const l=e;if(l.oneRender){const t=new St([]);t.tagJsType="oneRender";const e=zt(t,o,n);let s;const a=()=>(t.tag=s||l(),e);return t.wrapper=a,a.parentWrap=a,a.oneRender=!0,a.parentWrap.original=l,et(e,e,n,o),void Jt(t,r,o,n)}}!function(t,e,n){e.lastValue=t;const r=Gt(Xt(t),n);e.clone=r}(e,n,r)}const Yt=new RegExp('\\s*<template interpolate end id="__tagvar(\\d{1,4})"([^>]*)></template>(\\s*)');function Zt(t,e,n){if(!(t instanceof Function))return!!H(t,e)&&4;if(!(e instanceof Function))return!1;const r=e?.original;r&&(e=r);t.original&&(t=t.original);return t.toString()===e.toString()?(n(),3):(n(),5)}function te(t,e,n){const r=function(t,e){let n=t,r=e;if("object"==typeof t){if(!e)return 3;if(n=[...t],r=[...e||[]],!n.every(((t,e)=>{let o=r[e];if(t&&"object"==typeof t){const e={...t},n={...o||{}},r=Object.entries(e).every((([t,r])=>Zt(r,n[t],(()=>{delete e[t],delete n[t]}))));return r}return Zt(t,o,(()=>{n.splice(e,1),r.splice(e,1)}))})))return 6}return!1}(n.props,t.propsConfig.latestCloned);if(r)return r;const o=function(t,e){const n=t.propsConfig.lastClonedKidValues,r=e.propsConfig.lastClonedKidValues;return!n.every(((t,e)=>{const n=r[e];return t.every(((t,e)=>t===n[e]))}))&&9}(t,e);return o}function ee(t,e){const n=function(t,e){if("object"!=typeof t||!e)return t;for(const n in t){const r=t[n];if(!(r instanceof Function))continue;t[n].toCall||(t[n]=(...e)=>t[n].toCall(...e),t[n].toCall=(...t)=>ne(r,t,e),t[n].original=r)}return t}(g(t)?0:t,e);return n}function ne(t,e,n){const r=j(),o=t(...e),s=()=>{const t=n.global.newest;if(r){const e=t.memory.state.every((t=>{const e=t.lastValue,n=t.get();return H(L(e),n)}));if(e)return o}const e=ot(t,!0);return t.global.newest=e,o};return r?(k.memory.tagClosed$.toCallback(s),o):s()}function re(t,e,n,o){let a=n.tagSupport?.global.newest,i=a.global.oldest;const l=a.templater.wrapper,c=e.templater.wrapper;let u=!1;if(l&&c){u=l.parentWrap.original===c.parentWrap.original}const p=e.templater;if(!u){return s(a.global.oldest),$t(p,n,o,t,{counts:{added:0,removed:0}})}if(!te(a,e,p)){return function(t,e,n){t=t.global.newest||t;const r=t.propsConfig,o=r.latestCloned,s=e.global.newest;for(let t=n.length-1;t>=0;--t){const e=n[t];if("object"!=typeof e)return;const r=o[t];if("object"!=typeof r)return;for(const t in e){if(!(e[t]instanceof Function))continue;const n=e[t];n instanceof Function&&n.toCall||(r[t].toCall=(...t)=>ne(n,t,s))}}}(a,t,p.props),a}const g=a.global.newest,d=ot(e,!1);a=n.tagSupport;const f=d.global.oldest;if(!!!f)return oe(d,o,a,n);if(f&&p.children.value.length){f.templater.children.set(p.children.value)}return u&&r(g,d)?(n.tagSupport=d,i.updateBy(d),d):(u&&a&&(s(a),d.global.context={}),i=void 0,i||(a=d,oe(d,a.global.insertBefore,a,n)),a.global.newest=d,d)}function oe(t,e,n,r){return t.buildBeforeElement(e,{counts:{added:0,removed:0}}),t.global.oldest=t,t.global.newest=t,n.global.oldest=t,n.global.newest=t,r.tagSupport=t,t}function se(e,n,o,a){const f=e,m=p(n);if(function(e,n,o){const a=e,d="lastValue"in a,f=a.lastValue;if(d&&f!==n){const t=typeof n;return(!l(t)||typeof f!==t)&&!(n instanceof Function&&f instanceof Function)&&(function(t,e){const n=e.clone,r=n.parentNode;r.insertBefore(t,n),r.removeChild(n),delete e.clone,delete e.lastValue}(o,a),"changed-simple-value")}const h=p(n),m=e,b=m.lastArray;if(b&&h!==t.tagArray){const t=m.placeholder;delete m.lastArray,delete m.placeholder,i(o,t);for(let t=b.length-1;t>=0;--t){const{tagSupport:e}=b[t];c(e,{added:0,removed:0})}return"array"}const y=e.tagSupport;if(y){const o=g(n);return g(e.value)&&o?!r(n,y)&&(u(y),s(y),2):h!==t.tagComponent&&(!n||!n.oneRender)&&(u(y),s(y),"different-tag")}}(e,n,a),m===t.tagComponent)return function(t,e,n,r){if(!e.tagSupport)return $t(t,e,n,r,{counts:{added:0,removed:0}}),e;const o=new be(t,r,e),s=e.tagSupport,a=s.global.newest;if(!a)return u(s),$t(t,e,n,r,{counts:{added:0,removed:0}}),e;{const t=a.memory.state;o.memory.state.length=0,o.memory.state.push(...t)}return o.global=s.global,e.tagSupport=o,re(r,o,e,n),e}(n,f,a,o);if(f.tagSupport)return m===t.function||function(t,e,n){const o=t.tagSupport;let s=e;const a=h(e);if(a){const t=e;s=t.templater,s||(s=new St([]),s.tag=t,t.templater=s)}const i=new be(s,n,t);a&&(i.global=o.global);const l=e&&r(o,i);d(e)&&It(i,n,t);if(l)return void o.updateBy(i);if(l){return Jt(s,o.global.insertBefore,n,t)}qt(e,t,t.insertBefore)}(e,n,o),f;switch(m){case t.tagArray:return Ht(e,n,a,o,{counts:{added:0,removed:0}}),e;case t.templater:return Jt(n,a,o,f),f;case t.tag:const r=n;let s=r.templater;return s||(s=Lt(),r.templater=s,s.tag=r),Jt(s,a,o,f),f;case t.subject:return n;case t.function:return e.clone||(e.clone=kt(a)),e}return qt(n,e,a),f}function ae(t,e,n,r,o){const s=[];if(!t.hasAttribute("end"))return{clones:s};const a=t.getAttribute("id");if(a?.substring(0,bt.length)!==bt)return{clones:s};const i=e[a];return f(i.value)||b(i.value)?{clones:s,tagComponent:{variableName:a,ownerSupport:n,subject:i,insertBefore:t}}:(ie(t,i,n,r),{clones:s})}function ie(t,e,n,r){let o=!1;const s=s=>{if(o)return void se(e,s,n,t);Qt(s,e,t,n,{counts:{...r}}),o=!0};let a=s;const i=e.subscribe((t=>a(t)));if(t.parentNode){const n=e.clone=kt(t);a=r=>{const o=n.parentNode;o.insertBefore(t,n),o.removeChild(n),delete e.clone,a=s,s(r)}}n.global.subscriptions.push(i)}function le(t,e,n,r){if(!t.getAttribute)return;"TEXTAREA"===t.nodeName&&function(t,e,n){const r=t.value;if(r.search(Yt)>=0){const o=r.match(/__tagvar(\d{1,4})/),s="{"+(o?o[0]:"")+"}";t.value="",t.setAttribute("text-var-value",s);const a=(e,n,r)=>t.value=r;Ft("text-var-value",s,t,e,n,a)}}(t,n,r);let o=e.counts.added;if(o=function(t,e){const n=t.oninit;if(!n)return e.added;const r=n.tagFunction;if(!r)return e.added;const o=r.tagFunction;return o?(o({target:t,stagger:e.added}),++e.added):e.added}(t,e.counts)-o,t.children){const o=t.children;for(let t=o.length-1;t>=0;--t){return le(o[t],{...e,counts:e.counts},n,r)}}}function ce(t,e,n,r){const o=n.counts,s=[],a=[];for(let i=r.length-1;i>=0;--i){const l=r[i],{clones:c,tagComponent:u}=ae(l,t,e,o);if(s.push(...c),u)a.push(u);else if(l.children)for(let r=l.children.length-1;r>=0;--r){const i=l.children[r];if(ue(i)){const{tagComponent:n}=ae(i,t,e,o);n&&a.push(n)}const{clones:c,tagComponents:u}=ce(t,e,n,i.children);s.push(...c),a.push(...u)}}return{clones:s,tagComponents:a}}function ue(t){return"TEMPLATE"===t.tagName&&void 0!==t.getAttribute("interpolate")&&void 0!==t.getAttribute("end")}function pe(t,e,n,r,o){const s=[],a=[],i=n.interpolation,l=t.children[0],c=l.content.children;if(i.keys.length){const{clones:t,tagComponents:n}=ce(e,r,o,c);s.push(...t),a.push(...n)}return Mt(l,e,r),ge(c,e,r),{clones:s,tagComponents:a}}function ge(t,e,n){for(let r=t.length-1;r>=0;--r){const o=t[r];Mt(o,e,n),o.children&&ge(o.children,e,n)}}function de(t){const e=function(t){const e=[];return{string:t.replace(Wt,((t,n)=>{if(t.startsWith("<"))return t;const r=n.substring(1,n.length-1);return e.push(r),`<template interpolate end id="${r}"></template>`})),keys:e}}(t);return e.string=e.string.replace(vt,bt),e}function fe(t,e,n,r,o){const s=function(t,e){const n=[];let r=t.children[0].content.firstChild;const o=document.createDocumentFragment();for(;r;){const t=r.nextSibling;n.push(r),o.appendChild(r),r=t}e.parentNode&&e.parentNode.insertBefore(o,e);return n}(t,e);if(!s.length)return s;for(let t=s.length-1;t>=0;--t){const e=s[t];le(e,o,r,n),n.clones.push(e)}return s}const he=new RegExp(bt,"g");class me{templater;subject;isApp=!0;appElement;strings;values;propsConfig;memory={state:[]};clones=[];global={context:{},providers:[],renderCount:0,deleted:!1,subscriptions:[]};hasLiveElements=!1;constructor(t,e){this.templater=t,this.subject=e;const n=t.children.value,r=t.props,o=r.map((t=>L(t)));this.propsConfig={latest:r,latestCloned:o,lastClonedKidValues:n.map((t=>Tt(t.values)))}}buildBeforeElement(t,e={counts:{added:0,removed:0}}){const n=this.subject,r=this.global;r.insertBefore=t,r.placeholder||function(t){const e=t.insertBefore;t.placeholder=kt(e)}(r);const o=r.placeholder;r.oldest=this,r.newest=this,n.tagSupport=this,this.hasLiveElements=!0;const s=this.update(),a=this.getTemplate(),i=document.createDocumentFragment(),l=document.createElement("template");l.innerHTML=a.string,i.appendChild(l);const{tagComponents:c}=pe(i,s,a,this,{counts:e.counts});fe(i,o,this,s,e);const u=c.length;for(let t=0;t<u;++t){const n=c[t];ie(n.insertBefore,n.subject,n.ownerSupport,e.counts),fe(i,n.insertBefore,n.ownerSupport,s,e)}}getTemplate(){const t=this.templater.tag,e=this.strings||t.strings,n=this.values||t.values,r=de(e.map(((t,e)=>(t.replace(he,yt)+(n.length>e?`{${bt}${e}}`:"")).replace(/>\s*/g,">").replace(/\s*</g,"<"))).join(""));return{interpolation:r,string:r.string,strings:e,values:n,context:this.global.context||{}}}update(){return this.updateContext(this.global.context)}updateContext(e){const n=this.templater.tag,r=this.strings||n.strings,o=this.values||n.values;return r.map(((n,r)=>{if(!(o.length>r))return;const s=bt+r,a=o[r];if(s in e)return function(t,e,n){const r=t[e],o=r.tagSupport;if(o&&n&&f(n)){let t=new be(n,o.ownerTagSupport,r);f(o)&&(console.warn("👉 deprecated code is being used #shareTemplaterGlobal 👈"),function(t,e){const n=t.templater.wrapper.parentWrap.original,r=e.templater.wrapper,o=r?.parentWrap.original;if(n===o){e.global=t.global;const n=t.global.newest;if(n){const t=n.memory.state;e.memory.state.length=0,e.memory.state.push(...t)}}}(o,t))}m(n)||r.set(n)}(e,s,a);e[s]=function(e,n){switch(p(e)){case t.tagComponent:return new S(e);case t.templater:return jt(e.tag,n);case t.tag:return jt(e,n);case t.subject:return e}return new S(e)}(a,this)})),e}}class be extends me{templater;ownerTagSupport;subject;version;isApp=!1;childTags=[];constructor(t,e,n,r=0){super(t,n),this.templater=t,this.ownerTagSupport=e,this.subject=n,this.version=r}destroy(t={stagger:0,byParent:!1}){const e=!t.byParent,n=this.global,r=this.subject,o=t.byParent?[]:At(this.childTags);e&&f(this.templater)&&tt(this,this),this.destroySubscriptions();for(let t=o.length-1;t>=0;--t){const e=o[t],n=e.global;delete n.newest,n.deleted=!0,f(e.templater)&&tt(e,e)}if("TEMPLATE"===n.insertBefore.nodeName){n.placeholder&&!("arrayValue"in this.memory)&&(t.byParent||u(this))}let s;if(this.ownerTagSupport&&(this.ownerTagSupport.childTags=this.ownerTagSupport.childTags.filter((t=>t!==this))),e){const{stagger:e,promise:n}=this.destroyClones(t);t.stagger=e,n&&(s=n)}else this.destroyClones();return delete n.placeholder,n.context={},delete n.oldest,delete n.newest,n.deleted=!0,this.childTags.length=0,this.hasLiveElements=!1,delete r.tagSupport,s=s?s.then((async()=>{const t=o.map((t=>t.destroy({stagger:0,byParent:!0})));return Promise.all(t)})):Promise.all(o.map((t=>t.destroy({stagger:0,byParent:!0})))),s.then((()=>t.stagger))}destroySubscriptions(){const t=this.global.subscriptions;for(let e=t.length-1;e>=0;--e)t[e].unsubscribe();t.length=0}destroyClones({stagger:t}={stagger:0}){const e=[...this.clones];this.clones.length=0;const n=e.map((e=>this.checkCloneRemoval(e,t))).filter((t=>t)),r=this.global.context;for(const t in r){const e=r[t].clone;e?.parentNode&&e.parentNode.removeChild(e)}return n.length?{promise:Promise.all(n),stagger:t}:{stagger:t}}checkCloneRemoval(t,e){let n;const r=t;r.ondestroy&&(n=function(t,e){const n=t.ondestroy;if(!n)return;const r=n.tagFunction;if(!r)return;const o=r.tagFunction;if(!o)return;return o({target:t,stagger:e})}(r,e));const o=()=>{const e=t.parentNode;e&&e.removeChild(t);const n=this.ownerTagSupport;n&&(n.clones=n.clones.filter((e=>e!==t)))};return n instanceof Promise?n.then(o):(o(),n)}updateBy(t){const e=t.templater.tag;this.updateConfig(e.strings,e.values)}updateConfig(t,e){this.strings=t,this.updateValues(e)}updateValues(t){return this.values=t,this.updateContext(this.global.context)}getAppTagSupport(){let t=this;for(;t.ownerTagSupport;)t=t.ownerTagSupport;return t}}const ye=[];let ve=0;function we(e){const n=function(...e){const r=new St(e);r.tagJsType=t.tagComponent;const o=function(t,e){const n=function(n,r){const o=n.global;++o.renderCount;const s=t.children,a=o.oldest?.templater.children.lastArray;a&&(s.lastArray=a);const i=e.original;let l=t.props,c=l.map((t=>ee(t,n.ownerTagSupport)));const u=l.map((t=>L(t)));let p=i(...c);p instanceof Function&&(p=p()),p.templater=t,t.tag=p;const g=new be(t,n.ownerTagSupport,r,o.renderCount);if(g.global=o,g.propsConfig={latest:l,latestCloned:u,lastClonedKidValues:g.propsConfig.lastClonedKidValues},g.memory=n.memory,t.madeChildIntoSubject){const t=s.value;for(let e=t.length-1;e>=0;--e){const n=t[e],r=n.values;for(let t=r.length-1;t>=0;--t){const e=r[t];if(!(e instanceof Function))continue;const o=n.values[t];o.isChildOverride||(n.values[t]=function(...t){const n=g.ownerTagSupport;return Ct(e,n,this,t)},o.isChildOverride=!0)}}}return g};return n}(r,n);return o.parentWrap||(o.parentWrap=n),r.tagged=!0,r.wrapper=o,r};return n.original=e,n.compareTo=e.toString(),function(t,e){t.isTag=!0,t.original=e}(n,e),function(t){t.tags=ye,t.setUse=k,t.tagIndex=ve++}(e),ye.push(n),n}function Se(t){if(m(t))return{childSubject:t,madeSubject:!1};if(b(t))return{childSubject:new S(t),madeSubject:!0};const e=t;return e?(e.memory.arrayValue=0,{childSubject:new S([e]),madeSubject:!0}):{childSubject:new S([]),madeSubject:!0}}function Ce(t,...e){return new wt(t,e)}we.oneRender=(...t)=>{throw new Error("Do not call function tag.oneRender but instead set it as: `tag.oneRender = (props) => html`` `")},Object.defineProperty(we,"oneRender",{set(t){t.oneRender=!0}});const Te=[];function Ae(t,e,n){const r=Te.findIndex((t=>t.element===e));r>=0&&(Te[r].tagSupport.destroy(),Te.splice(r,1),console.warn("Found and destroyed app element already rendered to element",{element:e}));const o=function(t){let e={};const n=new S(e);e=new me(t,n),n.set(t),n.tagSupport=e,Y(e,void 0);const r=t.wrapper,o=r(e,n);return Z(e,o),o}(t(n));o.appElement=e,o.isApp=!0,o.global.isApp=!0;const s=document.createElement("template");s.setAttribute("id","app-tag-"+Te.length),s.setAttribute("app-tag-detail",Te.length.toString());const a=document.createDocumentFragment();return a.appendChild(s),e.destroy=async()=>{await o.destroy();const t=o.global.insertBefore;t.parentNode.removeChild(t)},o.buildBeforeElement(s),o.global.oldest=o,o.global.newest=o,e.setUse=t.original.setUse,Te.push({element:e,tagSupport:o}),e.appendChild(a),{tagSupport:o,tags:t.original.tags}}const je={tagElement:Ae,renderWithSupport:nt,renderTagSupport:ot,renderTagOnly:et};var ke=n.W9,Re=n.t3,xe=n.ei,Be=n.B7,Ee=n.XF,Fe=n.vw,Ve=n.PC,Ne=n.uX,Pe=n.Ot,Oe=n.E2,_e=n.OH,Me=n.Y_,We=n.zV,De=n.cF,$e=n.qy,Je=n.u2,Ie=n.zl,Ue=n.O5,Le=n.Ze,ze=n._4,He=n.iO,Ke=n.dk,Ge=n.mn,Xe=n.NM,qe=n.Gy,Qe=n.z,Ye=n.bc,Ze=n.sA,tn=n.MG,en=n.r5,nn=n.yN,rn=n.QB,on=n.vJ,sn=n.AI,an=n.wk,ln=n.uz,cn=n.Tc,un=n.Hf,pn=n._A,gn=n.wB,dn=n.id,fn=n.MC,hn=n.zC;export{ke as ArrayNoKeyError,Re as BaseTagSupport,xe as StateMismatchError,Be as Subject,Ee as SyncCallbackError,Fe as Tag,Ve as TagError,Ne as TagSupport,Pe as ValueSubject,Oe as callback,_e as callbackMaker,Me as children,We as combineLatest,De as hmr,$e as html,Je as interpolateElement,Ie as interpolateString,Ue as isLikeValueSets,Le as isStaticTag,ze as isSubjectInstance,He as isTagArray,Ke as isTagClass,Ge as isTagComponent,Xe as isTagTemplater,qe as kidsToTagArraySubject,Qe as letProp,Ye as letState,Ze as onDestroy,tn as onInit,en as providers,nn as renderTagSupport,rn as renderWithSupport,on as runBeforeRender,sn as setUse,an as state,ln as subject,cn as tag,un as tagElement,pn as tags,gn as watch,dn as willCallback,fn as willPromise,hn as willSubscribe};
//# sourceMappingURL=bundle.js.map