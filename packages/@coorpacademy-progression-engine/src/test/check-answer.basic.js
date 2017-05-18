// // @flow
import test from 'ava';
import checkAnswer from '../check-answer';
import {type BasicQuestion, type AcceptedAnswers} from '../types';

const engine = {
  ref: 'microlearning',
  version: 'latest'
};

function createQuestion(answers: AcceptedAnswers, maxTypos?: number): BasicQuestion {
  return {
    type: 'basic',
    content: {
      maxTypos,
      answers
    }
  };
}

test('should return true when the given answer is in the accepted answers', t => {
  const question = createQuestion([['guillaume tell'], ['tell'], ['guillaume'], ['tel']]);

  t.true(checkAnswer(engine, question, ['guillaume tell']));
  t.true(checkAnswer(engine, question, ['tell']));
  t.true(checkAnswer(engine, question, ['guillaume']));
  t.true(checkAnswer(engine, question, ['tel']));
});

test('should return true even when the given answer does not have the same case as the accepted answers', t => {
  const question = createQuestion([['answer2']]);

  t.true(checkAnswer(engine, question, ['ANSWER2']));
});

test('should return false when the given answer is not in the accepted answers', t => {
  const question = createQuestion([['guillaume tell'], ['tell'], ['guillaume'], ['tel']]);

  t.false(checkAnswer(engine, question, ['foo']));
  t.false(checkAnswer(engine, question, ['bar']));
  t.false(checkAnswer(engine, question, ['gui']));
});

test('should return true when the given answer closely resembles an accepted answer', t => {
  const question = createQuestion([['guillaume tell'], ['tell'], ['guillaume'], ['tel']]);

  t.true(checkAnswer(engine, question, ['tel']));
  t.true(checkAnswer(engine, question, ['Tel']));
  t.true(checkAnswer(engine, question, ['téll']));
  t.true(checkAnswer(engine, question, ['Guillaume Telle']));
  t.true(checkAnswer(engine, question, ['GUILLAUME TELLE']));
});

test('should allow typos by default', t => {
  const question = createQuestion([['foooooooooooo']]);

  t.true(checkAnswer(engine, question, ['foooooooooooo']));
  t.true(checkAnswer(engine, question, ['foooooooooooa']));
  t.true(checkAnswer(engine, question, ['fooooooooooaa']));
  t.false(checkAnswer(engine, question, ['foooooooooaaa']));
});

test('should be able to define the number of typos in the question', t => {
  const question = createQuestion([['foooooooooooo']], 3);

  t.true(checkAnswer(engine, question, ['foooooooooooo']));
  t.true(checkAnswer(engine, question, ['foooooooooooa']));
  t.true(checkAnswer(engine, question, ['fooooooooooaa']));
  t.true(checkAnswer(engine, question, ['foooooooooaaa']));
  t.false(checkAnswer(engine, question, ['fooooooooaaaa']));
});

test('should consider the max number of typos from the slide before the one in the config', t => {
  const question = createQuestion([['foooooooooooo']], 1);
  const engineWithTypos = {
    ref: 'microlearning',
    version: 'allow_typos_3'
  };

  t.true(checkAnswer(engineWithTypos, question, ['foooooooooooo']));
  t.true(checkAnswer(engineWithTypos, question, ['foooooooooooa']));
  t.false(checkAnswer(engineWithTypos, question, ['fooooooooooaa']));
  t.false(checkAnswer(engineWithTypos, question, ['foooooooooaaa']));
  t.false(checkAnswer(engineWithTypos, question, ['fooooooooaaaa']));
});

test.skip('should return true when the given answer includes an accepted answer', t => {
  const question = createQuestion([['Guillaume']]);

  t.true(checkAnswer(engine, question, ['Guillaume Bacon']));
  t.true(checkAnswer(engine, question, ['We should tell guillaume something about QA']));
});

test('should return false when the words are given in a different order', t => {
  const question = createQuestion([['this order']]);

  t.false(checkAnswer(engine, question, ['order this']));
});

test('should return false when the given answer has typos and is in the midst of other words', t => {
  const question = createQuestion([['though question']]);

  t.false(checkAnswer(engine, question, ['XXXtouff questionXXX']));
});
