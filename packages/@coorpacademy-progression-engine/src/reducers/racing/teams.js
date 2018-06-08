// @flow
import concat from 'lodash/fp/concat';
import findIndex from 'lodash/fp/findIndex';
import set from 'lodash/fp/set';
import findKey from 'lodash/fp/findKey';
import intersection from 'lodash/fp/intersection';
import type {Action, AnswerAction, Config, RacingTeams, State, Tower} from '../../types';

export default function _teams(config: Config): (RacingTeams, Action, State) => RacingTeams {
  return (teams: RacingTeams = {}, action: Action, state: State): RacingTeams => {
    switch (action.type) {
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
        let newTower: Tower = [...currentTower];

        if (action.payload.isCorrect) {
          newTower = concat(currentTower, ['placed']);
        } else {
          const index = findIndex('placed', currentTower);
          newTower.splice(index, 1, 'removed');
        }

        return set([teamToUpdate, 'tower'], newTower, teams);
      }
      default:
        return teams;
    }
  };
}
