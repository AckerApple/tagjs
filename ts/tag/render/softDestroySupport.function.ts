import { AnySupport, BaseSupport, Support, destroySubs, resetSupport } from '../Support.class.js'
import { getChildTagsToDestroy } from '../destroy.support.js'

/** used when a tag swaps content returned */
export function softDestroySupport(
  lastSupport: BaseSupport | Support,
) {
  const global = lastSupport.subject.global
  const {subs, tags} = getChildTagsToDestroy(global.childTags)
  tags.forEach(child => softDestroyOne(child))
  softDestroyOne(lastSupport)
  const mySubs = lastSupport.subject.global.subscriptions
  subs.push(...mySubs)
  mySubs.length = 0
  destroySubs(subs)
}

function softDestroyOne(
  child: AnySupport
) {
  const subGlobal = child.subject.global
  delete subGlobal.newest
  subGlobal.deleted = true // the children are truly destroyed but the main support will be swapped
  child.smartRemoveKids()
  subGlobal.childTags.length = 0 // tag maybe used for something else
  resetSupport(child, 0)
}
