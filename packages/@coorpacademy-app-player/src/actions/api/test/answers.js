import test from 'ava';
import set from 'lodash/fp/set';
import pipe from 'lodash/fp/pipe';
import macro from '../../test/helpers/macro';
import {
  createAnswer,
  ANSWER_CREATE_REQUEST,
  ANSWER_CREATE_SUCCESS,
  ANSWER_CREATE_FAILURE
} from '../answers';

const getState = pipe(
  set('data.progressions.entities.foo._id', 'foo'),
  set('data.progressions.entities.foo.state.nextContent', 'bar')
);

test(
  'should post answers',
  macro,
  getState({}),
  t => ({
    Progressions: {
      createAnswer: (id, payload) => {
        t.is(id, 'foo');
        t.deepEqual(payload, {content: 'bar', answers: ['baz']});
        return 'quz';
      }
    }
  }),
  createAnswer('foo', ['baz']),
  [
    {
      type: ANSWER_CREATE_REQUEST,
      meta: {progressionId: 'foo'}
    },
    {
      type: ANSWER_CREATE_SUCCESS,
      meta: {progressionId: 'foo'},
      payload: 'quz'
    }
  ]
);

test(
  'should return error if request failed',
  macro,
  getState({}),
  t => ({
    Progressions: {
      createAnswer: id => {
        t.is(id, 'foo');
        throw new Error();
      }
    }
  }),
  createAnswer('foo', ['baz']),
  [
    {
      type: ANSWER_CREATE_REQUEST,
      meta: {progressionId: 'foo'}
    },
    {
      type: ANSWER_CREATE_FAILURE,
      meta: {progressionId: 'foo'},
      error: true,
      payload: new Error()
    }
  ]
);
