[View code on GitHub](https://github.com/solana-labs/solana/blob/master/runtime/src/bank_utils.rs)

The `bank_utils.rs` file contains utility functions for setting up a test bank and sending votes. 

The `setup_bank_and_vote_pubkeys_for_tests` function takes in two arguments: `num_vote_accounts` and `stake`. It creates `num_vote_accounts` validator voting keypairs and generates their corresponding vote public keys. It then uses `genesis_utils` to create a genesis configuration with these vote accounts and a specified amount of `stake` for each account. Finally, it creates a new `Bank` instance using this genesis configuration and returns both the `Bank` instance and the list of vote public keys.

This function is useful for setting up a test environment where a `Bank` instance is needed along with a set of validator vote accounts.

The `find_and_send_votes` function takes in three arguments: `sanitized_txs`, `tx_results`, and `vote_sender`. It iterates through each transaction in `sanitized_txs` and checks if it is a simple vote transaction and if it was executed successfully. If both conditions are met, it parses the transaction using `vote_parser` and checks if the last voted slot is not `None`. If it is not `None`, it sends the parsed vote using the `vote_sender`.

This function is useful for sending votes in a test environment and can be used to simulate a voting process. The `vote_sender` argument is optional and can be used to specify a custom vote sender implementation.
## Questions: 
 1. What is the purpose of the `setup_bank_and_vote_pubkeys_for_tests` function?
- The `setup_bank_and_vote_pubkeys_for_tests` function creates a new bank and generates a set of validator voting keypairs for testing purposes.

2. What is the `find_and_send_votes` function used for?
- The `find_and_send_votes` function takes in a slice of sanitized transactions and their results, and sends any parsed vote transactions to a `ReplayVoteSender` if the transaction was executed successfully.

3. What is the `vote_sender_types` module used for?
- The `vote_sender_types` module is used to define the `ReplayVoteSender` type, which is used in the `find_and_send_votes` function to send parsed vote transactions.