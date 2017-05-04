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

const mockEvent = {
  deltaX: 122,
  isFinal: true,
  isFirst: false,
  pointerType: 'mouse',
  type: 'panend'
};

const mouseDown = (slider, handle, x) => {
  slider.setState((previousState, currentProps) =>
    set(
      [`handle${handle}`, 'panStart'],
      x,
      previousState
    )
  );
};

const setWidth = (slider, width) => {
  slider.setState((previousState, currentProps) =>
    set(
      ['railWidth'],
      width,
      previousState
    )
  );

  slider.instance().refreshMinMax(width);
};

test('mount RangeSlider with enzyme', t => {
  const component = <RangeSlider steps={steps} />;
  const slider = mount(component);
  const width = 500;
  const startX = 12;

  slider.instance().initHandlesPositions(500);
  setWidth(slider, 500);
  mouseDown(slider, 1, 12);

  const handles = slider.find('[data-name="handle"]');
  t.is(handles.length, 2);

  /* ondrag */
  slider.instance().setX(1)(mockEvent);
  let state = slider.state();
  t.is(state.handle1.x, mockEvent.deltaX + startX);
  t.is(state.handle1.min, 0);
  t.is(state.handle1.max, width);
  t.is(state.handle1.panStart, startX);
  t.is(state.handle1.step, 2);

  /* onDragStop */
  slider.instance().setX(1, true)(mockEvent);
  state = slider.state();
  t.is(state.handle1.x, 142.85714285714286);
  t.is(state.handle1.min, 0);
  t.is(state.handle1.max, width);
  t.is(state.handle1.panStart, startX);
  t.is(state.handle1.step, 2);
});
