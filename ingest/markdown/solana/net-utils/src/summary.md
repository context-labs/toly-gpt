[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/net-utils/src)

The `solana/net-utils/src` folder contains code for a simple TCP server that echoes the IP address of any peer that connects, allowing nodes to determine their public IP address as seen by other nodes on the network. The server listens on a given TCP port and accepts incoming connections. When a connection is established, the server sends a datagram to each non-zero UDP port specified in the request message and tries to connect to each non-zero TCP port. After sending the datagrams and attempting to connect to the TCP ports, the server sends a response message containing the public IP address of the peer that connected and the cluster shred-version of the node running the server.

The `IpEchoServerMessage` struct represents the request message sent to the server. It contains two fixed-size lists of ports, one for TCP and one for UDP. The `IpEchoServerResponse` struct represents the response message sent by the server. It contains the public IP address of the peer that connected and the cluster shred-version of the node running the server.

The `ip_echo_server` function starts the TCP server on the given port and returns a `Runtime` object. The `run_echo_server` function is the main loop of the server. It listens for incoming connections and spawns a new task to process each connection. The `process_connection` function processes each connection. It reads the request message from the client, sends datagrams to the specified UDP ports, tries to connect to the specified TCP ports, and sends the response message back to the client.

This code provides a simple way for nodes to determine their public IP address as seen by other nodes on the network. It can be used in the larger project to facilitate communication between nodes and to ensure that nodes are using the correct IP address when communicating with each other.

The `solana/net-utils/src/bin` directory contains two binary files, `ip_address.rs` and `ip_address_server.rs`, which provide utilities for working with IP addresses in the Solana project.

`ip_address.rs` is a utility that retrieves the public IP address of a given host and port. It uses the `clap` crate to define a command-line interface for the utility, which takes a single required argument called `host_port`. The code then calls the `parse_host_port` and `get_public_ip_addr` functions from the `solana_net_utils` crate to parse the `host_port` argument and retrieve the public IP address. This utility can be used as a standalone tool or integrated into other Solana projects that require knowledge of the public IP address of a remote host.

Example usage:

```
$ solana-ip-address example.com:1234
203.0.113.1
```

`ip_address_server.rs` sets up a TCP listener on a specified port and runs an IP echo server. This allows Solana nodes to determine their public IP address. The code uses the `clap` crate to parse command line arguments, expecting a single argument, `port`. It then creates a `SocketAddr` object and a `TcpListener` object, which is used to listen for incoming TCP connections on the specified port. The `ip_echo_server` function from the `solana_net_utils` crate is called to set up the IP echo server.

The code enters an infinite loop using `std::thread::park()` to prevent the program from exiting immediately after starting the TCP listener and IP echo server. This functionality is important for Solana nodes to communicate with each other and participate in the Solana network.

Example usage:

To start the IP address server on port 8000, run the following command:

```
solana-ip-address-server 8000
```

In summary, the `solana/net-utils/src` directory provides utilities for working with IP addresses in the Solana project. `ip_address.rs` retrieves the public IP address of a given host and port, while `ip_address_server.rs` sets up a TCP listener and runs an IP echo server to allow Solana nodes to determine their public IP address. These utilities can be used as standalone tools or integrated into other Solana projects that require IP address information for networking purposes.
