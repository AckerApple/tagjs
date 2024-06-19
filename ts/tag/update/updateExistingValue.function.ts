import { DisplaySubject, TagSubject } from '../../subject.types.js'
import { BaseSupport, Support } from '../Support.class.js'
import { TemplaterResult } from '../TemplaterResult.class.js'
import { isTagClass, isTagTemplater } from '../../isInstance.js'
import { InterpolateSubject, TemplateValue } from './processFirstSubject.utils.js'
import { TagArraySubject, processTagArray } from './processTagArray.js'
import { updateExistingTagComponent } from './updateExistingTagComponent.function.js'
import { RegularValue, processRegularValue } from './processRegularValue.function.js'
import { checkDestroyPrevious } from '../checkDestroyPrevious.function.js'
import { processSubjectComponent } from './processSubjectComponent.function.js'
import { isLikeTags } from '../isLikeTags.function.js'
import { getFakeTemplater, processTag, setupNewSupport } from './processTag.function.js'
import { InsertBefore } from '../../interpolations/InsertBefore.type.js'
import { Tag, Dom } from '../Tag.class.js'
import { swapInsertBefore } from '../setTagPlaceholder.function.js'
import { ValueTypes } from '../ValueTypes.enum.js'
import { getValueType } from '../getValueType.function.js'

export function updateExistingValue(
  subject: InterpolateSubject,
  value: TemplateValue,
  ownerSupport: BaseSupport | Support,
  insertBefore: InsertBefore,
): TagSubject | InterpolateSubject {
  const valueType = getValueType(value)
  
  checkDestroyPrevious(
    subject, value, valueType
  )

  // handle already seen tag components
  if(valueType === ValueTypes.tagComponent) {
    return prepareUpdateToComponent(
      value as TemplaterResult,
      subject as TagSubject,
      insertBefore,
      ownerSupport,
    ) as TagSubject
  }
  
  // was component but no longer
  const support = (subject as TagSubject).support
  if( support ) {
    if(valueType === ValueTypes.function) {
      return subject // its a oneRender tag
    }

    handleStillTag(
      subject as TagSubject,
      value as TemplaterResult,
      ownerSupport
    )

    return subject as TagSubject
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
        ownerSupport,
        subject as TagSubject,
      )
      return subject
    
    case ValueTypes.tag:
    case ValueTypes.dom:
      const tag = value as Tag | Dom
      let templater = tag.templater
  
      if(!templater) {
        templater = getFakeTemplater()
        tag.templater = templater
        templater.tag = tag
      }
  
      processTag(
        templater,
        ownerSupport,
        subject as TagSubject,
      )

      return subject

    case ValueTypes.subject:
      return value as TagSubject

    // now its a useless function (we don't automatically call functions)
    case ValueTypes.function:
      if(!subject.global.placeholder) {
        subject.global.placeholder = swapInsertBefore(insertBefore)
      }

      return subject
  }

  // This will cause all other values to render
  processRegularValue(
    value as RegularValue,
    subject as DisplaySubject,
    insertBefore,
  )

  return subject
}

function handleStillTag(
  subject: TagSubject,
  value: Tag | TemplateValue,
  ownerSupport: BaseSupport | Support,
) {
  const lastSupport = subject.support
  let templater = value
  const isClass = isTagClass(value)

  if(isClass) {
    const tag = value as Tag | Dom
    templater = tag.templater
    if(!templater) {
      templater = new TemplaterResult([])
      templater.tag = tag
      tag.templater = templater
    }
  }
  
  const valueSupport = new Support(
    templater as TemplaterResult,
    ownerSupport,
    subject,
  )
  
  const isSameTag = value && isLikeTags(lastSupport, valueSupport)

  if(isTagTemplater(value)) {
    setupNewSupport(valueSupport, ownerSupport, subject)
  }

  if(isSameTag) {
    // lastSupport.updateBy(valueSupport)
    // ??? recently changed from above
    lastSupport.subject.global.oldest.updateBy(valueSupport)
    return
  }

  if(isSameTag) {
    return processTag(
      templater as TemplaterResult,
      ownerSupport,
      subject,
    )
  }

  return processRegularValue(
    value as RegularValue,
    subject as unknown as DisplaySubject,
    subject.global.insertBefore as InsertBefore,
  )
}

function prepareUpdateToComponent(
  templater: TemplaterResult,
  subjectTag: TagSubject,
  insertBefore: InsertBefore,
  ownerSupport: BaseSupport | Support,
): TagSubject {
  // When last value was not a component
  if(!subjectTag.support) {
    processSubjectComponent(
      templater,
      subjectTag,
      insertBefore,
      ownerSupport,
      {
        counts: {added: 0, removed: 0},
      }
    )

    return subjectTag
  }
  
  const support = new Support(
    templater,
    ownerSupport,
    subjectTag,
  )

  const subjectSup = subjectTag.support
  const prevSupport = subjectSup.subject.global.newest
  if(prevSupport) {
    const newestState = prevSupport.state
    support.state.length = 0
    support.state.push(...newestState)
  } else {
    processSubjectComponent(
      templater,
      subjectTag,
      insertBefore,
      ownerSupport,
      {counts: {added: 0, removed: 0}}
    )

    return subjectTag
  }

  subjectTag.global = subjectSup.subject.global
  subjectTag.support = support

  updateExistingTagComponent(
    ownerSupport,
    support, // latest value
    subjectTag,
    insertBefore,
  )

  return subjectTag
}
