import { DisplaySubject, TagSubject } from '../../subject.types'
import { TagSupport } from '../TagSupport.class'
import { TemplaterResult } from '../../TemplaterResult.class'
import { isTagClass, isTagTemplater } from '../../isInstance'
import { InterpolateSubject, TemplateValue, ValueTypes, getValueType } from './processFirstSubject.utils'
import { TagArraySubject, processTagArray } from './processTagArray'
import { updateExistingTagComponent } from './updateExistingTagComponent.function'
import { RegularValue, processRegularValue } from './processRegularValue.function'
import { checkDestroyPrevious, restoreTagMarker } from '../checkDestroyPrevious.function'
import { ValueSubject } from '../../subject/ValueSubject'
import { processSubjectComponent } from './processSubjectComponent.function'
import { isLikeTags } from '../isLikeTags.function'
import { setupNewTemplater, getFakeTemplater, processTag } from './processTag.function'
import { InsertBefore } from '../../interpolations/Clones.type'
import { Tag } from '../Tag.class'
import { swapInsertBefore } from '../setTagPlaceholder.function'

export function updateExistingValue(
  subject: InterpolateSubject,
  value: TemplateValue,
  ownerSupport: TagSupport,
  insertBefore: InsertBefore,
): InterpolateSubject {
  const subjectTag = subject as TagSubject
  const valueType = getValueType(value)
  
  checkDestroyPrevious(subject, value, insertBefore)

  // handle already seen tag components
  if(valueType === ValueTypes.tagComponent) {
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
    if(valueType === ValueTypes.function) {
      return subjectTag // its a oneRender tag
    }

    handleStillTag(
      subject as TagSubject,
      value as TemplaterResult,
      ownerSupport
    )

    return subjectTag
  }

  switch (valueType) {
    case ValueTypes.tagArray:
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

    case ValueTypes.templater:
      processTag(
        value as TemplaterResult,
        insertBefore,
        ownerSupport,
        subjectTag,
      )
      return subjectTag
    
    case ValueTypes.tag:
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

    case ValueTypes.subject:
      return value as ValueSubject<any>

    // now its a useless function (we don't automatically call functions)
    case ValueTypes.function:
      // const bound = bindSubjectCallback(value as Callback, ownerSupport)
      // subject.set(bound)
      if(!subject.clone) {
        subject.clone = swapInsertBefore(insertBefore)
      }

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
    tagSupport.memory.state.length = 0
    tagSupport.memory.state.push(...newestState)
  } else {
    restoreTagMarker(subjectSup)

    processSubjectComponent(
      templater, subjectTag, insertBefore, ownerSupport,
      {
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
