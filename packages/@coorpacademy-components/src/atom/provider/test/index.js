import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {noop} from 'lodash/fp';
import Provider from '..';
import defaultFixture from './fixtures/default';

browserEnv();
configure({adapter: new Adapter()});

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
