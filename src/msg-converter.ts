import {
  cosmosAminoConverters,
  osmosisAminoConverters,
  ibcAminoConverters,
  cosmwasmAminoConverters
} from 'osmojs'
import { strideAminoConverters } from 'stridejs'

import { AminoConverters } from './supported-modules'

const convertFromModuleGroup = (
  msg: any,
  aminoType: string,
  converters: AminoConverters
) => {
  for (const [typeUrl, converter] of Object.entries(converters)) {
    if (converter.aminoType === aminoType) {
      return {
        typeUrl: typeUrl,
        value: converter.fromAmino(msg)
      }
    }
  }
  return null
}

/**
 *
 */
export class MsgConverter {
  public static convertFromAminoToDirect(
    aminoType: string,
    msg: any
  ): {
    typeUrl: string
    value: object
  } | null {
    const sdk = aminoType.split('/')[0]
    switch (sdk) {
      case 'cosmos-sdk':
        return convertFromModuleGroup(msg, aminoType, cosmosAminoConverters)
      case 'ibc':
        return convertFromModuleGroup(msg, aminoType, ibcAminoConverters)
      case 'osmosis':
        return convertFromModuleGroup(msg, aminoType, osmosisAminoConverters)
      case 'cosmwasm':
        return convertFromModuleGroup(msg, aminoType, cosmwasmAminoConverters)
      case 'stride':
        return convertFromModuleGroup(msg, aminoType, strideAminoConverters)
      default:
        return null
    }
  }
}
