import test from 'ava';
import identity from 'lodash/fp/identity';
import {createTestStore} from '../../../actions/test/create-test-store';
import {incorrectFreeTextPostAnswerResponse, services} from '../../../test/util/services.mock';
import {StoreState} from '../../../reducers';
import {OPEN_POPIN} from '../../../actions/ui/quit-popin';
import {mapStateToSlidesProps} from '..';

const state: StoreState = {
  data: {
    progression: incorrectFreeTextPostAnswerResponse,
    skills: [],
    slides: {
      sli_N1XACJobn: null
    },
    token: '1234',
    corrections: {},
    rank: {}
  },
  ui: {
    currentSlideRef: '',
    navigation: ['loader', 'slides'],
    answers: {},
    positions: [0, 1, 2, 3, 4],
    slide: {
      sli_N1XACJobn: {
        validateButton: false,
        animateCorrectionPopin: false,
        showCorrectionPopin: false
      }
    },
    showQuitPopin: false
  }
};

test('should dispatch OPEN_POPIN action after a click on close button in header', async t => {
  const expectedAction = [{type: OPEN_POPIN}];
  const {dispatch, getState} = createTestStore(t, state, services, expectedAction);
  const props = mapStateToSlidesProps(getState(), dispatch, identity);
  await props.header.onQuitClick();
  t.pass();
});
