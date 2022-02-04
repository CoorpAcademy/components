// @flow
import type {Config} from '../types';

const configurations: Array<Config> = [
  {
    version: '1',
    lives: 1,
    livesDisabled: false,
    maxTypos: 2,
    slidesToComplete: 4,
    shuffleChoices: true,
    answerBoundaryLimit: 5,
    starsPerAskingClue: -1,
    starsPerCorrectAnswer: 4,
    starsPerResourceViewed: 4,
    remainingLifeRequests: 1
  },
  {
    version: '2',
    lives: 1,
    livesDisabled: true,
    maxTypos: 2,
    slidesToComplete: 4,
    shuffleChoices: true,
    answerBoundaryLimit: 5,
    starsPerAskingClue: -1,
    starsPerCorrectAnswer: 4,
    starsPerResourceViewed: 4,
    remainingLifeRequests: 1
  },
  {
    version: '3',
    lives: 2,
    livesDisabled: false,
    maxTypos: 2,
    slidesToComplete: 4,
    shuffleChoices: true,
    answerBoundaryLimit: 5,
    starsPerAskingClue: -1,
    starsPerCorrectAnswer: 4,
    starsPerResourceViewed: 4,
    remainingLifeRequests: 1
  },
  {
    version: '4',
    lives: 1,
    livesDisabled: false,
    maxTypos: 2,
    slidesToComplete: 4,
    shuffleChoices: true,
    answerBoundaryLimit: 5,
    starsPerAskingClue: -1,
    starsPerCorrectAnswer: 4,
    starsPerResourceViewed: 4,
    remainingLifeRequests: 0
  }
];

export default {
  configurations,
  defaultConfiguration: configurations[1]
};
