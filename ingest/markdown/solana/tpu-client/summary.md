[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/tpu-client)

The `solana/tpu-client` folder provides a Transaction Processing Unit (TPU) client for the Solana blockchain network, responsible for submitting transactions and receiving responses. It contains two sub-modules: `nonblocking` and `tpu_client`, offering both non-blocking and blocking implementations.

The `lib.rs` file imports the `solana_metrics` crate for collecting and reporting metrics about the TPU client's performance. This module can be used to build applications that interact with the Solana network, such as wallets, decentralized exchanges, and other blockchain-based applications.

The `tpu_client.rs` file defines the `TpuClient` struct, responsible for sending transactions directly to the current leader's TPU port over UDP. The client uses RPC to determine the current leader and fetch node contact information. The `TpuClient` struct provides several methods for sending transactions, including individual transactions, wire transactions, and batches of transactions. It can be configured with a custom fanout size.

The `nonblocking` subfolder contains code for non-blocking communication with a TPU in the Solana blockchain network. The main components are the `TpuClient` struct and the `LeaderTpuService` struct. The `TpuClient` struct represents a connection to a TPU and provides methods for sending transactions and receiving responses. It uses asynchronous I/O operations from the `tokio` library to communicate with the TPU and sends transactions to the current and upcoming leader TPUs according to the fanout size.

```rust
let rpc_client = Arc::new(RpcClient::new("http://localhost:8899".to_string()));
let websocket_url = "ws://localhost:8900";
let config = TpuClientConfig { fanout_slots: 2 };
let connection_manager = ConnectionManager::new();
let tpu_client = TpuClient::new(rpc_client, websocket_url, config, connection_manager).await?;
```

```rust
let transaction = Transaction::new_unsigned(message);
tpu_client.send_transaction(&transaction).await;
```

The `LeaderTpuService` struct is responsible for updating the leader TPU cache with new information about the current leader, upcoming leaders, and their TPU socket addresses. It does this by periodically fetching the latest leader schedule, cluster nodes, and epoch information from the RPC client and updating the `LeaderTpuCache` accordingly.

In summary, the `solana/tpu-client/src` folder provides essential functionality for the Solana blockchain network by enabling both blocking and non-blocking communication with TPUs. This helps to ensure that the network remains fast and responsive even under heavy load. The `TpuClient` and `LeaderTpuService` structs are the main components, providing methods for sending transactions and managing leader TPU information.
