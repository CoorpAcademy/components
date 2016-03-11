import test from 'ava';
import forEachRenderer from '../for-each-renderer';

import createWrapper from '../wrapper';

forEachRenderer((renderer, name) => {
  const {h, resolve} = renderer;

  test(`${name}: should extend children properties`, t => {
    const Title = props => <h1 style={{color: props.color}}>{props.children}</h1>;
    const Color = createWrapper(() => props => ({color: props.color}))(renderer);

    const tree = (
      <Color color="blue">
        <Title>foo</Title>
      </Color>
    );
    t.same(resolve(tree), resolve(<Title color="blue">foo</Title>));
    t.same(resolve(tree), <h1 style={{color: 'blue'}}>foo</h1>);
  });
});
