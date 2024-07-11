export * from './tag/index.js'
export * from './errors.js'
export * from './subject.types.js'
export * from './isInstance.js'
export * from './state/index.js'
export * from './subject/index.js'
export * from './tag/Support.class.js'
export * from './interpolations/attributes/howToSetInputValue.function.js'
export * from './interpolations/attributes/ElementTargetEvent.interface.js'
export * from'./interpolations/InsertBefore.type.js'

export { tagElement } from './tag/tagElement.js'
export { Tag, StringTag, DomTag, variablePrefix } from './tag/Tag.class.js'
export { runBeforeRender } from './tag/tagRunner.js'
export { renderSupport } from './tag/render/renderSupport.function.js'
export { renderWithSupport } from './tag/render/renderWithSupport.function.js'

import { renderTagOnly } from './tag/render/renderTagOnly.function.js'
import { renderSupport } from './tag/render/renderSupport.function.js'
import { renderWithSupport } from './tag/render/renderWithSupport.function.js'
import { tagElement } from './tag/tagElement.js'
export { key } from './tag/key.js'
export const hmr = {
  tagElement, renderWithSupport, renderSupport,
  renderTagOnly,
}

export { type Wrapper } from './tag/TemplaterResult.class.js'