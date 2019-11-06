import {applyMiddleware, combineReducers, createStore} from 'redux';
import {last, size, isEqual, isNumber, defaultsDeep} from 'lodash/fp';

import ReduxThunkMemoized from '../../../middlewares/redux-thunk-memoized';
import ErrorLogger from '../../../middlewares/error-logger';

import data from '../../../reducers/data';
import ui from '../../../reducers/ui';

const createMiddlewares = options =>
  applyMiddleware(ReduxThunkMemoized(options), ErrorLogger(options));

const reducer = combineReducers({
  data,
  ui
});

const actionMacro = async (
  t,
  initialState,
  createServices,
  actionCreator,
  _expectedActions,
  expectedNbAssertions
) => {
  if (isNumber(expectedNbAssertions)) {
    t.plan(expectedNbAssertions + _expectedActions.length + 3);
  }

  const defaultServices = {
    Logger: {
      error: err => {
        t.log(`Unexpected error was logged: ${err.message}`);
        t.log(err.stack);
        t.fail();
      }
    }
  };

  const options = {
    services: defaultsDeep(defaultServices, createServices(t))
  };
  const expectedActions = [null, ..._expectedActions];
  let actionIndex = -1;
  const {dispatch} = createStore(
    (state, action) => {
      const expectedAction = expectedActions.shift();
      if (expectedAction === null) return reducer(state, action);
      if (action.error && !isEqual(action, expectedAction)) {
        t.log(`Got unexpected error in action: ${action.payload.message}`);
      }
      t.deepEqual(
        action,
        expectedAction,
        `Did not get expected action (action at position ${actionIndex++})`
      );
      return reducer(state, action);
    },
    initialState,
    createMiddlewares(options)
  );

  const result = await dispatch(actionCreator);

  t.true(size(expectedActions) <= 0, 'Action creator generated more actions than expected');
  t.true(size(expectedActions) >= 0, 'Expected more actions to be created');
  t.deepEqual(result, last(_expectedActions));
};

export default actionMacro;
