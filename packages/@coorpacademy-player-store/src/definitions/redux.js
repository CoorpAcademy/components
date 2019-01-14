// @flow strict

import type {State} from '@coorpacademy/progression-engine';
import type {Resource} from './models';
import type {Services} from './services';

// eslint-disable-next-line flowtype/no-weak-types
type Task = Function;

type GetState = () => State;

type Action = {|
  task?: Task,
  bailout?: Function,
  type: string,
  meta?: {
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

type PromiseAction = Promise<Action>;
type ThunkAction = (Function, GetState, Options) => Action | PromiseAction;
type DispatchedAction = Action | ThunkAction | PromiseAction;
type Dispatch = (action: Action | ThunkAction | PromiseAction) => DispatchedAction;

/* eslint-disable no-use-before-define */
// type ThunkAction = (dispatch: Dispatch, getState: GetState, Options) => DispatchedAction;
/* eslint-enable no-use-before-define */

export type {
  Action,
  DispatchedAction,
  Dispatch,
  GetState,
  PromiseAction,
  Options,
  Resource,
  ThunkAction
};
