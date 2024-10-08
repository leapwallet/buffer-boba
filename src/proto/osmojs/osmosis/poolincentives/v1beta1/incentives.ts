/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import {
  Duration,
  DurationAmino,
  DurationSDKType
} from '../../../../google/protobuf/duration'
import { BinaryReader, BinaryWriter } from '../../../../binary'
import { GlobalDecoderRegistry } from '../../../registry'
export interface Params {
  /**
   * minted_denom is the denomination of the coin expected to be minted by the
   * minting module. Pool-incentives module doesn’t actually mint the coin
   * itself, but rather manages the distribution of coins that matches the
   * defined minted_denom.
   */
  mintedDenom: string
}
export interface ParamsProtoMsg {
  typeUrl: '/osmosis.poolincentives.v1beta1.Params'
  value: Uint8Array
}
export interface ParamsAmino {
  /**
   * minted_denom is the denomination of the coin expected to be minted by the
   * minting module. Pool-incentives module doesn’t actually mint the coin
   * itself, but rather manages the distribution of coins that matches the
   * defined minted_denom.
   */
  minted_denom?: string
}
export interface ParamsAminoMsg {
  type: 'osmosis/poolincentives/params'
  value: ParamsAmino
}
export interface ParamsSDKType {
  minted_denom: string
}
export interface LockableDurationsInfo {
  lockableDurations: Duration[]
}
export interface LockableDurationsInfoProtoMsg {
  typeUrl: '/osmosis.poolincentives.v1beta1.LockableDurationsInfo'
  value: Uint8Array
}
export interface LockableDurationsInfoAmino {
  lockable_durations?: DurationAmino[]
}
export interface LockableDurationsInfoAminoMsg {
  type: 'osmosis/poolincentives/lockable-durations-info'
  value: LockableDurationsInfoAmino
}
export interface LockableDurationsInfoSDKType {
  lockable_durations: DurationSDKType[]
}
export interface DistrInfo {
  totalWeight: string
  records: DistrRecord[]
}
export interface DistrInfoProtoMsg {
  typeUrl: '/osmosis.poolincentives.v1beta1.DistrInfo'
  value: Uint8Array
}
export interface DistrInfoAmino {
  total_weight?: string
  records?: DistrRecordAmino[]
}
export interface DistrInfoAminoMsg {
  type: 'osmosis/poolincentives/distr-info'
  value: DistrInfoAmino
}
export interface DistrInfoSDKType {
  total_weight: string
  records: DistrRecordSDKType[]
}
export interface DistrRecord {
  gaugeId: bigint
  weight: string
}
export interface DistrRecordProtoMsg {
  typeUrl: '/osmosis.poolincentives.v1beta1.DistrRecord'
  value: Uint8Array
}
export interface DistrRecordAmino {
  gauge_id?: string
  weight?: string
}
export interface DistrRecordAminoMsg {
  type: 'osmosis/poolincentives/distr-record'
  value: DistrRecordAmino
}
export interface DistrRecordSDKType {
  gauge_id: bigint
  weight: string
}
export interface PoolToGauge {
  poolId: bigint
  gaugeId: bigint
  duration: Duration
}
export interface PoolToGaugeProtoMsg {
  typeUrl: '/osmosis.poolincentives.v1beta1.PoolToGauge'
  value: Uint8Array
}
export interface PoolToGaugeAmino {
  pool_id?: string
  gauge_id?: string
  duration?: DurationAmino
}
export interface PoolToGaugeAminoMsg {
  type: 'osmosis/poolincentives/pool-to-gauge'
  value: PoolToGaugeAmino
}
export interface PoolToGaugeSDKType {
  pool_id: bigint
  gauge_id: bigint
  duration: DurationSDKType
}
export interface AnyPoolToInternalGauges {
  poolToGauge: PoolToGauge[]
}
export interface AnyPoolToInternalGaugesProtoMsg {
  typeUrl: '/osmosis.poolincentives.v1beta1.AnyPoolToInternalGauges'
  value: Uint8Array
}
export interface AnyPoolToInternalGaugesAmino {
  pool_to_gauge?: PoolToGaugeAmino[]
}
export interface AnyPoolToInternalGaugesAminoMsg {
  type: 'osmosis/poolincentives/any-pool-to-internal-gauges'
  value: AnyPoolToInternalGaugesAmino
}
export interface AnyPoolToInternalGaugesSDKType {
  pool_to_gauge: PoolToGaugeSDKType[]
}
export interface ConcentratedPoolToNoLockGauges {
  poolToGauge: PoolToGauge[]
}
export interface ConcentratedPoolToNoLockGaugesProtoMsg {
  typeUrl: '/osmosis.poolincentives.v1beta1.ConcentratedPoolToNoLockGauges'
  value: Uint8Array
}
export interface ConcentratedPoolToNoLockGaugesAmino {
  pool_to_gauge?: PoolToGaugeAmino[]
}
export interface ConcentratedPoolToNoLockGaugesAminoMsg {
  type: 'osmosis/poolincentives/concentrated-pool-to-no-lock-gauges'
  value: ConcentratedPoolToNoLockGaugesAmino
}
export interface ConcentratedPoolToNoLockGaugesSDKType {
  pool_to_gauge: PoolToGaugeSDKType[]
}
function createBaseParams(): Params {
  return {
    mintedDenom: ''
  }
}
export const Params = {
  typeUrl: '/osmosis.poolincentives.v1beta1.Params',
  aminoType: 'osmosis/poolincentives/params',
  is(o: any): o is Params {
    return (
      o && (o.$typeUrl === Params.typeUrl || typeof o.mintedDenom === 'string')
    )
  },
  isSDK(o: any): o is ParamsSDKType {
    return (
      o && (o.$typeUrl === Params.typeUrl || typeof o.minted_denom === 'string')
    )
  },
  isAmino(o: any): o is ParamsAmino {
    return (
      o && (o.$typeUrl === Params.typeUrl || typeof o.minted_denom === 'string')
    )
  },
  encode(
    message: Params,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.mintedDenom !== '') {
      writer.uint32(10).string(message.mintedDenom)
    }
    return writer
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseParams()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.mintedDenom = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams()
    message.mintedDenom = object.mintedDenom ?? ''
    return message
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams()
    if (object.minted_denom !== undefined && object.minted_denom !== null) {
      message.mintedDenom = object.minted_denom
    }
    return message
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {}
    obj.minted_denom =
      message.mintedDenom === '' ? undefined : message.mintedDenom
    return obj
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value)
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: 'osmosis/poolincentives/params',
      value: Params.toAmino(message)
    }
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value)
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish()
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: '/osmosis.poolincentives.v1beta1.Params',
      value: Params.encode(message).finish()
    }
  }
}
GlobalDecoderRegistry.register(Params.typeUrl, Params)
GlobalDecoderRegistry.registerAminoProtoMapping(
  Params.aminoType,
  Params.typeUrl
)
function createBaseLockableDurationsInfo(): LockableDurationsInfo {
  return {
    lockableDurations: []
  }
}
export const LockableDurationsInfo = {
  typeUrl: '/osmosis.poolincentives.v1beta1.LockableDurationsInfo',
  aminoType: 'osmosis/poolincentives/lockable-durations-info',
  is(o: any): o is LockableDurationsInfo {
    return (
      o &&
      (o.$typeUrl === LockableDurationsInfo.typeUrl ||
        (Array.isArray(o.lockableDurations) &&
          (!o.lockableDurations.length || Duration.is(o.lockableDurations[0]))))
    )
  },
  isSDK(o: any): o is LockableDurationsInfoSDKType {
    return (
      o &&
      (o.$typeUrl === LockableDurationsInfo.typeUrl ||
        (Array.isArray(o.lockable_durations) &&
          (!o.lockable_durations.length ||
            Duration.isSDK(o.lockable_durations[0]))))
    )
  },
  isAmino(o: any): o is LockableDurationsInfoAmino {
    return (
      o &&
      (o.$typeUrl === LockableDurationsInfo.typeUrl ||
        (Array.isArray(o.lockable_durations) &&
          (!o.lockable_durations.length ||
            Duration.isAmino(o.lockable_durations[0]))))
    )
  },
  encode(
    message: LockableDurationsInfo,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    for (const v of message.lockableDurations) {
      Duration.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): LockableDurationsInfo {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseLockableDurationsInfo()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.lockableDurations.push(
            Duration.decode(reader, reader.uint32())
          )
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromPartial(object: Partial<LockableDurationsInfo>): LockableDurationsInfo {
    const message = createBaseLockableDurationsInfo()
    message.lockableDurations =
      object.lockableDurations?.map((e) => Duration.fromPartial(e)) || []
    return message
  },
  fromAmino(object: LockableDurationsInfoAmino): LockableDurationsInfo {
    const message = createBaseLockableDurationsInfo()
    message.lockableDurations =
      object.lockable_durations?.map((e) => Duration.fromAmino(e)) || []
    return message
  },
  toAmino(message: LockableDurationsInfo): LockableDurationsInfoAmino {
    const obj: any = {}
    if (message.lockableDurations) {
      obj.lockable_durations = message.lockableDurations.map((e) =>
        e ? Duration.toAmino(e) : undefined
      )
    } else {
      obj.lockable_durations = message.lockableDurations
    }
    return obj
  },
  fromAminoMsg(object: LockableDurationsInfoAminoMsg): LockableDurationsInfo {
    return LockableDurationsInfo.fromAmino(object.value)
  },
  toAminoMsg(message: LockableDurationsInfo): LockableDurationsInfoAminoMsg {
    return {
      type: 'osmosis/poolincentives/lockable-durations-info',
      value: LockableDurationsInfo.toAmino(message)
    }
  },
  fromProtoMsg(message: LockableDurationsInfoProtoMsg): LockableDurationsInfo {
    return LockableDurationsInfo.decode(message.value)
  },
  toProto(message: LockableDurationsInfo): Uint8Array {
    return LockableDurationsInfo.encode(message).finish()
  },
  toProtoMsg(message: LockableDurationsInfo): LockableDurationsInfoProtoMsg {
    return {
      typeUrl: '/osmosis.poolincentives.v1beta1.LockableDurationsInfo',
      value: LockableDurationsInfo.encode(message).finish()
    }
  }
}
GlobalDecoderRegistry.register(
  LockableDurationsInfo.typeUrl,
  LockableDurationsInfo
)
GlobalDecoderRegistry.registerAminoProtoMapping(
  LockableDurationsInfo.aminoType,
  LockableDurationsInfo.typeUrl
)
function createBaseDistrInfo(): DistrInfo {
  return {
    totalWeight: '',
    records: []
  }
}
export const DistrInfo = {
  typeUrl: '/osmosis.poolincentives.v1beta1.DistrInfo',
  aminoType: 'osmosis/poolincentives/distr-info',
  is(o: any): o is DistrInfo {
    return (
      o &&
      (o.$typeUrl === DistrInfo.typeUrl ||
        (typeof o.totalWeight === 'string' &&
          Array.isArray(o.records) &&
          (!o.records.length || DistrRecord.is(o.records[0]))))
    )
  },
  isSDK(o: any): o is DistrInfoSDKType {
    return (
      o &&
      (o.$typeUrl === DistrInfo.typeUrl ||
        (typeof o.total_weight === 'string' &&
          Array.isArray(o.records) &&
          (!o.records.length || DistrRecord.isSDK(o.records[0]))))
    )
  },
  isAmino(o: any): o is DistrInfoAmino {
    return (
      o &&
      (o.$typeUrl === DistrInfo.typeUrl ||
        (typeof o.total_weight === 'string' &&
          Array.isArray(o.records) &&
          (!o.records.length || DistrRecord.isAmino(o.records[0]))))
    )
  },
  encode(
    message: DistrInfo,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.totalWeight !== '') {
      writer.uint32(10).string(message.totalWeight)
    }
    for (const v of message.records) {
      DistrRecord.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DistrInfo {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseDistrInfo()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.totalWeight = reader.string()
          break
        case 2:
          message.records.push(DistrRecord.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromPartial(object: Partial<DistrInfo>): DistrInfo {
    const message = createBaseDistrInfo()
    message.totalWeight = object.totalWeight ?? ''
    message.records =
      object.records?.map((e) => DistrRecord.fromPartial(e)) || []
    return message
  },
  fromAmino(object: DistrInfoAmino): DistrInfo {
    const message = createBaseDistrInfo()
    if (object.total_weight !== undefined && object.total_weight !== null) {
      message.totalWeight = object.total_weight
    }
    message.records = object.records?.map((e) => DistrRecord.fromAmino(e)) || []
    return message
  },
  toAmino(message: DistrInfo): DistrInfoAmino {
    const obj: any = {}
    obj.total_weight =
      message.totalWeight === '' ? undefined : message.totalWeight
    if (message.records) {
      obj.records = message.records.map((e) =>
        e ? DistrRecord.toAmino(e) : undefined
      )
    } else {
      obj.records = message.records
    }
    return obj
  },
  fromAminoMsg(object: DistrInfoAminoMsg): DistrInfo {
    return DistrInfo.fromAmino(object.value)
  },
  toAminoMsg(message: DistrInfo): DistrInfoAminoMsg {
    return {
      type: 'osmosis/poolincentives/distr-info',
      value: DistrInfo.toAmino(message)
    }
  },
  fromProtoMsg(message: DistrInfoProtoMsg): DistrInfo {
    return DistrInfo.decode(message.value)
  },
  toProto(message: DistrInfo): Uint8Array {
    return DistrInfo.encode(message).finish()
  },
  toProtoMsg(message: DistrInfo): DistrInfoProtoMsg {
    return {
      typeUrl: '/osmosis.poolincentives.v1beta1.DistrInfo',
      value: DistrInfo.encode(message).finish()
    }
  }
}
GlobalDecoderRegistry.register(DistrInfo.typeUrl, DistrInfo)
GlobalDecoderRegistry.registerAminoProtoMapping(
  DistrInfo.aminoType,
  DistrInfo.typeUrl
)
function createBaseDistrRecord(): DistrRecord {
  return {
    gaugeId: BigInt(0),
    weight: ''
  }
}
export const DistrRecord = {
  typeUrl: '/osmosis.poolincentives.v1beta1.DistrRecord',
  aminoType: 'osmosis/poolincentives/distr-record',
  is(o: any): o is DistrRecord {
    return (
      o &&
      (o.$typeUrl === DistrRecord.typeUrl ||
        (typeof o.gaugeId === 'bigint' && typeof o.weight === 'string'))
    )
  },
  isSDK(o: any): o is DistrRecordSDKType {
    return (
      o &&
      (o.$typeUrl === DistrRecord.typeUrl ||
        (typeof o.gauge_id === 'bigint' && typeof o.weight === 'string'))
    )
  },
  isAmino(o: any): o is DistrRecordAmino {
    return (
      o &&
      (o.$typeUrl === DistrRecord.typeUrl ||
        (typeof o.gauge_id === 'bigint' && typeof o.weight === 'string'))
    )
  },
  encode(
    message: DistrRecord,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.gaugeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.gaugeId)
    }
    if (message.weight !== '') {
      writer.uint32(18).string(message.weight)
    }
    return writer
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DistrRecord {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseDistrRecord()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.gaugeId = reader.uint64()
          break
        case 2:
          message.weight = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromPartial(object: Partial<DistrRecord>): DistrRecord {
    const message = createBaseDistrRecord()
    message.gaugeId =
      object.gaugeId !== undefined && object.gaugeId !== null
        ? BigInt(object.gaugeId.toString())
        : BigInt(0)
    message.weight = object.weight ?? ''
    return message
  },
  fromAmino(object: DistrRecordAmino): DistrRecord {
    const message = createBaseDistrRecord()
    if (object.gauge_id !== undefined && object.gauge_id !== null) {
      message.gaugeId = BigInt(object.gauge_id)
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight
    }
    return message
  },
  toAmino(message: DistrRecord): DistrRecordAmino {
    const obj: any = {}
    obj.gauge_id =
      message.gaugeId !== BigInt(0) ? message.gaugeId.toString() : undefined
    obj.weight = message.weight === '' ? undefined : message.weight
    return obj
  },
  fromAminoMsg(object: DistrRecordAminoMsg): DistrRecord {
    return DistrRecord.fromAmino(object.value)
  },
  toAminoMsg(message: DistrRecord): DistrRecordAminoMsg {
    return {
      type: 'osmosis/poolincentives/distr-record',
      value: DistrRecord.toAmino(message)
    }
  },
  fromProtoMsg(message: DistrRecordProtoMsg): DistrRecord {
    return DistrRecord.decode(message.value)
  },
  toProto(message: DistrRecord): Uint8Array {
    return DistrRecord.encode(message).finish()
  },
  toProtoMsg(message: DistrRecord): DistrRecordProtoMsg {
    return {
      typeUrl: '/osmosis.poolincentives.v1beta1.DistrRecord',
      value: DistrRecord.encode(message).finish()
    }
  }
}
GlobalDecoderRegistry.register(DistrRecord.typeUrl, DistrRecord)
GlobalDecoderRegistry.registerAminoProtoMapping(
  DistrRecord.aminoType,
  DistrRecord.typeUrl
)
function createBasePoolToGauge(): PoolToGauge {
  return {
    poolId: BigInt(0),
    gaugeId: BigInt(0),
    duration: Duration.fromPartial({})
  }
}
export const PoolToGauge = {
  typeUrl: '/osmosis.poolincentives.v1beta1.PoolToGauge',
  aminoType: 'osmosis/poolincentives/pool-to-gauge',
  is(o: any): o is PoolToGauge {
    return (
      o &&
      (o.$typeUrl === PoolToGauge.typeUrl ||
        (typeof o.poolId === 'bigint' &&
          typeof o.gaugeId === 'bigint' &&
          Duration.is(o.duration)))
    )
  },
  isSDK(o: any): o is PoolToGaugeSDKType {
    return (
      o &&
      (o.$typeUrl === PoolToGauge.typeUrl ||
        (typeof o.pool_id === 'bigint' &&
          typeof o.gauge_id === 'bigint' &&
          Duration.isSDK(o.duration)))
    )
  },
  isAmino(o: any): o is PoolToGaugeAmino {
    return (
      o &&
      (o.$typeUrl === PoolToGauge.typeUrl ||
        (typeof o.pool_id === 'bigint' &&
          typeof o.gauge_id === 'bigint' &&
          Duration.isAmino(o.duration)))
    )
  },
  encode(
    message: PoolToGauge,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId)
    }
    if (message.gaugeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.gaugeId)
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolToGauge {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePoolToGauge()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64()
          break
        case 2:
          message.gaugeId = reader.uint64()
          break
        case 3:
          message.duration = Duration.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromPartial(object: Partial<PoolToGauge>): PoolToGauge {
    const message = createBasePoolToGauge()
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? BigInt(object.poolId.toString())
        : BigInt(0)
    message.gaugeId =
      object.gaugeId !== undefined && object.gaugeId !== null
        ? BigInt(object.gaugeId.toString())
        : BigInt(0)
    message.duration =
      object.duration !== undefined && object.duration !== null
        ? Duration.fromPartial(object.duration)
        : undefined
    return message
  },
  fromAmino(object: PoolToGaugeAmino): PoolToGauge {
    const message = createBasePoolToGauge()
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id)
    }
    if (object.gauge_id !== undefined && object.gauge_id !== null) {
      message.gaugeId = BigInt(object.gauge_id)
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration)
    }
    return message
  },
  toAmino(message: PoolToGauge): PoolToGaugeAmino {
    const obj: any = {}
    obj.pool_id =
      message.poolId !== BigInt(0) ? message.poolId.toString() : undefined
    obj.gauge_id =
      message.gaugeId !== BigInt(0) ? message.gaugeId.toString() : undefined
    obj.duration = message.duration
      ? Duration.toAmino(message.duration)
      : undefined
    return obj
  },
  fromAminoMsg(object: PoolToGaugeAminoMsg): PoolToGauge {
    return PoolToGauge.fromAmino(object.value)
  },
  toAminoMsg(message: PoolToGauge): PoolToGaugeAminoMsg {
    return {
      type: 'osmosis/poolincentives/pool-to-gauge',
      value: PoolToGauge.toAmino(message)
    }
  },
  fromProtoMsg(message: PoolToGaugeProtoMsg): PoolToGauge {
    return PoolToGauge.decode(message.value)
  },
  toProto(message: PoolToGauge): Uint8Array {
    return PoolToGauge.encode(message).finish()
  },
  toProtoMsg(message: PoolToGauge): PoolToGaugeProtoMsg {
    return {
      typeUrl: '/osmosis.poolincentives.v1beta1.PoolToGauge',
      value: PoolToGauge.encode(message).finish()
    }
  }
}
GlobalDecoderRegistry.register(PoolToGauge.typeUrl, PoolToGauge)
GlobalDecoderRegistry.registerAminoProtoMapping(
  PoolToGauge.aminoType,
  PoolToGauge.typeUrl
)
function createBaseAnyPoolToInternalGauges(): AnyPoolToInternalGauges {
  return {
    poolToGauge: []
  }
}
export const AnyPoolToInternalGauges = {
  typeUrl: '/osmosis.poolincentives.v1beta1.AnyPoolToInternalGauges',
  aminoType: 'osmosis/poolincentives/any-pool-to-internal-gauges',
  is(o: any): o is AnyPoolToInternalGauges {
    return (
      o &&
      (o.$typeUrl === AnyPoolToInternalGauges.typeUrl ||
        (Array.isArray(o.poolToGauge) &&
          (!o.poolToGauge.length || PoolToGauge.is(o.poolToGauge[0]))))
    )
  },
  isSDK(o: any): o is AnyPoolToInternalGaugesSDKType {
    return (
      o &&
      (o.$typeUrl === AnyPoolToInternalGauges.typeUrl ||
        (Array.isArray(o.pool_to_gauge) &&
          (!o.pool_to_gauge.length || PoolToGauge.isSDK(o.pool_to_gauge[0]))))
    )
  },
  isAmino(o: any): o is AnyPoolToInternalGaugesAmino {
    return (
      o &&
      (o.$typeUrl === AnyPoolToInternalGauges.typeUrl ||
        (Array.isArray(o.pool_to_gauge) &&
          (!o.pool_to_gauge.length || PoolToGauge.isAmino(o.pool_to_gauge[0]))))
    )
  },
  encode(
    message: AnyPoolToInternalGauges,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    for (const v of message.poolToGauge) {
      PoolToGauge.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): AnyPoolToInternalGauges {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseAnyPoolToInternalGauges()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 2:
          message.poolToGauge.push(PoolToGauge.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromPartial(
    object: Partial<AnyPoolToInternalGauges>
  ): AnyPoolToInternalGauges {
    const message = createBaseAnyPoolToInternalGauges()
    message.poolToGauge =
      object.poolToGauge?.map((e) => PoolToGauge.fromPartial(e)) || []
    return message
  },
  fromAmino(object: AnyPoolToInternalGaugesAmino): AnyPoolToInternalGauges {
    const message = createBaseAnyPoolToInternalGauges()
    message.poolToGauge =
      object.pool_to_gauge?.map((e) => PoolToGauge.fromAmino(e)) || []
    return message
  },
  toAmino(message: AnyPoolToInternalGauges): AnyPoolToInternalGaugesAmino {
    const obj: any = {}
    if (message.poolToGauge) {
      obj.pool_to_gauge = message.poolToGauge.map((e) =>
        e ? PoolToGauge.toAmino(e) : undefined
      )
    } else {
      obj.pool_to_gauge = message.poolToGauge
    }
    return obj
  },
  fromAminoMsg(
    object: AnyPoolToInternalGaugesAminoMsg
  ): AnyPoolToInternalGauges {
    return AnyPoolToInternalGauges.fromAmino(object.value)
  },
  toAminoMsg(
    message: AnyPoolToInternalGauges
  ): AnyPoolToInternalGaugesAminoMsg {
    return {
      type: 'osmosis/poolincentives/any-pool-to-internal-gauges',
      value: AnyPoolToInternalGauges.toAmino(message)
    }
  },
  fromProtoMsg(
    message: AnyPoolToInternalGaugesProtoMsg
  ): AnyPoolToInternalGauges {
    return AnyPoolToInternalGauges.decode(message.value)
  },
  toProto(message: AnyPoolToInternalGauges): Uint8Array {
    return AnyPoolToInternalGauges.encode(message).finish()
  },
  toProtoMsg(
    message: AnyPoolToInternalGauges
  ): AnyPoolToInternalGaugesProtoMsg {
    return {
      typeUrl: '/osmosis.poolincentives.v1beta1.AnyPoolToInternalGauges',
      value: AnyPoolToInternalGauges.encode(message).finish()
    }
  }
}
GlobalDecoderRegistry.register(
  AnyPoolToInternalGauges.typeUrl,
  AnyPoolToInternalGauges
)
GlobalDecoderRegistry.registerAminoProtoMapping(
  AnyPoolToInternalGauges.aminoType,
  AnyPoolToInternalGauges.typeUrl
)
function createBaseConcentratedPoolToNoLockGauges(): ConcentratedPoolToNoLockGauges {
  return {
    poolToGauge: []
  }
}
export const ConcentratedPoolToNoLockGauges = {
  typeUrl: '/osmosis.poolincentives.v1beta1.ConcentratedPoolToNoLockGauges',
  aminoType: 'osmosis/poolincentives/concentrated-pool-to-no-lock-gauges',
  is(o: any): o is ConcentratedPoolToNoLockGauges {
    return (
      o &&
      (o.$typeUrl === ConcentratedPoolToNoLockGauges.typeUrl ||
        (Array.isArray(o.poolToGauge) &&
          (!o.poolToGauge.length || PoolToGauge.is(o.poolToGauge[0]))))
    )
  },
  isSDK(o: any): o is ConcentratedPoolToNoLockGaugesSDKType {
    return (
      o &&
      (o.$typeUrl === ConcentratedPoolToNoLockGauges.typeUrl ||
        (Array.isArray(o.pool_to_gauge) &&
          (!o.pool_to_gauge.length || PoolToGauge.isSDK(o.pool_to_gauge[0]))))
    )
  },
  isAmino(o: any): o is ConcentratedPoolToNoLockGaugesAmino {
    return (
      o &&
      (o.$typeUrl === ConcentratedPoolToNoLockGauges.typeUrl ||
        (Array.isArray(o.pool_to_gauge) &&
          (!o.pool_to_gauge.length || PoolToGauge.isAmino(o.pool_to_gauge[0]))))
    )
  },
  encode(
    message: ConcentratedPoolToNoLockGauges,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    for (const v of message.poolToGauge) {
      PoolToGauge.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): ConcentratedPoolToNoLockGauges {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseConcentratedPoolToNoLockGauges()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.poolToGauge.push(PoolToGauge.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromPartial(
    object: Partial<ConcentratedPoolToNoLockGauges>
  ): ConcentratedPoolToNoLockGauges {
    const message = createBaseConcentratedPoolToNoLockGauges()
    message.poolToGauge =
      object.poolToGauge?.map((e) => PoolToGauge.fromPartial(e)) || []
    return message
  },
  fromAmino(
    object: ConcentratedPoolToNoLockGaugesAmino
  ): ConcentratedPoolToNoLockGauges {
    const message = createBaseConcentratedPoolToNoLockGauges()
    message.poolToGauge =
      object.pool_to_gauge?.map((e) => PoolToGauge.fromAmino(e)) || []
    return message
  },
  toAmino(
    message: ConcentratedPoolToNoLockGauges
  ): ConcentratedPoolToNoLockGaugesAmino {
    const obj: any = {}
    if (message.poolToGauge) {
      obj.pool_to_gauge = message.poolToGauge.map((e) =>
        e ? PoolToGauge.toAmino(e) : undefined
      )
    } else {
      obj.pool_to_gauge = message.poolToGauge
    }
    return obj
  },
  fromAminoMsg(
    object: ConcentratedPoolToNoLockGaugesAminoMsg
  ): ConcentratedPoolToNoLockGauges {
    return ConcentratedPoolToNoLockGauges.fromAmino(object.value)
  },
  toAminoMsg(
    message: ConcentratedPoolToNoLockGauges
  ): ConcentratedPoolToNoLockGaugesAminoMsg {
    return {
      type: 'osmosis/poolincentives/concentrated-pool-to-no-lock-gauges',
      value: ConcentratedPoolToNoLockGauges.toAmino(message)
    }
  },
  fromProtoMsg(
    message: ConcentratedPoolToNoLockGaugesProtoMsg
  ): ConcentratedPoolToNoLockGauges {
    return ConcentratedPoolToNoLockGauges.decode(message.value)
  },
  toProto(message: ConcentratedPoolToNoLockGauges): Uint8Array {
    return ConcentratedPoolToNoLockGauges.encode(message).finish()
  },
  toProtoMsg(
    message: ConcentratedPoolToNoLockGauges
  ): ConcentratedPoolToNoLockGaugesProtoMsg {
    return {
      typeUrl: '/osmosis.poolincentives.v1beta1.ConcentratedPoolToNoLockGauges',
      value: ConcentratedPoolToNoLockGauges.encode(message).finish()
    }
  }
}
GlobalDecoderRegistry.register(
  ConcentratedPoolToNoLockGauges.typeUrl,
  ConcentratedPoolToNoLockGauges
)
GlobalDecoderRegistry.registerAminoProtoMapping(
  ConcentratedPoolToNoLockGauges.aminoType,
  ConcentratedPoolToNoLockGauges.typeUrl
)
