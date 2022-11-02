import test from 'ava';
import identity from 'lodash/fp/identity';
import {ReviewCongratsProps} from '@coorpacademy/components/es/organism/review-congrats/prop-types';
import {SKILL_FETCH_REQUEST, SKILL_FETCH_SUCCESS} from '../../../actions/api/fetch-skill';
import {createTestStore} from '../../../actions/test/create-test-store';
import {
  POST_PROGRESSION_REQUEST,
  POST_PROGRESSION_SUCCESS
} from '../../../actions/api/post-progression';
import {SLIDE_FETCH_REQUEST, SLIDE_FETCH_SUCCESS} from '../../../actions/api/fetch-slide';
import {SET_CURRENT_SLIDE} from '../../../actions/ui/slides';
import {StoreState} from '../../../reducers';
import {mapStateToSlidesProps} from '..';
import {
  getChoicesCorrection,
  postAnswerResponses,
  services,
  translate
} from '../../../test/util/services.mock';
import type {ProgressionFromAPI} from '../../../types/common';
import {freeTextSlide} from './fixtures/free-text';
import {qcmSlide} from './fixtures/qcm';
import {qcmGraphicSlide} from './fixtures/qcm-graphic';
import {sliderSlide} from './fixtures/slider';
import {templateSlide} from './fixtures/template';

const connectedOptions = {translate, onQuitClick: identity};

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
    rank: {start: 10, end: 10},
    currentSkill: {ref: 'skill_NyxtYFYir', name: 'Digital Awareness'}
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
        animationType: 'unstack'
      },
      sli_VkSQroQnx: {
        validateButton: false,
        animateCorrectionPopin: false,
        showCorrectionPopin: false,
        animationType: 'unstack'
      },
      sli_N1XACJobn: {
        validateButton: false,
        animateCorrectionPopin: false,
        showCorrectionPopin: false,
        animationType: 'unstack'
      },
      sli_VkAzsCLKb: {
        validateButton: false,
        animateCorrectionPopin: false,
        showCorrectionPopin: false,
        animationType: 'unstack'
      },
      'sli_N13-hG3kX': {
        validateButton: false,
        animateCorrectionPopin: true,
        showCorrectionPopin: false,
        animationType: 'unstack'
      }
    }
  }
};
test('should dispatch POST_PROGRESSION_REQUEST action via the property onclick of the button "Continue revising"', async t => {
  const progression: ProgressionFromAPI = {
    _id: '62b1d1087aa12f00253f40ff',
    content: {
      ref: '_skill-ref',
      type: 'skill'
    },
    engine: {
      ref: 'review'
    },
    state: {
      allAnswers: [],
      isCorrect: true,
      nextContent: {
        ref: 'sli_VJYjJnJhg',
        type: 'slide'
      },
      pendingSlides: [],
      slides: [],
      step: {
        current: 1
      },
      stars: 0
    }
  };

  const expectedActions = [
    {type: POST_PROGRESSION_REQUEST},
    {
      type: POST_PROGRESSION_SUCCESS,
      payload: progression
    },
    {
      type: SLIDE_FETCH_REQUEST,
      meta: {
        slideRef: 'sli_VJYjJnJhg'
      }
    },
    {
      type: SLIDE_FETCH_SUCCESS,
      meta: {
        slideRef: 'sli_VJYjJnJhg'
      },
      payload: freeTextSlide
    },
    {type: SET_CURRENT_SLIDE, payload: freeTextSlide},
    {type: SKILL_FETCH_REQUEST},
    {type: SKILL_FETCH_SUCCESS, payload: {ref: 'skill_NyxtYFYir', name: 'Digital Awareness'}}
  ];
  const {dispatch, getState} = createTestStore(t, state, {services}, expectedActions);
  const props = mapStateToSlidesProps(getState(), dispatch, connectedOptions);
  const congrats = props.congrats as ReviewCongratsProps;
  await congrats.buttonRevising?.onClick();
  t.pass();
});
