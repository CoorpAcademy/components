import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render} from '@testing-library/react';
import PopinCorrection from '..';
import correctClosed from './fixtures/correct-closed';

browserEnv();

test('should open with transition', async t => {
  t.plan(1);
  await new Promise(resolve => {
    const props = {
      onOpen: () => {
        t.pass();
        resolve();
      },
      ...correctClosed.props
    };
    const context = {skin: {}};

    render(<PopinCorrection {...props} />, context);
  });
});
