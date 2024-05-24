import { html, letState, state, subject, tag, ValueSubject } from "taggedjs"
import { renderCountDiv } from "./renderCount.component"

/** this tag renders only once */
export const oneRender = () => tag.oneRender = (
  counter = new ValueSubject(0),
  renderCount = letState(0)(x => [renderCount, renderCount = x]), // state can be used but it never updates
) => {
  ++renderCount
  return html`
    <span>👍<span id="👍-counter-display">${counter}</span></span>
    <button type="button" id="👍-counter-button"
      onclick=${() => {
        ++counter.value
      }}
    >++👍</button>
    ${renderCountDiv({renderCount, name:'oneRender_tag_ts'})}
    <hr />
    ${insideMultiRender()}
  `
}

/** this tag renders on every event but should not cause parent to re-render */
const insideMultiRender = tag(() => (
  counter = letState(0)(x => [counter, counter = x]),
  counter$ = subject.value(0),
  renderCount = letState(0)(x => [renderCount, renderCount = x]), // state can be used but it never updates
) => {
  ++renderCount
  return html`
  <span>👍👍 sub counter-subject-display:<span id="👍👍-counter-subject-display">${counter$}</span></span>
  <br />
  <span>👍👍 sub counter<span id="👍👍-counter-display">${counter}</span></span>
  <br />
  <button type="button" id="👍👍-counter-button"
    onclick=${() => {
      ++counter
      counter$.set(counter)
    }}
  >++👍👍</button>
  ${renderCountDiv({renderCount, name:'insideMultiRender'})}
`
})
