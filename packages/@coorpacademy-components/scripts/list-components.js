import {join} from 'path';
import glob from 'glob';

const cwd = join(__dirname, '../src');
const ignore = ['**/behaviour/**']

export default glob.sync(
  '**/!(test)/index.js',
  {cwd, ignore}
);
