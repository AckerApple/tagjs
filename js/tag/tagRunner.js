import { setUseMemory } from '../state/index.js';
import { Subject } from '../subject/index.js';
import { getSupportInCycle } from './getSupportInCycle.function.js';
import { afterRender } from '../state/state.utils.js';
// Emits event at the end of a tag being rendered. Use tagClosed$.toPromise() to render a tag after a current tag is done rendering
setUseMemory.tagClosed$ = new Subject(undefined, function tagCloser(subscription) {
    if (!getSupportInCycle()) {
        subscription.next(); // we are not currently processing so process now
    }
});
// Life cycle 2
export function runAfterRender(support, ownerSupport) {
    afterRender(support);
    setUseMemory.tagClosed$.next(ownerSupport);
}
// Life cycle 4 - end of life
export function runBeforeDestroy(support) {
    // TODO: We don't need to remove from parents if parent is being destroyed
    // remove me from my parents
    const global = support.subject.global;
    const providers = global.providers;
    if (providers) {
        for (const provider of providers) {
            for (let index = provider.children.length - 1; index >= 0; --index) {
                const child = provider.children[index];
                if (child.subject.global === global) {
                    provider.children.splice(index, 1);
                }
            }
        }
    }
}
//# sourceMappingURL=tagRunner.js.map