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
      exitNodes: {entities: {}},
      progressions: {entities: {}},
      slides: {entities: {}}
    },
    ui: {
      answers: {},
      current: {
        progressionId: null
      }
    }
  }
);
