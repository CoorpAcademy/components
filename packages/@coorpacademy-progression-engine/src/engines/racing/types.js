// @flow

import type {AnswerAction, User, Team} from '../../common/types';

export type JoinAction = {
  type: 'joinTeam',
  payload: {
    author: User
  }
};

export type CurrentNode = {
  type: 'waiting-for-race' | 'waiting-for-team' | 'answering' | 'done'
};

export type Action = AnswerAction | JoinAction;

export type InitialStateOptions = {
  teams: Array<Team>
};

export type State = {
  teams: Array<Team>
};

export type Config = {
  version: string,
  maxTypos: number,
  raceGoal: number
};
