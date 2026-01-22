import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {pipe, set, unset} from 'lodash/fp';
import {fireEvent} from '@testing-library/react';
import {renderWithContext} from '../../../util/render-with-context';
import Card from '..';
import defaultFixture from './fixtures/default';
import notificationFixture from './fixtures/favorite';

browserEnv();

test('should call the onFavoriteClick function with click on favorite icon (favorite: true)', t => {
  t.plan(2);

  const props = pipe(
    set('onFavoriteClick', () => t.pass()),
    set('favorite', true)
  )(defaultFixture.props) as typeof defaultFixture.props;

  const {container} = renderWithContext(<Card {...props} />);
  const favoriteSection = container.querySelector('[data-name="favorite"]');
  t.truthy(favoriteSection);
  fireEvent.click(favoriteSection as Element, {defaultPrevented: true});
});

test('should call the onFavoriteClick function with click on favorite icon (favorite: false)', t => {
  t.plan(2);

  const props = pipe(
    set('onFavoriteClick', () => t.pass()),
    set('favorite', false)
  )(defaultFixture.props) as typeof defaultFixture.props;

  const {container} = renderWithContext(<Card {...props} />);
  const favoriteSection = container.querySelector('[data-name="favorite"]');
  t.truthy(favoriteSection);
  fireEvent.click(favoriteSection as Element, {defaultPrevented: true});
});

test('should no render favorite section if favorite is not defined on the props', t => {
  t.plan(1);
  const props = unset('favorite', defaultFixture.props);
  const {container} = renderWithContext(<Card {...props} />);
  const favoriteSection = container.querySelector('[data-name="favorite"]');
  t.falsy(favoriteSection);
});

test('should call onClick with locked card', t => {
  t.plan(3);

  const props = pipe(
    set('favorite', true),
    set('disabled', true),
    set('onClick', () => t.pass()),
    set('onFavoriteClick', () => t.fail())
  )(defaultFixture.props) as typeof defaultFixture.props;

  const {container} = renderWithContext(<Card {...props} />);
  const card = container.querySelector('[data-name="card"]');
  t.truthy(card);
  fireEvent.click(card as Element);
  const favoriteSection = container.querySelector('[data-name="favorite"]');
  t.truthy(favoriteSection);
  fireEvent.click(favoriteSection as Element, {defaultPrevented: true});
});

test('should call onClick with unlocked card', t => {
  t.plan(4);

  const props = pipe(
    set('favorite', true),
    set('disabled', false),
    set('onClick', () => t.pass()),
    set('onFavoriteClick', () => t.pass())
  )(defaultFixture.props) as typeof defaultFixture.props;

  const {container} = renderWithContext(<Card {...props} />);
  const card = container.querySelector('[data-name="card"]');
  t.truthy(card);
  fireEvent.click(card as Element);
  const favoriteSection = container.querySelector('[data-testid="favorite-button"]');
  t.truthy(favoriteSection);
  fireEvent.click(favoriteSection as Element, {defaultPrevented: true});
});

test('should show notification', t => {
  t.plan(1);

  const props = pipe(
    set('favorite', true),
    set('onFavoriteClick', () => t.fail())
  )(notificationFixture.props) as typeof notificationFixture.props;

  const {container} = renderWithContext(<Card {...props} />);
  const notification = container.querySelector('[data-name="notification"]');
  t.truthy(notification);
  fireEvent.click(notification as Element, {defaultPrevented: true});
});
