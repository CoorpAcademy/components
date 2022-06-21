import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Swapper, {safeCancelAnimationFrame} from '..';

browserEnv({pretendToBeVisual: true});
configure({adapter: new Adapter()});

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
  const wrapper = mount(<TestApp />);
  const props = wrapper.find('div').props();

  wrapper.unmount();

  t.deepEqual(props, {
    'data-name': 'test',
    'data-selected': true,
    'data-more': 42
  });
});

test('should apply new props after next frame', async t => {
  const wrapper = mount(<TestApp />);

  await nextFrame();
  wrapper.update();

  const props = wrapper.find('div').props();

  wrapper.unmount();

  return t.deepEqual(props, {
    'data-name': 'test',
    'data-selected': false
  });
});
