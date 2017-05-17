# app-core

This core provides a core redux router for all apps

## typical app tree

Your app should have @coorpacademy/app-core as deps and have an `src/` looking like:

```
├── src
│   ├── actions
│   │   ├── api-an-action.js
│   │   ├── api-another-action.js
│   │   ├── test
│   │   └── ui-an-action-on-a-view.js
│   ├── index.js
│   ├── reducers
│   │   ├── api.js
│   │   ├── index.js
│   │   ├── test
│   │   └── ui
│   │       ├── a-view.js
│   │       ├── index.js
│   │       └── test
│   ├── routes.js
│   ├── test
│   │   └── index.js
│   └── views
│       └── a-view.js
└──  sandbox
│   └──  index.html
└── webpack.config.js

```

## main
inject your routes and reducers

```
import {prepareApp} from '@coorpacademy/app-core';
import createReducer from './reducers';
import createRoutes from './routes';
import {apiMiddleware} from 'redux-api-middleware';

export const create = options => prepareApp(createReducer, createRoutes, [apiMiddleware], options);
```

## routes
map your routes, views and actions within your `createRoutes` function
```
import createView from './view';
import {updatePlop} from './actions/ui-demo';

const createRoutes = options => {
  return [
    {
      path: '*',
      view: createView(options),
      actions: [
        updatePlop({
          plop: 'new plop !'
        })
      ]
    }
  ];
};

export default createRoutes;
```

## reducers

Combine all reducers in `reducers/index.js`
```js
import {createReducers} from '@coorpacademy/app-core';
import ui from './ui';

export default ({lang} = {}) => createReducers(lang, {ui});
```

then you just need to use redux combineReducers for all nested state
in the previous example, `ui/index.js` is
```
import {combineReducers} from 'redux';
import foo from './foo';
import bar from './bar';

export default combineReducers({
  foo,
  bar
});

```

## sandbox
Use `webpack-dev-server` to run the app within a sandbox.
```
  "scripts": {
    "start": "webpack-dev-server --content-base sandbox"
  }
```

`webpack.config.js` should use `@coorpacademy/webpack-config`
```
const path = require('path');
const pipe = require('lodash/fp/pipe');
const set = require('lodash/fp/set');
const config = require('@coorpacademy/webpack-config');

const appName = 'Player';

const entry = {
  player: ['babel-polyfill', './src']
};

const output = {
  library: appName,
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/dist',
  filename: 'player.js',
  libraryTarget: 'umd'
};

module.exports = pipe(set('entry', entry), set('output', output))(config);
```


`index.html` should look like:
```html
<link rel="stylesheet" type="text/css" href="/dist/player.css">
<div id="player"></div>

<script type="text/javascript" src="/dist/player.js"></script>

<script>
  window.Player.create({
    container: document.getElementById('player')
  });
</script>
```
