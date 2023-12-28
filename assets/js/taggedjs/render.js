export function buildClones(temporary, insertBefore) {
    const clones = [];
    const templateClone = temporary.children[0];
    const sibling = templateClone; // a div we added
    let nextSibling = sibling.nextSibling;
    temporary.removeChild(templateClone); // remove the div
    while (nextSibling) {
        const nextNextSibling = nextSibling.nextSibling;
        buildSibling(nextSibling, insertBefore);
        clones.push(nextSibling);
        nextSibling = nextNextSibling;
    }
    return clones;
}
function buildSibling(nextSibling, insertBefore) {
    insertBefore.parentNode.insertBefore(nextSibling, insertBefore);
}
//# sourceMappingURL=render.js.map