import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import replace from 'lodash/fp/replace';
import style from '../style.css'; // eslint-disable-line css-modules/no-unused-class
import defaultFixture from './fixtures/default';
import Clue from '..';

browserEnv();
configure({adapter: new Adapter()});

test('should See the clue', t => {
  const context = {
    skin: {},
    translate: key => key
  };
  t.plan(16);

  const clueCardStyle = `.${replace(' ', '.', style.clueCard)}`;
  const flipStyle = `.${replace(' ', '.', style.flip)}`;

  const loadingStyle = `.${replace(' ', '.', style.loading)}`;
  const backContentStyle = `.${replace(' ', '.', style.backContent)}`;

  const clueTextStyle = `.${replace(' ', '.', style.clueText)}`;

  const onClick = e => {
    t.pass();
  };

  const wrapper = mount(<Clue {...defaultFixture.props} onClick={onClick} />, {context});

  t.is(wrapper.find(clueCardStyle).exists(), true);
  t.is(wrapper.find(flipStyle).exists(), false);
  t.is(wrapper.find(loadingStyle).exists(), false);
  t.is(wrapper.find(backContentStyle).exists(), true);

  wrapper.find('a').simulate('click', {
    preventDefault: () => {},
    stopPropagation: () => {}
  });

  t.is(wrapper.find(clueCardStyle).exists(), true);
  t.is(wrapper.find(flipStyle).exists(), false);
  t.is(wrapper.find(loadingStyle).exists(), true);
  t.is(wrapper.find(backContentStyle).exists(), true);

  wrapper.setProps({text: 'This is the clue ...'});

  t.is(wrapper.find(clueTextStyle).text(), 'This is the clue ...');

  t.is(wrapper.find(clueCardStyle).exists(), true);
  t.is(wrapper.find(flipStyle).exists(), true);
  t.is(wrapper.find(loadingStyle).exists(), false);
  t.is(wrapper.find(backContentStyle).exists(), true);

  wrapper.setProps({text: ''});

  t.is(wrapper.find(clueTextStyle).text(), '');

  wrapper.setProps({text: 'This is the new clue ...'});

  t.is(wrapper.find(clueTextStyle).text(), 'This is the new clue ...');
});
