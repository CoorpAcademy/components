import test from 'ava';
import type {Services} from '@coorpacademy/review-services';
import {createTestStore} from '../../test/create-test-store';
import {
  fetchSlidesToReviewBySkillRef,
  SLIDES_TO_REVIEW_FETCH_REQUEST,
  SLIDES_TO_REVIEW_FETCH_SUCCESS,
  SLIDES_TO_REVIEW_FETCH_FAILURE
} from '../fetch-slides-to-review-by-skill-ref';
import {SHOW_BUTTON_REVISING} from '../../ui/show-button-revising';
import type {StoreState} from '../../../reducers';
import {freeTextSlide} from '../../../views/slides/test/fixtures/free-text';
import {qcmSlide} from '../../../views/slides/test/fixtures/qcm';
import {qcmGraphicSlide} from '../../../views/slides/test/fixtures/qcm-graphic';
import {sliderSlide} from '../../../views/slides/test/fixtures/slider';
import {templateSlide} from '../../../views/slides/test/fixtures/template';
import {
  fetchSlidesToReviewBySkillRefResponse,
  fetchNewSlidesToReviewBySkillRefResponse,
  postAnswerResponses
} from '../../../test/fixtures';

const state: StoreState = {
  data: {
    progression: postAnswerResponses[templateSlide.universalRef],
    slides: {
      [freeTextSlide._id]: freeTextSlide,
      [qcmGraphicSlide._id]: qcmGraphicSlide,
      [qcmSlide._id]: qcmSlide,
      [sliderSlide._id]: sliderSlide,
      [templateSlide._id]: templateSlide
    },
    token: '1234',
    corrections: {},
    rank: {start: 10, end: Number.NaN},
    currentSkill: {ref: 'skill_NyxtYFYir', name: 'Digital Awareness'},
    videos: {}
  },
  ui: {
    showCongrats: false,
    currentSlideRef: templateSlide._id,
    navigation: ['slides'],
    positions: [-1, -1, -1, -1, 0],
    answers: {
      [templateSlide._id]: ['Leaderboard', 'utilisateurs', 'étoiles']
    },
    slide: {
      [freeTextSlide._id]: {
        validateButton: false,
        animateCorrectionPopin: false,
        showCorrectionPopin: false,
        pendingAnswerRequest: false
      },
      [qcmGraphicSlide._id]: {
        validateButton: false,
        animateCorrectionPopin: false,
        showCorrectionPopin: false,
        pendingAnswerRequest: false
      },
      [qcmSlide._id]: {
        validateButton: false,
        animateCorrectionPopin: false,
        showCorrectionPopin: false,
        pendingAnswerRequest: false
      },
      [sliderSlide._id]: {
        validateButton: false,
        animateCorrectionPopin: false,
        showCorrectionPopin: false,
        pendingAnswerRequest: false
      },
      [templateSlide._id]: {
        validateButton: true,
        animateCorrectionPopin: false,
        showCorrectionPopin: false,
        pendingAnswerRequest: false
      }
    },
    showQuitPopin: false,
    showButtonRevising: false
  }
};

test('should dispatch only one action, SLIDES_TO_REVIEW_FETCH_SUCCESS action, when fetchSlidesToReviewBySkillRef returns an array of less 5 new slides id', async t => {
  t.plan(5);

  const services: {fetchSlidesToReviewBySkillRef: Services['fetchSlidesToReviewBySkillRef']} = {
    fetchSlidesToReviewBySkillRef: (token, skillRef, limit) => {
      t.is(token, '1234');
      t.is(skillRef, 'skill_NyxtYFYir');
      t.is(limit, 10);
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

  const {dispatch} = createTestStore(t, state, services, expectedActions);

  await dispatch(fetchSlidesToReviewBySkillRef);
});

test('should dispatch SLIDES_TO_REVIEW_FETCH_FAILURE action when fetchSlidesToReviewBySkillRef fails', async t => {
  t.plan(5);

  const services: {fetchSlidesToReviewBySkillRef: Services['fetchSlidesToReviewBySkillRef']} = {
    fetchSlidesToReviewBySkillRef: (token, skillRef, limit) => {
      t.is(token, '1234');
      t.is(skillRef, 'skill_NyxtYFYir');
      t.is(limit, 10);
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

  const {dispatch} = createTestStore(t, state, services, expectedActions);

  await dispatch(fetchSlidesToReviewBySkillRef);
});

test('should dispatch SLIDES_TO_REVIEW_FETCH_SUCCESS and SHOW_BUTTON_REVISING actions when fetchSlidesToReviewBySkillRef returns an array of at least 5 new slides id', async t => {
  t.plan(6);

  const services: {fetchSlidesToReviewBySkillRef: Services['fetchSlidesToReviewBySkillRef']} = {
    fetchSlidesToReviewBySkillRef: (token, skillRef, limit) => {
      t.is(token, '1234');
      t.is(skillRef, 'skill_NyxtYFYir');
      t.is(limit, 10);
      return Promise.resolve(fetchNewSlidesToReviewBySkillRefResponse);
    }
  };

  const expectedActions = [
    {type: SLIDES_TO_REVIEW_FETCH_REQUEST},
    {
      type: SLIDES_TO_REVIEW_FETCH_SUCCESS,
      payload: fetchNewSlidesToReviewBySkillRefResponse
    },
    {type: SHOW_BUTTON_REVISING}
  ];

  const {dispatch} = createTestStore(t, state, services, expectedActions);

  await dispatch(fetchSlidesToReviewBySkillRef);
});
