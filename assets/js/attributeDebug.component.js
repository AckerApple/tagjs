import { html, setLet, tag } from "taggedjs";
export const attributeDebug = tag(() => {
    let selected = setLet('a')(x => [selected, selected = x]);
    let isOrange = setLet(true)(x => [isOrange, isOrange = x]);
    return html `
    <input onchange=${(event) => selected = event.target.value} placeholder="a b or c" />
    <select id="select-sample-drop-down">
      ${['a', 'b', 'c'].map(item => html `
        <option value=${item} ${item == selected ? 'selected' : ''}>${item} - ${item == selected ? 'true' : 'false'}</option>
      `.key(item))}
    </select>
    ${ /*<textarea wrap="off" style="font-size:0.6em;width:100%;height:300px" readonly>${document.getElementById('select-sample-drop-down')?.innerHTML || 'loading select html...'}</textarea>*/0}
    ${selected}
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
//# sourceMappingURL=attributeDebug.component.js.map