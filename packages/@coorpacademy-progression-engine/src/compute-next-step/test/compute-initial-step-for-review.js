// @flow
import test from 'ava';
import {head} from 'lodash/fp';
import {getConfig} from '../../config';
import type {AvailableContent, Config} from '../../types';
import {computeInitialStepForReview} from '..';
import allSlides from './fixtures/slides';

const config: Config = getConfig({ref: 'review', version: '1'});

const availableContent: AvailableContent = [
  {
    ref: 'skill_41BBqFKoS',
    slides: [head(allSlides)],
    rules: null
  }
];

test('should return successExitNode if availableContent is empty', t => {
  t.deepEqual(computeInitialStepForReview(config), {
    type: 'move',
    payload: {
      nextContent: {
        type: 'success',
        ref: 'successExitNode'
      },
      instructions: null
    }
  });
});

test('should return a success exitNode if there are no slides in all chapters', t => {
  const action = computeInitialStepForReview(config, [{ref: '1.A1', slides: [], rules: null}]);
  if (!action) {
    throw new Error('action should not be falsy');
  }
  t.deepEqual(action, {
    type: 'move',
    payload: {
      instructions: null,
      nextContent: {
        type: 'success',
        ref: 'successExitNode'
      }
    }
  });
});

test('should create an initial action from the availableContent', t => {
  const action = computeInitialStepForReview(config, availableContent);

  t.deepEqual(action, {
    type: 'move',
    payload: {
      instructions: null,
      nextContent: {
        type: 'slide',
        ref: '1.A1.1'
      }
    }
  });
});
