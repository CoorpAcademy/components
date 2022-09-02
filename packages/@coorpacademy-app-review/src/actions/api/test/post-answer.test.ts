import test from 'ava';
import {createTestStore} from '../../test/create-test-store';
import {postAnswerResponses, services} from '../../../test/util/services.mock';
import {
  postAnswer,
  POST_ANSWER_FAILURE,
  POST_ANSWER_REQUEST,
  POST_ANSWER_SUCCESS
} from '../post-answer';
import type {StoreState} from '../../../reducers';
import {SLIDE_FETCH_REQUEST, SLIDE_FETCH_SUCCESS} from '../fetch-slide';
import {qcmGraphicSlide} from '../../../views/slides/test/fixtures/qcm-graphic';
import {freeTextSlide} from '../../../views/slides/test/fixtures/free-text';
import {SET_CURRENT_SLIDE} from '../../ui/slides';

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
    token: '1234'
  },
  ui: {
    currentSlideRef: freeTextSlide._id,
    navigation: ['skills', 'slides'],
    answers: answer,
    slide: {
      validateButton: false
    }
  }
};

test('should dispatch POST_ANSWER_REQUEST, then POST_ANSWER_SUCCESS when the updated progression is returned', async t => {
  t.plan(4);
  const expectedActions = [
    {type: POST_ANSWER_REQUEST},
    {
      type: POST_ANSWER_SUCCESS,
      payload: postAnswerResponses[freeTextSlide._id]
    },
    {type: SLIDE_FETCH_REQUEST, meta: {slideRef: qcmGraphicSlide._id}},
    {
      type: SLIDE_FETCH_SUCCESS,
      meta: {slideRef: qcmGraphicSlide._id},
      payload: qcmGraphicSlide
    },
    {type: SET_CURRENT_SLIDE, payload: qcmGraphicSlide}
  ];

  const {dispatch} = createTestStore(t, initialState, services, expectedActions);

  await dispatch(postAnswer);
});

test('should dispatch POST_ANSWER_REQUEST, then POST_ANSWER_FAILURE on error', async t => {
  t.plan(3);
  const expectedActions = [
    {type: POST_ANSWER_REQUEST},
    {
      type: POST_ANSWER_FAILURE,
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
