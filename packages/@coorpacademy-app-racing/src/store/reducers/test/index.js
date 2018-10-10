import test from 'ava';
import createReducer from '..';
import macro from './helpers/macro';

test(
  'should have initial value',
  macro,
  createReducer(),
  undefined,
  {},
  {
    data: {
      answers: {entities: {}},
      comments: {entities: {}},
      configs: {},
      contents: {},
      clues: {entities: {}},
      exitNodes: {entities: {}},
      progressions: {entities: {}},
      rank: {},
      nextContent: {entities: {}},
      recommendations: {entities: {}}
    },
    ui: {
      answers: {},
      coaches: {
        availableCoaches: 0
      },
      comments: {
        text: null
      },
      corrections: {},
      current: {
        progressionId: null
      },
      route: {}
    }
  }
);
