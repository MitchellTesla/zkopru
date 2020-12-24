/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from 'bn.js'
import { Contract, ContractOptions } from 'web3-eth-contract'
import { EventLog } from 'web3-core'
import { EventEmitter } from 'events'
import { ContractEvent, Callback, TransactionObject, BlockType } from './types'

interface EventOptions {
  filter?: object
  fromBlock?: BlockType
  topics?: string[]
}

export class IBurnAuction extends Contract {
  constructor(jsonInterface: any[], address?: string, options?: ContractOptions)

  clone(): IBurnAuction

  methods: {
    startBlock(): TransactionObject<string>

    roundLength(): TransactionObject<string>

    highestBidForRound(
      roundIndex: number | string,
    ): TransactionObject<{
      0: string
      1: string
    }>

    transferBalance(recipient: string): TransactionObject<void>

    register(): TransactionObject<void>

    setUrl(url: string): TransactionObject<void>

    clearUrl(): TransactionObject<void>

    earliestBiddableRound(): TransactionObject<string>

    latestBiddableRound(): TransactionObject<string>

    coordinatorUrls(url: string): TransactionObject<string>

    bid(roundIndex: number | string): TransactionObject<void>

    multiBid(
      _minBid: number | string,
      maxBid: number | string,
      startRound: number | string,
      endRound: number | string,
    ): TransactionObject<void>

    minNextBid(roundIndex: number | string): TransactionObject<string>

    calcRoundStart(roundIndex: number | string): TransactionObject<string>

    coordinatorForRound(roundIndex: number | string): TransactionObject<string>

    activeCoordinator(): TransactionObject<string>

    currentRound(): TransactionObject<string>

    shouldOpenRound(): TransactionObject<boolean>

    isRoundOpen(): TransactionObject<boolean>

    pendingBalances(owner: string): TransactionObject<string>
  }

  events: {
    NewHighBid: ContractEvent<{
      roundIndex: string
      bidder: string
      amount: string
      0: string
      1: string
      2: string
    }>
    UrlUpdate: ContractEvent<string>
    allEvents: (options?: EventOptions, cb?: Callback<EventLog>) => EventEmitter
  }
}
