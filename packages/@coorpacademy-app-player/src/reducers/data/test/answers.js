import test from 'ava';
import reducer from '../answers';
import {
  ANSWER_FETCH_REQUEST,
  ANSWER_FETCH_SUCCESS,
  ANSWER_FETCH_FAILURE
} from '../../../actions/api/answers';
import macro from '../../test/helpers/macro';

test('should have initial value', macro, reducer, undefined, {}, {entities: {}});

test(
  'should set entity to null on request',
  macro,
  reducer,
  {},
  {
    type: ANSWER_FETCH_REQUEST,
    meta: {progressionId: 'foo', slideId: 'bar'}
  },
  {entities: {foo: {bar: null}}}
);

test(
  "should set entity to null if doesn't exist on request",
  macro,
  reducer,
  {},
  {
    type: ANSWER_FETCH_REQUEST,
    meta: {progressionId: 'foo', slideId: 'bar'}
  },
  {entities: {foo: {bar: null}}}
);

test(
  'should do nothing if entity already exists on request',
  macro,
  reducer,
  {entities: {foo: {bar: 'foo'}}},
  {
    type: ANSWER_FETCH_REQUEST,
    meta: {progressionId: 'foo', slideId: 'bar'}
  },
  {entities: {foo: {bar: 'foo'}}}
);

test(
  'should set entity on success',
  macro,
  reducer,
  {},
  {
    type: ANSWER_FETCH_SUCCESS,
    meta: {progressionId: 'foo', slideId: 'bar'},
    payload: {
      correctAnswer: ['baz'],
      corrections: [{answer: 'foo', isCorrect: false}]
    }
  },
  {
    entities: {
      foo: {
        bar: {
          correctAnswer: ['baz'],
          corrections: [{answer: 'foo', isCorrect: false}]
        }
      }
    }
  }
);

test(
  'should remove null on failure',
  macro,
  reducer,
  {entities: {foo: {bar: null}}},
  {
    type: ANSWER_FETCH_FAILURE,
    meta: {progressionId: 'foo', slideId: 'bar'},
    error: true,
    payload: {}
  },
  {entities: {foo: {}}}
);

test(
  'should do nothing on failure if entity already exists',
  macro,
  reducer,
  {
    entities: {
      foo: {
        bar: {
          correctAnswer: ['baz'],
          corrections: [{answer: 'foo', isCorrect: false}]
        }
      }
    }
  },
  {
    type: ANSWER_FETCH_FAILURE,
    meta: {progressionId: 'foo', slideId: 'bar'},
    error: true,
    payload: {}
  },
  {
    entities: {
      foo: {
        bar: {
          correctAnswer: ['baz'],
          corrections: [{answer: 'foo', isCorrect: false}]
        }
      }
    }
  }
);
