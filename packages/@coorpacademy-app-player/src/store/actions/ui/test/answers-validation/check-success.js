import test from 'ava';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import flatten from 'lodash/fp/flatten';
import macro from '../../../test/helpers/macro';
import mockContentService from '../../../test/helpers/mock-content-service';
import {validateAnswer} from '../../answers';
import {
  PROGRESSION_CREATE_ANSWER_REQUEST,
  PROGRESSION_CREATE_ANSWER_SUCCESS
} from '../../../api/progressions';
import {ANSWER_FETCH_REQUEST, ANSWER_FETCH_SUCCESS} from '../../../api/answers';
import {CONTENT_FETCH_REQUEST, CONTENT_FETCH_SUCCESS} from '../../../api/contents';
import {accordionIsOpenAt, progressionUpdated} from './helpers/shared';

const postAnswersPayload = pipe(
  set('state.content.ref', 'baz'),
  set('state.nextContent', {type: 'slide', ref: 'slideRef'}),
  set('state.isCorrect', true)
)({});

const contentFetchActions = [
  {
    type: CONTENT_FETCH_REQUEST,
    meta: {
      type: 'slide',
      ref: 'slideRef'
    }
  },
  {
    type: CONTENT_FETCH_SUCCESS,
    meta: {
      type: 'slide',
      ref: 'slideRef'
    },
    payload: {
      _id: 'slideRef',
      chapter_id: 'chapId',
      foo: 'bar'
    }
  },
  {
    type: CONTENT_FETCH_REQUEST,
    meta: {
      type: 'chapter',
      ref: 'chapId'
    }
  },
  {
    type: CONTENT_FETCH_SUCCESS,
    meta: {
      type: 'chapter',
      ref: 'chapId'
    },
    payload: {_id: 'chapId', foo: 'baz'}
  }
];

const successfullyFetchAnswers = [
  {
    type: ANSWER_FETCH_REQUEST,
    meta: {
      progressionId: 'foo',
      slideId: 'baz'
    }
  },
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
  }
];

const createCorrectAnswer = [
  {
    type: PROGRESSION_CREATE_ANSWER_REQUEST,
    meta: {progressionId: 'foo'}
  },
  {
    type: PROGRESSION_CREATE_ANSWER_SUCCESS,
    meta: {progressionId: 'foo'},
    payload: postAnswersPayload
  }
];

test(
  'should submit answers with the current content and refresh progression state',
  macro,
  pipe(
    set('ui.current.progressionId', 'foo'),
    set('data.progressions.entities.foo.engine', {
      ref: 'learner',
      version: '1'
    }),
    set('data.progressions.entities.foo.state.nextContent', {
      type: 'slide',
      ref: 'baz'
    })
  )({}),
  t => ({
    Content: mockContentService(t),
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
      sendProgressionAnalytics: (engineRef, nextContent) => {
        t.is(engineRef, 'learner');
        t.deepEqual(nextContent, postAnswersPayload.state.nextContent);
        return 'sent';
      }
    }
  }),
  validateAnswer('foo', {answers: ['bar']}),
  flatten([
    createCorrectAnswer,
    contentFetchActions,
    accordionIsOpenAt(2),
    progressionUpdated,
    successfullyFetchAnswers
  ]),
  7
);
