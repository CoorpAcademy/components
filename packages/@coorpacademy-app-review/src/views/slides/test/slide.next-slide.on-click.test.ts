import test from 'ava';
import identity from 'lodash/fp/identity';
import {ReviewCorrectionPopinProps} from '@coorpacademy/components/es/molecule/review-correction-popin/prop-types';

import type {StoreState} from '../../../reducers';
import {
  postAnswerResponses,
  getChoicesCorrection,
  incorrectFreeTextPostAnswerResponse,
  services,
  translate
} from '../../../test/util/services.mock';
import {mapStateToSlidesProps} from '..';
import {createTestStore} from '../../../actions/test/create-test-store';
import {NEXT_SLIDE} from '../../../actions/ui/next-slide';
import {freeTextSlide} from './fixtures/free-text';
import {qcmGraphicSlide} from './fixtures/qcm-graphic';
import {templateSlide} from './fixtures/template';
import {qcmSlide} from './fixtures/qcm';
import {sliderSlide} from './fixtures/slider';
import {skin} from './fixtures/skin';

const connectedOptions = {translate, onQuitClick: identity, skin};

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
  const {dispatch, getState} = createTestStore(t, state, {services}, expectedActions);
  const props = mapStateToSlidesProps(getState(), dispatch, connectedOptions);
  const correctionPopin = props.stack.correctionPopinProps as ReviewCorrectionPopinProps;
  await correctionPopin.next.onClick();

  const updatedState = getState();
  t.deepEqual(updatedState.ui.positions, [4, 0, 1, 2, 3]);
  t.deepEqual(updatedState.ui.currentSlideRef, qcmGraphicSlide._id);
  t.pass();
});

test('correction popin actions after click when progression is finished', async t => {
  const state: StoreState = {
    data: {
      progression: postAnswerResponses[templateSlide.universalRef],
      skills: [],
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
      currentSkill: {ref: 'skill_NyxtYFYir', name: 'Digital Awareness'}
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
  const {dispatch, getState} = createTestStore(t, state, {services}, expectedActions);
  const props = mapStateToSlidesProps(getState(), dispatch, connectedOptions);
  t.is(props.congrats, undefined);
  const correctionPopin = props.stack.correctionPopinProps as ReviewCorrectionPopinProps;
  await correctionPopin.next.onClick();

  const updatedState = getState();
  t.deepEqual(updatedState.ui.positions, [-1, -1, -1, -1, 0]);
  t.is(updatedState.ui.currentSlideRef, 'successExitNode');
  t.pass();
});
