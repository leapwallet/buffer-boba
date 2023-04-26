import { describe, it } from 'vitest'
import { MsgConverter } from './msg-converter'

describe('MsgConverter', () => {
  it('convertFromAminoToDirect msg send', () => {
    const msg = {
      type: 'cosmos-sdk/MsgSend',
      value: {
        amount: [
          {
            amount: '1000',
            denom: 'uosmo'
          }
        ],
        from_address: 'osmo19vf5mfr40awvkefw69nl6p3mmlsnacmmzu45k9',
        to_address: 'osmo1nhzcr7mrqedyy5gcnkwz38yc0jk9z7y7avzpju'
      }
    }
    const result = MsgConverter.convertFromAminoToDirect(msg.type, msg.value)
    console.log(result)
  })

  it('convertFromAminoToDirect msg delegate', () => {
    const msg = {
      type: 'cosmos-sdk/MsgDelegate',
      value: {
        amount: {
          amount: '1000',
          denom: 'uosmo'
        },
        delegator_address: 'osmo19vf5mfr40awvkefw69nl6p3mmlsnacmmzu45k9',
        validator_address: 'osmovaloper1nhzcr7mrqedyy5gcnkwz38yc0jk9z7y7a3xq2x'
      }
    }
    const result = MsgConverter.convertFromAminoToDirect(msg.type, msg.value)
    console.log(result)
  })
})
