import { Subscription } from '../subject/subject.utils.js'
import { Support } from './Support.class.js'

export type DestroyOptions = {
  stagger: number
  byParent?: boolean // who's destroying me? if byParent, ignore possible animations
}

export function getChildTagsToDestroy(
  childTags: Support[],
  allTags: Support[] = [],
  subs: Subscription<any>[] = []
): {tags:Support[], subs: Subscription<any>[]} {
  for (const cTag of childTags) {
    allTags.push(cTag)
    
    const global = cTag.subject.global
    const iSubs = global.subscriptions
    if(iSubs) {
      subs.push(...iSubs)
      global.subscriptions = []
    }

    const subTags = cTag.subject.global.childTags
    getChildTagsToDestroy(subTags, allTags, subs)
  }

  childTags = []

  return {tags:allTags, subs}
}
