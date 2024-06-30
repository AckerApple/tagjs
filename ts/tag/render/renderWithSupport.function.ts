import { AnySupport, BaseSupport, Support } from '../Support.class.js'
import { isLikeTags } from'../isLikeTags.function.js'
import { TagSubject } from '../../subject.types.js'
import { renderTagOnly } from'./renderTagOnly.function.js'
import { destroyUnlikeTags } from'./destroyUnlikeTags.function.js'
import { softDestroySupport } from './softDestroySupport.function.js'
import { ValueTypes } from '../ValueTypes.enum.js'
import { DomTag, StringTag } from '../Tag.class.js'
import { deepEqual } from '../../deepFunctions.js'

export function renderWithSupport(
  newSupport: Support | BaseSupport,
  lastSupport: Support | BaseSupport | undefined, // previous
  subject: TagSubject, // events & memory
  ownerSupport?: BaseSupport | Support, // who to report to
): AnySupport {
  const lastTemplater = lastSupport?.templater
  const lastTag = lastTemplater?.tag

  const reSupport = renderTagOnly(
    newSupport, lastSupport, subject, ownerSupport,
  )

  const isLikeTag = !lastSupport || isLikeTags(lastSupport, reSupport)
  if(!isLikeTag) {
    destroyUnlikeTags(
      lastSupport,
      reSupport,
      subject,
    )
  } else if(lastSupport) {
    const tag = reSupport.templater.tag

    if(tag) {
      checkTagSoftDestroy(tag, lastSupport, lastTag)
    }
  }

  const lastOwnerSupport = (lastSupport as Support)?.ownerSupport
  reSupport.ownerSupport = (ownerSupport || lastOwnerSupport) as Support

  return reSupport
}

function checkTagSoftDestroy(
  tag: StringTag | DomTag,
  lastSupport: AnySupport,
  lastTag?: StringTag | DomTag,
) {
  if(tag.tagJsType===ValueTypes.dom) {
    const lastDom = (lastTag as DomTag)?.dom
    const newDom = (tag as DomTag).dom
    if(!deepEqual(lastDom, newDom)) {
      softDestroySupport(lastSupport)
      delete lastSupport.subject.global.deleted
    }
    
    return
  }
  
  // TODO: This is classic runtime code, need to test it
  if(lastTag) {
    const lastStrings = (lastTag as StringTag).strings
    if(lastStrings) {
      const oldLength = lastStrings?.length
      const newLength = (tag as StringTag).strings.length
      if(oldLength !== newLength) {
        softDestroySupport(lastSupport)
        delete lastSupport.subject.global.deleted
      }
    }
  }
}