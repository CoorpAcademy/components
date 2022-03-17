import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {shallow, configure} from 'enzyme';
import {identity} from 'lodash/fp';
import Adapter from 'enzyme-adapter-react-16';
import ButtonLinkIconOnly from '..';
import defaultFixture from './fixtures/button-icon-bullet';

browserEnv();
configure({adapter: new Adapter()});
const translate = identity;

test('should launch onClick on click event for ButtonLinkIconOnly', t => {
  const wrapper = shallow(<ButtonLinkIconOnly {...defaultFixture.props} />, {
    context: {translate}
  });
  const button = wrapper.find('[data-name="bullet-button"]');
  t.true(button.exists());
  button.first().simulate('click', {});
  t.pass();
});

test('should mount ButtonLinkIconOnly even if the className does not exist', t => {
  const wrapper = shallow(<ButtonLinkIconOnly {...defaultFixture.props} className={'noClass'} />, {
    context: {translate}
  });
  const button = wrapper.find('[data-name="bullet-button"]');
  t.true(button.exists());
  t.pass();
});
