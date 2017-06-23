// // @flow
import test from 'ava';
import checkAnswer from '../check-answer';
import checkAnswerCorrectness from '../check-answer-correctness';
import type {Answer, Engine, Question} from '../types';

const engine: Engine = {
  ref: 'microlearning',
  version: 'latest'
};

// eslint-disable-next-line flowtype/no-weak-types
function checkBothMethods(t: any, expected: boolean, question: Question, givenAnswer: Answer) {
  t.is(checkAnswerCorrectness(engine, question, givenAnswer).isCorrect, expected);
  t.is(checkAnswer(engine, question, givenAnswer), expected);
}

test("should return the value of `isCorrect` in checkAnswerCorrectness's result (basic)", t => {
  const question = {
    type: 'basic',
    content: {
      answers: [['guillaume tell'], ['tell'], ['guillaume'], ['tel']],
      maxTypos: undefined
    }
  };

  checkBothMethods(t, true, question, ['guillaume tell']);
  checkBothMethods(t, true, question, ['guillaume']);
  checkBothMethods(t, true, question, ['tell']);
  checkBothMethods(t, true, question, ['GUILLaume']);
  checkBothMethods(t, true, question, ['guillaume']);
  checkBothMethods(t, false, question, ['guilluaem']);
  checkBothMethods(t, true, question, ['XXXXguillaumeXXXX']);
  checkBothMethods(t, true, question, ['XXXXguILLAumeXXXX']);
  checkBothMethods(t, false, question, ['XXXXXXguillaume']);
  checkBothMethods(t, false, question, ['guillaumeXXXXXX']);
});

test("should return the value of `isCorrect` in checkAnswerCorrectness's result (qcm)", t => {
  const question = {
    type: 'qcm',
    content: {
      answers: [['answer1', 'answer3'], ['answer2', 'answer4'], ['answer1', 'answer4']]
    }
  };

  checkBothMethods(t, true, question, ['answer1', 'answer3']);
  checkBothMethods(t, true, question, ['answer2', 'answer4']);
  checkBothMethods(t, true, question, ['answer1', 'answer4']);
  checkBothMethods(t, true, question, ['answer4', 'answer1']);
  checkBothMethods(t, false, question, ['answer1', 'answer2']);
});

test("should return the value of `isCorrect` in checkAnswerCorrectness's result (qcmDrag)", t => {
  const question = {
    type: 'qcmDrag',
    content: {
      answers: [['answer1', 'answer3'], ['answer2', 'answer4'], ['answer1', 'answer4']]
    }
  };

  checkBothMethods(t, true, question, ['answer1', 'answer3']);
  checkBothMethods(t, true, question, ['answer2', 'answer4']);
  checkBothMethods(t, true, question, ['answer1', 'answer4']);
  checkBothMethods(t, false, question, ['answer4', 'answer1']);
  checkBothMethods(t, false, question, ['answer1', 'answer2']);
});

test('should return true when the question has an unknown type', t => {
  const question = {
    type: 'unknown',
    content: {
      answers: []
    }
  };

  checkBothMethods(t, true, question, []);
});
