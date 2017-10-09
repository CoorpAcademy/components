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
      payload: set('state.content.ref', 'baz', {})
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
  Progressions: {
    postAnswers: (id, payload) => {
      t.is(id, 'foo');
      return set('state.content.ref', 'baz', {});
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
  set('data.progressions.entities.foo.state.nextContent', {type: 'slide', ref: 'baz'})({}),
  services,
  validateAnswer('foo', {answers: ['bar']}),
  flatten([answerAndGetSuccessExitNode, accordionIsOpenAt(0), fetchCorrection]),
  11
);
