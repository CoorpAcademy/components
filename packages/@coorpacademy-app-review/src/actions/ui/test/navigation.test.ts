import test from 'ava';
import {services, appendVideoOptions} from '@coorpacademy/review-services-mocks';
import {set} from 'lodash/fp';
import {createTestStore} from '../../test/create-test-store';
import {initialState as _initialState_} from '../../../test/fixtures';
import {navigateBack, navigateTo} from '../navigation';

const thunkOptions = {services, appendVideoOptions};
const initialState = set('ui.navigation', ['loader', 'slides'], _initialState_);

test('should dispatch NAVIGATE_TO', async t => {
  const expectedActions = [
    {
      type: '@@navigation/NAVIGATE_TO',
      payload: 'slides'
    }
  ];

  const {dispatch} = createTestStore(t, initialState, thunkOptions, expectedActions);
  await dispatch(navigateTo('slides'));
});

test('should dispatch NAVIGATE_BACK', t => {
  const expectedActions = [
    {
      type: '@@navigation/NAVIGATE_BACK'
    }
  ];

  const {dispatch} = createTestStore(t, initialState, thunkOptions, expectedActions);
  dispatch(navigateBack);
});

test('should dispatch NAVIGATE_TO with callbackOnViewChanged', async t => {
  t.plan(2);

  const callbackOnViewChanged = (viewName: string): void => {
    t.is(viewName, 'slides');
  };

  const expectedActions = [
    {
      type: '@@navigation/NAVIGATE_TO',
      payload: 'slides'
    }
  ];

  const {dispatch} = createTestStore(
    t,
    initialState,
    {callbackOnViewChanged, services, appendVideoOptions},
    expectedActions
  );

  await dispatch(navigateTo('slides'));
});

test('should dispatch NAVIGATE_BACK with callbackOnViewChanged', async t => {
  t.plan(2);

  const callbackOnViewChanged = (viewName: string): void => {
    t.is(viewName, 'loader');
  };

  const expectedActions = [
    {
      type: '@@navigation/NAVIGATE_BACK'
    }
  ];

  const {dispatch} = createTestStore(
    t,
    initialState,
    {callbackOnViewChanged, services, appendVideoOptions},
    expectedActions
  );

  await dispatch(navigateBack);
});
