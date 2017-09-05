import test from 'ava';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import macro from '../../../test/helpers/macro';
import {validateAnswer} from '../../answers';
import {UI_TOGGLE_ACCORDION} from '../../../ui/corrections';
import {
  PROGRESSION_CREATE_ANSWER_REQUEST,
  PROGRESSION_CREATE_ANSWER_SUCCESS,
  PROGRESSION_CREATE_ANSWER_FAILURE
} from '../../../api/progressions';
import {ANSWER_FETCH_REQUEST, ANSWER_FETCH_FAILURE} from '../../../api/answers';

test(
  'should dispatch failure on request fail',
  macro,
  set('data.progressions.entities.foo.state.nextContent', {
    type: 'slide',
    ref: 'baz'
  })({}),
  t => ({
    Progressions: {
      createAnswer: (id, payload) => {
        t.is(id, 'foo');
        t.deepEqual(payload, {
          content: {type: 'slide', ref: 'baz'},
          answers: ['bar']
        });
        throw new Error();
      }
    }
  }),
  validateAnswer('foo', {answers: ['bar']}),
  [
    [
      {
        type: PROGRESSION_CREATE_ANSWER_REQUEST,
        meta: {progressionId: 'foo'}
      },
      set('ui.current.progressionId', 'foo', {})
    ],
    {
      type: PROGRESSION_CREATE_ANSWER_FAILURE,
      meta: {progressionId: 'foo'},
      error: true,
      payload: new Error()
    }
  ]
);

test(
  'should dispatch failure when answers request fail',
  macro,
  set('data.progressions.entities.foo.state.nextContent', {
    type: 'slide',
    ref: 'baz'
  })({}),
  t => ({
    Progressions: {
      createAnswer: (id, payload) => {
        t.is(id, 'foo');
        t.deepEqual(payload, {
          content: {type: 'slide', ref: 'baz'},
          answers: ['bar']
        });
        return pipe(
          set('state.content.ref', 'baz'),
          set('state.isCorrect', false),
          set('state.viewedResources', [])
        )({});
      },
      findById: id => {
        t.is(id, 'foo');
        return 'foo';
      }
    },
    Answers: {
      findById: id => {
        t.is(id, 'foo');
        throw new Error();
      }
    },
    Analytics: {
      sendProgressionAnalytics: () => {
        t.pass();
      }
    }
  }),
  validateAnswer('foo', {answers: ['bar']}),
  [
    [
      {
        type: PROGRESSION_CREATE_ANSWER_REQUEST,
        meta: {progressionId: 'foo'}
      },
      set('ui.current.progressionId', 'foo', {})
    ],
    [
      {
        type: PROGRESSION_CREATE_ANSWER_SUCCESS,
        meta: {progressionId: 'foo'},
        payload: pipe(
          set('state.content.ref', 'baz'),
          set('state.isCorrect', false),
          set('state.viewedResources', [])
        )({})
      },
      set('data.progressions.entities.foo', null, {})
    ],
    [
      {
        type: UI_TOGGLE_ACCORDION,
        payload: {
          id: 0
        }
      }
    ],
    [
      {
        type: ANSWER_FETCH_REQUEST,
        meta: {
          progressionId: 'foo',
          slideId: 'baz'
        }
      },
      set('ui.answers.0.correction', null, {})
    ],
    {
      type: ANSWER_FETCH_FAILURE,
      meta: {
        progressionId: 'foo',
        slideId: 'baz'
      },
      error: true,
      payload: new Error()
    }
  ],
  12
);
