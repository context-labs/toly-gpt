[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/docs/src/pages)

The `autodoc/solana/docs/src/pages` folder contains files and components that are used to create the documentation pages for the Solana project. These pages provide developers with information and resources for building applications on the Solana blockchain.

The `CodeDocBlock.module.css` file defines CSS styles for the documentation blocks, ensuring a consistent and visually appealing layout. For example, developers can use the `.DocBlock` class to create a documentation block with a top border, padding, and margin:

```html
<div class="DocBlock">
  <!-- Documentation content goes here -->
</div>
```

The `api.js` file defines a React component, `APIPage`, which renders a landing page for the Solana JSON RPC API documentation. This page provides an overview of the API and links to more detailed information about its various methods and libraries:

```jsx
import APIPage from "./path/to/api";

function App() {
  return (
    <div>
      <APIPage />
    </div>
  );
}
```

The `developers.js` file defines a React component, `Developers`, which renders a page for Solana developers. This page contains links to tutorials, documentation, and example code, serving as a starting point for learning about Solana development:

```jsx
import Developers from "./path/to/Developers";

function App() {
  return (
    <div>
      <Developers />
    </div>
  );
}
```

The `getstarted.jsx` file defines a React component, `GetStartedPage`, which renders a page with quick start guides for developers who want to build on the Solana blockchain. The page contains `Card` components that provide a brief description of each guide and a link to access it:

```jsx
import GetStartedPage from "./path/to/getstarted";

function App() {
  return (
    <div>
      <GetStartedPage />
    </div>
  );
}
```

The `styles.module.css` file contains CSS code that is used to style various components of the Solana project's documentation website. Developers can use these classes to ensure consistency in the styling of different components across the website:

```html
<div class="heroBanner">
  <!-- Hero banner content goes here -->
</div>
```

Overall, the files in the `autodoc/solana/docs/src/pages` folder are essential for creating a user-friendly and informative documentation website for the Solana project. Developers can use these components and styles to create new pages or modify existing ones, ensuring a consistent and visually appealing experience for users.
