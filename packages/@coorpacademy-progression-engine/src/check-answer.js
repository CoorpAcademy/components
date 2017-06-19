// @flow
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import some from 'lodash/fp/some';
import sortBy from 'lodash/fp/sortBy';
import flatten from 'lodash/fp/flatten';
import reverse from 'lodash/fp/reverse';
import toLower from 'lodash/fp/toLower';
import isEqual from 'lodash/fp/isEqual';
import identity from 'lodash/fp/identity';
import FuzzyMatching from 'fuzzy-matching';
import getConfig from './config';
import type {
  Question,
  BasicQuestion,
  AcceptedAnswers,
  Answer,
  Engine,
  MicroLearningConfig
} from './types';

const sort = sortBy(identity);
const normalizeBasic = map(toLower);
const normalizeQCM = (orderMatters: boolean, answer: Answer): Answer =>
  pipe(map(toLower), orderMatters ? identity : sort)(answer);

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
  const index = givenAnswer.indexOf(allowedAnswer);
  // Find the allowed answer in the given answer
  if (index === -1) {
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

function checkAnswerForBasic(
  config: MicroLearningConfig,
  question: BasicQuestion,
  givenAnswer: Answer
): boolean {
  const allowedAnswers = question.content.answers;
  const comparableGivenAnswer = normalizeBasic(givenAnswer);
  const fm = new FuzzyMatching(flatten(allowedAnswers));
  const maxTypos = question.content.maxTypos === 0
    ? question.content.maxTypos
    : question.content.maxTypos || config.maxTypos;
  return (
    checkFuzzyAnswer(maxTypos, fm, comparableGivenAnswer[0]) ||
    some(
      allowedAnswer =>
        containsAnswer(config, normalizeBasic(allowedAnswer)[0], comparableGivenAnswer[0]),
      allowedAnswers
    )
  );
}

function checkAnswerForQCM(
  orderMatters: boolean,
  allowedAnswers: AcceptedAnswers,
  givenAnswer: Answer
): boolean {
  const comparableGivenAnswer = normalizeQCM(orderMatters, givenAnswer);
  return some(
    (allowedAnswer: Answer): boolean =>
      isEqual(normalizeQCM(orderMatters, allowedAnswer), comparableGivenAnswer),
    allowedAnswers
  );
}

export default function checkAnswer(
  engine: Engine,
  question: Question,
  givenAnswer: Answer
): boolean {
  const config = (getConfig(engine): MicroLearningConfig);
  const allowedAnswers = question.content.answers;
  switch (question.type) {
    case 'basic': {
      return checkAnswerForBasic(config, question, givenAnswer);
    }
    case 'qcm': {
      return checkAnswerForQCM(false, allowedAnswers, givenAnswer);
    }
    case 'qcmDrag': {
      return checkAnswerForQCM(true, allowedAnswers, givenAnswer);
    }
    default:
      return true;
  }
}
