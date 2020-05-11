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

export class ZkOptimisticRollUp extends Contract {
  constructor(jsonInterface: any[], address?: string, options?: ContractOptions)
  clone(): ZkOptimisticRollUp
  methods: {
    CHALLENGE_PERIOD(): TransactionObject<string>

    MAX_UTXO_PER_TREE(): TransactionObject<string>

    MAX_WITHDRAWAL_PER_TREE(): TransactionObject<string>

    MINIMUM_STAKE(): TransactionObject<string>

    NULLIFIER_TREE_DEPTH(): TransactionObject<string>

    REF_DEPTH(): TransactionObject<string>

    UTXO_SUB_TREE_DEPTH(): TransactionObject<string>

    UTXO_SUB_TREE_SIZE(): TransactionObject<string>

    UTXO_TREE_DEPTH(): TransactionObject<string>

    WITHDRAWAL_SUB_TREE_DEPTH(): TransactionObject<string>

    WITHDRAWAL_SUB_TREE_SIZE(): TransactionObject<string>

    WITHDRAWAL_TREE_DEPTH(): TransactionObject<string>

    allowedMigrants(arg0: string): TransactionObject<boolean>

    committedDeposits(
      massDepositHash: string | number[],
    ): TransactionObject<string>

    finalizedUTXOs(utxoRoot: string | number[]): TransactionObject<boolean>

    getVk(
      numOfInputs: number | string,
      numOfOutputs: number | string,
    ): TransactionObject<{
      alfa1: string[]
      beta2: string[][]
      gamma2: string[][]
      delta2: string[][]
      ic: string[][]
      0: string[]
      1: string[][]
      2: string[][]
      3: string[][]
      4: string[][]
    }>

    latest(): TransactionObject<string>

    massDepositId(): TransactionObject<string>

    migrations(migrationHash: string | number[]): TransactionObject<boolean>

    parentOf(header: string | number[]): TransactionObject<string>

    proposals(
      proposalId: string | number[],
    ): TransactionObject<{
      header: string
      challengeDue: string
      slashed: boolean
      0: string
      1: string
      2: boolean
    }>

    proposers(
      addr: string,
    ): TransactionObject<{
      stake: string
      reward: string
      exitAllowance: string
      0: string
      1: string
      2: string
    }>

    proxied(arg0: string | number[]): TransactionObject<string>

    snapshotTimestamp(): TransactionObject<string>

    stagedDeposits(): TransactionObject<{
      merged: string
      fee: string
      0: string
      1: string
    }>

    stagedSize(): TransactionObject<string>

    utxoRootOf(header: string | number[]): TransactionObject<string>

    withdrawables(
      idx: number | string,
    ): TransactionObject<{
      root: string
      index: string
      0: string
      1: string
    }>

    withdrawn(leaf: string | number[]): TransactionObject<boolean>

    registerVk(
      numOfInputs: number | string,
      numOfOutputs: number | string,
      alfa1: (number | string)[],
      beta2: (number | string)[][],
      gamma2: (number | string)[][],
      delta2: (number | string)[][],
      ic: (number | string)[][],
    ): TransactionObject<void>

    makeUserInteractable(addr: string): TransactionObject<void>

    makeCoordinatable(addr: string): TransactionObject<void>

    makeRollUpable(addr: string): TransactionObject<void>

    makeChallengeable(
      depositChallenge: string,
      headerChallenge: string,
      migrationChallenge: string,
      rollUpChallenge: string,
      txChallenge: string,
    ): TransactionObject<void>

    makeMigratable(addr: string): TransactionObject<void>

    allowMigrants(migrants: string[]): TransactionObject<void>

    completeSetup(): TransactionObject<void>
  }
  events: {
    allEvents: (options?: EventOptions, cb?: Callback<EventLog>) => EventEmitter
  }
}
