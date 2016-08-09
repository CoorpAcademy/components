import test from 'ava';

import {
  extractComponents
} from '../components-finder';

test('should extract components without fixtures', t => {
  const components = extractComponents();
});

test('should extract components with fixtures', t => {
  const components = extractComponents(true);
});
