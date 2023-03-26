[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/sdk/program/src/wasm)

The `autodoc/solana/sdk/program/src/wasm` folder contains Rust code that is compiled to WebAssembly (wasm) for interacting with the Solana blockchain from within a JavaScript environment. The code provides interfaces and utility functions for creating, manipulating, and converting hash values, public keys, and instructions, as well as managing accounts on the Solana blockchain.

The `hash.rs` file implements the `Hash` interface, which provides methods for creating, manipulating, and converting hash values. For example, it can be used to create a new `Hash` object from a user input string, convert a `Hash` object to a byte array to be sent over the network, or compare two `Hash` objects for equality.

The `instructions.rs` file contains the `Instructions` struct, which is a workaround for the lack of support for `Vec<T>` in `wasm-bindgen`. This struct provides a way to store and manipulate a collection of `Instruction` objects in WebAssembly code. It can be used to facilitate the execution of smart contracts on the Solana blockchain.

```rust
use solana_sdk::program::invoke;

// Define some instructions
let mut instructions = Instructions::default();
instructions.push(Instruction::new_with_bytes(&[0x01, 0x02, 0x03]));

// Invoke the instructions
invoke(&[&instructions], &[])?;
```

The `pubkey.rs` file implements the `Pubkey` interface, which provides methods for creating, manipulating, and deriving public keys used in the Solana blockchain. These methods are used throughout the Solana project to generate new keys and addresses for transactions and accounts.

```javascript
const pubkeyStr = '4t4J7zJZzvPvJLJbKv5fJ8jvKjvJ7zJZzvPvJLJbKv5';
const pubkey = new solanaWeb3.PublicKey(pubkeyStr);
```

The `system_instruction.rs` file contains a Rust implementation of the `SystemInstruction` interface for use in JavaScript. This interface provides a set of functions that allow for the creation and manipulation of accounts on the Solana blockchain.

```javascript
const solanaWeb3 = require('@solana/web3.js');
const systemInstruction = require('solana/sdk/program/src/wasm/system_instruction');

const fromPubkey = new solanaWeb3.PublicKey('...');
const toPubkey = new solanaWeb3.PublicKey('...');
const ownerPubkey = new solanaWeb3.PublicKey('...');
const lamports = 1000000;
const space = 1024;

const instruction = systemInstruction.createAccount(fromPubkey, toPubkey, lamports, space, ownerPubkey);
```

The `mod.rs` file contains code for the solana-program JavaScript interface, which initializes logging and a panic handler for the Solana program and provides utility functions for converting Rust objects to JavaScript objects.
