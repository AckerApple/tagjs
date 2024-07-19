import { InputElementTargetEvent } from '../interpolations/attributes/ElementTargetEvent.interface.js'
import { LikeObjectChildren } from '../interpolations/optimizers/exchangeParsedForValues.function.js'
import { RegularValue } from '../subject.types.js'
import { getStringTag, getDomTag } from './Tag.class.js'
import { getTemplaterResult } from './TemplaterResult.class.js'

export type TagValues = (((e: InputElementTargetEvent) => any) | RegularValue | null | undefined | Object)[]

export function html(
  strings: string[] | TemplateStringsArray,
  ...values: TagValues
) {
  const stringTag = getStringTag(strings as string[], values)
  const templater = getTemplaterResult([])
  templater.tag = stringTag
  stringTag.templater = templater
  return stringTag
}

html.dom = function(
  dom: LikeObjectChildren,
  ...values: TagValues
) {
  return getDomTag(dom, values)
}
