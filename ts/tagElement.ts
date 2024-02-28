import { TagSupport } from "./TagSupport.class.js"
import { runAfterRender, runBeforeRedraw, runBeforeRender } from "./tagRunner.js"
import { TagComponent, TemplaterResult } from "./templater.utils.js"
import { Tag } from "./Tag.class.js"
import { providersChangeCheck } from "./provider.utils.js"

const appElements: {tag: Tag, element: Element}[] = []

export function tagElement(
  app: TagComponent, // (...args: unknown[]) => TemplaterResult,
  element: HTMLElement | Element,
  props: unknown,
): {tag: Tag, tags: TagComponent[]} {
  const appElmIndex = appElements.findIndex(appElm => appElm.element === element)
  if(appElmIndex >= 0) {
    appElements[appElmIndex].tag.destroy()
    appElements.splice(appElmIndex, 1)
    // an element already had an app on it
    console.warn('Found and destroyed app element already rendered to element', {element})
  }

  // Create the app which returns [props, runOneTimeFunction]
  const wrapper = app(props) as unknown as TemplaterResult

  // have a function setup and call the tagWrapper with (props, {update, async, on})
  const result = applyTagUpdater(wrapper)
  const {tag, tagSupport} = result
  // wrapper.tagSupport = tagSupport

  tag.appElement = element
  tag.tagSupport.oldest = tag

  addAppTagRender(tag.tagSupport, tag)
    
  const templateElm = document.createElement('template')
  templateElm.setAttribute('tag-detail','app-template-placeholder')
  element.appendChild(templateElm)
  
  tag.buildBeforeElement(templateElm)

  ;(element as any).setUse = (app as any).original.setUse

  appElements.push({element, tag})

  return {tag, tags: (app as any).original.tags}
}

export function applyTagUpdater(
  wrapper: TemplaterResult,
) {
  const tagSupport = wrapper.tagSupport
  runBeforeRender(tagSupport, undefined as any as Tag)

  // Call the apps function for our tag templater
  const tag = wrapper.wrapper()
  runAfterRender(tagSupport, tag)
  
  return { tag, tagSupport }
}

/** Overwrites arguments.tagSupport.mutatingRender */
export function addAppTagRender(
  tagSupport: TagSupport,
  tag: Tag,
) {
  let lastTag: Tag = tag
  tagSupport.mutatingRender = () => {
    const preRenderCount = tagSupport.memory.renderCount
    providersChangeCheck(tag)

    // When the providers were checked, a render to myself occurred and I do not need to re-render again
    if(preRenderCount !== tagSupport.memory.renderCount) {
      return lastTag
    }
    runBeforeRedraw(tag.tagSupport, tag)
    
    const templater = tagSupport.templater as TemplaterResult // wrapper
    const fromTag = lastTag = templater.wrapper()

    fromTag.tagSupport.memory = tagSupport.memory
    tagSupport.propsConfig = {...fromTag.tagSupport.propsConfig}
    tag.tagSupport.newest = fromTag
    runAfterRender(tag.tagSupport, tag)

    ;(tagSupport.oldest as Tag).updateByTag(fromTag)
    tagSupport.newest = fromTag

    return lastTag
  }
}