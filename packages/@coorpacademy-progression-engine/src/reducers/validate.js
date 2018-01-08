// @flow

import isEqual from 'lodash/fp/isEqual';
import type {Action, AnswerAction, Config, State} from '../types';

export default function validate(config: Config): (State, Action) => void {
  return (state: State, action: Action) => {
    switch (action.type) {
      case 'answer': {
        const answerAction = (action: AnswerAction);
        if (!isEqual(state.nextContent, answerAction.payload.content)) {
          throw new Error(
            'The content of the progression state does not match the content of the given answer'
          );
        }
        break;
      }
    }
  };
}
