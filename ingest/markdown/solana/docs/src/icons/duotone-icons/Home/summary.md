[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/docs/src/icons/duotone-icons/Home)

The `Home` folder located at `autodoc/solana/docs/src/icons/duotone-icons/Home` contains the source code and assets for the duotone home icons used within the Solana project. Duotone icons are a type of icon that uses two colors to create a visually appealing and easily recognizable design. These icons are typically used for navigation, buttons, and other user interface elements.

## Files

Here's a brief overview of the files in this folder:

1. `Home.js`: This file contains the JavaScript code for rendering the Home icon as a React component. It imports the necessary dependencies, defines the `Home` component, and exports it for use in other parts of the project. The `Home` component accepts standard React props, such as `className` and `style`, allowing developers to customize the appearance and behavior of the icon.

2. `Home.svg`: This file contains the SVG (Scalable Vector Graphics) code for the Home icon. SVG is a widely supported vector image format that can be easily scaled and manipulated using CSS and JavaScript. The `Home.svg` file is used as a source for the `Home.js` React component, ensuring that the icon is rendered correctly and efficiently.

## Usage

To use the `Home` icon in your project, simply import the `Home` component from the `autodoc/solana/docs/src/icons/duotone-icons/Home` folder and include it in your JSX code. For example:

```javascript
import React from 'react';
import HomeIcon from 'autodoc/solana/docs/src/icons/duotone-icons/Home/Home';

const MyComponent = () => {
  return (
    <div>
      <h1>Welcome to Solana</h1>
      <HomeIcon className="my-custom-class" style={{ fontSize: '24px' }} />
    </div>
  );
};

export default MyComponent;
```

In this example, the `HomeIcon` component is imported and used within the `MyComponent` component. The `className` and `style` props are used to apply custom styling to the icon.

## Conclusion

The `Home` folder in the `autodoc/solana/docs/src/icons/duotone-icons` directory provides a set of duotone home icons for use within the Solana project. These icons are implemented as React components and can be easily imported and used in other parts of the project. The use of SVG ensures that the icons are scalable and efficient, while the React component structure allows for easy customization and integration with other UI elements.
