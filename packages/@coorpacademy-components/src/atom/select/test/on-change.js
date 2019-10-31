import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import defaultFixture from './fixtures/default';
import Select from '..';

browserEnv();
configure({adapter: new Adapter()});

test('should call onChange with the target value if multiple=false', t => {
  t.plan(1);
  const onChange = value => {
    t.is(value, 'foo');
  };
  const wrapper = shallow(<Select {...defaultFixture.props} onChange={onChange} />);

  wrapper.find('select').simulate('change', {
    target: {
      value: 'foo',
      selectedOptions: []
    }
  });
});

test("should call onChange with the selected options' target value if multiple=true", t => {
  t.plan(1);
  const onChange = value => {
    t.deepEqual(value, ['foo', 'bar']);
  };
  const wrapper = shallow(<Select {...defaultFixture.props} onChange={onChange} multiple />);

  wrapper.find('select').simulate('change', {
    target: {
      selectedOptions: [{value: 'foo'}, {value: 'bar'}]
    }
  });
});
