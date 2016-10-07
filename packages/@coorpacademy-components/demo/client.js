import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import {Subject} from 'rxjs/Subject';
import {createHistory, useBasename} from 'history';
import * as treant from '@coorpacademy/treantjs-core';
import * as Virtualdom from '@coorpacademy/treantjs-engine-virtual-dom';
import * as React from '@coorpacademy/treantjs-engine-react';
import * as Snabbdom from '@coorpacademy/treantjs-engine-snabbdom';
import {render$, transform$} from '@coorpacademy/treantjs-engine-plugin-rxjs';
import createApp from './app';
import {components, fixtures} from './components';
import skin from './assets/skin.json';

const {h} = treant;
let _createApp = createApp;
let _components = components;
let _fixtures = fixtures;

const history = useBasename(createHistory)({
  basename: `/${window.engine}`
});

const options = {
  history,
  skin
};

const engines = {
  Virtualdom,
  React,
  Snabbdom
};

const engine = get(window.engine, engines);
const vTree$ = new Subject();
const update$ = pipe(
  transform$(treant, engine),
  render$(engine)(document.getElementById('app'))
);
const el$ = update$(vTree$);
el$.subscribe();

let App = _createApp(treant, options);
vTree$.next(
  <App 
    components={_components} 
    fixtures={_fixtures}
    location={history.getCurrentLocation()}
  />
);

history.listen(location => {
  vTree$.next(
    <App 
      components={_components} 
      fixtures={_fixtures}
      location={location}
    />
  )
});

if (module.hot) {
  module.hot.accept('./app.js', () => {
    const _createApp = require('./app').default;
    App = _createApp(treant, options);
    vTree$.next(
      <App 
        components={_components} 
        fixtures={_fixtures}
        location={history.getCurrentLocation()}
      />
    );
  });
  module.hot.accept('./components.js', () => {
    _components = require('./components').components;
    _fixtures = require('./components').fixtures;
    vTree$.next(
      <App 
        components={_components} 
        fixtures={_fixtures}
        location={history.getCurrentLocation()}
      />
    );
  });
}
