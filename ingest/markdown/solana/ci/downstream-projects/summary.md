[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/ci/downstream-projects)

The `ci/downstream-projects` folder in the Solana project contains scripts that automate the process of building, testing, and running downstream projects that depend on Solana. These scripts ensure that the downstream projects are compatible with the current version of Solana and use the same build tools.

The `common.sh` script sets up environment variables and directories for downstream projects. It exports the `SOLANA_VER` and `SOLANA_DIR` variables, which represent the Solana version and directory, respectively. It also sets up the `CARGO`, `CARGO_BUILD_SBF`, and `CARGO_TEST_SBF` variables, which point to the build tools used by Solana. Downstream projects can use these variables to build and test their programs using the same tools as Solana.

```bash
#!/usr/bin/env bash
source solana/ci/downstream-projects/common.sh

# Build and test the downstream project using the same tools as Solana
$CARGO build
$CARGO_TEST_SBF
```

The `func-example-helloworld.sh`, `func-openbook-dex.sh`, and `func-spl.sh` scripts define functions that build and test specific downstream projects, such as the Example HelloWorld project, the OpenBook DEX project, and the Solana Programming Language (SPL) projects. These functions update the Solana dependencies, patch the `Cargo.toml` files, and build and test the programs using the Solana build tools.

The `run-all.sh`, `run-example-helloworld.sh`, `run-openbook-dex.sh`, and `run-spl.sh` scripts are used to run the functions defined in the `func-*.sh` scripts. They source the necessary scripts and call the appropriate functions to build and test the downstream projects.

For example, to build and test the SPL downstream projects, you can run the `run-spl.sh` script:

```bash
./run-spl.sh
```

In summary, the `ci/downstream-projects` folder contains scripts that automate the process of building, testing, and running downstream projects that depend on Solana. These scripts ensure compatibility with the current version of Solana and use the same build tools, making it easier for developers to test and deploy their code.
