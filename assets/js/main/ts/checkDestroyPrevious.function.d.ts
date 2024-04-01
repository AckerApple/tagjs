import { Tag } from './Tag.class';
import { InterpolateSubject } from './processSubjectValue.function';
import { Counts } from './interpolateTemplate';
export declare function checkDestroyPrevious(subject: InterpolateSubject, // existing.value is the old value
newValue: unknown): false | 1 | 2 | 3 | 4;
export declare function destroyArrayTag(tag: Tag, counts: Counts): void;
