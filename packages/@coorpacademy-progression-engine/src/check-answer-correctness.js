// @flow
import every from 'lodash/fp/every';
import filter from 'lodash/fp/filter';
import get from 'lodash/fp/get';
import includes from 'lodash/fp/includes';
import join from 'lodash/fp/join';
import map from 'lodash/fp/map';
import maxBy from 'lodash/fp/maxBy';
import pipe from 'lodash/fp/pipe';
import reverse from 'lodash/fp/reverse';
import some from 'lodash/fp/some';
import split from 'lodash/fp/split';
import toLower from 'lodash/fp/toLower';
import zip from 'lodash/fp/zip';
import FuzzyMatching from 'fuzzy-matching';
import type {
  Question,
  BasicQuestion,
  TemplateQuestion,
  PartialCorrection,
  AnswerCorrection,
  AcceptedAnswers,
  Answer,
  Config
} from './types';

const reverseString = pipe(split(''), reverse, join(''));

function checkFuzzyAnswer(maxTypos: number, fm: FuzzyMatching, userAnswer: string): boolean {
  if (!userAnswer || userAnswer.length === 0) {
    return false;
  }
  // Find a valid answer resembling userAnswer
  return !!fm.get(userAnswer, {maxChanges: maxTypos}).value;
}

function containsAnswer(config: Config, allowedAnswer: string, givenAnswer: string): boolean {
  // Find the allowed answer in the given answer
  if (!includes(allowedAnswer, givenAnswer)) {
    // If not present
    return false;
  }

  // Get the non-space characters surrounding the answer and make sure that there are not too many.
  const limit = config.answerBoundaryLimit;
  const [first = '', second = ''] = givenAnswer.split(allowedAnswer);
  const indexOfSpaceInFirst = reverseString(first).indexOf(' ');
  const indexOfSpaceInSecond = second.indexOf(' ');

  return (
    (first.length <= limit || (indexOfSpaceInFirst !== -1 && indexOfSpaceInFirst <= limit)) &&
    (second.length <= limit || (indexOfSpaceInSecond !== -1 && indexOfSpaceInSecond <= limit))
  );
}

function isTextCorrect(
  config: Config,
  allowedAnswers: Answer,
  answerWithCase: string,
  _maxTypos: ?number
): boolean {
  const fm = new FuzzyMatching(allowedAnswers);
  const maxTypos = _maxTypos === 0 ? _maxTypos : _maxTypos || config.maxTypos;
  const answer = toLower(answerWithCase);

  return (
    checkFuzzyAnswer(maxTypos, fm, answer) ||
    (maxTypos !== 0 &&
      some(allowedAnswer => containsAnswer(config, toLower(allowedAnswer), answer), allowedAnswers))
  );
}

function matchAnswerForBasic(
  config: Config,
  question: BasicQuestion,
  givenAnswer: Answer
): Array<Array<PartialCorrection>> {
  if (question.content.answers.length === 0) {
    return [];
  }

  const isCorrect = isTextCorrect(
    config,
    question.content.answers.map(answers => answers[0]),
    givenAnswer[0],
    question.content.maxTypos
  );

  return [[{answer: givenAnswer[0], isCorrect}]];
}

function matchAnswerForTemplate(
  config: Config,
  question: TemplateQuestion,
  givenAnswer: Answer
): Array<Array<PartialCorrection>> {
  if (question.content.answers.length === 0) {
    return [];
  }

  const result = givenAnswer.map((answer, index) => ({
    answer,
    isCorrect: question.content.answers.some(allowedAnswer =>
      isTextCorrect(
        config,
        [allowedAnswer[index]],
        toLower(answer),
        get(['content', 'choices', `${index}`, 'type'], question) === 'text'
          ? question.content.maxTypos
          : 0
      )
    )
  }));
  const missingAnswers = question.content.answers[0]
    .slice(result.length)
    .map(() => ({answer: undefined, isCorrect: false}));
  return [result.concat(missingAnswers)];
}

function matchAnswerForUnorderedItems(
  allowedAnswers: AcceptedAnswers,
  givenAnswer: Answer
): Array<Array<PartialCorrection>> {
  const lowerGivenAnswer = map(toLower, givenAnswer);

  return allowedAnswers.map((allowedAnswer): Array<PartialCorrection> => {
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

function matchAnswerForOrderedItems(
  allowedAnswers: AcceptedAnswers,
  givenAnswer: Answer
): Array<Array<PartialCorrection>> {
  return map((allowedAnswer): Array<PartialCorrection> => {
    return map(([givenAnswerPart, allowedAnswerPart]): PartialCorrection => {
      return {
        answer: givenAnswerPart,
        isCorrect: toLower(givenAnswerPart) === toLower(allowedAnswerPart)
      };
    }, zip(givenAnswer, allowedAnswer));
  }, allowedAnswers);
}

const findBestMatch = maxBy(correction => filter('isCorrect', correction).length);

function matchGivenAnswerToQuestion(
  config: Config,
  question: Question,
  givenAnswer: Answer
): Array<Array<PartialCorrection>> {
  const allowedAnswers = question.content.answers;
  switch (question.type) {
    case 'basic': {
      return matchAnswerForBasic(config, question, givenAnswer);
    }
    case 'template': {
      return matchAnswerForTemplate(config, question, givenAnswer);
    }
    case 'qcm': {
      return matchAnswerForUnorderedItems(allowedAnswers, givenAnswer);
    }
    case 'qcmGraphic': {
      return matchAnswerForUnorderedItems(allowedAnswers, givenAnswer);
    }
    case 'qcmDrag': {
      return question.content.matchOrder
        ? matchAnswerForOrderedItems(allowedAnswers, givenAnswer)
        : matchAnswerForUnorderedItems(allowedAnswers, givenAnswer);
    }
    case 'slider': {
      return matchAnswerForOrderedItems(allowedAnswers, givenAnswer);
    }
    default:
      return [[]];
  }
}

export default function checkAnswerCorrectness(
  config: Config,
  question: Question,
  givenAnswer: Answer
): AnswerCorrection {
  const matches = matchGivenAnswerToQuestion(config, question, givenAnswer);
  if (matches.length === 0) {
    return {
      isCorrect: false,
      corrections: []
    };
  }

  const bestMatch: Array<PartialCorrection> = findBestMatch(matches);
  return {
    isCorrect: every('isCorrect', bestMatch),
    corrections: filter(item => item.answer !== undefined, bestMatch)
  };
}
