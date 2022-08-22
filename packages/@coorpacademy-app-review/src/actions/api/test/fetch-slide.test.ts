import test, {ExecutionContext} from 'ava';
import constant from 'lodash/fp/constant';
import {AnyAction, applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import data from '../../../reducers/data';
import ui from '../../../reducers/ui';
import rootReducer, {StoreState} from '../../../reducers';
import {Services} from '../../../types/common';
import {fetchSlide} from '../fetch-slide';

const assertActionsMiddleware = (t, ACTIONS) =>
  constant(next => action => {
    const expectedAction = ACTIONS.shift();
    if (!expectedAction) throw new Error(`Missing {type: "${action.type}"} action`);
    t.deepEqual(action, expectedAction);
    return next(action);
  });

const createTestStore = (t, initialState, createServices, actions) => {
  const thunkMiddleware = thunk.withExtraArgument({services: createServices(t)});
  const enhancer = compose(applyMiddleware(thunkMiddleware, assertActionsMiddleware(t, actions)));
  return createStore(rootReducer, initialState, enhancer);
};

test('should fetch slide', async t => {
  const initilaState = {data: {token: '1234'}, ui: {currentSlideRef: ''}};

  const createServices = t => {
    return {
      fetchSlide: (slideRef: string, token: string) => {
        t.is(token, '1234');
        t.is(slideRef, 'slide_ref');
        return Promise.resolve({id: 'slide_ref'});
      }
    };
  };

  const expectedActions = [
    {type: '@@slides/FETCH_REQUEST', meta: {slideRef: 'slide_ref'}},
    {type: '@@slides/FETCH_SUCCESS', meta: {slideRef: 'slide_ref'}, payload: {id: 'slide_ref'}},
    {type: '@@slide/SET_CURRENT_SLIDE', payload: {id: 'slide_ref'}}
  ];

  const {dispatch} = createTestStore(t, initilaState, createServices, expectedActions);

  await dispatch(fetchSlide('slide_ref', '1234'));
});
