import { Props } from "./Props.js"
import { Tag, TagMemory } from "./Tag.class.js"
import { deepClone, deepEqual } from "./deepFunctions.js"
import { isTagArray, isTagComponent, isTagInstance } from "./isInstance.js"
import { Provider } from "./providers.js"
import { TagChildren } from "./tag.js"
import { TagComponent, TemplateRedraw, TemplaterResult, alterProps } from "./templater.utils.js"

export class TagSupport {
  latestProps: Props // new props NOT cloned props
  // props from **constructor** are converted for comparing over renders
  latestClonedProps: Props // This seems to be a duplicate of clonedProps
  lastClonedKidValues: unknown[][] = []

  // TODO: see if we can remove
  clonedProps: Props
  
  memory: TagMemory = {
    context: {}, // populated after reading interpolated.values array converted to an object {variable0, variable:1}
    state: {
      newest: [],
    },
    providers: [],
    /** Indicator of re-rending. Saves from double rending something already rendered */
    renderCount: 0,
  }

  constructor(
    public templater: TemplaterResult,
    public children: TagChildren, // children tags passed in as arguments
    public props?: Props,  // natural props
  ) {
    // this.latestChildren = children // <--------------------?
    this.latestProps = props
    const latestProps = alterProps(props, templater)
    this.latestClonedProps = latestProps // assume its HTML children and then detect

    // if the latest props are not HTML children, then clone the props for later render cycles to compare
    if(!isTagInstance(props)) {
      this.latestClonedProps = deepClone( latestProps )
    }

    // TODO: see if we can remove
    this.clonedProps = this.latestClonedProps

    this.lastClonedKidValues.length = 0
    children.value.forEach(kid => {
      const cloneValues = cloneValueArray(kid.values)
      this.lastClonedKidValues.push(cloneValues)
    })
  }

  // TODO: these below may not be in use
  oldest?: Tag
  newest?: Tag

  mutatingRender(): Tag {
    const message = 'Tag function "render()" was called in sync but can only be called async'
    console.error(message, {tagSupport: this})
    throw new Error(message)
  } // loaded later and only callable async

  render () {
    ++this.memory.renderCount
    return this.mutatingRender()
  } // ensure this function still works even during deconstructing

  /** Returns true when rendering owner is not needed. Returns false when rendering owner should occur */
  renderExistingTag(
    tag: Tag,
    newTemplater: TemplaterResult,
  ): boolean {
    const preRenderCount = this.memory.renderCount
    providersChangeCheck(tag)
  
    // When the providers were checked, a render to myself occurred and I do not need to re-render again
    if(preRenderCount !== this.memory.renderCount) {
      return true
    }
  
    const oldTemplater = tag.tagSupport.templater
    /*
    const nowProps = newTemplater.tagSupport.props // natural props
    const oldClonedProps = oldTemplater.tagSupport.clonedProps // natural props
    const oldProps = oldTemplater?.tagSupport.props // new props cloned
    */

    const hasChanged = hasTagSupportChanged(
      oldTemplater.tagSupport,
      newTemplater.tagSupport,
    )

    this.newest = (this.templater as TemplateRedraw).redraw() // No change detected, just redraw me only

    if(!hasChanged) {
      return true
    }

    return false
  }
}

function providersChangeCheck(tag: Tag) {
  const providersWithChanges = tag.tagSupport.memory.providers.filter(provider =>
    !deepEqual(provider.instance, provider.clone)
  )

  // reset clones
  providersWithChanges.forEach(provider => {
    const appElement = tag.getAppElement()

    handleProviderChanges(appElement, provider)

    provider.clone = deepClone(provider.instance)
  })
}

function handleProviderChanges(
  appElement: Tag,
  provider: Provider,
) {
  const tagsWithProvider = getTagsWithProvider(appElement, provider)

  tagsWithProvider.forEach(({tag, renderCount, provider}) => {
    const unRendered = renderCount === tag.tagSupport.memory.renderCount
    if(unRendered) {
      provider.clone = deepClone(provider.instance)
      tag.tagSupport.render()
    }
  })
}

function getTagsWithProvider(
  tag: Tag,
  provider: Provider,
  memory: {
    tag: Tag
    renderCount: number
    provider: Provider
  }[] = []
) {
  const hasProvider = tag.tagSupport.memory.providers.find(
    xProvider => xProvider.constructMethod === provider.constructMethod
  )
  
  if(hasProvider) {
    memory.push({
      tag,
      renderCount: tag.tagSupport.memory.renderCount,
      provider: hasProvider
    })
  }

  tag.children.forEach(child => getTagsWithProvider(child, provider, memory))

  return memory
}

export function hasTagSupportChanged(
  oldTagSupport: TagSupport,
  newTagSupport: TagSupport,
) {
  const oldProps = oldTagSupport.props
  const latestProps = newTagSupport.props
  const oldClonedProps = oldTagSupport.latestClonedProps

  const propsChanged = hasPropChanges(latestProps, oldClonedProps, oldProps)
  
  // if no changes detected, no need to continue to rendering further tags
  if(propsChanged) {
    return true
  }

  const kidsChanged = hasKidsChanged(oldTagSupport, newTagSupport)

  // we already know props didn't change and if kids didn't either, than don't render
  return kidsChanged
}

export function hasPropChanges(
  props: Props, // natural props
  pastCloneProps: Props, // previously cloned props
  compareToProps: Props, // new props NOT cloned props
) {
  const isCommonEqual = props === undefined && props === compareToProps
  const isEqual = isCommonEqual || deepEqual(pastCloneProps, props)
  return !isEqual // if equal then no changes
}

export function hasKidsChanged(
  oldTagSupport: TagSupport,
  newTagSupport: TagSupport,
) {
  const oldCloneKidValues = oldTagSupport.lastClonedKidValues
  const newClonedKidValues = newTagSupport.lastClonedKidValues

  const everySame = oldCloneKidValues.every((set, index) => {
    const x = newClonedKidValues[index]
    return set.every((item, index) => item === x[index])
  })

  return !everySame
}

function cloneValueArray<T>(values: (T | Tag | Tag[])[]): T[] {
  return values.map((value) => {
    const tag = value as Tag

    if(isTagInstance(tag)) {
      return cloneValueArray(tag.values)
    }

    if(isTagComponent(tag)) {
      const tagComponent = tag as unknown as TemplaterResult
      if(tagComponent.newest || tagComponent.oldest) {
        throw 33
      }
      return deepClone(tagComponent.tagSupport.latestClonedProps)
    }

    if(isTagArray(tag)) {
      return cloneValueArray(tag as unknown as Tag[])
    }

    return deepClone(value)
  })
}