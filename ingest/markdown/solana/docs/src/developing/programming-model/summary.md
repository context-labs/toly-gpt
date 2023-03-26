[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/docs/src/developing/programming-model)

The `programming-model` folder in the Solana documentation provides an overview of the core concepts and components that developers need to understand when building applications on the Solana blockchain. This folder contains the following files:

1. **accounts.md**: This file explains the concept of accounts in Solana, which are used to store data and maintain state. It covers the different types of accounts (system, program, and native program accounts), how to create and manage accounts, and how to interact with them using the Solana SDK.

   Example usage: Creating a new account using the Solana SDK.
   ```javascript
   const newAccount = new Account();
   ```

2. **instructions.md**: This file describes how to create and use instructions in Solana. Instructions are the basic building blocks of transactions and define the actions that need to be performed on the blockchain. It covers how to create custom instructions, how to encode and decode instruction data, and how to process instructions in a Solana program.

   Example usage: Creating a custom instruction using the Solana SDK.
   ```javascript
   const instruction = new TransactionInstruction({
     keys: [{pubkey: myAccount.publicKey, isSigner: true, isWritable: true}],
     programId: myProgramId,
     data: Buffer.from([myInstructionData]),
   });
   ```

3. **sysvars.md**: This file explains the concept of system variables (sysvars) in Solana, which are read-only accounts that provide access to global information about the current state of the blockchain. It covers the different types of sysvars available, how to access them in a Solana program, and how to use them in transactions.

   Example usage: Accessing the `Rent` sysvar in a Solana program.
   ```rust
   let rent = access_control::rent::from_account_info(rent_sysvar_info)?;
   ```

4. **cross-program-invocations.md**: This file covers the concept of cross-program invocations (CPI) in Solana, which allow one program to call another program's functions. It explains how to create CPIs, how to pass accounts and data between programs, and how to handle errors and return values.

   Example usage: Invoking another program's function using the Solana SDK.
   ```javascript
   const instruction = new TransactionInstruction({
     keys: [{pubkey: myAccount.publicKey, isSigner: true, isWritable: true}],
     programId: otherProgramId,
     data: Buffer.from([otherInstructionData]),
   });
   ```

5. **error-handling.md**: This file provides an overview of error handling in Solana programs. It explains how to define custom error types, how to return errors from a program, and how to handle errors in client code.

   Example usage: Defining a custom error type in a Solana program.
   ```rust
   #[derive(Debug, Clone, PartialEq, FromPrimitive, ToPrimitive)]
   pub enum MyError {
     InvalidInstruction = 0,
     InsufficientFunds = 1,
   }
   ```

These files together provide a comprehensive guide to the Solana programming model, helping developers understand the key concepts and components required to build and interact with applications on the Solana blockchain.
