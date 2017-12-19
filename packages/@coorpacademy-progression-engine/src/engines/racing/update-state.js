// @flow

import findIndex from 'lodash/fp/findIndex';
import has from 'lodash/fp/has';
import negate from 'lodash/fp/negate';
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
        return action.payload.author;
      }
      default:
        return _userId;
    }
  };
}

const updateEveryone

const getFreeTeamKey = key => (action: Action, state: State): Array<number | string> => {
  let playerIndex = -1;
  const teamIndex = findIndex((players: Team): boolean => {
    playerIndex = findIndex(negate(has('userId')), players);
    return playerIndex !== -1;
  }, state.teams);

  return ['teams', teamIndex, playerIndex, key];
};

const getUserTeamKey = key => (action: Action, state: State): Array<number | string> => {
  let playerIndex = -1;
  const teamIndex = findIndex((players: Team): boolean => {
    playerIndex = findIndex({userId: action.payload.author}, players);
    return playerIndex !== -1;
  }, state.teams);

  return ['teams', teamIndex, playerIndex, key];
};

const updateEveryone = (config: Config): (State, Action) => State {
  console.log('--------------- updateEveryone');
  return (state: State, action: Action) => {
    console.log('--------------- return state');
    console.log(action);
    console.log('-----');
    console.log(state);
    console.log('---------------');
    return state;
  };
};

const reduceAction = pipe(
  combineReducers([
    {key: getFreeTeamKey('userId'), fn: userId},
    {key: getUserTeamKey('currentNode'), fn: currentNode}
  ],
  updateEveryone
);

export default reduceAction;
