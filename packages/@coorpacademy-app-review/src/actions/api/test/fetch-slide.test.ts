import test from 'ava';
import type {Services} from '@coorpacademy/review-services';
import {services as mockedServices, appendVideoOptions} from '@coorpacademy/review-services-mocks';
import {
  fetchSlide,
  SLIDE_FETCH_FAILURE,
  SLIDE_FETCH_REQUEST,
  SLIDE_FETCH_SUCCESS
} from '../fetch-slide';
import {initialState} from '../../../test/fixtures';
import {SET_CURRENT_SLIDE} from '../../ui/slides';
import {createTestStore} from '../../test/create-test-store';
import {freeTextSlide} from '../../../views/slides/test/fixtures/free-text';
import {SET_VIDEO_PROPS} from '../fetch-video-props';

test('should dispatch FETCH_SUCCESS and SET_CURRENT_SLIDE actions when fetchSlide return a slide', async t => {
  t.plan(6);
  const services: Services = {
    ...mockedServices,
    fetchSlide: (slideRef, token) => {
      t.is(token, '1234');
      t.is(slideRef, 'sli_VJYjJnJhg');
      return Promise.resolve(freeTextSlide);
    }
  };

  const expectedActions = [
    {type: SLIDE_FETCH_REQUEST, meta: {slideRef: 'sli_VJYjJnJhg'}},
    {
      type: SLIDE_FETCH_SUCCESS,
      meta: {slideRef: 'sli_VJYjJnJhg'},
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
    }
  ];

  const thunkOptions = {services, appendVideoOptions};
  const {dispatch} = createTestStore(t, initialState, thunkOptions, expectedActions);

  await dispatch(fetchSlide('sli_VJYjJnJhg'));
});

test('should dispatch SLIDE_FETCH_FAILURE action when fetchSlide fails', async t => {
  t.plan(4);
  const services: Services = {
    ...mockedServices,
    fetchSlide: (slideRef, token) => {
      t.is(token, '1234');
      t.is(slideRef, 'slide_ref');
      return Promise.reject(new Error('error'));
    }
  };

  const expectedActions = [
    {type: SLIDE_FETCH_REQUEST, meta: {slideRef: 'slide_ref'}},
    {
      type: SLIDE_FETCH_FAILURE,
      meta: {slideRef: 'slide_ref'},
      payload: new Error('error'),
      error: true
    }
  ];

  const thunkOptions = {services, appendVideoOptions};
  const {dispatch} = createTestStore(t, initialState, thunkOptions, expectedActions);

  await dispatch(fetchSlide('slide_ref'));
});
