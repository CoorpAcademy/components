import test from 'ava';
import forEachRenderer from '../for-each-renderer';

import createBehaviour from '../behaviour';

forEachRenderer((renderer, name) => {
  const {h, resolve} = renderer;

  test(`${name}: should extend children properties`, t => {
    const Title = props => <h1>{props.children}</h1>;
    const Color = createBehaviour(() => props => ({style: {color: props.color}}))(renderer);

    const tree = (
      <Color color="blue">
        <Title>foo</Title>
      </Color>
    );
    t.same(resolve(tree), <h1 style={{color: 'blue'}}>foo</h1>);
  });

  test(`${name}: should override children properties`, t => {
    const Title = props => <h1 style={{color: props.color}}>{props.children}</h1>;
    const Color = createBehaviour(() => props => ({style: {color: props.color}}))(renderer);

    const pinkTitle = <Title color="pink">foo</Title>;

    const blueTitle = (
      <Color color="blue">
        {pinkTitle}
      </Color>
    );

    t.same(resolve(pinkTitle), <h1 style={{color: 'pink'}}>foo</h1>);
    t.same(resolve(blueTitle), <h1 style={{color: 'blue'}}>foo</h1>);
  });
});
