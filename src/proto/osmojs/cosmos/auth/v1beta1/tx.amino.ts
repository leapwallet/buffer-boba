/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import { MsgUpdateParams } from './tx'
export const AminoConverter = {
  '/cosmos.auth.v1beta1.MsgUpdateParams': {
    aminoType: 'cosmos-sdk/x/auth/MsgUpdateParams',
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
}
