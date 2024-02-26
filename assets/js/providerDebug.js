import { tagDebugProvider, upperTagDebugProvider } from "./tagJsDebug.js";
import { setLet, html, tag, providers } from "taggedjs";
export class TagDebugProvider {
    tagDebug = 0;
}
export const providerDebugBase = tag(function () {
    const provider = providers.create(tagDebugProvider);
    const providerClass = providers.create(TagDebugProvider);
    let propCounter = setLet(0)(x => [propCounter, propCounter = x]);
    return html `
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
        propCounterChange: x => propCounter = x
    })}
  `;
});
const providerDebug = tag(({ propCounter, propCounterChange, }) => {
    const provider = providers.inject(tagDebugProvider);
    const upperProvider = providers.inject(upperTagDebugProvider);
    const providerClass = providers.inject(TagDebugProvider);
    let showProProps = setLet(false)(x => [showProProps, showProProps = x]);
    let renderCount = setLet(0)(x => [renderCount, renderCount = x]);
    // let propCounter: number = setLet(0)(x => [propCounter, propCounter = x])
    ++renderCount;
    return html `<!--providerDebug.js-->
    <button id="increase-provider-🍌-1-button" onclick=${() => ++provider.test}
    >🍌 increase provider.test ${provider.test}</button>
    <span id="increase-provider-🍌-1-display">${provider.test}</span>
    
    
    <button onclick=${() => console.info('render count', renderCount)}>render counter: ${renderCount}</button>
    
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

    <button onclick=${() => showProProps = !showProProps}>show provider as props</button>
    ${showProProps && html `

    <hr />

    <h3>Provider as Props</h3>
    ${testProviderAsProps(providerClass)}
`}
  `;
});
const testProviderAsProps = tag((providerClass) => {
    return html `<!--providerDebug.js@TestProviderAsProps-->
    <textarea wrap="off" rows="20" style="width:100%;font-size:0.6em">${JSON.stringify(providerClass, null, 2)}</textarea>
  `;
});
//# sourceMappingURL=providerDebug.js.map