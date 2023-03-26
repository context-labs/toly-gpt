[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/sdk/program/src/sysvar)

The `autodoc/solana/sdk/program/src/sysvar` folder contains code related to special accounts with dynamically-updated data, called sysvars, in the Solana blockchain network. Sysvars provide information about the network cluster, blockchain history, and executing transactions. They are useful for on-chain programs and are defined in their own submodules within this module, such as `clock`, `epoch_schedule`, `instructions`, and `rent`.

Sysvars implement the `Sysvar::get` method, which loads a sysvar directly from the runtime. Programs should prefer to call `Sysvar::get` instead of deserializing with `Sysvar::from_account_info`, as the latter imposes extra overhead of deserialization and requires the sysvar account address to be passed to the program, wasting the limited space available to transactions.

For example, to access the `clock` sysvar:

```rust
use solana_program::{
    account_info::AccountInfo,
    clock,
    entrypoint::ProgramResult,
    msg,
    pubkey::Pubkey,
    sysvar::Sysvar,
};

fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    let clock = clock::Clock::get()?;
    msg!("clock: {:#?}", clock);
    Ok(())
}
```

The code also provides a way to check if a given `Pubkey` is a sysvar account using the `is_sysvar_id` function. All sysvar accounts are owned by the account identified by `sysvar::ID`.

Some sysvars, like `slot_hashes` and `slot_history`, cannot be accessed on-chain due to their large size. However, they can still be accessed off-chain through RPC.

In summary, the code in the `autodoc/solana/sdk/program/src/sysvar` folder provides access to sysvars, which are special accounts with dynamically-updated data in the Solana blockchain network. These sysvars are used by on-chain programs to access information about the network cluster, blockchain history, and executing transactions. They are defined in their own submodules and can be accessed efficiently using the `Sysvar::get` method.
