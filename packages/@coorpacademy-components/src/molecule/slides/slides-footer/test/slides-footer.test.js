import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import defaultFixture from './fixtures/default';
import mediaSelectedFixture from './fixtures/media-selected';
import SlidesFooter from '..';

Enzyme.configure({adapter: new Adapter()});

const getSelectedItems = wrapper =>
  wrapper.find('div').filterWhere(item => item.prop('data-selected') === true);

test('should set data-selected to false by default', t => {
  const wrapper = Enzyme.mount(<SlidesFooter {...defaultFixture.props} />);
  const selectedItems = getSelectedItems(wrapper);

  t.is(selectedItems.length, 0);
});

test('should set data-selected to true if button is selected', t => {
  const wrapper = Enzyme.mount(<SlidesFooter {...mediaSelectedFixture.props} />);
  const selectedItems = getSelectedItems(wrapper);

  t.is(selectedItems.length, 1);
  t.is(selectedItems.at(0).prop('data-type'), 'media');
});
