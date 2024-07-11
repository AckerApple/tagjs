import { AnySupport, BaseSupport, Support } from './tag/Support.class.js'
import { isStaticTag } from './isInstance.js'
import { isInlineHtml, renderInlineHtml, renderSupport } from './tag/render/renderSupport.function.js'
import { setUse } from './state/index.js'
import { getSupportInCycle } from './tag/getSupportInCycle.function.js'
import { Props } from './Props.js'
import { runBlocked } from './interpolations/attributes/bindSubjectCallback.function.js'
import { Tag } from './tag/Tag.class.js'
import { renderExistingTag } from './tag/render/renderExistingTag.function.js'

export function castProps(
  props: Props,
  newSupport: BaseSupport | Support,
  depth: number,
) {
  return props.map(prop => alterProp(
    prop,
    (newSupport as Support).ownerSupport,
    newSupport,
    depth,
  ))
}

/* Used to rewrite props that are functions. When they are called it should cause parent rendering */
export function alterProp(
  prop: unknown,
  ownerSupport: BaseSupport | Support,
  newSupport: BaseSupport | Support,
  depth: number,
) {
  if(isStaticTag(prop) || !prop) {
    return prop
  }

  if(!ownerSupport) {
    return prop // no one above me
  }

  return checkProp(prop, ownerSupport, newSupport, depth)
}

export function checkProp(
  value: any,
  ownerSupport: BaseSupport | Support,
  newSupport: BaseSupport | Support,
  depth: number,
) {
  if(!value) {
    return value
  }

  if(value.tagJsType) {
    return value
  }

  if(value instanceof Function) {
    return getPropWrap(value, ownerSupport)
  }

  // if(seen.includes(value)) {
  if(depth === 15) {
    return value
  }
  // seen.push(value)
  const skip = isSkipPropValue(value)
  if( skip ) {
    return value // no children to crawl through
  }

  if(value instanceof Array) {
    for (let index = value.length - 1; index >= 0; --index) {
      const subValue = value[index]
  
      value[index] = checkProp(
        subValue, ownerSupport, newSupport, depth + 1,
      )

      if(subValue instanceof Function) {
        if(subValue.toCall) {
          continue
        }

        afterCheckProp(depth + 1, index, subValue, value, newSupport)
      }
    }

    return value
  }

  const keys = Object.keys(value)
  for(const name of keys){
    const subValue = value[name]
    const result = checkProp(
      subValue, ownerSupport, newSupport, depth + 1,
    )

    if(value[name] === result) {
      continue
    }
    
    const getset = Object.getOwnPropertyDescriptor(value, name)
    const hasSetter = getset?.get || getset?.set
    if(hasSetter) {
      continue
    }

    value[name] = result
    if(result instanceof Function) {
      if(subValue.toCall) {
        continue
      }
  
      afterCheckProp(depth + 1, name, subValue, value, newSupport)
    }
  }
  
  return value
}

function afterCheckProp(
  depth: number,
  index: string | number,
  originalValue: any,
  newProp: any,
  newSupport: BaseSupport | Support
) {
  // restore object to have original function on destroy
  if(depth > 0) {    
    const global = newSupport.subject.global
    newProp[index].subscription = global.destroy$.toCallback(() => {
      newProp[index] = originalValue
    })
  }
}

export function getPropWrap(
  value: any,
  ownerSupport: BaseSupport | Support,
) {
  const toCall = value.toCall

  // already previously converted by a parent?
  if(toCall) {
    return value
  }

  const wrap = (...args: any[]) => wrap.toCall(...args) // what gets called can switch over parent state changes
  // Currently, call self but over parent state changes, I may need to call a newer parent tag owner
  wrap.toCall = (...args: any[]) => {
    return callbackPropOwner(wrap.mem.prop, args, ownerSupport)
  }
  wrap.original = value
  wrap.mem = {
    prop: value,
    // stateArray: stateArray
  }

  // copy data properties that maybe on source function
  Object.assign(wrap, value)

  return wrap
}

/** Function shared by alterProps() and updateExistingTagComponent... TODO: May want to have to functions to reduce cycle checking?  */
export function callbackPropOwner(
  toCall: Function,
  callWith: any,
  ownerSupport: BaseSupport | Support, // <-- WHEN called from alterProp its owner OTHERWISE its previous
) {
  const global = ownerSupport.subject.global
  const newest = global.newest as Support
  const supportInCycle = getSupportInCycle()
  const noCycle = supportInCycle === undefined

  if(supportInCycle) {
    supportInCycle.subject.global.locked = true
  }

  const callbackResult = toCall(...callWith)

  if(supportInCycle) {
    const blocked = supportInCycle?.subject.global.blocked 
    if(supportInCycle && blocked?.length) {
      setUse.memory.tagClosed$.toCallback(() => {  
        delete supportInCycle.subject.global.locked
        const lastResult = runBlocked(supportInCycle) as Support

        renderSupport(
          lastResult,
          false, // renderUp - callback may have changed props so also check to render up
        )
      })

      return callbackResult
    }

    delete supportInCycle.subject.global.locked
  }
  
  const run = () => {
    const global = newest.subject.global

    // are we in a rendering cycle? then its being called by alterProps
    if(noCycle === false) {
      const allMatched = global.locked === true
    
      if(allMatched) {
        return callbackResult // owner did not change
      }
    }

    const oldest = global.oldest
    if(oldest === newest && global.renderCount === 0) {
      return // prop was called immediately
    }
  
    safeRenderSupport(newest, ownerSupport)

    return callbackResult
  }

  if(noCycle) {
    return run()
  }
  
  setUse.memory.tagClosed$.toCallback(run)

  return callbackResult
}

export function isSkipPropValue(value: unknown) {
  return typeof(value)!=='object' || !value || (value as Tag).tagJsType // || isSubjectInstance(value)
}

export function safeRenderSupport(
  newest: AnySupport,
  ownerSupport: AnySupport,
) {
  if(isInlineHtml(newest.templater)) {
    return renderInlineHtml(ownerSupport, newest)
  }

  const oldest = newest.subject.global.oldest  
  newest.subject.global.locked = true

  renderExistingTag(
    oldest,
    newest,
    ownerSupport as Support, // useSupport,
    newest.subject,
  )

  delete newest.subject.global.locked
}