[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/storage-proto/src)

The `solana/storage-proto/src` folder contains Rust code that defines several structs and their implementations for storing and converting data related to transaction status metadata, rewards, and token amounts in the Solana blockchain platform.

The `StoredExtendedReward` struct represents a reward earned by a validator or stakeholder. It contains fields for the validator's public key, the amount of lamports, the post-balance after applying the reward, the reward type, and the commission earned by the validator. The `StoredExtendedRewards` type is a vector of `StoredExtendedReward` structs.

```rust
pub struct StoredExtendedReward {
    pub pubkey: String,
    pub lamports: i64,
    pub post_balance: u64,
    pub reward_type: Option<RewardType>,
    pub commission: Option<u8>,
}
```

The `StoredTokenAmount` struct represents a token amount stored in a Solana account. It contains fields for the UI amount, the number of decimal places, and the amount itself (as a string). The `UiTokenAmount` struct is used to convert a `StoredTokenAmount` into a user-friendly format and vice versa.

```rust
pub struct StoredTokenAmount {
    pub ui_amount: Option<f64>,
    pub decimals: u8,
    pub amount: String,
}
```

The `StoredTransactionTokenBalance` struct represents the token balance of a Solana account before or after a transaction. It contains fields for the account index, the mint, the UI token amount, the account owner, and the account's program ID.

```rust
pub struct StoredTransactionTokenBalance {
    pub account_index: usize,
    pub mint: String,
    pub ui_token_amount: StoredTokenAmount,
    pub owner: String,
    pub program_id: String,
}
```

The `StoredTransactionStatusMeta` struct represents the metadata associated with a transaction status. It contains fields for the transaction status, fee, pre- and post-transaction balances, inner instructions, log messages, pre- and post-transaction token balances, rewards, return data, and compute units consumed.

```rust
pub struct StoredTransactionStatusMeta {
    pub status: Result<()>,
    pub fee: u64,
    pub pre_balances: Vec<u64>,
    pub post_balances: Vec<u64>,
    pub inner_instructions: Option<Vec<StoredInnerInstruction>>,
    pub log_messages: Option<Vec<String>>,
    pub pre_token_balances: Option<Vec<StoredTransactionTokenBalance>>,
    pub post_token_balances: Option<Vec<StoredTransactionTokenBalance>>,
    pub rewards: Option<Vec<StoredExtendedReward>>,
    pub return_data: Option<StoredReturnData>,
    pub compute_units_consumed: Option<u64>,
}
```

The implementations of these structs provide methods for converting between the `Stored` and `Ui` versions of the structs, as well as between the `Stored` and `Transaction` versions. These conversions are useful for displaying transaction data in a user-friendly format and for storing and retrieving transaction data in Solana accounts.

For example, a developer might use the `StoredTransactionStatusMeta` struct to store metadata about a transaction, such as its status, fee, and balances. They could then use the provided conversion methods to display this data in a user-friendly format or to store it in a Solana account.

Overall, this code is an essential part of the Solana project, providing a way to store and convert transaction data in the Solana blockchain platform.
