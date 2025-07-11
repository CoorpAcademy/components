/* eslint-disable import/no-extraneous-dependencies, no-undef */

// Add requestAnimationFrame polyfill for test environment
// This is needed because components like Animation use requestAnimationFrame
// which doesn't exist in Node.js
if (typeof global.requestAnimationFrame === 'undefined') {
  global.requestAnimationFrame = callback => setTimeout(callback, 0);
  global.cancelAnimationFrame = id => clearTimeout(id);
}

// Mock lottie-web for test environment
// eslint-disable-next-line import/no-unresolved
const Module = require('module');

const originalRequire = Module.prototype.require;
Module.prototype.require = function (id, ...args) {
  if (id === 'lottie-web') {
    return {
      default: {
        loadAnimation: () => ({
          play: () => {},
          stop: () => {},
          destroy: () => {},
          addEventListener: () => {},
          removeEventListener: () => {}
        })
      }
    };
  }
  return Reflect.apply(originalRequire, this, [id, ...args]);
};

require('@coorpacademy/react-native-mock-render/mock')({
  externalLibs: [
    {name: 'react-native-modal'},
    {name: 'react-native-render-html'},
    {name: 'react-native-linear-gradient'},
    {name: 'react-native-jw-media-player'},
    {name: 'react-native-qrcode-scanner'},
    {name: 'react-native-youtube'},
    {name: 'react-native-vimeo-iframe', exports: ['Vimeo']},
    {name: '@coorpacademy/react-native-slider'},
    {name: '@react-native-community/blur', exports: ['BlurView']}
  ]
});

require('@babel/register')({
  extensions: ['.es6', '.es', '.jsx', '.js', '.mjs', '.ts', '.tsx']
});
