// @flow

import isEqual from 'lodash/fp/isEqual';
import getOr from 'lodash/fp/getOr';
import {createStateValidationError} from '../errors';
import type {Action, Config, State} from '../types';

export default function validate(config: Config): (State, Action) => void {
  return (state: State, action: Action) => {
    switch (action.type) {
      case 'answer':
      case 'extraLifeAccepted':
      case 'extraLifeRefused': {
        if (!isEqual(state.nextContent, action.payload.content)) {
          throw createStateValidationError(
            `The content of the progression state does not match the given ${
              action.type
            } action. State content: (${getOr(
              '',
              'nextContent.ref',
              state
            )}) vs action (content - ${getOr(
              '',
              'payload.content.ref',
              action
            )} / nextContent - ${getOr('', 'payload.nextContent.ref', action)})`
          );
        }
        break;
      }
    }
  };
}
