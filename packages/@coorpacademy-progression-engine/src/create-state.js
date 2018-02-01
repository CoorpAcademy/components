// @flow
import type {Config, Progression, State} from './types';
import getConfig from './config';
import updateState from './update-state';

const createState = (progression: Progression): State => {
  const engineConfig: Config = getConfig(progression.engine);
  const config: Config = {...engineConfig, ...progression.engineOptions};

  // $FlowFixMe: While waiting on a good solution to have a dummy initial State
  return updateState(config, {}, progression.actions);
};

export default createState;
