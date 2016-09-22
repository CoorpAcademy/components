import test from 'ava';
import h from '../h';
import resolve from '../resolve';

test('should resolve component node', t => {
  const Component = props => <h1/>;
  const tree = <Component/>;

  const expected = <h1/>;
  t.deepEqual(resolve(tree), expected);
});

test('should resolve component node with properties', t => {
  const Component = props => <h1 {...props}/>;
  const tree = <Component foo="bar"/>;

  const expected = <h1 foo="bar"/>;
  t.deepEqual(resolve(tree), expected);
});

test('should resolve component node with children', t => {
  const Component = (props, children) => <h1 {...props}>{children}</h1>;
  const tree = <Component foo="bar">baz</Component>;

  const expected = <h1 foo="bar">baz</h1>;
  t.deepEqual(resolve(tree), expected);
});
