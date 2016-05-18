import test from 'ava';
import forEachEngine from '../for-each-engine';

import createWrapper from '../wrapper';

forEachEngine((name, engine) => {
  const {h, resolve} = engine;

  test(`${name}: should extend children properties`, t => {
    const Title = (props, children) => <h1 style={{color: props.color}}>{children}</h1>;
    const Color = createWrapper(() => props => ({color: props.color}))(engine);

    const tree = (
      <Color color="blue">
        <Title>foo</Title>
      </Color>
    );

    t.deepEqual(resolve(tree), resolve(<Title color="blue">foo</Title>));
    t.deepEqual(resolve(tree), <h1 style={{color: 'blue'}}>foo</h1>);
  });

  test(`${name}: should override or use default children properties`, t => {
    const Title = props => <h1 foo={props.foo}><strong bar={props.bar}>{props.baz}</strong></h1>;
    const Wrapper = createWrapper(() => props => props)(engine);

    const titleDefault = <Title foo="foo" bar="bar" baz="baz"/>;
    const wrapper = <Wrapper foo="__FOO">{titleDefault}</Wrapper>;
    const expectedTitle = <h1 foo="__FOO"><strong bar="bar">baz</strong></h1>;

    t.deepEqual(resolve(wrapper), expectedTitle);
  });
});
