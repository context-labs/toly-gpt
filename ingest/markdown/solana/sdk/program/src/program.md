[View code on GitHub](https://github.com/solana-labs/solana/blob/master/sdk/program/src/program.rs)

The `program.rs` file in the Solana SDK provides functionality for cross-program invocation (CPI), which allows Solana programs to call other programs. This is achieved through the `invoke` and `invoke_signed` functions.

The `invoke` function is used to call another program by providing an `Instruction` containing the program ID of the callee, instruction data, and a list of `AccountInfo`s corresponding to all the accounts accessed by the callee. The `Instruction` is usually built within the calling program, but it can also be deserialized from an external source. If the callee returns an error or aborts, the entire transaction will fail.

The `invoke_signed` function is similar to `invoke`, but it also allows the caller to virtually sign an invocation on behalf of one or more program derived addresses (PDAs) controlled by the calling program. This enables the callee to mutate the PDAs or confirm that a PDA program key has authorized the callee's actions.

There are also unchecked versions of these functions, `invoke_unchecked` and `invoke_signed_unchecked`, which do not enforce Rust's aliasing rules and avoid the CPU cost of runtime checks.

Additionally, the file provides functions to set and get return data from an invoked program. The `set_return_data` function sets the running program's return data, while the `get_return_data` function retrieves the return data from an invoked program.

Here's an example of transferring lamports via CPI:

```rust
use solana_program::{
    account_info::{next_account_info, AccountInfo},
    entrypoint,
    entrypoint::ProgramResult,
    program::invoke,
    pubkey::Pubkey,
    system_instruction,
    system_program,
};

entrypoint!(process_instruction);

fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    let account_info_iter = &mut accounts.iter();

    let payer = next_account_info(account_info_iter)?;
    let recipient = next_account_info(account_info_iter)?;
    let system_program_account = next_account_info(account_info_iter)?;

    assert!(payer.is_writable);
    assert!(payer.is_signer);
    assert!(recipient.is_writable);
    assert!(system_program::check_id(system_program_account.key));

    let lamports = 1000000;

    invoke(
        &system_instruction::transfer(payer.key, recipient.key, lamports),
        &[payer.clone(), recipient.clone(), system_program_account.clone()],
    )
}
```
## Questions: 
 1. **Question:** What are the differences between `invoke`, `invoke_unchecked`, `invoke_signed`, and `invoke_signed_unchecked` functions?

   **Answer:** The `invoke` function is used for cross-program invocation with proper borrow checking of `RefCell`s within `AccountInfo`s. `invoke_unchecked` is similar to `invoke` but does not perform borrow checking, which can save CPU cycles but may cause undefined behavior if aliasing rules are violated. `invoke_signed` is like `invoke` but allows for virtual signing on behalf of program derived addresses (PDAs). `invoke_signed_unchecked` is a combination of `invoke_unchecked` and `invoke_signed`, allowing for virtual signing without borrow checking.

2. **Question:** How does the `set_return_data` and `get_return_data` functions work, and what are their limitations?

   **Answer:** `set_return_data` is used to set the return data for a running program, which is a dedicated per-transaction buffer for data passed from cross-program invoked programs back to their caller. The maximum size of return data is `MAX_RETURN_DATA`. `get_return_data` retrieves the return data from an invoked program. However, the return data is a global resource, and care must be taken to ensure that it represents what is expected, as called programs are free to set or not set the return data.

3. **Question:** What are the runtime invariants checked before invoking a callee and before returning control to the caller?

   **Answer:** Some of the runtime invariants checked include: the sum of lamports owned by all referenced accounts has not changed, a program has not debited lamports from an account it does not own, a program has not otherwise written to an account that it does not own, a program has not written to an account that is not writable, and the size of account data has not exceeded applicable limits. If any of these invariants are violated, the transaction will immediately fail.