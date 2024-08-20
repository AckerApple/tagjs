import { AnySupport, BaseSupport, Support } from '../Support.class.js'
import { Context } from '../Context.types.js'
import { SupportTagGlobal, TagGlobal } from '../TemplaterResult.class.js'
import { getChildTagsToSoftDestroy } from '../destroy.support.js'
import { smartRemoveKids } from '../smartRemoveKids.function.js'
import { getNewGlobal } from '../update/getNewGlobal.function.js'

/** used when a tag swaps content returned */
export function softDestroySupport(
  lastSupport: BaseSupport | Support,
) {
  const global = lastSupport.subject.global as SupportTagGlobal
  const {subs, tags} = getChildTagsToSoftDestroy(global.context as Context)

  softDestroyOne(lastSupport)
  for (const child of tags) {
    softDestroyOne(child)
  }
  
  const mySubs = global.subscriptions
  if(mySubs) {
    subs.forEach(sub => sub.unsubscribe())
  }

  lastSupport.subject.global = getNewGlobal()
}

function softDestroyOne(
  child: AnySupport
) {
  const global = child.subject.global as TagGlobal

  if(global.deleted === true) {
    return
  }

  global.deleted = true // the children are truly destroyed but the main support will be swapped
  smartRemoveKids(child, [], 0)
}