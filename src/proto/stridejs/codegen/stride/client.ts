import { GeneratedType } from '@cosmjs/proto-signing'
import * as strideAirdropTxAmino from './airdrop/tx.amino'
import * as strideAirdropTxRegistry from './airdrop/tx.registry'
import * as strideClaimTxAmino from './claim/tx.amino'
import * as strideClaimTxRegistry from './claim/tx.registry'
import * as strideIcaoracleTxAmino from './icaoracle/tx.amino'
import * as strideIcaoracleTxRegistry from './icaoracle/tx.registry'
import * as strideInterchainqueryV1MessagesAmino from './interchainquery/v1/messages.amino'
import * as strideInterchainqueryV1MessagesRegistry from './interchainquery/v1/messages.registry'
import * as strideStakedymTxAmino from './stakedym/tx.amino'
import * as strideStakedymTxRegistry from './stakedym/tx.registry'
import * as strideStakeibcTxAmino from './stakeibc/tx.amino'
import * as strideStakeibcTxRegistry from './stakeibc/tx.registry'
import * as strideStaketiaTxAmino from './staketia/tx.amino'
import * as strideStaketiaTxRegistry from './staketia/tx.registry'
export const strideAminoConverters = {
  ...strideAirdropTxAmino.AminoConverter,
  ...strideClaimTxAmino.AminoConverter,
  ...strideIcaoracleTxAmino.AminoConverter,
  ...strideInterchainqueryV1MessagesAmino.AminoConverter,
  ...strideStakedymTxAmino.AminoConverter,
  ...strideStakeibcTxAmino.AminoConverter,
  ...strideStaketiaTxAmino.AminoConverter
}
export const strideProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [
  ...strideAirdropTxRegistry.registry,
  ...strideClaimTxRegistry.registry,
  ...strideIcaoracleTxRegistry.registry,
  ...strideInterchainqueryV1MessagesRegistry.registry,
  ...strideStakedymTxRegistry.registry,
  ...strideStakeibcTxRegistry.registry,
  ...strideStaketiaTxRegistry.registry
]
