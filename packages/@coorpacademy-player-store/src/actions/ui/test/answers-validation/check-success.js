import test from 'ava';
import {pipe, set, flatten} from 'lodash/fp';
import macro from '../../../test/helpers/macro';
import mockContentService from '../../../test/helpers/mock-content-service';
import {validateAnswer} from '../../answers';
import {
  PROGRESSION_CREATE_ANSWER_REQUEST,
  PROGRESSION_CREATE_ANSWER_SUCCESS
} from '../../../api/progressions';
import {UI_SELECT_ROUTE} from '../../route';
import {ANSWER_FETCH_REQUEST, ANSWER_FETCH_SUCCESS} from '../../../api/answers';
import {CONTENT_FETCH_REQUEST, CONTENT_FETCH_SUCCESS} from '../../../api/contents';
import {accordionIsOpenAt, progressionUpdated} from './helpers/shared';

const postAnswerPayload = {
  engine: {
    ref: 'learner',
    version: '1'
  },
  state: {
    content: {
      type: 'slide',
      ref: 'sli_1'
    },
    nextContent: {
      type: 'slide',
      ref: 'slideRef'
    },
    isCorrect: true,
    allAnswers: [
      {
        slideRef: 'sli_1',
        isCorrect: true,
        answer: ['bar']
      }
    ]
  }
};

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

const successfullyFetchAnswer = [
  {
    type: ANSWER_FETCH_REQUEST,
    meta: {
      progressionId: 'foo',
      slideId: 'sli_1'
    }
  },
  {
    type: ANSWER_FETCH_SUCCESS,
    meta: {
      progressionId: 'foo',
      slideId: 'sli_1'
    },
    payload: {
      correctAnswer: ['Bonne réponse'],
      corrections: [{answer: 'bar', isCorrect: false}]
    }
  }
];

test(
  'should submit answer with the current content and refresh progression state',
  macro,
  pipe(
    set('ui.answers.foo.value', ['bar']),
    set('ui.current.progressionId', 'foo'),
    set('data.progressions.entities.foo', {
      engine: {
        ref: 'learner',
        version: '1'
      },
      content: {
        type: 'chapter',
        ref: 'chapId'
      },
      state: {
        nextContent: {
          type: 'slide',
          ref: 'sli_1'
        }
      }
    }),
    set('data.configs.entities.learner@1', {
      version: '1'
    }),
    set('data.contents.slide.entities.sli_1', {})
  )({}),
  t => ({
    Content: mockContentService(t),
    Progressions: {
      postAnswer: (id, payload) => {
        t.is(id, 'foo');
        t.deepEqual(payload, {
          content: {type: 'slide', ref: 'sli_1'},
          answer: ['bar']
        });
        return postAnswerPayload;
      },
      findById: id => {
        t.is(id, 'foo');
        return 'foo';
      }
    },
    Answers: {
      findById: (id, slideId, givenAnswer) => {
        t.is(id, 'foo');
        t.deepEqual(givenAnswer, ['bar']);
        return {
          correctAnswer: ['Bonne réponse'],
          corrections: givenAnswer.map(answer => ({answer, isCorrect: false}))
        };
      }
    },
    Analytics: {
      sendProgressionUpdated: (currentProgression, engineConfig) => {
        t.is(currentProgression.engine.ref, 'learner');
        t.deepEqual(currentProgression.state.nextContent, postAnswerPayload.state.nextContent);
        return 'sent';
      }
    }
  }),
  validateAnswer(),
  flatten([
    {
      type: PROGRESSION_CREATE_ANSWER_REQUEST,
      meta: {
        progressionId: 'foo',
        answer: ['bar'],
        content: {
          ref: 'sli_1',
          type: 'slide'
        }
      }
    },
    {
      type: UI_SELECT_ROUTE,
      payload: 'correction',
      meta: {
        progressionId: 'foo'
      }
    },
    {
      type: PROGRESSION_CREATE_ANSWER_SUCCESS,
      meta: {
        progressionId: 'foo',
        answer: ['bar'],
        content: {
          ref: 'sli_1',
          type: 'slide'
        }
      },
      payload: postAnswerPayload
    },
    contentFetchActions,
    accordionIsOpenAt(2),
    progressionUpdated,
    successfullyFetchAnswer
  ]),
  8
);
