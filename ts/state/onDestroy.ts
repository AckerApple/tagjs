import { Support } from "../tag/Support.class.js"
import { SupportTagGlobal } from "../tag/TemplaterResult.class.js"
import { getSupportInCycle } from "../tag/getSupportInCycle.function.js"
import { state } from "./state.function.js"

export type OnDestroyCallback = () => unknown

export function onDestroy(
  callback: OnDestroyCallback
) {
  state(function stateDestroy() {
    const support = getSupportInCycle() as Support
    const global = support.subject.global as SupportTagGlobal
    global.destroy$.toCallback(callback)
  })
}