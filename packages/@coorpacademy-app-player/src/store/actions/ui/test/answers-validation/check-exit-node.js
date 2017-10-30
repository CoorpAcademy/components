import test from 'ava';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import flatten from 'lodash/fp/flatten';
import macro from '../../../test/helpers/macro';
import {validateAnswer} from '../../answers';
import {
  PROGRESSION_CREATE_ANSWER_REQUEST,
  PROGRESSION_CREATE_ANSWER_SUCCESS
} from '../../../api/progressions';
import {CONTENT_FETCH_REQUEST, CONTENT_FETCH_SUCCESS} from '../../../api/contents';
import {accordionIsOpenAt, fetchCorrection} from './helpers/shared';

const answerAndGetSuccessExitNode = [
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
        set('state.nextContent', {type: 'slide', ref: 'baz'})
      )({})
    },
    pipe(
      set('data.progressions.entities.foo', null),
      set('data.progressions.entities.foo.state.nextContent', {
        type: 'success',
        ref: 'successExitNode'
      })
    )({})
  ]
];

const services = t => ({
  Content: {
    find: (type, ref) => {
      if (type === 'slide') {
        return {_id: ref, chapter_id: 'chapId'};
      }
      if (type === 'chapter') {
        return {_id: ref};
      }
    }
  },
  Progressions: {
    postAnswers: (id, payload) => {
      t.is(id, 'foo');
      return pipe(
        set('state.content.ref', 'baz'),
        set('state.nextContent', {type: 'slide', ref: 'baz'})
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
      return ['Bonne réponse'];
    }
  },
  Analytics: {
    sendProgressionAnalytics: () => {
      t.pass();
    }
  }
});

const contentFetchActions = [
  {
    type: CONTENT_FETCH_REQUEST,
    meta: {
      type: 'slide',
      ref: 'baz'
    }
  },
  {
    type: CONTENT_FETCH_SUCCESS,
    meta: {
      type: 'slide',
      ref: 'baz'
    },
    payload: {_id: 'baz', chapter_id: 'chapId'}
  }
];

test(
  'should submit last answer',
  macro,
  set('data.progressions.entities.foo.state.nextContent', {type: 'slide', ref: 'baz'})({}),
  services,
  validateAnswer('foo', {answers: ['bar']}),
  flatten([
    answerAndGetSuccessExitNode,
    contentFetchActions,
    accordionIsOpenAt(0),
    fetchCorrection
  ]),
  13
);
