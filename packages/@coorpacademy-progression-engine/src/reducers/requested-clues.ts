import concat from 'lodash/fp/concat';
import includes from 'lodash/fp/includes';
import {Action, ActionType, AskClueAction, Config} from '../types';

export default function requestedClues(config: Config) {
  return (array: string[] = [], action: Action): string[] => {
    switch (action.type) {
      case 'clue': {
        const requestedClueAction: AskClueAction = action;
        const slideRef = requestedClueAction.payload.content.ref;
        return includes(slideRef, array) ? array : concat(array, [slideRef]);
      }
      default:
        return array;
    }
  };
}
