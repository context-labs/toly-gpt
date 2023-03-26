[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/download-utils/src)

The `solana/download-utils/src/lib.rs` file provides essential utilities for downloading files, such as genesis and snapshot archives, from a remote server. These utilities play a crucial role in the Solana project, as they facilitate the process of fetching necessary files for setting up and maintaining a node.

The main functions provided in this file are:

- `download_file`: Downloads a file from a given URL and saves it to a specified destination path. It also supports displaying a progress bar and invoking a callback function to report download progress.
- `download_genesis_if_missing`: Downloads the genesis archive from a specified RPC address if it doesn't already exist in the given path. It returns the path to the downloaded file or an error if the genesis archive already exists.
- `download_snapshot_archive`: Downloads a snapshot archive (either full or incremental) from a specified RPC address and saves it to the appropriate directory. It also purges old snapshot archives based on the provided retention limits.

These functions use the `DownloadProgressRecord` struct to model the download progress, which includes information such as elapsed time, throughput, total bytes, and estimated remaining time. The `DownloadProgressCallback` type is used to define a callback function that can be invoked with the progress record during the download process.

Here's an example of how to use the `download_file` function:

```rust
let url = "https://example.com/file.txt";
let destination_path = Path::new("/path/to/save/file.txt");
let use_progress_bar = true;
let mut progress_callback: DownloadProgressCallbackOption = None;

download_file(url, &destination_path, use_progress_bar, &mut progress_callback)
    .expect("Failed to download file");
```

And an example of using the `download_genesis_if_missing` function:

```rust
let rpc_addr = "127.0.0.1:8899".parse().unwrap();
let genesis_package = Path::new("/path/to/genesis");
let use_progress_bar = true;

download_genesis_if_missing(&rpc_addr, &genesis_package, use_progress_bar)
    .expect("Failed to download genesis");
```

These utilities are helpful for developers working with the Solana project, as they simplify the process of downloading and managing necessary files for running a node.
