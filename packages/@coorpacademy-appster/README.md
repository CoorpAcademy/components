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
import {prepareApp} from '@coorpacademy/appster';
import createReducer from './reducers';
import createRoutes from './routes';

const app = prepareApp(createReducer, createRoutes, options);
```
