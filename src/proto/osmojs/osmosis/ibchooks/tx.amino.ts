/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import { MsgEmitIBCAck } from './tx'
export const AminoConverter = {
  '/osmosis.ibchooks.MsgEmitIBCAck': {
    aminoType: 'osmosis/ibchooks/emit-ibc-ack',
    toAmino: MsgEmitIBCAck.toAmino,
    fromAmino: MsgEmitIBCAck.fromAmino
  }
}
