import { firstStatesHandler } from './states.utils.js'
import { State } from './state.types.js'
import { runFirstState } from './stateHandlers.js'
import { UseMemory } from './setUse.function.js'

export const setUseMemory = {
  stateConfig: {
    stateArray: [] as State, // state memory on the first render
    version: Date.now(),
    handlers: {
      handler: runFirstState,
      statesHandler: firstStatesHandler,
    }
  },
} as UseMemory
