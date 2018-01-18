// @flow
// import microlearning from './microlearning';
import type {Engine, State} from '../types';
import type {Instruction} from '../compute-next-step/rule-engine/types';
import getConfig from '../config';
import learner from './learner';

type CreateProgressionOptions = {
  instructions?: Array<Instruction>,
  livesDisabled?: boolean
} | void;

const engineInitialStateFactory = {
  microlearning: learner,
  learner
};

export default function createInitialState(
  engine: Engine,
  options: CreateProgressionOptions
): State {
  const config = getConfig({ref: engine.ref, version: engine.version});
  const _createInitialState = engineInitialStateFactory[engine.ref];
  const initialState = _createInitialState(config, options);
  return initialState;
}
