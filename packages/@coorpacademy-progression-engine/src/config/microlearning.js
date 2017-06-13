// @flow
import uniqBy from 'lodash/fp/uniqBy';
import type {MicroLearningConfig} from '../types';

const realConfigurations: Array<MicroLearningConfig> = [
  {
    version: '1',
    lives: 1,
    maxTypos: 2,
    slidesToComplete: 4,
    answerBoundaryLimit: 5,
    starsPerCorrectAnswer: 4,
    starsPerResourceViewed: 4
  }
];

const testConfigurations: Array<MicroLearningConfig> = [
  {
    version: 'allow_typos_3',
    lives: 1,
    maxTypos: 3,
    slidesToComplete: 4,
    answerBoundaryLimit: 5,
    starsPerCorrectAnswer: 4,
    starsPerResourceViewed: 4
  }
];

const configurations = realConfigurations.concat(
  process.env.NODE_ENV === 'test' ? testConfigurations : []
);

if (configurations.length !== uniqBy('version', configurations).length) {
  throw new Error('Config has conflicting version numbers');
}

export default {
  configurations,
  defaultConfiguration: configurations[0]
};
