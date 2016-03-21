import engine from './engine/react';
import bundler from './bundler';
import reactDOM from 'react-dom';

const bundle = bundler(engine);

module.exports = {
  ...bundle,
  reactDOM,
  engine: engine
};
