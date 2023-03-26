[View code on GitHub](https://github.com/solana-labs/solana/blob/master/sdk/program/src/message/sanitized.rs)

The `sanitized.rs` file contains code for handling sanitized messages in the Solana project. It provides a way to create and manipulate sanitized messages, which are a cleaned and validated version of the original messages. The main purpose of this code is to ensure that the messages are safe to use and do not contain any invalid data or duplicate account keys.

There are two types of sanitized messages: `LegacyMessage` and `SanitizedMessage`. The `LegacyMessage` struct represents a sanitized legacy message, while the `SanitizedMessage` enum can represent either a sanitized legacy message or a sanitized version #0 message with dynamically loaded addresses.

The `LegacyMessage` struct provides methods to check for duplicates, determine if a key is called as a program, check if the upgradeable loader is present, get the list of account keys, and check if an account is writable.

The `SanitizedMessage` enum provides methods to create a new sanitized message from a sanitized versioned message, check for duplicates, get the message header, get the fee payer, get the recent blockhash, get the instructions, get the account keys, check if a key is passed to a program, check if an account is invoked, check if an account is writable, check if an account is a signer, decompile instructions, check if the upgradeable loader is present, get the list of signers for an instruction, and get the durable nonce.

Here's an example of creating a sanitized message from a legacy message:

```rust
let legacy_message = legacy::Message {
    header: MessageHeader {
        num_required_signatures: 2,
        num_readonly_signed_accounts: 1,
        num_readonly_unsigned_accounts: 1,
    },
    account_keys: vec![key0, key1, key2, key3],
    ..legacy::Message::default()
};

let sanitized_message = SanitizedMessage::try_from(legacy_message).unwrap();
```

In the larger project, this code is used to handle and manipulate sanitized messages, ensuring that they are safe to use and do not contain any invalid data or duplicate account keys.
## Questions: 
 1. **Question**: What is the purpose of the `LegacyMessage` struct and how does it differ from the `SanitizedMessage` enum?
   **Answer**: The `LegacyMessage` struct represents a legacy message format, which includes a message and a cache of writable account flags. The `SanitizedMessage` enum, on the other hand, represents a sanitized message that can be either a legacy message (`LegacyMessage`) or a version 0 message (`v0::LoadedMessage`) with dynamically loaded addresses.

2. **Question**: How does the `try_new` function work for creating a `SanitizedMessage` from a `SanitizedVersionedMessage`?
   **Answer**: The `try_new` function takes a `SanitizedVersionedMessage` and an `AddressLoader` as input. It matches the version of the input message and creates a `SanitizedMessage` accordingly. If the input message uses address tables, it attempts to look up the address for each table index using the provided `AddressLoader`.

3. **Question**: What is the purpose of the `is_non_loader_key` function and how does it determine if an account key is a non-loader key?
   **Answer**: The `is_non_loader_key` function checks if the account key at the specified index is not invoked as a program or, if invoked, is passed to a program. It returns true if the account key meets these conditions, indicating that it is a non-loader key. It checks this by calling the `is_invoked` and `is_key_passed_to_program` functions.