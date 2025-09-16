import test from 'ava';
import browserEnv from 'browser-env';
import React, {useState} from 'react';
import sinon from 'sinon';
import delay from 'delay';
import {fireEvent} from '@testing-library/react';
import {renderWithContext} from '../../../util/render-with-context';
import Card from '..';
import Favorite from '../favorite';
import externalContentFixture from './fixtures/external-content';

browserEnv();

const FAVORITE_TOOLTIP = {
  add: 'add tooltip',
  remove: 'remove tooltip'
};

const renderFavoriteHarness = ({initialFavorite = false}: {initialFavorite?: boolean} = {}) => {
  const Harness: React.FC = () => {
    const [fav, setFav] = useState(initialFavorite);
    return (
      <Favorite
        favorite={fav}
        addFavoriteToolTip={FAVORITE_TOOLTIP.add}
        removeFavoriteToolTip={FAVORITE_TOOLTIP.remove}
        onFavoriteClick={() => setFav(v => !v)}
        aria-label={{
          favorite: 'favorite',
          addToFavorite: 'add to favorite',
          removeFromFavorite: 'remove from favorite'
        }}
        disabled={false}
      />
    );
  };

  const context = {
    translate: (k: string) => k,
    skin: {common: {primary: '#00f', dark: '#111'}}
  };

  const utils = renderWithContext(<Harness />, context);
  const getButton = () =>
    utils.container.querySelector('[data-testid="favorite-button"]') as HTMLElement;

  // eslint-disable-next-line @coorpacademy/coorpacademy/no-overwriting-spread
  return {getButton, ...utils};
};

test('Should show the tooltip on interaction with the information button', async t => {
  t.plan(8);

  const props = {...externalContentFixture.props, onFavoriteClick: undefined};

  const context = {
    translate: (key: string) => {
      t.pass();
      return key;
    }
  };

  // ReactTooltip renders at document level, not as a sibling
  const reactToolTipContent = '[class*="__react_component_tooltip"]';

  const {container} = renderWithContext(<Card {...props} />, context);

  const favoriteButton = container.querySelector('[data-testid="favorite-button"]') as Element;

  t.truthy(favoriteButton);
  fireEvent.mouseEnter(favoriteButton);

  let reactToolTip: Element | null = document.querySelector(reactToolTipContent) as Element;
  t.truthy(reactToolTip);

  fireEvent.mouseOver(reactToolTip);
  fireEvent.mouseLeave(reactToolTip);
  fireEvent.mouseLeave(favoriteButton);
  await delay(500);

  reactToolTip = document.querySelector(reactToolTipContent);
  t.falsy(reactToolTip);

  fireEvent.mouseEnter(favoriteButton);
  fireEvent.keyDown(favoriteButton, {key: 'Escape'});
  reactToolTip = document.querySelector(reactToolTipContent);
  t.falsy(reactToolTip);

  fireEvent.keyDown(favoriteButton, {key: 'A'});
  reactToolTip = document.querySelector(reactToolTipContent);
  t.falsy(reactToolTip);

  fireEvent.keyDown(favoriteButton, {key: 'Enter'});
  reactToolTip = document.querySelector(reactToolTipContent);
  t.truthy(reactToolTip);

  fireEvent.keyDown(favoriteButton, {key: 'Tab'});
  reactToolTip = document.querySelector(reactToolTipContent);
  t.falsy(reactToolTip);

  t.pass();
});

test('Tooltip hides on window scroll when visible', t => {
  const {getButton} = renderFavoriteHarness();
  const btn = getButton();

  // Afficher le tooltip
  fireEvent.mouseEnter(btn);

  // Le tooltip de ReactTooltip est monté au niveau document
  const q = () => document.querySelector('[class*="__react_component_tooltip"]');

  t.truthy(q()); // visible

  // Déclenche l’handler ajouté par l’effet
  fireEvent.scroll(window);

  t.falsy(q()); // caché par l’effet de scroll
});

test('Tooltip hides when `favorite` state changes', t => {
  const {getButton} = renderFavoriteHarness({initialFavorite: false});
  const btn = getButton();

  // Affiche le tooltip
  fireEvent.mouseEnter(btn);
  const q = () => document.querySelector('[class*="__react_component_tooltip"]');
  t.truthy(q());

  // Click -> onFavoriteClick toggle l’état => déclenche l’effet [favorite]
  fireEvent.click(btn);

  // Tooltip doit disparaître immédiatement
  t.falsy(q()); // couvre: if (toolTipIsVisible) setToolTipIsVisible(false)
});

test('Mouseleave timer is cleared when `favorite` changes', t => {
  const clock = sinon.useFakeTimers(); // contrôle des timers
  const clearSpy = sinon.spy(global, 'clearTimeout');

  try {
    const {getButton} = renderFavoriteHarness();
    const btn = getButton();

    // Affiche le tooltip puis déclenche un mouseLeave (programme un setTimeout(…, 500))
    fireEvent.mouseEnter(btn);
    fireEvent.mouseLeave(btn);

    // Avant l’expiration du timer, on change favorite via click
    fireEvent.click(btn);

    // L’effet [favorite] doit clear le timer + remettre undefined
    t.true(clearSpy.called, 'clearTimeout should have been called');

    // Avance le temps pour vérifier qu’aucun tooltip “fantôme” ne réapparaît
    clock.tick(600);

    const q = () => document.querySelector('[class*="__react_component_tooltip"]');
    t.falsy(q());
  } finally {
    clearSpy.restore();
    clock.restore();
  }
});
