import { GeneratedType } from '@cosmjs/proto-signing'

export type GeneratedEntry = [string, GeneratedType]

export type GeneratedRegistry = readonly GeneratedEntry[]

export interface AminoConverter {
  readonly aminoType: string
  readonly toAmino: (value: any) => any
  readonly fromAmino: (value: any) => any
}

export type AminoConverters = Record<string, AminoConverter>

export interface Module {
  registry: GeneratedRegistry
  AminoConverter: AminoConverters
}
