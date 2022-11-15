import React from 'react';
import {render} from 'react-dom';
import isNil from 'lodash/fp/isNil';
import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import createTranslate from '@coorpacademy/translate';
import {WebContext} from '@coorpacademy/components/es/atom/provider';
import {identity} from 'lodash/fp';
import localesComponents from '@coorpacademy/components/locales/en/global.json';
import localesAppReview from '../locales/en/review.json';
import AppReview from '../src';
import type {AppOptions, Translate} from '../src/types/common';
import {services} from '../src/test/util/services.mock';

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
const isContainerAvailable = (options: SandboxOptions): boolean =>
  !pipe(get('container'), isNil)(options);

const createSandbox = (options: SandboxOptions): void => {
  if (!isContainerAvailable(options)) {
    // eslint-disable-next-line no-console
    console.error('[AppReview sandbox] Requires a container.');
  } else {
    const container = document.getElementById(options.container);
    const skin = {
      common: {
        primary: '#248e59'
      }
    };
    // mode mobile/web
    const appOptions: AppOptions = {
      token: process.env.API_TEST_TOKEN || '',
      skillRef: 'skill_NyxtYFYir',
      services,
      translate,
      onQuitClick: () => {
        location.reload();
      },
      skin
    };
    render(
      <WebContext skin={skin} translate={identity}>
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
