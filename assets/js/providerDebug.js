import { tagDebugProvider, upperTagDebugProvider } from "./tagJsDebug.js";
import { setLet, html, tag, providers } from "taggedjs";
export class TagDebugProvider {
    tagDebug = 0;
}
export const providerDebug = tag(function ProviderDebug() {
    const provider = providers.inject(tagDebugProvider);
    const upperProvider = providers.inject(upperTagDebugProvider);
    const providerClass = providers.inject(TagDebugProvider);
    let showProProps = setLet(false)(x => [showProProps, showProProps = x]);
    let renderCount = setLet(0)(x => [renderCount, renderCount = x]);
    ++renderCount;
    return html `<!--providerDebug.js-->
    <button id="increase-provider" onclick=${() => ++provider.test}
    >increase provider.test ${provider.test}</button>
    
    <button onclick=${() => console.info('render count', renderCount)}>render counter: ${renderCount}</button>
    
    <button onclick=${() => ++upperProvider.test}
    >increase upper.provider.test ${upperProvider.test}</button>

    <button onclick=${() => ++providerClass.tagDebug}
    >increase provider class ${providerClass.tagDebug}</button>


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