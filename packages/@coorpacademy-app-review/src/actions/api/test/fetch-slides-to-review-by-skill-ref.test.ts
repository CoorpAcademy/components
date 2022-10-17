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
  postAnswerResponses,
  services as mockedServices
} from '../../../test/util/services.mock';
import {createTestStore} from '../../test/create-test-store';
import {templateSlide} from '../../../views/slides/test/fixtures/template';
import {freeTextSlide} from '../../../views/slides/test/fixtures/free-text';
import {qcmGraphicSlide} from '../../../views/slides/test/fixtures/qcm-graphic';
import {qcmSlide} from '../../../views/slides/test/fixtures/qcm';
import {sliderSlide} from '../../../views/slides/test/fixtures/slider';

const state: StoreState = {
  data: {
    progression: postAnswerResponses[sliderSlide.universalRef],
    slides: {
      [freeTextSlide._id]: freeTextSlide,
      [qcmGraphicSlide._id]: qcmGraphicSlide,
      [qcmSlide._id]: qcmSlide,
      [sliderSlide._id]: sliderSlide
    },
    skills: [{skillRef: '_skill-ref', custom: false, name: '_skill-ref', slidesToReview: 5}],
    token: '1234',
    lambdaReviewURL: 'http://localhost:7006',
    corrections: {},
    rank: {start: 10, end: Number.NaN}
  },
  ui: {
    showCongrats: false,
    currentSlideRef: templateSlide._id,
    navigation: ['skills', 'slides'],
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
        showCorrectionPopin: false
      },
      [qcmGraphicSlide._id]: {
        validateButton: false,
        animateCorrectionPopin: false,
        showCorrectionPopin: false
      },
      [qcmSlide._id]: {
        validateButton: false,
        animateCorrectionPopin: false,
        showCorrectionPopin: false
      },
      [sliderSlide._id]: {
        validateButton: true,
        animateCorrectionPopin: false,
        showCorrectionPopin: false
      }
    },
    showQuitPopin: false
  }
};
test('should dispatch SLIDES_TO_REVIEW_FETCH_SUCCESS action when fetchSlidesToReviewBySkillRef returns an array of slides id', async t => {
  t.plan(5);

  const services: Services = {
    ...mockedServices,
    fetchSlidesToReviewBySkillRef: (url, token, skillRef) => {
      t.is(url, 'http://localhost:7006');
      t.is(token, '1234');
      t.is(skillRef, '_skill-ref');
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
  t.plan(5);

  const services: Services = {
    ...mockedServices,
    fetchSlidesToReviewBySkillRef: (url, token, skillRef) => {
      t.is(url, 'http://localhost:7006');
      t.is(token, '1234');
      t.is(skillRef, '_skill-ref');
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
