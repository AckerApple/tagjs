import { html, Subject } from "taggedjs"
import { runTesting } from "./runTesting.function"

export const storage = getScopedStorage()

function getScopedStorage(): {
  autoTest: boolean, views: ViewTypes[]
} {
  const string = localStorage.taggedjs || JSON.stringify({autoTest: true, views: []})
  return JSON.parse(string)
}

export function saveScopedStorage() {
  localStorage.taggedjs = JSON.stringify(storage)
}

export enum ViewTypes {
  Todo = 'todo',
  FunInPropsTag = 'funInPropsTag',
  OneRender = 'oneRender',
  WatchTesting = 'watchTesting',
  Mirroring = 'mirroring',
  Content = 'content',
  Arrays = 'arrays',
  Counters = 'counters',
  TableDebug = 'tableDebug',
  Props = 'props',
  Child = 'child',
  TagSwitchDebug = 'tagSwitchDebug',
  ProviderDebug = 'providerDebug'
}
const viewTypes = Object.values(ViewTypes)

export const sections = (x = 'sections') => {
  return html`
    <div>
      <h3>Sections</h3>
      <!-- checkbox menu -->
      <div style="display:flex;gap:1em;flex-wrap:wrap;margin:1em;">
        ${viewTypes.map(type => html`
          <div>
            <input type="checkbox"
              id=${'view-type-' + type} name=${'view-type-' + type}
              ${storage.views.includes(type) && 'checked'}
              onclick=${() => toggleViewType(type)}
            />
            <label for=${'view-type-' + type}>&nbsp;${type}</label>
          </div>
        `.key(type))}
        <div>
          <label onclick=${() => viewTypes.forEach(viewType => {
            // viewChanged.next({viewType, checkTesting: false})
            activate(viewType, false)
            saveScopedStorage()
          })}>&nbsp;all</label>
        </div>
        <div>
          <label onclick=${() => viewTypes.forEach(viewType => {
            deactivate(viewType)
            saveScopedStorage()
          })}>&nbsp;none</label>
        </div>
      </div>
    </div>
  `
}

sections.tempNote = 'sections'

function toggleViewType(
  type: ViewTypes,
  checkTesting = true,
) {
  if(storage.views.includes(type)) {
    deactivate(type)
  } else {
    viewChanged.next({type, checkTesting})
  }

  saveScopedStorage()
}

export const viewChanged = new Subject<{type: ViewTypes, checkTesting: boolean}>()

function deactivate(
  type: ViewTypes,
) {
  (storage.views = storage.views.filter(x => x !== type))      
}

export function activate(
  type: ViewTypes,
  checkTesting = true,
) {
  storage.views.push(type)

  if(checkTesting && storage.autoTest) {
    runTesting()
  }
}
