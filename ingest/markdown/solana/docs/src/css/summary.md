[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/docs/src/css)

The `custom.css` file in the `autodoc/solana/docs/src/css` folder is responsible for defining the global styles for the Solana project documentation. It is built on the Infima CSS framework and ensures a consistent look and feel throughout the documentation.

The file starts by importing the Roboto font from Google Fonts and setting various color, font, and spacing variables. These variables are used throughout the CSS to maintain consistency in the design.

An example of an animation defined in this file is the `@keyframes fadeInUp`, which is later used in the `.card` class to create a fade-in effect for cards. The `main` element has its margin adjusted to provide better spacing on the page.

Code blocks are styled using the `.docusaurus-highlight-code-line` class, which sets a specific background color and padding. For example:

```css
.docusaurus-highlight-code-line {
  background-color: #f5f5f5;
  padding: 0.5rem;
}
```

Buttons are styled using the `.button` class, which sets a specific background color, font size, and padding:

```css
.button {
  background-color: #007bff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
}
```

The file also contains classes for adjusting the spacing and margins for various elements within the documentation, such as `.container__spacer`, `.cards__container`, and `.col`. The `.card` class is used to style cards with specific padding, animation, and border styles. The `:hover` state for cards is also defined, changing the border color when the user hovers over a card.

The dark theme footer is styled using the `.footer--dark` class, which sets a specific background color. The `footer .text--center` class adjusts the padding for centered text within the footer.

Header text within cards is styled using the `.card__header h3` class, which sets a specific color. Header icons for GitHub and Discord are styled using the `.header-link-icon` and related classes, which set specific background images and padding.

In summary, the `custom.css` file in the `autodoc/solana/docs/src/css` folder is crucial for creating a visually appealing and consistent design for the Solana project documentation. It defines global styles, animations, and various element-specific styles that work together to create a cohesive user experience.
