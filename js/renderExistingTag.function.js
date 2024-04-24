import { providersChangeCheck } from './state/provider.utils';
import { renderWithSupport } from './TemplaterResult.class';
import { isLikeTags } from './isLikeTags.function';
/** Returns true when rendering owner is not needed. Returns false when rendering owner should occur */
export function renderExistingTag(oldestSupport, // oldest with elements on html
newSupport, // new to be rendered
ownerSupport, // ownerSupport
subject) {
    const lastSupport = subject.tagSupport;
    const global = lastSupport.global;
    // share point between renders
    newSupport.global = global;
    const preRenderCount = global.renderCount;
    providersChangeCheck(oldestSupport);
    // When the providers were checked, a render to myself occurred and I do not need to re-render again
    const prevSupport = global.newest;
    if (preRenderCount !== global.renderCount) {
        oldestSupport.updateBy(prevSupport);
        return prevSupport; // already rendered during triggered events
    }
    // ??? changed during mirroring - lastSupport keeps having less info than newest
    // const toRedrawTag = lastSupport || prevSupport || tagSupport.global.oldest
    const toRedrawTag = prevSupport || lastSupport || global.oldest;
    const reSupport = renderWithSupport(newSupport, toRedrawTag, subject, 
    // oldestSupport,
    ownerSupport);
    const oldest = global.oldest || oldestSupport;
    reSupport.global.oldest = oldest;
    if (isLikeTags(prevSupport, reSupport)) {
        subject.tagSupport = reSupport;
        oldest.updateBy(reSupport);
    }
    return reSupport;
}
//# sourceMappingURL=renderExistingTag.function.js.map