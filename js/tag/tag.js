import { isSubjectInstance, isTagArray } from '../isInstance';
import { setUse } from '../state';
import { TemplaterResult } from '../TemplaterResult.class';
import { runTagCallback } from '../interpolations/bindSubjectCallback.function';
import { deepClone } from '../deepFunctions';
import { TagSupport } from './TagSupport.class';
import { alterProps } from '../alterProps.function';
import { ValueSubject } from '../subject/ValueSubject';
import { tags } from './tag.utils';
import { ValueTypes } from './update/processFirstSubject.utils';
let tagCount = 0;
/** Wraps a function tag in a state manager and calls wrapped function on event cycles
 * For single rendering, no event cycles, use: tag.renderOnce = (props) => html``
 */
export function tag(tagComponent) {
    /** function developer triggers */
    const parentWrap = (function tagWrapper(...props) {
        const templater = new TemplaterResult(props);
        templater.tagJsType = ValueTypes.tagComponent;
        // attach memory back to original function that contains developer display logic
        const innerTagWrap = getTagWrap(templater, parentWrap);
        if (!innerTagWrap.parentWrap) {
            innerTagWrap.parentWrap = parentWrap;
        }
        templater.tagged = true;
        templater.wrapper = innerTagWrap;
        return templater;
    }) // we override the function provided and pretend original is what's returned
    ;
    parentWrap.original = tagComponent;
    parentWrap.compareTo = tagComponent.toString();
    updateResult(parentWrap, tagComponent);
    // group tags together and have hmr pickup
    updateComponent(tagComponent);
    tags.push(parentWrap);
    return parentWrap;
}
/** Used to create a tag component that renders once and has no addition rendering cycles */
tag.oneRender = (...props) => {
    throw new Error('Do not call function tag.oneRender but instead set it as: `tag.oneRender = (props) => html`` `');
};
Object.defineProperty(tag, 'oneRender', {
    set(oneRenderFunction) {
        oneRenderFunction.oneRender = true;
    },
});
export function kidsToTagArraySubject(children) {
    if (isSubjectInstance(children)) {
        return { childSubject: children, madeSubject: false };
    }
    const kidArray = children;
    if (isTagArray(kidArray)) {
        return { childSubject: new ValueSubject(children), madeSubject: true };
    }
    const kid = children;
    if (kid) {
        kid.memory.arrayValue = 0;
        return { childSubject: new ValueSubject([kid]), madeSubject: true };
    }
    return {
        childSubject: new ValueSubject([]),
        madeSubject: true // was converted into a subject
    };
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
/** creates/returns a function that when called then calls the original component function
 * Gets used as templater.wrapper()
 */
function getTagWrap(templater, result) {
    // this function gets called by taggedjs
    const wrapper = function (newTagSupport, subject) {
        const global = newTagSupport.global;
        ++global.renderCount;
        const childSubject = templater.children;
        const lastArray = global.oldest?.templater.children.lastArray;
        if (lastArray) {
            childSubject.lastArray = lastArray;
        }
        // result.original
        const originalFunction = result.original; // (innerTagWrap as any).original as unknown as TagComponent
        let props = templater.props;
        let castedProps = props.map(props => alterProps(props, newTagSupport.ownerTagSupport));
        const latestCloned = props.map(props => deepClone(props)); // castedProps
        // CALL ORIGINAL COMPONENT FUNCTION
        let tag = originalFunction(...castedProps);
        if (tag instanceof Function) {
            tag = tag();
        }
        tag.templater = templater;
        templater.tag = tag;
        const tagSupport = new TagSupport(templater, newTagSupport.ownerTagSupport, subject, global.renderCount);
        tagSupport.global = global;
        tagSupport.propsConfig = {
            latest: props,
            latestCloned,
            lastClonedKidValues: tagSupport.propsConfig.lastClonedKidValues,
        };
        tagSupport.memory = newTagSupport.memory; // state handover
        if (templater.madeChildIntoSubject) {
            const value = childSubject.value;
            for (let index = value.length - 1; index >= 0; --index) {
                const kid = value[index];
                const values = kid.values;
                for (let index = values.length - 1; index >= 0; --index) {
                    const value = values[index];
                    if (!(value instanceof Function)) {
                        continue;
                    }
                    const valuesValue = kid.values[index];
                    if (valuesValue.isChildOverride) {
                        continue; // already overwritten
                    }
                    // all functions need to report to me
                    kid.values[index] = function (...args) {
                        const ownerSupport = tagSupport.ownerTagSupport;
                        return runTagCallback(value, // callback
                        ownerSupport, this, // bindTo
                        args);
                    };
                    valuesValue.isChildOverride = true;
                }
            }
        }
        return tagSupport;
    };
    return wrapper;
}
//# sourceMappingURL=tag.js.map