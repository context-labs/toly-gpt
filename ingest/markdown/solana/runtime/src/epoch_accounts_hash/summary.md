[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/runtime/src/epoch_accounts_hash)

The `solana/runtime/src/epoch_accounts_hash` folder contains code for managing the state of the epoch accounts hash (EAH) calculation in the Solana blockchain. The EAH is a hash of all accounts in a bank at a specific slot, which is stored in the bank's header and used to verify the integrity of the accounts in the bank.

The `manager.rs` file defines the `Manager` struct, which is responsible for managing the state of the EAH calculation. The `Manager` struct has three states: `Invalid`, `InFlight`, and `Valid`. These states represent the initial state of the EAH, when an EAH calculation is requested and in progress, and when the EAH calculation is complete and valid, respectively. The `Manager` struct provides methods to manage the state of the EAH calculation, such as `set_in_flight`, `set_valid`, `wait_get_epoch_accounts_hash`, and `try_get_epoch_accounts_hash`.

Here's an example of how the `Manager` struct can be used to get the epoch accounts hash:

```rust
let manager = Manager::new_valid(epoch_accounts_hash, slot);
let epoch_accounts_hash = manager.wait_get_epoch_accounts_hash();
```

The `utils.rs` file provides utility functions and types for EAH, such as determining whether EAH is enabled for the current epoch, calculating the EAH calculation start and stop slots, and checking whether a bank is in the calculation window for EAH. The `CalculationInfo` struct in this file contains all the EAH calculation information for a specific epoch, including the epoch, number of slots in the epoch, first and last slots in the epoch, and the computed values for the calculation info.

In the larger Solana project, the `Manager` struct and utility functions in the `epoch_accounts_hash` folder are used to manage the state of the EAH calculation and ensure that the EAH is always up-to-date and accurate. This is critical for the proper functioning of the Solana blockchain, as the EAH is used to store the state of all accounts at the end of an epoch and verify the integrity of the accounts in the bank.
