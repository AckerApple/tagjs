import { getSupportInCycle } from '../tag/getSupportInCycle.function.js'
import { Support } from '../tag/Support.class.js'
import { SupportTagGlobal } from '../tag/TemplaterResult.class.js'
import { setUseMemory } from'./setUse.function.js'
import { state } from'./state.function.js'

export type Provider = {
  constructMethod: any
  instance: any
  stateDiff: number
  owner: Support // create at
  children: Support[] // injected into
}

type ProviderConstructor<T> = (new (...args: any[]) => T) | (() => T)

type functionProvider<T> = () => T
type classProvider<T> = new (...args: any[]) => T
type Construct<T> = classProvider<T> | functionProvider<T>
type ConstructMethod<T> = Construct<T> & {
  compareTo: string
}

export const providers = {
  create: <T>(
    constructMethod: Construct<T>
  ): T => {
    const stateDiffMemory = state(() => ({stateDiff: 0, provider: undefined as any as Provider}))

    // mimic how many states were called the first time
    if(stateDiffMemory.stateDiff) {
      let x = stateDiffMemory.stateDiff
      while(x--){
        state(undefined)
      }
      const result = state(undefined) as T
      return result
    }

    const result = state(() => {
      const stateConfig = setUseMemory.stateConfig
      const oldStateCount = stateConfig.array.length
      // Providers with provider requirements just need to use providers.create() and providers.inject()
      const instance: T = 'prototype' in constructMethod ? new (constructMethod as classProvider<T>)() : (constructMethod as functionProvider<T>)()
  
      const support = stateConfig.support as Support
      const stateDiff = stateConfig.array.length - oldStateCount
      
      const provider: Provider = {
        constructMethod,
        instance,
        stateDiff,
        owner: support,
        children: [],
      }

      stateDiffMemory.provider = provider
      const global = support.subject.global as SupportTagGlobal
      const providers = global.providers = global.providers || []
      providers.push(provider)
      stateDiffMemory.stateDiff = stateDiff

      return instance
    })

    const cm = constructMethod as ConstructMethod<T>
    const compareTo = cm.compareTo = cm.toString()
    stateDiffMemory.provider.constructMethod.compareTo = compareTo

    return result
  },
  
  /**
   * @template T
   * @param {(new (...args: any[]) => T) | () => T} constructor 
   * @returns {T}
   */
  inject: <T>(constructor: ProviderConstructor<T>): T => {
    // find once, return same every time after
    return state(() => {
      // const memory = setUse.memory
      const cm = constructor as ConstructMethod<T>
      const compareTo = cm.compareTo = cm.compareTo || constructor.toString()
      const support =  getSupportInCycle() as Support // memory.stateConfig.support as Support
      const providers: Provider[] = []

      let owner = {
        ownerSupport: support.ownerSupport
      } as Support
    
      while(owner.ownerSupport) {
        const ownGlobal = owner.ownerSupport.subject.global as SupportTagGlobal
        const ownerProviders = ownGlobal.providers
  
        if(!ownerProviders) {
          owner = owner.ownerSupport as Support // cause reloop checking next parent
          continue
        }

        const provider = ownerProviders.find(provider => {
          providers.push(provider as Provider)
          const constructorMatch = provider.constructMethod.compareTo === compareTo
          
          if(constructorMatch) {
            return true
          }
        })

        if(provider) {
          const global = support.subject.global as SupportTagGlobal
          const providers = global.providers = global.providers || []
          providers.push(provider)
          provider.children.push(support)
          return provider.instance
        }
  
        owner = owner.ownerSupport as Support // cause reloop checking next parent
      }
      
      const msg = `Could not inject provider: ${constructor.name} ${constructor}`
      console.warn(`${msg}. Available providers`, providers)
      throw new Error(msg)  
    })
  }
}