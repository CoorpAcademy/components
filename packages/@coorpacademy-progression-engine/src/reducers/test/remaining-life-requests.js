// @flow
import test from 'ava';
import getConfig from '../../config';
import remainingLifeRequests from '../remaining-life-requests';
import {answerAction, extraLifeAcceptedAction} from './fixtures/actions';
import {microlearning} from './fixtures/engines';
import {stateForSecondSlide} from './fixtures/states';

const config = getConfig(microlearning);

test('should return updated remainingLifeRequests when action type is extraLifeAccepted', t => {
  const result = remainingLifeRequests(config)(1, extraLifeAcceptedAction, stateForSecondSlide);
  t.is(result, 0);
});

test('should return config content when action type is not answer', t => {
  const result = remainingLifeRequests(config)(1, answerAction, stateForSecondSlide);
  t.is(result, 1);
});
