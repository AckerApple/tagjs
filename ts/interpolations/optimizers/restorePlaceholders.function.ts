import { variableSuffix, variablePrefix } from "../../tag/Tag.class.js";
import { ObjectChildren } from "./exchangeParsedForValues.function.js";
import { OneUnparsedHtml } from "./htmlInterpolationToDomMeta.function.js";
import { ObjectText } from "./ObjectNode.types.js";
export const safeVar = '__safeTagVar'

export function restorePlaceholders(elements: ObjectChildren) {
  elements.forEach(traverseAndRestore);
}

const safeReplacer = /__safeTagVar(\d+)/g

function traverseAndRestore(element: OneUnparsedHtml) {
  if ('at' in element) {
    element.at = element.at ? element.at.map(attr => {
      if(attr.length === 1) {
        return attr
      }
      
      const [, value] = attr
      if (typeof value === 'string' && value.startsWith(safeVar)) {
        const index = parseInt(value.replace(safeVar, ''), 10)
        attr[1] = variablePrefix + index + variableSuffix
      }
      return attr
    }) : []
  }

  if ('ch' in element) {
    const children = element.ch as ObjectChildren
    for (let i = 0; i < children.length; i++) {
      const child = children[i] as ObjectText
      if (child.nn === 'text') {
        if(typeof child.tc !== 'string') {
          return
        }

        child.tc = child.tc.replace(safeReplacer, (_match, index) =>
          variablePrefix + index + variableSuffix
        )
      }
      traverseAndRestore(child)
    }

    // Remove empty children array
    if (children.length === 0) {
      delete element.ch
    }
  }
}
