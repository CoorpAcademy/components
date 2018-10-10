// @flow
import concat from 'lodash/fp/concat';
import findIndex from 'lodash/fp/findIndex';
import set from 'lodash/fp/set';
import isEqual from 'lodash/fp/isEqual';
import findKey from 'lodash/fp/findKey';
import intersection from 'lodash/fp/intersection';
import type {Action, AnswerAction, Config, RacingTeams, State, Tower} from '../../types';

export default function _teams(config: Config): (RacingTeams, Action, State) => RacingTeams {
  return (teams: RacingTeams, action: Action, state: State): RacingTeams => {
    switch (action.type) {
      case 'racing-setup': {
        return action.payload.teams;
      }
      case 'answer': {
        const _action = (action: AnswerAction);
        const teamToUpdate = findKey(
          team => intersection(_action.authors, team.players).length > 0,
          teams
        );
        if (!teamToUpdate) {
          throw new Error(`could not find team for this author: ${action.authors[0]}`);
        }

        const currentTower: Tower = teams[teamToUpdate].tower;
        const newTower: Tower = concat([], currentTower);

        if (_action.payload.isCorrect) {
          newTower.push('placed');
        } else {
          const index = findIndex(isEqual('placed'), currentTower);
          const position = index === -1 ? 0 : index;
          newTower.splice(position, 1, 'removed');
        }

        return set([teamToUpdate, 'tower'], newTower, teams);
      }
      default:
        return teams;
    }
  };
}
