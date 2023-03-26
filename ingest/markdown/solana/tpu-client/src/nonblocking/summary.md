[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/tpu-client/src/nonblocking)

The `solana/tpu-client/src/nonblocking` folder contains code for non-blocking communication with a Transaction Processing Unit (TPU) in the Solana blockchain network. This is crucial for maintaining a fast and responsive network, as blocking the main thread can cause delays and slow down the network. The main components of this folder are the `TpuClient` struct and the `LeaderTpuService` struct.

The `TpuClient` struct, defined in `tpu_client.rs`, represents a connection to a TPU and provides methods for sending transactions and receiving responses. It uses asynchronous I/O operations from the `tokio` library to communicate with the TPU. The `TpuClient` also sends transactions to the current and upcoming leader TPUs according to the fanout size, which determines how many upcoming leader TPUs the client should send transactions to.

Here's an example of how to create a new `TpuClient`:

```rust
let rpc_client = Arc::new(RpcClient::new("http://localhost:8899".to_string()));
let websocket_url = "ws://localhost:8900";
let config = TpuClientConfig { fanout_slots: 2 };
let connection_manager = ConnectionManager::new();
let tpu_client = TpuClient::new(rpc_client, websocket_url, config, connection_manager).await?;
```

And here's an example of how to send a transaction using the `TpuClient`:

```rust
let transaction = Transaction::new_unsigned(message);
tpu_client.send_transaction(&transaction).await;
```

The `LeaderTpuService` struct, also defined in `tpu_client.rs`, is responsible for updating the leader TPU cache with new information about the current leader, upcoming leaders, and their TPU socket addresses. It does this by periodically fetching the latest leader schedule, cluster nodes, and epoch information from the RPC client and updating the `LeaderTpuCache` accordingly.

In summary, the `solana/tpu-client/src/nonblocking` folder provides an essential piece of functionality for the Solana blockchain network by enabling non-blocking communication with TPUs. This helps to ensure that the network remains fast and responsive even under heavy load. The `TpuClient` and `LeaderTpuService` structs are the main components of this folder, providing methods for sending transactions and managing leader TPU information.
