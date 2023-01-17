import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import {wrappingComponent} from '../../../test/helpers/render-component';
import ExternalContentButton from '..';

browserEnv();
configure({adapter: new Adapter()});

test('should call the onClick function', t => {
  t.plan(3);

  const clickEvent = {preventDefault: () => t.pass(), stopPropagation: () => t.pass()};
  const props = {
    onClick: () => t.pass(),
    type: 'video'
  };

  const wrapper = mount(<ExternalContentButton {...props} />, {wrappingComponent});
  wrapper.simulate('click', clickEvent);
});
