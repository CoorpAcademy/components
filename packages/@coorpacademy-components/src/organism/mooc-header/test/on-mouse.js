import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {fireEvent, cleanup} from '@testing-library/react';
import MoocHeader from '..';
import {renderWithContext} from '../../../util/render-with-context';
import defaultFixture from './fixtures/default';

browserEnv();

test.after(cleanup);

test('should hide toolTip depending on mouse leave event on the logo header', t => {
  const toolTipTestId = '[data-testid="home-tooltip"]';
  const {getByTestId, container} = renderWithContext(<MoocHeader {...defaultFixture.props} />);
  const LogoDiv = getByTestId('brand-logo');
  t.truthy(LogoDiv);
  fireEvent.mouseEnter(LogoDiv);
  let toolTipDiv = container.querySelector(toolTipTestId);
  t.truthy(toolTipDiv);
  fireEvent.mouseLeave(LogoDiv);
  toolTipDiv = container.querySelector(toolTipTestId);
  t.falsy(toolTipDiv);
});
test('should handle mouse enter and leave events on item more', t => {
  const itemMoreSelector = '[data-name="item-more"]';
  const {container} = renderWithContext(<MoocHeader {...defaultFixture.props} />);
  const itemMoreDiv = container.querySelector(itemMoreSelector);
  t.truthy(itemMoreDiv);
  fireEvent.mouseEnter(itemMoreDiv);
  fireEvent.mouseLeave(itemMoreDiv);
});
