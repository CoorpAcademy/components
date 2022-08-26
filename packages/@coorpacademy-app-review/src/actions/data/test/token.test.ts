import test from 'ava';
import {createTestStore} from '../../test/create-test-store';
import {services} from '../../../test/util/services.mock';
import {StoreState} from '../../../reducers';
import {storeToken, STORE_TOKEN} from '../token';

const initialState: StoreState = {
  data: {
    progression: null,
    slides: {},
    skills: [],
    token: '1234'
  },
  ui: {
    currentSlideRef: '',
    navigation: [],
    answers: [],
    slide: {
      validateButton: false
    }
  }
};

test('should dispatch STORE_TOKEN action when storeToken is called', async t => {
  const expectedActions = [{type: STORE_TOKEN, payload: 'JWT.token'}];

  const {dispatch} = createTestStore(t, initialState, services, expectedActions);
  await dispatch(storeToken('JWT.token'));
});
