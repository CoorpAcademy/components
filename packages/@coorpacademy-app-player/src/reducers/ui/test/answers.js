import test from 'ava';
import reducer from '../answers';
import {
  PROGRESSION_CREATE_ANSWER_REQUEST,
  PROGRESSION_CREATE_ANSWER_SUCCESS,
  PROGRESSION_CREATE_ANSWER_FAILURE
} from '../../../actions/api/progressions';
import {
  ANSWER_FETCH_REQUEST,
  ANSWER_FETCH_SUCCESS,
  ANSWER_FETCH_FAILURE
} from '../../../actions/api/answers';
import {ANSWER_EDIT} from '../../../actions/ui/answers';
import {UI_SELECT_PROGRESSION} from '../../../actions/ui/progressions';
import macro from '../../test/helpers/macro';

test('should have initial value', macro, reducer, undefined, {}, {});

test(
  'should edit the answer',
  macro,
  reducer,
  {},
  {
    type: ANSWER_EDIT.qcm,
    meta: {
      progressionId: 'foo'
    },
    payload: 'bar'
  },
  {foo: {value: 'bar'}}
);

test(
  'should reset the answer',
  macro,
  reducer,
  {foo: {value: 'foo'}},
  {
    type: UI_SELECT_PROGRESSION,
    payload: {
      id: 'foo'
    }
  },
  {}
);

test(
  'should set isCorrect to null when createAnswer request was sent',
  macro,
  reducer,
  {foo: {}},
  {
    type: PROGRESSION_CREATE_ANSWER_REQUEST,
    meta: {
      progressionId: 'foo'
    }
  },
  {foo: {isCorrect: null}}
);

test(
  'should set isCorrect when createAnswer request was received',
  macro,
  reducer,
  {foo: {isCorrect: null}},
  {
    type: PROGRESSION_CREATE_ANSWER_SUCCESS,
    payload: {state: {isCorrect: true}},
    meta: {
      progressionId: 'foo'
    }
  },
  {foo: {isCorrect: true}}
);

test(
  'should unset isCorrect when createAnswer request was failed',
  macro,
  reducer,
  {foo: {isCorrect: null}},
  {
    type: PROGRESSION_CREATE_ANSWER_FAILURE,
    payload: new Error(),
    error: true,
    meta: {
      progressionId: 'foo'
    }
  },
  {foo: {}}
);

test(
  'should set correction when correction fetch was sent',
  macro,
  reducer,
  {},
  {
    type: ANSWER_FETCH_REQUEST,
    meta: {
      progressionId: 'foo'
    }
  },
  {foo: {correction: null}}
);

test(
  'should set correction when correction fetch was received',
  macro,
  reducer,
  {},
  {
    type: ANSWER_FETCH_SUCCESS,
    payload: ['bar'],
    meta: {
      progressionId: 'foo'
    }
  },
  {foo: {correction: ['bar']}}
);

test(
  'should unset correction when correction fetch was failed',
  macro,
  reducer,
  {foo: {correction: null}},
  {
    type: ANSWER_FETCH_FAILURE,
    payload: new Error(),
    error: true,
    meta: {
      progressionId: 'foo'
    }
  },
  {foo: {}}
);
