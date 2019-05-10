import test from 'ava';
import {getConfig} from '../../config';
import requestedClues from '../requested-clues';
import {answerAction, askClueAction} from './fixtures/actions';
import {microlearning} from './fixtures/engines';

const config = getConfig(microlearning);

test('should return updated requestedClues when action type is clue', t => {
  const result = requestedClues(config)(undefined, askClueAction);
  t.deepEqual(result, ['1.A1.2']);
});

test('should return the same given array when action type is extraLifeAccepted and slide is already in array', t => {
  const result = requestedClues(config)(['1.A1.2'], askClueAction);
  t.deepEqual(result, ['1.A1.2']);
});

test('should return given array when action type is not answer', t => {
  const result = requestedClues(config)(['1.A1.2'], answerAction);
  t.deepEqual(result, ['1.A1.2']);
});
