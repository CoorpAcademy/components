// @flow
import get from 'lodash/fp/get';
import set from 'lodash/fp/set';
import findKey from 'lodash/fp/findKey';
import intersection from 'lodash/fp/intersection';
import type {Action, Config, RacingTeams, State} from '../../types';

export default function _teams(config: Config): (RacingTeams, Action, State) => RacingTeams {
  return (teams: RacingTeams = {}, action: Action, state: State): RacingTeams => {
    switch (action.type) {
      case 'answer':
        const teamToUpdate = findKey(team => intersection(action.authors, team.players).length > 0, teams);
        const currentStep = get([teamToUpdate, 'step'], teams);
        const newStep = action.payload.isCorrect ? currentStep + 1 : Math.max(0, currentStep - 1);
        return set([teamToUpdate, 'step'], newStep, teams);
      default:
        return teams;
    }
  };
}
