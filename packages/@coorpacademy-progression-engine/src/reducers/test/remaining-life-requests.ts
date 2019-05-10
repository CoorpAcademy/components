import test from 'ava';
import set from 'lodash/fp/set';
import {getConfig} from '../../config';
import remainingLifeRequests from '../remaining-life-requests';
import {answerAction, extraLifeAcceptedAction, moveAction} from './fixtures/actions';
import {microlearning} from './fixtures/engines';
import {stateForSecondSlide} from './fixtures/states';

const config = getConfig(microlearning);

test('should return default value', t => {
  const customConfig = set('remainingLifeRequests', 9, config);
  const result = remainingLifeRequests(customConfig)(undefined, moveAction, stateForSecondSlide);
  t.is(result, 9);
});

test('should return updated remainingLifeRequests when action type is extraLifeAccepted', t => {
  const result = remainingLifeRequests(config)(1, extraLifeAcceptedAction, stateForSecondSlide);
  t.is(result, 0);
});

test('should return config content when action type is not answer', t => {
  const result = remainingLifeRequests(config)(1, answerAction, stateForSecondSlide);
  t.is(result, 1);
});

test('should return positive live request counter', t => {
  const result = remainingLifeRequests(config)(0, extraLifeAcceptedAction, stateForSecondSlide);
  t.is(result, 0);
});
