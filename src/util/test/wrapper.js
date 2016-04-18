import test from 'ava';
import forEachEngine from '../for-each-engine';

import createWrapper from '../wrapper';

forEachEngine((name, engine) => {
  const {h, resolve} = engine;

  test(`${name}: should extend children properties`, t => {
    const Title = props => <h1 style={{color: props.color}}>{props.children}</h1>;
    const Color = createWrapper(() => props => ({color: props.color}))(engine);

    const tree = (
      <Color color="blue">
        <Title>foo</Title>
      </Color>
    );
    t.deepEqual(resolve(tree), resolve(<Title color="blue">foo</Title>));
    t.deepEqual(resolve(tree), <h1 style={{color: 'blue'}}>foo</h1>);
  });
});
