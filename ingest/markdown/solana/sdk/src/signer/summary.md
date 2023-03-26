[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/sdk/src/signer)

The `signer` module in the Solana SDK provides abstractions and implementations for transaction signers, which are used for signing and verifying messages in the Solana network. The primary interface for digital signature providers is the `Signer` trait, which declares operations such as `pubkey`, `sign_message`, and `is_interactive` that all signers must implement. The module contains several implementations of the `Signer` trait, including `Keypair`, `NullSigner`, `Presigner`, and `Signers`.

The `Keypair` struct, defined in `keypair.rs`, wraps around the `ed25519_dalek::Keypair` struct and provides methods for generating and managing key pairs. It also implements the `Signer` trait, providing methods for signing and verifying messages. Utility functions for reading and writing key pairs to and from files, as well as generating key pairs from seeds, seed phrases, and passphrases are also included.

The `NullSigner` struct, defined in `null_signer.rs`, acts as a placeholder for absentee signers whose `Pubkey` is required to construct a transaction. It implements the `Signer` trait, but does not actually sign any messages. Instead, it returns a default value for the `Signature` struct.

The `Presigner` struct, defined in `presigner.rs`, represents a `Signature` that has been constructed externally. It performs a signature verification against the expected message upon `sign()` requests to affirm its relationship to the `message` bytes. The `Presigner` struct implements the `Signer` trait, providing methods for signing and verifying messages.

The `Signers` trait, defined in `signers.rs`, is a convenience trait for working with mixed collections of `Signer`s. It defines several methods for interacting with a collection of signers, such as `pubkeys`, `try_pubkeys`, `sign_message`, `try_sign_message`, and `is_interactive`. The `Signers` trait is implemented for various types, including arrays, vectors, and slices of `Signer`s, using a macro called `default_keypairs_impl!`.

Example usage of the `Keypair` struct:

```rust
use solana_sdk::signer::keypair::Keypair;

let keypair = Keypair::new();
let message = b"Hello, Solana!";
let signature = keypair.sign_message(message);
```

Example usage of the `NullSigner` struct:

```rust
use solana_sdk::{pubkey::Pubkey, signer::NullSigner};

let absent_pubkey = Pubkey::new_unique();
let null_signer = NullSigner::new(&absent_pubkey);
```

Example usage of the `Presigner` struct:

```rust
use solana_sdk::{pubkey::Pubkey, signer::{Presigner, keypair::Keypair}};

let keypair = Keypair::new();
let message = b"Hello, Solana!";
let signature = keypair.sign_message(message);
let presigner = Presigner::new(&keypair.pubkey(), &signature);
```

Example usage of the `Signers` trait:

```rust
use solana_sdk::{pubkey::Pubkey, signer::{Signers, keypair::Keypair}};

let keypair1 = Keypair::new();
let keypair2 = Keypair::new();
let signers = vec![&keypair1, &keypair2];
let pubkeys = signers.pubkeys();
```

Overall, the `signer` module provides a common interface for digital signature providers to sign transactions and interact with the Solana network.
