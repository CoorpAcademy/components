import test from 'ava';
import createReducer from '../index';
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
      configs: {},
      contents: {},
      clues: {entities: {}},
      exitNodes: {entities: {}},
      progressions: {entities: {}},
      rank: {},
      recommendations: {entities: {}}
    },
    ui: {
      answers: {},
      coaches: {
        availableCoaches: 0
      },
      comment: {
        isSent: false,
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
