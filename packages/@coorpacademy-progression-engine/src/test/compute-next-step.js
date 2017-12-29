// @flow
import test from 'ava';
import type {Engine, Progression, State} from '../types';
import computeNextStep from '../compute-next-step';

const engine: Engine = {
  ref: 'microlearning',
  version: '1'
};

test('should check Progression within params ', t => {
  const message = 'Bad format for Progression';
  t.plan(3);

  try {
    // $FlowFixMe
    computeNextStep({});
    t.fail();
  } catch (e) {
    t.is(e.message, message);
  }

  try {
    computeNextStep(null);
    t.fail();
  } catch (e) {
    t.is(e.message, message);
  }

  try {
    computeNextStep();
    t.fail();
  } catch (e) {
    t.is(e.message, message);
  }
});

test('should check Progression within params ', t => {
  const engine: Engine = {
    ref: 'foo'
  };

  const message = `Unknown engine ${engine.ref}`;

  try {
    computeNextStep({engine});
    t.fail();
  } catch (e) {
    t.is(e.message, message);
  }
});

test('should not find computer without NextStepParams', t => {
  const message = 'Could not find any computer for those params';
  const state = {};
  const progression: Progression = {engine, state};

  try {
    computeNextStep(progression, {});
    t.fail();
  } catch (e) {
    t.is(e.message, message);
  }
});
