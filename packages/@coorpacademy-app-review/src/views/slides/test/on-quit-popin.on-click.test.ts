import test from 'ava';
import identity from 'lodash/fp/identity';
import {CMPopinProps} from '@coorpacademy/components/es/molecule/cm-popin/types';
import {services} from '@coorpacademy/review-services-mocks';
import {createTestStore} from '../../../actions/test/create-test-store';
import {CLOSE_POPIN} from '../../../actions/ui/quit-popin';
import {StoreState} from '../../../reducers';
import {mapStateToSlidesProps} from '..';
import {translate} from '../../../test/utils/translation.mock';
import {incorrectFreeTextPostAnswerResponse} from '../../../test/fixtures';
import {skin} from './fixtures/skin';
import {freeTextSlide} from './fixtures/free-text';
import {qcmGraphicSlide} from './fixtures/qcm-graphic';

const connectedOptions = {translate, onQuitClick: identity, skin};

const state: StoreState = {
  data: {
    progression: incorrectFreeTextPostAnswerResponse,
    slides: {
      sli_VJYjJnJhg: freeTextSlide,
      sli_VkSQroQnx: qcmGraphicSlide
    },
    token: '1234',
    corrections: {},
    rank: {start: 10, end: Number.NaN},
    currentSkill: {ref: 'skill_NyxtYFYir', name: 'Digital Awareness'}
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
        showCorrectionPopin: true,
        pendingAnswerRequest: false
      },
      sli_VkSQroQnx: {
        validateButton: false,
        animateCorrectionPopin: false,
        showCorrectionPopin: false,
        pendingAnswerRequest: false
      }
    },
    showQuitPopin: true,
    showButtonRevising: false
  }
};

test('should dispatch CLOSE_POPIN action via the property handleOnclick of secondButton when popin is open', async t => {
  const expectedAction = [{type: CLOSE_POPIN}];
  const {dispatch, getState} = createTestStore(t, state, {services}, expectedAction);
  const props = mapStateToSlidesProps(getState(), dispatch, connectedOptions);
  const quitPopin = props.quitPopin as CMPopinProps;
  await quitPopin.secondButton?.handleOnclick();
  const updatedState = getState();
  t.is(updatedState.ui.showQuitPopin, false);
  t.pass();
});

test('should dispatch onQuitClick function via the property handleOnclick of firstButton when popin is open', async t => {
  t.plan(2);

  const expectedAction = [{type: CLOSE_POPIN}];
  const {dispatch, getState} = createTestStore(t, state, {services}, expectedAction);
  const props = mapStateToSlidesProps(getState(), dispatch, {
    translate,
    onQuitClick: () => t.pass(),
    skin
  });
  const quitPopin = props.quitPopin as CMPopinProps;
  await quitPopin.firstButton?.handleOnclick();
  t.pass();
});
