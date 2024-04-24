import { TemplaterResult, Wrapper, renderWithSupport } from './TemplaterResult.class'
import { setUse } from './state'
import { Counts } from './interpolations/interpolateTemplate'
import { processTagResult } from './processTagResult.function'
import { TagSubject } from './subject.types'
import { TagSupport } from './TagSupport.class'
import { InsertBefore } from './Clones.type'

export function processSubjectComponent(
  templater: TemplaterResult,
  subject: TagSubject,
  insertBefore: InsertBefore,
  ownerSupport: TagSupport,
  options: {counts: Counts, forceElement?: boolean},
): TagSupport {
  // Check if function component is wrapped in a tag() call
  // TODO: This below check not needed in production mode
  if(templater.tagged !== true) {
    const wrapper = templater.wrapper as Wrapper
    const original = wrapper.original
    let name: string | undefined = original.name || original.constructor?.name

    if(name === 'Function') {
      name = undefined
    }

    const label = name || original.toString().substring(0,120)
    const error = new Error(`Not a tag component. Wrap your function with tag(). Example tag(props => html\`\`) on component:\n\n${label}\n\n`)
    throw error
  }

  const tagSupport = new TagSupport(
    templater,
    ownerSupport,
    subject,
  )

  let reSupport = subject.tagSupport
  const global = tagSupport.global = reSupport?.global || tagSupport.global
  global.insertBefore = insertBefore
  
  const providers = setUse.memory.providerConfig
  providers.ownerSupport = ownerSupport
  
  const isRender = !reSupport || options.forceElement
  if(isRender) {
    const support = reSupport || tagSupport
    reSupport = renderSubjectComponent(
      subject,
      support,
      ownerSupport,
    )
  }

  processTagResult(
    reSupport,
    subject, // The element set here will be removed from document. Also result.tag will be added in here
    insertBefore, // <template end interpolate /> (will be removed)
    options,
  )

  return reSupport
}

function renderSubjectComponent(
  subject: TagSubject,
  reSupport: TagSupport,
  ownerSupport: TagSupport,
): TagSupport {
  const preClones = ownerSupport.clones.map(clone => clone)
  
  reSupport = renderWithSupport(
    reSupport,
    subject.tagSupport, // existing tag
    subject,
    ownerSupport,
  )

  reSupport.global.newest = reSupport
  // ??? - mirroring add 0
  // reSupport.ownerTagSupport = ownerSupport

  if(ownerSupport.clones.length > preClones.length) {
    const myClones = ownerSupport.clones.filter(fClone => !preClones.find(clone => clone === fClone))
    reSupport.clones.push(...myClones)
  }

  ownerSupport.childTags.push(reSupport)

  return reSupport
}
