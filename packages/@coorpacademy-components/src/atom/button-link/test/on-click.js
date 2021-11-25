import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import {identity} from 'lodash/fp';
import Adapter from 'enzyme-adapter-react-16';
import ButtonLink from '..';
import defaultFixture from './fixtures/button-dangerous-no-icon';

browserEnv();
configure({adapter: new Adapter()});
const translate = identity;

test('should handle onClick event', t => {
  t.plan(3);
  const props = {...defaultFixture.props, onClick: () => t.pass()};
  const wrapper = mount(<ButtonLink {...props} />, {
    context: {translate}
  });
  const button = wrapper.find('[data-name="default-button"]');
  t.true(button.exists());
  button.first().simulate('click', {});
  t.pass();
});
