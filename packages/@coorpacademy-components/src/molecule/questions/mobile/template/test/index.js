import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Template from '..';
import fixture from './fixtures/default';

browserEnv();
configure({adapter: new Adapter()});

test('should instanciate Range without props', t => {
  const expected = shallow(<Template {...fixture.props} />);
  const actual = shallow(
    <Template {...{...fixture.props, template: `${fixture.props.template}{{wrongInput}}`}} />
  );
  t.deepEqual(actual.html(), expected.html());
});
