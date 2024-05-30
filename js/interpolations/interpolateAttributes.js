import { processAttribute } from './processAttribute.function.js';
function howToSetAttribute(element, name, value) {
    element.setAttribute(name, value);
}
function howToSetInputValue(element, name, value) {
    element[name] = value;
}
export function interpolateAttributes(child, scope, ownerSupport) {
    const attrNames = child.getAttributeNames();
    let howToSet = howToSetAttribute;
    for (let index = 0; index < attrNames.length; ++index) {
        const attrName = attrNames[index];
        if (child.nodeName === 'INPUT' && attrName === 'value') {
            howToSet = howToSetInputValue;
        }
        const value = child.getAttribute(attrName);
        processAttribute(attrName, value, child, scope, ownerSupport, howToSet);
        howToSet = howToSetAttribute; // put back
    }
}
//# sourceMappingURL=interpolateAttributes.js.map