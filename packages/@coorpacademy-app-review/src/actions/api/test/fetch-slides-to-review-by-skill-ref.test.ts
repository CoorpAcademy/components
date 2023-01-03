import test from 'ava';
import type {Services} from '@coorpacademy/review-services';
import {services as mockedServices} from '@coorpacademy/review-services-mocks';
import {createTestStore} from '../../test/create-test-store';
import {
  fetchSlidesToReviewBySkillRef,
  SLIDES_TO_REVIEW_FETCH_REQUEST,
  SLIDES_TO_REVIEW_FETCH_SUCCESS,
  SLIDES_TO_REVIEW_FETCH_FAILURE
} from '../fetch-slides-to-review-by-skill-ref';
import type {StoreState} from '../../../reducers';
import {freeTextSlide} from '../../../views/slides/test/fixtures/free-text';
import {qcmSlide} from '../../../views/slides/test/fixtures/qcm';
import {qcmGraphicSlide} from '../../../views/slides/test/fixtures/qcm-graphic';
import {sliderSlide} from '../../../views/slides/test/fixtures/slider';
import {templateSlide} from '../../../views/slides/test/fixtures/template';
import {fetchSlidesToReviewBySkillRefResponse, postAnswerResponses} from '../../../test/fixtures';

const state: StoreState = {
  data: {
    progression: postAnswerResponses[sliderSlide.universalRef],
    slides: {
      [freeTextSlide._id]: freeTextSlide,
      [qcmGraphicSlide._id]: qcmGraphicSlide,
      [qcmSlide._id]: qcmSlide,
      [sliderSlide._id]: sliderSlide
    },
    token: '1234',
    corrections: {},
    rank: {start: 10, end: Number.NaN},
    currentSkill: {ref: 'skill_NyxtYFYir', name: 'Digital Awareness'}
  },
  ui: {
    showCongrats: false,
    currentSlideRef: templateSlide._id,
    navigation: ['slides'],
    positions: [-1, -1, -1, -1, 0],
    answers: {
      [freeTextSlide._id]: [
        'Lister vos tâches pour vous libérer l’esprit',
        'Vous isoler dans un lieu calme'
      ],
      [qcmGraphicSlide._id]: ['qcm-graphic answer'],
      [qcmSlide._id]: ['qcm-slide answer'],
      [sliderSlide._id]: ['Leaderboard', 'utilisateurs', 'étoiles']
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

test('should dispatch SLIDES_TO_REVIEW_FETCH_SUCCESS action when fetchSlidesToReviewBySkillRef returns an array of slides id', async t => {
  t.plan(4);

  const services: Services = {
    ...mockedServices,
    fetchSlidesToReviewBySkillRef: (token, skillRef) => {
      t.is(token, '1234');
      t.is(skillRef, 'skill_NyxtYFYir');
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

  const {dispatch} = createTestStore(t, state, {services}, expectedActions);

  await dispatch(fetchSlidesToReviewBySkillRef);
});

test('should dispatch SLIDES_TO_REVIEW_FETCH_FAILURE action when fetchSlidesToReviewBySkillRef fails', async t => {
  t.plan(4);

  const services: Services = {
    ...mockedServices,
    fetchSlidesToReviewBySkillRef: (token, skillRef) => {
      t.is(token, '1234');
      t.is(skillRef, 'skill_NyxtYFYir');
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

  const {dispatch} = createTestStore(t, state, {services}, expectedActions);

  await dispatch(fetchSlidesToReviewBySkillRef);
});
