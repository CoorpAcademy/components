import test from 'ava';
import {extractComponents} from '../components-finder';

test('should extract components without fixtures', t => {
  const components = extractComponents();
  t.truthy(components);
});

test('should extract components with fixtures', t => {
  const components = extractComponents(true);
  t.truthy(components);
});
