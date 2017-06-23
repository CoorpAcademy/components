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
      slides: {entities: {}}
    },
    ui: {
      answers: {},
      corrections: {
        accordion: [false, false, false]
      },
      current: {
        progressionId: null
      },
      route: {}
    }
  }
);
