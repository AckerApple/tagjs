import { State } from "./state.utils"

export function syncStates(
  stateFrom: State,
  stateTo: State,
) {
  stateFrom.forEach((state, index) => {
    const fromValue = state.get()
    const callback = stateTo[index].callback

    if(callback) {
      callback( fromValue ) // set the value
    }
    
    stateTo[index].lastValue = fromValue // record the value
  })
}