// @flow
import microlearning from '../engines/microlearning/initial-state';
import learner from '../engines/learner/initial-state';
import racing from '../engines/racing/initial-state';
import getConfig from './config';
import type {Engine, InitialStateOptions, State} from './types';

const engineInitialStateFactory = {
  microlearning,
  learner,
  racing
};

export default function createInitialState(
  engine: Engine,
  initialStateOptions: InitialStateOptions
): State {
  const config = getConfig({ref: engine.ref, version: engine.version});
  const _createInitialState = engineInitialStateFactory[engine.ref];
  const initialState = _createInitialState(config, initialStateOptions);
  return initialState;
}
