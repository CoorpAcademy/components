// // @flow
import test from 'ava';
import {type BasicQuestion, type AcceptedAnswers} from '../types';
import {assertCorrect, assertIncorrect} from './helpers/assert-check-answer-correctness';

const engine = {
  ref: 'microlearning',
  version: 'latest'
};

function createQuestion(answers: AcceptedAnswers, maxTypos?: ?number): BasicQuestion {
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

  assertCorrect(t, engine, question, ['guillaume tell']);
  assertCorrect(t, engine, question, ['tell']);
  assertCorrect(t, engine, question, ['guillaume']);
  assertCorrect(t, engine, question, ['tel']);
});

test('should return true even when the given answer does not have the same case as the accepted answers', t => {
  const question = createQuestion([['answer2']]);

  assertCorrect(t, engine, question, ['ANSWER2']);
});

test('should return false when the given answer is not in the accepted answers', t => {
  const question = createQuestion([['guillaume tell'], ['tell'], ['guillaume'], ['tel']]);

  assertIncorrect(t, engine, question, ['foo'], [false]);
  assertIncorrect(t, engine, question, ['bar'], [false]);
  assertIncorrect(t, engine, question, ['gui'], [false]);
});

test('should return true when the given answer closely resembles an accepted answer', t => {
  const question = createQuestion([['guillaume tell'], ['tell'], ['guillaume'], ['tel']]);

  assertCorrect(t, engine, question, ['tel']);
  assertCorrect(t, engine, question, ['Tel']);
  assertCorrect(t, engine, question, ['téll']);
  assertCorrect(t, engine, question, ['Guillaume Telle']);
  assertCorrect(t, engine, question, ['GUILLAUME TELLE']);
});

test('should allow typos by default', t => {
  const question = createQuestion([['foooooooooooo']]);

  assertCorrect(t, engine, question, ['foooooooooooo']);
  assertCorrect(t, engine, question, ['foooooooooooa']);
  assertCorrect(t, engine, question, ['fooooooooooaa']);
  assertIncorrect(t, engine, question, ['foooooooooaaa'], [false]);
});

test('should be able to define the number of typos in the question', t => {
  const question = createQuestion([['foooooooooooo']], 3);

  assertCorrect(t, engine, question, ['foooooooooooo']);
  assertCorrect(t, engine, question, ['foooooooooooa']);
  assertCorrect(t, engine, question, ['fooooooooooaa']);
  assertCorrect(t, engine, question, ['foooooooooaaa']);
  assertIncorrect(t, engine, question, ['fooooooooaaaa'], [false]);
});

test('should consider the max number of typos from the slide before the one in the config', t => {
  const question = createQuestion([['foooooooooooo']], 1);
  const engineWithTypos = {
    ref: 'microlearning',
    version: 'allow_typos_3'
  };

  assertCorrect(t, engineWithTypos, question, ['foooooooooooo']);
  assertCorrect(t, engineWithTypos, question, ['foooooooooooa']);
  assertIncorrect(t, engineWithTypos, question, ['fooooooooooaa'], [false]);
});

test('should consider the max number of typos from the slide before the one in the config (with no typos)', t => {
  const question = createQuestion([['foooooooooooo']], 0);
  const engineWithTypos = {
    ref: 'microlearning',
    version: 'allow_typos_3'
  };

  assertCorrect(t, engineWithTypos, question, ['foooooooooooo']);
  assertIncorrect(t, engineWithTypos, question, ['foooooooooooa'], [false]);
  assertIncorrect(t, engineWithTypos, question, ['fooooooooooaa'], [false]);
});

test('should use the number of typos from the config if the one in question equals null', t => {
  const question = createQuestion([['foooooooooooo']], null);
  const engineWithTypos = {
    ref: 'microlearning',
    version: 'allow_typos_3'
  };

  assertCorrect(t, engineWithTypos, question, ['foooooooooooo']);
  assertCorrect(t, engineWithTypos, question, ['foooooooooooa']);
  assertCorrect(t, engineWithTypos, question, ['fooooooooooaa']);
  assertCorrect(t, engineWithTypos, question, ['foooooooooaaa']);
  assertIncorrect(t, engineWithTypos, question, ['foooooooaaaaa'], [false]);
});

test('should return true when the given answer contains an accepted answer', t => {
  const question = createQuestion([['Guillaume']]);

  assertCorrect(t, engine, question, ['Guillaume Bacon']);
  assertCorrect(t, engine, question, ['We should tell guillaume something about QA']);
});

test('should return true when the given answer includes an accepted answer that touches unrelated characters up to a certain limit', t => {
  const question = createQuestion([['Guillaume'], ['Tell']]);

  assertCorrect(t, engine, question, ['ZGuillaume']);
  assertCorrect(t, engine, question, ['GuillaumeZ']);
  assertCorrect(t, engine, question, ['ZGuillaumeZ']);
  assertCorrect(t, engine, question, ['ZZGuillaumeZZ']);
  assertCorrect(t, engine, question, ['ZZGuillaumeZZZ']);
  assertCorrect(t, engine, question, ['ZZZGuillaumeZZ']);
  assertCorrect(t, engine, question, ['ZZZZZGuillaume']);
  assertCorrect(t, engine, question, ['GuillaumeZZZZZ']);
  assertCorrect(t, engine, question, ['ZZZZZTellZZZZZ']);
  assertCorrect(t, engine, question, ['We should tell ZZguillaume something about QA']);
});

test('should return false when the given answer includes an accepted answer but touches too many unrelated characters', t => {
  const question = createQuestion([['Guillaume']]);

  assertIncorrect(t, engine, question, ['GuillaumeZZZZZZ'], [false]);
  assertIncorrect(t, engine, question, ['ZZZZZZGuillaume'], [false]);
  assertIncorrect(
    t,
    engine,
    question,
    ['We should tell ZZZZZZguillaume something about QA'],
    [false]
  );
});

test('should return false when the given answer includes an accepted answer but has a typo', t => {
  const question = createQuestion([['this exact phrase']]);

  assertIncorrect(t, engine, question, ['ZZthis exactz phraseZZ'], [false]);
});

test('should return false when the words are given in a different order', t => {
  const question = createQuestion([['this order']]);

  assertIncorrect(t, engine, question, ['order this'], [false]);
});

test('should return false when the given answer has typos and is in the midst of other words', t => {
  const question = createQuestion([['though question']]);

  assertIncorrect(t, engine, question, ['XXXtouff questionXXX'], [false]);
});

test('should return true when the given answer includes an accepted answer that touches unrelated characters up to a certain limit (simple word)', t => {
  const question = createQuestion([['Bob'], ['Guillaume']]);

  assertCorrect(t, engine, question, ['ZGuillaume']);
  assertCorrect(t, engine, question, ['Zguillaume']);
  assertCorrect(t, engine, question, ['GuillaumeZ']);
  assertCorrect(t, engine, question, ['ZGuillaumeZ']);
  assertCorrect(t, engine, question, ['ZZGuillaumeZZ']);
  assertCorrect(t, engine, question, ['ZZGuillaumeZZZ']);
  assertCorrect(t, engine, question, ['ZZZGuillaumeZZ']);
  assertCorrect(t, engine, question, ['ZZZZZGuillaume']);
  assertCorrect(t, engine, question, ['GuillaumeZZZZZ']);
  assertCorrect(t, engine, question, ['We should tell ZZguillaume something about QA']);
});

test('should return true when the given answer includes an accepted answer that touches unrelated characters up to a certain limit (multiple words)', t => {
  const question = createQuestion([['Guillaume Tell']]);

  assertCorrect(t, engine, question, ['ZGuillaume Tell']);
  assertCorrect(t, engine, question, ['ZGuillaume tell']);
  assertCorrect(t, engine, question, ['Guillaume TellZ']);
  assertCorrect(t, engine, question, ['ZGuillaume TellZ']);
  assertCorrect(t, engine, question, ['ZZGuillaume TellZZ']);
  assertCorrect(t, engine, question, ['ZZGuillaume TellZZZ']);
  assertCorrect(t, engine, question, ['ZZZGuillaume TellZZ']);
  assertCorrect(t, engine, question, ['ZZZZZGuillaume Tell']);
  assertCorrect(t, engine, question, ['Guillaume TellZZZZZ']);
  assertCorrect(t, engine, question, ['We should tell ZZguillaume Tell something about QA']);
});

test('should return false when the given answer is an empty string', t => {
  const question = createQuestion([['Guillaume Tell']]);

  assertIncorrect(t, engine, question, [''], [false]);
});

test("should return false when the given answer isn't defined", t => {
  const question = createQuestion([['Guillaume Tell']]);

  assertIncorrect(t, engine, question, [], []);
});
