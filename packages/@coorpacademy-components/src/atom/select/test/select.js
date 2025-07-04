import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import cloneDeep from 'lodash/fp/cloneDeep';
import noop from 'lodash/fp/noop';
import {fireEvent, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from '..';
import playerFixture from './fixtures/player';
import defaultFixture from './fixtures/default';
import disabledFixture from './fixtures/disabled';

browserEnv();

// setup document mocking for userEvent
document.getSelection = () => {
  return {
    addRange: () => {},
    removeAllRanges: () => {}
  };
};

document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  cloneRange: () => {},
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document
  }
});

test('classnames: should pass the styles pertinent to a player theme, text color: use skin color (selected, valid option, player)', t => {
  const {getByTestId, unmount} = render(<Select {...playerFixture.props} onChange={noop} />);
  const selectWrapper = getByTestId('select-wrapper');
  t.truthy(selectWrapper);
  // should use skin color
  t.is(window.getComputedStyle(selectWrapper)._values.color, 'rgb(0, 176, 255)');
  const selectSpan = getByTestId('select-span');
  t.truthy(selectSpan);
  t.is(selectSpan.className, 'select__selectSpan select__noLabelCommon');

  unmount();
});

test('text color: should not use skin color (selected, invalid option, player), long label', t => {
  const withInvalid = cloneDeep(playerFixture.props);
  withInvalid.options[1] = {
    name: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean.',
    value: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean.',
    selected: true,
    validOption: false
  };
  const {getByTestId, unmount} = render(<Select {...withInvalid} onChange={noop} />);
  const selectWrapper = getByTestId('select-wrapper');
  t.truthy(selectWrapper);
  // should not use skin color
  t.is(window.getComputedStyle(selectWrapper)._values.color, undefined);

  const selectSpan = getByTestId('select-span');
  t.truthy(selectSpan);
  t.is(selectSpan.className, 'select__selectSpan select__noLabelCommon select__longLabel');

  unmount();
});

test('after onClick, arrow up icon should be shown, then arrow down on blur/mouse leave', async t => {
  const {getByTestId, unmount} = render(<Select {...defaultFixture.props} />);

  const user = userEvent.setup({document});
  const nativeSelect = getByTestId('native-select');

  try {
    await user.selectOptions(nativeSelect, 'Pouet3');
  } catch (e) {
    // hitting something like https://github.com/testing-library/user-event/issues/278
    // RangeError: Maximum call stack size exceeded
    // BUT the select was successful
    if (!e.message.includes('Maximum call stack size exceeded')) {
      throw e;
    }
  }

  t.truthy(getByTestId('select-arrow-up-icon'));

  fireEvent.mouseLeave(nativeSelect);
  t.truthy(getByTestId('select-arrow-down-icon'));

  try {
    await user.selectOptions(nativeSelect, 'Pouet3');
  } catch (e) {
    // hitting something like https://github.com/testing-library/user-event/issues/278
    // RangeError: Maximum call stack size exceeded
    // BUT the select was successful
    if (!e.message.includes('Maximum call stack size exceeded')) {
      throw e;
    }
  }

  t.truthy(getByTestId('select-arrow-up-icon'));

  fireEvent.blur(nativeSelect);
  t.truthy(getByTestId('select-arrow-down-icon'));

  unmount();
});

test('disabled select should not change arrow icon on click and should not call onChange', async t => {
  let onChangeCalled = false;
  const handleOnChange = () => {
    onChangeCalled = true;
  };

  const {getByTestId, container} = render(
    <Select {...disabledFixture.props} onChange={handleOnChange} />
  );

  const user = userEvent.setup({document});
  const nativeSelect = getByTestId('native-select');

  // Check that the select is disabled
  t.true(nativeSelect.disabled);

  // Check that disabled class is applied
  const selectDiv = container.querySelector('.select__disabled');
  t.truthy(selectDiv);

  // Arrow should be down initially
  t.truthy(getByTestId('select-arrow-down-icon'));

  // Try to click on the select
  try {
    await user.click(nativeSelect);
  } catch (e) {
    // May fail due to disabled state, which is expected
  }

  // Arrow should still be down (not changed to up)
  t.truthy(getByTestId('select-arrow-down-icon'));

  // onChange should not have been called
  t.false(onChangeCalled);

  // Try to change value
  try {
    await user.selectOptions(nativeSelect, 'Pouet3');
  } catch (e) {
    // Expected to fail due to disabled state
  }

  // onChange should still not have been called
  t.false(onChangeCalled);

  unmount();
});
