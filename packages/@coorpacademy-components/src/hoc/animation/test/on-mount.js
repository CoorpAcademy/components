import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import _toString from 'lodash/fp/toString';
import Animation, {LINEAR} from '..';

browserEnv({pretendToBeVisual: true});
configure({adapter: new Adapter()});

const nextFrame = () => new Promise(requestAnimationFrame);

test('should increase progression each frame', async t => {
  const wrapper = shallow(
    <Animation name="test" bezier={LINEAR} duration={1000}>
      {_toString}
    </Animation>
  );

  t.deepEqual(wrapper.text(), '0');

  await nextFrame();
  wrapper.update();

  t.deepEqual(wrapper.text(), '0');

  // Start
  wrapper.setProps({
    animated: true
  });
  await nextFrame();
  await nextFrame();
  wrapper.update();

  const firstFrameValue = LINEAR(wrapper.state('progress'));
  t.deepEqual(wrapper.text(), _toString(firstFrameValue));

  await nextFrame();
  wrapper.update();

  const secondFrameValue = LINEAR(wrapper.state('progress'));
  t.deepEqual(wrapper.text(), _toString(secondFrameValue));
  t.true(firstFrameValue < secondFrameValue);

  // Pause
  wrapper.setProps({
    animated: false
  });
  await nextFrame();
  wrapper.update();

  const thirdFrameValue = LINEAR(wrapper.state('progress'));
  t.deepEqual(wrapper.text(), _toString(thirdFrameValue));
  t.deepEqual(secondFrameValue, thirdFrameValue);

  wrapper.unmount();
});

test('should start and stop on receive props', async t => {
  const wrapper = shallow(
    <Animation name="test" bezier={LINEAR} duration={1000} animated>
      {_toString}
    </Animation>
  );

  t.deepEqual(wrapper.text(), '0');

  await nextFrame();
  await nextFrame();
  wrapper.update();

  const firstFrameValue = LINEAR(wrapper.state('progress'));
  t.true(firstFrameValue > 0);
  t.deepEqual(wrapper.text(), _toString(firstFrameValue));

  wrapper.setProps({});
  await nextFrame();
  wrapper.update();

  const secondFrameValue = LINEAR(wrapper.state('progress'));
  t.true(secondFrameValue > firstFrameValue);
  t.deepEqual(wrapper.text(), _toString(secondFrameValue));

  wrapper.setProps({animated: undefined});
  await nextFrame();
  wrapper.update();

  const thirdFrameValue = LINEAR(wrapper.state('progress'));
  t.deepEqual(thirdFrameValue, secondFrameValue);
  t.deepEqual(wrapper.text(), _toString(thirdFrameValue));

  wrapper.setProps({});
  await nextFrame();
  wrapper.update();

  const fourthFrameValue = LINEAR(wrapper.state('progress'));
  t.deepEqual(fourthFrameValue, thirdFrameValue);
  t.deepEqual(wrapper.text(), _toString(fourthFrameValue));

  wrapper.setProps({animated: true});
  await nextFrame();

  wrapper.unmount();
});

test('should call onAnimationEnd', async t => {
  const wrapper = shallow(
    <Animation name="test" bezier={LINEAR} duration={1} animated>
      {_toString}
    </Animation>
  );

  const name = await new Promise(resolve => {
    wrapper.setProps({
      onAnimationEnd: resolve
    });
  });

  t.deepEqual(name, 'test');

  const wrapperWithoutHandler = shallow(
    <Animation name="test" bezier={LINEAR} duration={1} animated>
      {_toString}
    </Animation>
  );

  await nextFrame();
  await nextFrame();

  const firstFrameValue = LINEAR(wrapperWithoutHandler.state('progress'));
  t.deepEqual(firstFrameValue, 1);
});
