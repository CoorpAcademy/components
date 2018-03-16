// @flow
import get from 'lodash/fp/get';
import set from 'lodash/fp/set';
import findKey from 'lodash/fp/findKey';
import intersection from 'lodash/fp/intersection';
import type {Action, AnswerAction, Config, RacingTeams, State} from '../../types';

export default function _teams(config: Config): (RacingTeams, Action, State) => RacingTeams {
  return (teams: RacingTeams = {}, action: Action, state: State): RacingTeams => {
    switch (action.type) {
      case 'answer':
        const _action = (action: AnswerAction);
        const teamToUpdate = findKey(team => intersection(_action.authors, team.players).length > 0, teams);
        if(!teamToUpdate) {
          throw(new Error(`could not find team for this author: ${action.authors[0]}`));
        }

        const currentStep = teams[teamToUpdate].step;
        const newStep = _action.payload.isCorrect ? currentStep + 1 : Math.max(0, currentStep - 1);
        return set([teamToUpdate, 'step'], newStep, teams);
      default:
        return teams;
    }
  };
}
