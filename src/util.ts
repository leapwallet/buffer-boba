import { GeneratedType } from '@cosmjs/proto-signing'
import { ProtoFactory } from './codec'
import { cosmos } from 'osmojs'
import { SignDoc } from './decoder'

export const convertCamelCaseToSnakeCase = (key: string): string => {
  return key.replace(/([A-Z])/g, '_$1').toLowerCase()
}

export const convertSnakeCaseToCamelCase = (key: string): string => {
  return key.replace(/(_\w)/g, (m) => m[1].toUpperCase())
}

export const convertObjectCasingFromCamelToSnake = (
  record: Record<string, any>
): Record<string, any> => {
  const msgKeys = Object.keys(record)
  const convertedMsg = msgKeys.reduce((acc, key) => {
    const convertedKey = convertCamelCaseToSnakeCase(key)
    const value = record[key] 
    if(value instanceof Date){
      return {
        ...acc,
        [convertedKey]: value
      }
    }

    if(Array.isArray(value)){
      return {
        ...acc,
        [convertedKey]: value.map(element => convertObjectCasingFromCamelToSnake(element))
      }
    }
    if (typeof value === 'object' && value !== null) { 
      return {
        ...acc,
        [convertedKey]: convertObjectCasingFromCamelToSnake(value)
      }
    }
    return {
      ...acc,
      [convertedKey]: record[key]
    }
  }, {} as Record<string, unknown>)
  return convertedMsg
}

export const convertToProtoFactory = (
  generatedType: GeneratedType
): ProtoFactory => {
  return {
    ...generatedType,
    toJSON: (message: any) => {
      return Object.fromEntries(
        Object.entries(message).map(([key, value]) => {
          return [convertCamelCaseToSnakeCase(key), value]
        })
      )
    },
    fromJSON: (object: any) => {
      return generatedType.encode(object).finish()
    }
  }
}

export const decodeSignDoc = (bytes: Uint8Array): SignDoc => {
  return cosmos.tx.v1beta1.SignDoc.decode(bytes)
}
