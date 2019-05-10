import test from 'ava';
import {getConfig} from '../../config';
import isCorrect from '../is-correct';
import {moveAction, answerAction, extraLifeAcceptedAction} from './fixtures/actions';
import {microlearning} from './fixtures/engines';

const config = getConfig(microlearning);

test('should return default value', t => {
  const result = isCorrect(config)(undefined, moveAction);
  t.true(result);
});

test('should return isCorrect value when action type is answer', t => {
  const result = isCorrect(config)(true, answerAction);
  t.false(result);
});

test('should return true value for any other type of action', t => {
  const result = isCorrect(config)(true, extraLifeAcceptedAction);
  t.true(result);
});
