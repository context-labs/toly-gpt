[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/rpc-client-nonce-utils/src/nonblocking)

The `solana/rpc-client-nonce-utils/src/nonblocking` folder contains code for handling blockhash queries and durable transaction nonce accounts in a non-blocking manner. This is useful for fetching and validating blockhashes for various operations, such as transaction signing and nonce management, as well as retrieving and deserializing durable transaction nonce accounts.

The `blockhash_query.rs` file defines two enums, `Source` and `BlockhashQuery`, along with their associated methods for querying and validating blockhashes. The `Source` enum has two variants, `Cluster` and `NonceAccount(Pubkey)`, and provides methods for fetching blockhashes from either the cluster or a nonce account. The `BlockhashQuery` enum has three variants, `Static(Hash)`, `Validated(Source, Hash)`, and `Rpc(Source)`, and provides methods for fetching blockhashes based on the variant.

For example, to fetch a blockhash from a nonce account, you can use the following code:

```rust
let source = Source::NonceAccount(nonce_account_pubkey);
let blockhash = source.get_blockhash(&rpc_client, commitment_config).await?;
```

The `mod.rs` file provides functions for getting and deserializing nonce accounts, as well as performing basic checks on the accounts to ensure they have nonce-like properties. The `get_account` and `get_account_with_commitment` functions retrieve a nonce account from the network and return an error if any of the checks from `account_identity_ok` fail. The `state_from_account` and `data_from_account` functions deserialize the state and data of a durable transaction nonce account, respectively.

For example, to check if a nonce account is initialized and create a transaction with a durable nonce, you can use the following code:

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

In summary, the code in this folder provides utilities for handling blockhash queries and durable transaction nonce accounts in a non-blocking manner. These utilities can be used in the larger Solana project to fetch and validate blockhashes for various operations, such as transaction signing and nonce management, as well as retrieving and deserializing durable transaction nonce accounts.
