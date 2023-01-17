import test from 'ava';
import {EventEmitter} from 'node:events';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {noop} from 'lodash/fp';
import Range from '..';

const defaultEvent = {
  stopPropagation: noop,
  preventDefault: noop
};

const createFakeHammer = t => {
  const fakeHammer = new EventEmitter();
  fakeHammer.stop = () => t.pass();
  fakeHammer.destroy = () => t.pass();

  return fakeHammer;
};

browserEnv();

test('should instanciate Range without props', t => {
  const component = <Range />;
  const {getByTestId, unmount, rerender} = render(component);
  const track = getByTestId('track');
  track.getBoundingClientRect = () => ({left: 0, right: 100});
  rerender(<Range multi />);
  unmount();
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
  t.plan(props.multi ? 8 : 4);

  const HammerForTestingMin = createFakeHammer(t);
  const HammerForTestingMax = createFakeHammer(t);

  const expectedChange = [maxExpected, minExpected];
  const validChange = value => {
    t.deepEqual(value, expectedChange.shift());
  };
  const expectedChangeEnd = [maxExpected, minExpected];

  const validChangeEnd = value => {
    t.deepEqual(value, expectedChangeEnd.shift());
  };

  const component = (
    <Range
      {...props}
      HammerForTestingMin={HammerForTestingMin}
      HammerForTestingMax={HammerForTestingMax}
      onChange={validChange}
      onChangeEnd={validChangeEnd}
    />
  );

  const {getByTestId, unmount} = render(component);

  const track = getByTestId('track');
  track.getBoundingClientRect = () => boundingRect;

  HammerForTestingMax.emit('panleft panright', {
    srcEvent: {...defaultEvent},
    center: maxCenterEvent
  });

  HammerForTestingMax.emit('panend', {srcEvent: {...defaultEvent}, center: maxCenterEvent});

  if (minCenterEvent) {
    HammerForTestingMin.emit('panleft panright', {
      srcEvent: {...defaultEvent},
      center: minCenterEvent
    });

    HammerForTestingMin.emit('panend', {srcEvent: {...defaultEvent}, center: minCenterEvent});
  }

  unmount();
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
  'should limit handles',
  macro,
  {multi: true, value: [0, 1]},
  {left: 10, right: 110},
  {x: 120},
  [0, 1],
  {x: 0},
  [0, 1]
);
test(
  'should limit handles 2',
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

  const component = <Range value={0.5} onChange={onChange} />;

  const {getByTestId, unmount} = render(component);

  const track = getByTestId('track');
  track.getBoundingClientRect = () => ({left: 1000, right: 1100});

  const slider = getByTestId('slider');
  fireEvent.click(slider, {...defaultEvent, clientX: 1020});

  unmount();
});

test('should move closest handle when range is clicked (multi)', t => {
  const expectedValues = [
    [0.2, 0.7],
    [0.2, 0.9],
    [0.4, 0.9],
    [0.4, 0.7],
    [0, 0.7],
    [0, 1]
  ];
  t.plan(expectedValues.length);
  const onChange = value => {
    const expectedValue = expectedValues.shift();
    t.deepEqual(value, expectedValue);
  };

  const {getByTestId, rerender, unmount} = render(
    <Range value={[0.3, 0.7]} onChange={onChange} multi />
  );

  const track = getByTestId('track');
  track.getBoundingClientRect = () => ({left: 1000, right: 1100});

  const slider = getByTestId('slider');
  fireEvent.click(slider, {...defaultEvent, clientX: 1020});

  rerender(<Range value={[0.2, 0.7]} onChange={onChange} multi />);
  fireEvent.click(slider, {...defaultEvent, clientX: 1090});

  rerender(<Range value={[0.2, 0.9]} onChange={onChange} multi />);
  fireEvent.click(slider, {...defaultEvent, clientX: 1040});

  rerender(<Range value={[0.4, 0.9]} onChange={onChange} multi />);
  fireEvent.click(slider, {...defaultEvent, clientX: 1070});

  rerender(<Range value={[0.4, 0.7]} onChange={onChange} multi />);
  fireEvent.click(slider, {...defaultEvent, clientX: 1000});

  rerender(<Range value={[0, 0.7]} onChange={onChange} multi />);
  fireEvent.click(slider, {...defaultEvent, clientX: 1100});

  unmount();
});

test('should moveleft handle if the two handles have the same values and the click is on the left', t => {
  const onChange = value => {
    t.deepEqual(value, [0.4, 0.5]);
  };

  const {getByTestId, unmount} = render(<Range value={[0.5, 0.5]} onChange={onChange} multi />);

  const track = getByTestId('track');
  track.getBoundingClientRect = () => ({left: 0, right: 100});

  const slider = getByTestId('slider');
  fireEvent.click(slider, {...defaultEvent, clientX: 40});

  unmount();
});

test('should move right handle if the two handles have the same values and the click is on the right', t => {
  const onChange = value => {
    t.deepEqual(value, [0.5, 0.6]);
  };

  const {getByTestId, unmount} = render(<Range value={[0.5, 0.5]} onChange={onChange} multi />);

  const track = getByTestId('track');
  track.getBoundingClientRect = () => ({left: 0, right: 100});

  const slider = getByTestId('slider');
  fireEvent.click(slider, {...defaultEvent, clientX: 60});

  unmount();
});
