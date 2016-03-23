import engine from './engine/virtual-dom';
import bundler from './bundler';
import * as components from './';

const bundle = bundler(engine, components);

module.exports = bundle;
