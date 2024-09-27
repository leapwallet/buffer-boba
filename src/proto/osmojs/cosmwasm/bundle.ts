/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-namespace */
//@ts-nocheck
import * as _118 from './wasm/v1/authz'
import * as _121 from './wasm/v1/proposal_legacy'
import * as _123 from './wasm/v1/tx'
import * as _124 from './wasm/v1/types'
import * as _325 from './wasm/v1/tx.amino'
import * as _326 from './wasm/v1/tx.registry'
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._118,
      ..._121,
      ..._123,
      ..._124,
      ..._325,
      ..._326
    }
  }
}
