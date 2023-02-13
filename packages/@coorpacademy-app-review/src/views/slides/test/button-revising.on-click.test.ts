import test from 'ava';
import identity from 'lodash/fp/identity';
import {ReviewCongratsProps} from '@coorpacademy/components/es/organism/review-congrats/prop-types';
import {
  getChoicesCorrection,
  SKILL_REF_FOR_DEFAULT_SLIDES
} from '@coorpacademy/review-services-mocks';
import type {ProgressionFromAPI} from '@coorpacademy/review-services';
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
import {translate} from '../../../test/utils/translation.mock';
import {postAnswerResponses} from '../../../test/fixtures';
import {SHOW_VIDEO} from '../../../actions/api/fetch-video-props';
import {skin} from './fixtures/skin';
import {qcmGraphicSlide} from './fixtures/qcm-graphic';
import {freeTextSlide} from './fixtures/free-text';
import {qcmSlide} from './fixtures/qcm';
import {sliderSlide} from './fixtures/slider';
import {templateSlide} from './fixtures/template';

const connectedOptions = {translate, onQuitClick: identity, skin};

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
    rank: {start: 10, end: 10},
    currentSkill: {ref: SKILL_REF_FOR_DEFAULT_SLIDES, name: 'Digital Awareness'},
    videos: {
      [freeTextSlide._id]: {
        type: 'video',
        src: [
          {
            mimeType: 'application/jwplayer',
            type: 'video',
            videoId: '489S0B87',
            loading: true,
            jwpOptions: {
              playerId: '7IMa4DCK',
              playerScript: 'https://static.coorpacademy.com/JwPlayer/8.6.3/jwplayer.js',
              licenseKey: 'QDh3Fb2afiIAFI+XwlncwQDhNEwkXetm1y8tzWn3km8=',
              playlist: [
                {
                  file: 'https://content.jwplatform.com/manifests/489S0B87.m3u8',
                  tracks: [
                    {
                      file: 'https://content.jwplatform.com/strips/489S0B87-120.vtt',
                      kind: 'thumbnails'
                    }
                  ]
                }
              ],
              customProps: {
                playbackRateControls: true,
                playbackRates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
                preload: 'auto',
                autostart: 'true',
                width: '100%',
                height: '343px',
                visualplaylist: false,
                nextUpDisplay: false
              }
            }
          }
        ]
      }
    }
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

test('should dispatch POST_PROGRESSION_REQUEST action via the property onclick of the button "Continue revising"', async t => {
  const progression: ProgressionFromAPI = {
    _id: '62b1d1087aa12f00253f40ee',
    content: {
      ref: SKILL_REF_FOR_DEFAULT_SLIDES,
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
    {type: SHOW_VIDEO, payload: {slideId: freeTextSlide._id}},
    {type: SKILL_FETCH_REQUEST},
    {
      type: SKILL_FETCH_SUCCESS,
      payload: {ref: SKILL_REF_FOR_DEFAULT_SLIDES, name: 'Digital Awareness'}
    }
  ];
  const {dispatch, getState} = createTestStore(t, state, {}, expectedActions);
  const props = mapStateToSlidesProps(getState(), dispatch, connectedOptions);
  const congrats = props.congrats as ReviewCongratsProps;
  await congrats.buttonRevising?.onClick();
  t.pass();
});
