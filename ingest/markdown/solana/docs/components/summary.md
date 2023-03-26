[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/docs/components)

The `autodoc/solana/docs/components` folder contains React components that are used to display various parts of the Solana project documentation. These components are designed to provide a consistent and visually appealing documentation experience.

The `Card.jsx` file contains a `Card` component that is used to display features or sections of the Solana project on the website. It takes in several props, including `to`, `header`, `body`, and `externalIcon`. The `to` prop specifies the link that the card should navigate to when clicked, while the `header` and `body` props are used to display the title and description of the card, respectively. The `externalIcon` prop, when set to `true`, displays an external link icon next to the header text. The `Card` component is designed to be used in a grid layout, with each card taking up a fixed width of 4 columns.

```jsx
import Card from "./components/Card";

function Features() {
  return (
    <section>
      <h2>Features</h2>
      <div className="row">
        <Card
          to="/docs/feature-1"
          header={{ label: "Feature 1", translateId: "feature1" }}
          body={{ label: "Description of feature 1", translateId: "feature1Desc" }}
        />
        {/* ... */}
      </div>
    </section>
  );
}
```

The `CodeDocBlock.jsx` file contains a set of components that are used to display code documentation in a consistent and visually appealing way. These components include `DocBlock`, `DocSideBySide`, `CodeParams`, `CodeSnippets`, `Parameter`, `Field`, and `Values`. They are designed to be used in conjunction with other components in the Solana project to provide a unified documentation experience.

The `HomeCtaLinks.jsx` file contains a `HomeCtaLinks` component that displays call-to-action links on the Solana homepage. It returns a container with three `Card` components, each with a `to` prop specifying the link destination and a `header` prop containing the label and translation ID for the link. This component is used to provide easy access to important pages for developers, validators, and those interested in the architecture of the Solana network.

```jsx
import HomeCtaLinks from "./components/HomeCtaLinks";

function App() {
  return (
    <div>
      <h1>Welcome to Solana</h1>
      <HomeCtaLinks />
    </div>
  );
}
```

In summary, the `autodoc/solana/docs/components` folder contains React components that are used to display various parts of the Solana project documentation, such as feature cards, code documentation blocks, and call-to-action links. These components are designed to provide a consistent and visually appealing documentation experience and can be used in conjunction with other components in the Solana project.
