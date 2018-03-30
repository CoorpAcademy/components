// @flow
import find from 'lodash/fp/find';
import type {GenericConfig, Engine, Progression} from '../types';
import microlearning from './microlearning';
import learner from './learner';
import racing from './racing';

const engineConfigurations = {
  microlearning,
  learner,
  racing
};

export const getConfig = (engine: Engine): GenericConfig => {
  const engineConfiguration = engineConfigurations[engine.ref];
  if (!engineConfiguration) {
    throw new Error(`Unknown engine ${engine.ref}`);
  }
  return (
    find({version: engine.version}, engineConfiguration.configurations) ||
    engineConfiguration.defaultConfiguration
  );
};

export const getConfigForProgression = (progression: Progression): GenericConfig => {
  return {
    ...getConfig(progression.engine),
    ...progression.engineOptions
  };
};
