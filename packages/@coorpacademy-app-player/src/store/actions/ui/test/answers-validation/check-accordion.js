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

const wrongAnswer = pipe(
  set('state.content.ref', 'baz'),
  set('state.nextContent', {type: 'slide', ref: 'baz'}),
  set('state.isCorrect', false)
)({});

const viewedOneLesson = set(
  'state.viewedResources',
  [{type: 'chapter', ref: '5.C7', resources: ['lesson_1']}],
  wrongAnswer
);

const viewedThreeLessons = set(
  'state.viewedResources',
  [{type: 'chapter', ref: '5.C7', resources: ['lesson_1', 'lesson_2', 'lesson_3']}],
  wrongAnswer
);

const extraLifeAndViewedThreeLessons = set(
  'state.nextContent',
  {type: 'node', ref: 'extraLife'},
  viewedThreeLessons
);

const stateWithSlideAndManyResources = pipe(
  set('data.progressions.entities.foo.state.nextContent', {type: 'slide', ref: 'baz'}),
  set('data.progressions.entities.foo.content', {ref: '5.C7'}),
  set('data.contents.slide.entities.baz', {
    chapter_id: '5.C7',
    lessons: ['lesson_1', 'lesson_2', 'lesson_3']
  })
)({});

const services = result => t => ({
  Content: {
    find: (type, ref) => {
      if (type === 'slide') {
        return {_id: ref, chapter_id: '5.C7'};
      }
      if (type === 'chapter') {
        return {_id: ref};
      }
    }
  },
  Progressions: {
    postAnswers: (id, payload) => {
      t.is(id, 'foo');
      t.deepEqual(payload, {
        content: {type: 'slide', ref: 'baz'},
        answers: ['bar']
      });
      return result;
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

const answer = result => [
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
      payload: result
    }
  ]
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
      ref: '5.C7'
    }
  },
  {
    type: CONTENT_FETCH_SUCCESS,
    meta: {
      type: 'chapter',
      ref: '5.C7'
    },
    payload: {_id: '5.C7'}
  }
];

test(
  'should provide a wrong answer and see klf opened',
  macro,
  stateWithSlideAndManyResources,
  services(viewedOneLesson),
  validateAnswer('foo', {answers: ['bar']}),
  flatten([answer(viewedOneLesson), contentFetchActions, accordionIsOpenAt(0), fetchCorrection]),
  15
);

test(
  'should provide a wrong answer and see video opened',
  macro,
  stateWithSlideAndManyResources,
  services(viewedThreeLessons),
  validateAnswer('foo', {answers: ['bar']}),
  flatten([answer(viewedThreeLessons), contentFetchActions, accordionIsOpenAt(1), fetchCorrection]),
  15
);

test(
  'should see video opened during extra life, even if all lessons have been watched',
  macro,
  stateWithSlideAndManyResources,
  services(extraLifeAndViewedThreeLessons),
  validateAnswer('foo', {answers: ['bar']}),
  flatten([answer(extraLifeAndViewedThreeLessons), accordionIsOpenAt(0), fetchCorrection]),
  12
);
