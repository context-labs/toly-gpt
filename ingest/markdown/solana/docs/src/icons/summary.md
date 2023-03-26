[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/docs/src/icons)

The `autodoc/solana/docs/src/icons` folder contains a collection of SVG icons that are used throughout the Solana documentation. These icons are organized into two subfolders: `duotone-icons` and `social`.

The `duotone-icons` subfolder contains a set of general-purpose icons that can be used in various parts of the Solana documentation. The contents of this folder are not specified, but they may include icons for navigation, user interface elements, or other visual aids.

The `social` subfolder contains a set of icons related to social media platforms and communication channels. These icons are used to provide users with quick access to relevant social media platforms and communication channels, such as Twitter, Discord, and GitHub. The following code snippet demonstrates how to include the Twitter icon and link it to the Solana Twitter account:

```jsx
import TwitterIcon from './icons/social/twitter.svg';

function SocialLinks() {
  return (
    <a href="https://twitter.com/solana" target="_blank" rel="noopener noreferrer">
      <TwitterIcon />
    </a>
  );
}
```

This code imports the `twitter.svg` file as a React component and wraps it in an anchor tag that links to the Solana Twitter account. The `target="_blank"` and `rel="noopener noreferrer"` attributes ensure that the link opens in a new tab and maintains the security of the parent page.

In summary, the `autodoc/solana/docs/src/icons` folder contains a set of SVG icons that can be used throughout the Solana documentation to enhance the user experience and provide quick access to relevant resources. These icons are organized into two subfolders, `duotone-icons` for general-purpose icons and `social` for social media icons. The icons are implemented as SVG files, making them easy to integrate into the documentation as React components.
