import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {fireEvent} from '@testing-library/react';
import {renderWithContext} from '../../../util/render-with-context';
import BattleOpponent from '..';
import defaultFixture from './fixtures/available-opponent';

browserEnv();

test('should launch onClick on click event, for an available opponent', t => {
  t.plan(3);

  const props = {
    ...defaultFixture.props,
    onClick: () => t.pass()
  };

  const context = {
    translate: (key: string) => {
      t.pass();
      return key;
    }
  };

  const {container} = renderWithContext(<BattleOpponent {...props} />, context);

  const battleOpponentWrapper = container.querySelector('[data-testid="battle-opponent-wrapper"]');
  t.truthy(battleOpponentWrapper);

  fireEvent.click(battleOpponentWrapper as Element);

  t.pass();
});
