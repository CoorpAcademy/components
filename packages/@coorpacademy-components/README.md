# @Coorpacademy/Components

This library provide sharable components for web applications, either :
- as CommonJS components
- as a minified library

[![Components diagram](./doc/components.png)](./doc/components.svg)

### Goal

- edit a component once, share it across all our platforms
- provide a documentation referencing every component with its
  - available states (disabled, selected)
  - skinable properties
- provide the smallest lib

# Development

### Live sandbox

```
npm install
npm run start:components
```

Then open `http://localhost:3004`

### Locally use `/lib` in an external project
- use `npm link` to create a local `@coorpacademy/components` package
- use `npm link @coorpacademy/components` in your project.

