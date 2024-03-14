import { isSubjectInstance, isTagArray, isTagInstance } from './isInstance';
import { setUse } from './setUse.function';
import { TemplaterResult, alterProps } from './templater.utils';
import { ValueSubject } from './ValueSubject';
import { runTagCallback } from './bindSubjectCallback.function';
import { deepClone } from './deepFunctions';
import { TagSupport } from './TagSupport.class';
import { renderExistingTag } from './renderExistingTag.function';
export const tags = [];
let tagCount = 0;
/** Wraps a tag component in a state manager and always push children to last argument as any array */
// export function tag<T>(a: T): T;
export function tag(tagComponent) {
    const result = (function tagWrapper(props, children) {
        const isPropTag = isTagInstance(props) || isTagArray(props);
        if (isPropTag) {
            children = props;
            props = undefined;
        }
        const { childSubject, madeSubject } = kidsToTagArraySubject(children);
        childSubject.isChildSubject = true;
        const templater = new TemplaterResult(props, childSubject);
        const innerTagWrap = getTagWrap(templater, childSubject, madeSubject);
        innerTagWrap.original = tagComponent;
        templater.tagged = true;
        templater.wrapper = innerTagWrap;
        return templater;
    }); // we override the function provided and pretend original is what's returned
    updateResult(result, tagComponent);
    // group tags together and have hmr pickup
    updateComponent(tagComponent);
    tags.push(tagComponent);
    return result;
}
function kidsToTagArraySubject(children) {
    if (isSubjectInstance(children)) {
        return { childSubject: children, madeSubject: false };
    }
    const kidArray = children;
    if (isTagArray(kidArray)) {
        return { childSubject: new ValueSubject(children), madeSubject: true };
    }
    const kid = children;
    if (kid) {
        kid.arrayValue = 0;
        return { childSubject: new ValueSubject([kid]), madeSubject: true };
    }
    return { childSubject: new ValueSubject([]), madeSubject: true };
}
function updateResult(result, tagComponent) {
    result.isTag = true;
    result.original = tagComponent;
}
function updateComponent(tagComponent) {
    tagComponent.tags = tags;
    tagComponent.setUse = setUse;
    tagComponent.tagIndex = tagCount++; // needed for things like HMR
}
function getTagWrap(templater, childSubject, madeSubject) {
    const innerTagWrap = function (oldTagSetup) {
        const originalFunction = innerTagWrap.original;
        // const oldTagSetup = templater.tagSupport
        const oldest = templater.oldest;
        let props = oldTagSetup.propsConfig.latest;
        let castedProps = alterProps(props, templater);
        // CALL ORIGINAL COMPONENT FUNCTION
        const tag = originalFunction(castedProps, childSubject);
        if (oldTagSetup.mutatingRender === TagSupport.prototype.mutatingRender) {
            oldTagSetup.oldest = tag;
            templater.oldest = tag;
            // tag.tagSupport = oldTagSetup
            oldTagSetup.mutatingRender = () => {
                const exit = renderExistingTag(templater.oldest, templater, oldTagSetup);
                if (exit) {
                    return tag;
                }
                // Have owner re-render
                if (tag.ownerTag) {
                    const newest = tag.ownerTag.tagSupport.render();
                    // TODO: Next line most likely not needed
                    tag.ownerTag.tagSupport.newest = newest;
                    return tag;
                }
                return tag;
            };
        }
        tag.tagSupport = new TagSupport(templater, oldTagSetup.children);
        const clonedProps = deepClone(castedProps); // castedProps
        tag.tagSupport.propsConfig = {
            latest: props, // castedProps
            latestCloned: clonedProps,
            clonedProps: clonedProps,
            lastClonedKidValues: tag.tagSupport.propsConfig.lastClonedKidValues,
        };
        tag.tagSupport.memory = oldTagSetup.memory;
        // ???
        // tag.tagSupport.memory = {...oldTagSetup.memory}
        // tag.tagSupport.memory.context = {...oldTagSetup.memory.context}
        tag.tagSupport.mutatingRender = oldTagSetup.mutatingRender;
        oldTagSetup.newest = tag;
        oldTagSetup.propsConfig = { ...tag.tagSupport.propsConfig };
        if (oldest) {
            oldest.tagSupport.propsConfig = { ...tag.tagSupport.propsConfig };
        }
        if (madeSubject) {
            childSubject.value.forEach(kid => {
                kid.values.forEach((value, index) => {
                    if (!(value instanceof Function)) {
                        return;
                    }
                    if (kid.values[index].isChildOverride) {
                        return; // already overwritten
                    }
                    // all functions need to report to me
                    kid.values[index] = function (...args) {
                        runTagCallback(value, tag.ownerTag, this, args);
                        // runTagCallback(value, tag, this, args)
                    };
                    kid.values[index].isChildOverride = true;
                });
            });
        }
        return tag;
    };
    return innerTagWrap;
}
//# sourceMappingURL=tag.js.map