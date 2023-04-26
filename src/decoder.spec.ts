import { DirectSignDocDecoder } from './decoder'
import Long from 'long'
import { cosmos } from 'osmojs'
import { stride } from 'stridejs'
import { describe, expect, it } from 'vitest'

const createSendSignDoc = () => {
  const { send } = cosmos.bank.v1beta1.MessageComposer.encoded

  const msg = send({
    amount: [
      {
        denom: 'uosmo',
        amount: '1000'
      }
    ],
    toAddress: 'osmo1nhzcr7mrqedyy5gcnkwz38yc0jk9z7y7avzpju',
    fromAddress: 'osmo19vf5mfr40awvkefw69nl6p3mmlsnacmmzu45k9'
  })

  const fee = {
    amount: [
      {
        denom: 'uosmo',
        amount: '864'
      }
    ],
    gasLimit: new Long(86364, undefined, true),
    payer: '',
    granter: ''
  }

  const signDoc = {
    bodyBytes: cosmos.tx.v1beta1.TxBody.encode({
      messages: [msg],
      memo: '',
      timeoutHeight: new Long(123123, undefined, true),
      extensionOptions: [],
      nonCriticalExtensionOptions: []
    }).finish(),
    authInfoBytes: cosmos.tx.v1beta1.AuthInfo.encode({
      signerInfos: [
        {
          publicKey: {
            typeUrl: '/cosmos.crypto.secp256k1.PubKey',
            value: Buffer.from(
              '03a0a0b0c0d0e0f101112131415161718191a1b1c1d1e1f2021222324252627',
              'hex'
            )
          },
          modeInfo: {
            single: {
              mode: cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT
            }
          },
          sequence: new Long(123, undefined, true)
        }
      ],
      fee: fee
    }).finish(),
    chainId: 'osmosis-1',
    accountNumber: new Long(2, undefined, true)
  }

  return signDoc
}

const createLiquidStakingSignDoc = () => {
  const msg = stride.stakeibc.MsgLiquidStake.encode(
    stride.stakeibc.MsgLiquidStake.fromPartial({})
  ).finish()

  const fee = {
    amount: [
      {
        denom: 'ustrd',
        amount: '864'
      }
    ],
    gasLimit: new Long(86364, undefined, true),
    payer: '',
    granter: ''
  }

  const signDoc = {
    bodyBytes: cosmos.tx.v1beta1.TxBody.encode({
      messages: [
        {
          typeUrl: '/stride.stakeibc.MsgLiquidStake',
          value: msg
        }
      ],
      memo: '',
      timeoutHeight: new Long(123123, undefined, true),
      extensionOptions: [],
      nonCriticalExtensionOptions: []
    }).finish(),
    authInfoBytes: cosmos.tx.v1beta1.AuthInfo.encode({
      signerInfos: [
        {
          publicKey: {
            typeUrl: '/cosmos.crypto.secp256k1.PubKey',
            value: Buffer.from(
              '03a0a0b0c0d0e0f101112131415161718191a1b1c1d1e1f2021222324252627',
              'hex'
            )
          },
          modeInfo: {
            single: {
              mode: cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT
            }
          },
          sequence: new Long(123, undefined, true)
        }
      ],
      fee: fee
    }).finish(),
    chainId: 'osmosis-1',
    accountNumber: new Long(2, undefined, true)
  }

  return signDoc
}

describe('decoder', () => {
  it('should work on send', () => {
    // sign doc from dApp
    const signDoc = createSendSignDoc()
    const decoder = new DirectSignDocDecoder(signDoc)
    const decodedData = decoder.toJSON() as any
    expect(decodedData).toBeTypeOf('object')
    expect(decodedData.txBody.messages.length).toBe(1)
    expect(decodedData.txBody.memo).toBe('')
    expect(decodedData.authInfo.signer_infos).toBeDefined()
    expect(decodedData.authInfo.fee).toBeDefined()
    expect(decodedData.authInfo.fee.amount.length).toBe(1)
    expect(decodedData.authInfo.fee.amount[0].denom).toBe('uosmo')
    expect(decodedData.authInfo.fee.amount[0].amount).toBe('864')
    expect(decodedData.chainId).toBe('osmosis-1')
    expect(decodedData.accountNumber).toBe('2')
  })

  it('should work on liquid staking', () => {
    // sign doc from dApp
    const signDoc = createLiquidStakingSignDoc()
    const decoder = new DirectSignDocDecoder(signDoc)
    const decodedData = decoder.toJSON() as any
    expect(decodedData).toBeTypeOf('object')
    expect(decodedData.txBody.messages.length).toBe(1)
    expect(decodedData.txBody.memo).toBe('')
    expect(decodedData.authInfo.signer_infos).toBeDefined()
    expect(decodedData.authInfo.fee).toBeDefined()
    expect(decodedData.authInfo.fee.amount.length).toBe(1)
    expect(decodedData.authInfo.fee.amount[0].denom).toBe('ustrd')
    expect(decodedData.authInfo.fee.amount[0].amount).toBe('864')
    expect(decodedData.chainId).toBe('osmosis-1')
    expect(decodedData.accountNumber).toBe('2')
  })
})
