import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import Provider from '..';
import noop from 'lodash/fp/noop';
import defaultFixture from './fixtures/default';

test('should re-render element when updating props', t => {
  const history = {
    createHref: noop,
    push: noop
  };
  const wrapper = shallow(
    <Provider {...defaultFixture.props}>
      <span>Foo</span>
    </Provider>
  );

  t.is(wrapper.state.history, undefined);
  wrapper.setProps({...defaultFixture.props, history});
  t.is(wrapper.state().history, history);
});
