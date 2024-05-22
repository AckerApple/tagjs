import { BaseTagSupport, TagSupport } from "../tag/TagSupport.class"
import { setUse } from "./setUse.function"

function setCurrentTagSupport(support: BaseTagSupport | TagSupport) {
  setUse.memory.childrenCurrentSupport = support as TagSupport
}

export function children() {
  const tagSupport = setUse.memory.childrenCurrentSupport as TagSupport
  const children = tagSupport.templater.children
  return children
}

setUse({
  beforeRender: tagSupport => setCurrentTagSupport(tagSupport),
  beforeRedraw: tagSupport => setCurrentTagSupport(tagSupport),
})