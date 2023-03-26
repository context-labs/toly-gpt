[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/sdk/program/src/vote)

The `autodoc/solana/sdk/program/src/vote` folder contains code related to the Solana blockchain's vote native program, which provides functionality for managing votes on the Solana blockchain. The module is divided into four sub-modules: authorized_voters, error, instruction, and state.

The `authorized_voters.rs` file implements the `AuthorizedVoters` struct, which is used to manage authorized voters for different epochs. It provides methods for adding, retrieving, and purging authorized voters, as well as utility methods for checking the state of the map.

The `error.rs` file defines the `VoteError` enum, which represents the possible errors that can occur when processing votes. These errors can be used to provide more detailed information to users when something goes wrong with their vote and can be used with the Solana SDK's `InstructionError` type to provide more detailed error reporting.

The `instruction.rs` file defines the `VoteInstruction` enum and its associated functions. The `VoteInstruction` enum represents various instructions that can be executed on a vote account, such as initializing a vote account, authorizing a key to send votes or issue a withdrawal, voting, withdrawing funds, updating the validator identity, updating the commission, and more. The file also provides functions to create `Instruction` instances for each of the `VoteInstruction` variants.

The `state` subfolder contains code related to the representation and management of vote account states in the Solana blockchain. It consists of two files: `vote_state_0_23_5.rs` and `vote_state_versions.rs`. The `VoteState0_23_5` and `CircBuf` structs in `vote_state_0_23_5.rs` represent the state of a vote account and a circular buffer for storing prior authorized voters, respectively. The `VoteStateVersions` enum in `vote_state_versions.rs` provides a way to convert between different versions of the `VoteState` struct and check whether a given `VoteState` instance is uninitialized.

Here's an example of how to create a new vote account:

```rust
use solana_sdk::program::vote::instruction;

let from_pubkey = ...;
let vote_pubkey = ...;
let vote_init = ...;
let lamports = ...;

let instructions = instruction::create_account(&from_pubkey, &vote_pubkey, &vote_init, lamports);
```

And here's an example of how to authorize a new key for voting:

```rust
use solana_sdk::program::vote::instruction;

let vote_pubkey = ...;
let authorized_pubkey = ...;
let new_authorized_pubkey = ...;
let vote_authorize = ...;

let instruction = instruction::authorize(&vote_pubkey, &authorized_pubkey, &new_authorized_pubkey, vote_authorize);
```

These instructions can be used in the larger Solana project to interact with vote accounts and perform various operations related to voting and staking.
