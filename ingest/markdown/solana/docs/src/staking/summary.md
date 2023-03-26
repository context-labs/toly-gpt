[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/docs/src/staking)

The `staking` folder in the Solana project contains the code and documentation related to the staking functionality of the Solana blockchain. Staking is an essential part of the Proof of Stake (PoS) consensus mechanism, which allows users to lock up their tokens in a stake account and earn rewards for participating in the network's validation process.

### Files

1. **`staking.md`**: This file provides an overview of the staking process in Solana, including the concepts of stake accounts, delegation, and rewards. It also explains how to create and manage stake accounts using the Solana command-line interface (CLI) and provides examples of common staking operations.

2. **`stake-accounts.md`**: This file dives deeper into the details of stake accounts, including their structure, lifecycle, and the different states they can be in (e.g., inactive, active, or deactivated). It also explains how to perform various stake account operations, such as creating, delegating, and splitting stake accounts, using the Solana CLI.

3. **`stake-program.md`**: This file documents the on-chain program that manages stake accounts and their associated operations. It provides a detailed explanation of the program's instructions, such as `Initialize`, `DelegateStake`, and `Withdraw`, and how they are used to interact with stake accounts.

4. **`stake-state.md`**: This file describes the data structures used to represent stake accounts and their states on the Solana blockchain. It explains the `StakeState` enum, which defines the different states a stake account can be in, and the `Stake` struct, which holds the account's data, such as its delegated stake, credits, and rewards.

5. **`stake-weighted.md`**: This file explains how the Solana blockchain calculates the stake-weighted vote for a given validator, which is used to determine the validator's rewards. It also provides an example of how to calculate the stake-weighted vote using the Solana CLI.

### Subfolders

There are no subfolders in the `staking` folder.

### Usage

The code and documentation in the `staking` folder are essential for developers who want to understand and interact with the staking functionality of the Solana blockchain. For example, a developer might use the information in `staking.md` to learn how to create a stake account and delegate their tokens to a validator:

```bash
solana create-stake-account my-stake-account 1000
solana delegate-stake my-stake-account validator-pubkey
```

They might also refer to `stake-accounts.md` to learn how to split a stake account into multiple accounts with different amounts of delegated stake:

```bash
solana create-stake-account new-stake-account 500 --from=my-stake-account
```

Finally, a developer might use the information in `stake-program.md` and `stake-state.md` to build custom tools or integrations that interact with the Solana staking program and stake accounts on the blockchain.
