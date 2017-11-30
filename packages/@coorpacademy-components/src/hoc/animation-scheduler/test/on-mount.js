import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import noop from 'lodash/fp/noop';
import AnimationScheduler, {AnimationAdapter} from '..';

browserEnv({pretendToBeVisual: true});
configure({adapter: new Adapter()});

const nextFrame = () => new Promise(requestAnimationFrame);

class AnimatedComponent extends React.Component {
  componentDidMount() {
    const {animated = false, onAnimationEnd = noop} = this.props;
    requestAnimationFrame(() => {
      if (animated) onAnimationEnd();
    });
  }
  componentWillReceiveProps(nextProps) {
    const {animated: nextAnimated = false, onAnimationEnd = noop} = nextProps;
    const {animated = false} = this.props;
    requestAnimationFrame(() => {
      if (nextAnimated && animated !== nextAnimated) onAnimationEnd();
    });
  }
  render() {
    const {animated = false} = this.props;
    return <ul>{`${animated}`}</ul>;
  }
}

test('should schedule multi', t => {
  const wrapper = mount(
    <AnimationScheduler>
      <li>
        <AnimationAdapter name="first">
          <AnimatedComponent />
        </AnimationAdapter>
        <AnimationAdapter name="second">
          <AnimatedComponent />
        </AnimationAdapter>
      </li>
    </AnimationScheduler>
  );

  t.deepEqual(wrapper.html(), '<li><ul>false</ul><ul>false</ul></li>');

  wrapper.setProps({
    animated: true
  });
  wrapper.update();

  t.deepEqual(wrapper.html(), '<li><ul>true</ul><ul>true</ul></li>');
});

test('should wait dependencies before start', async t => {
  const wrapper = mount(
    <AnimationScheduler>
      <li>
        <AnimationAdapter name="first">
          <AnimatedComponent />
        </AnimationAdapter>
        <AnimationAdapter name="second" after="first">
          <AnimatedComponent />
        </AnimationAdapter>
        <AnimationAdapter name="secondPrime" after="first">
          <AnimatedComponent />
        </AnimationAdapter>
        <AnimationAdapter name="third" after={['second', 'secondPrime']}>
          <AnimatedComponent />
        </AnimationAdapter>
      </li>
    </AnimationScheduler>
  );

  t.deepEqual(wrapper.html(), '<li><ul>false</ul><ul>false</ul><ul>false</ul><ul>false</ul></li>');

  wrapper.setProps({
    animated: true
  });
  wrapper.update();

  t.deepEqual(wrapper.html(), '<li><ul>true</ul><ul>false</ul><ul>false</ul><ul>false</ul></li>');

  await nextFrame();
  wrapper.update();

  t.deepEqual(wrapper.html(), '<li><ul>true</ul><ul>true</ul><ul>true</ul><ul>false</ul></li>');

  await nextFrame();
  wrapper.update();

  t.deepEqual(wrapper.html(), '<li><ul>true</ul><ul>true</ul><ul>true</ul><ul>true</ul></li>');
});

test('should ignore text child', t => {
  const wrapper = mount(<AnimationScheduler>foo</AnimationScheduler>);
  t.deepEqual(wrapper.text(), 'foo');
});

test('AnimationAdapter should call onAnimationEnd', t => {
  return t.notThrows(
    new Promise(resolve => {
      mount(
        <AnimationScheduler animated>
          <AnimationAdapter name="animation" onAnimationEnd={resolve}>
            <AnimatedComponent />
          </AnimationAdapter>
        </AnimationScheduler>
      );
    })
  );
});

test('AnimationAdapter should accept name property', t => {
  return t.notThrows(() =>
    shallow(
      <AnimationAdapter name="animation">
        <AnimatedComponent />
      </AnimationAdapter>
    )
  );
});
