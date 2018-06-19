import mapValues from 'lodash/fp/mapValues';
import addTimeout from './add-timeout';

import * as AnswersService from './answers';
import * as ContentService from './content';
import * as ExitNodesService from './exit-nodes';
import * as LocationService from './location';
import * as ProgressionsService from './progressions';
import * as UsersService from './users';

const TIMEOUT = 0;
const addTimeoutToService = mapValues(addTimeout(TIMEOUT));

export const Answers = addTimeoutToService(AnswersService);
export const Content = addTimeoutToService(ContentService);
export const ExitNodes = addTimeoutToService(ExitNodesService);
export const Logger = console; // eslint-disable-line no-console
export const Location = addTimeoutToService(LocationService); // eslint-disable-line no-shadow
export const Progressions = addTimeoutToService(ProgressionsService);
export const Users = addTimeoutToService(UsersService);
