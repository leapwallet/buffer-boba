/* eslint-disable @typescript-eslint/no-namespace */
import * as _127 from './airdrop/tx'
import * as _135 from './claim/tx'
import * as _149 from './icaoracle/tx'
import * as _151 from './interchainquery/v1/messages'
import * as _163 from './stakedym/stakedym'
import * as _164 from './stakedym/tx'
import * as _176 from './stakeibc/tx'
import * as _177 from './stakeibc/validator'
import * as _180 from './staketia/staketia'
import * as _181 from './staketia/tx'
import * as _265 from './airdrop/tx.amino'
import * as _266 from './claim/tx.amino'
import * as _267 from './icaoracle/tx.amino'
import * as _268 from './interchainquery/v1/messages.amino'
import * as _269 from './stakedym/tx.amino'
import * as _270 from './stakeibc/tx.amino'
import * as _271 from './staketia/tx.amino'
import * as _272 from './airdrop/tx.registry'
import * as _273 from './claim/tx.registry'
import * as _274 from './icaoracle/tx.registry'
import * as _275 from './interchainquery/v1/messages.registry'
import * as _276 from './stakedym/tx.registry'
import * as _277 from './stakeibc/tx.registry'
import * as _278 from './staketia/tx.registry'
export namespace stride {
  export const airdrop = {
    ..._127,
    ..._265,
    ..._272
  }
  export const claim = {
    ..._135,
    ..._266,
    ..._273
  }
  export const icaoracle = {
    ..._149,
    ..._267,
    ..._274
  }
  export namespace interchainquery {
    export const v1 = {
      ..._151,
      ..._268,
      ..._275
    }
  }
  export const stakedym = {
    ..._163,
    ..._164,
    ..._269,
    ..._276
  }
  export const stakeibc = {
    ..._176,
    ..._177,
    ..._270,
    ..._277
  }
  export const staketia = {
    ..._180,
    ..._181,
    ..._271,
    ..._278
  }
}
