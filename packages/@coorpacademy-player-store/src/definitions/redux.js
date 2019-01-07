// @flow strict

import type {State} from '@coorpacademy/progression-engine';
import type {Resource} from './models';
import type {Services} from './services';

// eslint-disable-next-line flowtype/no-weak-types
type Task = Function;

type GetState = () => State;

type Action = {|
  types: Array<string>,
  task: Task,
  // eslint-disable-next-line flowtype/no-weak-types
  bailout?: Function,
  meta: {
    id?: string,
    resource?: Resource,
    location?: string,
    progressionId?: string,
    slideId?: string,
    type?: string,
    ref?: string,
    answer?: string
  }
|};

type Options = {
  services: Services
};

/* eslint-disable no-use-before-define */
type PromiseAction = Promise<Action | ThunkAction>;
type ThunkAction = (dispatch: Dispatch, getState: GetState, Options) => DispatchedAction;
type DispatchedAction = Action | ThunkAction | PromiseAction;
type Dispatch = (action: Action | ThunkAction | PromiseAction) => DispatchedAction;

/* eslint-enable no-use-before-define */

export type {Action, DispatchedAction, Dispatch, GetState, Resource, ThunkAction};
