import test from 'ava';
import identity from 'lodash/fp/identity';
import {createTestStore} from '../../../actions/test/create-test-store';
import {CLOSE_POPIN} from '../../../actions/ui/quit-popin';
import {incorrectFreeTextPostAnswerResponse, services} from '../../../test/util/services.mock';
import {StoreState} from '../../../reducers';
import {mapStateToSlidesProps, QuitPopinProps} from '..';
import {freeTextSlide} from './fixtures/free-text';
import {qcmGraphicSlide} from './fixtures/qcm-graphic';

test('should dispatch OPEN_POPIN action via the property handleOnclick of firstButton when popin is open', async t => {
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

  const expectedAction = [{type: CLOSE_POPIN}];
  const {dispatch, getState} = createTestStore(t, state, services, expectedAction);
  const props = mapStateToSlidesProps(getState(), dispatch, identity);
  const stateTest = getState();
  // eslint-disable-next-line no-console
  console.log('stateTest');
  // eslint-disable-next-line no-console
  console.log(stateTest);
  // récupérer le premier bouton handleOnclick sur le firstButton
  const quitPopin = props.quitPopin as QuitPopinProps;
  await quitPopin.secondButton.handleOnclick(); // on lance le premier bouton continuer d'apprendre

  const updatedState = getState();
  // eslint-disable-next-line no-console
  console.log('updatedState');
  // eslint-disable-next-line no-console
  console.log(updatedState);
  t.is(updatedState.ui.showQuitPopin, false);
  t.pass();
});
