[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/rpc-client)

The `solana/rpc-client` folder contains the implementation of the Solana project's RPC client, which is responsible for sending requests to a Solana node's JSON RPC API and receiving responses. The client can be used with different transport mechanisms, such as HTTP or WebSocket, to provide flexibility in how RPC requests are sent to the Solana node.

The `HttpSender` struct in `http_sender.rs` provides a non-blocking `RpcSender` over HTTP. It can be used to send `RpcRequest` requests to a specified URL and handles successful and unsuccessful responses, as well as rate-limited requests. The `StatsUpdater` struct updates the `RpcTransportStats` instance with request statistics.

```rust
use solana_rpc_client::{RpcClient, HttpSender};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let sender = HttpSender::new("https://api.mainnet-beta.solana.com".to_string());
    let rpc_client = RpcClient::new_with_sender(sender);
    let balance = rpc_client.get_balance("some_account_address").await?;
    println!("Balance: {}", balance);
    Ok(())
}
```

The `MockSender` in `mock_sender.rs` provides a non-blocking `RpcSender` implementation for unit testing the `RpcClient`. It can return default or custom responses for various `RpcRequest` values, making it easier to test different scenarios without making actual network requests.

```rust
use solana_rpc_client::{RpcClient, MockSender};
use solana_rpc_client_api::request::RpcRequest;
use serde_json::json;

fn main() {
    let url = "succeeds";
    let mut mocks = Mocks::default();
    mocks.insert(RpcRequest::GetAccountInfo, json!({"key": "value"}));
    let mock_sender = MockSender::new_with_mocks(url, mocks);
    let rpc_client = RpcClient::new_with_sender(mock_sender);
    // Use rpc_client for testing
}
```

The `RpcSender` trait in `rpc_sender.rs` provides a low-level transport layer for making RPC calls to a Solana node. It is primarily used by the `RpcClient` struct, which provides a higher-level interface for interacting with the Solana node.

```rust
use solana_rpc_client::rpc_sender::{RpcSender, RpcTransportStats};
use solana_rpc_client_api::request::RpcRequest;

async fn send_rpc_request(sender: &dyn RpcSender) {
    let request = RpcRequest::GetAccountInfo;
    let params = serde_json::json!({
        "account": "some_account_address",
    });
    let result = sender.send(request, params).await;
    // Handle result
}

fn get_transport_stats(sender: &dyn RpcSender) -> RpcTransportStats {
    sender.get_transport_stats()
}

fn get_transport_url(sender: &dyn RpcSender) -> String {
    sender.url()
}
```

The `spinner.rs` file provides a spinner progress bar using the `indicatif` crate, which can be used to indicate that a process is running and give the user an idea of how long it will take to complete.

```rust
use solana_rpc_client::spinner::new_progress_bar;

fn main() {
    let progress_bar = new_progress_bar();
    for i in 0..42 {
        progress_bar.set_message(&format!("Processing item {}", i));
        progress_bar.inc(1);
        std::thread::sleep(std::time::Duration::from_millis(100));
    }
    progress_bar.finish_with_message("Done!");
}
```

In summary, the `solana/rpc-client/src` folder provides essential functionality for Solana clients by enabling communication with the Solana network. This ensures that applications remain responsive while interacting with the network, improving the overall user experience.
