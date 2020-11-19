import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import {set} from 'lodash/fp';
import Adapter from 'enzyme-adapter-react-16';
import {wrappingComponent} from '../../../test/helpers/render-component';
import SetupSections from '..';
// eslint-disable-next-line css-modules/no-unused-class
import style from '../style.css';
import fixtures from './fixtures/default';

browserEnv();
configure({adapter: new Adapter()});

test('should trigger onDrop handler', t => {
  t.plan(14);

  const elementToDrag = fixtures.props.sections[0].id;
  const elementToDrop = fixtures.props.sections[2].id;

  const dropHandler = (dragged, dropped) => {
    t.is(dropped, elementToDrop);
    t.is(dragged, elementToDrag);
  };

  const wrapper = mount(<SetupSections {...fixtures.props} onDrop={dropHandler} />, {
    wrappingComponent
  });

  const dragStartEvent = {preventDefault: () => t.pass()};
  const dragOverEvent = {preventDefault: () => t.pass()};
  const dragLeaveEvent = {preventDefault: () => t.pass()};
  const dropEvent = {preventDefault: () => t.pass()};
  const instance = wrapper.instance();
  t.deepEqual(instance.state, {dragFrom: null, dragTo: null});

  wrapper.find(`.${style.section}`).at(0).simulate('dragStart', dragStartEvent);
  t.deepEqual(instance.state, {dragFrom: elementToDrag, dragTo: null});
  wrapper.find(`.${style.section}`).at(0).simulate('dragOver', dragOverEvent);
  t.deepEqual(instance.state, {dragFrom: elementToDrag, dragTo: elementToDrag});
  wrapper.find(`.${style.section}`).at(0).simulate('dragOver', dragOverEvent);
  t.deepEqual(instance.state, {dragFrom: elementToDrag, dragTo: elementToDrag});
  wrapper.find(`.${style.section}`).at(0).simulate('dragLeave', dragLeaveEvent);
  t.deepEqual(instance.state, {dragFrom: elementToDrag, dragTo: null});
  wrapper.find(`.${style.section}`).at(2).simulate('dragOver', dragOverEvent);
  t.deepEqual(instance.state, {dragFrom: elementToDrag, dragTo: elementToDrop});
  wrapper.find(`.${style.section}`).at(2).simulate('drop', dropEvent);
});

test('should skip drop event if dragStart is not called', t => {
  t.plan(1);

  const dropHandler = (dragged, dropped) => {
    t.fail();
  };

  const wrapper = mount(<SetupSections {...fixtures.props} onDrop={dropHandler} />, {
    wrappingComponent
  });

  const dropEvent = {preventDefault: () => t.pass()};
  wrapper.find(`.${style.section}`).at(2).simulate('drop', dropEvent);
});

test('should skip dragStart event if section id is not defined', t => {
  t.plan(2);
  const dropHandler = (dragged, dropped) => {
    t.fail();
  };

  const wrapper = mount(
    <SetupSections {...set('sections.0.id', '', fixtures.props)} onDrop={dropHandler} />,
    {
      wrappingComponent
    }
  );

  const dragStartEvent = {preventDefault: () => t.pass()};

  wrapper.find(`.${style.section}`).at(0).simulate('dragStart', dragStartEvent);
  const instance = wrapper.instance();
  t.deepEqual(instance.state, {dragFrom: '', dragTo: null});
});
