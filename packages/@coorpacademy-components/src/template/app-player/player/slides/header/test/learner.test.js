import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fixtures from './fixtures/learner';
import Header from '..';

browserEnv();
configure({adapter: new Adapter()});

test('should display lives icon', t => {
  const wrapper = mount(<Header {...fixtures.props} />);
  const element = wrapper.find('[data-name="life"]');

  t.is(element.length, 1);
});
