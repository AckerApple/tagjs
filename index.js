var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{xQ:()=>r,Vp:()=>et,fx:()=>y,mN:()=>st,RN:()=>Rt,er:()=>b,dy:()=>rt,SO:()=>G,IT:()=>z,SW:()=>u,ev:()=>At,nc:()=>Et,a:()=>mt,_b:()=>v,hs:()=>g,lc:()=>l,SB:()=>bt,_q:()=>dt,bX:()=>ot,Cc:()=>ut,pJ:()=>lt});class r{isSubject=!0;subscribers=[];value;subscribe(t){this.subscribers.push(t),o.globalSubs.push(t),o.globalSubCount$.set(o.globalSubCount$.value+1);const e=()=>{e.unsubscribe()};return e.unsubscribe=()=>{n(this.subscribers,t),n(o.globalSubs,t),o.globalSubCount$.set(o.globalSubCount$.value-1),e.unsubscribe=()=>{}},e}set(t){this.value=t,this.subscribers.forEach((e=>{e.value=t,e(t)}))}next=this.set}function n(t,e){const r=t.indexOf(e);-1!==r&&t.splice(r,1)}const o=r;o.globalSubs=[],o.globalSubCount$=new r,o.globalSubCount$.set(0);class s extends r{value;constructor(t){super(),this.value=t}subscribe(t){const e=super.subscribe(t);return t(this.value),e}}function a(t,e=new WeakMap){if(null===t||"object"!=typeof t)return t;if(e.has(t))return e.get(t);if(t instanceof Date)return new Date(t);if(t instanceof RegExp)return new RegExp(t);const r=Array.isArray(t)?[]:Object.create(Object.getPrototypeOf(t));if(e.set(t,r),Array.isArray(t))for(let n=0;n<t.length;n++)r[n]=a(t[n],e);else for(const n in t)t.hasOwnProperty(n)&&(r[n]=a(t[n],e));return r}function i(t,e){if(t===e)return!0;if("object"!=typeof t||"object"!=typeof e||null===t||null===e)return!1;const r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(const o of r)if(!n.includes(o)||!i(t[o],e[o])){if(t[o]instanceof Function&&e[o]instanceof Function&&t[o].toString()===e[o].toString())continue;return!1}if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(!i(t[r],e[r]))return!1}else if(Array.isArray(t)||Array.isArray(e))return!1;return!0}function u(t){return!0===t?.isTemplater}function c(t){return!0===t?.isTag}function p(t){return!(!0!==t?.isSubject&&!t?.subscribe)}function l(t){const e={beforeRender:t.beforeRender||(()=>{}),beforeRedraw:t.beforeRedraw||(()=>{}),afterRender:t.afterRender||(()=>{}),beforeDestroy:t.beforeDestroy||(()=>{})};l.tagUse.push(e)}function g(t,e){l.tagUse.forEach((r=>r.beforeRender(t,e)))}function d(t,e){l.tagUse.forEach((r=>r.afterRender(t,e)))}function f(t,e){l.tagUse.forEach((r=>r.beforeRedraw(t,e)))}l.tagUse=[],l.memory={};class h{tagged;wrapper;newest;oldest;tagSupport;constructor(t){this.tagSupport=b(this,t)}redraw;isTemplater=!0;forceRenderTemplate(t,e){const r=this.wrapper();return r.setSupport(t),r.afterRender(),this.oldest=r,t.oldest=r,this.oldest=r,this.newest=r,r.ownerTag=e,r}renderWithSupport(t,e,r){++t.memory.renderCount;const n=e?.ownerTag||r;t.oldest?(t.props=t.latestProps,t.clonedProps=t.latestClonedProps,f(t,t.oldest)):(g(t,n),l.memory.providerConfig.ownerTag=n);const o=this,s=o.wrapper();t.latestProps=s.tagSupport.props,t.latestClonedProps=s.tagSupport.clonedProps,s.setSupport(t),d(t,s),o.newest=s,s.ownerTag=n;const a=t.oldest=t.oldest||s;t.newest=s;const i=a.tagSupport;return a.tagSupport=i||t,a.tagSupport.templater=o,e&&e.isLikeTag(s)?(a.updateByTag(s),{remit:!1,retag:s}):{remit:!0,retag:s}}}function m(t,e){const r=function(t,r){if("object"!=typeof t)return t;const n={...t};return Object.entries(n).forEach((([t,r])=>{n[t]=r instanceof Function?(...t)=>function(t,r){const n=t(...r);return e.newest?.ownerTag?.tagSupport.render(),n}(r,t):r})),n}(c(t)?0:t);return r}class y{templater;props;clonedProps;latestProps;latestClonedProps;memory={context:{},state:{newest:[]},providers:[],renderCount:0};constructor(t,e){this.templater=t,this.props=e,this.latestProps=e;const r=m(e,t);this.latestClonedProps=a(r),this.clonedProps=this.latestClonedProps}oldest;newest;hasPropChanges(t,e,r){const n=this.props;return!(void 0===t&&t===r||i(e,n))}mutatingRender(){const t='Tag function "render()" was called in sync but can only be called async';throw console.error(t,{tagSupport:this}),new Error(t)}render(){return++this.memory.renderCount,this.mutatingRender()}renderExistingTag(t,e){const r=this.memory.renderCount;if(function(t){t.tagSupport.memory.providers.filter((t=>!i(t.instance,t.clone))).forEach((e=>{!function(t,e){S(t,e).forEach((({tag:t,renderCount:e,provider:r})=>{e===t.tagSupport.memory.renderCount&&(r.clone=a(r.instance),t.tagSupport.render())}))}(t.getAppElement(),e),e.clone=a(e.instance)}))}(t),r!==this.memory.renderCount)return!0;const n=t.tagSupport.templater,o=e.tagSupport.props,s=n?.tagSupport.props;return function(t,e,r,n,o){const s=t.hasPropChanges(e,n,r);return t.newest=o.redraw(),!s}(this,o,s,e.tagSupport.clonedProps,this.templater)}}function b(t,e){return new y(t,e)}function S(t,e,r=[]){const n=t.tagSupport.memory.providers.find((t=>t.constructMethod===e.constructMethod));return n&&r.push({tag:t,renderCount:t.tagSupport.memory.renderCount,provider:n}),t.children.forEach((t=>S(t,e,r))),r}function v(t,e,r){const n=t?.tagSupport||b(e);return e.renderWithSupport(n,t,r)}function w(t,e){function r(r,n){const o=e.tagSupport.memory.renderCount,s=t.bind(r)(...n);if(o===e.tagSupport.memory.renderCount)return e.tagSupport.render(),s instanceof Promise?s.then((()=>e.tagSupport.render()&&"no-data-ever")):Promise.resolve(s).then((()=>"no-data-ever"))}return r.tagFunction=t,r}function T(t,e,r){t.redraw=n=>{const o=e.tag,{remit:s,retag:a}=v(o,t,r);if(e.tagSupport=a.tagSupport,s){if(e.set(t),n){const t=o.tagSupport.memory.context;Object.values(t).forEach((t=>{t.value?.isTemplater&&t.value.redraw()}))}return a}}}function E(t,e){e.parentNode.insertBefore(t,e)}function C(t,e,r){const n=t.split(".");if("style"===n[0]&&(r.style[n[1]]=e),"class"===n[0])return n.shift(),void(e?n.forEach((t=>r.classList.add(t))):n.forEach((t=>r.classList.remove(t))))}function A(t,e,r){const n=t.getAttributeNames();"TEXTAREA"!==t.nodeName||n.includes("value")||P("textVarValue",t.getAttribute("textVarValue"),t,e,r,((e,r)=>t.value=r));const o=(e,r)=>{t.setAttribute(e,r)};n.forEach((n=>{P(n,t.getAttribute(n),t,e,r,o)}))}function R(t){return t.search(/^(class|style)(\.)/)>=0}function P(t,e,r,n,o,s){if(V(e))return function(t,e,r,n,o,s){return B(t,O(n,e),r,o,s)}(t,e,r,n,o,s);if(V(t)){let e;const a=O(n,t).subscribe((t=>{!function(t,e,r,n,o){if(e&&e!=t&&("string"==typeof e?r.removeAttribute(e):e instanceof Object&&Object.entries(e).forEach((([t])=>r.removeAttribute(t)))),"string"!=typeof t)t instanceof Object&&Object.entries(t).forEach((([t,e])=>B(t,e,r,n,o)));else{if(!t.length)return;B(t,"",r,n,o)}}(t,e,r,o,s),e=t}));return o.cloneSubs.push(a),void r.removeAttribute(t)}return R(t)?C(t,e,r):void 0}const x=/^\s*{__tagvar/,j=/}\s*$/;function V(t){return t&&t.search(x)>=0&&t.search(j)>=0}function O(t,e){return t[e.replace("{","").split("").reverse().join("").replace("}","").split("").reverse().join("")]}function B(t,e,r,n,o){const s=R(t);if(e instanceof Function)r[t]=function(...t){return e(r,t)};else if(p(e)){r.removeAttribute(t);const a=e=>function(t,e,r,n,o){if(t instanceof Function)return e[r]=function(...r){return t(e,r)},void(e[r].tagFunction=t);if(n)return void C(r,t,e);if(t)return void o(r,t);void 0===t||!1===t||null===t?e.removeAttribute(r):o(r,t)}(e,r,t,s,o),i=e.subscribe(a);n.cloneSubs.push(i)}else o(t,e)}const F=/(?:<[^>]*>)|({__tagvar[^}]+})/g;function N(t,e,r,{index:n,counts:o,forceElement:s}){if(void 0!==n){const a=e.lastArray[n];if(a?.tag.isLikeTag(t))return a.tag.updateByTag(t),[];const i=r,u=t.buildBeforeElement(i,{counts:o,forceElement:s});return e.lastArray.push({tag:t,index:n}),u}if(e.tag&&!s&&e.tag.isLikeTag(t)){if(e instanceof Function){const t=e(e.tag.tagSupport);return e.tag.updateByTag(t),[]}return e.tag.updateByTag(t),[]}const a=t.buildBeforeElement(r,{counts:o,forceElement:s});return e.tag=t,a}function k(t,e,r,n,o){if(!0!==t.tagged){let e=t.wrapper.original.name||t.wrapper.original.constructor?.name;"Function"===e&&(e=void 0);const r=e||t.wrapper.original.toString().substring(0,120);throw new Error(`Not a tag component. Wrap your function with tag(). Example tag(props => html\`\`) on component:\n\n${r}\n\n`)}const s=t,a=t.tagSupport;a.mutatingRender=()=>e.tag&&a.renderExistingTag(e.tag,s)?e.tag:a.newest=n.tagSupport.render();let i=s.newest;return l.memory.providerConfig.ownerTag=n,(!i||o.forceElement)&&(i||g(a,n),i&&f(a,i),i=s.forceRenderTemplate(a,n)),n.children.push(i),a.latestProps=i.tagSupport.props,a.latestClonedProps=i.tagSupport.clonedProps,a.memory=i.tagSupport.memory,i.setSupport(a),N(i,e,r,o)}function _(t,e,r,n,o){const s=[];t.lastArray=t.lastArray||[];let a=0;t.lastArray=t.lastArray.filter(((r,n)=>{const s=e.length-1<n-a,i=e[n-a],u=i?.arrayValue;return!s&&u===r.tag.arrayValue||(t.lastArray[n].tag.destroy({stagger:o.counts.removed,byParent:!1}),++a,++o.counts.removed,!1)}));const i=r||r.clone;return e.forEach(((e,r)=>{if(e.tagSupport=b({}),e.tagSupport.mutatingRender=()=>(n.tagSupport.render(),e),e.ownerTag=n,n.children.push(e),void 0===e.arrayValue&&!Object.keys(e).includes("arrayValue")){const t=new Error("Use html`...`.key(item) instead of html`...` to template an Array");throw t.code="add-array-key",t}const a=t.lastArray[r];if(a)return a.tag.arrayValue===e.arrayValue&&a.tag.updateValues(e.values),[];const u=N(e,t,i,{index:r,...o});s.push(...u)})),s}var $;function L(t,e,r,n){const o=e.clone||r,s=D(t,o);e.clone=s;const a=[],i=n.clones.indexOf(o);return i>=0&&!n.clones.includes(s)&&!o.parentNode&&(n.clones.splice(i,1),n.clones.push(s),a.push(s)),a}function M(t,e,r,n,o){return t.tagSupport||(t.tagSupport=b({}),t.tagSupport.mutatingRender=n.tagSupport.mutatingRender,t.tagSupport.oldest=t.tagSupport.oldest||t,n.children.push(t),t.ownerTag=n),N(t,e,r,o)}function U(t,e,r,n){const o=e.tag,s=e.clone||r;s.parentNode.insertBefore(r,s),e.clone&&e.clone.parentNode.removeChild(e.clone),delete e.tag;const a=n.counts.removed,i=o.destroy({stagger:a}).then((t=>n.counts.removed=a+t));delete e.tag;const u=D(t,r);return e.clone=u,i}function I(t,e,r,n,o){const s=[];if(!t.hasAttribute("end"))return s;const a=t.getAttribute("id");if(a?.substring(0,Z.length)!==Z)return s;const i=e[a];let p=o.forceElement;const l=i.subscribe((e=>{const{clones:o}=function(t,e,r,n,o){const s=function(t){return u(t)?$.tagComponent:c(t)?$.tag:t instanceof Array&&t.every((t=>c(t)))?$.tagArray:$.value}(t);if(s!==$.value&&e.clone){const t=e.clone,n=t.parentNode;r.removeAttribute("removedAt"),n.insertBefore(r,t),n.removeChild(t),delete e.clone}switch(s){case $.tag:return{clones:M(t,e,r,n,o)};case $.tagArray:return{clones:_(e,t,r,n,o)};case $.tagComponent:return{clones:k(t,e,r,n,o)}}return e.tag?{clones:[],promise:U(t,e,r,o)}:{clones:L(t,e,r,n)}}(e,i,t,r,{counts:n,forceElement:p});p&&(p=!1),o.push(...o),setTimeout((()=>{n.added=0,n.removed=0}),0)}));return r.cloneSubs.push(l),s}function D(t,e){const r=e.parentNode;void 0!==t&&!1!==t&&null!==t||(t="");const n=document.createTextNode(t);return r.insertBefore(n,e),r.removeChild(e),"TEMPLATE"===e.nodeName&&e.setAttribute("removedAt",Date.now().toString()),n}function W(t,e){t.getAttribute&&(e.forceElement||function(t,e){const r=t.oninit;if(!r)return;const n=r.tagFunction;if(!n)return;const o=n.tagFunction;o&&(o({target:t,stagger:e.added}),++e.added)}(t,e.counts),t.children&&new Array(...t.children).forEach((t=>W(t,e))))}!function(t){t.tag="tag",t.tagArray="tag-array",t.tagComponent="tag-component",t.value="value"}($||($={}));const J=new RegExp('\\s*<template interpolate end id="__tagvar(\\d{1,4})"([^>]*)></template>(\\s*)');function X(t,e,r,n,o){if(!o||"TEMPLATE"===t.tagName)return[];const s={added:0,removed:0},a=[],i=new Array(...o);return"TEXTAREA"===t.tagName&&q(t),i.forEach((t=>{const o=I(t,e,r,s,n);"TEXTAREA"===t.tagName&&q(t),a.push(...o),t.children&&new Array(...t.children).forEach((t=>{(function(t){return"TEMPLATE"===t.tagName&&void 0!==t.getAttribute("interpolate")&&void 0!==t.getAttribute("end")})(t)&&I(t,e,r,s,n);const o=X(t,e,r,n,t.children);a.push(...o)}))})),a}function q(t){const e=t.value;if(e.search(J)>=0){const r=e.match(/__tagvar(\d{1,4})/),n="{"+(r?r[0]:"")+"}";t.value="",t.setAttribute("textVarValue",n)}}function G(t,e,r,n,o){const s=[],a=r.interpolation,i=t.children[0].content.children;if(a.keys.length){const r=X(t,e,n,o,i);s.push(...r)}return A(t,e,n),Q(i,e,n),s}function Q(t,e,r){new Array(...t).forEach((t=>{A(t,e,r),t.children&&Q(t.children,e,r)}))}function z(t){const e=function(t){const e=[];return{string:t.replace(F,((t,r)=>{if(t.startsWith("<"))return t;const n=r.substring(1,r.length-1);return e.push(n),`<template interpolate end id="${n}"></template>`})),keys:e}}(t);return e.string=e.string.replace(tt,Z),e}function H(t,e,r){delete e.tag,delete e.tagSupport,delete r.tagSupport,t.destroy()}const Z="__tagvar",K="--"+Z+"--",Y=new RegExp(Z,"g"),tt=new RegExp(K,"g");class et{strings;values;isTag=!0;clones=[];cloneSubs=[];children=[];tagSupport;ownerTag;insertBefore;appElement;arrayValue;constructor(t,e){this.strings=t,this.values=e}beforeRedraw(){f(this.tagSupport,this)}afterRender(){d(this.tagSupport,this)}key(t){return this.arrayValue=t,this}async destroy(t={stagger:0,byParent:!1}){!!this.tagSupport&&function(t,e){l.tagUse.forEach((r=>r.beforeDestroy(t,e)))}(this.tagSupport,this),this.destroySubscriptions();const e=this.children.map((e=>e.destroy({...t,byParent:!0})));return t.byParent||(t.stagger=await this.destroyClones(t)),this.ownerTag&&(this.ownerTag.children=this.ownerTag.children.filter((t=>t!==this))),await Promise.all(e),t.stagger}destroySubscriptions(){this.cloneSubs.forEach((t=>t.unsubscribe())),this.cloneSubs.length=0}async destroyClones({stagger:t}={stagger:0}){const e=this.clones.reverse().map(((e,r)=>{let n=Promise.resolve();return e.ondestroy&&(n=function(t,e){const r=t.ondestroy;if(!r)return;const n=r.tagFunction;if(!n)return;const o=n.tagFunction;return o?o({target:t,stagger:e}):void 0}(e,t)),n.then((()=>{e.parentNode?.removeChild(e);const t=this.ownerTag;t&&(t.clones=t.clones.filter((t=>t!==e)))})),n}));return await Promise.all(e),t}updateByTag(t){this.updateConfig(t.strings,t.values),this.tagSupport.templater=t.tagSupport.templater}lastTemplateString=void 0;setSupport(t){this.tagSupport=t,this.tagSupport.mutatingRender=t.mutatingRender}updateConfig(t,e){this.strings=t,this.updateValues(e)}getTemplate(){const t=z(this.strings.map(((t,e)=>(t.replace(Y,K)+(this.values.length>e?`{${Z}${e}}`:"")).replace(/>\s*/g,">").replace(/\s*</g,"<"))).join(""));return this.lastTemplateString=t.string,{interpolation:t,string:t.string,strings:this.strings,values:this.values,context:this.tagSupport?.memory.context||{}}}isLikeTag(t){const{string:e}=t.getTemplate();if(e!==this.lastTemplateString)return!1;if(t.values.length!==this.values.length)return!1;const r=t.values.every(((t,e)=>{const r=this.values[e];if(t instanceof Function&&r instanceof Function)return!(t.toString()!==r.toString());const n=t;return!c(n)||!c(r)||(n.ownerTag=this,this.children.push(n),n.lastTemplateString||n.getTemplate().string,!!n.isLikeTag(r))}));return!!r}update(){return this.updateContext(this.tagSupport.memory.context)}updateValues(t){return this.values=t,this.updateContext(this.tagSupport.memory.context)}updateContext(t){return this.strings.map(((e,r)=>{const n=Z+r,o=this.values.length>r,i=this.values[r],l=t[n];if(l)return function(t,e,r,n){const o=t.value,s=o?.tag,i=e,c=t;if(u(i))return function(t,e,r,n){const o=e.tagSupport.props;let s=r.tag;if(!s)return T(e,r,t),void e.redraw();const i=s.tagSupport.templater.wrapper,u=e.wrapper;let c=!1;i&&u&&(c=i.original===u.original);const p=s.tagSupport;if(p.latestProps=o,p.latestClonedProps=e.tagSupport.clonedProps,c){const t=n?.tagSupport,e=a(t.props),r=t?.props;if(s&&p.hasPropChanges(r,e,o))return}else H(s,r,n);T(e,r,t),p.templater=e;const l=e.redraw();r.value.tag=p.newest=l,c||(r.tag=l,n.tagSupport=e.tagSupport)}(r,i,c,o);if(c.tag)H(c.tag,c,o);else if(s)return function(t,e,r){const n=e.tagSupport,o=n.oldest;o.beforeRedraw();const s=t.wrapper();n.latestProps=s.tagSupport.props,n.latestClonedProps=s.tagSupport.clonedProps,n.memory=s.tagSupport.memory,s.setSupport(n),t.newest=s,n.newest=s,o.afterRender(),e.updateByTag(s),r.set(t)}(e,s,c);e instanceof Function?c.set(w(e,r)):p(e)?c.set(e.value):c.set(e)}(l,i,this);!function(t,e,r,n,o){u(e)?T(e,r[n]=new s(e),o):e instanceof Function?r[n]=function(t,e){return new s(w(t,e))}(e,o):t&&(c(e)&&(e.ownerTag=o,o.children.push(e)),p(e)?r[n]=e:r[n]=new s(e))}(o,i,t,n,this)})),t}getAppElement(){let t=this;for(;t.ownerTag;)t=t.ownerTag;return t}rebuild(){const t=this.insertBefore;if(!t){const t=new Error("Cannot rebuild. Previous insertBefore element is not defined on tag");throw t.tag=this,t}this.buildBeforeElement(t,{forceElement:!0,counts:{added:0,removed:0}})}buildBeforeElement(t,e={forceElement:!1,counts:{added:0,removed:0}}){this.insertBefore=t;const r=this.update(),n=this.getTemplate(),o=document.createElement("div");o.id="tag-temp-holder",o.innerHTML=`<template tag-wrap="22">${n.string}</template>`;const s=G(o,r,n,this,{forceElement:e.forceElement});this.clones.length=0;const a=function(t,e){const r=[];let n=t.children[0].content.firstChild;for(;n;){const t=n.nextSibling;E(n,e),r.push(n),n=t}return r}(o,t);return this.clones.push(...a),s.length&&(this.clones=this.clones.filter((t=>!s.find((e=>e===t))))),this.clones.forEach((t=>W(t,e))),this.clones}}function rt(t,...e){return new et(t,e)}const nt=[];function ot(t,e,r){const n=nt.findIndex((t=>t.element===e));n>=0&&(nt[n].tag.destroy(),nt.splice(n,1),console.warn("Found and destroyed app element already rendered to element",{element:e}));const o=function(t){const e=t.tagSupport;g(e,void 0);const r=t.wrapper();return r.tagSupport=e,r.afterRender(),{tag:r,tagSupport:e}}(t(r)),{tag:s,tagSupport:a}=o;s.appElement=e,function(t,e){let r;t.mutatingRender=()=>{e.beforeRedraw();const n=t.templater,o=r=n.wrapper();return t.latestProps=o.tagSupport.props,t.latestClonedProps=o.tagSupport.clonedProps,o.setSupport(t),e.afterRender(),e.updateByTag(o),r&&r.destroy({stagger:0}),t.newest=o,r}}(a,s);const i=document.createElement("template");return i.setAttribute("tag-detail","app-template-placeholder"),e.appendChild(i),s.buildBeforeElement(i),e.setUse=t.original.setUse,nt.push({element:e,tag:s}),{tag:s,tags:t.original.tags}}function st(){Object.entries(pt).forEach((([t,e])=>at(e)))}function at(t){const{id:e,observer:r,tag:n}=t;return!!document.getElementById(e)||(r.disconnect(),n.destroy(),delete pt[e],!1)}const it={},ut=function(t){const e="__tagTemplate_"+function(t){let e=t.toString().replace(/\s+/g,"_").replace(/[^\w\d]/g,"_");return/^[a-zA-Z]/.test(e)||(e="fn_"+e),e}(t);if(it[e])return it[e];let r,n=0;function o(){const n=document.querySelectorAll("#"+e);return n.length?(r&&clearInterval(r),delete it[e],n.forEach((r=>{const n=r.updateTag;if(n)return void n();const o=ct(r);try{const{tag:n}=ot(t,r,o);!function(t,e,r){let n=r;const o=new MutationObserver(((t,e)=>{if(at(a))for(const e of t)"attributes"===e.type&&s()}));function s(){const t=r.tagSupport.templater,o=t.tagSupport.props;if(t.tagSupport.props=ct(e),JSON.stringify(o)===JSON.stringify(t.tagSupport.props))return;t.tagSupport.latestProps=t.tagSupport.props;const s=v(n,t);a.tag=n=s.retag}e.updateTag=s;const a={id:t,tag:r,observer:o};pt[t]=a;o.observe(e,{attributes:!0})}(e,r,n)}catch(e){throw console.warn("Failed to render component to element",{component:t,element:r,props:o}),e}})),n.length):n.length}return o()?{id:e}:(r=setInterval((()=>{if(n+=5,n>=2e3)throw clearInterval(r),new Error(`TaggedJs Element ${e} not found`);o()}),5),it[e]={id:e},it[e])};function ct(t){const e=t.getAttribute("props");if(!e)return{element:t};try{const r=JSON.parse(e);return r.dispatchEvent=function(e,r){const n=new CustomEvent(e,r);t.dispatchEvent(n)},r}catch(r){throw console.warn("Failed to parse props on element",{element:t,propsString:e}),r}}const pt={},lt=[];let gt=0;function dt(t){const e=function(e,r){const n=c(e),o=new h(e);let s=m(e,o);function a(){const t=(0,a.original)(o.tagSupport.props,r);return t.setSupport(o.tagSupport),t}return n&&(r=e,s=ft),a.original=t,o.tagged=!0,o.wrapper=a,o};return function(t,e){t.isTag=!0,t.original=e}(e,t),function(t){t.tags=lt,t.setUse=l,t.tagIndex=++gt}(t),lt.push(t),e}const ft=new class{};function ht(t){return l.memory.providerConfig.providers.find((e=>e.constructMethod===t))}l.memory.providerConfig={providers:[],currentTagSupport:void 0,ownerTag:void 0};const mt={create:t=>{const e=ht(t);if(e)return e.clone=a(e.instance),e.instance;const r=t.constructor?new t:t();return l.memory.providerConfig.providers.push({constructMethod:t,instance:r,clone:a(r)}),r},inject:t=>{const e=ht(t);if(e)return e.instance;const r=l.memory.providerConfig;let n={ownerTag:r.ownerTag};for(;n.ownerTag;){const e=n.ownerTag.tagSupport.memory.providers.find((e=>{if(e.constructMethod===t)return!0}));if(e)return e.clone=a(e.instance),r.providers.push(e),e.instance;n=n.ownerTag}const o=`Could not inject provider: ${t.name} ${t}`;throw console.warn(`${o}. Available providers`,r.providers),new Error(o)}};function yt(t,e){const r=l.memory.providerConfig;r.currentTagSuport=t,r.ownerTag=e,t.memory.providers.length&&(r.providers.length=0,r.providers.push(...t.memory.providers))}function bt(t,e){const r=l.memory.stateConfig,n=r.rearray[r.array.length];if(n){const t=St(n);return r.array.push({callback:e,lastValue:t,defaultValue:n.defaultValue}),t}const o=(t instanceof Function?t:()=>t)();return r.array.push({callback:e,lastValue:o,defaultValue:o}),o}function St(t){const e=t.callback;if(!e)return t.defaultValue;const r=e(vt),[n]=r,[o]=e(n);if(o!==vt)throw new Error('State property not used correctly.\n\nFor "let" state use `let name = state(default, x => [name, name = x])`\n\nFor "const" state use `const name = state(default)`\n\nProblem function:\n'+t+"\n");return n}l({beforeRender:(t,e)=>{yt(t,e)},beforeRedraw:(t,e)=>{yt(t,e.ownerTag)},afterRender:t=>{const e=l.memory.providerConfig;t.memory.providers=[...e.providers],e.providers.length=0}}),l.memory.stateConfig={array:[],rearray:[]},l({beforeRender:t=>wt(t),beforeRedraw:t=>wt(t),afterRender:(t,e)=>{const r=t.memory.state,n=l.memory.stateConfig;if(n.rearray.length&&n.rearray.length!==n.array.length){const e=`States lengths mismatched ${n.rearray.length} !== ${n.array.length}`;throw console.error(e,{oldStates:n.array,newStates:n.rearray,component:t.templater?.wrapper.original}),new Error(e)}n.rearray=[],r.newest=[...n.array],n.array=[]}});class vt{}function wt(t){const e=t.memory.state,r=l.memory.stateConfig;if(r.rearray.length){const n="last array not cleared";throw console.error(n,{config:r,component:t.templater?.wrapper.original,state:e}),n}r.rearray=[],e?.newest.length&&r.rearray.push(...e.newest)}function Tt(t){l.memory.initCurrentSupport=t}function Et(t){l.memory.initCurrentSupport?l.memory.initCurrentSupport.memory.init||(l.memory.initCurrentSupport.memory.init=t,t()):console.warn("possible init issue?")}let Ct;function At(t){Ct.memory||console.error("xxx",Ct),Ct.memory.destroyCallback=t}l({beforeRender:t=>Tt(t),beforeRedraw:t=>Tt(t)}),l({beforeRender:t=>Ct=t,beforeRedraw:t=>Ct=t,beforeDestroy:(t,e)=>{const r=t.memory.destroyCallback;r&&r()}});let Rt=()=>t=>()=>{throw new Error("The real callback function was called and that should never occur")};function Pt(t,e){t.forEach(((t,r)=>{const n=St(t),o=e[r].callback;o&&o(n),e[r].lastValue=n}))}function xt(t){Rt=()=>{const e=l.memory.stateConfig.array;return r=>(...n)=>function(t,e,r,...n){const o=t.memory.state.newest;Pt(o,r);const s=e(...n);Pt(r,o),t.render(),s instanceof Promise&&s.finally((()=>{Pt(r,o),t.render()}))}(t,r,e,...n)}}l({beforeRender:t=>xt(t),beforeRedraw:t=>xt(t)});var jt=e.xQ,Vt=e.Vp,Ot=e.fx,Bt=e.mN,Ft=e.RN,Nt=e.er,kt=e.dy,_t=e.SO,$t=e.IT,Lt=e.SW,Mt=e.ev,Ut=e.nc,It=e.a,Dt=e._b,Wt=e.hs,Jt=e.lc,Xt=e.SB,qt=e._q,Gt=e.bX,Qt=e.Cc,zt=e.pJ;export{jt as Subject,Vt as Tag,Ot as TagSupport,Bt as destroyGateways,Ft as getCallback,Nt as getTagSupport,kt as html,_t as interpolateElement,$t as interpolateString,Lt as isTagComponent,Mt as onDestroy,Ut as onInit,It as providers,Dt as redrawTag,Wt as runBeforeRender,Jt as setUse,Xt as state,qt as tag,Gt as tagElement,Qt as tagGateway,zt as tags};