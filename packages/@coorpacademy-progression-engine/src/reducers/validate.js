// @flow

import isEqual from 'lodash/fp/isEqual';
import getOr from 'lodash/fp/getOr';
import type {Action, Config, State} from '../types';

export default function validate(config: Config): (State, Action) => void {
  return (state: State, action: Action) => {
    switch (action.type) {
      case 'answer':
      case 'extraLifeAccepted':
      case 'extraLifeRefused': {
        if (!isEqual(state.nextContent, action.payload.content)) {
          throw new Error(
            `The content of the progression state (${getOr('', 'nextContent.ref', state)} - ${getOr(
              '',
              'nextContent.type',
              state
            )}) does not match the content (${getOr('', 'payload.content.ref', action)} - ${getOr(
              '',
              'payload.content.type',
              action
            )}) of the given action (${action.type})`
          );
        }
        break;
      }
    }
  };
}
