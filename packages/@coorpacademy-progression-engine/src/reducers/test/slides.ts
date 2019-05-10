import test from 'ava';
// @ts-ignore
import {getConfig} from '../../config';
import slides from '../slides';
import {answerAction, askClueAction} from './fixtures/actions';
import {microlearning} from './fixtures/engines';

const config = getConfig(microlearning);

test('should return updated slides when action type is answer', t => {
  const result = slides(config)(['1.A1.1'], answerAction);
  t.deepEqual(result, ['1.A1.1', '1.A1.2']);
});

test('should return given array when action type is not answer', t => {
  const result = slides(config)(['1.A1.2'], askClueAction);
  t.deepEqual(result, ['1.A1.2']);
});
