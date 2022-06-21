import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {replace} from 'lodash/fp';
import {mount, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {wrappingComponent} from '../../../test/helpers/render-component';
import style from '../style.css'; // eslint-disable-line css-modules/no-unused-class
import uploadReportStyle from '../upload-report.css'; // eslint-disable-line css-modules/no-unused-class
import DragDrop from '..';
import readyFixture from './fixtures/ready';

browserEnv();
configure({adapter: new Adapter()});

test('should call the onBack function', t => {
  t.plan(4);

  const clickEvent = {preventDefault: () => t.pass(), stopPropagation: () => t.pass()};
  const props = {
    ...readyFixture.props,
    onBack: () => t.pass()
  };
  const backStyle = `.${replace(' ', '.', style.back)}`;
  const wrapper = mount(<DragDrop {...props} />, {wrappingComponent});

  t.is(wrapper.find(backStyle).exists(), true);

  wrapper.find(backStyle).simulate('click', clickEvent);
});

test('should call the onDelete function', t => {
  t.plan(7);

  const clickEvent = {preventDefault: () => t.pass(), stopPropagation: () => t.pass()};
  const props = {
    ...readyFixture.props,
    onDelete: () => t.pass()
  };
  const deleteButtonStyle = `.${replace(' ', '.', uploadReportStyle.trashIcon)}`;
  const wrapper = mount(<DragDrop {...props} />, {wrappingComponent});

  t.is(wrapper.find(deleteButtonStyle).exists(), true);

  wrapper.find(deleteButtonStyle).simulate('click', clickEvent);
});
