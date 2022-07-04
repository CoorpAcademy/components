// @flow
import test from 'ava';
import {getConfig} from '../../config';
import type {AvailableContent, Config} from '../../types';
import {computeInitialStepForReview} from '..';
import allSlides from './fixtures/slides';

const config: Config = getConfig({ref: 'review', version: '1'});

const availableContent: AvailableContent = [
  {
    ref: 'skill_41BBqFKoS',
    slides: allSlides,
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

test('should throw error if there are no slides in availableContent', t => {
  t.throws(() => computeInitialStepForReview(config, [{ref: '1.A1', slides: [], rules: null}]), {
    message: 'no slide in availableContent'
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
