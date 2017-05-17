// @flow
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import some from 'lodash/fp/some';
import sortBy from 'lodash/fp/sortBy';
import isEqual from 'lodash/fp/isEqual';
import identity from 'lodash/fp/identity';
import toLower from 'lodash/fp/toLower';
import {type Question, type QCMQuestion} from './types';

type CheckAnswerOptions = {
  maxTypos?: number
};

const sort = sortBy(identity);
const normalize = pipe(map(toLower), sort);

function checkAnswerForQCM(question: QCMQuestion, givenAnswer: Array<string>): boolean {
  const sortedGivenAnswer = normalize(givenAnswer);
  return some((allowedAnswer: Array<string>): boolean => {
    return isEqual(normalize(allowedAnswer), sortedGivenAnswer);
  }, question.content.answers);
}

export default function checkAnswer(
  options: CheckAnswerOptions,
  question: Question,
  givenAnswer: Array<string>
): boolean {
  switch (question.type) {
    case 'qcm':
      return checkAnswerForQCM(question, givenAnswer);
    default:
      return true;
  }
}
