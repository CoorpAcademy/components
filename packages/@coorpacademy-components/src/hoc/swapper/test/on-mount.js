import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render} from '@testing-library/react';
import Swapper, {safeCancelAnimationFrame} from '..';

browserEnv({pretendToBeVisual: true});

const nextFrame = () => new Promise(requestAnimationFrame);

const TestApp = () => (
  <Swapper data-selected data-more={42}>
    <div data-selected={false} data-name="test" />
  </Swapper>
);

test('should not crash if trying to cancel animation frame without requestId', t => {
  return t.notThrows(safeCancelAnimationFrame);
});

test('should cancel animation frame callback', async t => {
  t.plan(1);

  let requestId = requestAnimationFrame(() => t.pass());

  await nextFrame();

  requestId = requestAnimationFrame(() => t.pass());
  safeCancelAnimationFrame(requestId);

  await nextFrame();
});

test('should not apply new props before next frame', t => {
  const {unmount, container} = render(<TestApp />);
  t.is(container.innerHTML, '<div data-selected="true" data-name="test" data-more="42"></div>');
  unmount();
});

test('should apply new props after next frame', async t => {
  const {container} = render(<TestApp />);
  await nextFrame();
  t.is(container.innerHTML, '<div data-selected="false" data-name="test"></div>');
});
