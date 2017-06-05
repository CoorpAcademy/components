import test from 'ava';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import macro from '../../test/helpers/macro';
import {validateAnswer} from '../answers';
import {UI_SELECT_PROGRESSION} from '../progressions';
import {
  ANSWER_CREATE_REQUEST,
  ANSWER_CREATE_SUCCESS,
  ANSWER_CREATE_FAILURE
} from '../../api/answers';
import {PROGRESSION_FETCH_REQUEST, PROGRESSION_FETCH_SUCCESS} from '../../api/progressions';
import {SLIDE_FETCH_REQUEST, SLIDE_FETCH_SUCCESS} from '../../api/slides';

test(
  'should submit answers with the current content and refresh progression state',
  macro,
  set('data.progressions.entities.foo.state.nextContent', {type: 'slide', ref: 'baz'})({}),
  t => ({
    Progressions: {
      createAnswer: (id, payload) => {
        t.is(id, 'foo');
        t.deepEqual(payload, {
          content: {type: 'slide', ref: 'baz'},
          answers: ['bar']
        });
        return 'bar';
      },
      findById: id => {
        t.is(id, 'foo');
        return 'foo';
      }
    },
    Slides: {
      findById: id => {
        t.is(id, 'bar');
        return 'bar';
      }
    }
  }),
  validateAnswer('foo', {answers: ['bar']}),
  [
    [
      {
        type: ANSWER_CREATE_REQUEST,
        meta: {progressionId: 'foo'}
      },
      set('ui.current.progressionId', 'foo', {})
    ],
    [
      {
        type: ANSWER_CREATE_SUCCESS,
        meta: {progressionId: 'foo'},
        payload: 'bar'
      },
      set('data.progressions.entities.foo', null, {})
    ],
    [
      {
        type: UI_SELECT_PROGRESSION,
        payload: {id: 'foo'}
      },
      set('ui.current.progressionId', 'foo', {})
    ],
    [
      {
        type: PROGRESSION_FETCH_REQUEST,
        meta: {id: 'foo'}
      },
      set('data.progressions.entities.foo', null, {})
    ],
    [
      {
        type: PROGRESSION_FETCH_SUCCESS,
        meta: {id: 'foo'},
        payload: 'foo'
      },
      pipe(
        set('data.progressions.entities.foo._id', 'foo'),
        set('data.progressions.entities.foo.state.nextContent', {type: 'slide', ref: 'bar'})
      )({})
    ],
    [
      {
        type: SLIDE_FETCH_REQUEST,
        meta: {id: 'bar'}
      },
      set('data.slides.entities.bar', null, {})
    ],
    {
      type: SLIDE_FETCH_SUCCESS,
      meta: {id: 'bar'},
      payload: 'bar'
    }
  ]
);

test(
  'should dispatch failure on request fail',
  macro,
  set('data.progressions.entities.foo.state.nextContent', {type: 'slide', ref: 'baz'})({}),
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
        type: ANSWER_CREATE_REQUEST,
        meta: {progressionId: 'foo'}
      },
      set('ui.current.progressionId', 'foo', {})
    ],
    {
      type: ANSWER_CREATE_FAILURE,
      meta: {progressionId: 'foo'},
      error: true,
      payload: new Error()
    }
  ]
);
