[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/banks-client/src)

The `solana/banks-client/src` folder provides a client for interacting with the ledger state from the perspective of an arbitrary validator. The main component in this folder is the `BanksClient` struct, which offers methods for sending and processing transactions, querying account information, and interacting with the cluster.

To create a new `BanksClient`, use the `start_tcp_client()` function, which returns a `BanksClient` instance connected to the specified address. The `BanksClient` struct provides various methods for interacting with the ledger state, such as:

- `send_transaction()`: Sends a transaction and returns immediately. The server will resend the transaction until it is accepted by the cluster or the transaction's blockhash expires.
- `process_transaction()`: Sends a transaction and returns after the transaction has been rejected or reached the given level of commitment.
- `get_account()`: Returns the account at the given address at the time of the most recent root slot. If the account is not found, None is returned.
- `get_balance()`: Returns the balance in lamports of an account at the given address at the time of the most recent root slot.
- `get_transaction_status()`: Returns the status of a transaction with a signature matching the transaction's first signature. Returns None if the transaction is not found.

For example, to send a transaction and wait for it to be processed, you can use the following code:

```rust
let transaction = Transaction::new(...);
let mut banks_client = start_tcp_client(addr).await?;
banks_client.process_transaction(transaction).await?;
```

Additionally, the `BanksClient` struct provides methods with `_with_context` and `_with_commitment` suffixes, which allow for more fine-grained control over the context and commitment level used for the request. These methods are generally more cumbersome to use and may change over time, so they are not documented.

The `error.rs` file contains the implementation of the `BanksClientError` enum and its associated methods. This enum represents the errors that can occur while interacting with the Solana banks client. The purpose of this code is to provide a standardized way of handling errors that can occur during the execution of a transaction. The `BanksClientError` enum has five variants, each representing a different type of error that can occur. The `unwrap` method is used to extract the `TransactionError` from a `BanksClientError`. The `From` trait is implemented for both `io::Error` and `TransportError`, allowing a `BanksClientError` to be converted into either an `io::Error` or a `TransportError`.

Overall, this code provides a standardized way of handling errors that can occur during the execution of a transaction. By using the `BanksClientError` enum, callers can easily determine the type of error that occurred and handle it appropriately.
