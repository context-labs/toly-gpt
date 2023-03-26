[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/watchtower)

The `solana-watchtower` tool, located in the `autodoc/solana/watchtower` folder, is a command-line utility designed to monitor the health of a Solana cluster. It periodically checks the cluster's status and sends notifications if any issues are detected, ensuring the cluster is functioning correctly and alerting the user of any problems.

The core functionality of the watchtower is defined in the `main.rs` file. It contains the `Config` struct, which holds the configuration settings for the watchtower, such as the JSON RPC URL, the interval between checks, the unhealthy threshold, and the validator identity public keys to monitor.

The `get_config()` function is responsible for parsing command-line arguments and setting up the configuration. It uses the `clap` crate to define and validate the arguments, including the JSON RPC URL, the interval between checks, the unhealthy threshold, and the validator identity public keys to monitor.

The `get_cluster_info()` function retrieves the cluster information, such as the transaction count, recent blockhash, vote accounts, and validator balances. It uses the `RpcClient` to make requests to the cluster and returns the results.

The `main()` function sets up the logger, metrics, and notifier, and then enters a loop where it periodically checks the cluster's health. It calls `get_cluster_info()` to retrieve the cluster information and checks for any issues, such as the transaction count not advancing, the recent blockhash not changing, or the validator balances being below the minimum threshold. If any issues are detected, it sends a notification using the `Notifier` and logs the error. If the cluster is healthy, it clears any previous notifications and resets the failure count.

Example usage:

```sh
solana-watchtower --url http://localhost:8899 --interval 60 --unhealthy-threshold 1 --validator-identity <VALIDATOR_IDENTITY_PUBKEY>
```

This command will monitor the specified validator identity on the local cluster, checking every 60 seconds and sending a notification if an issue is detected for more than one consecutive check.

In the larger Solana project, the watchtower tool can be used by developers and validators to monitor the health of their nodes and the overall cluster. This can help identify potential issues early on and ensure the stability and performance of the Solana network.
