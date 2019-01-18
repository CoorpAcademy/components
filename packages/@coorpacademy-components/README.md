# @Coorpacademy/Components

This library provide sharable components for web applications, either:

- as CommonJS components
- as a minified library

[![Components diagram](./doc/components.png)](./doc/components.svg)

## Goal

- edit a component once, share it across all our platforms
- provide a documentation referencing every component with its
  - available states (disabled, selected)
  - skinable properties
- provide the smallest lib

## Development

### Seeing the components on Storybook

```sh
npm install
npm start
```

Then open `http://localhost:3004`.

### Adding a component

- choose your atomic folder depending your component: `template`, `organism`, `molecule`, `atom`
- add a folder having your component name: for example, for `button` you should have this tree:

```sh
atom
  └── button
        ├── index.js
        ├── style.css
        └── test
            └── fixtures
               └── default.js
               └── disabled.js
               └── hovered.js
```

- `index.js` contains the React code + jsx, and exports your component
- `style.css` contains the css module style for your component
- `test/fixtures/*.js` are files representing all the possible states for your component, thus export props accordingly

note that whenever you add new component or new fixtures you have to generate the storybook index:

```sh
npm run generate
```

which is also launched automatically whenever you run `npm start`

## Locally use in an external project

Link your dependencies:

```sh
[@coorpacademy-components] > npm link
[your-app] > npm link @coorpacademy/components
```

Build modifications:

```sh
[@coorpacademy-components] > npm run build:es
```
