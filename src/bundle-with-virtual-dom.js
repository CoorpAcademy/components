import renderer from './renderer/virtual-dom';
import bundler from './bundler';

module.exports = bundler(renderer);
