[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/pubsub-client)

The `solana/pubsub-client` folder contains a Rust implementation of a client for the Solana PubSub protocol. This client allows developers to subscribe to and receive updates from various Solana programs, such as the Solana validator, the Solana vote program, and the Solana storage program. It can also be used to subscribe to updates from custom programs that implement the PubSub protocol.

The main module, `solana/pubsub-client/src/lib.rs`, provides two sub-modules: `nonblocking` and `pubsub_client`. The `nonblocking` sub-module offers a non-blocking TCP stream for communicating with a Solana PubSub server, while the `pubsub_client` sub-module contains the actual implementation of the PubSub client.

Here's an example of how the PubSub client can be used to subscribe to updates from the Solana validator:

```rust
use solana_pubsub_client::pubsub_client::PubsubClient;

let validator_pubkey = "4tLWUdXfZyCQZK5vJG1WqfZzK6PZvE7Zg6J8zvJZzJ9y".parse().unwrap();
let client = PubsubClient::new("127.0.0.1:8001".parse().unwrap());
let subscription_id = client.validator_subscribe(validator_pubkey).unwrap();

loop {
    let update = client.receive_update().unwrap();
    if update.subscription == subscription_id {
        println!("Received update: {:?}", update);
    }
}
```

The `nonblocking` sub-module, located in `solana/pubsub-client/src/nonblocking/mod.rs`, provides a non-blocking client for the Solana PubSub service. It utilizes the `tokio` library to implement asynchronous I/O operations, allowing clients to receive updates without blocking the main thread. The `PubsubClient` struct is the primary entry point for the API, offering methods for connecting to the PubSub service, subscribing to topics, and receiving updates.

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

Overall, the `solana/pubsub-client/src` module provides a useful tool for interacting with the Solana PubSub protocol and subscribing to updates from various Solana programs. The non-blocking functionality ensures that applications remain responsive and efficient while processing incoming PubSub messages.
