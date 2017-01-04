import React from 'react';
import ReactDOM from 'react-dom';
import get from 'lodash/fp/get';
import {createBrowserHistory} from '@coorpacademy/history';
import createTranslate from '@coorpacademy/translate';
import en from '../locales/en/global';
import fr from '../locales/fr/global';
import _App from './app';
import {components, fixtures} from './components';
import skin from './assets/skin';

let App = _App;
let _components = components;
let _fixtures = fixtures;

const locales = {en, fr};
const translate = createTranslate(locales.fr);

const history = createBrowserHistory();

const options = {
  history,
  skin,
  translate
};

const update = vTree => {
  ReactDOM.render(vTree, document.getElementById('app'));
};

update(
  <App
    {...{
      components: _components,
      fixtures: _fixtures,
      location: history.location,
      options
    }}
  />
);

history.listen(location => {
  update(
    <App
      {...{
        components: _components,
        fixtures: _fixtures,
        location,
        options
      }}
    />
  );
});

if (module.hot) {
  module.hot.accept('./app.js', () => {
    App = require('./app').default;
    update(
      <App
        {...{
          components: _components,
          fixtures: _fixtures,
          location: history.location,
          options
        }}
      />
    );
  });
  module.hot.accept('./components.js', () => {
    _components = require('./components').components;
    _fixtures = require('./components').fixtures;
    update(
      <App
        {...{
          components: _components,
          fixtures: _fixtures,
          location: history.location,
          options
        }}
      />
    );
  });
}
