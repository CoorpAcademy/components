import test from 'ava';
import {createTestStore} from '../../test/create-test-store';
import type {StoreState} from '../../../reducers';
import {closeQuitPopin, CLOSE_POPIN, openQuitPopin, OPEN_POPIN} from '../quit-popin';
import {services} from '../../../test/util/services.mock';

const initialState: StoreState = {
  data: {
    progression: null,
    slides: {},
    skills: [],
    token: '1234',
    corrections: {},
    rank: {start: Number.NaN, end: Number.NaN}
  },
  ui: {
    currentSlideRef: '',
    navigation: [],
    answers: {},
    slide: {},
    positions: [],
    showQuitPopin: false
  }
};

test('should dispatch OPEN_POPIN when openQuitPopin action is called', async t => {
  const expectedAction = [{type: OPEN_POPIN}];

  const {dispatch} = createTestStore(t, initialState, services, expectedAction);
  await dispatch(openQuitPopin);
});

test('should dispatch CLOSE_POPIN when closeQuitPopin action is called', async t => {
  const expectedAction = [{type: CLOSE_POPIN}];

  const {dispatch} = createTestStore(t, initialState, services, expectedAction);
  await dispatch(closeQuitPopin);
});
