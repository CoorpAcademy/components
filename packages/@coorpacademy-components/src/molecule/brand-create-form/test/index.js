import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {mount} from 'enzyme';
import once from 'lodash/fp/once';
import BrandCreateForm from '..';

test('should submit form', t => {
  t.plan(2);
  const props = {
    title: 'title',
    subtitle: 'subtitle',
    description: 'description',
    field: {
      placeholder: 'placeholder',
      label: 'label',
      onChange: () => {}
    },
    onSubmit: once(() => {
      t.pass();
    }),
    submitValue: 'save',
    isModified: true
  };
  const wrapper = mount(<BrandCreateForm {...props} />);
  t.is(wrapper.find('input[type="submit"]').length, 1);
  wrapper.find('input[type="submit"]').simulate('submit');
});
