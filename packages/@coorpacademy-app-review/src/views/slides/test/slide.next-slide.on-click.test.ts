import test from 'ava';
import identity from 'lodash/fp/identity';
import type {StoreState} from '../../../reducers';
import {
  getChoicesCorrection,
  incorrectFreeTextPostAnswerResponse,
  services
} from '../../../test/util/services.mock';
import {CorrectionPopinProps, mapStateToSlidesProps} from '..';
import {createTestStore} from '../../../actions/test/create-test-store';
import {NEXT_SLIDE} from '../../../actions/ui/next-slide';
import {freeTextSlide} from './fixtures/free-text';
import {qcmGraphicSlide} from './fixtures/qcm-graphic';

test('correction popin actions after click', async t => {
  const state: StoreState = {
    data: {
      progression: incorrectFreeTextPostAnswerResponse,
      skills: [],
      slides: {
        sli_VJYjJnJhg: freeTextSlide,
        sli_VkSQroQnx: qcmGraphicSlide
      },
      token: '1234',
      corrections: {
        [freeTextSlide._id]: getChoicesCorrection(freeTextSlide._id, true)
      },
      rank: {}
    },
    ui: {
      currentSlideRef: 'sli_VJYjJnJhg',
      navigation: ['loader', 'slides'],
      answers: {sli_VJYjJnJhg: ['My value']},
      positions: [0, 1, 2, 3, 4],
      slide: {
        sli_VJYjJnJhg: {
          validateButton: false,
          animateCorrectionPopin: true,
          showCorrectionPopin: true
        },
        sli_VkSQroQnx: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false
        }
      }
    }
  };

  const expectedActions = [
    {
      type: NEXT_SLIDE,
      payload: {
        animationType: 'restack',
        currentSlideRef: freeTextSlide._id,
        nextSlideRef: qcmGraphicSlide._id,
        totalCorrectAnswers: 0,
        answeredSlides: ['sli_VJYjJnJhg']
      }
    }
  ];
  const {dispatch, getState} = createTestStore(t, state, services, expectedActions);
  const props = mapStateToSlidesProps(getState(), dispatch, identity);
  const correctionPopin = props.stack.correctionPopinProps as CorrectionPopinProps;
  await correctionPopin.next.onClick();

  const updatedState = getState();
  t.deepEqual(updatedState.ui.positions, [4, 0, 1, 2, 3]);
  t.deepEqual(updatedState.ui.currentSlideRef, qcmGraphicSlide._id);
  t.pass();
});
