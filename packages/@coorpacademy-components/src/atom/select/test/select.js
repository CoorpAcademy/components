import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {mount, configure} from 'enzyme';
import cloneDeep from 'lodash/fp/cloneDeep';
import noop from 'lodash/fp/noop';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Select from '..';
import playerFixture from './fixtures/player';

browserEnv();
configure({adapter: new Adapter()});

test('classnames: should pass the styles pertinent to a player theme, text color: use skin color (selected, valid option, player)', t => {
  const wrapper = mount(<Select {...playerFixture.props} onChange={noop} />);
  const selectWrapper = wrapper.find('[data-name="select-wrapper"]');
  t.true(selectWrapper.at(0).exists());
  // should use skin color
  t.deepEqual(selectWrapper.at(0).props().style, {
    color: '#00B0FF'
  });
  const selectSpan = selectWrapper.at(0).find('[data-name="select-span"]');
  t.true(selectSpan.at(0).exists());
  t.is(selectSpan.at(0).props().className, 'select__selectSpan select__noLabelCommon');
});

test('text color: should not use skin color (selected, invalid option, player), long label', t => {
  const withInvalid = cloneDeep(playerFixture.props);
  withInvalid.options[1] = {
    name: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean.',
    value: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean.',
    selected: true,
    validOption: false
  };
  const wrapper = mount(<Select {...withInvalid} onChange={noop} />);
  const selectWrapper = wrapper.find('[data-name="select-wrapper"]');
  t.true(selectWrapper.at(0).exists());
  // should not use skin color
  t.deepEqual(selectWrapper.at(0).props().style, {});
  const selectSpan = selectWrapper.at(0).find('[data-name="select-span"]');
  t.true(selectSpan.at(0).exists());
  t.is(
    selectSpan.at(0).props().className,
    'select__selectSpan select__noLabelCommon select__longLabel'
  );
});
