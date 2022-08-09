/* eslint-disable import/no-extraneous-dependencies, no-undef */

require('@coorpacademy/react-native-mock-render/mock')({
  externalLibs: [
    {
      name: 'react-native-modal'
    },
    {
      name: 'react-native-render-html'
    }
  ]
});

require('@babel/register')({
  extensions: ['.es6', '.es', '.jsx', '.js', '.mjs', '.ts', '.tsx']
});
