/* eslint-disable import/no-extraneous-dependencies, no-undef */

// Mock window object for jwplayer and add requestAnimationFrame polyfill
if (typeof window === 'undefined') {
  global.window = {
    jwplayer: () => ({
      setup: () => {},
      on: () => {},
      off: () => {},
      play: () => {},
      pause: () => {},
      remove: () => {}
    })
  };
}

// Add requestAnimationFrame polyfill for React
if (typeof global.requestAnimationFrame === 'undefined') {
  global.requestAnimationFrame = callback => setTimeout(callback, 0);
  global.cancelAnimationFrame = id => clearTimeout(id);
}

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
