import test from 'ava';
import {AnyAction} from 'redux';
import type {ReviewEngine, ReviewContent, ProgressionFromAPI} from '@coorpacademy/review-services';
import {
  getChoicesCorrection,
  SKILL_REF_FOR_DEFAULT_SLIDES
} from '@coorpacademy/review-services-mocks';
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
import {RANK_FETCH_START_REQUEST} from '../fetch-rank';
import {freeTextSlide} from '../../../views/slides/test/fixtures/free-text';
import {qcmSlide} from '../../../views/slides/test/fixtures/qcm';
import {qcmGraphicSlide} from '../../../views/slides/test/fixtures/qcm-graphic';
import {sliderSlide} from '../../../views/slides/test/fixtures/slider';
import {templateSlide} from '../../../views/slides/test/fixtures/template';
import {postAnswerResponses} from '../../../test/fixtures';

const progressionId = '62b1d1087aa12f00253f40ee';
const skillRef = SKILL_REF_FOR_DEFAULT_SLIDES;
const answer = ['Benchmark'];

const content: ReviewContent = {
  ref: SKILL_REF_FOR_DEFAULT_SLIDES,
  type: 'skill'
};

const engine: ReviewEngine = {
  ref: 'review',
  version: '1'
};

const initialState: StoreState = {
  data: {
    progression: {
      _id: progressionId,
      content: {type: 'skill', ref: skillRef},
      engine,
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
    token: '1234',
    corrections: {},
    rank: {start: 10, end: Number.NaN},
    currentSkill: {ref: skillRef, name: skillRef},
    videos: {}
  },
  ui: {
    showCongrats: false,
    currentSlideRef: freeTextSlide._id,
    navigation: ['slides'],
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
      ref: SKILL_REF_FOR_DEFAULT_SLIDES,
      type: 'skill'
    },
    engine,
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

  const {dispatch, getState} = createTestStore(t, initialState, {}, expectedActions);

  await dispatch(postAnswer);

  const state = getState();

  t.deepEqual(state.ui.slide[freeTextSlide._id], {
    validateButton: false,
    animateCorrectionPopin: true,
    showCorrectionPopin: true,
    pendingAnswerRequest: true
  });
});

test('should dispatch post-answer and fetch-correction actions when the answer is submitted and when the slide ref is "successExitNode"', async t => {
  t.plan(5);

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
      token: '1234',
      corrections: {},
      rank: {start: 10, end: Number.NaN},
      currentSkill: {ref: skillRef, name: skillRef},
      videos: {}
    },
    ui: {
      showCongrats: false,
      currentSlideRef: templateSlide._id,
      navigation: ['slides'],
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
    }
  ];

  const {dispatch, getState} = createTestStore(t, stateBeforeExitNode, {}, expectedActions);

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
      postAnswer: () => {
        t.pass();
        return Promise.reject(new Error('unexpected'));
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
    {},
    expectedActions
  );

  await t.throwsAsync(
    () => dispatch(postAnswer),
    undefined,
    'Cannot answer a question of an inexistent progression'
  );
});
