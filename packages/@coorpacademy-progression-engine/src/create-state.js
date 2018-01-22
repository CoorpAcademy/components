// @flow
import type {Config, NewProgression, State} from './types';
import getConfig from './config';
import updateState from './update-state';

const createState = (progression: NewProgression): State => {
  const engineConfig: Config = getConfig(progression.engine);
  const config: Config = {...engineConfig, ...progression.engineOptions};

  // const initialState: State = {
  //   nextContent: {
  //     type: 'node',
  //     ref: 'empty'
  //   },
  //   lives: config.lives,
  //   livesDisabled: config.livesDisabled,
  //   isCorrect: true,
  //   slides: [],
  //   stars: 0,
  //   requestedClues: [],
  //   viewedResources: [],
  //   step: {
  //     current: 1
  //   },
  //   remainingLifeRequests: config.remainingLifeRequests,
  //   hasViewedAResourceAtThisStep: false,
  //   allAnswers: [],
  //   variables: {}
  // };

  // $FlowFixMe: While waiting on a good solution to have a dummy initial State
  return updateState(config, {}, progression.actions);
};

export default createState;
