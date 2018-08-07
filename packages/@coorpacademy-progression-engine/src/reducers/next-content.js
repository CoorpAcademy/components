// @flow

import type {Action, Config, Content, State} from '../types';

export default function nextContent(config: Config): (Content, Action, State) => Content {
  return (c: Content, action: Action, state: State): Content => {
    switch (action.type) {
      case 'answer':
      case 'extraLifeRefused':
      case 'move':
        return action.payload.nextContent;
      case 'extraLifeAccepted':
        return state.remainingLifeRequests > 0 ? action.payload.nextContent : c;
      default:
        return c;
    }
  };
}
