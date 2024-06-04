import { TagSubject } from '../../subject.types.js'
import { hasTagSupportChanged } from'../hasTagSupportChanged.function.js'
import { BaseTagSupport, TagSupport } from '../TagSupport.class.js'
import { processSubjectComponent } from'./processSubjectComponent.function.js'
import { destroyTagMemory } from'../destroyTag.function.js'
import { renderTagSupport } from'../render/renderTagSupport.function.js'
import { InsertBefore } from'../../interpolations/InsertBefore.type.js'
import { castProps } from'../../alterProp.function.js'
import { isLikeTags } from'../isLikeTags.function.js'
import { Props } from '../../Props.js'
import { hasPropChanges } from '../hasPropChanges.function.js'

export function updateExistingTagComponent(
  ownerSupport: TagSupport,
  tagSupport: TagSupport, // lastest
  subject: TagSubject,
  insertBefore: InsertBefore,
): TagSupport | BaseTagSupport {
  let lastSupport = subject.tagSupport?.global.newest as BaseTagSupport | TagSupport
  let oldestTag: TagSupport | BaseTagSupport | undefined = lastSupport.global.oldest
  
  const oldWrapper = lastSupport.templater.wrapper
  const newWrapper = tagSupport.templater.wrapper
  let isSameTag = false

  if(oldWrapper && newWrapper) {
    const oldFunction = oldWrapper.parentWrap.original
    const newFunction = newWrapper.parentWrap.original

    // string compare both functions
    isSameTag = oldFunction === newFunction
  }

  const templater = tagSupport.templater

  if(!isSameTag) {
    const oldestSupport = lastSupport.global.oldest as TagSupport
    destroyTagMemory(oldestSupport)
  
    return processSubjectComponent(
      templater,
      subject,
      insertBefore,
      ownerSupport,
      {
        counts: {added: 0, removed: 0},
      }
    )
  } else {
    const hasChanged = hasTagSupportChanged(
      lastSupport as unknown as BaseTagSupport,
      tagSupport as unknown as BaseTagSupport,
      templater
    )
    // everyhing has matched, no display needs updating.
    if(!hasChanged) {
      const newProps = templater.props

      // update function refs to use latest references
      const castedProps = syncFunctionProps(
        tagSupport,
        lastSupport,
        ownerSupport,
        newProps,
      )

      // When new tagSupport actually makes call to real function, use these pre casted props
      tagSupport.propsConfig.castProps = castedProps
      
      // update support to think it has different cloned props
      lastSupport.propsConfig.latestCloned = tagSupport.propsConfig.latestCloned
      lastSupport.propsConfig.lastClonedKidValues = tagSupport.propsConfig.lastClonedKidValues

      return lastSupport // its the same tag component
    }
  }

  const previous = lastSupport.global.newest as TagSupport
  const newSupport = renderTagSupport(
    tagSupport,
    false,
  )

  lastSupport = subject.tagSupport as TagSupport

  const newOldest = newSupport.global.oldest
  const hasOldest = newOldest ? true : false
  if(!hasOldest) {
    return buildNewTag(
      newSupport,
      insertBefore,
      lastSupport,
      subject
    )
  }
  
  if(newOldest && templater.children._value.length) {
    const oldKidsSub = newOldest.templater.children
    oldKidsSub.next(templater.children._value)
  }

  // detect if both the function is the same and the return is the same
  const isLikeTag = isSameTag && isLikeTags(previous, newSupport)

  if(isLikeTag) {
    subject.tagSupport = newSupport
    oldestTag.updateBy(newSupport)
    return newSupport
  } else {
    // Although function looked the same it returned a different html result
    if(isSameTag && lastSupport) {
      destroyTagMemory(lastSupport)
      newSupport.global.context = {} // do not share previous outputs
    }
    oldestTag = undefined
  }
  
  if(!oldestTag) {
    lastSupport = newSupport
    buildNewTag(
      newSupport,
      lastSupport.global.insertBefore as Element,
      lastSupport,
      subject,
    )
  }

  lastSupport.global.newest = newSupport

  return newSupport
}

function buildNewTag(
  newSupport: BaseTagSupport | TagSupport,
  oldInsertBefore: Element | Text | ChildNode,
  oldTagSupport: BaseTagSupport | TagSupport,
  subject: TagSubject,
) {
  newSupport.buildBeforeElement(oldInsertBefore, {
    counts: {added: 0, removed: 0},
  })

  newSupport.global.oldest = newSupport
  newSupport.global.newest = newSupport
  oldTagSupport.global.oldest = newSupport
  oldTagSupport.global.newest = newSupport
  subject.tagSupport = newSupport

  return newSupport
}

function syncFunctionProps(
  newSupport: BaseTagSupport | TagSupport,
  lastSupport: BaseTagSupport | TagSupport,
  ownerSupport: BaseTagSupport | TagSupport,
  newPropsArray: any[], // templater.props
): Props {
  const newest = lastSupport.global.newest

  if(!newest) {
    // const state = ownerSupport.global.oldest.memory.state
    const state = ownerSupport.memory.state
    newPropsArray.length = 0
    const castedProps = castProps(newPropsArray, newSupport, state)
    newPropsArray.push( ...castedProps )
    newSupport.propsConfig.castProps = castedProps
    return newPropsArray
  }

  lastSupport = newest || lastSupport as TagSupport

  const priorPropConfig = lastSupport.propsConfig
  const priorPropsArray = priorPropConfig.castProps as Props

  const newArray = []
  for (let index = newPropsArray.length - 1; index >= 0; --index) {
    const prop = newPropsArray[index]
    const priorProp = priorPropsArray[index]

    const newValue = syncPriorPropFunction(
      priorProp, prop, newSupport, ownerSupport,
    )

    newArray.push(newValue)
  }

  newSupport.propsConfig.castProps = newArray

  return newArray
}

function syncPriorPropFunction(
  priorProp: any,
  prop: any,
  newSupport: BaseTagSupport | TagSupport,
  ownerSupport: BaseTagSupport | TagSupport,
  seen: any[] = [],
) {
  if(priorProp instanceof Function) {
    // the prop i am receiving, is already being monitored/controlled by another parent
    if(prop.toCall) {
      priorProp.toCall = prop.toCall
      return prop
    }
    
    const ownerGlobal = ownerSupport.global
    const oldOwnerState = (ownerGlobal.newest as TagSupport).memory.state

    priorProp.prop = prop
    priorProp.stateArray = oldOwnerState

    return priorProp
  }

  // prevent infinite recursion
  if(seen.includes(prop)) {
    return prop
  }
  seen.push(prop)

  if(typeof(prop)!=='object' || !prop) {
    return prop // no children to crawl through
  }

  if(prop instanceof Array) {
    for (let index = prop.length - 1; index >= 0; --index) {
      const x = prop[index]
      prop[index] = syncPriorPropFunction(
        priorProp[index], x, newSupport, ownerSupport, seen,
      )
    }

    return prop
  }

  if(priorProp === undefined) {
    return prop
  }

  for(const name in prop){
    const subValue = (prop as any)[name]
    const result = syncPriorPropFunction(
      priorProp[name], subValue, newSupport, ownerSupport, seen,
    )
    
    const hasSetter = Object.getOwnPropertyDescriptor(prop, name)?.set
    if(hasSetter) {
      continue
    }

    prop[name] = result
  }
  
  return prop

}
