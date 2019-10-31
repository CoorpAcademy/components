import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import noop from 'lodash/fp/noop';
import style from '../style.css'; // eslint-disable-line css-modules/no-unused-class
import Range from '..'; // eslint-disable-line no-shadow

browserEnv();
configure({adapter: new Adapter()});

const defaultEvent = {
  stopPropagation: noop,
  preventDefault: noop
};

test('should instanciate Range without props', t => {
  const component = <Range />;
  const slider = mount(component);
  const instance = slider.instance();
  instance.track.getBoundingClientRect = () => ({left: 0, right: 100});
  instance.handleMaxChange({srcEvent: defaultEvent, center: {}});
  slider.setProps({multi: true});
  instance.handleMaxChangeEnd({srcEvent: defaultEvent, center: {}});
  slider.unmount();
  t.pass();
});

const macro = (
  t,
  props,
  boundingRect,
  maxCenterEvent,
  maxExpected,
  minCenterEvent,
  minExpected
) => {
  t.plan(minExpected ? 4 : 2);

  const expectedChange = [maxExpected, minExpected];
  const validChange = value => {
    t.deepEqual(value, expectedChange.shift());
  };
  const expectedChangeEnd = [maxExpected, minExpected];
  const validChangeEnd = value => {
    t.deepEqual(value, expectedChangeEnd.shift());
  };

  const component = <Range {...props} onChange={validChange} onChangeEnd={validChangeEnd} />;
  const slider = mount(component);
  const instance = slider.instance();

  instance.track.getBoundingClientRect = () => boundingRect;

  instance.handleMaxChange({srcEvent: {...defaultEvent}, center: maxCenterEvent});
  instance.handleMaxChangeEnd({srcEvent: {...defaultEvent}, center: maxCenterEvent});
  if (minCenterEvent)
    instance.handleMinChange({srcEvent: {...defaultEvent}, center: minCenterEvent});
  if (minCenterEvent)
    instance.handleMinChangeEnd({srcEvent: {...defaultEvent}, center: minCenterEvent});
};

test('should instanciate Range', macro, {value: 0.5}, {left: 10, right: 110}, {x: 60}, 0.5);
test('should limit left hangle', macro, {value: 0.5}, {left: 10, right: 110}, {x: 0}, 0);
test('should limit right hangle', macro, {value: 0.5}, {left: 10, right: 110}, {x: 120}, 1);

test(
  'should instanciate multi Range',
  macro,
  {multi: true, value: [0, 1]},
  {left: 10, right: 110},
  {x: 60},
  [0, 0.5],
  {x: 20},
  [0.1, 1]
);
test(
  'should limit hangles',
  macro,
  {multi: true, value: [0, 1]},
  {left: 10, right: 110},
  {x: 120},
  [0, 1],
  {x: 0},
  [0, 1]
);
test(
  'should limit hangles 2',
  macro,
  {multi: true, value: [0.4, 0.6]},
  {left: 0, right: 100},
  {x: 30},
  [0.4, 0.6],
  {x: 70},
  [0.4, 0.6]
);

test('should move handle when range is clicked (single)', t => {
  t.plan(1);
  const onChange = value => {
    t.is(value, 0.2);
  };

  const wrapper = mount(<Range value={0.5} onChange={onChange} />);
  const instance = wrapper.instance();
  instance.track.getBoundingClientRect = () => ({left: 1000, right: 1100});
  wrapper.find(`.${style.containerWrapper}`).simulate('click', {...defaultEvent, clientX: 1020});
});

test('should move closest handle when range is clicked (multi)', t => {
  const expectedValues = [[0.2, 0.7], [0.2, 0.9], [0.4, 0.9], [0.4, 0.7], [0, 0.7], [0, 1]];
  t.plan(expectedValues.length);
  const onChange = value => {
    t.deepEqual(value, expectedValues.shift());
  };

  const wrapper = mount(<Range value={[0.3, 0.7]} onChange={onChange} multi />);
  const instance = wrapper.instance();
  instance.track.getBoundingClientRect = () => ({left: 1000, right: 1100});

  wrapper.find(`.${style.containerWrapper}`).simulate('click', {...defaultEvent, clientX: 1020});
  wrapper.setProps({value: [0.2, 0.7]});
  wrapper.find(`.${style.containerWrapper}`).simulate('click', {...defaultEvent, clientX: 1090});
  wrapper.setProps({value: [0.2, 0.9]});
  wrapper.find(`.${style.containerWrapper}`).simulate('click', {...defaultEvent, clientX: 1040});
  wrapper.setProps({value: [0.4, 0.9]});
  wrapper.find(`.${style.containerWrapper}`).simulate('click', {...defaultEvent, clientX: 1070});
  wrapper.setProps({value: [0.4, 0.7]});
  wrapper.find(`.${style.containerWrapper}`).simulate('click', {...defaultEvent, clientX: 1000});
  wrapper.setProps({value: [0, 0.7]});
  wrapper.find(`.${style.containerWrapper}`).simulate('click', {...defaultEvent, clientX: 1100});
});

test('should moveleft handle if the two handles have the same values and the click is on the left', t => {
  const onChange = value => {
    t.deepEqual(value, [0.4, 0.5]);
  };

  const wrapper = mount(<Range value={[0.5, 0.5]} onChange={onChange} multi />);
  const instance = wrapper.instance();
  instance.track.getBoundingClientRect = () => ({left: 0, right: 100});

  wrapper.find(`.${style.containerWrapper}`).simulate('click', {...defaultEvent, clientX: 40});
});

test('should move right handle if the two handles have the same values and the click is on the right', t => {
  const onChange = value => {
    t.deepEqual(value, [0.5, 0.6]);
  };

  const wrapper = mount(<Range value={[0.5, 0.5]} onChange={onChange} multi />);
  const instance = wrapper.instance();
  instance.track.getBoundingClientRect = () => ({left: 0, right: 100});

  wrapper.find(`.${style.containerWrapper}`).simulate('click', {...defaultEvent, clientX: 60});
});
