import engine from './engine/react';
import bundler from './bundler';
import * as components from './components';

const bundle = bundler(engine, components);

module.exports = bundle;
