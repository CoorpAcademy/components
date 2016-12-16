import Inferno from 'inferno';
import get from 'lodash/fp/get';
import {createBrowserHistory} from '@coorpacademy/history';
import createTranslate from '@coorpacademy/translate';
import en from '../locales/en/global';
import fr from '../locales/fr/global';
import App from './app';
import {components, fixtures} from './components';
import skin from './assets/skin';

let _App = App;
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

const update = vTree => Inferno.render(vTree, document.getElementById('app'));

update(
    <_App {...{
      components: _components,
      fixtures: _fixtures,
      location: history.location,
      options
    }}/>
);

history.listen(location => {
  update(<_App {...{
    components: _components,
    fixtures: _fixtures,
    location,
    options
  }}/>);
});

if (module.hot) {
  module.hot.accept('./app.js', () => {
    _App = require('./app').default;
    update(<_App {...{
      components: _components,
      fixtures: _fixtures,
      location: history.location,
      options
    }}/>);
  });
  module.hot.accept('./components.js', () => {
    _components = require('./components').components;
    _fixtures = require('./components').fixtures;
    update(<_App {...{
      components: _components,
      fixtures: _fixtures,
      location: history.location,
      options
    }}/>);
  });
}
