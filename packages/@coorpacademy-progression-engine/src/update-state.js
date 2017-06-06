// @flow
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import concat from 'lodash/fp/concat';
import reduce from 'lodash/fp/reduce';
import update from 'lodash/fp/update';
import isEqual from 'lodash/fp/isEqual';
import type {Action, State, Step, Content} from './types';

function isCorrect(state: boolean = false, action: Action): boolean {
  switch (action.type) {
    case 'answer':
      return action.payload.isCorrect;
    default:
      return state;
  }
}

function slides(array: Array<string> = [], action: Action): Array<string> {
  switch (action.type) {
    case 'answer':
      return concat(array, [action.payload.content.ref]);
    default:
      return array;
  }
}

function lives(amount: number = 1, action: Action): number {
  switch (action.type) {
    case 'answer':
      return action.payload.isCorrect ? amount : amount - 1;
    default:
      return amount;
  }
}

function content(c: Content, action: Action): Content {
  switch (action.type) {
    case 'answer':
      return action.payload.content;
    default:
      return c;
  }
}

function nextContent(c: Content, action: Action): Content {
  switch (action.type) {
    case 'answer':
      return action.payload.nextContent;
    default:
      return c;
  }
}

function step(s: Step, action: Action, state: State): Step {
  return {
    total: 4, // TODO replace with config
    current: (state.slides || []).length
  };
}

function validate(state: State, action: Action) {
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

// eslint-disable-next-line flowtype/no-weak-types
function combineReducers(fnMap: Array<{key: string, fn: Function}>): (State, Action) => State {
  // eslint-disable-next-line flowtype/require-return-type
  const fns = map(({fn, key}) => {
    return (action: Action) => (state: State): State => {
      validate(state, action);
      const newState = update(key, value => fn(value, action, state), state);
      return (newState: State);
    };
  }, fnMap);

  return (state: State, action: Action): State => pipe(...map(fn => fn(action), fns))(state);
}

const reduceAction = combineReducers([
  {key: 'isCorrect', fn: isCorrect},
  {key: 'slides', fn: slides},
  {key: 'lives', fn: lives},
  {key: 'step', fn: step},
  {key: 'content', fn: content},
  {key: 'nextContent', fn: nextContent}
]);

const updateState: (state: State, actions: Array<Action>) => State = reduce(reduceAction);

export default updateState;
