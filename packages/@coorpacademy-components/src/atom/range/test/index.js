import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {mount} from 'enzyme';
import Range from '..'; // eslint-disable-line no-shadow

const macro = (t, props, boundingRect, maxSrcEvent, maxExpected, minSrcEvent, minExpected) => {
  t.plan(minExpected ? 2 : 1);

  const expected = [maxExpected, minExpected];
  const valideChange = value => {
    t.deepEqual(value, expected.shift());
  };

  const component = <Range {...props} onChange={valideChange} />;
  const slider = mount(component);
  const instance = slider.instance();

  instance.track.getBoundingClientRect = () => boundingRect;

  instance.handleMaxChange({srcEvent: maxSrcEvent});
  if (minSrcEvent) instance.handleMinChange({srcEvent: minSrcEvent});
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
  [0.1, 0.5]
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
  'should limit hangles',
  macro,
  {multi: true, value: [0, 1]},
  {left: 10, right: 110},
  {x: 60},
  [0, 0.5],
  {x: 70}
);

test("should apply props's value on simple range", t => {
  const component = <Range />;
  const slider = mount(component);
  const instance = slider.instance();

  instance.track.getBoundingClientRect = () => ({left: 0, right: 100});
  instance.handleMaxChange({srcEvent: {x: 50}});

  t.deepEqual(slider.state().value, [0, 0.5]);
  slider.setProps({value: 1});
  t.deepEqual(slider.state().value, [0, 1]);

  slider.unmount();
});

test("should apply props's value on multi range", t => {
  const component = <Range multi />;
  const slider = mount(component);
  const instance = slider.instance();

  instance.track.getBoundingClientRect = () => ({left: 0, right: 100});
  instance.handleMaxChange({srcEvent: {x: 50}});

  t.deepEqual(slider.state().value, [0, 0.5]);
  slider.setProps({value: [0, 1]});
  t.deepEqual(slider.state().value, [0, 1]);

  slider.unmount();
});
