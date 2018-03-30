// @flow

import isEqual from 'lodash/fp/isEqual';
import map from 'lodash/fp/map';
import forEach from 'lodash/fp/forEach';
import type {Action, Config, AnyState, RacingUser, State} from '../types';

const getOwnerStates = (state: AnyState, action: Action): Array<RacingUser | AnyState> => {
  if (state.nextContent || state.users === undefined || action.authors === undefined) {
    return [state];
  }

  // $FlowFixMe
  const authors: Array<string> = action.authors;

  return map (author => {
    if(!state.users || !state.users[author]){
      throw new Error(
        `Could not find specific state for author ${author}`
      );
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
          if (!action.payload || !action.payload.content) {
            throw new Error(
              `no payload or no payload.content in this action of type ${action.type}`
            );
          }

          if (!_state.nextContent) {
            throw new Error(
              'no nextContent found in the state to reduce'
            );
          }

          if (!isEqual(_state.nextContent, action.payload.content)) {
            throw new Error(
              'The content of the progression state does not match the content of the given answer'
            );
          }
        }, states);

        break;
      }
    }
  };
}
