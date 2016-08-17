import test from 'ava';

import map from '../map';

import h from '../h';
import resolve from '../resolve';

test('should travel each children', t => {
  const Component = (props, children) => (
    <h1>
      {
        map(child => t.pass() || child, children)
      }
    </h1>
  );

  const tree = (
    <Component>
      foo
      <span>
        bar
      </span>
    </Component>
  );

  t.plan(2);
  resolve(tree);
});

test('shouldn\'t process if there is no child', t => {
  t.plan(0);
  map(() => t.pass());
});
