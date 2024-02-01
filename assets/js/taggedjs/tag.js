import { deepClone } from "./deepFunctions.js";
import { isTagInstance } from "./isInstance.js";
import { runAfterRender, runBeforeRender } from "./tagRunner.js";
import { setUse } from "./setUse.function.js";
export class TemplaterResult {
    props;
    newProps;
    cloneProps;
    tagged;
    wrapper;
    newest;
    oldest;
    redraw;
    isTemplater = true;
    forceRenderTemplate(tagSupport, ownerTag) {
        const tag = this.wrapper();
        tag.tagSupport = tagSupport;
        tag.afterRender();
        this.oldest = tag;
        tagSupport.oldest = tag;
        this.oldest = tag;
        this.newest = tag;
        tag.ownerTag = ownerTag;
        return tag;
    }
    renderWithSupport(tagSupport, existingTag, ownerTag) {
        /* BEFORE RENDER */
        // signify to other operations that a rendering has occurred so they do not need to render again
        ++tagSupport.renderCount;
        const runtimeOwnerTag = existingTag?.ownerTag || ownerTag;
        if (tagSupport.oldest) {
            tagSupport.oldest.beforeRedraw();
        }
        else {
            // first time render
            runBeforeRender(tagSupport, tagSupport.oldest);
            // TODO: Logic below most likely could live within providers.ts inside the runBeforeRender function
            const providers = setUse.memory.providerConfig;
            providers.ownerTag = runtimeOwnerTag;
        }
        /* END: BEFORE RENDER */
        const templater = this;
        const retag = templater.wrapper();
        /* AFTER */
        retag.tagSupport = tagSupport;
        runAfterRender(tagSupport, retag);
        templater.newest = retag;
        retag.ownerTag = runtimeOwnerTag;
        const oldest = tagSupport.oldest = tagSupport.oldest || retag;
        tagSupport.newest = retag;
        const oldestTagSupport = oldest.tagSupport;
        oldest.tagSupport = oldestTagSupport || tagSupport;
        oldest.tagSupport.templater = templater;
        retag.setSupport(tagSupport);
        const isSameTag = existingTag && existingTag.isLikeTag(retag);
        // If previously was a tag and seems to be same tag, then just update current tag with new values
        if (isSameTag) {
            oldest.updateByTag(retag);
            return { remit: false, retag };
        }
        return { remit: true, retag };
    }
}
// type TagResultReady = TagResult & {isTag: true, original: TagResult}
export const tags = [];
export function tag(tagComponent) {
    const result = (function tagWrapper(props, children) {
        function callback(toCall, callWith) {
            const callbackResult = toCall(...callWith);
            templater.newest?.ownerTag?.tagSupport.render();
            return callbackResult;
        }
        const isPropTag = isTagInstance(props);
        const watchProps = isPropTag ? 0 : props;
        const newProps = resetFunctionProps(watchProps, callback);
        let argProps = newProps;
        if (isPropTag) {
            children = props;
            argProps = noPropsGiven;
        }
        function innerTagWrap() {
            const originalFunction = innerTagWrap.original;
            return originalFunction(argProps, children);
        }
        innerTagWrap.original = tagComponent;
        const templater = new TemplaterResult();
        templater.tagged = true;
        templater.props = props; // used to call function
        templater.newProps = newProps;
        templater.cloneProps = deepClone(newProps);
        templater.wrapper = innerTagWrap;
        return templater;
    }) // we override the function provided and pretend original is what's returned
    ;
    result.isTag = true;
    result.original = tagComponent;
    tagComponent.tags = tags;
    tagComponent.setUse = setUse;
    tags.push(tagComponent);
    return result;
}
class NoPropsGiven {
}
const noPropsGiven = new NoPropsGiven();
function resetFunctionProps(props, callback) {
    if (typeof (props) !== 'object') {
        return props;
    }
    const newProps = { ...props };
    Object.entries(newProps).forEach(([name, value]) => {
        if (value instanceof Function) {
            newProps[name] = (...args) => {
                return callback(value, args);
            };
            return;
        }
        newProps[name] = value;
    });
    return newProps;
}
//# sourceMappingURL=tag.js.map