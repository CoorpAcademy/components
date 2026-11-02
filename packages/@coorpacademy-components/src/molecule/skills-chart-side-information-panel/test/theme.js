import test from 'ava';
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Panel from '..';
import style from '../style.css';
import Coorpmanager from './fixtures/coorpmanager';

configure({adapter: new Adapter()});

test('the coorpmanager theme lays the counters out as a full-width grid; no theme keeps the legacy panel', t => {
  const themed = shallow(<Panel {...Coorpmanager.props} />);
  t.true(themed.hasClass(style.sidePanel));
  t.true(themed.hasClass(style.coorpmanager));

  const legacy = shallow(<Panel {...Coorpmanager.props} theme={undefined} />);
  t.true(legacy.hasClass(style.sidePanel));
  t.false(legacy.hasClass(style.coorpmanager));
});
