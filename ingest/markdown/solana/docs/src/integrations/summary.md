[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/docs/src/integrations)

The `integrations` folder in the Solana documentation contains resources and guides for integrating various third-party services and tools with the Solana blockchain. This folder is essential for developers who want to leverage the power of Solana in their applications and projects.

### Files

1. **anchor.md**: This file provides an overview of the Anchor framework, a popular Rust-based framework for building and deploying Solana smart contracts. It explains how to set up Anchor, create a new project, and write, test, and deploy smart contracts using the framework.

2. **metaplex.md**: This file covers the integration of Metaplex, a protocol built on Solana that allows users to create, mint, and manage NFTs (non-fungible tokens). It explains the basics of Metaplex, how to set up a Metaplex store, and how to interact with the Metaplex API.

3. **phantom.md**: This file discusses the integration of Phantom, a popular Solana wallet that allows users to manage their Solana tokens and interact with decentralized applications (dApps) built on the Solana blockchain. It provides an overview of Phantom, how to install and use the wallet, and how to integrate Phantom into a dApp.

4. **solflare.md**: This file explains the integration of Solflare, another Solana wallet that allows users to manage their Solana tokens and interact with dApps built on the Solana blockchain. It provides an overview of Solflare, how to install and use the wallet, and how to integrate Solflare into a dApp.

### Subfolders

1. **oracle**: This subfolder contains guides and resources for integrating various oracle services with the Solana blockchain. Oracles are essential for providing off-chain data to smart contracts and dApps. The folder currently includes documentation for integrating Chainlink and Pyth oracles.

2. **storage**: This subfolder contains guides and resources for integrating decentralized storage solutions with the Solana blockchain. Decentralized storage is crucial for storing and retrieving large amounts of data in a secure and distributed manner. The folder currently includes documentation for integrating Arweave and IPFS storage solutions.

3. **wallets**: This subfolder contains guides and resources for integrating various wallet services with the Solana blockchain. Wallets are essential for managing user accounts, tokens, and interactions with dApps. The folder currently includes documentation for integrating Sollet, Solong, and MathWallet.

For example, to integrate the Phantom wallet into a dApp, developers can follow the guide in the `phantom.md` file. This guide explains how to install the Phantom wallet, create a new wallet, and connect the wallet to a dApp using the `@solana/wallet-adapter` package.

```javascript
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

function App() {
  const { connected } = useWallet();

  return (
    <div>
      {connected ? (
        <p>Connected to Phantom wallet</p>
      ) : (
        <WalletMultiButton>Connect Wallet</WalletMultiButton>
      )}
    </div>
  );
}
```

In summary, the `integrations` folder provides essential resources and guides for developers who want to integrate various third-party services and tools with the Solana blockchain. This folder is crucial for developers looking to leverage the power of Solana in their applications and projects.
