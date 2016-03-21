import engine from './engine/react';
import bundler from './bundler';
import * as components from './';
import reactDOM from 'react-dom';

const bundle = bundler(engine, components);

module.exports = {
  ...bundle,
  reactDOM,
  engine: engine
};
