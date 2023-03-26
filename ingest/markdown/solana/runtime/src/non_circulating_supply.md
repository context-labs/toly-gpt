[View code on GitHub](https://github.com/solana-labs/solana/blob/master/runtime/src/non_circulating_supply.rs)

The `non_circulating_supply.rs` file is responsible for calculating the non-circulating supply of tokens in the Solana network. The non-circulating supply refers to the tokens that are locked or not available for trading or transactions.

The `NonCirculatingSupply` struct holds the total number of non-circulating lamports (the smallest unit of the native token) and a list of accounts holding these lamports. The main function in this file is `calculate_non_circulating_supply`, which takes a reference to a `Bank` and returns a `ScanResult` containing the `NonCirculatingSupply`.

The function first initializes a `HashSet` to store non-circulating accounts and populates it with a predefined list of accounts. It then retrieves all stake accounts associated with the stake program ID. For each stake account, it checks if the account is in a locked state or if its withdraw authority is in the predefined list of withdraw authorities. If either condition is met, the account is considered non-circulating and added to the `HashSet`.

After processing all stake accounts, the function calculates the total non-circulating lamports by summing the balances of all accounts in the `HashSet`. Finally, it returns the `NonCirculatingSupply` struct containing the total lamports and the list of non-circulating accounts.

This functionality is useful for tracking the distribution of tokens in the network and understanding the available supply for trading and transactions.
## Questions: 
 1. **Question**: What is the purpose of the `NonCirculatingSupply` struct and how is it used in the code?
   **Answer**: The `NonCirculatingSupply` struct is used to represent the non-circulating supply of lamports in the Solana network. It contains the total number of non-circulating lamports and a list of accounts holding those lamports. It is calculated using the `calculate_non_circulating_supply` function, which takes a reference to a `Bank` and returns a `ScanResult<NonCirculatingSupply>`.

2. **Question**: How does the `calculate_non_circulating_supply` function determine which accounts are non-circulating?
   **Answer**: The function first initializes a `HashSet` with a list of predefined non-circulating accounts using the `non_circulating_accounts` function. It then iterates through all stake accounts and checks if they are locked or have a withdraw authority in the predefined list. If either condition is met, the stake account is considered non-circulating and added to the `HashSet`.

3. **Question**: What is the purpose of the `withdraw_authority` function and how is it used in the code?
   **Answer**: The `withdraw_authority` function returns a list of predefined Pubkeys that are authorized to withdraw from non-circulating accounts. It is used in the `calculate_non_circulating_supply` function to check if a stake account's authorized withdrawer is in the list, which would make the account non-circulating.