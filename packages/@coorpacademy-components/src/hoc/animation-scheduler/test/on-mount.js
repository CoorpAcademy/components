import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render} from '@testing-library/react';
import PropTypes from 'prop-types';
import {noop} from 'lodash/fp';
import AnimationScheduler, {AnimationAdapter} from '..';

browserEnv({pretendToBeVisual: true});

const nextFrame = () => new Promise(requestAnimationFrame);

class AnimatedComponent extends React.Component {
  static propTypes = {
    animated: PropTypes.bool,
    onAnimationEnd: PropTypes.func
  };

  componentDidMount() {
    const {animated = false, onAnimationEnd = noop} = this.props;
    requestAnimationFrame(() => {
      if (animated) onAnimationEnd();
    });
  }

  componentDidUpdate(prevProps) {
    const {animated: nextAnimated = false, onAnimationEnd = noop} = this.props;
    const {animated = false} = prevProps;
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
  const Multi = ({animated}) => (
    <AnimationScheduler animated={animated}>
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

  Multi.propTypes = {animated: PropTypes.bool};
  const {container, rerender} = render(<Multi />);

  t.is(container.innerHTML, '<li><ul>false</ul><ul>false</ul></li>');

  rerender(<Multi animated />);

  t.is(container.innerHTML, '<li><ul>true</ul><ul>true</ul></li>');
});

test('should wait dependencies before start', async t => {
  const Multi = ({animated}) => (
    <AnimationScheduler animated={animated}>
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

  Multi.propTypes = {animated: PropTypes.bool};

  const {container, rerender} = render(<Multi />);
  t.is(container.innerHTML, '<li><ul>false</ul><ul>false</ul><ul>false</ul><ul>false</ul></li>');

  rerender(<Multi animated />);
  t.is(container.innerHTML, '<li><ul>true</ul><ul>false</ul><ul>false</ul><ul>false</ul></li>');

  await nextFrame();
  t.is(container.innerHTML, '<li><ul>true</ul><ul>true</ul><ul>true</ul><ul>false</ul></li>');

  await nextFrame();
  t.is(container.innerHTML, '<li><ul>true</ul><ul>true</ul><ul>true</ul><ul>true</ul></li>');
});

test('should ignore text child', t => {
  const {container} = render(<AnimationScheduler>foo</AnimationScheduler>);
  t.is(container.innerHTML, 'foo');
});

test('AnimationAdapter should call onAnimationEnd', t => {
  return t.notThrowsAsync(
    new Promise(resolve => {
      render(
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
    render(
      <AnimationAdapter name="animation">
        <AnimatedComponent />
      </AnimationAdapter>
    )
  );
});
