[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/frozen-abi/macro)

The `autodoc/solana/frozen-abi/macro` folder contains Rust macros that help ensure ABI (Application Binary Interface) stability in the Solana project. These macros generate implementations for the `AbiExample` and `AbiEnumVisitor` traits, which are used to test the ABI stability of structs and enums.

The `src/lib.rs` file defines three macros:

1. `frozen_abi`: This macro attribute is used to specify the expected ABI digest for a given struct, enum, or type alias. When applied, it generates a test module that checks if the actual ABI digest matches the expected one. If the digests don't match, it suggests that the ABI might have changed, and the developer should investigate the differences.

2. `derive_abi_sample`: This macro derives an implementation of the `AbiExample` trait for a given struct or enum. This trait provides an `example()` method that returns an instance of the type with sample values. This is used to generate sample instances for testing ABI stability.

3. `derive_abi_enum_visitor`: This macro derives an implementation of the `AbiEnumVisitor` trait for a given enum. This trait provides a `visit_for_abi()` method that serializes each variant of the enum and updates the ABI digester with the serialized data. This is used to compute the ABI digest of the enum.

Here's an example of how these macros can be used:

```rust
#[frozen_abi(digest = "1234567890abcdef")]
#[derive(AbiExample, AbiEnumVisitor)]
pub enum MyEnum {
    Variant1,
    Variant2(u32),
    Variant3 { field: String },
}
```

In this example, the `frozen_abi` macro attribute is applied to `MyEnum`, specifying the expected ABI digest. The `derive_abi_sample` and `derive_abi_enum_visitor` macros are also applied, generating implementations of the `AbiExample` and `AbiEnumVisitor` traits for `MyEnum`. This allows the ABI stability of `MyEnum` to be tested against the expected digest.

These macros play a crucial role in maintaining ABI stability in the Solana project. By generating implementations for the `AbiExample` and `AbiEnumVisitor` traits and checking the ABI digest against the expected value, developers can ensure that changes to the codebase do not inadvertently break ABI compatibility. This is particularly important for a blockchain project like Solana, where maintaining compatibility between different versions of the software is essential for the network's stability and security.
