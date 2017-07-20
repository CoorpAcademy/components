// @flow
import map from 'lodash/fp/map';
import zip from 'lodash/fp/zip';
import some from 'lodash/fp/some';
import every from 'lodash/fp/every';
import maxBy from 'lodash/fp/maxBy';
import filter from 'lodash/fp/filter';
import flatten from 'lodash/fp/flatten';
import reverse from 'lodash/fp/reverse';
import toLower from 'lodash/fp/toLower';
import includes from 'lodash/fp/includes';
import FuzzyMatching from 'fuzzy-matching';
import getConfig from './config';
import type {
  Question,
  BasicQuestion,
  TemplateQuestion,
  PartialCorrection,
  AnswerCorrection,
  AcceptedAnswers,
  Answer,
  Engine,
  MicroLearningConfig
} from './types';

// eslint-disable-next-line flowtype/no-weak-types
function checkFuzzyAnswer(maxTypos: number, fm: any, userAnswer: string): boolean {
  if (!userAnswer || userAnswer.length === 0) {
    return false;
  }
  // Find a valid answer resembling userAnswer
  return !!fm.get(userAnswer, {maxChanges: maxTypos}).value;
}

function containsAnswer(
  config: MicroLearningConfig,
  allowedAnswer: string,
  givenAnswer: string
): boolean {
  // Find the allowed answer in the given answer
  if (!includes(allowedAnswer, givenAnswer)) {
    // If not present
    return false;
  }

  // Get the non-space characters surrounding the answer and make sure that there are not too many.
  const limit = config.answerBoundaryLimit;
  const [first, second] = givenAnswer.split(allowedAnswer);
  const indexOfSpaceInFirst = reverse(first).indexOf(' ');
  const indexOfSpaceInSecond = second.indexOf(' ');

  return (
    (first.length <= limit || (indexOfSpaceInFirst !== -1 && indexOfSpaceInFirst <= limit)) &&
    (second.length <= limit || (indexOfSpaceInSecond !== -1 && indexOfSpaceInSecond <= limit))
  );
}

function matchAnswerForBasic(
  config: MicroLearningConfig,
  question: BasicQuestion,
  givenAnswer: Answer
): Array<Array<PartialCorrection>> {
  const allowedAnswers = question.content.answers;
  const comparableGivenAnswer = map(toLower, givenAnswer);
  const fm = new FuzzyMatching(flatten(allowedAnswers));
  const maxTypos = question.content.maxTypos === 0
    ? question.content.maxTypos
    : question.content.maxTypos || config.maxTypos;

  const isCorrect =
    checkFuzzyAnswer(maxTypos, fm, comparableGivenAnswer[0]) ||
    some(
      allowedAnswer => containsAnswer(config, toLower(allowedAnswer[0]), comparableGivenAnswer[0]),
      allowedAnswers
    );
  return [
    [
      {
        answer: givenAnswer[0],
        isCorrect
      }
    ]
  ];
}

function isTextCorrect(
  config: MicroLearningConfig,
  allowedAnswers: Answer,
  answer: string
): boolean {
  return allowedAnswers.includes(answer);
}

function matchAnswerForTemplate(
  config: MicroLearningConfig,
  question: TemplateQuestion,
  givenAnswer: Answer
): Array<Array<PartialCorrection>> {
  const allowedAnswers = question.content.answers;
  return [
    givenAnswer.map((answer, index) => ({
      answer,
      isCorrect: allowedAnswers.some(allowedAnswer =>
        isTextCorrect(config, [allowedAnswer[index]], answer)
      )
    }))
  ];
}

function matchAnswerForUnorderedQCM(
  allowedAnswers: AcceptedAnswers,
  givenAnswer: Answer
): Array<Array<PartialCorrection>> {
  const lowerGivenAnswer = map(toLower, givenAnswer);

  // eslint-disable-next-line flowtype/require-return-type
  return allowedAnswers.map(allowedAnswer => {
    const lowerAllowedAnswer = map(toLower, allowedAnswer);
    const givenAnswersMap = map(
      answer => ({
        answer,
        isCorrect: includes(toLower(answer), lowerAllowedAnswer)
      }),
      givenAnswer
    );
    if (lowerAllowedAnswer.some(answer => !includes(answer, lowerGivenAnswer))) {
      return givenAnswersMap.concat([{answer: undefined, isCorrect: false}]);
    }
    return givenAnswersMap;
  });
}

function matchAnswerForOrderedQCM(
  allowedAnswers: AcceptedAnswers,
  givenAnswer: Answer
): Array<Array<PartialCorrection>> {
  // eslint-disable-next-line flowtype/require-return-type
  return map(allowedAnswer => {
    // eslint-disable-next-line flowtype/require-return-type
    return map(([givenAnswerPart, allowedAnswerPart]) => {
      return {
        answer: givenAnswerPart,
        isCorrect: toLower(givenAnswerPart) === toLower(allowedAnswerPart)
      };
    }, zip(givenAnswer, allowedAnswer));
  }, allowedAnswers);
}

const findBestMatch = maxBy(correction => filter('isCorrect', correction).length);

function matchGivenAnswerToQuestion(
  engine: Engine,
  question: Question,
  givenAnswer: Answer
): Array<Array<PartialCorrection>> {
  const config = (getConfig(engine): MicroLearningConfig);
  const allowedAnswers = question.content.answers;
  switch (question.type) {
    case 'basic': {
      return matchAnswerForBasic(config, question, givenAnswer);
    }
    case 'template': {
      return matchAnswerForTemplate(config, question, givenAnswer);
    }
    case 'qcm': {
      return matchAnswerForUnorderedQCM(allowedAnswers, givenAnswer);
    }
    case 'qcmDrag': {
      return matchAnswerForOrderedQCM(allowedAnswers, givenAnswer);
    }
    default:
      return [[]];
  }
}

export default function checkAnswerCorrectness(
  engine: Engine,
  question: Question,
  givenAnswer: Answer
): AnswerCorrection {
  const bestMatch = findBestMatch(matchGivenAnswerToQuestion(engine, question, givenAnswer));
  return {
    isCorrect: every('isCorrect', bestMatch),
    corrections: filter(item => item.answer !== undefined, bestMatch)
  };
}
