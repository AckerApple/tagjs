import { DisplaySubject, TagSubject } from '../subject.types.js'
import { isStaticTag } from'../isInstance.js'
import { InterpolateSubject } from './update/processFirstSubject.utils.js'
import { TagArraySubject } from'./update/processTagArray.js'
import { isLikeTags } from'./isLikeTags.function.js'
import { Counts } from'../interpolations/interpolateTemplate.js'
import { destroyTagMemory, destroyTagSupportPast } from'./destroyTag.function.js'
import { InsertBefore } from'../interpolations/InsertBefore.type.js'
import { insertAfter } from'../insertAfter.function.js'
import { BaseTagSupport, TagSupport } from './TagSupport.class.js'
import { ValueTypes } from './ValueTypes.enum.js'

export function checkDestroyPrevious(
  subject: InterpolateSubject, // existing.value is the old value
  newValue: unknown,
  insertBefore: InsertBefore,
  valueType: ValueTypes,
) {
  const displaySubject = subject as DisplaySubject
  const hasLastValue = 'lastValue' in displaySubject
  const lastValue = displaySubject.lastValue // TODO: we maybe able to use displaySubject.value and remove concept of lastValue

  // was simple value but now something bigger
  if(hasLastValue && lastValue !== newValue) {
    // below is faster than using getValueType
    const newType = typeof(newValue)
    if( isSimpleType(newType) && typeof(lastValue) === newType ) {
      return false
    }

    if(newValue instanceof Function && (lastValue as any) instanceof Function) {
      return false
    }

    destroySimpleValue(insertBefore, displaySubject)
    return 'changed-simple-value'
  }

  const arraySubject = subject as TagArraySubject
  const wasArray = arraySubject.lastArray
  
  // no longer an array
  if (wasArray && valueType!==ValueTypes.tagArray) {
    const placeholderElm = arraySubject.placeholder as Text
    delete arraySubject.lastArray
    delete arraySubject.placeholder
    insertAfter(insertBefore, placeholderElm)

    
    for (let index = wasArray.length - 1; index >= 0; --index) {
      const {tagSupport} = wasArray[index]
      destroyArrayTag(tagSupport, {added:0, removed:0})
    }

    return 'array'
  }

  const tagSubject = subject as TagSubject
  const lastSupport = tagSubject.tagSupport
  
  // no longer tag or component?
  if(lastSupport) {
    const isValueTag = isStaticTag(newValue)
    const isSubjectTag = isStaticTag(subject._value)

    if(isSubjectTag && isValueTag) {
      const newTag = newValue as TagSupport
      
      // its a different tag now
      if(!isLikeTags(newTag, lastSupport)) {
        // put template back down
        restoreTagMarker(lastSupport)
        destroyTagMemory(lastSupport)
        return 2
      }

      return false
    }

    if(valueType === ValueTypes.tagComponent) {
      return false // its still a tag component
    }


    if(newValue && (newValue as any).oneRender) {
      return false
    }

    // put template back down
    restoreTagMarker(lastSupport)

    // destroy old component, value is not a component
    destroyTagMemory(lastSupport)
    return 'different-tag'
  }

  return false
}

export function isSimpleType(value: any) {
  return ['string','number','boolean'].includes(value)
}

export function destroyArrayTag(
  tagSupport: TagSupport,
  counts: Counts,
) {
  destroyTagSupportPast(tagSupport)

  tagSupport.destroy({
    stagger: counts.removed++,
  })

  const insertBefore = tagSupport.global.insertBefore as Element
  const parentNode = insertBefore.parentNode as ParentNode
  parentNode.removeChild(insertBefore)
}

function destroySimpleValue(
  insertBefore: InsertBefore, // always a template tag
  subject: DisplaySubject,
) {
  const clone = subject.clone as Element
  const parent = clone.parentNode as ParentNode
  

  // 1 put the template back down
  parent.insertBefore(insertBefore, clone)
  parent.removeChild(clone)
  
  delete subject.clone
  delete subject.lastValue
}

export function restoreTagMarker(
  lastSupport: BaseTagSupport | TagSupport,
) {
  const insertBefore = lastSupport.global.insertBefore as Element
  const global = lastSupport.global
  const placeholderElm = global.placeholder
  if(placeholderElm) {
    insertAfter(insertBefore, placeholderElm)
    delete global.placeholder
  }
}
