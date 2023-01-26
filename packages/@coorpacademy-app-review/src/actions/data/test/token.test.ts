import test from 'ava';
import {services, appendVideoOptions} from '@coorpacademy/review-services-mocks';
import {createTestStore} from '../../test/create-test-store';
import {initialState} from '../../../test/fixtures';
import {storeToken, STORE_TOKEN} from '../token';

test('should dispatch STORE_TOKEN action when storeToken is called', async t => {
  const expectedActions = [{type: STORE_TOKEN, payload: 'JWT.token'}];

  const thunkOptions = {services, appendVideoOptions};
  const {dispatch} = createTestStore(t, initialState, thunkOptions, expectedActions);
  await dispatch(storeToken('JWT.token'));
});
