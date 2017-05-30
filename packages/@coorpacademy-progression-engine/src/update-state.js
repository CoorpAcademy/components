// @flow
import concat from 'lodash/fp/concat';
import reduce from 'lodash/fp/reduce';
import type {Action, State} from './types';

function reduceAction(state: State, action: Action): State {
  const {type} = action;

  switch (type) {
    case 'answer':
      return {
        ...state,
        isCorrect: action.payload.isCorrect,
        slides: concat(state.slides, [state.nextContent.ref]),
        lives: action.payload.isCorrect ? state.lives : state.lives - 1
      };
    default:
      return state;
  }
}

const updateState: (state: State, actions: Array<Action>) => State = reduce(reduceAction);

export default updateState;
