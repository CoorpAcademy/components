import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react';
import ReviewPresentation from '..';
import defaultFixture from './fixtures/default';

browserEnv();

test.after(cleanup);

test('should hide and show toolTip depending on key press event', t => {
  const toolTipTestId = '[data-testid="tooltip"]';
  const {getByTestId, container} = render(<ReviewPresentation {...defaultFixture.props} />);
  const skillsDiv = getByTestId('review-list-item-tooltip-button-questions');
  t.truthy(skillsDiv);
  fireEvent.mouseEnter(skillsDiv);
  let toolTipDiv = container.querySelector(toolTipTestId);
  t.truthy(toolTipDiv);
  fireEvent.keyDown(skillsDiv, {key: 'Escape'});
  toolTipDiv = container.querySelector(toolTipTestId);
  t.falsy(toolTipDiv);
  fireEvent.keyDown(skillsDiv, {key: 'A'});
  toolTipDiv = container.querySelector(toolTipTestId);
  t.falsy(toolTipDiv);
  fireEvent.keyDown(skillsDiv, {key: 'Enter'});
  toolTipDiv = container.querySelector(toolTipTestId);
  t.truthy(toolTipDiv);
  fireEvent.keyDown(skillsDiv, {key: 'Tab'});
  toolTipDiv = container.querySelector(toolTipTestId);
  t.falsy(toolTipDiv);
});
