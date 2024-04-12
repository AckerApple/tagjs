import { runBeforeDestroy } from './tagRunner';
import { buildClones } from './render';
import { interpolateElement, interpolateString } from './interpolateElement';
import { afterElmBuild, subscribeToTemplate } from './interpolateTemplate';
import { elementDestroyCheck } from './elementDestroyCheck.function';
import { processNewValue } from './processNewValue.function';
import { isSubjectInstance, isTagComponent } from './isInstance';
import { isLikeTags } from './isLikeTags.function';
import { isRemoveTemplates } from './Clones.type';
import { restoreTagMarker } from './checkDestroyPrevious.function';
import { insertAfter } from './insertAfter.function';
export const variablePrefix = '__tagvar';
export const escapeVariable = '--' + variablePrefix + '--';
const prefixSearch = new RegExp(variablePrefix, 'g');
export const escapeSearch = new RegExp(escapeVariable, 'g');
export class Tag {
    strings;
    values;
    version = 0;
    isTag = true;
    hasLiveElements = false;
    clones = []; // elements on document. Needed at destroy process to know what to destroy
    childTags = []; // tags on me
    tagSupport;
    lastTemplateString = undefined; // used to compare templates for updates
    // only present when a child of a tag
    ownerTag;
    // insertBefore?: Element
    appElement; // only seen on this.getAppElement().appElement
    // present only when an array. Populated by Tag.key()
    memory = {};
    constructor(strings, values) {
        this.strings = strings;
        this.values = values;
    }
    /** Used for array, such as array.map(), calls aka array.map(x => html``.key(x)) */
    key(arrayValue) {
        this.memory.arrayValue = arrayValue;
        return this;
    }
    destroy(options = {
        stagger: 0,
        byParent: false, // Only destroy clones of direct children
    }) {
        if (!this.hasLiveElements) {
            throw new Error('destroying wrong tag');
        }
        const tagSupport = this.tagSupport;
        const global = tagSupport.templater.global;
        // removing is considered rendering. Prevents after event processing of this tag even tho possibly deleted
        // ++this.tagSupport.templater.global.renderCount
        const subject = tagSupport.subject;
        // put back down the template tag
        const insertBefore = global.insertBefore;
        if (isRemoveTemplates) {
            const placeholder = global.placeholderElm;
            if (placeholder && !('arrayValue' in this.memory)) {
                if (!options.byParent) {
                    restoreTagMarker(this, insertBefore);
                }
            }
        }
        delete global.placeholderElm;
        // the isComponent check maybe able to be removed
        const isComponent = tagSupport ? true : false;
        if (isComponent) {
            runBeforeDestroy(tagSupport, this);
        }
        const childTags = options.byParent ? [] : getChildTagsToDestroy(this.childTags);
        // signify that no further event rendering should take place by making logic think a render occurred during event
        // signify immediately child has been deleted (looked for during event processing)
        childTags.forEach(child => {
            const subGlobal = child.tagSupport.templater.global;
            delete subGlobal.newest;
            subGlobal.deleted = true;
        });
        delete global.oldest;
        delete global.newest;
        global.deleted = true;
        this.hasLiveElements = false;
        delete subject.tag;
        this.destroySubscriptions();
        let mainPromise;
        if (this.ownerTag) {
            this.ownerTag.childTags = this.ownerTag.childTags.filter(child => child !== this);
        }
        if (!options.byParent) {
            const { stagger, promise } = this.destroyClones(options);
            options.stagger = stagger;
            if (promise) {
                mainPromise = promise;
            }
        }
        else {
            this.destroyClones();
        }
        if (mainPromise) {
            mainPromise = mainPromise.then(async () => {
                const promises = childTags.map(kid => kid.destroy({ stagger: 0, byParent: true }));
                return Promise.all(promises);
            });
        }
        else {
            mainPromise = Promise.all(childTags.map(kid => kid.destroy({ stagger: 0, byParent: true })));
        }
        return mainPromise.then(() => options.stagger);
    }
    destroySubscriptions() {
        const global = this.tagSupport.templater.global;
        global.subscriptions.forEach(cloneSub => cloneSub.unsubscribe());
        global.subscriptions.length = 0;
    }
    destroyClones({ stagger } = {
        stagger: 0,
    }) {
        //const promises = this.clones.reverse().map(
        const promises = this.clones.map(clone => this.checkCloneRemoval(clone, stagger)).filter(x => x); // only return promises
        this.clones.length = 0; // tag maybe used for something else
        if (promises.length) {
            return { promise: Promise.all(promises), stagger };
        }
        return { stagger };
    }
    /** Reviews elements for the presences of ondestroy */
    checkCloneRemoval(clone, stagger) {
        let promise;
        const customElm = clone;
        if (customElm.ondestroy) {
            promise = elementDestroyCheck(customElm, stagger);
        }
        const next = () => {
            clone.parentNode?.removeChild(clone);
            const ownerTag = this.ownerTag;
            if (ownerTag) {
                // Sometimes my clones were first registered to my owner, remove them from owner
                ownerTag.clones = ownerTag.clones.filter(compareClone => compareClone !== clone);
            }
        };
        if (promise instanceof Promise) {
            return promise.then(next);
        }
        else {
            next();
        }
        return promise;
    }
    getTemplate() {
        const string = this.strings.map((string, index) => {
            const safeString = string.replace(prefixSearch, escapeVariable);
            const endString = safeString + (this.values.length > index ? `{${variablePrefix}${index}}` : '');
            // const trimString = index === 0 || index === this.strings.length-1 ? endString.trim() : endString
            const trimString = endString.replace(/>\s*/g, '>').replace(/\s*</g, '<');
            return trimString;
        }).join('');
        const interpolation = interpolateString(string);
        this.lastTemplateString = interpolation.string;
        return {
            interpolation,
            // string,
            string: interpolation.string,
            strings: this.strings,
            values: this.values,
            context: this.tagSupport.templater.global.context || {},
        };
    }
    isLikeTag(tag) {
        return isLikeTags(this, tag);
    }
    updateByTag(tag) {
        if (!this.tagSupport.templater.global.oldest) {
            throw new Error('no oldest here');
        }
        if (!this.hasLiveElements) {
            throw new Error('trying to update a tag with no elements on stage');
        }
        this.tagSupport.templater.global.newest = tag;
        if (!this.tagSupport.templater.global.context) {
            throw new Error('issue back here');
        }
        this.updateConfig(tag.strings, tag.values);
    }
    updateConfig(strings, values) {
        this.strings = strings;
        this.updateValues(values);
    }
    update() {
        return this.updateContext(this.tagSupport.templater.global.context);
    }
    updateValues(values) {
        this.values = values;
        return this.updateContext(this.tagSupport.templater.global.context);
    }
    updateContext(context) {
        this.strings.map((_string, index) => {
            const variableName = variablePrefix + index;
            const hasValue = this.values.length > index;
            const value = this.values[index];
            // is something already there?
            const exists = variableName in context;
            if (exists) {
                return updateContextItem(context, variableName, value);
            }
            if (!hasValue) {
                return;
            }
            // 🆕 First time values below
            context[variableName] = processNewValue(hasValue, value, this);
        });
        return context;
    }
    getAppElement() {
        let tag = this;
        while (tag.ownerTag) {
            tag = tag.ownerTag;
        }
        return tag;
    }
    /** Used during HMR only where static content itself could have been edited */
    rebuild() {
        // const insertBefore = this.insertBefore
        const insertBefore = this.tagSupport.templater.global.insertBefore;
        if (!insertBefore) {
            const err = new Error('Cannot rebuild. Previous insertBefore element is not defined on tag');
            err.tag = this;
            throw err;
        }
        this.buildBeforeElement(insertBefore, {
            forceElement: true,
            counts: { added: 0, removed: 0 },
        });
    }
    buildBeforeElement(insertBefore, options = {
        forceElement: false,
        counts: { added: 0, removed: 0 },
    }) {
        const subject = this.tagSupport.subject;
        const thisTemplater = this.tagSupport.templater;
        const global = thisTemplater.global;
        if (isRemoveTemplates) {
            const placeholderElm = global.placeholderElm;
            if (placeholderElm) {
                const parentNode = placeholderElm.parentNode;
                parentNode.insertBefore(insertBefore, placeholderElm);
                // ??? - removed as we don't steal clones anymore
                // this.clones.push( placeholderElm ) // put back on chopping block
                delete global.placeholderElm;
            }
        }
        const trueInsertBefore = insertBefore;
        global.oldest = this;
        global.newest = this;
        subject.tag = this;
        this.hasLiveElements = true;
        // remove old clones
        if (this.clones.length) {
            this.clones.forEach(clone => this.checkCloneRemoval(clone, 0));
        }
        global.insertBefore = insertBefore;
        // const context = this.tagSupport.memory.context // this.update()
        const context = this.update();
        const template = this.getTemplate();
        if (!trueInsertBefore.parentNode) {
            throw new Error('no parent before building tag');
        }
        const elementContainer = document.createElement('div');
        elementContainer.id = 'tag-temp-holder';
        // render content with a first child that we can know is our first element
        elementContainer.innerHTML = `<template id="temp-template-tag-wrap">${template.string}</template>`;
        // Search/replace innerHTML variables but don't interpolate tag components just yet
        const { tagComponents } = interpolateElement(elementContainer, context, template, this, // ownerTag,
        {
            forceElement: options.forceElement,
            counts: options.counts
        });
        if (!trueInsertBefore.parentNode) {
            throw new Error('no parent building tag');
        }
        afterInterpolateElement(elementContainer, trueInsertBefore, // insertBefore (will be removed)
        this, // ownerTag
        context, options);
        // Any tag components that were found should be processed AFTER the owner processes its elements. Avoid double processing of elements attributes like (oninit)=${}
        let isForceElement = options.forceElement;
        tagComponents.forEach(tagComponent => {
            const tagSupport = tagComponent.ownerTag.tagSupport;
            const tagGlobal = tagSupport.templater.global;
            const placeholderElm = tagGlobal.placeholderElm; // global.placeholderElm
            if (!placeholderElm && !insertBefore.parentNode) {
                throw new Error('no parent building tag components');
            }
            const before = tagComponent.insertBefore; // insertBefore  (will be removed)
            subscribeToTemplate(before, // tagComponent.insertBefore,
            tagComponent.subject, tagComponent.ownerTag, options.counts, { isForceElement });
            const clones = afterInterpolateElement(elementContainer, before, // (will be removed)
            tagComponent.ownerTag, // this, // ownerTag
            context, options);
            if (placeholderElm && !placeholderElm?.parentNode) {
                const clone = clones[this.clones.length - 1];
                if (clone) {
                    restoreTagMarker(tagComponent.ownerTag, clone);
                }
            }
            if (placeholderElm) {
                if (placeholderElm.parentNode) {
                    if (!global.placeholderElm) {
                        global.placeholderElm = placeholderElm;
                    }
                }
                if (this.clones.length) {
                    if (insertBefore.parentNode) {
                        global.placeholderElm = insertBefore.previousSibling;
                        const parentNode = insertBefore.parentNode;
                        parentNode.removeChild(insertBefore);
                    }
                }
            }
        });
        if (!global.placeholderElm) {
            // const clone = getLastCloneFromTags(this)
            // const clone = (insertBefore as Element).previousElementSibling as Element
            const clone = insertBefore.previousSibling;
            if (clone) {
                const parentNode = insertBefore.parentNode;
                global.placeholderElm = clone;
                parentNode.removeChild(insertBefore);
            }
        }
    }
}
function afterInterpolateElement(container, insertBefore, tag, 
// preClones: Clones,
context, options) {
    const clones = buildClones(container, insertBefore);
    if (!clones.length) {
        return clones;
    }
    const ownerSupport = tag.tagSupport;
    const ownerGlobal = ownerSupport.templater.global;
    const hadBefore = isRemoveTemplates && ownerGlobal.placeholderElm;
    const parentNode = hadBefore ? ownerGlobal.placeholderElm?.parentNode : insertBefore.parentNode;
    // we could now be processing same tag but more after components being rendered
    if (hadBefore) {
        // 0 put the template back down
        insertAfter(insertBefore, hadBefore);
        // ??? - removed as need for arrays
        delete ownerGlobal.placeholderElm;
    }
    clones.forEach(clone => afterElmBuild(clone, options, context, tag));
    let hasPopClone;
    if (isRemoveTemplates) {
        const clone = insertBefore.previousSibling; // clones[clones.length - 1]
        if (clone) {
            const isTemplate = clone.tagName === 'TEMPLATE' && clone.hasAttribute('interpolate');
            if (!isTemplate) {
                hasPopClone = ownerGlobal.placeholderElm = clone; // insertBefore
            }
        }
    }
    if (clones.find(x => x === insertBefore)) {
        throw new Error('adding marker to owner in tag class');
    }
    tag.clones.push(...clones);
    if (isRemoveTemplates) {
        if (hasPopClone) { //  || hadBefore
            parentNode.removeChild(insertBefore); // belongs to another tag
        }
    }
    return clones;
}
function getChildTagsToDestroy(childTags, allTags = []) {
    for (let index = childTags.length - 1; index >= 0; --index) {
        const cTag = childTags[index];
        if (allTags.find(x => x === cTag)) {
            // TODO: Lets find why a child tag is attached twice to owner
            throw new Error('child tag registered twice for delete');
        }
        allTags.push(cTag);
        childTags.splice(index, 1);
        getChildTagsToDestroy(cTag.childTags, allTags);
    }
    return allTags;
}
function updateContextItem(context, variableName, value) {
    const subject = context[variableName];
    const tag = subject.tag;
    if (tag) {
        const oldTemp = tag.tagSupport.templater;
        const oldWrap = oldTemp.wrapper; // tag versus component
        if (value.global !== oldTemp.global) {
            if (oldWrap && isTagComponent(value)) {
                const oldValueFn = oldWrap.original;
                const newValueFn = value.wrapper?.original;
                const fnMatched = oldValueFn === newValueFn;
                if (fnMatched) {
                    value.global = oldTemp.global;
                }
            }
        }
    }
    // return updateExistingValue(subject, value, this)
    if (isSubjectInstance(value)) {
        return;
    }
    subject.set(value); // listeners will evaluate updated values to possibly update display(s)
    return;
}
//# sourceMappingURL=Tag.class.js.map