import test from 'ava';
import noop from 'lodash/fp/noop';
import {NavigateBackAction, NavigateToAction} from '../actions/ui/navigation';
import {StoreState} from '../reducers';
import {services as mockedServices} from '../test/util/services.mock';
import {createTestStore} from '../actions/test/create-test-store';
import onViewChange, {Callback} from './on-view-change';

const initialState: StoreState = {
  data: {
    progression: null,
    slides: {},
    skills: [],
    token: '1234',
    corrections: {},
    rank: {}
  },
  ui: {
    positions: [0, 1, 2, 3, 4],
    currentSlideRef: '',
    navigation: [],
    answers: {},
    slide: {},
    showQuitPopin: false
  }
};

test('should not dispatch anything if action is not handled', t => {
  const testStore = createTestStore(t, initialState, mockedServices, []);
  t.plan(1);

  const next = (): boolean => {
    return t.pass();
  };

  const callbackOnViewChanged: Callback = noop;

  const action = {
    type: 'foo'
  };

  onViewChange(callbackOnViewChanged)(testStore)(next)(action);
});

test('should trigger callback on NavigateToAction', t => {
  const testStore = createTestStore(t, initialState, mockedServices, []);
  t.plan(2);

  const next = (): boolean => {
    return t.pass();
  };

  const callbackOnViewChanged: Callback = viewName => {
    t.is(viewName, 'slides');
  };

  const action: NavigateToAction = {
    type: '@@navigation/NAVIGATE_TO',
    payload: 'slides'
  };

  onViewChange(callbackOnViewChanged)(testStore)(next)(action);
});

test('should trigger callback on NavigateBackAction', t => {
  const _initialState: StoreState = {
    ...initialState,
    ui: {
      ...initialState.ui,
      navigation: ['skills', 'slides']
    }
  };

  const testStore = createTestStore(t, _initialState, mockedServices, []);
  t.plan(2);

  const next = (): boolean => {
    return t.pass();
  };

  const callbackOnViewChanged: Callback = viewName => {
    t.is(viewName, 'skills');
  };

  const action: NavigateBackAction = {
    type: '@@navigation/NAVIGATE_BACK'
  };

  onViewChange(callbackOnViewChanged)(testStore)(next)(action);
});
