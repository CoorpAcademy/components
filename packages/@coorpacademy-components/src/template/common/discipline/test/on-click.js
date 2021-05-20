import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {identity} from 'lodash/fp';
import Discipline from '..';
import fixture from './fixtures/default';

browserEnv();
configure({adapter: new Adapter()});

test('should call onClick with the index value', t => {
  t.plan(6);
  const onFavoriteClick = () => {
    t.pass();
  };
  const translate = identity;
  const wrapper = shallow(<Discipline {...fixture.props} onFavoriteClick={onFavoriteClick} />, {context: {translate}});
  const addToMyListButton = wrapper.find('a[data-name="add-to-my-list-button"]');
  console.log({addToMyListButton});
  t.true(wrapper.find(addToMyListButton).exists());
  // t.is(wrapper.find('a[data-name="add-to-my-list-button"]').length, 1);
  // wrapper.find('input[type="submit"]').simulate('submit');
});
