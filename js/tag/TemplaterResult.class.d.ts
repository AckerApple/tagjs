import { StringTag, DomTag, EventCallback } from './Tag.class.js';
import { ContextItem } from './Context.types.js';
import { BaseSupport, Support, SupportContextItem } from './Support.class.js';
import { Props } from '../Props.js';
import { TagWrapper } from './tag.utils.js';
import { Provider } from '../state/providers.js';
import { OnDestroyCallback } from '../state/onDestroy.js';
import { OnInitCallback } from '../state/onInit.js';
import { Subscription } from '../subject/subject.utils.js';
import { Subject } from '../subject/index.js';
import { ValueType, ValueTypes } from './ValueTypes.enum.js';
import { DomObjectChildren } from '../interpolations/optimizers/ObjectNode.types.js';
import { PropWatches } from './tag.js';
export type Wrapper = ((newSupport: BaseSupport | Support, subject: ContextItem, prevSupport?: BaseSupport | Support) => Support) & {
    tagJsType: typeof ValueTypes.tagComponent | typeof ValueTypes.renderOnce | typeof ValueTypes.templater;
    parentWrap: TagWrapper<any>;
};
export type TagGlobal = {
    htmlDomMeta?: DomObjectChildren;
    /** Indicator of re-rending. Saves from double rending something already rendered */
    renderCount: number;
    deleted?: true;
    isApp?: boolean;
    subscriptions?: Subscription<any>[];
    destroyCallback?: OnDestroyCallback;
    locked?: true;
    callbackMaker?: true;
    events?: Events;
};
export type SupportTagGlobal = TagGlobal & {
    destroy$: Subject<any>;
    blocked: (BaseSupport | Support)[];
    oldest: BaseSupport | Support;
    newest: BaseSupport | Support;
    context: SupportContextItem[];
    init?: OnInitCallback;
    providers?: Provider[];
};
export type Events = {
    [name: string]: EventCallback;
};
export type Clone = (Element | Text | ChildNode);
export type TemplaterResult = {
    propWatch: PropWatches;
    tagJsType: ValueType;
    wrapper?: Wrapper;
    tag?: StringTag | DomTag;
    props?: Props;
    arrayValue?: unknown;
    key: (arrayValue: unknown) => TemplaterResult;
};
export declare function getTemplaterResult(propWatch: PropWatches, props?: Props): TemplaterResult;
