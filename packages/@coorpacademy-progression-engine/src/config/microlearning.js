// @flow
import type {Config} from '../types';

const configurations: Array<Config> = [
  {
    version: 'test',
    lives: 1,
    livesDisabled: false,
    maxTypos: 2,
    slidesToComplete: 4,
    shuffleChoices: false,
    answerBoundaryLimit: 5,
    starsPerAskingClue: -1,
    starsPerCorrectAnswer: 4,
    starsPerResourceViewed: 4,
    remainingLifeRequests: 1
  },
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
  }
];

export default {
  configurations,
  defaultConfiguration: configurations[2]
};
