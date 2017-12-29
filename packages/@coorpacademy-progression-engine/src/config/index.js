// @flow
import find from 'lodash/fp/find';
import type {Config, Engine} from '../types';
import microlearning from './microlearning';
import learner from './learner';
import racing from './racing';

const engineConfigurations = {
  microlearning,
  learner,
  racing
};

export default function getConfig(engine: Engine): Config {
  const engineConfiguration = engineConfigurations[engine.ref];
  if (!engineConfiguration) {
    throw new Error(`Unknown engine ${engine.ref}`);
  }
  return (
    find({version: engine.version || 'latest'}, engineConfiguration.configurations) ||
    engineConfiguration.defaultConfiguration
  );
}
