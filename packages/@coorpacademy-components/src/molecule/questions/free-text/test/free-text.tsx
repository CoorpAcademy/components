import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import delay from 'delay';
import {fireEvent, render} from '@testing-library/react';
import {renderWithContext} from '../../../../util/render-with-context';
import FreeText from '..';
import defaultFixture from './fixtures/default';
import withValueFixture from './fixtures/with-value';
import withValueOnChangeFixture from './fixtures/with-value-on-change';

browserEnv();

test('onInput should be reachable and replace onChange, onChange should not trigger value changes, should use aria-label', async t => {
  t.plan(6);
  let onInputWasTriggered = false;
  const props = {
    ...withValueOnChangeFixture.props,
    onChange: (value: string) => {
      onInputWasTriggered = true;
      t.is(value, 'new value');
    }
  };
  const {container} = renderWithContext(<FreeText {...props} />);
  const freeText = container.querySelector('[data-name="free-text-input"]') as Element;
  t.truthy(freeText);
  t.is(freeText.getAttribute('aria-label'), 'aria input');

  // should not trigger a value change with onChange
  fireEvent.change(freeText, {target: {value: 'new value'}});
  await delay(500);
  // should not update the trigger flag with onChange
  t.false(onInputWasTriggered);
  fireEvent.input(freeText, {target: {value: 'new value'}});
  await delay(500);
  t.true(onInputWasTriggered);
  t.pass();
});

test('should set: boxShadow (hover & not hovered variants) && color for the input if a value is provided', async t => {
  t.plan(11);
  const {container} = render(<FreeText {...withValueFixture.props} />);
  const freeTextWrapper = container.querySelector('[data-name="freeText"]') as HTMLElement;
  t.truthy(freeTextWrapper);
  t.is(freeTextWrapper.style.boxShadow, '0 4px 16px rgba(0, 176, 255, 0.12)');

  const freeText = container.querySelector('[data-name="free-text-input"]') as HTMLInputElement;
  t.truthy(freeText);
  t.is(freeText.value, 'plop!');
  t.is(freeTextWrapper.style.boxShadow, '0 4px 16px rgba(0, 176, 255, 0.12)');

  fireEvent.mouseOver(freeTextWrapper);
  await delay(500);

  // hovered
  t.is(freeText.style.color, 'rgb(0, 176, 255)');
  t.is(freeText.style.boxShadow, '0 4px 16px rgba(0, 176, 255, 0.2)');
  t.is(freeTextWrapper.style.boxShadow, 'none');

  fireEvent.mouseLeave(freeTextWrapper);
  await delay(500);

  t.is(freeText.style.color, 'rgb(0, 176, 255)');
  t.is(freeText.style.boxShadow, '0 4px 16px rgba(0, 176, 255, 0.12)');

  t.pass();
});

test('should use value as default aria-label if no aria-label is provided', t => {
  t.plan(3);
  const {container} = render(<FreeText {...withValueFixture.props} />);
  const freeText = container.querySelector('[data-name="free-text-input"]') as Element;
  t.truthy(freeText);
  t.is(freeText.getAttribute('aria-label'), 'plop!');
  t.pass();
});

test('should use placeholder as default aria-label if no aria-label is provided and no value is present', t => {
  t.plan(3);
  const {container} = render(<FreeText {...defaultFixture.props} />);
  const freeText = container.querySelector('[data-name="free-text-input"]') as Element;
  t.truthy(freeText);
  t.is(freeText.getAttribute('aria-label'), 'Type your answer here');
  t.pass();
});
