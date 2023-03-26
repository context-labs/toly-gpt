[View code on GitHub](https://github.com/solana-labs/solana/blob/master/net/scripts/install-libssl-compatability.sh)

The `install-libssl-compatability.sh` script is a bash script that installs two packages, `libssl-dev` and `libssl1.1`, on a Linux machine. The purpose of this script is to ensure compatibility with binaries built on an Ubuntu machine and in the `solanalabs/rust` docker image. 

The script starts by setting the `set -ex` option, which enables debugging and error reporting. The script then checks if the machine is running Linux and if the user is root. If either of these conditions is not met, the script exits with an error.

The first package installed is `libssl-dev`, which is required to be compatible with binaries built on an Ubuntu machine. This package provides the development files for the OpenSSL library, which is used for secure communication over networks. The `apt-get update` command updates the package list, and `apt-get --assume-yes install libssl-dev` installs the package without prompting for confirmation.

The second package installed is `libssl1.1`, which is required to be compatible with binaries built in the `solanalabs/rust` docker image. This package provides the runtime files for the OpenSSL library. The reason for installing this package is explained in a comment in the script, which references an issue on the Solana project's GitHub repository.

Overall, this script ensures that the necessary OpenSSL packages are installed on the machine to ensure compatibility with binaries built on an Ubuntu machine and in the `solanalabs/rust` docker image. This script may be used as part of the larger Solana project to ensure that all machines running Solana software have the necessary dependencies installed. 

Example usage:
```
$ chmod +x install-libssl-compatability.sh
$ sudo ./install-libssl-compatability.sh
```
## Questions: 
 1. What is the purpose of this script?
   - This script installs libssl-dev and libssl1.1 to ensure compatibility with binaries built on an Ubuntu machine and in the solanalabs/rust docker image.

2. Why does the script exit if the user is not root?
   - The script requires root privileges to install the necessary packages, so it exits if the user is not root.

3. What is the significance of the comment referencing issue #1090 on GitHub?
   - The comment references an issue on the Solana GitHub repository, indicating that the installation of libssl1.1 is necessary to resolve compatibility issues with binaries built in the solanalabs/rust docker image.