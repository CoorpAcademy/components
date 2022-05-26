import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import PopinCorrection from '..';
import correctClosed from './fixtures/correct-closed';

browserEnv();
configure({adapter: new Adapter()});

test.cb('should open with transition', t => {
  const props = {onOpen: t.end, ...correctClosed.props};
  const context = {skin: {}};

  shallow(<PopinCorrection {...props} />, context);
});
