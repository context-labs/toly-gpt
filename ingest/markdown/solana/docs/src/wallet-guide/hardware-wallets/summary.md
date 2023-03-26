[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/docs/src/wallet-guide/hardware-wallets)

The `autodoc/solana/docs/src/wallet-guide/hardware-wallets` folder contains documentation and guides related to integrating hardware wallets with the Solana project. Hardware wallets provide an additional layer of security for managing and storing private keys, making them a popular choice for users who want to safeguard their assets.

### Files

1. **ledger.md**: This file contains a guide on how to use the Ledger Nano S/X hardware wallet with Solana. It covers the installation of the Solana app on the Ledger device, setting up the Solana command-line tools, and using the Ledger device to sign transactions. The guide also provides troubleshooting tips and frequently asked questions related to the Ledger integration.

### Subfolders

1. **images**: This subfolder contains images used in the hardware wallet documentation. These images help users visually understand the steps involved in setting up and using hardware wallets with Solana.

The documentation in this folder is essential for developers and users who want to integrate hardware wallets into their Solana-based applications or securely manage their Solana tokens. By following the guides provided, users can ensure that their private keys are securely stored on a hardware wallet, reducing the risk of theft or loss.

For example, a developer building a Solana-based decentralized application (dApp) might want to provide support for hardware wallets to attract security-conscious users. They could refer to the documentation in this folder to understand how to integrate Ledger devices with their dApp.

Here's a code example from the `ledger.md` file that demonstrates how to use the Solana command-line tools with a Ledger device:

```bash
# Configure the Solana command-line tools to use the Ledger device
$ solana config set --keypair usb://ledger

# Check the balance of the associated Solana address
$ solana balance

# Transfer 123 SOL to another address
$ solana transfer <RECIPIENT_ADDRESS> 123
```

In summary, the `autodoc/solana/docs/src/wallet-guide/hardware-wallets` folder provides essential documentation and guides for integrating hardware wallets, such as Ledger devices, with the Solana project. This information is valuable for developers building Solana-based applications and users who want to securely manage their Solana tokens using hardware wallets.
