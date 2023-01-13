import test from 'ava';
import {services, appendVideoOptions} from '@coorpacademy/review-services-mocks';
import {createTestStore} from '../../test/create-test-store';
import type {StoreState} from '../../../reducers';
import {closeQuitPopin, CLOSE_POPIN, openQuitPopin, OPEN_POPIN} from '../quit-popin';

const thunkOptions = {services, appendVideoOptions};

const initialState: StoreState = {
  data: {
    progression: null,
    slides: {},
    token: '1234',
    corrections: {},
    rank: {start: Number.NaN, end: Number.NaN},
    currentSkill: {ref: '_skill-ref', name: '_skill-ref'}
  },
  ui: {
    showCongrats: false,
    currentSlideRef: '',
    navigation: [],
    answers: {},
    slide: {},
    positions: [],
    showQuitPopin: false,
    showButtonRevising: false
  }
};

test('should dispatch OPEN_POPIN when openQuitPopin action is called', async t => {
  const expectedAction = [{type: OPEN_POPIN}];

  const {dispatch} = createTestStore(t, initialState, thunkOptions, expectedAction);
  await dispatch(openQuitPopin);
});

test('should dispatch CLOSE_POPIN when closeQuitPopin action is called', async t => {
  const expectedAction = [{type: CLOSE_POPIN}];

  const {dispatch} = createTestStore(t, initialState, thunkOptions, expectedAction);
  await dispatch(closeQuitPopin);
});
