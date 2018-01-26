// @flow
import reduce from 'lodash/fp/reduce';
import microlearning from '../engines/microlearning/update-state';
import learner from '../engines/learner/update-state';
import racing from '../engines/racing/update-state';
import getConfig from './config';
import type {Action, Config, Engine, State} from './types';

const reducers = {
  microlearning,
  learner,
  racing
};

const update = (config: Config, reduceAction) => (state: State, actions: Array<Action>): State =>
  reduce(reduceAction(config), state, actions);

export default function updateState(engine: Engine, state: State, actions: Array<Action>): State {
  const reducer = reducers[engine.ref];
  const config = (getConfig(engine): Config);

  console.log('---------- update-state', config);
  console.dir({state}, {depth: null});
  console.dir({actions}, {depth: null});

  if (!reducer) {
    throw new Error(`Unknown engine ${engine.ref}`);
  }

  return update(config, reducer)(state, actions);
}
