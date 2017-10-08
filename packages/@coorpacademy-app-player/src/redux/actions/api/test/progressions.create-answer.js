import test from 'ava';
import set from 'lodash/fp/set';
import pipe from 'lodash/fp/pipe';
import macro from '../../test/helpers/macro';
import {
  createAnswer,
  PROGRESSION_CREATE_ANSWER_REQUEST,
  PROGRESSION_CREATE_ANSWER_SUCCESS,
  PROGRESSION_CREATE_ANSWER_FAILURE
} from '../progressions';

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
      postAnswers: (id, payload) => {
        t.is(id, 'foo');
        t.deepEqual(payload, {content: 'bar', answers: ['baz']});
        return 'qux';
      }
    }
  }),
  createAnswer('foo', ['baz']),
  [
    {
      type: PROGRESSION_CREATE_ANSWER_REQUEST,
      meta: {progressionId: 'foo'}
    },
    {
      type: PROGRESSION_CREATE_ANSWER_SUCCESS,
      meta: {progressionId: 'foo'},
      payload: 'qux'
    }
  ]
);

test(
  'should return error if request failed',
  macro,
  getState({}),
  t => ({
    Progressions: {
      postAnswers: id => {
        t.is(id, 'foo');
        throw new Error();
      }
    }
  }),
  createAnswer('foo', ['baz']),
  [
    {
      type: PROGRESSION_CREATE_ANSWER_REQUEST,
      meta: {progressionId: 'foo'}
    },
    {
      type: PROGRESSION_CREATE_ANSWER_FAILURE,
      meta: {progressionId: 'foo'},
      error: true,
      payload: new Error()
    }
  ]
);
