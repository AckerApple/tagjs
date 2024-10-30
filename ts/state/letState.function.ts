import { setUseMemory } from './setUse.function.js'
import { GetSet } from './state.utils.js'
import { StateMemory } from './StateMemory.type.js'

/** Used for variables that need to remain the same variable during render passes. If defaultValue is a function it is called only once, its return value is first state, and let value can changed */
export function letState <T>(
  defaultValue: T | (() => T),
): ((getSet: GetSet<T>) => T) {
  const config: StateMemory = setUseMemory.stateConfig
  return config.handlers.letHandler(defaultValue)
}
