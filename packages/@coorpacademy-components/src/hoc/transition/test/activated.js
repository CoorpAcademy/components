import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import classnames from 'classnames';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import noop from 'lodash/fp/noop';
import Transition from '..';

configure({adapter: new Adapter()});

class CSSTransitionFaker extends React.Component {
  componentDidMount() {
    const {onTransitionEnd = noop} = this.props;
    onTransitionEnd();
  }

  render() {
    const {className} = this.props;

    return <div className={classnames('base', className)} />;
  }
}

class CSSAnimationFaker extends React.Component {
  componentDidMount() {
    const {onAnimationEnd = noop} = this.props;
    onAnimationEnd();
  }

  render() {
    const {className} = this.props;

    return <div className={classnames('base', className)} />;
  }
}

test('should be able to activate a transition without listening for the end event', t => {
  t.plan(1);

  const wrapper = mount(
    <Transition name="foo" animated className="animated">
      <CSSTransitionFaker />
    </Transition>
  );

  t.is(wrapper.find('div').props().className, 'base animated');
});

test('should not apply transition class name if animated is false', t => {
  t.plan(1);

  const handleAnimationEnd = () => t.pass();
  const wrapper = mount(
    <Transition
      name="foo"
      onAnimationEnd={handleAnimationEnd}
      animated={false}
      className="animated"
    >
      <CSSTransitionFaker />
    </Transition>
  );

  t.is(wrapper.find('div').props().className, 'base');
});

test('should apply transition class name if animated is true', t => {
  t.plan(2);

  const handleAnimationEnd = name => t.is(name, 'foo');
  const wrapper = mount(
    <Transition name="foo" onAnimationEnd={handleAnimationEnd} animated className="animated">
      <CSSTransitionFaker />
    </Transition>
  );

  t.is(wrapper.find('div').props().className, 'base animated');
});

test('should not apply animation class name if animated is false', t => {
  t.plan(1);

  const handleAnimationEnd = () => t.pass();
  const wrapper = mount(
    <Transition
      name="foo"
      onAnimationEnd={handleAnimationEnd}
      animated={false}
      className="animated"
    >
      <CSSAnimationFaker />
    </Transition>
  );

  t.is(wrapper.find('div').props().className, 'base');
});

test('should apply animation class name if animated is true', t => {
  t.plan(2);

  const handleAnimationEnd = name => t.is(name, 'foo');
  const wrapper = mount(
    <Transition name="foo" onAnimationEnd={handleAnimationEnd} animated className="animated">
      <CSSAnimationFaker />
    </Transition>
  );

  t.is(wrapper.find('div').props().className, 'base animated');
});
