import { Counts } from '../interpolations/interpolateTemplate'
import { State } from '../state'
import { InterpolatedTemplates } from '../interpolations/interpolations'
import { InterpolateSubject } from './update/processSubjectValue.function'
import { TemplaterResult } from '../TemplaterResult.class'
import { InputElementTargetEvent } from '../interpolations/ElementTargetEvent.interface'
import { TagValues } from './html'

export const variablePrefix = '__tagvar'
export const escapeVariable = '--' + variablePrefix + '--'

export const escapeSearch = new RegExp(escapeVariable, 'g')

export type Context = {
  [index: string]: InterpolateSubject // ValueSubject<unknown>
}
export type TagMemory = {
  // context: Context
  state: State
}

export interface TagTemplate {
  interpolation: InterpolatedTemplates,
  string: string,
  strings: string[],
  values: unknown[],
  context: Context,
}

export class Tag {
  isTagClass = true

  // present only when an array. Populated by Tag.key()
  memory = {
  } as {
    arrayValue?: unknown
  }

  templater!: TemplaterResult
  
  constructor(
    public strings: string[],
    public values: any[],
  ) {}

  /** Used for array, such as array.map(), calls aka array.map(x => html``.key(x)) */
  key(arrayValue: unknown) {
    this.memory.arrayValue = arrayValue
    return this
  }

  // TODO: Is this just a fake function that can be data typed?
  children?: {strings: string[] | TemplateStringsArray, values: TagValues}
  html(
    strings: string[] | TemplateStringsArray,
    ...values: TagValues
  ) {
    this.children = {strings, values}
    return this
  }
}

export type ElementBuildOptions = {
  counts: Counts
  forceElement?: boolean
}