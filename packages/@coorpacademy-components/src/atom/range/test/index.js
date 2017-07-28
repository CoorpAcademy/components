import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {mount} from 'enzyme';
import set from 'lodash/fp/set';
import RangeSlider from '..';

const steps = [
  {
    label: '1mn',
    value: 1
  },
  {
    label: '2mn',
    value: 2
  },
  {
    label: '3mn',
    value: 3
  },
  {
    label: '4mn',
    value: 4
  },
  {
    label: '5mn',
    value: 5
  },
  {
    label: '6mn',
    value: 6
  },
  {
    label: '7mn',
    value: 7
  },
  {
    label: '8mn',
    value: 8
  }
];

const mouseDown = (slider, handle, x) => {
  slider.setState((previousState, currentProps) => set([handle, 'panStart'], x, previousState));
};

const setWidth = (slider, width) => {
  slider.setState((previousState, currentProps) => set(['railWidth'], width, previousState));
  slider.instance().refreshMinMax(width);
};

const mountRangeSlider = (props, width) => {
  const component = <RangeSlider {...props} />;
  const slider = mount(component);
  slider.instance().initHandlesPositions(width);
  setWidth(slider, width);
  return slider;
};

test('should snap to steps onDragStop', t => {
  const props = {steps};
  const width = 500;
  const slider = mountRangeSlider(props, width);

  const startX = 12;
  mouseDown(slider, 'handleMin', startX);

  const handles = slider.find('[data-name="handle"]');
  t.is(handles.length, 2);

  const mockEvent = {
    deltaX: 122,
    isFinal: true,
    isFirst: false,
    pointerType: 'mouse',
    type: 'panend'
  };

  /* ondrag */
  slider.instance().setX('handleMin')(mockEvent);
  let state = slider.state();
  t.is(state.handleMin.x, mockEvent.deltaX + startX);
  t.is(state.handleMin.min, 0);
  t.is(state.handleMin.max, width);
  t.is(state.handleMin.panStart, startX);
  t.is(state.handleMin.step, 2);

  /* onDragStop */
  slider.instance().handlePanEnd('handleMin')(mockEvent);
  state = slider.state();
  t.is(state.handleMin.x, 142.85714285714286);
  t.is(state.handleMin.min, 0);
  t.is(state.handleMin.max, width);
  t.is(state.handleMin.panStart, startX);
  t.is(state.handleMin.step, 2);

  slider.unmount();
});

test('should set panStart', t => {
  const width = 500;
  const x = 200;
  const props = {};
  const slider = mountRangeSlider(props, width);

  slider.instance().handlePanStart('handle')({
    target: {
      offsetLeft: x
    }
  });

  const state = slider.state();
  t.is(state.handle.panStart, x);
  slider.unmount();
});

test('should call onDrag and onDragEnd passed within props', t => {
  t.plan(2);

  const startX = 100;
  const deltaX = 33;
  const width = 500;

  const props = {
    onDrag: state => {
      t.is(state.handleMin.x, startX + deltaX);
    },
    onDragEnd: state => {
      t.is(state.handleMin.x, startX + deltaX);
    }
  };

  const slider = mountRangeSlider(props, width);

  slider.instance().handlePanStart('handleMin')({
    target: {
      offsetLeft: startX
    }
  });

  slider.instance().setX('handleMin')({
    deltaX
  });

  slider.instance().handlePanEnd('handleMin')({
    deltaX
  });

  slider.unmount();
});

test('should refresh handles positions on rail width change', t => {
  const width = 500;
  const newWidth = 888;
  const ratio = newWidth / width;

  const startMin = 100;
  const startMax = 200;
  const props = {
    handleMin: {x: startMin},
    handle: {x: startMax}
  };
  const slider = mountRangeSlider(props, width);
  let state = slider.state();
  t.is(state.handleMin.x, startMin);
  t.is(state.handleMax.x, startMax);

  const instance = slider.instance();
  instance.railWidth = () => newWidth;
  instance.updatePositions();

  state = slider.state();
  t.is(state.railWidth, newWidth);
  t.is(state.handleMin.x, startMin * ratio);
  t.is(state.handleMax.x, startMax * ratio);
  t.is(state.handleMin.max, state.handleMax.x);
  t.is(state.handleMax.min, state.handleMin.x);

  slider.unmount();
});

test('should limit right handle', t => {
  const width = 500;
  const startMax = 250;
  const props = {
    handle: {x: startMax}
  };

  const slider = mountRangeSlider(props, width);
  let state = slider.state();
  t.is(state.handleMax.x, startMax);

  mouseDown(slider, 'handle', startMax);

  /* drag */
  slider.instance().setX('handle')({
    deltaX: 300,
    isFinal: true,
    isFirst: false,
    pointerType: 'mouse',
    type: 'panend'
  }); // --> x = 250 + 300 > 500 = snap to right limit

  state = slider.state();
  t.is(state.handle.x, width);

  slider.unmount();
});

test('should limit left handle', t => {
  const width = 500;
  const startMin = 150;
  const props = {
    handleMin: {x: startMin}
  };

  const slider = mountRangeSlider(props, width);
  let state = slider.state();
  t.is(state.handleMin.x, startMin);

  mouseDown(slider, 'handleMin', startMin);

  /* drag */
  slider.instance().setX('handleMin')({
    deltaX: -300,
    isFinal: true,
    isFirst: false,
    pointerType: 'mouse',
    type: 'panend'
  }); // --> x = 150 - 300 < 0 = snap to left limit

  state = slider.state();
  t.is(state.handleMin.x, 0);

  slider.unmount();
});
