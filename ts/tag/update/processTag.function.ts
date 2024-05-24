import { InsertBefore } from '../../interpolations/Clones.type'
import { Tag } from '../Tag.class'
import { TagSubject } from '../../subject.types'
import { TagSupport } from '../TagSupport.class'
import { TemplaterResult, Wrapper } from '../../TemplaterResult.class'
import { ValueSubject } from '../../subject'
import { Props } from '../../Props'

/** Could be a regular tag or a component. Both are Tag.class */
export function processTag(
  templater: TemplaterResult,
  insertBefore: InsertBefore,
  ownerSupport: TagSupport, // owner
  subject: TagSubject, // could be tag via result.tag
) {
  let tagSupport: TagSupport = subject.tagSupport
  
  // first time seeing this tag?
  if(!tagSupport) {
    tagSupport = newTagSupportByTemplater(templater, ownerSupport, subject)
  }
  
  subject.tagSupport = tagSupport
  tagSupport.ownerTagSupport = ownerSupport
  tagSupport.buildBeforeElement(
    insertBefore, {
      counts: {added:0, removed:0},
    }
  )
}

export function setupNewTemplater(
  tagSupport: TagSupport,
  ownerSupport: TagSupport,
  subject: TagSubject,
) {
  tagSupport.global.oldest = tagSupport
  tagSupport.global.newest = tagSupport

  // asking me to render will cause my parent to render
  tagSupport.ownerTagSupport = ownerSupport
  subject.tagSupport = tagSupport
}

export function tagFakeTemplater(
  tag: Tag
) {
  const templater = getFakeTemplater()
  templater.tag = tag
  tag.templater = templater

  return templater
}

export function getFakeTemplater() {
  const fake = {
    children: new ValueSubject<Tag[]>([]), // no children
    
    // props: {} as Props,
    props: [] as Props,
    
    isTag: true,
    tagJsType: 'templater',
    tagged: false,
    
    madeChildIntoSubject: false,
    html: () => fake
  } as TemplaterResult

  return fake
}

export function newTagSupportByTemplater(
  templater: TemplaterResult,
  ownerSupport: TagSupport,
  subject: TagSubject,
) {
  const tagSupport = new TagSupport(
    templater,
    ownerSupport,
    subject,
  )

  setupNewTemplater(tagSupport, ownerSupport, subject)

  ownerSupport.childTags.push(tagSupport)

  return tagSupport
}