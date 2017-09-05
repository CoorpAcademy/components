import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import last from 'lodash/fp/last';
import head from 'lodash/fp/head';
import size from 'lodash/fp/size';
import isArray from 'lodash/fp/isArray';
import map from 'lodash/fp/map';
import defaultsDeep from 'lodash/fp/defaultsDeep';

const mapExpected = map(expected => (isArray(expected) ? expected : [expected]));

const actionMacro = async (t, state, createServices, action, expected, plan) => {
  if (plan) {
    t.plan(plan);
  }
  const options = {
    services: createServices(t)
  };
  const expectedActions = mapExpected([{type: '@@redux/INIT'}, ...expected]);
  const {dispatch} = createStore(
    (_state, _action) => {
      const [expectedAction, newState = _state] = expectedActions.shift() || [];
      t.deepEqual(_action, expectedAction);
      return defaultsDeep(_state, newState);
    },
    state,
    applyMiddleware(ReduxThunk.withExtraArgument(options))
  );

  const result = await dispatch(action);

  t.is(size(expectedActions), 0);
  t.deepEqual(result, head(last(mapExpected(expected))));
};

export default actionMacro;
