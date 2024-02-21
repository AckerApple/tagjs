import { Context, Tag } from "./Tag.class.js"
import { inputAttribute } from "./inputAttribute.js"
import { isSubjectInstance } from "./isInstance.js"

export function interpolateAttributes(
  child: Element,
  scope: Context,
  ownerTag: Tag,
) {
  const attrNames = child.getAttributeNames()

  const isTextArea = child.nodeName === 'TEXTAREA'
  if(isTextArea && !attrNames.includes('value')) {
    const value = child.getAttribute('textVarValue') // (child as any).value
    processAttribute('textVarValue', value, child, scope, ownerTag, (_name, value) => (child as any).value = value)
  }

  const howToSet = (name: string, value: string) => {
    /*
    if(name === 'class'){
      value.split(' ').forEach(className => child.classList.add(className))
      return
    }
    */

    child.setAttribute(name, value)
  }

  attrNames.forEach(attrName => {
    const value = child.getAttribute(attrName)
    processAttribute(attrName, value, child, scope, ownerTag, howToSet)
  })
}

/** Looking for (class | style) followed by a period */
export function isSpecialAttr(
  attrName: string | String
) {
  return attrName.search(/^(class|style)(\.)/) >= 0
}

function processAttribute(
  attrName: string,
  value: string | null,
  child: Element,
  scope: Context,
  ownerTag: Tag,
  howToSet: (name: string, value: string) => any
) {
  if ( isTagVar(value) ) {
    return processScopedNameValueAttr(
      attrName,
      value as string,
      child,
      scope,
      ownerTag,
      howToSet,
    )
  }

  if( isTagVar(attrName) ) {
    const contextValueSubject = getContextValueByVarString(scope, attrName)
    let lastValue: any;

    // the above callback gets called immediately since its a ValueSubject()
    const sub = contextValueSubject.subscribe((value: any) => {
      processNameOnlyAttr(
        value,
        lastValue,
        child,
        ownerTag,
        howToSet,
      )

      lastValue = value
    })
    ownerTag.cloneSubs.push(sub) // this is where unsubscribe is picked up
    child.removeAttribute(attrName)

    return
  }

  // Non dynamic
  const isSpecial = isSpecialAttr(attrName)
  if (isSpecial) {
    return inputAttribute(attrName, value, child)
  }
}

const startRegX = /^\s*{__tagvar/
const endRegX = /}\s*$/
function isTagVar(value: string | null) {
  return value && value.search(startRegX) >= 0 && value.search(endRegX) >= 0
}

function processNameOnlyAttr(
  attrValue: string | Record<string, any>,
  lastValue: string | Record<string, any> | undefined,
  child: Element,
  ownerTag: Tag,
  howToSet: HowToSet,
) {
  if(lastValue && lastValue != attrValue) {
    if(typeof(lastValue) === 'string') {
      child.removeAttribute(lastValue as string)
    } else if(lastValue instanceof Object) {
      Object.entries(lastValue).forEach(([name]) =>
        child.removeAttribute(name)
      )
    }
  }

  if(typeof(attrValue) === 'string') {
    if(!attrValue.length) {
      return
    }

    processNameValueAttr(
      attrValue as string,
      '',
      child,
      ownerTag,
      howToSet,
    )

    return
  }

  if(attrValue instanceof Object) {
    Object.entries(attrValue).forEach(([name, value]) =>
      processNameValueAttr(
        name,
        value,
        child,
        ownerTag,
        howToSet,
      )
    )

    return
  }
}

function getContextValueByVarString(
  scope: Context,
  value: string,
) {
  const code = value.replace('{','').split('').reverse().join('').replace('}','').split('').reverse().join('')
  return scope[code]
}

type HowToSet = (name: string, value: string) => any

function processNameValueAttr(
  attrName: string,
  result: any,
  child: Element,
  ownerTag: Tag,
  howToSet: HowToSet
) {
  const isSpecial = isSpecialAttr(attrName)

  // attach as callback?
  if(result instanceof Function) {
    const action = function(...args: any[]) {
      return result(child, args)
    }
    
    ;(child as any)[attrName].action = action
    // child.addEventListener(attrName, action)
  }

  // Most every variable comes in here since everything is made a ValueSubject
  if(isSubjectInstance(result)) {
    child.removeAttribute(attrName)
    const callback = (newAttrValue: any) =>
      processSubjectValue(
        newAttrValue,
        child,
        attrName,
        isSpecial,
        howToSet,
      )

    // 🗞️ Subscribe. Above callback called immediately since its a ValueSubject()
    const sub = result.subscribe(callback as any)
    
    // Record subscription for later unsubscribe when element destroyed
    ownerTag.cloneSubs.push(sub)

    return
  }

  howToSet(attrName, result)
  // child.setAttribute(attrName, result.value)
  return
}

function processSubjectValue(
  newAttrValue: any,
  child: Element,
  attrName: string,
  isSpecial: boolean,
  howToSet: HowToSet,
) {
  if(newAttrValue instanceof Function) {
    ;(child as any)[attrName] = function(...args: any[]) {
      const result = newAttrValue(child, args)
      return result
    }

    // access to original function
    ;(child as any)[attrName].tagFunction = newAttrValue

    return
  }

  if (isSpecial) {
    inputAttribute(attrName, newAttrValue, child)
    return
  }

  if(newAttrValue) {
    howToSet(attrName, newAttrValue)
    // child.setAttribute(attrName, newAttrValue)
    return
  }

  const isDeadValue = newAttrValue === undefined || newAttrValue === false || newAttrValue === null
  if(isDeadValue) {
    child.removeAttribute(attrName)
    return
  }

  // value is 0
  howToSet(attrName, newAttrValue)
  // child.setAttribute(attrName, newAttrValue)
}

function processScopedNameValueAttr(
  attrName: string,
  value: string, // {__tagVarN}
  child: Element,
  scope: Context,
  ownerTag: Tag,
  howToSet: (name: string, value: string) => any
) {
  // get the code inside the brackets like "variable0" or "{variable0}"
  const result = getContextValueByVarString(scope, value)
  return processNameValueAttr(attrName, result, child, ownerTag, howToSet)
}
