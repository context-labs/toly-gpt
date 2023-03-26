[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/docs/src/inflation)

The `inflation` folder in the Solana project contains the implementation of the inflation mechanism for the Solana blockchain. Inflation is a critical aspect of any cryptocurrency, as it helps maintain the value of the currency and incentivizes participation in the network.

### Files

1. **`inflation.md`**: This file provides an overview of the inflation mechanism in Solana, explaining the rationale behind it, the inflation schedule, and the distribution of inflation rewards. It serves as a high-level introduction to the inflation mechanism for developers and users.

2. **`inflation_calculator.rs`**: This file contains the implementation of the `InflationCalculator` struct, which is responsible for calculating the inflation rate and the distribution of rewards based on the current epoch and the total number of staked tokens. The `InflationCalculator` is used by the `Bank` struct to update the inflation rate and distribute rewards during each epoch.

   Example usage:

   ```rust
   let inflation_calculator = InflationCalculator::new(
       initial_inflation,
       inflation_rate,
       epochs_per_year,
       foundation_percentage,
   );

   let (total_rewards, validator_rewards, foundation_rewards) =
       inflation_calculator.compute_rewards(current_epoch, total_staked_tokens);
   ```

3. **`inflation_test.rs`**: This file contains unit tests for the `InflationCalculator` struct, ensuring that the inflation rate and reward distribution calculations are accurate and consistent with the specified parameters.

### Subfolders

There are no subfolders in the `inflation` folder.

In summary, the `inflation` folder contains the implementation of Solana's inflation mechanism, which is a crucial aspect of the blockchain's economic model. The `InflationCalculator` struct calculates the inflation rate and reward distribution based on the current epoch and the total number of staked tokens. This information is then used by the `Bank` struct to update the inflation rate and distribute rewards during each epoch. The folder also includes an overview of the inflation mechanism in the `inflation.md` file and unit tests for the `InflationCalculator` struct in the `inflation_test.rs` file.
