// @flow
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import some from 'lodash/fp/some';
import sortBy from 'lodash/fp/sortBy';
import isEqual from 'lodash/fp/isEqual';
import identity from 'lodash/fp/identity';
import toLower from 'lodash/fp/toLower';
import getConfig from './config';
import type {Question, AcceptedAnswers, Answer, Engine, MicroLearningConfig} from './types';

const sort = sortBy(identity);
const normalize = (orderMatters: boolean, answer: Answer): Answer =>
  pipe(map(toLower), orderMatters ? identity : sort)(answer);

function checkAnswerForQCM(
  orderMatters: boolean,
  allowedAnswers: AcceptedAnswers,
  givenAnswer: Array<string>
): boolean {
  const sortedGivenAnswer = normalize(orderMatters, givenAnswer);
  return some(
    (allowedAnswer: Answer): boolean =>
      isEqual(normalize(orderMatters, allowedAnswer), sortedGivenAnswer),
    allowedAnswers
  );
}

export default function checkAnswer(
  engine: Engine,
  question: Question,
  givenAnswer: Array<string>
): boolean {
  // eslint-disable-next-line no-unused-vars
  const config = (getConfig(engine): MicroLearningConfig); // TODO use config
  const allowedAnswers = question.content.answers;
  switch (question.type) {
    case 'qcm':
      return checkAnswerForQCM(false, allowedAnswers, givenAnswer);
    case 'qcmDrag':
      return checkAnswerForQCM(true, allowedAnswers, givenAnswer);
    default:
      return true;
  }
}
