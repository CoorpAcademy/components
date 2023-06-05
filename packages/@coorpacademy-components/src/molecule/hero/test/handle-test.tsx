import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {set} from 'lodash/fp';
import {render, fireEvent} from '@testing-library/react';
import Hero from '..';
import defaultFixture from './fixtures/hero';

browserEnv();

test('should call onClick on hero', t => {
  t.plan(2);
  const props = set('onClick', () => t.pass(), defaultFixture.props);
  const {container} = render(<Hero {...props} />);
  const hero = container.querySelector('[data-name="hero-button"]');
  t.truthy(hero);
  fireEvent.click(hero as Element);
});
