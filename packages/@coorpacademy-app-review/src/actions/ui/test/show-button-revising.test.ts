import test from 'ava';
import {services, appendVideoOptions} from '@coorpacademy/review-services-mocks';
import {createTestStore} from '../../test/create-test-store';
import {initialState} from '../../../test/fixtures';
import {showButtonRevising, SHOW_BUTTON_REVISING} from '../show-button-revising';

const thunkOptions = {services, appendVideoOptions};

test('should dispatch SHOW_BUTTON_REVISING action when showButtonRevising is called', async t => {
  const expectedActions = [{type: SHOW_BUTTON_REVISING}];

  const {dispatch} = createTestStore(t, initialState, thunkOptions, expectedActions);
  await dispatch(showButtonRevising);
});
