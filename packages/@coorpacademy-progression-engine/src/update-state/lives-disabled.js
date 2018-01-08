// @flow

import type {Action, Config} from '../types';

export default function livesDisabled(config: Config): (boolean, Action) => boolean {
  return (state: boolean = false, action: Action): boolean => {
    return state;
  };
}
