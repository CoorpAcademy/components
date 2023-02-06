import test from 'ava';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import {getChoicesCorrection} from '@coorpacademy/review-services-mocks';
import {StoreState} from '../../../reducers';
import {nextSlide, NEXT_SLIDE} from '../next-slide';
import {createTestStore} from '../../test/create-test-store';
import {freeTextSlide} from '../../../views/slides/test/fixtures/free-text';
import {qcmGraphicSlide} from '../../../views/slides/test/fixtures/qcm-graphic';
import {postAnswerResponses} from '../../../test/fixtures';

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
    token: '1234',
    corrections: {[freeTextSlide.universalRef]: getChoicesCorrection(freeTextSlide.universalRef)},
    rank: {start: 93, end: Number.NaN},
    currentSkill: {ref: skillRef, name: skillRef},
    videos: {}
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

test('should dispatch NEXT_SLIDE action when nextSlide is called and the progression state is correct', async t => {
  t.plan(1);
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
  const {dispatch} = createTestStore(t, state, {}, expectedActions);
  await dispatch(nextSlide);
});

test('should dispatch NEXT_SLIDE action when nextSlide is called and the progression state is not correct', async t => {
  t.plan(1);
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
  const {dispatch} = createTestStore(t, stateWithWrongAnswer, {}, expectedActions);
  await dispatch(nextSlide);
});
