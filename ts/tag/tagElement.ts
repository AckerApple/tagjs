import { BaseSupport, getBaseSupport, Support } from './Support.class.js'
import { runAfterRender } from'./tagRunner.js'
import { Events, SupportTagGlobal, TemplaterResult, Wrapper } from './TemplaterResult.class.js'
import { Original, TagComponent, TagMaker} from './tag.utils.js'
import { ValueTypes } from './ValueTypes.enum.js'
import { DomObjectElement, DomObjectText } from '../interpolations/optimizers/ObjectNode.types.js'
import { paint, painting } from './paint.function.js'
import { ContextItem } from './Context.types.js'
import { getNewGlobal } from './update/getNewGlobal.function.js'
import { subscribeToTemplate } from '../interpolations/subscribeToTemplate.function.js'
import { buildBeforeElement } from './buildBeforeElement.function.js'
import { destroySupport } from './destroySupport.function.js'
import { executeWrap } from './executeWrap.function.js'
import { initState } from '../state/state.utils.js'
import { checkTagValueChange } from './index.js'

const appElements: {
  support: BaseSupport // Support
  element: Element
}[] = []

/**
 * 
 * @param app taggedjs tag
 * @param element HTMLElement
 * @param props object
 * @returns 
 */
export function tagElement(
  app: TagMaker,
  element: HTMLElement | Element,
  props?: unknown,
): {
  support: BaseSupport
  tags: TagComponent[]
} {
  const appElmIndex = appElements.findIndex(appElm => appElm.element === element)
  if(appElmIndex >= 0) {
    destroySupport(appElements[appElmIndex].support, 0)
    appElements.splice(appElmIndex, 1)
    // an element already had an app on it
    console.warn('Found and destroyed app element already rendered to element', {element})
  }

  // Create the app which returns [props, runOneTimeFunction]
  const wrapper = app(props) as unknown as TemplaterResult
  const placeholder = document.createTextNode('')
  const support = runWrapper(wrapper, placeholder, element)
  const subject = support.subject
  const global = subject.global as SupportTagGlobal
  
  global.isApp = true
  
  // enables hmr destroy so it can control entire app
  ;(element as any).destroy = function() {
    const events = global.events as Events
    for (const eventName in events) {
      const callback = events[eventName]
      element.removeEventListener(eventName, callback)
    }
    global.events = {}

    destroySupport(support, 0) // never return anything here

    paint()
  }
  
  let tags: any[] = []

  ++painting.locks

  const result = buildBeforeElement(support, element)

  global.oldest = support
  global.newest = support
  
  let setUse = (wrapper as any).setUse
  
  if(wrapper.tagJsType !== ValueTypes.stateRender) {
    const wrap = app as any as Wrapper
    const parentWrap = wrap.parentWrap
    const original = (wrap as any).original || parentWrap.original as Original
    
    setUse = original.setUse
    tags = (app as any).original.tags
  }

  ;(element as any).setUse = setUse
  appElements.push({element, support})

  const newFragment = document.createDocumentFragment()
  newFragment.appendChild(placeholder)

  for(const domItem of result.dom) {
    putOneDomDown(domItem, newFragment)
  }

  for(const sub of result.subs) {
    subscribeToTemplate(sub)
  }
  --painting.locks

  paint()
  element.appendChild(newFragment)

  ++global.renderCount

  return {
    support,
    tags,
  }
}

export function runWrapper(
  templater: TemplaterResult,
  placeholder: Text,
  appElement: Element,
) {
  const global = getNewGlobal() as SupportTagGlobal
  global.events = {}

  const subject: ContextItem = {
    value: templater,
    global,
    checkValueChange: checkTagValueChange,
    withinOwnerElement: false, // i am the highest owner
  }
    
  const newSupport = getBaseSupport(
    templater,
    subject,
  )

  newSupport.appElement = appElement

  subject.placeholder = placeholder
  global.oldest = global.oldest || newSupport
  global.newest = newSupport as Support
  
  initState(newSupport)

  if(templater.tagJsType === ValueTypes.stateRender) {
    const result = templater.wrapper || {original: templater} as any

    const nowSupport = executeWrap(
      templater,
      result,
      newSupport,
      newSupport,
    )

    runAfterRender(newSupport, nowSupport)

    return nowSupport
  }
  
  // Call the apps function for our tag templater
  const wrapper = templater.wrapper as Wrapper
  const nowSupport = wrapper(
    newSupport,
    subject,
  )

  runAfterRender(newSupport, nowSupport)

  return nowSupport
}

function putOneDomDown(
  dom: DomObjectText | DomObjectElement,
  newFragment: DocumentFragment,
) {
  if(dom.domElement) {
    newFragment.appendChild(dom.domElement)
  }
  if(dom.marker) {
    newFragment.appendChild(dom.marker)
  }
}