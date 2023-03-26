[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/rpc-client/src/nonblocking)

The `mod.rs` file located at `solana/rpc-client/src/nonblocking/mod.rs` exports the `rpc_client` module, which is responsible for enabling non-blocking communication with a Solana RPC server. This is crucial for maintaining application responsiveness, as blocking the main thread can lead to unresponsiveness.

The `rpc_client` module offers several functions that facilitate asynchronous communication between clients and the Solana RPC server. One such function is `RpcClient::send`, which sends a request to the server and returns a `Future` that resolves to the response when it is received. This allows the client to execute other code while waiting for the response.

Here's an example of how the `RpcClient::send` function can be used:

```rust
use solana_rpc_client::RpcClient;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let rpc_client = RpcClient::new("https://api.mainnet-beta.solana.com".to_string());
    let block_commitment = rpc_client.get_block_commitment(0).await?;
    println!("{:?}", block_commitment);
    Ok(())
}
```

In this example, a new `RpcClient` instance is created with the URL of the Solana RPC server. The `get_block_commitment` function is then called on the `rpc_client` instance, which sends a request to the server and returns a `Future` that resolves to the response. The `await` keyword is used to wait for the response to be received before printing it to the console.

In summary, the `rpc_client` module provides essential functionality for Solana clients by enabling non-blocking communication with the Solana network. This ensures that applications remain responsive while interacting with the network, improving the overall user experience.
