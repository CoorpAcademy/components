import find from 'lodash/fp/find';

import {Config, Engine, Progression} from '../types';
import microlearning from './microlearning';
import learner from './learner';

interface EngineConfigurations {
  microlearning: typeof microlearning;
  learner: typeof learner;
}

const engineConfigurations: EngineConfigurations = {
  microlearning,
  learner
};

export const getConfig = (engine: Engine): Config => {
  const engineConfiguration = engineConfigurations[engine.ref];

  if (!engineConfiguration) {
    throw new Error(`Unknown engine ${engine.ref}`);
  }

  return (
    find({version: engine.version}, engineConfiguration.configurations) ||
    engineConfiguration.defaultConfiguration
  );
};

export const getConfigForProgression = (progression: Progression): Config => ({
  ...getConfig(progression.engine),
  ...progression.engineOptions
});
