# Appster

- `npm install`
- `npm test`

## typical app src/

The app should have @coorpacademy/appster as deps and have an `src/` looking like:
```
src
├── app
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
│   └── views
│       └── a-view.js
├── sandbox
│   ├── config.js
│   └── index.js
└── test
    └── index.js
```


## redux app use

Give reducers and routes as params
```js
import prepareApp from '@coorpacademy/appster/src/app';
import createReducer from './reducers';
import createRoutes from './routes';

const app = prepareApp(createReducer, createRoutes, options);
```

## sandbox app use

Give reducers and routes as params
```js
const path = require('path');
const config = require('./config');
const runServer = require('@coorpacademy/appster/src/server');
const input = path.join(__dirname, '../app');

const addSandbox = app => {
  return app.get('/', (req, res) => {
    res.send(`
      <div id="yourapp"></div>
      <script type="text/javascript" src="/dist/your-app.js"></script>
      <script>
        var options = {
          container: document.getElementById('yourapp'),
          foo: 'bar',
          api: 'http://localhost:3000/api/v1'
        };

        YourApp.create(options);
      </script>
    `);
  });
};

runServer('YourApp', config, input, addSandbox);
```
