import { interpolateAttributes } from "./interpolateAttributes.js"
import { interpolateToTemplates } from "./interpolations.js"
import { interpolateContentTemplates } from "./interpolateContentTemplates.js"
import { Tag, escapeSearch, variablePrefix } from "./Tag.class.js"

/**
 * 
 * @param {*} element 
 * @param {*} context 
 * @param {Tag} ownerTag 
 */
export function interpolateElement(
  element,
  context, // variables used to evaluate
  ownerTag,
) {
  const result = interpolateElementChild(element, context)

  if(result.keys.length) {
    interpolateContentTemplates(element, context, ownerTag)
  }

  interpolateAttributes(element, context, ownerTag)

  function processChildren(children) {
    new Array(...children).forEach(child => {
      interpolateAttributes(child, context, ownerTag)

      if(child.children) {
        processChildren(child.children)
      }
    })
  }

  processChildren(element.children)
}

/** Convert interpolations into template tags */
export function interpolateElementChild(
  child, context,
) {
  const result = interpolateToTemplates(child.innerHTML, context)
  result.string = result.string.replace(escapeSearch, variablePrefix)
  child.innerHTML = result.string
  return result
}
