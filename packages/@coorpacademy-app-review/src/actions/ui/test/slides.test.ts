import test from 'ava';
import {services, appendVideoOptions} from '@coorpacademy/review-services-mocks';
import {createTestStore} from '../../test/create-test-store';
import {StoreState} from '../../../reducers';
import {setCurrentSlide, SET_CURRENT_SLIDE} from '../slides';
import {freeTextSlide} from '../../../views/slides/test/fixtures/free-text';

const thunkOptions = {services, appendVideoOptions};

const initialState: StoreState = {
  data: {
    progression: null,
    slides: {},
    token: '1234',
    corrections: {},
    rank: {start: Number.NaN, end: Number.NaN},
    currentSkill: null
  },
  ui: {
    showCongrats: false,
    currentSlideRef: '',
    navigation: [],
    positions: [0, 1, 2, 3, 4],
    answers: {},
    slide: {},
    showQuitPopin: false,
    showButtonRevising: false
  }
};

test('should dispatch SET_CURRENT_SLIDE action when setCurrentSlide is called', async t => {
  const expectedActions = [{type: SET_CURRENT_SLIDE, payload: freeTextSlide}];

  const {dispatch} = createTestStore(t, initialState, thunkOptions, expectedActions);
  await dispatch(setCurrentSlide(freeTextSlide));
});
