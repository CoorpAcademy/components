// @flow
import type {Action, Config, State} from '../../types';

export default function questionNum(config: Config): (number, Action, State) => number {
  return (num: number = 1, action: Action, state: State): number => {
    switch (action.type) {
      case 'answer':
        return num + 1;
      default:
        return num;
    }
  };
}
