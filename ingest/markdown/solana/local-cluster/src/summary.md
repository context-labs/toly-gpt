[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/local-cluster/src)

The `solana-local-cluster` folder contains code for managing and testing Solana clusters in a local environment. This functionality is crucial for developers to test their Solana applications and ensure they work correctly in production.

The `cluster.rs` file defines a `Cluster` trait and related structs for managing a cluster of Solana validators. It provides methods for adding and removing nodes, restarting nodes, and retrieving information about nodes. For example, the `get_validator_client` method returns a `ThinClient` instance for a given validator node, allowing interaction with the Solana blockchain from outside the cluster.

The `lib.rs` file serves as a module containing several sub-modules related to local cluster functionality. It includes the `cluster` module for creating and managing Solana clusters, the `cluster_tests` module for testing the `cluster` module, the `local_cluster` module for creating and managing a local Solana cluster, the `local_cluster_snapshot_utils` module for working with local cluster snapshots, and the `validator_configs` module for defining validator configurations.

Example usage of `LocalCluster`:

```rust
use solana_local_cluster::LocalCluster;

fn main() {
    let cluster = LocalCluster::new(&[100; 32], 10_000, 10);
    // Start the cluster
    cluster.run().unwrap();

    // Run tests against the cluster
    // ...

    // Stop the cluster
    cluster.close().unwrap();
}
```

The `local_cluster_snapshot_utils.rs` file provides utility functions for working with snapshot archives in a Solana local cluster. It includes methods like `wait_for_next_full_snapshot` and `wait_for_next_incremental_snapshot` that wait for the next snapshot archive to be generated, ensuring the cluster has the latest snapshot data before performing certain operations.

The `validator_configs.rs` file contains functions for creating and cloning validator configurations, which specify the settings and parameters for a validator node in the Solana network. The `make_identical_validator_configs` function, for example, creates multiple validator configurations with the same settings, useful for creating multiple validator nodes with identical configurations in a test environment.

Example usage of `make_identical_validator_configs`:

```rust
use solana_core::validator::ValidatorConfig;
use solana_local_cluster::local_cluster::{ClusterConfig, LocalCluster};
use solana_sdk::signature::{Keypair, Signer};

fn main() {
    let validator_config = ValidatorConfig::default();
    let num_nodes = 3;
    let validator_configs = make_identical_validator_configs(&validator_config, num_nodes);

    let mut cluster_config = ClusterConfig {
        validator_configs,
        ..ClusterConfig::default()
    };

    let cluster = LocalCluster::new(&mut cluster_config, Keypair::new().into(), None);
    // ...
}
```

In summary, the `solana-local-cluster` folder provides a powerful set of tools for testing and debugging Solana applications in a local environment, simulating the behavior of a real Solana cluster, and ensuring applications work correctly in production.
