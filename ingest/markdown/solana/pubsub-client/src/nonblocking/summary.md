[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/pubsub-client/src/nonblocking)

The `solana/pubsub-client/src/nonblocking/mod.rs` file exports the `pubsub_client` module, which is responsible for implementing a non-blocking client for the Solana PubSub service. The Solana PubSub service is a messaging system that enables clients to subscribe to specific topics and receive updates when new messages are published to those topics. The `pubsub_client` module provides an API for clients to connect to the PubSub service, subscribe to topics, and receive updates in a non-blocking manner.

The module utilizes the `tokio` library to implement asynchronous I/O operations, allowing clients to receive updates without blocking the main thread. The `PubsubClient` struct is the primary entry point for the API, offering methods for connecting to the PubSub service, subscribing to topics, and receiving updates.

Here's an example of how to use the `PubsubClient` API to subscribe to a topic and receive updates:

```rust
use solana_pubsub_client::PubsubClient;

#[tokio::main]
async fn main() {
    let client = PubsubClient::new("ws://localhost:8900").await.unwrap();
    let subscription = client.subscribe("my_topic").await.unwrap();

    loop {
        let message = subscription.recv().await.unwrap();
        println!("Received message: {:?}", message);
    }
}
```

In this example, we create a new `PubsubClient` instance and connect to the PubSub service running on `localhost:8900`. We then subscribe to the `my_topic` topic and enter a loop to receive updates. The `recv` method on the subscription object returns the next message received on the topic, blocking until a message is available.

The `pubsub_client` module provides a convenient and efficient way for Solana clients to subscribe to PubSub topics and receive updates in a non-blocking manner. This functionality is particularly useful for applications that need to process real-time updates from the Solana network, such as monitoring account balances, tracking transaction confirmations, or observing changes in smart contract state. By using the non-blocking `PubsubClient`, developers can ensure that their applications remain responsive and efficient while processing incoming PubSub messages.
