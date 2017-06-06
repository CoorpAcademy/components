// @flow
import uniqBy from 'lodash/fp/uniqBy';
import type {MicroLearningConfig} from '../types';

const configurations: Array<MicroLearningConfig> = [
  {version: '1', lives: 1, maxTypos: 2, slidesToComplete: 4}
];

if (configurations.length !== uniqBy('version', configurations).length) {
  throw new Error('Config has conflicting version numbers');
}

export default {
  configurations,
  defaultConfiguration: configurations[0]
};
