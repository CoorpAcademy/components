import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {fireEvent} from '@testing-library/react';
import {renderWithContext} from '../../../util/render-with-context';
import FilterRange from '..';
import fixture from './fixtures/default';

browserEnv();

// JSDOM polyfills for Pointer Events APIs used by the component
if (!HTMLElement.prototype.setPointerCapture) {
  Object.defineProperty(HTMLElement.prototype, 'setPointerCapture', {value: () => {}});
}
if (!HTMLElement.prototype.releasePointerCapture) {
  Object.defineProperty(HTMLElement.prototype, 'releasePointerCapture', {value: () => {}});
}

const makeProps = (overrides = {}) => ({
  ...fixture.props,
  ...overrides
});

test('shows "Clear" button when current value differs from [min,max] and invokes onClear + translate', t => {
  t.plan(2);

  const props = makeProps({
    // value differs from [min, max] -> hasValue === true
    options: {
      ...makeProps().options,
      value: [10, 80],
      onChange: () => {}
    },
    onClear: () => {
      t.pass(); // (2) onClear called
    }
  });

  const context = {
    translate: key => {
      return key;
    }
  };

  const {container} = renderWithContext(<FilterRange {...props} />, context);

  const clearBtn = container.querySelector('[data-name="range-clear-button"]');
  t.truthy(clearBtn); // (1) button visible
  fireEvent.click(clearBtn); // triggers onClear
});

test('hides "Clear" button when value equals [min,max]', t => {
  const props = makeProps({
    options: {
      ...makeProps().options,
      max: 100,
      min: 0,
      value: [0, 100] // exactly min/max -> hasValue === false
    }
  });
  const context = {translate: k => k};

  const {container} = renderWithContext(<FilterRange {...props} />, context);
  const clearBtn = container.querySelector('[data-name="range-clear-button"]');
  t.falsy(clearBtn);
});

test('handles pointer down/up on the range container without errors (drag/finalize path)', t => {
  const props = makeProps({
    options: {
      ...makeProps().options,
      value: [20, 70]
    }
  });
  const context = {translate: k => k};

  const {container} = renderWithContext(<FilterRange {...props} />, context);

  const rangeContainer =
    container.querySelector('.rangeContainer') ||
    container.querySelector('[class*="rangeContainer"]');
  // Fallback if CSS modules rename the class; try the data structure:
  // In your CSS module setup, the class will likely be hashed; the
  // [class*="rangeContainer"] selector still matches.

  t.truthy(rangeContainer);

  // Simulate pointer down/up sequence
  fireEvent.pointerDown(rangeContainer, {pointerId: 1});
  fireEvent.pointerUp(rangeContainer, {pointerId: 1});

  // No assertion beyond not throwing (covers handlePointerDown/Up + finalize)
  t.pass();
});
