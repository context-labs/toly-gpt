[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/docs/src/icons/duotone-icons/Map)

The `Map` folder within the `duotone-icons` directory contains the necessary files and resources for rendering map-related icons in the Solana project. These icons are designed with a duotone style, which means they use two colors to create a visually appealing and easily recognizable representation of the map elements.

### Files

Here is a summary of the files in the `Map` folder:

- `MapIcon.tsx`: This file contains the React component for the MapIcon. It imports the necessary SVG assets and applies the appropriate styling to render the icon. This component can be used throughout the Solana project to display a map icon wherever it is needed. Example usage:

  ```jsx
  import MapIcon from 'path/to/MapIcon';

  function MyComponent() {
    return (
      <div>
        <MapIcon />
      </div>
    );
  }
  ```

- `MapIcon.stories.tsx`: This file contains the Storybook stories for the MapIcon component. It demonstrates different use cases and variations of the MapIcon, which can be helpful for developers to understand how the component can be used and customized. To view the stories, run the Storybook server and navigate to the MapIcon section.

- `MapIcon.test.tsx`: This file contains the unit tests for the MapIcon component. It ensures that the component renders correctly and behaves as expected. To run the tests, execute the test command in the project's root directory.

- `index.ts`: This file exports the MapIcon component, making it available for other parts of the Solana project to import and use. Example usage:

  ```jsx
  import { MapIcon } from 'path/to/icons/duotone-icons/Map';

  function MyComponent() {
    return (
      <div>
        <MapIcon />
      </div>
    );
  }
  ```

### Subfolders

There are no subfolders in the `Map` folder.

In summary, the `Map` folder within the `duotone-icons` directory provides a MapIcon component that can be used throughout the Solana project to display map-related icons. The component is designed with a duotone style, making it visually appealing and easily recognizable. The folder also includes Storybook stories and unit tests to help developers understand and verify the component's functionality.
