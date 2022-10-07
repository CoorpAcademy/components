import test from 'ava';
import {AnyAction} from 'redux';
import {createTestStore} from '../../test/create-test-store';
import {
  getChoicesCorrection,
  postAnswerResponses,
  services
} from '../../../test/util/services.mock';
import {
  postAnswer,
  POST_ANSWER_FAILURE,
  POST_ANSWER_REQUEST,
  POST_ANSWER_SUCCESS
} from '../post-answer';
import type {StoreState} from '../../../reducers';
import {freeTextSlide} from '../../../views/slides/test/fixtures/free-text';
import {CORRECTION_FETCH_REQUEST, CORRECTION_FETCH_SUCCESS} from '../fetch-correction';
import {SLIDE_FETCH_REQUEST, SLIDE_FETCH_SUCCESS} from '../fetch-slide';
import {qcmSlide} from '../../../views/slides/test/fixtures/qcm';
import {qcmGraphicSlide} from '../../../views/slides/test/fixtures/qcm-graphic';
import {templateSlide} from '../../../views/slides/test/fixtures/template';
import {sliderSlide} from '../../../views/slides/test/fixtures/slider';
import {
  RANK_FETCH_START_REQUEST,
  RANK_FETCH_START_SUCCESS,
  RANK_FETCH_END_REQUEST,
  RANK_FETCH_END_SUCCESS
} from '../fetch-rank';

const progressionId = '123456789123';
const skillRef = '_skill-ref';
const answer = ['Lister vos tâches pour vous libérer l’esprit', 'Vous isoler dans un lieu calme'];

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
    rank: {start: 10, end: Number.NaN}
  },
  ui: {
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
        showCorrectionPopin: false
      }
    },
    showQuitPopin: false
  }
};

test('should dispatch post-answer, fetch-slide and fetch-correction and fetch-start-rank actions when the answer is submitted and when the slide ref is not "successExitNode"', async t => {
  t.plan(9);
  const expectedActions = [
    {type: POST_ANSWER_REQUEST, meta: {slideRef: freeTextSlide._id}},
    {
      type: POST_ANSWER_SUCCESS,
      meta: {slideRef: freeTextSlide._id},
      payload: postAnswerResponses[freeTextSlide._id]
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
    },
    {
      type: RANK_FETCH_START_SUCCESS,
      payload: {rank: 93}
    }
  ];

  const {dispatch, getState} = createTestStore(t, initialState, services, expectedActions);

  await dispatch(postAnswer);

  const state = getState();

  t.deepEqual(state.ui.slide[freeTextSlide._id], {
    validateButton: false,
    animateCorrectionPopin: true,
    showCorrectionPopin: true
  });
});

test('should dispatch post-answer, fetch-correction and fetch-end-rank actions when the answer is submitted and when the slide ref is "successExitNode"', async t => {
  t.plan(7);

  const stateBeforeExitNode: StoreState = {
    data: {
      progression: postAnswerResponses[sliderSlide.universalRef],
      slides: {
        [freeTextSlide._id]: freeTextSlide,
        [qcmGraphicSlide._id]: qcmGraphicSlide,
        [qcmSlide._id]: qcmSlide,
        [sliderSlide._id]: sliderSlide
      },
      skills: [{skillRef, custom: false, name: skillRef, slidesToReview: 5}],
      token: '1234',
      corrections: {},
      rank: {start: 10, end: Number.NaN}
    },
    ui: {
      currentSlideRef: templateSlide._id,
      navigation: ['skills', 'slides'],
      positions: [-1, -1, -1, -1, 0],
      answers: {
        [freeTextSlide._id]: answer,
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

  const expectedActions = [
    {type: POST_ANSWER_REQUEST, meta: {slideRef: templateSlide._id}},
    {
      type: POST_ANSWER_SUCCESS,
      meta: {slideRef: templateSlide._id},
      payload: postAnswerResponses[templateSlide._id]
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
    }
  ];

  const {dispatch, getState} = createTestStore(t, stateBeforeExitNode, services, expectedActions);

  await dispatch(postAnswer);

  const state = getState();

  t.deepEqual(state.ui.slide[templateSlide._id], {
    validateButton: false,
    animateCorrectionPopin: true,
    showCorrectionPopin: true
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
      ...services,
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
    services,
    expectedActions
  );

  await t.throwsAsync(
    () => dispatch(postAnswer),
    undefined,
    'Cannot answer a question of an inexistent progression'
  );
});
