import test from 'ava';
import set from 'lodash/fp/set';
import pipe from 'lodash/fp/pipe';
import constant from 'lodash/fp/constant';
import macro from '../../test/helpers/macro';
import {
  createAnswer,
  PROGRESSION_CREATE_ANSWER_REQUEST,
  PROGRESSION_CREATE_ANSWER_SUCCESS,
  PROGRESSION_CREATE_ANSWER_FAILURE,
  PROGRESSION_MOVE_INTENT
} from '../progressions';

const getState = pipe(
  set('data.progressions.entities.foo._id', 'foo'),
  set('data.progressions.entities.foo.state.nextContent', 'bar')
);

test(
  'should post answer',
  macro,
  getState({}),
  t => ({
    Progressions: {
      postAnswer: (id, payload) => {
        t.is(id, 'foo');
        t.deepEqual(payload, {content: 'bar', answer: ['baz']});
        return {state: {}};
      }
    }
  }),
  createAnswer('foo', ['baz']),
  [
    {
      type: PROGRESSION_CREATE_ANSWER_REQUEST,
      meta: {progressionId: 'foo', answer: ['baz'], content: 'bar'}
    },
    {
      type: PROGRESSION_CREATE_ANSWER_SUCCESS,
      meta: {progressionId: 'foo', answer: ['baz'], content: 'bar'},
      payload: {state: {}}
    }
  ],
  2
);

test(
  'should return error if request failed',
  macro,
  getState({}),
  t => ({
    Logger: {
      error(err) {
        t.is(err.message, 'some error');
      }
    },
    Progressions: {
      postAnswer: id => {
        t.is(id, 'foo');
        throw new Error('some error');
      }
    }
  }),
  createAnswer('foo', ['baz']),
  [
    {
      type: PROGRESSION_CREATE_ANSWER_REQUEST,
      meta: {progressionId: 'foo', answer: ['baz'], content: 'bar'}
    },
    {
      type: PROGRESSION_CREATE_ANSWER_FAILURE,
      meta: {progressionId: 'foo', answer: ['baz'], content: 'bar'},
      error: true,
      payload: new Error('some error')
    }
  ],
  2
);

test(
  'should not execute a create answer action if progression is currently moving',
  macro,
  getState({
    ui: {
      movingProgression: {
        foo: true
      }
    }
  }),
  constant({}),
  createAnswer('foo', ['baz']),
  [
    {
      type: PROGRESSION_MOVE_INTENT,
      intent: {
        type: PROGRESSION_CREATE_ANSWER_REQUEST
      },
      meta: {
        progressionId: 'foo'
      }
    }
  ],
  0
);
