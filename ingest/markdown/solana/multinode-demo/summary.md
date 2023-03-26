[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/multinode-demo)

The `multinode-demo` folder in the Solana project contains a set of scripts and tools for running a local Solana cluster for development and testing purposes. These scripts automate various tasks, such as setting up validator nodes, delegating stake, and benchmarking transaction processing speed.

For example, the `bench-tps.sh` script runs the `solana-bench-tps` command to benchmark the transaction processing speed of a Solana network. It can be run with default or custom arguments, allowing users to easily test the network's performance:

```bash
./bench-tps.sh --entrypoint 192.168.1.1:8001 --duration 120 --tx_count 100000
```

The `bootstrap-validator.sh` script sets up and starts the bootstrap validator node, which is responsible for creating the initial blocks of the blockchain and propagating them to other nodes in the network. This script is essential for creating and maintaining the bootstrap validator node:

```bash
./bootstrap-validator.sh
```

The `delegate-stake.sh` script automates the process of delegating stake to a validator in the Solana network. This is useful for users who want to assign stake to a validator and receive a portion of the rewards earned by the validator:

```bash
./delegate-stake.sh --stake 100 --rpc-url http://localhost:8899 --label my-validator
```

The `faucet.sh` script starts an instance of the Solana faucet, which provides new users with a small amount of SOL tokens to get started on the network:

```bash
./faucet.sh --url http://localhost:8899
```

The `setup-from-mainnet-beta.sh` and `setup.sh` scripts are used to set up a bootstrap validator node for the Solana network. They generate keypairs for the validator's accounts, create the genesis block, and initialize the validator node:

```bash
./setup-from-mainnet-beta.sh
./setup.sh
```

The `validator-x.sh` and `validator.sh` scripts start Solana validator nodes with custom labels and configurations. These scripts are useful for managing multiple validator nodes in a network:

```bash
./validator-x.sh --identity ~/validator-keypair.json
./validator.sh --ledger /path/to/ledger --identity /path/to/identity.json --vote-account /path/to/vote-account.json --entrypoint entrypoint_hostname
```

In summary, the `multinode-demo` folder provides a set of scripts and tools that make it easier to set up, manage, and test a local Solana cluster. These scripts automate various tasks, such as setting up validator nodes, delegating stake, and benchmarking transaction processing speed, making it easier for developers to work with the Solana network.
