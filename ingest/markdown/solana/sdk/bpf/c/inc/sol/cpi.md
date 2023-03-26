[View code on GitHub](https://github.com/solana-labs/solana/blob/master/sdk/bpf/c/inc/sol/cpi.h)

# Solana Cross-Program Invocation

The `cpi.h` file contains the implementation of the Solana Cross-Program Invocation (CPI) API. The CPI API allows a Solana program to invoke another program and pass it a set of accounts and data. The invoked program can then read and modify the accounts and data as needed. The CPI API is used to implement complex smart contracts that require multiple programs to work together.

The file defines several constants, data structures, and functions that are used by the CPI API. The `MAX_CPI_INSTRUCTION_DATA_LEN` constant defines the maximum size of the data that can be passed to an invoked program. The `MAX_CPI_INSTRUCTION_ACCOUNTS` constant defines the maximum number of accounts that can be passed to an invoked program. The `MAX_CPI_ACCOUNT_INFOS` constant defines the maximum number of account info structs that can be used in a single CPI invocation.

The `SolAccountMeta` data structure represents an account that is passed to an invoked program. It contains the account's public key, a flag indicating whether the account can be modified by the invoked program, and a flag indicating whether the account requires a signature from the invoking program.

The `SolInstruction` data structure represents an instruction that is passed to an invoked program. It contains the program ID of the invoked program, an array of `SolAccountMeta` structs representing the accounts that are passed to the invoked program, the data that is passed to the invoked program, and the length of the data.

The `sol_invoke_signed` function is used to invoke another program and sign for some of the keys. It takes an instruction, an array of `SolAccountInfo` structs representing the accounts used by the instruction, the length of the `SolAccountInfo` array, an array of `SolSignerSeeds` structs representing the seed bytes used to sign program accounts, and the length of the `SolSignerSeeds` array. The function returns a 64-bit integer that represents the result of the invocation.

The `sol_invoke` function is used to invoke another program without signing for any of the keys. It takes the same arguments as `sol_invoke_signed`, except for the `SolSignerSeeds` array.

Here is an example of how to use the CPI API to invoke another program:

```c
#include <sol/cpi.h>

void my_program(const SolPubkey *program_id, const SolPubkey *account1, const SolPubkey *account2) {
  SolAccountMeta accounts[] = {
    {account1, true, false},
    {account2, true, false}
  };
  SolInstruction instruction = {
    program_id,
    accounts,
    sizeof(accounts) / sizeof(accounts[0]),
    NULL,
    0
  };
  SolAccountInfo account_infos[] = {
    {account1, true, false},
    {account2, true, false}
  };
  sol_invoke(&instruction, account_infos, sizeof(account_infos) / sizeof(account_infos[0]));
}
```

In this example, `my_program` invokes another program with the given program ID and two accounts. The `SolAccountMeta` structs representing the accounts are stored in the `accounts` array. The `SolInstruction` struct representing the instruction is created with the program ID and the `accounts` array. The `SolAccountInfo` structs representing the accounts are stored in the `account_infos` array. Finally, the `sol_invoke` function is called with the `instruction` and `account_infos` arrays.
## Questions: 
 1. What is the purpose of this code?
    
    This code defines structures and functions for cross-program invocation (CPI) in Solana, allowing one program to invoke another program's instructions.

2. What is the maximum size of CPI instruction data and why was this size chosen?
    
    The maximum size of CPI instruction data is 10 KiB, which was chosen to ensure that CPI instructions are not more limited than transaction instructions if the size of transactions is doubled in the future.

3. What is the difference between `sol_invoke` and `sol_invoke_signed` functions?
    
    `sol_invoke` invokes another program without signing for any of the keys, while `sol_invoke_signed` allows signing for some of the keys using seed bytes. Both functions take an instruction and an array of account infos as input.