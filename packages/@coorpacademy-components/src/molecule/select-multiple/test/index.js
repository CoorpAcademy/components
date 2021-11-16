import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SelectMultiple from '..';
import defaultFixture from './fixtures/checked';

browserEnv();
configure({adapter: new Adapter()});

test('should select array of choices when props.multiple is set', t => {
  t.plan(2);
  const props = {
    ...defaultFixture.props,
    multiple: true,
    onChange: choices => {
      t.true(Array.isArray(choices), 'dffdff');
      t.pass();
    }
  };

  const wrapper = mount(<SelectMultiple {...props} />);

  wrapper.update();

  const checkbox = wrapper.find('[checked=false]').first();

  checkbox.simulate('change', {props});
});

