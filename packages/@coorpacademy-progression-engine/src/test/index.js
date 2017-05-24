// @flow
import test from 'ava';
import {checkAnswer, computeNextStep, updateState} from '..';

test('should export checkAnswer', t => {
  t.is(typeof checkAnswer, 'function');
});

test('should export computeNextStep', t => {
  t.is(typeof computeNextStep, 'function');
});

test('should export updateState', t => {
  t.is(typeof updateState, 'function');
});
