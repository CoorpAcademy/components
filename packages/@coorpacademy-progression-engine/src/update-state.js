// @flow
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import concat from 'lodash/fp/concat';
import reduce from 'lodash/fp/reduce';
import update from 'lodash/fp/update';
import isEqual from 'lodash/fp/isEqual';
import getConfig from './config';
import type {Action, State, Content, MicroLearningConfig, Engine, Step} from './types';

function isCorrect(config: MicroLearningConfig, state: boolean = false, action: Action): boolean {
  switch (action.type) {
    case 'answer':
      return action.payload.isCorrect;
    default:
      return state;
  }
}

function slides(config: MicroLearningConfig, array: Array<string>, action: Action): Array<string> {
  switch (action.type) {
    case 'answer':
      return concat(array, [action.payload.content.ref]);
    default:
      return array;
  }
}

function lives(config: MicroLearningConfig, amount: number, action: Action): number {
  switch (action.type) {
    case 'answer':
      return action.payload.isCorrect ? amount : amount - 1;
    default:
      return amount;
  }
}

function content(config: MicroLearningConfig, c: Content, action: Action): Content {
  switch (action.type) {
    case 'answer':
      return action.payload.content;
    default:
      return c;
  }
}

function nextContent(config: MicroLearningConfig, c: Content, action: Action): Content {
  switch (action.type) {
    case 'answer':
      return action.payload.nextContent;
    default:
      return c;
  }
}

function step(config: MicroLearningConfig, s: Step, action: Action, state: State): Step {
  return {
    total: config.slidesToComplete,
    current: (state.slides || []).length
  };
}

function validate(config: MicroLearningConfig, state: State, action: Action) {
  switch (action.type) {
    case 'answer':
      if (!isEqual(state.nextContent, action.payload.content)) {
        throw new Error(
          'The content of the progression state does not match the content of the given answer'
        );
      }
      break;
  }
}

function combineReducers(
  fnMap: Array<{key: string, fn: Function}> // eslint-disable-line flowtype/no-weak-types
): MicroLearningConfig => (State, Action) => State {
  // eslint-disable-next-line flowtype/require-return-type
  const fns = map(({fn, key}) => {
    return (config: MicroLearningConfig, action: Action) => (state: State): State => {
      validate(config, state, action);
      const newState = update(key, value => fn(config, value, action, state), state);
      return (newState: State);
    };
  }, fnMap);

  return (config: MicroLearningConfig): ((State, Action) => State) => {
    return (state: State, action: Action): State =>
      pipe(...map(fn => fn(config, action), fns))(state);
  };
}

const reduceAction = combineReducers([
  {key: 'isCorrect', fn: isCorrect},
  {key: 'slides', fn: slides},
  {key: 'lives', fn: lives},
  {key: 'step', fn: step},
  {key: 'content', fn: content},
  {key: 'nextContent', fn: nextContent}
]);

export default function updateState(engine: Engine, state: State, actions: Array<Action>): State {
  const config = (getConfig(engine): MicroLearningConfig);
  return reduce(reduceAction(config), state, actions);
}
