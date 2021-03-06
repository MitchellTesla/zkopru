/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from 'bn.js'
import { ContractOptions } from 'web3-eth-contract'
import { EventLog } from 'web3-core'
import { EventEmitter } from 'events'
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from './types'

interface EventOptions {
  filter?: object
  fromBlock?: BlockType
  topics?: string[]
}

export interface IUtxoTreeValidator extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions,
  ): IUtxoTreeValidator
  clone(): IUtxoTreeValidator
  methods: {
    validateUTXOIndex(
      blockData: string | number[],
      parentHeader: string | number[],
      deposits: (number | string | BN)[],
    ): NonPayableTransactionObject<{
      slash: boolean
      reason: string
      0: boolean
      1: string
    }>

    validateUTXORoot(
      blockData: string | number[],
      parentHeader: string | number[],
      deposits: (number | string | BN)[],
      initialSiblings: (number | string | BN)[],
    ): NonPayableTransactionObject<{
      slash: boolean
      reason: string
      0: boolean
      1: string
    }>
  }
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter
  }
}
