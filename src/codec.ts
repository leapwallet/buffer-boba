import { Any } from 'osmojs/types/codegen/google/protobuf/any'
import { Writer, Reader } from 'protobufjs'
import { Registry } from './registry'
import { convertToProtoFactory } from './util'

export type AnyWithUnpacked =
  | Any
  | (Any & { unpacked: unknown; factory: ProtoFactory })

export class UnknownMessage implements Any {
  constructor(
    protected readonly _typeUrl: string,
    protected readonly _value: Uint8Array
  ) {}

  get typeUrl(): string {
    return this._typeUrl
  }

  get value(): Uint8Array {
    return this._value
  }

  toJSON() {
    return {
      type_url: this._typeUrl,
      value: Buffer.from(this._value).toString('base64')
    }
  }
}

export interface ProtoFactory {
  encode: (message: any, writer?: Writer) => Writer
  decode: (r: Reader | Uint8Array, l?: number) => any
  fromJSON: (object: any) => any
  toJSON: (message: any) => any
}

export class ProtoCodec {
  protected codecRegistry: Record<string, ProtoFactory> = {}

  unpackAny(any: Any): AnyWithUnpacked {
    const factory = this.codecRegistry[any.typeUrl]

    if (!factory) {
      return new UnknownMessage(any.typeUrl, any.value)
    }
    const unpacked = factory.decode(any.value)

    return {
      ...any,
      unpacked,
      factory
    }
  }

  registerProtoFactory(typeUrl: string, message: ProtoFactory): void {
    this.codecRegistry[typeUrl] = message
  }
}

export const defaultProtoCodec = new ProtoCodec()

Registry.default()
  .getAllGeneratedTypes()
  .map(([typeUrl, generatedType]) => {
    return [typeUrl, convertToProtoFactory(generatedType)] satisfies [
      string,
      ProtoFactory
    ]
  })
  .forEach(([typeUrl, protoFactory]) => {
    defaultProtoCodec.registerProtoFactory(typeUrl, protoFactory)
  })
