[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/net)

The `autodoc/solana/net` folder contains scripts and utilities essential for managing the Solana network, including node deployment, configuration, and maintenance. These scripts work together to ensure the smooth operation of the network and provide a flexible and configurable way to set up different types of nodes.

The `common.sh` file provides a set of common utilities used by other scripts in the `net` directory to perform tasks related to network configuration and management. These utilities include functions for setting up SSH options, loading configuration files, encoding strings for use in URLs, and clearing the current cluster configuration.

The `init-metrics.sh` script creates a testnet dev metrics database for the Solana project. It takes command-line arguments to specify the database name, username, and whether to create or delete the database. The script also uses a configuration file to read the InfluxDB host and other parameters.

The `scp.sh` script provides a wrapper around the `scp` command to enable easy file transfer between network nodes in the Solana project. It simplifies the process of transferring files between nodes by automatically adding the necessary options to access network nodes. For example:

```
./scp.sh file.txt node1:/path/to/destination
```

The `ssh.sh` script allows users to easily connect to a Solana node via SSH, without having to remember the IP address of the node or the SSH options required to connect. For example:

```
$ ./ssh.sh 192.168.1.100
```

The `remote` subfolder contains scripts essential for deploying, managing, and maintaining remote nodes in the Solana network. These scripts include `cleanup.sh` for cleaning up remote nodes, `remote-client.sh` for running a Solana client remotely, `remote-deploy-update.sh` for deploying updates to the Solana network, `remote-node-wait-init.sh` for waiting for a remote Solana node to finish initializing, `remote-node.sh` for setting up and configuring remote nodes, and `remote-sanity.sh` for performing sanity checks on a Solana network.

For example, to deploy a validator node using the local deployment method, with the entrypoint IP set to `192.168.1.1` and a total of 5 nodes in the network, you would use the `remote-node.sh` script:

```bash
./remote-node.sh -d local -t validator -i 192.168.1.1 -n 5
```

In summary, the `autodoc/solana/net` folder contains essential scripts and utilities for managing the Solana network. These scripts work together to ensure the smooth operation of the network, providing a flexible and configurable way to set up different types of nodes, transfer files, and perform network maintenance tasks.
