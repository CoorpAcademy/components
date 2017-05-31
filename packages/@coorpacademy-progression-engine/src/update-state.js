// @flow
import concat from 'lodash/fp/concat';
import reduce from 'lodash/fp/reduce';
import isEqual from 'lodash/fp/isEqual';
import type {Action, State} from './types';

function reduceAction(state: State, action: Action): State {
  const {type, payload} = action;

  switch (type) {
    case 'answer': {
      const {content, nextContent, isCorrect} = payload;
      const {slides = [], lives = 0} = state;
      if (!isEqual(state.nextContent, content)) throw new Error();
      return {
        ...state,
        content,
        nextContent,
        isCorrect,
        slides: concat([state.nextContent.ref], slides),
        lives: isCorrect ? lives : lives - 1
      };
    }
    default:
      return state;
  }
}

const updateState: (state: State, actions: Array<Action>) => State = reduce(reduceAction);

export default updateState;
