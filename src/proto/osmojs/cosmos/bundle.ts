/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import * as _0 from './ics23/v1/proofs'
import * as _3 from './auth/v1beta1/auth'
import * as _6 from './auth/v1beta1/tx'
import * as _8 from './authz/v1beta1/authz'
import * as _12 from './authz/v1beta1/tx'
import * as _14 from './bank/v1beta1/authz'
import * as _15 from './bank/v1beta1/bank'
import * as _18 from './bank/v1beta1/tx'
import * as _23 from './base/v1beta1/coin'
import * as _27 from './consensus/v1/tx'
import * as _36 from './distribution/v1beta1/distribution'
import * as _39 from './distribution/v1beta1/tx'
import * as _45 from './gov/v1beta1/gov'
import * as _47 from './gov/v1beta1/tx'
import * as _58 from './staking/v1beta1/authz'
import * as _61 from './staking/v1beta1/staking'
import * as _62 from './staking/v1beta1/tx'
import * as _64 from './tx/signing/v1beta1/signing'
import * as _66 from './tx/v1beta1/tx'
import * as _69 from './upgrade/v1beta1/tx'
import * as _70 from './upgrade/v1beta1/upgrade'
import * as _240 from './auth/v1beta1/tx.amino'
import * as _241 from './authz/v1beta1/tx.amino'
import * as _242 from './bank/v1beta1/tx.amino'
import * as _243 from './consensus/v1/tx.amino'
import * as _244 from './distribution/v1beta1/tx.amino'
import * as _245 from './gov/v1beta1/tx.amino'
import * as _246 from './staking/v1beta1/tx.amino'
import * as _247 from './upgrade/v1beta1/tx.amino'
import * as _248 from './auth/v1beta1/tx.registry'
import * as _249 from './authz/v1beta1/tx.registry'
import * as _250 from './bank/v1beta1/tx.registry'
import * as _251 from './consensus/v1/tx.registry'
import * as _252 from './distribution/v1beta1/tx.registry'
import * as _253 from './gov/v1beta1/tx.registry'
import * as _254 from './staking/v1beta1/tx.registry'
import * as _255 from './upgrade/v1beta1/tx.registry'
export namespace cosmos {
  export namespace ics23 {
    export const v1 = {
      ..._0
    }
  }
  export namespace auth {
    export const v1beta1 = {
      ..._3,
      ..._6,
      ..._240,
      ..._248
    }
  }
  export namespace authz {
    export const v1beta1 = {
      ..._8,
      ..._12,
      ..._241,
      ..._249
    }
  }
  export namespace bank {
    export const v1beta1 = {
      ..._14,
      ..._15,
      ..._18,
      ..._242,
      ..._250
    }
  }
  export namespace base {
    export const v1beta1 = {
      ..._23
    }
  }
  export namespace consensus {
    export const v1 = {
      ..._27,
      ..._243,
      ..._251
    }
  }

  export namespace distribution {
    export const v1beta1 = {
      ..._36,
      ..._39,
      ..._244,
      ..._252
    }
  }
  export namespace gov {
    export const v1beta1 = {
      ..._45,
      ..._47,
      ..._245,
      ..._253
    }
  }
  export namespace staking {
    export const v1beta1 = {
      ..._58,
      ..._61,
      ..._62,
      ..._246,
      ..._254
    }
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._64
      }
    }
    export const v1beta1 = {
      ..._66
    }
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._69,
      ..._70,
      ..._247,
      ..._255
    }
  }
}
