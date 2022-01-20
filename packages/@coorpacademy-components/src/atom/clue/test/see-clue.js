import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {replace} from 'lodash/fp';
import style from '../style.css'; // eslint-disable-line css-modules/no-unused-class
import Clue from '..';
import Provider from '../../provider';
import defaultFixture from './fixtures/default';

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

test('should clue color is the primary color if color is defined on skin', t => {
  const context = {
    skin: {
      common: {
        primary: '#FF0000'
      }
    },
    translate: key => key
  };
  t.plan(1);
  const backStyle = `.${replace(' ', '.', style.back)}`;

  const wrapper = mount(
    <Provider {...context}>
      <Clue {...defaultFixture.props} />
    </Provider>
  );

  t.deepEqual(wrapper.find(backStyle).get(0).props.style, {
    backgroundColor: '#FF0000'
  });
});

test('should clue color is the fallback primary color if color not defined on skin', t => {
  const context = {
    skin: {
      common: {
        secondary: '#FF0000'
      }
    },
    translate: key => key
  };
  t.plan(1);
  const backStyle = `.${replace(' ', '.', style.back)}`;

  const wrapper = mount(
    <Provider {...context}>
      <Clue {...defaultFixture.props} />
    </Provider>
  );

  t.deepEqual(wrapper.find(backStyle).get(0).props.style, {
    backgroundColor: '#00B0FF'
  });
});
