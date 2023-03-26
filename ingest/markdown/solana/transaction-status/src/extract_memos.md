[View code on GitHub](https://github.com/solana-labs/solana/blob/master/transaction-status/src/extract_memos.rs)

The `extract_memos.rs` file in the Solana project contains code that extracts memos from a transaction message. A memo is a short message that can be attached to a transaction. The code provides helper functions to convert `spl_memo` program IDs to `solana_sdk` program IDs. It also defines a trait `ExtractMemos` that provides a method `extract_memos` to extract memos from a message. The trait is implemented for three types: `Message`, `SanitizedMessage`, and `VersionedTransactionWithStatusMeta`.

The `extract_memos_inner` function is the core of the code. It takes a list of account keys and a list of instructions as input and returns a list of memos. It iterates over the instructions and checks if the program ID of an instruction is a memo program ID. If it is, the data of the instruction is extracted and parsed to get the memo. If the program ID is not a memo program ID, the function skips the instruction. The function returns a list of memos extracted from the memo program instructions.

The `extract_and_fmt_memos` function takes a message as input and returns a formatted string of memos extracted from the message. If there are no memos in the message, it returns `None`.

The `extract_and_fmt_memo_data` function takes memo data as input and returns a formatted string of the memo data. It first gets the length of the memo data and then parses the memo data to get the memo. If the memo data is unparseable, it returns a string `"(unparseable)"`.

The code provides a test function `test_extract_memos_inner` to test the `extract_memos_inner` function. It creates a list of instructions with memo data and a list of account keys with memo program IDs. It then calls the `extract_memos_inner` function with these inputs and checks if the output is the expected list of memos.

Overall, this code provides a way to extract memos from a transaction message. It can be used in the larger Solana project to extract memos from transactions and display them to users.
## Questions: 
 1. What is the purpose of the `extract_memos` function and how is it used?
- The `extract_and_fmt_memos` function extracts memos from a message and formats them as a string, returning `None` if there are no memos. It is used to extract memos from different types of messages that implement the `ExtractMemos` trait.
2. What is the purpose of the `extract_memos_inner` function and how does it work?
- The `extract_memos_inner` function takes a list of account keys and a list of compiled instructions, and returns a list of memo strings extracted from the instructions. It works by iterating over the instructions, identifying the memo program based on the program ID, and extracting the memo data from the instruction data.
3. What is the purpose of the `spl_memo_id_v1` and `spl_memo_id_v3` functions and how are they used?
- The `spl_memo_id_v1` and `spl_memo_id_v3` functions are helper functions that return the program ID for the v1 and v3 memo programs, respectively. They are used to identify memo instructions in the `extract_memos_inner` function.