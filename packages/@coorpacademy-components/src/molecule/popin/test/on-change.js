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
  const wrapper = shallow(<Popin {...props.props} />);

  const contactObjectInput = wrapper.find('[data-name="contact-object"]');
  t.truthy(contactObjectInput);
  contactObjectInput.simulate('change', {target: {name: 'object', value: 'test'}});
  t.is(wrapper.find('[data-name="contact-object"]').props().value, 'test');

  const contactMessageInput = wrapper.find('[data-name="contact-message"]');
  t.truthy(contactMessageInput);
  contactMessageInput.simulate('change', {target: {name: 'message', value: 'test textarea'}});
  t.is(wrapper.find('[data-name="contact-message"]').props().value, 'test textarea');

  const contactEmailInput = wrapper.find('[data-name="contact-email"]');
  t.truthy(contactEmailInput);
  contactEmailInput.simulate('change', {target: {name: 'email', value: 'test contact email'}});
  t.is(wrapper.find('[data-name="contact-email"]').props().value, 'test contact email');
});
