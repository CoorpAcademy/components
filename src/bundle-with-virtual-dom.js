import renderer from './renderer/virtual-dom';
import bundler from './bundler';
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import createElement from 'virtual-dom/create-element';

const bundle = bundler(renderer);

module.exports = {
  ...bundle,
  virtualDOM: {
    diff,
    patch,
    createElement
  },
  renderer: renderer
};
