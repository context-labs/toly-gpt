[View code on GitHub](https://github.com/solana-labs/solana/blob/master/runtime/src/rent_paying_accounts_by_partition.rs)

The `rent_paying_accounts_by_partition.rs` file provides a data structure for fast iteration of all public keys that could possibly be rent paying, grouped by rent collection partition. The `RentPayingAccountsByPartition` struct is populated at startup with the accounts that were found to be rent paying. These are the 'possible' rent paying accounts. This set can never grow during runtime since it is not possible to create rent paying accounts now. It can shrink during execution if a rent paying account is dropped to lamports=0 or is topped off. The next time the validator restarts, it will remove the account from this list.

The `RentPayingAccountsByPartition` struct has two fields: `accounts` and `partition_count`. The `accounts` field is a two-dimensional vector where the first index is partition end index, 0..=432_000, and the second dimension is a list of public keys which were identified at startup to be rent paying. At the moment, this data structure is used to verify all rent paying accounts are expected. When the validator stops iterating the accounts index to find rent paying accounts, it will no longer need this to be a hashset. It can just be a vector. The `partition_count` field is the number of partitions per cycle.

The `RentPayingAccountsByPartition` struct has three methods: `new`, `add_account`, and `get_pubkeys_in_partition_index`. The `new` method creates a new struct and needs slots per epoch from `epoch_schedule`. The `add_account` method remembers that a public key can possibly be rent paying. The `get_pubkeys_in_partition_index` method returns all public keys that can possibly be rent paying with this partition end index.

The `RentPayingAccountsByPartition` struct also has an `is_initialized` method that returns `true` if the partition count is not zero.

The `tests` module contains a single test that creates a new `RentPayingAccountsByPartition` struct, adds a public key to it, and checks that the public key is in the correct partition index.
## Questions: 
 1. What is the purpose of the `RentPayingAccountsByPartition` struct?
    
    The `RentPayingAccountsByPartition` struct provides fast iteration of all pubkeys which could possibly be rent paying, grouped by rent collection partition.

2. How are accounts added to the `RentPayingAccountsByPartition` struct?
    
    Accounts are added to the `RentPayingAccountsByPartition` struct using the `add_account` method, which takes a `Pubkey` as an argument and adds it to the appropriate partition based on the `partition_end_index`.

3. What is the purpose of the `EMPTY_HASHSET` constant?
    
    The `EMPTY_HASHSET` constant is a `HashSet` that is used as a default value for the `get_pubkeys_in_partition_index` method when the requested partition index is out of bounds.