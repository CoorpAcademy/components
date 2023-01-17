import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {mount, configure} from 'enzyme';
import {set} from 'lodash/fp';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import {wrappingComponent} from '../../../test/helpers/render-component';
import SetupSections from '..';
// eslint-disable-next-line css-modules/no-unused-class
import style from '../../draggable/style.css';
import fixtures from './fixtures/dashboard-sections';

browserEnv();
configure({adapter: new Adapter()});

test('should trigger onDrop handler', t => {
  t.plan(7);

  const elementToDrag = fixtures.props.items[0].id;
  const elementToDrop = fixtures.props.items[2].id;

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

  wrapper.find(`.${style.draggable}`).at(0).simulate('dragStart', dragStartEvent);
  wrapper.find(`.${style.draggable}`).at(0).simulate('dragOver', dragOverEvent);
  wrapper.find(`.${style.draggable}`).at(0).simulate('dragOver', dragOverEvent);
  wrapper.find(`.${style.draggable}`).at(0).simulate('dragLeave', dragLeaveEvent);
  wrapper.find(`.${style.draggable}`).at(2).simulate('dragOver', dragOverEvent);
  wrapper.find(`.${style.draggable}`).at(2).simulate('drop', dropEvent);
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
  wrapper.find(`.${style.draggable}`).at(2).simulate('drop', dropEvent);
});

test('should skip dragStart event if section id is not defined', t => {
  t.plan(0);

  const dropHandler = (dragged, dropped) => {
    t.fail();
  };

  const wrapper = mount(
    <SetupSections {...set('items.0.id', '', fixtures.props)} onDrop={dropHandler} />,
    {
      wrappingComponent
    }
  );

  const dragStartEvent = {preventDefault: () => {}};
  const dragOverEvent = {preventDefault: () => {}};
  const dragLeaveEvent = {preventDefault: () => {}};
  const dropEvent = {preventDefault: () => {}};

  wrapper.find(`.${style.draggable}`).at(0).simulate('dragStart', dragStartEvent);
  wrapper.find(`.${style.draggable}`).at(0).simulate('dragOver', dragOverEvent);
  wrapper.find(`.${style.draggable}`).at(0).simulate('dragOver', dragOverEvent);
  wrapper.find(`.${style.draggable}`).at(0).simulate('dragLeave', dragLeaveEvent);
  wrapper.find(`.${style.draggable}`).at(2).simulate('dragOver', dragOverEvent);
  wrapper.find(`.${style.draggable}`).at(2).simulate('drop', dropEvent);
});
