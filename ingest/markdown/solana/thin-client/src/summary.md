[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/thin-client/src)

The `autodoc/solana/thin-client/src` folder contains the implementation of a lightweight client for interacting with the Solana blockchain network. The main module, `thin_client`, provides a simple and flexible way to interact with the Solana network and handles multiple network endpoints, making it a reliable choice for developers building applications on top of the Solana blockchain.

The `lib.rs` file exports the `thin_client` module, which contains several functions for sending transactions, querying account balances, and retrieving block information from the Solana network. The `Cluster` struct is used to represent a group of Solana nodes that can be used to interact with the network. The `thin_client` module will automatically switch between endpoints if one becomes unavailable. Here's an example of how to use the `thin_client` module to retrieve the balance of a Solana account:

```rust
use solana::thin_client::create_client;
use solana_sdk::pubkey::Pubkey;

fn main() {
    let cluster = vec![
        "https://api.mainnet-beta.solana.com".to_string(),
        "https://solana-api.projectserum.com".to_string(),
    ];
    let client = create_client(cluster);

    let account_pubkey = Pubkey::new(&[1; 32]);
    let balance = client.get_balance(&account_pubkey).unwrap();

    println!("Account balance: {}", balance);
}
```

The `thin_client.rs` file provides the `ThinClient` struct, which interfaces with a server-side TPU (Transaction Processing Unit) and is designed to be used by client code instead of directly writing messages to the network. The `ThinClient` struct has several fields, including a vector of `RpcClient`s for querying the network, a vector of `SocketAddr`s for the TPU addresses, a `ClientOptimizer` for selecting the best client, and a `ConnectionCache` for managing connections.

`ThinClient` provides several methods for interacting with the network, such as `new`, `new_socket_with_timeout`, and `new_from_addrs`, which create a new `ThinClient` instance with the specified RPC and TPU addresses. It also provides methods for sending and confirming transactions, such as `retry_transfer_until_confirmed`, `retry_transfer`, and `send_and_confirm_transaction`.

Example usage:

```rust
let rpc_addr = "127.0.0.1:8899".parse().unwrap();
let tpu_addr = "127.0.0.1:8001".parse().unwrap();
let connection_cache = Arc::new(ConnectionCache::new());
let thin_client = ThinClient::new(rpc_addr, tpu_addr, connection_cache);

let keypair = Keypair::new();
let pubkey = Pubkey::new_unique();
let mut transaction = Transaction::new_unsigned(system_instruction::transfer(
    &keypair.pubkey(),
    &pubkey,
    100,
));

thin_client.retry_transfer(&keypair, &mut transaction, 5).unwrap();
```

In this example, a `ThinClient` instance is created, along with a new keypair and a transaction to transfer 100 lamports from the keypair's account to a new public key. The transfer is then retried up to 5 times using the `retry_transfer` method.
