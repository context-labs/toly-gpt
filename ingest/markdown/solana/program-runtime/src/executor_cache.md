[View code on GitHub](https://github.com/solana-labs/solana/blob/master/program-runtime/src/executor_cache.rs)

The `executor_cache.rs` file defines a Least Frequently Used (LFU) cache for storing executors of Solana programs. The cache is designed to store a limited number of executors and evict the least frequently used ones when the cache reaches its capacity. This cache is used to improve the performance of the Solana runtime by reducing the need to load executors from the database.

The `TransactionExecutorCache` struct represents a subset of the `BankExecutorCache` containing only the executors relevant to a single transaction. It is designed to handle parallel processing of transaction batches without causing race conditions. It has three HashMaps: `visible`, `deployments`, and `add_to_cache`. The `visible` HashMap contains executors or tombstones that are visible during the transaction, `deployments` contains executors of programs that were re-/deployed during the transaction, and `add_to_cache` contains executors that were missing in the cache and not re-/deployed during the transaction.

The `BankExecutorCache` struct represents the LFU cache of executors, which exists once per bank. It has a capacity, a current epoch, a HashMap of executors, and a `Stats` struct to track cache statistics. The cache provides methods to get, put, and remove executors, as well as clear the cache and calculate primer counts for new executors.

The `Stats` struct tracks various cache statistics, such as hits, misses, evictions, insertions, replacements, and one-hit wonders. The `submit` method logs these statistics for monitoring and debugging purposes.

Here's an example of how the cache can be used:

```rust
let key1 = solana_sdk::pubkey::new_rand();
let key2 = solana_sdk::pubkey::new_rand();
let executor = Arc::new(LoadedProgram::default());
let mut cache = BankExecutorCache::new(2, 0);

// Add executors to the cache
cache.put([(key1, executor.clone())].into_iter());
cache.put([(key2, executor.clone())].into_iter());

// Get an executor from the cache
let executor1 = cache.get(&key1).unwrap();

// Evict the least frequently used executor when adding a new one
let key3 = solana_sdk::pubkey::new_rand();
cache.put([(key3, executor)].into_iter());
```

This cache implementation helps improve the performance of the Solana runtime by reducing the need to load executors from the database and evicting the least frequently used ones when the cache reaches its capacity.
## Questions: 
 1. **What is the purpose of the `TransactionExecutorCache` struct?**

   The `TransactionExecutorCache` struct represents a subset of the `BankExecutorCache` containing only the executors relevant to one transaction. It is designed to prevent race conditions when updating the `BankExecutorCache` as transaction batches are processed in parallel.

2. **What is the purpose of the `BankExecutorCache` struct?**

   The `BankExecutorCache` struct is a Least Frequently Used (LFU) cache of executors that exists once per bank. It is used to store and manage the executors for different programs in the bank, providing efficient access and eviction of the least frequently used executors when the cache reaches its capacity.

3. **How does the eviction process work in the `BankExecutorCache`?**

   When the cache reaches its capacity and a new executor needs to be added, the eviction process removes the executor with the smallest use count (least frequently used) to make room for the new executor. The `put()` function handles this process by sorting the executors based on their use count and evicting the least frequently used ones as needed.