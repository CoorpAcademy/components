import {pipe, replace} from 'lodash/fp';

const hook = require('css-modules-require-hook');
const genericNames = require('generic-names');

const scopedName = genericNames('[local]-[hash:base64:5]', {
  context: process.cwd(),
  hashPrefix: ''
});

const replaceLibByEs = pipe(
  replace('/@coorpacademy/components/lib/', '/@coorpacademy/components/es/'),
  replace('/@coorpacademy-components/lib/', '/@coorpacademy-components/es/')
);

const generateScopedName = (localName, filepath) => {
  return scopedName(localName, replaceLibByEs(filepath));
};

const customHook = options =>
  hook({
    ...options,
    generateScopedName
  });

export default customHook;
