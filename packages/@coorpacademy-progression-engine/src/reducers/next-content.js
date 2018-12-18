// @flow

import type {Action, Config, Content} from '../types';

export default function nextContent(config: Config): (Content, Action) => Content {
  return (c: Content, action: Action): Content => {
    console.log('action.type: ' , action.type);
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
