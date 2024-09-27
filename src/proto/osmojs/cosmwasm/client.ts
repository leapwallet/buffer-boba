/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import { GeneratedType } from '@cosmjs/proto-signing'
import * as cosmwasmWasmV1TxAmino from './wasm/v1/tx.amino'
import * as cosmwasmWasmV1TxRegistry from './wasm/v1/tx.registry'
export const cosmwasmAminoConverters = {
  ...cosmwasmWasmV1TxAmino.AminoConverter
}
export const cosmwasmProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [
  ...cosmwasmWasmV1TxRegistry.registry
]
