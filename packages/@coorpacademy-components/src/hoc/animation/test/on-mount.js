import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render} from '@testing-library/react';
import {toString as _toString} from 'lodash/fp';
import Animation, {LINEAR} from '..';

browserEnv({pretendToBeVisual: true});

const nextFrame = () => new Promise(requestAnimationFrame);

test('should increase progression each frame', async t => {
  const {unmount, container, rerender} = render(
    <Animation name="test" bezier={LINEAR} duration={1000}>
      {_toString}
    </Animation>
  );

  const initialValue = Number.parseFloat(container.innerHTML);
  t.is(initialValue, 0);

  await rerender(
    <Animation name="test" bezier={LINEAR} duration={1000}>
      {_toString}
    </Animation>
  );

  // Start
  await rerender(
    <Animation animated name="test" bezier={LINEAR} duration={1000}>
      {_toString}
    </Animation>
  );

  await nextFrame();
  await nextFrame();

  const firstFrameValue = Number.parseFloat(container.innerHTML);
  t.true(firstFrameValue > 0);

  await nextFrame();

  const secondFrameValue = Number.parseFloat(container.innerHTML);
  t.true(firstFrameValue < secondFrameValue);

  // Pause
  await rerender(
    <Animation name="test" bezier={LINEAR} duration={1000}>
      {_toString}
    </Animation>
  );

  await nextFrame();

  const thirdFrameValue = Number.parseFloat(container.innerHTML);
  t.deepEqual(secondFrameValue, thirdFrameValue);

  unmount();
});

test('should start and stop on receive props', async t => {
  const {container, rerender} = render(
    <Animation name="test" bezier={LINEAR} duration={1000} animated>
      {_toString}
    </Animation>
  );

  const initialValue = Number.parseFloat(container.innerHTML);
  t.is(initialValue, 0);

  await nextFrame();
  await nextFrame();

  const firstFrameValue = Number.parseFloat(container.innerHTML);
  t.true(firstFrameValue > 0);

  await rerender(
    <Animation name="test" bezier={LINEAR} duration={1000} animated>
      {_toString}
    </Animation>
  );
  await nextFrame();

  const secondFrameValue = Number.parseFloat(container.innerHTML);
  t.true(secondFrameValue > firstFrameValue);

  await rerender(
    <Animation name="test" bezier={LINEAR} duration={1000}>
      {_toString}
    </Animation>
  );
  await nextFrame();

  const thirdFrameValue = Number.parseFloat(container.innerHTML);
  t.deepEqual(thirdFrameValue, secondFrameValue);

  await rerender(
    <Animation name="test" bezier={LINEAR} duration={1000}>
      {_toString}
    </Animation>
  );
  await nextFrame();

  const fourthFrameValue = Number.parseFloat(container.innerHTML);
  t.deepEqual(fourthFrameValue, thirdFrameValue);

  await rerender(
    <Animation name="test" bezier={LINEAR} duration={1000} animated>
      {_toString}
    </Animation>
  );
  await nextFrame();
  await nextFrame();

  const fifthFrameValue = Number.parseFloat(container.innerHTML);
  t.true(fifthFrameValue > fourthFrameValue);
});

test('should call onAnimationEnd', async t => {
  const {container, rerender} = render(
    <Animation name="test" bezier={LINEAR} duration={1} animated>
      {_toString}
    </Animation>
  );

  const name = await new Promise(resolve => {
    rerender(
      <Animation name="test" bezier={LINEAR} duration={1} animated onAnimationEnd={resolve}>
        {_toString}
      </Animation>
    );
  });

  t.is(name, 'test');

  rerender(
    <Animation name="test" bezier={LINEAR} duration={1} animated>
      {_toString}
    </Animation>
  );

  await nextFrame();
  await nextFrame();

  const firstFrameValue = Number.parseFloat(container.innerHTML);
  t.is(firstFrameValue, 1);
});
