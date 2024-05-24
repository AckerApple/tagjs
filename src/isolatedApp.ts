import { childTests } from "./childTests"
import { Subject, callbackMaker, html, onInit, letState, tag, state } from "taggedjs"
import { arrayTests } from "./arrayTests"
import { tagSwitchDebug } from "./tagSwitchDebug.component"
import { mirroring } from "./mirroring.tag"
import { propsDebugMain } from "./PropsDebug.component"
import { providerDebugBase } from "./providerDebug"
import { counters } from "./countersDebug"
import { tableDebug } from "./tableDebug.component"
import { contentDebug } from "./ContentDebug.component"
import { watchTesting } from "./watchTesting.tag"
import { oneRender } from "./oneRender.tag"
import { renderCountDiv } from "./renderCount.component"

type viewTypes = 'oneRender' | 'watchTesting' | 'mirroring' | 'content' | 'arrays' | 'counters' | 'tableDebug' | 'props' | 'child' | 'tagSwitchDebug' | 'providerDebug'

export default tag(() => {
  const views: viewTypes[] = [
    'content',
    // 'counters',
    // 'watchTesting',
    'oneRender',
    // 'props',
    // 'mirroring',
    // 'providerDebug',
    
    // 'arrays',
    // 'tagSwitchDebug',
    
    // 'child',
  ]
  
  let renderCount = letState(0)(x => [renderCount, renderCount = x])
  let appCounter = letState(0)(x => [appCounter, appCounter=x])
  const appCounterSubject = state(() => new Subject(appCounter))
  const callback = callbackMaker()
  onInit(() => {
    console.info('1️⃣ app init should only run once')    

    appCounterSubject.subscribe(
      callback(x => {
        appCounter = x
      })
    )
  })

  ++renderCount

  return html`<!--isolatedApp.js-->
    <h1 id="app">🏷️ TaggedJs - isolated</h1>

    <div>
      <button id="app-counter-subject-button"
        onclick=${() => appCounterSubject.set(appCounter + 1)}
      >🍒 ++app subject</button>
      <span>
        🍒 <span id="app-counter-subject-button">${appCounter}</span>
      </span>
    </div>

    <div id="tagDebug-fx-wrap">
      <div style="display:flex;flex-wrap:wrap;gap:1em">
        ${views.includes('oneRender') && html`
          <fieldset style="flex:2 2 20em">
            <legend>oneRender</legend>
            ${oneRender()}
          </fieldset>
        `}

        ${views.includes('props') && html`
          <fieldset style="flex:2 2 20em">
            <legend>propsDebugMain</legend>
            ${propsDebugMain(undefined)}
          </fieldset>
        `}

        ${views.includes('watchTesting') && html`
          <fieldset style="flex:2 2 20em">
            <legend>watchTesting</legend>
            ${watchTesting()}
          </fieldset>
        `}

        ${views.includes('tableDebug') && html`
          <fieldset style="flex:2 2 20em">
            <legend>tableDebug</legend>
            ${tableDebug()}
          </fieldset>
        `}

        ${views.includes('providerDebug') && html`
          <fieldset style="flex:2 2 20em">
            <legend>providerDebugBase</legend>
            ${providerDebugBase(undefined)}
          </fieldset>
        `}

        ${views.includes('tagSwitchDebug') && html`
          <fieldset style="flex:2 2 20em">
            <legend>tagSwitchDebug</legend>
            ${tagSwitchDebug(undefined)}
          </fieldset>
        `}

        ${views.includes('mirroring') && html`
          <fieldset style="flex:2 2 20em">
            <legend>mirroring</legend>
            ${mirroring()}
          </fieldset>
        `}

        ${views.includes('arrays') && html`
          <fieldset style="flex:2 2 20em">
            <legend>arrays</legend>
            ${arrayTests()}
          </fieldset>
        `}

        ${views.includes('counters') && html`
          <fieldset style="flex:2 2 20em">
            <legend>counters</legend>
            ${counters({appCounterSubject})}
          </fieldset>
        `}

        ${views.includes('content') && html`
          <fieldset style="flex:2 2 20em">
            <legend>content</legend>
            ${contentDebug()}
          </fieldset>
        `}

        ${views.includes('child') && html`
          <fieldset style="flex:2 2 20em">
            <legend>Children Tests</legend>
            ${childTests(undefined)}
          </fieldset>
        `}

        ${/*
          <textarea style="font-size:0.6em;min-width:50vw;height:400px">${ template.string }</textarea>
          <textarea style="font-size:0.6em;min-width:50vw;height:400px">${ JSON.stringify(template, null, 2) }</textarea>
          */ false
        }
      </div>
      ${renderCountDiv({renderCount, name:'isolatedApp'})}
    </div>
  `
})
