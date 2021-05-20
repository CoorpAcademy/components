import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {identity} from 'lodash/fp';
import Discipline from '..';
import fixture from './fixtures/default';

browserEnv();
configure({adapter: new Adapter()});

test('should show feedback when user click add to my list button', t => {
  t.plan(4);
  const onFavoriteClick = () => {
    t.pass();
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
