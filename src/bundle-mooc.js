import engine from './engine/virtualdom';
import createDirectives from './adapter/angular/create-directives';
import * as components from './';

const setup = app => {
  createDirectives(app, engine, components);
};

module.exports = {setup};
