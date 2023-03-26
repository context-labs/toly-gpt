[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/docs/src/api/deprecated)

The `deprecated` folder in the Solana API documentation contains files and subfolders related to deprecated features and functions within the Solana project. These files and subfolders are maintained for reference purposes and to provide support for legacy code that may still be using these deprecated features.

### Files

1. **deprecated.md**: This file provides an overview of the deprecated features and functions in the Solana API. It includes a brief description of each deprecated item, the reason for its deprecation, and the recommended alternative to use in place of the deprecated feature.

### Subfolders

There are no subfolders in this folder.

### Usage

The code in this folder is primarily for reference and documentation purposes. Developers working with the Solana API should consult the `deprecated.md` file to understand which features and functions have been deprecated and what alternatives they should use instead.

For example, if a developer encounters a deprecated function in their codebase, they can refer to the `deprecated.md` file to understand why the function was deprecated and what alternative function they should use to replace it.

Here's a sample entry from the `deprecated.md` file:

```markdown
### `getConfirmedBlock`

**Deprecated in:** v1.7.0

**Reason:** This method has been renamed to `getBlock` to better align with the naming conventions used in other methods.

**Alternative:** Use the `getBlock` method instead.
```

In this example, the `getConfirmedBlock` method has been deprecated in favor of the `getBlock` method. Developers should replace any instances of `getConfirmedBlock` in their code with `getBlock`.

### Conclusion

The `deprecated` folder in the Solana API documentation serves as a valuable resource for developers working with the Solana project. By providing clear and concise information about deprecated features and functions, it helps developers maintain their codebase and transition to using the latest and most efficient features available in the Solana API.
