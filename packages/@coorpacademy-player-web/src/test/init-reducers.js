import test from 'ava';
import {createReducers} from '../store';
import macro from './helpers/macro';

test(
  'should have initial value',
  macro,
  createReducers(),
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
      recommendations: {entities: {}},
      videos: {entities: {}}
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
      location: {},
      route: {}
    }
  }
);
