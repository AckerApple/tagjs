import { Context, StringTag, DomTag } from './Tag.class.js'
import { BaseSupport, Support } from './Support.class.js'
import { Props } from '../Props.js'
import { TagWrapper } from './tag.utils.js'
import { Provider } from '../state/providers.js'
import { OnDestroyCallback } from '../state/onDestroy.js'
import { TagSubject } from '../subject.types.js'
import { OnInitCallback } from '../state/onInit.js'
import { Subscription } from '../subject/subject.utils.js'
import { InsertBefore } from '../interpolations/InsertBefore.type.js'
import { Subject } from '../subject/index.js'
import { BasicTypes, ImmutableTypes, ValueType, ValueTypes } from './ValueTypes.enum.js'
import { DomObjectChildren } from '../interpolations/optimizers/ObjectNode.types.js'

export type OriginalFunction = (() => StringTag) & {compareTo: string}

export type Wrapper = ((
  newSupport: BaseSupport | Support,
  subject: TagSubject,
  prevSupport?: BaseSupport | Support,
) => Support) & {
  tagJsType: typeof ValueTypes.tagComponent | typeof ValueTypes.oneRender | typeof ValueTypes.templater
  parentWrap: TagWrapper<any>
}

export type TagGlobal = {
  nowValueType?: ImmutableTypes | ValueType | BasicTypes
  destroy$: Subject<any>
  oldest: BaseSupport | Support
  newest?: BaseSupport | Support
  context: Context // populated after reading interpolated.values array converted to an object {variable0, variable:1}
  providers: Provider[]
  /** Indicator of re-rending. Saves from double rending something already rendered */
  renderCount: number
  deleted?: true
  isApp?: boolean // root element

  // ALWAYS template tag
  insertBefore?: InsertBefore // what element put down before
  placeholder?: Text // when insertBefore is taken up, the last element becomes or understanding of where to redraw to

  subscriptions: Subscription<any>[] // subscriptions created by clones
  
  destroyCallback?: OnDestroyCallback // what to run when destroyed, used for onDestroy
  init?: OnInitCallback // what to run when init complete, used for onInit
  
  locked?: true
  blocked: (BaseSupport | Support)[], // renders that did not occur because an event was processing
  
  childTags: Support[], // tags on me
  // clones: Clone[],
  htmlDomMeta: DomObjectChildren
  callbackMaker?: true
  simpleValueElm?: Clone
}

export type Clone = (Element | Text | ChildNode)

export class TemplaterResult {
  tagJsType = ValueTypes.templater
  tagged!: boolean
  wrapper?: Wrapper
  tag?: StringTag | DomTag
  
  constructor(public props: Props) {}
  
  // ??? TODO: removed as it create arrayValue = undefined which then make `'arrayValue' in` pass as true
  // arrayValue?: unknown // used for tag components used in arrays
  key (arrayValue: unknown) {
    ;(this as any).arrayValue = arrayValue
    return this
  }
}