import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import correctClosed from './fixtures/correct-closed';
import PopinCorrection from '..';

browserEnv();
configure({adapter: new Adapter()});

test.cb('should open with transition', t => {
  const props = {onOpen: t.end, ...correctClosed.props};

  mount(<PopinCorrection {...props} />);
});
