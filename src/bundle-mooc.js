import engine from './engine/snabbdom';
import createDirectives from './adapter/angular/create-directives';
import * as components from './components';

const setup = app => {
  createDirectives(app, engine, components);
};

module.exports = {setup};
