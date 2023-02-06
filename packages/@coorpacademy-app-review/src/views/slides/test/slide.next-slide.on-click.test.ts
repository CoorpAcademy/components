import test, {ExecutionContext} from 'ava';
import identity from 'lodash/fp/identity';
import {ReviewCorrectionPopinProps} from '@coorpacademy/components/es/molecule/review-correction-popin/prop-types';

import {
  getChoicesCorrection,
  services,
  appendVideoOptions
} from '@coorpacademy/review-services-mocks';
import {isEqual} from 'lodash/fp';
import {SHOW_BUTTON_REVISING} from '../../../actions/ui/show-button-revising';
import type {StoreState} from '../../../reducers';
import {mapStateToSlidesProps} from '..';
import {createTestStore} from '../../../actions/test/create-test-store';
import {NEXT_SLIDE} from '../../../actions/ui/next-slide';
import {RANK_FETCH_END_REQUEST, RANK_FETCH_END_SUCCESS} from '../../../actions/api/fetch-rank';
import {
  SLIDES_TO_REVIEW_FETCH_REQUEST,
  SLIDES_TO_REVIEW_FETCH_SUCCESS
} from '../../../actions/api/fetch-slides-to-review-by-skill-ref';
import {translate} from '../../../test/utils/translation.mock';
import {
  incorrectFreeTextPostAnswerResponse,
  fetchNewSlidesToReviewBySkillRefResponse,
  postAnswerResponses
} from '../../../test/fixtures';
import {sleep} from '../../../test/utils/sleep';
import {sliderSlide} from './fixtures/slider';
import {skin} from './fixtures/skin';
import {freeTextSlide} from './fixtures/free-text';
import {qcmSlide} from './fixtures/qcm';
import {qcmGraphicSlide} from './fixtures/qcm-graphic';
import {templateSlide} from './fixtures/template';

const connectedOptions = {translate, onQuitClick: identity, skin};

test('correction popin actions after click', async t => {
  const state: StoreState = {
    data: {
      progression: incorrectFreeTextPostAnswerResponse,
      slides: {
        sli_VJYjJnJhg: freeTextSlide,
        sli_VkSQroQnx: qcmGraphicSlide
      },
      token: '1234',
      corrections: {
        [freeTextSlide._id]: getChoicesCorrection(freeTextSlide._id, true)
      },
      rank: {start: 10, end: Number.NaN},
      currentSkill: {ref: 'skill_NyxtYFYir', name: 'Digital Awareness'},
      videos: {}
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
      showQuitPopin: false,
      showButtonRevising: false
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

  const thunkOptions = {services, appendVideoOptions};
  const {dispatch, getState} = createTestStore(t, state, thunkOptions, expectedActions);
  const props = mapStateToSlidesProps(getState(), dispatch, connectedOptions);
  const correctionPopin = props.stack.correctionPopinProps as ReviewCorrectionPopinProps;
  await correctionPopin.next.onClick();

  const updatedState = getState();
  t.deepEqual(updatedState.ui.positions, [4, 0, 1, 2, 3]);
  t.deepEqual(updatedState.ui.currentSlideRef, qcmGraphicSlide._id);
  t.pass();
});

const checkStatePositionsAndSuccessExitNode = async (
  t: ExecutionContext,
  getState: () => StoreState,
  count = 0
): Promise<boolean> => {
  const updatedState = getState();
  if (
    isEqual(updatedState.ui.positions, [-1, -1, -1, -1, 0]) &&
    updatedState.ui.currentSlideRef === 'successExitNode'
  ) {
    return true;
  }
  if (count > 5) t.fail();
  await sleep(10);
  return checkStatePositionsAndSuccessExitNode(t, getState, count + 1);
};

test('correction popin actions after click when progression is finished', async t => {
  t.plan(8);
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
      rank: {start: 10, end: Number.NaN},
      currentSkill: {ref: 'skill_NyxtYFYir', name: 'Digital Awareness'},
      videos: {}
    },
    ui: {
      showCongrats: false,
      showQuitPopin: false,
      showButtonRevising: false,
      currentSlideRef: templateSlide.universalRef,
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
          showCorrectionPopin: true,
          pendingAnswerRequest: false
        }
      }
    }
  };

  const expectedActions = [
    {
      type: RANK_FETCH_END_REQUEST
    },
    {
      type: RANK_FETCH_END_SUCCESS,
      payload: {rank: 93}
    },
    {
      type: SLIDES_TO_REVIEW_FETCH_REQUEST
    },
    {
      type: SLIDES_TO_REVIEW_FETCH_SUCCESS,
      payload: fetchNewSlidesToReviewBySkillRefResponse
    },
    {type: SHOW_BUTTON_REVISING},
    {
      type: NEXT_SLIDE,
      payload: {
        animationType: 'unstack',
        currentSlideRef: templateSlide.universalRef,
        nextSlideRef: 'successExitNode',
        totalCorrectAnswers: 5,
        answeredSlides: [
          'sli_VJYjJnJhg',
          'sli_VkSQroQnx',
          'sli_N1XACJobn',
          'sli_VkAzsCLKb',
          'sli_N13-hG3kX'
        ]
      }
    }
  ];

  const thunkOptions = {services, appendVideoOptions};
  const {dispatch, getState} = createTestStore(t, state, thunkOptions, expectedActions);
  const props = mapStateToSlidesProps(getState(), dispatch, connectedOptions);
  t.is(props.congrats, undefined);
  const correctionPopin = props.stack.correctionPopinProps as ReviewCorrectionPopinProps;
  await correctionPopin.next.onClick();

  await checkStatePositionsAndSuccessExitNode(t, getState);
  t.pass();
});
