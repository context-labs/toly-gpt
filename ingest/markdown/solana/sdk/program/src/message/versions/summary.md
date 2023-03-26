[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/sdk/program/src/message/versions)

The `autodoc/solana/sdk/program/src/message/versions` folder contains code for handling different versions of messages in the Solana project, allowing for backward compatibility and future extensibility. The main component in this folder is the `VersionedMessage` enum, which represents either a legacy message or a version 0 message.

The `VersionedMessage` enum provides methods to interact with the underlying message, such as `sanitize`, `header`, `static_account_keys`, `address_table_lookups`, `is_signer`, `is_maybe_writable`, `is_key_passed_to_program`, `is_invoked`, `is_non_loader_key`, `recent_blockhash`, `set_recent_blockhash`, `instructions`, `serialize`, `hash`, and `hash_raw_message`. These methods allow users to perform various operations on the message, such as sanitizing, accessing headers, checking if an account is a signer, and more.

```rust
use solana_sdk::message::versions::VersionedMessage;
use solana_sdk::instruction::Instruction;
use solana_sdk::pubkey::Pubkey;

let program_id = Pubkey::new_unique();
let account_key = Pubkey::new_unique();
let instruction = Instruction::new_with_bincode(program_id, &0, vec![]);
let message = VersionedMessage::Legacy(LegacyMessage::new(&[instruction], None));
let serialized_message = message.serialize();
```

The `SanitizedVersionedMessage` struct wraps a `VersionedMessage` and provides a safe API for interacting with it. The purpose of this code is to ensure that the `VersionedMessage` is sanitized and safe to use before exposing it to the rest of the program.

```rust
use solana_sdk::message::SanitizedVersionedMessage;

let versioned_message = // create a VersionedMessage
let sanitized_message = SanitizedVersionedMessage::try_from(versioned_message)?;
let instructions = sanitized_message.instructions();
// use instructions
```

The `autodoc/solana/sdk/program/src/message/versions/v0` folder contains code for handling version 0 of the Solana message format. This version introduces the `LoadedMessage` and `LoadedAddresses` structures, which are essential for managing on-chain address lookup tables and read/write permissions of accounts involved in a transaction.

The `LoadedMessage` structure provides several methods to interact with the loaded addresses and their permissions, such as `account_keys()`, `has_duplicates()`, `is_writable()`, `is_signer()`, `is_key_called_as_program()`, and `is_upgradeable_loader_present()`. These methods are useful for validating and processing transactions in the Solana project.

```rust
let tx = VersionedTransaction::try_new(
    VersionedMessage::V0(v0::Message::try_compile(
        &payer.pubkey(),
        &[instruction],
        &[address_lookup_table_account],
        blockhash,
    )?),
    &[payer],
)?;
```

In summary, the code in the `autodoc/solana/sdk/program/src/message/versions` folder provides a flexible and extensible way to handle different versions of messages in the Solana project, allowing for backward compatibility and future growth. The `VersionedMessage` enum, `SanitizedVersionedMessage` struct, and the code in the `v0` subfolder are essential for creating, validating, and processing transactions in the Solana project.
