// @flow
import type {Config, InitialStateOptions, State} from './types';

export default function createInitialState(
  config: Config,
  initialStateOptions: InitialStateOptions
): State {
  const {teams} = initialStateOptions;
  const initialState: State = {
    teams
  };

  return initialState;
}
