// @flow

export type User = {
  id: string,
  displayName: string
};

export type Team = Array<User>;

export type InitialStateOptions = {
  teams: Array<Team>
};

export type State = {
  teams?: Array<Team>
};

export type Config = {
  version: string,
  maxTypos: number,
  raceGoal: number
};
