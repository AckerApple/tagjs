import { html, states, tag, isSubjectInstance, Tag } from "taggedjs"
import { renderCountDiv } from "./renderCount.component"

export const innerHtmlTest = tag((
  _props: unknown,
  b:number,
  children: Tag,
) => {
  let counter = 0
  let renderCount = 0
  states(get => [{counter, renderCount}] = get({counter, renderCount}))

  ++renderCount

  return html`<!--innerHtmlTests.js-->
    <fieldset id="innerHtmlTests-1">
      <legend>no props test</legend>
      <div style="border:2px solid purple;">${children}</div>
      <div>isSubjectInstance:${isSubjectInstance(children)}</div>
      <div>isSubjectTagArray:${children instanceof Array}</div>
      <button id="innerHtmlTest-counter-button"
      onclick=${() => ++counter}>increase innerHtmlTest ${counter}</button>
      <span id="innerHtmlTest-counter-display">${counter}</span>
      ${renderCountDiv({renderCount, name: 'innerHtmlTest'})}
    </fieldset>
  `
})

export const innerHtmlPropsTest = tag((
  x: number, children: Tag,
) => (
  counter = 0,
  renderCount = 0,
  _ = states(get => [{counter, renderCount}] = get({counter, renderCount})),
  __ = ++renderCount,
) => html`<!--innerHtmlTests.js-->
  <fieldset id="innerHtmlTests-2">
    <legend>innerHTML Props: ${x}</legend>
    ${children}
    <button id="innerHtmlPropsTest-button" onclick=${() => ++counter}
    >increase innerHtmlPropsTest ${counter}</button>
    <span id="innerHtmlPropsTest-display">${counter}</span>
    ${/*renderCountDiv(renderCount)*/ false}
  </fieldset>
`)
