import { deepClone } from '../deepFunctions.js'
import { BaseTagSupport, TagSupport } from '../tag/TagSupport.class.js'
import { setUse } from'./setUse.function.js'
import { state } from'./state.function.js'

export type Provider = {
  constructMethod: any
  instance: any
  clone: any
  stateDiff: number
  owner: TagSupport // create at
  children: TagSupport[] // injected into
}

type ProviderConstructor<T> = (new (...args: any[]) => T) | (() => T)

type ProviderConfig = {
  providers: Provider[]
  ownerSupport?: TagSupport | BaseTagSupport
}

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
      for(let x = stateDiffMemory.stateDiff; x > 0; --x){
        state(undefined)
      }
      const result = state(undefined) as T
      return result
    }

    const result = state(() => {
      const memory = setUse.memory
      const stateConfig = memory.stateConfig
      const oldStateCount = stateConfig.array.length
      // Providers with provider requirements just need to use providers.create() and providers.inject()
      const instance: T = 'prototype' in constructMethod ? new (constructMethod as classProvider<T>)() : (constructMethod as functionProvider<T>)()
  
      const tagSupport = stateConfig.tagSupport as TagSupport
      const stateDiff = stateConfig.array.length - oldStateCount
      
      const provider: Provider = {
        constructMethod,
        instance,
        clone: deepClone(instance),
        stateDiff,
        owner: tagSupport,
        children: [],
      }

      stateDiffMemory.provider = provider
      tagSupport.global.providers.push(provider)
      stateDiffMemory.stateDiff = stateDiff

      return instance
    })

    const cm = constructMethod as ConstructMethod<T>
    // const compareTo = cm.compareTo = cm.compareTo || cm.toString()
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
      const memory = setUse.memory
      const cm = constructor as ConstructMethod<T>
      const compareTo = cm.compareTo = cm.compareTo || constructor.toString()
      const tagSupport = memory.stateConfig.tagSupport as TagSupport
      const providers: Provider[] = []

      let owner = {
        ownerTagSupport: tagSupport.ownerTagSupport
      } as TagSupport
    
      while(owner.ownerTagSupport) {
        const ownerProviders = owner.ownerTagSupport.global.providers
  
        const provider = ownerProviders.find(provider => {
          providers.push(provider as Provider)
          const constructorMatch = provider.constructMethod.compareTo === compareTo
          
          if(constructorMatch) {
            return true
          }
        })

        if(provider) {
          provider.clone = deepClone(provider.instance) // keep a copy of the latest before any change occur
          const tagSupport = memory.stateConfig.tagSupport as TagSupport
          tagSupport.global.providers.push(provider)
          provider.children.push(tagSupport)
          return provider.instance
        }
  
        owner = owner.ownerTagSupport // cause reloop checking next parent
      }
      
      const msg = `Could not inject provider: ${constructor.name} ${constructor}`
      console.warn(`${msg}. Available providers`, providers)
      throw new Error(msg)  
    })
  }
}
