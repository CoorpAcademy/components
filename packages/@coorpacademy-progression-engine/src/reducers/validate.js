// @flow

import isEqual from 'lodash/fp/isEqual';
import type {Action, Config, State} from '../types';

export default function validate(config: Config): (State, Action) => void {
  return (state: State, action: Action) => {
    switch (action.type) {
      case 'answer':
      case 'extraLifeAccepted':
      case 'extraLifeRefused': {
        if (!isEqual(state.nextContent, action.payload.content)) {
          throw new Error(
            'The content of the progression state does not match the content of the given answer'
          );
        }
        break;
      }
    }
  };
}
