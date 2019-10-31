import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fixture from './fixtures/default';
import Template from '..';

browserEnv();
configure({adapter: new Adapter()});

test('should instanciate Range without props', t => {
  const expected = shallow(<Template {...fixture.props} />);
  const actual = shallow(
    <Template {...{...fixture.props, template: `${fixture.props.template}{{wrongInput}}`}} />
  );
  t.deepEqual(actual.html(), expected.html());
});
