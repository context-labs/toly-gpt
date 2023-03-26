[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/docs/src/offline-signing)

The `offline-signing` folder in the Solana documentation provides information and examples on how to perform offline signing of transactions. Offline signing is a security feature that allows users to sign transactions on an air-gapped machine, which is not connected to the internet, thus reducing the risk of exposing private keys to potential attackers.

### Files

1. **`guide.md`**: This file serves as a comprehensive guide on how to perform offline signing using Solana's command-line tools. It covers the process of creating a keypair, generating a transaction, signing the transaction offline, and finally submitting the signed transaction to the network. The guide also provides examples and explanations for each step, making it easy for developers to understand and implement offline signing in their projects.

### Subfolders

There are no subfolders in the `offline-signing` folder.

### Usage

The offline signing process in Solana can be broken down into the following steps:

1. **Create a keypair**: First, you need to create a keypair for the offline signer. This can be done using the `solana-keygen` command-line tool. For example:

   ```
   solana-keygen new --outfile offline-signer.json
   ```

   This command generates a new keypair and saves it to the `offline-signer.json` file.

2. **Generate a transaction**: Next, you need to generate a transaction that you want to sign offline. This can be done using the `solana` command-line tool. For example, to transfer 1 SOL from one account to another, you can use the following command:

   ```
   solana transfer --blockhash BLOCKHASH --fee-payer FEE_PAYER --from FROM_ADDRESS --to TO_ADDRESS --amount 1 --sign-only --output-file transaction.json
   ```

   This command generates a transaction to transfer 1 SOL and saves it to the `transaction.json` file. The `--sign-only` flag indicates that the transaction should not be submitted to the network yet.

3. **Sign the transaction offline**: Now, you can move the `transaction.json` and `offline-signer.json` files to an air-gapped machine and sign the transaction using the `solana` command-line tool. For example:

   ```
   solana sign --keypair offline-signer.json --signer FEE_PAYER --blockhash BLOCKHASH --input-file transaction.json --output-file signed_transaction.json
   ```

   This command signs the transaction using the offline signer's keypair and saves the signed transaction to the `signed_transaction.json` file.

4. **Submit the signed transaction**: Finally, you can move the `signed_transaction.json` file back to a machine connected to the internet and submit the signed transaction to the Solana network using the `solana` command-line tool. For example:

   ```
   solana send --input-file signed_transaction.json
   ```

   This command submits the signed transaction to the network, completing the offline signing process.

By following the guide and examples provided in the `offline-signing` folder, developers can implement secure offline signing in their Solana projects, ensuring the safety of their private keys and reducing the risk of attacks.
