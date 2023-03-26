[View code on GitHub](https://github.com/solana-labs/solana/blob/master/genesis/src/genesis_accounts.rs)

The `genesis_accounts.rs` file is responsible for setting up the initial accounts and stakes for the Solana blockchain. It defines various unlock schedules, staker information, and a function to add these accounts to the genesis configuration.

Three unlock schedules are defined:
1. `UNLOCKS_ALL_AT_9_MONTHS`: 100% unlocked after 9 months.
2. `UNLOCKS_HALF_AT_9_MONTHS`: 50% unlocked after 9 months, then monthly for 2 years.
3. `UNLOCKS_ALL_DAY_ZERO`: No lockups, fully unlocked.

Multiple staker information arrays are defined, such as `CREATOR_STAKER_INFOS`, `SERVICE_STAKER_INFOS`, `FOUNDATION_STAKER_INFOS`, `GRANTS_STAKER_INFOS`, and `COMMUNITY_STAKER_INFOS`. Each array contains `StakerInfo` structs with details like the staker's name, public key, lamports (native token balance), and an optional withdrawer public key.

The `add_stakes()` function takes a mutable reference to a `GenesisConfig`, a slice of `StakerInfo`, and a reference to an `UnlockInfo`. It iterates through the `StakerInfo` slice, creating and adding stakes to the genesis configuration using the provided unlock schedule. The function returns the total lamports added.

The `add_genesis_accounts()` function is the main entry point for setting up the initial accounts. It takes a mutable reference to a `GenesisConfig` and the initial issued lamports. It calls `add_stakes()` for each staker information array with their respective unlock schedules, and adds a "one thanks" community pool account with the remaining SOL tokens.

In the test module, the `test_add_genesis_accounts()` function checks if the total lamports in the genesis configuration are equal to the expected 500,000,000 SOL after calling `add_genesis_accounts()`.
## Questions: 
 1. **Question**: What is the purpose of the `UnlockInfo` struct and its constants (`UNLOCKS_ALL_AT_9_MONTHS`, `UNLOCKS_HALF_AT_9_MONTHS`, and `UNLOCKS_ALL_DAY_ZERO`)?
   **Answer**: The `UnlockInfo` struct represents the unlock schedule for a stake account, including the cliff fraction, cliff years, number of unlocks, unlock years, and custodian. The constants define specific unlock schedules: `UNLOCKS_ALL_AT_9_MONTHS` unlocks 100% after 9 months, `UNLOCKS_HALF_AT_9_MONTHS` unlocks 50% after 9 months and then monthly for 2 years, and `UNLOCKS_ALL_DAY_ZERO` has no lockups and unlocks everything immediately.

2. **Question**: What is the purpose of the `add_stakes()` function and how does it work?
   **Answer**: The `add_stakes()` function is used to create and add stakes to the genesis accounts based on the provided `staker_infos` and `unlock_info`. It iterates through the `staker_infos`, creates stakes for each staker using the `create_and_add_stakes()` function, and returns the total amount of lamports added to the stakes.

3. **Question**: How does the `add_genesis_accounts()` function distribute the initial tokens among different types of staker accounts?
   **Answer**: The `add_genesis_accounts()` function distributes the initial tokens by calling the `add_stakes()` function with different sets of staker information and unlock schedules. It adds stakes for creator stakers, service stakers, foundation stakers, grants stakers, and community stakers with their respective unlock schedules. Finally, it creates and adds stakes for the "one thanks" community pool with the remaining tokens.