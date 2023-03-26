[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/streamer/src/nonblocking)

The `autodoc/solana/streamer/src/nonblocking` folder contains modules that provide non-blocking I/O operations for the Solana project, specifically for sending and receiving UDP packets. These modules are crucial for efficient communication between nodes without blocking the calling thread, improving performance and scalability.

The `quic` module implements the QUIC protocol, a transport layer protocol designed for secure, reliable, and low-latency communication over the internet. This module can be used to establish secure connections between nodes in the Solana network.

The `recvmmsg` module provides a non-blocking implementation of the `recvmsg` system call for receiving messages from a socket. It contains two functions: `recv_mmsg()` and `recv_mmsg_exact()`. The `recv_mmsg()` function reads some packets from a socket into a specified container and returns the number of packets read. The `recv_mmsg_exact()` function reads the exact number of packets required to fill the slice of packets. This module is used throughout the Solana codebase, including in the networking stack and the validator.

Example usage:

```rust
use solana::streamer::recvmmsg::{recv_mmsg, recv_mmsg_exact};
use solana::streamer::packet::Packet;
use tokio::net::UdpSocket;

async fn read_packets(socket: &UdpSocket, num_packets: usize) -> Vec<Packet> {
    let mut packets = vec![Packet::default(); num_packets];
    let num_read = recv_mmsg_exact(socket, &mut packets[..]).await.unwrap();
    packets.truncate(num_read);
    packets
}

async fn read_packets_nonblocking(socket: &UdpSocket, num_packets: usize) -> Vec<Packet> {
    let mut packets = vec![Packet::default(); num_packets];
    let num_read = recv_mmsg(socket, &mut packets[..]).await.unwrap();
    packets.truncate(num_read);
    packets
}
```

The `sendmmsg` module provides a non-blocking implementation of the `sendmmsg()` API for sending multiple UDP packets in a single call. It contains two main functions: `batch_send()` and `multi_target_send()`. `batch_send()` sends different packets to different addresses, while `multi_target_send()` sends the same packet to multiple addresses.

Example usage:

```rust
use solana::streamer::sendmmsg::{batch_send, multi_target_send};
use tokio::net::UdpSocket;

async fn send_packets(socket: &UdpSocket, packets: &[(Vec<u8>, SocketAddr)]) {
    let sent = batch_send(socket, packets).await.ok();
    assert_eq!(sent, Some(()));
}

async fn send_packet_to_multiple_addresses(socket: &UdpSocket, packet: &[u8], addresses: &[SocketAddr]) {
    let sent = multi_target_send(socket, packet, addresses).await.ok();
    assert_eq!(sent, Some(()));
}
```

These modules are essential for efficient communication in the Solana project, allowing for non-blocking I/O operations when sending and receiving UDP packets.
