// @flow
import type {Action, AnyState, Config, Progression, RacingState, State} from './types';
import {getConfigForProgression} from './config';
import updateStateLearner from './update-state-learner';
import updateStateRacing from './update-state-racing';

type LearnerUpdater = (Config, State, Array<Action>) => State;
type RacingUpdater = (Config, RacingState, Array<Action>) => RacingState;

type Updater = {
  updateState: LearnerUpdater | RacingUpdater,
  initialState: {} | RacingState
};

const getUpdater = (progression: Progression): Updater => {
  switch (progression.engine.ref) {
    case 'racing': {
      if (!progression.actions) {
        throw new Error(`racing progression should have actions`);
      }

      const action = progression.actions[0];
      if (action.type !== 'racing-setup') throw new Error('not a racing-setup');

      return {
        updateState: updateStateRacing,
        initialState: {}
      };
    }
    case 'microlearning':
    case 'learner':
      return {
        updateState: updateStateLearner,
        initialState: {}
      };
    default:
      throw new Error(`engine ${progression.engine.ref} not supported`);
  }
};

const createState = (progression: Progression): AnyState => {
  const config: Config = getConfigForProgression(progression);
  const {updateState, initialState} = getUpdater(progression);

  // $FlowFixMe: While waiting on a good solution to have a dummy initial State
  return updateState(config, initialState, progression.actions);
};

export default createState;
