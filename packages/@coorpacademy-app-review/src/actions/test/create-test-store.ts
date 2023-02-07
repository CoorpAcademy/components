import type {ExecutionContext} from 'ava';
import constant from 'lodash/fp/constant';
import isEqual from 'lodash/fp/isEqual';
import {AnyAction, applyMiddleware, compose, createStore, Dispatch, Middleware, Store} from 'redux';
import thunk from 'redux-thunk';
import type {Services} from '@coorpacademy/review-services';
import {services as mockedServices} from '@coorpacademy/review-services-mocks';
import type {ThunkOptions} from '../../types/common';
import rootReducer, {StoreState} from '../../reducers';
import {appendVideoOptions} from '../../../sandbox/options';

const assertActionsMiddleware = (t: ExecutionContext, ACTIONS: AnyAction[]): Middleware =>
  constant((next: Dispatch) => (action: AnyAction): unknown => {
    const expectedAction = ACTIONS.shift();
    if (!expectedAction) throw new Error(`Missing {type: "${action.type}"} action`);
    t.deepEqual(expectedAction, action);
    if (!isEqual(expectedAction, action)) {
      throw new Error(
        `Difference between received action {type: "${action.type}"}, an expected action ${expectedAction.type}. Check payloads.`
      );
    }
    return next(action);
  });

type AnyPickOf<T> = {
  [p in keyof T]?: T[p];
};

export const createTestStoreWithThunkOptions = (
  t: ExecutionContext,
  initialState: StoreState,
  thunkOptions: AnyPickOf<ThunkOptions>,
  actions: AnyAction[]
): Store<StoreState, AnyAction> => {
  const thunkMiddleware = thunk.withExtraArgument(thunkOptions);
  const enhancer = compose(applyMiddleware(thunkMiddleware, assertActionsMiddleware(t, actions)));
  return createStore(rootReducer, initialState, enhancer);
};

export const createTestStore = (
  t: ExecutionContext,
  initialState: StoreState,
  servicesOverrides: AnyPickOf<Services>,
  actions: AnyAction[]
): Store<StoreState, AnyAction> => {
  const services = {
    ...mockedServices,
    ...servicesOverrides
  };

  const thunkOptions = {services, appendVideoOptions};
  return createTestStoreWithThunkOptions(t, initialState, thunkOptions, actions);
};
