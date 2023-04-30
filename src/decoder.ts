import { cosmos } from 'osmojs'
import {
  AnyWithUnpacked,
  ProtoCodec,
  UnknownMessage,
  defaultProtoCodec
} from './codec'
import { decodeSignDoc } from './util'

export type TxBody = ReturnType<typeof cosmos.tx.v1beta1.TxBody.decode>
export type AuthInfo = ReturnType<typeof cosmos.tx.v1beta1.AuthInfo.decode>
export type SignDoc = ReturnType<typeof cosmos.tx.v1beta1.SignDoc.decode>

/**
 *
 */
export class DirectSignDocDecoder {
  public static decodeBytes(
    bytes: Uint8Array,
    protoCodec: ProtoCodec = defaultProtoCodec
  ): DirectSignDocDecoder {
    return new DirectSignDocDecoder(decodeSignDoc(bytes), protoCodec)
  }

  private _txBody: TxBody
  private _authInfo: AuthInfo

  constructor(
    public readonly signDoc: SignDoc,
    private readonly protoCodec: ProtoCodec = defaultProtoCodec
  ) {
    this._txBody = cosmos.tx.v1beta1.TxBody.decode(this.signDoc.bodyBytes)
    this._authInfo = cosmos.tx.v1beta1.AuthInfo.decode(
      this.signDoc.authInfoBytes
    )
  }

  get txBody(): TxBody {
    return this._txBody
  }

  get txMsgs(): AnyWithUnpacked[] {
    return this.txBody.messages.map((msg) => this.protoCodec.unpackAny(msg))
  }

  get authInfo(): AuthInfo {
    return this._authInfo
  }

  get chainId(): string {
    return this.signDoc.chainId
  }

  get accountNumber(): string {
    return this.signDoc.accountNumber.toString()
  }

  toBytes(): Uint8Array {
    return cosmos.tx.v1beta1.SignDoc.encode(this.signDoc).finish()
  }

  toJSON(): {
    txBody: any
    authInfo: any
    chainId: string
    accountNumber: string
  } {
    return {
      txBody: {
        ...this.txBody,
        messages: this.txMsgs.map((msg) => {
          if (msg instanceof UnknownMessage) {
            return msg.toJSON()
          }
          if ('factory' in msg) {
            return msg.factory.toJSON(msg.unpacked)
          }
          return msg
        })
      },
      authInfo: this.authInfo,
      chainId: this.chainId,
      accountNumber: this.accountNumber
    }
  }
}
