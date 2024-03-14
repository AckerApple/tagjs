import { Clones } from './Clones.type'
import { ArrayValueNeverSet, Tag } from './Tag.class'
import { ValueSubject } from './ValueSubject'
import { TagSupport } from './TagSupport.class'
import { Counts, Template } from './interpolateTemplate'
import { TemplaterResult } from './templater.utils'
import { ArrayNoKeyError } from './errors'
import { destroyArrayTag } from './checkDestroyPrevious.function'

export type LastArrayItem = {tag: Tag, index: number}
export type TagArraySubject = ValueSubject<Tag[]> & {
  lastArray: LastArrayItem[]
  template: Element | Text | Template
  isChildSubject?: boolean // present when children passed as prop0 or prop1
}

export function processTagArray(
  result: TagArraySubject,
  value: Tag[], // arry of Tag classes
  template: Element | Text | Template, // <template end interpolate />
  ownerTag: Tag,
  options: {
    counts: Counts
    forceElement?: boolean
  },
): Clones {
  // const clones: Clones = []
  const clones: Clones = ownerTag.clones // []

  if(!result.lastArray) {
    result.lastArray = [] // {tag, index}[] populated in processTagResult
  }

  result.template = template

  let removed = 0
  
  /** 🗑️ remove previous items first */
  result.lastArray = result.lastArray.filter((
    item: any,
    index: number,
  ) => {
    const newLength = value.length-1
    const at = index - removed
    const lessLength = newLength < at
    const subTag = value[index - removed]
    const subArrayValue = subTag?.arrayValue
    const destroyItem = lessLength || !areLikeValues(subArrayValue, item.tag.arrayValue)
    
    if(destroyItem) {
      const last = result.lastArray[index]
      const tag: Tag = last.tag
      destroyArrayTag(tag, options.counts)

      ++removed
      ++options.counts.removed
      
      return false
    }
    return true
  })

  // const masterBefore = template || (template as any).clone
  const before = template || (template as any).clone

  value.forEach((subTag, index) => {
    const previous = result.lastArray[index]
    const previousSupport = subTag.tagSupport || previous?.tag.tagSupport

    subTag.tagSupport = previousSupport || new TagSupport({} as TemplaterResult, new ValueSubject([]))
    
    if(previousSupport) {
      previousSupport.newest = subTag
    } else {
      subTag.tagSupport.mutatingRender = () => {
        ownerTag.tagSupport.render() // call owner for needed updates
        return subTag
      }
  
      ownerTag.children.push(subTag)
    }
    
    subTag.ownerTag = ownerTag    

    // check for html``.key()
    const keyNotSet = subTag.arrayValue as ArrayValueNeverSet | undefined
    if (keyNotSet?.isArrayValueNeverSet) {
      const details = {
        template: subTag.getTemplate().string,
        array: value,
        ownerTagContent: ownerTag.lastTemplateString,
      }
      const message = 'Use html`...`.key(item) instead of html`...` to template an Array'
      console.error(message, details)
      const err = new ArrayNoKeyError(message, details)
      throw err
    }
    
    const couldBeSame = result.lastArray.length > index
    if (couldBeSame) {

      const isSame = areLikeValues(previous.tag.arrayValue, subTag.arrayValue)
      if (isSame) {
        subTag.tagSupport = subTag.tagSupport || previous.tag.tagSupport
        previous.tag.updateByTag(subTag)
        return []
      }

      return []
    }

    processAddTagArrayItem(before, subTag, result, index, options)
  })

  return clones
}

function processAddTagArrayItem(
  before: Element | Text | Template,
  subTag: Tag,
  result: TagArraySubject,
  index: number,
  options: {
    counts: Counts
    forceElement?: boolean
  },
) {
  const lastValue = {
    tag: subTag, index
  }
  // Added to previous array
  result.lastArray.push(lastValue)

  const counts: Counts = {
    added: options.counts.added + index,
    removed: options.counts.removed,
  }

  const lastFirstChild = before // tag.clones[0] // insertBefore.lastFirstChild    

  subTag.buildBeforeElement(
    lastFirstChild,
    {counts, forceElement: options.forceElement}
  )
}

/** compare two values. If both values are arrays then the items will be compared */
function areLikeValues(valueA: unknown, valueB: unknown): Boolean {
  if(valueA === valueB) {
    return true
  }

  const bothArrays = valueA instanceof Array && valueB instanceof Array
  const matchLengths = bothArrays && valueA.length == valueB.length
  if(matchLengths) {
    return valueA.every((item, index) => item == valueB[index])
  }

  return false
}
