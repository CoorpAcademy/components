import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react';
import ReviewPresentation from '..';
import defaultFixture from './fixtures/default';

browserEnv();

test.after(cleanup);

test('should hide toolTip depending on mouse leave event', t => {
  const toolTipTestId = '[data-testid="review-presentation-tooltip"]';
  const {container} = render(<ReviewPresentation {...defaultFixture.props} />);
  const skillsDiv = container.querySelector(
    '[data-testid="review-list-item-tooltip-button-skills"]'
  );
  t.truthy(skillsDiv);
  fireEvent.mouseEnter(skillsDiv);
  let toolTipDiv = container.querySelector(toolTipTestId);
  t.truthy(toolTipDiv);
  fireEvent.mouseLeave(skillsDiv);
  toolTipDiv = container.querySelector(toolTipTestId);
  t.falsy(toolTipDiv);
});
