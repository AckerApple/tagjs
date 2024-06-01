import { Tag } from './Tag.class.js'
import { deepClone } from '../deepFunctions.js'
import { TemplaterResult } from './TemplaterResult.class.js'
import { ValueTypes } from './ValueTypes.enum.js'
import { getValueType } from './getValueType.function.js'

export function cloneValueArray<T>(values: (T | Tag | Tag[])[]): T[] {
  return values.map((value) => {
    const tag = value as Tag

    switch( getValueType(value) ) {
      case ValueTypes.tagComponent:
        const tagComponent = value as TemplaterResult
        return deepClone(tagComponent.props)
      
      case ValueTypes.tag:
      case ValueTypes.templater:
        return cloneValueArray(tag.values)

      case ValueTypes.tagArray:
        return cloneValueArray(tag as unknown as Tag[])
    }

    return deepClone(value)
  })
}
