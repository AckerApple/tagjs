import { TemplaterResult } from '../../TemplaterResult.class';
import { Counts } from '../../interpolations/interpolateTemplate';
import { TagSubject } from '../../subject.types';
import { TagSupport } from '../TagSupport.class';
import { InsertBefore } from '../../interpolations/Clones.type';
export declare function processSubjectComponent(templater: TemplaterResult, subject: TagSubject, insertBefore: InsertBefore, ownerSupport: TagSupport, options: {
    counts: Counts;
    forceElement?: boolean;
}): TagSupport;
