// @flow
import microlearning from '../engines/microlearning/initial-state';
import learner from '../engines/learner/initial-state';
import type {Config, Engine, InitialStateOptions, State} from './types';

const engineInitialStateFactory = {
  microlearning,
  learner
};

export default function create(
  engine: Engine,
  config: Config,
  initialStateOptions: InitialStateOptions
): State {
  const createInitialState = engineInitialStateFactory[engine.ref];
  const initialState = createInitialState(config, initialStateOptions);
  return initialState;
}
