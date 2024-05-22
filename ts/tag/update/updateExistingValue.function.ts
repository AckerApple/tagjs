import { DisplaySubject, TagSubject } from '../../subject.types'
import { TagSupport } from '../TagSupport.class'
import { TemplaterResult } from '../../TemplaterResult.class'
import { isSubjectInstance, isTagArray, isTagClass, isTagComponent, isTagTemplater } from '../../isInstance'
import { InterpolateSubject, TemplateValue } from './processSubjectValue.function'
import { TagArraySubject, processTagArray } from './processTagArray'
import { updateExistingTagComponent } from './updateExistingTagComponent.function'
import { RegularValue, processRegularValue } from './processRegularValue.function'
import { checkDestroyPrevious, restoreTagMarker } from '../checkDestroyPrevious.function'
import { ValueSubject } from '../../subject/ValueSubject'
import { processSubjectComponent } from './processSubjectComponent.function'
import { isLikeTags } from '../isLikeTags.function'
import { Callback, bindSubjectCallback } from '../../interpolations/bindSubjectCallback.function'
import { setupNewTemplater, getFakeTemplater, processTag } from './processTag.function'
import { InsertBefore } from '../../interpolations/Clones.type'
import { Tag } from '../Tag.class'

export function updateExistingValue(
  subject: InterpolateSubject,
  value: TemplateValue,
  ownerSupport: TagSupport,
  insertBefore: InsertBefore,
): InterpolateSubject {
  const subjectTag = subject as TagSubject
  const isComponent = isTagComponent(value)
  
  checkDestroyPrevious(subject, value, insertBefore)

  // handle already seen tag components
  if(isComponent) {
    return prepareUpdateToComponent(
      value as TemplaterResult,
      subjectTag,
      insertBefore,
      ownerSupport,
    )
  }
  
  // was component but no longer
  const tagSupport = subjectTag.tagSupport
  if( tagSupport ) {
    handleStillTag(
      subject as TagSubject,
      value as TemplaterResult,
      ownerSupport
    )

    return subjectTag
  }

  // its another tag array
  if(isTagArray(value)) {
    processTagArray(
      subject as TagArraySubject,
      value as (TemplaterResult | Tag)[],
      insertBefore, // oldInsertBefore as InsertBefore,
      ownerSupport,
      {counts: {
        added: 0,
        removed: 0,
      }}
    )

    return subject
  }

  if(isTagTemplater(value)) {
    processTag(
      value as TemplaterResult,
      insertBefore,
      ownerSupport,
      subjectTag,
    )
    return subjectTag
  }

  if(isTagClass(value)) {
    const tag = value as Tag
    let templater = tag.templater

    if(!templater) {
      templater = getFakeTemplater()
      tag.templater = templater
      templater.tag = tag
    }

    processTag(
      templater,
      insertBefore,
      ownerSupport,
      subjectTag,
    )

    return subjectTag
  }

  // we have been given a subject
  if(isSubjectInstance(value)) {
    return value as ValueSubject<any>
  }

  // now its a function
  if(value instanceof Function) {
    const bound = bindSubjectCallback(value as Callback, ownerSupport)
    subject.set(bound)
    return subject
  }

  // This will cause all other values to render
  processRegularValue(
    value as RegularValue,
    subject as DisplaySubject,
    insertBefore,
  )

  return subjectTag
}

function handleStillTag(
  subject: TagSubject,
  value: Tag | TemplateValue,
  ownerSupport: TagSupport,
) {
  const lastSupport = subject.tagSupport
  let templater = value as TemplaterResult
  const isClass = isTagClass(value)

  if(isClass) {
    const tag = value as Tag
    templater = tag.templater
    if(!templater) {
      templater = new TemplaterResult([])
      templater.tag = tag
      tag.templater = templater
    }
  }
  
  const valueSupport = new TagSupport(
    templater,
    ownerSupport,
    subject,
  )

  if(isClass) {
    valueSupport.global = lastSupport.global
  }
  
  const isSameTag = value && isLikeTags(lastSupport, valueSupport)

  if(isTagTemplater(value)) {
    setupNewTemplater(valueSupport, ownerSupport, subject)
  }

  if(isSameTag) {
    lastSupport.updateBy(valueSupport)
    return
  }

  if(isSameTag) {
    // const subjectTag = subject as TagSubject
    const global = lastSupport.global
    const insertBefore = global.insertBefore as InsertBefore

    return processTag(
      templater,
      insertBefore,
      ownerSupport,
      subject,
    )
  }

  return processRegularValue(
    value as RegularValue,
    subject as unknown as DisplaySubject,
    (subject as unknown as DisplaySubject).insertBefore,
  )
}

function prepareUpdateToComponent(
  templater: TemplaterResult,
  subjectTag: TagSubject,
  insertBefore: InsertBefore,
  ownerSupport: TagSupport,
): TagSubject {
  // When last value was not a component
  if(!subjectTag.tagSupport) {
    processSubjectComponent(
      templater,
      subjectTag,
      insertBefore, // oldInsertBefore as InsertBefore,
      ownerSupport,
      {
        forceElement: true,
        counts: {added: 0, removed: 0},
      }
    )

    return subjectTag
  }
  
  const tagSupport = new TagSupport(
    templater,
    ownerSupport,
    subjectTag,
  )

  const subjectSup = subjectTag.tagSupport
  const prevSupport = subjectSup.global.newest
  if(prevSupport) {
    const newestState = prevSupport.memory.state
    // tagSupport.memory.state = [...newestState]
    tagSupport.memory.state.length = 0
    tagSupport.memory.state.push(...newestState)
  } else {
    restoreTagMarker(subjectSup)
    /*
    const placeholder = subjectSup.global.placeholder
    if(placeholder && !insertBefore.parentNode) {
      insertAfter(insertBefore,placeholder)
      delete subjectSup.global.placeholder
    }
    */

    processSubjectComponent(
      templater, subjectTag, insertBefore, ownerSupport,
      {
        forceElement: true,
        counts: {added: 0, removed: 0},
      }
    )
    return subjectTag
  }
  tagSupport.global = subjectSup.global
  subjectTag.tagSupport = tagSupport

  updateExistingTagComponent(
    ownerSupport,
    tagSupport, // latest value
    subjectTag,
    insertBefore,
  )

  return subjectTag
}
