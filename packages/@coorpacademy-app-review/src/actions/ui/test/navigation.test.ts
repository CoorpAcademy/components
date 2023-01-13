import test from 'ava';
import {services, appendVideoOptions} from '@coorpacademy/review-services-mocks';
import {createTestStore} from '../../test/create-test-store';
import type {StoreState} from '../../../reducers';
import {navigateBack, navigateTo} from '../navigation';

const thunkOptions = {services, appendVideoOptions};

const initialState: StoreState = {
  data: {
    progression: null,
    slides: {},
    token: '1234',
    corrections: {},
    rank: {start: 10, end: Number.NaN},
    currentSkill: null
  },
  ui: {
    positions: [0, 1, 2, 3, 4],
    currentSlideRef: '',
    navigation: ['loader', 'slides'],
    answers: {},
    slide: {},
    showCongrats: false,
    showQuitPopin: false,
    showButtonRevising: false
  }
};

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
