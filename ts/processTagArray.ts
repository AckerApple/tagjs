import { Clones } from "./Clones.type.js"
import { ArrayValueNeverSet, Tag } from "./Tag.class.js"
import { ValueSubject } from "./ValueSubject.js"
import { TagSupport } from "./TagSupport.class.js"
import { Counts } from "./interpolateTemplate.js"
import { processTagResult } from "./processTagResult.function.js"
import { TemplaterResult } from "./templater.utils.js"
import { ArrayNoKeyError } from "./errors.js"

export type LastArrayItem = {tag: Tag, index: number}
export type TagArraySubject = ValueSubject<Tag[]> & {
  lastArray: LastArrayItem[]
  template: Element
}


export function processTagArray(
  result: TagArraySubject,
  value: Tag[], // arry of Tag classes
  template: Element, // <template end interpolate />
  ownerTag: Tag,
  options: {counts: Counts, forceElement?: boolean},
): Clones {
  const clones: Clones = []
  result.lastArray = result.lastArray || [] // {tag, index}[] populated in processTagResult
  
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
    const destroyItem = lessLength || subArrayValue !== item.tag.arrayValue
    
    if(destroyItem) {
      const last = result.lastArray[index]
      const tag: Tag = last.tag
      
      tag.destroy({
        stagger: options.counts.removed,
        byParent: false
      })

      ++removed
      ++options.counts.removed
      
      return false
    }
    return true
  })

  // const masterBefore = template || (template as any).clone
  const before = template || (template as any).clone

  value.forEach((subTag, index) => {
    subTag.tagSupport = new TagSupport({} as TemplaterResult, new ValueSubject([]))
        
    subTag.tagSupport.mutatingRender = () => {
      ownerTag.tagSupport.render()
      return subTag
    } // fake having a render function

    subTag.ownerTag = ownerTag    
    ownerTag.children.push(subTag)

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

    const previous = result.lastArray[index]
    if (previous) {
      const isSame = previous.tag.arrayValue === subTag.arrayValue
      if (isSame) {
        previous.tag.updateValues(subTag.values)
      }
      return []
    }

    const nextClones = processTagResult(
      subTag,
      result,
      before,
      {
        index,
        ...options,
      }
    )

    clones.push(...nextClones)
  })

  return clones
}
