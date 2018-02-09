// @flow

import isEqual from 'lodash/fp/isEqual';
import map from 'lodash/fp/map';
import forEach from 'lodash/fp/forEach';
import type {Action, Config, State} from '../types';

const getOwnerStates = (state, action) => {
  if (!action.authors) {
    return [state];
  }

  return map (author => state.users[author], action.authors);
};

export default function validate(config: Config): (State, Action) => void {
  return (state: State, action: Action) => {
    switch (action.type) {
      case 'answer':
      case 'extraLifeAccepted':
      case 'extraLifeRefused': {
        const states = getOwnerStates(state, action);

        forEach(_state => {
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
