// @flow
import test from 'ava';
import {getConfig} from '../config';
import checkAnswer from '../check-answer';
import checkAnswerCorrectness from '../check-answer-correctness';
import type {Answer, Config, Question} from '../types';

const config: Config = getConfig({ref: 'microlearning', version: 'latest'});

// eslint-disable-next-line flowtype/no-weak-types
function checkBothMethods(t: any, expected: boolean, question: Question, givenAnswer: Answer) {
  t.is(checkAnswerCorrectness(config, question, givenAnswer).isCorrect, expected);
  t.is(checkAnswer(config, question, givenAnswer), expected);
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

test("should return the value of `isCorrect` in checkAnswerCorrectness's result (qcmDrag, matchOrder=true)", t => {
  const question = {
    type: 'qcmDrag',
    content: {
      matchOrder: true,
      answers: [['answer1', 'answer3'], ['answer2', 'answer4'], ['answer1', 'answer4']]
    }
  };

  checkBothMethods(t, true, question, ['answer1', 'answer3']);
  checkBothMethods(t, true, question, ['answer2', 'answer4']);
  checkBothMethods(t, true, question, ['answer1', 'answer4']);
  checkBothMethods(t, false, question, ['answer4', 'answer1']);
  checkBothMethods(t, false, question, ['answer1', 'answer2']);
});

test("should return the value of `isCorrect` in checkAnswerCorrectness's result (qcmDrag, matchOrder=false)", t => {
  const question = {
    type: 'qcmDrag',
    content: {
      matchOrder: false,
      answers: [['answer1', 'answer3'], ['answer2', 'answer4'], ['answer1', 'answer4']]
    }
  };

  checkBothMethods(t, true, question, ['answer1', 'answer3']);
  checkBothMethods(t, true, question, ['answer2', 'answer4']);
  checkBothMethods(t, true, question, ['answer1', 'answer4']);
  checkBothMethods(t, true, question, ['answer4', 'answer1']);
  checkBothMethods(t, false, question, ['answer1', 'answer2']);
});

test("should return the value of `isCorrect` in checkAnswerCorrectness's result (slider)", t => {
  const question = {
    type: 'slider',
    content: {
      matchOrder: false,
      answers: [['100'], ['200'], ['300']]
    }
  };

  checkBothMethods(t, true, question, ['100']);
  checkBothMethods(t, true, question, ['200']);
  checkBothMethods(t, true, question, ['300']);
  checkBothMethods(t, false, question, ['400']);
  checkBothMethods(t, false, question, ['101']);
  checkBothMethods(t, false, question, ['foo']);
});

test('should return true when the question has an unknown type', t => {
  const question = {
    type: 'unknown',
    content: {
      answers: []
    }
  };

  // $FlowFixMe Test when type is unknown, which is prohibited by the type checker
  checkBothMethods(t, true, question, []);
});
