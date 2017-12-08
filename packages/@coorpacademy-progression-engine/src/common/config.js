// @flow
import find from 'lodash/fp/find';
import microlearning from '../engines/microlearning/config';
import learner from '../engines/learner/config';
import racing from '../engines/racing/config';

import type {Config, Engine} from './types';

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
