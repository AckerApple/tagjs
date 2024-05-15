import { children, Tag, TagChildren, html, letState, tag } from "taggedjs"
import { innerHtmlPropsTest, innerHtmlTest } from "./innerHtmlTests"
import { renderCountDiv } from "./renderCount.component"

const test22 = tag((a:number, b:number) => html`
  <fieldset>
    <legend>xxxxx</legend>  
    <div>hello other world ${a} - ${b}</div>
    <div style="border:2px solid red;">***${children()}***</div>
  </fieldset>
`)

export const childTests = tag((_: string = 'childTests') => (
  renderCount = letState(0)(x => [renderCount, renderCount = x]),
  counter = letState(0)(x => [counter, counter = x]),
) => html`
  <fieldset id="children-test" style="flex:2 2 20em">
    <legend>childTests</legend>

    <hr />
    <hr />
    <hr />
    ${test22(1,2).
    html`
      <div><hr />abc-123-${Date.now()}<hr /></div>
    `}
    <hr />
    <hr />
    <hr />
    
    ${innerHtmlTest({}, 2).
    html`
      <b>Field set body A</b>
      <hr />
      <button id="innerHtmlTest-childTests-button"
        onclick=${() => ++counter}
      >🐮 increase childTests inside ${counter}:${renderCount}</button>
      <span id="innerHtmlTest-childTests-display">${counter}</span>
      ${renderCountDiv({renderCount, name: 'childTests-innerHtmlTest'})}
    `}

    ${innerHtmlPropsTest(22).
    html`
      <b>Field set body B</b>
      <hr />
      <button id="innerHtmlPropsTest-childTests-button"
        onclick=${() => ++counter}
      >🐮 increase childTests inside ${counter}</button>
      <span id="innerHtmlPropsTest-childTests-display">${counter}</span>
      ${renderCountDiv({renderCount, name: 'innerHtmlPropsTest child'})}
    `}

    ${childAsPropTest({child: html`
      hello child as prop test
      <button id="child-as-prop-test-button"
        onclick=${() => ++counter}
      >🐮 child as prop ${counter}</button>
      <span id="child-as-prop-test-display">${counter}</span>
    `})}
    
    <hr />
    
    <button id="childTests-button"
      onclick=${() => ++counter}
    >🐮 increase childTests outside ${counter} - ${renderCount}</button>
    <span id="childTests-display">${counter}</span>
    ${renderCountDiv({renderCount, name:'childTests'})}
  </fieldset>
`)

function childAsPropTest({child}: {child:Tag}) {
  return html`
    <fieldset>
      <legend>child as prop</legend>
      ${child}
    </fieldset>
  `
}
