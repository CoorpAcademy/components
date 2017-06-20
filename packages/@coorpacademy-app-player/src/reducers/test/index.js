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
      clues: {entities: {}},
      exitNodes: {entities: {}},
      progressions: {entities: {}},
      slides: {entities: {}},
      recommendations: {entities: {}}
    },
    ui: {
      answers: {},
      corrections: {},
      current: {
        progressionId: null
      },
      route: {}
    }
  }
);
