[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/net-utils)

The `solana/net-utils` folder contains utilities for working with IP addresses in the Solana project. It provides a simple TCP server that echoes the IP address of any peer that connects, allowing nodes to determine their public IP address as seen by other nodes on the network.

The `src` folder contains the main code for the IP echo server. The `IpEchoServerMessage` struct represents the request message sent to the server, containing two fixed-size lists of ports for TCP and UDP. The `IpEchoServerResponse` struct represents the response message sent by the server, containing the public IP address of the peer that connected and the cluster shred-version of the node running the server.

The `ip_echo_server` function starts the TCP server on the given port and returns a `Runtime` object. The `run_echo_server` function is the main loop of the server, listening for incoming connections and spawning a new task to process each connection. The `process_connection` function reads the request message from the client, sends datagrams to the specified UDP ports, tries to connect to the specified TCP ports, and sends the response message back to the client.

The `src/bin` directory contains two binary files, `ip_address.rs` and `ip_address_server.rs`, which provide utilities for working with IP addresses in the Solana project.

`ip_address.rs` is a utility that retrieves the public IP address of a given host and port. Example usage:

```
$ solana-ip-address example.com:1234
203.0.113.1
```

`ip_address_server.rs` sets up a TCP listener on a specified port and runs an IP echo server. This allows Solana nodes to determine their public IP address. Example usage:

To start the IP address server on port 8000, run the following command:

```
solana-ip-address-server 8000
```

In summary, the `solana/net-utils` directory provides utilities for working with IP addresses in the Solana project. `ip_address.rs` retrieves the public IP address of a given host and port, while `ip_address_server.rs` sets up a TCP listener and runs an IP echo server to allow Solana nodes to determine their public IP address. These utilities can be used as standalone tools or integrated into other Solana projects that require IP address information for networking purposes.
