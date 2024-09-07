export function handleProviderChanges(appSupport, provider) {
    const tagsWithProvider = getTagsWithProvider(appSupport, provider);
    return tagsWithProvider;
}
/** Updates and returns memory of tag providers */
function getTagsWithProvider(support, provider, memory = []) {
    const global = support.subject.global;
    memory.push({
        support,
        renderCount: global.renderCount,
        provider,
    });
    const childTags = provider.children;
    for (let index = childTags.length - 1; index >= 0; --index) {
        const child = childTags[index];
        const cGlobal = child.subject.global;
        memory.push({
            support: child,
            renderCount: cGlobal.renderCount,
            provider,
        });
    }
    return memory;
}
//# sourceMappingURL=handleProviderChanges.function.js.map