import { InsertBefore } from'../../interpolations/InsertBefore.type.js'
import { DisplaySubject } from '../../subject.types'
import { castTextValue, updateBeforeTemplate } from'../../updateBeforeTemplate.function.js'
import { Support } from '../Support.class.js'

export type RegularValue = string | number | undefined | boolean

export function processRegularValue(
  value: RegularValue,
  subject: DisplaySubject, // could be tag via subject.tag
  insertBefore: InsertBefore, // <template end interpolate /> (will be removed)
) {
  subject.global.insertBefore = insertBefore
  const before = subject.global.placeholder || insertBefore // Either the template is on the doc OR its the first element we last put on doc

  // matches but also was defined at some point
  if(subject.lastValue === value && 'lastValue' in subject) {
    return // no need to update display, its the same
  }

  subject.lastValue = value
  const castedValue = castTextValue(value)
  
  // replace existing string?
  const oldClone = subject.global.placeholder
  if(oldClone) {
    oldClone.textContent = castedValue
    return
  }
  
  // Processing of regular values
  const clone = updateBeforeTemplate(
    castedValue,
    before, // this will be removed
  )

  subject.global.placeholder = clone // remember single element put down, for future updates
}

export function processFirstRegularValue(
  value: RegularValue,
  subject: DisplaySubject, // could be tag via subject.tag
  insertBefore: InsertBefore, // <template end interpolate /> (will be removed)
  ownerSupport: Support,
) {
  subject.lastValue = value
  const castedValue = castTextValue(value)

  // Processing of regular values
  const clone = updateBeforeTemplate(
    castedValue,
    insertBefore, // this will be removed
  )

  subject.global.placeholder = clone // remember single element put down, for future updates 
}