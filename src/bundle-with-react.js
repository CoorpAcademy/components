import renderer from './renderer/react';
import bundler from './bundler';
import reactDOM from 'react-dom';

const bundle = bundler(renderer);

module.exports = {
  ...bundle,
  reactDOM,
  renderer: renderer
};
