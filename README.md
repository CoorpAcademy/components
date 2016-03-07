# Coorpacademy components

This library provide sharable components for web applications, either :
- as CommonJS components
- as a minified library

## Goal

- edit a component once, share it across all our platforms
- provide a documentation referencing every component with its
  - available states (disabled, selected)
  - skinable properties
- provide the smallest lib

# Technical details

## Renderers

- each virtual dom library has its own [renderer](./src/renderer)
- the renderer implements the `hyperscript` function, the cloning, and the vtree resolving.
- every component is built as a function to be called with the selected renderer

```js
import renderer from '../../src/renderer/react';
import createElement from './element';
const Element = createElement(renderer);
```

`Element` being something like:
```js
export default ({h}) => (props) => (
  <p>
    {props.children}
  </p>
)
```

## Applying custom behaviours

It's possible to enhance a `Component` by applying a specific behaviour on it.

Alike every `Component`, this behaviour is a kind of `MetaComponent`, created with the `renderer` and 'wrapped' around the `Component` to enhance.

```js
const Component = createComponent(renderer)
const CustomBehaviour = createCustomBehaviour(renderer)
```
```jsx
<CustomBehaviour>
  <Component>
  </Component>
</CustomBehaviour>
```

##### Wrappers

`Wrappers` allow modify the child's props.

```jsx
<ForceColor {color: 'red'}>
  <Component {color: 'blue'}>
  </Component>
</ForceColor>
```

With this kind of `Wrapper`, the `Component` will have its `blue` props.color overriden by the `red` value.

##### Behaviours

`Behaviours` allow to modify a child's behaviour, like its style
It's the same job as `wrappers` but applying the modification directly on the final vTree.

With a `Behaviour` the previous example would become :

```js
const Component = createComponent(renderer)
const RedColor = createRedColor(renderer)
```
```jsx
<RedColor>
  <Component>
  </Component>
</RedColor>
```

Here the `Component` `props.style.color` will be set by the `Behaviour`.

##### Decorators

Both `Wrappers` and `Behaviours` may be used as decorator to allow smaller, readable `jsx`:

```js
const Component = createComponent(renderer)
const RedColor = createRedColor(renderer)
const RedComponent = RedColor.decorate(Component);
```
```jsx
<RedComponent>
</RedComponent>
```

Here the `RedComponent` is exactly the same as the previous example for `Behaviour`.

## Testing on Sandbox

```
npm install
npm start
```

Then open `http://localhost:3000`

## Unit Tests with ava

## Styleguide / component list

sitejekyll.coorpacademy.com
