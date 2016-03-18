import test from 'ava';
import forEachEngine from '../../util/for-each-engine';

forEachEngine(({h, resolve}, name) => {
  test(`${name}: should resolve component node`, t => {
    const Component = props => <h1/>;
    const tree = <Component/>;

    t.same(resolve(tree), <h1/>);
  });

  test(`${name}: should resolve component node with properties`, t => {
    const Component = props => <h1 {...props}/>;
    const tree = <Component foo="bar"/>;

    t.same(resolve(tree), <h1 foo="bar"/>);
  });

  test(`${name}: should resolve component node with children`, t => {
    const Component = props => <h1 {...props}>{props.children}</h1>;
    const tree = <Component foo="bar">baz</Component>;

    t.same(resolve(tree), <h1 foo="bar">baz</h1>);
  });
});
