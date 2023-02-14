import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {fireEvent} from '@testing-library/react';
import {renderWithContext} from '../../../util/render-with-context';
import BattleOpponent from '..';
import alreadyEngagedFixture from './fixtures/opponent-already-engaged';

browserEnv();

test('should not launch onClick on click event, for an already engaged opponent', t => {
  t.plan(2);

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

  const {container} = renderWithContext(<BattleOpponent {...props} />, context);

  const battleOpponentWrapper = container.querySelector('[data-testid="battle-opponent-wrapper"]');
  t.truthy(battleOpponentWrapper);

  fireEvent.click(battleOpponentWrapper as Element);

  t.pass();
});
