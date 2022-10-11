import {relative} from 'path';
import {createHash} from 'crypto';
import {pipe, replace} from 'lodash/fp';

const hook = require('@dr.pogodin/css-modules-require-hook');

const replaceLibByEs = pipe(
  replace('/@coorpacademy/components/lib/', '/@coorpacademy/components/es/'),
  replace('/@coorpacademy-components/lib/', '/@coorpacademy-components/es/')
);

const generateScopedName = (localName, filepath) => {
  const hash = createHash('md4');
  hash.update(replaceLibByEs(relative(process.cwd(), filepath)));
  hash.update(localName);
  return `${localName}-${hash.digest('base64').slice(0, 5)}`;
};

const customHook = options =>
  hook({
    ...options,
    generateScopedName
  });

export default customHook;
