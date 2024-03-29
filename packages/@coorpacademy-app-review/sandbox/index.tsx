/* eslint-disable no-console */
import React from 'react';
import {render} from 'react-dom';
import isNil from 'lodash/fp/isNil';
import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import createTranslate from '@coorpacademy/translate';
import {WebContext} from '@coorpacademy/components/es/atom/provider';
import {identity} from 'lodash/fp';
import localesComponents from '@coorpacademy/components/locales/en/global.json';
import {services, SKILL_REF_FOR_DEFAULT_SLIDES} from '@coorpacademy/review-services-mocks';
import {AppOptions, Translate} from '../src/types/common';
import localesAppReview from '../locales/en/review.json';
import AppReview from '../src';
import {skin} from '../src/views/slides/test/fixtures/skin';
import {appendVideoOptions} from './options';

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
    console.error(err);
    return createTranslate({
      [key]: key
    })(key, data);
  }
};

const isContainerAvailable = (options: SandboxOptions): boolean =>
  !pipe(get('container'), isNil)(options);

const createSandbox = (options: SandboxOptions): void => {
  if (!isContainerAvailable(options)) {
    console.error('[AppReview sandbox] Requires a container.');
  } else {
    const container = document.getElementById(options.container);
    // mode mobile/web
    const appOptions: AppOptions = {
      token: process.env.API_TEST_TOKEN || '',
      skillRef: SKILL_REF_FOR_DEFAULT_SLIDES,
      translate,
      services,
      onQuitClick: () => {
        location.reload();
      },
      skin,
      appendVideoOptions,
      onStartProgression: progression => {
        console.log('GTM onStartProgression', progression);
      },
      onEndProgression: progression => {
        console.log('GTM onEndProgression', progression);
      }
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
