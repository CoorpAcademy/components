import test from 'ava';
import {pipe, set, flatten} from 'lodash/fp';
import macro from '../../../test/helpers/macro';
import {validateAnswer} from '../../answers';
import {
  PROGRESSION_CREATE_ANSWER_REQUEST,
  PROGRESSION_CREATE_ANSWER_SUCCESS
} from '../../../api/progressions';
import {ANSWER_FETCH_REQUEST, ANSWER_FETCH_SUCCESS} from '../../../api/answers';
import {UI_SELECT_ROUTE} from '../../route';
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
    sendProgressionFinished: (currentProgression, engineConfig) => {
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
    set('ui.answers.foo.value', ['bar']),
    set('ui.current.progressionId', 'foo'),
    set('data.progressions.entities.foo.engine', {
      ref: 'learner',
      version: '1'
    }),
    set('data.configs.entities.learner@1', {
      version: '1'
    }),
    set('data.progressions.entities.foo.state.nextContent', {type: 'slide', ref: 'slideRef'}),
    set('data.contents.slide.entities.slideRef.lessons', [{ref: 'lesson_ref'}])
  )({}),
  services,
  validateAnswer(),
  flatten([
    {
      type: PROGRESSION_CREATE_ANSWER_REQUEST,
      meta: {
        progressionId: 'foo',
        answer: ['bar'],
        content: {
          ref: 'slideRef',
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
          ref: 'slideRef',
          type: 'slide'
        }
      },
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
