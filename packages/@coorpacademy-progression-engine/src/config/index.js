// @flow
import find from 'lodash/fp/find';
import type {Config, Engine} from '../types';
import microlearning from './microlearning';

const engineConfigurations = {
  microlearning
};

export default function getEngineConfig(engine: Engine): Config {
  const engineConfiguration = engineConfigurations[engine.ref];
  if (!engineConfiguration) {
    throw new Error(`Unknown engine ${engine.ref}`);
  }
  return (
    find({version: engine.version}, engineConfiguration.configurations) ||
    engineConfiguration.defaultConfiguration
  );
}
