import { GeneratedType } from '@cosmjs/proto-signing'
import {
  cosmosProtoRegistry,
  osmosisProtoRegistry,
  ibcProtoRegistry,
  cosmwasmProtoRegistry
} from 'osmojs'
import { strideProtoRegistry } from 'stridejs'

import type { GeneratedEntry, GeneratedRegistry } from './supported-modules'

const registries = [
  cosmosProtoRegistry,
  osmosisProtoRegistry,
  ibcProtoRegistry,
  cosmwasmProtoRegistry,
  strideProtoRegistry
]

/**
 *
 */
export class Registry {
  private registry: Record<string, GeneratedType>
  /**
   *
   */
  constructor() {
    this.registry = {}
  }
  /**
   *
   */
  register([typeUrl, generatedType]: GeneratedEntry) {
    this.registry[typeUrl] = generatedType
  }
  /**
   *
   */
  concat(registry: GeneratedRegistry) {
    registry.forEach((entry) => this.register(entry))
  }
  /**
   *
   */
  getAllGeneratedTypes(): [string, GeneratedType][] {
    return Object.entries(this.registry).map(([typeUrl, generatedType]) => [
      typeUrl,
      generatedType
    ])
  }
  /**
   *
   */
  private static defaultRegistry: Registry | null = null
  /**
   *
   */
  public static default(): Registry {
    if (Registry.defaultRegistry === null) {
      const registry = new Registry()
      registries.map((reg) => registry.concat(reg))
      Registry.defaultRegistry = registry
    }
    return Registry.defaultRegistry
  }
}
