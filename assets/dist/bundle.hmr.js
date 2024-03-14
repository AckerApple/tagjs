/******/ var __webpack_modules__ = ({

/***/ "./assets/dist/bundle.js":
/*!*******************************!*\
  !*** ./assets/dist/bundle.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ __webpack_exports__App),
/* harmony export */   IsolatedApp: () => (/* binding */ __webpack_exports__IsolatedApp),
/* harmony export */   hmr: () => (/* binding */ __webpack_exports__hmr)
/* harmony export */ });
/******/ var __webpack_modules__ = ({

/***/ "./src/ContentDebug.component.ts":
/*!***************************************!*\
  !*** ./src/ContentDebug.component.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_268__) => {

__nested_webpack_require_268__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_268__.d(__nested_webpack_exports__, {
/* harmony export */   contentDebug: () => (/* binding */ contentDebug)
/* harmony export */ });
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_268__(/*! taggedjs */ "../main/ts/index.ts");

const contentDebug = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)(() => {
    let renderCount = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(0)(x => [renderCount, renderCount = x]);
    ++renderCount;
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
    <div style="font-size:0.8em">You should see "0" here => "${0}"</div>
    <!--proof you cannot see false values -->
    <div style="font-size:0.8em">You should see "" here => "${false}"</div>
    <div style="font-size:0.8em">You should see "" here => "${null}"</div>
    <div style="font-size:0.8em">You should see "" here => "${undefined}"</div>
    <!--proof you can see true booleans -->
    <div style="font-size:0.8em">You should see "true" here => "${true}"</div>
    <!--proof you can try to use the tagVar syntax -->
    <div style="font-size:0.8em">You should see "${'{'}22${'}'}" here => "{22}"</div>
    <div style="font-size:0.8em">You should see "${'{'}__tagVar0${'}'}" here => "{__tagVar0}"</div>
    <div style="font-size:0.8em">should be a safe string no html "&lt;div&gt;hello&lt;/div&gt;" here => "${'<div>hello</div>'}"</div>
    (render count ${renderCount})
  `;
});


/***/ }),

/***/ "./src/PropsDebug.component.ts":
/*!*************************************!*\
  !*** ./src/PropsDebug.component.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_2019__) => {

__nested_webpack_require_2019__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_2019__.d(__nested_webpack_exports__, {
/* harmony export */   propsDebugMain: () => (/* binding */ propsDebugMain)
/* harmony export */ });
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_2019__(/*! taggedjs */ "../main/ts/index.ts");
/* harmony import */ var _renderCount_component__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_2019__(/*! ./renderCount.component */ "./src/renderCount.component.ts");


const propsDebugMain = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)(() => {
    let renderCount = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(0)(x => [renderCount, renderCount = x]);
    let propsJson = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)({ test: 33, x: 'y' })(x => [propsJson, propsJson = x]);
    let propNumber = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(0)(x => [propNumber, propNumber = x]);
    function propsJsonChanged(event) {
        propsJson = JSON.parse(event.target.value);
        return propsJson;
    }
    ++renderCount;
    const json = JSON.stringify(propsJson, null, 2);
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
    <textarea id="props-debug-textarea" wrap="off" onchange=${propsJsonChanged}
      style="height:200px;font-size:0.6em;width:100%"
      oninit=${() => console.log('text area init')}
    >${json}</textarea>
    
    <pre>${json}</pre>
    <div><small>(renderCount:${renderCount})</small></div>
    
    <div>
      <button id="propsDebug-🥩-0-button" onclick=${() => ++propNumber}>🥩 propNumber ${propNumber}</button>
      <span id="propsDebug-🥩-0-display">${propNumber}</span>
    </div>
    
    <fieldset>
      <legend>child</legend>
      ${propsDebug({
        propNumber,
        propsJson,
        propNumberChange: x => {
            propNumber = x;
        }
    })}
    </fieldset>
    ${(0,_renderCount_component__WEBPACK_IMPORTED_MODULE_1__.renderCountDiv)({ renderCount, name: 'propsDebugMain' })}
  `;
});
const propsDebug = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)(({ propNumber, propsJson, propNumberChange, }) => {
    let renderCount = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(0)(x => [renderCount, renderCount = x]);
    let propNumberChangeCount = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(0)(x => [propNumberChangeCount, propNumberChangeCount = x]);
    (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setProp)(x => [propNumber, propNumber = x]);
    const watchResults = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.watch)([propNumber], () => {
        ++propNumberChangeCount;
    });
    ++renderCount;
    function pasteProps(event) {
        const value = JSON.parse(event.target.value);
        Object.assign(propsJson, value);
    }
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `<!--propsDebug.js-->
    <h3>Props Json</h3>
    <textarea style="font-size:0.6em;height:200px;width:100%" wrap="off" onchange=${pasteProps}>${JSON.stringify(propsJson, null, 2)}</textarea>
    <pre>${JSON.stringify(propsJson, null, 2)}</pre>
    <hr />
    <h3>Props Number</h3>
    
    <textarea style="font-size:0.6em;height:200px;width:100%;color:white;" wrap="off" disabled>${JSON.stringify(watchResults, null, 2)}</textarea>
    
    <div>
      <button id="propsDebug-🥩-1-button" onclick=${() => propNumberChange(++propNumber)}
      >🥩 propNumber ${propNumber}</button>
      <span id="propsDebug-🥩-1-display">${propNumber}</span>
    </div>
    <button
      title="test of increasing render count and nothing else"
      onclick=${() => ++renderCount}
    >renderCount ${renderCount}</button>
    
    <button onclick=${() => ++propNumber}
      title="only changes number locally but if change by parent than that is the number"
    >local set propNumber ${propNumber}</button>
    
    <div><small>(propNumberChangeCount:${propNumberChangeCount})</small></div>
    
    <hr />
    <h3>Fn update test</h3>
    ${propFnUpdateTest({ propNumber, callback: () => {
            ++propNumber;
        } })}
    
    ${(0,_renderCount_component__WEBPACK_IMPORTED_MODULE_1__.renderCountDiv)({ renderCount, name: 'propsDebug' })}
  `;
});
const propFnUpdateTest = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)(({ propNumber, callback, }) => {
    let renderCount = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(0)(x => [renderCount, renderCount = x]);
    ++renderCount;
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
    <button
      title="the count here and within parent increases but not in parent parent"
      onclick=${callback}
    >local & 1-parent increase ${propNumber}</button>
    ${(0,_renderCount_component__WEBPACK_IMPORTED_MODULE_1__.renderCountDiv)({ renderCount, name: 'propFnUpdateTest' })}
  `;
});


/***/ }),

/***/ "./src/animations.ts":
/*!***************************!*\
  !*** ./src/animations.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_7000__) => {

__nested_webpack_require_7000__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_7000__.d(__nested_webpack_exports__, {
/* harmony export */   animateDestroy: () => (/* binding */ animateDestroy),
/* harmony export */   animateInit: () => (/* binding */ animateInit),
/* harmony export */   captureElementPosition: () => (/* binding */ captureElementPosition)
/* harmony export */ });
const staggerBy = 300;
const animateInit = async ({ target, stagger }) => {
    target.style.opacity = 0;
    if (stagger) {
        await wait(stagger * staggerBy);
    }
    target.style.opacity = 1;
    target.classList.add('animate__animated', 'animate__fadeInDown');
};
const animateDestroy = async ({ target, stagger, capturePosition = true }) => {
    /*if(capturePosition) {
      captureElementPosition(target)
    }*/
    if (stagger) {
        setInterval(() => captureElementPosition(target), 10);
        await wait(stagger * staggerBy);
    }
    target.classList.add('animate__animated', 'animate__fadeOutUp');
    await wait(1000); // don't allow remove from stage until animation completed
    target.classList.remove('animate__animated', 'animate__fadeOutUp');
};
function captureElementPosition(element) {
    element.style.zIndex = element.style.zIndex || 1;
    const initialTop = element.offsetTop;
    const initialLeft = element.offsetLeft;
    const fix = () => {
        const toTop = (initialTop - window.scrollY) + 'px';
        const toLeft = (initialLeft - window.scrollX) + 'px';
        const toWidth = (element.clientWidth + (element.offsetWidth - element.clientWidth) + 1) + 'px';
        const toHeight = (element.clientHeight + (element.offsetHeight - element.clientHeight) + 1) + 'px';
        element.style.top = toTop;
        element.style.left = toLeft;
        element.style.width = toWidth;
        element.style.height = toHeight;
        element.style.position = 'fixed';
    };
    fix();
}
/*
export function captureElementPosition(element: any) {
  element.style.zIndex = element.style.zIndex || 1
  const toTop = element.offsetTop + 'px'
  const toLeft = element.offsetLeft + 'px'
  const toWidth = (element.clientWidth + (element.offsetWidth - element.clientWidth) + 1) + 'px'
  const toHeight = (element.clientHeight + (element.offsetHeight - element.clientHeight) + 1) + 'px'

  const fix = () => {
    element.style.top = toTop
    element.style.left = toLeft
    element.style.width = toWidth
    element.style.height = toHeight
    element.style.position = 'fixed'
  }

  // element.style.position = 'fixed'
  // allow other elements that are being removed to have a moment to figure out where they currently sit
  setTimeout(fix, 0)
  // fix()
}
*/
function wait(time) {
    return new Promise((res) => {
        setTimeout(res, time);
    });
}


/***/ }),

/***/ "./src/app.component.ts":
/*!******************************!*\
  !*** ./src/app.component.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_10010__) => {

__nested_webpack_require_10010__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_10010__.d(__nested_webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _attributeDebug_component__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_10010__(/*! ./attributeDebug.component */ "./src/attributeDebug.component.ts");
/* harmony import */ var _ContentDebug_component__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_10010__(/*! ./ContentDebug.component */ "./src/ContentDebug.component.ts");
/* harmony import */ var _tableDebug_component__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_10010__(/*! ./tableDebug.component */ "./src/tableDebug.component.ts");
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_10010__(/*! taggedjs */ "../main/ts/index.ts");
/* harmony import */ var _tagJsDebug__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_10010__(/*! ./tagJsDebug */ "./src/tagJsDebug.ts");
/* harmony import */ var _tagSwitchDebug_component__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_10010__(/*! ./tagSwitchDebug.component */ "./src/tagSwitchDebug.component.ts");
/* harmony import */ var _childTests__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_10010__(/*! ./childTests */ "./src/childTests.ts");
/* harmony import */ var _tests__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_10010__(/*! ./tests */ "./src/tests.ts");
/* harmony import */ var _renderCount_component__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_10010__(/*! ./renderCount.component */ "./src/renderCount.component.ts");
/* harmony import */ var _countersDebug__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_10010__(/*! ./countersDebug */ "./src/countersDebug.ts");
/* harmony import */ var _providerDebug__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_10010__(/*! ./providerDebug */ "./src/providerDebug.ts");











const App = (0,taggedjs__WEBPACK_IMPORTED_MODULE_3__.tag)(() => {
    console.log('render app.ts');
    let _firstState = (0,taggedjs__WEBPACK_IMPORTED_MODULE_3__.setLet)('app first state')(x => [_firstState, _firstState = x]);
    let toggleValue = (0,taggedjs__WEBPACK_IMPORTED_MODULE_3__.setLet)(false)(x => [toggleValue, toggleValue = x]);
    let renderCount = (0,taggedjs__WEBPACK_IMPORTED_MODULE_3__.setLet)(0)(x => [renderCount, renderCount = x]);
    const toggle = () => {
        toggleValue = !toggleValue;
    };
    function runTesting(manual = true) {
        const waitFor = 1000;
        setTimeout(() => {
            console.debug('🏃 Running tests...');
            const result = (0,_tests__WEBPACK_IMPORTED_MODULE_7__.runTests)();
            if (!manual) {
                return;
            }
            if (result) {
                alert('✅ all tests passed');
                return;
            }
            alert('❌ tests failed. See console for more details');
        }, waitFor); // cause delay to be separate from renders
    }
    ++renderCount;
    (0,taggedjs__WEBPACK_IMPORTED_MODULE_3__.onInit)(() => runTesting(false));
    const content = (0,taggedjs__WEBPACK_IMPORTED_MODULE_3__.html) `<!--app.js-->
    <h1 id="h1-app">🏷️ TaggedJs - ${2 + 2}</h1>

    <button id="toggle-test" onclick=${toggle}>toggle test ${toggleValue}</button>
    <button onclick=${runTesting}>run test</button>

    ${(0,_renderCount_component__WEBPACK_IMPORTED_MODULE_8__.renderCountDiv)({ name: 'app', renderCount })}

    <div id="tagDebug-fx-wrap">
      ${(0,_tagJsDebug__WEBPACK_IMPORTED_MODULE_4__.tagDebug)()}

      <div style="display:flex;flex-wrap:wrap;gap:1em">
        <fieldset id="counters" style="flex:2 2 20em">
          <legend>counters</legend>
          ${(0,_countersDebug__WEBPACK_IMPORTED_MODULE_9__.counters)()}
        </fieldset>

        <fieldset id="provider-debug" style="flex:2 2 20em">
          <legend>Provider Debug</legend>
          ${(0,_providerDebug__WEBPACK_IMPORTED_MODULE_10__.providerDebugBase)()}
        </fieldset>

        ${(0,_childTests__WEBPACK_IMPORTED_MODULE_6__.childTests)()}

        <fieldset style="flex:2 2 20em">
          <legend>Attribute Tests</legend>
          ${(0,_attributeDebug_component__WEBPACK_IMPORTED_MODULE_0__.attributeDebug)()}
        </fieldset>

        <fieldset id="content-debug" style="flex:2 2 20em">
          <legend>Content Debug</legend>
          ${(0,_ContentDebug_component__WEBPACK_IMPORTED_MODULE_1__.contentDebug)()}
        </fieldset>

        <fieldset style="flex:2 2 20em">
          <legend>Tag Switching</legend>
          ${(0,_tagSwitchDebug_component__WEBPACK_IMPORTED_MODULE_5__.tagSwitchDebug)()}
        </fieldset>

        <fieldset style="flex:2 2 20em">
          <legend>Table Tests</legend>
          ${(0,_tableDebug_component__WEBPACK_IMPORTED_MODULE_2__.tableDebug)()}
        </fieldset>
      </div>            
    </div>
  `;
    return content;
});


/***/ }),

/***/ "./src/arrayTests.ts":
/*!***************************!*\
  !*** ./src/arrayTests.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_15055__) => {

__nested_webpack_require_15055__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_15055__.d(__nested_webpack_exports__, {
/* harmony export */   arrayTests: () => (/* binding */ arrayTests)
/* harmony export */ });
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_15055__(/*! ./animations */ "./src/animations.ts");
/* harmony import */ var _renderCount_component__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_15055__(/*! ./renderCount.component */ "./src/renderCount.component.ts");
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_15055__(/*! taggedjs */ "../main/ts/index.ts");



const frameCount = 4;
const arrayTests = (0,taggedjs__WEBPACK_IMPORTED_MODULE_2__.tag)(function ArrayTests() {
    const array0 = (0,taggedjs__WEBPACK_IMPORTED_MODULE_2__.set)([]);
    let renderCount = (0,taggedjs__WEBPACK_IMPORTED_MODULE_2__.setLet)(0)(x => [renderCount, renderCount = x]);
    const getNewPerson = () => ({
        name: 'Person ' + array0.length,
        scores: '0,'.repeat(frameCount).split(',').map((_v, index) => ({
            frame: index + 1,
            score: Math.floor(Math.random() * 4) + 1
        }))
    });
    ++renderCount;
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_2__.html) `<!--arrayTests.js-->
    <div style="display:flex;flex-wrap:wrap;gap:1em">
      ${array0.map((item, index) => (0,taggedjs__WEBPACK_IMPORTED_MODULE_2__.html) `
        <div oninit=${_animations__WEBPACK_IMPORTED_MODULE_0__.animateInit} ondestroy=${_animations__WEBPACK_IMPORTED_MODULE_0__.animateDestroy} style="background-color:black;">
          <button onclick=${() => {
        array0.splice(index, 1);
    }}>remove</button>

          <div>
            name:${item.name}
          </div>
          <div>
            index:${index}
          </div>
          
          <div>scores:${item.scores.map((score, playerIndex) => (0,taggedjs__WEBPACK_IMPORTED_MODULE_2__.html) `
            <div style="border:1px solid white;"
              oninit=${_animations__WEBPACK_IMPORTED_MODULE_0__.animateInit} ondestroy=${_animations__WEBPACK_IMPORTED_MODULE_0__.animateDestroy}
            >
              ${scoreData({ score, playerIndex })}-
              <button id=${`score-data-${playerIndex}-${score.frame}-outside`} onclick=${() => ++score.score}>${score.score}</button>
            </div>
          `.key(score))}</div>
          
          <button onclick=${() => {
        array0.splice(index, 1);
    }}>remove</button>
          <button onclick=${() => {
        array0.splice(index, 0, getNewPerson());
    }}>add before</button>
        </div>
      `.key(item))}
    </div>

    <button id="array-test-push-item" onclick=${() => {
        array0.push(getNewPerson());
    }}>push item ${array0.length + 1}</button>

    <button onclick=${() => {
        array0.push(getNewPerson());
        array0.push(getNewPerson());
        array0.push(getNewPerson());
    }}>push 3 items</button>

    <button onclick=${() => {
        array0.push(getNewPerson());
        array0.push(getNewPerson());
        array0.push(getNewPerson());
        array0.push(getNewPerson());
        array0.push(getNewPerson());
        array0.push(getNewPerson());
        array0.push(getNewPerson());
        array0.push(getNewPerson());
        array0.push(getNewPerson());
    }}>push 9 items</button>

    ${array0.length > 0 && (0,taggedjs__WEBPACK_IMPORTED_MODULE_2__.html) `
      <button oninit=${_animations__WEBPACK_IMPORTED_MODULE_0__.animateInit} ondestroy=${_animations__WEBPACK_IMPORTED_MODULE_0__.animateDestroy} onclick=${() => {
        array0.length = 0;
    }}>remove all</button>
    `}

    ${(0,_renderCount_component__WEBPACK_IMPORTED_MODULE_1__.renderCountDiv)({ renderCount, name: 'arrayTests.ts' })}
  `;
});
const scoreData = (0,taggedjs__WEBPACK_IMPORTED_MODULE_2__.tag)(({ score, playerIndex }) => {
    let renderCount = (0,taggedjs__WEBPACK_IMPORTED_MODULE_2__.setLet)(0)(x => [renderCount, renderCount = x]);
    ++renderCount;
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_2__.html) `
    frame:${score.frame}:
    <button
      id=${`score-data-${playerIndex}-${score.frame}-inside`}
      onclick=${() => ++score.score}
    >${score.score}</button>
    <button onclick=${() => ++renderCount}>increase renderCount</button>
    ${(0,_renderCount_component__WEBPACK_IMPORTED_MODULE_1__.renderCountDiv)({ renderCount, name: 'scoreData' + score.frame })}
  `;
});


/***/ }),

/***/ "./src/attributeDebug.component.ts":
/*!*****************************************!*\
  !*** ./src/attributeDebug.component.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_19762__) => {

__nested_webpack_require_19762__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_19762__.d(__nested_webpack_exports__, {
/* harmony export */   attributeDebug: () => (/* binding */ attributeDebug)
/* harmony export */ });
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_19762__(/*! taggedjs */ "../main/ts/index.ts");

const attributeDebug = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)(() => {
    let selected = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)('a')(x => [selected, selected = x]);
    let isOrange = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(true)(x => [isOrange, isOrange = x]);
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
    <input onchange=${(event) => selected = event.target.value} placeholder="a b or c" />
    <select id="select-sample-drop-down">
      ${['a', 'b', 'c'].map(item => (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
        <option value=${item} ${item == selected ? 'selected' : ''}>${item} - ${item == selected ? 'true' : 'false'}</option>
      `.key(item))}
    </select>
    <hr />
    <h3>Special Attributes</h3>
    <div>
      <input type="checkbox" onchange=${(event) => isOrange = event.target.checked} ${isOrange && 'checked'} /> - ${isOrange ? 'true' : 'false'}
    </div>
    <div style="display: flex;flex-wrap:wrap;gap:1em">      
      <div
        style.background-color=${isOrange ? 'orange' : ''}
        style.color=${isOrange ? 'black' : ''}
      >style.background-color=&dollar;{'orange'}</div>
      
      <div
        class.background-orange=${isOrange ? true : false}
        class.text-black=${isOrange ? true : false}
      >class.background-orange=&dollar;{true}</div>
      
      <div class=${isOrange ? 'background-orange text-black' : ''}
      >class=&dollar;{'background-orange text-black'}</div>
      
      <div ${{ class: 'text-white' + (isOrange ? ' background-orange' : '') }}
      >class=&dollar;{'background-orange'} but always white</div>
    </div>
    <style>
      .background-orange {background-color:orange}
      .text-black {color:black}
      .text-white {color:white}
    </style>
  `;
});


/***/ }),

/***/ "./src/childTests.ts":
/*!***************************!*\
  !*** ./src/childTests.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_22114__) => {

__nested_webpack_require_22114__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_22114__.d(__nested_webpack_exports__, {
/* harmony export */   childTests: () => (/* binding */ childTests)
/* harmony export */ });
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_22114__(/*! taggedjs */ "../main/ts/index.ts");
/* harmony import */ var _innerHtmlTests__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_22114__(/*! ./innerHtmlTests */ "./src/innerHtmlTests.ts");
/* harmony import */ var _renderCount_component__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_22114__(/*! ./renderCount.component */ "./src/renderCount.component.ts");



const childContentTest = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)(({ legend, id }, children) => {
    let renderCount = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(0)(x => [renderCount, renderCount = x]);
    let counter = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(0)(x => [counter, counter = x]);
    ++renderCount;
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
    <fieldset id=${id} style="flex:2 2 20em">
      <legend>${legend}</legend>
      ${children}
      <hr />
      <button onclick=${() => ++counter}>increase childContentTest ${counter}</button>
      ${(0,_renderCount_component__WEBPACK_IMPORTED_MODULE_2__.renderCountDiv)({ renderCount, name: 'childContentTest' })}
    </fieldset>
  `;
});
const childTests = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)(() => {
    let renderCount = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(0)(x => [renderCount, renderCount = x]);
    let counter = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(0)(x => [counter, counter = x]);
    ++renderCount;
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
    <fieldset id="children-test" style="flex:2 2 20em">
      <legend>childTests</legend>
      
      ${ /*renderCountDiv(renderCount)}- ${renderCount*/false}
      
      ${(0,_innerHtmlTests__WEBPACK_IMPORTED_MODULE_1__.innerHtmlTest)({}, (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
        <b>Field set body A</b>
        <hr />
        <button id="innerHtmlTest-childTests-button"
          onclick=${() => ++counter}
        >increase childTests inside ${counter}:${renderCount}</button>
        <span id="innerHtmlTest-childTests-display">${counter}</span>
        ${(0,_renderCount_component__WEBPACK_IMPORTED_MODULE_2__.renderCountDiv)({ renderCount, name: 'childTests' })}
      `)}

      ${(0,_innerHtmlTests__WEBPACK_IMPORTED_MODULE_1__.innerHtmlPropsTest)(22, (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
        <b>Field set body B</b>
        <hr />
        <button id="innerHtmlPropsTest-childTests-button"
          onclick=${() => ++counter}
        >increase childTests inside 22 ${counter}</button>
        <span id="innerHtmlPropsTest-childTests-display">${counter}</span>
        ${(0,_renderCount_component__WEBPACK_IMPORTED_MODULE_2__.renderCountDiv)({ renderCount, name: 'innerHtmlPropsTest child' })}
      `)}

      ${ /*childContentTest({legend: 'Inner Test', id:'children-inner-test'}, html`
      ${innerHtmlTest(html`
        <b>Field set body C</b>
      `)}
      
      ${innerHtmlPropsTest(33, html`
        <b>Field set body D</b>
      `)}

      <hr />
      
      <button onclick=${() => ++counter}>increase childTests inside ${counter}</button>
      ${renderCountDiv(renderCount)}
    `)*/false}
      
      <hr />
      <button id="childTests-button"
        onclick=${() => ++counter}
      >increase childTests outside ${counter} - ${renderCount}</button>
      <span id="childTests-display">${counter}</span>
      ${(0,_renderCount_component__WEBPACK_IMPORTED_MODULE_2__.renderCountDiv)({ renderCount, name: 'childTests' })}
    </fieldset>
  `;
});


/***/ }),

/***/ "./src/countersDebug.ts":
/*!******************************!*\
  !*** ./src/countersDebug.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_26099__) => {

__nested_webpack_require_26099__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_26099__.d(__nested_webpack_exports__, {
/* harmony export */   counters: () => (/* binding */ counters)
/* harmony export */ });
/* harmony import */ var _renderCount_component__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_26099__(/*! ./renderCount.component */ "./src/renderCount.component.ts");
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_26099__(/*! taggedjs */ "../main/ts/index.ts");


const counters = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.tag)(() => {
    let counter = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.setLet)(0)(x => [counter, counter = x]);
    let renderCount = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.setLet)(0)(x => [renderCount, renderCount = x]);
    let initCounter = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.setLet)(0)(x => [initCounter, initCounter = x]);
    (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.onInit)(() => {
        ++initCounter;
        console.info('tagJsDebug.js: 👉 i should only ever run once');
    });
    const increaseCounter = () => {
        ++counter;
    };
    ++renderCount; // for debugging
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `<!--counters-->
    <div>Subscriptions:${taggedjs__WEBPACK_IMPORTED_MODULE_1__.Subject.globalSubCount$}</div>
    <button onclick=${() => console.info('subs', taggedjs__WEBPACK_IMPORTED_MODULE_1__.Subject.globalSubs)}>log subs</button>
    <div>initCounter:${initCounter}</div>
    <button id="increase-counter" onclick=${increaseCounter}>counter:${counter}</button>
    <span id="counter-display">${counter}</span>
    <fieldset>
      <legend>inner counter</legend>
      ${innerCounters({ counter, increaseCounter })}
    </fieldset>
    ${(0,_renderCount_component__WEBPACK_IMPORTED_MODULE_0__.renderCountDiv)({ renderCount, name: 'counters' })}
  `;
});
const innerCounters = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.tag)(({ counter, increaseCounter }) => {
    let renderCount = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.setLet)(0)(x => [renderCount, renderCount = x]);
    ++renderCount; // for debugging
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
    <button id="inner-increase-counter" onclick=${increaseCounter}
    >counter:${counter}</button>
    <span id="inner-counter-display">${counter}</span>
    renderCount:${renderCount}
    ${ /*renderCountDiv({renderCount, name: 'inner counters'})*/false}
  `;
});


/***/ }),

/***/ "./src/expect.ts":
/*!***********************!*\
  !*** ./src/expect.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_28747__) => {

__nested_webpack_require_28747__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_28747__.d(__nested_webpack_exports__, {
/* harmony export */   execute: () => (/* binding */ execute),
/* harmony export */   expect: () => (/* binding */ expect),
/* harmony export */   it: () => (/* binding */ it)
/* harmony export */ });
const onlyTests = [];
const tests = [];
function it(label, run) {
    tests.push(() => {
        try {
            run();
            console.debug('✅ ' + label);
        }
        catch (error) {
            console.debug('❌ ' + label);
            throw error;
        }
    });
}
it.only = (label, run) => {
    onlyTests.push(() => {
        try {
            run();
            console.debug('✅ ' + label);
        }
        catch (error) {
            console.debug('❌ ' + label);
            throw error;
        }
    });
};
function execute() {
    if (onlyTests.length) {
        return runTests(onlyTests);
    }
    return runTests(tests);
}
function runTests(tests) {
    tests.forEach(test => test());
}
function expect(expected) {
    return {
        toBeDefined: () => {
            if (expected !== undefined && expected !== null) {
                return;
            }
            const message = `Expected ${JSON.stringify(expected)} to be defined`;
            console.error(message, { expected });
            throw new Error(message);
        },
        toBe: (received, customMessage) => {
            if (expected === received) {
                return;
            }
            const message = customMessage || `Expected ${typeof (expected)} ${JSON.stringify(expected)} to be ${typeof (received)} ${JSON.stringify(received)}`;
            console.error(message, { received, expected });
            throw new Error(message);
        }
    };
}


/***/ }),

/***/ "./src/innerHtmlTests.ts":
/*!*******************************!*\
  !*** ./src/innerHtmlTests.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_30767__) => {

__nested_webpack_require_30767__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_30767__.d(__nested_webpack_exports__, {
/* harmony export */   innerHtmlPropsTest: () => (/* binding */ innerHtmlPropsTest),
/* harmony export */   innerHtmlTest: () => (/* binding */ innerHtmlTest)
/* harmony export */ });
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_30767__(/*! taggedjs */ "../main/ts/index.ts");
/* harmony import */ var _renderCount_component__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_30767__(/*! ./renderCount.component */ "./src/renderCount.component.ts");


const innerHtmlTest = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)((_props, children) => {
    let renderCount = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(0)(x => [renderCount, renderCount = x]);
    let counter = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(0)(x => [counter, counter = x]);
    ++renderCount;
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `<!--innerHtmlTests.js-->
    <fieldset id="innerHtmlTests-1">
      <legend>no props test</legend>
      <div>${children}</div>
      <div>isSubjectInstance:${(0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.isSubjectInstance)(children)}</div>
      <div>isSubjectTagArray:${(0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.isTagArray)(children.value)}</div>
      <button id="innerHtmlTest-counter-button"
      onclick=${() => ++counter}>increase innerHtmlTest ${counter}</button>
      <span id="innerHtmlTest-counter-display">${counter}</span>
      ${(0,_renderCount_component__WEBPACK_IMPORTED_MODULE_1__.renderCountDiv)({ renderCount, name: 'innerHtmlTest' })}
    </fieldset>
  `;
});
const innerHtmlPropsTest = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)((x, children) => {
    let renderCount = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(0)(x => [renderCount, renderCount = x]);
    let counter = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(0)(x => [counter, counter = x]);
    ++renderCount;
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `<!--innerHtmlTests.js-->
    <fieldset id="innerHtmlTests-2">
      <legend>innerHTML Props: ${x}</legend>
      ${children}
      <button id="innerHtmlPropsTest-button" onclick=${() => ++counter}
      >increase innerHtmlPropsTest ${counter}</button>
      <span id="innerHtmlPropsTest-display">${counter}</span>
      ${ /*renderCountDiv(renderCount)*/false}
    </fieldset>
  `;
});


/***/ }),

/***/ "./src/intervalDebug.ts":
/*!******************************!*\
  !*** ./src/intervalDebug.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_33413__) => {

__nested_webpack_require_33413__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_33413__.d(__nested_webpack_exports__, {
/* harmony export */   intervalTester0: () => (/* binding */ intervalTester0),
/* harmony export */   intervalTester1: () => (/* binding */ intervalTester1)
/* harmony export */ });
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_33413__(/*! taggedjs */ "../main/ts/index.ts");

const test0interval = 3000;
const test1interval = 6000;
const intervalTester0 = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)(() => {
    let intervalCount = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(0)(x => [intervalCount, intervalCount = x]);
    let intervalId = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(undefined)(x => [intervalId, intervalId = x]);
    let intervalId2 = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(undefined)(x => [intervalId2, intervalId2 = x]);
    let renderCounter = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(0)(x => [renderCounter, renderCounter = x]);
    let currentTime = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(0)(x => [currentTime, currentTime = x]);
    const callback = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.getCallback)();
    const increase = () => ++intervalCount;
    console.log('intervalId', intervalId);
    const startInterval = () => {
        console.info('interval test 0 started...');
        trackTime();
        intervalId = setInterval(callback(() => {
            increase();
        }), test0interval);
    };
    const stopInterval = () => {
        clearInterval(intervalId);
        clearInterval(intervalId2);
        intervalId = undefined;
        intervalId2 = undefined;
        console.info('🛑 interval test 0 stopped');
    };
    function trackTime() {
        currentTime = 0;
        intervalId2 = setInterval(callback(() => {
            currentTime = currentTime + 500;
            if (currentTime >= test0interval) {
                currentTime = 0;
                console.log('interval tick');
            }
        }), 500);
        console.log('▶️ interval started');
    }
    const toggle = () => {
        if (intervalId || intervalId2) {
            stopInterval();
            return;
        }
        startInterval();
    };
    const delayIncrease = () => setTimeout(callback(() => {
        currentTime = currentTime + 200;
    }), 1000);
    (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.onInit)(startInterval);
    (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.onDestroy)(stopInterval);
    ++renderCounter;
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `<!--intervalDebug.js-->
    <div>interval type 1 at ${test0interval}ms</div>
    intervalId: ${intervalId}
    <button type="button" onclick=${increase}>${intervalCount}:${renderCounter}</button>
    <input type="range" min="0" max=${test0interval} step="1" value=${currentTime} />
    <div>
      --${currentTime}--
    </div>
    <button type="button" onclick=${toggle}
      style.background-color=${intervalId || intervalId2 ? 'red' : 'green'}
    >start/stop</button>
    <button type="button" onclick=${delayIncrease}>delay increase currentTime</button>
  `;
});
const intervalTester1 = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)(() => {
    let intervalCount = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(0)(x => [intervalCount, intervalCount = x]);
    let intervalId = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(undefined)(x => [intervalId, intervalId = x]);
    let intervalId2 = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(undefined)(x => [intervalId2, intervalId2 = x]);
    let renderCounter = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(0)(x => [renderCounter, renderCounter = x]);
    let currentTime = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(0)(x => [currentTime, currentTime = x]);
    const callback = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.getCallback)();
    const increase = () => ++intervalCount;
    function trackTime() {
        currentTime = 0;
        intervalId2 = setInterval(callback(() => {
            currentTime = currentTime + 500;
            if (currentTime >= test1interval) {
                currentTime = 0;
            }
        }), 500);
    }
    const destroy = () => {
        clearInterval(intervalId);
        clearInterval(intervalId2);
        intervalId = undefined;
        intervalId2 = undefined;
        console.info('interval 1 stopped');
    };
    function toggleInterval() {
        if (intervalId) {
            return destroy();
        }
        console.info('interval test 1 started...');
        trackTime();
        intervalId = setInterval(callback(() => {
            increase();
            console.info('slow interval ran');
        }), test1interval);
    }
    (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.onInit)(toggleInterval);
    (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.onDestroy)(toggleInterval);
    ++renderCounter;
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
    <div>interval type 2 with ${test1interval}ms</div>
    intervalId: ${intervalId}
    <button type="button" onclick=${increase}>${intervalCount}:${renderCounter}</button>
    <input type="range" min="0" max=${test1interval} step="1" value=${currentTime} />
    <div>
      --${currentTime}--
    </div>
    <button type="button" onclick=${toggleInterval}
      style.background-color=${intervalId ? 'red' : 'green'}
    >start/stop</button>
  `;
});


/***/ }),

/***/ "./src/isolatedApp.ts":
/*!****************************!*\
  !*** ./src/isolatedApp.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_39074__) => {

__nested_webpack_require_39074__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_39074__.d(__nested_webpack_exports__, {
/* harmony export */   IsolatedApp: () => (/* binding */ IsolatedApp)
/* harmony export */ });
/* harmony import */ var _childTests__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_39074__(/*! ./childTests */ "./src/childTests.ts");
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_39074__(/*! taggedjs */ "../main/ts/index.ts");
/* harmony import */ var _tagSwitchDebug_component__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_39074__(/*! ./tagSwitchDebug.component */ "./src/tagSwitchDebug.component.ts");
/* harmony import */ var _PropsDebug_component__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_39074__(/*! ./PropsDebug.component */ "./src/PropsDebug.component.ts");




const IsolatedApp = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.tag)(() => {
    const stateTest = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.set)('isolated-app-state');
    // const component = childTests() as any
    // const template = component.wrapper().getTemplate()
    const view = 'tagSwitchDebug';
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `<!--isolatedApp.js-->
    <h1 id="app">🏷️ TaggedJs - isolated</h1>

    <div id="tagDebug-fx-wrap">
      <div style="display:flex;flex-wrap:wrap;gap:1em">
        ${view === 'props' && (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
          <fieldset style="flex:2 2 20em">
            <legend>propsDebugMain</legend>
            ${(0,_PropsDebug_component__WEBPACK_IMPORTED_MODULE_3__.propsDebugMain)()}
          </fieldset>
        `}

        ${ /*
    <fieldset style="flex:2 2 20em">
      <legend>providerDebugBase</legend>
      ${providerDebugBase()}
    </fieldset>
    */false}

        ${view === 'tagSwitchDebug' && (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
          <fieldset style="flex:2 2 20em">
            <legend>tagSwitchDebug</legend>
            ${(0,_tagSwitchDebug_component__WEBPACK_IMPORTED_MODULE_2__.tagSwitchDebug)()}
          </fieldset>
        `}

        ${ /*
    <fieldset style="flex:2 2 20em">
      <legend>arrays</legend>
      ${arrayTests()}
    </fieldset>
    */false}

        ${ /*
    <fieldset style="flex:2 2 20em">
      <legend>counters</legend>
      ${counters()}
    </fieldset>
    */false}

        ${view === 'child' && (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
          <fieldset style="flex:2 2 20em">
            <legend>Children Tests</legend>
            ${(0,_childTests__WEBPACK_IMPORTED_MODULE_0__.childTests)()}
          </fieldset>
        `}

        ${ /*
      <textarea style="font-size:0.6em;min-width:50vw;height:400px">${ template.string }</textarea>
      <textarea style="font-size:0.6em;min-width:50vw;height:400px">${ JSON.stringify(template, null, 2) }</textarea>
      */false}
      </div>
    </div>
  `;
});


/***/ }),

/***/ "./src/providerDebug.ts":
/*!******************************!*\
  !*** ./src/providerDebug.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_42185__) => {

__nested_webpack_require_42185__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_42185__.d(__nested_webpack_exports__, {
/* harmony export */   TagDebugProvider: () => (/* binding */ TagDebugProvider),
/* harmony export */   providerDebugBase: () => (/* binding */ providerDebugBase)
/* harmony export */ });
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_42185__(/*! ./animations */ "./src/animations.ts");
/* harmony import */ var _renderCount_component__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_42185__(/*! ./renderCount.component */ "./src/renderCount.component.ts");
/* harmony import */ var _tagJsDebug__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_42185__(/*! ./tagJsDebug */ "./src/tagJsDebug.ts");
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_42185__(/*! taggedjs */ "../main/ts/index.ts");




class TagDebugProvider {
    tagDebug = 0;
}
const providerDebugBase = (0,taggedjs__WEBPACK_IMPORTED_MODULE_3__.tag)(() => {
    const provider = taggedjs__WEBPACK_IMPORTED_MODULE_3__.providers.create(_tagJsDebug__WEBPACK_IMPORTED_MODULE_2__.tagDebugProvider);
    const providerClass = taggedjs__WEBPACK_IMPORTED_MODULE_3__.providers.create(TagDebugProvider);
    const test = (0,taggedjs__WEBPACK_IMPORTED_MODULE_3__.setLet)('props debug base');
    let propCounter = (0,taggedjs__WEBPACK_IMPORTED_MODULE_3__.setLet)(0)(x => [propCounter, propCounter = x]);
    let renderCount = (0,taggedjs__WEBPACK_IMPORTED_MODULE_3__.setLet)(0)(x => [renderCount, renderCount = x]);
    ++renderCount;
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_3__.html) `
    <div>
      <strong>testValue</strong>:${provider.test}
    </div>
    <div>
      <strong>upperTest</strong>:${provider.upper?.test || '?'}
    </div>
    <div>
      <strong>providerClass</strong>:${providerClass.tagDebug || '?'}
    </div>

    <div style="display:flex;gap:1em">
      <button id="increase-provider-🍌-0-button" onclick=${() => ++provider.test}
      >🍌 increase provider.test ${provider.test}</button>
      <span id="increase-provider-🍌-0-display">${provider.test}</span>
      
      <button id="increase-provider-upper-🌹-0-button" onclick=${() => ++provider.upper.test}
      >🌹 increase upper.provider.test ${provider.upper.test}</button>
      
      <span id="increase-provider-upper-🌹-0-display">${provider.upper.test}</span>
      <button id="increase-provider-🍀-0-button" onclick=${() => ++providerClass.tagDebug}
      >🍀 increase provider class ${providerClass.tagDebug}</button>
      <span id="increase-provider-🍀-0-display">${providerClass.tagDebug}</span>

      <button id="increase-prop-🐷-0-button" onclick=${() => ++propCounter}
      >🐷 increase propCounter ${propCounter}</button>
      <span id="increase-prop-🐷-0-display">${propCounter}</span>
    </div>

    <hr />
    ${providerDebug({
        propCounter,
        propCounterChange: x => {
            propCounter = x;
        }
    })}
    <hr />
    renderCount outer:${renderCount}
    ${(0,_renderCount_component__WEBPACK_IMPORTED_MODULE_1__.renderCountDiv)({ renderCount, name: 'providerDebugBase' })}
  `;
});
const providerDebug = (0,taggedjs__WEBPACK_IMPORTED_MODULE_3__.tag)(({ propCounter, propCounterChange, }) => {
    const provider = taggedjs__WEBPACK_IMPORTED_MODULE_3__.providers.inject(_tagJsDebug__WEBPACK_IMPORTED_MODULE_2__.tagDebugProvider);
    const upperProvider = taggedjs__WEBPACK_IMPORTED_MODULE_3__.providers.inject(_tagJsDebug__WEBPACK_IMPORTED_MODULE_2__.upperTagDebugProvider);
    const providerClass = taggedjs__WEBPACK_IMPORTED_MODULE_3__.providers.inject(TagDebugProvider);
    const test = (0,taggedjs__WEBPACK_IMPORTED_MODULE_3__.set)('provider debug inner test');
    let showProProps = (0,taggedjs__WEBPACK_IMPORTED_MODULE_3__.setLet)(false)(x => [showProProps, showProProps = x]);
    let renderCount = (0,taggedjs__WEBPACK_IMPORTED_MODULE_3__.setLet)(0)(x => [renderCount, renderCount = x]);
    // let propCounter: number = setLet(0)(x => [propCounter, propCounter = x])
    ++renderCount;
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_3__.html) `<!--providerDebug.js-->
    <button id="increase-provider-🍌-1-button" onclick=${() => ++provider.test}
    >🍌 increase provider.test ${provider.test}</button>
    <span id="increase-provider-🍌-1-display">${provider.test}</span>
    
    <button id="increase-provider-upper-🌹-1-button" onclick=${() => ++upperProvider.test}
    >🌹 increase upper.provider.test ${upperProvider.test}</button>
        
    <span id="increase-provider-upper-🌹-1-display">${upperProvider.test}</span>
    <button id="increase-provider-🍀-1-button" onclick=${() => ++providerClass.tagDebug}
    >🍀 increase provider class ${providerClass.tagDebug}</button>
    <span id="increase-provider-🍀-1-display">${providerClass.tagDebug}</span>

    <div>
      <button id="increase-prop-🐷-1-button" onclick=${() => propCounterChange(++propCounter)}
      >🐷 increase propCounter ${propCounter}</button>
      <span id="increase-prop-🐷-1-display">${propCounter}</span>
    </div>

    <button onclick=${() => showProProps = !showProProps}
    >${showProProps ? 'hide' : 'show'} provider as props</button>
    
    ${showProProps && (0,taggedjs__WEBPACK_IMPORTED_MODULE_3__.html) `
      <div oninit=${_animations__WEBPACK_IMPORTED_MODULE_0__.animateInit} ondestroy=${_animations__WEBPACK_IMPORTED_MODULE_0__.animateDestroy}>
        <hr />
        <h3>Provider as Props</h3>
        ${testProviderAsProps(providerClass)}
      </div>
    `}

    <hr />
    renderCount inner:${renderCount}
    ${(0,_renderCount_component__WEBPACK_IMPORTED_MODULE_1__.renderCountDiv)({ renderCount, name: 'providerDebugInner' })}
  `;
});
const testProviderAsProps = (0,taggedjs__WEBPACK_IMPORTED_MODULE_3__.tag)((providerClass) => {
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_3__.html) `<!--providerDebug.js@TestProviderAsProps-->
    <textarea wrap="off" rows="20" style="width:100%;font-size:0.6em">${JSON.stringify(providerClass, null, 2)}</textarea>
  `;
});


/***/ }),

/***/ "./src/renderCount.component.ts":
/*!**************************************!*\
  !*** ./src/renderCount.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_48490__) => {

__nested_webpack_require_48490__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_48490__.d(__nested_webpack_exports__, {
/* harmony export */   renderCountDiv: () => (/* binding */ renderCountDiv)
/* harmony export */ });
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_48490__(/*! taggedjs */ "../main/ts/index.ts");

const renderCountDiv = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)(({ renderCount, name }) => (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `<div><small>(${name} render count ${renderCount})</small></div>`);


/***/ }),

/***/ "./src/tableDebug.component.ts":
/*!*************************************!*\
  !*** ./src/tableDebug.component.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_49299__) => {

__nested_webpack_require_49299__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_49299__.d(__nested_webpack_exports__, {
/* harmony export */   tableDebug: () => (/* binding */ tableDebug)
/* harmony export */ });
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_49299__(/*! taggedjs */ "../main/ts/index.ts");

const tableDebug = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)(() => {
    let showCell = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(true)(x => [showCell, showCell = x]);
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
    <div style="max-height: 800px;overflow-y: scroll;">
      <table cellPadding=${5} cellSpacing=${5} border="1">
        <thead style="position: sticky;top: 0;">
          <tr>
            <th>hello</th>
            <th>hello</th>
            ${showCell && (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
              <td>hello 2 thead cell</td>
            `}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>world</td>
            <td>world</td>
            ${showCell && (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
              <td>world 2 tbody cell</td>
            `}
          </tr>
        </tbody>
      </table>
    </div>
  `;
});


/***/ }),

/***/ "./src/tagJsDebug.ts":
/*!***************************!*\
  !*** ./src/tagJsDebug.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_50771__) => {

__nested_webpack_require_50771__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_50771__.d(__nested_webpack_exports__, {
/* harmony export */   tagDebug: () => (/* binding */ tagDebug),
/* harmony export */   tagDebugProvider: () => (/* binding */ tagDebugProvider),
/* harmony export */   upperTagDebugProvider: () => (/* binding */ upperTagDebugProvider)
/* harmony export */ });
/* harmony import */ var _PropsDebug_component__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_50771__(/*! ./PropsDebug.component */ "./src/PropsDebug.component.ts");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_50771__(/*! ./animations */ "./src/animations.ts");
/* harmony import */ var _arrayTests__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_50771__(/*! ./arrayTests */ "./src/arrayTests.ts");
/* harmony import */ var _intervalDebug__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_50771__(/*! ./intervalDebug */ "./src/intervalDebug.ts");
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_50771__(/*! taggedjs */ "../main/ts/index.ts");
/* harmony import */ var _renderCount_component__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_50771__(/*! ./renderCount.component */ "./src/renderCount.component.ts");






function tagDebugProvider() {
    const upper = taggedjs__WEBPACK_IMPORTED_MODULE_4__.providers.create(upperTagDebugProvider);
    return {
        upper,
        test: 0
    };
}
function upperTagDebugProvider() {
    return {
        name: 'upperTagDebugProvider',
        test: 0
    };
}
const tagDebug = (0,taggedjs__WEBPACK_IMPORTED_MODULE_4__.tag)(() => {
    let _firstState = (0,taggedjs__WEBPACK_IMPORTED_MODULE_4__.setLet)('tagJsDebug.js')(x => [_firstState, _firstState = x]);
    let showIntervals = (0,taggedjs__WEBPACK_IMPORTED_MODULE_4__.setLet)(false)(x => [showIntervals, showIntervals = x]);
    let renderCount = (0,taggedjs__WEBPACK_IMPORTED_MODULE_4__.setLet)(0)(x => [renderCount, renderCount = x]);
    ++renderCount;
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_4__.html) `<!-- tagDebug.js -->
    <h3 id="debugging">Debugging</h3>
    ${(0,_renderCount_component__WEBPACK_IMPORTED_MODULE_5__.renderCountDiv)({ renderCount, name: 'tagJsDebug' })}

    <div style="display:flex;flex-wrap:wrap;gap:1em">
      <fieldset style="flex:4 4 40em">
        <legend>arrays</legend>
        ${(0,_arrayTests__WEBPACK_IMPORTED_MODULE_2__.arrayTests)()}
      </fieldset>
    
      <fieldset id="debug-intervals" style="flex:2 2 20em">
        <legend>
          Interval Testing
        </legend>

        <button
          onclick=${() => showIntervals = !showIntervals}
        >hide/show</button>

        ${showIntervals && (0,taggedjs__WEBPACK_IMPORTED_MODULE_4__.html) `
          <div oninit=${_animations__WEBPACK_IMPORTED_MODULE_1__.animateInit} ondestroy=${_animations__WEBPACK_IMPORTED_MODULE_1__.animateDestroy}>
            <div>${(0,_intervalDebug__WEBPACK_IMPORTED_MODULE_3__.intervalTester0)()}</div>
            <hr />
            <div>${(0,_intervalDebug__WEBPACK_IMPORTED_MODULE_3__.intervalTester1)()}</div>
          </div>
        `}
      </fieldset>

      <fieldset id="props-debug" style="flex:2 2 20em">
        <legend>Props Debug</legend>
        ${(0,_PropsDebug_component__WEBPACK_IMPORTED_MODULE_0__.propsDebugMain)()}
      </fieldset>
    </div>
  `;
});


/***/ }),

/***/ "./src/tagSwitchDebug.component.ts":
/*!*****************************************!*\
  !*** ./src/tagSwitchDebug.component.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_54389__) => {

__nested_webpack_require_54389__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_54389__.d(__nested_webpack_exports__, {
/* harmony export */   arraySwitching: () => (/* binding */ arraySwitching),
/* harmony export */   tag1: () => (/* binding */ tag1),
/* harmony export */   tag2: () => (/* binding */ tag2),
/* harmony export */   tag3: () => (/* binding */ tag3),
/* harmony export */   tagSwitchDebug: () => (/* binding */ tagSwitchDebug),
/* harmony export */   ternaryPropTest: () => (/* binding */ ternaryPropTest)
/* harmony export */ });
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_54389__(/*! taggedjs */ "../main/ts/index.ts");
/* harmony import */ var _renderCount_component__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_54389__(/*! ./renderCount.component */ "./src/renderCount.component.ts");


const tagSwitchDebug = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)(() => {
    let selectedTag = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(null)(x => [selectedTag, selectedTag = x]);
    let renderCount = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(0)(x => [renderCount, renderCount = x]);
    function changeSelectedTag(event) {
        selectedTag = event.target.value;
        if (selectedTag === 'undefined') {
            selectedTag = undefined;
        }
        if (selectedTag === 'null') {
            selectedTag = null;
        }
    }
    let tagOutput = 'select tag below';
    switch (selectedTag) {
        case null:
            tagOutput = 'null, select tag below';
            break;
        case '1':
            tagOutput = tag1({ title: 'value switch' });
            break;
        case '2':
            tagOutput = tag2({ title: 'value switch' });
            break;
        case '3':
            tagOutput = tag3({ title: 'value switch' });
            break;
    }
    let tagOutput2 = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `<div id="select-tag-above">select tag above</div>`;
    console.log('selectedTag', selectedTag);
    switch (selectedTag) {
        case null:
            tagOutput2 = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `<div id="select-tag-above">null, select tag above</div>`;
            break;
        case '1':
            tagOutput2 = tag1({ title: 'tag switch' });
            break;
        case '2':
            tagOutput2 = tag2({ title: 'tag switch' });
            break;
        case '3':
            tagOutput2 = tag3({ title: 'tag switch' });
            break;
    }
    ++renderCount;
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
    <div>
      selectedTag: ${selectedTag}
    </div>
    
    <select id="tag-switch-dropdown" onchange=${changeSelectedTag}>
	    <option></option>
      <!-- TODO: implement selected attribute --->
	    <option value="undefined" ${selectedTag === undefined ? { selected: true } : {}}>undefined</option>
	    <option value="null" ${selectedTag === null ? { selected: true } : {}}>null</option>
	    <option value="1" ${selectedTag === '1' ? { selected: true } : {}}>tag 1</option>
	    <option value="2" ${selectedTag === '2' ? { selected: true } : {}}>tag 2</option>
	    <option value="3" ${selectedTag === '3' ? { selected: true } : {}}>tag 3</option>
    </select>

    <div style="display:flex;gap:1em;">
      <div style="border:1px solid blue;flex-grow:1">
        <h3>Test 1 - string | Tag</h3>
        <div>${tagOutput}</div>
      </div>
      
      <div style="border:1px solid blue;flex-grow:1">
        <h3>Test 2 - Tag</h3>
        <div>${tagOutput2}</div>
      </div>
      
      <div style="border:1px solid blue;flex-grow:1">
        <h3>Test 3 - ternary (only 1 or 3 shows)</h3>
        <div>${selectedTag === '3' ? tag3({ title: 'ternary simple' }) : tag1({ title: 'ternary simple' })}</div>
      </div>
      
      <div style="border:1px solid blue;flex-grow:1">
        <h3>Test 3.2 - ternary via prop (only 1 or 3 shows)</h3>
        <div>${ternaryPropTest({ selectedTag })}</div>
      </div>

      <div style="border:1px solid red;flex-grow:1">
        <h3>Test 4 - arraySwitching</h3>
        <div>${arraySwitching({ selectedTag })}</div>
      </div>
    </div>
    ${(0,_renderCount_component__WEBPACK_IMPORTED_MODULE_1__.renderCountDiv)({ renderCount, name: 'tagSwitchDebug' })}
  `;
});
const ternaryPropTest = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)(({ selectedTag }) => {
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
  <div>${selectedTag === '3' ? tag3({ title: 'ternaryPropTest' }) : tag1({ title: 'ternaryPropTest' })}</div>
  `;
});
const tag1 = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)(({ title }) => {
    let counter = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(0)(x => [counter, counter = x]);
    let renderCount = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(0)(x => [renderCount, renderCount = x]);
    ++renderCount;
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
    <div style="border:1px solid orange;">
      <div id="tagSwitch-1-hello">Hello 1 ${title} World</div>
      <button onclick=${() => ++counter}>increase ${counter}</button>
      ${(0,_renderCount_component__WEBPACK_IMPORTED_MODULE_1__.renderCountDiv)({ renderCount, name: 'tag1' })}
    </div>
  `;
});
const tag2 = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)(({ title }) => {
    let counter = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(0)(x => [counter, counter = x]);
    let renderCount = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(0)(x => [renderCount, renderCount = x]);
    ++renderCount;
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
    <div style="border:1px solid orange;">
      <div id="tagSwitch-2-hello">Hello 2 ${title} World</div>
      <button onclick=${() => ++counter}>increase ${counter}</button>
      ${(0,_renderCount_component__WEBPACK_IMPORTED_MODULE_1__.renderCountDiv)({ renderCount, name: 'tag1' })}
    </div>
  `;
});
const tag3 = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)(({ title }) => {
    let counter = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(0)(x => [counter, counter = x]);
    let renderCount = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.setLet)(0)(x => [renderCount, renderCount = x]);
    ++renderCount;
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
    <div style="border:1px solid orange;">
      <div id="tagSwitch-3-hello">Hello 3 ${title} World</div>
      <button onclick=${() => ++counter}>increase ${counter}</button>
      ${(0,_renderCount_component__WEBPACK_IMPORTED_MODULE_1__.renderCountDiv)({ renderCount, name: 'tag1' })}
    </div>
  `;
});
const arraySwitching = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)(({ selectedTag }) => {
    switch (selectedTag) {
        case undefined:
            return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `its an undefined value`;
        case null:
            return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `its a null value`;
        case '1':
            return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `${['a'].map(x => (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `${tag1({ title: `array ${selectedTag} ${x}` })}`.key(x))}`;
        case '2':
            return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `${['b', 'c'].map(x => (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `${tag2({ title: `array ${selectedTag} ${x}` })}`.key(x))}`;
        case '3':
            return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `${['d', 'e', 'f'].map(x => (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `${tag3({ title: `array ${selectedTag} ${x}` })}`.key(x))}`;
    }
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `nothing to show for in arrays`;
});


/***/ }),

/***/ "./src/tests.ts":
/*!**********************!*\
  !*** ./src/tests.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_62256__) => {

__nested_webpack_require_62256__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_62256__.d(__nested_webpack_exports__, {
/* harmony export */   runTests: () => (/* binding */ runTests)
/* harmony export */ });
/* harmony import */ var _expect__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_62256__(/*! ./expect */ "./src/expect.ts");

function runTests() {
    (0,_expect__WEBPACK_IMPORTED_MODULE_0__.it)('elements exists', () => {
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(document.getElementById('h1-app')).toBeDefined();
        const toggleTest = document.getElementById('toggle-test');
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(toggleTest).toBeDefined();
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(toggleTest?.innerText).toBe('toggle test');
        toggleTest?.click();
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(toggleTest?.innerText).toBe('toggle test true');
        toggleTest?.click();
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(toggleTest?.innerText).toBe('toggle test');
        const propsTextarea = document.getElementById('props-debug-textarea');
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(propsTextarea.value.replace(/\s/g, '')).toBe(`{"test":33,"x":"y"}`);
    });
    (0,_expect__WEBPACK_IMPORTED_MODULE_0__.it)('counters increase', () => {
        testCounterElements('#increase-counter', '#counter-display');
        // testCounterElements('#increase-gateway-count', '#display-gateway-count')
        testCounterElements('#innerHtmlTest-counter-button', '#innerHtmlTest-counter-display');
        testCounterElements('#innerHtmlPropsTest-button', '#innerHtmlPropsTest-display');
    });
    (0,_expect__WEBPACK_IMPORTED_MODULE_0__.it)('testDuelCounterElements', () => {
        testDuelCounterElements(['#childTests-button', '#childTests-display'], ['#innerHtmlPropsTest-childTests-button', '#innerHtmlPropsTest-childTests-display']);
        testDuelCounterElements(['#childTests-button', '#childTests-display'], ['#innerHtmlTest-childTests-button', '#innerHtmlTest-childTests-display']);
        testDuelCounterElements(['#increase-provider-🍌-0-button', '#increase-provider-🍌-0-display'], ['#increase-provider-🍌-1-button', '#increase-provider-🍌-1-display']);
        testDuelCounterElements(['#increase-provider-upper-🌹-0-button', '#increase-provider-upper-🌹-0-display'], ['#increase-provider-upper-🌹-1-button', '#increase-provider-upper-🌹-1-display']);
        testDuelCounterElements(['#increase-provider-🍀-0-button', '#increase-provider-🍀-0-display'], ['#increase-provider-🍀-1-button', '#increase-provider-🍀-1-display']);
        testDuelCounterElements(['#propsDebug-🥩-0-button', '#propsDebug-🥩-0-display'], ['#propsDebug-🥩-1-button', '#propsDebug-🥩-1-display']);
    });
    (0,_expect__WEBPACK_IMPORTED_MODULE_0__.it)('provider debug', () => {
        testDuelCounterElements(['#increase-prop-🐷-0-button', '#increase-prop-🐷-0-display'], ['#increase-prop-🐷-1-button', '#increase-prop-🐷-1-display']);
    });
    (0,_expect__WEBPACK_IMPORTED_MODULE_0__.it)('tagSwitching', () => {
        console.log('0 - 0');
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(elementCount('#select-tag-above')).toBe(1, 'Expected select-tag-above element to be defined');
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(elementCount('#tag-switch-dropdown')).toBe(1, 'Expected one #tag-switch-dropdown');
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(elementCount('#tagSwitch-1-hello')).toBe(2, 'Expected two #tagSwitch-1-hello elements');
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(elementCount('#tagSwitch-2-hello')).toBe(0);
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(elementCount('#tagSwitch-3-hello')).toBe(0);
        console.log('0 - 1');
        const dropdown = document.getElementById('tag-switch-dropdown');
        dropdown.value = "1";
        dropdown.onchange({ target: dropdown });
        console.log('0 - 2');
        expectElementCount('#tagSwitch-1-hello', 5);
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(elementCount('#tagSwitch-2-hello')).toBe(0);
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(elementCount('#tagSwitch-3-hello')).toBe(0);
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(elementCount('#select-tag-above')).toBe(0);
        dropdown.value = "2";
        dropdown.onchange({ target: dropdown });
        expectElementCount('#tagSwitch-1-hello', 2);
        expectElementCount('#tagSwitch-2-hello', 4);
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(elementCount('#tagSwitch-3-hello')).toBe(0);
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(elementCount('#select-tag-above')).toBe(0);
        dropdown.value = "3";
        dropdown.onchange({ target: dropdown });
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(elementCount('#tagSwitch-1-hello')).toBe(0, 'Expected no hello 1s');
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(elementCount('#tagSwitch-2-hello')).toBe(0);
        expectElementCount('#tagSwitch-3-hello', 7);
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(elementCount('#select-tag-above')).toBe(0);
        dropdown.value = "";
        dropdown.onchange({ target: dropdown });
        expectElementCount('#select-tag-above', 1);
        expectElementCount('#tag-switch-dropdown', 1);
        expectElementCount('#tagSwitch-1-hello', 2);
        expectElementCount('#tagSwitch-2-hello', 0);
        expectElementCount('#tagSwitch-3-hello', 0);
    });
    (0,_expect__WEBPACK_IMPORTED_MODULE_0__.it)('array testing', () => {
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(elementCount('#array-test-push-item')).toBe(1);
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(elementCount('#score-data-0-1-inside')).toBe(0);
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(elementCount('#score-data-0-1-outside')).toBe(0);
        document.getElementById('array-test-push-item')?.click();
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(elementCount('#score-data-0-1-inside')).toBe(1);
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(elementCount('#score-data-0-1-outside')).toBe(1);
        const insideElm = document.getElementById('score-data-0-1-inside');
        let indexValue = insideElm?.innerText;
        const outsideElm = document.getElementById('score-data-0-1-outside');
        const outsideValue = outsideElm?.innerText;
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(indexValue).toBe(outsideValue);
        insideElm?.click();
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(insideElm?.innerText).toBe(outsideElm?.innerText);
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(indexValue).toBe((Number(insideElm?.innerText) - 1).toString());
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(indexValue).toBe((Number(outsideElm?.innerText) - 1).toString());
        outsideElm?.click();
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(insideElm?.innerText).toBe(outsideElm?.innerText);
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(indexValue).toBe((Number(insideElm?.innerText) - 2).toString());
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(indexValue).toBe((Number(outsideElm?.innerText) - 2).toString());
    });
    try {
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.execute)();
        console.info('✅ all tests passed');
        return true;
    }
    catch (error) {
        console.error('❌ tests failed: ' + error.message, error);
        return false;
    }
}
function elementCount(selector) {
    return document.querySelectorAll(selector).length;
}
function testDuelCounterElements([button0, display0], // button, display
[button1, display1]) {
    let query = expectElementCount(display0, 1);
    const display0Element = query[0];
    const ip0 = display0Element.innerText;
    testCounterElements(button0, display0);
    query = expectElementCount(display1, 1);
    let display1Element = query[0];
    let ip1Check = display1Element.innerText;
    const value = (Number(ip0) + 2).toString();
    (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(ip1Check).toBe(value, `Expected second increase provider to be increased to ${ip0} but got ${ip1Check}`);
    testCounterElements(button1, display1);
    query = expectElementCount(display1, 1);
    display1Element = query[0];
    ip1Check = display1Element.innerText;
    (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(ip1Check).toBe((Number(ip0) + 4).toString(), `Expected ${display1} innerText to be ${Number(ip0) + 4} but instead it is ${ip1Check}`);
}
/** increases counter by two */
function testCounterElements(counterButtonId, counterDisplayId, { elementCountExpected } = {
    elementCountExpected: 1
}) {
    // const getByIndex = (selector: string, index: number) => document.querySelectorAll(selector)[index] as unknown as HTMLElement[]
    const increaseCounters = document.querySelectorAll(counterButtonId);
    const counterDisplays = document.querySelectorAll(counterDisplayId);
    (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(increaseCounters.length).toBe(elementCountExpected, `Expected ${counterButtonId} to be ${elementCountExpected} elements but is instead ${increaseCounters.length}`);
    (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(counterDisplays.length).toBe(elementCountExpected, `Expected ${counterDisplayId} to be ${elementCountExpected} elements but is instead ${counterDisplays.length}`);
    increaseCounters.forEach((increaseCounter, index) => {
        const counterDisplay = counterDisplays[index];
        // const counterDisplay = getByIndex(index)
        let counterValue = Number(counterDisplay?.innerText);
        increaseCounter?.click();
        let oldCounterValue = counterValue + 1;
        counterValue = Number(counterDisplay?.innerText);
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(oldCounterValue).toBe(counterValue, `Expected element(s) ${counterDisplayId} to be value ${oldCounterValue} but is instead ${counterValue}`);
        increaseCounter?.click();
        counterValue = Number(counterDisplay?.innerText);
        ++oldCounterValue;
        (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(oldCounterValue).toBe(counterValue, `Expected element(s) ${counterDisplayId} to increase value to ${oldCounterValue} but is instead ${counterValue}`);
    });
}
function expectElementCount(query, count, message) {
    //  const found = elementCount(query)
    const elements = document.querySelectorAll(query);
    const found = elements.length;
    message = message || `Expected ${count} elements to match query ${query} but found ${found}`;
    (0,_expect__WEBPACK_IMPORTED_MODULE_0__.expect)(found).toBe(count, message);
    return elements;
}


/***/ }),

/***/ "../main/ts/ElementTargetEvent.interface.ts":
/*!**************************************************!*\
  !*** ../main/ts/ElementTargetEvent.interface.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_73327__) => {

__nested_webpack_require_73327__.r(__nested_webpack_exports__);



/***/ }),

/***/ "../main/ts/Subject.ts":
/*!*****************************!*\
  !*** ../main/ts/Subject.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_73601__) => {

__nested_webpack_require_73601__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_73601__.d(__nested_webpack_exports__, {
/* harmony export */   Subject: () => (/* binding */ Subject)
/* harmony export */ });
class Subject {
    value;
    isSubject = true;
    subscribers = [];
    // unsubcount = 0 // 🔬 testing
    constructor(value) {
        this.value = value;
    }
    subscribe(callback) {
        this.subscribers.push(callback);
        SubjectClass.globalSubs.push(callback); // 🔬 testing
        const countSubject = SubjectClass.globalSubCount$;
        SubjectClass.globalSubCount$.set(countSubject.value + 1);
        const unsubscribe = () => {
            unsubscribe.unsubscribe();
        };
        // Return a function to unsubscribe from the BehaviorSubject
        unsubscribe.unsubscribe = () => {
            removeSubFromArray(this.subscribers, callback);
            removeSubFromArray(SubjectClass.globalSubs, callback); // 🔬 testing
            SubjectClass.globalSubCount$.set(countSubject.value - 1);
            // any double unsubscribes will be ignored
            unsubscribe.unsubscribe = () => undefined;
        };
        return unsubscribe;
    }
    set(value) {
        this.value = value;
        // Notify all subscribers with the new value
        this.subscribers.forEach((callback) => {
            callback.value = value;
            callback(value);
        });
    }
    next = this.set;
}
function removeSubFromArray(subscribers, callback) {
    const index = subscribers.indexOf(callback);
    if (index !== -1) {
        subscribers.splice(index, 1);
    }
}
const SubjectClass = Subject;
SubjectClass.globalSubs = []; // 🔬 for testing
SubjectClass.globalSubCount$ = new Subject(); // for ease of debugging
SubjectClass.globalSubCount$.set(0);


/***/ }),

/***/ "../main/ts/Tag.class.ts":
/*!*******************************!*\
  !*** ../main/ts/Tag.class.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_75629__) => {

__nested_webpack_require_75629__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_75629__.d(__nested_webpack_exports__, {
/* harmony export */   ArrayValueNeverSet: () => (/* binding */ ArrayValueNeverSet),
/* harmony export */   Tag: () => (/* binding */ Tag),
/* harmony export */   escapeSearch: () => (/* binding */ escapeSearch),
/* harmony export */   escapeVariable: () => (/* binding */ escapeVariable),
/* harmony export */   variablePrefix: () => (/* binding */ variablePrefix)
/* harmony export */ });
/* harmony import */ var _tagRunner__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_75629__(/*! ./tagRunner */ "../main/ts/tagRunner.ts");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_75629__(/*! ./render */ "../main/ts/render.ts");
/* harmony import */ var _interpolateElement__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_75629__(/*! ./interpolateElement */ "../main/ts/interpolateElement.ts");
/* harmony import */ var _interpolateTemplate__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_75629__(/*! ./interpolateTemplate */ "../main/ts/interpolateTemplate.ts");
/* harmony import */ var _elementDestroyCheck_function__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_75629__(/*! ./elementDestroyCheck.function */ "../main/ts/elementDestroyCheck.function.ts");
/* harmony import */ var _updateExistingValue_function__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_75629__(/*! ./updateExistingValue.function */ "../main/ts/updateExistingValue.function.ts");
/* harmony import */ var _processNewValue_function__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_75629__(/*! ./processNewValue.function */ "../main/ts/processNewValue.function.ts");
/* harmony import */ var _checkDestroyPrevious_function__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_75629__(/*! ./checkDestroyPrevious.function */ "../main/ts/checkDestroyPrevious.function.ts");








const variablePrefix = '__tagvar';
const escapeVariable = '--' + variablePrefix + '--';
const prefixSearch = new RegExp(variablePrefix, 'g');
const escapeSearch = new RegExp(escapeVariable, 'g');
class ArrayValueNeverSet {
    isArrayValueNeverSet = true;
}
class Tag {
    strings;
    values;
    isTag = true;
    clones = []; // elements on document. Needed at destroy process to know what to destroy
    cloneSubs = []; // subscriptions created by clones
    children = []; // tags on me
    tagSupport;
    // only present when a child of a tag
    ownerTag;
    // insertBefore?: Element
    appElement; // only seen on this.getAppElement().appElement
    // present only when an array. Populated by this.key()
    arrayValue = new ArrayValueNeverSet();
    constructor(strings, values) {
        this.strings = strings;
        this.values = values;
    }
    /** Used for array, such as array.map(), calls aka array.map(x => html``.key(x)) */
    key(arrayValue) {
        this.arrayValue = arrayValue;
        return this;
    }
    async destroy(options = {
        stagger: 0,
        byParent: false, // Only destroy clones of direct children
    }) {
        // the isComponent check maybe able to be removed
        const isComponent = this.tagSupport ? true : false;
        if (isComponent) {
            (0,_tagRunner__WEBPACK_IMPORTED_MODULE_0__.runBeforeDestroy)(this.tagSupport, this);
        }
        this.destroySubscriptions();
        if (this.ownerTag) {
            this.ownerTag.children = this.ownerTag.children.filter(child => child !== this);
        }
        if (!options.byParent) {
            const { stagger, promise } = this.destroyClones(options);
            options.stagger = stagger;
            if (promise) {
                await promise;
            }
        }
        else {
            this.destroyClones();
        }
        const promises = this.children.map(kid => kid.destroy({ stagger: 0, byParent: true }));
        this.children.length = 0;
        await Promise.all(promises);
        return options.stagger;
    }
    destroySubscriptions() {
        this.cloneSubs.forEach(cloneSub => cloneSub.unsubscribe());
        this.cloneSubs.length = 0;
    }
    destroyClones({ stagger } = {
        stagger: 0,
    }) {
        //const promises = this.clones.reverse().map(
        const promises = this.clones.map(clone => this.checkCloneRemoval(clone, stagger)).filter(x => x); // only return promises
        this.clones.length = 0; // tag maybe used for something else
        if (promises.length) {
            return { promise: Promise.all(promises), stagger };
        }
        return { stagger };
    }
    checkCloneRemoval(clone, stagger) {
        let promise;
        const customElm = clone;
        if (customElm.ondestroy) {
            promise = (0,_elementDestroyCheck_function__WEBPACK_IMPORTED_MODULE_4__.elementDestroyCheck)(customElm, stagger);
        }
        const next = () => {
            clone.parentNode?.removeChild(clone);
            const ownerTag = this.ownerTag;
            if (ownerTag) {
                // Sometimes my clones were first registered to my owner, remove them from owner
                ownerTag.clones = ownerTag.clones.filter(compareClone => compareClone !== clone);
            }
        };
        if (promise instanceof Promise) {
            return promise.then(next);
        }
        else {
            next();
        }
        return promise;
    }
    updateByTag(tag) {
        this.updateConfig(tag.strings, tag.values);
        this.tagSupport.templater = tag.tagSupport.templater;
        this.tagSupport.propsConfig = { ...tag.tagSupport.propsConfig };
        this.tagSupport.newest = tag;
        this.tagSupport.templater.newest = tag;
    }
    lastTemplateString = undefined; // used to compare templates for updates
    updateConfig(strings, values) {
        this.strings = strings;
        this.updateValues(values);
    }
    getTemplate() {
        const string = this.strings.map((string, index) => {
            const safeString = string.replace(prefixSearch, escapeVariable);
            const endString = safeString + (this.values.length > index ? `{${variablePrefix}${index}}` : '');
            // const trimString = index === 0 || index === this.strings.length-1 ? endString.trim() : endString
            const trimString = endString.replace(/>\s*/g, '>').replace(/\s*</g, '<');
            return trimString;
        }).join('');
        const interpolation = (0,_interpolateElement__WEBPACK_IMPORTED_MODULE_2__.interpolateString)(string);
        this.lastTemplateString = interpolation.string;
        return {
            interpolation,
            // string,
            string: interpolation.string,
            strings: this.strings,
            values: this.values,
            context: this.tagSupport?.memory.context || {},
        };
    }
    isLikeTag(tag) {
        const { string } = tag.getTemplate();
        // TODO: most likely remove?
        if (!this.lastTemplateString) {
            throw new Error('no template here');
        }
        const stringMatched = string === this.lastTemplateString;
        if (!stringMatched || tag.values.length !== this.values.length) {
            return false;
        }
        const allVarsMatch = tag.values.every((value, index) => {
            const compareTo = this.values[index];
            const isFunctions = value instanceof Function && compareTo instanceof Function;
            if (isFunctions) {
                const stringMatch = value.toString() === compareTo.toString();
                if (stringMatch) {
                    return true;
                }
                return false;
            }
            return true;
        });
        if (allVarsMatch) {
            return true;
        }
        return false;
    }
    update() {
        return this.updateContext(this.tagSupport.memory.context);
    }
    updateValues(values) {
        this.values = values;
        return this.updateContext(this.tagSupport.memory.context);
    }
    updateContext(context) {
        const seenContext = [];
        this.strings.map((_string, index) => {
            const variableName = variablePrefix + index;
            const hasValue = this.values.length > index;
            const value = this.values[index];
            // is something already there?
            const existing = variableName in context;
            seenContext.push(variableName);
            if (existing) {
                const existing = context[variableName];
                return (0,_updateExistingValue_function__WEBPACK_IMPORTED_MODULE_5__.updateExistingValue)(existing, value, this);
            }
            // 🆕 First time values below
            (0,_processNewValue_function__WEBPACK_IMPORTED_MODULE_6__.processNewValue)(hasValue, value, context, variableName, this);
        });
        // Support reduction in context
        Object.entries(context).forEach(([key, subject]) => {
            if (seenContext.includes(key)) {
                return;
            }
            throw new Error('we here');
            const destroyed = (0,_checkDestroyPrevious_function__WEBPACK_IMPORTED_MODULE_7__.checkDestroyPrevious)(subject, undefined);
        });
        return context;
    }
    getAppElement() {
        let tag = this;
        while (tag.ownerTag) {
            tag = tag.ownerTag;
        }
        return tag;
    }
    /** Used during HMR only where static content itself could have been edited */
    rebuild() {
        // const insertBefore = this.insertBefore
        const insertBefore = this.tagSupport.templater.insertBefore;
        if (!insertBefore) {
            const err = new Error('Cannot rebuild. Previous insertBefore element is not defined on tag');
            err.tag = this;
            throw err;
        }
        this.buildBeforeElement(insertBefore, {
            forceElement: true,
            counts: { added: 0, removed: 0 },
        });
    }
    buildBeforeElement(insertBefore, options = {
        forceElement: false,
        counts: { added: 0, removed: 0 },
    }) {
        // this.insertBefore = insertBefore
        this.tagSupport.templater.insertBefore = insertBefore;
        const context = this.update();
        const template = this.getTemplate();
        const elementContainer = document.createElement('div');
        elementContainer.id = 'tag-temp-holder';
        // render content with a first child that we can know is our first element
        elementContainer.innerHTML = `<template id="temp-template-tag-wrap">${template.string}</template>`;
        // Search/replace innerHTML variables but don't interpolate tag components just yet
        const { clones, tagComponents } = (0,_interpolateElement__WEBPACK_IMPORTED_MODULE_2__.interpolateElement)(elementContainer, context, template, this, // ownerTag,
        {
            forceElement: options.forceElement,
            counts: options.counts
        });
        // remove old clones
        if (this.clones.length) {
            this.clones.forEach(clone => this.checkCloneRemoval(clone, 0));
        }
        afterInterpolateElement(elementContainer, insertBefore, this, // ownerTag
        [], context, options);
        // this.clones.push(...clones)
        // Any tag components that were found should be processed AFTER the owner processes its elements. Avoid double processing of elements attributes like (oninit)=${}
        let isForceElement = options.forceElement;
        tagComponents.forEach(tagComponent => {
            const preClones = this.clones.map(clone => clone);
            (0,_interpolateTemplate__WEBPACK_IMPORTED_MODULE_3__.subscribeToTemplate)(tagComponent.insertBefore, // temporary,
            tagComponent.subject, tagComponent.ownerTag, options.counts, { isForceElement });
            afterInterpolateElement(elementContainer, insertBefore, this, preClones, context, options);
            // remove component clones from ownerTag as they will belong to the components they live on
            /*
            if( preClones.length ) {
              this.clones = this.clones.filter(cloneFilter => !preClones.find(clone => clone === cloneFilter))
            }
            */
        });
    }
}
function afterInterpolateElement(container, insertBefore, ownerTag, preClones, context, options) {
    const clones = (0,_render__WEBPACK_IMPORTED_MODULE_1__.buildClones)(container, insertBefore);
    ownerTag.clones.push(...clones);
    clones.forEach(clone => (0,_interpolateTemplate__WEBPACK_IMPORTED_MODULE_3__.afterElmBuild)(clone, options, context, ownerTag));
    return clones;
}


/***/ }),

/***/ "../main/ts/Tag.utils.ts":
/*!*******************************!*\
  !*** ../main/ts/Tag.utils.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_88367__) => {

__nested_webpack_require_88367__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_88367__.d(__nested_webpack_exports__, {
/* harmony export */   getSubjectFunction: () => (/* binding */ getSubjectFunction),
/* harmony export */   setValueRedraw: () => (/* binding */ setValueRedraw)
/* harmony export */ });
/* harmony import */ var _ValueSubject__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_88367__(/*! ./ValueSubject */ "../main/ts/ValueSubject.ts");
/* harmony import */ var _bindSubjectCallback_function__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_88367__(/*! ./bindSubjectCallback.function */ "../main/ts/bindSubjectCallback.function.ts");


function getSubjectFunction(value, tag) {
    return new _ValueSubject__WEBPACK_IMPORTED_MODULE_0__.ValueSubject((0,_bindSubjectCallback_function__WEBPACK_IMPORTED_MODULE_1__.bindSubjectCallback)(value, tag));
}
function setValueRedraw(templater, // latest tag function to call for rendering
existing, ownerTag) {
    // redraw does not communicate to parent
    templater.redraw = () => {
        const existingTag = templater.oldest || existing.tag;
        const tagSupport = existingTag?.tagSupport || templater.tagSupport;
        const { retag } = templater.renderWithSupport(tagSupport, existingTag, ownerTag);
        existing.set(templater);
        return retag;
    };
}


/***/ }),

/***/ "../main/ts/TagSupport.class.ts":
/*!**************************************!*\
  !*** ../main/ts/TagSupport.class.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_89946__) => {

__nested_webpack_require_89946__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_89946__.d(__nested_webpack_exports__, {
/* harmony export */   TagSupport: () => (/* binding */ TagSupport)
/* harmony export */ });
/* harmony import */ var _deepFunctions__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_89946__(/*! ./deepFunctions */ "../main/ts/deepFunctions.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_89946__(/*! ./isInstance */ "../main/ts/isInstance.ts");
/* harmony import */ var _set_function__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_89946__(/*! ./set.function */ "../main/ts/set.function.ts");
/* harmony import */ var _templater_utils__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_89946__(/*! ./templater.utils */ "../main/ts/templater.utils.ts");




class TagSupport {
    templater;
    children;
    propsConfig;
    memory = {
        context: {}, // populated after reading interpolated.values array converted to an object {variable0, variable:1}
        state: {
            newest: [],
        },
        providers: [],
        /** Indicator of re-rending. Saves from double rending something already rendered */
        renderCount: 0,
    };
    updateState() {
        this.memory.state.newest.forEach(newest => {
            newest.lastValue = (0,_set_function__WEBPACK_IMPORTED_MODULE_2__.getStateValue)(newest);
        });
    }
    constructor(templater, children, // children tags passed in as arguments
    props) {
        this.templater = templater;
        this.children = children;
        const latestCloned = (0,_templater_utils__WEBPACK_IMPORTED_MODULE_3__.alterProps)(props, templater);
        this.propsConfig = {
            latest: props,
            latestCloned, // assume its HTML children and then detect
            clonedProps: latestCloned, // maybe duplicate
            lastClonedKidValues: children.value.map(kid => {
                const cloneValues = cloneValueArray(kid.values);
                return cloneValues;
            })
        };
        // if the latest props are not HTML children, then clone the props for later render cycles to compare
        if (!(0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagInstance)(props)) {
            this.propsConfig.latestCloned = (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(latestCloned);
            this.propsConfig.clonedProps = this.propsConfig.latestCloned;
        }
    }
    // TODO: these below may not be in use
    oldest;
    newest;
    mutatingRender() {
        const message = 'Tag function "render()" was called in sync but can only be called async';
        console.error(message, { tagSupport: this });
        throw new Error(message);
    } // loaded later and only callable async
    render() {
        ++this.memory.renderCount;
        return this.mutatingRender();
    } // ensure this function still works even during deconstructing
}
function cloneValueArray(values) {
    return values.map((value) => {
        const tag = value;
        if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagInstance)(tag)) {
            return cloneValueArray(tag.values);
        }
        if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagComponent)(tag)) {
            const tagComponent = tag;
            return (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(tagComponent.tagSupport.propsConfig.latestCloned);
        }
        if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagArray)(tag)) {
            return cloneValueArray(tag);
        }
        return (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(value);
    });
}


/***/ }),

/***/ "../main/ts/ValueSubject.ts":
/*!**********************************!*\
  !*** ../main/ts/ValueSubject.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_93802__) => {

__nested_webpack_require_93802__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_93802__.d(__nested_webpack_exports__, {
/* harmony export */   ValueSubject: () => (/* binding */ ValueSubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_93802__(/*! ./Subject */ "../main/ts/Subject.ts");

class ValueSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject {
    value;
    constructor(value) {
        super(value);
        this.value = value;
    }
    subscribe(callback) {
        const unsubscribe = super.subscribe(callback);
        // Call the callback immediately with the current value
        callback(this.value);
        return unsubscribe;
    }
}


/***/ }),

/***/ "../main/ts/bindSubjectCallback.function.ts":
/*!**************************************************!*\
  !*** ../main/ts/bindSubjectCallback.function.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_94829__) => {

__nested_webpack_require_94829__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_94829__.d(__nested_webpack_exports__, {
/* harmony export */   bindSubjectCallback: () => (/* binding */ bindSubjectCallback),
/* harmony export */   runTagCallback: () => (/* binding */ runTagCallback)
/* harmony export */ });
/** File largely responsible for reacting to element events, such as onclick */
function bindSubjectCallback(value, tag) {
    // Is this children? No override needed
    if (value.isChildOverride) {
        return value;
    }
    const subjectFunction = (element, args) => runTagCallback(value, tag, element, args);
    // link back to original. Mostly used for <div oninit ondestroy> animations
    subjectFunction.tagFunction = value;
    return subjectFunction;
}
function runTagCallback(value, tag, bindTo, args) {
    const tagSupport = tag.tagSupport;
    const renderCount = tagSupport ? tagSupport.memory.renderCount : 0;
    const method = value.bind(bindTo);
    const callbackResult = method(...args);
    const sameRenderCount = renderCount === tagSupport.memory.renderCount;
    if (tagSupport && !sameRenderCount) {
        return; // already rendered
    }
    tagSupport.render();
    if (callbackResult instanceof Promise) {
        return callbackResult.then(() => {
            tagSupport.render();
            return 'promise-no-data-ever';
        });
    }
    // Caller always expects a Promise
    return 'no-data-ever';
}


/***/ }),

/***/ "../main/ts/checkDestroyPrevious.function.ts":
/*!***************************************************!*\
  !*** ../main/ts/checkDestroyPrevious.function.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_96593__) => {

__nested_webpack_require_96593__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_96593__.d(__nested_webpack_exports__, {
/* harmony export */   checkDestroyPrevious: () => (/* binding */ checkDestroyPrevious),
/* harmony export */   destroyArrayTag: () => (/* binding */ destroyArrayTag),
/* harmony export */   destroyTagMemory: () => (/* binding */ destroyTagMemory)
/* harmony export */ });
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_96593__(/*! ./isInstance */ "../main/ts/isInstance.ts");
/* harmony import */ var _isLikeTags_function__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_96593__(/*! ./isLikeTags.function */ "../main/ts/isLikeTags.function.ts");


function checkDestroyPrevious(existing, // existing.value is the old value
newValue) {
    const existingSubArray = existing;
    const wasArray = existingSubArray.lastArray;
    // no longer an array
    if (wasArray && !(0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagArray)(newValue)) {
        wasArray.forEach(({ tag }) => destroyArrayTag(tag, { added: 0, removed: 0 }));
        delete existing.lastArray;
        return 1;
    }
    const tagSubject = existing;
    const existingTag = tagSubject.tag;
    // no longer tag or component?
    if (existingTag) {
        const isValueTag = (0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagInstance)(newValue);
        const isSubjectTag = (0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagInstance)(existing.value);
        if (isSubjectTag && isValueTag) {
            const newTag = newValue;
            if (!(0,_isLikeTags_function__WEBPACK_IMPORTED_MODULE_1__.isLikeTags)(newTag, existingTag)) {
                destroyTagMemory(existingTag, tagSubject);
                return 2;
            }
            return false;
        }
        const isValueTagComponent = (0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagComponent)(newValue);
        if (isValueTagComponent) {
            return false; // its still a tag component
        }
        // destroy old component, value is not a component
        destroyTagMemory(existingTag, tagSubject);
        return 3;
    }
    const displaySubject = existing;
    const hasLastValue = 'lastValue' in displaySubject;
    const lastValue = displaySubject.lastValue; // TODO: we maybe able to use displaySubject.value and remove concept of lastValue
    // was simple value but now something bigger
    if (hasLastValue && lastValue !== newValue) {
        destroySimpleValue(displaySubject.template, displaySubject);
        return 4;
    }
    return false;
}
function destroyTagMemory(existingTag, existingSubject) {
    delete existingSubject.tag;
    delete existingSubject.tagSupport;
    existingTag.destroy();
}
function destroyArrayTag(tag, counts) {
    /*
    tag.children.forEach(child => child.destroy({
      stagger: counts.removed++,
      // byParent: false
      // byParent: true,
    }))
    */
    // tag.destroyClones({stagger:counts.removed++})
    tag.destroy({
        stagger: counts.removed++,
        // byParent: false
        // byParent: true,
    });
}
function destroySimpleValue(template, subject) {
    const clone = subject.clone;
    const parent = clone.parentNode;
    // put the template back down
    parent.insertBefore(template, clone);
    parent.removeChild(clone);
    delete subject.clone;
    delete subject.lastValue;
    // subject.template = template
}


/***/ }),

/***/ "../main/ts/deepFunctions.ts":
/*!***********************************!*\
  !*** ../main/ts/deepFunctions.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_100241__) => {

__nested_webpack_require_100241__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_100241__.d(__nested_webpack_exports__, {
/* harmony export */   deepClone: () => (/* binding */ deepClone),
/* harmony export */   deepEqual: () => (/* binding */ deepEqual)
/* harmony export */ });
function deepClone(obj) {
    return makeDeepClone(obj, new WeakMap());
}
function makeDeepClone(obj, visited) {
    // If obj is a primitive type or null, return it directly
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    // If obj is already visited, return the cloned reference
    if (visited.has(obj)) {
        return visited.get(obj);
    }
    // Handle special cases like Date and RegExp
    if (obj instanceof Date) {
        return new Date(obj);
    }
    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }
    // Create an empty object or array with the same prototype
    const clone = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
    // Register the cloned object to avoid cyclic references
    visited.set(obj, clone);
    // Clone each property or element of the object or array
    if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            clone[i] = makeDeepClone(obj[i], visited);
        }
    }
    else {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                clone[key] = makeDeepClone(obj[key], visited);
            }
        }
    }
    return clone;
}
function deepEqual(obj1, obj2) {
    return isDeepEqual(obj1, obj2, new WeakMap());
}
function isDeepEqual(obj1, obj2, visited) {
    if (obj1 === obj2 || isSameFunctions(obj1, obj2)) {
        return true;
    }
    if (typeof obj1 !== 'object' ||
        typeof obj2 !== 'object' ||
        obj1 === null ||
        obj2 === null) {
        return false;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    // If obj is already visited, return the cloned reference
    if (visited.has(obj1)) {
        return true;
    }
    // Register the cloned object to avoid cyclic references
    visited.set(obj1, 0);
    for (const key of keys1) {
        const keyFound = keys2.includes(key);
        if (!keyFound || !isDeepEqual(obj1[key], obj2[key], visited)) {
            /*
            if(isSameFunctions(obj1[key], obj2[key])) {
              continue
            }
            */
            return false;
        }
    }
    // Check if obj1 and obj2 are both arrays
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        if (obj1.length !== obj2.length) {
            return false;
        }
        for (let i = 0; i < obj1.length; i++) {
            if (!isDeepEqual(obj1[i], obj2[i], visited)) {
                return false;
            }
        }
    }
    else if (Array.isArray(obj1) || Array.isArray(obj2)) {
        // One is an array, and the other is not
        return false;
    }
    return true;
}
function isSameFunctions(fn0, fn1) {
    const bothFunction = fn0 instanceof Function && fn1 instanceof Function;
    return bothFunction && fn0.toString() === fn1.toString();
}


/***/ }),

/***/ "../main/ts/elementDestroyCheck.function.ts":
/*!**************************************************!*\
  !*** ../main/ts/elementDestroyCheck.function.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_103743__) => {

__nested_webpack_require_103743__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_103743__.d(__nested_webpack_exports__, {
/* harmony export */   elementDestroyCheck: () => (/* binding */ elementDestroyCheck)
/* harmony export */ });
function elementDestroyCheck(nextSibling, stagger) {
    const onDestroyDoubleWrap = nextSibling.ondestroy;
    if (!onDestroyDoubleWrap) {
        return;
    }
    const onDestroyWrap = onDestroyDoubleWrap.tagFunction;
    if (!onDestroyWrap) {
        return;
    }
    const onDestroy = onDestroyWrap.tagFunction;
    if (!onDestroy) {
        return;
    }
    const event = { target: nextSibling, stagger };
    return onDestroy(event);
}


/***/ }),

/***/ "../main/ts/elementInitCheck.ts":
/*!**************************************!*\
  !*** ../main/ts/elementInitCheck.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_104674__) => {

__nested_webpack_require_104674__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_104674__.d(__nested_webpack_exports__, {
/* harmony export */   elementInitCheck: () => (/* binding */ elementInitCheck)
/* harmony export */ });
function elementInitCheck(nextSibling, counts) {
    const onInitDoubleWrap = nextSibling.oninit;
    if (!onInitDoubleWrap) {
        return counts.added;
    }
    const onInitWrap = onInitDoubleWrap.tagFunction;
    if (!onInitWrap) {
        return counts.added;
    }
    const onInit = onInitWrap.tagFunction;
    if (!onInit) {
        return counts.added;
    }
    const event = { target: nextSibling, stagger: counts.added };
    onInit(event);
    return ++counts.added;
}


/***/ }),

/***/ "../main/ts/errors.ts":
/*!****************************!*\
  !*** ../main/ts/errors.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_105598__) => {

__nested_webpack_require_105598__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_105598__.d(__nested_webpack_exports__, {
/* harmony export */   ArrayNoKeyError: () => (/* binding */ ArrayNoKeyError),
/* harmony export */   StateMismatchError: () => (/* binding */ StateMismatchError),
/* harmony export */   TagError: () => (/* binding */ TagError)
/* harmony export */ });
class TagError extends Error {
    details;
    constructor(message, errorCode, details = {}) {
        super(message);
        this.name = TagError.name;
        this.details = { ...details, errorCode };
    }
}
class ArrayNoKeyError extends TagError {
    constructor(message, details) {
        super(message, 'array-no-key-error', details);
        this.name = ArrayNoKeyError.name;
    }
}
class StateMismatchError extends TagError {
    constructor(message, details) {
        super(message, 'state-mismatch-error', details);
        this.name = StateMismatchError.name;
    }
}


/***/ }),

/***/ "../main/ts/getCallback.ts":
/*!*********************************!*\
  !*** ../main/ts/getCallback.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_106791__) => {

__nested_webpack_require_106791__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_106791__.d(__nested_webpack_exports__, {
/* harmony export */   getCallback: () => (/* binding */ getCallback)
/* harmony export */ });
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_106791__(/*! ./setUse.function */ "../main/ts/setUse.function.ts");
/* harmony import */ var _set_function__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_106791__(/*! ./set.function */ "../main/ts/set.function.ts");


let getCallback = () => (callback) => () => {
    throw new Error('The real callback function was called and that should never occur');
};
(0,_setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse)({
    beforeRender: (tagSupport) => initMemory(tagSupport),
    beforeRedraw: (tagSupport) => initMemory(tagSupport),
    // afterRender: (tagSupport: TagSupport) => {},
});
function updateState(stateFrom, stateTo) {
    stateFrom.forEach((state, index) => {
        const fromValue = (0,_set_function__WEBPACK_IMPORTED_MODULE_1__.getStateValue)(state);
        const callback = stateTo[index].callback;
        if (callback) {
            callback(fromValue); // set the value
        }
        stateTo[index].lastValue = fromValue; // record the value
    });
}
function initMemory(tagSupport) {
    getCallback = () => {
        const oldState = _setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse.memory.stateConfig.array;
        const callbackMaker = (callback) => {
            const trigger = (...args) => triggerStateUpdate(tagSupport, callback, oldState, ...args);
            return trigger;
        };
        return callbackMaker;
    };
}
function triggerStateUpdate(tagSupport, callback, oldState, ...args) {
    const state = tagSupport.memory.state;
    const newest = state.newest;
    // ensure that the oldest has the latest values first
    updateState(newest, oldState);
    // run the callback
    const promise = callback(...args);
    // send the oldest state changes into the newest
    updateState(oldState, newest);
    tagSupport.render();
    // TODO: turn back on below
    if (promise instanceof Promise) {
        promise.finally(() => {
            // send the oldest state changes into the newest
            updateState(oldState, newest);
            tagSupport.render();
        });
    }
}


/***/ }),

/***/ "../main/ts/hasTagSupportChanged.function.ts":
/*!***************************************************!*\
  !*** ../main/ts/hasTagSupportChanged.function.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_109435__) => {

__nested_webpack_require_109435__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_109435__.d(__nested_webpack_exports__, {
/* harmony export */   hasKidsChanged: () => (/* binding */ hasKidsChanged),
/* harmony export */   hasPropChanges: () => (/* binding */ hasPropChanges),
/* harmony export */   hasTagSupportChanged: () => (/* binding */ hasTagSupportChanged)
/* harmony export */ });
/* harmony import */ var _deepFunctions__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_109435__(/*! ./deepFunctions */ "../main/ts/deepFunctions.ts");

function hasTagSupportChanged(oldTagSupport, newTagSupport) {
    if (oldTagSupport === newTagSupport) {
        throw new Error('something here');
    }
    const oldProps = oldTagSupport.propsConfig.latest;
    const latestProps = newTagSupport.propsConfig.latest;
    const oldClonedProps = oldTagSupport.propsConfig.latestCloned;
    const propsChanged = hasPropChanges(latestProps, oldClonedProps, oldProps);
    // if no changes detected, no need to continue to rendering further tags
    if (propsChanged) {
        return true;
    }
    const kidsChanged = hasKidsChanged(oldTagSupport, newTagSupport);
    // we already know props didn't change and if kids didn't either, than don't render
    return kidsChanged;
}
function hasPropChanges(props, // natural props
pastCloneProps, // previously cloned props
compareToProps) {
    const isCommonEqual = props === undefined && props === compareToProps;
    if (isCommonEqual) {
        return false;
    }
    let castedProps = props;
    let castedPastProps = pastCloneProps;
    // check all prop functions match
    if (typeof (props) === 'object') {
        if (!pastCloneProps) {
            return true;
        }
        castedProps = { ...props };
        castedPastProps = { ...(pastCloneProps || {}) };
        const allFunctionsMatch = Object.entries(castedProps).every(([key, value]) => {
            /*if(!(key in (castedPastProps as any))) {
              return false
            }*/
            let compare = castedPastProps[key];
            if (!(value instanceof Function)) {
                return true; // this will be checked in deepEqual
            }
            if (!(compare instanceof Function)) {
                return false; // its a function now but was not before
            }
            // ensure we are comparing apples to apples as function get wrapped
            if (compare.original) {
                compare = compare.original;
            }
            const original = value.original;
            if (original) {
                value = value.original;
            }
            if (value.toString() !== compare.toString()) {
                return false; // both are function but not the same
            }
            delete castedProps[key]; // its a function and not needed to be compared
            delete castedPastProps[key]; // its a function and not needed to be compared
            return true;
        });
        if (!allFunctionsMatch) {
            return true; // a change has been detected by function comparisons
        }
    }
    const isEqual = (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepEqual)(pastCloneProps, props);
    return !isEqual; // if equal then no changes
}
function hasKidsChanged(oldTagSupport, newTagSupport) {
    const oldCloneKidValues = oldTagSupport.propsConfig.lastClonedKidValues;
    const newClonedKidValues = newTagSupport.propsConfig.lastClonedKidValues;
    const everySame = oldCloneKidValues.every((set, index) => {
        const x = newClonedKidValues[index];
        return set.every((item, index) => item === x[index]);
    });
    return !everySame;
}


/***/ }),

/***/ "../main/ts/html.ts":
/*!**************************!*\
  !*** ../main/ts/html.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_113293__) => {

__nested_webpack_require_113293__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_113293__.d(__nested_webpack_exports__, {
/* harmony export */   html: () => (/* binding */ html)
/* harmony export */ });
/* harmony import */ var _Tag_class__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_113293__(/*! ./Tag.class */ "../main/ts/Tag.class.ts");

function html(strings, ...values) {
    return new _Tag_class__WEBPACK_IMPORTED_MODULE_0__.Tag(strings, values);
}


/***/ }),

/***/ "../main/ts/index.ts":
/*!***************************!*\
  !*** ../main/ts/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_113955__) => {

__nested_webpack_require_113955__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_113955__.d(__nested_webpack_exports__, {
/* harmony export */   ArrayNoKeyError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_5__.ArrayNoKeyError),
/* harmony export */   StateMismatchError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_5__.StateMismatchError),
/* harmony export */   Subject: () => (/* reexport safe */ _Subject__WEBPACK_IMPORTED_MODULE_6__.Subject),
/* harmony export */   Tag: () => (/* reexport safe */ _Tag_class__WEBPACK_IMPORTED_MODULE_12__.Tag),
/* harmony export */   TagError: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_5__.TagError),
/* harmony export */   TagSupport: () => (/* reexport safe */ _TagSupport_class__WEBPACK_IMPORTED_MODULE_10__.TagSupport),
/* harmony export */   ValueSubject: () => (/* reexport safe */ _ValueSubject__WEBPACK_IMPORTED_MODULE_8__.ValueSubject),
/* harmony export */   getCallback: () => (/* reexport safe */ _getCallback__WEBPACK_IMPORTED_MODULE_21__.getCallback),
/* harmony export */   hmr: () => (/* binding */ hmr),
/* harmony export */   html: () => (/* reexport safe */ _html__WEBPACK_IMPORTED_MODULE_4__.html),
/* harmony export */   interpolateElement: () => (/* reexport safe */ _interpolateElement__WEBPACK_IMPORTED_MODULE_11__.interpolateElement),
/* harmony export */   interpolateString: () => (/* reexport safe */ _interpolateElement__WEBPACK_IMPORTED_MODULE_11__.interpolateString),
/* harmony export */   isSubjectInstance: () => (/* reexport safe */ _isInstance__WEBPACK_IMPORTED_MODULE_7__.isSubjectInstance),
/* harmony export */   isTagArray: () => (/* reexport safe */ _isInstance__WEBPACK_IMPORTED_MODULE_7__.isTagArray),
/* harmony export */   isTagComponent: () => (/* reexport safe */ _isInstance__WEBPACK_IMPORTED_MODULE_7__.isTagComponent),
/* harmony export */   isTagInstance: () => (/* reexport safe */ _isInstance__WEBPACK_IMPORTED_MODULE_7__.isTagInstance),
/* harmony export */   onDestroy: () => (/* reexport safe */ _onDestroy__WEBPACK_IMPORTED_MODULE_20__.onDestroy),
/* harmony export */   onInit: () => (/* reexport safe */ _onInit__WEBPACK_IMPORTED_MODULE_19__.onInit),
/* harmony export */   providers: () => (/* reexport safe */ _providers__WEBPACK_IMPORTED_MODULE_15__.providers),
/* harmony export */   redrawTag: () => (/* reexport safe */ _redrawTag_function__WEBPACK_IMPORTED_MODULE_0__.redrawTag),
/* harmony export */   runBeforeRender: () => (/* reexport safe */ _tagRunner__WEBPACK_IMPORTED_MODULE_13__.runBeforeRender),
/* harmony export */   set: () => (/* reexport safe */ _set_function__WEBPACK_IMPORTED_MODULE_16__.set),
/* harmony export */   setLet: () => (/* reexport safe */ _setLet_function__WEBPACK_IMPORTED_MODULE_17__.setLet),
/* harmony export */   setProp: () => (/* reexport safe */ _setProp_function__WEBPACK_IMPORTED_MODULE_18__.setProp),
/* harmony export */   setUse: () => (/* reexport safe */ _setUse_function__WEBPACK_IMPORTED_MODULE_14__.setUse),
/* harmony export */   tag: () => (/* reexport safe */ _tag__WEBPACK_IMPORTED_MODULE_3__.tag),
/* harmony export */   tagElement: () => (/* reexport safe */ _tagElement__WEBPACK_IMPORTED_MODULE_1__.tagElement),
/* harmony export */   tags: () => (/* reexport safe */ _tag__WEBPACK_IMPORTED_MODULE_3__.tags),
/* harmony export */   watch: () => (/* reexport safe */ _watch_function__WEBPACK_IMPORTED_MODULE_9__.watch)
/* harmony export */ });
/* harmony import */ var _redrawTag_function__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_113955__(/*! ./redrawTag.function */ "../main/ts/redrawTag.function.ts");
/* harmony import */ var _tagElement__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_113955__(/*! ./tagElement */ "../main/ts/tagElement.ts");
/* harmony import */ var _ElementTargetEvent_interface__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_113955__(/*! ./ElementTargetEvent.interface */ "../main/ts/ElementTargetEvent.interface.ts");
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_113955__(/*! ./tag */ "../main/ts/tag.ts");
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_113955__(/*! ./html */ "../main/ts/html.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_113955__(/*! ./errors */ "../main/ts/errors.ts");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_113955__(/*! ./Subject */ "../main/ts/Subject.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_113955__(/*! ./isInstance */ "../main/ts/isInstance.ts");
/* harmony import */ var _ValueSubject__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_113955__(/*! ./ValueSubject */ "../main/ts/ValueSubject.ts");
/* harmony import */ var _watch_function__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_113955__(/*! ./watch.function */ "../main/ts/watch.function.ts");
/* harmony import */ var _TagSupport_class__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_113955__(/*! ./TagSupport.class */ "../main/ts/TagSupport.class.ts");
/* harmony import */ var _interpolateElement__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_113955__(/*! ./interpolateElement */ "../main/ts/interpolateElement.ts");
/* harmony import */ var _Tag_class__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_113955__(/*! ./Tag.class */ "../main/ts/Tag.class.ts");
/* harmony import */ var _tagRunner__WEBPACK_IMPORTED_MODULE_13__ = __nested_webpack_require_113955__(/*! ./tagRunner */ "../main/ts/tagRunner.ts");
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_14__ = __nested_webpack_require_113955__(/*! ./setUse.function */ "../main/ts/setUse.function.ts");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_15__ = __nested_webpack_require_113955__(/*! ./providers */ "../main/ts/providers.ts");
/* harmony import */ var _set_function__WEBPACK_IMPORTED_MODULE_16__ = __nested_webpack_require_113955__(/*! ./set.function */ "../main/ts/set.function.ts");
/* harmony import */ var _setLet_function__WEBPACK_IMPORTED_MODULE_17__ = __nested_webpack_require_113955__(/*! ./setLet.function */ "../main/ts/setLet.function.ts");
/* harmony import */ var _setProp_function__WEBPACK_IMPORTED_MODULE_18__ = __nested_webpack_require_113955__(/*! ./setProp.function */ "../main/ts/setProp.function.ts");
/* harmony import */ var _onInit__WEBPACK_IMPORTED_MODULE_19__ = __nested_webpack_require_113955__(/*! ./onInit */ "../main/ts/onInit.ts");
/* harmony import */ var _onDestroy__WEBPACK_IMPORTED_MODULE_20__ = __nested_webpack_require_113955__(/*! ./onDestroy */ "../main/ts/onDestroy.ts");
/* harmony import */ var _getCallback__WEBPACK_IMPORTED_MODULE_21__ = __nested_webpack_require_113955__(/*! ./getCallback */ "../main/ts/getCallback.ts");













// TODO: export *




/* hooks */
// TODO: export *







/* end: hooks */
const hmr = {
    tagElement: _tagElement__WEBPACK_IMPORTED_MODULE_1__.tagElement, redrawTag: _redrawTag_function__WEBPACK_IMPORTED_MODULE_0__.redrawTag
};


/***/ }),

/***/ "../main/ts/inputAttribute.ts":
/*!************************************!*\
  !*** ../main/ts/inputAttribute.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_121034__) => {

__nested_webpack_require_121034__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_121034__.d(__nested_webpack_exports__, {
/* harmony export */   inputAttribute: () => (/* binding */ inputAttribute)
/* harmony export */ });
function inputAttribute(name, value, element) {
    const names = name.split('.');
    // style.position = "absolute"
    if (names[0] === 'style') {
        element.style[names[1]] = value;
    }
    // Example: class.width-full = "true"
    if (names[0] === 'class') {
        names.shift();
        if (value) {
            names.forEach(name => element.classList.add(name));
        }
        else {
            names.forEach(name => element.classList.remove(name));
        }
        return;
    }
}


/***/ }),

/***/ "../main/ts/interpolateAttributes.ts":
/*!*******************************************!*\
  !*** ../main/ts/interpolateAttributes.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_122035__) => {

__nested_webpack_require_122035__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_122035__.d(__nested_webpack_exports__, {
/* harmony export */   interpolateAttributes: () => (/* binding */ interpolateAttributes)
/* harmony export */ });
/* harmony import */ var _processAttribute_function__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_122035__(/*! ./processAttribute.function */ "../main/ts/processAttribute.function.ts");

function howToSetAttribute(element, name, value) {
    /*
    if(name === 'class'){
      value.split(' ').forEach(className => child.classList.add(className))
      return
    }
    */
    element.setAttribute(name, value);
}
function howToSetInputValue(element, name, value) {
    element[name] = value;
}
function interpolateAttributes(child, scope, ownerTag) {
    const attrNames = child.getAttributeNames();
    let howToSet = howToSetAttribute;
    attrNames.forEach(attrName => {
        if (child.nodeName === 'INPUT' && attrName === 'value') {
            howToSet = howToSetInputValue;
        }
        const value = child.getAttribute(attrName);
        (0,_processAttribute_function__WEBPACK_IMPORTED_MODULE_0__.processAttribute)(attrName, value, child, scope, ownerTag, howToSet);
        howToSet = howToSetAttribute; // put back
    });
}


/***/ }),

/***/ "../main/ts/interpolateContentTemplates.ts":
/*!*************************************************!*\
  !*** ../main/ts/interpolateContentTemplates.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_123608__) => {

__nested_webpack_require_123608__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_123608__.d(__nested_webpack_exports__, {
/* harmony export */   interpolateContentTemplates: () => (/* binding */ interpolateContentTemplates)
/* harmony export */ });
/* harmony import */ var _interpolateTemplate__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_123608__(/*! ./interpolateTemplate */ "../main/ts/interpolateTemplate.ts");

function interpolateContentTemplates(element, context, tag, options, children) {
    if (!children || element.tagName === 'TEMPLATE') {
        return { clones: [], tagComponents: [] }; // done
    }
    // counting for animation stagger computing
    const counts = options.counts;
    const clones = [];
    const tagComponents = [];
    const childArray = new Array(...children);
    childArray.forEach(child => {
        const { clones: nextClones, tagComponent } = (0,_interpolateTemplate__WEBPACK_IMPORTED_MODULE_0__.interpolateTemplate)(child, context, tag, counts, options);
        clones.push(...nextClones);
        if (tagComponent) {
            tagComponents.push(tagComponent);
            return;
        }
        if (child.children) {
            const nextKids = new Array(...child.children);
            nextKids.forEach((subChild, index) => {
                // IF <template end /> its a variable to be processed
                if (isRenderEndTemplate(subChild)) {
                    const { tagComponent } = (0,_interpolateTemplate__WEBPACK_IMPORTED_MODULE_0__.interpolateTemplate)(subChild, context, tag, counts, options);
                    if (tagComponent) {
                        tagComponents.push(tagComponent);
                    }
                }
                const { clones: nextClones, tagComponents: nextTagComponent } = interpolateContentTemplates(subChild, context, tag, options, subChild.children);
                clones.push(...nextClones);
                tagComponents.push(...nextTagComponent);
            });
        }
    });
    return { clones, tagComponents };
}
function isRenderEndTemplate(child) {
    const isTemplate = child.tagName === 'TEMPLATE';
    return isTemplate &&
        child.getAttribute('interpolate') !== undefined &&
        child.getAttribute('end') !== undefined;
}


/***/ }),

/***/ "../main/ts/interpolateElement.ts":
/*!****************************************!*\
  !*** ../main/ts/interpolateElement.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_126131__) => {

__nested_webpack_require_126131__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_126131__.d(__nested_webpack_exports__, {
/* harmony export */   interpolateElement: () => (/* binding */ interpolateElement),
/* harmony export */   interpolateString: () => (/* binding */ interpolateString)
/* harmony export */ });
/* harmony import */ var _interpolateAttributes__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_126131__(/*! ./interpolateAttributes */ "../main/ts/interpolateAttributes.ts");
/* harmony import */ var _interpolations__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_126131__(/*! ./interpolations */ "../main/ts/interpolations.ts");
/* harmony import */ var _interpolateContentTemplates__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_126131__(/*! ./interpolateContentTemplates */ "../main/ts/interpolateContentTemplates.ts");
/* harmony import */ var _Tag_class__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_126131__(/*! ./Tag.class */ "../main/ts/Tag.class.ts");




/** Review elements within an element */
function interpolateElement(container, context, // variables used to evaluate
interpolatedTemplates, tagOwner, options) {
    const clones = [];
    const tagComponents = [];
    const result = interpolatedTemplates.interpolation;
    const template = container.children[0];
    const children = template.content.children;
    if (result.keys.length) {
        const { clones: nextClones, tagComponents: nextTagComponents } = (0,_interpolateContentTemplates__WEBPACK_IMPORTED_MODULE_2__.interpolateContentTemplates)(container, context, tagOwner, options, children);
        clones.push(...nextClones);
        tagComponents.push(...nextTagComponents);
    }
    (0,_interpolateAttributes__WEBPACK_IMPORTED_MODULE_0__.interpolateAttributes)(container, context, tagOwner);
    processChildrenAttributes(children, context, tagOwner);
    return { clones, tagComponents };
}
function processChildrenAttributes(children, context, ownerTag) {
    new Array(...children).forEach(child => {
        (0,_interpolateAttributes__WEBPACK_IMPORTED_MODULE_0__.interpolateAttributes)(child, context, ownerTag);
        if (child.children) {
            processChildrenAttributes(child.children, context, ownerTag);
        }
    });
}
function interpolateString(string) {
    const result = (0,_interpolations__WEBPACK_IMPORTED_MODULE_1__.interpolateToTemplates)(string);
    result.string = result.string.replace(_Tag_class__WEBPACK_IMPORTED_MODULE_3__.escapeSearch, _Tag_class__WEBPACK_IMPORTED_MODULE_3__.variablePrefix);
    return result;
}


/***/ }),

/***/ "../main/ts/interpolateTemplate.ts":
/*!*****************************************!*\
  !*** ../main/ts/interpolateTemplate.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_128927__) => {

__nested_webpack_require_128927__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_128927__.d(__nested_webpack_exports__, {
/* harmony export */   afterElmBuild: () => (/* binding */ afterElmBuild),
/* harmony export */   interpolateTemplate: () => (/* binding */ interpolateTemplate),
/* harmony export */   subscribeToTemplate: () => (/* binding */ subscribeToTemplate),
/* harmony export */   updateBetweenTemplates: () => (/* binding */ updateBetweenTemplates)
/* harmony export */ });
/* harmony import */ var _Tag_class__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_128927__(/*! ./Tag.class */ "../main/ts/Tag.class.ts");
/* harmony import */ var _elementInitCheck__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_128927__(/*! ./elementInitCheck */ "../main/ts/elementInitCheck.ts");
/* harmony import */ var _processSubjectValue_function__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_128927__(/*! ./processSubjectValue.function */ "../main/ts/processSubjectValue.function.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_128927__(/*! ./isInstance */ "../main/ts/isInstance.ts");
/* harmony import */ var _scanTextAreaValue_function__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_128927__(/*! ./scanTextAreaValue.function */ "../main/ts/scanTextAreaValue.function.ts");





function interpolateTemplate(insertBefore, // <template end interpolate /> (will be removed)
context, // variable scope of {`__tagvar${index}`:'x'}
ownerTag, // Tag class
counts, // used for animation stagger computing
options) {
    // TODO: THe clones array is useless here
    const clones = [];
    if (!insertBefore.hasAttribute('end')) {
        return { clones }; // only care about <template end>
    }
    const variableName = insertBefore.getAttribute('id');
    if (variableName?.substring(0, _Tag_class__WEBPACK_IMPORTED_MODULE_0__.variablePrefix.length) !== _Tag_class__WEBPACK_IMPORTED_MODULE_0__.variablePrefix) {
        return { clones }; // ignore, not a tagVar
    }
    const existingSubject = context[variableName];
    // process dynamics later
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_3__.isTagComponent)(existingSubject.value) || (0,_isInstance__WEBPACK_IMPORTED_MODULE_3__.isTagArray)(existingSubject.value)) {
        return { clones, tagComponent: { ownerTag, subject: existingSubject, insertBefore } };
    }
    let isForceElement = options.forceElement;
    subscribeToTemplate(insertBefore, existingSubject, ownerTag, counts, { isForceElement });
    return { clones };
}
function subscribeToTemplate(insertBefore, subject, ownerTag, counts, // used for animation stagger computing
{ isForceElement }) {
    const callback = (value) => {
        const clone = subject.clone;
        if (clone) {
            insertBefore = clone;
        }
        (0,_processSubjectValue_function__WEBPACK_IMPORTED_MODULE_2__.processSubjectValue)(value, subject, insertBefore, ownerTag, {
            counts: { ...counts },
            forceElement: isForceElement,
        });
        if (isForceElement) {
            isForceElement = false; // only can happen once
        }
        // ownerTag.clones.push(...nextClones)
        // clones.push(...nextClones)
    };
    const sub = subject.subscribe(callback);
    ownerTag.cloneSubs.push(sub);
}
// Function to update the value of x
function updateBetweenTemplates(value, lastFirstChild) {
    const parent = lastFirstChild.parentNode;
    // mimic React skipping to display EXCEPT for true does display on page
    if (value === undefined || value === false || value === null) { // || value === true
        value = '';
    }
    // Insert the new value (never use innerHTML here)
    const textNode = document.createTextNode(value); // never innerHTML
    parent.insertBefore(textNode, lastFirstChild);
    /* remove existing nodes */
    parent.removeChild(lastFirstChild);
    return textNode;
}
function afterElmBuild(elm, options, context, ownerTag) {
    if (!elm.getAttribute) {
        return;
    }
    const tagName = elm.nodeName; // elm.tagName
    if (tagName === 'TEXTAREA') {
        (0,_scanTextAreaValue_function__WEBPACK_IMPORTED_MODULE_4__.scanTextAreaValue)(elm, context, ownerTag);
    }
    let diff = options.counts.added;
    if (!options.forceElement) {
        diff = (0,_elementInitCheck__WEBPACK_IMPORTED_MODULE_1__.elementInitCheck)(elm, options.counts) - diff;
    }
    if (elm.children) {
        const subCounts = {
            added: options.counts.added, // - diff,
            removed: options.counts.removed,
        };
        new Array(...elm.children).forEach((child, index) => {
            const subOptions = {
                ...options,
                counts: options.counts,
            };
            return afterElmBuild(child, subOptions, context, ownerTag);
        });
    }
}


/***/ }),

/***/ "../main/ts/interpolations.ts":
/*!************************************!*\
  !*** ../main/ts/interpolations.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_133973__) => {

__nested_webpack_require_133973__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_133973__.d(__nested_webpack_exports__, {
/* harmony export */   interpolateReplace: () => (/* binding */ interpolateReplace),
/* harmony export */   interpolateToTemplates: () => (/* binding */ interpolateToTemplates)
/* harmony export */ });
// support arrow functions in attributes
const interpolateReplace = /(?:<[^>]*?(?:(?:\s+\w+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+)))*\s*)\/?>)|({__tagvar[^}]+})/g;
/** replaces ${x} with <template id="x-start"></template><template id="x-end"></template> */
function interpolateToTemplates(template) {
    const keys = [];
    const string = template.replace(interpolateReplace, (match, expression) => {
        if (match.startsWith('<')) {
            // If the match is an HTML tag, don't replace
            return match;
        }
        const noBraces = expression.substring(1, expression.length - 1);
        const id = noBraces;
        keys.push(id);
        return `<template interpolate end id="${id}"></template>`;
    });
    return { string, keys };
}


/***/ }),

/***/ "../main/ts/isInstance.ts":
/*!********************************!*\
  !*** ../main/ts/isInstance.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_135289__) => {

__nested_webpack_require_135289__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_135289__.d(__nested_webpack_exports__, {
/* harmony export */   isSubjectInstance: () => (/* binding */ isSubjectInstance),
/* harmony export */   isTagArray: () => (/* binding */ isTagArray),
/* harmony export */   isTagComponent: () => (/* binding */ isTagComponent),
/* harmony export */   isTagInstance: () => (/* binding */ isTagInstance)
/* harmony export */ });
function isTagComponent(value) {
    return value?.isTemplater === true;
}
function isTagInstance(tag) {
    return tag?.isTag === true;
}
function isSubjectInstance(subject) {
    return (subject?.isSubject === true || subject?.subscribe) ? true : false; // subject?.isSubject === true || 
}
function isTagArray(value) {
    return value instanceof Array && value.every(x => isTagInstance(x));
}


/***/ }),

/***/ "../main/ts/isLikeTags.function.ts":
/*!*****************************************!*\
  !*** ../main/ts/isLikeTags.function.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_136401__) => {

__nested_webpack_require_136401__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_136401__.d(__nested_webpack_exports__, {
/* harmony export */   isLikeTags: () => (/* binding */ isLikeTags)
/* harmony export */ });
function isLikeTags(tag0, tag1) {
    if (tag0.strings.length !== tag1.strings.length) {
        return false;
    }
    const everyStringMatched = tag0.strings.every((string, index) => tag1.strings[index] === string);
    if (!everyStringMatched) {
        return false;
    }
    const valuesLengthsMatch = tag0.values.length === tag1.values.length;
    if (!valuesLengthsMatch) {
        return false;
    }
    /*
    const valuesMatch = deepEqual(tag0.values, tag1.values)
    if(!valuesMatch) {
      return false
    }
    */
    return true;
}


/***/ }),

/***/ "../main/ts/onDestroy.ts":
/*!*******************************!*\
  !*** ../main/ts/onDestroy.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_137393__) => {

__nested_webpack_require_137393__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_137393__.d(__nested_webpack_exports__, {
/* harmony export */   onDestroy: () => (/* binding */ onDestroy)
/* harmony export */ });
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_137393__(/*! ./setUse.function */ "../main/ts/setUse.function.ts");

/** When undefined, it means a tag is being built for the first time so do run destroy(s) */
let destroyCurrentTagSupport;
function onDestroy(callback) {
    destroyCurrentTagSupport.memory.destroyCallback = callback;
}
(0,_setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse)({
    beforeRender: tagSupport => destroyCurrentTagSupport = tagSupport,
    beforeRedraw: tagSupport => destroyCurrentTagSupport = tagSupport,
    beforeDestroy: (tagSupport, tag) => {
        const callback = tagSupport.memory.destroyCallback;
        if (callback) {
            callback();
        }
    }
});


/***/ }),

/***/ "../main/ts/onInit.ts":
/*!****************************!*\
  !*** ../main/ts/onInit.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_138563__) => {

__nested_webpack_require_138563__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_138563__.d(__nested_webpack_exports__, {
/* harmony export */   onInit: () => (/* binding */ onInit)
/* harmony export */ });
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_138563__(/*! ./setUse.function */ "../main/ts/setUse.function.ts");

function setCurrentTagSupport(support) {
    _setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse.memory.initCurrentSupport = support;
}
function onInit(callback) {
    if (!_setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse.memory.initCurrentSupport.memory.init) {
        _setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse.memory.initCurrentSupport.memory.init = callback;
        callback(); // fire init
    }
}
(0,_setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse)({
    beforeRender: tagSupport => setCurrentTagSupport(tagSupport),
    beforeRedraw: tagSupport => setCurrentTagSupport(tagSupport),
});


/***/ }),

/***/ "../main/ts/processAttribute.function.ts":
/*!***********************************************!*\
  !*** ../main/ts/processAttribute.function.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_139827__) => {

__nested_webpack_require_139827__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_139827__.d(__nested_webpack_exports__, {
/* harmony export */   processAttribute: () => (/* binding */ processAttribute)
/* harmony export */ });
/* harmony import */ var _inputAttribute__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_139827__(/*! ./inputAttribute */ "../main/ts/inputAttribute.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_139827__(/*! ./isInstance */ "../main/ts/isInstance.ts");


const startRegX = /^\s*{__tagvar/;
const endRegX = /}\s*$/;
function isTagVar(value) {
    return value && value.search(startRegX) >= 0 && value.search(endRegX) >= 0;
}
function processAttribute(attrName, value, child, scope, ownerTag, howToSet) {
    if (isTagVar(value)) {
        return processScopedNameValueAttr(attrName, value, child, scope, ownerTag, howToSet);
    }
    if (isTagVar(attrName)) {
        const contextValueSubject = getContextValueByVarString(scope, attrName);
        let lastValue;
        // the above callback gets called immediately since its a ValueSubject()
        const sub = contextValueSubject.subscribe((value) => {
            processNameOnlyAttr(value, lastValue, child, ownerTag, howToSet);
            lastValue = value;
        });
        ownerTag.cloneSubs.push(sub); // this is where unsubscribe is picked up
        child.removeAttribute(attrName);
        return;
    }
    // Non dynamic
    const isSpecial = isSpecialAttr(attrName);
    if (isSpecial) {
        return (0,_inputAttribute__WEBPACK_IMPORTED_MODULE_0__.inputAttribute)(attrName, value, child);
    }
}
function processScopedNameValueAttr(attrName, value, // {__tagVarN}
child, scope, ownerTag, howToSet) {
    // get the code inside the brackets like "variable0" or "{variable0}"
    const result = getContextValueByVarString(scope, value);
    return processNameValueAttr(attrName, result, child, ownerTag, howToSet);
}
function getContextValueByVarString(scope, value) {
    const code = value.replace('{', '').split('').reverse().join('').replace('}', '').split('').reverse().join('');
    return scope[code];
}
function processNameOnlyAttr(attrValue, lastValue, child, ownerTag, howToSet) {
    if (lastValue && lastValue != attrValue) {
        if (typeof (lastValue) === 'string') {
            child.removeAttribute(lastValue);
        }
        else if (lastValue instanceof Object) {
            Object.entries(lastValue).forEach(([name]) => child.removeAttribute(name));
        }
    }
    if (typeof (attrValue) === 'string') {
        if (!attrValue.length) {
            return;
        }
        processNameValueAttr(attrValue, '', child, ownerTag, howToSet);
        return;
    }
    if (attrValue instanceof Object) {
        Object.entries(attrValue).forEach(([name, value]) => processNameValueAttr(name, value, child, ownerTag, howToSet));
        return;
    }
}
function processNameValueAttr(attrName, result, child, ownerTag, howToSet) {
    const isSpecial = isSpecialAttr(attrName);
    // attach as callback?
    if (result instanceof Function) {
        const action = function (...args) {
            return result(child, args);
        };
        child[attrName].action = action;
        // child.addEventListener(attrName, action)
    }
    // Most every variable comes in here since everything is made a ValueSubject
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isSubjectInstance)(result)) {
        child.removeAttribute(attrName);
        const callback = (newAttrValue) => {
            return processAttributeSubjectValue(newAttrValue, child, attrName, isSpecial, howToSet);
        };
        // 🗞️ Subscribe. Above callback called immediately since its a ValueSubject()
        const sub = result.subscribe(callback);
        // Record subscription for later unsubscribe when element destroyed
        ownerTag.cloneSubs.push(sub);
        return;
    }
    howToSet(child, attrName, result);
    // child.setAttribute(attrName, result.value)
    return;
}
function processAttributeSubjectValue(newAttrValue, child, attrName, isSpecial, howToSet) {
    if (newAttrValue instanceof Function) {
        ;
        child[attrName] = function (...args) {
            const result = newAttrValue(child, args);
            return result;
        };
        child[attrName].tagFunction = newAttrValue;
        return;
    }
    if (isSpecial) {
        (0,_inputAttribute__WEBPACK_IMPORTED_MODULE_0__.inputAttribute)(attrName, newAttrValue, child);
        return;
    }
    if (newAttrValue) {
        howToSet(child, attrName, newAttrValue);
        return;
    }
    const isDeadValue = newAttrValue === undefined || newAttrValue === false || newAttrValue === null;
    if (isDeadValue) {
        child.removeAttribute(attrName);
        return;
    }
    // value is 0
    howToSet(child, attrName, newAttrValue);
}
/** Looking for (class | style) followed by a period */
function isSpecialAttr(attrName) {
    return attrName.search(/^(class|style)(\.)/) >= 0;
}


/***/ }),

/***/ "../main/ts/processNewValue.function.ts":
/*!**********************************************!*\
  !*** ../main/ts/processNewValue.function.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_145146__) => {

__nested_webpack_require_145146__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_145146__.d(__nested_webpack_exports__, {
/* harmony export */   processNewValue: () => (/* binding */ processNewValue)
/* harmony export */ });
/* harmony import */ var _Tag_utils__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_145146__(/*! ./Tag.utils */ "../main/ts/Tag.utils.ts");
/* harmony import */ var _ValueSubject__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_145146__(/*! ./ValueSubject */ "../main/ts/ValueSubject.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_145146__(/*! ./isInstance */ "../main/ts/isInstance.ts");



function processNewValue(hasValue, value, context, variableName, ownerTag) {
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_2__.isTagComponent)(value)) {
        const existing = context[variableName] = new _ValueSubject__WEBPACK_IMPORTED_MODULE_1__.ValueSubject(value);
        (0,_Tag_utils__WEBPACK_IMPORTED_MODULE_0__.setValueRedraw)(value, existing, ownerTag);
        return;
    }
    if (value instanceof Function) {
        context[variableName] = (0,_Tag_utils__WEBPACK_IMPORTED_MODULE_0__.getSubjectFunction)(value, ownerTag);
        return;
    }
    if (!hasValue) {
        return; // more strings than values, stop here
    }
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_2__.isTagInstance)(value)) {
        value.ownerTag = ownerTag;
        ownerTag.children.push(value);
        context[variableName] = new _ValueSubject__WEBPACK_IMPORTED_MODULE_1__.ValueSubject(value);
        return;
    }
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_2__.isSubjectInstance)(value)) {
        context[variableName] = value; // its already a value subject
        return;
    }
    context[variableName] = new _ValueSubject__WEBPACK_IMPORTED_MODULE_1__.ValueSubject(value);
}


/***/ }),

/***/ "../main/ts/processRegularValue.function.ts":
/*!**************************************************!*\
  !*** ../main/ts/processRegularValue.function.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_147276__) => {

__nested_webpack_require_147276__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_147276__.d(__nested_webpack_exports__, {
/* harmony export */   processRegularValue: () => (/* binding */ processRegularValue)
/* harmony export */ });
/* harmony import */ var _interpolateTemplate__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_147276__(/*! ./interpolateTemplate */ "../main/ts/interpolateTemplate.ts");

function processRegularValue(value, result, // could be tag via result.tag
template) {
    result.template = template;
    const before = result.clone || template; // Either the template is on the doc OR its the first element we last put on doc
    result.lastValue = value;
    // Processing of regular values
    const clone = (0,_interpolateTemplate__WEBPACK_IMPORTED_MODULE_0__.updateBetweenTemplates)(value, before);
    result.clone = clone; // remember single element put down, for future updates
    return [];
}


/***/ }),

/***/ "../main/ts/processSubjectComponent.function.ts":
/*!******************************************************!*\
  !*** ../main/ts/processSubjectComponent.function.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_148512__) => {

__nested_webpack_require_148512__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_148512__.d(__nested_webpack_exports__, {
/* harmony export */   processSubjectComponent: () => (/* binding */ processSubjectComponent)
/* harmony export */ });
/* harmony import */ var _tagRunner__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_148512__(/*! ./tagRunner */ "../main/ts/tagRunner.ts");
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_148512__(/*! ./setUse.function */ "../main/ts/setUse.function.ts");
/* harmony import */ var _processTagResult_function__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_148512__(/*! ./processTagResult.function */ "../main/ts/processTagResult.function.ts");



function processSubjectComponent(value, subject, template, ownerTag, options) {
    // Check if function component is wrapped in a tag() call
    // TODO: This below check not needed in production mode
    if (value.tagged !== true) {
        let name = value.wrapper.original.name || value.wrapper.original.constructor?.name;
        if (name === 'Function') {
            name = undefined;
        }
        const label = name || value.wrapper.original.toString().substring(0, 120);
        const error = new Error(`Not a tag component. Wrap your function with tag(). Example tag(props => html\`\`) on component:\n\n${label}\n\n`);
        throw error;
    }
    const templater = value;
    templater.insertBefore = template;
    const tagSupport = value.tagSupport;
    let retag = templater.newest;
    const providers = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.providerConfig;
    providers.ownerTag = ownerTag;
    const isFirstTime = !retag || options.forceElement;
    if (isFirstTime) {
        if (retag) {
            // runBeforeRedraw(tagSupport, retag)
            (0,_tagRunner__WEBPACK_IMPORTED_MODULE_0__.runBeforeRedraw)(tagSupport, templater.oldest);
        }
        else {
            (0,_tagRunner__WEBPACK_IMPORTED_MODULE_0__.runBeforeRender)(tagSupport, ownerTag);
        }
        const preClones = ownerTag.clones.map(clone => clone);
        const result = templater.renderWithSupport(tagSupport, subject.tag, ownerTag);
        retag = result.retag;
        templater.newest = retag;
        if (ownerTag.clones.length > preClones.length) {
            const myClones = ownerTag.clones.filter(fClone => !preClones.find(clone => clone === fClone));
            retag.clones.push(...myClones);
        }
    }
    ownerTag.children.push(retag);
    // TODO: this line below might be duplicative of work done in renderWithSupport
    tagSupport.templater = retag.tagSupport.templater;
    (0,_processTagResult_function__WEBPACK_IMPORTED_MODULE_2__.processTagResult)(retag, subject, // The element set here will be removed from document. Also result.tag will be added in here
    template, // <template end interpolate /> (will be removed)
    options);
}


/***/ }),

/***/ "../main/ts/processSubjectValue.function.ts":
/*!**************************************************!*\
  !*** ../main/ts/processSubjectValue.function.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_151727__) => {

__nested_webpack_require_151727__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_151727__.d(__nested_webpack_exports__, {
/* harmony export */   processSubjectValue: () => (/* binding */ processSubjectValue),
/* harmony export */   processTag: () => (/* binding */ processTag)
/* harmony export */ });
/* harmony import */ var _processSubjectComponent_function__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_151727__(/*! ./processSubjectComponent.function */ "../main/ts/processSubjectComponent.function.ts");
/* harmony import */ var _processTagResult_function__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_151727__(/*! ./processTagResult.function */ "../main/ts/processTagResult.function.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_151727__(/*! ./isInstance */ "../main/ts/isInstance.ts");
/* harmony import */ var _processTagArray__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_151727__(/*! ./processTagArray */ "../main/ts/processTagArray.ts");
/* harmony import */ var _TagSupport_class__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_151727__(/*! ./TagSupport.class */ "../main/ts/TagSupport.class.ts");
/* harmony import */ var _ValueSubject__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_151727__(/*! ./ValueSubject */ "../main/ts/ValueSubject.ts");
/* harmony import */ var _processRegularValue_function__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_151727__(/*! ./processRegularValue.function */ "../main/ts/processRegularValue.function.ts");







var ValueTypes;
(function (ValueTypes) {
    ValueTypes["tag"] = "tag";
    ValueTypes["tagArray"] = "tag-array";
    ValueTypes["tagComponent"] = "tag-component";
    ValueTypes["value"] = "value";
})(ValueTypes || (ValueTypes = {}));
function getValueType(value) {
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_2__.isTagComponent)(value)) {
        return ValueTypes.tagComponent;
    }
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_2__.isTagInstance)(value)) {
        return ValueTypes.tag;
    }
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_2__.isTagArray)(value)) {
        return ValueTypes.tagArray;
    }
    return ValueTypes.value;
}
function processSubjectValue(value, result, // could be tag via result.tag
template, // <template end interpolate /> (will be removed)
ownerTag, // owner
options) {
    const valueType = getValueType(value);
    switch (valueType) {
        case ValueTypes.tag:
            processTag(value, result, template, ownerTag, options);
            return [];
        case ValueTypes.tagArray:
            return (0,_processTagArray__WEBPACK_IMPORTED_MODULE_3__.processTagArray)(result, value, template, ownerTag, options);
        case ValueTypes.tagComponent:
            (0,_processSubjectComponent_function__WEBPACK_IMPORTED_MODULE_0__.processSubjectComponent)(value, result, template, ownerTag, options);
            return [];
    }
    return (0,_processRegularValue_function__WEBPACK_IMPORTED_MODULE_6__.processRegularValue)(value, result, template);
}
/** Could be a regular tag or a component. Both are Tag.class */
function processTag(value, result, // could be tag via result.tag
template, // <template end interpolate /> (will be removed)
ownerTag, // owner
options) {
    // first time seeing this tag?
    if (!value.tagSupport) {
        value.tagSupport = new _TagSupport_class__WEBPACK_IMPORTED_MODULE_4__.TagSupport({}, // the template is provided via html`` call
        new _ValueSubject__WEBPACK_IMPORTED_MODULE_5__.ValueSubject([]));
        // asking me to render will cause my parent to render
        value.tagSupport.mutatingRender = () => {
            ownerTag.tagSupport.render();
        };
        value.tagSupport.oldest = value.tagSupport.oldest || value;
        ownerTag.children.push(value);
    }
    value.ownerTag = ownerTag;
    result.template = template;
    (0,_processTagResult_function__WEBPACK_IMPORTED_MODULE_1__.processTagResult)(value, result, // Function will attach result.tag
    template, options);
}


/***/ }),

/***/ "../main/ts/processTagArray.ts":
/*!*************************************!*\
  !*** ../main/ts/processTagArray.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_155948__) => {

__nested_webpack_require_155948__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_155948__.d(__nested_webpack_exports__, {
/* harmony export */   processTagArray: () => (/* binding */ processTagArray)
/* harmony export */ });
/* harmony import */ var _ValueSubject__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_155948__(/*! ./ValueSubject */ "../main/ts/ValueSubject.ts");
/* harmony import */ var _TagSupport_class__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_155948__(/*! ./TagSupport.class */ "../main/ts/TagSupport.class.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_155948__(/*! ./errors */ "../main/ts/errors.ts");
/* harmony import */ var _checkDestroyPrevious_function__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_155948__(/*! ./checkDestroyPrevious.function */ "../main/ts/checkDestroyPrevious.function.ts");




function processTagArray(result, value, // arry of Tag classes
template, // <template end interpolate />
ownerTag, options) {
    // const clones: Clones = []
    const clones = ownerTag.clones; // []
    if (!result.lastArray) {
        result.lastArray = []; // {tag, index}[] populated in processTagResult
    }
    result.template = template;
    let removed = 0;
    /** 🗑️ remove previous items first */
    result.lastArray = result.lastArray.filter((item, index) => {
        const newLength = value.length - 1;
        const at = index - removed;
        const lessLength = newLength < at;
        const subTag = value[index - removed];
        const subArrayValue = subTag?.arrayValue;
        const destroyItem = lessLength || !areLikeValues(subArrayValue, item.tag.arrayValue);
        if (destroyItem) {
            const last = result.lastArray[index];
            const tag = last.tag;
            (0,_checkDestroyPrevious_function__WEBPACK_IMPORTED_MODULE_3__.destroyArrayTag)(tag, options.counts);
            ++removed;
            ++options.counts.removed;
            return false;
        }
        return true;
    });
    // const masterBefore = template || (template as any).clone
    const before = template || template.clone;
    value.forEach((subTag, index) => {
        const previous = result.lastArray[index];
        const previousSupport = subTag.tagSupport || previous?.tag.tagSupport;
        subTag.tagSupport = previousSupport || new _TagSupport_class__WEBPACK_IMPORTED_MODULE_1__.TagSupport({}, new _ValueSubject__WEBPACK_IMPORTED_MODULE_0__.ValueSubject([]));
        if (previousSupport) {
            previousSupport.newest = subTag;
        }
        else {
            subTag.tagSupport.mutatingRender = () => {
                ownerTag.tagSupport.render(); // call owner for needed updates
                return subTag;
            };
            ownerTag.children.push(subTag);
        }
        subTag.ownerTag = ownerTag;
        // check for html``.key()
        const keyNotSet = subTag.arrayValue;
        if (keyNotSet?.isArrayValueNeverSet) {
            const details = {
                template: subTag.getTemplate().string,
                array: value,
                ownerTagContent: ownerTag.lastTemplateString,
            };
            const message = 'Use html`...`.key(item) instead of html`...` to template an Array';
            console.error(message, details);
            const err = new _errors__WEBPACK_IMPORTED_MODULE_2__.ArrayNoKeyError(message, details);
            throw err;
        }
        const couldBeSame = result.lastArray.length > index;
        if (couldBeSame) {
            const isSame = areLikeValues(previous.tag.arrayValue, subTag.arrayValue);
            if (isSame) {
                subTag.tagSupport = subTag.tagSupport || previous.tag.tagSupport;
                previous.tag.updateByTag(subTag);
                return [];
            }
            return [];
        }
        processAddTagArrayItem(before, subTag, result, index, options);
    });
    return clones;
}
function processAddTagArrayItem(before, subTag, result, index, options) {
    const lastValue = {
        tag: subTag, index
    };
    // Added to previous array
    result.lastArray.push(lastValue);
    const counts = {
        added: options.counts.added + index,
        removed: options.counts.removed,
    };
    const lastFirstChild = before; // tag.clones[0] // insertBefore.lastFirstChild    
    subTag.buildBeforeElement(lastFirstChild, { counts, forceElement: options.forceElement });
}
/** compare two values. If both values are arrays then the items will be compared */
function areLikeValues(valueA, valueB) {
    if (valueA === valueB) {
        return true;
    }
    const bothArrays = valueA instanceof Array && valueB instanceof Array;
    const matchLengths = bothArrays && valueA.length == valueB.length;
    if (matchLengths) {
        return valueA.every((item, index) => item == valueB[index]);
    }
    return false;
}


/***/ }),

/***/ "../main/ts/processTagResult.function.ts":
/*!***********************************************!*\
  !*** ../main/ts/processTagResult.function.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_161100__) => {

__nested_webpack_require_161100__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_161100__.d(__nested_webpack_exports__, {
/* harmony export */   processTagResult: () => (/* binding */ processTagResult)
/* harmony export */ });
function processTagResult(tag, result, // used for recording past and current value
insertBefore, // <template end interpolate />
{ counts, forceElement, }) {
    // *if appears we already have seen
    const subjectTag = result;
    const rTag = subjectTag.tag;
    if (rTag && !forceElement) {
        // are we just updating an if we already had?
        if (rTag.isLikeTag(tag)) {
            // components
            if (result instanceof Function) {
                const newTag = result(rTag.tagSupport);
                rTag.updateByTag(newTag);
                return;
            }
            rTag.updateByTag(tag);
            return;
        }
    }
    tag.buildBeforeElement(insertBefore, {
        counts,
        forceElement,
    });
    subjectTag.tag = subjectTag.tag || tag; // let reprocessing know we saw this previously as an if
}


/***/ }),

/***/ "../main/ts/provider.utils.ts":
/*!************************************!*\
  !*** ../main/ts/provider.utils.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_162428__) => {

__nested_webpack_require_162428__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_162428__.d(__nested_webpack_exports__, {
/* harmony export */   providersChangeCheck: () => (/* binding */ providersChangeCheck)
/* harmony export */ });
/* harmony import */ var _deepFunctions__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_162428__(/*! ./deepFunctions */ "../main/ts/deepFunctions.ts");

function providersChangeCheck(tag) {
    const providersWithChanges = tag.tagSupport.memory.providers.filter(provider => !(0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepEqual)(provider.instance, provider.clone));
    // reset clones
    providersWithChanges.forEach(provider => {
        const appElement = tag.getAppElement();
        handleProviderChanges(appElement, provider);
        provider.clone = (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(provider.instance);
    });
}
function handleProviderChanges(appElement, provider) {
    const tagsWithProvider = getTagsWithProvider(appElement, provider);
    tagsWithProvider.forEach(({ tag, renderCount, provider }) => {
        const notRendered = renderCount === tag.tagSupport.memory.renderCount;
        if (notRendered) {
            provider.clone = (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(provider.instance);
            tag.tagSupport.render();
        }
    });
}
function getTagsWithProvider(tag, provider, memory = []) {
    const compare = tag.tagSupport.memory.providers;
    const hasProvider = compare.find(xProvider => xProvider.constructMethod === provider.constructMethod);
    if (hasProvider) {
        memory.push({
            tag,
            renderCount: tag.tagSupport.memory.renderCount,
            provider: hasProvider
        });
    }
    tag.children.forEach(child => getTagsWithProvider(child, provider, memory));
    return memory;
}


/***/ }),

/***/ "../main/ts/providers.ts":
/*!*******************************!*\
  !*** ../main/ts/providers.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_164492__) => {

__nested_webpack_require_164492__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_164492__.d(__nested_webpack_exports__, {
/* harmony export */   providers: () => (/* binding */ providers)
/* harmony export */ });
/* harmony import */ var _deepFunctions__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_164492__(/*! ./deepFunctions */ "../main/ts/deepFunctions.ts");
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_164492__(/*! ./setUse.function */ "../main/ts/setUse.function.ts");


// TODO: rename
_setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.providerConfig = {
    providers: [],
    //currentTagSupport: undefined as TagSupport | undefined,
    ownerTag: undefined,
};
function get(constructMethod) {
    const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.providerConfig;
    const providers = config.providers;
    return providers.find(provider => provider.constructMethod === constructMethod);
}
const providers = {
    create: (constructMethod) => {
        const existing = get(constructMethod);
        if (existing) {
            existing.clone = (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(existing.instance);
            return existing.instance;
        }
        // Providers with provider requirements just need to use providers.create() and providers.inject()
        const instance = constructMethod.constructor ? new constructMethod() : constructMethod();
        const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.providerConfig;
        config.providers.push({
            constructMethod,
            instance,
            clone: (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(instance)
        });
        return instance;
    },
    /**
     * @template T
     * @param {(new (...args: any[]) => T) | () => T} constructor
     * @returns {T}
     */
    inject: (constructor) => {
        const oldValue = get(constructor);
        if (oldValue) {
            return oldValue.instance;
        }
        const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.providerConfig;
        let owner = {
            ownerTag: config.ownerTag
        };
        while (owner.ownerTag) {
            const ownerProviders = owner.ownerTag.tagSupport.memory.providers;
            const provider = ownerProviders.find(provider => {
                if (provider.constructMethod === constructor) {
                    return true;
                }
            });
            if (provider) {
                provider.clone = (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_0__.deepClone)(provider.instance); // keep a copy of the latest before any change occur
                config.providers.push(provider);
                return provider.instance;
            }
            owner = owner.ownerTag; // cause reloop
        }
        const msg = `Could not inject provider: ${constructor.name} ${constructor}`;
        console.warn(`${msg}. Available providers`, config.providers);
        throw new Error(msg);
    }
};
(0,_setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse)({
    beforeRender: (tagSupport, ownerTag) => {
        run(tagSupport, ownerTag);
    },
    beforeRedraw: (tagSupport, tag) => {
        run(tagSupport, tag.ownerTag);
    },
    afterRender: (tagSupport) => {
        const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.providerConfig;
        tagSupport.memory.providers = [...config.providers];
        config.providers.length = 0;
    }
});
function run(tagSupport, ownerTag) {
    const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.providerConfig;
    // config.currentTagSupport = tagSupport
    config.ownerTag = ownerTag;
    if (tagSupport.memory.providers.length) {
        config.providers.length = 0;
        config.providers.push(...tagSupport.memory.providers);
    }
}


/***/ }),

/***/ "../main/ts/redrawTag.function.ts":
/*!****************************************!*\
  !*** ../main/ts/redrawTag.function.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_168659__) => {

__nested_webpack_require_168659__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_168659__.d(__nested_webpack_exports__, {
/* harmony export */   redrawTag: () => (/* binding */ redrawTag)
/* harmony export */ });
function redrawTag(tagSupport, templater, // latest tag function to call for rendering
existingTag, ownerTag) {
    const result = templater.renderWithSupport(tagSupport, existingTag, ownerTag);
    return result;
}


/***/ }),

/***/ "../main/ts/render.ts":
/*!****************************!*\
  !*** ../main/ts/render.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_169301__) => {

__nested_webpack_require_169301__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_169301__.d(__nested_webpack_exports__, {
/* harmony export */   buildClones: () => (/* binding */ buildClones)
/* harmony export */ });
function buildClones(temporary, insertBefore) {
    const clones = [];
    const template = temporary.children[0];
    let nextSibling = template.content.firstChild;
    while (nextSibling) {
        const nextNextSibling = nextSibling.nextSibling;
        buildSibling(nextSibling, insertBefore);
        clones.push(nextSibling);
        nextSibling = nextNextSibling;
    }
    return clones;
}
function buildSibling(nextSibling, insertBefore) {
    const parentNode = insertBefore.parentNode;
    parentNode.insertBefore(nextSibling, insertBefore);
}


/***/ }),

/***/ "../main/ts/renderExistingTag.function.ts":
/*!************************************************!*\
  !*** ../main/ts/renderExistingTag.function.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_170366__) => {

__nested_webpack_require_170366__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_170366__.d(__nested_webpack_exports__, {
/* harmony export */   renderExistingTag: () => (/* binding */ renderExistingTag)
/* harmony export */ });
/* harmony import */ var _hasTagSupportChanged_function__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_170366__(/*! ./hasTagSupportChanged.function */ "../main/ts/hasTagSupportChanged.function.ts");
/* harmony import */ var _provider_utils__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_170366__(/*! ./provider.utils */ "../main/ts/provider.utils.ts");


/** Returns true when rendering owner is not needed. Returns false when rendering owner should occur */
function renderExistingTag(tag, newTemplater, tagSupport) {
    const preRenderCount = tagSupport.memory.renderCount;
    (0,_provider_utils__WEBPACK_IMPORTED_MODULE_1__.providersChangeCheck)(tag);
    // When the providers were checked, a render to myself occurred and I do not need to re-render again
    if (preRenderCount !== tagSupport.memory.renderCount) {
        return true;
    }
    const oldTagSupport = tag.tagSupport;
    const hasChanged = (0,_hasTagSupportChanged_function__WEBPACK_IMPORTED_MODULE_0__.hasTagSupportChanged)(oldTagSupport, newTemplater.tagSupport);
    const oldTemplater = tagSupport.templater;
    tagSupport.newest = oldTemplater.redraw(); // No change detected, just redraw me only
    newTemplater.newest = tagSupport.newest;
    if (!hasChanged) {
        return true;
    }
    return false;
}


/***/ }),

/***/ "../main/ts/scanTextAreaValue.function.ts":
/*!************************************************!*\
  !*** ../main/ts/scanTextAreaValue.function.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_172170__) => {

__nested_webpack_require_172170__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_172170__.d(__nested_webpack_exports__, {
/* harmony export */   scanTextAreaValue: () => (/* binding */ scanTextAreaValue)
/* harmony export */ });
/* harmony import */ var _processAttribute_function__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_172170__(/*! ./processAttribute.function */ "../main/ts/processAttribute.function.ts");

const search = new RegExp('\\s*<template interpolate end id="__tagvar(\\d{1,4})"([^>]*)></template>(\\s*)');
function scanTextAreaValue(textarea, context, ownerTag) {
    const value = textarea.value;
    if (value.search(search) >= 0) {
        const match = value.match(/__tagvar(\d{1,4})/);
        const token = match ? match[0] : '';
        const dynamic = '{' + token + '}';
        textarea.value = '';
        textarea.setAttribute('text-var-value', dynamic);
        const howToSet = (_elm, _name, value) => textarea.value = value;
        (0,_processAttribute_function__WEBPACK_IMPORTED_MODULE_0__.processAttribute)('text-var-value', dynamic, // realValue, // context[token].value,
        textarea, context, ownerTag, howToSet);
    }
}


/***/ }),

/***/ "../main/ts/set.function.ts":
/*!**********************************!*\
  !*** ../main/ts/set.function.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_173568__) => {

__nested_webpack_require_173568__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_173568__.d(__nested_webpack_exports__, {
/* harmony export */   StateEchoBack: () => (/* binding */ StateEchoBack),
/* harmony export */   getStateValue: () => (/* binding */ getStateValue),
/* harmony export */   makeStateResult: () => (/* binding */ makeStateResult),
/* harmony export */   set: () => (/* binding */ set)
/* harmony export */ });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_173568__(/*! ./errors */ "../main/ts/errors.ts");
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_173568__(/*! ./setUse.function */ "../main/ts/setUse.function.ts");


// TODO: rename
_setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.stateConfig = {
    array: [], // state memory on the first render
    rearray: [], // state memory to be used before the next render
};
function makeStateResult(initValue, push) {
    // return initValue
    const result = (y) => {
        push.callback = y || (x => [initValue, initValue = x]);
        return initValue;
    };
    return result;
}
/*
const waitingStates: (() => unknown)[] = []
export function onNextStateOnly(callback: () => unknown) {
  const config: Config = setUse.memory.stateConfig
  
  if(!config.rearray.length) {
    callback()
    return
  }

  waitingStates.push(callback)
}
*/
(0,_setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse)({
    beforeRender: (tagSupport) => initState(tagSupport),
    beforeRedraw: (tagSupport) => initState(tagSupport),
    afterRender: (tagSupport) => {
        const state = tagSupport.memory.state;
        const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.stateConfig;
        if (config.rearray.length) {
            if (config.rearray.length !== config.array.length) {
                const message = `States lengths has changed ${config.rearray.length} !== ${config.array.length}. Typically occurs when a function is intended to be wrapped with a tag() call`;
                const details = {
                    oldStates: config.array,
                    newStates: config.rearray,
                    component: tagSupport.templater?.wrapper.original,
                };
                const error = new _errors__WEBPACK_IMPORTED_MODULE_0__.StateMismatchError(message, details);
                console.warn(message, details);
                throw error;
            }
        }
        config.rearray = []; // clean up any previous runs
        state.newest = [...config.array];
        // config.array.length = 0
        config.array = [];
        // waitingStates.forEach(callback => callback())
        // waitingStates.length = 0
    }
});
function getStateValue(
// state: StateConfig,
state) {
    const callback = state.callback;
    if (!callback) {
        return state.defaultValue;
    }
    const oldState = callback(StateEchoBack); // get value and set to undefined
    const [oldValue] = oldState;
    const [checkValue] = callback(oldValue); // set back to original value
    if (checkValue !== StateEchoBack) {
        const message = 'State property not used correctly. Second item in array is not setting value as expected.\n\n' +
            'For "let" state use `let name = state(default)(x => [name, name = x])`\n\n' +
            'For "const" state use `const name = state(default)()`\n\n' +
            'Problem state:\n' + (callback ? callback.toString() : JSON.stringify(state)) + '\n';
        console.error(message, { state, callback, oldState, oldValue, checkValue });
        throw new Error(message);
    }
    return oldValue;
}
class StateEchoBack {
}
function initState(tagSupport) {
    const state = tagSupport.memory.state;
    const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.stateConfig;
    // TODO: This guard may no longer be needed
    if (config.rearray.length) {
        const message = 'last array not cleared';
        console.error(message, {
            config,
            component: tagSupport.templater?.wrapper.original,
            state,
            expectedClearArray: config.rearray,
        });
        throw new _errors__WEBPACK_IMPORTED_MODULE_0__.StateMismatchError(message, {
            config,
            component: tagSupport.templater?.wrapper.original,
            state,
            expectedClearArray: config.rearray,
        });
    }
    // TODO: this maybe redundant and not needed
    config.rearray = []; // .length = 0
    if (state?.newest.length) {
        config.rearray.push(...state.newest);
    }
}
/** Used for variables that need to remain the same variable during render passes */
function set(defaultValue) {
    const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.stateConfig;
    let getSetMethod;
    const restate = config.rearray[config.array.length];
    if (restate) {
        let oldValue = getStateValue(restate);
        getSetMethod = ((x) => [oldValue, oldValue = x]);
        const push = {
            callback: getSetMethod,
            lastValue: oldValue,
            defaultValue: restate.defaultValue,
        };
        config.array.push(push);
        return oldValue;
    }
    // State first time run
    const defaultFn = defaultValue instanceof Function ? defaultValue : () => defaultValue;
    let initValue = defaultFn();
    getSetMethod = ((x) => [initValue, initValue = x]);
    const push = {
        callback: getSetMethod,
        lastValue: initValue,
        defaultValue: initValue,
    };
    config.array.push(push);
    return initValue;
}


/***/ }),

/***/ "../main/ts/setLet.function.ts":
/*!*************************************!*\
  !*** ../main/ts/setLet.function.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_179417__) => {

__nested_webpack_require_179417__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_179417__.d(__nested_webpack_exports__, {
/* harmony export */   setLet: () => (/* binding */ setLet)
/* harmony export */ });
/* harmony import */ var _set_function__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_179417__(/*! ./set.function */ "../main/ts/set.function.ts");
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_179417__(/*! ./setUse.function */ "../main/ts/setUse.function.ts");


/** Used for variables that need to remain the same variable during render passes */
function setLet(defaultValue) {
    const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.stateConfig;
    let getSetMethod;
    const restate = config.rearray[config.array.length];
    if (restate) {
        let oldValue = (0,_set_function__WEBPACK_IMPORTED_MODULE_0__.getStateValue)(restate);
        getSetMethod = ((x) => [oldValue, oldValue = x]);
        const push = {
            callback: getSetMethod,
            lastValue: oldValue,
            defaultValue: restate.defaultValue,
        };
        config.array.push(push);
        return (0,_set_function__WEBPACK_IMPORTED_MODULE_0__.makeStateResult)(oldValue, push);
    }
    // State first time run
    const defaultFn = defaultValue instanceof Function ? defaultValue : () => defaultValue;
    let initValue = defaultFn();
    getSetMethod = ((x) => [initValue, initValue = x]);
    const push = {
        callback: getSetMethod,
        lastValue: initValue,
        defaultValue: initValue,
    };
    config.array.push(push);
    return (0,_set_function__WEBPACK_IMPORTED_MODULE_0__.makeStateResult)(initValue, push);
}


/***/ }),

/***/ "../main/ts/setProp.function.ts":
/*!**************************************!*\
  !*** ../main/ts/setProp.function.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_181371__) => {

__nested_webpack_require_181371__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_181371__.d(__nested_webpack_exports__, {
/* harmony export */   setProp: () => (/* binding */ setProp)
/* harmony export */ });
/* harmony import */ var _set_function__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_181371__(/*! ./set.function */ "../main/ts/set.function.ts");
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_181371__(/*! ./setUse.function */ "../main/ts/setUse.function.ts");


/** Used for variables that need to remain the same variable during render passes */
function setProp(getSet) {
    const config = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse.memory.stateConfig;
    const [propValue] = getSet(undefined);
    getSet(propValue); // restore original value instead of undefined
    const restate = config.rearray[config.array.length];
    if (restate) {
        let watchValue = restate.watch;
        let oldValue = (0,_set_function__WEBPACK_IMPORTED_MODULE_0__.getStateValue)(restate);
        const push = {
            callback: getSet,
            lastValue: oldValue,
            watch: restate.watch,
        };
        // has the prop value changed?
        if (propValue != watchValue) {
            push.watch = propValue;
            oldValue = push.lastValue = propValue;
        }
        config.array.push(push);
        getSet(oldValue);
        return oldValue;
    }
    const push = {
        callback: getSet,
        lastValue: propValue,
        watch: propValue,
    };
    config.array.push(push);
    return propValue;
}


/***/ }),

/***/ "../main/ts/setUse.function.ts":
/*!*************************************!*\
  !*** ../main/ts/setUse.function.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_183210__) => {

__nested_webpack_require_183210__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_183210__.d(__nested_webpack_exports__, {
/* harmony export */   setUse: () => (/* binding */ setUse)
/* harmony export */ });
const tagUse = [];
function setUse(use) {
    // must provide defaults
    const useMe = {
        beforeRender: use.beforeRender || (() => undefined),
        beforeRedraw: use.beforeRedraw || (() => undefined),
        afterRender: use.afterRender || (() => undefined),
        beforeDestroy: use.beforeDestroy || (() => undefined),
    };
    setUse.tagUse.push(useMe);
}
setUse.tagUse = tagUse;
setUse.memory = {};


/***/ }),

/***/ "../main/ts/tag.ts":
/*!*************************!*\
  !*** ../main/ts/tag.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_184037__) => {

__nested_webpack_require_184037__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_184037__.d(__nested_webpack_exports__, {
/* harmony export */   tag: () => (/* binding */ tag),
/* harmony export */   tags: () => (/* binding */ tags)
/* harmony export */ });
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_184037__(/*! ./isInstance */ "../main/ts/isInstance.ts");
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_184037__(/*! ./setUse.function */ "../main/ts/setUse.function.ts");
/* harmony import */ var _templater_utils__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_184037__(/*! ./templater.utils */ "../main/ts/templater.utils.ts");
/* harmony import */ var _ValueSubject__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_184037__(/*! ./ValueSubject */ "../main/ts/ValueSubject.ts");
/* harmony import */ var _bindSubjectCallback_function__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_184037__(/*! ./bindSubjectCallback.function */ "../main/ts/bindSubjectCallback.function.ts");
/* harmony import */ var _deepFunctions__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_184037__(/*! ./deepFunctions */ "../main/ts/deepFunctions.ts");
/* harmony import */ var _TagSupport_class__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_184037__(/*! ./TagSupport.class */ "../main/ts/TagSupport.class.ts");
/* harmony import */ var _renderExistingTag_function__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_184037__(/*! ./renderExistingTag.function */ "../main/ts/renderExistingTag.function.ts");








const tags = [];
let tagCount = 0;
/** Wraps a tag component in a state manager and always push children to last argument as any array */
// export function tag<T>(a: T): T;
function tag(tagComponent) {
    const result = (function tagWrapper(props, children) {
        const isPropTag = (0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagInstance)(props) || (0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagArray)(props);
        if (isPropTag) {
            children = props;
            props = undefined;
        }
        const { childSubject, madeSubject } = kidsToTagArraySubject(children);
        childSubject.isChildSubject = true;
        const templater = new _templater_utils__WEBPACK_IMPORTED_MODULE_2__.TemplaterResult(props, childSubject);
        const innerTagWrap = getTagWrap(templater, childSubject, madeSubject);
        innerTagWrap.original = tagComponent;
        templater.tagged = true;
        templater.wrapper = innerTagWrap;
        return templater;
    }); // we override the function provided and pretend original is what's returned
    updateResult(result, tagComponent);
    // group tags together and have hmr pickup
    updateComponent(tagComponent);
    tags.push(tagComponent);
    return result;
}
function kidsToTagArraySubject(children) {
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isSubjectInstance)(children)) {
        return { childSubject: children, madeSubject: false };
    }
    const kidArray = children;
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagArray)(kidArray)) {
        return { childSubject: new _ValueSubject__WEBPACK_IMPORTED_MODULE_3__.ValueSubject(children), madeSubject: true };
    }
    const kid = children;
    if (kid) {
        kid.arrayValue = 0;
        return { childSubject: new _ValueSubject__WEBPACK_IMPORTED_MODULE_3__.ValueSubject([kid]), madeSubject: true };
    }
    return { childSubject: new _ValueSubject__WEBPACK_IMPORTED_MODULE_3__.ValueSubject([]), madeSubject: true };
}
function updateResult(result, tagComponent) {
    result.isTag = true;
    result.original = tagComponent;
}
function updateComponent(tagComponent) {
    tagComponent.tags = tags;
    tagComponent.setUse = _setUse_function__WEBPACK_IMPORTED_MODULE_1__.setUse;
    tagComponent.tagIndex = tagCount++; // needed for things like HMR
}
function getTagWrap(templater, childSubject, madeSubject) {
    const innerTagWrap = function (oldTagSetup) {
        const originalFunction = innerTagWrap.original;
        // const oldTagSetup = templater.tagSupport
        const oldest = templater.oldest;
        let props = oldTagSetup.propsConfig.latest;
        let castedProps = (0,_templater_utils__WEBPACK_IMPORTED_MODULE_2__.alterProps)(props, templater);
        // CALL ORIGINAL COMPONENT FUNCTION
        const tag = originalFunction(castedProps, childSubject);
        if (oldTagSetup.mutatingRender === _TagSupport_class__WEBPACK_IMPORTED_MODULE_6__.TagSupport.prototype.mutatingRender) {
            oldTagSetup.oldest = tag;
            templater.oldest = tag;
            // tag.tagSupport = oldTagSetup
            oldTagSetup.mutatingRender = () => {
                const exit = (0,_renderExistingTag_function__WEBPACK_IMPORTED_MODULE_7__.renderExistingTag)(templater.oldest, templater, oldTagSetup);
                if (exit) {
                    return tag;
                }
                // Have owner re-render
                if (tag.ownerTag) {
                    const newest = tag.ownerTag.tagSupport.render();
                    // TODO: Next line most likely not needed
                    tag.ownerTag.tagSupport.newest = newest;
                    return tag;
                }
                return tag;
            };
        }
        tag.tagSupport = new _TagSupport_class__WEBPACK_IMPORTED_MODULE_6__.TagSupport(templater, oldTagSetup.children);
        const clonedProps = (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_5__.deepClone)(castedProps); // castedProps
        tag.tagSupport.propsConfig = {
            latest: props, // castedProps
            latestCloned: clonedProps,
            clonedProps: clonedProps,
            lastClonedKidValues: tag.tagSupport.propsConfig.lastClonedKidValues,
        };
        tag.tagSupport.memory = oldTagSetup.memory;
        // ???
        // tag.tagSupport.memory = {...oldTagSetup.memory}
        // tag.tagSupport.memory.context = {...oldTagSetup.memory.context}
        tag.tagSupport.mutatingRender = oldTagSetup.mutatingRender;
        oldTagSetup.newest = tag;
        oldTagSetup.propsConfig = { ...tag.tagSupport.propsConfig };
        if (oldest) {
            oldest.tagSupport.propsConfig = { ...tag.tagSupport.propsConfig };
        }
        if (madeSubject) {
            childSubject.value.forEach(kid => {
                kid.values.forEach((value, index) => {
                    if (!(value instanceof Function)) {
                        return;
                    }
                    if (kid.values[index].isChildOverride) {
                        return; // already overwritten
                    }
                    // all functions need to report to me
                    kid.values[index] = function (...args) {
                        (0,_bindSubjectCallback_function__WEBPACK_IMPORTED_MODULE_4__.runTagCallback)(value, tag.ownerTag, this, args);
                        // runTagCallback(value, tag, this, args)
                    };
                    kid.values[index].isChildOverride = true;
                });
            });
        }
        return tag;
    };
    return innerTagWrap;
}


/***/ }),

/***/ "../main/ts/tagElement.ts":
/*!********************************!*\
  !*** ../main/ts/tagElement.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_191380__) => {

__nested_webpack_require_191380__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_191380__.d(__nested_webpack_exports__, {
/* harmony export */   addAppTagRender: () => (/* binding */ addAppTagRender),
/* harmony export */   applyTagUpdater: () => (/* binding */ applyTagUpdater),
/* harmony export */   tagElement: () => (/* binding */ tagElement)
/* harmony export */ });
/* harmony import */ var _tagRunner__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_191380__(/*! ./tagRunner */ "../main/ts/tagRunner.ts");
/* harmony import */ var _renderExistingTag_function__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_191380__(/*! ./renderExistingTag.function */ "../main/ts/renderExistingTag.function.ts");


const appElements = [];
function tagElement(app, // (...args: unknown[]) => TemplaterResult,
element, props) {
    const appElmIndex = appElements.findIndex(appElm => appElm.element === element);
    if (appElmIndex >= 0) {
        appElements[appElmIndex].tag.destroy();
        appElements.splice(appElmIndex, 1);
        // an element already had an app on it
        console.warn('Found and destroyed app element already rendered to element', { element });
    }
    // Create the app which returns [props, runOneTimeFunction]
    const wrapper = app(props);
    // have a function setup and call the tagWrapper with (props, {update, async, on})
    const result = applyTagUpdater(wrapper);
    const { tag } = result;
    tag.appElement = element;
    tag.tagSupport.oldest = tag;
    addAppTagRender(tag.tagSupport, tag);
    const templateElm = document.createElement('template');
    templateElm.setAttribute('id', 'app-tag-' + appElements.length);
    templateElm.setAttribute('app-tag-detail', appElements.length.toString());
    element.appendChild(templateElm);
    tag.buildBeforeElement(templateElm);
    element.setUse = app.original.setUse;
    appElements.push({ element, tag });
    return { tag, tags: app.original.tags };
}
function applyTagUpdater(wrapper) {
    const tagSupport = wrapper.tagSupport;
    (0,_tagRunner__WEBPACK_IMPORTED_MODULE_0__.runBeforeRender)(tagSupport, undefined);
    // Call the apps function for our tag templater
    const tag = wrapper.wrapper(tagSupport);
    (0,_tagRunner__WEBPACK_IMPORTED_MODULE_0__.runAfterRender)(tagSupport, tag);
    return { tag, tagSupport };
}
/** Overwrites arguments.tagSupport.mutatingRender */
function addAppTagRender(tagSupport, tag) {
    tagSupport.templater.redraw = () => {
        const existingTag = tag;
        const { retag } = tagSupport.templater.renderWithSupport(tagSupport, existingTag, // newest
        {});
        tag.updateByTag(retag);
        return retag;
    };
    tagSupport.mutatingRender = () => {
        (0,_renderExistingTag_function__WEBPACK_IMPORTED_MODULE_1__.renderExistingTag)(tag, tagSupport.templater, tagSupport);
        return tag;
    };
}


/***/ }),

/***/ "../main/ts/tagRunner.ts":
/*!*******************************!*\
  !*** ../main/ts/tagRunner.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_194465__) => {

__nested_webpack_require_194465__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_194465__.d(__nested_webpack_exports__, {
/* harmony export */   runAfterRender: () => (/* binding */ runAfterRender),
/* harmony export */   runBeforeDestroy: () => (/* binding */ runBeforeDestroy),
/* harmony export */   runBeforeRedraw: () => (/* binding */ runBeforeRedraw),
/* harmony export */   runBeforeRender: () => (/* binding */ runBeforeRender)
/* harmony export */ });
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_194465__(/*! ./setUse.function */ "../main/ts/setUse.function.ts");
// TODO: This should be more like `new TaggedJs().use({})`

// Life cycle 1
function runBeforeRender(tagSupport, tagOwner) {
    _setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse.tagUse.forEach(tagUse => tagUse.beforeRender(tagSupport, tagOwner));
}
// Life cycle 2
function runAfterRender(tagSupport, tag) {
    _setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse.tagUse.forEach(tagUse => tagUse.afterRender(tagSupport, tag));
}
// Life cycle 3
function runBeforeRedraw(tagSupport, tag) {
    _setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse.tagUse.forEach(tagUse => tagUse.beforeRedraw(tagSupport, tag));
}
// Life cycle 4 - end of life
function runBeforeDestroy(tagSupport, tag) {
    _setUse_function__WEBPACK_IMPORTED_MODULE_0__.setUse.tagUse.forEach(tagUse => tagUse.beforeDestroy(tagSupport, tag));
}


/***/ }),

/***/ "../main/ts/templater.utils.ts":
/*!*************************************!*\
  !*** ../main/ts/templater.utils.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_196144__) => {

__nested_webpack_require_196144__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_196144__.d(__nested_webpack_exports__, {
/* harmony export */   TemplaterResult: () => (/* binding */ TemplaterResult),
/* harmony export */   alterProps: () => (/* binding */ alterProps)
/* harmony export */ });
/* harmony import */ var _TagSupport_class__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_196144__(/*! ./TagSupport.class */ "../main/ts/TagSupport.class.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_196144__(/*! ./isInstance */ "../main/ts/isInstance.ts");
/* harmony import */ var _tagRunner__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_196144__(/*! ./tagRunner */ "../main/ts/tagRunner.ts");
/* harmony import */ var _setUse_function__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_196144__(/*! ./setUse.function */ "../main/ts/setUse.function.ts");




class TemplaterResult {
    tagged;
    wrapper;
    insertBefore;
    newest;
    oldest;
    tagSupport;
    constructor(props, children) {
        this.tagSupport = new _TagSupport_class__WEBPACK_IMPORTED_MODULE_0__.TagSupport(this, children, props);
    }
    redraw;
    isTemplater = true;
    renderWithSupport(tagSupport, existingTag, ownerTag) {
        /* BEFORE RENDER */
        // signify to other operations that a rendering has occurred so they do not need to render again
        ++tagSupport.memory.renderCount;
        const runtimeOwnerTag = existingTag?.ownerTag || ownerTag;
        // const insertBefore = tagSupport.templater.insertBefore
        if (existingTag) {
            tagSupport.propsConfig = { ...existingTag.tagSupport.propsConfig };
            (0,_tagRunner__WEBPACK_IMPORTED_MODULE_2__.runBeforeRedraw)(tagSupport, existingTag);
        }
        else {
            // first time render
            (0,_tagRunner__WEBPACK_IMPORTED_MODULE_2__.runBeforeRender)(tagSupport, runtimeOwnerTag);
            // TODO: Logic below most likely could live within providers.ts inside the runBeforeRender function
            const providers = _setUse_function__WEBPACK_IMPORTED_MODULE_3__.setUse.memory.providerConfig;
            providers.ownerTag = runtimeOwnerTag;
        }
        /* END: BEFORE RENDER */
        const templater = this;
        const retag = templater.wrapper(tagSupport);
        /* AFTER */
        (0,_tagRunner__WEBPACK_IMPORTED_MODULE_2__.runAfterRender)(tagSupport, retag);
        templater.newest = retag;
        retag.ownerTag = runtimeOwnerTag;
        tagSupport.newest = retag;
        return { remit: true, retag };
    }
}
/* Used to rewrite props that are functions. When they are called it should cause parent rendering */
function alterProps(props, templater) {
    function callback(toCall, callWith) {
        const callbackResult = toCall(...callWith);
        // const tag = templater.oldest as Tag
        const tag = templater.newest;
        // const tagSupport = tag.tagSupport
        // const tagSupport = templater.tagSupport
        const tagSupport = tag?.ownerTag?.tagSupport;
        tagSupport.render();
        return callbackResult;
    }
    const isPropTag = (0,_isInstance__WEBPACK_IMPORTED_MODULE_1__.isTagInstance)(props);
    const watchProps = isPropTag ? 0 : props;
    const newProps = resetFunctionProps(watchProps, callback);
    return newProps;
}
function resetFunctionProps(props, callback) {
    if (typeof (props) !== 'object') {
        return props;
    }
    const newProps = props;
    // BELOW: Do not clone because if first argument is object, the memory ref back is lost
    // const newProps = {...props} 
    Object.entries(newProps).forEach(([name, value]) => {
        if (value instanceof Function) {
            const original = newProps[name].original;
            if (original) {
                return; // already previously converted
            }
            newProps[name] = (...args) => {
                return callback(value, args);
            };
            newProps[name].original = value;
            return;
        }
    });
    return newProps;
}


/***/ }),

/***/ "../main/ts/updateExistingTag.function.ts":
/*!************************************************!*\
  !*** ../main/ts/updateExistingTag.function.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_200491__) => {

__nested_webpack_require_200491__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_200491__.d(__nested_webpack_exports__, {
/* harmony export */   updateExistingTag: () => (/* binding */ updateExistingTag)
/* harmony export */ });
/* harmony import */ var _tagRunner__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_200491__(/*! ./tagRunner */ "../main/ts/tagRunner.ts");

function updateExistingTag(templater, ogTag, existingSubject) {
    const tagSupport = ogTag.tagSupport;
    const oldest = tagSupport.oldest;
    const newest = tagSupport.newest;
    // runBeforeRedraw(oldest.tagSupport, newest || oldest)
    (0,_tagRunner__WEBPACK_IMPORTED_MODULE_0__.runBeforeRedraw)(oldest.tagSupport, oldest);
    const retag = templater.wrapper(tagSupport);
    templater.newest = retag;
    tagSupport.newest = retag;
    (0,_tagRunner__WEBPACK_IMPORTED_MODULE_0__.runAfterRender)(oldest.tagSupport, oldest);
    ogTag.updateByTag(retag);
    // oldest.updateByTag(retag)
    existingSubject.set(templater);
    return [];
}


/***/ }),

/***/ "../main/ts/updateExistingTagComponent.function.ts":
/*!*********************************************************!*\
  !*** ../main/ts/updateExistingTagComponent.function.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_201834__) => {

__nested_webpack_require_201834__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_201834__.d(__nested_webpack_exports__, {
/* harmony export */   updateExistingTagComponent: () => (/* binding */ updateExistingTagComponent)
/* harmony export */ });
/* harmony import */ var _Tag_utils__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_201834__(/*! ./Tag.utils */ "../main/ts/Tag.utils.ts");
/* harmony import */ var _deepFunctions__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_201834__(/*! ./deepFunctions */ "../main/ts/deepFunctions.ts");
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_201834__(/*! ./isInstance */ "../main/ts/isInstance.ts");
/* harmony import */ var _hasTagSupportChanged_function__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_201834__(/*! ./hasTagSupportChanged.function */ "../main/ts/hasTagSupportChanged.function.ts");
/* harmony import */ var _checkDestroyPrevious_function__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_201834__(/*! ./checkDestroyPrevious.function */ "../main/ts/checkDestroyPrevious.function.ts");





function updateExistingTagComponent(ownerTag, tempResult, existingSubject) {
    let existingTag = existingSubject.tag;
    //const template = existingSubject.template
    const insertBefore = existingTag.tagSupport.templater.insertBefore;
    // tag existingTag
    const oldWrapper = existingTag.tagSupport.templater.wrapper;
    const newWrapper = tempResult.wrapper;
    let isSameTag = false;
    if (oldWrapper && newWrapper) {
        const oldFunction = oldWrapper.original;
        const newFunction = newWrapper.original;
        isSameTag = oldFunction === newFunction;
    }
    const latestProps = tempResult.tagSupport.propsConfig.latest;
    const oldTagSetup = existingTag.tagSupport;
    oldTagSetup.propsConfig.latest = latestProps;
    if (!isSameTag) {
        (0,_checkDestroyPrevious_function__WEBPACK_IMPORTED_MODULE_4__.destroyTagMemory)(existingTag, existingSubject);
    }
    else {
        const subjectTagSupport = existingTag.tagSupport;
        // old props may have changed, reclone first
        let oldCloneProps = subjectTagSupport.propsConfig.clonedProps;
        const newProps = subjectTagSupport.propsConfig.latest;
        // if the new props are NOT HTML children, then clone the props for later render cycle comparing
        if (!(0,_isInstance__WEBPACK_IMPORTED_MODULE_2__.isTagInstance)(newProps)) {
            oldCloneProps = (0,_deepFunctions__WEBPACK_IMPORTED_MODULE_1__.deepClone)(newProps);
        }
        const newTagSupport = tempResult.tagSupport;
        const hasChanged = (0,_hasTagSupportChanged_function__WEBPACK_IMPORTED_MODULE_3__.hasTagSupportChanged)(oldTagSetup, newTagSupport);
        if (!hasChanged) {
            return; // its the same tag component
        }
    }
    (0,_Tag_utils__WEBPACK_IMPORTED_MODULE_0__.setValueRedraw)(tempResult, existingSubject, ownerTag);
    oldTagSetup.templater = tempResult;
    const newTag = tempResult.redraw();
    // detect if both the function is the same and the return is the same
    const isLikeTag = isSameTag && existingTag.isLikeTag(newTag);
    if (isLikeTag) {
        existingTag.updateByTag(newTag);
    }
    else {
        existingSubject.tagSupport = newTag.tagSupport;
        existingSubject.tag = newTag;
        oldTagSetup.oldest = newTag;
        // Although function looked the same it returned a different html result
        if (isSameTag) {
            existingTag.destroy();
        }
    }
    oldTagSetup.newest = newTag;
    oldTagSetup.propsConfig = { ...tempResult.tagSupport.propsConfig };
    return;
}


/***/ }),

/***/ "../main/ts/updateExistingValue.function.ts":
/*!**************************************************!*\
  !*** ../main/ts/updateExistingValue.function.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_205740__) => {

__nested_webpack_require_205740__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_205740__.d(__nested_webpack_exports__, {
/* harmony export */   updateExistingValue: () => (/* binding */ updateExistingValue)
/* harmony export */ });
/* harmony import */ var _isInstance__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_205740__(/*! ./isInstance */ "../main/ts/isInstance.ts");
/* harmony import */ var _bindSubjectCallback_function__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_205740__(/*! ./bindSubjectCallback.function */ "../main/ts/bindSubjectCallback.function.ts");
/* harmony import */ var _processSubjectValue_function__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_205740__(/*! ./processSubjectValue.function */ "../main/ts/processSubjectValue.function.ts");
/* harmony import */ var _processTagArray__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_205740__(/*! ./processTagArray */ "../main/ts/processTagArray.ts");
/* harmony import */ var _updateExistingTagComponent_function__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_205740__(/*! ./updateExistingTagComponent.function */ "../main/ts/updateExistingTagComponent.function.ts");
/* harmony import */ var _updateExistingTag_function__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_205740__(/*! ./updateExistingTag.function */ "../main/ts/updateExistingTag.function.ts");
/* harmony import */ var _processRegularValue_function__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_205740__(/*! ./processRegularValue.function */ "../main/ts/processRegularValue.function.ts");
/* harmony import */ var _checkDestroyPrevious_function__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_205740__(/*! ./checkDestroyPrevious.function */ "../main/ts/checkDestroyPrevious.function.ts");








function updateExistingValue(subject, value, ownerTag) {
    const subjectSubArray = subject;
    const subjectSubTag = subject;
    const isChildSubject = subjectSubArray.isChildSubject;
    const isComponent = (0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagComponent)(value);
    // If we are working with tag component 2nd argument children, the value has to be digged
    if (isChildSubject) {
        value = value.value; // A subject contains the value
    }
    const oldInsertBefore = subject.template || subjectSubTag.tag?.tagSupport.templater.insertBefore || subjectSubTag.clone;
    (0,_checkDestroyPrevious_function__WEBPACK_IMPORTED_MODULE_7__.checkDestroyPrevious)(subject, value);
    // handle already seen tag components
    if (isComponent) {
        if (!subjectSubTag.tag) {
            const templater = value;
            const { retag } = templater.renderWithSupport(value.tagSupport, undefined, ownerTag);
            templater.newest = retag;
            templater.oldest = retag;
            subjectSubTag.tag = retag;
            subjectSubTag.tagSupport = retag.tagSupport;
            retag.buildBeforeElement(oldInsertBefore, {
                forceElement: true,
                counts: { added: 0, removed: 0 },
            });
            return;
        }
        return (0,_updateExistingTagComponent_function__WEBPACK_IMPORTED_MODULE_4__.updateExistingTagComponent)(ownerTag, value, // latest value
        subjectSubTag);
    }
    // was component but no longer
    const subjectTag = subjectSubTag.tag;
    if (subjectTag) {
        handleStillTag(subjectTag, subject, value, ownerTag);
        return;
    }
    // its another tag array
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagArray)(value)) {
        const insertBefore = subjectSubArray.template || subjectSubTag.tag?.tagSupport.templater.insertBefore;
        (0,_processTagArray__WEBPACK_IMPORTED_MODULE_3__.processTagArray)(subject, value, insertBefore, ownerTag, { counts: {
                added: 0,
                removed: 0,
            } });
        return;
    }
    // now its a function
    if (value instanceof Function) {
        subjectSubTag.set((0,_bindSubjectCallback_function__WEBPACK_IMPORTED_MODULE_1__.bindSubjectCallback)(value, ownerTag));
        return;
    }
    // we have been given a subject
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isSubjectInstance)(value)) {
        subjectSubTag.set(value.value); // let ValueSubject now of newest value
        return;
    }
    if ((0,_isInstance__WEBPACK_IMPORTED_MODULE_0__.isTagInstance)(value)) {
        subjectSubTag.template = oldInsertBefore;
    }
    // This will cause all other values to render
    subjectSubTag.set(value); // let ValueSubject now of newest value
    return;
}
function handleStillTag(existingTag, existing, value, ownerTag) {
    const oldWrapper = existingTag.tagSupport.templater.wrapper;
    const newWrapper = value?.wrapper;
    const wrapMatch = oldWrapper && newWrapper && oldWrapper?.original === newWrapper?.original;
    // TODO: We shouldn't need both of these
    const isSameTag = value && existingTag.lastTemplateString === value.lastTemplateString;
    const isSameTag2 = value && value.getTemplate && existingTag.isLikeTag(value);
    if (isSameTag || isSameTag2) {
        return (0,_processSubjectValue_function__WEBPACK_IMPORTED_MODULE_2__.processTag)(value, existing, existing.template, ownerTag, // existingTag, // tag,
        {
            counts: {
                added: 0,
                removed: 0,
            }
        });
    }
    if (wrapMatch) {
        return (0,_updateExistingTag_function__WEBPACK_IMPORTED_MODULE_5__.updateExistingTag)(value, existingTag, existing);
    }
    const subject = existing;
    return (0,_processRegularValue_function__WEBPACK_IMPORTED_MODULE_6__.processRegularValue)(value, subject, subject.template);
}


/***/ }),

/***/ "../main/ts/watch.function.ts":
/*!************************************!*\
  !*** ../main/ts/watch.function.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_211574__) => {

__nested_webpack_require_211574__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_211574__.d(__nested_webpack_exports__, {
/* harmony export */   watch: () => (/* binding */ watch)
/* harmony export */ });
/* harmony import */ var _setLet_function__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_211574__(/*! ./setLet.function */ "../main/ts/setLet.function.ts");

/** When an item in watch array changes, callback function will be triggered */
function watch(currentValues, callback) {
    let previousValues = (0,_setLet_function__WEBPACK_IMPORTED_MODULE_0__.setLet)(undefined)(x => [previousValues, previousValues = x]);
    if (previousValues === undefined) {
        callback(currentValues, previousValues);
        const result = { currentValues, previousValues };
        previousValues = currentValues;
        return currentValues;
    }
    const allExact = currentValues.every((item, index) => item === previousValues[index]);
    if (allExact) {
        return currentValues;
    }
    callback(currentValues, previousValues);
    previousValues = currentValues;
    return currentValues;
}


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __nested_webpack_require_212910__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_212910__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__nested_webpack_require_212910__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__nested_webpack_require_212910__.o(definition, key) && !__nested_webpack_require_212910__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__nested_webpack_require_212910__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_212910__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __nested_webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__nested_webpack_require_212910__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_212910__.d(__nested_webpack_exports__, {
/* harmony export */   App: () => (/* reexport safe */ _app_component__WEBPACK_IMPORTED_MODULE_0__.App),
/* harmony export */   IsolatedApp: () => (/* reexport safe */ _isolatedApp__WEBPACK_IMPORTED_MODULE_1__.IsolatedApp),
/* harmony export */   hmr: () => (/* reexport safe */ taggedjs__WEBPACK_IMPORTED_MODULE_2__.hmr)
/* harmony export */ });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_212910__(/*! ./app.component */ "./src/app.component.ts");
/* harmony import */ var _isolatedApp__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_212910__(/*! ./isolatedApp */ "./src/isolatedApp.ts");
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_212910__(/*! taggedjs */ "../main/ts/index.ts");




})();

var __webpack_exports__App = __nested_webpack_exports__.App;
var __webpack_exports__IsolatedApp = __nested_webpack_exports__.IsolatedApp;
var __webpack_exports__hmr = __nested_webpack_exports__.hmr;


//# sourceMappingURL=bundle.js.map

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./assets/index.hmr.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* reexport safe */ _dist_bundle_js__WEBPACK_IMPORTED_MODULE_0__.App),
/* harmony export */   IsolatedApp: () => (/* reexport safe */ _dist_bundle_js__WEBPACK_IMPORTED_MODULE_0__.IsolatedApp),
/* harmony export */   hmr: () => (/* reexport safe */ _dist_bundle_js__WEBPACK_IMPORTED_MODULE_0__.hmr)
/* harmony export */ });
/* harmony import */ var _dist_bundle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dist/bundle.js */ "./assets/dist/bundle.js");
console.log('*** hmr index ***')
/*
export { hmr } from "taggedjs"
export { App } from "./js/app.component.js"
export { IsolatedApp } from "./js/isolatedApp.js"
*/





})();

var __webpack_exports__App = __webpack_exports__.App;
var __webpack_exports__IsolatedApp = __webpack_exports__.IsolatedApp;
var __webpack_exports__hmr = __webpack_exports__.hmr;
export { __webpack_exports__App as App, __webpack_exports__IsolatedApp as IsolatedApp, __webpack_exports__hmr as hmr };

//# sourceMappingURL=bundle.hmr.js.map