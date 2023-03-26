[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/net/remote)

The `autodoc/solana/net/remote` folder contains scripts that are essential for deploying, managing, and maintaining remote nodes in the Solana network. These scripts are designed to work together to ensure the smooth operation of the Solana network.

The `cleanup.sh` script is responsible for cleaning up remote nodes by terminating all Solana-related processes and resetting network emulation and shaping settings. This script is useful when a remote node is no longer needed or needs to be reset.

The `remote-client.sh` script is used to run a Solana client remotely, with options for configuring the client based on the deployment method, entrypoint IP, client to run, and client type. For example, to run a `solana-bench-tps` client on a remote machine, you would use this script with the appropriate arguments.

The `remote-deploy-update.sh` script deploys updates to the Solana network from a bootstrap validator node. It checks for required files and arguments, sets environment variables, and calls the `solana-install-deploy.sh` script to perform the actual deployment.

The `remote-node-wait-init.sh` script waits for a remote Solana node to finish initializing before continuing with other tasks. This script is likely used as part of a larger deployment or automation process for Solana nodes, ensuring that the node is fully operational and ready to perform its intended functions.

The `remote-node.sh` script is responsible for setting up and configuring remote nodes in the Solana network. It supports different deployment methods and node types, such as validators and blockstreamers. This script is crucial for deploying and managing remote nodes in the network.

The `remote-sanity.sh` script performs sanity checks on a Solana network, ensuring that the network is functioning correctly. It checks the number of validators, the number of nodes, and the RPC API, among other things. This script can be used to diagnose issues with the network and ensure that the network is operating as expected.

Example usage:

```bash
./remote-node.sh -d local -t validator -i 192.168.1.1 -n 5
```

This command deploys a validator node using the local deployment method, with the entrypoint IP set to `192.168.1.1` and a total of 5 nodes in the network.

In summary, the scripts in the `autodoc/solana/net/remote` folder are essential for deploying, managing, and maintaining remote nodes in the Solana network. They work together to ensure the smooth operation of the network and provide a flexible and configurable way to set up different types of nodes.
