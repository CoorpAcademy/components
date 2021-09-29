import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Popin from '..';
import props from './fixtures/assistance';

browserEnv();
configure({adapter: new Adapter()});

test('should call the onChange function and check the input value', t => {
  t.plan(3);
  const wrapper = shallow(<Popin {...props.props} />);

  wrapper.find('input').simulate('change', {target: {name: 'object', value: 'test'}});
  t.is(wrapper.find('input').props().value, 'test');

  wrapper.find('textarea').simulate('change', {target: {name: 'message', value: 'test textarea'}});
  t.is(wrapper.find('textarea').props().value, 'test textarea');

  const contactEmailInput = wrapper.find('[data-name="contact-email"]');
  contactEmailInput.simulate('change', {target: {name: 'email', value: 'test contact email'}});
  t.is(contactEmailInput.props().value, 'test contact email');
});
