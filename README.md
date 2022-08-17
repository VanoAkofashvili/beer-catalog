# Beer Catalog v0.1.0

### The Beer application fetches information about 30 unique beers and renders it.

### To get started:

- Clone the application: `git clone URL`
- Install the dependencies: `npm install`
- Start the application: `npm start`

## Application architecture

### There are 4 main directories in the `src` folder:

- **_pages_** - This module stores application pages, where different components form a layout.
- **_components_** - Every component that is not a page should go in the *components* folder. The components folder in
  general includes
  reusable and feature-specific components.
- **_hooks_** - It includes custom hooks that are used across the application.
- **_utils_** - *utils* directory consists of reusable, stateless functions.

### Adding new (page)feature requires the following steps:

- Create feature-specific and reusable components in the *components* directory.
- Create a folder in the *pages* directory where different components form a layout.
- Add custom hooks needed for the functionality in the *hooks* folder.
- Add a new page(exported from *pages*) to the App.tsx

### There are rules on how to create new components in the modules:

- Create a directory and component with the same name (for example, Card and Card.tsx).
- Create a file *[componentName].module.scss* where the component styles will go.
- Create an index.ts file that acts as an entry point to that component. From that file, you should export the component
  with a **default export** as well as all the necessary functions.

## Additional notes:

- Use JSDoc for documenting the custom hooks.
- Use the utils folder for reusable, small functions. These functions must be stateless, meaning that they don't need to
  be initialized.