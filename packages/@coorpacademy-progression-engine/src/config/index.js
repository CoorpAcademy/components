// @flow
import {find} from 'lodash/fp';
import type {Config, Engine, Progression} from '../types';
import microlearning from './microlearning';
import learner from './learner';
import externalConfig from './external';
import review from './review';

const engineConfigurations = {
  microlearning,
  learner,
  review,
  external: externalConfig
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

export const getConfigForProgression = (progression: Progression): Config => {
  return {
    ...getConfig(progression.engine),
    ...progression.engineOptions
  };
};
