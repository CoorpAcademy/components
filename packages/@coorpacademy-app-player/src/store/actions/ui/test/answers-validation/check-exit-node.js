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
import {accordionIsOpenAt} from './helpers/shared';

const services = t => ({
  Progressions: {
    postAnswers: (id, payload) => {
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
    sendProgressionAnalytics: () => {
      t.pass();
    }
  }
});

test(
  'should submit last answer',
  macro,
  set('data.progressions.entities.foo.state.nextContent', {type: 'slide', ref: 'slideRef'})({}),
  services,
  validateAnswer('foo', {answers: ['bar']}),
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
  3
);
