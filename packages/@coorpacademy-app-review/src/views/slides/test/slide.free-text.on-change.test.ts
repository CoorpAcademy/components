import test from 'ava';
import omit from 'lodash/fp/omit';
import identity from 'lodash/fp/identity';
import type {ProgressionFromAPI} from '@coorpacademy/review-services';
import {
  getChoicesCorrection,
  services,
  appendVideoOptions
} from '@coorpacademy/review-services-mocks';
import {POST_ANSWER_REQUEST, POST_ANSWER_SUCCESS} from '../../../actions/api/post-answer';
import {SLIDE_FETCH_REQUEST, SLIDE_FETCH_SUCCESS} from '../../../actions/api/fetch-slide';
import {
  CORRECTION_FETCH_REQUEST,
  CORRECTION_FETCH_SUCCESS
} from '../../../actions/api/fetch-correction';
import {RANK_FETCH_START_REQUEST, RANK_FETCH_START_SUCCESS} from '../../../actions/api/fetch-rank';
import {mapStateToSlidesProps} from '..';
import {createTestStore} from '../../../actions/test/create-test-store';
import {StoreState} from '../../../reducers';
import {EDIT_BASIC} from '../../../actions/ui/answers';
import {translate} from '../../../test/utils/translation.mock';
import {sleep} from '../../../test/utils/sleep';
import {skin} from './fixtures/skin';
import {freeTextSlide} from './fixtures/free-text';
import {qcmGraphicSlide} from './fixtures/qcm-graphic';

const connectedOptions = {translate, onQuitClick: identity, skin};
const progression: ProgressionFromAPI = {
  _id: '123456789123',
  content: {type: 'skill', ref: 'skill_NyxtYFYir'},
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
};

const progressionAfterAnswer = {
  _id: '123456789123',
  content: {
    type: 'skill',
    ref: 'skill_NyxtYFYir'
  },
  engine: {
    ref: 'review'
  },
  state: {
    allAnswers: [
      {
        slideRef: 'sli_VJYjJnJhg',
        isCorrect: false,
        answer: ['My Answer']
      }
    ],
    isCorrect: false,
    nextContent: {
      type: 'slide',
      ref: 'sli_VkSQroQnx'
    },
    pendingSlides: ['sli_VJYjJnJhg'],
    slides: ['sli_VJYjJnJhg'],
    step: {
      current: 2
    },
    stars: 0,
    livesDisabled: true,
    lives: 0,
    requestedClues: [],
    viewedResources: [],
    remainingLifeRequests: 0,
    hasViewedAResourceAtThisStep: false,
    content: {
      ref: 'sli_VJYjJnJhg',
      type: 'slide'
    },
    variables: {}
  }
};

const initialState: StoreState = {
  data: {
    progression,
    slides: {
      [freeTextSlide._id]: freeTextSlide
    },
    token: '1234',
    corrections: {},
    rank: {start: 10, end: Number.NaN},
    currentSkill: {ref: 'skill_NyxtYFYir', name: 'Digital Awareness'},
    videos: {}
  },
  ui: {
    showCongrats: false,
    currentSlideRef: freeTextSlide._id,
    navigation: ['slides'],
    answers: {},
    positions: [0, 1, 2, 3, 4],
    slide: {
      [freeTextSlide._id]: {
        validateButton: false,
        animateCorrectionPopin: false,
        showCorrectionPopin: false,
        pendingAnswerRequest: false
      }
    },
    showQuitPopin: false,
    showButtonRevising: false
  }
};

test('should dispatch EDIT_BASIC action via the property onChange of a Free Text slide, and all actions after click on validate the slide', async t => {
  t.plan(9);
  const expectedActions = [
    {
      type: EDIT_BASIC,
      meta: {slideRef: freeTextSlide._id},
      payload: ['My Answer']
    },
    {type: POST_ANSWER_REQUEST, meta: {slideRef: freeTextSlide._id}},
    {
      type: POST_ANSWER_SUCCESS,
      meta: {slideRef: freeTextSlide._id},
      payload: progressionAfterAnswer
    },
    {type: SLIDE_FETCH_REQUEST, meta: {slideRef: qcmGraphicSlide._id}},
    {type: SLIDE_FETCH_SUCCESS, meta: {slideRef: qcmGraphicSlide._id}, payload: qcmGraphicSlide},
    {type: CORRECTION_FETCH_REQUEST, meta: {slideRef: freeTextSlide._id}},
    {
      type: CORRECTION_FETCH_SUCCESS,
      meta: {slideRef: freeTextSlide._id},
      payload: getChoicesCorrection(freeTextSlide._id)
    },
    {type: RANK_FETCH_START_REQUEST},
    {type: RANK_FETCH_START_SUCCESS, payload: {rank: 93}}
  ];
  const thunkOptions = {services, appendVideoOptions};
  const {dispatch, getState} = createTestStore(t, initialState, thunkOptions, expectedActions);

  const props = mapStateToSlidesProps(getState(), dispatch, connectedOptions);
  t.deepEqual(omit('answerUI', props.stack.slides['0']), {
    animationType: undefined,
    animateCorrectionPopin: false,
    showCorrectionPopin: false,
    disabledContent: false,
    position: 0,
    loading: false,
    parentContentTitle:
      '__Content Parent Title{"contentTitle":"Developing the review app","contentType":"course"}',
    questionText:
      'Which term is used to describe the act of asking what the usual salary is for the position you are applying for?'
  });

  const slideProps = props.stack.slides['0'].answerUI?.model;
  slideProps?.onChange && (await slideProps.onChange('My Answer'));
  await props.stack.validateButton.onClick();
  await sleep(10);
});
