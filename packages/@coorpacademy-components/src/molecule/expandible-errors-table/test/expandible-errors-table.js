import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {mount, configure} from 'enzyme';
import {identity} from 'lodash/fp';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ExpandableErrorsTable from '..';
import defaultFixture from './fixtures/default';

browserEnv();
configure({adapter: new Adapter()});
const translate = identity;

test('should launch onClick', t => {
  const wrapper = mount(<ExpandableErrorsTable {...defaultFixture.props} />, {
    context: {translate}
  });
  const clickEvent = {preventDefault: () => t.pass(), stopPropagation: () => t.pass()};
  const button = wrapper.find('[data-name="arrowUp-button"]').first();
  t.true(button.exists());

  t.true(wrapper.find('.bulkArrowDown').at(0).exists());
  t.false(wrapper.find('.bulkArrowUp').at(0).exists());
  t.false(wrapper.find('table').at(1).exists());

  button.simulate('click', clickEvent);

  t.false(wrapper.find('.bulkArrowDown').at(0).exists());
  t.true(wrapper.find('.bulkArrowUp').at(0).exists());
  t.true(wrapper.find('table').at(1).exists());

  button.simulate('click', clickEvent);

  t.true(wrapper.find('.bulkArrowDown').at(0).exists());
  t.false(wrapper.find('.bulkArrowUp').at(0).exists());
  t.false(wrapper.find('table').at(1).exists());

});
