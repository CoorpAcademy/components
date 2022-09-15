import test from 'ava';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import {StoreState} from '../../../reducers';
import {nextSlide, NEXT_SLIDE} from '../next-slide';
import {createTestStore} from '../../test/create-test-store';
import {
  getChoicesCorrection,
  postAnswerResponses,
  services
} from '../../../test/util/services.mock';
import {freeTextSlide} from '../../../views/slides/test/fixtures/free-text';
import {qcmGraphicSlide} from '../../../views/slides/test/fixtures/qcm-graphic';

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
    rank: {start: 93}
  },
  ui: {
    currentSlideRef: freeTextSlide._id,
    navigation: ['loader', 'slides'],
    answers: answer,
    slide: {
      validateButton: false
    }
  }
};
test('should dispatch NEXT_SLIDE action when nextSlide is called and the progression state is correct', t => {
  const expectedActions = [
    {
      type: NEXT_SLIDE,
      payload: {
        currentSlideRef: qcmGraphicSlide.universalRef,
        animateCorrectionPopin: false,
        animationType: 'unstack'
      }
    }
  ];
  const {dispatch} = createTestStore(t, state, services, expectedActions);
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
        currentSlideRef: qcmGraphicSlide.universalRef,
        animateCorrectionPopin: false,
        animationType: 'restack'
      }
    }
  ];
  const {dispatch} = createTestStore(t, stateWithWrongAnswer, services, expectedActions);
  dispatch(nextSlide);
});
