var e={518:(e,o,t)=>{function r(e,o){const t=o.constructMethod.compareTo;e.global.providers.forEach((e=>{t===e.constructMethod.compareTo&&(e.constructMethod.compareTo=o.constructMethod.compareTo)})),e.childTags.forEach((e=>r(e,o)))}t.r(o),t.d(o,{switchAllProviderConstructors:()=>r})},539:(e,o,t)=>{t.r(o),t.d(o,{updateSubject:()=>n});const{switchAllProviderConstructors:r}=t(518);async function n(e,o,t,n){const a=e.tagSupport,i=a.global.oldest,l=a.global.newest,s=o.original.toString();t.original&&(t.compareTo=s),t.original=o.original,a.templater.wrapper.parentWrap.original=o.original,l.templater.wrapper.parentWrap.original=o.original,i.templater.wrapper.parentWrap.original=o.original;const c=l.global.providers.map((e=>e.constructMethod)),g=n.renderTagOnly(l,l,l.subject,l.ownerTagSupport),p=i.getAppTagSupport(),d=g.global.providers,u=i.ownerTagSupport.global.oldest;g.ownerTagSupport=u,u.childTags.push(g),d.forEach(((e,o)=>{c[o].compareTo=e.constructMethod.compareTo,e.constructMethod.compareTo=e.constructMethod.toString(),r(p,e)})),await i.destroy(),i.global.deleted=!1,delete g.global.oldest,delete g.global.newest;const m=i.global.insertBefore;g.buildBeforeElement(m,{forceElement:!1,counts:{added:0,removed:0}}),g.global.newest=g,g.global.oldest=g,e.tagSupport=g}},519:e=>{function o(e){return Promise.resolve().then((()=>{return import(e);throw o.code="MODULE_NOT_FOUND",o}))}o.keys=()=>[],o.resolve=o,o.id=519,e.exports=o},284:(e,o,t)=>{t.r(o),t.d(o,{Tag:()=>i,escapeSearch:()=>a,escapeVariable:()=>n,variablePrefix:()=>r});const r="__tagvar",n="--"+r+"--",a=new RegExp(n,"g");class i{strings;values;isTagClass=!0;memory={};templater;constructor(e,o){this.strings=e,this.values=o}key(e){return this.memory.arrayValue=e,this}}}},o={};function t(r){var n=o[r];if(void 0!==n)return n.exports;var a=o[r]={exports:{}};return e[r](a,a.exports,t),a.exports}t.d=(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{let e;const{variablePrefix:o}=t(284),{updateSubject:r}=t(539);function n(e){[...document.querySelectorAll("app")].forEach(e)}async function a(){const e=[...document.querySelectorAll("[tag]")].map((async e=>{const o=e.getAttribute("url"),r=e.getAttribute("name"),n=await t(519)(`${o}?${Date.now()}`);try{const e=n[r]();return{newApp:n,newTemplater:e,tagName:r}}catch(e){throw console.error(`Could not load tag by name ${r}`,{newApp:n,url:o}),e}}));return await Promise.all(e)}!function o(){const t=new WebSocket("ws://localhost:3000");t.addEventListener("error",(e=>{console.error("WebSocket error:",e)})),t.addEventListener("open",(e=>{console.info("WebSocket connection opened:",e)})),t.addEventListener("message",(async o=>{console.info("Message from server:",o.data,o.data),"Connected to the WebSocket endpoint"!==o.data?n((o=>{!async function(o){const t=i,r=o.setUse;(await a()).forEach((async o=>{const{newApp:n,newTemplater:a}=o,s=n.hmr,c=a.wrapper.parentWrap.original.tags,g=a.wrapper.parentWrap.original.setUse;g.memory.providerConfig=r.memory.providerConfig,r.tagUse.length=0,r.tagUse.push(...g.tagUse),Object.assign(r.memory,g.memory),g.memory=r.memory;const p=t.reduce(((e,o)=>{let t=c.map((e=>e.original)).find((e=>e.toString()===o.original.toString()));if(!t){const r=o.tagIndex;void 0!==r&&(t=c[r]),e.push({oldTag:o,newTag:t})}return e}),[]);p.length||console.warn("No old tags changed",{newTags:c,oldTags:t}),console.log("tagChangeStates",p);const d=t.length===c.length;if(c.forEach((e=>{let o=t.map((e=>e.original)).find((o=>e.original.toString()===o.toString())),r=null;if(!o&&p[0].newTag&&(r=e.tagIndex,d&&(o=t[r])),!o){if(p[0].newTag){const o="HMR has two tags";throw console.warn(o,{first:p[0].newTag.original,second:e.original,equal:e.original===p[0].newTag.original,oldTags:t,newTags:c,tagIndex:r}),new Error(o)}p[0].newTag=e}})),p.length){const{oldTag:o,newTag:t}=p[0];console.log("oldTag",{oldTag:o,oldTagOrg:o.original,newTag:t,newTagOrg:t.original});const r=function(e,o){const t=e.templater,r=t.wrapper.parentWrap.original===o;if(r)return r;return t.wrapper.parentWrap.original.toString()===o.toString()}(e,o.original);if(r)return e.templater.wrapper.parentWrap.original=t.original,e.ownerTagSupport={clones:[],childTags:[]},e.rebuild().then((o=>e=o)),void(i=c);const n=await l(e,p[0],s);o.original=t.original,t.compareTo=t.original.toString(),n<=0?console.warn("✋ No components were updated",p[0]):console.debug(`✅ Replaced and update components ${n}`,p[0])}i=c,console.info("✅ ✅ ✅ rebuilt")}))}(o)})):n((o=>{a().then((t=>{t.forEach((({newApp:t,tagName:r})=>{const{tagElement:n}=t.hmr;o.destroy&&(console.log("destroyed along the way"),o.destroy());const a=n(t[r],o,{test:1});return i=a.tags,e=a.tagSupport,a}))}))}))})),t.addEventListener("close",(e=>{console.info("WebSocket connection closed:",e),o()}))}();let i=[];async function l(e,{oldTag:t,newTag:n},a){let i=0;const s=e.templater.tag.values.map((async(l,s)=>{if(!l||!l.isTemplater)return;const c=function(e,o){const t=e.parentWrap.original,r=t===o.original;if(r)return r;const n=t.toString()===o.original.toString();if(n)return n;return e.parentWrap.compareTo===o.original.toString()}(l.wrapper,t);if(c){const l=e.global.context[o+s];return r(l,n,t,a),void++i}}));await Promise.all(s);const c=e.childTags.map((async e=>{i+=await l(e,{oldTag:t,newTag:n},a)}));return await Promise.all(c),i}})();