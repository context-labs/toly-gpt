[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/banks-server/src)

The `banks-server` folder in the Solana project contains the core implementation for running a Solana bank server and exposing its functionality over a network. The folder consists of three main files: `banks_server.rs`, `lib.rs`, and `rpc_banks_service.rs`.

The `banks_server.rs` file defines the `BanksServer` struct and its associated methods, which are responsible for handling and processing transactions in the Solana project. The `BanksServer` struct contains fields such as `bank_forks`, `block_commitment_cache`, `transaction_sender`, and `poll_signature_status_sleep_duration`. It implements several methods for creating new instances, processing transactions, and fetching account information. The `start_local_server` and `start_tcp_server` functions are used to start local and TCP servers, respectively.

Example of creating a new `BanksServer` instance:

```rust
let banks_server = BanksServer::new(
    bank_forks,
    block_commitment_cache,
    transaction_sender,
    poll_signature_status_sleep_duration,
);
```

Example of starting a local server for testing:

```rust
let local_server = start_local_server(
    bank_forks,
    block_commitment_cache,
    poll_signature_status_sleep_duration,
).await;
```

The `lib.rs` file contains two sub-modules: `banks_server` and `rpc_banks_service`. The `banks_server` sub-module provides the main logic for running a bank server, while the `rpc_banks_service` sub-module contains the logic for running an RPC service that exposes the functionality of the bank server over a network.

Example usage:

```rust
use solana_banks_server::BankServer;
use solana_runtime::bank::Bank;

fn main() {
    let bank = Bank::default();
    let server = BankServer::new(bank, "127.0.0.1:8000".parse().unwrap());
    server.run();
}
```

The `rpc_banks_service.rs` module implements the Solana Banks RPC API. The `RpcBanksService` struct provides methods for creating a new instance, starting and stopping the TCP server, and interacting with the Solana blockchain by sending requests to the TCP server.

In summary, the `banks-server` folder provides the backbone for running a Solana bank server and exposing its functionality over a network. It can be used as a starting point for building more complex Solana applications that require a running bank server, such as decentralized applications that interact with the Solana blockchain by making RPC calls to a remote bank server.
