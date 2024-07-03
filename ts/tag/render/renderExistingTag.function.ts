import { AnySupport, BaseSupport, Support } from '../Support.class.js'
import { TagSubject } from '../../subject.types.js'
import { isLikeTags } from'../isLikeTags.function.js'
import { renderWithSupport } from'./renderWithSupport.function.js'
import { providersChangeCheck } from '../../state/providersChangeCheck.function.js'

/** Returns true when rendering owner is not needed. Returns false when rendering owner should occur */
export function renderExistingTag(
  oldestSupport: AnySupport, // oldest with elements on html
  newSupport: AnySupport, // new to be rendered
  ownerSupport: BaseSupport | Support, // ownerSupport
  subject: TagSubject,
): AnySupport {
  const lastSupport = subject.support as Support // todo maybe not needed?
  const global = subject.global
  
  // share point between renders
  newSupport.subject.global = global

  const preRenderCount = global.renderCount
  providersChangeCheck(oldestSupport)
  
  // When the providers were checked, a render to myself occurred and I do not need to re-render again
  const prevSupport = global.newest as Support
  const justUpdate = preRenderCount !== global.renderCount
  if(justUpdate) {
    oldestSupport.subject.global.oldest.updateBy(prevSupport)
    return prevSupport // already rendered during triggered events
  }

  const toRedrawTag = prevSupport || lastSupport || global.oldest
  const reSupport = renderWithSupport(
    newSupport,
    toRedrawTag,
    subject,
    ownerSupport as Support,
  )

  const isLikeTag = prevSupport && isLikeTags(prevSupport, reSupport)
  if(isLikeTag) {
    subject.support = reSupport as Support
    const oldest = global.oldest || oldestSupport
    oldest.updateBy(reSupport)
  }

  return reSupport
}