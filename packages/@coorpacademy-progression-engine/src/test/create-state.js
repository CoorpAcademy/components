// @flow
import test from 'ava';
import createState from '../create-state';
import type {Content, MoveAction, Progression} from '../types';

const progression: Progression = {
  engine: {
    ref: 'microlearning',
    version: '1'
  },
  engineOptions: {
    livesDisabled: false,
    version: '1'
  },
  content: {
    type: 'chapter',
    ref: '1.A1'
  },
  actions: []
};

test('should create a state from a progression with no actions', t => {
  t.deepEqual(createState(progression), {
    lives: 1,
    livesDisabled: false,
    content: undefined,
    nextContent: undefined,
    isCorrect: true,
    slides: [],
    stars: 0,
    requestedClues: [],
    viewedResources: [],
    step: {
      current: 1
    },
    remainingLifeRequests: 1,
    hasViewedAResourceAtThisStep: false,
    allAnswers: [],
    variables: {},
    pendingSlides: []
  });
});

test('should create a state from a progression with actions', t => {
  const nextContent: Content = {type: 'slide', ref: '1.A1'};
  const moveAction: MoveAction = {
    type: 'move',
    payload: {
      nextContent,
      instructions: [
        {type: 'set', field: 'foo', value: 100},
        {type: 'add', field: 'foo', value: 5}
      ]
    }
  };

  t.deepEqual(createState({...progression, actions: [moveAction]}), {
    lives: 1,
    livesDisabled: false,
    content: undefined,
    nextContent,
    isCorrect: true,
    slides: [],
    stars: 0,
    requestedClues: [],
    viewedResources: [],
    step: {
      current: 1
    },
    remainingLifeRequests: 1,
    hasViewedAResourceAtThisStep: false,
    allAnswers: [],
    variables: {
      foo: 105
    },
    pendingSlides: []
  });
});
