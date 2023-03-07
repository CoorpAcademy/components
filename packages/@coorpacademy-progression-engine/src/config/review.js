// @flow
import {assign} from 'lodash/fp';
import type {Config} from '../types';

const CURRENT_BASE_CONFIGURATION = {
  version: '1',
  lives: 0,
  livesDisabled: true,
  maxTypos: 2,
  slidesToComplete: 5,
  shuffleChoices: true,
  answerBoundaryLimit: 5,
  starsPerAskingClue: 0,
  starsPerCorrectAnswer: 8,
  starsPerResourceViewed: 0,
  remainingLifeRequests: 0
};

const configurations: Array<Config> = [
  CURRENT_BASE_CONFIGURATION,
  assign(CURRENT_BASE_CONFIGURATION, {
    version: '2',
    starsPerCorrectAnswer: 12
  })
];

export default {
  configurations,
  defaultConfiguration: CURRENT_BASE_CONFIGURATION
};
