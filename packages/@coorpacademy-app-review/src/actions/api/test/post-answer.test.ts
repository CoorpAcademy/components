import test from 'ava';
import {AnyAction} from 'redux';
import {
  ReviewEngine,
  ReviewContent,
  ProgressionFromAPI
} from '@coorpacademy/review-services/es/types/services-types';
import {
  fetchSlidesToReviewBySkillRefResponse,
  getChoicesCorrection,
  postAnswerResponses,
  services
} from '@coorpacademy/review-services/es/mock/services.mock';
import {freeTextSlide} from '@coorpacademy/review-services/es/mock/fixtures/free-text';
import {qcmSlide} from '@coorpacademy/review-services/es/mock/fixtures/qcm';
import {qcmGraphicSlide} from '@coorpacademy/review-services/es/mock/fixtures/qcm-graphic';
import {templateSlide} from '@coorpacademy/review-services/es/mock/fixtures/template';
import {sliderSlide} from '@coorpacademy/review-services/es/mock/fixtures/slider';
import {createTestStore} from '../../test/create-test-store';
import {
  postAnswer,
  POST_ANSWER_FAILURE,
  POST_ANSWER_REQUEST,
  POST_ANSWER_SUCCESS
} from '../post-answer';
import type {StoreState} from '../../../reducers';
import {CORRECTION_FETCH_REQUEST, CORRECTION_FETCH_SUCCESS} from '../fetch-correction';
import {SLIDE_FETCH_REQUEST, SLIDE_FETCH_SUCCESS} from '../fetch-slide';
import {
  RANK_FETCH_START_REQUEST,
  RANK_FETCH_END_REQUEST,
  RANK_FETCH_END_SUCCESS
} from '../fetch-rank';
import {
  SLIDES_TO_REVIEW_FETCH_REQUEST,
  SLIDES_TO_REVIEW_FETCH_SUCCESS
} from '../fetch-slides-to-review-by-skill-ref';

const progressionId = '62b1d1087aa12f00253f40ee';
const skillRef = 'skill_NyxtYFYir';
const answer = ['Benchmark'];

const content: ReviewContent = {
  ref: 'skill_NyxtYFYir',
  type: 'skill'
};

const engine: ReviewEngine = {
  ref: 'review'
};

const initialState: StoreState = {
  data: {
    progression: {
      _id: progressionId,
      content: {type: 'skill', ref: skillRef},
      engine: {
        ref: 'review'
      },
      state: {
        allAnswers: [],
        isCorrect: true,
        nextContent: {
          ref: freeTextSlide._id,
          type: 'slide'
        },
        pendingSlides: [],
        slides: [],
        step: {
          current: 1
        },
        stars: 0
      }
    },
    slides: {
      [freeTextSlide._id]: freeTextSlide
    },
    skills: [{skillRef, custom: false, name: skillRef, slidesToReview: 5}],
    token: '1234',
    corrections: {},
    rank: {start: 10, end: Number.NaN},
    currentSkill: {ref: skillRef, name: skillRef}
  },
  ui: {
    showCongrats: false,
    currentSlideRef: freeTextSlide._id,
    navigation: ['skills', 'slides'],
    positions: [0, 1, 2, 3, 4],
    answers: {
      [freeTextSlide._id]: answer
    },
    slide: {
      [freeTextSlide._id]: {
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

test('should dispatch post-answer, fetch-slide and fetch-correction and fetch-start-rank actions when the answer is submitted and when the slide ref is not "successExitNode"', async t => {
  t.plan(8);

  const expectedProgressionAfter: ProgressionFromAPI = {
    _id: '62b1d1087aa12f00253f40ee',
    content: {
      ref: 'skill_NyxtYFYir',
      type: 'skill'
    },
    engine: {
      ref: 'review'
    },
    state: {
      allAnswers: [
        {
          slideRef: freeTextSlide.universalRef,
          isCorrect: true,
          answer: ['Benchmark']
        }
      ],
      content: {
        ref: freeTextSlide.universalRef,
        type: 'slide'
      },
      hasViewedAResourceAtThisStep: false,
      isCorrect: true,
      lives: 0,
      livesDisabled: true,
      nextContent: {
        ref: qcmGraphicSlide.universalRef,
        type: 'slide'
      },
      pendingSlides: [],
      remainingLifeRequests: 0,
      requestedClues: [],
      slides: [freeTextSlide.universalRef],
      stars: 8,
      step: {
        current: 2
      },
      variables: {},
      viewedResources: []
    }
  };

  const expectedActions = [
    {type: POST_ANSWER_REQUEST, meta: {slideRef: freeTextSlide._id}},
    {
      type: POST_ANSWER_SUCCESS,
      meta: {slideRef: freeTextSlide._id},
      payload: expectedProgressionAfter
    },
    {
      type: SLIDE_FETCH_REQUEST,
      meta: {
        slideRef: qcmGraphicSlide._id
      }
    },
    {
      type: SLIDE_FETCH_SUCCESS,
      meta: {
        slideRef: qcmGraphicSlide._id
      },
      payload: qcmGraphicSlide
    },
    {type: CORRECTION_FETCH_REQUEST, meta: {slideRef: freeTextSlide._id}},
    {
      type: CORRECTION_FETCH_SUCCESS,
      meta: {slideRef: freeTextSlide._id},
      payload: getChoicesCorrection(freeTextSlide._id)
    },
    {
      type: RANK_FETCH_START_REQUEST
    }
  ];

  const {dispatch, getState} = createTestStore(t, initialState, {services}, expectedActions);

  await dispatch(postAnswer);

  const state = getState();

  t.deepEqual(state.ui.slide[freeTextSlide._id], {
    validateButton: false,
    animateCorrectionPopin: true,
    showCorrectionPopin: true,
    pendingAnswerRequest: true
  });
});

// check if you should not do the last slide there
test('should dispatch post-answer, fetch-correction, fetch-end-rank and fetch-slides-to-review-by-skill-ref actions when the answer is submitted and when the slide ref is "successExitNode"', async t => {
  t.plan(9);

  const expectedProgressionAfter: ProgressionFromAPI = {
    _id: '62b1d1087aa12f00253f40ee',
    content,
    engine,
    state: {
      allAnswers: [
        {
          slideRef: freeTextSlide.universalRef,
          isCorrect: true,
          answer: ['Benchmark']
        },
        {
          slideRef: qcmGraphicSlide.universalRef,
          isCorrect: true,
          answer: ['Faux']
        },
        {
          slideRef: qcmSlide.universalRef,
          isCorrect: true,
          answer: ['Le créateur peut fixer un pourcentage pour chaque transaction future']
        },
        {
          slideRef: sliderSlide.universalRef,
          isCorrect: true,
          answer: ['7']
        },
        {
          slideRef: templateSlide.universalRef,
          isCorrect: true,
          answer: ['Leaderboard', 'utilisateurs', 'étoiles']
        }
      ],
      hasViewedAResourceAtThisStep: false,
      isCorrect: true,
      lives: 0,
      livesDisabled: true,
      nextContent: {
        ref: 'successExitNode',
        type: 'success'
      },
      content: {
        ref: templateSlide.universalRef,
        type: 'slide'
      },
      pendingSlides: [],
      remainingLifeRequests: 0,
      requestedClues: [],
      variables: {},
      viewedResources: [],
      slides: [
        freeTextSlide.universalRef,
        qcmGraphicSlide.universalRef,
        qcmSlide.universalRef,
        sliderSlide.universalRef,
        templateSlide.universalRef
      ],
      step: {
        current: 6
      },
      stars: 40
    }
  };

  const stateBeforeExitNode: StoreState = {
    data: {
      progression: postAnswerResponses[sliderSlide.universalRef],
      slides: {
        [freeTextSlide._id]: freeTextSlide,
        [qcmGraphicSlide._id]: qcmGraphicSlide,
        [qcmSlide._id]: qcmSlide,
        [sliderSlide._id]: sliderSlide,
        [templateSlide._id]: templateSlide
      },
      skills: [{skillRef, custom: false, name: skillRef, slidesToReview: 5}],
      token: '1234',
      corrections: {},
      rank: {start: 10, end: Number.NaN},
      currentSkill: {ref: skillRef, name: skillRef}
    },
    ui: {
      showCongrats: false,
      currentSlideRef: templateSlide._id,
      navigation: ['skills', 'slides'],
      positions: [-1, -1, -1, -1, 0],
      answers: {
        [freeTextSlide._id]: answer,
        [qcmGraphicSlide._id]: ['qcm-graphic answer'],
        [qcmSlide._id]: ['qcm-slide answer'],
        [sliderSlide._id]: ['slider-slide answer'],
        [templateSlide._id]: ['Leaderboard', 'utilisateurs', 'étoiles']
      },
      slide: {
        [freeTextSlide._id]: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          pendingAnswerRequest: true
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

  const expectedActions = [
    {type: POST_ANSWER_REQUEST, meta: {slideRef: templateSlide._id}},
    {
      type: POST_ANSWER_SUCCESS,
      meta: {slideRef: templateSlide._id},
      payload: expectedProgressionAfter
    },
    {type: CORRECTION_FETCH_REQUEST, meta: {slideRef: templateSlide._id}},
    {
      type: CORRECTION_FETCH_SUCCESS,
      meta: {slideRef: templateSlide._id},
      payload: getChoicesCorrection(templateSlide._id)
    },
    {
      type: RANK_FETCH_END_REQUEST
    },
    {
      type: RANK_FETCH_END_SUCCESS,
      payload: {rank: 93}
    },
    {type: SLIDES_TO_REVIEW_FETCH_REQUEST},
    {
      type: SLIDES_TO_REVIEW_FETCH_SUCCESS,
      payload: fetchSlidesToReviewBySkillRefResponse
    }
  ];

  const {dispatch, getState} = createTestStore(t, stateBeforeExitNode, {services}, expectedActions);

  await dispatch(postAnswer);

  const state = getState();

  t.deepEqual(state.ui.slide[templateSlide._id], {
    validateButton: false,
    animateCorrectionPopin: true,
    showCorrectionPopin: true,
    pendingAnswerRequest: true
  });
});

test('should dispatch POST_ANSWER_REQUEST, then POST_ANSWER_FAILURE on error', async t => {
  t.plan(3);
  const expectedActions = [
    {type: POST_ANSWER_REQUEST, meta: {slideRef: freeTextSlide._id}},
    {
      type: POST_ANSWER_FAILURE,
      meta: {slideRef: freeTextSlide._id},
      payload: new Error('unexpected'),
      error: true
    }
  ];

  const {dispatch} = createTestStore(
    t,
    initialState,
    {
      services: {
        ...services,
        postAnswer: () => {
          t.pass();
          return Promise.reject(new Error('unexpected'));
        }
      }
    },
    expectedActions
  );

  await dispatch(postAnswer);
});

test('should not dispatch any action && throw an error if progression does not exist', async t => {
  t.plan(1);
  const expectedActions: AnyAction[] = [];

  const {dispatch} = createTestStore(
    t,
    {...initialState, data: {...initialState.data, progression: null}},
    {
      services
    },
    expectedActions
  );

  await t.throwsAsync(
    () => dispatch(postAnswer),
    undefined,
    'Cannot answer a question of an inexistent progression'
  );
});
