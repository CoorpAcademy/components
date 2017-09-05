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
import {accordionIsOpenAt, fetchCorrection} from './helpers/shared';

const wrongAnswer = pipe(
  set('state.content.ref', 'baz'),
  set('state.isCorrect', false),
  set('content', {ref: '5.C7'})
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

const stateWithSlideAndManyResources = pipe(
  set('data.progressions.entities.foo.state.nextContent', {type: 'slide', ref: 'baz'}),
  set('data.slides.entities.baz.lessons', ['lesson_1', 'lesson_2', 'lesson_3'])
)({});

const services = result => t => ({
  Progressions: {
    createAnswer: (id, payload) => {
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

test(
  'should provide a wrong answer and see klf opened',
  macro,
  stateWithSlideAndManyResources,
  services(viewedOneLesson),
  validateAnswer('foo', {answers: ['bar']}),
  flatten([answer(viewedOneLesson), accordionIsOpenAt(0), fetchCorrection]),
  12
);

test(
  'should provide a wrong answer and see video opened',
  macro,
  stateWithSlideAndManyResources,
  services(viewedThreeLessons),
  validateAnswer('foo', {answers: ['bar']}),
  flatten([answer(viewedThreeLessons), accordionIsOpenAt(1), fetchCorrection]),
  12
);
