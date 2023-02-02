import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import delay from 'delay';
import {fireEvent, cleanup} from '@testing-library/react';
import {renderWithContext} from '../../../util/render-with-context';
import StarsSummary from '../stars-summary';
import defaultFixture from './fixtures/all-engines';

browserEnv();

test.after(cleanup);

test('should hide and show toolTip depending on key press event', async t => {
  const props = {
    engines: defaultFixture.props.engines,
    total: defaultFixture.props.total
  };

  const {container} = renderWithContext(<StarsSummary {...props} />);

  const reactToolTipContent =
    '[data-testid="engine-stars-microlearning"] div [data-testid="react-tooltip-content"]';

  const microlearningButton = container.querySelector('[data-testid="engine-stars-microlearning"]');
  t.truthy(microlearningButton);

  fireEvent.mouseEnter(microlearningButton);
  let reactToolTip = container.querySelector(reactToolTipContent);
  t.truthy(reactToolTip);

  fireEvent.mouseOver(reactToolTip);
  fireEvent.mouseLeave(reactToolTip);
  fireEvent.mouseLeave(microlearningButton);
  await delay(500);

  reactToolTip = container.querySelector(reactToolTipContent);
  t.falsy(reactToolTip);

  fireEvent.mouseEnter(microlearningButton);
  fireEvent.keyDown(microlearningButton, {key: 'Escape'});
  reactToolTip = container.querySelector(reactToolTipContent);
  t.falsy(reactToolTip);

  fireEvent.keyDown(microlearningButton, {key: 'A'});
  reactToolTip = container.querySelector(reactToolTipContent);
  t.falsy(reactToolTip);

  fireEvent.keyDown(microlearningButton, {key: 'Enter'});
  reactToolTip = container.querySelector(reactToolTipContent);
  t.truthy(reactToolTip);

  fireEvent.keyDown(microlearningButton, {key: 'Tab'});
  reactToolTip = container.querySelector(reactToolTipContent);
  t.falsy(reactToolTip);
});
