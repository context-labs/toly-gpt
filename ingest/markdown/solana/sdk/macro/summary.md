[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/sdk/macro)

The `autodoc/solana/sdk/macro` folder contains a Rust library that provides a set of procedural macros to simplify the handling of public keys and program IDs in the Solana project. These macros allow developers to easily declare and interact with public keys and program IDs in their code, reducing boilerplate and improving readability.

The main functionality is provided through the following macros:

- `pubkey`: Takes a base58 string representation of a public key and returns a `Pubkey` object. For example:

  ```rust
  use solana_sdk::pubkey;

  let pubkey = pubkey!("11111111111111111111111111111111");
  ```

- `program_pubkey`: Similar to `pubkey`, but returns a `Pubkey` object from the `solana_program` crate.

- `declare_id`: Declares a constant program ID and provides functions to interact with it, such as `check_id` and `id`. For example:

  ```rust
  use solana_sdk::declare_id;

  declare_id!("MyProgram1111111111111111111111111111111");
  ```

  This would generate a constant `ID` with the given public key and provide functions like `check_id` and `id` for interacting with it.

- `declare_deprecated_id`: Similar to `declare_id`, but marks the functions as deprecated.

- `program_declare_id` and `program_declare_deprecated_id`: Same as `declare_id` and `declare_deprecated_id`, but for the `solana_program` crate.

- `pubkeys`: Takes a list of base58 string representations of public keys and returns a vector of `Pubkey` objects. For example:

  ```rust
  use solana_sdk::pubkeys;

  let pubkeys = pubkeys![
      "11111111111111111111111111111111",
      "22222222222222222222222222222222",
      "33333333333333333333333333333333"
  ];
  ```

Additionally, the code includes a `wasm_bindgen_stub` macro to handle WebAssembly bindings and a `CloneZeroed` derive macro to ensure consistent padding across the network when cloning structures.

These macros are useful for developers working with the Solana project, as they simplify the process of declaring and interacting with public keys and program IDs. By using these macros, developers can reduce the amount of boilerplate code they need to write and improve the readability of their code.
