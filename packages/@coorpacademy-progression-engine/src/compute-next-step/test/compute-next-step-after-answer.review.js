// @flow
import test from 'ava';
import type {AvailableContent, Config} from '../../types';
import {getConfig} from '../../config';
import {computeNextStepAfterAnswerForReview} from '..';
import allSlides from './fixtures/slides';
import {firstState} from './fixtures/states';

const config: Config = getConfig({ref: 'review', version: '1'});

test('should return the next slide when user has answered the first slide and there is an available slide', t => {
  const partialAction = {
    type: 'answer',
    payload: {
      content: {
        ref: '1.A1.1',
        type: 'slide'
      },
      answer: ['foo', 'bar'],
      godMode: false
    }
  };

  const availableContent: AvailableContent = [
    {
      ref: 'skill_41BBqFKoS',
      slides: [allSlides[1]],
      rules: null
    }
  ];

  const nextStep = computeNextStepAfterAnswerForReview(
    config,
    firstState,
    availableContent,
    allSlides[0],
    partialAction
  );
  t.deepEqual(nextStep, {
    type: 'answer',
    payload: {
      answer: ['foo', 'bar'],
      content: {
        ref: '1.A1.1',
        type: 'slide'
      },
      godMode: false,
      nextContent: {
        ref: '1.A1.2',
        type: 'slide'
      },
      isCorrect: true,
      instructions: null
    }
  });
});

/*
test('should return the exitNode when user has not finished the 5 slides, all are true and there is no available slide', t => {});

test('should return the successExitNode when user has finished the 5 slides', t => {});

test('should return the next wrong slide when user has finished the 5 slides and has still remaining questions to validate', t => {});
*/