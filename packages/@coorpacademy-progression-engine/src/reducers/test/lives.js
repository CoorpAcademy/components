// @flow
import test from 'ava';
import set from 'lodash/fp/set';
import getConfig from '../../config';
import lives from '../lives';
import {answerAction, extraLifeAcceptedAction, askClueAction} from './fixtures/actions';
import {learner} from './fixtures/engines';
import {stateForSecondSlide} from './fixtures/states';

const config = getConfig(learner);

test('should return config lives when livesDisabled is true on state', t => {
  const state = set('livesDisabled', true, stateForSecondSlide);
  const result = lives(config)(3, answerAction, state);
  t.is(result, 3);
});

test('should return updated lives when action type is answer with isCorrect false', t => {
  const result = lives(config)(3, answerAction, stateForSecondSlide);
  t.is(result, 2);
});

test('should not modify lives when action type is answer with isCorrect true', t => {
  const action = set('payload.isCorrect', true, answerAction);
  const result = lives(config)(1, action, stateForSecondSlide);
  t.is(result, 1);
});

test('should update lives when action type is extraLifeAccepted', t => {
  const result = lives(config)(0, extraLifeAcceptedAction, stateForSecondSlide);
  t.is(result, 1);
});

test('should not modify lives for any other type of action', t => {
  const result = lives(config)(5, askClueAction, stateForSecondSlide);
  t.is(result, 5);
});

test('should not increment lives counter if there are no more remainingLifeRequests', t => {
  const result = lives(config)(0, extraLifeAcceptedAction, {
    ...stateForSecondSlide,
    remainingLifeRequests: 0
  });
  t.is(result, 0);
});
