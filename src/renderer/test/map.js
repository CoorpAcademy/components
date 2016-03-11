import test from 'ava';
import forEachRenderer from '../../util/for-each-renderer';

forEachRenderer(({h, map, resolve}, name) => {
  test(`${name}: should travel each children`, t => {
    const Component = (props) => (
      <h1>
        {map(child => t.pass() || child, props.children)}
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

  test(`${name}: should return new children`, t => {
    const Component = (props) => (
      <h1>
        {map((child, index) => index.toString(), props.children)}
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

    t.same(resolve(tree), <h1>{['0', '1']}</h1>);
  });
});
