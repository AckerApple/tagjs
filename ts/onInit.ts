import { TagSupport } from "./TagSupport.class.js"
import { setUse } from "./setUse.function.js"

export type OnInitCallback = () => unknown

function setCurrentTagSupport(support: TagSupport) {
  setUse.memory.initCurrentSupport = support
}

export function onInit(
  callback: OnInitCallback
) {
  if(!setUse.memory.initCurrentSupport.memory.init) {
    setUse.memory.initCurrentSupport.memory.init = callback
    callback() // fire init
  }
}

setUse({
  beforeRender: tagSupport => setCurrentTagSupport(tagSupport),
  beforeRedraw: tagSupport => setCurrentTagSupport(tagSupport),
})
