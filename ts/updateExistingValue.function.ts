import { TagSubject } from "./Tag.utils.js"
import { TagSupport } from "./TagSupport.class.js"
import { Subject } from "./Subject.js"
import { TemplateRedraw, TemplaterResult } from "./templater.utils.js"
import { isSubjectInstance, isTagArray, isTagComponent } from "./isInstance.js"
import { bindSubjectCallback } from "./bindSubjectCallback.function.js"
import { Tag } from "./Tag.class.js"
import { processTag } from "./processSubjectValue.function.js"
import { TagArraySubject, processTagArray } from "./processTagArray.js"
import { updateExistingTagComponent } from "./updateExistingTagComponent.function.js"
import { updateExistingTag } from "./updateExistingTag.function.js"

export function updateExistingValue(
  existing: Subject<Tag> | TemplaterResult | TagSubject | TagArraySubject,
  value: TemplaterResult | TagSupport | Function | Subject<any>,
  tag: Tag,
): void {
  const subjectValue = (existing as Subject<Tag>).value
  const ogTag: Tag = subjectValue?.tag
  const tempResult = value as TemplateRedraw
  const existingSubArray = existing as TagArraySubject
  const existingSubTag = existing as TagSubject

  // was array
  if((existing as any).lastArray) {    
    // its another tag array
    if(isTagArray(value)) {
      processTagArray(
        existing as TagArraySubject,
        value as any as Tag[],
        existingSubArray.template,
        tag,
        {counts: {
          added: 0,
          removed: 0,
        }}
      )
  
      return 
    }

    // was tag array and now something else
    ;(existing as any).lastArray.forEach(({tag}: any) => tag.destroy())
    delete (existing as any).lastArray
  }

  // handle already seen tag components
  if(isTagComponent(tempResult)) {
    return updateExistingTagComponent(
      tag,
      tempResult,
      existingSubTag as TagSubject,
      subjectValue,
    )
  }

  // was component but no longer
  const existingTag = existingSubTag.tag
  if(existingTag) {
    // its now an array
    if(isTagArray(value)) {
      destroyTagMemory(existingTag, existingSubTag, subjectValue)
      delete existingSubTag.tag
    }

    const oldWrapper = existingTag.tagSupport.templater.wrapper
    const newWrapper = (value as any)?.wrapper
    const wrapMatch = oldWrapper && newWrapper && oldWrapper?.original === newWrapper?.original

    // TODO: We shouldn't need both of these
    const isSameTag = value && existingTag.lastTemplateString === (value as any).lastTemplateString
    const isSameTag2 = value && (value as any).getTemplate && existingTag.isLikeTag(value as any)

    if(isSameTag || isSameTag2) {
      processTag(
        value,
        existing as TagSubject,
        (existing as any).template,
        existingTag, // tag,
        {
          counts: {
            added: 0,
            removed: 0,
          }
        }
      )
      return
    }
    
    if(wrapMatch) {
      return updateExistingTag(
        value as TemplaterResult,
        existingTag,
        existingSubTag,
      )
    }

    if(ogTag) {
      destroyTagMemory(existingTag, existingSubTag, subjectValue)
      delete existingSubTag.tag
    }
  }

  // now its a function
  if(value instanceof Function) {
    existingSubTag.set( bindSubjectCallback(value as any, tag) )
    return
  }

  // we have been given a subject
  if(isSubjectInstance(value)) {
    existingSubTag.set( (value as Subject<any>).value ) // let ValueSubject now of newest value
    return
  }
  
  existingSubTag.set(value) // let ValueSubject now of newest value

  return
}

export function destroyTagMemory(
  existingTag: Tag,
  existingSubject: TagSubject,
  subjectValue: any
) {
  delete existingSubject.tag
  delete existingSubject.tagSupport
  delete subjectValue.tagSupport
  existingTag.destroy()
}
