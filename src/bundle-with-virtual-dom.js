import engine from './engine/virtual-dom';
import bundler from './bundler';
import * as components from './';
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import createElement from 'virtual-dom/create-element';

const bundle = bundler(engine, components);

module.exports = {
  ...bundle,
  virtualDOM: {
    diff,
    patch,
    createElement
  },
  engine: engine
};
