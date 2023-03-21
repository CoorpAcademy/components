import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {mount, configure} from 'enzyme';
import {identity} from 'lodash/fp';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ActionableExpandableErrorsTable from '..';
import defaultFixture from './fixtures/dashboard-saved';

browserEnv();
configure({adapter: new Adapter()});
const translate = identity;

test('should launch onClick and toggle dropDown icon style and nested table', t => {
  const wrapper = mount(<ActionableExpandableErrorsTable {...defaultFixture.props} />, {
    context: {translate}
  });
  const clickEvent = {preventDefault: () => t.pass(), stopPropagation: () => t.pass()};

  t.true(wrapper.find('[data-name="arrowUp-button-0"].bulkArrowDown').exists());
  t.false(wrapper.find('[data-name="arrowUp-button-0"].bulkArrowUp').exists());
  t.false(wrapper.find('table').at(1).exists());

  wrapper.find('[data-name="arrowUp-button-0"].bulkArrowDown').simulate('click', clickEvent);
  t.false(wrapper.find('[data-name="arrowUp-button-0"].bulkArrowDown').exists());
  t.true(wrapper.find('[data-name="arrowUp-button-0"].bulkArrowUp').exists());
  t.true(wrapper.find('table').at(1).exists());

  wrapper.find('[data-name="arrowUp-button-0"].bulkArrowUp').simulate('click', clickEvent);
  t.true(wrapper.find('[data-name="arrowUp-button-0"].bulkArrowDown').exists());
  t.false(wrapper.find('[data-name="arrowUp-button-0"].bulkArrowUp').exists());
  t.false(wrapper.find('table').at(1).exists());

  wrapper.find('[data-name="arrowUp-button-1"].bulkArrowDown').simulate('click', clickEvent);
  t.true(wrapper.find('table').at(1).exists());
  t.true(wrapper.find('[data-name="arrowUp-button-1"].bulkArrowDown').exists());

  wrapper.find('[data-name="arrowUp-button-1"].bulkArrowDown').simulate('click', clickEvent);
  t.false(wrapper.find('[data-name="arrowUp-button-1"].bulkArrowDown').exists());
  t.true(wrapper.find('[data-name="arrowUp-button-1"].bulkArrowUp').at(1).exists());
});
