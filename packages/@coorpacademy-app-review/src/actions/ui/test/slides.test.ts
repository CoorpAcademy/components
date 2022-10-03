import test from 'ava';
import {createTestStore} from '../../test/create-test-store';
import {services} from '../../../test/util/services.mock';
import {freeTextSlide} from '../../../views/slides/test/fixtures/free-text';
import {StoreState} from '../../../reducers';
import {setCurrentSlide, SET_CURRENT_SLIDE} from '../slides';

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
    currentSlideRef: '',
    navigation: [],
    positions: [0, 1, 2, 3, 4],
    answers: {},
    slide: {}
  }
};

test('should dispatch SET_CURRENT_SLIDE action when setCurrentSlide is called', async t => {
  const expectedActions = [{type: SET_CURRENT_SLIDE, payload: freeTextSlide}];

  const {dispatch} = createTestStore(t, initialState, services, expectedActions);
  await dispatch(setCurrentSlide(freeTextSlide));
});
