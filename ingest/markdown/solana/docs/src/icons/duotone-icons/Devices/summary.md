[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/docs/src/icons/duotone-icons/Devices)

The `Devices` folder within the `duotone-icons` directory contains a collection of device-related icons that are used throughout the Solana project. These icons are designed with a duotone style, meaning they consist of two colors, which allows for a visually appealing and consistent appearance across the application. The icons in this folder are primarily used to represent various devices and hardware components that interact with the Solana blockchain.

### Files

Here is a brief overview of the files in the `Devices` folder:

1. `Computer.svg`: This file contains the SVG code for a computer icon. It can be used to represent a desktop computer or a workstation in the user interface.
2. `Laptop.svg`: This file contains the SVG code for a laptop icon. It can be used to represent a laptop or a portable computing device in the user interface.
3. `Mobile.svg`: This file contains the SVG code for a mobile phone icon. It can be used to represent a smartphone or a mobile device in the user interface.
4. `Tablet.svg`: This file contains the SVG code for a tablet icon. It can be used to represent a tablet or a touchscreen device in the user interface.

### Usage

These icons can be imported and used in various parts of the Solana project, such as in the user interface, documentation, or marketing materials. To use one of these icons, you can simply include the SVG code in your HTML or JSX file, and then apply any necessary styling using CSS or inline styles.

For example, to use the `Computer.svg` icon in a React component, you can import the SVG file and include it in your JSX code like this:

```jsx
import React from 'react';
import ComputerIcon from './icons/duotone-icons/Devices/Computer.svg';

const MyComponent = () => {
  return (
    <div>
      <h1>My Devices</h1>
      <ComputerIcon style={{ width: '50px', height: '50px' }} />
      <p>Desktop Computer</p>
    </div>
  );
};

export default MyComponent;
```

In this example, the `ComputerIcon` component is imported from the `Computer.svg` file and used within the `MyComponent` component. The icon's size is adjusted using inline styles, but you can also use CSS classes or other styling methods to customize the appearance of the icon.

Overall, the `Devices` folder in the `duotone-icons` directory provides a set of device-related icons that can be used throughout the Solana project to create a consistent and visually appealing user experience.
