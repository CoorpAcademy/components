import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {set, unset, pipe} from 'lodash/fp';
import {wrappingComponent} from '../../../test/helpers/render-component';
import Card from '..';
import defaultFixture from './fixtures/default';
import notificationFixture from './fixtures/favorite';

browserEnv();
configure({adapter: new Adapter()});

test('should call the onFavoriteClick function with click on favorite icon (favorite: true)', t => {
  t.plan(4);

  const clickEvent = {preventDefault: () => t.pass(), stopPropagation: () => t.pass()};
  const props = pipe(
    set('onFavoriteClick', () => t.pass()),
    set(true, 'favorite')
  )(defaultFixture.props);

  const wrapper = mount(<Card {...props} />, {wrappingComponent});
  const favoriteSection = wrapper.find('[data-name="favorite"]');
  t.is(favoriteSection.exists(), true);
  favoriteSection.simulate('click', clickEvent);
});

test('should call the onFavoriteClick function with click on favorite icon (favorite: false)', t => {
  t.plan(4);

  const clickEvent = {preventDefault: () => t.pass(), stopPropagation: () => t.pass()};
  const props = pipe(
    set('onFavoriteClick', e => t.pass()),
    set(false, 'favorite')
  )(defaultFixture.props);
  const wrapper = mount(<Card {...props} />, {wrappingComponent});
  const favoriteSection = wrapper.find('[data-name="favorite"]');
  t.is(favoriteSection.exists(), true);
  favoriteSection.simulate('click', clickEvent);
});

test('should no render favorite section if favorite is not defined on  the props', t => {
  const props = unset('favorite', defaultFixture.props);
  const wrapper = mount(<Card {...props} />, {wrappingComponent});
  const favoriteSection = wrapper.find('[data-name="favorite"]');
  t.is(favoriteSection.exists(), false);
});

test('should no call onClick with locked card', t => {
  t.plan(4);
  const clickEvent = {preventDefault: () => t.pass(), stopPropagation: () => t.pass()};
  const props = pipe(
    set('favorite', true),
    set('disabled', true),
    set('onClick', () => t.fail()),
    set('onFavoriteClick', () => t.fail())
  )(defaultFixture.props);
  const wrapper = mount(<Card {...props} />, {wrappingComponent});
  const card = wrapper.find('[data-name="card"]');
  t.is(card.exists(), true);
  card.simulate('click');
  const favoriteSection = wrapper.find('[data-name="favorite"]');
  t.is(favoriteSection.exists(), true);
  favoriteSection.simulate('click', clickEvent);
});

test('should call onClick chith unlocked card', t => {
  t.plan(7);
  const clickEvent = {preventDefault: () => t.pass(), stopPropagation: () => t.pass()};
  const props = pipe(
    set('favorite', true),
    set('disabled', false),
    set('onClick', e => t.pass()),
    set('onFavoriteClick', e => t.pass())
  )(defaultFixture.props);
  const wrapper = mount(<Card {...props} />, {wrappingComponent});
  const card = wrapper.find('[data-name="card"]');
  t.is(card.exists(), true);
  card.simulate('click');
  const favoriteSection = wrapper.find('[data-name="favorite"]');
  t.is(favoriteSection.exists(), true);
  favoriteSection.simulate('click', clickEvent);
});

test('should show notification', t => {
  t.plan(3);
  const clickEvent = {preventDefault: () => t.pass(), stopPropagation: () => t.pass()};
  const props = pipe(
    set('favorite', true),
    set('onFavoriteClick', e => t.fail())
  )(notificationFixture.props);
  const wrapper = mount(<Card {...props} />, {wrappingComponent});
  const notification = wrapper.find('[data-name="notification"]');
  t.is(notification.exists(), true);
  notification.simulate('click', clickEvent);
});
