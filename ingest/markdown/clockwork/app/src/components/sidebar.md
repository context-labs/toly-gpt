The `sidebar.rs` file is part of the Clockwork project and is responsible for rendering the sidebar navigation menu. It uses the Dioxus framework for building user interfaces and the Dioxus Router for handling navigation.

The file contains two main components: `Sidebar` and `SidebarButton`. 

1. `Sidebar` component:
   - It takes a `Scope` as an input parameter and returns an `Element`.
   - It renders a `div` element with specific CSS classes to style the sidebar.
   - Inside the `div`, it renders four `SidebarButton` components with different titles and routes: "Blocks", "Files", "Programs", and "Secrets".

2. `SidebarButton` component:
   - It has a `SidebarButtonProps` struct with two properties: `title` and `route`, both of which are string references.
   - The component takes a `Scope` with `SidebarButtonProps` as an input parameter and returns an `Element`.
   - It checks if the current route matches the `route` property of the component using the `use_route` hook from the Dioxus Router.
   - It renders a `Link` element with the following properties:
     - `to`: The `route` property from the component's props.
     - `class`: Conditional CSS classes based on whether the route is currently selected or not.
     - The content of the `Link` element is the `title` property from the component's props.

In summary, the `sidebar.rs` file defines a sidebar navigation menu with four buttons, each representing a different route in the application. The `SidebarButton` component is responsible for rendering individual buttons and applying the appropriate styling based on whether the button's route is currently active or not.
## Questions: 
 1. Question: What is the purpose of the `Sidebar` function?
   Answer: The `Sidebar` function is responsible for rendering the sidebar with a list of `SidebarButton` components, each representing a different route (e.g., Blocks, Files, Programs, Secrets).

2. Question: What are the `SidebarButtonProps` and why are they used?
   Answer: `SidebarButtonProps` is a struct that holds the properties for the `SidebarButton` component, specifically the `title` and `route` of the button. It is used to pass these properties to the `SidebarButton` component when it is created.

3. Question: How does the `SidebarButton` function determine if a button is selected?
   Answer: The `SidebarButton` function uses the `use_route` hook to get the current route and compares it with the `route` property of the button. If they match, the button is considered selected, and its styling is updated accordingly.

4. Question: What is the purpose of the `Link` component in the `SidebarButton` function?
   Answer: The `Link` component is used to create a navigational link for each `SidebarButton`. When a user clicks on the button, they will be navigated to the specified route.

5. Question: What is the purpose of the `class` attribute in the `Link` component?
   Answer: The `class` attribute is used to apply different CSS classes to the `Link` component based on whether the button is selected or not. This allows for different styling (e.g., text color, background color) depending on the button's state.
    