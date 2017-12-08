// @flow
import type {Config} from '../../common/types';

const realConfigurations: Array<Config> = [
  {
    version: '1',
    raceGoal: 10
  }
];

const testConfigurations: Array<Config> = [
  {
    version: '2',
    raceGoal: 12
  }
];

const configurations = realConfigurations.concat(
  process.env.NODE_ENV === 'test' ? testConfigurations : []
);

export default {
  configurations,
  defaultConfiguration: configurations[0]
};
