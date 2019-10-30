// @flow
import test from 'ava';
import {getConfig} from '../../config';
import type {Config, State} from '../../types';
import {extraLifeState} from './fixtures/states';
import {computeNextStepOnRefuseExtraLife} from '..';

test('should return a complete ExtraLifeRefusedAction', t => {
  const config: Config = getConfig({ref: 'learner', version: '1'});
  const state: State = Object.freeze(extraLifeState);

  const result = computeNextStepOnRefuseExtraLife(config, state);
  t.deepEqual(result, {
    type: 'extraLifeRefused',
    payload: {
      content: {ref: 'extraLife', type: 'node'},
      nextContent: {ref: 'failExitNode', type: 'failure'}
    }
  });
});
