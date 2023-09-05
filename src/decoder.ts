import {
  TxBody as _TxBody,
  AuthInfo as _AuthInfo,
  SignDoc as _SignDoc
} from 'cosmjs-types/cosmos/tx/v1beta1/tx'
import {
  AnyWithUnpacked,
  ProtoCodec,
  UnknownMessage,
  defaultProtoCodec
} from './codec'
import { decodeSignDoc } from './util'
import * as base64js from 'base64-js'
import { SIGN_MODES, SignMode } from './sign-mode'

export type TxBody = ReturnType<typeof _TxBody.decode>
export type AuthInfo = ReturnType<typeof _AuthInfo.decode>
export type SignDoc = ReturnType<typeof _SignDoc.decode>

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
    this._txBody = _TxBody.decode(this.signDoc.bodyBytes)
    this._authInfo = _AuthInfo.decode(this.signDoc.authInfoBytes)
  }

  get txBody(): TxBody {
    if (!this._txBody) {
      this._txBody = _TxBody.decode(this.signDoc.bodyBytes)
    }
    return this._txBody
  }

  get txMsgs(): AnyWithUnpacked[] {
    const msgs: AnyWithUnpacked[] = []
    for (const msg of this.txBody.messages) {
      msgs.push(this.protoCodec.unpackAny(msg))
    }

    return msgs
    //return this.txBody.messages.map((msg) => this.protoCodec.unpackAny(msg))
  }

  get authInfo(): AuthInfo {
    if (!this._authInfo) {
      this._authInfo = _AuthInfo.decode(this.signDoc.authInfoBytes)
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
    return _SignDoc.encode(this.signDoc).finish()
  }

  toJSON(): {
    txBody: any
    authInfo: any
    chainId: string
    accountNumber: string
  } {
    return {
      txBody: {
        ...(_TxBody.toJSON(this.txBody) as any),
        messages: this.txMsgs.map((msg) => {
          if (msg instanceof UnknownMessage) {
            return msg.toJSON()
          }
          if ('factory' in msg) {
            const json = msg.factory.toJSON(msg.unpacked)
            if (json.msg instanceof Uint8Array) {
              json.msg = base64js.fromByteArray(json.msg)
            }

            return json
          }
          return msg
        })
      },
      authInfo: {
        ...this.authInfo,
        signerInfos: this.authInfo.signerInfos.map((si) => {
          return {
            ...si,
            modeInfo: {
              single: {
                mode: SIGN_MODES[si.modeInfo?.single?.mode as SignMode]
              }
            },

            publicKey: {
              ...si.publicKey,
              value: base64js.fromByteArray(
                si.publicKey?.value.slice(2) ?? new Uint8Array()
              )
            }
          }
        })
      },
      chainId: this.chainId,
      accountNumber: this.accountNumber
    }
  }
}
