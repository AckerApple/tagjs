import { expect } from "./expect"

/* all elements in each query must have the same html */
export function expectMatchedHtml(
  ...queries: string[]
) {
  const elements = queries.reduce((all, query) => {
      const elements = document.querySelectorAll(query)
      all.push(...elements)
      return all
    }, [] as Element[]
  )

  expect(elements.length).toBeGreaterThan(0, 'Expected elements to be present in expectMatchedHtml() query but found none')

  const lastElm = elements.pop() as Element
  const lastHtml = lastElm.innerHTML
  elements.every(elm =>
    expect(lastHtml).toBe(elm.innerHTML, () => `expectMatchedHtml unmatched html - queries: ${queries.join(' - ')}`)
  )
}

export function expectHTML(
  query: string,
  innerHTML: string
) {
  const elements = document.querySelectorAll(query)
  elements.forEach(element =>
    expect(element.innerHTML).toBe(innerHTML, () => `Expected element ${query} innerHTML to be -->${innerHTML}<-- but it was -->${element.innerHTML}<--`)
  )
}

export function expectElmCount(
  query: string,
  count: number,
  message?: string
) {
  const elements = document.querySelectorAll(query)
  const found = elements.length

  message = message || `Expected ${count} elements to match query ${query} but found ${found}`

  expect(found).toBe(count, message)

  return elements
}

export function testDuelCounterElements(
  ... sets: [string, string][]
  // [button0, display0]: [string, string], // button, display
  // [button1, display1]: [string, string], // button, display
) {
  const [button0, display0] = sets.shift() as [string, string]
  let query = expectElmCount(display0, 1)
  let buttonQuery = expectElmCount(button0, 1)
  const display0Element = query[0] as HTMLElement
  const ip0 = display0Element.innerText
  testCounterSelectedElements(
    buttonQuery as any as HTMLElement[],
    query as any as HTMLElement[],
    {elementCountExpected: 1},
    button0,
    display0,
  )
  
  let increase = 2
  sets.forEach(([button1, display1]) => {    
    query = expectElmCount(display1, 1)
    buttonQuery = expectElmCount(button1, 1)
    let display1Element = query[0] as HTMLElement
    let ip1Check = display1Element.innerText
    const value = (Number(ip0) + increase).toString()
    expect(ip1Check).toBe(value, () => `Expected second ${display1} increase provider to be increased to ${ip0} but got ${ip1Check}`)
   
    testCounterSelectedElements(
      buttonQuery as any as HTMLElement[],
      query as any as HTMLElement[],
      {elementCountExpected: 1},
      button0,
      display0,
    )
  
    display1Element = query[0] as HTMLElement
    ip1Check = display1Element.innerText
    const secondIncrease = increase + 2
    expect(ip1Check).toBe((Number(ip0) + secondIncrease).toString(), () => `Expected ${display1} innerText to be ${Number(ip0) + secondIncrease} but instead it is ${ip1Check}`)

    increase = increase + 2
  })
}

function testCounterSelectedElements(
  counterButtons: HTMLElement[],
  counterDisplays: HTMLElement[],
  {elementCountExpected} = {
    elementCountExpected: 1
  },
  counterButtonSelect: string,
  counterDisplaySelect: string,
) {
  expect(counterButtons.length).toBe(elementCountExpected, () => `Expected ${counterButtonSelect} to be ${elementCountExpected} elements but is instead ${counterButtons.length}`)
  expect(counterDisplays.length).toBe(elementCountExpected, ()=> `Expected ${counterDisplaySelect} to be ${elementCountExpected} elements but is instead ${counterDisplays.length}`)

  counterButtons.forEach((increaseCounter, index: number) => {
    const counterDisplay = document.querySelectorAll(counterDisplaySelect)[index] as HTMLElement // counterDisplays[index]

    expect(document.body.contains(counterDisplay)).toBe(true, `The selected element ${counterDisplaySelect} is no longer an element on the document body BEFORE clicking ${counterButtonSelect}`)

    let counterValue = Number(counterDisplay?.innerText)
    increaseCounter.click()

    expect(counterDisplay).toBeDefined()
    expect(document.body.contains(counterDisplay)).toBe(true, `The selected element ${counterDisplaySelect} is no longer an element on the document body AFTER clicking ${counterButtonSelect}`)

    let oldCounterValue = counterValue + 1
    counterValue = Number(counterDisplay.innerText)
    expect(document.body.contains(counterDisplay)).toBe(true)
    expect(oldCounterValue).toBe(counterValue, () => `Counter test 1 of 2 expected ${counterDisplaySelect} to be value ${oldCounterValue} but it is ${counterValue}`)
    increaseCounter.click()

    counterValue = Number(counterDisplay?.innerText)
    ++oldCounterValue
    expect(oldCounterValue).toBe(counterValue, () => `Counter test 2 of 2 expected ${counterDisplaySelect} to increase value to ${oldCounterValue} but it is ${counterValue}`)
  })

}

/** increases counter by two */
export function testCounterElements(
  counterButtonSelect: string,
  counterDisplaySelect: string,
  {elementCountExpected} = {
    elementCountExpected: 1
  }
) {
  const increaseCounters = document.querySelectorAll(counterButtonSelect) as unknown as HTMLElement[]
  const counterDisplays = document.querySelectorAll(counterDisplaySelect) as unknown as HTMLElement[]

  return testCounterSelectedElements(
    increaseCounters,
    counterDisplays,
    {elementCountExpected},
    counterButtonSelect,
    counterDisplaySelect,
  )
}