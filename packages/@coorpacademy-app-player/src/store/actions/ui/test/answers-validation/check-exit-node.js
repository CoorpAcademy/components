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
import {accordionIsOpenAt, progressionUpdated} from './helpers/shared';

const services = t => ({
  Progressions: {
    postAnswer: (id, payload) => {
      t.is(id, 'foo');
      return pipe(
        set('state.content.ref', 'slideRef'),
        set('state.nextContent', {type: 'success', ref: 'successExitNode'})
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
    sendProgressionAnalytics: (currentProgression, engineConfig) => {
      t.is(currentProgression.engine.ref, 'learner');
      t.deepEqual(currentProgression.state.nextContent, {type: 'success', ref: 'successExitNode'});
      return 'sent';
    }
  }
});

test(
  'should submit last answer',
  macro,
  pipe(
    set('ui.current.progressionId', 'foo'),
    set('data.progressions.entities.foo.engine', {
      ref: 'learner',
      version: '1'
    }),
    set('data.progressions.entities.foo.state.nextContent', {type: 'slide', ref: 'slideRef'}),
    set('data.contents.slide.entities.slideRef.lessons', [{ref: 'lesson_ref'}])
  )({}),
  services,
  validateAnswer('foo', {answer: ['bar']}),
  flatten([
    {
      type: PROGRESSION_CREATE_ANSWER_REQUEST,
      meta: {progressionId: 'foo'}
    },
    {
      type: PROGRESSION_CREATE_ANSWER_SUCCESS,
      meta: {progressionId: 'foo'},
      payload: pipe(
        set('state.content.ref', 'slideRef'),
        set('state.nextContent', {type: 'success', ref: 'successExitNode'})
      )({})
    },
    accordionIsOpenAt(0),
    progressionUpdated,
    {
      type: ANSWER_FETCH_REQUEST,
      meta: {
        progressionId: 'foo',
        slideId: 'slideRef'
      }
    },
    {
      type: ANSWER_FETCH_SUCCESS,
      meta: {
        progressionId: 'foo',
        slideId: 'slideRef'
      },
      payload: ['Bonne réponse']
    }
  ]),
  4
);
