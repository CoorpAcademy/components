// @flow
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import concat from 'lodash/fp/concat';
import reduce from 'lodash/fp/reduce';
import update from 'lodash/fp/update';
import isEqual from 'lodash/fp/isEqual';
import type {Action, State, Content} from './types';

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

function validator(state: State, action: Action) {
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

const mapWithKey = map.convert({cap: false});

function combineReducers(
  validate: Function, // eslint-disable-line flowtype/no-weak-types
  fnMap: {[string]: Function} // eslint-disable-line flowtype/no-weak-types
): (State, Action) => State {
  // eslint-disable-next-line flowtype/require-return-type
  const fns = mapWithKey((fn, key) => {
    return (action: Action) => (state: State): State => {
      const newState = update(key, value => fn(value, action), state);
      return (newState: State);
    };
  }, fnMap);

  return (state: State, action: Action): State => {
    validate(state, action);
    return pipe(...map(fn => fn(action), fns))(state);
  };
}

const reduceAction = combineReducers(validator, {
  isCorrect,
  slides,
  lives,
  content,
  nextContent
});

const updateState: (state: State, actions: Array<Action>) => State = reduce(reduceAction);

export default updateState;
