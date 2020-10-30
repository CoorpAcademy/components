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
  t.plan(6);

  const elementToDrag = fixtures.props.sections[0].id;
  const elementToDrop = fixtures.props.sections[2].id;

  const dropHandler = (dragged, dropped) => {
    t.is(dragged, elementToDrag);
    t.is(dropped, elementToDrop);
  };

  const wrapper = mount(<SetupSections {...fixtures.props} onDrop={dropHandler} />, {
    wrappingComponent
  });

  const dragStartEvent = {
    dataTransfer: {
      setData: (type, value) => {
        t.is(type, 'text');
        t.is(value, elementToDrag);
      }
    }
  };
  const dragOverEvent = {
    preventDefault: () => t.pass()
  };
  const dropEvent = {
    dataTransfer: {
      getData: type => {
        t.is(type, 'text');
        return elementToDrag;
      }
    }
  };
  wrapper.find(`.${style.section}`).at(0).simulate('dragStart', dragStartEvent);
  wrapper.find(`.${style.section}`).at(0).simulate('dragOver', dragOverEvent);
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

  const dropEvent = {
    dataTransfer: {
      getData: type => {
        t.is(type, 'text');
        return;
      }
    }
  };
  wrapper.find(`.${style.section}`).at(2).simulate('drop', dropEvent);
});

test('should skip dragStart event if section id is not defined', t => {
  t.plan(0);

  const dropHandler = (dragged, dropped) => {
    t.fail();
  };

  const wrapper = mount(
    <SetupSections {...set('sections.0.id', '', fixtures.props)} onDrop={dropHandler} />,
    {
      wrappingComponent
    }
  );

  const dragStartEvent = {};

  wrapper.find(`.${style.section}`).at(0).simulate('dragStart', dragStartEvent);
});
