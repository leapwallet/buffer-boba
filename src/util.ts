import { GeneratedType } from '@cosmjs/proto-signing'
import { ProtoFactory } from './codec'
import { cosmos } from 'osmojs'

export const convertCamelCaseToSnakeCase = (key: string): string => {
  return key.replace(/([A-Z])/g, '_$1').toLowerCase()
}

export const convertSnakeCaseToCamelCase = (key: string): string => {
  return key.replace(/(_\w)/g, (m) => m[1].toUpperCase())
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

export const decodeSignDoc = (bytes: Uint8Array) => {
  return cosmos.tx.v1beta1.SignDoc.decode(bytes)
}
