The `tx.rs` file is part of the Clockwork project and is responsible for managing and executing transactions. It defines the `TxExecutor` struct, which contains the plugin configuration, a list of executable threads, a transaction history, a count of dropped threads, and a keypair. The file also defines two metadata structs: `ExecutableThreadMetadata` and `TransactionMetadata`.

The `TxExecutor` struct has several methods:

- `new`: Creates a new `TxExecutor` instance with the given configuration.
- `execute_txs`: Executes transactions for the provided thread pubkeys at the given slot. It indexes the threads as executable, drops threads that cross the simulation failure threshold, processes retries, and executes thread transactions.
- `process_retries`: Processes retries for transactions that have failed or are missing signatures.
- `execute_pool_rotate_txs`: Executes pool rotation transactions.
- `get_executable_threads`: Returns a list of executable threads based on the worker's position in the delegate pool and the current slot.
- `execute_thread_exec_txs`: Executes thread execution transactions in parallel.
- `try_build_thread_exec_tx`: Tries to build a thread execution transaction and returns the transaction if successful.
- `increment_simulation_failure`: Increments the simulation failure count for a given thread pubkey.
- `dedupe_tx`: Checks if a transaction is a duplicate of a previously submitted transaction.
- `simulate_tx`: Simulates a transaction and returns an error if the simulation fails.
- `submit_tx`: Submits a transaction to the network.

The `exponential_backoff_threshold` function calculates the threshold for exponential backoff based on the number of simulation failures.

The `TPU_CLIENT` is a lazy static instance of `TpuClient` that connects to the local RPC and WebSocket URLs. It is used for simulating and submitting transactions.
## Questions: 
 1. Question: What is the purpose of the `TxExecutor` struct?
   Answer: The `TxExecutor` struct is responsible for managing and executing transactions in the clockwork project. It maintains the configuration, executable threads, transaction history, dropped threads, and keypair for the transactions.

2. Question: What is the role of the `execute_txs` function in the `TxExecutor` struct?
   Answer: The `execute_txs` function is responsible for processing and executing transactions. It indexes the provided threads as executable, drops threads that cross the simulation failure threshold, processes retries, and executes thread transactions based on the worker's position in the delegate pool.

3. Question: What is the purpose of the `process_retries` function in the `TxExecutor` struct?
   Answer: The `process_retries` function is responsible for handling transaction retries. It checks the transaction signatures and their corresponding threads, and requeues retriable threads while dropping transactions from history.

4. Question: How does the `try_build_thread_exec_tx` function work in the `TxExecutor` struct?
   Answer: The `try_build_thread_exec_tx` function attempts to build a thread execution transaction. It fetches the thread, builds the transaction, and checks for duplicates. If successful, it returns the thread pubkey and transaction; otherwise, it increments the simulation failure count and returns None.

5. Question: What is the purpose of the `exponential_backoff_threshold` function?
   Answer: The `exponential_backoff_threshold` function calculates the threshold for exponential backoff based on the metadata of an executable thread. It is used to determine when a thread should be executed, taking into account the number of simulation failures.
    