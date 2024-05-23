import { processSubjectComponent } from './processSubjectComponent.function';
import { processTagArray } from './processTagArray';
import { processRegularValue } from './processRegularValue.function';
import { processTag, tagFakeTemplater } from './processTag.function';
import { ValueTypes, getValueType } from './processFirstSubject.utils';
export function processSubjectValue(value, subject, // could be tag via result.tag
insertBefore, // <template end interpolate /> (will be removed)
ownerSupport, // owner
options) {
    const valueType = getValueType(value);
    switch (valueType) {
        case ValueTypes.templater:
            processTag(value, insertBefore, ownerSupport, subject);
            return;
        case ValueTypes.tag:
            const tag = value;
            let templater = tag.templater;
            if (!templater) {
                templater = tagFakeTemplater(tag);
            }
            processTag(templater, insertBefore, ownerSupport, subject);
            return;
        case ValueTypes.tagArray:
            return processTagArray(subject, value, insertBefore, ownerSupport, options);
        case ValueTypes.tagComponent:
            processSubjectComponent(value, subject, insertBefore, ownerSupport, options);
            return;
    }
    processRegularValue(value, subject, insertBefore);
}
//# sourceMappingURL=processSubjectValue.function.js.map