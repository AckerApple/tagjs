// import { redrawTag } from "./redrawTag.function"
import { tagElement } from "./tagElement"

export * from "./ElementTargetEvent.interface"

export * from "./tag"
export * from "./html"
export * from "./errors"
export * from "./subject/index"
export * from "./isInstance"
export * from "./state/index"
export * from "./TagSupport.class"
// export * from "./redrawTag.function"
export * from "./interpolateElement"

// TODO: export *
export { tagElement } from "./tagElement"
export { Tag } from "./Tag.class"
export { runBeforeRender } from "./tagRunner"

export const hmr = {
  tagElement,
  // redrawTag
}
