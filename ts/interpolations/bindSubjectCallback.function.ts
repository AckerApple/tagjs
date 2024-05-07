/** File largely responsible for reacting to element events, such as onclick */

import { Tag } from "../Tag.class"
import { TagSupport } from "../TagSupport.class"
import { renderTagSupport } from "../renderTagSupport.function"

export type Callback = (...args: any[]) => any & {
  isChildOverride?: true // if this is set, then a parent tag passed children to a tag/component
}

export function bindSubjectCallback(
  value: Callback,
  tagSupport: TagSupport,
) {
  // Is this children? No override needed
  if((value as any).isChildOverride) {
    return value
  }

  const subjectFunction = (
    element: Element, args: any[]
  ) => runTagCallback(value, tagSupport, element, args)

  // link back to original. Mostly used for <div oninit ondestroy> animations
  subjectFunction.tagFunction = value

  return subjectFunction
}

export function runTagCallback(
  value: Callback,
  tagSupport: TagSupport,
  bindTo: unknown,
  args: any[]
) {
  const renderCount = tagSupport.global.renderCount
  const method = value.bind(bindTo)
  const callbackResult = method(...args)
  const sameRenderCount = renderCount === tagSupport.global.renderCount
  
  // already rendered OR tag was deleted before event processing
  if(!sameRenderCount || tagSupport.global.deleted) {
    if(callbackResult instanceof Promise) {
      return callbackResult.then(() => {
        return 'promise-no-data-ever' // tag was deleted during event processing
      })
    }

    return 'no-data-ever' // already rendered
  }

  const newest = renderTagSupport(
    tagSupport.global.newest as TagSupport,
    true, // renderUp - callback may have changed props so also check to render up
  )

  tagSupport.global.newest = newest

  if(callbackResult instanceof Promise) {
    return callbackResult.then(() => {
      if(tagSupport.global.deleted) {
        return 'promise-no-data-ever' // tag was deleted during event processing
      }

      const newest = renderTagSupport(
        tagSupport.global.newest as TagSupport,
        true,
      )

      tagSupport.global.newest = newest

      return 'promise-no-data-ever'
    })
  }

  // Caller always expects a Promise
  return 'no-data-ever'
}
