// @flow
import test from 'ava';
import set from 'lodash/fp/set';
import getConfig from '../../config';
import variables from '../variables';
import {answerAction} from './fixtures/actions';
import {learner} from './fixtures/engines';
import {stateForFirstSlide} from './fixtures/states';

const config = getConfig(learner);

test('should extract instructions from answerAction and apply them to state', t => {
  const state = stateForFirstSlide;
  const answerActionWithInstructions = set(
    'payload.instructions',
    [
      {value: 1, type: 'set', field: 'A'},
      {value: 3, type: 'add', field: 'lives'},
      {value: 2, type: 'set', field: 'stars'},
      {value: false, type: 'set', field: 'reverse'}
    ],
    answerAction
  );

  const newState = variables(config)(state, answerActionWithInstructions);

  t.is(newState.variables.A, 1);
  t.is(newState.lives, 4);
  t.is(newState.stars, 2);
  t.is(newState.variables.reverse, false);
});
