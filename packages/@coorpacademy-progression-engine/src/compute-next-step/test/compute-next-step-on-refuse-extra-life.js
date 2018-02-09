// @flow
import test from 'ava';
import {getConfig} from '../../config';
import type {Config, State} from '../../types';
import {computeNextStepOnRefuseExtraLife} from '..';
import {extraLifeState} from './fixtures/states';

test('should return a complete ExtraLifeRefusedAction', t => {
  const config: Config = getConfig({ref: 'learner', version: '1'});
  const state: State = Object.freeze(extraLifeState);
  const authors = ['foo'];

  const result = computeNextStepOnRefuseExtraLife(config, state, authors);
  t.deepEqual(result, {
    type: 'extraLifeRefused',
    authors,
    payload: {
      content: {ref: 'extraLife', type: 'node'},
      nextContent: {ref: 'failExitNode', type: 'failure'}
    }
  });
});
