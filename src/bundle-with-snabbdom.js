import engine from './engine/snabbdom';
import bundler from './bundler';
import * as components from './';

const bundle = bundler(engine, components);

module.exports = bundle;
