import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import delay from 'delay';
import {fireEvent} from '@testing-library/react';
import {renderWithContext} from '../../../util/render-with-context';
import Card from '..';
import externalContentFixture from './fixtures/external-content';

browserEnv();

test('Should show the tooltip on interaction with the information button', async t => {
  t.plan(8);

  const props = {...externalContentFixture.props, onFavoriteClick: undefined};

  const context = {
    translate: (key: string) => {
      t.pass();
      return key;
    }
  };

  const reactToolTipContent = '[data-testid="favorite-button"] + div p';

  const {container} = renderWithContext(<Card {...props} />, context);

  const favoriteButton = container.querySelector('[data-testid="favorite-button"]') as Element;

  t.truthy(favoriteButton);
  fireEvent.mouseEnter(favoriteButton);

  let reactToolTip: Element | null = container.querySelector(reactToolTipContent) as Element;
  t.truthy(reactToolTip);

  fireEvent.mouseOver(reactToolTip);
  fireEvent.mouseLeave(reactToolTip);
  fireEvent.mouseLeave(favoriteButton);
  await delay(500);

  reactToolTip = container.querySelector(reactToolTipContent);
  t.falsy(reactToolTip);

  fireEvent.mouseEnter(favoriteButton);
  fireEvent.keyDown(favoriteButton, {key: 'Escape'});
  reactToolTip = container.querySelector(reactToolTipContent);
  t.falsy(reactToolTip);

  fireEvent.keyDown(favoriteButton, {key: 'A'});
  reactToolTip = container.querySelector(reactToolTipContent);
  t.falsy(reactToolTip);

  fireEvent.keyDown(favoriteButton, {key: 'Enter'});
  reactToolTip = container.querySelector(reactToolTipContent);
  t.truthy(reactToolTip);

  fireEvent.keyDown(favoriteButton, {key: 'Tab'});
  reactToolTip = container.querySelector(reactToolTipContent);
  t.falsy(reactToolTip);

  t.pass();
});
