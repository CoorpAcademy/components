// @flow
import test from 'ava';
import {getConfig} from '../config';
import type {AcceptedAnswers, BasicQuestion, Config} from '../types';
import {
  assertCorrect,
  assertIncorrect,
  assertIncorrectEmptyAnswer
} from './helpers/assert-check-answer-correctness';

const config: Config = getConfig({ref: 'microlearning', version: 'latest'});
const configWithTypos = {...config, maxTypos: 3};

function createQuestion(answers: AcceptedAnswers, maxTypos?: ?number): BasicQuestion {
  return {
    type: 'basic',
    content: {
      maxTypos,
      answers
    }
  };
}
test('should return true when the accepted answer contain empty string', t => {
  const question = createQuestion([['viral'], ['']]);

  assertCorrect(t, config, question, ['']);
  assertCorrect(t, config, question, [' ']);
  assertCorrect(t, config, question, ['viral']);
});

test('should return true when the given answer is in the accepted answers', t => {
  const question = createQuestion([['guillaume tell'], ['tell'], ['guillaume'], ['tel']]);

  assertCorrect(t, config, question, ['guillaume tell']);
  assertCorrect(t, config, question, ['tell']);
  assertCorrect(t, config, question, ['guillaume']);
  assertCorrect(t, config, question, ['tel']);
});

test('should return true even when the given answer does not have the same case as the accepted answers', t => {
  const question = createQuestion([['answer2']]);

  assertCorrect(t, config, question, ['ANSWER2']);
});

test('should return false when the given answer is not in the accepted answers', t => {
  const question = createQuestion([['guillaume tell'], ['tell'], ['guillaume'], ['tel']]);

  assertIncorrect(t, config, question, ['foo'], [false]);
  assertIncorrect(t, config, question, ['bar'], [false]);
  assertIncorrect(t, config, question, ['gui'], [false]);
});

test('should return true when the given answer closely resembles an accepted answer', t => {
  const question = createQuestion([['guillaume tell'], ['tell'], ['guillaume'], ['tel']]);

  assertCorrect(t, config, question, ['tel']);
  assertCorrect(t, config, question, ['Tel']);
  assertCorrect(t, config, question, ['téll']);
  assertCorrect(t, config, question, ['Guillaume Telle']);
  assertCorrect(t, config, question, ['GUILLAUME TELLE']);
});

test('should allow typos by default', t => {
  const question = createQuestion([['foooooooooooo']]);

  assertCorrect(t, config, question, ['foooooooooooo']);
  assertCorrect(t, config, question, ['foooooooooooa']);
  assertCorrect(t, config, question, ['fooooooooooaa']);
  assertIncorrect(t, config, question, ['foooooooooaaa'], [false]);
});

test('should trim the given answer before comparing', t => {
  const question = createQuestion([['foo']], 0);

  assertCorrect(t, configWithTypos, question, ['foo ']);
  assertCorrect(t, configWithTypos, question, [' foo']);
  assertCorrect(t, configWithTypos, question, ['     foo     ']);
  assertIncorrect(t, configWithTypos, question, ['  fooo'], [false]);
  assertIncorrect(t, configWithTypos, question, ['A foo'], [false]);
});

test('should trim the accepted answers before comparing', t => {
  const question = createQuestion([[' foo ']], 0);

  assertCorrect(t, configWithTypos, question, ['foo ']);
  assertCorrect(t, configWithTypos, question, [' foo']);
  assertCorrect(t, configWithTypos, question, ['     foo     ']);
  assertIncorrect(t, configWithTypos, question, ['  fooo'], [false]);
  assertIncorrect(t, configWithTypos, question, ['A foo'], [false]);
});

test('should be able to define the number of typos in the question', t => {
  const question = createQuestion([['foooooooooooo']], 3);

  assertCorrect(t, config, question, ['foooooooooooo']);
  assertCorrect(t, config, question, ['foooooooooooa']);
  assertCorrect(t, config, question, ['fooooooooooaa']);
  assertCorrect(t, config, question, ['foooooooooaaa']);
  assertIncorrect(t, config, question, ['fooooooooaaaa'], [false]);
});

test('should consider the max number of typos from the slide before the one in the config', t => {
  const question = createQuestion([['foooooooooooo']], 1);

  assertCorrect(t, configWithTypos, question, ['foooooooooooo']);
  assertCorrect(t, configWithTypos, question, ['foooooooooooa']);
  assertIncorrect(t, configWithTypos, question, ['fooooooooooaa'], [false]);
});

test('should consider the max number of typos from the slide before the one in the config (with no typos)', t => {
  const question = createQuestion([['foooooooooooo']], 0);

  assertCorrect(t, configWithTypos, question, ['foooooooooooo']);
  assertIncorrect(t, configWithTypos, question, ['foooooooooooa'], [false]);
  assertIncorrect(t, configWithTypos, question, ['fooooooooooaa'], [false]);
});

test('should use the number of typos from the config if the one in question equals null', t => {
  const question = createQuestion([['foooooooooooo']], null);

  assertCorrect(t, configWithTypos, question, ['foooooooooooo']);
  assertCorrect(t, configWithTypos, question, ['foooooooooooa']);
  assertCorrect(t, configWithTypos, question, ['fooooooooooaa']);
  assertCorrect(t, configWithTypos, question, ['foooooooooaaa']);
  assertIncorrect(t, configWithTypos, question, ['foooooooaaaaa'], [false]);
});

test('should return true when the given answer contains an accepted answer', t => {
  const question = createQuestion([['Guillaume']]);

  assertCorrect(t, config, question, ['Guillaume Bacon']);
  assertCorrect(t, config, question, ['We should tell guillaume something about QA']);
});

test('should return true when the given answer includes an accepted answer that touches unrelated characters up to a certain limit', t => {
  const question = createQuestion([['Guillaume'], ['Tell']]);

  assertCorrect(t, config, question, ['ZGuillaume']);
  assertCorrect(t, config, question, ['GuillaumeZ']);
  assertCorrect(t, config, question, ['ZGuillaumeZ']);
  assertCorrect(t, config, question, ['ZZGuillaumeZZ']);
  assertCorrect(t, config, question, ['ZZGuillaumeZZZ']);
  assertCorrect(t, config, question, ['ZZZGuillaumeZZ']);
  assertCorrect(t, config, question, ['ZZZZZGuillaume']);
  assertCorrect(t, config, question, ['GuillaumeZZZZZ']);
  assertCorrect(t, config, question, ['ZZZZZTellZZZZZ']);
  assertCorrect(t, config, question, ['We should tell ZZguillaume something about QA']);
});

test('should return false when the given answer includes an accepted answer but touches too many unrelated characters', t => {
  const question = createQuestion([['Guillaume']]);

  assertIncorrect(t, config, question, ['GuillaumeZZZZZZ'], [false]);
  assertIncorrect(t, config, question, ['ZZZZZZGuillaume'], [false]);
  assertIncorrect(
    t,
    config,
    question,
    ['We should tell ZZZZZZguillaume something about QA'],
    [false]
  );
});

test('should return false when the given answer includes an accepted answer but has a typo', t => {
  const question = createQuestion([['this exact phrase']]);

  assertIncorrect(t, config, question, ['ZZthis exactz phraseZZ'], [false]);
});

test('should return false when the words are given in a different order', t => {
  const question = createQuestion([['this order']]);

  assertIncorrect(t, config, question, ['order this'], [false]);
});

test('should return false when the given answer has typos and is in the midst of other words', t => {
  const question = createQuestion([['though question']]);

  assertIncorrect(t, config, question, ['XXXtouff questionXXX'], [false]);
});

test('should return true when the given answer includes an accepted answer that touches unrelated characters up to a certain limit (simple word)', t => {
  const question = createQuestion([['Bob'], ['Guillaume']]);

  assertCorrect(t, config, question, ['ZGuillaume']);
  assertCorrect(t, config, question, ['Zguillaume']);
  assertCorrect(t, config, question, ['GuillaumeZ']);
  assertCorrect(t, config, question, ['ZGuillaumeZ']);
  assertCorrect(t, config, question, ['ZZGuillaumeZZ']);
  assertCorrect(t, config, question, ['ZZGuillaumeZZZ']);
  assertCorrect(t, config, question, ['ZZZGuillaumeZZ']);
  assertCorrect(t, config, question, ['ZZZZZGuillaume']);
  assertCorrect(t, config, question, ['GuillaumeZZZZZ']);
  assertCorrect(t, config, question, ['We should tell ZZguillaume something about QA']);
});

test('should return true when the given answer includes an accepted answer that touches unrelated characters up to a certain limit (multiple words)', t => {
  const question = createQuestion([['Guillaume Tell']]);

  assertCorrect(t, config, question, ['ZGuillaume Tell']);
  assertCorrect(t, config, question, ['ZGuillaume tell']);
  assertCorrect(t, config, question, ['Guillaume TellZ']);
  assertCorrect(t, config, question, ['ZGuillaume TellZ']);
  assertCorrect(t, config, question, ['ZZGuillaume TellZZ']);
  assertCorrect(t, config, question, ['ZZGuillaume TellZZZ']);
  assertCorrect(t, config, question, ['ZZZGuillaume TellZZ']);
  assertCorrect(t, config, question, ['ZZZZZGuillaume Tell']);
  assertCorrect(t, config, question, ['Guillaume TellZZZZZ']);
  assertCorrect(t, config, question, ['We should tell ZZguillaume Tell something about QA']);
});

test('should return false when the given answer is an empty string', t => {
  const question = createQuestion([['Guillaume Tell']]);

  assertIncorrect(t, config, question, [''], [false]);
});

test("should return false when the given answer isn't defined", t => {
  const question = createQuestion([['Guillaume Tell']]);

  assertIncorrect(t, config, question, [], []);
});

test('should return false when there are no correct answers', t => {
  const question = createQuestion([]);

  assertIncorrectEmptyAnswer(t, config, question, []);
  assertIncorrectEmptyAnswer(t, config, question, ['foo']);
});
