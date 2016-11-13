[![Build Status](https://travis-ci.com/CoorpAcademy/components.svg?token=tpTZr2AKsFCqAwZ7nAEf&branch=master)](https://travis-ci.com/CoorpAcademy/components)
[![Coverage Status](https://coveralls.io/repos/github/CoorpAcademy/components/badge.svg?branch=master&t=15or4z)](https://coveralls.io/github/CoorpAcademy/components?branch=master)
[![GitPitch](https://gitpitch.com/assets/badge.svg)](https://gitpitch.com/coorpacademy/tekacademy/components?grs=github&t=night)

# Coorpacademy components

This library provide sharable components for web applications, either :
- as CommonJS components
- as a minified library

### Goal

- edit a component once, share it across all our platforms
- provide a documentation referencing every component with its
  - available states (disabled, selected)
  - skinable properties
- provide the smallest lib

### Styleguide / component list

![Components diagram](./packages/@coorpacademy-components/doc/components.png)

# Development

### Scripts
`@todo` list `npm run` scripts

### Live sandbox

```
npm install
npm start
```

Then open `http://localhost:3004`

### Locally use `/lib` in a project
- use `npm link` to create a local `@coorpacademy/components` package
- use `npm link @coorpacademy/components` in your project.

### Unit Tests with ava
`@todo` example + howto

### Publish
```
npm version patch|minor|major
git push --tags
```

# Technical details

### Engines

- each virtual dom library has its own [engine](./src/engine)
- the engine implements the `hyperscript` function, the cloning, and the vtree resolving.
- every component is built as a function to be called with the selected engine

```js
import engine from '../../src/engine/virtual-dom';
import createElement from './element';
const Element = createElement(engine, options);
```

`Element` being something like:
```js
export default ({h}) => (props, children) => (
  <p>
    {children}
  </p>
)
```

### Shallow/resolved vTree
`@todo` explain `engine.resolve` and `engine.walker(engine.resolve)`

### Applying custom behaviours

It's possible to enhance a `Component` by applying a specific behaviour on it.

Alike every `Component`, this behaviour is a kind of `MetaComponent`, created with the `engine` and 'wrapped' around the `Component` to enhance.

```js
const Component = createComponent(engine, options)
const CustomBehaviour = createCustomBehaviour(engine, options)
```
```jsx
<CustomBehaviour>
  <Component>
  </Component>
</CustomBehaviour>
```

###### Wrappers

`Wrappers` allow to modify the child's props.

```jsx
<ForceColor {color: 'red'}>
  <Component {color: 'blue'}>
  </Component>
</ForceColor>
```

With this kind of `Wrapper`, the `Component` will have its `blue` props.color overriden by the `red` value.

###### Behaviours

`Behaviours` allow to modify a child's behaviour, like its style
It's the same job as `wrappers` but applying the modification directly on the *resolved* vTree.

With a `Behaviour` the previous example would become :

```js
const Component = createComponent(engine, options)
const RedColor = createRedColor(engine, options)
```
```jsx
<RedColor>
  <Component>
  </Component>
</RedColor>
```

Here the `Component` `props.style.color` will be set by the `Behaviour`.

###### Decorators

Both `Wrappers` and `Behaviours` may be used as decorator to allow smaller, readable `jsx`:

```js
const Component = createComponent(engine, options)
const RedColor = createRedColor(engine, options)
const RedComponent = RedColor.decorate(Component);
```
```jsx
<RedComponent>
</RedComponent>
```

Here the `RedComponent` is exactly the same as the previous example for `Behaviour`.
