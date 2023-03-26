[View code on GitHub](https://github.com/solana-labs/solana/blob/master/rpc-client-nonce-utils/src/blockhash_query.rs)

The `blockhash_query.rs` file is part of the Solana RPC client nonce utilities and is responsible for querying blockhashes and fee calculators from the Solana cluster or a nonce account. It provides an enum `Source` with two variants: `Cluster` and `NonceAccount(Pubkey)`. The `Source` enum has methods to get blockhash and fee calculator, get fee calculator, and check if a blockhash is valid.

The `BlockhashQuery` enum has three variants: `None(Hash)`, `FeeCalculator(Source, Hash)`, and `All(Source)`. It provides methods to create a new `BlockhashQuery` from command-line arguments, get blockhash and fee calculator, and get blockhash. The `BlockhashQuery` enum is used to determine the source of the blockhash and fee calculator, either from the cluster or a nonce account.

For example, when using the `BlockhashQuery::All(Source)` variant, the `get_blockhash_and_fee_calculator` method will return the blockhash and fee calculator from the specified source (either the cluster or a nonce account). If the source is a nonce account, it will fetch the account data and extract the blockhash and fee calculator from it.

The `BlockhashQuery` enum also provides a `Default` implementation, which defaults to `BlockhashQuery::All(Source::Cluster)`. This means that if no specific blockhash or nonce account is provided, the blockhash and fee calculator will be fetched from the cluster.

In summary, this code is responsible for handling blockhash and fee calculator queries in the Solana RPC client nonce utilities, allowing users to fetch this information from either the cluster or a nonce account.
## Questions: 
 1. **Question**: What is the purpose of the `Source` enum and its variants?
   **Answer**: The `Source` enum represents the source of the blockhash and fee calculator. It has two variants: `Cluster` and `NonceAccount(Pubkey)`. `Cluster` represents the case where the blockhash and fee calculator are fetched from the cluster, while `NonceAccount(Pubkey)` represents the case where they are fetched from a specific nonce account with the given `Pubkey`.

2. **Question**: Why are some methods marked as deprecated and what should be used instead?
   **Answer**: The methods `get_blockhash_and_fee_calculator` and `get_fee_calculator` are marked as deprecated since version 1.9.0. Instead of using these methods, it is recommended to use the `get_blockhash` method, which provides a more straightforward way to fetch the blockhash without dealing with the fee calculator.

3. **Question**: How does the `BlockhashQuery` enum work and what are its variants used for?
   **Answer**: The `BlockhashQuery` enum represents different ways to query the blockhash and fee calculator. It has three variants: `None(Hash)`, `FeeCalculator(Source, Hash)`, and `All(Source)`. `None(Hash)` represents the case where only the blockhash is provided, `FeeCalculator(Source, Hash)` represents the case where the blockhash and its source are provided, and `All(Source)` represents the case where only the source is provided, and the blockhash needs to be fetched from the source.