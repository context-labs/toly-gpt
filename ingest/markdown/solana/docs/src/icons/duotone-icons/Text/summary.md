[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/docs/src/icons/duotone-icons/Text)

The `Text` folder in the `duotone-icons` directory contains SVG files for text-related icons that are used throughout the Solana project. These icons are designed with a duotone style, which means they have two distinct colors or shades, making them visually appealing and easy to recognize.

Here's a summary of the files in this folder:

1. `align-center.svg`: An icon representing the alignment of text to the center.
2. `align-justify.svg`: An icon representing the justification of text, where both the left and right edges are aligned.
3. `align-left.svg`: An icon representing the alignment of text to the left.
4. `align-right.svg`: An icon representing the alignment of text to the right.
5. `bold.svg`: An icon representing bold text formatting.
6. `italic.svg`: An icon representing italic text formatting.
7. `strikethrough.svg`: An icon representing strikethrough text formatting.
8. `underline.svg`: An icon representing underlined text formatting.

These icons are used in various parts of the Solana project, such as in the user interface (UI) for text editing tools or as visual cues for users to understand the functionality of certain buttons or actions. For example, the `bold.svg` icon might be used on a button that toggles the bold formatting of selected text in a text editor.

To use one of these icons in your project, you can simply include the SVG file as an image source or inline the SVG code directly in your HTML or JSX code. Here's an example of how to use the `bold.svg` icon in an HTML file:

```html
<button>
  <img src="path/to/Text/bold.svg" alt="Bold" />
</button>
```

And here's an example of how to use the `bold.svg` icon in a React component:

```jsx
import React from 'react';
import { ReactComponent as BoldIcon } from 'path/to/Text/bold.svg';

const BoldButton = () => (
  <button>
    <BoldIcon />
  </button>
);

export default BoldButton;
```

In summary, the `Text` folder in the `duotone-icons` directory contains a collection of text-related icons that can be used throughout the Solana project. These icons are designed with a duotone style and can be easily integrated into various parts of the project, such as UI components or visual cues for users.
