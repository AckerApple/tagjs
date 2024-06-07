import { BaseTagSupport, TagSupport } from './TagSupport.class.js'
import { setUse } from'../state/index.js'
import { Subject } from'../subject/index.js'
import { getSupportInCycle } from'./getSupportInCycle.function.js'

// Emits event at the end of a tag being rendered. Use tagClosed$.toPromise() to render a tag after a current tag is done rendering
setUse.memory.tagClosed$ = new Subject<TagSupport>(undefined, subscription => {
  if( !getSupportInCycle() ) {
    subscription.next() // we are not currently processing so process now
  }
})

// Life cycle 1
export function runBeforeRender(
  tagSupport: BaseTagSupport | TagSupport,
  ownerSupport?: TagSupport,
) {
  const tagUse = setUse.tagUse
  const length = tagUse.length
  for (let index=0; index < length; ++index) {
    tagUse[index].beforeRender(tagSupport, ownerSupport)
  }
}

// Life cycle 2
export function runAfterRender(
  tagSupport: BaseTagSupport | TagSupport,
  ownerTagSupport?: TagSupport | BaseTagSupport,
) {
  const tagUse = setUse.tagUse
  const length = tagUse.length
  for (let index=0; index < length; ++index) {
    tagUse[index].afterRender(tagSupport, ownerTagSupport)
  }

  setUse.memory.tagClosed$.next(ownerTagSupport)
}

// Life cycle 3
export function runBeforeRedraw(
  tagSupport: BaseTagSupport | TagSupport,
  ownerTagSupport: TagSupport | BaseTagSupport,
) {
  const tagUse = setUse.tagUse
  const length = tagUse.length
  for (let index=0; index < length; ++index) {
    tagUse[index].beforeRedraw(tagSupport, ownerTagSupport)
  }
}

// Life cycle 4 - end of life
export function runBeforeDestroy(
  tagSupport: TagSupport | BaseTagSupport,
  ownerTagSupport: TagSupport | BaseTagSupport,
) {
  const tagUse = setUse.tagUse
  const length = tagUse.length
  for (let index=0; index < length; ++index) {
    tagUse[index].beforeDestroy(tagSupport as BaseTagSupport, ownerTagSupport as TagSupport)
  }

  tagSupport.global.deleted = true
  tagSupport.hasLiveElements = false

  // remove me from my parents
  if(ownerTagSupport) {
    ownerTagSupport.global.childTags = ownerTagSupport.global.childTags.filter(child => child !== tagSupport.global.oldest as unknown as TagSupport)

    const global = tagSupport.global
    global.providers.forEach(provider => provider.children.forEach((child, index) => {
      if(child.global === global) {
        provider.children.splice(index, 1)
      }
    }))
  }
}
