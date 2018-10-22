// @flow

import {reduce as _reduce} from 'lodash'; // eslint-disable-line lodash-fp/use-fp
import find from 'lodash/fp/find';
import keys from 'lodash/fp/keys';
import findIndex from 'lodash/fp/findIndex';
import map from 'lodash/fp/map';
import range from 'lodash/fp/range';
import reduce from 'lodash/fp/reduce';
import type {
  AvailableContent,
  Config,
  Content,
  RacingConfig,
  RacingSetupAction,
  Teams,
  RacingTeams,
  RacingUsers,
  State
} from '../types';
import type {PartialAction, Result} from './types';
import {computeNextSlide, extendPartialAction} from './compute-next-step';

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const createTeams = (teams: Teams, starter: number): RacingTeams => {
  return _reduce(
    teams,
    (acc, team, index): RacingTeams => {
      return {
        [index]: {
          players: map(user => user.id, team),
          tower: map(() => 'placed', range(0, starter))
        },
        ...acc
      };
    },
    {}
  );
};

const getInitialNextContent = (
  config: RacingConfig,
  availableContent: AvailableContent
): Content => {
  const chapterContent = availableContent[0];
  const initialAction = {
    type: 'move',
    payload: {
      instructions: null,
      nextContent: computeNextSlide(config, chapterContent, null)
    }
  };

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
      const nextContent = getInitialNextContent(config, availableContent);
      return reduce(appendUser(nextContent, initialTeams), teams, team);
    },
    {},
    initialTeams
  );
};

export const computeRacingSetup = (
  config: RacingConfig,
  availableContent: AvailableContent,
  teamsList: Teams
): RacingSetupAction => {
  const starter = config.starter || 0;
  const users = createUsers(config, availableContent, teamsList);
  const teams = createTeams(teamsList, starter);

  return {
    type: 'racing-setup',
    authors: keys(users),
    payload: {
      teams,
      users
    }
  };
};

export const getRandomSlide = (
  config: Config,
  state: State | null,
  availableContent: AvailableContent,
  partialAction: PartialAction
): Result => {
  const action = extendPartialAction(partialAction, state);
  const isCorrect = !!action && action.type === 'answer' && !!action.payload.isCorrect;
  const chapterContent = availableContent[random(0, availableContent.length - 1)];
  // _todo: switch chapter if all slides are already gotten from this chapterContent
  const nextContent = computeNextSlide(config, chapterContent, state);

  return {
    nextContent,
    instructions: null,
    isCorrect
  };
};
