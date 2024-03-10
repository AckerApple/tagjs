import { InterpolatedContentTemplates } from "./interpolateContentTemplates.js";
import { Context, Tag, TagTemplate } from "./Tag.class.js";
import { Counts } from "./interpolateTemplate.js";
export type InterpolateOptions = {
    /** make the element go on document */
    forceElement?: boolean;
    counts: Counts;
};
/** Review elements within an element */
export declare function interpolateElement(container: Element, context: Context, // variables used to evaluate
interpolatedTemplates: TagTemplate, tagOwner: Tag, options: InterpolateOptions): InterpolatedContentTemplates;
export declare function interpolateString(string: string): import("./interpolations.js").InterpolatedTemplates;
