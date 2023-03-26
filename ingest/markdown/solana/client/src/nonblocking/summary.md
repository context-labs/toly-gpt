[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/client/src/nonblocking)

The `autodoc/solana/client/src/nonblocking` folder contains modules for non-blocking communication with a Solana node over various protocols, such as QUIC, TPU, UDP, and RPC. These modules enable querying the state of the Solana blockchain or submitting transactions without blocking the calling thread.

The `mod.rs` file provides an overview of the modules in this folder, including `quic_client`, `tpu_client`, `tpu_connection`, and `udp_client`. It also includes modules for blockhash queries and durable transaction nonce helpers. The `blockhash_query` module allows retrieving the current blockhash from a Solana node in a non-blocking context, while the `nonce_utils` module generates and retrieves durable nonces for transactions to prevent replay attacks.

The `quic_client.rs` file contains a deprecated non-blocking QUIC client connection module. It is recommended to use `solana_quic_client::nonblocking::quic_client::QuicClientConnection` instead. The QUIC protocol provides a secure and reliable connection between two endpoints, and the non-blocking aspect allows the client to perform other tasks while waiting for a response from the server.

The `tpu_client.rs` file implements a client that sends transactions directly to the current leader's TPU port over UDP. The `TpuClient` struct provides methods for sending transactions and wire transactions to the current and upcoming leader TPUs according to fanout size. It also includes methods for sending and confirming messages with a spinner, returning the RPC client used by the TPU client, and shutting down the TPU client.

The `tpu_connection.rs` file provides a deprecated TpuConnection implementation for the Solana blockchain project. Clients can use this implementation to send transactions to the Solana network and receive responses from the TPU node. The non-blocking nature of the connection allows clients to continue processing other tasks while waiting for a response from the TPU node.

The `udp_client.rs` file is a deprecated module that provides a non-blocking UDP client connection for the Solana blockchain network. The module exports a single class `UdpTpuConnection`, which is now available in the `solana_udp_client` crate. Users are advised to use the `UdpClientConnection` class from the `solana_udp_client` crate instead.

In summary, the `autodoc/solana/client/src/nonblocking` folder contains modules for non-blocking communication with a Solana node over various protocols. These modules enable efficient use of system resources and allow clients to perform tasks asynchronously without blocking the calling thread.
