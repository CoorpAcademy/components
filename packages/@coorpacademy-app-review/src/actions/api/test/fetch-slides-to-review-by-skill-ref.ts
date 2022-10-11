import test from 'ava';
import type {StoreState} from '../../../reducers';
import type {Services} from '../../../types/common';
import {
  fetchSlidesToReviewBySkillRef,
  SLIDES_TO_REVIEW_FETCH_REQUEST,
  SLIDES_TO_REVIEW_FETCH_SUCCESS,
  SLIDES_TO_REVIEW_FETCH_FAILURE
} from '../fetch-slides-to-review-by-skill-ref';
import {
  fetchSlidesToReviewBySkillRefResponse,
  services as mockedServices
} from '../../../test/util/services.mock';
import {createTestStore} from '../../test/create-test-store';

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
    showCongrats: false,
    positions: [0, 1, 2, 3, 4],
    currentSlideRef: '',
    navigation: [],
    answers: {},
    slide: {},
    showQuitPopin: false
  }
};
const _url = 'http://localhost:7006';
const _skillRef = '_skill-ref';

test('should dispatch SLIDES_TO_REVIEW_FETCH_SUCCESS action when fetchSlidesToReviewBySkillRef returns an array of slides id', async t => {
  t.plan(5);

  const services: Services = {
    ...mockedServices,
    fetchSlidesToReviewBySkillRef: (url, token, skillRef) => {
      t.is(url, _url);
      t.is(token, '1234');
      t.is(skillRef, _skillRef);
      return Promise.resolve(fetchSlidesToReviewBySkillRefResponse);
    }
  };

  const expectedActions = [
    {type: SLIDES_TO_REVIEW_FETCH_REQUEST},
    {
      type: SLIDES_TO_REVIEW_FETCH_SUCCESS,
      payload: fetchSlidesToReviewBySkillRefResponse
    }
  ];

  const {dispatch} = createTestStore(t, initialState, services, expectedActions);

  await dispatch(fetchSlidesToReviewBySkillRef(_url, _skillRef));
});

test('should dispatch SLIDES_TO_REVIEW_FETCH_FAILURE action when fetchSlidesToReviewBySkillRef fails', async t => {
  t.plan(5);

  const services: Services = {
    ...mockedServices,
    fetchSlidesToReviewBySkillRef: (url, token, skillRef) => {
      t.is(url, _url);
      t.is(token, '1234');
      t.is(skillRef, _skillRef);
      return Promise.reject(new Error('unexpected'));
    }
  };

  const expectedActions = [
    {type: SLIDES_TO_REVIEW_FETCH_REQUEST},
    {
      type: SLIDES_TO_REVIEW_FETCH_FAILURE,
      payload: new Error('unexpected'),
      error: true
    }
  ];

  const {dispatch} = createTestStore(t, initialState, services, expectedActions);

  await dispatch(fetchSlidesToReviewBySkillRef(_url, _skillRef));
});
