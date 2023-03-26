[View code on GitHub](https://github.com/solana-labs/solana/blob/master/sdk/program/src/rent.rs)

The `rent.rs` file contains the implementation of the `Rent` struct, which represents the configuration of network rent in the Solana blockchain. Rent is a mechanism used to ensure that accounts on the blockchain are not left unused and to incentivize users to remove unused accounts. The `Rent` struct contains three fields: `lamports_per_byte_year`, `exemption_threshold`, and `burn_percent`. 

The `lamports_per_byte_year` field represents the rental rate in lamports (the smallest unit of currency in Solana) per byte-year. The `exemption_threshold` field represents the amount of time (in years) a balance must include rent for the account to be rent exempt. The `burn_percent` field represents the percentage of collected rent that is burned. The remaining percentage is distributed to validators. 

The `Rent` struct also contains several methods. The `calculate_burn` method calculates how much rent to burn from the collected rent. The `minimum_balance` method calculates the minimum balance due for rent-exemption of a given account data size. The `is_exempt` method checks whether a given balance and data length would be exempt. The `due` method calculates the rent due on an account's data length with balance. The `due_amount` method calculates the rent due for an account that is known to be not exempt. 

The `RentDue` enum represents the return value of the `Rent::due` method. It has two variants: `Exempt`, which is used to indicate that the account is rent exempt, and `Paying`, which indicates the amount of rent owed. The `RentDue` enum also contains two methods: `lamports`, which returns the lamports due for rent, and `is_exempt`, which returns `true` if the account is rent exempt.

The `Rent` struct is used in the Solana blockchain to ensure that accounts are not left unused and to incentivize users to remove unused accounts. The `Rent` struct is used in several places in the Solana codebase, including the `stake` program, which is responsible for managing stake accounts. The `Rent` struct is also used in the `system` program, which is responsible for creating and managing accounts on the blockchain. 

Example usage of the `Rent` struct:

```rust
use solana_sdk::rent::Rent;

let rent = Rent::default();
let data_len = 100;
let balance = rent.minimum_balance(data_len);
let years_elapsed = 1.0;
let rent_due = rent.due(balance, data_len, years_elapsed);

match rent_due {
    RentDue::Exempt => println!("Account is rent exempt"),
    RentDue::Paying(amount) => println!("Account owes {} lamports for rent", amount),
}
```
## Questions: 
 1. What is the purpose of the `Rent` struct and how is it used in the Solana network?
- The `Rent` struct represents the configuration of network rent in the Solana network, including the rental rate, exemption threshold, and burn percentage. It is used to calculate the amount of rent due on an account's data length with balance, and to determine whether an account is rent exempt.

2. How is the default rental rate calculated?
- The default rental rate is calculated based on the conversion rate of 10^9 lamports per SOL, $1 per SOL, $0.01 per megabyte day, and $3.65 per megabyte year. The resulting value is expressed in lamports per byte-year.

3. What is the purpose of the `RentDue` enum and how is it used?
- The `RentDue` enum represents the amount of rent due on an account, and can be either `Exempt` if the account is rent exempt, or `Paying` if the account owes rent. It is used to determine the amount of rent due and whether an account is rent exempt.