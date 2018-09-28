// @flow

import {reduce as _reduce} from 'lodash'; // eslint-disable-line lodash-fp/use-fp
import find from 'lodash/fp/find';
import keys from 'lodash/fp/keys';
import findIndex from 'lodash/fp/findIndex';
import map from 'lodash/fp/map';
import reduce from 'lodash/fp/reduce';

import type {
  AvailableContent,
  Content,
  RacingConfig,
  RacingSetupAction,
  Teams,
  RacingTeams,
  RacingUsers
} from '../types';
import {computeInitialStep} from '.';

const createTeams = (teams: Teams): RacingTeams => {
  return _reduce(
    teams,
    (acc, team, index): RacingTeams => {
      return {
        [index]: {players: map(user => user.id, team), tower: []},
        ...acc
      };
    },
    {}
  );
};

const getNextContent = (config: RacingConfig, availableContent: AvailableContent): Content => {
  const initialAction = computeInitialStep(config, availableContent);
  if (!initialAction) {
    throw new Error('Could not setup user first slide');
  }

  const nextContent = initialAction.payload.nextContent;
  return nextContent;
};

const appendUser = (nextContent, initialTeams) => (users, user): RacingUsers => {
  const team = findIndex(find({id: user.id}), initialTeams);
  return {
    ...users,
    [user.id]: {
      ...user,
      nextContent,
      questionNum: 1,
      isCorrect: null,
      team
    }
  };
};

const createUsers = (
  config: RacingConfig,
  availableContent: AvailableContent,
  initialTeams: Teams
): RacingUsers => {
  return reduce(
    (teams, team): RacingUsers => {
      const nextContent = getNextContent(config, availableContent);
      return reduce(appendUser(nextContent, initialTeams), teams, team);
    },
    {},
    initialTeams
  );
};

export default function computeRacingSetup(
  config: RacingConfig,
  availableContent: AvailableContent,
  teamsList: Teams
): RacingSetupAction {
  const users = createUsers(config, availableContent, teamsList);
  const teams = createTeams(teamsList);

  return {
    type: 'racing-setup',
    authors: keys(users),
    payload: {
      teams,
      users
    }
  };
}
