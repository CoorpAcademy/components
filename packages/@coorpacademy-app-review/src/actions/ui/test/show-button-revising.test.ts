import test from 'ava';
import {services, appendVideoOptions} from '@coorpacademy/review-services-mocks';
import {createTestStore} from '../../test/create-test-store';
import {initialState} from '../../../test/fixtures';
import {showRevisingButton, SHOW_REVISING_BUTTON} from '../show-button-revising';

const thunkOptions = {services, appendVideoOptions};

test('should dispatch SHOW_REVISING_BUTTON action when showRevisingButton is called', async t => {
  const expectedActions = [{type: SHOW_REVISING_BUTTON}];

  const {dispatch} = createTestStore(t, initialState, thunkOptions, expectedActions);
  await dispatch(showRevisingButton);
});
