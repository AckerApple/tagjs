import { Context, ElementBuildOptions, Tag, variablePrefix } from "./Tag.class"
import { InterpolateOptions } from "./interpolateElement"
import { elementInitCheck } from "./elementInitCheck"
import { Clones, InsertBefore } from "./Clones.type"
import { InterpolateSubject, processSubjectValue } from "./processSubjectValue.function"
import { isTagArray, isTagComponent } from "./isInstance"
import { DisplaySubject } from "./Tag.utils"
import { scanTextAreaValue } from "./scanTextAreaValue.function"
import { ExistingValue, updateExistingValue } from "./updateExistingValue.function"

export type Template = Element & {clone?: any}
export type InterpolateComponentResult = {
  subject: InterpolateSubject
  insertBefore: Element | Text | Template
  ownerTag: Tag
  variableName: string
}
export type InterpolateTemplateResult = {
  clones: Clones
  tagComponent?: InterpolateComponentResult
}

export function interpolateTemplate(
  insertBefore: Template, // <template end interpolate /> (will be removed)
  context: Context, // variable scope of {`__tagvar${index}`:'x'}
  ownerTag: Tag, // Tag class
  counts: Counts, // used for animation stagger computing
  options: InterpolateOptions,
): InterpolateTemplateResult {
  // TODO: THe clones array is useless here
  const clones: Clones = []

  if ( !insertBefore.hasAttribute('end') ) {
    return {clones} // only care about <template end>
  }

  const variableName = insertBefore.getAttribute('id')
  if(variableName?.substring(0, variablePrefix.length) !== variablePrefix) {
    return {clones} // ignore, not a tagVar
  }

  const existingSubject = context[variableName]
  const isDynamic = isTagComponent(existingSubject.value) || isTagArray(existingSubject.value)

  // process dynamics later
  if(isDynamic) {
    return {
      clones,
      tagComponent: {
        variableName,
        ownerTag,
        subject: existingSubject,
        insertBefore
      }}
  }
  
  let isForceElement = options.forceElement
  subscribeToTemplate(
    insertBefore,
    existingSubject,
    ownerTag,
    counts,
    {isForceElement},
  )

  return {clones}
}

export function subscribeToTemplate(
  insertBefore: InsertBefore,
  subject: InterpolateSubject,
  ownerTag: Tag,
  counts: Counts, // used for animation stagger computing
  {isForceElement}: {isForceElement?:boolean},
) {
  let called = false
  const callback = (value: ExistingValue) => {
    // const orgInsert = insertBefore
    /*
    const clone = (subject as DisplaySubject).clone
    if(clone && clone.parentNode) {
      insertBefore = clone
    }
    */

    if(called) {
      updateExistingValue(
        subject,
        value,
        ownerTag,
        insertBefore, // needed incase type of value changed and a redraw required
      )
      return
    }

    processSubjectValue(
      value,
      subject,
      insertBefore,
      ownerTag,
      {
        counts: {...counts},
        forceElement: isForceElement,
      },
    )

    if(isForceElement) {
      isForceElement = false // only can happen once
    }

    // ownerTag.clones.push(...clones)
    // ownerTag.clones.push(...nextClones)
    // clones.push(...nextClones)
    called = true
  }

  const sub = subject.subscribe(callback as any)
  ownerTag.tagSupport.templater.global.subscriptions.push(sub)
}

export type Counts = {
  added: number
  removed: number // increased when item removed from array
}

export function afterElmBuild(
  elm: Element | ChildNode,
  options: ElementBuildOptions,
  context: Context,
  ownerTag: Tag,
) {
  if(!(elm as Element).getAttribute) {
    return
  }

  const tagName = elm.nodeName // elm.tagName
  if(tagName==='TEXTAREA') {
    scanTextAreaValue(elm as HTMLTextAreaElement, context, ownerTag)
  }

  let diff = options.counts.added
  diff = elementInitCheck(elm, options.counts) - diff

  if((elm as Element).children) {
    new Array(...(elm as Element).children as any).forEach((child, index) => {
      const subOptions = {
        ...options,
       counts: options.counts,
      }

      return afterElmBuild(child, subOptions, context, ownerTag)
    })
  }
}
