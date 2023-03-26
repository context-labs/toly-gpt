[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/ci/docker-rust)

The `ci/docker-rust` folder in the Solana project contains files and subfolders related to the Docker configuration for the Rust environment used in the Continuous Integration (CI) pipeline. This setup ensures that the Rust code in the Solana project is built, tested, and deployed in a consistent and reproducible manner.

Here's a summary of the files and subfolders in this folder:

### Files

1. `Dockerfile`: This file defines the Docker image for the Rust environment. It starts with the official Rust image and installs additional dependencies required for building and testing the Solana project. This includes tools like `build-essential`, `clang`, `libssl-dev`, and `pkg-config`. The Dockerfile also sets up the environment variables and the working directory for the container.

### Subfolders

1. `entrypoint`: This subfolder contains the `entrypoint.sh` script, which is executed when the Docker container is started. The script sets up the Rust environment by installing the required Rust toolchain and components, such as `rustup`, `cargo`, and `rustc`. It also configures the `CARGO_HOME` and `RUSTUP_HOME` environment variables. Finally, the script executes the command passed to the Docker container, allowing it to run build, test, or other tasks.

2. `rust`: This subfolder contains the `rust-toolchain` file, which specifies the exact version of the Rust toolchain to be used in the Docker container. This ensures that the Solana project is built and tested using a consistent Rust version across different stages of the CI pipeline and on different developers' machines.

### Usage

The Docker image defined in this folder is used in the CI pipeline to build and test the Rust code in the Solana project. For example, the following command can be used to build the Solana project using the Docker image:

```bash
docker build -t solana-ci-rust -f ci/docker-rust/Dockerfile .
docker run --rm -v "$(pwd)":/solana -w /solana solana-ci-rust cargo build --release
```

This command first builds the Docker image using the `Dockerfile` in the `ci/docker-rust` folder and then runs a container using the built image. The container mounts the current working directory (the root of the Solana project) as a volume and sets it as the working directory. The `cargo build --release` command is then executed inside the container to build the Solana project.

Similarly, the Docker image can be used to run tests for the Solana project:

```bash
docker run --rm -v "$(pwd)":/solana -w /solana solana-ci-rust cargo test
```

In summary, the `ci/docker-rust` folder contains the Docker configuration for the Rust environment used in the Solana project's CI pipeline. This setup ensures that the Rust code is built, tested, and deployed in a consistent and reproducible manner using a specific version of the Rust toolchain and required dependencies.
