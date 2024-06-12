import { InsertBefore } from './Clones.type';
import { Tag } from './Tag.class';
import { TagSubject } from './subject.types';
import { TagSupport } from './tag/TagSupport.class';
import { TemplaterResult } from './TemplaterResult.class';
/** Could be a regular tag or a component. Both are Tag.class */
export declare function processTag(templater: TemplaterResult, insertBefore: InsertBefore, ownerSupport: TagSupport, // owner
subject: TagSubject): void;
export declare function setupNewTemplater(tagSupport: TagSupport, ownerSupport: TagSupport, subject: TagSubject): void;
export declare function tagFakeTemplater(tag: Tag): TemplaterResult;
export declare function getFakeTemplater(): TemplaterResult;