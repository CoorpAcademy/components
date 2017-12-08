// @flow

import findIndex from 'lodash/fp/findIndex';
import combineReducers from '../../common/combine-reducers';

import type {Team} from '../../common/types';
import type {Action, Config, CurrentNode, State} from './types';

function currentNode(config: Config): (CurrentNode, Action) => CurrentNode {
  return (node: CurrentNode, action: Action): CurrentNode => {
    switch (action.type) {
      case 'joinTeam': {
        return {
          type: 'waiting-for-race'
        };
      }
      case 'answer': {
        return {
          type: 'waiting-for-team'
        };
      }
      default:
        return node;
    }
  };
}

function userId(config: Config): (string, Action) => string {
  return (_userId: string, action: Action): string => {
    switch (action.type) {
      case 'joinTeam': {
        return action.payload.author.userId;
      }
      default:
        return _userId;
    }
  };
}

const findSlot = (teams: Array<Team>, expectedUserId: string | void): [number, number] => {
  let playerIndex = -1;
  const teamIndex = findIndex((players: Team): boolean => {
    playerIndex = findIndex({userId: expectedUserId}, players);
    return playerIndex !== -1;
  }, teams);
  return [(teamIndex: number), (playerIndex: number)];
};

const getFreeTeamKey = key => (action: Action, state: State): Array<number | string> => {
  const [teamIndex, playerIndex] = findSlot(state.teams, undefined);
  return ['teams', teamIndex, playerIndex, key];
};

const getUserTeamKey = key => (action: Action, state: State): Array<number | string> => {
  const [teamIndex, playerIndex] = findSlot(state.teams, action.payload.author.userId);
  return ['teams', teamIndex, playerIndex, key];
};

const reduceAction = combineReducers([
  {key: getFreeTeamKey('userId'), fn: userId},
  {key: getUserTeamKey('currentNode'), fn: currentNode}
]);

export default reduceAction;
