import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import PopinCorrection from '..';
import correctClosed from './fixtures/correct-closed';

browserEnv();
configure({adapter: new Adapter()});

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

    shallow(<PopinCorrection {...props} />, context);
  });
});
