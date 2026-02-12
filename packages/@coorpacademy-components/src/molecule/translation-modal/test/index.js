import test from 'ava';
import browserEnv from 'browser-env';
import delay from 'delay';
import React from 'react';
import {fireEvent} from '@testing-library/react';
import {noop} from 'lodash/fp';
import TranslationModal from '..';
import {renderWithContext} from '../../../util/render-with-context';
import props from './fixtures/default';

const {props: internalProps} = props;
browserEnv();
global.ResizeObserver = class MockedResizeObserver {
  observe = () => noop(null);

  unobserve = () => noop(null);

  disconnect = () => noop(null);
};
test('should call onCancel when cancel button is clicked', t => {
  const context = {
    translate: key => {
      return key;
    }
  };
  t.plan(1);

  const {container} = renderWithContext(
    <TranslationModal {...internalProps} onCancel={() => t.pass()} />,
    context
  );
  const cancelButton = container.querySelector("[aria-label='__cancel']");
  fireEvent.click(cancelButton);
});

test('should call onClose when close button is clicked', t => {
  const context = {
    translate: key => {
      return key;
    }
  };
  t.plan(1);

  const {container} = renderWithContext(
    <TranslationModal {...internalProps} onClose={() => t.pass()} />,
    context
  );
  const closeButton = container.querySelector("[data-testid='close-icon']");
  fireEvent.click(closeButton);
});

test('should call onConfirm with selected icon when confirm button is clicked', t => {
  const context = {
    translate: key => {
      return key;
    }
  };
  t.plan(1);

  const {container} = renderWithContext(
    <TranslationModal {...internalProps} onConfirm={() => t.pass()} />,
    context
  );

  const confirmButton = container.querySelector("[aria-label='__confirm']");
  fireEvent.click(confirmButton);
});

test('should render null when isOpen is false', t => {
  const context = {
    translate: key => {
      return key;
    }
  };

  const {container} = renderWithContext(
    <TranslationModal {...internalProps} isOpen={false} />,
    context
  );

  t.is(container.innerHTML, '');
});

test('should call handleInputChange on input change', async t => {
  const context = {
    translate: key => {
      return key;
    }
  };
  t.plan(3);

  const onChange = value => {
    t.is(value, 'banana');
  };
  const customProps = {
    ...internalProps,
    target: {
      ...internalProps.target,
      inputText: {
        ...internalProps.target.inputText,
        onChange
      }
    }
  };

  const {container} = renderWithContext(<TranslationModal {...customProps} />, context);

  const textInput = container.querySelectorAll('[data-name="input-text"]')[1];
  t.truthy(textInput);
  fireEvent.input(textInput, {target: {value: 'banana'}});
  await delay(500);
  t.is(textInput.value, internalProps.target.inputText.value);
});

test('should call handleTextAreaChange on textarea change', async t => {
  const context = {
    translate: key => {
      return key;
    }
  };
  t.plan(3);

  const onChange = value => {
    t.is(value, 'banana');
  };
  const customProps = {
    ...internalProps,
    target: {
      ...internalProps.target,
      textArea: {
        ...internalProps.target.textArea,
        onChange
      }
    }
  };

  const {container} = renderWithContext(<TranslationModal {...customProps} />, context);

  const textArea = container.querySelector('[data-testid="Description target"]');
  t.truthy(textArea);
  fireEvent.change(textArea, {target: {value: 'banana'}});
  await delay(500);
  t.is(textArea.value, internalProps.target.textArea.value);
});
