[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/sdk/src/transaction/versioned)

The `autodoc/solana/sdk/src/transaction/versioned` folder contains code for handling versioned transactions in the Solana SDK. It provides a `VersionedTransaction` struct that supports multiple versions of messages, which is useful when dealing with transactions that may have different message formats or structures.

The `VersionedTransaction` struct is defined in the `mod.rs` file and provides several methods for creating, signing, and verifying transactions. For example, you can create a new `VersionedTransaction` by signing a given `VersionedMessage` with the provided keypairs using the `try_new()` method. The `sanitize()` method checks the validity of the transaction, ensuring the number of required signatures matches the number of signatures provided and that the signatures correspond to the static account keys.

The `sanitized.rs` file defines the `SanitizedVersionedTransaction` struct, which wraps a sanitized `VersionedTransaction` to provide a safe API. It implements the `TryFrom` trait for `VersionedTransaction`, allowing you to convert a `VersionedTransaction` to a `SanitizedVersionedTransaction` if the transaction is valid. The `get_message()` method returns a reference to the `SanitizedVersionedMessage` contained in the transaction.

Here's an example of how this code might be used:

```rust
use solana_sdk::transaction::versioned::{VersionedTransaction, SanitizedVersionedTransaction};
use solana_sdk::transaction::versioned::message::VersionedMessage;
use solana_sdk::signature::Keypair;
use std::convert::TryFrom;

// Create a VersionedMessage
let message = VersionedMessage::new(/* ... */);

// Sign the message with keypairs
let keypairs = vec![Keypair::new(), Keypair::new()];
let versioned_transaction = VersionedTransaction::try_new(&keypairs, message).unwrap();

// Convert the VersionedTransaction to a SanitizedVersionedTransaction
let sanitized_versioned_transaction = SanitizedVersionedTransaction::try_from(versioned_transaction).unwrap();

// Get the sanitized message
let sanitized_message = sanitized_versioned_transaction.get_message();
```

This code is used in the Solana SDK to provide a safe API for working with versioned transactions. It ensures that transactions are properly sanitized before they are used, which helps prevent errors and vulnerabilities in the system. Developers can use this code to create and validate transactions in their Solana applications, ensuring compatibility with different message formats and structures.
