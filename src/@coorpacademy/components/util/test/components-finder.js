import path from 'path';
import test from 'ava';

import {
  writeImports,
  writeExports,
  extractComponents
} from '../components-finder';

test('should extract components without fixtures', t => {
  const components = extractComponents();
});

test('should extract components with fixtures', t => {
  const components = extractComponents(true);
});
