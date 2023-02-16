import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import delay from 'delay';
import {fireEvent} from '@testing-library/react';
import {renderWithContext} from '../../../util/render-with-context';
import BattleOpponent from '..';
import alreadyEngagedFixture from './fixtures/opponent-already-engaged';

browserEnv();

test('should not launch onClick on click event, for an already engaged opponent, should show the tooltip on interaction with the information button', async t => {
  t.plan(9);

  const props = {
    ...alreadyEngagedFixture.props,
    onClick: () => t.fail()
  };

  const context = {
    translate: (key: string) => {
      t.pass();
      return key;
    }
  };

  const reactToolTipContent = '[data-testid="battle-opponent-tooltip-content"]';

  const {container} = renderWithContext(<BattleOpponent {...props} />, context);

  const battleOpponentWrapper = container.querySelector('[data-testid="battle-opponent-wrapper"]');
  t.truthy(battleOpponentWrapper);

  fireEvent.click(battleOpponentWrapper as Element);

  const informationButton = container.querySelector(
    '[data-testid="battle-engaged-opponent-information-button"]'
  ) as Element;
  t.truthy(informationButton);
  fireEvent.mouseEnter(informationButton);
  let reactToolTip: Element | null = container.querySelector(reactToolTipContent) as Element;
  t.truthy(reactToolTip);

  fireEvent.mouseOver(reactToolTip);
  fireEvent.mouseLeave(reactToolTip);
  fireEvent.mouseLeave(informationButton);
  await delay(500);

  reactToolTip = container.querySelector(reactToolTipContent);
  t.falsy(reactToolTip);

  fireEvent.mouseEnter(informationButton);
  fireEvent.keyDown(informationButton, {key: 'Escape'});
  reactToolTip = container.querySelector(reactToolTipContent);
  t.falsy(reactToolTip);

  fireEvent.keyDown(informationButton, {key: 'A'});
  reactToolTip = container.querySelector(reactToolTipContent);
  t.falsy(reactToolTip);

  fireEvent.keyDown(informationButton, {key: 'Enter'});
  reactToolTip = container.querySelector(reactToolTipContent);
  t.truthy(reactToolTip);

  fireEvent.keyDown(informationButton, {key: 'Tab'});
  reactToolTip = container.querySelector(reactToolTipContent);
  t.falsy(reactToolTip);

  t.pass();
});
