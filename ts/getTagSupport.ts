import { Tag } from "./Tag.class.js"
import { deepEqual } from "./deepFunctions.js"

export interface TagSupport {
  templater?: any

  /** Indicator of re-rending. Saves from double rending something already rendered */
  renderCount: 0
  
  mutatingRender: () => any
  
  render: () => any  

  /**
   * 
   * @param {*} props value.props
   * @param {*} newProps value.newProps
   * @param {*} compareToProps compareSupport.templater.props
   * @returns {boolean}
   */
  hasPropChanges: (
    props: any,
    newProps: any,
    compareToProps: any,
  ) => boolean,

  oldest?: Tag
  newest?: Tag
}

export function getTagSupport(
  templater?: (tagSupport: TagSupport) => Tag,
): TagSupport {
  const tagSupport: TagSupport = {
    templater,
    renderCount: 0,
    mutatingRender: () => {throw new Error('Tag function "render()" was called in sync but can only be called async')}, // loaded later and only callable async
    render: () => {
      ++tagSupport.renderCount
      return tagSupport.mutatingRender()
    }, // ensure this function still works even during deconstructing

    hasPropChanges: (
      props: any,
      newProps: any,
      compareToProps: any,
    ) => {
      const oldProps = (tagSupport.templater as any).cloneProps
      const isCommonEqual = props === undefined && props === compareToProps
      const isEqual = isCommonEqual || deepEqual(newProps, oldProps)
      return !isEqual
    },
  }
    
  return tagSupport
}
