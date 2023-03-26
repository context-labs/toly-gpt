[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/docs/static/img)

The `autodoc/solana/docs/static/img` folder contains image files that are used in the Solana project's documentation, specifically within the Quickstart guides. These images serve as visual aids to help users understand the concepts and processes explained in the guides, making it easier for them to follow along and implement the steps.

For example, the `create-validator-keypair.png` image demonstrates the process of creating a validator keypair using the Solana CLI. It shows the command to be executed and the expected output, which includes the public key of the newly created validator. A developer who is new to Solana and wants to set up a validator can refer to the Quickstart guides and use this image as a reference while following the steps.

```bash
solana-keygen new --outfile ~/validator-keypair.json
```

Similarly, the `fund-validator.png` image illustrates the process of funding a validator using the Solana CLI. It shows the command to be executed, which includes the validator's public key and the amount of SOL to be transferred, as well as the expected output, which confirms the successful transfer of funds.

```bash
solana transfer --from ~/validator-keypair.json <VALIDATOR_PUBLIC_KEY> 1
```

These images are used in the Solana documentation to provide a clear and concise visual representation of the steps involved in setting up and running a Solana validator. They help users to better understand the process and make it easier for them to follow along and implement the steps in their own environment.

In summary, the `autodoc/solana/docs/static/img` folder contains images that are used in the Solana project's documentation to provide visual aids for users who are following the Quickstart guides. These images help users to better understand the concepts and processes involved in setting up and running a Solana validator, making it easier for them to follow along and implement the steps in their own environment.
