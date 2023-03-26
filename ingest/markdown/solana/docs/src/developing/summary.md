[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/docs/src/developing)

The `developing` folder in the Solana documentation contains essential resources for developers who want to build applications on the Solana blockchain. It covers various aspects of Solana development, such as the programming model, runtime facilities, and client libraries.

For example, the `programming-model` folder provides a comprehensive guide to the Solana programming model, helping developers understand key concepts and components required to build and interact with applications on the Solana blockchain. It covers topics like accounts, instructions, system variables, cross-program invocations, and error handling.

```rust
// Creating a custom error type in a Solana program
#[derive(Debug, Clone, PartialEq, FromPrimitive, ToPrimitive)]
pub enum MyError {
  InvalidInstruction = 0,
  InsufficientFunds = 1,
}
```

The `runtime-facilities` folder contains code and documentation for various runtime facilities essential for the proper functioning of the Solana blockchain. These facilities handle different aspects of the blockchain, such as accounts, programs, and transactions. Developers can use this information to create efficient and secure programs that interact with the Solana runtime.

```rust
// Example of initializing an account with data
use solana_program::{account_info::AccountInfo, program_error::ProgramError, pubkey::Pubkey};

fn initialize_account(account: &AccountInfo, data: &[u8]) -> Result<(), ProgramError> {
  if account.data_len() != data.len() {
    return Err(ProgramError::InvalidAccountData);
  }
  account.try_data_mut()?.copy_from_slice(data);
  Ok(())
}
```

The `clients` folder is essential for developers who want to build applications on top of the Solana platform, as it provides the necessary tools and documentation to create and manage client-side interactions with the blockchain. It contains documentation for the Solana API, JSON-RPC API, and RPC API, as well as subfolders for the JavaScript and Python APIs.

```javascript
// Example of creating a new wallet using the Solana JavaScript API
const { Keypair, SystemProgram } = require('@solana/web3.js');

const keypair = Keypair.generate();
const createAccountInstruction = SystemProgram.createAccount({
  fromPubkey: keypair.publicKey,
  newAccountPubkey: keypair.publicKey,
  lamports: 1000000000,
  space: 0,
  programId: SystemProgram.programId,
});
```

In summary, the `developing` folder provides a wealth of information and resources for developers looking to build applications on the Solana blockchain. By following the guides and examples provided, developers can create powerful and scalable applications on the Solana platform.
