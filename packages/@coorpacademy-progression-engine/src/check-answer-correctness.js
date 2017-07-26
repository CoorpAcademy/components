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

function isTextCorrect(
  config: MicroLearningConfig,
  allowedAnswers: Answer,
  answerWithCase: string,
  _maxTypos: ?number
): boolean {
  const fm = new FuzzyMatching(flatten(allowedAnswers));
  const maxTypos = _maxTypos === 0 ? _maxTypos : _maxTypos || config.maxTypos;
  const answer = toLower(answerWithCase);

  return (
    checkFuzzyAnswer(maxTypos, fm, answer) ||
    (maxTypos !== 0 &&
      some(allowedAnswer => containsAnswer(config, toLower(allowedAnswer), answer), allowedAnswers))
  );
}

function matchAnswerForBasic(
  config: MicroLearningConfig,
  question: BasicQuestion,
  givenAnswer: Answer
): Array<Array<PartialCorrection>> {
  const isCorrect = isTextCorrect(
    config,
    question.content.answers.map(answers => answers[0]),
    givenAnswer[0],
    question.content.maxTypos
  );

  return [[{answer: givenAnswer[0], isCorrect}]];
}

function matchAnswerForTemplate(
  config: MicroLearningConfig,
  question: TemplateQuestion,
  givenAnswer: Answer
): Array<Array<PartialCorrection>> {
  return [
    givenAnswer.map((answer, index) => ({
      answer,
      isCorrect: question.content.answers.some(allowedAnswer =>
        isTextCorrect(
          config,
          [allowedAnswer[index]],
          toLower(answer),
          question.content.choices[index].type === 'text' ? question.content.maxTypos : 0
        )
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
    case 'qcmGraphic': {
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
