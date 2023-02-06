import test from 'ava';
import {createTestStore} from '../../test/create-test-store';
import {initialState} from '../../../test/fixtures';
import {storeToken, STORE_TOKEN} from '../token';

test('should dispatch STORE_TOKEN action when storeToken is called', async t => {
  const expectedActions = [{type: STORE_TOKEN, payload: 'JWT.token'}];

  const {dispatch} = createTestStore(t, initialState, {}, expectedActions);
  await dispatch(storeToken('JWT.token'));
});
