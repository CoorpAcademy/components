import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {mount} from 'enzyme';
import correctClosed from './fixtures/correct-closed';
import PopinCorrection from '..';

test.cb('should open with transition', t => {
  const props = {onOpen: t.end, ...correctClosed.props};

  mount(<PopinCorrection {...props} />);
});
