import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import {identity} from 'lodash/fp';
import Discipline from '..';
import fixture from './fixtures/default';

browserEnv();
configure({adapter: new Adapter()});

test('should show feedback when user click add to my list button', t => {
  t.plan(4);
  const onFavoriteClick = cb => {
    t.pass();
    cb();
  };
  const context = {translate: identity};
  const wrapper = mount(<Discipline {...fixture.props} onFavoriteClick={onFavoriteClick} />, {
    context
  });
  let addToMyListFeedback = wrapper.find('[data-name="add-to-my-list-feedback"]');
  t.false(addToMyListFeedback.exists());

  const addToMyListButton = wrapper.find('[data-name="add-to-my-list-button"]');
  t.true(addToMyListButton.exists());
  addToMyListButton.at(0).simulate('click');

  addToMyListFeedback = wrapper.find('[data-name="add-to-my-list-feedback"]');
  t.true(addToMyListFeedback.exists());
});
