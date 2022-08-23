import test from 'ava';
import {Services} from '../../../types/common';
import {
  fetchSlide,
  SLIDE_FETCH_FAILURE,
  SLIDE_FETCH_REQUEST,
  SLIDE_FETCH_SUCCESS
} from '../fetch-slide';
import {freeTextSlide} from '../../../views/slides/test/fixtures/free-text';
import {services as mockedServices} from '../../../test/util/services.mock';
import {StoreState} from '../../../reducers';
import {SET_CURRENT_SLIDE} from '../../ui/slides';
import {createTestStore} from '../../test/create-test-store';

const initialState: StoreState = {
  data: {
    progression: null,
    slides: {},
    skills: [],
    token: '1234'
  },
  ui: {
    currentSlideRef: '',
    navigation: [],
    answers: []
  }
};

test('should dispatch FETCH_SUCCESS and SET_CURRENT_SLIDE actions when fetchSlide return a slide', async t => {
  const services: Services = {
    ...mockedServices,
    fetchSlide: (slideRef, token) => {
      t.is(token, '1234');
      t.is(slideRef, 'sli_VJYjJnJhg');
      return Promise.resolve(freeTextSlide);
    }
  };

  const expectedActions = [
    {type: SLIDE_FETCH_REQUEST, meta: {slideRef: 'sli_VJYjJnJhg'}},
    {
      type: SLIDE_FETCH_SUCCESS,
      meta: {slideRef: 'sli_VJYjJnJhg'},
      payload: freeTextSlide
    },
    {type: SET_CURRENT_SLIDE, payload: freeTextSlide}
  ];

  const {dispatch} = createTestStore(t, initialState, services, expectedActions);

  await dispatch(fetchSlide('sli_VJYjJnJhg', '1234'));
});

test('should dispatch SLIDE_FETCH_FAILURE action when fetchSlide fails', async t => {
  const services: Services = {
    ...mockedServices,
    fetchSlide: (slideRef, token) => {
      t.is(token, '1234');
      t.is(slideRef, 'slide_ref');
      return Promise.reject(new Error('error'));
    }
  };

  const expectedActions = [
    {type: SLIDE_FETCH_REQUEST, meta: {slideRef: 'slide_ref'}},
    {
      type: SLIDE_FETCH_FAILURE,
      meta: {slideRef: 'slide_ref'},
      payload: new Error('error'),
      error: true
    }
  ];

  const {dispatch} = createTestStore(t, initialState, services, expectedActions);

  await dispatch(fetchSlide('slide_ref', '1234'));
});
