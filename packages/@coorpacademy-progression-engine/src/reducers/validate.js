// @flow

import map from 'lodash/fp/map';
import forEach from 'lodash/fp/forEach';
import {createStateValidationError} from '../errors';
import type {Action, Config, AnyState, RacingUser} from '../types';

const getOwnerStates = (state: AnyState, action: Action): Array<RacingUser | AnyState> => {
  if (
    state.hasOwnProperty('nextContent') ||
    state.users === undefined ||
    action.authors === undefined
  ) {
    return [state];
  }

  // $FlowFixMe
  const authors: Array<string> = action.authors;

  return map((author): RacingUser => {
    if (!state.users || !state.users[author]) {
      throw new Error(`Could not find specific state for author ${author}`);
    }

    return state.users[author];
  }, authors);
};

export default function validate(config: Config): (AnyState, Action) => void {
  return (state: AnyState, action: Action) => {
    switch (action.type) {
      case 'answer':
      case 'extraLifeAccepted':
      case 'extraLifeRefused': {
        const states = getOwnerStates(state, action);

        forEach(_state => {
          // note: if for flow....
          if (
            action.type !== 'answer' &&
            action.type !== 'extraLifeAccepted' &&
            action.type !== 'extraLifeRefused'
          ) {
            return;
          }

          if (!action.payload) {
            throw new Error(`no payload in this action of type ${action.type}`);
          }

          if (!action.payload.content) {
            throw new Error(`no payload.content in this action of type ${action.type}`);
          }

          if (
            !action.payload.content ||
            !action.payload.content.ref ||
            !action.payload.content.type
          ) {
            throw new Error(
              `payload.content ref and type are required in this action of type ${action.type}`
            );
          }

          if (!_state.nextContent) {
            // eslint-disable-next-line no-console
            throw new Error('no nextContent found in the state to reduce');
          }

          if (
            _state.nextContent.ref !== action.payload.content.ref ||
            _state.nextContent.type !== action.payload.content.type
          ) {
            throw createStateValidationError(
              `The content of the progression state does not match the ${
                action.type
              } action: state.nextContent: ${JSON.stringify(
                _state.nextContent
              )} | action.payload.content: ${JSON.stringify(action.payload.content)}`
            );
          }
        }, states);

        break;
      }
    }
  };
}
