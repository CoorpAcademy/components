import test from 'ava';
import {set} from 'lodash/fp';
import macro from '../../test/helpers/macro';

import {
  createProgression,
  PROGRESSION_CREATE_REQUEST,
  PROGRESSION_CREATE_SUCCESS
} from '../progressions';

const slide = {
  _id: 'bar'
};

const engine = {
  ref: 'learner',
  version: 'test'
};

const content = {
  type: 'level',
  ref: '1B'
};

const engineOptions = {
  lives: 888
};

test(
  'should throw error if progression has no state',
  macro,
  set('data.progressions.entities.foo._id', 'foo', {}),
  t => ({
    Progressions: {
      create: (_id, _engine, _content, _engineOptions) => {
        return {
          _id: 'foo',
          engine: _engine,
          content: _content,
          engineOptions: _engineOptions,
          state: {
            nextContent: {type: 'slide', ref: slide._id}
          }
        };
      }
    }
  }),
  createProgression('foo', engine, content, engineOptions),
  [
    {
      type: PROGRESSION_CREATE_REQUEST,
      meta: {}
    },
    {
      type: PROGRESSION_CREATE_SUCCESS,
      meta: {},
      payload: {
        _id: 'foo',
        state: {
          nextContent: {
            type: 'slide',
            ref: slide._id
          }
        },
        engine,
        content,
        engineOptions
      }
    }
  ],
  0
);
