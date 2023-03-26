[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/docs/src/api/methods)

The `autodoc/solana/docs/src/api/methods` folder contains the documentation for the API methods provided by the Solana project. These methods are essential for developers to interact with the Solana blockchain and perform various operations such as querying account information, sending transactions, and managing programs.

Here's a brief overview of the files in this folder:

1. **getAccountInfo.md**: This file documents the `getAccountInfo` method, which retrieves the account information for a given public key. It includes details about the method's parameters, the expected response format, and example usage.

   Example usage:
   ```javascript
   const solanaWeb3 = require('@solana/web3.js');
   const connection = new solanaWeb3.Connection('https://api.mainnet-beta.solana.com');
   const publicKey = new solanaWeb3.PublicKey('YOUR_PUBLIC_KEY');
   
   connection.getAccountInfo(publicKey).then((accountInfo) => {
     console.log('Account info:', accountInfo);
   });
   ```

2. **sendTransaction.md**: This file documents the `sendTransaction` method, which sends a signed transaction to the Solana network. It covers the method's parameters, the expected response format, and example usage.

   Example usage:
   ```javascript
   const solanaWeb3 = require('@solana/web3.js');
   const connection = new solanaWeb3.Connection('https://api.mainnet-beta.solana.com');
   const transaction = new solanaWeb3.Transaction().add(
     solanaWeb3.SystemProgram.transfer({
       fromPubkey: senderPublicKey,
       toPubkey: recipientPublicKey,
       lamports: 1000000000, // 1 SOL
     })
   );
   
   transaction.sign(senderKeypair);
   connection.sendTransaction(transaction).then((signature) => {
     console.log('Transaction sent with signature:', signature);
   });
   ```

3. **getProgramAccounts.md**: This file documents the `getProgramAccounts` method, which fetches all accounts associated with a specific program ID. It explains the method's parameters, the expected response format, and example usage.

   Example usage:
   ```javascript
   const solanaWeb3 = require('@solana/web3.js');
   const connection = new solanaWeb3.Connection('https://api.mainnet-beta.solana.com');
   const programId = new solanaWeb3.PublicKey('PROGRAM_ID');
   
   connection.getProgramAccounts(programId).then((programAccounts) => {
     console.log('Program accounts:', programAccounts);
   });
   ```

These API methods are crucial for developers to build applications on top of the Solana blockchain. By using these methods, developers can easily interact with the Solana network, query account information, send transactions, and manage programs. The documentation in this folder provides a comprehensive guide for developers to understand and utilize these methods effectively.
