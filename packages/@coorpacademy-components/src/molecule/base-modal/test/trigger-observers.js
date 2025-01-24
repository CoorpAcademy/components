import test from 'ava';
import browserEnv from 'browser-env';
import delay from 'delay';
import React from 'react';
import {fireEvent} from '@testing-library/react';
import {renderWithContext} from '../../../util/render-with-context';
import BaseModal from '..';
import props from './fixtures/default-with-detectable-displayed-scrollbar';

const {props: internalProps} = props;
browserEnv();

test('should handle window resize and mutation observer', async t => {
  class MockedResizeObserver {
    constructor(callback) {
      this.callback = callback;
    }

    observe = () => {
      this.callback([{contentRect: {width: 100, height: 100}}]);
      t.pass();
    };

    unobserve = () => {};

    disconnect = () => {};
  }

  class MockedMutationObserver {
    constructor(callback) {
      this.callback = callback;
    }

    observe = () => {
      this.callback([{type: 'childList'}]);
      t.pass();
    };

    disconnect = () => {};
  }

  global.ResizeObserver = MockedResizeObserver;

  Object.defineProperty(global, 'MutationObserver', {
    value: MockedMutationObserver,
    writable: true,
    configurable: true
  });

  const context = {
    translate: key => key
  };

  t.plan(2);

  const {container, getByTestId, unmount} = renderWithContext(
    <BaseModal {...internalProps} />,
    context
  );
  const modalBody = getByTestId('modal-body');

  // Trigger MutationObserver
  modalBody.append(document.createElement('div'));

  // Trigger ResizeObserver
  fireEvent.resize(container);

  await delay(200);

  unmount();
});
