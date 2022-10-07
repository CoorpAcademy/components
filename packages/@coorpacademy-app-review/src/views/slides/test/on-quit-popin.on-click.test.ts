import test from 'ava';
import identity from 'lodash/fp/identity';
import {createTestStore} from '../../../actions/test/create-test-store';
import {CLOSE_POPIN} from '../../../actions/ui/quit-popin';
import {incorrectFreeTextPostAnswerResponse, services} from '../../../test/util/services.mock';
import {StoreState} from '../../../reducers';
import {mapStateToSlidesProps, QuitPopinProps} from '..';
import {freeTextSlide} from './fixtures/free-text';
import {qcmGraphicSlide} from './fixtures/qcm-graphic';

const state: StoreState = {
  data: {
    progression: incorrectFreeTextPostAnswerResponse,
    skills: [],
    slides: {
      sli_VJYjJnJhg: freeTextSlide,
      sli_VkSQroQnx: qcmGraphicSlide
    },
    token: '1234',
    corrections: {},
    rank: {}
  },
  ui: {
    showCongrats: false,
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
    },
    showQuitPopin: true
  }
};

test('should dispatch CLOSE_POPIN action via the property handleOnclick of secondButton when popin is open', async t => {
  const expectedAction = [{type: CLOSE_POPIN}];
  const {dispatch, getState} = createTestStore(t, state, services, expectedAction);
  const props = mapStateToSlidesProps(getState(), dispatch, identity);
  const quitPopin = props.quitPopin as QuitPopinProps;
  await quitPopin.secondButton.handleOnclick();
  const updatedState = getState();
  t.is(updatedState.ui.showQuitPopin, false);
  t.pass();
});

test('should dispatch onQuitClick function via the property handleOnclick of firstButton when popin is open', async t => {
  t.plan(2);

  const expectedAction = [{type: CLOSE_POPIN}];
  const {dispatch, getState} = createTestStore(t, state, services, expectedAction);
  const props = mapStateToSlidesProps(getState(), dispatch, () => t.pass());
  const quitPopin = props.quitPopin as QuitPopinProps;
  await quitPopin.firstButton.handleOnclick();
  t.pass();
});
