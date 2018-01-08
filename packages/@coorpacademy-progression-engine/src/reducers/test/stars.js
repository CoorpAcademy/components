// @flow
import test from 'ava';
import set from 'lodash/fp/set';
import getConfig from '../../config';
import stars from '../stars';
import {answerAction, askClueAction, resourceAction} from './fixtures/actions';
import {microlearning} from './fixtures/engines';
import {stateForSecondSlide} from './fixtures/states';

const config = getConfig(microlearning);

test('should return updated stars when action type is answer with isCorrect true', t => {
  const action = set('payload.isCorrect', true, answerAction);
  const result = stars(config)(0, action, stateForSecondSlide);
  t.deepEqual(result, 4);
});

test('should not update stars when action type is answer with isCorrect false', t => {
  const result = stars(config)(0, answerAction, stateForSecondSlide);
  t.deepEqual(result, 0);
});

test('should return updated stars when action type is clue and slide is not in state', t => {
  const result = stars(config)(5, askClueAction, stateForSecondSlide);
  t.deepEqual(result, 4);
});

test('should not update stars when action type is clue and slide is already in state', t => {
  const state = set('requestedClues', '1.A1.2', stateForSecondSlide);
  const result = stars(config)(5, askClueAction, state);
  t.deepEqual(result, 5);
});

test('should return updated stars when action type is resource and content ref is not in state', t => {
  const result = stars(config)(5, resourceAction, stateForSecondSlide);
  t.deepEqual(result, 9);
});

test('should not update stars when action type is resource and slide is already in state', t => {
  const state = set('viewedResources', [{ref: '1.A1', type: 'chapter'}], stateForSecondSlide);
  const result = stars(config)(5, resourceAction, state);
  t.deepEqual(result, 5);
});
