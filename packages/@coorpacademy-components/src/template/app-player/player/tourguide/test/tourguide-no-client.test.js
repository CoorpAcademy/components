import test from 'ava';
import React from 'react';
import {render, cleanup} from '@testing-library/react';

test('does not create a client when TourGuideClient is unavailable', t => {
  const tourguideLibPath = require.resolve('@sjmc11/tourguidejs');
  const modulePath = require.resolve('..');

  const originalLib = require.cache[tourguideLibPath];
  const originalModule = require.cache[modulePath];

  try {
    require.cache[tourguideLibPath] = {
      id: tourguideLibPath,
      filename: tourguideLibPath,
      loaded: true,
      exports: {TourGuideClient: undefined}
    };
    if (originalModule) {
      delete require.cache[modulePath];
    }

    const {default: TourGuideManager} = require('..');

    t.notThrows(() => {
      const {unmount} = render(<TourGuideManager steps={[{target: 'body', content: 'Hi'}]} />);
      unmount();
      cleanup();
    });
  } finally {
    if (originalLib) {
      require.cache[tourguideLibPath] = originalLib;
    } else {
      delete require.cache[tourguideLibPath];
    }
    if (originalModule) {
      require.cache[modulePath] = originalModule;
    } else {
      delete require.cache[modulePath];
    }
  }
});
