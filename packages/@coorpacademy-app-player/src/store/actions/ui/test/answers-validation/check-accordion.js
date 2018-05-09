import test from 'ava';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import flatten from 'lodash/fp/flatten';
import macro from '../../../test/helpers/macro';
import {ACCORDION_KLF, ACCORDION_TIPS, ACCORDION_LESSON} from '../../corrections';
import mockContentService from '../../../test/helpers/mock-content-service';
import {validateAnswer} from '../../answers';
import {
  PROGRESSION_CREATE_ANSWER_REQUEST,
  PROGRESSION_CREATE_ANSWER_SUCCESS,
  PROGRESSION_FETCH_REQUEST,
  PROGRESSION_FETCH_BESTOF_REQUEST,
  PROGRESSION_FETCH_BESTOF_SUCCESS,
  ENGINE_CONFIG_FETCH_REQUEST,
  ENGINE_CONFIG_FETCH_SUCCESS
} from '../../../api/progressions';
import {UI_SELECT_ROUTE} from '../../route';
import {RANK_FETCH_START_REQUEST, RANK_FETCH_START_SUCCESS} from '../../../api/rank';
import {UI_SELECT_PROGRESSION} from '../../progressions';
import {
  CONTENT_FETCH_REQUEST,
  CONTENT_FETCH_SUCCESS,
  CONTENT_INFO_FETCH_REQUEST,
  CONTENT_INFO_FETCH_SUCCESS
} from '../../../api/contents';
import {accordionIsOpenAt, fetchCorrection, progressionUpdated} from './helpers/shared';

const correctAnswer = pipe(
  set('state.content.ref', 'baz'),
  set('state.nextContent', {type: 'slide', ref: 'baz'}),
  set('state.isCorrect', true)
)({});

const wrongAnswer = pipe(
  set('state.content.ref', 'baz'),
  set('state.nextContent', {type: 'slide', ref: 'baz'}),
  set('state.isCorrect', false)
)({});

const adaptiveNoAnswer = pipe(
  set('state.content.ref', 'baz'),
  set('state.nextContent', {type: 'slide', ref: 'baz'}),
  set('state.isCorrect', null)
)({});

const viewedOneLesson = set(
  'state.viewedResources',
  [{type: 'chapter', ref: 'chapId', resources: ['lesson_1']}],
  wrongAnswer
);

const viewedThreeLessons = set(
  'state.viewedResources',
  [{type: 'chapter', ref: 'chapId', resources: ['lesson_1', 'lesson_2', 'lesson_3']}],
  wrongAnswer
);

const extraLifeAndViewedThreeLessons = set(
  'state.nextContent',
  {type: 'node', ref: 'extraLife'},
  viewedThreeLessons
);

const stateWithSlideAndManyResources = pipe(
  set('ui.current.progressionId', 'foo'),
  set('data.progressions.entities.foo.engine', {version: '1', ref: 'microlearning'}),
  set('data.progressions.entities.foo.state.nextContent', {type: 'slide', ref: 'baz'}),
  set('data.progressions.entities.foo.content', {type: 'chapter', ref: 'chapId'}),
  set('data.contents.slide.entities.baz', {
    chapter_id: 'chapId',
    lessons: map(ref => ({ref}), ['lesson_1', 'lesson_2', 'lesson_3'])
  })
)({});

const services = result => t => ({
  Content: mockContentService(t),
  Progressions: {
    postAnswer: (id, payload) => {
      t.is(id, 'foo');
      t.deepEqual(payload, {
        content: {type: 'slide', ref: 'baz'},
        answer: ['bar']
      });
      return result;
    },
    findBestOf: (engineRef, type, ref, id) => {
      t.is(ref, 'chapId');
      return 16;
    },
    findById: id => {
      t.is(id, 'foo');
      return 'foo';
    },
    getEngineConfig: () => {
      t.pass();
      return 42;
    }
  },
  Answers: {
    findById: id => {
      t.is(id, 'foo');
      return ['Bonne réponse'];
    }
  },
  LeaderBoard: {
    getRank: () => {
      t.pass();
      return 1;
    }
  },
  Analytics: {
    sendProgressionAnalytics: (currentProgression, engineConfig) => {
      t.is(currentProgression.engine.ref, 'microlearning');
      t.deepEqual(currentProgression.state.nextContent, result.state.nextContent);
      return 'sent';
    }
  }
});

const answer = result => [
  {
    type: PROGRESSION_CREATE_ANSWER_REQUEST,
    meta: {
      progressionId: 'foo',
      answer: ['bar'],
      content: {
        ref: 'baz',
        type: 'slide'
      }
    }
  },
  {
    type: PROGRESSION_CREATE_ANSWER_SUCCESS,
    meta: {
      progressionId: 'foo',
      answer: ['bar'],
      content: {
        ref: 'baz',
        type: 'slide'
      }
    },
    payload: result
  }
];

const contentFetchActions = [
  {
    type: CONTENT_FETCH_REQUEST,
    meta: {
      type: 'slide',
      ref: 'baz'
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

test(
  'should provide a correct answer and see tips opened',
  macro,
  stateWithSlideAndManyResources,
  services(correctAnswer),
  validateAnswer('foo', {answer: ['bar']}),
  flatten([
    answer(correctAnswer),
    contentFetchActions,
    accordionIsOpenAt(ACCORDION_TIPS),
    progressionUpdated,
    fetchCorrection
  ]),
  6
);

test(
  'should provide a wrong answer and see lesson opened',
  macro,
  stateWithSlideAndManyResources,
  services(wrongAnswer),
  validateAnswer('foo', {answer: ['bar']}),
  flatten([
    answer(wrongAnswer),
    contentFetchActions,
    accordionIsOpenAt(ACCORDION_LESSON),
    progressionUpdated,
    fetchCorrection
  ]),
  6
);

test(
  'should provide a wrong answer and see klf opened',
  macro,
  stateWithSlideAndManyResources,
  services(viewedOneLesson),
  validateAnswer('foo', {answer: ['bar']}),
  flatten([
    answer(viewedOneLesson),
    contentFetchActions,
    accordionIsOpenAt(ACCORDION_KLF),
    progressionUpdated,
    fetchCorrection
  ]),
  6
);

test(
  'should see lesson opened during extra life',
  macro,
  stateWithSlideAndManyResources,
  services(extraLifeAndViewedThreeLessons),
  validateAnswer('foo', {answer: ['bar']}),
  flatten([
    answer(extraLifeAndViewedThreeLessons),
    accordionIsOpenAt(ACCORDION_LESSON),
    progressionUpdated,
    fetchCorrection
  ]),
  5
);

test(
  'should not show toggle accordeon and not fetch correction when `isCorrect` is null',
  macro,
  stateWithSlideAndManyResources,
  services(adaptiveNoAnswer),
  validateAnswer('foo', {answer: ['bar']}),
  flatten([
    answer(set('state.isCorrect', null, adaptiveNoAnswer)),
    contentFetchActions,
    {
      type: UI_SELECT_PROGRESSION,
      payload: {id: 'foo'}
    },
    {
      type: PROGRESSION_FETCH_REQUEST,
      meta: {id: 'foo'}
    },

    {
      type: RANK_FETCH_START_REQUEST
    },
    {
      type: RANK_FETCH_START_SUCCESS,
      payload: 1
    },
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {type: 'chapter', ref: 'chapId'}
    },
    {
      type: PROGRESSION_FETCH_BESTOF_REQUEST,
      meta: {type: 'chapter', ref: 'chapId'}
    },
    {
      type: PROGRESSION_FETCH_BESTOF_SUCCESS,
      meta: {type: 'chapter', ref: 'chapId'},
      payload: 16
    },
    {
      type: ENGINE_CONFIG_FETCH_REQUEST,
      meta: {engine: {ref: 'microlearning', version: '1'}}
    },
    {
      type: ENGINE_CONFIG_FETCH_SUCCESS,
      meta: {engine: {ref: 'microlearning', version: '1'}},
      payload: 42
    },
    {
      type: CONTENT_INFO_FETCH_REQUEST,
      meta: {type: 'chapter', ref: 'chapId'}
    },
    {
      type: CONTENT_INFO_FETCH_SUCCESS,
      meta: {type: 'chapter', ref: 'chapId'},
      payload: {nbSlides: 20}
    },
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {type: 'slide', ref: 'baz'}
    },
    {
      type: CONTENT_FETCH_REQUEST,
      meta: {type: 'chapter', ref: 'chapId'}
    },
    {
      type: UI_SELECT_ROUTE,
      payload: 'answer',
      meta: {progressionId: 'foo'}
    }
  ]),
  9
);
