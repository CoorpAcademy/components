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
      chapters: {entities: {}},
      clues: {entities: {}},
      exitNodes: {entities: {}},
      progressions: {entities: {}},
      slides: {entities: {}},
      rank: {},
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
