// @flow

import {createStateValidationError} from '../errors';
import type {Action, Config, State} from '../types';

export default function validate(config: Config): (State, Action) => void {
  return (state: State, action: Action) => {
    switch (action.type) {
      case 'answer':
      case 'extraLifeAccepted':
      case 'extraLifeRefused': {
        if (
          state.nextContent.ref !== action.payload.content.ref &&
          state.nextContent.type !== action.payload.content.type
        ) {
          throw createStateValidationError(
            `The content of the progression state does not match the ${
              action.type
            } action: state.nextContent: ${JSON.stringify(
              state.nextContent
            )} | action.payload.content: ${JSON.stringify(action.payload.content)}`
          );
        }
        break;
      }
    }
  };
}
