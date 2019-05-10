import test from 'ava';
// @ts-ignore
import {getConfig} from '../../config';
import allAnswers from '../all-answers';
import {answerAction, askClueAction} from './fixtures/actions';
import {microlearning} from './fixtures/engines';

const answers = [{slideRef: '1.A1.4', isCorrect: true, answer: ['bar']}];
const config = getConfig(microlearning);

test('should return updated allAnswers array when action type is answer', t => {
  const result = allAnswers(config)(answers, answerAction);
  t.deepEqual(result, [
    {slideRef: '1.A1.4', isCorrect: true, answer: ['bar']},
    {slideRef: '1.A1.2', isCorrect: false, answer: ['foo']}
  ]);
});

test('should not modify allAnswers array when action type is not answer', t => {
  const result = allAnswers(config)(answers, askClueAction);
  t.deepEqual(result, answers);
});
