// @flow
import test from 'ava';
// @ts-ignore
import {getConfig} from '../../config';
import hasViewedAResourceAtThisStep from '../has-viewed-a-resource-at-this-step';
import {answerAction, askClueAction, resourceAction} from './fixtures/actions';
import {microlearning} from './fixtures/engines';

const config = getConfig(microlearning);

test('should return true when action type is action', t => {
  const result = hasViewedAResourceAtThisStep(config)(false, resourceAction);
  t.true(result);
});

test('should return false when action type is answer', t => {
  const result = hasViewedAResourceAtThisStep(config)(true, answerAction);
  t.false(result);
});

test('should return already set value for any other action', t => {
  const result = hasViewedAResourceAtThisStep(config)(true, askClueAction);
  t.true(result);
});
