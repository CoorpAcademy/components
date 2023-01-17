import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import {once} from 'lodash/fp';
import BrandCreateForm from '..';

browserEnv();
configure({adapter: new Adapter()});

test('should submit form', t => {
  const context = {
    translate: key => key
  };

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
  const wrapper = mount(<BrandCreateForm {...props} />, {context});
  t.is(wrapper.find('input[type="submit"]').length, 1);
  wrapper.find('input[type="submit"]').simulate('submit');
});
