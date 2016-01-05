## Coorpacademy components

This library provide sharable components for web applications, either :
- as CommonJS components
- as a minified library

## Goal

- edit a component once, share it across all our platforms
- provide a documentation referencing every component with its
  - available states (disabled, selected)
  - skinable properties
- provide the smallest lib

## Steps

- POC/ bench vdom libs
- expose a first component
- include in a /coorpacademy view
- migrate /coorpacademy views to /components piece by piece following the UX evolution

## Documentation

sitejekyll.coorpacademy.com

## Running the demo

```
npm install
npm run demo
```

Then open `http://localhost:3000`
and edit `src/index.html`
