import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {set, replace} from 'lodash/fp';
import {mount, shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import style from '../style.css'; // eslint-disable-line css-modules/no-unused-class
import ExternalCourse from '..';
import fixture from './fixtures/default';

browserEnv();
configure({adapter: new Adapter()});

test('should call complete onClick', t => {
  t.plan(4);

  const completeCtaStyle = `.${replace(' ', '.', style.completeCta)}`;

  const clickEvent = {preventDefault: () => t.pass(), stopPropagation: () => t.pass()};
  const props = set('complete.onClick', e => t.pass(), fixture.props);

  const wrapper = shallow(<ExternalCourse {...props} />);

  t.is(wrapper.find(completeCtaStyle).exists(), true);
  wrapper.find(completeCtaStyle).simulate('click', clickEvent);
});

test('should call quit onClick', t => {
  t.plan(4);

  const quitCtaStyle = `.${replace(' ', '.', style.quitCta)}`;

  const clickEvent = {preventDefault: () => t.pass(), stopPropagation: () => t.pass()};
  const props = set('quit.onClick', e => t.pass(), fixture.props);
  const wrapper = mount(<ExternalCourse {...props} />);

  t.is(wrapper.find(quitCtaStyle).exists(), true);
  wrapper.find(quitCtaStyle).simulate('click', clickEvent);
});

test('should call warning onClick', t => {
  t.plan(4);

  const linkStyle = `.${replace(' ', '.', style.link)}`;

  const clickEvent = {preventDefault: () => t.pass(), stopPropagation: () => t.pass()};
  const props = set('warning.onClick', e => t.pass(), fixture.props);
  const wrapper = shallow(<ExternalCourse {...props} />);

  t.is(wrapper.find(linkStyle).exists(), true);
  wrapper.find(linkStyle).simulate('click', clickEvent);
});
