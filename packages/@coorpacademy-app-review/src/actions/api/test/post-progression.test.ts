import test from 'ava';
import type {ProgressionFromAPI, Services} from '@coorpacademy/review-services';
import {services as mockedServices, appendVideoOptions} from '@coorpacademy/review-services-mocks';
import {
  postProgression,
  POST_PROGRESSION_REQUEST,
  POST_PROGRESSION_SUCCESS,
  POST_PROGRESSION_FAILURE
} from '../post-progression';
import {initialState} from '../../../test/fixtures';
import {SLIDE_FETCH_REQUEST, SLIDE_FETCH_SUCCESS} from '../fetch-slide';
import {SET_CURRENT_SLIDE} from '../../ui/slides';
import {createTestStore} from '../../test/create-test-store';
import {SKILL_FETCH_FAILURE, SKILL_FETCH_REQUEST, SKILL_FETCH_SUCCESS} from '../fetch-skill';
import {freeTextSlide} from '../../../views/slides/test/fixtures/free-text';
import {SET_VIDEO_PROPS} from '../fetch-video-props';

test('should dispatch POST_PROGRESSION_SUCCESS and SLIDE_FETCH_REQUEST actions when postProgression returns a progression', async t => {
  t.plan(12);
  const progression: ProgressionFromAPI = {
    _id: '62b1d1087aa12f00253f40ee',
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

  const services: Services = {
    ...mockedServices,
    postProgression: (skillRef, token) => {
      t.is(token, '1234');
      t.is(skillRef, 'skill_NyxtYFYir');
      return Promise.resolve(progression);
    },
    fetchSlide: (slideRef, token) => {
      t.is(token, '1234');
      t.is(slideRef, 'sli_VJYjJnJhg');
      return Promise.resolve(freeTextSlide);
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
    {
      type: SET_VIDEO_PROPS,
      payload: {
        slideId: freeTextSlide._id,
        props: {
          type: 'video',
          src: [
            {
              loading: false,
              type: 'video',
              mimeType: 'application/jwplayer',
              videoId: '489S0B87',
              mediaRef: 'med_free_text',
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
    {type: SKILL_FETCH_REQUEST},
    {type: SKILL_FETCH_SUCCESS, payload: {ref: 'skill_NyxtYFYir', name: 'Digital Awareness'}}
  ];

  const thunkOptions = {services, appendVideoOptions};
  const {dispatch} = createTestStore(t, initialState, thunkOptions, expectedActions);

  await dispatch(postProgression('skill_NyxtYFYir'));
});

test('should dispatch POST_PROGRESSION_FAILURE action when postProgression fails', async t => {
  t.plan(4);
  const services: Services = {
    ...mockedServices,
    postProgression: (skillRef, token) => {
      t.is(token, '1234');
      t.is(skillRef, 'skill_12345');
      return Promise.reject(new Error('error'));
    }
  };

  const expectedActions = [
    {type: POST_PROGRESSION_REQUEST},
    {
      type: POST_PROGRESSION_FAILURE,
      payload: new Error('error'),
      error: true
    },
    {type: SKILL_FETCH_REQUEST},
    {type: SKILL_FETCH_FAILURE, payload: new Error('Fetch skill action failed'), error: true}
  ];

  const thunkOptions = {services, appendVideoOptions};
  const {dispatch} = createTestStore(t, initialState, thunkOptions, expectedActions);

  await dispatch(postProgression('skill_12345'));
});
