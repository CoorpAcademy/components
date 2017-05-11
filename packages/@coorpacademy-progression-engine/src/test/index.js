import test from 'ava';
import {checkAnswer, computeNextStep, updateProgression} from '..';

test('should export checkAnswer', t => {
  t.is(typeof checkAnswer, 'function');
});

test('should export computeNextStep', t => {
  t.is(typeof computeNextStep, 'function');
});

test('should export updateProgression', t => {
  t.is(typeof updateProgression, 'function');
});
