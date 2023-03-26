[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/rpc-client-nonce-utils/src)

The `solana/rpc-client-nonce-utils/src` folder contains code for handling blockhash queries and durable transaction nonce accounts in the Solana project. It provides utility functions for querying blockhashes and fee calculators from the Solana cluster or a nonce account, as well as retrieving and deserializing durable transaction nonce accounts.

The `blockhash_query.rs` file defines the `BlockhashQuery` enum, which is used to determine the source of the blockhash and fee calculator, either from the cluster or a nonce account. For example, when using the `BlockhashQuery::All(Source)` variant, the `get_blockhash_and_fee_calculator` method will return the blockhash and fee calculator from the specified source (either the cluster or a nonce account).

```rust
let source = Source::NonceAccount(nonce_account_pubkey);
let blockhash = source.get_blockhash(&rpc_client, commitment_config).await?;
```

The `lib.rs` file provides functions for getting and deserializing nonce accounts, as well as performing basic checks on the accounts to ensure they have nonce-like properties. The `get_account` and `get_account_with_commitment` functions retrieve a nonce account from the network and return an error if any of the checks from `account_identity_ok` fail.

```rust
let nonce_account = get_account_with_commitment(&rpc_client, &nonce_pubkey, commitment_config).unwrap();
```

The `nonblocking` subfolder contains code for handling blockhash queries and durable transaction nonce accounts in a non-blocking manner. The `blockhash_query.rs` file defines two enums, `Source` and `BlockhashQuery`, along with their associated methods for querying and validating blockhashes. The `mod.rs` file provides functions for getting and deserializing nonce accounts, as well as performing basic checks on the accounts to ensure they have nonce-like properties.

```rust
let account = rpc_client.get_account(&nonce_account_pubkey)?;
let state = state_from_account(&account)?;
let nonce_data = data_from_account(&account)?;

if let State::Initialized(ref data) = state {
    let transaction = Transaction::new_with_nonce(
        &[instruction],
        &message_account_pubkey,
        &nonce_account_pubkey,
        &data.blockhash,
        &signer_keypair,
        &nonce_authority_keypair,
    );
}
```

In summary, the code in this folder provides utilities for handling blockhash queries and durable transaction nonce accounts in the Solana project. These utilities can be used in the larger Solana project to fetch and validate blockhashes for various operations, such as transaction signing and nonce management, as well as retrieving and deserializing durable transaction nonce accounts.
