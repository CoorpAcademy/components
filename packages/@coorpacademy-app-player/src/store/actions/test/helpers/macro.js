import {createStore} from 'redux';
import last from 'lodash/fp/last';
import size from 'lodash/fp/size';
import isEqual from 'lodash/fp/isEqual';
import isNumber from 'lodash/fp/isNumber';
import defaultsDeep from 'lodash/fp/defaultsDeep';
import createMiddleware from '../../../middlewares/index';
import createReducer from '../../../../store/reducers';

const reducer = createReducer({});

const actionMacro = async (
  t,
  initialState,
  createServices,
  actionCreator,
  _expectedActions,
  expectedNbAssertions
) => {
  if (isNumber(expectedNbAssertions)) {
    t.plan(expectedNbAssertions + _expectedActions.length + 4);
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
  const expectedActions = [{type: '@@redux/INIT'}, ..._expectedActions];
  let actionIndex = -1;
  const {dispatch} = createStore(
    (state, action) => {
      const expectedAction = expectedActions.shift();
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
    createMiddleware(options)
  );

  const result = await dispatch(actionCreator);

  t.true(size(expectedActions) <= 0, 'Action creator generated more actions than expected');
  t.true(size(expectedActions) >= 0, 'Expected more actions to be created');
  t.deepEqual(result, last(_expectedActions));
};

export default actionMacro;
