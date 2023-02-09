import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import delay from 'delay';
import {render, fireEvent, cleanup} from '@testing-library/react';
import ReviewPresentation from '..';
import defaultFixture from './fixtures/default';

browserEnv();

test.after(cleanup);

test('should hide toolTip depending on mouse leave event', async t => {
  const toolTipTestId = '[data-testid="tooltip"]';
  const {container} = render(<ReviewPresentation {...defaultFixture.props} />);
  const skillsDiv = container.querySelector(
    '[data-testid="review-list-item-tooltip-button-skills"]'
  );
  t.truthy(skillsDiv);
  fireEvent.mouseEnter(skillsDiv);
  fireEvent.mouseOver(skillsDiv);
  let toolTipDiv = container.querySelector(toolTipTestId);
  t.truthy(toolTipDiv);
  fireEvent.mouseEnter(toolTipDiv);
  fireEvent.mouseOver(toolTipDiv);
  fireEvent.mouseLeave(skillsDiv);
  fireEvent.mouseOver(skillsDiv);
  fireEvent.mouseLeave(skillsDiv);
  await delay(1000);
  toolTipDiv = container.querySelector(toolTipTestId);
  t.falsy(toolTipDiv);
});
