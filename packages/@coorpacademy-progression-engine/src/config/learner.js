// @flow
import type {Config} from '../types';

const configurations: Array<Config> = [
  {
    version: '1',
    lives: 3,
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
    lives: 4,
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
    version: '3',
    lives: 5,
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
    lives: 5,
    livesDisabled: false,
    maxTypos: 2,
    slidesToComplete: 4,
    shuffleChoices: true,
    answerBoundaryLimit: 5,
    starsPerAskingClue: -1,
    starsPerCorrectAnswer: 8,
    starsPerResourceViewed: 4,
    remainingLifeRequests: 1
  }
];

export default {
  configurations,
  defaultConfiguration: configurations[1]
};
