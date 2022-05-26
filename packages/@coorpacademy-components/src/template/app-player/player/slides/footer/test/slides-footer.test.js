import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import SlidesFooter from '..';
import defaultFixture from './fixtures/default';
import mediaSelectedFixture from './fixtures/media-selected';

browserEnv();
configure({adapter: new Adapter()});

const getSelectedItems = wrapper =>
  wrapper.find('div').filterWhere(item => item.prop('data-selected') === true);

test('should set data-selected to false by default', t => {
  const wrapper = mount(<SlidesFooter {...defaultFixture.props} />);
  const selectedItems = getSelectedItems(wrapper);

  t.is(selectedItems.length, 0);
});

test('should set data-selected to true if button is selected', t => {
  const wrapper = mount(<SlidesFooter {...mediaSelectedFixture.props} />);
  const selectedItems = getSelectedItems(wrapper);

  t.is(selectedItems.length, 1);
  t.is(selectedItems.at(0).prop('data-type'), 'media');
});
