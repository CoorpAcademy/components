import test from 'ava';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import {
  getChoicesCorrection,
  postAnswerResponses,
  services
} from '@coorpacademy/review-services/es/mock/services.mock';
import {freeTextSlide} from '@coorpacademy/review-services/es/mock/fixtures/free-text';
import {qcmGraphicSlide} from '@coorpacademy/review-services/es/mock/fixtures/qcm-graphic';
import {StoreState} from '../../../reducers';
import {nextSlide, NEXT_SLIDE} from '../next-slide';
import {createTestStore} from '../../test/create-test-store';

const progression = postAnswerResponses[freeTextSlide.universalRef];
const skillRef = '_skill-ref';
const answer = ['Vous isoler dans un lieu calme'];

const state: StoreState = {
  data: {
    progression,
    slides: {
      [freeTextSlide.universalRef]: freeTextSlide,
      [qcmGraphicSlide.universalRef]: qcmGraphicSlide
    },
    skills: [{skillRef, custom: false, name: skillRef, slidesToReview: 5}],
    token: '1234',
    corrections: {[freeTextSlide.universalRef]: getChoicesCorrection(freeTextSlide.universalRef)},
    rank: {start: 93, end: Number.NaN},
    currentSkill: {ref: skillRef, name: skillRef}
  },
  ui: {
    showCongrats: false,
    currentSlideRef: freeTextSlide._id,
    navigation: ['loader', 'slides'],
    positions: [0, 1, 2, 3, 4],
    answers: {
      [freeTextSlide._id]: answer
    },
    slide: {
      [freeTextSlide._id]: {
        validateButton: false,
        animateCorrectionPopin: true,
        showCorrectionPopin: true,
        pendingAnswerRequest: false
      }
    },
    showQuitPopin: false,
    showButtonRevising: false
  }
};

test('should dispatch NEXT_SLIDE action when nextSlide is called and the progression state is correct', t => {
  const expectedActions = [
    {
      type: NEXT_SLIDE,
      payload: {
        currentSlideRef: freeTextSlide.universalRef,
        nextSlideRef: qcmGraphicSlide.universalRef,
        animationType: 'unstack',
        totalCorrectAnswers: 1,
        answeredSlides: [freeTextSlide.universalRef]
      }
    }
  ];
  const {dispatch} = createTestStore(t, state, {services}, expectedActions);
  dispatch(nextSlide);
});

test('should dispatch NEXT_SLIDE action when nextSlide is called and the progression state is not correct', t => {
  const stateWithWrongAnswer = pipe(
    set(['data', 'progression', 'state', 'isCorrect'], false),
    set(['data', 'progression', 'state', 'allAnswers', 0, 'isCorrect'], false)
  )(state);

  const expectedActions = [
    {
      type: NEXT_SLIDE,
      payload: {
        currentSlideRef: freeTextSlide.universalRef,
        nextSlideRef: qcmGraphicSlide.universalRef,
        animationType: 'restack',
        totalCorrectAnswers: 0,
        answeredSlides: [freeTextSlide.universalRef]
      }
    }
  ];
  const {dispatch} = createTestStore(t, stateWithWrongAnswer, {services}, expectedActions);
  dispatch(nextSlide);
});
