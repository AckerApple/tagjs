import { watch, setLet, html, tag, InputElementTargetEvent, setProp } from "taggedjs"
import { renderCountDiv } from "./renderCount.component"

export const propsDebugMain = tag(() => {
  let renderCount: number = setLet(0)(x => [renderCount, renderCount = x])
  let propsJson: any = setLet({test:33, x:'y'})(x => [propsJson, propsJson = x])
  let propNumber: any = setLet(0)(x => [propNumber, propNumber = x])

  function propsJsonChanged(event: InputElementTargetEvent) {
    propsJson = JSON.parse(event.target.value)
    return propsJson
  }

  ++renderCount

  return html`
    <textarea wrap="off" onchange=${propsJsonChanged} style="height:200px;font-size:0.6em;width:100%"
    >${ JSON.stringify(propsJson, null, 2) }</textarea>
    <pre>${ JSON.stringify(propsJson, null, 2) }</pre>
    
    <div><small>(renderCount:${renderCount})</small></div>
    
    <button onclick=${() => ++propNumber}>propNumber ${propNumber}</button>
    
    <fieldset>
      <legend>child</legend>
      ${propsDebug({
        propNumber,
        propsJson,
        propNumberChange: x => {
          console.log('parent callback fired', x)
          propNumber = x
        }
      })}
    </fieldset>
    ${renderCountDiv({renderCount, name:'propsDebugMain'})}
  `
})

const propsDebug = tag((
  {
    propNumber,
    propsJson,
    propNumberChange,
  }: {
    propNumber: number,
    propNumberChange: (x: number) => unknown,
    propsJson: any
  }
) => {
  let renderCount: number = setLet(0)(x => [renderCount, renderCount=x])
  let propNumberChangeCount = setLet(0)(x => [propNumberChangeCount, propNumberChangeCount=x])
  setProp(x => [propNumber, propNumber = x])

  const watchResults = watch([propNumber], () => {
    console.log('propNumber changed', propNumber)
    ++propNumberChangeCount
  })

  ++renderCount

  function pasteProps(event: InputElementTargetEvent) {
    const value = JSON.parse(event.target.value)
    console.log('value',value)
    Object.assign(propsJson, value)
  }

  return html`<!--propsDebug.js-->
    <h3>Props Json</h3>
    <textarea style="font-size:0.6em;height:200px;width:100%" wrap="off" onchange=${pasteProps}>${ JSON.stringify(propsJson, null, 2) }</textarea>
    <pre>${ JSON.stringify(propsJson, null, 2) }</pre>
    <hr />
    <h3>Props Number</h3>
    
    <textarea style="font-size:0.6em;height:200px;width:100%;color:white;" wrap="off" disabled>${ JSON.stringify(watchResults, null, 2) }</textarea>
    <button onclick=${() => propNumberChange(++propNumber)}>propNumber ${propNumber}</button>
    <button onclick=${() => ++renderCount}>renderCount ${renderCount}</button>
    
    <button onclick=${() => ++propNumber}
      title="only changes number locally but if change by parent than that is the number"
    >local set propNumber ${propNumber}</button>
    
    <div><small>(propNumberChangeCount:${propNumberChangeCount})</small></div>
    
    <hr />
    
    ${renderCountDiv({renderCount, name: 'propsDebug'})}
  `
})
