// @flow
import test from 'ava';
import {
  checkAnswer,
  checkAnswerCorrectness,
  computeNextStepAfterAnswer,
  computeNextStepOnAcceptExtraLife,
  computeNextStepOnRefuseExtraLife,
  createProgression,
  createState,
  getConfig,
  getConfigForProgression
} from '..';

test('should export checkAnswer', t => {
  t.is(typeof checkAnswer, 'function');
});

test('should export checkAnswerCorrectness', t => {
  t.is(typeof checkAnswerCorrectness, 'function');
});

test('should export computeNextStepAfterAnswer', t => {
  t.is(typeof computeNextStepAfterAnswer, 'function');
});

test('should export computeNextStepOnAcceptExtraLife', t => {
  t.is(typeof computeNextStepOnAcceptExtraLife, 'function');
});

test('should export computeNextStepOnRefuseExtraLife', t => {
  t.is(typeof computeNextStepOnRefuseExtraLife, 'function');
});

test('should export createState', t => {
  t.is(typeof createState, 'function');
});

test('should export createProgression', t => {
  t.is(typeof createProgression, 'function');
});

test('should export getConfig', t => {
  t.is(typeof getConfig, 'function');
});

test('should export getConfigForProgression', t => {
  t.is(typeof getConfigForProgression, 'function');
});
