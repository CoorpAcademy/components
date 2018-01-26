import get from 'lodash/fp/get';
import find from 'lodash/fp/find';
import indexOf from 'lodash/fp/indexOf';
import map from 'lodash/fp/map';
import {getCurrentUserId, getCurrentProgression} from '../../utils/state-extract';


export const getTeamPlayers = map(({_id}) => ({name: _id}))


// eslint-disable-next-line import/prefer-default-export
export const createLandingStateToProps = (options, store) => state => {
  const progression = getCurrentProgression(state);
  const userId = getCurrentUserId(state);
  const teams = get('state.teams', progression);
  const currentTeam = find(players => {
    return !!find(({_id}) => userId === _id, players)
  }, teams);

  const teamSlot = indexOf(currentTeam, teams);

  return {
    team: currentTeam
      ? {name: `Les numéro ${teamSlot}`, color: 'purple'}
      : {name: 'no-team'},
    players: currentTeam
      ? getTeamPlayers(currentTeam)
      : []
  }
};
