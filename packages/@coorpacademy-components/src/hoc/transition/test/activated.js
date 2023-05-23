import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {render} from '@testing-library/react';
import {noop} from 'lodash/fp';
import Transition from '..';

browserEnv();

class CSSTransitionFaker extends React.Component {
  static propTypes = {
    onTransitionEnd: PropTypes.func,
    className: PropTypes.string
  };

  componentDidMount() {
    const {onTransitionEnd = noop} = this.props;
    onTransitionEnd();
  }

  render() {
    const {className} = this.props;

    return <div className={classnames('base', className)} />;
  }
}

test('should be able to activate a transition without listening for the end event', t => {
  const {container} = render(
    <Transition name="foo" animated className="animated">
      <CSSTransitionFaker />
    </Transition>
  );

  t.is(container.innerHTML, '<div class="base animated"></div>');
});

test('should not apply transition class name if animated is false', t => {
  t.plan(1);

  const handleAnimationEnd = () => t.fail();
  const {container} = render(
    <Transition
      name="foo"
      onAnimationEnd={handleAnimationEnd}
      animated={false}
      className="animated"
    >
      <CSSTransitionFaker />
    </Transition>
  );

  t.is(container.innerHTML, '<div class="base"></div>');
});

test('should apply transition class name if animated is true', t => {
  t.plan(2);

  const handleAnimationEnd = name => t.is(name, 'foo');
  const {container} = render(
    <Transition name="foo" onAnimationEnd={handleAnimationEnd} animated className="animated">
      <CSSTransitionFaker />
    </Transition>
  );

  t.is(container.innerHTML, '<div class="base animated"></div>');
});
