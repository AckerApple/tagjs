import { TemplaterResult } from '../TemplaterResult.class.js'
import { Counts } from'../../interpolations/interpolateTemplate.js'
import { processFirstTagResult, processReplaceTagResult } from'./processTagResult.function.js'
import { TagSubject } from '../../subject.types.js'
import { BaseSupport, PropsConfig, Support } from '../Support.class.js'
import { setupNewSupport } from './processTag.function.js'
import { renderWithSupport } from '../render/renderWithSupport.function.js'
import { ContextItem } from '../Tag.class.js'
import { validateTemplater } from './validateTemplater.function.js'
import { ValueTypes } from '../ValueTypes.enum.js'
import { getCastedProps } from '../getTagWrap.function.js'

export function processReplacementComponent(
  templater: TemplaterResult,
  subject: ContextItem,
  ownerSupport: BaseSupport | Support,
  options: {counts: Counts},
): BaseSupport | Support {
  // TODO: This below check not needed in production mode
  validateTemplater(templater)

  const newSupport = new Support(
    templater,
    ownerSupport,
    ownerSupport.appSupport,
    subject,
  )

  const newPropsConfig = newSupport.propsConfig as PropsConfig
  if(newPropsConfig) {
    const castedProps = templater.tagJsType !== ValueTypes.tagComponent ? [] : getCastedProps(
      templater,
      newSupport,
    )
  
    newPropsConfig.castProps = castedProps
  }
  
  setupNewSupport(newSupport, ownerSupport, subject)
  
  const {support} = renderWithSupport(
    newSupport,
    subject.global.newest, // subject.support, // existing tag
    subject as TagSubject,
    ownerSupport,
  )

  processReplaceTagResult(
    support,
    options.counts,
    subject as TagSubject, // The element set here will be removed from document. Also result.tag will be added in here
  )

  ownerSupport.subject.global.childTags.push(newSupport as Support)

  return support
}

export function processFirstSubjectComponent(
  templater: TemplaterResult,
  subject: ContextItem,
  ownerSupport: BaseSupport | Support,
  options: {counts: Counts},
  appendTo: Element,
): BaseSupport | Support {
  // TODO: This below check not needed in production mode
  validateTemplater(templater)

  const newSupport = new Support(
    templater,
    ownerSupport,
    ownerSupport.appSupport,
    subject,
  )
  
  const newPropsConfig = newSupport.propsConfig as PropsConfig
  if(newPropsConfig) {
    const castedProps = templater.tagJsType !== ValueTypes.tagComponent ? [] : getCastedProps(
      templater,
      newSupport,
    )
  
    newPropsConfig.castProps = castedProps
  }
  
  setupNewSupport(newSupport, ownerSupport, subject)
  
  const {support} = renderWithSupport(
    newSupport,
    subject.global.newest, // subject.support, // existing tag
    subject as TagSubject,
    ownerSupport,
  )

  processFirstTagResult(
    support,
    options.counts,
    subject as TagSubject, // The element set here will be removed from document. Also result.tag will be added in here
    appendTo,
  )

  ownerSupport.subject.global.childTags.push(newSupport as Support)

  return support
}
