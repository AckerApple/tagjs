import { TemplaterResult, renderWithSupport } from './TemplaterResult.class'
import { setUse } from './state'
import { Counts } from './interpolateTemplate'
import { Tag } from './Tag.class'
import { processTagResult } from './processTagResult.function'
import { TagSubject } from './Tag.utils'
import { TagSupport } from './TagSupport.class'
import { InsertBefore } from './Clones.type'

export function processSubjectComponent(
  templater: TemplaterResult,
  subject: TagSubject,
  insertBefore: InsertBefore,
  ownerTag: Tag,
  options: {counts: Counts, forceElement?: boolean},
): Tag {
  // Check if function component is wrapped in a tag() call
  // TODO: This below check not needed in production mode
  if(templater.tagged !== true) {
    const original = templater.wrapper.original
    let name: string | undefined = original.name || original.constructor?.name

    if(name === 'Function') {
      name = undefined
    }

    const label = name || original.toString().substring(0,120)
    const error = new Error(`Not a tag component. Wrap your function with tag(). Example tag(props => html\`\`) on component:\n\n${label}\n\n`)
    throw error
  }

  templater.tagSupport = new TagSupport(
    ownerTag.tagSupport,
    templater,
    subject,
  )

  // templater.oldest = subject.tag?.tagSupport.oldest || templater.oldest
  if(insertBefore.nodeName != 'TEMPLATE') {
    throw new Error('9')
  }
  templater.global.insertBefore = insertBefore
  let retag = subject.tag as Tag
  
  const providers = setUse.memory.providerConfig
  providers.ownerTag = ownerTag
  
  const isRedraw = !retag || options.forceElement
  if(isRedraw) {
    retag = redrawSubjectComponent(
      templater,
      subject,
      retag,
      ownerTag,
      insertBefore,
    )
  }

  processTagResult(
    retag,
    subject, // The element set here will be removed from document. Also result.tag will be added in here
    insertBefore, // <template end interpolate /> (will be removed)
    options,
  )

  return retag
}

function redrawSubjectComponent(
  templater: TemplaterResult,
  subject: TagSubject,
  retag: Tag,
  ownerTag: Tag,
  insertBefore: InsertBefore,
): Tag {
  const preClones = ownerTag.clones.map(clone => clone)
  retag = renderWithSupport(
    templater.tagSupport,
    subject.tag, // existing tag
    subject,
    ownerTag,
  )

  if(retag.tagSupport.templater.global.newest != retag) {
    throw new Error('mismatch result newest')
  }

  templater.global.newest = retag

  if(ownerTag.clones.length > preClones.length) {
    const myClones = ownerTag.clones.filter(fClone => !preClones.find(clone => clone === fClone))
    retag.clones.push(...myClones)

    if(myClones.find(x => x === insertBefore)) {
      throw new Error('way back here we add marker')
    }
  }
  
  if(ownerTag.childTags.find(x => x === retag)) {
    throw new Error('about to reattach tag already present')
  }

  ownerTag.childTags.push(retag)

  return retag
}