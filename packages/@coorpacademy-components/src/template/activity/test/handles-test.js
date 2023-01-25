import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {set} from 'lodash/fp';
import Button from '../../../atom/button';
import Select from '../../../atom/select';
import Activity from '..';
import defaultFixture from './fixtures/default';

browserEnv();
configure({adapter: new Adapter()});
const context = {
  skin: {
    common: {
      primary: '#FF7043',
      light: '#FF7043',
      dark: '#FF7043'
    }
  }
};

test('should call the onClick function with click on cta', t => {
  t.plan(3);

  const clickEvent = {preventDefault: () => t.pass(), stopPropagation: () => t.pass()};
  const props = set('recommendation.onClick', e => t.is(e, clickEvent), defaultFixture.props);
  const wrapper = shallow(<Activity {...props} />, {context});

  wrapper.find(Button).first().simulate('click', clickEvent);
});

test('should pass even if onClick function is undefined', t => {
  t.plan(2);

  const clickEvent = {preventDefault: () => t.pass(), stopPropagation: () => t.pass()};
  const props = set('recommendation.onClick', undefined, defaultFixture.props);
  const wrapper = shallow(<Activity {...props} />, {context});

  wrapper.find(Button).first().simulate('click', clickEvent);
});

test('should call onChange with the target value', t => {
  t.plan(1);

  const props = set(
    'themeFilter.onChange',
    ({target}) => t.is(target.value, 'foo'),
    defaultFixture.props
  );
  const wrapper = shallow(<Activity {...props} />, {context});

  wrapper
    .find(Select)
    .first()
    .simulate('change', {
      target: {
        value: 'foo',
        selectedOptions: []
      }
    });
});

test('should call the onClick function with click on engine tab', t => {
  t.plan(4);

  const clickEvent = {preventDefault: () => t.pass(), stopPropagation: () => t.pass()};
  const props = set(['engines', '2', 'onClick'], e => t.pass(), defaultFixture.props);
  const wrapper = mount(<Activity {...props} />, {context});
  const battleTab = wrapper.find('[data-engine="battle"]');
  t.is(battleTab.exists(), true);
  battleTab.simulate('click', clickEvent);
});

test('should not call the onClick function with click on engine tab if engine is disabled', t => {
  const clickEvent = {preventDefault: () => t.fail(), stopPropagation: () => t.fail()};
  const onClick = () => t.fail();
  const props = set(
    'engines[2]',
    {...defaultFixture.props.engines[2], onClick, disabled: true},
    defaultFixture.props
  );
  const wrapper = mount(<Activity {...props} />, {context});
  const battleTab = wrapper.find('[data-engine="battle"]');
  t.is(battleTab.exists(), true);
  battleTab.simulate('click', clickEvent);
});
