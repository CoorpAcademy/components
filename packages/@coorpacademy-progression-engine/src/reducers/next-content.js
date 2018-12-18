// @flow

import type {Action, Config, Content} from '../types';

export default function nextContent(config: Config): (Content, Action) => Content {
  return (c: Content, action: Action): Content => {
    switch (action.type) {
      case 'answer':
      case 'extraLifeAccepted':
      case 'extraLifeRefused':
      case 'move':
        return action.payload.nextContent;
      default:
        return c;
    }
  };
}
