[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/runtime/src/bank)

The `solana/runtime/src/bank` folder contains code related to the `Bank` struct, which is responsible for maintaining the ledger and processing transactions in the Solana blockchain. This folder includes implementations for loading addresses, managing sysvar cache, and handling account state changes in transactions.

In `address_lookup_table.rs`, the `Bank` struct implements the `AddressLoader` trait, providing a way to load addresses for a transaction message using an address lookup table. This allows the Solana runtime to efficiently load the necessary account data for a transaction. Example usage:

```rust
let bank = Bank::new(&genesis_config);
let message = Message::new(&[instruction], Some(&payer.pubkey()));
let address_table_lookups = message.get_address_table_lookups();
let loaded_addresses = bank.load_addresses(&address_table_lookups).unwrap();
```

The `builtin_programs.rs` file contains test functions that ensure the `Bank` struct can handle built-in program feature transitions and starting up from a snapshot correctly, which are critical for maintaining the integrity of the network.

The `metrics.rs` file reports various metrics related to the Solana blockchain's bank, such as timing information for operations when a new epoch or bank is created. These metrics help monitor the performance of the bank and identify areas for improvement. Example usage:

```rust
let epoch_timings = NewEpochTimings { ... };
let rewards_metrics = RewardsMetrics { ... };
report_new_epoch_metrics(1, 2, 3, epoch_timings, rewards_metrics);

let bank_timings = NewBankTimings { ... };
report_new_bank_metrics(4, 5, 6, bank_timings);
```

The `sysvar_cache.rs` file implements a cache for system variables (sysvars) used by the Solana blockchain, providing a fast and efficient way to access these frequently accessed sysvars. The `SysvarCache` is a member of the `Bank` struct and is used extensively throughout the Solana codebase.

The `transaction_account_state_info.rs` file provides functionality for managing the state of accounts involved in a transaction, ensuring that the rent-exempt account rules are not violated. Example usage:

```rust
let bank = Bank::default();
let transaction_context = TransactionContext::default();
let message = SanitizedMessage::default();
let account_state_infos = bank.get_transaction_account_state_info(&transaction_context, &message);

let pre_state_infos = vec![TransactionAccountStateInfo { rent_state: None }];
let post_state_infos = vec![TransactionAccountStateInfo { rent_state: None }];
let result = bank.verify_transaction_account_state_changes(&pre_state_infos, &post_state_infos, &transaction_context);
assert!(result.is_ok());
```

Overall, the code in this folder plays a crucial role in managing the ledger, processing transactions, and maintaining the integrity of the Solana blockchain.
