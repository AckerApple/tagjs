import { renderWithSupport } from "./TemplaterResult.class";
/** for components */
export function redrawTag(subject, templater, ownerTag) {
    const existingTag = subject.tag || templater.global.newest || templater.global.oldest;
    if (!templater.global.oldest) {
        throw new Error('issue before event redraw');
    }
    const tagSupport = templater.tagSupport; // || existingTag?.tagSupport
    if (!templater.tagSupport) {
        throw new Error('need tag support');
    }
    if (!tagSupport.templater.global.oldest) {
        throw new Error('33333');
    }
    let retag = renderWithSupport(tagSupport, existingTag, subject, ownerTag);
    return retag;
}
//# sourceMappingURL=redrawTag.function.js.map