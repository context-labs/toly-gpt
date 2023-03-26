[View code on GitHub](https://github.com/solana-labs/solana/tree/master/na/docs/src/icons/duotone-icons/Weather)

The `Weather` folder in the `duotone-icons` directory contains a set of weather-related icons designed for the Solana project. These icons are part of the larger collection of duotone icons, which are designed to have a consistent style and appearance across the entire project. The icons in this folder are specifically related to weather conditions and can be used to represent various weather states in the user interface or other parts of the Solana project.

Here is a list of the files in this folder and a summary of the contents of each file:

1. `cloud-rain.svg`: This file contains an SVG icon representing a cloud with raindrops falling from it. This icon can be used to represent rainy weather conditions.
2. `cloud-snow.svg`: This file contains an SVG icon representing a cloud with snowflakes falling from it. This icon can be used to represent snowy weather conditions.
3. `cloud-sun.svg`: This file contains an SVG icon representing a cloud with a sun behind it. This icon can be used to represent partly cloudy weather conditions.
4. `cloud.svg`: This file contains an SVG icon representing a cloud. This icon can be used to represent cloudy weather conditions.
5. `sun.svg`: This file contains an SVG icon representing a sun. This icon can be used to represent sunny weather conditions.
6. `wind.svg`: This file contains an SVG icon representing wind. This icon can be used to represent windy weather conditions.

These icons can be easily integrated into the Solana project by importing the SVG files and using them as components in the user interface. For example, if you want to display the current weather condition on a dashboard, you can use the appropriate icon from this folder to represent the weather visually.

Here's an example of how you might use the `cloud-rain.svg` icon in a React component:

```jsx
import React from 'react';
import CloudRainIcon from './icons/duotone-icons/Weather/cloud-rain.svg';

const WeatherWidget = ({ weather }) => {
  return (
    <div>
      <h3>Current Weather</h3>
      {weather === 'rain' && <CloudRainIcon />}
      {/* Add other weather conditions and corresponding icons here */}
    </div>
  );
};

export default WeatherWidget;
```

In this example, the `WeatherWidget` component takes a `weather` prop and displays the `CloudRainIcon` if the weather is rainy. You can extend this component to include other weather conditions and their corresponding icons from the `Weather` folder.

In summary, the `Weather` folder in the `duotone-icons` directory provides a set of weather-related icons that can be used throughout the Solana project to represent various weather conditions. These icons are designed to have a consistent style and appearance, making them a valuable resource for developers working on the project.
