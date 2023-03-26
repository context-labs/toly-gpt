[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/sdk/program/src/nonce/state)

The `solana/sdk/program/src/nonce/state` folder contains Rust code that defines the state of a durable transaction nonce account in the Solana blockchain. A nonce is a number used only once, and a durable nonce is a nonce that is valid across multiple transactions. This code ensures that transactions are executed only once, preventing replay attacks.

The `current.rs` file defines two structs: `DurableNonce` and `Data`. `DurableNonce` is a wrapper around a `Hash` type, representing a durable nonce value derived from a valid previous blockhash. `Data` contains the address of the account that signs transactions using the nonce account, the durable nonce value, and the fee calculator associated with the blockhash. The `State` enum represents the state of a durable transaction nonce account, with two variants: `Uninitialized` and `Initialized`. The code provides methods to create a new durable transaction nonce data, get the cost per signature for the next transaction to use this nonce, and get the serialized size of the nonce state. It also provides a method to create a new initialized durable transaction nonce state.

The `mod.rs` file exports three items: `Data`, `DurableNonce`, and `State`. It also defines the `Versions` enum, representing different versions of the nonce state. The `Versions` enum has two variants: `Legacy` and `Current`. The `Legacy` variant is used for nonces created before the current version, while the `Current` variant is used for nonces created with the current version. The `Versions` enum has several methods, including `new`, `verify_recent_blockhash`, `upgrade`, and `authorize`. The `new` method creates a new `Versions` instance with the `Current` variant, while the `verify_recent_blockhash` method checks if the recent blockhash field in a transaction verifies and returns the nonce account data if so. The `upgrade` method upgrades legacy nonces out of chain blockhash domains, and the `authorize` method updates the authority pubkey on the nonce account.

Here's an example of how this code might be used:

```rust
use solana_sdk::nonce::state::{Data, DurableNonce, State, Versions};

// Create a new durable transaction nonce state
let nonce_state = State::new_initialized(&authority_pubkey, &recent_blockhash, &fee_calculator);

// Get the cost per signature for the next transaction to use this nonce
let cost_per_signature = nonce_state.get_cost_per_signature();

// Verify the recent blockhash and get the nonce account data
let nonce_account_data = versions.verify_recent_blockhash(&recent_blockhash);
```

In summary, the code in the `solana/sdk/program/src/nonce/state` folder defines the data structure and methods for a durable transaction nonce account in the Solana blockchain. The `Versions` enum and its methods handle different versions of the nonce state, while the `Data`, `DurableNonce`, and `State` structs represent the nonce account data. This code is essential for preventing replay attacks on transactions and ensuring that transactions are executed only once.
