import test from 'ava';
import browserEnv from 'browser-env';
import {replace} from 'lodash/fp';
import React from 'react';
import {fireEvent} from '@testing-library/react';
import {renderWithContext} from '../../../../util/render-with-context';
import style from '../style.css';
import Authors from '..';
import authorFixture from './fixtures/default';

browserEnv();

test('should show more', t => {
  t.plan(7);

  const context = {
    skin: {},
    translate: (key: string) => key
  };
  const toggleStyle = `.${replace(' ', '.', style.toggle)}`;

  const {container} = renderWithContext(<Authors {...authorFixture.props} />, {context});

  const more = container.querySelector('[data-name="more"]') as Element;
  t.truthy(more);
  t.truthy(toggleStyle);
  t.is(more.textContent, 'Show more');

  fireEvent.click(more);
  t.truthy(toggleStyle);
  t.is(more.textContent, 'See less');

  fireEvent.click(more);
  t.truthy(toggleStyle);
  t.is(more.textContent, 'Show more');
});
