[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/genesis/src)

The `genesis/src` folder in the Solana project is responsible for setting up the initial state of the Solana blockchain, including generating unique addresses, creating and managing accounts, and distributing stakes and unlocks to network participants.

The `AddressGenerator` struct in `address_generator.rs` is a utility for generating unique `Pubkey` addresses for accounts. It is used to create initial accounts for validators and other system entities. Example usage:

```rust
let base_pubkey = Pubkey::new_unique();
let program_id = Pubkey::new_unique();
let mut generator = AddressGenerator::new(&base_pubkey, &program_id);
let first_pubkey = generator.next();
let second_pubkey = generator.next();
```

The `genesis_accounts.rs` file sets up the initial accounts and stakes for the Solana blockchain. It defines various unlock schedules and staker information arrays, and provides functions to add these accounts to the genesis configuration. The `add_genesis_accounts()` function is the main entry point for setting up the initial accounts.

The `stakes.rs` file manages stake accounts and their lamports. The `create_and_add_stakes` function creates stake accounts based on the provided `StakerInfo`, `UnlockInfo`, and `granularity`. Example usage:

```rust
let mut genesis_config = GenesisConfig::default();
let staker_info = StakerInfo {
    name: "staker",
    staker: "P1aceHo1derPubkey11111111111111111111111111",
    withdrawer: None,
    lamports: 100_000_000,
};
let unlock_info = UnlockInfo {
    cliff_fraction: 0.5,
    cliff_years: 0.5,
    unlocks: 1,
    unlock_years: 0.5,
    custodian: "11111111111111111111111111111111",
};
let granularity = 10_000_000;

create_and_add_stakes(&mut genesis_config, &staker_info, &unlock_info, Some(granularity));
```

The `unlocks.rs` file generates lockups for a certain amount of lamports, with each event unlocking a certain fraction of the total amount. The `Unlocks` struct is used to create a series of unlock events, and the `Unlock` struct describes an individual unlock event.

In summary, the `genesis/src` folder is crucial for setting up the initial state of the Solana blockchain. It provides functionality for generating unique addresses, creating and managing accounts, and distributing stakes and unlocks to network participants. The code in this folder is used extensively throughout the Solana project to bootstrap the network and ensure a smooth launch.
