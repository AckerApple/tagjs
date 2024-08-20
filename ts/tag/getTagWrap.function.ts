import { TemplaterResult, Wrapper } from './TemplaterResult.class.js'
import { TagWrapper } from './tag.utils.js'
import { AnySupport, BaseSupport, getSupport, PropsConfig, Support } from './Support.class.js'
import { castProps } from'../alterProp.function.js'
import { ContextItem } from './Context.types.js'
import { Props } from '../Props.js'
import { syncFunctionProps } from './update/updateExistingTagComponent.function.js'
import { executeWrap } from './executeWrap.function.js'

/** creates/returns a function that when called then calls the original component function
 * Gets used as templater.wrapper()
 */
export function getTagWrap(
  templater: TemplaterResult,
  result: TagWrapper<any>
): Wrapper {
  // this function gets called by taggedjs
  const wrapper = function tagFunWrap(
    newSupport: Support,
    subject: ContextItem,
    lastSupport?: Support | BaseSupport | undefined
  ) {
    // wrap any prop functions that are passed in
    const castedProps = getCastedProps(
      templater,
      newSupport,
      lastSupport,
    )
  
    const ownerSupport = newSupport.ownerSupport as Support
    const useSupport = getSupport(
      templater,
      ownerSupport,
      newSupport.appSupport, // ownerSupport.appSupport as Support,
      subject,
      castedProps,
    )

    return executeWrap(
      templater,
      result,
      newSupport,
      useSupport,
      lastSupport,
    )
  }

  return wrapper as Wrapper
}

export function getCastedProps(
  templater: TemplaterResult,
  newSupport: AnySupport,
  lastSupport?: AnySupport,
) {
  const maxDepth = templater.deepPropWatch ? 15 : 2
  const props = templater.props as Props
  const propsConfig = newSupport.propsConfig as PropsConfig
  // When defined, this must be an update where my new props have already been made for me
  let preCastedProps: Props | undefined = propsConfig.castProps

  const lastPropsConfig = lastSupport?.propsConfig
  const lastCastProps = lastPropsConfig?.castProps
  if(lastCastProps) {
    propsConfig.castProps = lastCastProps
    preCastedProps = syncFunctionProps(
      newSupport,
      lastSupport as Support,
      (lastSupport as Support).ownerSupport,
      props,
      maxDepth,
    )
  }

  const castedProps = preCastedProps || castProps(
    props,
    newSupport,
    0,
  )

  return castedProps
}