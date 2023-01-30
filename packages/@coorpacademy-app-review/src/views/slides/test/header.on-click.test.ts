import test from 'ava';
import identity from 'lodash/fp/identity';
import {
  services,
  getChoicesCorrection,
  appendVideoOptions
} from '@coorpacademy/review-services-mocks';
import {createTestStore} from '../../../actions/test/create-test-store';
import {StoreState} from '../../../reducers';
import {OPEN_POPIN} from '../../../actions/ui/quit-popin';
import {NEXT_SLIDE} from '../../../actions/ui/next-slide';
import {mapStateToSlidesProps} from '..';
import {translate} from '../../../test/utils/translation.mock';
import {incorrectFreeTextPostAnswerResponse, postAnswerResponses} from '../../../test/fixtures';
import {skin} from './fixtures/skin';
import {sliderSlide} from './fixtures/slider';
import {templateSlide} from './fixtures/template';
import {freeTextSlide} from './fixtures/free-text';
import {qcmSlide} from './fixtures/qcm';
import {qcmGraphicSlide} from './fixtures/qcm-graphic';

test('should dispatch OPEN_POPIN action after a click on close button in header', async t => {
  const state: StoreState = {
    data: {
      progression: incorrectFreeTextPostAnswerResponse,
      slides: {
        sli_N1XACJobn: null
      },
      token: '1234',
      corrections: {},
      rank: {start: Number.NaN, end: Number.NaN},
      currentSkill: {ref: 'skill_NyxtYFYir', name: 'Digital Awareness'},
      videos: {}
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
          showCorrectionPopin: false,
          pendingAnswerRequest: false
        }
      },
      showQuitPopin: false,
      showCongrats: false,
      showButtonRevising: false
    }
  };
  const expectedAction = [{type: OPEN_POPIN}];
  const thunkOptions = {services, appendVideoOptions};
  const {dispatch, getState} = createTestStore(t, state, thunkOptions, expectedAction);
  const props = mapStateToSlidesProps(getState(), dispatch, {
    translate,
    onQuitClick: identity,
    skin
  });
  t.is(props.quitPopin, undefined);
  await props.header.onQuitClick();
  const updatedProps = mapStateToSlidesProps(getState(), dispatch, {
    translate,
    onQuitClick: identity,
    skin
  });
  t.not(updatedProps.quitPopin, undefined);
  t.pass();
});

test('should dispatch onQuitClick function after a click on close button in header when showing congrats', async t => {
  t.plan(3);

  const state: StoreState = {
    data: {
      progression: postAnswerResponses[templateSlide.universalRef],
      slides: {
        [freeTextSlide.universalRef]: freeTextSlide,
        [qcmGraphicSlide.universalRef]: qcmGraphicSlide,
        [qcmSlide.universalRef]: qcmSlide,
        [sliderSlide.universalRef]: sliderSlide,
        [templateSlide.universalRef]: templateSlide
      },
      token: '1234',
      corrections: {
        [freeTextSlide._id]: getChoicesCorrection(freeTextSlide._id),
        [qcmGraphicSlide.universalRef]: getChoicesCorrection(qcmGraphicSlide._id),
        [qcmSlide.universalRef]: getChoicesCorrection(qcmSlide._id),
        [sliderSlide.universalRef]: getChoicesCorrection(sliderSlide._id),
        [templateSlide.universalRef]: getChoicesCorrection(templateSlide._id)
      },
      rank: {start: 10, end: 9},
      currentSkill: {ref: 'skill_NyxtYFYir', name: 'Digital Awareness'},
      videos: {}
    },
    ui: {
      showCongrats: true,
      showQuitPopin: false,
      showButtonRevising: true,
      currentSlideRef: 'successExitNode',
      navigation: ['loader', 'slides'],
      answers: {
        sli_VJYjJnJhg: ['Benchmark'],
        sli_VkSQroQnx: ['Faux'],
        sli_N1XACJobn: ['Le créateur peut fixer un pourcentage pour chaque transaction future'],
        sli_VkAzsCLKb: ['7'],
        'sli_N13-hG3kX': ['Leaderboard', 'utilisateurs', 'étoiles']
      },
      positions: [-1, -1, -1, -1, 0],
      slide: {
        sli_VJYjJnJhg: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack',
          pendingAnswerRequest: false
        },
        sli_VkSQroQnx: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack',
          pendingAnswerRequest: false
        },
        sli_N1XACJobn: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack',
          pendingAnswerRequest: false
        },
        sli_VkAzsCLKb: {
          validateButton: false,
          animateCorrectionPopin: false,
          showCorrectionPopin: false,
          animationType: 'unstack',
          pendingAnswerRequest: false
        },
        'sli_N13-hG3kX': {
          validateButton: false,
          animateCorrectionPopin: true,
          showCorrectionPopin: false,
          animationType: 'unstack',
          pendingAnswerRequest: false
        }
      }
    }
  };

  const expectedAction = [{type: NEXT_SLIDE}];
  const thunkOptions = {services, appendVideoOptions};
  const {dispatch, getState} = createTestStore(t, state, thunkOptions, expectedAction);
  const props = mapStateToSlidesProps(getState(), dispatch, {
    translate,
    onQuitClick: () => t.pass(),
    skin
  });

  await props.header.onQuitClick();
  t.pass();
  t.is(props.quitPopin, undefined);
});
