import test from 'ava';
import {set} from 'lodash/fp';
import {createTestStore, createTestStoreWithThunkOptions} from '../../test/create-test-store';
import {initialState as _initialState_} from '../../../test/fixtures';
import {navigateBack, navigateTo} from '../navigation';

const initialState = set('ui.navigation', ['loader', 'slides'], _initialState_);

test('should dispatch NAVIGATE_TO', async t => {
  const expectedActions = [
    {
      type: '@@navigation/NAVIGATE_TO',
      payload: 'slides'
    }
  ];

  const {dispatch} = createTestStore(t, initialState, {}, expectedActions);
  await dispatch(navigateTo('slides'));
});

test('should dispatch NAVIGATE_BACK', t => {
  const expectedActions = [
    {
      type: '@@navigation/NAVIGATE_BACK'
    }
  ];

  const {dispatch} = createTestStore(t, initialState, {}, expectedActions);
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

  const {dispatch} = createTestStoreWithThunkOptions(
    t,
    initialState,
    {callbackOnViewChanged},
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

  const {dispatch} = createTestStoreWithThunkOptions(
    t,
    initialState,
    {callbackOnViewChanged},
    expectedActions
  );

  await dispatch(navigateBack);
});
