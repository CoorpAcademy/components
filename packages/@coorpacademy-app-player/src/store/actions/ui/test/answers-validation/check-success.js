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
import {ANSWER_FETCH_REQUEST, ANSWER_FETCH_SUCCESS} from '../../../api/answers';
import {CONTENT_FETCH_REQUEST, CONTENT_FETCH_SUCCESS} from '../../../api/contents';
import {accordionIsOpenAt} from './helpers/shared';

const postAnswersPayload = pipe(
  set('state.content.ref', 'baz'),
  set('state.nextContent', {type: 'slide', ref: 'baz'}),
  set('state.isCorrect', true)
)({});

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
    payload: {
      _id: 'baz',
      chapterId: 'chapId'
    }
  }
];

const successfullyFetchAnswers = [
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
  [
    {
      type: ANSWER_FETCH_SUCCESS,
      meta: {
        progressionId: 'foo',
        slideId: 'baz'
      },
      payload: {
        correctAnswer: ['Bonne réponse'],
        corrections: [{answer: 'bar', isCorrect: false}]
      }
    },
    set('ui.answers.0.correction', 'Bonne réponse', {})
  ]
];

const createCorrectAnswer = [
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
      payload: postAnswersPayload
    },
    set('data.progressions.entities.foo', null, {})
  ]
];

test(
  'should submit answers with the current content and refresh progression state',
  macro,
  set('data.progressions.entities.foo.state.nextContent', {
    type: 'slide',
    ref: 'baz'
  })({}),
  t => ({
    Progressions: {
      postAnswers: (id, payload) => {
        t.is(id, 'foo');
        t.deepEqual(payload, {
          content: {type: 'slide', ref: 'baz'},
          answers: ['bar']
        });
        return postAnswersPayload;
      },
      findById: id => {
        t.is(id, 'foo');
        return 'foo';
      }
    },
    Answers: {
      findById: (id, slideId, givenAnswer) => {
        t.is(id, 'foo');
        return {
          correctAnswer: ['Bonne réponse'],
          corrections: givenAnswer.map(answer => ({answer, isCorrect: false}))
        };
      }
    },
    Analytics: {
      sendProgressionAnalytics: () => {
        t.pass();
      }
    },
    Content: {
      find: (type, ref) => {
        t.is(type, 'slide');
        t.is(ref, 'baz');
        return {_id: ref, chapterId: 'chapId'};
      }
    }
  }),
  validateAnswer('foo', {answers: ['bar']}),
  flatten([
    createCorrectAnswer,
    contentFetchActions,
    accordionIsOpenAt(2),
    successfullyFetchAnswers
  ]),
  16
);
