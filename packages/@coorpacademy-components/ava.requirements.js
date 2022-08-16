/* eslint-disable import/no-extraneous-dependencies, no-undef */

require('@coorpacademy/react-native-mock-render/mock')({
  externalLibs: [
    {name: 'react-native-modal'},
    {name: 'react-native-render-html'},
    {name: 'react-native-linear-gradient'}
  ]
});

require('@babel/register')({
  extensions: ['.es6', '.es', '.jsx', '.js', '.mjs', '.ts', '.tsx']
});
