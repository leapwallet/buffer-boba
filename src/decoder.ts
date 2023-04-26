import { cosmos } from 'osmojs'
import {
  AnyWithUnpacked,
  ProtoCodec,
  UnknownMessage,
  defaultProtoCodec
} from './codec'
import { convertToProtoFactory } from './util'

export type TxBody = ReturnType<typeof cosmos.tx.v1beta1.TxBody.decode>
export type AuthInfo = ReturnType<typeof cosmos.tx.v1beta1.AuthInfo.decode>
export type SignDoc = ReturnType<typeof cosmos.tx.v1beta1.SignDoc.decode>

/**
 *
 */
export class DirectSignDocDecoder {
  public static decode(bytes: Uint8Array): DirectSignDocDecoder {
    return new DirectSignDocDecoder(cosmos.tx.v1beta1.SignDoc.decode(bytes))
  }

  private _txBody: TxBody | null = null
  private _authInfo: AuthInfo | null = null

  constructor(
    public readonly signDoc: SignDoc,
    private readonly protoCodec: ProtoCodec = defaultProtoCodec
  ) {}

  get txBody(): TxBody {
    if (!this._txBody) {
      this._txBody = cosmos.tx.v1beta1.TxBody.decode(this.signDoc.bodyBytes)
    }

    return this._txBody
  }

  get txMsgs(): AnyWithUnpacked[] {
    return this.txBody.messages.map((msg) => this.protoCodec.unpackAny(msg))
  }

  get authInfo(): AuthInfo {
    if (!this._authInfo) {
      this._authInfo = cosmos.tx.v1beta1.AuthInfo.decode(
        this.signDoc.authInfoBytes
      )
    }

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

  toJSON(): any {
    return {
      txBody: {
        ...convertToProtoFactory(cosmos.tx.v1beta1.TxBody).toJSON(this.txBody),
        messages: this.txMsgs.map((msg) => {
          if (msg) {
            if (msg instanceof UnknownMessage) {
              return msg.toJSON()
            }
            if ('factory' in msg) {
              return msg.factory.toJSON(msg.unpacked)
            }
          }
          return msg
        })
      },
      authInfo: convertToProtoFactory(cosmos.tx.v1beta1.AuthInfo).toJSON(
        this.authInfo
      ),
      chainId: this.chainId,
      accountNumber: this.accountNumber
    }
  }
}
