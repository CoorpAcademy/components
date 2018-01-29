// @flow
import test from 'ava';
import type {Engine, EngineOptions, State} from '../../types';
import {computeNextStepOnRefuseExtraLife} from '..';
import {extraLifeState} from './fixtures/states';

const engine: Engine = {
  ref: 'learner',
  version: '1'
};
const engineOptions: EngineOptions = {};

test('should return a complete ExtraLifeRefusedAction', t => {
  const state: State = Object.freeze(extraLifeState);

  const result = computeNextStepOnRefuseExtraLife(engine, engineOptions, state);
  t.deepEqual(result, {
    type: 'extraLifeRefused',
    payload: {
      content: {ref: 'extraLife', type: 'node'},
      nextContent: {ref: 'failExitNode', type: 'failure'}
    }
  });
});
