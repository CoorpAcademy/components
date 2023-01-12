import React from 'react';
import {render} from 'react-dom';
import isNil from 'lodash/fp/isNil';
import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import createTranslate from '@coorpacademy/translate';
import {WebContext} from '@coorpacademy/components/es/atom/provider';
import {identity} from 'lodash/fp';
import localesComponents from '@coorpacademy/components/locales/en/global.json';
import {services} from '@coorpacademy/review-services-mocks';
import {ApiMediaVideo, AppOptions, Translate} from '../src/types/common';
import localesAppReview from '../locales/en/review.json';
import AppReview from '../src';

import {skin} from '../src/views/slides/test/fixtures/skin';

type SandboxOptions = {
  container: string;
};

declare global {
  // eslint-disable-next-line no-shadow
  interface Window {
    createSandbox?: (sandboxOptions: SandboxOptions) => void;
  }
}

const translate: Translate = (key: string, data?: Record<string, string>): string => {
  try {
    return createTranslate({
      ...localesAppReview,
      ...localesComponents
    })(key, data);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return createTranslate({
      [key]: key
    })(key, data);
  }
};

const appendVideoOptions = (video: ApiMediaVideo): unknown => {
  const {videoId, mediaRef} = video;
  return {
    type: 'video',
    mimeType: 'application/jwplayer',
    videoId,
    mediaRef,
    jwpOptions: {
      playerId: '7IMa4DCK',
      playerScript: 'https://static.coorpacademy.com/JwPlayer/8.6.3/jwplayer.js',
      licenseKey: 'QDh3Fb2afiIAFI+XwlncwQDhNEwkXetm1y8tzWn3km8=',
      playlist: [
        {
          file: `https://content.jwplatform.com/manifests/${videoId}.m3u8`,
          tracks: [
            {
              file: `https://content.jwplatform.com/strips/${videoId}-120.vtt`,
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
  };
};

const isContainerAvailable = (options: SandboxOptions): boolean =>
  !pipe(get('container'), isNil)(options);

const createSandbox = (options: SandboxOptions): void => {
  if (!isContainerAvailable(options)) {
    // eslint-disable-next-line no-console
    console.error('[AppReview sandbox] Requires a container.');
  } else {
    const container = document.getElementById(options.container);
    // mode mobile/web
    const appOptions: AppOptions = {
      token: process.env.API_TEST_TOKEN || '',
      skillRef: 'skill_NyxtYFYir',
      translate,
      services,
      onQuitClick: () => {
        location.reload();
      },
      skin,
      appendVideoOptions
    };
    render(
      <WebContext translate={identity} skin={skin}>
        <AppReview options={appOptions} />
      </WebContext>,
      container
    );
  }
};

if (window && !window.createSandbox) {
  window.createSandbox = createSandbox;
}

createSandbox({container: 'root'});
