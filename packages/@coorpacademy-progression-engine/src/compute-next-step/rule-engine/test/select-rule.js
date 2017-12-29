// @flow
import test from 'ava';
import selectRule from '../select-rule';
import rules from './fixtures/chapter-rules';

const createState = nextContent => ({
  nextContent,
  lives: 3,
  stars: 0,
  livesDisabled: true,
  isCorrect: true,
  slides: [],
  requestedClues: [],
  viewedResources: [],
  step: {
    current: 0
  },
  remainingLifeRequests: 0,
  hasViewedAResourceAtThisStep: false
});

test('should return null if no rules match', t => {
  const state = createState({type: 'slide', ref: ''});
  const rule = selectRule([], state);
  t.is(rule, null);
});

test('should select the rule with source "" when state has no nextContent', t => {
  const state = createState({type: 'slide', ref: ''}); // TODO Need to find a way to initialize states
  const rule = selectRule(rules, state);
  t.deepEqual(rule, {
    ref: 'start point 1',
    source: {
      type: 'slide',
      ref: ''
    },
    destination: {
      type: 'slide',
      ref: '1.A1.1'
    },
    priority: 10,
    instructions: [],
    conditions: []
  });
});
