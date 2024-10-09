import test from 'ava';
import browserEnv from 'browser-env';
import forEach from 'lodash/fp/forEach';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import InputDoubleStep from '..';
import inputConfirmFixture from './fixtures/input-confirm';

browserEnv();

const checkElement = (elementsToCheck, container, t) => {
  forEach(([elementToCheck, shouldBePresent]) => {
    const element = container.querySelector(elementToCheck);
    shouldBePresent ? t.truthy(element) : t.falsy(element);
  }, elementsToCheck);
};

test('should call the onChange function on change with inputConfirm fixture', t => {
  const deleteEl = '[data-testid="confirm-delete-button"]';
  const inputEl = '[data-testid="input"]';
  const cancelEl = '[data-testid="cancel-confirmation-button"]';
  const toggleEl = '[data-testid="input-toggle-button"]';

  t.plan(17);
  const onClick = () => {
    t.pass();
  };
  const {container} = render(<InputDoubleStep {...inputConfirmFixture.props} onClick={onClick} />);

  const elementsToCheckPreClick = [
    [deleteEl, false],
    [inputEl, false],
    [cancelEl, false],
    [toggleEl, true]
  ];

  checkElement(elementsToCheckPreClick, container, t);

  container.querySelector(toggleEl);

  fireEvent.click(container.querySelector(toggleEl));

  const elementsToCheckPostClick = [
    [deleteEl, true],
    [inputEl, true],
    [cancelEl, true],
    [toggleEl, false]
  ];

  checkElement(elementsToCheckPostClick, container, t);

  fireEvent.click(container.querySelector(cancelEl));

  checkElement(elementsToCheckPreClick, container, t);

  fireEvent.click(container.querySelector(toggleEl));

  checkElement(elementsToCheckPostClick, container, t);

  fireEvent.click(container.querySelector(deleteEl), {
    defaultPrevented: true
  });
});
