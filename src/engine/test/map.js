import test from 'ava';
import forEachEngine from '../../util/for-each-engine';

forEachEngine((name, {h, map, resolve}) => {
  test(`${name} › should travel each children`, t => {
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

  test(`${name} › shouldn't process if there is no child`, t => {
    t.plan(0);
    map(() => t.pass());
  });
});
