[View code on GitHub](https://github.com/solana-labs/solana/blob/master/ci/localnet-sanity.sh)

The `localnet-sanity.sh` script is part of the Solana project and is responsible for starting a local cluster and running sanity checks on it. The script provides various options to configure the cluster, such as the number of iterations to run sanity checks, restarting the cluster after a specified number of iterations, enabling or disabling leader rotation, adding extra validator nodes, and reusing existing node/ledger configurations from a previous sanity run.

The script starts by defining some default values for the options and then processes the command-line arguments to update these values. It then sources some utility functions from other scripts in the project and defines an array of nodes to be started in the cluster. The nodes include a bootstrap validator and a regular validator, with the option to add extra validator nodes if specified.

The `startNodes` function is responsible for starting the nodes in the cluster. It starts the nodes one by one, waiting for the bootstrap validator to initialize before starting the other validators. The function also captures the process IDs (PIDs) and log files of the nodes for later use.

The `killNodes` function is responsible for stopping the nodes in the cluster. It first tries to use the RPC exit API to cleanly exit the first two nodes and then kills the remaining nodes using their PIDs.

The `rollingNodeRestart` function is used to restart the nodes in the cluster incrementally, stopping and restarting nodes one by one with a delay between each restart.

The main loop of the script runs the sanity checks for the specified number of iterations. In each iteration, it checks the node count, transaction count, and runs the wallet sanity script. If the restart interval is specified, the script restarts the cluster either by using the `rollingNodeRestart` function or by killing and starting the nodes again.

Finally, the script kills the nodes, verifies the ledger, and reports the success or failure of the sanity checks.
## Questions: 
 1. **Question**: What is the purpose of the `rollingNodeRestart` function?
   **Answer**: The `rollingNodeRestart` function is responsible for restarting the nodes in the cluster one by one, with a delay between each restart. This ensures that the remaining cluster nodes will hit the CRDS_GOSSIP_PULL_CRDS_TIMEOUT_MS (currently 15 seconds) for the node that was just stopped.

2. **Question**: How does the script handle the case when the transaction count is not advancing?
   **Answer**: The script checks if the last transaction count is greater than or equal to the current transaction count. If this condition is met, it means the transaction count is not advancing, and the script will print an error message and call the `flag_error` function, which will cause the script to exit with a failure status.

3. **Question**: What is the purpose of the `waitForAllNodesToInit` function?
   **Answer**: The `waitForAllNodesToInit` function is responsible for waiting until all nodes in the cluster have completed their initialization process. It does this by checking for the presence of the `initCompleteFile` for each node, and waiting until all of these files are found before proceeding. This ensures that all nodes are fully initialized before the script continues with its execution.