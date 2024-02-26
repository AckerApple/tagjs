import { html, tag, setLet } from "taggedjs";
import { renderCountDiv } from "./renderCount.component";
export const tagSwitchDebug = tag(() => {
    let selectedTag = setLet(null)(x => [selectedTag, selectedTag = x]);
    function changeSelectedTag(event) {
        selectedTag = event.target.value;
    }
    let tagOutput = 'select tag below';
    switch (selectedTag) {
        case '1':
            tagOutput = tag1();
            break;
        case '2':
            tagOutput = tag2();
            break;
        case '3':
            tagOutput = tag3();
            break;
    }
    let tagOutput2 = html `select tag above`;
    switch (selectedTag) {
        case '1':
            tagOutput2 = tag1();
            break;
        case '2':
            tagOutput2 = tag2();
            break;
        case '3':
            tagOutput2 = tag3();
            break;
    }
    return html `
    selectedTag: ${selectedTag}
    
    <h3>Test 1 - string | Tag</h3>
    <div>${tagOutput}</div>

    <select onchange=${changeSelectedTag}>
	    <option></option>
      <!-- TODO: implement selected attribute --->
	    <option value="1" ${selectedTag === '1' ? { selected: true } : {}}>tag 1</option>
	    <option value="2" ${selectedTag === '2' ? { selected: true } : {}}>tag 2</option>
	    <option value="3" ${selectedTag === '3' ? { selected: true } : {}}>tag 3</option>
    </select>

    <h3>Test 2 - Tag</h3>
    <div>${tagOutput2}</div>
    
    <h3>Test 2 - ternary (only 1 or 3 shows)</h3>
    <div>${selectedTag === '3' ? tag3() : tag1()}</div>
  `;
});
export const tag1 = tag(() => {
    let counter = setLet(0)(x => [counter, counter = x]);
    let renderCount = setLet(0)(x => [renderCount, renderCount = x]);
    ++renderCount;
    return html `
    Hello 1 World
    <button onclick=${() => ++counter}>increase ${counter}</button>
    ${renderCountDiv({ renderCount, name: 'tag1' })}
  `;
});
export const tag2 = tag(() => {
    let counter = setLet(0)(x => [counter, counter = x]);
    let renderCount = setLet(0)(x => [renderCount, renderCount = x]);
    ++renderCount;
    return html `
    Hello 2 World
    <button onclick=${() => ++counter}>increase ${counter}</button>
    ${renderCountDiv({ renderCount, name: 'tag1' })}
  `;
});
export const tag3 = tag(() => {
    let counter = setLet(0)(x => [counter, counter = x]);
    let renderCount = setLet(0)(x => [renderCount, renderCount = x]);
    ++renderCount;
    return html `
    Hello 3 World
    <button onclick=${() => ++counter}>increase ${counter}</button>
    ${renderCountDiv({ renderCount, name: 'tag1' })}
  `;
});
//# sourceMappingURL=tagSwitchDebug.component.js.map