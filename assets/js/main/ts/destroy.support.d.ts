import { TagSupport } from './tag/TagSupport.class';
export type DestroyOptions = {
    stagger: number;
    byParent?: boolean;
};
export declare function getChildTagsToDestroy(childTags: TagSupport[], allTags?: TagSupport[]): TagSupport[];