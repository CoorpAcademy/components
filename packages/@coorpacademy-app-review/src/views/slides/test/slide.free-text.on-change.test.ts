import test from 'ava';
import omit from 'lodash/fp/omit';
import identity from 'lodash/fp/identity';
import {POST_ANSWER_REQUEST, POST_ANSWER_SUCCESS} from '../../../actions/api/post-answer';
import {SLIDE_FETCH_REQUEST, SLIDE_FETCH_SUCCESS} from '../../../actions/api/fetch-slide';
import {
  CORRECTION_FETCH_REQUEST,
  CORRECTION_FETCH_SUCCESS
} from '../../../actions/api/fetch-correction';
import {RANK_FETCH_START_REQUEST, RANK_FETCH_START_SUCCESS} from '../../../actions/api/fetch-rank';
import {mapStateToSlidesProps} from '..';
import {ProgressionFromAPI} from '../../../types/common';
import {
  getChoicesCorrection,
  postAnswerResponses,
  services
} from '../../../test/util/services.mock';
import {createTestStore} from '../../../actions/test/create-test-store';
import {StoreState} from '../../../reducers';
import {EDIT_BASIC} from '../../../actions/ui/answers';
import {FreeText} from '../../../types/slides';
import {freeTextSlide} from './fixtures/free-text';
import {qcmGraphicSlide} from './fixtures/qcm-graphic';

const progression: ProgressionFromAPI = {
  _id: '123456789123',
  content: {type: 'skill', ref: '_skill-ref'},
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

const initialState: StoreState = {
  data: {
    progression,
    slides: {
      [freeTextSlide._id]: freeTextSlide
    },
    skills: [],
    token: '1234',
    corrections: {},
    rank: {}
  },
  ui: {
    currentSlideRef: freeTextSlide._id,
    navigation: ['skills', 'slides'],
    answers: {},
    positions: [0, 1, 2, 3, 4],
    slide: {
      [freeTextSlide._id]: {
        validateButton: false,
        animateCorrectionPopin: false,
        showCorrectionPopin: false
      }
    }
  }
};

test('should dispatch EDIT_BASIC action via the property onChange of a Free Text slide, and all actions after click on validate the slide', async t => {
  t.plan(3);
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
      payload: postAnswerResponses[freeTextSlide._id]
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
  const {dispatch, getState} = createTestStore(t, initialState, services, expectedActions);

  const props = mapStateToSlidesProps(getState(), dispatch, identity);
  t.deepEqual(omit('answerUI', props.stack.slides['0']), {
    animationType: undefined,
    animateCorrectionPopin: false,
    showCorrectionPopin: false,
    hidden: false,
    position: 0,
    loading: false,
    parentContentTitle: 'From "Developing the review app" course',
    questionText:
      'Which term is used to describe the act of asking what the usual salary is for the position you are applying for?'
  });

  const slideProps = props.stack.slides['0'].answerUI?.model as FreeText;
  await slideProps.onChange('My Answer');
  await props.stack.validateButton.onClick();
});
