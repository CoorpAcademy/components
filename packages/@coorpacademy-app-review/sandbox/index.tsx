import React from 'react';
import {render} from 'react-dom';
import isNil from 'lodash/fp/isNil';
import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import createTranslate from '@coorpacademy/translate';
import {WebContext} from '@coorpacademy/components/es/atom/provider';
import localesComponents from '@coorpacademy/components/locales/en/global.json';
import localesAppReview from '../locales/en/review.json';
import AppReview from '../src';
import {services} from '../src/test/util/services.mock';
import type {AppOptions} from '../src/types/common';

type SandboxOptions = {
  container: string;
};

declare global {
  // eslint-disable-next-line no-shadow
  interface Window {
    createSandbox?: (sandboxOptions: SandboxOptions) => void;
  }
}

const translate = (key: string, data: string): string => {
  try {
    return createTranslate({
      ...localesAppReview,
      ...localesComponents
    })(key, data);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return createTranslate({[key]: key})(key, data);
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

    // mode mobile/web
    const appOptions: AppOptions = {
      token: process.env.API_TEST_TOKEN || '',
      skillRef: '123',
      services,
      translate,
      onQuitClick: () => {
        location.reload();
      },
      url: process.env.LAMBDA_API_REVIEW_GET_SLIDES_URL || 'http://localhost:7006'
    };
    const skin = {
      common: {
        primary: '#248e59'
      }
    };

    render(
      <WebContext skin={skin} translate={translate}>
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
