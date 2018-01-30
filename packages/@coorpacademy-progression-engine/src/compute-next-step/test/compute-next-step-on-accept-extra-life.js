// @flow
import test from 'ava';
import omit from 'lodash/fp/omit';
import filter from 'lodash/fp/filter';
import type {AvailableContent, Engine, EngineOptions, State} from '../../types';
import {computeNextStepOnAcceptExtraLife} from '..';
import allSlides from './fixtures/slides';
import {stateBeforeGettingNextContent} from './fixtures/states';

const engine: Engine = {ref: 'learner', version: '1'};
const engineOptions: EngineOptions = {};
const availableContent: AvailableContent = [
  {
    ref: '1.A1',
    slides: filter({chapter_id: '1.A1'}, allSlides),
    rules: null
  }
];

test('should return an action linking to a new slide', t => {
  const state: State = Object.freeze(stateBeforeGettingNextContent);
  const result = computeNextStepOnAcceptExtraLife(engine, engineOptions, state, availableContent);
  t.deepEqual(omit(['payload.nextContent.ref'], result), {
    type: 'extraLifeAccepted',
    payload: {
      content: {ref: 'extraLife', type: 'node'},
      nextContent: {type: 'slide'},
      instructions: null
    }
  });
  t.regex(result.payload.nextContent.ref, /^1\.A1\.[2-9]+$/);
});
